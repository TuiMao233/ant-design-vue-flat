(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/view/view-sku-select"],{"05b6":function(e,t,n){},"32b0":function(e,t,n){"use strict";var u=n("05b6"),o=n.n(u);o.a},6005:function(e,t,n){"use strict";n.r(t);var u=n("71fb"),o=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=o.a},"71fb":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=d(n("4795")),o=n("79f6"),r=n("171a"),i=d(n("0613")),a=n("d257"),l=n("9dcd"),s=n("a6f4"),c=d(n("5a0c"));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n,u,o,r,i){try{var a=e[r](i),l=a.value}catch(s){return void n(s)}a.done?t(l):Promise.resolve(l).then(u,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(u,o){var r=e.apply(t,n);function i(e){f(r,u,o,i,a,"next",e)}function a(e){f(r,u,o,i,a,"throw",e)}i(void 0)}))}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,u)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=(0,s.defineComponent)({props:{show:{type:Boolean,default:!1},goods_num:{type:Number},value:{type:Object,default:void 0}},setup:function(t,n){var o,d=[1,2,3],f=(0,s.ref)(!1);e.$on("showSku",(function(){return f.value=!0}));var p=t.value?(0,s.ref)(t.value):(0,s.inject)("shopDetailsInfo"),m=(0,s.ref)(1),w=(0,r.useSku)(p.value.option),g=w.isOptional,y=w.sonExistence,_=w.alterSelected,O=w.selectData,k=w.selectStatus,x=(null===(o=p.value)||void 0===o?void 0:o.member_equities)||[],D=(0,s.computed)((function(){return O.value?O.value:p.value})),S=d.find((function(e){return x.find((function(t){return+t===e}))})),j=(0,s.computed)((function(){var e,t,n,u,o,r,i;if(null===p||void 0===p||null===(e=p.value)||void 0===e||null===(t=e.UserLevelDiscount)||void 0===t||!t.level)return!1;switch(S){case 1:break;case 2:if(1!==D.value.vip_price_type)return!1;i=null===(n=D.value.vip_price)||void 0===n||null===(u=n.info)||void 0===u?void 0:u.find((function(e){var t,n;return e.level_id===(null===p||void 0===p||null===(t=p.value)||void 0===t||null===(n=t.UserLevelDiscount)||void 0===n?void 0:n.level)}));break;case 3:i=b(b({},D.value),{},{price:(0,l.Big)(+D.value.price).times(null===p||void 0===p||null===(o=p.value)||void 0===o||null===(r=o.UserLevelDiscount)||void 0===r?void 0:r.discount).times(.01).toFixed(2)});break;default:return!1}return void 0!==i&&null!==i&&i.price}));(0,s.watch)(D,(function(e){m.value>e.stock&&setTimeout((function(){m.value=e.stock?e.stock:1}),151)}));var P=(0,s.ref)({}),I=(0,s.computed)((function(){return 1===p.value.norms_type})),$=function(e,t){var n;void 0!==e&&(P.value=b(b({},P.value),{},h({},e,(null===(n=P.value)||void 0===n?void 0:n[e])===t?void 0:t)),_(Object.values(P.value).filter((function(e){return e}))))},T=function(){var e=v(u.default.mark((function e(){var t;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==D.value.stock){e.next=4;break}return e.next=3,(0,a.showToast)({title:"没有库存了",icon:"none"});case 3:return e.abrupt("return",e.sent);case 4:if(!(2!==p.value.goods_state&&p.value.goods_state_time>(0,c.default)().unix())){e.next=8;break}return e.next=7,(0,a.showToast)({title:"商品尚未出售",icon:"none"});case 7:return e.abrupt("return",e.sent);case 8:if(k.value||!I.value){e.next=12;break}return e.next=11,(0,a.showToast)({title:"请选择规格",icon:"none"});case 11:return e.abrupt("return",e.sent);case 12:t={goodsId:"",buynum:1,skuId:""},t=I.value?{goodsId:p.value.id,buynum:m.value||1,skuId:D.value.id}:{goodsId:p.value.id,buynum:m.value||1},(0,a.navigateTo)("/pages/shopOrders/editOrder",{placeAnRrders:JSON.stringify([t])});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){if(k){var e="";for(var t in D.value.titles)e+=D.value.titles[t];n.emit("exchangeData",{purchaseNum:m.value,sku_id:I.value?D.value.id:0,showData:e}),f.value=!1}else(0,a.showToast)({title:"请选择完整规格",icon:"none"})},C=(0,s.computed)((function(){return i.default.getters.hexColor})),E=(0,s.computed)((function(){return i.default.getters.lineRectStyle}));return{$lineRectStyle:E,$hexColor:C,onPlaceAnRrder:T,showModal:f,purchaseNum:m,shopDetailsInfo:p,single:P,addSingle:$,isOptional:g,showData:D,isMultiSpec:I,selectStatus:k,sendOut:M,sonExistence:y,memberPrice:j,onlymemberType:S}},methods:{addShopCart:function(){var e=this;return v(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.showData.stock){t.next=2;break}return t.abrupt("return",(0,a.showToast)({title:"没有库存了",icon:"none"}));case 2:if(e.selectStatus||!e.isMultiSpec){t.next=6;break}return t.next=5,(0,a.showToast)({title:"请选择规格",icon:"none"});case 5:return t.abrupt("return",t.sent);case 6:return t.next=8,(0,o.reqAddCartList)({goods_id:e.shopDetailsInfo.id,sku_id:e.isMultiSpec?e.showData.id:0,num:e.purchaseNum||1,price:e.showData.price});case 8:(0,a.showToast)({title:"加入购物车成功"});case 9:case"end":return t.stop()}}),t)})))()},selectItem:function(e,t){this.sonExistence(e.id)&&this.addSingle(t.id,e.id)}}});t.default=m}).call(this,n("543d")["default"])},b23f:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return u}));var u={uPopup:function(){return n.e("node-modules/uview-ui/components/u-popup/u-popup").then(n.bind(null,"df25"))},unionBlank:function(){return n.e("components/unions/union-blank").then(n.bind(null,"2902"))},uImage:function(){return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null,"9df5"))},uNumberBox:function(){return n.e("node-modules/uview-ui/components/u-number-box/u-number-box").then(n.bind(null,"c20a"))},authController:function(){return n.e("components/controllers/auth-controller").then(n.bind(null,"303b"))},uButton:function(){return n.e("node-modules/uview-ui/components/u-button/u-button").then(n.bind(null,"d9ad"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.isMultiSpec?e.__map(e.shopDetailsInfo.spec,(function(t,n){var u=e.__get_orig(t),o=e.__map(t.items,(function(n,u){var o=e.__get_orig(n),r=e.__get_style([e.single[t.id]===n.id&&e.$lineRectStyle]),i=e.sonExistence(n.id);return{$orig:o,s0:r,m0:i}}));return{$orig:u,l0:o}})):null),u=e.show?null:{background:0===e.showData.stock?"#00000055":e.$hexColor["--color-primary"]},o=e.show?{background:e.$hexColor["--color-primary"]}:null;e._isMounted||(e.e0=function(t){e.showModal=!1}),e.$mp.data=Object.assign({},{$root:{l1:n,a0:u,a1:o}})},r=[]},f9d6:function(e,t,n){"use strict";n.r(t);var u=n("b23f"),o=n("6005");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("32b0");var i,a=n("f0c5"),l=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/view/view-sku-select-create-component',
    {
        'components/view/view-sku-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f9d6"))
        })
    },
    [['components/view/view-sku-select-create-component']]
]);
