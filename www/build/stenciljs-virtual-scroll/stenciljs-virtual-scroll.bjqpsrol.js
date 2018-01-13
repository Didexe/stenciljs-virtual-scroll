/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='stenciljs-virtual-scroll']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o){if(t.n){e.$defaultHolder||n.t(e,e.$defaultHolder=n.e(""),o[0]);let t,c,l,u=0;for(;u<o.length;u++){var i=o[u];1===n.o(i)&&null!=(t=n.i(i,"slot"))?(l=l||{})[t]?l[t].push(i):l[t]=[i]:c?c.push(i):c=[i]}e.c={l:c,u:l}}}function l(n,t,e){const o=new WeakMap,i={f:t.documentElement,r:t.head,s:t.body,o:n=>n.nodeType,a:n=>t.createElement(n),d:(n,e)=>t.createElementNS(n,e),m:n=>t.createTextNode(n),e:n=>t.createComment(n),t:(n,t,e)=>n.insertBefore(t,e),p:(n,t)=>n.removeChild(t),v:(n,t)=>n.appendChild(t),b:n=>n.childNodes,h:n=>n.parentNode,y:n=>n.nextSibling,w:n=>on(n.tagName),g:n=>n.textContent,C:(n,t)=>n.textContent=t,i:(n,t)=>n.getAttribute(t),N:(n,t,e)=>n.setAttribute(t,e),j:(n,t,e,o)=>n.setAttributeNS(t,e,o),T:(n,t)=>n.removeAttribute(t),k:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.x(e):"body"===o?i.s:"document"===o?t:"window"===o?n:e,O:(n,t,e,c,l,u,f,r)=>{const s=t;let a=n,d=o.get(n);if(d&&d[s]&&d[s](),"string"==typeof u?a=i.k(n,u):"object"==typeof u?a=u:(r=t.split(":")).length>1&&(a=i.k(n,r[0]),t=r[1]),!a)return;let m=e;(r=t.split(".")).length>1&&(t=r[0],m=(n=>{n.keyCode===nn[r[1]]&&e(n)})),f=i.M?{capture:!!c,passive:!!l}:!!c,a.addEventListener(t,m,f),d||o.set(n,d={}),d[s]=(()=>{a&&a.removeEventListener(t,m,f),d[s]=null})},A:(n,t)=>{const e=o.get(n);e&&(t?e[t]&&e[t]():(Object.keys(e).forEach(n=>{e[n]&&e[n]()}),o.delete(n)))}};e=n.CustomEvent;try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.M=!0}))}catch(n){}return i.S=((n,t,o)=>n&&n.dispatchEvent(new e(t,o))),i.x=((n,t)=>(t=i.h(n))&&11===i.o(t)?t.host:t),i}function u(n,t,e,o,i){const c=11===e.P.nodeType&&e.P.host?e.P.host:e.P,l=t&&t.B||X,u=e.B||X;for(i in l)u&&null!=u[i]||null==l[i]||f(n,c,i,l[i],void 0,o);for(i in u)i in l&&u[i]===("value"===i||"checked"===i?c[i]:l[i])||f(n,c,i,l[i],u[i],o)}function f(n,t,e,o,i,c,l,u){if("class"!==e||c)if("style"===e){o=o||X,i=i||X;for(l in o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.L(t);o&&o.R&&e in o.R?r(t,e,i):"ref"!==e&&(r(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(l=e!==(e=e.replace(/^xlink\:?/,"")),1!==un[e]||i&&"false"!==i?"function"!=typeof i&&(l?t.setAttributeNS(fn,on(e),i):t.setAttribute(e,i)):l?t.removeAttributeNS(fn,on(e)):t.removeAttribute(e));else e=on(e.substring(2)),i?o||n.q.O(t,e,i):n.q.A(t,e);else if(o!==i){const n=null==o||""===o?Y:o.trim().split(/\s+/),e=null==i||""===i?Y:i.trim().split(/\s+/);let c=null==t.className||""===t.className?Y:t.className.trim().split(/\s+/);for(l=0,u=n.length;l<u;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,u=e.length;l<u;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function r(n,t,e){try{n[t]=e}catch(n){}}function s(n,t){function e(o,i,c){let l=0;if("function"==typeof o.D&&(o=o.D(Object.assign({},o.B,{H:o.I}))),"slot"===o.D&&!d){if(a){m&&t.N(i,m+"-slot","");let e,c=o.B&&o.B.name;if(e=tn(c)?a.u&&a.u[c]:a.l,tn(e)){for(n.z=!0;l<e.length;l++)t.v(i,t.p(t.h(e[l]),e[l]));n.z=!1}}return null}if(tn(o.F))o.P=t.m(o.F);else{const i=o.P=t.a(o.D);u(n,null,o,rn),null!==m&&i.W!==m&&t.N(i,i.W=m,"");const c=o.I;if(c){let n;for(;l<c.length;++l)(n=e(c[l],i,l))&&t.v(i,n)}}return o.P}function o(n,o,i,c,l){const u=n.$defaultHolder&&t.h(n.$defaultHolder)||n;let f;for(;c<=l;++c){var r=i[c];tn(r)&&(f=tn(r.F)?t.m(r.F):e(r,n,c),tn(f)&&(r.P=f,t.t(u,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)tn(e[o])&&t.p(n,e[o].P)}function c(n,c,u){let s,a,d,m,p=0,v=0,b=c.length-1,h=c[0],y=c[b],$=u.length-1,w=u[0],g=u[$];for(;p<=b&&v<=$;)null==h?h=c[++p]:null==y?y=c[--b]:null==w?w=u[++v]:null==g?g=u[--$]:l(h,w)?(r(h,w),h=c[++p],w=u[++v]):l(y,g)?(r(y,g),y=c[--b],g=u[--$]):l(h,g)?(r(h,g),t.t(n,h.P,t.y(y.P)),h=c[++p],g=u[--$]):l(y,w)?(r(y,w),t.t(n,y.P,h.P),y=c[--b],w=u[++v]):(en(s)&&(s=f(c,p,b)),a=s[w.Z],en(a)?(m=e(w,n,v),w=u[++v]):((d=c[a]).D!==w.D?m=e(w,n,a):(r(d,w),c[a]=void 0,m=d.P),w=u[++v]),m&&t.t(n,m,h.P));p>b?o(n,null==u[$+1]?null:u[$+1].P,u,v,$):v>$&&i(n,c,p,b)}function l(n,t){return n.D===t.D&&n.Z===t.Z}function f(n,t,e){let o,i,c,l={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.Z)&&(l._=o);return l}function r(e,l){const f=l.P=e.P,r=e.I,s=l.I;if(en(l.F))"slot"!==l.D&&u(n,e,l,rn),tn(r)&&tn(s)?c(f,r,s):tn(s)?(tn(e.F)&&t.C(f,""),o(f,null,s,0,s.length-1)):tn(r)&&i(f,r,0,r.length-1);else if(f.c&&f.c.l){let n=f.c.l[0].parentElement;t.C(n,l.F),f.c.l=[n.childNodes[0]]}else e.F!==l.F&&t.C(f,l.F)}let s,a,d,m;return function n(e,o,i,c,l,u){return s=i,a=c,m=2===l||1===l&&!t.G?"data-"+t.w(e.P):null,s||m&&t.N(e.P,m+"-host",""),r(e,o),o}}function a(n,t){n&&(n.J&&n.J(t?null:n.P),n.I&&n.I.forEach(n=>{a(n,t)}))}function d(n,t,e){for(var o,i=!1,c=!1,l=arguments.length;l-- >2;)an.push(arguments[l]);for(;an.length;)if((e=an.pop())&&void 0!==e.pop)for(l=e.length;l--;)an.push(e[l]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].F+=e:void 0===o?o=[c?m(e):e]:o.push(c?m(e):e),i=c;const u=new sn;if(u.D=n,u.I=o,t&&(u.B=t,u.Z=t.K,u.J=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(l in t.class)t.class[l]&&an.push(l);t.class=an.join(" "),an.length=0}return u}function m(n){const t=new sn;return t.F=n,t}function p(n,t){var e,o,i,c,l,u,f=t.querySelectorAll(`[${U}]`),r=f.length;if(t.Q=r>0)for(c=0;c<r;c++)for(e=f[c],o=n.i(e,U),(i=e.U=new sn).D=n.w(i.P=e),l=0,u=e.childNodes.length;l<u;l++)v(n,e.childNodes[l],i,o,!0)}function v(n,t,e,o,i){var c,l,u,f,r=n.o(t);if(i&&1===r){(l=n.i(t,V))&&(u=l.split("."))[0]===o&&((f=new sn).D=n.w(f.P=t),e.I||(e.I=[]),e.I[u[1]]=f,e=f,i=""!==u[2]);for(var s=0;s<t.childNodes.length;s++)v(n,t.childNodes[s],e,o,i)}else 3===r&&(c=t.previousSibling)&&8===n.o(c)&&"s"===(u=n.g(c).split("."))[0]&&u[1]===o&&((f=m(n.g(t))).P=t,e.I||(e.I=[]),e.I[u[2]]=f)}function b(n,t,e,o){function i(){for(;f.length>0;)f.shift()();e=!1}function c(e){for(e=t(),i();r.length>0&&t()-e<40;)r.shift()();(o=r.length>0)&&n(l)}function l(e){for(i(),e=4+t();r.length>0&&t()<e;)r.shift()();(o=r.length>0)&&n(c)}const u=Promise.resolve(),f=[],r=[];return{add:(t,l)=>{3===l?(f.push(t),e||(e=!0,u.then(i))):(r.push(t),o||(o=!0,n(c)))}}}function h(n,t,e){const o={V:n[0],R:{mode:{X:1},color:{X:1,Y:"color"}}};return o.nn=n[1],$(o,n[3],e),o.tn=n[4],o.n=n[5],n[6]&&(o.en=n[6].map(y)),o.on=n[7],t[o.V]=o}function y(n){return{in:n[0],cn:n[1],ln:!!n[2],un:!!n[3],fn:!!n[4]}}function $(n,t,e){if(t){n.R=n.R||{};for(var o=0;o<t.length;o++){var i=t[o];n.R[i[0]]={X:i[1],Y:i[2]?1===e?on(i[0]):cn(i[0]):0,rn:i[3],sn:i[4]}}}}function w(n,t,e,o){const i=n[e[0]];i.an=t[e[0]],$(i,e[1],o),i.dn=e[2],e[3]&&(i.mn=e[3].map(g)),i.pn=e[4],i.vn=e[5]}function g(n){return{in:n[0],cn:n[1]||n[0],bn:!n[2],hn:!n[3],yn:!n[4]}}function C(n,t){if(tn(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function N(n,t,e,o,i,c){if(o!==i&&n){e=on(e);for(c in n)if(n[c].Y===e){t[c]=C(n[c].rn,i);break}}}function j(n,t,e){t&&t.forEach(t=>{e[t.cn]={emit:o=>{const i={bubbles:t.bn,composed:t.yn,cancelable:t.hn,detail:o};n.$n(e.wn,t.in,i)}}})}function T(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].X;1===i||2===i?A(e,o,function n(){return(this.gn=this.gn||{})[o]},function t(e){O(n,this,o,e)}):6===i&&M(e,o,ln)})}function k(n,t,e,o){o.wn=e,e.gn=e.gn||{},t.R&&Object.keys(t.R).forEach(i=>{x(n,t,e,o,i)})}function x(n,t,e,o,i){const c=t.R[i],l=c.X;if(1===l||5===l||2===l){if(5!==l){if(c.Y&&(void 0===e.gn[i]||""===e.gn[i])){const n=e.getAttribute(c.Y);null!=n&&(e.gn[i]=C(c.rn,n))}e.hasOwnProperty(i)&&(void 0===e.gn[i]&&(e.gn[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.gn[i]&&(e.gn[i]=o[i]),A(o,i,function u(){const n=this.wn;return n&&n.gn&&n.gn[i]},function f(t){const e=this.wn;e&&1!==l&&O(n,e,i,t)}),E(t.vn,dn,e,o,i)}else 7===l?M(o,i,e):6===l&&M(e,i,o[i].bind(o))}function E(n,t,e,o,i){const c=n&&n.find(n=>n[0]===i);c&&(e.gn[t+i]=o[c[1]].bind(o))}function O(n,t,e,o){const i=t.gn=t.gn||{},c=i[e];o!==c&&(i[e]=o,i[dn+e]&&i[dn+e](o,c),t.Cn&&!n.Nn&&H(n,t))}function M(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function A(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function S(n,t,e){return{create:B(n,t,e,"create"),componentOnReady:B(n,t,e,"componentOnReady")}}function P(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.s.querySelector(e)),i||(i=t[e]=n.a(e),n.v(n.s,i)),i.componentOnReady(o)})}function B(n,t,e,o){return function(){const i=arguments;return P(n,t,e).then(n=>n[o].apply(n,i))}}function L(n,t,e){try{e=n.L(t),t.Cn=new e.an,k(n,e,t,t.Cn),j(n,e.mn,t.Cn)}catch(e){t.Cn={},n.jn(e,7,t,!0)}}function R(n,t,e){if(t.Cn&&!t.Tn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.Q=!0;try{a(t.U),t.kn&&(t.kn.forEach(n=>n(t)),t.kn=null),t.Cn.componentDidLoad&&t.Cn.componentDidLoad()}catch(e){n.jn(e,4,t)}t.classList.add(e),q(t)}}function q(n,t,e){n.xn&&((e=n.xn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.xn.$initLoad()),n.xn=null)}function D(n,t,e,o){const i=t.Cn,c=e.dn;if(i.render||i.hostData||c){n.Nn=!0;const c=i.render&&i.render();n.Nn=!1;const l=t.U||new sn;l.P=t,t.U=n.render(l,d(null,void 0,c),o,t.c,e.tn)}n.En(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function H(n,t){t.On||(t.On=!0,n.Mn.add(()=>{t.On=!1,I(n,t)}))}function I(n,t){if(!t.Tn){const e=!t.Cn;let o;if(e){const e=t.xn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{I(n,t)});L(n,t);try{t.Cn.componentWillLoad&&(o=t.Cn.componentWillLoad())}catch(e){n.jn(e,3,t)}}o&&o.then?o.then(()=>z(n,t,e)):z(n,t,e)}}function z(n,t,e){try{D(n,t,n.L(t),!e)}catch(e){n.jn(e,8,t,!0)}try{e?t.$initLoad():t.Cn.componentDidUpdate&&t.Cn.componentDidUpdate()}catch(e){n.jn(e,6,t,!0)}}function F(n,t,e){e.$connected||(e.$connected=!0,e.Tn=null,W(n,e),n.Mn.add(()=>{n.An(t,e),n.Sn(t,e,()=>H(n,e))},3))}function W(n,t,e){for(e=t;e=n.q.x(e);)if(n.Pn(e)){e.Q||(t.xn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function Z(n,t){!n.z&&_(n.q,t)&&(t.Tn=!0,q(t),a(t.U,!0),n.q.A(t),t.c&&(t.c=t.c.l=t.c.u=null),t.Cn&&(t.Cn.componentDidUnload&&t.Cn.componentDidUnload(),t.Cn=t.Cn.wn=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Bn=t.gn=t.U=t.xn=t.Q=t.On=t.Ln=null)}function _(n,t){for(;t;){if(!n.h(t))return 9!==n.o(t);t=n.h(t)}}function G(n,t,e,o){e.connectedCallback=function(){F(n,t,this)},e.attributeChangedCallback=function(n,e,o){N(t.R,this,n,e,o)},e.disconnectedCallback=function(){Z(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),J(this,n),t},e.$initLoad=function(){R(n,this,o)},e.Rn=function(){H(n,this)},T(n,t.R,e)}function J(n,t){n.Tn||(n.Q?t(n):(n.kn=n.kn||[]).push(t))}function K(n,t){return n&&1===t.tn}function Q(n,t){return 2===t.tn||1===t.tn&&!n}const U="data-ssrv",V="data-ssrc",X={},Y=[],nn={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},tn=n=>void 0!==n&&null!==n,en=n=>void 0===n||null===n,on=n=>n.toLowerCase(),cn=n=>n.replace(/([A-Z])/g,n=>" "+on(n[0])).trim().replace(/ /g,"-"),ln=()=>{},un={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},fn="http://www.w3.org/1999/xlink";let rn=!1;class sn{}const an=[],dn="$$dc",mn=n[o]=n[o]||{},pn=function vn(t,e,o,i,u,f){function r(n,t,e,o,i){function c(){clearTimeout(o),i.onerror=i.onload=null,N.p(N.h(i),i),g[e]=!1}e=u+t+(Q(N.G,n)?".sc":"")+".js",g[e]||(g[e]=!0,(i=N.a("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(c,12e4),i.onerror=i.onload=c,N.v(N.r,i))}const a={html:{}},m={},v={},y={},$={},g={},C={},N=l(o,i);t.emit=((n,e,o)=>N.S(n,t.eventNameFn?t.eventNameFn(e):e,o)),t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=u;const j=o.qn=o.qn||{},T={An:function k(n,e){e.mode||(e.mode=N.i(e,"mode")||t.mode),N.i(e,U)||K(N.G,n)||c(N,n,e,e.childNodes),N.G||1!==n.tn||(e.shadowRoot=e)},q:N,Dn:function x(n,t){const e=n.V;if(!j[e]){j[e]=!0,G(T,n,t.prototype,f);{const e=[];for(var i in n.R)n.R[i].Y&&e.push(n.R[i].Y);t.observedAttributes=e}o.customElements.define(e,t)}},$n:t.emit,L:n=>a[N.w(n)],Hn:n=>t[n],isClient:!0,Pn:n=>!(!j[N.w(n)]&&!T.L(n)),Sn:function E(n,t,e,o){o=(n.nn[t.mode]||n.nn)[0],y[o]?e():((v[o]=v[o]||[]).push(e),r(n,o))},jn:(n,t,e)=>void 0,In:n=>S(N,C,n),Mn:b(t=>n.requestAnimationFrame(t),()=>o.performance.now()),zn:n=>(n||[]).map(n=>h(n,a))};T.render=s(T,N);const O=N.f;return O.$rendered=!0,O.$activeLoading=[],O.$initLoad=(()=>O.Q=!0),p(N,O),e.loadComponents=function n(e,o){const i=arguments;o(m,d,t,u);for(var c=2;c<i.length;c++)w(a,m,i[c]);var l=v[e];if(l){for(c=0;c<l.length;c++)l[c]();v[e]=null}y[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)$[t[o]]=e=N.a("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,N.v(N.r,e)},T.En=((n,t,e)=>{{const o=$[n.V+"_"+t]||$[n.V];if(o){let t=N.r;if(N.G)if(1===n.tn)t=e.shadowRoot;else for(;e=N.h(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.Fn=t.Fn||{};if(!i[o.id]){{const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");N.t(t,n,e&&e.nextSibling||t.Wn)}i[o.id]=!0}}}}),T}(e,mn,n,t,i,hydratedCssClass);pn.zn(mn.components).forEach(n=>pn.Dn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"stenciljs-virtual-scroll","hydrated","/build/stenciljs-virtual-scroll/");