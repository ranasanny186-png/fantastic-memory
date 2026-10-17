/* Local practice continuity, question reports, and transparent topic statistics. */
const baseNormalizeProgress = normalize;
normalize = function(raw) {
  const result = baseNormalizeProgress(raw);
  result.questionStats = {};
  if (raw?.questionStats && typeof raw.questionStats === 'object') {
    for (const [id, v] of Object.entries(raw.questionStats)) {
      if (!/^\d+$/.test(id) || !questions[id] || !v) continue;
      const count = v.count, full = v.full, points = v.points;
      if (!Number.isSafeInteger(count) || count < 1 || !Number.isSafeInteger(full) || full < 0 || full > count || !Number.isFinite(points) || points < 0 || points > count * maxPoints(questions[id]) + .001) continue;
      result.questionStats[id] = {count, full, points, lastAt: Number.isFinite(v.lastAt) ? v.lastAt : 0};
    }
  }
  // Legacy data only knows the latest result per question, never invent a full attempt history.
  for (const [id, answer] of Object.entries(result.answers)) {
    if (!result.questionStats[id]) result.questionStats[id] = {
      count: 1, full: Number(answer.correct),
      points: answer.score === null ? (answer.correct ? maxPoints(questions[id]) : 0) : Math.max(0, Math.min(maxPoints(questions[id]), answer.score)), lastAt: 0
    };
  }
  return result;
};
try { state = normalize(JSON.parse(localStorage.getItem('zhixu-v1'))); } catch { state = normalize(state); }
const baseRecordProgress = recordAnswer;
recordAnswer = function(id, response, score) {
  const s = state.questionStats[id] ||= {count: 0, full: 0, points: 0, lastAt: 0};
  s.count++; s.full += Number(score === maxPoints(questions[id])); s.points = Math.round((s.points + score) * 10) / 10; s.lastAt = Date.now();
  response.statTracked = true;
  baseRecordProgress(id, response, score);
};
function amendQuestionStats(id, oldScore, newScore, response) {
  const s = state.questionStats[id];
  if (!s || (!response.statTracked && !(s.count === 1 && s.lastAt === 0 && s.points === oldScore))) return;
  s.full += Number(newScore === maxPoints(questions[id])) - Number(oldScore === maxPoints(questions[id]));
  s.points = Math.round((s.points + newScore - oldScore) * 10) / 10;
}

let savedPractice = null, practiceSaveFailed = false;
function validPractice(raw) {
  if (!raw || !Array.isArray(raw.ids) || raw.ids.length === 0 || raw.ids.length > questions.length || new Set(raw.ids).size !== raw.ids.length || !raw.ids.every(i => Number.isInteger(i) && isActiveQuestion(questions[i]))) return null;
  if (!Number.isInteger(raw.position) || raw.position < 0 || raw.position >= raw.ids.length || !['practice', 'wrong'].includes(raw.mode) || !raw.responses || typeof raw.responses !== 'object') return null;
  return raw;
}
try { savedPractice = validPractice(JSON.parse(localStorage.getItem('zhixu-practice-v1'))); } catch {}
function savePractice() {
  if (!['practice', 'wrong'].includes(page) || !queue.length || position >= queue.length) return;
  savedPractice = {version: 1, ids: [...queue], position, responses: practiceResponses, mode, chapter, practiceType, practiceRandom, topicOnly, sessionCorrect, savedAt: Date.now()};
  try { localStorage.setItem('zhixu-practice-v1', JSON.stringify(savedPractice)); practiceSaveFailed = false; }
  catch { practiceSaveFailed = true; storageOK = false; status(); }
  const el = document.querySelector('#practice-save-status');
  if (el) el.textContent = practiceSaveFailed ? '尚未保存成功，请勿关闭此页面。可先清理浏览器存储空间后重试。' : '✓ 已保存本轮进度 · 离开后可继续';
}
function clearPractice() {
  savedPractice = null;
  try { localStorage.removeItem('zhixu-practice-v1'); practiceSaveFailed = false; } catch { practiceSaveFailed = true; }
}
function resumePractice() {
  const s = validPractice(savedPractice);
  if (!s) return;
  page = s.mode; mode = s.mode; queue = [...s.ids]; position = s.position; practiceResponses = s.responses;
  chapter = s.chapter === 'all' || chapters[Number(s.chapter)-1] ? s.chapter : 'all';
  practiceType = s.practiceType === 'all' || typeNames[s.practiceType] ? s.practiceType : 'all';
  practiceRandom = !!s.practiceRandom; topicOnly = Number.isInteger(s.topicOnly) ? s.topicOnly : null;
  sessionCorrect = Number.isInteger(s.sessionCorrect) ? s.sessionCorrect : 0;
  render(); window.scrollTo(0, 0);
}
function resumeMarkup() {
  if (!savedPractice) return '';
  return `<section class="resume-card"><div><strong>上次练习，随时接着做</strong><p class="sub">${savedPractice.mode === 'wrong' ? '错题复习' : '章节 / 专项练习'} · 第 ${savedPractice.position+1} / ${savedPractice.ids.length} 题 · 答案、计算过程与画布一并保留</p></div><button class="primary" data-resume-practice>继续上次练习 →</button></section>`;
}
const baseStartPractice = startSession;
startSession = function(ids) { baseStartPractice(ids); savePractice(); };
const baseBindResponses = bindAnswer;
bindAnswer = function(q, r, onChange, locked=false) {
  baseBindResponses(q, r, () => { onChange(); savePractice(); }, locked);
};
const basePracticeQuestion = quiz;
quiz = function() {
  if (position >= queue.length) clearPractice(); else savePractice();
  basePracticeQuestion();
  if (position >= queue.length) return;
  const id = queue[position], r = practiceResponses[id];
  const statusEl = document.createElement('p'); statusEl.id = 'practice-save-status'; statusEl.className = 'sub'; statusEl.setAttribute('role', 'status');
  document.querySelector('.quiz-top').after(statusEl);
  const self = document.querySelector('#self-score');
  if (self) { self.value = r.selfDraft ?? r.score ?? ''; self.oninput = () => { r.selfDraft = self.value; savePractice(); }; }
  document.querySelector('#exit').textContent = '保存并退出';
  addQuestionReport(id, document.querySelector('.quiz .panel'));
  savePractice();
};
const basePracticeIntro = practiceIntro;
practiceIntro = function() {
  basePracticeIntro();
  if (savedPractice) {
    document.querySelector('#app').insertAdjacentHTML('afterbegin', resumeMarkup());
    document.querySelector('[data-resume-practice]').onclick = resumePractice;
    const note = document.createElement('p'); note.className = 'sub'; note.textContent = '开始新一轮练习将替换上面的未完成练习；此前已计分的作答记录仍保留。';
    document.querySelector('#start').closest('section').append(note);
  }
};
const baseEnhancedHome = home;
home = function() {
  baseEnhancedHome();
  if (savedPractice) {
    document.querySelector('.hero').insertAdjacentHTML('afterend', resumeMarkup());
    document.querySelector('[data-resume-practice]').onclick = resumePractice;
  }
  const cta = document.createElement('section'); cta.className = 'insights-cta panel';
  const rows = topicResults(), weak = rows.filter(r => r.count >= 3 && r.rate < .7);
  cta.innerHTML = `<div><h2>下一步，练得更有针对性</h2><p class="sub">${rows.length ? `已练 ${rows.length} 个知识点 · ${weak.length} 个知识点建议优先巩固` : '完成练习后，在这里发现自己的薄弱知识点。'}</p></div><button class="secondary" id="home-insights">查看薄弱点统计 →</button>`;
  document.querySelector('.stats').after(cta); document.querySelector('#home-insights').onclick = () => navigate('insights');
};

const reportKinds = ['答案疑似有误', '题干或条件不清', '解析或参考图问题', '其他问题'];
let questionReports = [], reportsStored = true;
try { const raw = JSON.parse(localStorage.getItem('zhixu-reports-v1')); if (Array.isArray(raw)) questionReports = raw.filter(r => r && typeof r.id === 'string' && Number.isInteger(r.questionId) && questions[r.questionId] && reportKinds.includes(r.kind) && typeof r.note === 'string').slice(0, 200); } catch {}
function saveReports() { try { localStorage.setItem('zhixu-reports-v1', JSON.stringify(questionReports)); reportsStored = true; return true; } catch { reportsStored = false; return false; } }
function exportReports() {
  const records = questionReports.map(r => ({...r, questionNumber: r.questionId+1, title: questions[r.questionId].title, source: sourceText(questions[r.questionId]), type: typeNames[questions[r.questionId].type]}));
  const url = URL.createObjectURL(new Blob([JSON.stringify({version: 1, exportedAt: new Date().toISOString(), site: 'https://ranasanny186-png.github.io/fantastic-memory/', reports: records}, null, 2)], {type: 'application/json'}));
  const a = document.createElement('a'); a.href = url; a.download = '知序-题目反馈.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function reportIssueURL(r) {
  const q = questions[r.questionId];
  const body = `题号：${r.questionId+1}\n类型：${typeNames[q.type]}\n来源：${sourceText(q)}\n题目：${q.title}\n问题类型：${r.kind}\n我的说明：${r.note}\n记录编号：${r.id}`;
  return `https://github.com/ranasanny186-png/fantastic-memory/issues/new?title=${encodeURIComponent('题目反馈 #'+(r.questionId+1)+' '+r.kind)}&body=${encodeURIComponent(body)}`;
}
function addQuestionReport(id, target) {
  if (!target) return;
  const row = document.createElement('div'); row.className = 'question-report-row';
  const exists = questionReports.some(r => r.questionId === id);
  row.innerHTML = `<span class="sub">题号 #${id+1}${exists ? ' · 本机已有反馈记录' : ''}</span><button class="text-button" data-report-question="${id}">⚑ 反馈这道题</button>`;
  target.append(row); row.querySelector('button').onclick = () => openQuestionReport(id);
}
function openQuestionReport(id) {
  const q = questions[id], dialog = document.createElement('dialog'); dialog.className = 'report-dialog';
  dialog.innerHTML = `<h2>反馈题目 #${id+1}</h2><p class="report-question">${esc(q.title)}</p><div class="source">${esc(sourceText(q))}</div><label for="report-kind">问题类型</label><select id="report-kind">${reportKinds.map(k => `<option>${k}</option>`).join('')}</select><label for="report-note">你的说明（必填，最多2000字）</label><textarea id="report-note" maxlength="2000" rows="5" placeholder="例如：我算出的结果是……，怀疑这里少了一个条件。"></textarea><p class="sub">先保存在本机，不会自动发给维护者。之后可导出发给我，或在 GitHub 登录并提交。</p><div class="toolbar"><button class="primary" id="save-report">保存本机反馈</button><button class="secondary" id="cancel-report">取消</button></div><p id="report-error" role="status"></p>`;
  document.body.append(dialog); dialog.showModal();
  const close = () => { dialog.close(); dialog.remove(); };
  dialog.querySelector('#cancel-report').onclick = close; dialog.addEventListener('cancel', () => dialog.remove());
  dialog.querySelector('#save-report').onclick = () => {
    const note = dialog.querySelector('#report-note').value.trim();
    if (!note) { dialog.querySelector('#report-error').textContent = '请写下需要核对的问题，方便之后定位。'; return; }
    if (questionReports.length >= 200) { dialog.querySelector('#report-error').textContent = '本机已保存200条反馈，请先导出并清理旧记录。'; return; }
    const report = {id: Date.now()+'-'+Math.random().toString(36).slice(2,8), questionId: id, kind: dialog.querySelector('#report-kind').value, note: note.slice(0,2000), createdAt: new Date().toISOString()};
    questionReports.unshift(report);
    const ok = saveReports(); close();
    const message = document.createElement('div'); message.className = ok ? 'feedback-saved' : 'notice'; message.setAttribute('role', 'status');
    message.innerHTML = `${ok ? '反馈已保存在本机，尚未发送。' : '存储失败，反馈暂存在本页，请立即导出。'} <button class="text-button" id="open-reports">查看 / 导出反馈 →</button>`;
    app.prepend(message); message.querySelector('button').onclick = () => navigate('feedback');
  };
}
function renderFeedbackHub() {
  app.innerHTML = heading('MAKE EVERY QUESTION CLEARER', '题目反馈', '把疑问记清楚，也让题库一点点更准确。这里是本机记录，不是服务器收件箱。')+
    `<section class="panel report-intro"><h2>已记录 ${questionReports.length} 个问题</h2><p class="sub">点击“导出全部反馈”，把文件发给维护者即可核查；也可点击某条记录的 GitHub 链接，登录后手动提交。保存本机记录不会自动发送。反馈与练习进度分开存储。</p>${!reportsStored ? '<p class="notice">反馈未能写入浏览器存储，请现在导出，关闭页面后可能丢失。</p>' : ''}<button class="primary" id="export-reports" ${questionReports.length ? '' : 'disabled'}>导出全部反馈 ↓</button></section><div class="report-list">${questionReports.length ? questionReports.map(r => `<article class="panel"><div class="eyebrow">题号 #${r.questionId+1} · ${esc(r.kind)}</div><h3>${esc(questions[r.questionId].title)}</h3><p class="report-note">${esc(r.note)}</p><div class="source">${esc(sourceText(questions[r.questionId]))}<br>${esc(new Date(r.createdAt).toLocaleString('zh-CN'))} · 仅本机记录</div><div class="toolbar"><a class="secondary" href="${esc(reportIssueURL(r))}" target="_blank" rel="noopener noreferrer">在 GitHub 填写并提交 ↗</a><button class="text-button" data-remove-report="${esc(r.id)}">删除本机记录</button></div></article>`).join('') : '<div class="panel empty"><h2>还没有反馈记录</h2><p class="sub">练习题或考试交卷后的解析下方，都有“反馈这道题”入口。</p></div>'}</div>`;
  document.querySelector('#export-reports').onclick = exportReports;
  document.querySelectorAll('[data-remove-report]').forEach(b => b.onclick = () => { questionReports = questionReports.filter(r => r.id !== b.dataset.removeReport); saveReports(); renderFeedbackHub(); });
}

function topicResults() {
  const rows = new Map();
  for (const [key, s] of Object.entries(state.questionStats || {})) {
    const q = questions[key]; if (!isActiveQuestion(q)) continue;
    const row = rows.get(q.topic) || {topic: q.topic, count: 0, full: 0, points: 0, possible: 0, auto: 0, self: 0, unique: 0};
    row.count += s.count; row.full += s.full; row.points += s.points; row.possible += s.count * maxPoints(q); row.unique++;
    if (subjective(q)) row.self += s.count; else row.auto += s.count;
    rows.set(q.topic, row);
  }
  return [...rows.values()].map(r => ({...r, rate: r.full/r.count})).sort((a,b) => a.rate-b.rate || b.count-a.count || a.topic-b.topic);
}
function startTopicDrill(id) {
  page = 'practice'; chapter = String(topics[id].chapter); practiceType = 'all'; topicOnly = id;
  startSession(activeQuestionIds().filter(i => questions[i].topic === id)); render(); window.scrollTo(0,0);
}
let insightChapter = 'all';
function renderInsights() {
  const all = topicResults(), weak = all.filter(r => r.count >= 3 && r.rate < .7), samples = all.reduce((n,r) => n+r.count,0), full = all.reduce((n,r) => n+r.full,0);
  const shown = all.filter(r => insightChapter === 'all' || topics[r.topic].chapter == insightChapter);
  app.innerHTML = heading('UNDERSTAND YOUR NEXT STEP', '把薄弱点，变成下一步的方向。', '按知识点查看累计作答表现，直接进入对应专项练习。')+
    `<div class="stats"><div class="stat"><div class="stat-label">已练知识点</div><strong>${all.length}</strong><small>/ ${topics.length}</small></div><div class="stat"><div class="stat-label">建议巩固</div><strong>${weak.length}</strong><small>个知识点</small></div><div class="stat"><div class="stat-label">未练知识点</div><strong>${topics.length-all.length}</strong><small>个</small></div><div class="stat"><div class="stat-label">样本满分率</div><strong>${samples ? Math.round(full/samples*100) : '—'}</strong><small>${samples ? '%' : '暂无记录'}</small></div></div><div class="notice">旧版每题最近一次记录作为初始样本，未推测更早的历史；升级后每次作答累计统计。满分率=得满分次数÷作答次数。计算按数值评分，画图含自评；少于3次作答仅标为“样本较少”，不直接判为薄弱。</div><section class="panel weak-recommendations"><h2>优先巩固</h2>${weak.length ? `<div class="weak-chips">${weak.slice(0,6).map(r => `<button class="secondary" data-drill-topic="${r.topic}">${esc(topics[r.topic].title)} · ${Math.round(r.rate*100)}% →</button>`).join('')}</div>` : '<p class="sub">目前没有“至少3次作答且满分率低于70%”的知识点。继续练习积累样本，未练习不等于薄弱。</p>'}</section><div class="filters"><select id="insight-chapter" aria-label="统计章节"><option value="all">全部章节</option>${chapters.map((n,i) => `<option value="${i+1}" ${insightChapter==i+1 ? 'selected' : ''}>第${i+1}章 · ${n}</option>`).join('')}</select></div><div class="topic-results">${shown.length ? shown.map(r => `<article class="panel topic-result"><div><div class="eyebrow">第 ${topics[r.topic].chapter} 章 · ${r.count < 3 ? '样本较少' : r.rate < .7 ? '建议巩固' : '持续保持'}</div><h3>${esc(topics[r.topic].title)}</h3><p class="sub">${r.unique} 道题 · ${r.count} 次作答 · 自动评分 ${r.auto} 次 / 画图自评 ${r.self} 次</p><div class="track"><i style="width:${Math.round(r.rate*100)}%"></i></div></div><div class="topic-score"><strong>${Math.round(r.rate*100)}%</strong><small>满分率</small><span class="sub">${r.full} / ${r.count} 次满分</span></div><div class="topic-actions"><button class="primary" data-drill-topic="${r.topic}">专项练习 →</button><button class="text-button" data-study-topic="${r.topic}">复习知识点</button></div></article>`).join('') : '<section class="panel empty"><h2>这个范围还没有作答记录</h2><p class="sub">先做几道题，再来查看你的学习表现。</p><button class="primary" id="insight-start">去章节练习 →</button></section>'}</div>${savedPractice ? '<p class="sub">开始专项练习会替换未完成的练习；可先从首页继续上一轮。</p>' : ''}`;
  document.querySelector('#insight-chapter').onchange = e => { insightChapter = e.target.value; renderInsights(); };
  document.querySelectorAll('[data-drill-topic]').forEach(b => b.onclick = () => startTopicDrill(Number(b.dataset.drillTopic)));
  document.querySelectorAll('[data-study-topic]').forEach(b => b.onclick = () => { const id = Number(b.dataset.studyTopic); chapter = String(topics[id].chapter); search = topics[id].title; navigate('learn'); });
  const start = document.querySelector('#insight-start'); if (start) start.onclick = () => { chapter = insightChapter; navigate('practice'); };
}
const baseExamReview = examResults;
examResults = function() { baseExamReview(); addQuestionReport(currentExam.ids[examReviewIndex], document.querySelector('.review-layout > section')); };
render();
