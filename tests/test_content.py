"""Independent numerical checks for newly added calculation exercises."""
import json, subprocess, math
from pathlib import Path
root=Path(__file__).resolve().parents[1]
code="const fs=require('fs'),vm=require('vm'); const c=vm.createContext({});vm.runInContext(fs.readFileSync('content.js','utf8')+'\\n'+fs.readFileSync('additions.js','utf8')+'\\nJSON.stringify({topics,questions})',c);process.stdout.write(vm.runInContext('JSON.stringify({topics,questions})',c));"
data=json.loads(subprocess.check_output(['node','-e',code],cwd=root,text=True))
qs=data['questions']
assert len(data['topics'])==73 and len(qs)==149
calcs=[q for q in qs if q['type']=='calc']
expected=[
 [150,250,155,145,245],
 [0.5*24*(17-11),0.5*24*(9-3),2*24,196-(72+72+48)],
 [72/4,72/4,72/9,72/4,math.sqrt(8*18)],
 [9*12+4*27,12-18,8-12],
 [300/(3*1),2*300/(3*2)],
 [20,math.sqrt(50/.5)],
 [100,100/4,2*100+5*25],
 [0,90/3,3*(90/3)],
 [20,110*20-(.2*20**3-4*20**2+30*20),.2*10**2-4*10+30],
 [10,10,(700-10*10)/10],
 [20,150-3.25*20,(150-3.25*20)*20-(.1*20**3-6*20**2+140*20+3000)],
 [1500/3,1500/3,1000,1500-1000],
 [80/4,20-.2*20,100-20-16],
 [45,45-10,50*35,10*50*35],
 [1.5,300/2,300/(2*1.5)],
 [(300-120)/2,100-90,200-90],
 [(15-8)*200,(15-8-5)*200],
]
assert len(calcs)==len(expected)==17
for q,values in zip(calcs,expected):
 assert len(q['fields'])==len(values)
 for f,x in zip(q['fields'],values):assert abs(f['value']-x)<1e-8,(q['title'],f,x)
assert 1700-1200>0 # monopoly must produce rather than shut down
assert abs(100-20-5*16)<1e-8 # follower first-order condition
# Pin old IDs/answers against the published baseline, preventing progress corruption.
previous=json.loads(subprocess.check_output(['node','-e',"const vm=require('vm'),fs=require('fs');let c=vm.createContext({});vm.runInContext(fs.readFileSync(0,'utf8'),c);process.stdout.write(vm.runInContext('JSON.stringify({topics,questions})',c))"],input=subprocess.check_output(['git','show','edb6ecd:content.js'],cwd=root),cwd=root,text=False))
assert data['topics'][:59]==previous['topics']
for old,new in zip(previous['questions'],qs[:75]):
 for key,value in old.items():assert new[key]==value
print('PASS: 17 calculation exercises independently recomputed; all 59 original topic IDs and 75 original questions unchanged')
