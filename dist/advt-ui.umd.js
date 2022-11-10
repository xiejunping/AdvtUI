(function(d,_){typeof exports=="object"&&typeof module!="undefined"?module.exports=_():typeof define=="function"&&define.amd?define(_):(d=typeof globalThis!="undefined"?globalThis:d||self,d["advt-ui"]=_())})(this,function(){"use strict";var d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"c-weektime"},[t("div",{staticClass:"c-schedue"}),t("div",{class:{"c-schedue":!0,"c-schedue-notransi":e.mode},style:e.styleValue}),t("table",{staticClass:"c-weektime-table",class:{"c-min-table":e.colspan<2}},[t("thead",{staticClass:"c-weektime-head"},[t("tr",[t("th",{staticClass:"week-td",attrs:{rowspan:"8"}},[e._v("\u661F\u671F/\u65F6\u95F4")]),t("th",{attrs:{colspan:12*e.colspan}},[e._v("00:00 - 12:00")]),t("th",{attrs:{colspan:12*e.colspan}},[e._v("12:00 - 24:00")])]),t("tr",e._l(e.theadArr,function(l){return t("td",{key:l,attrs:{colspan:e.colspan}},[e._v(e._s(l))])}),0)]),t("tbody",{staticClass:"c-weektime-body"},[e._l(e.data,function(l){return t("tr",{key:l.row},[t("td",[e._v(e._s(l.value))]),e._l(l.child,function(c){return t("td",{key:`${c.row}-${c.col}`,staticClass:"weektime-atom-item",class:e.selectClasses(c),attrs:{"data-week":c.row,"data-time":c.col},on:{mouseenter:function(n){return e.cellEnter(c)},mousedown:function(n){return e.cellDown(c)},mouseup:function(n){return e.cellUp(c)}}})})],2)}),t("tr",[t("td",{staticClass:"c-weektime-preview",attrs:{colspan:"49"}},[t("div",{staticClass:"g-clearfix c-weektime-con"},[t("span",{staticClass:"g-pull-left"},[e._v(e._s(e.selectState?"\u5DF2\u9009\u62E9\u65F6\u95F4\u6BB5":"\u53EF\u62D6\u52A8\u9F20\u6807\u9009\u62E9\u65F6\u95F4\u6BB5"))]),t("a",{staticClass:"g-pull-right",on:{click:function(l){return l.preventDefault(),e.$emit("on-clear")}}},[e._v("\u6E05\u7A7A\u9009\u62E9")])]),e.selectState?t("div",{staticClass:"c-weektime-time"},e._l(e.selectValue,function(l){return t("div",{key:l.id},[l.value?t("p",[t("span",{staticClass:"g-tip-text"},[e._v(e._s(l.week)+"\uFF1A")]),t("span",[e._v(e._s(l.value))])]):e._e()])}),0):e._e()])])],2)])])},_=[],ae="";function h(e,s,t,l,c,n,o,u){var r=typeof e=="function"?e.options:e;s&&(r.render=s,r.staticRenderFns=t,r._compiled=!0),l&&(r.functional=!0),n&&(r._scopeId="data-v-"+n);var i;if(o?(i=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!a&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(a=__VUE_SSR_CONTEXT__),c&&c.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(o)},r._ssrRegister=i):c&&(i=u?function(){c.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:c),i)if(r.functional){r._injectStyles=i;var ne=r.render;r.render=function(oe,A){return i.call(A),ne(oe,A)}}else{var S=r.beforeCreate;r.beforeCreate=S?[].concat(S,i):[i]}return{exports:e,options:r}}const R=e=>Array.from(Array(e)).map((s,t)=>t),E={name:"DragWeektime",props:{value:{type:Array},data:{type:Array},colspan:{type:Number,default(){return 2}}},computed:{styleValue(){return{width:`${this.width}px`,height:`${this.height}px`,left:`${this.left}px`,top:`${this.top}px`}},selectValue(){return this.value},selectState(){return this.value.some(e=>e.value)},selectClasses(){return e=>e.check?"ui-selected":""}},methods:{cellEnter(e){const s=document.querySelector(`td[data-week='${e.row}'][data-time='${e.col}']`);s&&!this.mode?(this.left=s.offsetLeft,this.top=s.offsetTop):e.col<=this.col&&e.row<=this.row?(this.width=(this.col-e.col+1)*s.offsetWidth,this.height=(this.row-e.row+1)*s.offsetHeight,this.left=s.offsetLeft,this.top=s.offsetTop):e.col>=this.col&&e.row>=this.row?(this.width=(e.col-this.col+1)*s.offsetWidth,this.height=(e.row-this.row+1)*s.offsetHeight,e.col>this.col&&e.row===this.row&&(this.top=s.offsetTop),e.col===this.col&&e.row>this.row&&(this.left=s.offsetLeft)):e.col>this.col&&e.row<this.row?(this.width=(e.col-this.col+1)*s.offsetWidth,this.height=(this.row-e.row+1)*s.offsetHeight,this.top=s.offsetTop):e.col<this.col&&e.row>this.row&&(this.width=(this.col-e.col+1)*s.offsetWidth,this.height=(e.row-this.row+1)*s.offsetHeight,this.left=s.offsetLeft)},cellDown(e){const s=document.querySelector(`td[data-week='${e.row}'][data-time='${e.col}']`);this.check=Boolean(e.check),this.mode=1,s&&(this.width=s.offsetWidth,this.height=s.offsetHeight),this.row=e.row,this.col=e.col},cellUp(e){e.col<=this.col&&e.row<=this.row?this.selectWeek([e.row,this.row],[e.col,this.col],!this.check):e.col>=this.col&&e.row>=this.row?this.selectWeek([this.row,e.row],[this.col,e.col],!this.check):e.col>this.col&&e.row<this.row?this.selectWeek([e.row,this.row],[this.col,e.col],!this.check):e.col<this.col&&e.row>this.row&&this.selectWeek([this.row,e.row],[e.col,this.col],!this.check),this.width=0,this.height=0,this.mode=0},selectWeek(e,s,t){const[l,c]=e,[n,o]=s;this.data.forEach(u=>{u.child.forEach(r=>{r.row>=l&&r.row<=c&&r.col>=n&&r.col<=o&&this.$set(r,"check",t)})})}},data(){return{width:0,height:0,left:0,top:0,mode:0,row:0,col:0,theadArr:[]}},created(){this.theadArr=R(24)}},k={};var W=h(E,d,_,!1,B,"182bc2f6",null,null);function B(e){for(let s in k)this[s]=k[s]}var f=function(){return W.exports}();f.install=function(e){e.component(f.name,f)};var I=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"c-select-item"},[t("div",{staticClass:"c-header"},[t("span",{staticClass:"c-header-title"},[e._v(e._s(e.title))]),e.clear?t("span",{staticClass:"c-header-clear",on:{click:function(l){return e.$emit("on-clear")}}},[e._v(" \u6E05\u7A7A\u5168\u90E8 ")]):e._e()]),t("div",{staticClass:"c-selecter-content"},[e._t("default")],2)])},N=[],ie="";const T={name:"selectItem",props:{title:{type:String},clear:{type:Boolean}}},m={};var F=h(T,I,N,!1,L,"3d2f2883",null,null);function L(e){for(let s in m)this[s]=m[s]}var y=function(){return F.exports}(),M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("a-checkbox",{attrs:{checked:e.value,indeterminate:e.indeterminate},on:{change:e.change}},[e._v(e._s(e.label))])},V=[];const j={name:"ICheckbox",props:{value:{type:Boolean},label:{type:String},indeterminate:{type:Boolean}},methods:{change(e){this.$emit("input",e.target.checked)}}},g={};var D=h(j,M,V,!1,H,null,null,null);function H(e){for(let s in g)this[s]=g[s]}var w=function(){return D.exports}(),O=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"c-select-box"},[t("div",{staticClass:"c-check-all"},[t("div",{staticClass:"c-item-select c-cataract",on:{click:e.selectAll}}),t("a-checkbox",{staticClass:"c-check-item",model:{value:e.all,callback:function(l){e.all=l},expression:"all"}},[e._v("\u5168\u9009")])],1),e._l(e.data,function(l){return t("div",{key:l.id},[l.children&&l.children.length?t("div",{class:e.itemClasses(l),on:{click:function(c){return e.$emit("on-child",{item:l,level:e.level})}}},[t("i-checkbox",{attrs:{indeterminate:e.itemIndeterminate(l),label:l.value},model:{value:l.check,callback:function(c){e.$set(l,"check",c)},expression:"item.check"}}),t("a-icon",{staticClass:"c-check-arrow",attrs:{type:"right"}}),t("span",{staticClass:"c-item-checkbox c-cataract",on:{click:function(c){return e.selectItem(l)}}})],1):t("i-checkbox",{staticClass:"c-check-item",attrs:{label:l.value},model:{value:l.check,callback:function(c){e.$set(l,"check",c)},expression:"item.check"}})],1)})],2)},U=[],he="";const $=(e,s)=>{e.forEach(t=>{if(t.children&&t.children.length){const l=t.children;l.every(c=>c.check)?s.$set(t,"check",!0):s.$set(t,"check",!1),l&&$(l,s)}})},q={name:"selectBox",components:{ICheckbox:w},props:{value:{type:[String,Number]},data:{type:Array},level:{type:Number}},computed:{itemClasses(){return e=>{const s=["c-check-item"];return e.value===this.value&&s.push("active"),s}},all(){const e=this.data.filter(s=>s.check).length;return this.data.length===e}},methods:{selectAll(){this.$emit("on-select",{check:!this.all,level:this.level})},selectItem(e){this.$emit("on-select",{check:!e.check,level:this.level,cat:e.value})},selectItem1(e){console.log(e),console.log(this.data)},itemIndeterminate(e){const s=c=>c.children.reduce((n,o)=>{let u=[];return o.check&&n.push(o),o.children&&(u=s(o)),n.concat(u)},[]),t=s(e).length>0,l=e.children&&e.children.every(c=>c.check);return t&&!l}},watch:{data:{handler(e,s){$(e,this)},deep:!0}},mounted(){$(this.data,this)}},C={};var X=h(q,O,U,!1,z,"0f5bd224",null,null);function z(e){for(let s in C)this[s]=C[s]}var G=function(){return X.exports}(),J=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"c-selecter"},[t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{span:16}},[t("a-row",e._l(e.resource,function(l,c){return t("a-col",{key:c,attrs:{span:e.col}},[t("select-item",{attrs:{title:l.title}},[t("select-box",{attrs:{data:l.data,level:l.level},on:{"on-child":e.pushChild,"on-select":e.selectAll},model:{value:l.current,callback:function(n){e.$set(l,"current",n)},expression:"box.current"}})],1)],1)}),1)],1),t("a-col",{attrs:{span:7,offset:"1"}},[e.resultLen&&e.transfer?t("select-item",{attrs:{title:"\u5DF2\u9009",clear:""},on:{"on-clear":function(l){return e.$emit("on-clear",{list:e.data})}}},e._l(e.result,function(l){return t("div",{key:l.id,staticClass:"c-pop-tip"},[t("a-tag",{staticClass:"c-tag-item",attrs:{closable:""},on:{close:function(c){return e.handleClose(l.value)}}},[e._v(e._s(l.value))])],1)}),0):e._e()],1)],1)],1)},K=[],ue="";const P={name:"selecter",components:{SelectItem:y,SelectBox:G},props:{value:{type:Array},title:{type:Array},data:{type:Array},transfer:{type:Boolean,default:!0}},data(){return{resource:[]}},computed:{col(){return this.resource.length>1?24/this.resource.length:12},result(){return this.value},resultLen(){return Boolean(this.value.length)}},watch:{data(e){e&&e.length?this.updateResource():this.resource=[]}},methods:{updateResource(){this.resource=[],this.resource.push({data:this.data,current:"",level:1,title:this.title[0]})},handleClose(e){this.$emit("on-delete",{list:this.data,name:e})},selectAll({level:e,check:s,cat:t}){let l=e-2,c=l>-1?this.resource[l].current:"";t&&(c=t),this.$emit("on-select",{check:s,current:c,list:this.data})},pushChild(e){const{item:s,level:t}=e,l=this.resource.length;t<=l-1&&this.resource.splice(t,l-t),this.resource.push({data:s.children,current:"",level:t+1,title:this.title[t]||s.value}),this.resource[t-1].current=s.value}},created(){this.updateResource()}},b={};var Q=h(P,J,K,!1,Y,"a08e85b8",null,null);function Y(e){for(let s in b)this[s]=b[s]}var v=function(){return Q.exports}();v.install=function(e){e.component(v.name,v)};var Z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("select-item",{attrs:{title:e.title}},[t("a-radio-group",{model:{value:e.current,callback:function(l){e.current=l},expression:"current"}},e._l(e.versions,function(l){return t("a-radio",{key:l.value,staticClass:"c-version-item",attrs:{value:l.value}},[e._v(e._s(l.label))])}),1)],1)},ee=[],de="";const te={name:"Version",components:{SelectItem:y},props:{value:{type:[String,Number],default:"NONE"},data:{type:Array,default(){return[]}},title:{type:String,default:"\u7248\u672C",required:!0},android:{type:Boolean,default:!1}},computed:{current:{get(){return this.value},set(e){this.$emit("input",e)}},vername(){return this.android?"Android":"iOS"},versions(){const e=this.data.map(s=>({label:`${this.vername} ${s}\u53CA\u4EE5\u4E0A`,value:s}));return[{label:"\u4E0D\u9650",value:"NONE"},...e]}}},x={};var se=h(te,Z,ee,!1,le,"69dfcea2",null,null);function le(e){for(let s in x)this[s]=x[s]}var p=function(){return se.exports}();p.install=function(e){e.component(p.name,p)};const ce=[f,v,p,w];var re={install:e=>{ce.forEach(s=>{e.component(s.name,s)})},DragWeektime:f,Selecter:v,Version:p,ICheckbox:w};return re});
