"""Verify introduction integration and saved progress compatibility in the actual page."""
from playwright.sync_api import sync_playwright
from pathlib import Path
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 pg=b.new_page(viewport={'width':1440,'height':1000}); errors=[]
 pg.on('pageerror',lambda e:errors.append(str(e)))
 pg.goto('http://127.0.0.1:3040/')
 pg.evaluate("localStorage.clear();localStorage.setItem('zhixu-v1',JSON.stringify({learned:[0,82],answers:{0:{correct:false,selected:0}},attempts:1,correct:0}))")
 pg.reload()
 assert pg.evaluate('state.learned')==[0,82]
 assert pg.evaluate('wrongIds()')==[0]
 assert pg.locator('.chapter h3').first.inner_text()=='导论'
 assert 'undefined' not in pg.locator('#app').inner_text()
 assert pg.evaluate('chapters.length')==9
 assert pg.evaluate('topics.length')==102
 assert pg.evaluate('activeQuestionIds().length')==684
 assert pg.evaluate('topics.slice(83).every(t=>t.chapter===9 && t.source && t.pages)')
 assert pg.evaluate('questions.slice(650).every(q=>q.topic>=83 && q.topic<102 && q.options[q.answer] && q.explanation && q.source)')
 pg.locator('[data-chapter="9"]').click()
 assert pg.locator('#cards article').count()==19
 pg.locator('[data-learn="83"]').click();pg.reload()
 assert pg.evaluate('state.learned')==[0,82,83]
 pg.get_by_role('button',name='知识手册',exact=True).click()
 pg.locator('#chapter').select_option('9')
 pg.locator('[data-topic-practice="83"]').click()
 assert pg.evaluate('queue.length')==2
 for qid in range(650,688):
  pg.evaluate(f"page='practice';startSession([{qid}]);render()")
  answer=pg.evaluate(f'questions[{qid}].answer')
  pg.locator(f'[data-option="{answer}"]').click();pg.locator('#submit').click()
  assert pg.evaluate('state.answers['+str(qid)+'].correct')
 pg.get_by_role('button',name='模拟考试',exact=True).click()
 pg.locator('#toggle-chapters').click()
 pg.locator('[name="exam-chapter"][value="9"]').check()
 for kind,n in [('choice',10),('judge',10),('calc',0),('graph',0)]:
  pg.locator('#count-'+kind).fill(str(n))
 pg.locator('#generate-exam').click()
 assert pg.evaluate('currentExam.ids.length')==20
 assert pg.evaluate('currentExam.ids.every(i=>topics[questions[i].topic].chapter===9)')
 pg.set_viewport_size({'width':390,'height':844})
 pg.get_by_role('button',name='学习总览',exact=True).click()
 assert pg.evaluate('document.documentElement.scrollWidth<=innerWidth')
 assert not errors,errors
 pg.goto('about:blank')
 pg.set_content(Path('/tmp/知序-经济学学习室-学习与模考版.html').read_text(), wait_until='load')
 assert pg.locator('.chapter h3').first.inner_text()=='导论'
 assert pg.evaluate('activeQuestionIds().length')==684
 b.close()
print('PASS: introduction knowledge, 38 scored questions, exam selection, stable progress, mobile layout, offline bundle')
