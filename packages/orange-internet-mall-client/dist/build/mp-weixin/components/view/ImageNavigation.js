(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/view/ImageNavigation"],{"054a":function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var o={linkController:function(){return t.e("components/controllers/link-controller").then(t.bind(null,"d887"))},viewImage:function(){return Promise.all([t.e("common/vendor"),t.e("components/view/view-image")]).then(t.bind(null,"bacd"))}},r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.imageList,(function(e,t){var o=n.__get_orig(e),r={width:"100%",height:244};return{$orig:o,a0:r}})));n.$mp.data=Object.assign({},{$root:{l0:t}})},i=[]},"48fb":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("a6f4"),r=t("824b"),i=(0,o.defineComponent)({props:{option:{type:Object,required:!0}},setup:function(n){var e=n.option.imageList,t=(0,r.usePaddingRadius)(n.option),o=t.padding,i=t.borderRadius,a=(0,r.useBackgroundColor)(n.option.colorStyle),u=a.background,d=(0,r.useComponentModalStyle)(n.option.componentStyle),c=d.boxShadow,f=d.border;return{imageList:e,padding:o,borderRadius:i,background:u,boxShadow:c,border:f}}});e.default=i},"9e1b":function(n,e,t){},"9fd1":function(n,e,t){"use strict";t.r(e);var o=t("48fb"),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},d4f8:function(n,e,t){"use strict";t.r(e);var o=t("054a"),r=t("9fd1");for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t("d886");var a,u=t("f0c5"),d=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"f5230708",null,!1,o["a"],a);e["default"]=d.exports},d886:function(n,e,t){"use strict";var o=t("9e1b"),r=t.n(o);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/view/ImageNavigation-create-component',
    {
        'components/view/ImageNavigation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d4f8"))
        })
    },
    [['components/view/ImageNavigation-create-component']]
]);
