/*! Built with http://stenciljs.com */

window['stenciljs-virtual-scroll'].loadStyles("fetch-helper",".cover{position:relative;width:150px;height:150px;background-size:cover;margin:0 auto}.title{font-size:15px;height:40px;text-align:center}.cover:after{content:\"\";display:block;padding-bottom:67%}\nfetch-helper.hydrated{visibility:inherit}");
window["stenciljs-virtual-scroll"].loadComponents("b7yav49s",function(t,e,s,l){"use strict";class i{constructor(){this.list=[],this.selector="",this.virtual=[],this.changed=[]}componentWillLoad(){this.request()}request(){let t={};t["Content-Type"]="application/json",t.token="kRuGZ3Xd";let e={method:"GET",mode:"cors",headers:new Headers(t)},s=new Request("https://jsonplaceholder.typicode.com/photos",e);fetch(s).then(t=>t.json()).then(t=>{t.splice(0,50).map(t=>{t.index=this.list.length,this.list=[...this.list,t]});const e=this.el.querySelector("virtual-scroll");e.list=this.list,e.addEventListener("toBottom",t=>{this.lazyRequest()}),e.addEventListener("update",t=>{console.log("update"),this.virtual=t.detail,this.changed=[...this.changed,""]})})}lazyRequest(){let t={};t["Content-Type"]="application/json",t.token="kRuGZ3Xd";let e={method:"GET",mode:"cors",headers:new Headers(t)},s=new Request("https://jsonplaceholder.typicode.com/photos",e);fetch(s).then(t=>t.json()).then(t=>{setTimeout(()=>{t.splice(0,50).map(t=>{t.index=this.list.length,this.list=[...this.list,t]});const e=this.el.querySelector("virtual-scroll");e.list=this.list,this.list.length>200?e.setInfinateFinally():e.setInfinateOn()},3e3)})}render(){return[e("div",{class:"virtual-container"},e("virtual-scroll",{"bottom-offset":"5",selector:this.selector},e("div",{slot:"virtual",class:"virtual-slot"},this.virtual.map((t,s)=>e("div",{class:"offer virtual-item",id:t.index},e("div",{style:{backgroundImage:"url("+t.thumbnailUrl+")"},class:"cover"}),e("div",{class:"title"},t.index),e("div",{class:"title"},t.title)))),e("div",{slot:"loader"},"loading...")))]}}t["fetch-helper"]=i},["fetch-helper",[["changed",5,0,1],["el",7,0,1],["list",5,0,1],["selector",1,1,2]],{}]);;