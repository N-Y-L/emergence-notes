/* Copyright (c) 2026 Neil Yuanting Li. MIT License; see LICENSE-CODE. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./models.js'));else root.EmergenceFigures=factory(root.EmergenceModels);})(globalThis,function(M){
'use strict';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const fixed=(v,n=3)=>Number(v).toFixed(n);
const blue='#17649b',red='#a94332',gray='#68747b';
function svg(title,body,description='') {return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title><desc>${esc(description)}</desc><rect width="720" height="360" fill="white"/><g font-family="Arial,sans-serif" font-size="14" fill="#20252a">${body}</g></svg>`;}
function chart(series,{xmin,xmax,ymin,ymax,xlabel,ylabel}){
 const X=x=>65+620*(x-xmin)/(xmax-xmin),Y=y=>300-245*(y-ymin)/(ymax-ymin);
 let out=`<path d="M65 45V300H685" fill="none" stroke="#68747b"/><text x="65" y="23">${esc(ylabel)}</text><text x="375" y="349" text-anchor="middle">${esc(xlabel)}</text>`;
 for(let i=0;i<=4;i++){const x=xmin+(xmax-xmin)*i/4,y=ymin+(ymax-ymin)*i/4;
 out+=`<path d="M${X(x)} 300v5 M60 ${Y(y)}h5" stroke="#68747b"/><text x="${X(x)}" y="322" text-anchor="middle">${+x.toFixed(2)}</text><text x="55" y="${Y(y)+5}" text-anchor="end">${+y.toFixed(2)}</text>`;}
 if(ymin<0&&ymax>0)out+=`<path d="M65 ${Y(0)}H685" stroke="#aab0b5" stroke-dasharray="4 4"/>`;
 series.forEach(s=>{
  const points=s.points.filter(p=>Number.isFinite(p.x)&&Number.isFinite(p.y));
  if(s.dots)out+=points.map(p=>`<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="2.7" fill="${s.color||blue}"/>`).join('');
  else out+=`<path d="${points.map((p,i)=>`${i?'L':'M'}${fixed(X(p.x),2)},${fixed(Y(p.y),2)}`).join(' ')}" fill="none" stroke="${s.color||blue}" stroke-width="2" ${s.dash?'stroke-dasharray="6 4"':''}/>`;
 });return out;
}
function grid(cells,size,x0,y0,side,color,shape=false){const w=side/size;return cells.map((v,i)=>v?`<rect x="${x0+(i%size)*w}" y="${y0+Math.floor(i/size)*w}" width="${w-.35}" height="${w-.35}" fill="${color(v,i)}"/>${shape&&v===2?`<circle cx="${x0+(i%size+.5)*w}" cy="${y0+(Math.floor(i/size)+.5)*w}" r="${w*.15}" fill="white"/>`:''}`:'').join('');}
function draw(key,d){
 if(key==='diffusion')return svg('Exact random-walk probabilities and Gaussian approximation',chart([
 {points:d.gaussian.map(p=>({x:p.x,y:p.density})),color:red,dash:true},
 {points:d.points.map(p=>({x:p.x,y:p.density})),dots:true,color:blue}
 ],{xmin:-d.parameters.steps-1,xmax:d.parameters.steps+1,ymin:0,ymax:Math.max(...d.points.map(p=>p.density),...d.gaussian.map(p=>p.density))*1.15,xlabel:'displacement (step lengths)',ylabel:'probability per unit displacement'}),'Blue dots: exact probability divided by reachable-site spacing 2. Dashed red: Gaussian density with the same mean and variance.');
 if(key==='meanField')return svg('Collective order as a free-energy minimum',chart([{points:d.points.map(p=>({x:p.m,y:p.f})),color:blue},{points:d.minima.map(p=>({x:p.m,y:p.f})),color:red,dots:true}],{xmin:-1,xmax:1,ymin:Math.min(...d.points.map(p=>p.f))-.02,ymax:Math.max(...d.points.map(p=>p.f))+.02,xlabel:'magnetization per spin, m',ylabel:'[f(m) − f(0)] / J'}),'The preferred magnetizations minimize the plotted mean-field free energy. Red dots mark the minima on a grid spaced by 0.001.');
 if(key==='synchronization') {
 let body='<text x="180" y="25" text-anchor="middle">Initial phases</text><text x="535" y="25" text-anchor="middle">Phases at the displayed time</text>';
 [d.initial,d.phases].forEach((phases,p)=>{const cx=p?535:180,cy=175,R=114;body+=`<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#aaa"/>`;
 phases.forEach((a,i)=>{body+=`<circle cx="${cx+R*Math.cos(a)}" cy="${cy+R*Math.sin(a)}" r="5" fill="${blue}" stroke="white"/>`;});const o=M.orderParameter(phases);body+=`<path d="M${cx} ${cy}L${cx+R*o.r*Math.cos(o.angle)} ${cy+R*o.r*Math.sin(o.angle)}" stroke="${red}" stroke-width="3"/><text x="${cx}" y="322" text-anchor="middle">r = ${fixed(o.r)}</text>`;});
 return svg('Coupled oscillators develop phase coherence',body,'Dots are phases of 24 oscillators on a circle. The red mean vector measures coherence; its length divided by the radius is r.');
 }
 if(key==='turing')return svg('Diffusion can destabilize a uniform reaction state',chart([{points:d.points.map(p=>({x:p.k,y:p.growth})),color:blue}],{xmin:0,xmax:1.5,ymin:Math.min(-.2,...d.points.map(p=>p.growth)),ymax:Math.max(.15,d.peak.growth+.03),xlabel:'wave number k (inverse dimensionless length)',ylabel:'largest real growth rate'}),'Positive growth rates amplify small disturbances. The uniform perturbation at k=0 decays. This is a linear calculation, not a final stripe or spot simulation.');
 if(key==='percolation') {
 let body='<text x="190" y="27" text-anchor="middle">Occupied sites and connected clusters</text>'+grid(d.cells.map((v,i)=>v && d.clusters[d.labels[i]].spans ? 2 : v),d.parameters.size,40,45,280,v=>v===2?red:blue,true);
 body+=`<text x="360" y="105">Occupied sites: ${d.occupied} / ${d.cells.length}</text><text x="360" y="145">Largest cluster: ${d.largest} sites</text><text x="360" y="185">Top-to-bottom path: ${d.spanning?'yes':'no'}</text><text x="360" y="235">Red with dots: spanning clusters</text><text x="360" y="266">Blue: other occupied sites</text>`;
 return svg('Random local occupancy produces global connectivity',body,'Open square boundaries. Connections use four edge-sharing neighbors. A red, white-dotted cluster connects the top and bottom edges; there is no wraparound.');
 }
 if(key==='segregation')return svg('Local relocation rules alter global mixing',`<text x="180" y="27" text-anchor="middle">Initial placement</text><text x="535" y="27" text-anchor="middle">After ${d.final.sweep} sweeps</text>`+grid(d.initial,d.parameters.size,40,45,280,v=>v===1?blue:red,true)+grid(d.cells,d.parameters.size,395,45,280,v=>v===1?blue:red,true), 'Two arbitrary groups are blue solid squares and red squares with white dots. Blank cells are vacancies. The grid wraps around both directions; this is a specified model, not demographic data.');
 throw new Error('Unknown model '+key);
}
function readout(key,d){
 if(key==='diffusion')return `Mean displacement ${fixed(d.mean)}; variance ${fixed(d.variance)}; total probability ${fixed(d.mass,8)}. Blue dots show exact probability ÷ 2; the dashed red curve is a Gaussian density.`;
 if(key==='meanField')return `Minimum at m ≈ ${d.minima.map(p=>fixed(p.m)).join(' and ')}. Magnetization grid spacing: 0.001. Blue: free energy; red dots: lowest grid values. The infinite-range model has its zero-field transition at kBT/J = 1.`;
 if(key==='synchronization')return `Coherence at time ${d.parameters.duration}: r = ${fixed(d.coherence)}. Seed ${d.parameters.seed}; 24 oscillators. Dots: oscillator phases; red line: their average vector.`;
 if(key==='turing')return `Uniform growth rate −0.100. Largest sampled growth ${fixed(d.peak.growth)} at k ≈ ${fixed(d.peak.k)}. ${d.peak.growth>0?'A band of spatial disturbances grows.':'All sampled spatial disturbances decay.'}`;
 if(key==='percolation')return `Top-to-bottom path: ${d.spanning?'present':'absent'}. Largest cluster contains ${d.largest} of ${d.occupied} occupied sites. One ${d.parameters.size} × ${d.parameters.size} sample at seed ${d.parameters.seed}.`;
 if(key==='segregation')return `Same-group fraction among occupied neighbor pairs: ${fixed(d.history[0].sameNeighborFraction)} → ${fixed(d.final.sameNeighborFraction)}. Members below their threshold: ${d.final.unhappy}. ${d.totalMoves} moves in ${d.final.sweep} sweeps. Seed ${d.parameters.seed}. ${d.final.unhappy?'The run has not settled.':'No member currently requests a move.'}`;
}
return {draw,readout,escape:esc};
});
