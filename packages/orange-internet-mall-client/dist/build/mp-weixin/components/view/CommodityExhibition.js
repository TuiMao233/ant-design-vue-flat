(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/view/CommodityExhibition"],{2342:function(e,n,t){"use strict";var o=t("446e"),r=t.n(o);r.a},"2e4f":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(t("4795")),r=t("a6f4"),a=t("8ea9"),u=t("824b"),d=t("79f6"),i=t("2ef0");function c(e){return e&&e.__esModule?e:{default:e}}function l(e,n,t,o,r,a,u){try{var d=e[a](u),i=d.value}catch(c){return void t(c)}d.done?n(i):Promise.resolve(i).then(o,r)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function u(e){l(a,o,r,u,d,"next",e)}function d(e){l(a,o,r,u,d,"throw",e)}u(void 0)}))}}var f=(0,r.defineComponent)({props:{option:{type:Object,required:!0}},setup:function(e){var n=e.option,t=(0,r.ref)([]),c=function(){var e=s(o.default.mark((function e(){var r,u,c,l,f,p,v,m,b,h,y,w,g,P;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=function(){var e=s(o.default.mark((function e(n){var r,u;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d.reqGoodsScreenList)(n);case 2:r=e.sent,u=r.data,t.value=u.data.data.map((function(e){var n=(0,i.cloneDeep)(a.linkOption);return n.type="shop",n.value.path="/pages/commons/shopDetails",n.value.params={id:e.id},n.value.data=e,n}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l="按销量"===n.addProduct.commodityRanking?"sales":"price",f="价格升序"===n.addProduct.commodityRanking?"asc":"desc",p=n.addProduct.productsNum,e.t0=n.addProduct.chooseProduct,e.next="手动选择"===e.t0?7:"选择分类"===e.t0?9:"选择分组"===e.t0?11:13;break;case 7:return t.value=n.addProduct.manualSelection,e.abrupt("break",13);case 9:return"classification"===(null===(r=n.addProduct.selectCategories)||void 0===r?void 0:r.type)&&(h=(null===(v=n.addProduct.selectCategories)||void 0===v||null===(m=v.value)||void 0===m||null===(b=m.params)||void 0===b?void 0:b.classId)||null,h&&c({classId:h,limit:p,ordersort:f,order:l})),e.abrupt("break",13);case 11:return"grouping"===(null===(u=n.addProduct.selectGroup)||void 0===u?void 0:u.type)&&(P=(null===(y=n.addProduct.selectGroup)||void 0===y||null===(w=y.value)||void 0===w||null===(g=w.params)||void 0===g?void 0:g.id)||null,P&&c({groupId:P,limit:p,ordersort:f,order:l})),e.abrupt("break",13);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c();var l=n.addProduct,f=n.contentStyle,p=n.colorStyle,v=n.componentStyle,m=(0,u.usePaddingRadius)(n),b=m.padding,h=m.borderRadius,y=(0,u.useBackgroundColor)(n.colorStyle),w=y.background,g=(0,u.useComponentModalStyle)(n.componentStyle),P=g.boxShadow,k=g.border;return{addProduct:l,contentStyle:f,colorStyle:p,componentStyle:v,padding:b,borderRadius:h,background:w,boxShadow:P,border:k,list:t}}});n.default=f},"446e":function(e,n,t){},"5a16":function(e,n,t){"use strict";t.r(n);var o=t("2e4f"),r=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},"79a3":function(e,n,t){"use strict";t.r(n);var o=t("8d88"),r=t("5a16");for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("2342");var u,d=t("f0c5"),i=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,"770aeb1c",null,!1,o["a"],u);n["default"]=i.exports},"8d88":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={linkController:function(){return t.e("components/controllers/link-controller").then(t.bind(null,"d887"))},viewIcon:function(){return Promise.all([t.e("common/vendor"),t.e("components/view/view-icon")]).then(t.bind(null,"2807"))},viewImage:function(){return Promise.all([t.e("common/vendor"),t.e("components/view/view-image")]).then(t.bind(null,"bacd"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/view/CommodityExhibition-create-component',
    {
        'components/view/CommodityExhibition-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("79a3"))
        })
    },
    [['components/view/CommodityExhibition-create-component']]
]);
