!function(){"use strict";const e=document,t=String,n=Number,r=Array,i=Object,o=Boolean,s=Date,a=parseInt,l=isNaN,c=/\{\{\s*(((CALC|LENGTH|UPPER|LOWER|DATE)\(\s*[\w\.\s\+\-\*\/\,\s\/\:]+\s*\))|[\w\.]+)\s*\}\}/i,d=(new RegExp(c,"gi"),/\s+([\w\.]+)\s*$/i),u=/\s*[\!\>\<\=]+\=*\s*/,f=/([\w\.]+)\s*([\+\-\*\/\%])\s*([\d\.]+)/,h=":if",p=":else-if",g=":elif",m=":else",b="startsWith",y="children",E="parentElement",v="toLowerCase",k="dismiss",w="getElementById",O="data",N="event",P="trim",C="src",D="split",_="id",T="isArray",A="indexOf",M="style",x="innerHTML",L="forEach",S="replace",R="value",H="body",I="length",V="match",Y="shift",B="addEventListener",$="type",J="props",z="display",j="vdom",U="appendChild",X="createTextNode",F="removeAttribute",W="keys",q="parentNode",G="setAttribute",K={[h]:null,[p]:null,[g]:null,[m]:null},Q={":id":"id",":src":"src",":alt":"alt",":href":"href",":html":"innerHTML"},Z={":margin":"margin",":padding":"padding",":border":"border",":border-radius":"borderRadius",":borderRadius":"borderRadius",":outline":"outline",":box-sahdow":"boxShadow",":boxSahdow":"boxShadow",":bg-image":"backgroundImage",":backgroundImage":"backgroundImage",":bg-attachment":"backgroundAttachment",":backgroundAttachment":"backgroundAttachment",":bg-blend-mode":"backgroundBlendMode",":backgroundBlendMode":"backgroundBlendMode",":bg-clip":"backgroundClip",":backgroundClip":"backgroundClip",":bg-origin":"backgroundOrigin",":backgroundOrigin":"backgroundOrigin",":bg-position":"backgroundPosition",":backgroundPosition":"backgroundPosition",":bg-position-x":"backgroundPositionX",":backgroundPositionX":"backgroundPositionX",":bg-position-y":"backgroundPositionY",":backgroundPositionY":"backgroundPositionY",":bg-repeat":"backgroundRepeat",":backgroundRepeat":"backgroundRepeat",":bg-size":"backgroundSize",":backgroundSize":"backgroundSize",":bg-color":"backgroundColor",":backgroundColor":"backgroundColor",":color":"color"},ee={create:"CREATE",append:"APPEND",replace:"REPLACE",text:"TEXT",prop:"PROP",remove:"REMOVE"},te="index",ne="元件不存在。";function re(e,t,n){return new Proxy(e,{get(e,r,i){const o=Reflect.get(e,r,i),s=t?`${t}.${r.toString()}`:r.toString();return"object"==typeof o&&null!==o?re(o,s,n):o},set(e,r,i,o){const s=e[r],a=Reflect.set(e,r,i,o),l=t?`${t}.${r.toString()}`:r.toString();return s!==i&&n(l,i,s),a}})}async function ie(e,t=!1){return new Promise((async(n,r)=>{try{const i=await fetch(e);if(i.ok){const e=i.headers.get("Content-Type");if(e&&e[b]("image")){if("image/svg+xml"==e&&!t)return void n(i);const o=await i.blob(),s=new Image,a=URL.createObjectURL(o);s[C]=a,s.crossOrigin="anonymous",s.onload=e=>n({src:a,img:s}),s.onerror=e=>{URL.revokeObjectURL(a),r(e)}}else n(i)}else r(new Error(`HTTP error! status: ${i.status}`))}catch(e){r(e)}}))}window.QUI=class{body;data;event;done={};#e=!0;#t;#n;#r;#i;#o=new Map;#s=!1;#a=null;#l;#c;#d;#u;constructor(n={}){if(t(n[_]||"")[I]<1)return;const r=e[w](n[_]);if(null==r)return;this.#d=r.cloneNode(!0),this[H]=r,this[O]=re(n[O]||{},"",(async()=>{this.#t=Date.now(),null!=this.#c&&!1===await this.#f(this.#c)||(this.#h(),null==this.#i||this.#p(this.#i))})),this[N]=n[N]||{};const i=n.listener||{};!1!==i.svg&&function(){if(null!=ae)return;le=new IntersectionObserver((e=>{e.forEach((e=>{if(!e.isIntersecting)return;const t=e.target,n=(t.getAttribute("src")||"")[P]();n[I]<1||ie(n).then((e=>{le.unobserve(t),e.text().then((e=>{const n=de("div");n.innerHTML=e;const r=n[y][0];r.id=t.id,t.classList[L]((e=>r.classList.add(e))),r.onclick=t.onclick,null!=t[E]&&t[E].insertBefore(r,t),t.remove()})).catch((e=>{t.innerHTML="☒"}))})).catch((e=>{le.unobserve(t),t.innerHTML="☒"}))}))})),[].slice.call(document.body.querySelectorAll("temp-svg[src]:not([src=''])")||[])[L]((e=>le.observe(e)))}(),!1!==i.lazyload&&function(){if(null!=oe)return;se=new IntersectionObserver(((e,t)=>{e[L]((e=>{const t=e.target;if(e.isIntersecting){t.parentElement;const e=t.getAttribute("lazyload")||"";if(e[I]<1)return;t.removeAttribute("lazyload"),delete t.dataset[C],ie(e,!0).then((e=>{se.unobserve(t),t[C]=e[C]})).catch((e=>{se.unobserve(t),t[C]="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg"}))}}))})),[].slice.call(document.body.querySelectorAll("img[lazyload]:not([lazyload=''])")||[])[L]((e=>se.observe(e)))}(),this.#l=n.before_render||void 0,this.#r=n.rendered||void 0,this.#c=n.before_update||void 0,this.#i=n.updated||void 0,this.#a=this.#g(this.#d),(async()=>{this.#t=Date.now(),null!=this.#l&&!1===await this.#f(this.#l)||(this.#h(),null==this.#r||this.#p(this.#r))})()}async#h(){this.#u=this.#g(this.#d),this.#m(this.#u),await this.#b(this.#u),this.#y(this.#u),this.#E(this.#u),this.#n=s.now()-this.#t,console.log("耗時:",this.#n/1e3)}async#f(e){return new Promise(((t,n)=>{t(!1!==e())}))}#p(e){e(!1)}#v(e,r){const s=e[y][r];if("string"==typeof s)return;const a=s[J]||{};if(i[W](a)[I]<1||null==a[h]||null!=(a[p]||a[g]||a[m]))return;let l=r+1,c=e[y][l],d=[r],f=!1;for(;null!=c&&"string"!=typeof c&&!f;){if(d.push(l),l+=1,c=e[y][l],null==c||"string"==typeof c){f=!0;continue}const t=c[J]||{};f=null==(t[p]||t[g]||t[m])}let b=!1;for(let r of d){const i=e[y][r];if(null==i||"string"==typeof i)return;const s=i[J][h]||i[J][p]||i[J][g],a=null!=i[J][m];if(b||!b&&a)i[k]=!0;else if(null!=s){const e=s[D](u)[0],r=s[D](u)[1],a=((s[V](u)||[])[0]||"")[P](),l=this.#k(e,i.data);null==r&&a[I]<1?b=o(l):">"===a?b=(n(l)||0)>(n(r)||0):"<"===a?b=(n(l)||0)<(n(r)||0):">="===a||">=="===a?b=(n(l)||0)>=(n(r)||0):"<="===a||"<=="===a?b=(n(l)||0)<=(n(r)||0):"=="===a||"==="===a?b="null"==r?null==l:"true"==r?o(l):"false"==r?!o(l):"empty"==r?t(l||"")[I]<1:t(l||"")==t(r):"!="!==a&&"!=="!==a||(b="null"==r?null!=l:"true"==r?!o(l):"false"==r?o(l):"empty"==r?t(l||"")[I]>0:t(l||"")!=t(r)),i[k]=!b}}}#w(e,t,n,r){const i=this.#k(n,r.data)||n,s=(Q[t[v]()]||"")[P](),c=(Z[t[v]()]||"")[P]();if(e[M][z]=r[k]?"none":"",":lazyload"===t[v]()&&n[P]()[I]>0&&se.observe(e),":for"===t[v]());else if(":src"===t[v]()&&"temp-svg"===r.tag[v]()&&n[P]()[I]>0){const t=this.#k(n,r.data)||n;e.setAttribute(C,t),le.observe(e)}else t[v]()in K||(t[v]()in Q?e[s]=i:t[v]()in Z?e[M][c]=i:":hide"===t[v]()&&o(l(a(i))?i:a(i))?e[M][z]="none":i[I]>0&&e[G](`${t[S](/^:/,"")}`,i));e[F](t)}#O(e,t,n,r){(()=>{if(!1===t[b]("@"))return;const r=t[S](/^\@/,"on"),i=this[N][n];e[r]=i})(),(()=>{if(!1===t[b](":@"))return;const i=t[S](/^\:\@/,"on"),o=this.#k(n,r.data),s=this[N][o];e[i]=s})()}#k(e,n){if(String(e)[P]()[I]<1)return;const o=c.test(e);let s="",l="";o&&(s=e[D](c)[0]||"",l=e[D](c)[4]||"",e=e[V](c)[1]);const d=/^LENGTH\(.+\)/.test(e);d&&(e=e[S](/^LENGTH\(|\)$/g,""));const u=/^CALC\(.*\)$/.test(e);let h="",p=0;if(u){const t=(e=e[S](/^CALC\(|\)$/g,""))[V](f);e=t[1],h=t[2],p=a(t[3])||0}const g=/^UPPER\(.*\)$/.test(e),m=/^LOWER\(.*\)$/.test(e);(g||m)&&(e=e[S](/^(UPPER|LOWER)\(|\)$/g,""));const b=/^DATE\([\w\,\-\s\:]*\)$/.test(e);let y="";if(b){const t=(e=e[S](/^DATE\(|\)$/g,""))[V](/(\w+),\s*([^\n]+)/);e=t[1],y=t[2]}let E=e[D](/\./),k=n||this[O],w=E[0],N=k[w];if(E[Y](),null==N)return;for(;E[I]>0;)k=N,w=E[0],N=k[w],E[Y]();let C="";if(null!=N&&N instanceof Object&&!r[T](N)?C=t(i[W](N)[I]):null!=N&&(C=N[I]),o){if(d)return s+C+l;if(u&&(N=this.#N(N,h,p),null==N))return;return s+N+l}if(d)return C;if(u){if(N=this.#N(N,h,p),null==N)return}else{if(g)return N.toUpperCase();if(m)return N[v]();if(b)return function(e,n="yyyy/MM/DD (ddd) HH:mm:ss"){const r=new Date(1e3*e),i=t(r.getFullYear()),o=t(r.getMonth()+1),s=t(r.getDate()),a=t(r.getDay()),l=t(r.getHours()),c=t(r.getMinutes()),d=t(r.getSeconds()),u=t(r.getMilliseconds());let f={YYYY:i,yyyy:i,YY:i.slice(-2),yy:i.slice(-2),Y:i.slice(-2),y:i.slice(-2),M:o,MM:("0"+o).slice(-2),D:s,DD:("0"+s).slice(-2),d:a,dd:("0"+a).slice(-2),H:l,HH:("0"+l).slice(-2),h:t(parseInt(l)%12||12),hh:("0"+(parseInt(l)%12||12)).slice(-2),m:c,mm:("0"+c).slice(-2),s:d,ss:("0"+d).slice(-2),SSS:("00"+u).slice(-3),a:parseInt(l)>=12?"pm":"am",A:parseInt(l)>=12?"PM":"AM"};const h=/zh/.test(navigator.language||"")?["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return f.ddd=h[parseInt(a)].slice(0,3),f.dddd=h[parseInt(a)],n.replace(/YYYY|YY|Y|yyyy|yy|y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|a|A|ddd|dddd/g,(e=>f[e]))}(a(N),y)}return N}#P(e){console.log(e)}#g(e){return{tag:e.tagName[v](),props:(t=e,[...t.attributes].reduce(((e,t)=>(e[t.name]=t.value.trim(),e)),{})),children:ce(e).map((e=>e.nodeType===Node.ELEMENT_NODE?this.#g(e):(e.textContent||"")[P]())),data:null,dismiss:!1};var t}#E(t){const n=e[w](this[H][_]);if(null==n)return void this.#P(ne);const i=this.#C(this.#a,t);r[T](i)&&this.#D(n,i),this.#a=t}#C(e,t,n=[]){if(null==e&&t)return[{[$]:ee.create,[te]:n,[j]:t}];if(e&&!t)return[{[$]:ee.remove,[te]:n}];if(!e&&!t)return[];if(e.tag!==t.tag)return[{[$]:ee[S],[te]:n,[j]:t}];const r=[];return r.push(...this.#_(e,t,n)),r.push(...this.#T(e,t,n)),r}#_(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const r=[],o=e[J],s=i[W](o)[I],a=t[J],l=i[W](a)[I];if(null!=a)for(let e in a){const i=a[e];r.push({[$]:ee.prop,[j]:t,key:e,value:i,[te]:n})}if(s>0){if(l<1)for(let e in o)r.push({[$]:"PROP",[j]:t,key:e,value:null,index:n});for(let e in a)l>0&&!(e in a)&&r.push({[$]:"PROP",[j]:t,key:e,value:null,index:n})}return r}#T(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const i=[],o=r[T](e[y])?e[y]:[],s=r[T](t[y])?t[y]:[],a=Math.max(o[I],s[I]);for(let e=0;e<a;e++){const r=o[e],a=s[e],l=n.concat(e);if("string"==typeof r&&"string"==typeof a){if(r===a)continue;i.push({[$]:ee.text,[j]:t,value:a,index:l})}else if(r)a?i.push(...this.#C(r,a,l)):i.push({[$]:ee.remove,index:l});else{const e={[$]:ee.append,[j]:a,index:l};i.push(e)}}return i}#D(t,n){const o=e[w](this[H][_]);if(null==o)return;if(!r[T](n))return void console.warn("Patches is not an array:",n);const s=n.filter((e=>"REMOVE"===e.type)).sort(((e,t)=>(t.index?.length||0)-(e.index?.length||0)));for(const e of s)if(e.index){const t=this.#A(o,e.index);t&&t[q]&&t[q].removeChild(t)}for(let t of n){let n,{index:r}=t,s=JSON.parse(JSON.stringify(r||[]));t.type===ee.append&&(n=s?.pop());const a=s?this.#A(o,s):o;if(a)switch(t.type){case"CREATE":if(t.vdom){const n="string"==typeof t.vdom?e[X](t.vdom):this.#M(t.vdom);if(null==a[E])continue;a[E][U](n)}break;case"REPLACE":if(t.vdom&&a[q]){const e=this.#M(t.vdom);a[q].replaceChild(e,a)}break;case"TEXT":a&&(a.textContent=t.value);break;case"PROP":a instanceof Element&&this.#x(a,t.key,t.value||"",t.vdom);break;case"APPEND":if(t.vdom&&null!=n){const r="string"==typeof t.vdom?e[X](t.vdom):this.#M(t.vdom);if(n+1>a[y][I]?a[U](r):a.insertBefore(r,a[y][n+1]),"string"==typeof t.vdom)continue;for(const[e,r]of i.entries(t.vdom[J]))this.#x(a[y][n],e,r||"",t.vdom)}}}}#A(e,t){let n=e,i=r.from(n.childNodes).filter((e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim()))||[];for(const e of t)n=i[e],null!=n&&(i=r.from(n.childNodes).filter((e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim()))||[]);return n}#M(t){const n=e.createElement(t.tag);if(t[J])for(const[e,r]of i.entries(t[J]))e[b](":")||e[b]("@")||void 0!==r&&n[G](e,r);for(const r of t[y])if("string"==typeof r)n[U](e[X](r));else{if(!0===r[k])continue;n[U](this.#M(r))}return n}#x(t,n,r,i){if(null==r)t[F](n);else if(n[b](":@")||n[b]("@"))this.#O(t,n,r,i),t[F](n);else if(n.toLocaleLowerCase()[b](":model")){if(!/(input|select|textarea)/i.test(t.tagName))return;const i=t instanceof HTMLInputElement,o=t instanceof HTMLTextAreaElement,s=t instanceof HTMLSelectElement,a=t.getAttribute("type");!i||"checkbox"!==a&&"radio"!==a?s?t[B]("change",(e=>{this[O][r]=e.target[R]||""})):(i||o)&&(t[B]("keyup",(e=>{this[O][r]=e.target[R]||""})),t[B]("change",(e=>{this[O][r]=e.target[R]||""}))):t[B]("change",(t=>{this[O][r]=[...e.body.querySelectorAll("input[name='"+t.target.name+"'][type='"+a+"']:checked")].map((e=>e.value)).join(",")})),t[F](n)}else n[b](":")?this.#w(t,n,r,i):t[G](n,r)}#y(e){let t=0;for(;t<e[y][I];){let n=e[y][t];if("string"==typeof n)for(let r of n.match(new RegExp(c,"g"))||[]){const n=e[y][t],i=r.match(c)||[];if(i[I]<1)continue;const o=i[0],s=i[1]||"",a=this.#k(s,e.data);if(null==o||"string"!=typeof n)return;e[y][t]=n[S](new RegExp("{{\\s*?"+s[S](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),a)}else{i[W](n[J]||{})[I]&&this.#v(e,t),null!=n&&this.#y(n)}t++}}#m(e){let t=0;for(;t<e[y][I];){const n=e[y][t];if("string"!=typeof n&&null==n.data&&(n.data=e.data),"string"!=typeof n)if(n[J]&&n[J][":for"]){const i=n[J][":for"],o=(i.match(/^\(?\s*(\w+)/)||[])[1],s=(i.match(/\,\s*(\w+)/)||[])[1];let l=(i.match(d)||[])[1];delete n[J][":for"];let c=this.#k(l,e.data),u=r[T](c),f="object"==typeof c,h=structuredClone(e[y]),p=[];if(u){const r=JSON.parse(JSON.stringify(c||this[O]));for(let e in c){const t=JSON.parse(JSON.stringify(c[a(e)]));let i=structuredClone(n);i.data=JSON.parse(JSON.stringify({[o]:t,[l]:r})),null!=s&&(i.data[s]=a(e)),p.push(i)}h.splice(t,1,...p),e[y]=h,t+=p[I]-2}else if(f){const r=JSON.parse(JSON.stringify(c||this[O]));for(let e in r){const t=JSON.parse(JSON.stringify(c[e]));let i=structuredClone(n);i.data=JSON.parse(JSON.stringify({[o]:e,[s]:t,[l]:r})),p.push(i)}h.splice(t,1,...p),e[y]=h,t+=p[I]-2}else t++;this.#m(n)}else t++,this.#m(n);else t++}}async#b(e){let t=0;for(;t<e[y][I];){const n=e[y][t];if("string"==typeof n||!(":path"in n[J])||"temp"!=n.tag){t++;continue}const r=n[J][":path"],i=this.#k(r,e.data)||r;delete n[J][":path"],await fetch(i).then((async n=>{const r=await n.text(),i=de("div",r)?.cloneNode(!0),o=this.#g(i);e[y].splice(t,1,...o[y]),t+=o[y][I]-2})),t++}}#N(e,t,r){return e=n(e),r=n(r),l(e)||l(r)?void 0:"+"===t?e+r:"-"===t?e-r:"*"===t?e*r:"/"===t?e/r:"%"===t?e%r:e}};let oe,se,ae,le;new Map;function ce(e){return r.from(e.childNodes).filter((e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent.trim().length>0))}function de(n="",i,o){const s=/\.([\w_-]+)?/gi,a=((n[V](/^\w+(?=[\#\.]*)/i)||[])[0]||"")[P](),l=((n[V](/\#([\w_-]+)?/i)||[])[1]||"")[P](),c=(s.test(n)&&n.match(s)||[]).map((e=>e.replace(/^\./,"")));if(a[I]<1)return;let d,u,f,h=!1;"temp"===n?(h=!0,d=e.createDocumentFragment()):d=e.createElement(a),l[I]&&(d.id=l);for(let e of c)d.classList.add(e);if(null==i&&null!=o&&([i,o]=[o,null]),null!=i&&null!=o)[u,f]=[i,o];else if(null==o)"string"==typeof i||"number"==typeof i||r[T](i)?f=i:u=i;else if(null==i)return d;if("object"==typeof u&&null!=u)for(const e in u){if(!u.hasOwnProperty(e))continue;const t=u[e];-1!=["value","innerText",x,"textContent","contentEditable"][A](e)?d[e]=t:-1!=["color","backgroundColor","width","height","display","float"][A](e)?d.style[e]=t:null!=t&&d[G](e,t)}if(null!=f){const n="string"==typeof f,i="number"==typeof f,o=r[T](f);if(n||i){const t=f;"img"===a||"source"===a?d.src=t:h?d[U](e[X](f)):d[x]=t}else if(o)for(let n of f){const r=n instanceof Element;"string"==typeof n||"number"==typeof n?h?d[U](e[X](t(n))):d[x]+=n:r&&d[U](n)}}return d}}("undefined"==typeof window?window={}:window);export const QUI = window.QUI;