require('common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["libs/u-avatar-cropper/u-avatar-cropper"],{"009f":function(t,e,i){"use strict";(function(t){i("6cdc"),i("921b");var e=r(i("c692"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"196d":function(t,e,i){"use strict";i.r(e);var r=i("a3e4"),o=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=o.a},8917:function(t,e,i){"use strict";var r=i("8973"),o=i.n(r);o.a},8973:function(t,e,i){},a3e4:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(i("707d"));function o(t){return t&&t.__esModule?t:{default:t}}var n={props:{boundStyle:{type:Object,default:function(){return{lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"}}}},data:function(){return{bottomNavHeight:50,originWidth:200,width:0,height:0,cropperOpt:{id:"cropper",targetId:"targetCropper",pixelRatio:1,width:0,height:0,scale:2.5,zoom:8,cut:{x:(this.width-this.originWidth)/2,y:(this.height-this.originWidth)/2,width:this.originWidth,height:this.originWidth},boundStyle:{lineWidth:t.upx2px(this.boundStyle.lineWidth),mask:this.boundStyle.mask,color:this.boundStyle.borderColor}},destWidth:200,rectWidth:200,fileType:"jpg",src:""}},onLoad:function(e){var i=this,o=t.getSystemInfoSync();if(this.width=o.windowWidth,this.height=o.windowHeight-this.bottomNavHeight,this.cropperOpt.width=this.width,this.cropperOpt.height=this.height,this.cropperOpt.pixelRatio=o.pixelRatio,this.splicing=e.splicing,e.destWidth&&(this.destWidth=e.destWidth),e.rectWidth){var n=Number(e.rectWidth);this.cropperOpt.cut={x:(this.width-n)/2,y:(this.height-n)/2,width:n,height:n}}this.rectWidth=e.rectWidth,e.fileType&&(this.fileType=e.fileType),this.cropper=new r.default(this.cropperOpt).on("ready",(function(t){})).on("beforeImageLoad",(function(t){})).on("imageLoad",(function(t){})).on("beforeDraw",(function(t,e){})),t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"}),t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){i.src=t.tempFilePaths[0],i.cropper.pushOrign(i.src)}})},methods:{touchStart:function(t){this.cropper.touchStart(t)},touchMove:function(t){this.cropper.touchMove(t)},touchEnd:function(t){this.cropper.touchEnd(t)},getCropperImage:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.src)return this.$u.toast("请先选择图片再裁剪");var r={destHeight:Number(this.destWidth),destWidth:Number(this.destWidth),fileType:this.fileType};this.cropper.getCropperImage(r,(function(r,o){o?t.showModal({title:"温馨提示",content:o.message}):i?t.previewImage({current:"",urls:[r]}):(t.$emit("uAvatarCropper",r),e.$u.route({type:"back"}))}))},uploadTap:function(){var e=this,i=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){i.src=t.tempFilePaths[0],i.cropper.pushOrign(e.src)}})}}};e.default=n}).call(this,i("543d")["default"])},c692:function(t,e,i){"use strict";i.r(e);var r=i("d553"),o=i("196d");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("8917");var c,s=i("f0c5"),h=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"120f21ee",null,!1,r["a"],c);e["default"]=h.exports},d553:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c},n=[]}},[["009f","common/runtime","common/vendor","libs/u-avatar-cropper/common/vendor"]]]);