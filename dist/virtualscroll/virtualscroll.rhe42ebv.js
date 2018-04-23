/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='virtualscroll']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i){let c=t.is+(e||""),l=t[c];if(l||(l=t[c=t.is]),l){let e=n.n;if(n.t)if("shadow"===t.e)e=o.shadowRoot;else for(;o=n.o(o);)if(o.host&&o.host.shadowRoot){e=o.host.shadowRoot;break}const r=e.i=e.i||{};if(!r[c]){i=l.content.cloneNode(!0);const t=e.querySelector("[data-visibility]");n.c(e,i,t&&t.nextSibling||e.l),r[c]=!0}}}function l(n){return{r:n[0],f:n[1],u:!!n[2],s:!!n[3],a:!!n[4]}}function r(n,t){if(S(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}function f(n,t,e){n.d&&((e=n.d.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.d.$initLoad()),n.d=null)}function u(n,t,e){for(var o,i=!1,c=!1,l=arguments.length;l-- >2;)L.push(arguments[l]);for(;L.length;)if((e=L.pop())&&void 0!==e.pop)for(l=e.length;l--;)L.push(e[l]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].p+=e:void 0===o?o=[c?s(e):e]:o.push(c?s(e):e),i=c;const r=new B;if(r.m=n,r.v=o,t&&(r.b=t,r.y=t.w,r.g=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(l in t.class)t.class[l]&&L.push(l);t.class=L.join(" "),L.length=0}return r}function s(n){const t=new B;return t.p=n,t}function a(n,t){t.C||(t.C=!0,n.N.add(()=>{t.C=!1,d(n,t)}))}function d(n,t){if(!t.j){const e=!t.O;let o;if(e){const e=t.d;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{d(n,t)});(function e(n,t,o){try{o=n.x(t).k,t.O=new o,function i(n,t,e,o,c,l){o.S=e,e.T=e.T||{},c=Object.assign({mode:{type:String},color:{type:String}},t.properties);for(l in c)m(n,c[l],e,o,l)}(n,o,t,t.O),function c(n,t,e){t&&t.forEach(t=>{e[t.method]={emit:o=>{n.A(e.S,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:o})}}})}(n,o.events,t.O)}catch(e){t.O={},n.M(e,7,t,!0)}})(n,t);try{t.O.componentWillLoad&&(o=t.O.componentWillLoad())}catch(e){n.M(e,3,t)}}o&&o.then?o.then(()=>p(n,t,e)):p(n,t,e)}}function p(n,t,e){try{(function o(n,t,e,i){const c=t.O,l=e.host;if(c.render||c.hostData||l){n.P=!0;const o=c.render&&c.render();n.P=!1;const l=t.B||new B;l.L=t,t.B=n.render(l,u(null,void 0,o),i,t.R,e.e)}n.q(n.D,e,c.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)})(n,t,n.x(t).k,!e)}catch(e){n.M(e,8,t,!0)}try{e?t.$initLoad():t.O.componentDidUpdate&&t.O.componentDidUpdate()}catch(e){n.M(e,6,t,!0)}}function m(n,t,e,o,i){function c(n){return(n=this.S)&&n.T&&n.T[i]}function l(e,o){(o=this.S)&&(t.state||t.mutable)&&v(n,o,i,e)}if(t.type||t.state){if(!t.state){if(t.attr&&(void 0===e.T[i]||""===e.T[i])){const o=n.D.H(e,t.attr);null!=o&&(e.T[i]=r(t.type,o))}e.hasOwnProperty(i)&&(void 0===e.T[i]&&(e.T[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===e.T[i]&&(e.T[i]=o[i]),t.watchCallbacks&&(e.T[R+i]=t.watchCallbacks.slice()),h(o,i,c,l)}else t.elementRef?b(o,i,e):t.method&&b(e,i,o[i].bind(o))}function v(n,t,e,o,i,c,l){const r=(i=t.T=t.T||{})[e];if(o!==r&&(i[e]=o,c=t.O)){if(l=i[R+e])for(let n=0;n<l.length;n++)try{c[l[n]].call(c,o,r)}catch(n){}n.P||a(n,t)}}function b(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function h(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function y(n,t,e,o,i){const c=11===e.L.nodeType&&e.L.host?e.L.host:e.L,l=t&&t.b||O,r=e.b||O;for(i in l)r&&null!=r[i]||null==l[i]||$(n,c,i,l[i],void 0,o);for(i in r)i in l&&r[i]===("value"===i||"checked"===i?c[i]:l[i])||$(n,c,i,l[i],r[i],o)}function $(n,t,e,o,i,c,l,r){if("class"!==e||c)if("style"===e){o=o||O,i=i||O;for(l in o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.x(t);o&&o.z&&o.z[e]?w(t,e,i):"ref"!==e&&(w(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(l=e!==(e=e.replace(/^xlink\:?/,"")),1!==q[e]||i&&"false"!==i?"function"!=typeof i&&(l?t.setAttributeNS(D,A(e),i):t.setAttribute(e,i)):l?t.removeAttributeNS(D,A(e)):t.removeAttribute(e));else e=A(e.substring(2)),i?o||n.D.F(t,e,i):n.D.I(t,e);else if(o!==i){const n=null==o||""===o?k:o.trim().split(/\s+/),e=null==i||""===i?k:i.trim().split(/\s+/);let c=null==t.className||""===t.className?k:t.className.trim().split(/\s+/);for(l=0,r=n.length;l<r;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,r=e.length;l<r;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function w(n,t,e){try{n[t]=e}catch(n){}}function g(n,t){n&&(n.g&&n.g(t?null:n.L),n.v&&n.v.forEach(n=>{g(n,t)}))}function C(n,t,e,o,i){var c,l,r,f,u=n.W(t);if(i&&1===u){(l=n.H(t,E))&&(r=l.split("."))[0]===o&&((f=new B).m=n.Z(f.L=t),e.v||(e.v=[]),e.v[r[1]]=f,e=f,i=""!==r[2]);for(var a=0;a<t.childNodes.length;a++)C(n,t.childNodes[a],e,o,i)}else 3===u&&(c=t.previousSibling)&&8===n.W(c)&&"s"===(r=n.G(c).split("."))[0]&&r[1]===o&&((f=s(n.G(t))).L=t,e.v||(e.v=[]),e.v[r[2]]=f)}function N(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.J.querySelector(e)),i||(i=t[e]=n.K(e),n.Q(n.J,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const j="data-ssrv",E="data-ssrc",O={},k=[],x={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},S=n=>void 0!==n&&null!==n,T=n=>void 0===n||null===n,A=n=>n.toLowerCase(),M=n=>A(n.replace(/([A-Z])/g,n=>" "+n[0]).trim().replace(/ /g,"-")),P=()=>{};class B{}const L=[],R="wc-",q={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},D="http://www.w3.org/1999/xlink";let H=!1;const z=n[o]=n[o]||{};{const o=function F(t,e,o,i,s,d){const p={html:{}},m={},$=function w(n,t){const e=new WeakMap,o={U:t.documentElement,n:t.head,J:t.body,V:!1,W:n=>n.nodeType,K:n=>t.createElement(n),X:(n,e)=>t.createElementNS(n,e),Y:n=>t.createTextNode(n),_:n=>t.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),nn:(n,t)=>n.removeChild(t),Q:(n,t)=>n.appendChild(t),tn:n=>n.childNodes,o:n=>n.parentNode,en:n=>n.nextSibling,Z:n=>A(n.tagName),G:n=>n.textContent,on:(n,t)=>n.textContent=t,H:(n,t)=>n.getAttribute(t),in:(n,t,e)=>n.setAttribute(t,e),cn:(n,t,e,o)=>n.setAttributeNS(t,e,o),ln:(n,t)=>n.removeAttribute(t),rn:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.fn(e):"body"===i?o.J:"document"===i?t:"window"===i?n:e,F:(n,t,i,c,l,r,f,u)=>{const s=t;let a=n,d=e.get(n);if(d&&d[s]&&d[s](),"string"==typeof r?a=o.rn(n,r):"object"==typeof r?a=r:(u=t.split(":")).length>1&&(a=o.rn(n,u[0]),t=u[1]),!a)return;let p=i;(u=t.split(".")).length>1&&(t=u[0],p=(n=>{n.keyCode===x[u[1]]&&i(n)})),f=o.V?{capture:!!c,passive:!!l}:!!c,a.addEventListener(t,p,f),d||e.set(n,d={}),d[s]=(()=>{a&&a.removeEventListener(t,p,f),d[s]=null})},I:(n,t)=>{const o=e.get(n);o&&(t?o[t]&&o[t]():(Object.keys(o).forEach(n=>{o[n]&&o[n]()}),e.delete(n)))}};o.un=((t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o)));try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>o.V=!0}))}catch(n){}return o.fn=((n,t)=>(t=o.o(n))&&11===o.W(t)?t.host:t),o}(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=s,t.emit=((n,e,o)=>$.un(n,t.eventNameFn?t.eventNameFn(e):e,o)),e.h=u,e.Context=t;const E=o.$definedCmps=o.$definedCmps||{},O={sn:function k(n,e){e.mode||(e.mode=$.H(e,"mode")||t.mode),$.H(e,j)||function o(n,t){return n&&1===t.e}($.t,n)||function i(n,t,e){t.$defaultHolder||n.c(t,t.$defaultHolder=n._(""),e[0]);let o,i,c,l=0;for(;l<e.length;l++){var r=e[l];1===n.W(r)&&null!=(o=n.H(r,"slot"))?(c=c||{})[o]?c[o].push(r):c[o]=[r]:i?i.push(r):i=[r]}t.R={an:i,dn:c}}($,e,e.childNodes),$.t||1!==n.e||(e.shadowRoot=e)},D:$,pn:function L(n,t){if(!E[n.mn]){E[n.mn]=!0,function e(n,t,o,i){o.connectedCallback=function(){(function e(n,t,o){o.$connected||(o.$connected=!0,o.j=null,function i(n,t,e){for(e=t;e=n.D.fn(e);)if(n.vn(e)){e.bn||(t.d=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.N.add(()=>{n.sn(t,o),n.hn(t,o.mode,()=>a(n,o))},3))})(n,t,this)},o.attributeChangedCallback=function(n,e,o){(function i(n,t,e,o,c,l){if(o!==c&&n){e=A(e);for(l in n)if(n[l].yn===e){t[l]=r(n[l].$n,c);break}}})(t.z,this,n,e,o)},o.disconnectedCallback=function(){(function t(n,e){!n.wn&&function o(n,t){for(;t;){if(!n.o(t))return 9!==n.W(t);t=n.o(t)}}(n.D,e)&&(e.j=!0,f(e),g(e.B,!0),n.D.I(e),e.R&&(e.R=e.R.an=e.R.dn=null),e.O&&(e.O.componentDidUnload&&e.O.componentDidUnload(),e.O=e.O.S=null),e.$activeLoading=e.$connected=e.$defaultHolder=e.gn=e.T=e.B=e.d=e.bn=e.C=e.Cn=null)})(n,this)},o.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),function e(n,t){n.j||(n.bn?t(n):(n.Nn=n.Nn||[]).push(t))}(this,n),t},o.$initLoad=function(){(function t(n,e,o){if(e.O&&!e.j&&(!e.$activeLoading||!e.$activeLoading.length)){e.$activeLoading=null,e.bn=!0;try{g(e.B),e.Nn&&(e.Nn.forEach(n=>n(e)),e.Nn=null),e.O.componentDidLoad&&e.O.componentDidLoad()}catch(t){n.M(t,4,e)}e.classList.add(o),f(e)}})(n,this,i)},o.jn=function(){a(n,this)},function c(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].En;1===i||2===i?h(e,o,function n(){return(this.T=this.T||{})[o]},function t(e){v(n,this,o,e)}):6===i&&b(e,o,P)})}(n,t.z,o)}(O,n,t.prototype,d);{const e=[];for(var i in n.z)n.z[i].yn&&e.push(n.z[i].yn),t.observedAttributes=e}o.customElements.define(n.mn,t)}},A:t.emit,x:n=>p[$.Z(n)],On:n=>t[n],isClient:!0,vn:n=>!(!E[$.Z(n)]&&!O.x(n)),hn:function R(n,t,e){if(n.k)e();else{const o=n.kn[t]||n.kn,c=s+o+(function o(n,t){return 2===t.e||1===t.e&&!n}($.t,n)?".sc":"")+".js";import(c).then(t=>{try{n.k||(n.k=t[(i=n.mn,A(i).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))]),function o(n,t){const e=t.style;if(e){const o=t.is+(t.styleMode||"");if(!t[o]){const i=n.K("template");t[o]=i,i.innerHTML="<style>"+e+"</style>",n.Q(n.n,i)}}}($,n.k)}catch(t){n.k=class{}}e()}).catch(n=>void 0)}var i},M:(n,t,e)=>void 0,xn:n=>(function t(n,e,o){return{create:N(n,e,o,"create"),componentOnReady:N(n,e,o,"componentOnReady")}})($,m,n),N:function q(t,e,o){function i(){for(;s.length>0;)s.shift()();e=!1}function c(n){for(n=r(),i();a.length>0&&r()-n<40;)a.shift()();(o=a.length>0)&&f(l)}function l(n){for(i(),n=4+r();a.length>0&&r()<n;)a.shift()();(o=a.length>0)&&f(c)}const r=()=>t.performance.now(),f=t=>n.requestAnimationFrame(t),u=Promise.resolve(),s=[],a=[];return{add:(n,t)=>{3===t?(s.push(n),e||(e=!0,u.then(i))):(a.push(n),o||(o=!0,f(c)))}}}(o),Sn:n=>(n||[]).map(n=>(function t(n,e,o){const i={mn:n[0],z:{color:{yn:"color"}}};i.kn=n[1];const c=n[3];if(c)for(var r=0;r<c.length;r++){var f=c[r];i.z[f[0]]={En:f[1],yn:f[2]?1===o?A(f[0]):M(f[0]):0,$n:f[3]}}return i.e=n[4],n[5]&&(i.Tn=n[5].map(l)),e[i.mn]=i})(n,p))};O.render=function D(n,t){function e(o,i,c){let l=0;if("function"==typeof o.m&&(o=o.m(Object.assign({},o.b,{An:o.v}))),!s&&"slot"===o.m){if(u){a&&t.in(i,a+"-slot","");let e,c=o.b&&o.b.name;if(e=S(c)?u.dn&&u.dn[c]:u.an,S(e)){for(n.wn=!0;l<e.length;l++)t.Q(i,t.nn(t.o(e[l]),e[l]));n.wn=!1}}return null}if(S(o.p))o.L=t.Y(o.p);else{const i=o.L=t.K(o.m);y(n,null,o,H),null!==a&&i.Mn!==a&&t.in(i,i.Mn=a,"");const c=o.v;if(c){let n;for(;l<c.length;++l)(n=e(c[l],i))&&t.Q(i,n)}H=!1}return o.L}function o(n,o,i,c,l){const r=n.$defaultHolder&&t.o(n.$defaultHolder)||n;let f;for(;c<=l;++c){var u=i[c];S(u)&&(f=S(u.p)?t.Y(u.p):e(u,n),S(f)&&(u.L=f,t.c(r,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)S(e[o])&&t.nn(n,e[o].L)}function c(n,t){return n.m===t.m&&n.y===t.y}function l(n,t,e){let o,i,c,l={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.y)&&(l.Pn=o);return l}function r(f,u){const s=u.L=f.L,a=f.v,d=u.v;if(T(u.p))"slot"!==u.m&&y(n,f,u,H),S(a)&&S(d)?function p(n,f,u){let s,a,d,p,m=0,v=0,b=f.length-1,h=f[0],y=f[b],$=u.length-1,w=u[0],g=u[$];for(;m<=b&&v<=$;)null==h?h=f[++m]:null==y?y=f[--b]:null==w?w=u[++v]:null==g?g=u[--$]:c(h,w)?(r(h,w),h=f[++m],w=u[++v]):c(y,g)?(r(y,g),y=f[--b],g=u[--$]):c(h,g)?(r(h,g),t.c(n,h.L,t.en(y.L)),h=f[++m],g=u[--$]):c(y,w)?(r(y,w),t.c(n,y.L,h.L),y=f[--b],w=u[++v]):(T(s)&&(s=l(f,m,b)),a=s[w.y],T(a)?(p=e(w,n),w=u[++v]):((d=f[a]).m!==w.m?p=e(w,n):(r(d,w),f[a]=void 0,p=d.L),w=u[++v]),p&&t.c(n,p,h.L));m>b?o(n,null==u[$+1]?null:u[$+1].L,u,v,$):v>$&&i(n,f,m,b)}(s,a,d):S(d)?(S(f.p)&&t.on(s,""),o(s,null,d,0,d.length-1)):S(a)&&i(s,a,0,a.length-1);else if(s.R&&s.R.an){let n=s.R.an[0].parentElement;t.on(n,u.p),s.R.an=[n.childNodes[0]]}else f.p!==u.p&&t.on(s,u.p)}let f,u,s,a;return function n(e,o,i,c,l,s){return f=i,u=c,a="scoped"===l||"shadow"===l&&!t.t?"data-"+t.Z(e.L):null,f||a&&t.in(e.L,a+"-host",""),r(e,o),o}}(O,$);const z=$.U;return z.$rendered=!0,z.$activeLoading=[],z.$initLoad=(()=>z.bn=!0),function F(n,t){var e,o,i,c,l,r,f=t.querySelectorAll(`[${j}]`),u=f.length;if(t.bn=u>0)for(c=0;c<u;c++)for(e=f[c],o=n.H(e,j),(i=e.B=new B).m=n.Z(i.L=e),l=0,r=e.childNodes.length;l<r;l++)C(n,e.childNodes[l],i,o,!0)}($,z),O.q=c,O}(e,z,n,t,i,hydratedCssClass);o.Sn(z.components).forEach(n=>o.pn(n,class extends HTMLElement{}))}})(window,document,Context,appNamespace,publicPath);
})({},"virtualscroll","hydrated","/build/virtualscroll/");