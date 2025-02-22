!function(){"use strict";const e=document,t=String,n=Number,i=Array,o=Object,r=Boolean,a=JSON,s=(URL,Date),l=Math,c=RegExp,d=Promise,u=Node,f=parseInt,h=isNaN,g=structuredClone,p=setTimeout,m=IntersectionObserver,y=/\{\{\s*(((CALC|LENGTH|UPPER|LOWER|DATE)\(\s*[\w\.\s\+\-\*\/\,\s\/\\:]+\s*\))|[\w\.]+)\s*\}\}/i,b=/\s+([\w\.]+)\s*$/i,k=/\s*[\!\>\<\=]+\=*\s*/,M=/([\w\.]+)\s*([\+\-\*\/\%])\s*([\d\.]+)/,w=/\.([\w_-]+)?/gi,C=/\#([\w_-]+)?/i,D=/^\w+(?=[\#\.]*)/i,A=":path",N=":for",I=":if",T=":else-if",E=":elif",x=":else",v="addEventListener",j="animation",L="appendChild",O="attributes",P="body",z="children",S="class",R="classList",Y="cloneNode",Z="createElement",H="createTextNode",B="data",U="effect",V="ELEMENT_NODE",$="error",_="event",W="from",G="getAttribute",X="head",q="id",Q="index",F="indexOf",J="innerHTML",K="isArray",ee="join",te="key",ne="keys",ie="lazyload",oe="length",re="toLowerCase",ae="match",se="next",le="nodeType",ce="now",de="observe",ue="parentElement",fe="parentNode",he="parse",ge="props",pe="push",me="querySelectorAll",ye="remove",be="removeAttribute",ke="render",Me="replace",we="script",Ce="setAttribute",De="shift",Ae="slice",Ne="splice",Ie="split",Te="src",Ee="startsWith",xe="stringify",ve="style",je="tag",Le="tagName",Oe="temp",Pe="test",ze="TEXT_NODE",Se="textContent",Re="toString",Ye="toUpperCase",Ze="trim",He="type",Be="unobserve",Ue="value",Ve="vdom",$e={[I]:null,[T]:null,[E]:null,[x]:null},_e={":id":"id",":src":Te,":alt":"alt",":href":"href",tagHtml:"innerHTML"},We={":margin":"margin",":padding":"padding",":border":"border",":border-radius":"borderRadius",":outline":"outline",":box-sahdow":"boxShadow",":background-image":"backgroundImage",":background-attachment":"backgroundAttachment",":background-blend-mode":"backgroundBlendMode",":background-clip":"backgroundClip",":background-origin":"backgroundOrigin",":background-position":"backgroundPosition",":background-position-x":"backgroundPositionX",":background-position-y":"backgroundPositionY",":background-repeat":"backgroundRepeat",":background-size":"backgroundSize",":background-color":"backgroundColor",":color":"color",":bg-image":"backgroundImage",":bg-attachment":"backgroundAttachment",":bg-blend-mode":"backgroundBlendMode",":bg-clip":"backgroundClip",":bg-origin":"backgroundOrigin",":bg-position":"backgroundPosition",":bg-position-x":"backgroundPositionX",":bg-position-y":"backgroundPositionY",":bg-repeat":"backgroundRepeat",":bg-size":"backgroundSize",":bg-color":"backgroundColor",":borderRadius":"borderRadius",":boxSahdow":"boxShadow",":backgroundImage":"backgroundImage",":backgroundAttachment":"backgroundAttachment",":backgroundBlendMode":"backgroundBlendMode",":backgroundClip":"backgroundClip",":backgroundOrigin":"backgroundOrigin",":backgroundPosition":"backgroundPosition",":backgroundPositionX":"backgroundPositionX",":backgroundPositionY":"backgroundPositionY",":backgroundRepeat":"backgroundRepeat",":backgroundSize":"backgroundSize",":backgroundColor":"backgroundColor"},Ge="beforeRender",Xe="beforeUpdate",qe="beforeDestroy",Qe="rendered",Fe="updated",Je="destroyed",Ke="before_render",et="before_update",tt="before_destroy",nt={create:"CREATE",append:"APPEND",replace:"REPLACE",text:"TEXT",prop:"PROP",remove:"REMOVE"},it={domId:"ID: 未提供。",dom:"元素: 不存在。",vdomModel:"虛擬 DOM: 未初始化。",vdomTemp:"虛擬 DOM: 未創建。"};e[X][L](st("style",'\n*[\\:effect="fade-in"],\n*[effect="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:effect="fade-in"].show,\n*[effect="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:effect="expand"],\n*[effect="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:effect="expand"].show,\n*[effect="expand"].show {\n    opacity: 1;\n}\n\n*[\\:animation="fade-in"],\n*[animation="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:animation="fade-in"].show,\n*[animation="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:animation="expand"],\n*[animation="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:animation="expand"].show,\n*[animation="expand"].show {\n    opacity: 1;\n}\n\n*[\\:mask="1=true"],\n*[mask="true"],\n*[\\:mask="1"],\n*[mask="1"] {\n    position: relative;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"]::after,\n*[mask="1"]::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(to right, #e0e0e0 25%, #f0f0f0, #e0e0e0 75%);\n    /* 使用灰色漸層 */\n    background-size: 200% 100%;\n    /* 背景尺寸兩倍寬度 */\n    animation: loading-animation 1.5s infinite alternate;\n    /* 來回移動動畫 */\n    z-index: 10;\n    transition: 0.3s;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"].show::after,\n*[mask="1"].show::after {\n    opacity: 0;\n}\n\n@keyframes loading-animation {\n    0% {\n        background-position: -100% 0;\n    }\n\n    100% {\n        background-position: 100% 0;\n    }\n}\n\nimg[lazyload]:not([lazyload=""]):[effect="circle"] {\n    animation: spin 2s ease-in-out infinite;\n    width: 1.25rem !important;\n    height: 1.25rem !important;\n}\n\nimg[lazyload]:not([lazyload=""]):not([effect="circle"]) {\n    min-width: 1.25rem !important;\n    min-height: 1.25rem !important;\n    border-radius: 0.625rem !important;\n    background: linear-gradient(90deg, #e0e0e0 15%, #f0f0f0, #e0e0e0 85%);\n    background-size: 200% 100%;\n    animation: shimmer 1.5s infinite;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes shimmer {\n    0% {\n        background-position: 200% 0;\n    }\n    100% {\n        background-position: -200% 0;\n    }\n}'));const ot="\ndata:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI1OTVfMzA1OSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDEwQzE2IDExLjc3NyAxNS4yMjc1IDEzLjM3MzYgMTQgMTQuNDcyMkMxMi45Mzg1IDE1LjQyMjMgMTEuNTM2NyAxNiAxMCAxNlYyMEMxMS40MjIyIDIwIDEyLjc3NTEgMTkuNzAzMSAxNCAxOS4xNjc5QzE3LjUzMTggMTcuNjI0OCAyMCAxNC4xMDA2IDIwIDEwQzIwIDUuODk5MzYgMTcuNTMxOCAyLjM3NTIgMTQgMC44MzIwODdDMTIuNzc1MSAwLjI5Njg5NSAxMS40MjIyIDAgMTAgMFY0QzExLjUzNjcgNCAxMi45Mzg1IDQuNTc3NzEgMTQgNS41Mjc3OUMxNS4yMjc1IDYuNjI2NDMgMTYgOC4yMjMgMTYgMTBaIiBmaWxsPSIjMzQ5OERCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCAxMEM0IDExLjc3NyA0Ljc3MjUgMTMuMzczNiA2IDE0LjQ3MjJDNy4wNjE1MSAxNS40MjIzIDguNDYzMjkgMTYgMTAgMTZWMjBDOC41Nzc3OSAyMCA3LjIyNDkyIDE5LjcwMzEgNiAxOS4xNjc5QzIuNDY4MTkgMTcuNjI0OCAwIDE0LjEwMDYgMCAxMEMwIDUuODk5MzYgMi40NjgxOSAyLjM3NTIgNiAwLjgzMjA4N0M3LjIyNDkyIDAuMjk2ODk1IDguNTc3NzkgMCAxMCAwVjRDOC40NjMyOSA0IDcuMDYxNTEgNC41Nzc3MSA2IDUuNTI3NzlDNC43NzI1IDYuNjI2NDMgNCA4LjIyMyA0IDEwWiIgZmlsbD0iI0Q5RDlEOSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI1OTVfMzA1OSI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K\n";function rt(e,t,i){return e=n(e),i=n(i),h(e)||h(i)?void 0:"+"===t?e+i:"-"===t?e-i:"*"===t?e*i:"/"===t?e/i:"%"===t?e%i:e}async function at(e,t=!1){try{await fetch(e,{method:"HEAD",mode:"cors"});return await async function(e,t){return new Promise((async(n,i)=>{try{const o=await fetch(e);if(o.ok){const e=o.headers.get("Content-Type");if(e&&e.startsWith("image")){if("image/svg+xml"==e&&!t)return void n(o);const i=await o.blob(),r=new Image,a=URL.createObjectURL(i);r.src=a,r.crossOrigin="anonymous",r.onload=e=>n({src:a,img:r}),r.onerror=e=>{throw URL.revokeObjectURL(a),e}}else n(o)}else i(new Error("HTTP error"))}catch(e){i(e)}}))}(e,t)}catch(e){throw e}}function st(n="",o,r){const a=((n[ae](D)||[])[0]||"")[Ze](),s=((n[ae](C)||[])[1]||"")[Ze](),l=(w[Pe](n)&&n[ae](w)||[]).map((e=>e[Me](/^\./,"")));if(a[oe]<1)return;let c,d,u,f=!1;"temp"===n?(f=!0,c=e.createDocumentFragment()):c=e[Z](a),s[oe]&&(c[q]=s);for(let e of l)c[R].add(e);if(null==o&&null!=r&&([o,r]=[r,null]),null!=o&&null!=r)[d,u]=[o,r];else if(null==r)"string"==typeof o||"number"==typeof o||i[K](o)?u=o:d=o;else if(null==o)return c;if("object"==typeof d&&null!=d)for(const e in d){if(!d.hasOwnProperty(e))continue;const t=d[e];-1!=["value","innerText",J,"textContent","contentEditable"][F](e)?c[e]=t:-1!=["color","backgroundColor","width","height","display","float"][F](e)?c[ve][e]=t:null!=t&&c[Ce](e,t)}if(null!=u){const n="string"==typeof u,o="number"==typeof u,r=i[K](u);if(n||o){const t=u;"img"===a||"source"===a?c[Te]=t:f?c[L](e[H](u)):c[J]=t}else if(r)for(let n of u){const i=n instanceof Element;"string"==typeof n||"number"==typeof n?c[L](e[H](t(n))):i&&c[L](n)}}return c}function lt(e,t,n){return new Proxy(e,{get(e,i,o){const r=Reflect.get(e,i,o),a=t?`${t}.${i[Re]()}`:i[Re]();return"object"==typeof r&&null!==r?lt(r,a,n):r},set(e,i,o,r){const a=e[i],s=Reflect.set(e,i,o,r),l=t?`${t}.${i[Re]()}`:i[Re]();return a!==o&&n(l,o,a),s}})}function ct(e,n="yyyy/MM/DD (ddd) HH:mm:ss"){const i=new Date(1e3*e),o=t(i.getFullYear()),r=t(i.getMonth()+1),a=t(i.getDate()),s=t(i.getDay()),l=t(i.getHours()),c=t(i.getMinutes()),d=t(i.getSeconds()),u=t(i.getMilliseconds());let h={YYYY:o,yyyy:o,YY:o[Ae](-2),yy:o[Ae](-2),Y:o[Ae](-2),y:o[Ae](-2),M:r,MM:("0"+r)[Ae](-2),D:a,DD:("0"+a)[Ae](-2),d:s,dd:("0"+s)[Ae](-2),H:l,HH:("0"+l)[Ae](-2),h:t(f(l)%12||12),hh:("0"+(f(l)%12||12))[Ae](-2),m:c,mm:("0"+c)[Ae](-2),s:d,ss:("0"+d)[Ae](-2),SSS:("00"+u)[Ae](-3),a:f(l)>=12?"pm":"am",A:f(l)>=12?"PM":"AM"};const g=/zh/.test(navigator.language||"")?["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return h.ddd=g[f(s)][Ae](0,3),h.dddd=g[f(s)],n.replace(/YYYY|YY|Y|yyyy|yy|y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|a|A|ddd|dddd/g,(e=>h[e]))}let dt,ut,ft=new Map;function ht(e){return pt(gt(e[Ze]()[Me](/\s*([\{\}\[\]\:,])\s*/g,"$1")))}function gt(e){const t=[];let n=0;for(;n<e[oe];){let i=mt(e,n),o=yt(e,n);if(null==o&&null==i)break;if(null!=o&&null==i)t[pe](o[Ue]),n=o[se];else if(null!=i){let o={[je]:i[je],[q]:i[q],[S]:i[S],[O]:{}};if(i.isShorthand){const t=kt(e,n);t[Ue].length>0&&(o[z]=t[Ue]),n=t[se]}else{for(;n<e[oe]&&"}"!==e[n];){if(e[Ae](n,n+9)===z+":"){n+=9;const t=kt(e,n);o[z]=t[Ue],n=t[se];continue}const t=bt(e,n,[q,S,z]);t?(o[O][t[te]]=t[Ue],n=t[se]):n++}n++}t[pe](o)}}return t}function pt(t){const n=st(Oe);if(!i[K](t))return n;for(let i of t){if(null==t)continue;const o=i[je]+(null==i[q]?"":"#"+i[q])+(null==i[S]?"":"."+i[S][Me](/\s/g,".")),r="string"==typeof i?e[H](i):st(o,i[O]||{});if(null!=r)if("string"!=typeof i)r[L](pt(i[z])),n[L](r);else{let t=e[Z]("section");t.innerHTML=i;for(let i of[...t.childNodes])if(i.nodeType===Node.TEXT_NODE){const t=String(i.nodeValue).trim(),o=e[H](t);n[L](o)}else n[L](i)}}return n}function mt(e,t){let n=t,i="",o="",r=[];for(;/[\s\,]/[Pe](e[n]);)n++;for(;/[a-zA-Z1-6]/[Pe](e[n]);)i+=e[n],n++;if("#"===e[n])for(n++;/[a-zA-Z0-9_-]/[Pe](e[n]);)o+=e[n],n++;for(;"."===e[n];){n++;let t="";for(;/[a-zA-Z0-9_-]/[Pe](e[n]);)t+=e[n],n++;r[pe](t)}const a=r[ee](" ");for(;/\s/[Pe](e[n]);)n++;return"{"===e[n]||"["===e[n]?(n++,{[je]:i[Ze](),[q]:o||null,[S]:a||null,[se]:n,isShorthand:"["===e[n-1]}):null}function yt(e,t){let n=t,i="";for(;/\s/[Pe](e[n]);)n++;for(;'"'!==e[n];)n++;for(n++;'"'!==e[n];)i+=e[n],n++;return n++,{[Ue]:i,[se]:n}}function bt(e,t,n=[]){let i=t,o="",r="";for(;/\s/[Pe](e[i]);)i++;for(;/[a-zA-Z_-]/[Pe](e[i]);)o+=e[i],i++;if(n.includes(o[Ze]()))return null;if(":"===e[i]){i++;const t=yt(e,i);return r=t[Ue],i=t[se],{[te]:o[Ze](),[Ue]:r,[se]:i}}return null}function kt(e,t){let n=t,i=[],o=0,r="";for(;/\s/[Pe](e[n]);)n++;for(;"["!==e[n];)n++;for(n++;n<e[oe];){const t=e[n];if("["===t||"{"===t)o++,r+=t;else if("]"===t){if(0===o){r.trim()&&(i=gt(r));break}o--,r+=t}else"}"===t?(o--,r+=t):r+=t;n++}return{[Ue]:i,[se]:n+1}}function Mt(t,...n){const i=st(we,`console.${t}.apply(void 0, ${a[xe](n)});`);e[P][L](i),i[ye]()}class wt{#e;#t;#n;#i;#o;#r;#a;#s;#l;constructor(e={}){this.#e=e[Ke]||void 0,this.#t=e[Qe]||void 0,this.#n=e[et]||void 0,this.#i=e[Fe]||void 0,this.#o=e[tt]||void 0,this.#r=e[Je]||void 0}async#c(e){return new d(((t,n)=>{t(!1!==e())}))}#d(e){e(!1)}async render(e){this.#a=s.now(),null!=this.#e&&!1===await this.#c(this.#e)||(await e(),this.#s=s[ce]()-this.#a,Mt("log","渲染耗時:",this.#s/1e3),null!=this.#t&&this.#d(this.#t))}async update(e){clearTimeout(this.#l),this.#l=p((async()=>{this.#a=s.now(),null!=this.#n&&!1===await this.#c(this.#n)||(await e(),this.#s=s[ce]()-this.#a,Mt("log","更新耗時:",this.#s/1e3),null!=this.#i&&this.#d(this.#i))}),300)}async destroy(e){this.#a=s.now(),null!=this.#o&&!1===await this.#c(this.#o)||(await e(),this.#s=s[ce]()-this.#a,Mt("log","銷毀耗時:",this.#s/1e3),null!=this.#r&&this.#d(this.#r))}}var Ct;window.QUI=class{body;data={};event={};isScheduled=!1;lazyloadObserver;#u=!0;#f=null;#h=null;#g=null;#p=null;constructor(n){const o=t(n[q]||"")[Ze]();let r;if(o[oe]<1){if("function"!=typeof n[ke])return void Mt($,it.domId);{const t=n[ke]();r=e.createElement("section"),r.id=function(e){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n=t[oe];let o="";do{o=i[W]({length:e},(e=>t.charAt(l.floor(l.random()*n))))[ee]("")}while(ft.has(o));return ft.set(o,1),o}(64),r.className="QUIFragment",r[L](ht(t))}}else r=e.getElementById(o);if(null!=r){if(this.#f=r[Y](!0),this.#g=new Dt(this.#f),"function"==typeof n[ke]){const e=n[ke](),t=st(Oe),i=r[Y](!0);t[L](ht(e)),i.replaceChildren(t),this.#f=i}this.#m(n).then((e=>{this[P]=r,this[B]=n.once?e:lt(e,"",(e=>{this.#p?.update((()=>this.#y()))})),this[_]=n[_]||{};const t=n.option||{};!1!==t.svg&&function(){ut=new m((async(e,t)=>{for(let t of e){const e=t.target;if(!t.isIntersecting)continue;const n=(e[G](Te)||"")[Ze]();if(n[oe]<1)return;await at(n).then((t=>{ut[Be](e),t.text().then((t=>{const n=st("div");n[J]=t;const i=n[z][0];i.id=e.id,e.classList.forEach((e=>i.classList.add(e))),i.onclick=e.onclick,null!=e[ue]&&e[ue].insertBefore(i,e),e.remove()})).catch((t=>{e[J]="☒"}))})).catch((t=>{e[J]="☒"}))}}));for(let e of[][Ae].call(document.body.querySelectorAll("temp-svg[src]:not([src=''])")||[]))ut[de](e)}(),!1!==t[ie]&&(!function(){dt=new m(((e,t)=>{const n=[];for(let t of e){const e=t.target;if(!t.isIntersecting)continue;dt[Be](e);const i=(e[G](ie)||"")[Ze]();i[oe]>0&&n.push({dom:e,src:i})}Promise.all(n.map((({dom:e,src:t})=>at(t,!0).then((t=>{e[Te]=t[Te]})).catch((n=>{n instanceof TypeError&&n.message.includes("Load failed")||n instanceof Event?e[Te]=t:e[Te]="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg"})).finally((()=>{e[be](ie),e[be](U)})))))}));const e=document.body.querySelectorAll("img[lazyload]:not([lazyload=''])");for(let t of i[W](e))dt[de](t)}(),this.lazyloadObserver=dt);const o=n.when||n.lifecycle||n||{};this.#p=new wt({before_render:o[Ke]||o[Ge],rendered:o[Qe],before_update:o[et]||o[Xe],updated:o[Fe],before_destroy:o[tt]||o[qe],destroyed:o[Je]}),this.#p.render((async()=>{await this.#y(),this.#u=!1}))}))}else Mt($,it.dom)}async fragment(){await this.#y();let e=new DocumentFragment;for(let t of[...this[P].childNodes])if(t.nodeType===Node.TEXT_NODE){const n=String(t.nodeValue).trim();e.appendChild(document.createTextNode(n))}else e.appendChild(t.cloneNode(!0));return e}lang(e){o.hasOwn(this.data.quickui_i18n,e)&&(this.data.quickui_i18nLang=e)}async#m(e={}){let t=e[B]||{};if("object"==typeof e.i18n&&null!=e.i18n){const n=e.i18n;t.quickui_i18n={};for(const[e,i]of Object.entries(n))if("string"==typeof i&&i.trim().length>0)try{const n=await fetch(i.trim());if(!n.ok)throw new Error(`Failed to load i18n file for ${e}`);const o=await n.json();t.quickui_i18n[e]=o}catch(n){t.quickui_i18n[e]={}}else t.quickui_i18n[e]=i}else t.quickui_i18n={};return t.quickui_i18nLang=e.i18nLang||"zh",t}#y(){return new d((async e=>{null!=this.#f?(this.#h=new Dt(this.#f),null!=this.#h?(this.#h[B]=a[he](a[xe](this[B])),await this.#h.updateChildren(),this.isScheduled=!0,requestAnimationFrame((()=>{this.#b(),this.isScheduled=!1,e(!0)}))):Mt($,it.vdomTemp)):Mt($,it.vdomModel)}))}#b(){const e=this[P];if(null==e)return void Mt("error",it.dom);const t=this.#h?.getPatches(this.#g);i[K](t)&&this.#k(e,t);for(let t of e[me]("*[\\:if]"))t[be](":if");e[R].add("show"),"expand"!=e[G](U)&&"expand"!=e[G](j)||(e[ve].minHeight=e.scrollHeight+"px"),p((()=>{e[be](U),e[be](j),e[be]("mask"),e[R][ye]("fade-in"),e[R][ye]("loading-block"),e[R][ye]("expand"),e[R][ye]("show")}),300),this.#g=this.#h,this.#h=null}#k(e,t){if(null!=e&&i[K](t)){this.#M(e,t);for(const n of t){const{index:t}=n,i=a[he](a[xe](t||[]));let o;n.type===nt.append&&(o=i?.pop());const r=i?this.#w(e,i):e;r&&(n.type===nt.create&&Ve in n?this.#C(r,n):n.type===nt.replace&&Ve in n&&null!=r[fe]?this.#D(r,n):n.type===nt.append&&Ve in n&&null!=o?this.#A(r,n,o):n.type===nt.prop&&te in n&&Ue in n&&r instanceof Element?this.#N(r,n.key,n.value,n[Ve]):n.type===nt.text&&Ue in n&&r.nodeType===u[ze]&&(r[Se]=n.value||""))}}}#M(e,t){const n=t.filter((e=>e.type===nt.remove)).sort(((e,t)=>{const n=(t.index.length||0)-(e.index.length||0);if(0!==n)return n;for(let n=0;n<(e.index.length||0);n++)if((e.index[n]||0)!==(t.index[n]||0))return(t.index[n]||0)-(e.index[n]||0);return 0}));for(const t of n){const n=this.#w(e,t.index);null!=n&&null!=n[fe]&&n[fe].removeChild(n)}}#C(t,n){if(n.type!==nt.create||!(Ve in n))return;const i="string"==typeof n[Ve]?e[H](n[Ve]):this.#I(n[Ve]);null!=t[ue]&&t[ue][L](i)}#D(t,n){if(n.type!==nt.replace||!(Ve in n)||null==t[fe])return;const i="string"==typeof n[Ve]?e[H](n[Ve]):this.#I(n[Ve]);if(t[fe].replaceChild(i,t),!(i instanceof Text||"string"==typeof n[Ve])){for(const e in n[Ve][ge])this.#N(i,e,n[Ve][ge][e]||"",n[Ve]);this.#T(n[Ve],i)}}#A(t,n,i){if(n.type!==nt.append||!(Ve in n)||null==i)return;const r="string"==typeof n[Ve]?e[H](n[Ve]):this.#I(n[Ve]);if(i+1>t[z][oe]?t[L](r):t.insertBefore(r,t[z][i+1]),"string"!=typeof n[Ve]){for(const[e,r]of o.entries(n[Ve][ge]))this.#N(t[z][i],e,r||"",n[Ve]);this.#T(n[Ve],t[z][i])}}#N(e,t,n,i){let o=n;if(n&&"string"==typeof n&&n.startsWith("i18n.")){const e=n.replace(/^i18n\./,""),t=this[B].quickui_i18nLang,i=this[B].quickui_i18n[t];i&&i[e]&&(o=i[e])}null==o?e[be](t):t[Ee](":@")||t[Ee]("@")?this.#E(e,t,o,i):t[re]()[Ee](":model")?this.#x(e,t,o):t[Ee](":")?this.#v(e,t,o,i):null!=e&&e[Ce](t,o),e&&e[G]&&e[G](N)&&e[be](N)}#E(e,t,n,i){(()=>{if(!1===t[Ee]("@"))return;const o=t[Me](/^\@/,"on"),r=this.#j(n,i[B])||n,a=this[_][r];e[o]=a})(),e[be](t)}#x(t,n,i){if(null==i||!/(input|select|textarea)/i[Pe](t[Le]))return;const o=t instanceof HTMLInputElement,r=t instanceof HTMLTextAreaElement,a=t instanceof HTMLSelectElement,s=t[G]("type");!o||"checkbox"!==s&&"radio"!==s?a?t[v]("change",(e=>{this[B][i]=e.target[Ue]||""})):(o||r)&&(t[v]("keyup",(e=>{this[B][i]=e.target[Ue]||""})),t[v]("change",(e=>{this[B][i]=e.target[Ue]||""}))):t[v]("change",(t=>{this[B][i]=[...e.body.querySelectorAll("input[name='"+t.target.name+"'][type='"+s+"']:checked")].map((e=>e.value)).join(",")})),t[be](n)}#v(e,t,n,i){const o=t[re](),a=null==this.#j(n,i[B])?n:this.#j(n,i[B]),s=(_e[o]||"")[Ze](),l=(We[o]||"")[Ze](),c=t[Re]()[Me](/^\:/g,"")[Me](/-+/g," ")[Me](/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e[re]():e[Ye]()}))[Me](/\s+/g,"");if(o===":"+ie&&n[Ze]()[oe]>0)if(this.#u){const t=e[G](":"+U)||"";e.src="circle"===t?ot:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px'/%3E",dt[de](e)}else{if(null==e[G](ie))return void(e.src=a);e.src=ot,dt[de](e)}if(":html"===o&&n[Ze]()[oe]>0)e[J]=a||n;else if(o===N||o in $e);else if(":src"===o&&"temp-svg"===i.tag[re]()&&n[Ze]()[oe]>0){const t=this.#j(n,i[B])||n;e[Ce](Te,t),ut[de](e)}else o in _e?e[s]=a:o in We?e[ve][l]=a:!(c in e[ve])||t===":"+j&&/(fade-in|expand)/[Pe](n)?":hide"===o&&r(h(+a)?a:+a)?e[ve].display="none":e[Ce](`${t[Me](/^:/,"")}`,a):e[ve][c]=a;e[be](t)}#T(e,t){if("string"!=typeof e)for(const n in e.children.filter((e=>"string"!=typeof e))){if(null==t)continue;const i=e.children[+n],r=t.children[+n];if("string"!=typeof i){for(const[e,t]of o.entries(i[ge]))this.#N(r,e,t||"",i);this.#T(i,r)}}}#j(e,n){if(e[Ze]()[oe]<1)return;const r=y[Pe](e);let a="",s="";r&&(a=e[Ie](y)[0]||"",s=e[Ie](y)[4]||"",e=e[ae](y)[1]);const l=/^LENGTH\(.+\)/[Pe](e);l&&(e=e[Me](/^LENGTH\(|\)$/g,""));const c=/^CALC\(.*\)$/[Pe](e);let d="",u=0;if(c){const t=(e=e[Me](/^CALC\(|\)$/g,""))[ae](M);e=t[1],d=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[Pe](e),h=/^LOWER\(.*\)$/[Pe](e);(f||h)&&(e=e[Me](/^(UPPER|LOWER)\(|\)$/g,""));const g=/^DATE\([\w\,\-\s\:]*\)$/[Pe](e);let p="";if(g){const t=(e=e[Me](/^DATE\(|\)$/g,""))[ae](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let m=e[Ie](/\./),b=n||this[B],k=m[0],w=b[k];for(m[De]();m[oe]>0;)b=w||{},k=m[0],w=b[k],m[De]();if(null==w)for(m=e[Ie](/\./),b=this[B],k=m[0],w=b[k],m[De]();m[oe]>0;)b=w||{},k=m[0],w=b[k],m[De]();let C="";if(null!=w&&w instanceof Object&&!i[K](w)?C=t(o[ne](w)[oe]):null!=w&&(C=w[oe]),r){if(l)return a+C+s;if(c&&(w=rt(w,d,u),null==w))return;return a+w+s}if(l)return C;if(c){if(w=rt(w,d,u),null==w)return}else{if(f)return w[Ye]();if(h)return w[re]();if(g)return ct(+w,p)}return w}#w(e,t){let n=e,o=i.from(n.childNodes).filter((e=>e.nodeType===u[V]||e.nodeType===u[ze]&&""!==e[Se]?.trim()))||[];for(const e of t)n=o[e],null!=n&&(o=i.from(n.childNodes).filter((e=>e.nodeType===u[V]||e.nodeType===u[ze]&&""!==e[Se]?.trim()))||[]);return n}#I(t){const n=e.createElement(t.tag);if(t[ge])for(const[e,i]of o.entries(t[ge]))e[Ee](":")||e[Ee]("@")||void 0!==i&&n[Ce](e,i);for(const i of t[z])"string"==typeof i?n[L](e[H](i)):n[L](this.#I(i));return n}};class Dt{tag="";props={};children=[];data=null;constructor(t){if(t[Le][re]()===we){let n=!1;for(const i of e[X][me](we)||[])if(null!=t[Te]&&i[Te]===t[Te]||null!=t[Se]&&i[Se]===t[Se]){n=!0;break}n||e[X][L](t),this[je]=we}this[je]=t[Le][re](),this[ge]=[...t.attributes].reduce(((e,t)=>(e[t.name]=t.value.trim(),e)),{}),this[z]=function(e){return i[W](e.childNodes).filter((e=>e[le]===u[V]||e[le]===u[ze]&&e[Se]&&e[Se][Ze]()[oe]>0))}(t).map((e=>e.nodeType===Node[V]?new Ct(e):(e[Se]||"")[Ze]()))}async updateChildren(){this.#L(this),this.#O(this),await this.#P(this),this.#L(this),this.#O(this),this.#z(this)}getPatches(e){return this.#S(e,this)}#L(e){let t=0;if(!("string"==typeof e||e[z][oe]<1)){for(;t<e[z][oe];){const n=e[z][t];if("string"==typeof n||null==n){t++;continue}if(null==n[B]&&(n[B]=e[B]),!(N in n[ge])){t++;continue}const o=n[ge][N],r=(o[ae](/^\(?\s*(\w+)/)||[])[1],s=(o[ae](/\,\s*(\w+)/)||[])[1],l=(o[ae](b)||[])[1];let c=this.#j(l,e[B]),d=[];if(delete n[ge][N],i[K](c)){c=a[he](a[xe](c));for(const e in c){const t=a[he](a[xe](c[+e]));let i=g(n);i[B]=a[he](a[xe]({[r]:t,[l]:c})),null!=s&&(i[B][s]=+e),d.push(i)}e[z][Ne](t,1,...d),t+=d[oe]-2}else if(null!=c&&"object"==typeof c){c=a[he](a[xe](c));for(const e in c){const t=a[he](a[xe](c[e]));let i=g(n);i[B]=a[he](a[xe]({[r]:e,[s]:t,[l]:c})),d.push(i)}e[z][Ne](t,1,...d),t+=d[oe]-2}else t++}for(let t of e[z])this.#L(t)}}#O(e){let i=0;if(!("string"==typeof e||e[z][oe]<1)){for(;i<e[z][oe];){const o=e[z][i];if("string"==typeof o){i++;continue}if(!(I in o[ge])){delete o[ge][T],delete o[ge][E],delete o[ge][x],i++;continue}let a=i+1,s=e[z][a],l=[i],c=!1;(()=>{if(null==s||"string"==typeof s)return void(c=!0);const t=s[ge]||{};for(c=null==(t[T]||t[E]||t[x]);!c;){if(l[pe](a),a+=1,s=e[z][a],null==s||"string"==typeof s){c=!0;continue}const t=s[ge]||{};c=null==(t[T]||t[E]||t[x])}})();let d=!1,u=!1;(()=>{for(let o of l){const a=e[z][o];if(null==a||"string"==typeof a)return;const s=a[ge][I]||a[ge][T]||a[ge][E],c=null!=a[ge][x];if(c&&(u=!0),d)return;if(c)e[z][Ne](i,l.length,a);else if(null!=s){const o=s[Ie](k)[0],c=s[Ie](k)[1],u=((s[ae](k)||[])[0]||"")[Ze](),f=this.#j(o,a[B]);if(null==c&&u[oe]<1?d=r(f):">"===u?d=(n(f)||0)>(n(c)||0):"<"===u?d=(n(f)||0)<(n(c)||0):">="===u||">=="===u?d=(n(f)||0)>=(n(c)||0):"<="===u||"<=="===u?d=(n(f)||0)<=(n(c)||0):"=="===u||"==="===u?d="null"==c?null==f:"true"==c?r(f):"false"==c?!r(f):"empty"==c?t(f||"")[oe]<1:t(f||"")==t(c):"!="!==u&&"!=="!==u||(d="null"==c?null!=f:"true"==c?!r(f):"false"==c?r(f):"empty"==c?t(f||"")[oe]>0:t(f||"")!=t(c)),d)return delete a[ge][I],void e[z][Ne](i,l.length,a)}}})(),d||u?d?i+=l.length-2:i++:e[z][Ne](i,l.length)}for(let t of e[z])this.#O(t)}}async#P(e){let t=0;if(!("string"==typeof e||e[z][oe]<1)){for(;t<e[z][oe];){const n=e[z][t];if("string"==typeof n){t++;continue}if(!(A in n[ge])||"temp"!=n.tag){t++;continue}const i=n[ge][A],o=this.#j(i,e[B])||i;delete n[ge][A],await fetch(o).then((async n=>{const i=st("div",await n.text()).cloneNode(!0),o=new Ct(i);e[z][Ne](t,1,...o[z]),t+=o[z][oe]-2})),t++}for(let t of e[z])await this.#P(t)}}translate(e){const t=this.data.quickui_i18nLang;if(!this.data.quickui_i18n[t])return e;const n=e.split(".");let i=this.data.quickui_i18n[t];for(const e of n)if(i=i[e],void 0===i)break;return void 0!==i?i:e}#z(e){let t=0;if(!("string"==typeof e||e[z][oe]<1)){for(;t<e[z][oe];){let n=e[z][t];if("string"==typeof n){for(let i of n[ae](new c(y,"g"))||[]){const n=e[z][t]||"",o=i[ae](y)||[];if(o[oe]<1)continue;const r=o[1]||"";if(!("string"!=typeof n||r.length<1)&&r[Ee]("i18n.")){const i=r[Me](/^i18n\./,""),o=this.translate(i);e[z][t]=n[Me](new c("{{\\s*?"+r[Me](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),o)}}for(let i of n[ae](new c(y,"g"))||[]){const n=e[z][t]||"",o=i[ae](y)||[];if(o[oe]<1)continue;const r=o[1]||"",a=this.#j(r,e[B]);"string"!=typeof n||r.length<1||null==a||(e[z][t]=n[Me](new c("{{\\s*?"+r[Me](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),a))}}else null!=n&&null==n[B]&&(n[B]=e[B]);t++}for(let t of e[z])this.#z(t)}}#j(e,n){if(e[Ze]()[oe]<1)return;const r=y[Pe](e);let a="",s="";r&&(a=e[Ie](y)[0]||"",s=e[Ie](y)[4]||"",e=e[ae](y)[1]);const l=/^LENGTH\(.+\)/[Pe](e);l&&(e=e[Me](/^LENGTH\(|\)$/g,""));const c=/^CALC\(.*\)$/[Pe](e);let d="",u=0;if(c){const t=(e=e[Me](/^CALC\(|\)$/g,""))[ae](M);e=t[1],d=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[Pe](e),h=/^LOWER\(.*\)$/[Pe](e);(f||h)&&(e=e[Me](/^(UPPER|LOWER)\(|\)$/g,""));const g=/^DATE\([\w\,\-\s\:]*\)$/[Pe](e);let p="";if(g){const t=(e=e[Me](/^DATE\(|\)$/g,""))[ae](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let m=e[Ie](/\./),b=n||this[B],k=m[0],w=b[k];for(m[De]();m[oe]>0;)b=w||{},k=m[0],w=b[k],m[De]();if(null==w)for(m=e[Ie](/\./),b=this[B],k=m[0],w=b[k],m[De]();m[oe]>0;)b=w||{},k=m[0],w=b[k],m[De]();let C="";if(null!=w&&w instanceof Object&&!i[K](w)?C=t(o[ne](w)[oe]):null!=w&&(C=w[oe]),r){if(l)return a+C+s;if(c&&(w=rt(w,d,u),null==w))return;return a+w+s}if(l)return C;if(c){if(w=rt(w,d,u),null==w)return}else{if(f)return w[Ye]();if(h)return w[re]();if(g)return ct(+w,p)}return w}#S(e,t,n=[]){if(null==e&&t)return[{[He]:nt.create,[Q]:n,[Ve]:t}];if(e&&!t)return[{[He]:nt.remove,[Q]:n}];if(!e&&!t)return[];if(e.tag!==t.tag)return[{[He]:nt[Me],[Q]:n,[Ve]:t}];const i=[];return i[pe](...this.#R(e,t,n)),i[pe](...this.#Y(e,t,n)),i}#R(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const i=[],r=e[ge]||{},a=o[ne](r)[oe],s=t[ge]||{},l=o[ne](s)[oe];if(l>0)for(let e in s){const o=s[e];i[pe]({[He]:nt.prop,[Ve]:t,key:e,value:o,[Q]:n})}if(a>0){if(l<1)for(let e in r)i[pe]({[He]:nt.prop,[Ve]:t,key:e,[Ue]:null,[Q]:n});for(let e in s)l>0&&!(e in s)&&i[pe]({[He]:nt.prop,[Ve]:t,key:e,[Ue]:null,[Q]:n})}return i}#Y(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const o=[],r=i[K](e[z])?e[z]:[],a=i[K](t[z])?t[z]:[],s=l.max(r[oe],a[oe]);for(let e=0;e<s;e++){const i=r[e],s=a[e],l=n.concat(e);if("string"==typeof i&&"string"==typeof s){if(i===s)continue;o[pe]({[He]:nt.text,[Ve]:t,[Ue]:s,[Q]:l})}else null==i?o[pe]({[He]:nt.append,[Ve]:s,[Q]:l}):null==s?o[pe]({[He]:nt.remove,index:l}):o[pe](...this.#S(i,s,l))}return o}}Ct=Dt}("undefined"==typeof window?window={}:window);