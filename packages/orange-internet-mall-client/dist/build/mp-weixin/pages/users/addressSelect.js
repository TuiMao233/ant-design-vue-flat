(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/addressSelect"],{"1f63":function(n,t,e){"use strict";(function(n){e("6cdc");var t=i(e("aa82"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"440f":function(n,t,e){},4808:function(n,t,e){"use strict";var i=e("440f"),u=e.n(i);u.a},9794:function(n,t,e){"use strict";e.r(t);var i=e("dc93"),u=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=u.a},aa82:function(n,t,e){"use strict";e.r(t);var i=e("cadb"),u=e("9794");for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("4808");var r,c=e("f0c5"),a=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=a.exports},cadb:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var i={uIndexList:function(){return e.e("node-modules/uview-ui/components/u-index-list/u-index-list").then(e.bind(null,"6d2b"))},uIndexAnchor:function(){return e.e("node-modules/uview-ui/components/u-index-anchor/u-index-anchor").then(e.bind(null,"5dc1"))}},u=function(){var n=this,t=n.$createElement;n._self._c},o=[]},dc93:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("4795")),u=e("79f6"),o=r(e("66fd"));function r(n){return n&&n.__esModule?n:{default:n}}function c(n,t,e,i,u,o,r){try{var c=n[o](r),a=c.value}catch(s){return void e(s)}c.done?t(a):Promise.resolve(a).then(i,u)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(i,u){var o=n.apply(t,e);function r(n){c(o,i,u,r,a,"next",n)}function a(n){c(o,i,u,r,a,"throw",n)}r(void 0)}))}}var s=o.default.extend({components:{},data:function(){return{scrollTop:0,indexList:{},contentList:[]}},computed:{},methods:{getCityList:function(){var n=this;return a(i.default.mark((function t(){var e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.reqCitiesList)({classify:"letter",parent_id:0});case 2:e=t.sent,n.indexList=e.data.data;case 4:case"end":return t.stop()}}),t)})))()},choiceCity:function(t){var e=this;return a(i.default.mark((function o(){var r,c;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,u.reqCitiesList)({classify:"letter",parent_id:t.id});case 2:r=i.sent,c=r.data,e.indexList=c.data,e.contentList.push(t),Array.isArray(e.indexList)&&(n.$emit("selete-address",e.contentList),e.$navigateBack());case 7:case"end":return i.stop()}}),o)})))()}},watch:{},onLoad:function(){this.getCityList()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){n.stopPullDownRefresh()},onReachBottom:function(){},onPageScroll:function(n){this.scrollTop=n.scrollTop}});t.default=s}).call(this,e("543d")["default"])}},[["1f63","common/runtime","common/vendor"]]]);