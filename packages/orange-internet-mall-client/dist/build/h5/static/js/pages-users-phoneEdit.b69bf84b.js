(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-phoneEdit"],{"1c3cb":function(e,t,n){"use strict";var i=n("73a0"),o=n.n(i);o.a},"1fef":function(e,t,n){"use strict";var i=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var o=i(n("c964")),a=n("79f6"),r=i(n("0613")),l=n("a6f4"),u=(0,l.defineComponent)({props:{value:String,phone:{type:String,default:""},type:String,required:Boolean},data:function(){return{countDownNumber:0}},setup:function(){var e=(0,l.computed)((function(){return r.default.getters.hexColor}));return{$hexColor:e}},methods:{onSendCode:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.countDownNumber){t.next=2;break}return t.abrupt("return",!1);case 2:return t.prev=2,t.next=5,(0,a.reqSendCode)(e.phone,e.type);case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t["catch"](2),t.abrupt("return",!1);case 10:e.countDownNumber=60,n=setInterval((function(){e.countDownNumber-=1,e.countDownNumber||clearInterval(n)}),1e3);case 12:case"end":return t.stop()}}),t,null,[[2,7]])})))()}},watch:{},mounted:function(){},beforeUpdate:function(){},updated:function(){},activated:function(){},deactivated:function(){},beforeDestroy:function(){}});t.default=u},"30ef":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("498a");var i={name:"u-field",props:{icon:String,rightIcon:String,required:Boolean,label:String,password:Boolean,clearable:{type:Boolean,default:!0},labelWidth:{type:[Number,String],default:130},labelAlign:{type:String,default:"left"},inputAlign:{type:String,default:"left"},iconColor:{type:String,default:"#606266"},autoHeight:{type:Boolean,default:!0},errorMessage:{type:[String,Boolean],default:""},placeholder:String,placeholderStyle:String,focus:Boolean,fixed:Boolean,value:[Number,String],type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},labelPosition:{type:String,default:"left"},fieldStyle:{type:Object,default:function(){return{}}},clearSize:{type:[Number,String],default:30},iconStyle:{type:Object,default:function(){return{}}},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},trim:{type:Boolean,default:!0}},data:function(){return{focused:!1,itemIndex:0}},computed:{inputWrapStyle:function(){var e={};return e.textAlign=this.inputAlign,"left"==this.labelPosition?e.margin="0 8rpx":e.marginRight="8rpx",e},rightIconStyle:function(){var e={};return"top"==this.arrowDirection&&(e.transform="roate(-90deg)"),"bottom"==this.arrowDirection?e.transform="roate(90deg)":e.transform="roate(0deg)",e},labelStyle:function(){var e={};return"left"==this.labelAlign&&(e.justifyContent="flext-start"),"center"==this.labelAlign&&(e.justifyContent="center"),"right"==this.labelAlign&&(e.justifyContent="flext-end"),e},justifyContent:function(){return"left"==this.labelAlign?"flex-start":"center"==this.labelAlign?"center":"right"==this.labelAlign?"flex-end":void 0},inputMaxlength:function(){return Number(this.maxlength)},fieldInnerStyle:function(){var e={};return"left"==this.labelPosition?e.flexDirection="row":e.flexDirection="column",e}},methods:{onInput:function(e){var t=e.detail.value;this.trim&&(t=this.$u.trim(t)),this.$emit("input",t)},onFocus:function(e){this.focused=!0,this.$emit("focus",e)},onBlur:function(e){var t=this;setTimeout((function(){t.focused=!1}),100),this.$emit("blur",e)},onConfirm:function(e){this.$emit("confirm",e.detail.value)},onClear:function(e){this.$emit("input","")},rightIconClick:function(){this.$emit("right-icon-click"),this.$emit("click")},fieldClick:function(){this.$emit("click")}}};t.default=i},"3d88":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uField:n("c732").default,customCodeInput:n("502a").default,customFixedFooter:n("707a").default,uButton:n("d9ad").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"phone-edit"},[e.isAuthPhoneCode?n("div",{staticClass:"form-container"},[n("div",{staticClass:"old-phone"},[n("div",{staticClass:"u-m-b-20"},[e._v("绑定中的手机号："+e._s(e.hidePhone))]),n("div",{staticClass:"tips"},[e._v("更换手机号后，下次登录时请使用新绑定的手机号登录")])])]):e._e(),n("div",{staticClass:"form-container"},[n("u-field",{attrs:{required:!0,placeholder:"请输入手机号",label:e.isAuthPhoneCode?"新手机号":"手机号"},model:{value:e.newPhone,callback:function(t){e.newPhone=t},expression:"newPhone"}}),n("custom-code-input",{attrs:{required:!0,type:e.isAuthPhoneCode?"resetMobile":"bindMobile",phone:e.newPhone},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),n("custom-fixed-footer",{attrs:{position:"none","bg-color":"none"}},[n("u-button",{attrs:{shape:"circle",type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onEditPhone.apply(void 0,arguments)}}},[e._v(e._s(e.isAuthPhoneCode?"确认修改":"确认绑定"))])],1)],1)},a=[]},"3f70":function(e,t,n){"use strict";var i=n("8cde"),o=n.n(i);o.a},"502a":function(e,t,n){"use strict";n.r(t);var i=n("e5c5"),o=n("ab58");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("1c3cb");var r,l=n("f0c5"),u=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"2f9e9ba3",null,!1,i["a"],r);t["default"]=u.exports},"695c":function(e,t,n){"use strict";n.r(t);var i=n("30ef"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"73a0":function(e,t,n){var i=n("b656");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("a365c4ac",i,!0,{sourceMap:!1,shadowMode:!1})},"7bb7":function(e,t,n){"use strict";var i=n("ba82"),o=n.n(i);o.a},8036:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 文字溢出处理(一行) */\n/* 文字溢出处理(多行) */\n/* 填充页面 */\n/* 除了最后一个元素 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-field[data-v-5f7249ec]{font-size:%?28?%;padding:%?20?% %?28?%;text-align:left;position:relative;color:#303133}.u-field-inner[data-v-5f7249ec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-textarea-inner[data-v-5f7249ec]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.u-textarea-class[data-v-5f7249ec]{min-height:%?96?%;width:auto;font-size:%?28?%}.fild-body[data-v-5f7249ec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-arror-right[data-v-5f7249ec]{margin-left:%?8?%}.u-label-text[data-v-5f7249ec]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex}.u-label-left-gap[data-v-5f7249ec]{margin-left:%?6?%}.u-label-postion-top[data-v-5f7249ec]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.u-label[data-v-5f7249ec]{width:%?130?%;-webkit-box-flex:1;-webkit-flex:1 1 %?130?%;flex:1 1 %?130?%;text-align:left;position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-required[data-v-5f7249ec]::before{content:"*";position:absolute;left:%?-16?%;font-size:14px;color:#fa3534;height:9px;line-height:1}.u-field__input-wrap[data-v-5f7249ec]{position:relative;overflow:hidden;font-size:%?28?%;height:%?48?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:auto}.u-clear-icon[data-v-5f7249ec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-error-message[data-v-5f7249ec]{color:#fa3534;font-size:%?26?%;text-align:left}.placeholder-style[data-v-5f7249ec]{color:#969799}.u-input-class[data-v-5f7249ec]{font-size:%?28?%}.u-button-wrap[data-v-5f7249ec]{margin-left:%?8?%}',""]),e.exports=t},"8cde":function(e,t,n){var i=n("8036");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("c0ce53d6",i,!0,{sourceMap:!1,shadowMode:!1})},"9d1d":function(e,t,n){"use strict";n.r(t);var i=n("d808"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},ab58:function(e,t,n){"use strict";n.r(t);var i=n("1fef"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},b656:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 文字溢出处理(一行) */\n/* 文字溢出处理(多行) */\n/* 填充页面 */\n/* 除了最后一个元素 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.custom-code-input[data-v-2f9e9ba3]{position:relative}.send-code-btns[data-v-2f9e9ba3]{padding-right:%?28?%;height:%?35?%;z-index:100;position:absolute;right:0;top:0;bottom:0;margin:auto}',""]),e.exports=t},ba82:function(e,t,n){var i=n("fe8a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("13517996",i,!0,{sourceMap:!1,shadowMode:!1})},c732:function(e,t,n){"use strict";n.r(t);var i=n("cd18"),o=n("695c");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("3f70");var r,l=n("f0c5"),u=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"5f7249ec",null,!1,i["a"],r);t["default"]=u.exports},cd18:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uIcon:n("f86b").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-field",class:{"u-border-top":e.borderTop,"u-border-bottom":e.borderBottom}},[n("v-uni-view",{staticClass:"u-field-inner",class:["textarea"==e.type?"u-textarea-inner":"","u-label-postion-"+e.labelPosition]},[n("v-uni-view",{staticClass:"u-label",class:[e.required?"u-required":""],style:{justifyContent:e.justifyContent,flex:"left"==e.labelPosition?"0 0 "+e.labelWidth+"rpx":"1"}},[e.icon?n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{staticClass:"u-icon",attrs:{size:"32","custom-style":e.iconStyle,name:e.icon,color:e.iconColor}})],1):e._e(),e._t("icon"),n("v-uni-text",{staticClass:"u-label-text",class:[this.$slots.icon||e.icon?"u-label-left-gap":""]},[e._v(e._s(e.label))])],2),n("v-uni-view",{staticClass:"fild-body"},[n("v-uni-view",{staticClass:"u-flex-1 u-flex",style:[e.inputWrapStyle]},["textarea"==e.type?n("v-uni-textarea",{staticClass:"u-flex-1 u-textarea-class",style:[e.fieldStyle],attrs:{value:e.value,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,disabled:e.disabled,maxlength:e.inputMaxlength,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.fieldClick.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-flex-1 u-field__input-wrap",style:[e.fieldStyle],attrs:{type:e.type,value:e.value,password:e.password||"password"===this.type,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,disabled:e.disabled,maxlength:e.inputMaxlength,focus:e.focus,confirmType:e.confirmType},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.fieldClick.apply(void 0,arguments)}}})],1),e.clearable&&""!=e.value&&e.focused?n("u-icon",{staticClass:"u-clear-icon",attrs:{size:e.clearSize,name:"close-circle-fill",color:"#c0c4cc"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClear.apply(void 0,arguments)}}}):e._e(),n("v-uni-view",{staticClass:"u-button-wrap"},[e._t("right")],2),e.rightIcon?n("u-icon",{staticClass:"u-arror-right",style:[e.rightIconStyle],attrs:{name:e.rightIcon,color:"#c0c4cc",size:"26"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.rightIconClick.apply(void 0,arguments)}}}):e._e()],1)],1),!1!==e.errorMessage&&""!=e.errorMessage?n("v-uni-view",{staticClass:"u-error-message",style:{paddingLeft:e.labelWidth+"rpx"}},[e._v(e._s(e.errorMessage))]):e._e()],1)},a=[]},d808:function(e,t,n){"use strict";var i=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var o=i(n("c964"));n("99af");var a=i(n("0613")),r=n("d257"),l=i(n("e143")),u=l.default.extend({components:{},data:function(){return{code:"",newPhone:""}},computed:{phone:function(){return a.default.state.user.info.mobile},hidePhone:function(){var e=a.default.state.user.info.mobile;return e?"".concat(e.substring(0,3),"****").concat(e.substring(7,11)):"暂无手机号码"},isAuthPhoneCode:function(){return a.default.getters.isAuthPhoneCode}},methods:{onEditPhone:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.code){t.next=2;break}return t.abrupt("return",uni.$u.toast("请输入验证码"));case 2:if(uni.$u.test.mobile(e.newPhone)){t.next=4;break}return t.abrupt("return",uni.$u.toast("请输入正确的新手机号"));case 4:if(!e.isAuthPhoneCode){t.next=9;break}return t.next=7,a.default.dispatch("editPhoneInfo",[e.newPhone,e.code]);case 7:t.next=11;break;case 9:return t.next=11,a.default.dispatch("bindPhoneInfo",[e.newPhone,e.code]);case 11:return t.next=13,(0,r.showToast)({title:"修改成功!"});case 13:(0,r.navigateBack)();case 14:case"end":return t.stop()}}),t)})))()}},watch:{},onLoad:function(){this.isAuthPhoneCode?uni.setNavigationBarTitle({title:"修改手机号"}):uni.setNavigationBarTitle({title:"绑定手机号"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){uni.stopPullDownRefresh()},onReachBottom:function(){}});t.default=u},e5c5:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uField:n("c732").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-code-input"},[n("u-field",{attrs:{value:e.value,placeholder:"短信验证码",label:"验证码",clearable:!1,required:e.required},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("input",t)}}}),n("div",{staticClass:"send-code-btns",style:{color:0==e.countDownNumber?e.$hexColor["--color-primary"]:"#acacac"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSendCode.apply(void 0,arguments)}}},[e._v(e._s(0==e.countDownNumber?"获取验证码":e.countDownNumber+"秒后重新获取"))])],1)},a=[]},edc2:function(e,t,n){"use strict";n.r(t);var i=n("3d88"),o=n("9d1d");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("7bb7");var r,l=n("f0c5"),u=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"54532040",null,!1,i["a"],r);t["default"]=u.exports},fe8a:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 文字溢出处理(一行) */\n/* 文字溢出处理(多行) */\n/* 填充页面 */\n/* 除了最后一个元素 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.old-phone[data-v-54532040]{padding:%?40?% %?30?%;background-color:#f7f7f7}.tips[data-v-54532040]{font-size:%?24?%;color:#acacac}uni-page-body[data-v-54532040]{height:100%}.phone-edit[data-v-54532040]{min-height:100%;background-color:#f5f5f5}',""]),e.exports=t}}]);