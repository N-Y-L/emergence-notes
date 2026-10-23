// Copyright (c) 2026 Neil Yuanting Li. MIT License; see LICENSE-CODE.
import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)),pages=(await readdir(root)).filter(n=>n.endsWith('.html'));
const documents=new Map(),errors=[];
for(const name of pages){const text=await readFile(resolve(root,name),'utf8'),ids=[...text.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)errors.push(name+': duplicate IDs');
 if(!text.includes('id="main"')||!text.includes('<h1>')||!text.includes('lang="en"'))errors.push(name+': missing semantics');
 // The word 'undefined' is legitimate prose (for example at a vortex core).
 if(text.includes('katex-error')||/>\s*(?:undefined|NaN)\s*</.test(text)||/\b(?:href|src)="[^"]*(?:undefined|NaN)/.test(text))errors.push(name+': invalid rendered content');
 documents.set(resolve(root,name),{text,ids:new Set(ids)});
}
let links=0;
async function checkLink(path, target) {
 target=target.replaceAll('&amp;','&');
 if(/^(?:https?:|mailto:|data:)/.test(target))return;
 const [part,fragment]=target.split('#'),file=resolve(dirname(path),decodeURIComponent(part.split('?')[0]||path));links++;
 try{await stat(file);}catch{errors.push(`${path.split('/').at(-1)}: missing ${target}`);return;}
 if(fragment&&documents.has(file)&&!documents.get(file).ids.has(decodeURIComponent(fragment)))errors.push(`${path.split('/').at(-1)}: missing anchor ${target}`);
}
for(const [path,{text}] of documents)for(const match of text.matchAll(/\b(?:href|src)="([^"]+)"/g))await checkLink(path,match[1]);
for(const name of ['README.md','docs/notes.md','assets/README.md']) {
 const path=resolve(root,name),text=await readFile(path,'utf8');
 for(const match of text.matchAll(/\]\(([^)\s]+)\)/g))await checkLink(path,match[1]);
}
const ex=documents.get(resolve(root,'experiments.html')).text;
if((ex.match(/data-lab="/g)||[]).length!==6||(ex.match(/<svg /g)||[]).length!==6)errors.push('Missing saved model figures');
for(const name of await readdir(resolve(root,'assets/figures'))){const s=await readFile(resolve(root,'assets/figures',name),'utf8');if(/<(?:image|script|foreignObject)\b|data:image/i.test(s))errors.push('Non-vector or active content: '+name);}
const summary=JSON.parse(await readFile(resolve(root,'docs/content-summary.json'),'utf8'));if(summary.entries!==100||summary.chapters!==10)errors.push('Wrong entry or chapter count');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Checked ${pages.length} pages and their Markdown reading copies, ${links} local links, 100 entries, math markup, anchors, and six genuine vector figures.`);
