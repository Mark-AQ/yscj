!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e,r){"use strict";var n=r(5),o=r(2),i=r(7);var a=Object(i.a)(o.default,n.b,n.c,!1,null,null,"45e2cfa6",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(6).default,this.options.style):Object.assign(this.options.style,r(6).default)}).call(a),e.default=a.exports},function(t,e){t.exports={"@VERSION":2}},function(t,e,r){"use strict";var n=r(3),o=r.n(n);e.default=o.a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{longitude:"",latitude:""}},created:function(){},methods:{onMapLoaded:function(t){this.latitude=t.detail.latitude,this.longitude=t.detail.longitude},tapUI:function(){this.$refs.mycomponent.focus({title:"\u54c8\u54c8\u54c8",img:"../static/logo.png",url:"https://baidu.com"})},tapUIss:function(){uni.showToast({title:"\u54c8\u54c8\u54c8",icon:"none"})}}};e.default=n},function(t,e){t.exports={".container":{"":{display:["flex",0,0,0],flexDirection:["column",0,0,0],width:["750rpx",0,0,0],height:["2087rpx",0,0,0],backgroundColor:["#9ACD32",0,0,0]}},"@VERSION":2}},function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("div",{staticClass:["container"]},[r("iosactivity",{ref:"mycomponent",staticStyle:{width:"750rpx",height:"100rpx",background:"red"},on:{click:t.tapUI}}),r("u-text",{staticStyle:{marginTop:"30rpx",color:"black",fontSize:"100rpx",backgroundColor:"bisque"},appendAsTree:!0,attrs:{append:"tree"},on:{click:t.tapUIss}},[t._v("\u70b9\u6211")]),r("lmkmapview",{staticStyle:{width:"750rpx",height:"500rpx"},on:{mapLoaded:t.onMapLoaded}}),r("u-text",{appendAsTree:!0,attrs:{append:"tree"}},[t._v("latitude: "+t._s(t.latitude))]),r("u-text",{appendAsTree:!0,attrs:{append:"tree"}},[t._v("longitude: "+t._s(t.longitude))])],1)])},o=[]},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,u,s,l){var c,f="function"==typeof t?t.options:t;if(s){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in s)p.call(s,d)&&!p.call(f.components,d)&&(f.components[d]=s[d])}if(l&&("function"==typeof l.beforeCreate&&(l.beforeCreate=[l.beforeCreate]),(l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(f.mixins||(f.mixins=[])).push(l)),e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var y=f.render;f.render=function(t,e){return c.call(e),y(t,e)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,c):[c]}return{exports:t,options:f}}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";r.r(e);r(9),r(11);var n=r(0);n.default.mpType="page",n.default.route="pages/index/componetView",n.default.el="#root",new Vue(n.default)},function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(10).default,Vue.prototype.__$appStyle__)},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}}]);