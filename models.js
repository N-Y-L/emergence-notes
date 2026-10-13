/* Copyright (c) 2026 Neil Yuanting Li. MIT License; see LICENSE-CODE. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.EmergenceModels = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function bounded(value, min, max, name) {
    if (!Number.isFinite(value) || value < min || value > max) throw new RangeError(name);
    return value;
  }
  function integer(value, min, max, name) {
    bounded(value, min, max, name);
    if (!Number.isInteger(value)) throw new RangeError(name);
    return value;
  }
  // Mulberry32: fixed unsigned 32-bit seed, reproducible across browsers.
  function random(seed) {
    integer(seed, 0, 4294967295, 'seed');
    let state = seed >>> 0;
    return () => {
      state = (state + 0x6D2B79F5) | 0;
      let t = Math.imul(state ^ state >>> 15, 1 | state);
      t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function diffusion({steps = 30, right = 0.5} = {}) {
    integer(steps, 1, 100, 'steps'); bounded(right, 0.01, 0.99, 'right');
    let probability = [1];
    for (let n = 0; n < steps; n++) {
      const next = Array(n + 2).fill(0);
      probability.forEach((p, j) => {next[j] += p * (1 - right); next[j + 1] += p * right;});
      probability = next;
    }
    const mean = steps * (2 * right - 1), variance = 4 * steps * right * (1 - right);
    const points = probability.map((p, j) => ({x: 2 * j - steps, probability: p, density: p / 2}));
    const gaussian = Array.from({length: 301}, (_, i) => {
      const x = -steps - 1 + (2 * steps + 2) * i / 300;
      return {x, density: Math.exp(-((x - mean) ** 2) / (2 * variance)) / Math.sqrt(2 * Math.PI * variance)};
    });
    return {model: 'diffusion', parameters: {steps, right}, points, gaussian, mean, variance,
      mass: probability.reduce((a,b) => a+b, 0), units: 'step length = 1; time per step = 1'};
  }
  function meanField({temperature = 0.7, field = 0} = {}) {
    bounded(temperature, 0.2, 2, 'temperature'); bounded(field, -0.3, 0.3, 'field');
    const xlogx = x => x === 0 ? 0 : x * Math.log(x);
    const freeEnergy = m => -m*m/2 - field*m + temperature * (xlogx((1+m)/2) + xlogx((1-m)/2));
    const origin = freeEnergy(0);
    const points = Array.from({length: 2001}, (_, i) => {const m = -1 + i/1000; return {m, f: freeEnergy(m) - origin};});
    const min = Math.min(...points.map(p => p.f));
    // Degenerate minima are both reported; finite resolution is disclosed.
    const minima = points.filter((p,i) => p.f <= min + 1e-10 && (!i || p.f <= points[i-1].f) && (i===2000 || p.f <= points[i+1].f));
    return {model: 'mean-field', parameters: {temperature, field}, points, minima, resolution: 0.001,
      units: 'temperature = k_B T / J; field = h / J; energy per spin / J'};
  }
  function orderParameter(phases) {
    const x = phases.reduce((sum, p) => sum + Math.cos(p), 0) / phases.length;
    const y = phases.reduce((sum, p) => sum + Math.sin(p), 0) / phases.length;
    return {r: Math.hypot(x,y), angle: Math.atan2(y,x)};
  }
  function synchronization({coupling = 2, seed = 17, duration = 20, dt = 0.02} = {}) {
    bounded(coupling, 0, 5, 'coupling'); bounded(duration, 0, 40, 'duration'); bounded(dt, 0.001, 0.05, 'dt');
    const rng = random(seed), n = 24;
    let phases = Array.from({length:n}, () => 2*Math.PI*rng());
    const initial = [...phases], frequencies = Array.from({length:n}, (_,i) => -1 + 2*i/(n-1));
    const rate = a => {const o=orderParameter(a); return a.map((v,i) => frequencies[i]+coupling*o.r*Math.sin(o.angle-v));};
    const history = [{time:0, r:orderParameter(phases).r}];
    const steps = Math.ceil(duration / dt), h = steps ? duration / steps : dt;
    for (let j=0; j<steps; j++) {
      const k1=rate(phases), k2=rate(phases.map((v,i)=>v+h*k1[i]/2));
      const k3=rate(phases.map((v,i)=>v+h*k2[i]/2)), k4=rate(phases.map((v,i)=>v+h*k3[i]));
      phases=phases.map((v,i)=>v+h*(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6);
      if ((j+1)%5===0 || j+1===steps) history.push({time:(j+1)*h,r:orderParameter(phases).r});
    }
    return {model:'synchronization', parameters:{coupling,seed,duration,dt}, initial, phases, frequencies,
      history, coherence:orderParameter(phases).r, units:'time chosen so natural angular frequencies span [-1,1]'};
  }
  function turing({ratio = 10} = {}) {
    bounded(ratio,1,40,'ratio');
    // Schnakenberg kinetics: u_t = a-u+u²v + ∇²u, v_t = b-u²v + ratio ∇²v.
    // a=.1, b=.9; homogeneous state (u,v)=(1,.9).
    const points=Array.from({length:401},(_,i)=>{
      const k=1.5*i/400, q=k*k;
      const a=.8-q, b=1, c=-1.8, d=-1-ratio*q;
      const trace=a+d, determinant=a*d-b*c, discriminant=trace*trace-4*determinant;
      const growth=(trace+Math.sqrt(Math.max(0,discriminant)))/2;
      return {k,growth,trace,determinant};
    });
    const peak=points.reduce((a,b)=>a.growth>b.growth?a:b);
    return {model:'turing',parameters:{ratio},points,peak,uniformGrowth:-0.1,
      units:'dimensionless concentrations, time and distance; activator diffusion = 1'};
  }
  function percolation({occupation = 0.59, seed = 17, size = 32} = {}) {
    bounded(occupation,0,1,'occupation'); integer(size,2,80,'size');
    const rng=random(seed), cells=Array.from({length:size*size},()=>rng()<occupation?1:0);
    const labels=Array(cells.length).fill(-1), clusters=[];
    for(let i=0;i<cells.length;i++) {
      if(!cells[i] || labels[i]>=0) continue;
      const label=clusters.length, queue=[i]; labels[i]=label;
      let touchesTop=false,touchesBottom=false;
      for(let head=0;head<queue.length;head++) {
        const p=queue[head],x=p%size,y=Math.floor(p/size);
        if(y===0)touchesTop=true; if(y===size-1)touchesBottom=true;
        const neighbors=[];
        if(x>0)neighbors.push(p-1); if(x<size-1)neighbors.push(p+1);
        if(y>0)neighbors.push(p-size); if(y<size-1)neighbors.push(p+size);
        for(const next of neighbors) if(cells[next] && labels[next]<0) {labels[next]=label; queue.push(next);}
      }
      clusters.push({size:queue.length,spans:touchesTop&&touchesBottom});
    }
    const largest=clusters.reduce((max,c)=>Math.max(max,c.size),0), occupied=cells.reduce((a,b)=>a+b,0);
    return {model:'percolation',parameters:{occupation,seed,size},cells,labels,clusters,largest,occupied,
      spanning:clusters.some(c=>c.spans),units:'open square grid; four edge-sharing neighbors'};
  }
  function segregation({threshold = 0.4, seed = 17, sweeps = 20, size = 24} = {}) {
    bounded(threshold,0,1,'threshold'); integer(sweeps,0,100,'sweeps'); integer(size,4,60,'size');
    const rng=random(seed), count=size*size;
    // Exact fixed populations: 20% vacancies, equal groups to rounding.
    let cells=Array.from({length:count},(_,i)=>i<Math.floor(count*.2)?0:(i%2?1:2));
    for(let i=count-1;i>0;i--){const j=Math.floor(rng()*(i+1));[cells[i],cells[j]]=[cells[j],cells[i]];}
    const initial=[...cells];
    function neighborhood(i,grid) {
      const x=i%size,y=Math.floor(i/size),type=grid[i]; let total=0,same=0;
      for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++) {
        if(!dx&&!dy)continue;
        const j=((y+dy+size)%size)*size+(x+dx+size)%size;
        if(grid[j]){total++;if(grid[j]===type)same++;}
      }
      return {total,same};
    }
    function statistics(grid) {
      let same=0,total=0,unhappy=0;
      grid.forEach((type,i)=>{if(type){const n=neighborhood(i,grid);same+=n.same;total+=n.total;if(n.total && n.same/n.total<threshold)unhappy++;}});
      return {sameNeighborFraction:total?same/total:0,unhappy};
    }
    const history=[{sweep:0,...statistics(cells)}]; let totalMoves=0;
    for(let sweep=1;sweep<=sweeps && history.at(-1).unhappy>0;sweep++) {
      // Each initially occupied position gets one turn; arrivals aren't moved a second time.
      const order=Array.from({length:count},(_,i)=>i);
      for(let i=count-1;i>0;i--){const j=Math.floor(rng()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
      const arrived=new Set();
      for(const i of order) {
        if(!cells[i] || arrived.has(i))continue;
        const n=neighborhood(i,cells);
        if(!n.total || n.same/n.total>=threshold)continue;
        const vacancies=[];cells.forEach((v,j)=>{if(!v)vacancies.push(j);});
        if(!vacancies.length)break;
        const target=vacancies[Math.floor(rng()*vacancies.length)];
        cells[target]=cells[i];cells[i]=0;arrived.add(target);totalMoves++;
      }
      history.push({sweep,...statistics(cells)});
      if(history.at(-1).unhappy===0)break;
    }
    return {model:'segregation',parameters:{threshold,seed,sweeps,size},initial,cells,history,totalMoves,
      final:history.at(-1),units:'periodic square grid; eight neighbors; relocations to uniformly random vacancies'};
  }
  return {random,diffusion,meanField,orderParameter,synchronization,turing,percolation,segregation};
});
