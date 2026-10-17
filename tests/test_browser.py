"""Run against local static server: python tests/test_browser.py (requires Playwright + Chromium)."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    page=browser.new_page(viewport={'width':1440,'height':1000})
    errors=[]
    page.on('pageerror',lambda e: errors.append(str(e)))
    page.goto('http://127.0.0.1:3040/')
    page.evaluate("localStorage.clear();localStorage.setItem('zhixu-v1',JSON.stringify({learned:[0,58],answers:{0:{correct:false,selected:0}},attempts:1,correct:0}))")
    page.reload()
    assert page.locator('.chapter').count()==8
    assert page.locator('#wrong-count').inner_text()=='1'
    page.get_by_role('button',name='知识手册',exact=True).click()
    assert page.locator('[data-learn]').count()==83
    assert page.locator('[aria-pressed=true]').count()==2
    page.get_by_label('搜索知识点').fill('外部性')
    assert page.locator('[data-learn]').count()>0
    # Data completeness, all old IDs unchanged and all newly appended items have sources.
    data=page.evaluate('({questions,topics})')
    assert len(data['questions'])==650
    assert all(q.get('explanation') and q.get('type') for q in data['questions'])
    assert all(q.get('source') for q in data['questions'][75:])
    assert data['questions'][0]['answer']==1
    assert page.evaluate('activeQuestionIds().length')==646
    assert page.evaluate('Object.keys(typeNames)')==['choice','judge','calc','graph']
    assert len({q['topic'] for q in data['questions'] if q.get('active') is not False})==83
    # Run every question through its real practice UI, including number entry and drawn strokes.
    page.evaluate("chapter='all';practiceType='all';page='practice';startSession(questions.map((_,i)=>i));render()")
    for i,q in enumerate(data['questions']):
        if q.get('active') is False:continue
        if q['type'] in ['choice','judge']:
            page.locator(f'[data-option="{q["answer"]}"]').click()
        elif q['type']=='calc':
            for j,f in enumerate(q['fields']):page.locator(f'[data-field="{j}"]').fill(str(f['value']))
        else:
            page.locator('#written').fill('已在纸上完成，核对坐标、公式与结论。')
            if q['type']=='graph':
                box=page.locator('#drawing').bounding_box()
                page.mouse.move(box['x']+30,box['y']+30)
                page.mouse.down();page.mouse.move(box['x']+90,box['y']+90);page.mouse.up()
        page.locator('#submit').click()
        assert page.locator('.feedback').count()==1,(i,q['title'])
        if q['type'] in ['graph','short']:
            page.get_by_label('自评分数',exact=True).fill(str(10 if q['type']=='graph' else 6))
        page.locator('#submit').click()
    assert '646 / 646' in page.locator('.score').inner_text()
    assert page.evaluate('state.attempts')==647
    # Wrong answers, objective and partial self-assessment, remain in the wrong-question list.
    page.evaluate("chapter='all';practiceType='all';page='practice';startSession([100,136]);render()")
    page.locator('[data-option="0"]').click() # judge 100 is false
    page.locator('#submit').click();page.locator('#submit').click()
    page.locator('#written').fill('画图练习')
    page.locator('#submit').click()
    page.get_by_label('自评分数',exact=True).fill('5')
    page.locator('#submit').click()
    assert 100 in page.evaluate('wrongIds()')
    assert 136 in page.evaluate('wrongIds()')
    page.reload()
    assert 136 in page.evaluate('wrongIds()')
    # Default random exam: all types, exactly 100 points, no duplicates.
    page.get_by_role('button',name='模拟考试',exact=True).click()
    assert '100 分' in page.locator('#paper-summary').inner_text()
    page.locator('#generate-exam').click()
    ids=page.evaluate('currentExam.ids')
    assert len(ids)==31 and len(set(ids))==31
    assert page.locator('.feedback').count()==0
    exam_id=page.evaluate('currentExam.id')
    deadline=page.evaluate('currentExam.deadline')
    # Fill all selected items, drawing survives switching + reload.
    for idx,qi in enumerate(ids):
        page.locator(f'[data-exam-index="{idx}"]').click()
        q=data['questions'][qi]
        if q['type'] in ['choice','judge']:
            page.locator(f'[data-option="{q["answer"]}"]').click()
        elif q['type']=='calc':
            for j,f in enumerate(q['fields']):page.locator(f'[data-field="{j}"]').fill(str(f['value']))
            page.locator('#written').fill('推导过程')
        else:
            page.locator('#written').fill('已作图')
            box=page.locator('#drawing').bounding_box()
            page.mouse.move(box['x']+40,box['y']+40);page.mouse.down()
            page.mouse.move(box['x']+120,box['y']+100);page.mouse.up()
    assert '31 / 31' in page.locator('#answered-total').inner_text()
    page.reload()
    page.get_by_role('button',name='模拟考试',exact=True).click()
    assert page.evaluate('currentExam.id')==exam_id
    assert page.evaluate('currentExam.deadline')==deadline
    assert len(page.evaluate('currentExam.responses[currentExam.ids[currentExam.index]].strokes'))>0
    assert page.locator('#written').input_value()=='已作图'
    assert page.locator('.feedback').count()==0
    page.locator('#hand-in').click()
    page.locator('#cancel-hand-in').click()
    assert not page.evaluate('currentExam.finished')
    page.locator('#hand-in').click();page.locator('#confirm-hand-in').click()
    assert '尚非最终成绩' in page.locator('.result-summary').inner_text()
    assert '80' in page.locator('.score').inner_text()
    for idx,qi in enumerate(ids):
        if data['questions'][qi]['type']=='graph':
            page.locator(f'[data-review-index="{idx}"]').click()
            page.get_by_label('考试自评分数').fill('10')
            page.locator('#save-self-grade').click()
    assert '100' in page.locator('.score').inner_text()
    assert '最终总分' in page.locator('.result-summary').inner_text()
    before=page.evaluate('state.attempts')
    page.get_by_label('考试自评分数').fill('5');page.locator('#save-self-grade').click()
    assert page.evaluate('state.attempts')==before
    assert page.evaluate('examHistory[0].score')==95
    # Invalid/insufficient pools never silently repeat questions.
    page.locator('#new-exam').click()
    page.locator('#count-graph').fill('99');page.locator('#generate-exam').click()
    assert '不重复抽题' in page.locator('#exam-error').inner_text()
    # Forced timeout from an absolute deadline persists through navigation/reload.
    page.locator('#count-choice').fill('0');page.locator('#count-judge').fill('1')
    page.locator('#count-calc').fill('0');page.locator('#count-graph').fill('0')
    page.locator('#generate-exam').click()
    page.evaluate('currentExam.deadline=Date.now()-100;saveExam()')
    page.wait_for_selector('.result-summary',timeout=4000)
    assert page.evaluate('currentExam.finished')
    assert page.evaluate('examHistory[0].score')==0
    assert page.evaluate('currentExam.reason').startswith('时间已到')
    # Number parser accepts fractions but not blank/invalid text; partial final-answer scores.
    assert page.evaluate("parseNumber('1/2')")==.5
    assert page.evaluate("parseNumber('')") is None
    assert page.evaluate("parseNumber('2+3')") is None
    assert page.evaluate("autoGrade(questions[120],{fields:['150','250','','','']})")==4
    # Mobile, independent standalone and backup import/export.
    page.get_by_role('button',name='学习总览',exact=True).click()
    with page.expect_download() as dl:page.locator('#export').click()
    backup=Path(dl.value.path()).read_bytes()
    page.locator('#import-file').set_input_files({'name':'backup.json','mimeType':'application/json','buffer':backup})
    page.locator('#confirm-import').click()
    assert '已导入' in page.locator('#backup-message').inner_text()
    page.set_viewport_size({'width':390,'height':844})
    for name in ['学习总览','知识手册','章节练习','模拟考试','我的错题']:
        page.get_by_role('button',name=name,exact=True).click()
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),name
    page.get_by_role('button',name='模拟考试',exact=True).click()
    page.screenshot(path='/tmp/zhixu-mock-mobile.png',full_page=True)
    page.set_viewport_size({'width':1440,'height':1000})
    page.screenshot(path='/tmp/zhixu-mock-desktop.png',full_page=True)
    standalone=Path('/tmp/知序-经济学学习室-学习与模考版.html').read_text()
    other=browser.new_page()
    other.on('pageerror',lambda e: errors.append(str(e)))
    other.set_content(standalone)
    assert other.locator('.chapter').count()==8
    other.get_by_role('button',name='模拟考试',exact=True).click()
    assert other.locator('#generate-exam').count()==1
    assert not errors,errors
    print('PASS: 646 active practice questions, 83 knowledge cards, automatic & self grading, strokes, old progress, 100-point random exam, no duplicates, resume, hidden answers, self-grade amendments, timeout, backups, standalone, mobile layouts, no JS errors')
    browser.close()
