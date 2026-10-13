// Copyright (c) 2026 Neil Yuanting Li. MIT License; see LICENSE-CODE.
import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)),pages=(await readdir(root)).filter(n=>n.endsWith('.html'));
const documents=new Map(),errors=[];
for(const name of pages){const text=await readFile(resolve(root,name),'utf8'),ids=[...text.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)errors.push(name+': duplicate IDs');
 if(!text.includes('id="main"')||!text.includes('<h1>')||!text.includes('lang="en"'))errors.push(name+': missing semantics');
 if(text.includes('katex-error')||text.includes('undefined')||text.includes('NaN'))errors.push(name+': invalid rendered content');
 documents.set(resolve(root,name),{text,ids:new Set(ids)});
}
let links=0;
for(const [path,{text}] of documents)for(const match of text.matchAll(/\b(?:href|src)="([^"]+)"/g)){
 let target=match[1].replaceAll('&amp;','&');if(/^(?:https?:|mailto:|data:)/.test(target))continue;
 const [part,fragment]=target.split('#'),file=resolve(dirname(path),decodeURIComponent(part.split('?')[0]||path));links++;
 try{await stat(file);}catch{errors.push(`${path.split('/').at(-1)}: missing ${target}`);continue;}
 if(fragment&&documents.has(file)&&!documents.get(file).ids.has(decodeURIComponent(fragment)))errors.push(`${path.split('/').at(-1)}: missing anchor ${target}`);
}
const ex=documents.get(resolve(root,'experiments.html')).text;
if((ex.match(/data-lab="/g)||[]).length!==6||(ex.match(/<svg /g)||[]).length!==6)errors.push('Missing saved model figures');
for(const name of await readdir(resolve(root,'assets/figures'))){const s=await readFile(resolve(root,'assets/figures',name),'utf8');if(/<(?:image|script|foreignObject)\b|data:image/i.test(s))errors.push('Non-vector or active content: '+name);}
const summary=JSON.parse(await readFile(resolve(root,'docs/content-summary.json'),'utf8'));if(summary.entries!==100||summary.chapters!==10)errors.push('Wrong atlas size');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Checked ${pages.length} pages, ${links} local links, 100 entries, math markup, anchors, and six genuine vector figures.`);
