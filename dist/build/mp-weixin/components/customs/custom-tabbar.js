(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/customs/custom-tabbar"],{"3de6":function(n,t,e){},cb3e:function(n,t,e){"use strict";e.r(t);var u=e("e421"),o=e.n(u);for(var a in u)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(a);t["default"]=o.a},d103:function(n,t,e){"use strict";var u=e("3de6"),o=e.n(u);o.a},e0ba:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return u}));var u={uTabbar:function(){return e.e("node-modules/uview-ui/components/u-tabbar/u-tabbar").then(e.bind(null,"1fd6"))},uPopup:function(){return e.e("node-modules/uview-ui/components/u-popup/u-popup").then(e.bind(null,"df25"))},commonBuyset:function(){return e.e("components/commons/common-buyset").then(e.bind(null,"f234"))},uModal:function(){return e.e("node-modules/uview-ui/components/u-modal/u-modal").then(e.bind(null,"078c"))}},o=function(){var n=this,t=n.$createElement;n._self._c},a=[]},e3d5:function(n,t,e){"use strict";e.r(t);var u=e("e0ba"),o=e("cb3e");for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("d103");var i,r=e("f0c5"),c=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=c.exports},e421:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=e("2de2"),o=r(e("0613")),a=e("d257"),i=r(e("66fd"));function r(n){return n&&n.__esModule?n:{default:n}}var c=i.default.extend({mixins:[u.tabbarConfig],props:{},data:function(){return{showbuySetPop:!1,showLoginModal:!1}},computed:{},methods:{hide:function(){this.showbuySetPop=!1},beforeSwitch:function(n){return 2!==n||(o.default.getters.isAuthUserInfo?void(o.default.state.user.info.meal_total>0?(0,a.navigateTo)("/pages/baseTabBars/publish"):this.showbuySetPop=!0):(this.showLoginModal=!0,!1))}},watch:{},mounted:function(){},beforeUpdate:function(){},updated:function(){},activated:function(){},deactivated:function(){},beforeDestroy:function(){}});t.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/customs/custom-tabbar-create-component',
    {
        'components/customs/custom-tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e3d5"))
        })
    },
    [['components/customs/custom-tabbar-create-component']]
]);
