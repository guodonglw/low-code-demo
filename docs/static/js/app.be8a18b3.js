(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"158a":function(t,e,a){},"1dc9":function(t,e,a){},2395:function(t,e,a){},"28af":function(t,e,a){},"30aa":function(t,e,a){},"44f6":function(t,e,a){},"517c":function(t,e,a){"use strict";a("a69d")},"53c0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=(a("7c55"),a("2877")),c={},o=Object(s["a"])(c,r,i,!1,null,null,null),l=o.exports,u=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"head-area"},[a("van-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"info",size:"mini"}},[t._v("预览")]),a("van-button",{attrs:{type:"info",size:"mini"}},[t._v("保存")])],1),a("div",{staticClass:"main-area"},[a("section",{staticClass:"left"},[a("left-area",{attrs:{active:t.active},on:{"update:active":function(e){t.active=e}}})],1),0===t.active?a("section",{staticClass:"left-add"},[a("left-area-add")],1):t._e(),a("section",{staticClass:"middle"},[a("middle-area")],1),a("section",{staticClass:"right"},[a("right-area")],1)])])},d=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-container"},[a("van-sidebar",{on:{change:t.onChange},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},[a("van-sidebar-item",{attrs:{title:"基础物料"}})],1)],1)},v=[],m={props:["active"],data:function(){return{activeKey:-1}},methods:{onChange:function(t){this.$emit("update:active",t)}}},b=m,h=(a("6c5d"),Object(s["a"])(b,p,v,!1,null,"3bd21670",null)),y=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-area-add"},t._l(t.materials,(function(e,n){return a("section",{key:n,staticClass:"item",attrs:{draggable:"true",id:e.name},on:{dragend:function(e){return t.endMove(e)}}},[a("div",{staticClass:"icon"},[a("van-icon",{attrs:{name:e.icon,size:"1.5rem",color:"#1E90FF"}})],1),a("div",{staticClass:"name"},[t._v(" "+t._s(e.label)+" ")])])})),0)},_=[],x=(a("4de4"),a("b0c0"),a("1157")),C=a.n(x),w=[{icon:"star-o",label:"轮播图",name:"my-swipe",attrs:[{label:"图片链接",value:[""],type:"array",attrType:0,prop:"images"}]},{icon:"setting-o",label:"环形进度条",name:"my-circle",attrs:[{label:"环形占比",value:"",type:"number",attrType:0,prop:"currentRate"}]},{icon:"fire-o",label:"分割线",name:"my-divider",attrs:[{label:"文字",value:"",type:"string",attrType:0,prop:"text"},{label:"线体颜色",value:"",type:"string",attrType:1,prop:"borderColor"},{label:"文本颜色",value:"",type:"string",attrType:1,prop:"color"}]},{icon:"replay",label:"加载",name:"van-loading"}],O={data:function(){return{materials:w}},methods:{endMove:function(t){var e=t.srcElement,a=t.clientX,n=C()("#material"),r=n.position().left;if(a>r&&a<r+375){var i=e.id,s=w.filter((function(t){return t.name===i}))[0];this.$EventBus.$emit("material",JSON.parse(JSON.stringify(s)))}}}},E=O,j=(a("bada"),Object(s["a"])(E,g,_,!1,null,"21a16ed7",null)),M=j.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"middle-container"},[a("section",{staticClass:"layout-space",attrs:{id:"material"},on:{click:t.clickSpace}},[a("draggable",{attrs:{list:t.materials}},[a("transition-group",{staticClass:"item-list",attrs:{id:"item-list"}},t._l(t.materials,(function(e,n){return a("div",{key:n+e.name,class:{active:t.selected===n,item:!0},on:{click:function(a){return a.stopPropagation(),t.activeItem(e,n)}}},[a(e.name,{tag:"component",attrs:{attrs:e.attrs}})],1)})),0)],1)],1)])},A=[],$=a("b76a"),S=a.n($),R={components:{draggable:S.a},data:function(){return{materials:[],selected:""}},methods:{activeItem:function(t,e){this.selected=e,this.$EventBus.$emit("selectedMeterial",t)},clickSpace:function(){this.selected=-1},init:function(){var t=this;this.$EventBus.$on("material",(function(e){e&&t.materials.push(e)}))}},mounted:function(){this.init()}},T=R,D=(a("e2f0"),Object(s["a"])(T,k,A,!1,null,"a01eab5e",null)),P=D.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-area"},[a("section",[a("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"基础属性"}}),a("van-tab",{attrs:{title:"样式属性"}}),a("van-tab",{attrs:{title:"其他属性"}})],1)],1),a("section",{staticClass:"attr-area"},t._l(t.showAttrs,(function(e){return a("div",{key:e.label,staticClass:"item"},[a("span",{staticClass:"label"},[t._v(t._s(e.label)+":")]),"array"===e.type?a("span",{staticClass:"value"},[t._l(e.value,(function(n,r){return a("van-field",{key:r,staticStyle:{width:"100px","margin-bottom":"10px"},attrs:{placeholder:"请输入",title:e.value[r]},model:{value:e.value[r],callback:function(a){t.$set(e.value,r,a)},expression:"item.value[index]"}})})),a("van-button",{staticStyle:{"margin-left":"10px",transform:"translateY(-5px)"},attrs:{type:"info",size:"mini"},on:{click:function(a){return t.handleAdd(e)}}},[t._v("添加")])],2):t._e(),"string"===e.type?a("span",{staticClass:"value"},[a("van-field",{attrs:{placeholder:"请输入"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1):t._e(),"number"===e.type?a("span",{staticClass:"value"},[a("van-field",{attrs:{placeholder:"请输入数字",oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1):t._e()])})),0)])},I=[],B={data:function(){return{active:0,item:{}}},computed:{showAttrs:function(){var t=this,e=this.item.attrs||[];return e.filter((function(e){return e.attrType===t.active}))}},methods:{handleAdd:function(t){t.value.push("")},init:function(){var t=this;this.$EventBus.$on("selectedMeterial",(function(e){t.item=e}))}},mounted:function(){this.init()}},N=B,z=(a("f9ab"),Object(s["a"])(N,L,I,!1,null,"7c953d0e",null)),J=z.exports,K={components:{LeftArea:y,LeftAreaAdd:M,MiddleArea:P,RightArea:J},data:function(){return{active:-1}}},F=K,U=(a("517c"),Object(s["a"])(F,f,d,!1,null,"0a30bc9c",null)),V=U.exports;n["a"].use(u["a"]);var X=[{path:"/",redirect:"/dashboard"},{path:"/dashboard",component:V}],Y=new u["a"]({mode:"hash",base:"",routes:X}),q=Y,G=a("2f62");n["a"].use(G["a"]);var H=new G["a"].Store({state:{materials:[]},mutations:{ADD_MATERIALS:function(t,e){var a={name:e};t.materials.push(a)},REMOVE_MATERIALS:function(t,e){t.materials=t.materials.filter((function(t){return t.name!==e}))}},actions:{Add_Material:function(t,e){t.commit("ADD_MATERIALS",e)},Remove_Material:function(t,e){t.commit("REMOVE_MATERIALS",e)}},modules:{}}),Q=a("b970"),W=(a("833e"),a("c37c"),a("1dc9"),a("4160"),a("d3b7"),a("159b"),a("ddb0"),a("ffe0"));W.keys().forEach((function(t){var e=W(t).default;n["a"].component(e.name,e)})),n["a"].config.productionTip=!1,n["a"].prototype.$EventBus=new n["a"],n["a"].use(Q["a"]),new n["a"]({router:q,store:H,render:function(t){return t(l)}}).$mount("#app")},"6c5d":function(t,e,a){"use strict";a("158a")},"7c55":function(t,e,a){"use strict";a("2395")},"967d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-circle",{attrs:{rate:0,speed:100,"layer-color":"#ebedf0"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}})},r=[],i=(a("4de4"),a("a9e3"),{name:"MyCircle",props:{attrs:{type:Array,default:function(){return[]}}},data:function(){return{currentRate:0}},watch:{attrs:{deep:!0,handler:function(){if(this.attrs.length){var t=this.attrs.filter((function(t){return"currentRate"===t.prop}))[0];this.currentRate=Number(t.value)||0}}}}}),s=i,c=a("2877"),o=Object(c["a"])(s,n,r,!1,null,"9570bc64",null);e["default"]=o.exports},a69d:function(t,e,a){},b97b:function(t,e,a){"use strict";a("53c0")},bada:function(t,e,a){"use strict";a("44f6")},c37c:function(t,e,a){},e2f0:function(t,e,a){"use strict";a("28af")},f9ab:function(t,e,a){"use strict";a("30aa")},fa67:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-divider",{style:{color:t.obj.color,borderColor:t.obj.borderColor,padding:"0 16px"}},[t._v(t._s(t.obj.text))])},r=[],i=(a("4de4"),a("4160"),a("b64b"),a("159b"),{name:"MyDivider",props:{attrs:{type:Array,default:function(){return[]}}},data:function(){return{obj:{text:"",color:"",borderColor:""}}},watch:{attrs:{deep:!0,handler:function(){var t=this;this.attrs.length&&Object.keys(this.obj).forEach((function(e){var a=t.attrs.filter((function(t){return t.prop===e}))[0];t.obj[e]=a.value}))}}}}),s=i,c=a("2877"),o=Object(c["a"])(s,n,r,!1,null,"28054e8a",null);e["default"]=o.exports},fad6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:2e3}},t._l(t.images,(function(t,e){return a("van-swipe-item",{key:e},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t}})])})),1)},r=[],i=(a("4de4"),{name:"MySwipe",props:{attrs:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{images:function(){var t=this.attrs.filter((function(t){return"images"===t.prop}))[0];return t.value}}}),s=i,c=(a("b97b"),a("2877")),o=Object(c["a"])(s,n,r,!1,null,"c6593c92",null);e["default"]=o.exports},ffe0:function(t,e,a){var n={"./MyCircle/index.vue":"967d","./MyDivider/index.vue":"fa67","./MySwipe/index.vue":"fad6"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="ffe0"}});
//# sourceMappingURL=app.be8a18b3.js.map