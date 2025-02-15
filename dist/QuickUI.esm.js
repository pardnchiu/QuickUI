!function(){"use strict";const e=document,t=String,n=Number,i=Array,o=Object,r=Boolean,a=JSON,s=(URL,Date),l=Math,c=RegExp,d=Promise,u=Node,f=parseInt,h=isNaN,g=structuredClone,p=setTimeout,m=IntersectionObserver,y=/\{\{\s*(((CALC|LENGTH|UPPER|LOWER|DATE)\(\s*[\w\.\s\+\-\*\/\,\s\/\\:]+\s*\))|[\w\.]+)\s*\}\}/i,b=/\s+([\w\.]+)\s*$/i,k=/\s*[\!\>\<\=]+\=*\s*/,M=/([\w\.]+)\s*([\+\-\*\/\%])\s*([\d\.]+)/,w=/\.([\w_-]+)?/gi,C=/\#([\w_-]+)?/i,D=/^\w+(?=[\#\.]*)/i,A=":path",I=":for",N=":if",x=":else-if",v=":elif",E=":else",T="addEventListener",j="animation",L="appendChild",P="attributes",O="body",z="children",S="class",R="classList",Y="cloneNode",Z="createTextNode",B="data",H="effect",U="ELEMENT_NODE",$="error",V="event",_="from",W="getAttribute",G="head",q="id",Q="index",X="indexOf",F="innerHTML",J="isArray",K="join",ee="key",te="keys",ne="lazyload",ie="length",oe="toLowerCase",re="match",ae="next",se="nodeType",le="now",ce="observe",de="parentElement",ue="parentNode",fe="parse",he="props",ge="push",pe="querySelectorAll",me="remove",ye="removeAttribute",be="render",ke="replace",Me="script",we="setAttribute",Ce="shift",De="slice",Ae="splice",Ie="split",Ne="src",xe="startsWith",ve="stringify",Ee="style",Te="tag",je="tagName",Le="temp",Pe="test",Oe="TEXT_NODE",ze="textContent",Se="toString",Re="toUpperCase",Ye="trim",Ze="type",Be="unobserve",He="value",Ue="vdom",$e={[N]:null,[x]:null,[v]:null,[E]:null},Ve={":id":"id",":src":Ne,":alt":"alt",":href":"href",tagHtml:"innerHTML"},_e={":margin":"margin",":padding":"padding",":border":"border",":border-radius":"borderRadius",":outline":"outline",":box-sahdow":"boxShadow",":background-image":"backgroundImage",":background-attachment":"backgroundAttachment",":background-blend-mode":"backgroundBlendMode",":background-clip":"backgroundClip",":background-origin":"backgroundOrigin",":background-position":"backgroundPosition",":background-position-x":"backgroundPositionX",":background-position-y":"backgroundPositionY",":background-repeat":"backgroundRepeat",":background-size":"backgroundSize",":background-color":"backgroundColor",":color":"color",":bg-image":"backgroundImage",":bg-attachment":"backgroundAttachment",":bg-blend-mode":"backgroundBlendMode",":bg-clip":"backgroundClip",":bg-origin":"backgroundOrigin",":bg-position":"backgroundPosition",":bg-position-x":"backgroundPositionX",":bg-position-y":"backgroundPositionY",":bg-repeat":"backgroundRepeat",":bg-size":"backgroundSize",":bg-color":"backgroundColor",":borderRadius":"borderRadius",":boxSahdow":"boxShadow",":backgroundImage":"backgroundImage",":backgroundAttachment":"backgroundAttachment",":backgroundBlendMode":"backgroundBlendMode",":backgroundClip":"backgroundClip",":backgroundOrigin":"backgroundOrigin",":backgroundPosition":"backgroundPosition",":backgroundPositionX":"backgroundPositionX",":backgroundPositionY":"backgroundPositionY",":backgroundRepeat":"backgroundRepeat",":backgroundSize":"backgroundSize",":backgroundColor":"backgroundColor"},We="beforeRender",Ge="beforeUpdate",qe="beforeDestroy",Qe="rendered",Xe="updated",Fe="destroyed",Je="before_render",Ke="before_update",et="before_destroy",tt={create:"CREATE",append:"APPEND",replace:"REPLACE",text:"TEXT",prop:"PROP",remove:"REMOVE"},nt={domId:"ID: 未提供。",dom:"元素: 不存在。",vdomModel:"虛擬 DOM: 未初始化。",vdomTemp:"虛擬 DOM: 未創建。"};e[G][L](at("style",'\n*[\\:effect="fade-in"],\n*[effect="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:effect="fade-in"].show,\n*[effect="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:effect="expand"],\n*[effect="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:effect="expand"].show,\n*[effect="expand"].show {\n    opacity: 1;\n}\n\n*[\\:animation="fade-in"],\n*[animation="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:animation="fade-in"].show,\n*[animation="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:animation="expand"],\n*[animation="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:animation="expand"].show,\n*[animation="expand"].show {\n    opacity: 1;\n}\n\n*[\\:mask="1=true"],\n*[mask="true"],\n*[\\:mask="1"],\n*[mask="1"] {\n    position: relative;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"]::after,\n*[mask="1"]::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(to right, #e0e0e0 25%, #f0f0f0, #e0e0e0 75%);\n    /* 使用灰色漸層 */\n    background-size: 200% 100%;\n    /* 背景尺寸兩倍寬度 */\n    animation: loading-animation 1.5s infinite alternate;\n    /* 來回移動動畫 */\n    z-index: 10;\n    transition: 0.3s;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"].show::after,\n*[mask="1"].show::after {\n    opacity: 0;\n}\n\n@keyframes loading-animation {\n    0% {\n        background-position: -100% 0;\n    }\n\n    100% {\n        background-position: 100% 0;\n    }\n}\n\nimg[lazyload]:not([lazyload=""]):[effect="circle"] {\n    animation: spin 2s ease-in-out infinite;\n    width: 1.25rem !important;\n    height: 1.25rem !important;\n}\n\nimg[lazyload]:not([lazyload=""]):not([effect="circle"]) {\n    min-width: 1.25rem !important;\n    min-height: 1.25rem !important;\n    border-radius: 0.625rem !important;\n    background: linear-gradient(90deg, #e0e0e0 15%, #f0f0f0, #e0e0e0 85%);\n    background-size: 200% 100%;\n    animation: shimmer 1.5s infinite;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes shimmer {\n    0% {\n        background-position: 200% 0;\n    }\n    100% {\n        background-position: -200% 0;\n    }\n}'));const it="\ndata:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI1OTVfMzA1OSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDEwQzE2IDExLjc3NyAxNS4yMjc1IDEzLjM3MzYgMTQgMTQuNDcyMkMxMi45Mzg1IDE1LjQyMjMgMTEuNTM2NyAxNiAxMCAxNlYyMEMxMS40MjIyIDIwIDEyLjc3NTEgMTkuNzAzMSAxNCAxOS4xNjc5QzE3LjUzMTggMTcuNjI0OCAyMCAxNC4xMDA2IDIwIDEwQzIwIDUuODk5MzYgMTcuNTMxOCAyLjM3NTIgMTQgMC44MzIwODdDMTIuNzc1MSAwLjI5Njg5NSAxMS40MjIyIDAgMTAgMFY0QzExLjUzNjcgNCAxMi45Mzg1IDQuNTc3NzEgMTQgNS41Mjc3OUMxNS4yMjc1IDYuNjI2NDMgMTYgOC4yMjMgMTYgMTBaIiBmaWxsPSIjMzQ5OERCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCAxMEM0IDExLjc3NyA0Ljc3MjUgMTMuMzczNiA2IDE0LjQ3MjJDNy4wNjE1MSAxNS40MjIzIDguNDYzMjkgMTYgMTAgMTZWMjBDOC41Nzc3OSAyMCA3LjIyNDkyIDE5LjcwMzEgNiAxOS4xNjc5QzIuNDY4MTkgMTcuNjI0OCAwIDE0LjEwMDYgMCAxMEMwIDUuODk5MzYgMi40NjgxOSAyLjM3NTIgNiAwLjgzMjA4N0M3LjIyNDkyIDAuMjk2ODk1IDguNTc3NzkgMCAxMCAwVjRDOC40NjMyOSA0IDcuMDYxNTEgNC41Nzc3MSA2IDUuNTI3NzlDNC43NzI1IDYuNjI2NDMgNCA4LjIyMyA0IDEwWiIgZmlsbD0iI0Q5RDlEOSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI1OTVfMzA1OSI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K\n";function ot(e,t,i){return e=n(e),i=n(i),h(e)||h(i)?void 0:"+"===t?e+i:"-"===t?e-i:"*"===t?e*i:"/"===t?e/i:"%"===t?e%i:e}async function rt(e,t=!1){try{await fetch(e,{method:"HEAD",mode:"cors"});return await async function(e,t){return new Promise((async(n,i)=>{try{const o=await fetch(e);if(o.ok){const e=o.headers.get("Content-Type");if(e&&e.startsWith("image")){if("image/svg+xml"==e&&!t)return void n(o);const i=await o.blob(),r=new Image,a=URL.createObjectURL(i);r.src=a,r.crossOrigin="anonymous",r.onload=e=>n({src:a,img:r}),r.onerror=e=>{throw URL.revokeObjectURL(a),e}}else n(o)}else i(new Error("HTTP error"))}catch(e){i(e)}}))}(e,t)}catch(e){throw e}}function at(n="",o,r){const a=((n[re](D)||[])[0]||"")[Ye](),s=((n[re](C)||[])[1]||"")[Ye](),l=(w[Pe](n)&&n[re](w)||[]).map((e=>e[ke](/^\./,"")));if(a[ie]<1)return;let c,d,u,f=!1;"temp"===n?(f=!0,c=e.createDocumentFragment()):c=e.createElement(a),s[ie]&&(c[q]=s);for(let e of l)c[R].add(e);if(null==o&&null!=r&&([o,r]=[r,null]),null!=o&&null!=r)[d,u]=[o,r];else if(null==r)"string"==typeof o||"number"==typeof o||i[J](o)?u=o:d=o;else if(null==o)return c;if("object"==typeof d&&null!=d)for(const e in d){if(!d.hasOwnProperty(e))continue;const t=d[e];-1!=["value","innerText",F,"textContent","contentEditable"][X](e)?c[e]=t:-1!=["color","backgroundColor","width","height","display","float"][X](e)?c[Ee][e]=t:null!=t&&c[we](e,t)}if(null!=u){const n="string"==typeof u,o="number"==typeof u,r=i[J](u);if(n||o){const t=u;"img"===a||"source"===a?c[Ne]=t:f?c[L](e[Z](u)):c[F]=t}else if(r)for(let n of u){const i=n instanceof Element;"string"==typeof n||"number"==typeof n?c[L](e[Z](t(n))):i&&c[L](n)}}return c}function st(e,t,n){return new Proxy(e,{get(e,i,o){const r=Reflect.get(e,i,o),a=t?`${t}.${i[Se]()}`:i[Se]();return"object"==typeof r&&null!==r?st(r,a,n):r},set(e,i,o,r){const a=e[i],s=Reflect.set(e,i,o,r),l=t?`${t}.${i[Se]()}`:i[Se]();return a!==o&&n(l,o,a),s}})}function lt(e,n="yyyy/MM/DD (ddd) HH:mm:ss"){const i=new Date(1e3*e),o=t(i.getFullYear()),r=t(i.getMonth()+1),a=t(i.getDate()),s=t(i.getDay()),l=t(i.getHours()),c=t(i.getMinutes()),d=t(i.getSeconds()),u=t(i.getMilliseconds());let h={YYYY:o,yyyy:o,YY:o[De](-2),yy:o[De](-2),Y:o[De](-2),y:o[De](-2),M:r,MM:("0"+r)[De](-2),D:a,DD:("0"+a)[De](-2),d:s,dd:("0"+s)[De](-2),H:l,HH:("0"+l)[De](-2),h:t(f(l)%12||12),hh:("0"+(f(l)%12||12))[De](-2),m:c,mm:("0"+c)[De](-2),s:d,ss:("0"+d)[De](-2),SSS:("00"+u)[De](-3),a:f(l)>=12?"pm":"am",A:f(l)>=12?"PM":"AM"};const g=/zh/.test(navigator.language||"")?["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return h.ddd=g[f(s)][De](0,3),h.dddd=g[f(s)],n.replace(/YYYY|YY|Y|yyyy|yy|y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|a|A|ddd|dddd/g,(e=>h[e]))}let ct,dt,ut=new Map;function ft(e){return gt(ht(e[Ye]()[ke](/\s*([\{\}\[\]\:,])\s*/g,"$1")))}function ht(e){const t=[];let n=0;for(;n<e[ie];){let i=pt(e,n),o=mt(e,n);if(null==o&&null==i)break;if(null!=o&&null==i)t[ge](o[He]),n=o[ae];else if(null!=i){let o={[Te]:i[Te],[q]:i[q],[S]:i[S],[P]:{}};for(;"}"!==e[n];){if(e[De](n,n+9)===z+":"){n+=9;const t=bt(e,n);o[z]=t[He],n=t[ae]}const t=yt(e,n,[q,S,z]);t?(o[P][t[ee]]=t[He],n=t[ae]):n++}n++,t[ge](o)}}return t}function gt(t){const n=at(Le);if(!i[J](t))return n;for(let i of t){if(null==t)continue;const o=i[Te]+(null==i[q]?"":"#"+i[q])+(null==i[S]?"":"."+i[S][ke](/\s/g,".")),r="string"==typeof i?e[Z](i):at(o,i[P]||{});null!=r&&("string"!=typeof i&&r[L](gt(i[z])),n[L](r))}return n}function pt(e,t){let n=t,i="",o="",r=[];for(;/[\s\,]/[Pe](e[n]);)n++;for(;/[a-zA-Z]/[Pe](e[n]);)i+=e[n],n++;if("#"===e[n])for(n++;/[a-zA-Z0-9_-]/[Pe](e[n]);)o+=e[n],n++;for(;"."===e[n];){n++;let t="";for(;/[a-zA-Z0-9_-]/[Pe](e[n]);)t+=e[n],n++;r[ge](t)}const a=r[K](" ");for(;/\s/[Pe](e[n]);)n++;return"{"===e[n]?(n++,{[Te]:i[Ye](),[q]:o||null,[S]:a||null,[ae]:n}):null}function mt(e,t){let n=t,i="";for(;/\s/[Pe](e[n]);)n++;for(;'"'!==e[n];)n++;for(n++;'"'!==e[n];)i+=e[n],n++;return n++,{[He]:i,[ae]:n}}function yt(e,t,n=[]){let i=t,o="",r="";for(;/\s/[Pe](e[i]);)i++;for(;/[a-zA-Z_-]/[Pe](e[i]);)o+=e[i],i++;if(n.includes(o[Ye]()))return null;if(":"===e[i]){i++;const t=mt(e,i);return r=t[He],i=t[ae],{[ee]:o[Ye](),[He]:r,[ae]:i}}return null}function bt(e,t){let n=t,i=[],o=0,r="";for(;/\s/[Pe](e[n]);)n++;for(;"["!==e[n];)n++;for(n++;n<e[ie];){const t=e[n];if("{"===t)o++,r+=t;else if("}"===t)o--,r+=t;else{if("]"===t&&0===o){i=ht(r);break}r+=t}n++}return{[He]:i,[ae]:n}}function kt(t,...n){const i=at(Me,`console.${t}.apply(void 0, ${a[ve](n)});`);e[O][L](i),i[me]()}class Mt{#e;#t;#n;#i;#o;#r;#a;#s;#l;constructor(e={}){this.#e=e[Je]||void 0,this.#t=e[Qe]||void 0,this.#n=e[Ke]||void 0,this.#i=e[Xe]||void 0,this.#o=e[et]||void 0,this.#r=e[Fe]||void 0}async#c(e){return new d(((t,n)=>{t(!1!==e())}))}#d(e){e(!1)}async render(e){this.#a=s.now(),null!=this.#e&&!1===await this.#c(this.#e)||(await e(),this.#s=s[le]()-this.#a,kt("log","渲染耗時:",this.#s/1e3),null!=this.#t&&this.#d(this.#t))}async update(e){clearTimeout(this.#l),this.#l=p((async()=>{this.#a=s.now(),null!=this.#n&&!1===await this.#c(this.#n)||(await e(),this.#s=s[le]()-this.#a,kt("log","更新耗時:",this.#s/1e3),null!=this.#i&&this.#d(this.#i))}),300)}async destroy(e){this.#a=s.now(),null!=this.#o&&!1===await this.#c(this.#o)||(await e(),this.#s=s[le]()-this.#a,kt("log","銷毀耗時:",this.#s/1e3),null!=this.#r&&this.#d(this.#r))}}var wt;window.QUI=class{body;data={};event={};isScheduled=!1;lazyloadObserver;#u=!0;#f=null;#h=null;#g=null;#p=null;constructor(n){const o=t(n[q]||"")[Ye]();let r;if(o[ie]<1){if("function"!=typeof n[be])return void kt($,nt.domId);{const t=n[be]();r=e.createElement("section"),r.id=function(e){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n=t[ie];let o="";do{o=i[_]({length:e},(e=>t.charAt(l.floor(l.random()*n))))[K]("")}while(ut.has(o));return ut.set(o,1),o}(64),r.className="QUIFragment",r[L](ft(t))}}else r=e.getElementById(o);if(null!=r){if(this.#f=r[Y](!0),this.#g=new Ct(this.#f),"function"==typeof n[be]){const e=n[be](),t=at(Le),i=r[Y](!0);t[L](ft(e)),i.replaceChildren(t),this.#f=i}this.#m(n).then((e=>{this[O]=r,this[B]=st(e,"",(e=>{this.#p?.update((()=>this.#y()))})),this[V]=n[V]||{};const t=n.option||{};!1!==t.svg&&function(){dt=new m((async(e,t)=>{for(let t of e){const e=t.target;if(!t.isIntersecting)continue;const n=(e[W](Ne)||"")[Ye]();if(n[ie]<1)return;await rt(n).then((t=>{dt[Be](e),t.text().then((t=>{const n=at("div");n[F]=t;const i=n[z][0];i.id=e.id,e.classList.forEach((e=>i.classList.add(e))),i.onclick=e.onclick,null!=e[de]&&e[de].insertBefore(i,e),e.remove()})).catch((t=>{e[F]="☒"}))})).catch((t=>{e[F]="☒"}))}}));for(let e of[][De].call(document.body.querySelectorAll("temp-svg[src]:not([src=''])")||[]))dt[ce](e)}(),!1!==t[ne]&&(!function(){ct=new m(((e,t)=>{const n=[];for(let t of e){const e=t.target;if(!t.isIntersecting)continue;ct[Be](e);const i=(e[W](ne)||"")[Ye]();i[ie]>0&&n.push({dom:e,src:i})}Promise.all(n.map((({dom:e,src:t})=>rt(t,!0).then((t=>{e[Ne]=t[Ne]})).catch((n=>{n instanceof TypeError&&n.message.includes("Load failed")||n instanceof Event?e[Ne]=t:e[Ne]="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg"})).finally((()=>{e[ye](ne),e[ye](H)})))))}));const e=document.body.querySelectorAll("img[lazyload]:not([lazyload=''])");for(let t of i[_](e))ct[ce](t)}(),this.lazyloadObserver=ct);const o=n.when||n.lifecycle||n||{};this.#p=new Mt({before_render:o[Je]||o[We],rendered:o[Qe],before_update:o[Ke]||o[Ge],updated:o[Xe],before_destroy:o[et]||o[qe],destroyed:o[Fe]}),this.#p.render((async()=>{await this.#y(),this.#u=!1}))}))}else kt($,nt.dom)}lang(e){o.hasOwn(this.data.quickui_i18n,e)&&(this.data.quickui_i18nLang=e)}async#m(e={}){let t=e[B]||{};if("object"==typeof e.i18n&&null!=e.i18n){const n=e.i18n;t.quickui_i18n={};for(const[e,i]of Object.entries(n))if("string"==typeof i&&i.trim().length>0)try{const n=await fetch(i.trim());if(!n.ok)throw new Error(`Failed to load i18n file for ${e}`);const o=await n.json();t.quickui_i18n[e]=o}catch(n){t.quickui_i18n[e]={}}else t.quickui_i18n[e]=i}else t.quickui_i18n={};return t.quickui_i18nLang=e.i18nLang||"zh",t}#y(){return new d((async e=>{null!=this.#f?(this.#h=new Ct(this.#f),null!=this.#h?(this.#h[B]=a[fe](a[ve](this[B])),await this.#h.updateChildren(),this.isScheduled=!0,requestAnimationFrame((()=>{this.#b(),this.isScheduled=!1,e(!0)}))):kt($,nt.vdomTemp)):kt($,nt.vdomModel)}))}#b(){const e=this[O];if(null==e)return void kt("error",nt.dom);const t=this.#h?.getPatches(this.#g);i[J](t)&&this.#k(e,t);for(let t of e[pe]("*[\\:if]"))t[ye](":if");e[R].add("show"),"expand"!=e[W](H)&&"expand"!=e[W](j)||(e[Ee].minHeight=e.scrollHeight+"px"),p((()=>{e[ye](H),e[ye](j),e[ye]("mask"),e[R][me]("fade-in"),e[R][me]("loading-block"),e[R][me]("expand"),e[R][me]("show")}),300),this.#g=this.#h,this.#h=null}#k(e,t){if(null!=e&&i[J](t)){this.#M(e,t);for(const n of t){const{index:t}=n,i=a[fe](a[ve](t||[]));let o;n.type===tt.append&&(o=i?.pop());const r=i?this.#w(e,i):e;r&&(n.type===tt.create&&Ue in n?this.#C(r,n):n.type===tt.replace&&Ue in n&&null!=r[ue]?this.#D(r,n):n.type===tt.append&&Ue in n&&null!=o?this.#A(r,n,o):n.type===tt.prop&&ee in n&&He in n&&r instanceof Element?this.#I(r,n.key,n.value,n[Ue]):n.type===tt.text&&He in n&&r.nodeType===u[Oe]&&(r[ze]=n.value||""))}}}#M(e,t){const n=t.filter((e=>e.type===tt.remove)).sort(((e,t)=>{const n=(t.index.length||0)-(e.index.length||0);if(0!==n)return n;for(let n=0;n<(e.index.length||0);n++)if((e.index[n]||0)!==(t.index[n]||0))return(t.index[n]||0)-(e.index[n]||0);return 0}));for(const t of n){const n=this.#w(e,t.index);null!=n&&null!=n[ue]&&n[ue].removeChild(n)}}#C(t,n){if(n.type!==tt.create||!(Ue in n))return;const i="string"==typeof n[Ue]?e[Z](n[Ue]):this.#N(n[Ue]);null!=t[de]&&t[de][L](i)}#D(t,n){if(n.type!==tt.replace||!(Ue in n)||null==t[ue])return;const i="string"==typeof n[Ue]?e[Z](n[Ue]):this.#N(n[Ue]);if(t[ue].replaceChild(i,t),!(i instanceof Text||"string"==typeof n[Ue])){for(const e in n[Ue][he])this.#I(i,e,n[Ue][he][e]||"",n[Ue]);this.#x(n[Ue],i)}}#A(t,n,i){if(n.type!==tt.append||!(Ue in n)||null==i)return;const r="string"==typeof n[Ue]?e[Z](n[Ue]):this.#N(n[Ue]);if(i+1>t[z][ie]?t[L](r):t.insertBefore(r,t[z][i+1]),"string"!=typeof n[Ue]){for(const[e,r]of o.entries(n[Ue][he]))this.#I(t[z][i],e,r||"",n[Ue]);this.#x(n[Ue],t[z][i])}}#I(e,t,n,i){let o=n;if(n&&"string"==typeof n&&n.startsWith("i18n.")){const e=n.replace(/^i18n\./,""),t=this[B].quickui_i18nLang,i=this[B].quickui_i18n[t];i&&i[e]&&(o=i[e])}null==o?e[ye](t):t[xe](":@")||t[xe]("@")?this.#v(e,t,o,i):t[oe]()[xe](":model")?this.#E(e,t,o):t[xe](":")?this.#T(e,t,o,i):null!=e&&e[we](t,o),e&&e[W]&&e[W](I)&&e[ye](I)}#v(e,t,n,i){(()=>{if(!1===t[xe]("@"))return;const o=t[ke](/^\@/,"on"),r=this.#j(n,i[B])||n,a=this[V][r];e[o]=a})(),e[ye](t)}#E(t,n,i){if(null==i||!/(input|select|textarea)/i[Pe](t[je]))return;const o=t instanceof HTMLInputElement,r=t instanceof HTMLTextAreaElement,a=t instanceof HTMLSelectElement,s=t[W]("type");!o||"checkbox"!==s&&"radio"!==s?a?t[T]("change",(e=>{this[B][i]=e.target[He]||""})):(o||r)&&(t[T]("keyup",(e=>{this[B][i]=e.target[He]||""})),t[T]("change",(e=>{this[B][i]=e.target[He]||""}))):t[T]("change",(t=>{this[B][i]=[...e.body.querySelectorAll("input[name='"+t.target.name+"'][type='"+s+"']:checked")].map((e=>e.value)).join(",")})),t[ye](n)}#T(e,t,n,i){const o=t[oe](),a=null==this.#j(n,i[B])?n:this.#j(n,i[B]),s=(Ve[o]||"")[Ye](),l=(_e[o]||"")[Ye](),c=t[Se]()[ke](/^\:/g,"")[ke](/-+/g," ")[ke](/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e[oe]():e[Re]()}))[ke](/\s+/g,"");if(o===":"+ne&&n[Ye]()[ie]>0)if(this.#u){const t=e[W](":"+H)||"";e.src="circle"===t?it:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px'/%3E",ct[ce](e)}else{if(null==e[W](ne))return void(e.src=a);e.src=it,ct[ce](e)}if(":html"===o&&n[Ye]()[ie]>0)e[F]=a||n;else if(o===I||o in $e);else if(":src"===o&&"temp-svg"===i.tag[oe]()&&n[Ye]()[ie]>0){const t=this.#j(n,i[B])||n;e[we](Ne,t),dt[ce](e)}else o in Ve?e[s]=a:o in _e?e[Ee][l]=a:!(c in e[Ee])||t===":"+j&&/(fade-in|expand)/[Pe](n)?":hide"===o&&r(h(+a)?a:+a)?e[Ee].display="none":e[we](`${t[ke](/^:/,"")}`,a):e[Ee][c]=a;e[ye](t)}#x(e,t){if("string"!=typeof e)for(const n in e.children.filter((e=>"string"!=typeof e))){if(null==t)continue;const i=e.children[+n],r=t.children[+n];if("string"!=typeof i){for(const[e,t]of o.entries(i[he]))this.#I(r,e,t||"",i);this.#x(i,r)}}}#j(e,n){if(e[Ye]()[ie]<1)return;const r=y[Pe](e);let a="",s="";r&&(a=e[Ie](y)[0]||"",s=e[Ie](y)[4]||"",e=e[re](y)[1]);const l=/^LENGTH\(.+\)/[Pe](e);l&&(e=e[ke](/^LENGTH\(|\)$/g,""));const c=/^CALC\(.*\)$/[Pe](e);let d="",u=0;if(c){const t=(e=e[ke](/^CALC\(|\)$/g,""))[re](M);e=t[1],d=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[Pe](e),h=/^LOWER\(.*\)$/[Pe](e);(f||h)&&(e=e[ke](/^(UPPER|LOWER)\(|\)$/g,""));const g=/^DATE\([\w\,\-\s\:]*\)$/[Pe](e);let p="";if(g){const t=(e=e[ke](/^DATE\(|\)$/g,""))[re](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let m=e[Ie](/\./),b=n||this[B],k=m[0],w=b[k];for(m[Ce]();m[ie]>0;)b=w||{},k=m[0],w=b[k],m[Ce]();if(null==w)for(m=e[Ie](/\./),b=this[B],k=m[0],w=b[k],m[Ce]();m[ie]>0;)b=w||{},k=m[0],w=b[k],m[Ce]();let C="";if(null!=w&&w instanceof Object&&!i[J](w)?C=t(o[te](w)[ie]):null!=w&&(C=w[ie]),r){if(l)return a+C+s;if(c&&(w=ot(w,d,u),null==w))return;return a+w+s}if(l)return C;if(c){if(w=ot(w,d,u),null==w)return}else{if(f)return w[Re]();if(h)return w[oe]();if(g)return lt(+w,p)}return w}#w(e,t){let n=e,o=i.from(n.childNodes).filter((e=>e.nodeType===u[U]||e.nodeType===u[Oe]&&""!==e[ze]?.trim()))||[];for(const e of t)n=o[e],null!=n&&(o=i.from(n.childNodes).filter((e=>e.nodeType===u[U]||e.nodeType===u[Oe]&&""!==e[ze]?.trim()))||[]);return n}#N(t){const n=e.createElement(t.tag);if(t[he])for(const[e,i]of o.entries(t[he]))e[xe](":")||e[xe]("@")||void 0!==i&&n[we](e,i);for(const i of t[z])"string"==typeof i?n[L](e[Z](i)):n[L](this.#N(i));return n}};class Ct{tag="";props={};children=[];data=null;constructor(t){if(t[je][oe]()===Me){let n=!1;for(const i of e[G][pe](Me)||[])if(null!=t[Ne]&&i[Ne]===t[Ne]||null!=t[ze]&&i[ze]===t[ze]){n=!0;break}n||e[G][L](t),this[Te]=Me}this[Te]=t[je][oe](),this[he]=[...t.attributes].reduce(((e,t)=>(e[t.name]=t.value.trim(),e)),{}),this[z]=function(e){return i[_](e.childNodes).filter((e=>e[se]===u[U]||e[se]===u[Oe]&&e[ze]&&e[ze][Ye]()[ie]>0))}(t).map((e=>e.nodeType===Node[U]?new wt(e):(e[ze]||"")[Ye]()))}async updateChildren(){this.#L(this),this.#P(this),await this.#O(this),this.#L(this),this.#P(this),this.#z(this)}getPatches(e){return this.#S(e,this)}#L(e){let t=0;if(!("string"==typeof e||e[z][ie]<1)){for(;t<e[z][ie];){const n=e[z][t];if("string"==typeof n||null==n){t++;continue}if(null==n[B]&&(n[B]=e[B]),!(I in n[he])){t++;continue}const o=n[he][I],r=(o[re](/^\(?\s*(\w+)/)||[])[1],s=(o[re](/\,\s*(\w+)/)||[])[1],l=(o[re](b)||[])[1];let c=this.#j(l,e[B]),d=[];if(delete n[he][I],i[J](c)){c=a[fe](a[ve](c));for(const e in c){const t=a[fe](a[ve](c[+e]));let i=g(n);i[B]=a[fe](a[ve]({[r]:t,[l]:c})),null!=s&&(i[B][s]=+e),d.push(i)}e[z][Ae](t,1,...d),t+=d[ie]-2}else if(null!=c&&"object"==typeof c){c=a[fe](a[ve](c));for(const e in c){const t=a[fe](a[ve](c[e]));let i=g(n);i[B]=a[fe](a[ve]({[r]:e,[s]:t,[l]:c})),d.push(i)}e[z][Ae](t,1,...d),t+=d[ie]-2}else t++}for(let t of e[z])this.#L(t)}}#P(e){let i=0;if(!("string"==typeof e||e[z][ie]<1)){for(;i<e[z][ie];){const o=e[z][i];if("string"==typeof o){i++;continue}if(!(N in o[he])){delete o[he][x],delete o[he][v],delete o[he][E],i++;continue}let a=i+1,s=e[z][a],l=[i],c=!1;(()=>{for(;!c;){if(l[ge](a),a+=1,s=e[z][a],null==s||"string"==typeof s){c=!0;continue}const t=s[he]||{};c=null==(t[x]||t[v]||t[E])}})();let d=!1,u=!1;for(let o of l){const a=e[z][o];if(null==a||"string"==typeof a)return;const s=a[he][N]||a[he][x]||a[he][v],c=null!=a[he][E];if(c&&(u=!0),d)return;if(c)e[z][Ae](i,l.length,a);else if(null!=s){const o=s[Ie](k)[0],c=s[Ie](k)[1],u=((s[re](k)||[])[0]||"")[Ye](),f=this.#j(o,a[B]);if(null==c&&u[ie]<1?d=r(f):">"===u?d=(n(f)||0)>(n(c)||0):"<"===u?d=(n(f)||0)<(n(c)||0):">="===u||">=="===u?d=(n(f)||0)>=(n(c)||0):"<="===u||"<=="===u?d=(n(f)||0)<=(n(c)||0):"=="===u||"==="===u?d="null"==c?null==f:"true"==c?r(f):"false"==c?!r(f):"empty"==c?t(f||"")[ie]<1:t(f||"")==t(c):"!="!==u&&"!=="!==u||(d="null"==c?null!=f:"true"==c?!r(f):"false"==c?r(f):"empty"==c?t(f||"")[ie]>0:t(f||"")!=t(c)),d)return delete a[he][N],void e[z][Ae](i,l.length,a)}}d||u?d?i+=l.length-2:i++:e[z][Ae](i,l.length)}for(let t of e[z])this.#P(t)}}async#O(e){let t=0;if(!("string"==typeof e||e[z][ie]<1)){for(;t<e[z][ie];){const n=e[z][t];if("string"==typeof n){t++;continue}if(!(A in n[he])||"temp"!=n.tag){t++;continue}const i=n[he][A],o=this.#j(i,e[B])||i;delete n[he][A],await fetch(o).then((async n=>{const i=at("div",await n.text()).cloneNode(!0),o=new wt(i);e[z][Ae](t,1,...o[z]),t+=o[z][ie]-2})),t++}for(let t of e[z])await this.#O(t)}}translate(e){const t=this.data.quickui_i18nLang;if(!this.data.quickui_i18n[t])return e;const n=e.split(".");let i=this.data.quickui_i18n[t];for(const e of n)if(i=i[e],void 0===i)break;return void 0!==i?i:e}#z(e){let t=0;if(!("string"==typeof e||e[z][ie]<1)){for(;t<e[z][ie];){let n=e[z][t];if("string"==typeof n){for(let i of n[re](new c(y,"g"))||[]){const n=e[z][t]||"",o=i[re](y)||[];if(o[ie]<1)continue;const r=o[1]||"";if(!("string"!=typeof n||r.length<1)&&r[xe]("i18n.")){const i=r[ke](/^i18n\./,""),o=this.translate(i);e[z][t]=n[ke](new c("{{\\s*?"+r[ke](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),o)}}for(let i of n[re](new c(y,"g"))||[]){const n=e[z][t]||"",o=i[re](y)||[];if(o[ie]<1)continue;const r=o[1]||"",a=this.#j(r,e[B]);"string"!=typeof n||r.length<1||null==a||(e[z][t]=n[ke](new c("{{\\s*?"+r[ke](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),a))}}else null!=n&&null==n[B]&&(n[B]=e[B]);t++}for(let t of e[z])this.#z(t)}}#j(e,n){if(e[Ye]()[ie]<1)return;const r=y[Pe](e);let a="",s="";r&&(a=e[Ie](y)[0]||"",s=e[Ie](y)[4]||"",e=e[re](y)[1]);const l=/^LENGTH\(.+\)/[Pe](e);l&&(e=e[ke](/^LENGTH\(|\)$/g,""));const c=/^CALC\(.*\)$/[Pe](e);let d="",u=0;if(c){const t=(e=e[ke](/^CALC\(|\)$/g,""))[re](M);e=t[1],d=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[Pe](e),h=/^LOWER\(.*\)$/[Pe](e);(f||h)&&(e=e[ke](/^(UPPER|LOWER)\(|\)$/g,""));const g=/^DATE\([\w\,\-\s\:]*\)$/[Pe](e);let p="";if(g){const t=(e=e[ke](/^DATE\(|\)$/g,""))[re](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let m=e[Ie](/\./),b=n||this[B],k=m[0],w=b[k];for(m[Ce]();m[ie]>0;)b=w||{},k=m[0],w=b[k],m[Ce]();if(null==w)for(m=e[Ie](/\./),b=this[B],k=m[0],w=b[k],m[Ce]();m[ie]>0;)b=w||{},k=m[0],w=b[k],m[Ce]();let C="";if(null!=w&&w instanceof Object&&!i[J](w)?C=t(o[te](w)[ie]):null!=w&&(C=w[ie]),r){if(l)return a+C+s;if(c&&(w=ot(w,d,u),null==w))return;return a+w+s}if(l)return C;if(c){if(w=ot(w,d,u),null==w)return}else{if(f)return w[Re]();if(h)return w[oe]();if(g)return lt(+w,p)}return w}#S(e,t,n=[]){if(null==e&&t)return[{[Ze]:tt.create,[Q]:n,[Ue]:t}];if(e&&!t)return[{[Ze]:tt.remove,[Q]:n}];if(!e&&!t)return[];if(e.tag!==t.tag)return[{[Ze]:tt[ke],[Q]:n,[Ue]:t}];const i=[];return i[ge](...this.#R(e,t,n)),i[ge](...this.#Y(e,t,n)),i}#R(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const i=[],r=e[he]||{},a=o[te](r)[ie],s=t[he]||{},l=o[te](s)[ie];if(l>0)for(let e in s){const o=s[e];i[ge]({[Ze]:tt.prop,[Ue]:t,key:e,value:o,[Q]:n})}if(a>0){if(l<1)for(let e in r)i[ge]({[Ze]:tt.prop,[Ue]:t,key:e,[He]:null,[Q]:n});for(let e in s)l>0&&!(e in s)&&i[ge]({[Ze]:tt.prop,[Ue]:t,key:e,[He]:null,[Q]:n})}return i}#Y(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const o=[],r=i[J](e[z])?e[z]:[],a=i[J](t[z])?t[z]:[],s=l.max(r[ie],a[ie]);for(let e=0;e<s;e++){const i=r[e],s=a[e],l=n.concat(e);if("string"==typeof i&&"string"==typeof s){if(i===s)continue;o[ge]({[Ze]:tt.text,[Ue]:t,[He]:s,[Q]:l})}else null==i?o[ge]({[Ze]:tt.append,[Ue]:s,[Q]:l}):null==s?o[ge]({[Ze]:tt.remove,index:l}):o[ge](...this.#S(i,s,l))}return o}}wt=Ct}("undefined"==typeof window?window={}:window);export const QUI = window.QUI;
