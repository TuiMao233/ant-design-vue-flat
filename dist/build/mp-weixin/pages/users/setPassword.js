(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/setPassword"],{"1e87":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var o={uField:function(){return e.e("node-modules/uview-ui/components/u-field/u-field").then(e.bind(null,"c732"))},customCodeInput:function(){return e.e("components/customs/custom-code-input").then(e.bind(null,"502a"))},uButton:function(){return e.e("node-modules/uview-ui/components/u-button/u-button").then(e.bind(null,"d9ad"))}},u=function(){var n=this,t=n.$createElement;n._self._c},r=[]},"559f":function(n,t,e){"use strict";e.r(t);var o=e("a52d"),u=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=u.a},"64ac":function(n,t,e){"use strict";(function(n){e("6cdc"),e("921b");var t=o(e("96d5"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},7174:function(n,t,e){"use strict";var o=e("79c9"),u=e.n(o);u.a},"79c9":function(n,t,e){},"96d5":function(n,t,e){"use strict";e.r(t);var o=e("1e87"),u=e("559f");for(var r in u)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(r);e("7174");var a,i=e("f0c5"),c=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=c.exports},a52d:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(e("a34a")),u=e("79f6"),r=e("dd73"),a=f(e("0613")),i=e("d257"),c=f(e("66fd"));function f(n){return n&&n.__esModule?n:{default:n}}function s(n,t,e,o,u,r,a){try{var i=n[r](a),c=i.value}catch(f){return void e(f)}i.done?t(c):Promise.resolve(c).then(o,u)}function d(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var r=n.apply(t,e);function a(n){s(r,o,u,a,i,"next",n)}function i(n){s(r,o,u,a,i,"throw",n)}a(void 0)}))}}var l=c.default.extend({components:{},data:function(){return{form:{newpassword:"",comfirmpassword:"",mobile:"",captcha:""}}},computed:{isAuthPhoneCode:function(){return a.default.getters.isAuthPhoneCode},userInfo:function(){return a.default.state.user.info}},methods:{onSubmit:function(){var n=this;return d(o.default.mark((function t(){var e,c,f;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.form.mobile=a.default.state.user.info.mobile,e=r.plotForm.validateAll(["empty",n.form.newpassword,"支付密码"],["min",n.form.newpassword,"支付密码",6],["empty",n.form.comfirmpassword,"支付密码"],["min",n.form.comfirmpassword,"支付密码",6],["phone",n.form.mobile],["empty",n.form.captcha,"验证码"]).validate,e){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,(0,u.reqResetpwd)(n.form);case 6:return c=t.sent,f=c.data,u.httpConfig.header&&(u.httpConfig.header["token"]=f.token),t.next=11,a.default.dispatch("refreshUserInfo");case 11:return t.next=13,(0,i.showToast)({title:"重置成功!"});case 13:n.$navigateBack();case 14:case"end":return t.stop()}}),t)})))()},onGoToAuthPath:function(){!this.isAuthPhoneCode&&this.$navigateTo("/pages/commons/weChatLogin")}},watch:{},onLoad:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){n.stopPullDownRefresh()},onReachBottom:function(){}});t.default=l}).call(this,e("543d")["default"])}},[["64ac","common/runtime","common/vendor"]]]);