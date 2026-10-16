"""Check the reviewed expansion, independent numerical derivations, and retirement invariants."""
import json, math, subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[1]
run="const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext(['content','additions','textbook','bank-expansion','written-expansion'].map(n=>fs.readFileSync(n+'.js','utf8')).join(String.fromCharCode(10)),c);process.stdout.write(vm.runInContext('JSON.stringify({questions,topics,ids:activeQuestionIds()})',c));"
d=json.loads(subprocess.check_output(['node','-e',run],cwd=root,text=True)); qs=d['questions']
assert len(qs)==650 and len(d['ids'])==646
assert {qs[i]['type'] for i in d['ids']}=={'choice','judge','calc','graph'}
assert len({q['bankId'] for q in qs[209:]})==441
review=json.loads((root/'bank-review.json').read_text())
assert len(review)==427 and sum(r['status']=='imported'for r in review)==379
assert sum(r['status']=='excluded'for r in review)==48
assert all(q.get('source') and q.get('explanation') for q in qs[209:])
assert all('【答案】' not in q['title'] for q in qs[209:])
for q in qs[209:]:
 if q['type'] in ('choice','judge'):assert 0<=q['answer']<len(q['options'])
calc=[q for q in qs[209:] if q['type']=='calc'];assert len(calc)==50
# a*x+b*y=c, d*x+e*y=f

def two(a,b,c,d,e,f):
 det=a*e-b*d
 return (c*e-b*f)/det,(a*f-c*d)/det
px,ps=two(2,3,75,1,-1,5)
Pb,Ps=two(.5,1,3,-1,1,.5)
X,Y=two(7,-4,150,4,14,672)
A,B=two(1,1,16,1,-2,-2)
# Independent values are derived from demand, budgets, marginal conditions and totals.
expected=[
 [90-6,84-2*6,(90-6)+(84-12),(86-6)+(90-12)],
 [880/(1-.12),abs(((880-1000)/940)/((40-32)/36))],
 [100/(2*2),100-2*25,50-20],
 [10,-2,10/2**2],
 [1000*(1+.5*.1),3.2*.9*1000*1.05,3.2*.9*1000*1.05-3200],
 [(50+25)/(2+3),px,ps,px-15,15-ps],
 [1.2/.2],
 [24000*(1-2.5*.08+1.5*.06-2*.02),(1.5*6-2*2)/2.5],
 [Pb,Ps,6-.5*Pb,.5*(6-.5*Pb)],
 [100,100,100+4*100],
 [(2/3)*20000*.9/(100*1.2),(1/3)*20000*.9/60],
 [120/3,2*120/(3*2),40/(2*40),1],
 [X,Y,672/(672+525)],
 [10*10,40/(2*2),40/2,math.sqrt(100/2),math.sqrt(100*2)],
 [120/(2*2),120/(2*3),20/2,120*(math.sqrt(1.44)-1),(math.sqrt(1.44)-1)*100],
 [.4*(.5+8**2)+.6*(.5+(-5)**2),.5+.2**2,.4*8+.6*(-5)],
 [120/2,120/3,120/2+3*120/3,4*120/2+2*120/3],
 [6,-2*2,2*3],
 [2/(2*.1),-.1*10**3+2*10**2+20*10],
 [36/(2*15)],
 [(4+4**2/4)-(2+2**2/4),(10*4-4**2/2)-(10*2-2**2/2),(10-1)/1.5,(10*6-6**2/2)-(2+6+6**2/4)],
 [60/24],
 [200/(4/3)**(5/8),200*(4/3)**(3/8)],
 [A,B,80+2*A+.5*A*A+50+B*B],
 [4500/900,4000-400*5,4950/900,4950/900-.9,4000-400*(4950/900)],
 [(2/3)*12**2-16*12+180,2*6**2-24*6+120,48/6],
 [12/2,6**2-12*6+40],
 [720/80,420-30*9,800/80,10-1.6,420-30*10],
 [(.8+math.sqrt(.8**2+4*.12*4))/(2*.12),120-(.04*10**3-.4*10**2+8*10+9),120-(.04*10**3-.4*10**2+8*10)],
 [2*math.sqrt(4*1),1000-50*4,800/2,4*(800/2)],
 [(20+10)/2,(20+10+2)/2,(20-10-2)/.4,(16-2-10)*20],
 [5*(1-1/5),(4+20)/4,5*6-(2*6**2-20*6+50)],
 [(10-2)/2,10-4,(6-2)*4,.5*(10-6)*4,.5*(10-2)*8],
 [1000/2,1000/(2*100),5],
 [3,5,3+5,31-8],
 [150-50,(100-50)*100-600,150-.5*90,150-50-10,(105-10-50)*90-600],
 [(10-2)/(6+2),7-(2+1),(10-2)/(3+2),10-3*((10-2)/5)],
 [(90-10)/2,70*40-(10*40+.5*40**2),50-10,(90-50)/.5],
 [(30-2*3+6)/3,(30-2*6+3)/3,30-10-7,(13-3)*10,(13-6)*7],
 [34,12,100-.5*(34+12)],
 [(50*1440/14400)**2,((50*48/2)**2)/14400],
 [150/(10+20),20*5,150-10*6,20*6,20*6-(150-10*6)],
 [12*1/2,12*2/3,12],
 [240/3,240/3,120-80,120-80],
 [10-2*3,12/4,(4+2)*3],
 [math.sqrt(100/2),math.sqrt(100/2),100/2],
 [(10-4)/(4+2),10-2,8-(1+4),(10-4)/(2+2),10-2*1.5],
 [420/(2+3),420/(1+3+2),(420-2*70)-3*70],
 [3/.02,2/.02,3/.02,(2+1)/.02,1],
 [80/4,(60-2*20)/2,10,20,2*20],
]
assert len(expected)==50
for q,values in zip(calc,expected):
 assert len(values)==len(q['fields']),q['bankId']
 for f,v in zip(q['fields'],values):assert math.isclose(f['value'],v,abs_tol=1e-5),(q['bankId'],f['label'],f['value'],v)
# Check first-order residuals for multi-plant and externality problems independently.
assert 9+2*3==10+5==31-2*8
assert 34+20==2*12+30==100-34-12
assert 80-4*10-2*20==0 and 60-2*20-2*10==0
# Critical known answer-key contradictions are corrected, not copied.
by_id={q.get('bankId'):q for q in qs[209:]}
assert by_id['七-choice-40']['answer']==3
assert by_id['七-choice-17']['answer']==0
assert by_id['九-choice-19']['answer']==1
assert by_id['十一-choice-3']['answer']==1
assert by_id['二-judge-2']['answer']==0
print('PASS: 379 reviewed objectives, 50 independently recomputed calculations, 12 graphs; audit exclusions, unique origin IDs and four-type restriction')
