require('common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admins/billAdmins"],{4640:function(t,e,n){"use strict";n.r(e);var r=n("d07e"),u=n("6739");for(var o in u)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(o);n("d90a");var i,c=n("f0c5"),a=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=a.exports},6739:function(t,e,n){"use strict";n.r(e);var r=n("9d89"),u=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=u.a},"71bd":function(t,e,n){},"9d89":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(n("a34a")),u=n("79f6"),o=n("d257"),i=c(n("66fd"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return f(t)||d(t)||l(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return m(t)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e,n,r,u,o,i){try{var c=t[o](i),a=c.value}catch(s){return void n(s)}c.done?e(a):Promise.resolve(a).then(r,u)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var o=t.apply(e,n);function i(t){p(o,r,u,i,c,"next",t)}function c(t){p(o,r,u,i,c,"throw",t)}i(void 0)}))}}var b=i.default.extend({components:{},data:function(){return{types:[{id:0,name:"全部"},{id:1,name:"待支付"},{id:-1,name:"已超时"}],currentType:0,edit:!1,list:[],page:1,limit:10,isEnd:!1}},computed:{empty:function(){return 0===this.list.length},selects:function(){return this.list.filter((function(t){return t.select})).map((function(t){return t.id}))},isSelectAll:function(){return!this.list.find((function(t){return!t.select}))},isSelect:function(){return!!this.list.find((function(t){return t.select}))}},methods:{statusToText:function(t){var e={0:{text:"待付款",color:"#FF7E5F"},1:{text:"已付款",color:"#6FD471"},2:{text:"已取消",color:"#E5E5E5"},3:{text:"已延期",color:"#FEB47B"}};return e[t]},resetList:function(){var t=this;return h(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.page=1,t.isEnd=!1,e.next=4,t.getList();case 4:t.list=e.sent;case 5:case"end":return e.stop()}}),e)})))()},getList:function(){var t=this;return h(r.default.mark((function e(){var n,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.reqAdminOrders)({page:t.page,limit:t.limit,status:t.types[t.currentType].id});case 3:return n=e.sent,o=n.data,e.abrupt("return",o.data.map((function(t){return t.select=!1,t})));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},onNextList:function(){var t=this;return h(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isEnd){e.next=2;break}return e.abrupt("return",!1);case 2:return t.page+=1,e.next=5,t.getList();case 5:if(n=e.sent,n.length){e.next=9;break}return t.isEnd=!0,e.abrupt("return",!1);case 9:t.list=[].concat(a(t.list),a(n));case 10:case"end":return e.stop()}}),e)})))()},onHandelDelete:function(){var t=this;return h(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.selects);case 1:case"end":return e.stop()}}),e)})))()},onHandelSelects:function(){var t=this;return h(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.selects.length){e.next=2;break}return e.abrupt("return",(0,o.showToast)({title:"请选择催收的账单!",icon:"none"}));case 2:return e.next=4,(0,u.reqUrgeOrder)(t.selects);case 4:return e.next=6,(0,o.showToast)({title:"已发送催收!"});case 6:t.onHandleItemSelectAll(!1),t.edit=!1;case 8:case"end":return e.stop()}}),e)})))()},onHandleItemSelectAll:function(t){this.list.forEach((function(e){e.select=t}))}},watch:{currentType:function(){this.resetList()}},onLoad:function(){this.resetList()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){t.stopPullDownRefresh()},onReachBottom:function(){this.onNextList()}});e.default=b}).call(this,n("543d")["default"])},d07e:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uSearch:function(){return n.e("node-modules/uview-ui/components/u-search/u-search").then(n.bind(null,"9cf5"))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"5d62"))},uCard:function(){return n.e("node-modules/uview-ui/components/u-card/u-card").then(n.bind(null,"d505"))},uCheckbox:function(){return n.e("node-modules/uview-ui/components/u-checkbox/u-checkbox").then(n.bind(null,"1e79"))},uTag:function(){return n.e("node-modules/uview-ui/components/u-tag/u-tag").then(n.bind(null,"2ad6"))},uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"f86b"))},uEmpty:function(){return n.e("node-modules/uview-ui/components/u-empty/u-empty").then(n.bind(null,"7516"))},commonFixedFooter:function(){return n.e("components/commons/common-fixed-footer").then(n.bind(null,"90d2"))},uButton:function(){return n.e("node-modules/uview-ui/components/u-button/u-button").then(n.bind(null,"d9ad"))}},u=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,(function(e,n){var r=t.__get_orig(e),u=t.statusToText("yes"==e.delay_status?3:e.status),o=t.statusToText("yes"==e.delay_status?3:e.status),i=e.begintime?t.$format(e.begintime):null,c=e.begintime?t.$format(e.endtime):null;return{$orig:r,m0:u,m1:o,m2:i,m3:c}})));t._isMounted||(t.e0=function(e){t.currentType=e},t.e1=function(e){t.edit=!0},t.e2=function(e){t.edit=!1}),t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[]},d90a:function(t,e,n){"use strict";var r=n("71bd"),u=n.n(r);u.a},f348:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");var e=r(n("4640"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["f348","common/runtime","common/vendor"]]]);