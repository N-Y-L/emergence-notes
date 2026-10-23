/* Copyright (c) 2026 Neil Yuanting Li. MIT License; see LICENSE-CODE. */
(function(){'use strict';
const normalize=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const search=document.querySelector('#search'), mechanism=document.querySelector('#mechanism');
if(search&&mechanism){
 document.querySelector('.filters').hidden=false;
 const items=[...document.querySelectorAll('.catalogue li')];
 const data=new Map((globalThis.EmergenceCatalogue||[]).map(e=>[e.id,e]));
 const update=()=>{const words=normalize(search.value).trim().split(/\s+/).filter(Boolean),m=mechanism.value;let found=0;
 items.forEach(item=>{const e=data.get(item.dataset.id);const text=normalize(e?e.text:item.textContent);const show=words.every(w=>text.includes(w))&&(!m||(e?.mechanisms||item.dataset.mechanisms.split(' ')).includes(m));item.hidden=!show;if(show)found++;});
 document.querySelector('#result-count').textContent=`${found} of ${items.length} entries`;document.querySelector('#no-results').hidden=found!==0;};
 search.addEventListener('input',update);mechanism.addEventListener('change',update);
 document.querySelector('#clear-search').addEventListener('click',()=>{search.value='';mechanism.value='';update();search.focus();});update();
}
if(!globalThis.EmergenceLabs)return;
const M=globalThis.EmergenceModels,F=globalThis.EmergenceFigures;
for(const spec of globalThis.EmergenceLabs){
 const section=document.querySelector(`[data-lab="${spec.key}"]`);if(!section)continue;
 const controls=section.querySelector('.controls'),buttons=section.querySelector('.buttons');controls.hidden=false;buttons.hidden=false;
 const params=()=>{const p={...spec.defaults};controls.querySelectorAll('input').forEach(i=>p[i.name]=Number(i.value));return p;};
 function update(){const p=params();controls.querySelectorAll('input').forEach(i=>{section.querySelector(`[data-output="${i.name}"]`).textContent=i.value;});const result=M[spec.key](p);section.querySelector('.figure-holder').innerHTML=F.draw(spec.key,result);section.querySelector('.readout').textContent=F.readout(spec.key,result);}
 controls.addEventListener('input',update);
 section.querySelector('[data-action="reset"]').addEventListener('click',()=>{controls.querySelectorAll('input').forEach(i=>i.value=spec.defaults[i.name]);update();});
 update();
}
})();
