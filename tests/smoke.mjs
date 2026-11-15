import assert from 'node:assert/strict';
import { syllabus, lessons, resources } from '../src/content.js';

assert.equal(syllabus.length,12,'There must be 12 planned modules');
assert.equal(lessons.length,5,'There must be five fully written lessons');
assert.ok(resources.length>=12,'There must be a research library');
for (const l of lessons) {
 assert.ok(l.blocks.length>=5,`${l.id}: missing educational content`);
 assert.equal(l.quiz.length,3,`${l.id}: expected 3 questions`);
 for (const q of l.quiz) assert.ok(q.correct>=0 && q.correct<q.options.length,`${l.id}: incorrect quiz key`);
 for (const id of l.resourceIds) assert.ok(resources.some(r=>r.id===id),`${l.id}: invalid resource ${id}`);
}

const events={};
const mem=new Map();
const root={innerHTML:'',addEventListener:(event,callback)=>{events[event]=callback;}};
const noop=()=>{};
globalThis.localStorage={getItem:k=>mem.get(k)||null,setItem:(k,v)=>mem.set(k,v)};
globalThis.location={hash:'#/home'};
globalThis.document={documentElement:{dataset:{}},title:'',querySelector:selector=>selector==='#app'?root:selector==='#toast'?{textContent:'',classList:{add:noop,remove:noop}}:null};
globalThis.window={addEventListener:(event,callback)=>{events['window-'+event]=callback;},scrollTo:noop,scrollY:0};
Object.defineProperty(globalThis,'navigator',{value:{},configurable:true});
globalThis.requestAnimationFrame=(callback)=>callback();
await import('../src/app.js');
assert.ok(root.innerHTML.includes('Artificial Intelligence'),'Home failed to render');
assert.ok(root.innerHTML.includes('Single Neuron')===false,'Home should render course overview');

globalThis.location.hash='#/learn/m01l01';events['window-hashchange']();
assert.ok(root.innerHTML.includes('Ce este un model AI?'),'Lesson did not render');
assert.ok(root.innerHTML.includes('KNOWLEDGE CHECK'),'Quiz did not render');

for (let question=0;question<3;question++) {
 const correct=lessons[0].quiz[question].correct;
 events.change({target:{matches:q=>q==='[data-answer]',dataset:{answer:String(question)},value:String(correct)}});
}
await events.click({target:{closest:()=>({dataset:{complete:'m01l01'}})}});
const saved=JSON.parse(mem.get('neurally-there:v0.1'));
assert.equal(saved.lessons.m01l01.score,3,'Scoring is wrong');
assert.ok(saved.lessons.m01l01.completedAt,'Completion was not persisted');
assert.ok(root.innerHTML.includes('Lesson report saved'),'Report not displayed');

globalThis.location.hash='#/lab';events['window-hashchange']();
const initialState=JSON.parse(mem.get('neurally-there:v0.1'));
assert.ok(root.innerHTML.includes('Single Neuron'),'Lab not rendered');
await events.click({target:{closest:()=>({dataset:{train:'100'}})}});
const trained=JSON.parse(mem.get('neurally-there:v0.1'));
assert.equal(trained.lab.steps,100,'Training did not run 100 gradient steps');
assert.notEqual(trained.lab.weight,initialState.lab.weight,'Model weight did not update');
assert.ok(Number.isFinite(trained.lab.weight)&&Number.isFinite(trained.lab.bias),'Training produced invalid weights');
const lossOf=l=>[0,1,2,3,4].reduce((sum,x)=>{const y=x>=3?1:0;const pred=Math.max(1e-9,Math.min(1-1e-9,1/(1+Math.exp(-(l.weight*x+l.bias)))));return sum-y*Math.log(pred)-(1-y)*Math.log(1-pred);},0)/5;
assert.ok(lossOf(trained.lab)<lossOf(initialState.lab),'Gradient descent did not improve loss');
console.log('PASS: 12 modules, 5 lessons, validated quizzes, lesson report, persistence, real neuron training.');
