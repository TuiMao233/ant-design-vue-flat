(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/view/view-image"],{"0c6d":function(e,t,n){"use strict";n.r(t);var r=n("de28"),u=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=u.a},"3dfd":function(e,t,n){"use strict";n.r(t);var r=n("6f68");for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("5c0b");var i,o,a,c,f=n("f0c5"),d=Object(f["a"])(r["default"],i,o,!1,null,null,null,!1,a,c);t["default"]=d.exports},"5c0b":function(e,t,n){"use strict";var r=n("c060"),u=n.n(r);u.a},"6f68":function(e,t,n){"use strict";n.r(t);var r=n("7ccf"),u=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=u.a},"7ccf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=c(n("4795")),i=c(n("66fd")),o=c(n("0613")),a=n("1cc4");function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,r,u,i,o){try{var a=e[i](o),c=a.value}catch(f){return void n(f)}a.done?t(c):Promise.resolve(c).then(r,u)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function o(e){d(i,r,u,o,a,"next",e)}function a(e){d(i,r,u,o,a,"throw",e)}o(void 0)}))}}var s=i.default.extend((r={mpType:"app",globalData:{}},f(r,"siteInfo",n("484c")),f(r,"setup",(function(){(0,a.onLaunch)(l(u.default.mark((function e(){return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o.default.dispatch("getShopCommon"),o.default.dispatch("getTemplateInfo"),o.default.getters.isAuthUserInfo&&o.default.dispatch("getMoney");case 3:case"end":return e.stop()}}),e)}))))})),r));t.default=s},bacd:function(e,t,n){"use strict";n.r(t);var r=n("d538"),u=n("0c6d");for(var i in u)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n("f95f");var o,a=n("f0c5"),c=Object(a["a"])(u["default"],r["b"],r["c"],!1,null,"5fe11af6",null,!1,r["a"],o);t["default"]=c.exports},c060:function(e,t,n){},d538:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var r={uImage:function(){return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null,"9df5"))},viewIcon:function(){return Promise.all([n.e("common/vendor"),n.e("components/view/view-icon")]).then(n.bind(null,"2807"))}},u=function(){var e=this,t=e.$createElement;e._self._c},i=[]},de28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("3dfd")),u=n("d257"),i=n("a6f4");function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var c=(0,i.defineComponent)({props:{src:String,borderRadius:String,size:{type:[Number,String,Object]},border:{type:Boolean,default:!1},emptyType:{type:Number,default:0},fit:{type:String,default:"aspectFill"},labelColor:String,isImage:{type:Boolean,default:!1}},setup:function(e){var t=r.default.prototype.$spliceStaticUrl,n=(0,i.computed)((function(){var n;switch(e.emptyType){case 0:n="";break;case 1:n=t("product-fifth.png");break;case 2:n=t("product-sliver.png");break;default:n=""}return e.src?e.src:n})),o=(0,i.computed)((function(){return e.border&&!n.value})),c=(0,i.computed)((function(){var t;return e.isImage||-1!==(null===(t=e.src)||void 0===t?void 0:t.indexOf("/"))})),f=(0,i.computed)((function(){return"string"===typeof e.size||"number"===typeof e.size?{width:(0,u.analyUnit)(e.size),height:(0,u.analyUnit)(e.size)}:"object"===a(e.size)?{width:(0,u.analyUnit)((null===(t=e.size)||void 0===t?void 0:t.width)||"0"),height:(0,u.analyUnit)((null===(n=e.size)||void 0===n?void 0:n.height)||"0")}:{width:"",height:""};var t,n}));return{imageSrc:n,imageBorder:o,props:e,handleSize:f,isImageStatus:c}}});t.default=c},e70a:function(e,t,n){},f95f:function(e,t,n){"use strict";var r=n("e70a"),u=n.n(r);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/view/view-image-create-component',
    {
        'components/view/view-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bacd"))
        })
    },
    [['components/view/view-image-create-component']]
]);
