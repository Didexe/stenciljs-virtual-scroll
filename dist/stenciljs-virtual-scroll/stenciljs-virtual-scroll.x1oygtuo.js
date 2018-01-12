/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='stenciljs-virtual-scroll']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o){if(t.n){e.$defaultHolder||n.t(e,e.$defaultHolder=n.e(""),o[0]);let t,c,l,u=0;for(;u<o.length;u++){var i=o[u];1===n.o(i)&&null!=(t=n.i(i,"slot"))?(l=l||{})[t]?l[t].push(i):l[t]=[i]:c?c.push(i):c=[i]}e.c={l:c,u:l}}}function l(n,t,e){const o=new WeakMap,i={f:t.documentElement,r:t.head,s:t.body,o:n=>n.nodeType,a:n=>t.createElement(n),d:(n,e)=>t.createElementNS(n,e),m:n=>t.createTextNode(n),e:n=>t.createComment(n),t:(n,t,e)=>n.insertBefore(t,e),p:(n,t)=>n.removeChild(t),v:(n,t)=>n.appendChild(t),b:n=>n.childNodes,h:n=>n.parentNode,y:n=>n.nextSibling,g:n=>Y(n.tagName),w:n=>n.textContent,C:(n,t)=>n.textContent=t,i:(n,t)=>n.getAttribute(t),N:(n,t,e)=>n.setAttribute(t,e),j:(n,t,e,o)=>n.setAttributeNS(t,e,o),T:(n,t)=>n.removeAttribute(t),k:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.x(e):"body"===o?i.s:"document"===o?t:"window"===o?n:e,O:(n,t,e,c,l,u,f,r)=>{const s=t;let a=n,d=o.get(n);if(d&&d[s]&&d[s](),"string"==typeof u?a=i.k(n,u):"object"==typeof u?a=u:(r=t.split(":")).length>1&&(a=i.k(n,r[0]),t=r[1]),!a)return;let m=e;(r=t.split(".")).length>1&&(t=r[0],m=(n=>{n.keyCode===U[r[1]]&&e(n)})),f=i.M?{capture:!!c,passive:!!l}:!!c,a.addEventListener(t,m,f),d||o.set(n,d={}),d[s]=(()=>{a&&a.removeEventListener(t,m,f),d[s]=null})},A:(n,t)=>{const e=o.get(n);e&&(t?e[t]&&e[t]():(Object.keys(e).forEach(n=>{e[n]&&e[n]()}),o.delete(n)))}};e=n.CustomEvent;try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.M=!0}))}catch(n){}return i.S=((n,t,o)=>n&&n.dispatchEvent(new e(t,o))),i.x=((n,t)=>(t=i.h(n))&&11===i.o(t)?t.host:t),i}function u(n,t,e,o,i){const c=11===e.P.nodeType&&e.P.host?e.P.host:e.P,l=t&&t.B||K,u=e.B||K;for(i in l)u&&null!=u[i]||null==l[i]||f(n,c,i,l[i],void 0,o);for(i in u)i in l&&u[i]===("value"===i||"checked"===i?c[i]:l[i])||f(n,c,i,l[i],u[i],o)}function f(n,t,e,o,i,c,l,u){if("class"!==e||c)if("style"===e){o=o||K,i=i||K;for(l in o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.L(t);o&&o.R&&e in o.R?r(t,e,i):"ref"!==e&&(r(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(l=e!==(e=e.replace(/^xlink\:?/,"")),1!==en[e]||i&&"false"!==i?"function"!=typeof i&&(l?t.setAttributeNS(on,Y(e),i):t.setAttribute(e,i)):l?t.removeAttributeNS(on,Y(e)):t.removeAttribute(e));else e=Y(e.substring(2)),i?o||n.q.O(t,e,i):n.q.A(t,e);else if(o!==i){const n=null==o||""===o?Q:o.trim().split(/\s+/),e=null==i||""===i?Q:i.trim().split(/\s+/);let c=null==t.className||""===t.className?Q:t.className.trim().split(/\s+/);for(l=0,u=n.length;l<u;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,u=e.length;l<u;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function r(n,t,e){try{n[t]=e}catch(n){}}function s(n,t){function e(o,i,c){let l=0;if("function"==typeof o.D&&(o=o.D(Object.assign({},o.B,{H:o.I}))),"slot"===o.D&&!d){if(a){m&&t.N(i,m+"-slot","");let e,c=o.B&&o.B.name;if(e=V(c)?a.u&&a.u[c]:a.l,V(e)){for(n.z=!0;l<e.length;l++)t.v(i,t.p(t.h(e[l]),e[l]));n.z=!1}}return null}if(V(o.F))o.P=t.m(o.F);else{const i=o.P=t.a(o.D);u(n,null,o,cn),null!==m&&i.W!==m&&t.N(i,i.W=m,"");const c=o.I;if(c){let n;for(;l<c.length;++l)(n=e(c[l],i,l))&&t.v(i,n)}}return o.P}function o(n,o,i,c,l){const u=n.$defaultHolder&&t.h(n.$defaultHolder)||n;let f;for(;c<=l;++c){var r=i[c];V(r)&&(f=V(r.F)?t.m(r.F):e(r,n,c),V(f)&&(r.P=f,t.t(u,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)V(e[o])&&t.p(n,e[o].P)}function c(n,c,u){let s,a,d,m,p=0,v=0,b=c.length-1,h=c[0],y=c[b],$=u.length-1,g=u[0],w=u[$];for(;p<=b&&v<=$;)null==h?h=c[++p]:null==y?y=c[--b]:null==g?g=u[++v]:null==w?w=u[--$]:l(h,g)?(r(h,g),h=c[++p],g=u[++v]):l(y,w)?(r(y,w),y=c[--b],w=u[--$]):l(h,w)?(r(h,w),t.t(n,h.P,t.y(y.P)),h=c[++p],w=u[--$]):l(y,g)?(r(y,g),t.t(n,y.P,h.P),y=c[--b],g=u[++v]):(X(s)&&(s=f(c,p,b)),a=s[g.Z],X(a)?(m=e(g,n,v),g=u[++v]):((d=c[a]).D!==g.D?m=e(g,n,a):(r(d,g),c[a]=void 0,m=d.P),g=u[++v]),m&&t.t(n,m,h.P));p>b?o(n,null==u[$+1]?null:u[$+1].P,u,v,$):v>$&&i(n,c,p,b)}function l(n,t){return n.D===t.D&&n.Z===t.Z}function f(n,t,e){let o,i,c,l={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.Z)&&(l._=o);return l}function r(e,l){const f=l.P=e.P,r=e.I,s=l.I;if(X(l.F))"slot"!==l.D&&u(n,e,l,cn),V(r)&&V(s)?c(f,r,s):V(s)?(V(e.F)&&t.C(f,""),o(f,null,s,0,s.length-1)):V(r)&&i(f,r,0,r.length-1);else if(f.c&&f.c.l){let n=f.c.l[0].parentElement;t.C(n,l.F),f.c.l=[n.childNodes[0]]}else e.F!==l.F&&t.C(f,l.F)}let s,a,d,m;return function n(e,o,i,c,l,u){return s=i,a=c,m=2===l||1===l&&!t.G?"data-"+t.g(e.P):null,s||m&&t.N(e.P,m+"-host",""),r(e,o),o}}function a(n,t){n&&(n.J&&n.J(t?null:n.P),n.I&&n.I.forEach(n=>{a(n,t)}))}function d(n,t,e){for(var o,i=!1,c=!1,l=arguments.length;l-- >2;)un.push(arguments[l]);for(;un.length;)if((e=un.pop())&&void 0!==e.pop)for(l=e.length;l--;)un.push(e[l]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].F+=e:void 0===o?o=[c?m(e):e]:o.push(c?m(e):e),i=c;const u=new ln;if(u.D=n,u.I=o,t&&(u.B=t,u.Z=t.K,u.J=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(l in t.class)t.class[l]&&un.push(l);t.class=un.join(" "),un.length=0}return u}function m(n){const t=new ln;return t.F=n,t}function p(n,t,e,o){function i(){for(;f.length>0;)f.shift()();e=!1}function c(e){for(e=t(),i();r.length>0&&t()-e<40;)r.shift()();(o=r.length>0)&&n(l)}function l(e){for(i(),e=4+t();r.length>0&&t()<e;)r.shift()();(o=r.length>0)&&n(c)}const u=Promise.resolve(),f=[],r=[];return{add:(t,l)=>{3===l?(f.push(t),e||(e=!0,u.then(i))):(r.push(t),o||(o=!0,n(c)))}}}function v(n,t,e){const o={Q:n[0],R:{mode:{U:1},color:{U:1,V:"color"}}};return o.X=n[1],h(o,n[3],e),o.Y=n[4],o.n=n[5],n[6]&&(o.nn=n[6].map(b)),o.tn=n[7],t[o.Q]=o}function b(n){return{en:n[0],on:n[1],in:!!n[2],cn:!!n[3],ln:!!n[4]}}function h(n,t,e){if(t){n.R=n.R||{};for(var o=0;o<t.length;o++){var i=t[o];n.R[i[0]]={U:i[1],V:i[2]?1===e?Y(i[0]):nn(i[0]):0,un:i[3],fn:i[4]}}}}function y(n,t,e,o){const i=n[e[0]];i.rn=t[e[0]],h(i,e[1],o),i.sn=e[2],e[3]&&(i.an=e[3].map($)),i.dn=e[4],i.mn=e[5]}function $(n){return{en:n[0],on:n[1]||n[0],pn:!n[2],vn:!n[3],bn:!n[4]}}function g(n,t){if(V(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function w(n,t,e,o,i,c){if(o!==i&&n){e=Y(e);for(c in n)if(n[c].V===e){t[c]=g(n[c].un,i);break}}}function C(n,t,e){t&&t.forEach(t=>{e[t.on]={emit:o=>{const i={bubbles:t.pn,composed:t.bn,cancelable:t.vn,detail:o};n.hn(e.yn,t.en,i)}}})}function N(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].U;1===i||2===i?O(e,o,function n(){return(this.$n=this.$n||{})[o]},function t(e){x(n,this,o,e)}):6===i&&E(e,o,tn)})}function j(n,t,e,o){o.yn=e,e.$n=e.$n||{},t.R&&Object.keys(t.R).forEach(i=>{T(n,t,e,o,i)})}function T(n,t,e,o,i){const c=t.R[i],l=c.U;if(1===l||5===l||2===l){if(5!==l){if(c.V&&(void 0===e.$n[i]||""===e.$n[i])){const n=e.getAttribute(c.V);null!=n&&(e.$n[i]=g(c.un,n))}e.hasOwnProperty(i)&&(void 0===e.$n[i]&&(e.$n[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.$n[i]&&(e.$n[i]=o[i]),O(o,i,function u(){const n=this.yn;return n&&n.$n&&n.$n[i]},function f(t){const e=this.yn;e&&1!==l&&x(n,e,i,t)}),k(t.mn,fn,e,o,i)}else 7===l?E(o,i,e):6===l&&E(e,i,o[i].bind(o))}function k(n,t,e,o,i){const c=n&&n.find(n=>n[0]===i);c&&(e.$n[t+i]=o[c[1]].bind(o))}function x(n,t,e,o){const i=t.$n=t.$n||{},c=i[e];o!==c&&(i[e]=o,i[fn+e]&&i[fn+e](o,c),t.gn&&!n.wn&&q(n,t))}function E(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function O(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function M(n,t,e){return{create:S(n,t,e,"create"),componentOnReady:S(n,t,e,"componentOnReady")}}function A(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.s.querySelector(e)),i||(i=t[e]=n.a(e),n.v(n.s,i)),i.componentOnReady(o)})}function S(n,t,e,o){return function(){const i=arguments;return A(n,t,e).then(n=>n[o].apply(n,i))}}function P(n,t,e){try{e=n.L(t),t.gn=new e.rn,j(n,e,t,t.gn),C(n,e.an,t.gn)}catch(e){t.gn={},n.Cn(e,7,t,!0)}}function B(n,t,e){if(t.gn&&!t.Nn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.jn=!0;try{a(t.Tn),t.kn&&(t.kn.forEach(n=>n(t)),t.kn=null),t.gn.componentDidLoad&&t.gn.componentDidLoad()}catch(e){n.Cn(e,4,t)}t.classList.add(e),L(t)}}function L(n,t,e){n.xn&&((e=n.xn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.xn.$initLoad()),n.xn=null)}function R(n,t,e,o){const i=t.gn,c=e.sn;if(i.render||i.hostData||c){n.wn=!0;const c=i.render&&i.render();n.wn=!1;const l=t.Tn||new ln;l.P=t,t.Tn=n.render(l,d(null,void 0,c),o,t.c,e.Y)}n.En(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function q(n,t){t.On||(t.On=!0,n.Mn.add(()=>{t.On=!1,D(n,t)}))}function D(n,t){if(!t.Nn){const e=!t.gn;let o;if(e){const e=t.xn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{D(n,t)});P(n,t);try{t.gn.componentWillLoad&&(o=t.gn.componentWillLoad())}catch(e){n.Cn(e,3,t)}}o&&o.then?o.then(()=>H(n,t,e)):H(n,t,e)}}function H(n,t,e){try{R(n,t,n.L(t),!e)}catch(e){n.Cn(e,8,t,!0)}try{e?t.$initLoad():t.gn.componentDidUpdate&&t.gn.componentDidUpdate()}catch(e){n.Cn(e,6,t,!0)}}function I(n,t,e){e.$connected||(e.$connected=!0,e.Nn=null,z(n,e),n.Mn.add(()=>{n.An(t,e),n.Sn(t,e,()=>q(n,e))},3))}function z(n,t,e){for(e=t;e=n.q.x(e);)if(n.Pn(e)){e.jn||(t.xn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function F(n,t){!n.z&&W(n.q,t)&&(t.Nn=!0,L(t),a(t.Tn,!0),n.q.A(t),t.c&&(t.c=t.c.l=t.c.u=null),t.gn&&(t.gn.componentDidUnload&&t.gn.componentDidUnload(),t.gn=t.gn.yn=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Bn=t.$n=t.Tn=t.xn=t.jn=t.On=t.Ln=null)}function W(n,t){for(;t;){if(!n.h(t))return 9!==n.o(t);t=n.h(t)}}function Z(n,t,e,o){e.connectedCallback=function(){I(n,t,this)},e.attributeChangedCallback=function(n,e,o){w(t.R,this,n,e,o)},e.disconnectedCallback=function(){F(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),_(this,n),t},e.$initLoad=function(){B(n,this,o)},e.Rn=function(){q(n,this)},N(n,t.R,e)}function _(n,t){n.Nn||(n.jn?t(n):(n.kn=n.kn||[]).push(t))}function G(n,t){return n&&1===t.Y}function J(n,t){return 2===t.Y||1===t.Y&&!n}const K={},Q=[],U={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},V=n=>void 0!==n&&null!==n,X=n=>void 0===n||null===n,Y=n=>n.toLowerCase(),nn=n=>n.replace(/([A-Z])/g,n=>" "+Y(n[0])).trim().replace(/ /g,"-"),tn=()=>{},en={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},on="http://www.w3.org/1999/xlink";let cn=!1;class ln{}const un=[],fn="$$dc",rn=n[o]=n[o]||{},sn=function an(t,e,o,i,u,f){function r(n,t,e,o,i){function c(){clearTimeout(o),i.onerror=i.onload=null,C.p(C.h(i),i),g[e]=!1}e=u+t+(J(C.G,n)?".sc":"")+".js",g[e]||(g[e]=!0,(i=C.a("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(c,12e4),i.onerror=i.onload=c,C.v(C.r,i))}const a={html:{}},m={},b={},h={},$={},g={},w={},C=l(o,i);t.emit=((n,e,o)=>C.S(n,t.eventNameFn?t.eventNameFn(e):e,o)),t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=u;const N=o.qn=o.qn||{},j={An:function T(n,e){e.mode||(e.mode=C.i(e,"mode")||t.mode),C.i(e,"data-ssrv")||G(C.G,n)||c(C,n,e,e.childNodes),C.G||1!==n.Y||(e.shadowRoot=e)},q:C,Dn:function k(n,t){const e=n.Q;if(!N[e]){N[e]=!0,Z(j,n,t.prototype,f);{const e=[];for(var i in n.R)n.R[i].V&&e.push(n.R[i].V);t.observedAttributes=e}o.customElements.define(e,t)}},hn:t.emit,L:n=>a[C.g(n)],Hn:n=>t[n],isClient:!0,Pn:n=>!(!N[C.g(n)]&&!j.L(n)),Sn:function x(n,t,e,o){o=(n.X[t.mode]||n.X)[0],h[o]?e():((b[o]=b[o]||[]).push(e),r(n,o))},Cn:(n,t,e)=>void 0,In:n=>M(C,w,n),Mn:p(t=>n.requestAnimationFrame(t),()=>o.performance.now()),zn:n=>(n||[]).map(n=>v(n,a))};j.render=s(j,C);const E=C.f;return E.$rendered=!0,E.$activeLoading=[],E.$initLoad=(()=>E.jn=!0),e.loadComponents=function n(e,o){const i=arguments;o(m,d,t,u);for(var c=2;c<i.length;c++)y(a,m,i[c]);var l=b[e];if(l){for(c=0;c<l.length;c++)l[c]();b[e]=null}h[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)$[t[o]]=e=C.a("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,C.v(C.r,e)},j.En=((n,t,e)=>{{const o=$[n.Q+"_"+t]||$[n.Q];if(o){let t=C.r;if(C.G)if(1===n.Y)t=e.shadowRoot;else for(;e=C.h(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.Fn=t.Fn||{};if(!i[o.id]){{const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");C.t(t,n,e&&e.nextSibling||t.Wn)}i[o.id]=!0}}}}),j}(e,rn,n,t,i,hydratedCssClass);sn.zn(rn.components).forEach(n=>sn.Dn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"stenciljs-virtual-scroll","hydrated","/build/stenciljs-virtual-scroll/");