"""Regression tests for persistent practice, honest report delivery and topic statistics."""
import json
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 pg=b.new_page(viewport={'width':1440,'height':1000});errors=[]
 pg.on('pageerror',lambda e:errors.append(str(e)))
 pg.goto('http://127.0.0.1:3040/')
 pg.evaluate("localStorage.clear();localStorage.setItem('zhixu-v1',JSON.stringify({learned:[0],answers:{0:{correct:false,selected:0}},attempts:1,correct:0}))")
 pg.reload()
 assert pg.evaluate('state.questionStats[0].count')==1
 assert pg.evaluate('state.learned')==[0]
 pg.get_by_role('button',name='薄弱点统计',exact=True).click()
 assert '样本较少' in pg.locator('.topic-results').inner_text()
 assert pg.locator('.weak-chips').count()==0
 pg.evaluate("page='practice';chapter='all';startSession([0,120,136,1]);render()")
 pg.locator('[data-option="0"]').click();pg.locator('#submit').click()
 assert pg.evaluate('state.attempts')==2
 assert pg.evaluate('state.questionStats[0].count')==2
 pg.reload()
 pg.locator('[data-resume-practice]').click()
 assert pg.locator('.feedback').count()==1
 assert pg.evaluate('state.attempts')==2
 pg.locator('#submit').click()
 # Save calc fields + derivation immediately and resume after refresh.
 pg.locator('[data-field="0"]').fill('150')
 pg.locator('#written').fill('令需求等于供给，先解无税均衡。')
 pg.reload();pg.locator('[data-resume-practice]').click()
 assert pg.locator('[data-field="0"]').input_value()=='150'
 assert '需求等于供给' in pg.locator('#written').input_value()
 assert pg.evaluate('position')==1
 q=pg.evaluate('questions[120]')
 for i,f in enumerate(q['fields']):pg.locator(f'[data-field="{i}"]').fill(str(f['value']))
 pg.locator('#submit').click();pg.locator('#submit').click()
 assert pg.evaluate('state.attempts')==3
 # Handwriting and pending self-score survive; revealing an answer never increments grading.
 canvas=pg.locator('#drawing');box=canvas.bounding_box()
 pg.mouse.move(box['x']+30,box['y']+40);pg.mouse.down();pg.mouse.move(box['x']+150,box['y']+90);pg.mouse.up()
 pg.locator('#written').fill('图上标注需求右移和新均衡。')
 pg.reload();pg.locator('[data-resume-practice]').click()
 assert pg.evaluate('practiceResponses[136].strokes.length')==1
 pg.locator('#submit').click()
 pg.get_by_label('自评分数',exact=True).fill('6')
 pg.reload();pg.locator('[data-resume-practice]').click()
 assert pg.get_by_label('自评分数',exact=True).input_value()=='6'
 assert pg.evaluate('state.attempts')==3
 pg.locator('#submit').click()
 assert pg.evaluate('state.attempts')==4
 assert pg.evaluate('state.questionStats[136].points')==6
 # Report requires details, preserves exact question/source and never pretends it was sent.
 pg.locator('[data-report-question="1"]').click()
 pg.locator('#save-report').click()
 assert '请写下' in pg.locator('#report-error').inner_text()
 pg.locator('#report-kind').select_option('答案疑似有误')
 note='我认为条件需要补充。<img src=x onerror=alert(1)>'
 pg.locator('#report-note').fill(note);pg.locator('#save-report').click()
 assert '尚未发送' in pg.locator('.feedback-saved').inner_text()
 pg.locator('#open-reports').click()
 assert pg.locator('.report-note').inner_text()==note
 assert pg.locator('.report-note img').count()==0
 link=pg.locator('.report-list a').get_attribute('href')
 assert '/issues/new?' in link
 from urllib.parse import urlparse,parse_qs
 assert note in parse_qs(urlparse(link).query)['body'][0]
 with pg.expect_download() as download:pg.locator('#export-reports').click()
 with open(download.value.path()) as f:report=json.load(f)['reports'][0]
 assert report['questionId']==1 and report['note']==note and report['source'] and report['title']
 pg.reload();pg.get_by_role('button',name='题目反馈',exact=True).click()
 assert pg.locator('.report-list article').count()==1
 pg.get_by_role('button',name='学习总览',exact=True).click();pg.locator('[data-resume-practice]').click()
 assert pg.evaluate('position')==3
 pg.locator('[data-option="1"]').click();pg.locator('#submit').click();pg.locator('#submit').click()
 assert pg.evaluate('state.attempts')==5
 assert pg.evaluate("localStorage.getItem('zhixu-practice-v1')") is None
 # Topic 0: three historical+current samples, all wrong. Untested concepts aren't called weak.
 pg.get_by_role('button',name='薄弱点统计',exact=True).click()
 assert pg.evaluate('topicResults().find(r=>r.topic===0).count')==3
 assert pg.evaluate('topicResults().find(r=>r.topic===0).full')==0
 assert pg.locator('.weak-chips [data-drill-topic="0"]').count()==1
 pg.locator('.weak-chips [data-drill-topic="0"]').click()
 assert pg.evaluate('queue.every(i=>questions[i].topic===0)')
 assert pg.evaluate('queue.length')>1
 pg.get_by_role('button',name='学习总览',exact=True).click()
 with pg.expect_download() as download:pg.locator('#export').click()
 with open(download.value.path()) as f:backup=json.load(f)
 assert backup['questionStats']['0']['count']==2
 pg.locator('#import-file').set_input_files({'name':'backup.json','mimeType':'application/json','buffer':json.dumps(backup).encode()})
 pg.locator('#confirm-import').click()
 assert pg.evaluate('state.questionStats[0].count')==2
 # Exam grading contributes once, pending self-grade isn't counted, amendment isn't another attempt.
 pg.get_by_role('button',name='模拟考试',exact=True).click()
 for k,v in [('choice',1),('judge',0),('calc',0),('graph',1)]:pg.locator('#count-'+k).fill(str(v))
 pg.locator('#generate-exam').click();ids=pg.evaluate('currentExam.ids');before=pg.evaluate('state.attempts')
 ans=pg.evaluate(f'questions[{ids[0]}].answer')
 pg.locator(f'[data-option="{ans}"]').click();pg.locator('#exam-next').click()
 pg.locator('#written').fill('纸上作图完成。')
 pg.locator('#hand-in').click();pg.locator('#confirm-hand-in').click()
 assert pg.evaluate('state.attempts')==before+1
 pg.locator('[data-review-index="1"]').click()
 pg.get_by_label('考试自评分数').fill('8');pg.locator('#save-self-grade').click()
 assert pg.evaluate('state.attempts')==before+2
 stats_before=pg.evaluate(f'JSON.parse(JSON.stringify(state.questionStats[{ids[1]}]))')
 pg.get_by_label('考试自评分数').fill('10');pg.locator('#save-self-grade').click()
 stats_after=pg.evaluate(f'state.questionStats[{ids[1]}]')
 assert stats_before['count']==stats_after['count']
 assert abs(stats_after['points']-stats_before['points']-2)<.001
 assert stats_after['full']==stats_before['full']+1
 assert pg.locator(f'[data-report-question="{ids[1]}"]').count()==1
 pg.reload();assert pg.evaluate('state.questionStats[0].count')>=2
 # Storage errors must never display a false success; a retry restores a saved draft.
 pg.get_by_role('button',name='学习总览',exact=True).click();pg.locator('[data-resume-practice]').click()
 pg.evaluate("() => {window.oldStorageSet=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(k==='zhixu-practice-v1')throw Error('quota');return window.oldStorageSet.call(this,k,v)};}")
 pg.locator('[data-option="0"]').click()
 assert '尚未保存成功' in pg.locator('#practice-save-status').inner_text()
 pg.evaluate('() => {Storage.prototype.setItem=window.oldStorageSet;}')
 pg.locator('[data-option="1"]').click()
 assert '已保存本轮' in pg.locator('#practice-save-status').inner_text()
 # Seven nav entries remain usable on small phones.
 for width in [320,390]:
  pg.set_viewport_size({'width':width,'height':844})
  for name in ['学习总览','薄弱点统计','题目反馈','章节练习']:
   pg.get_by_role('button',name=name,exact=True).click()
   assert pg.evaluate('document.documentElement.scrollWidth<=innerWidth'),(width,name)
 pg.get_by_role('button',name='薄弱点统计',exact=True).click()
 pg.screenshot(path='/tmp/zhixu-insights-mobile.png',full_page=True)
 assert not errors,errors
 b.close()
 print('PASS: choice/calc/handwriting/self-score resume; no double grading; completion cleanup; transparent feedback persistence/export; stats migration/thresholds/drills/backup/exam amendments; quota failures; 320px navigation')
