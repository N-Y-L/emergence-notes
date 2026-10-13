/* Copyright (c) 2026 Neil Yuanting Li. MIT License; see LICENSE-CODE. */
const test=require('node:test'),assert=require('node:assert/strict'),M=require('../models.js');
const near=(x,y,eps=1e-11)=>assert.ok(Math.abs(x-y)<=eps,`${x} differs from ${y}`);
test('binomial recurrence agrees with enumeration of all short paths',()=>{
 for(const n of [1,2,5,8])for(const p of [.2,.5,.8]){
  const counts=Array(n+1).fill(0);
  for(let path=0;path<2**n;path++){let j=0;for(let i=0;i<n;i++)j+=(path>>i)&1;counts[j]+=p**j*(1-p)**(n-j);}
  const d=M.diffusion({steps:n,right:p});d.points.forEach((v,j)=>near(v.probability,counts[j]));
 }
});
test('walk mass, mean, variance, and density cell widths obey exact identities',()=>{
 for(const n of [1,13,100])for(const p of [.05,.3,.5,.95]){
  const d=M.diffusion({steps:n,right:p});near(d.mass,1);near(d.points.reduce((s,v)=>s+v.x*v.probability,0),d.mean);
  near(d.points.reduce((s,v)=>s+(v.x-d.mean)**2*v.probability,0),d.variance,1e-9);
  near(d.points.reduce((s,v)=>s+2*v.density,0),1);
 }
});
test('Curie–Weiss free-energy minima respect spin symmetry and stationarity',()=>{
 for(const t of [.3,.7,1,1.5]){
  const d=M.meanField({temperature:t,field:0});d.points.forEach((p,i)=>near(p.f,d.points[2000-i].f));
  if(t>=1)assert.equal(d.minima[0].m,0);else{assert.equal(d.minima.length,2);near(d.minima[0].m,-d.minima[1].m);}
  for(const p of d.minima)near(p.m,Math.tanh(p.m/t),.002);
 }
 const a=M.meanField({temperature:.7,field:.1}),b=M.meanField({temperature:.7,field:-.1});
 assert.ok(a.minima[0].m>0);near(a.minima[0].m,-b.minima[0].m);
});
test('uncoupled phases follow exact independent frequencies',()=>{
 const d=M.synchronization({coupling:0,duration:20,seed:13});d.phases.forEach((p,i)=>near(p,d.initial[i]+20*d.frequencies[i],2e-11));
 const zero=M.synchronization({duration:0});assert.deepEqual(zero.phases,zero.initial);
});
test('Kuramoto coherence has its exact limiting values and integration converges',()=>{
 near(M.orderParameter(Array(24).fill(.7)).r,1);
 near(M.orderParameter(Array.from({length:24},(_,i)=>2*Math.PI*i/24)).r,0);
 const a=M.synchronization({coupling:3,duration:20,dt:.02}),b=M.synchronization({coupling:3,duration:20,dt:.01});
 a.phases.forEach((p,i)=>near(p,b.phases[i],1e-7));assert.ok(a.coherence>=0&&a.coherence<=1+1e-14);
});
test('Schnakenberg stability agrees with independent determinant threshold',()=>{
 const dcrit=(5.6+Math.sqrt(28.8))/1.28;
 for(const D of [1,5,8,9,15,40]){
  const d=M.turing({ratio:D});near(d.points[0].growth,-.1);
  assert.equal(d.peak.growth>0,D>dcrit);
  for(const p of d.points){const q=p.k*p.k;near(p.determinant,1+(1-.8*D)*q+D*q*q,2e-12);}
 }
});
test('invalid inputs fail explicitly instead of drawing meaningless results',()=>{
 for(const f of [()=>M.diffusion({steps:0}),()=>M.diffusion({right:1}),()=>M.meanField({temperature:0}),()=>M.synchronization({dt:0}),()=>M.turing({ratio:NaN}),()=>M.percolation({occupation:2}),()=>M.segregation({sweeps:2.5})])assert.throws(f,RangeError);
});
