var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),l=a?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach(n=>{n.c(t)||(u.delete(n),n.f())}),0!==u.size&&l(d)}function f(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function y(){return g("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){n=""+n,t.data!==n&&(t.data=n)}function x(t,n){(null!=n||t.value)&&(t.value=n)}function k(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}let _,E,C=0,N={};function j(t,n,e,o,i,r,s,a=0){const c=16.666/o;let l="{\n";for(let t=0;t<=1;t+=c){const o=n+(e-n)*r(t);l+=100*t+`%{${s(o,1-o)}}\n`}const u=l+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${a}`;if(!N[d]){if(!_){const t=h("style");document.head.appendChild(t),_=t.sheet}N[d]=!0,_.insertRule(`@keyframes ${d} ${u}`,_.cssRules.length)}const f=t.style.animation||"";return t.style.animation=`${f?`${f}, `:""}${d} ${o}ms linear ${i}ms 1 both`,C+=1,d}function S(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--C&&l(()=>{if(C)return;let t=_.cssRules.length;for(;t--;)_.deleteRule(t);N={}})}function A(t){E=t}function B(){if(!E)throw new Error("Function called outside component initialization");return E}function T(t){B().$$.on_mount.push(t)}function F(){const t=B();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const i=k(n,e);o.slice().forEach(n=>{n.call(t,i)})}}}const L=[],M=[],O=[],z=[],P=Promise.resolve();let R,D=!1;function q(t){O.push(t)}function J(){const t=new Set;do{for(;L.length;){const t=L.shift();A(t),W(t.$$)}for(;M.length;)M.pop()();for(let n=0;n<O.length;n+=1){const e=O[n];t.has(e)||(e(),t.add(e))}O.length=0}while(L.length);for(;z.length;)z.pop()();D=!1}function W(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function X(t,n,e){t.dispatchEvent(k(`${n?"intro":"outro"}${e}`))}const G=new Set;let H;function I(){H={r:0,c:[],p:H}}function K(){H.r||i(H.c),H=H.p}function Q(t,n){t&&t.i&&(G.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),H.c.push(()=>{G.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const V={duration:0};function Y(e,o,s,a){let f=o(e,s),p=a?0:1,m=null,h=null,g=null;function $(){g&&S(e,g)}function y(t,n){const e=t.b-p;return n*=Math.abs(e),{a:p,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function b(o){const{delay:r=0,duration:s=300,easing:a=n,tick:b=t,css:w}=f||V,v={start:c()+r,b:o};o||(v.group=H,H.r+=1),m?h=v:(w&&($(),g=j(e,p,o,s,r,a,w)),o&&b(0,1),m=y(v,s),q(()=>X(e,o,"start")),function(t){let n;0===u.size&&l(d),new Promise(e=>{u.add(n={c:t,f:e})})}(t=>{if(h&&t>h.start&&(m=y(h,s),h=null,X(e,m.b,"start"),w&&($(),g=j(e,p,m.b,m.duration,0,a,f.css))),m)if(t>=m.end)b(p=m.b,1-p),X(e,m.b,"end"),h||(m.b?$():--m.group.r||i(m.group.c)),m=null;else if(t>=m.start){const n=t-m.start;p=m.a+m.d*a(n/m.duration),b(p,1-p)}return!(!m&&!h)}))}return{run(t){r(f)?(R||(R=Promise.resolve(),R.then(()=>{R=null})),R).then(()=>{f=f(),b(t)}):b(t)},end(){$(),m=h=null}}}function Z(t,n){U(t,1,1,()=>{n.delete(t.key)})}function tt(t,n,e,o,i,r,s,a,c,l,u,d){let f=t.length,p=r.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const g=[],$=new Map,y=new Map;for(m=p;m--;){const t=d(i,r,m),a=e(t);let c=s.get(a);c?o&&c.p(t,n):(c=l(a,t),c.c()),$.set(a,g[m]=c),a in h&&y.set(a,Math.abs(m-h[a]))}const b=new Set,w=new Set;function v(t){Q(t,1),t.m(a,u),s.set(t.key,t),u=t.first,p--}for(;f&&p;){const n=g[p-1],e=t[f-1],o=n.key,i=e.key;n===e?(u=n.first,f--,p--):$.has(i)?!s.has(o)||b.has(o)?v(n):w.has(i)?f--:y.get(o)>y.get(i)?(w.add(o),v(n)):(b.add(i),f--):(c(e,s),f--)}for(;f--;){const n=t[f];$.has(n.key)||c(n,s)}for(;p;)v(g[p-1]);return g}function nt(t){t&&t.c()}function et(t,n,o){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=t.$$;s&&s.m(n,o),q(()=>{const n=a.map(e).filter(r);c?c.push(...n):i(n),t.$$.on_mount=[]}),l.forEach(q)}function ot(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){-1===t.$$.dirty[0]&&(L.push(t),D||(D=!0,P.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,e,r,s,a,c,l=[-1]){const u=E;A(n);const d=e.props||{},f=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let p=!1;f.ctx=r?r(n,d,(t,e,o=e)=>(f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(f.bound[t]&&f.bound[t](o),p&&it(n,t)),e)):[],f.update(),p=!0,i(f.before_update),f.fragment=!!s&&s(f.ctx),e.target&&(e.hydrate?f.fragment&&f.fragment.l(function(t){return Array.from(t.childNodes)}(e.target)):f.fragment&&f.fragment.c(),e.intro&&Q(n.$$.fragment),et(n,e.target,e.anchor),J()),A(u)}class st{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function at(t){const n=t-1;return n*n*n+1}function ct(t){return--t*t*t*t*t+1}function lt(t,{delay:n=0,duration:e=400,easing:o=at}){const i=getComputedStyle(t),r=+i.opacity,s=parseFloat(i.height),a=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),l=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),d=parseFloat(i.borderTopWidth),f=parseFloat(i.borderBottomWidth);return{delay:n,duration:e,easing:o,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*r};`+`height: ${t*s}px;`+`padding-top: ${t*a}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*l}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*d}px;`+`border-bottom-width: ${t*f}px;`}}function ut(t,{delay:n=0,duration:e=400,easing:o=at,start:i=0,opacity:r=0}){const s=getComputedStyle(t),a=+s.opacity,c="none"===s.transform?"":s.transform,l=1-i,u=a*(1-r);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${c} scale(${1-l*n});\n\t\t\topacity: ${a-u*n}\n\t\t`}}function dt(t){let n,e,o,i,r,s,a;return{c(){n=h("div"),e=g(t[0]),o=$(),i=h("button"),i.textContent="X",w(i,"class","svelte-40alrr"),w(n,"id","note"),w(n,"class","svelte-40alrr"),a=b(i,"click",t[1])},m(t,r){p(t,n,r),f(n,e),f(n,o),f(n,i),s=!0},p(t,[n]){(!s||1&n)&&v(e,t[0])},i(t){s||(q(()=>{r||(r=Y(n,ut,{duration:250,delay:10,opacity:.5,start:.5,easing:ct},!0)),r.run(1)}),s=!0)},o(t){r||(r=Y(n,ut,{duration:250,delay:10,opacity:.5,start:.5,easing:ct},!1)),r.run(0),s=!1},d(t){t&&m(n),t&&r&&r.end(),a()}}}function ft(t,n,e){let o=F(),{noteBody:i}=n,{id:r}=n;return t.$set=t=>{"noteBody"in t&&e(0,i=t.noteBody),"id"in t&&e(2,r=t.id)},[i,function(){o("delete-note",r)},r]}class pt extends st{constructor(t){super(),rt(this,t,ft,dt,s,{noteBody:0,id:2})}}function mt(t,n,e){const o=t.slice();return o[10]=n[e],o}function ht(t){let n,e,o=[],i=new Map,r=t[1];const s=t=>t[10].id;for(let n=0;n<r.length;n+=1){let e=mt(t,r,n),a=s(e);i.set(a,o[n]=gt(a,e))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=y()},m(t,i){for(let n=0;n<o.length;n+=1)o[n].m(t,i);p(t,n,i),e=!0},p(t,e){const r=t[1];I(),o=tt(o,e,s,1,t,r,i,n.parentNode,Z,gt,n,mt),K()},i(t){if(!e){for(let t=0;t<r.length;t+=1)Q(o[t]);e=!0}},o(t){for(let t=0;t<o.length;t+=1)U(o[t]);e=!1},d(t){for(let n=0;n<o.length;n+=1)o[n].d(t);t&&m(n)}}}function gt(t,n){let e,o;const i=new pt({props:{noteBody:n[10].body,id:n[10].id}});return i.$on("delete-note",n[4]),{key:t,first:null,c(){e=y(),nt(i.$$.fragment),this.first=e},m(t,n){p(t,e,n),et(i,t,n),o=!0},p(t,n){const e={};2&n&&(e.noteBody=t[10].body),2&n&&(e.id=t[10].id),i.$set(e)},i(t){o||(Q(i.$$.fragment,t),o=!0)},o(t){U(i.$$.fragment,t),o=!1},d(t){t&&m(e),ot(i,t)}}}function $t(t){let n,e,o,r,s,a,c,l,u,d,y,k,_,E,C,N,j=t[1]&&ht(t);return{c(){n=h("section"),e=h("div"),o=h("div"),r=h("div"),s=g(t[0]),a=$(),c=h("span"),c.textContent="X",l=$(),u=h("div"),d=h("input"),y=$(),k=h("button"),k.textContent="Add Note",_=$(),j&&j.c(),w(c,"class","delete-list svelte-hlk1r"),w(r,"class","name svelte-hlk1r"),w(d,"type","text"),w(d,"name","new-note"),w(d,"class","svelte-hlk1r"),w(k,"class","svelte-hlk1r"),w(u,"class","new-note svelte-hlk1r"),w(e,"class","list svelte-hlk1r"),N=[b(c,"click",t[5]),b(d,"input",t[9]),b(k,"click",t[3])]},m(i,m){p(i,n,m),f(n,e),f(e,o),f(o,r),f(r,s),f(r,a),f(r,c),f(e,l),f(e,u),f(u,d),x(d,t[2]),f(u,y),f(u,k),f(e,_),j&&j.m(e,null),C=!0},p(t,[n]){(!C||1&n)&&v(s,t[0]),4&n&&d.value!==t[2]&&x(d,t[2]),t[1]?j?(j.p(t,n),Q(j,1)):(j=ht(t),j.c(),Q(j,1),j.m(e,null)):j&&(I(),U(j,1,1,()=>{j=null}),K())},i(t){C||(Q(j),q(()=>{E||(E=Y(n,lt,{delay:50,duration:185,easing:ct},!0)),E.run(1)}),C=!0)},o(t){U(j),E||(E=Y(n,lt,{delay:50,duration:185,easing:ct},!1)),E.run(0),C=!1},d(t){t&&m(n),j&&j.d(),t&&E&&E.end(),i(N)}}}function yt(t,n,e){let o,i,r=F(),{id:s}=n,{name:a}=n;async function c(){const t=await fetch(`/list/${s}/notes`),n=await t.json();e(1,o=n.notes)}return T(()=>{c()}),t.$set=t=>{"id"in t&&e(6,s=t.id),"name"in t&&e(0,a=t.name)},[a,o,i,async function(){const t=await fetch("/addNote",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({body:i,list_id:s})});e(1,o=[await t.json(),...o]),e(2,i="")},async function(t){const n=t.detail;await fetch(`/deleteNote/${n}`,{method:"DELETE"});let i=o.filter(t=>t.id!==n);e(1,o=i)},function(){r("delete-list",s)},s,r,c,function(){i=this.value,e(2,i)}]}class bt extends st{constructor(t){super(),rt(this,t,yt,$t,s,{id:6,name:0})}}function wt(t,n,e){const o=t.slice();return o[6]=n[e],o[8]=e,o}function vt(t){let n,e,o=[],i=new Map,r=t[0];const s=t=>t[6].id;for(let n=0;n<r.length;n+=1){let e=wt(t,r,n),a=s(e);i.set(a,o[n]=xt(a,e))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=y()},m(t,i){for(let n=0;n<o.length;n+=1)o[n].m(t,i);p(t,n,i),e=!0},p(t,e){const r=t[0];I(),o=tt(o,e,s,1,t,r,i,n.parentNode,Z,xt,n,wt),K()},i(t){if(!e){for(let t=0;t<r.length;t+=1)Q(o[t]);e=!0}},o(t){for(let t=0;t<o.length;t+=1)U(o[t]);e=!1},d(t){for(let n=0;n<o.length;n+=1)o[n].d(t);t&&m(n)}}}function xt(t,n){let e,o;const i=new bt({props:{name:n[6].name,id:n[6].id}});return i.$on("delete-list",n[3]),{key:t,first:null,c(){e=y(),nt(i.$$.fragment),this.first=e},m(t,n){p(t,e,n),et(i,t,n),o=!0},p(t,n){const e={};1&n&&(e.name=t[6].name),1&n&&(e.id=t[6].id),i.$set(e)},i(t){o||(Q(i.$$.fragment,t),o=!0)},o(t){U(i.$$.fragment,t),o=!1},d(t){t&&m(e),ot(i,t)}}}function kt(t){let n,e,o,r,s,a,c,l,u=t[0]&&vt(t);return{c(){n=h("div"),e=h("input"),o=$(),r=h("button"),r.textContent="Add List",s=$(),a=h("div"),u&&u.c(),w(e,"type","text"),w(e,"name","newList"),w(e,"placeholder","New List Name"),w(e,"class","svelte-1eaiz3o"),w(r,"class","svelte-1eaiz3o"),w(n,"class","new-list svelte-1eaiz3o"),w(a,"class","column svelte-1eaiz3o"),l=[b(e,"input",t[5]),b(r,"click",t[2])]},m(i,l){p(i,n,l),f(n,e),x(e,t[1]),f(n,o),f(n,r),p(i,s,l),p(i,a,l),u&&u.m(a,null),c=!0},p(t,[n]){2&n&&e.value!==t[1]&&x(e,t[1]),t[0]?u?(u.p(t,n),Q(u,1)):(u=vt(t),u.c(),Q(u,1),u.m(a,null)):u&&(I(),U(u,1,1,()=>{u=null}),K())},i(t){c||(Q(u),c=!0)},o(t){U(u),c=!1},d(t){t&&m(n),t&&m(s),t&&m(a),u&&u.d(),i(l)}}}function _t(t,n,e){T(()=>{r()});let o,i=[];async function r(){const t=await fetch("/lists"),n=await t.json();e(0,i=n.lists),console.log(i)}return[i,o,async function(){const t=await fetch("/addList",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:o})});e(0,i=[...i,await t.json()]),e(1,o="")},async function(t){const n=t.detail;await fetch(`/deleteList/${n}`,{method:"DELETE"});let o=i.filter(t=>t.id!==n);e(0,i=o)},r,function(){o=this.value,e(1,o)}]}return new class extends st{constructor(t){super(),rt(this,t,_t,kt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
