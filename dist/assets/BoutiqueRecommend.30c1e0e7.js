var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,a=(l,o,t)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[o]=t,n=(e,n)=>{for(var i in n||(n={}))l.call(n,i)&&a(e,i,n[i]);if(o)for(var i of o(n))t.call(n,i)&&a(e,i,n[i]);return e};import{a as i,l as s,w as u,b as d,o as m,c as p,g as r,s as c,F as y,P as b,k as g,p as f,h as _}from"./vendor.71e19cde.js";import{_ as S}from"./EditHeader.67fbf51f.js";import{_ as k}from"./EditCardForm.eb8b3b86.js";import{_ as V}from"./LinkItem.c2fdbd3b.js";import{_ as v}from"./ImageItem.b647d306.js";import{_ as C}from"./ColorGroup.vue_vue&type=script&setup=true&lang.dc9fb82e.js";import{_ as w}from"./ColorInput.60244a44.js";import{_ as T}from"./SliderGroup.vue_vue&type=script&setup=true&lang.84a8a9b8.js";import{_ as I}from"./SliderInput.27251042.js";import{_ as E}from"./ViewImage.e6691b67.js";import{_ as x}from"./EditCardItem.9ed044a9.js";import{l as h,n as j}from"./index.a53c91c6.js";const U=g();f("data-v-b57f308e");const D={class:"oe-flex oe-row-between",style:{width:"460px"}},q={key:0,class:"style-radio-item"},H=r("i",{class:"el-icon-check",style:{zoom:"0.5"}},null,-1),L={key:0,class:"style-radio-item"},A=r("i",{class:"el-icon-check",style:{zoom:"0.5"}},null,-1),K={key:0,class:"style-radio-item"},Y=r("i",{class:"el-icon-check",style:{zoom:"0.5"}},null,-1),R={class:"custom-select-view"},z={style:{"flex-direction":"column"}};_();var O=i({expose:[],props:{option:{type:Object,required:!0}},setup(e){const l=e,o=h.cloneDeep(l.option.contentStyle.list[0]),t=s(0),a=()=>l.option.contentStyle.list.push(n(n({},o),{image:"https://client-static-1254212114.cos.ap-guangzhou.myqcloud.com/images/boutiqueRecommendDefaultImage2.png",CACHE_KEY_LIST:j(5)}));return u((()=>l.option.componentStyle.styleType),(e=>{const a="https://client-static-1254212114.cos.ap-guangzhou.myqcloud.com/images/",i=["boutiqueRecommendDefaultImage1.png","boutiqueRecommendDefaultImage2.png","boutiqueRecommendDefaultImage3-1.png","boutiqueRecommendDefaultImage3-2.png","boutiqueRecommendDefaultImage3-3.png"];"single"===e?l.option.contentStyle.list=[h.cloneDeep(n(n({},o),{image:a+i[0],CACHE_KEY_LIST:j(5)}))]:"array"===e?l.option.contentStyle.list=[h.cloneDeep(n(n({},o),{image:a+i[1],CACHE_KEY_LIST:j(5)})),h.cloneDeep(n(n({},o),{image:a+i[1],CACHE_KEY_LIST:j(5)})),h.cloneDeep(n(n({},o),{image:a+i[1],CACHE_KEY_LIST:j(5)})),h.cloneDeep(n(n({},o),{image:a+i[1],CACHE_KEY_LIST:j(5)}))]:(t.value=0,l.option.contentStyle.list=[h.cloneDeep(n(n({},o),{image:a+i[2],CACHE_KEY_LIST:j(5)})),h.cloneDeep(n(n({},o),{image:a+i[3],CACHE_KEY_LIST:j(5)})),h.cloneDeep(n(n({},o),{image:a+i[4],CACHE_KEY_LIST:j(5)}))])})),U(((o,n)=>{const i=d("el-radio-button"),s=d("el-radio-group"),u=d("el-radio"),g=d("el-form-item"),f=d("el-input");return m(),p(y,null,[r(S,{title:"精品推荐",icon:"ad-boutique-recommend"}),r(k,{title:"组件风格"},{default:U((()=>[r(s,{modelValue:e.option.componentStyle.styleType,"onUpdate:modelValue":n[1]||(n[1]=l=>e.option.componentStyle.styleType=l),class:"style-radio-list"},{default:U((()=>[r("div",D,[r(i,{label:"single"},{default:U((()=>[r(E,{size:135,src:"/addons/weitshop_shop/weshop/public/home/backend/images/decorate/boutique-recommend-type1.png"}),"single"===e.option.componentStyle.styleType?(m(),p("div",q,[H])):c("",!0)])),_:1}),r(i,{label:"array"},{default:U((()=>[r(E,{size:135,src:"/addons/weitshop_shop/weshop/public/home/backend/images/decorate/boutique-recommend-type2.png"}),"array"===e.option.componentStyle.styleType?(m(),p("div",L,[A])):c("",!0)])),_:1}),r(i,{label:"custom"},{default:U((()=>[r(E,{size:135,src:"/addons/weitshop_shop/weshop/public/home/backend/images/decorate/boutique-recommend-type3.png"}),"custom"===e.option.componentStyle.styleType?(m(),p("div",K,[Y])):c("",!0)])),_:1})])])),_:1},8,["modelValue"])])),_:1}),r(k,{title:"整体样式"},{default:U((()=>[r(g,{label:"商品样式"},{default:U((()=>[r(s,{modelValue:e.option.contentStyle.componentModal,"onUpdate:modelValue":n[2]||(n[2]=l=>e.option.contentStyle.componentModal=l)},{default:U((()=>[(m(),p(y,null,b(["默认","投影","描边"],(e=>r(u,{key:e,label:e},null,8,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),"custom"===e.option.componentStyle.styleType?(m(),p(g,{key:0},{default:U((()=>[r("div",R,[r("div",{onClick:n[3]||(n[3]=e=>t.value=0),class:["targer-view",0===t.value&&"target-select"]},null,2),r("div",z,[r("div",{onClick:n[4]||(n[4]=e=>t.value=1),class:["targer-view",1===t.value&&"target-select"]},null,2),r("div",{onClick:n[5]||(n[5]=e=>t.value=2),class:["targer-view",2===t.value&&"target-select"]},null,2)])])])),_:1})):c("",!0),(m(!0),p(y,null,b(e.option.contentStyle.list,((o,a)=>{var n;return m(),p(y,{key:o.CACHE_KEY_LIST},["custom"!==e.option.componentStyle.styleType||t.value===a?(m(),p(x,{key:0,reduction:"array"!==e.option.componentStyle.styleType,"show-close":(null==(n=e.option.contentStyle.list)?void 0:n.length)>1,onClose:e=>{return o=a,l.option.contentStyle.list.splice(o,1);var o}},{default:U((()=>[r(C,{modelValue:o.color,"onUpdate:modelValue":e=>o.color=e,reset:""},{default:U((()=>[r(g,{label:"主标题"},{default:U((()=>[r(f,{class:"oe-flex",modelValue:o.title,"onUpdate:modelValue":e=>o.title=e,maxlength:"10","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),r(w,{keyword:"title",label:"主标题"}),r(g,{label:"副标题"},{default:U((()=>[r(f,{class:"oe-flex",modelValue:o.subTitle,"onUpdate:modelValue":e=>o.subTitle=e,maxlength:"10","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),r(w,{keyword:"subTitle",label:"副标题"}),r(w,{keyword:"btn",label:"按钮颜色"}),"single"===e.option.componentStyle.styleType?(m(),p(w,{key:0,keyword:"text",label:"文字颜色"})):c("",!0),r(g,{label:"图片"},{default:U((()=>[r(v,{modelValue:o.image,"onUpdate:modelValue":e=>o.image=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),r(g,{label:"链接"},{default:U((()=>[r(V,{modelValue:o.link,"onUpdate:modelValue":e=>o.link=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),r(w,{keyword:"background",label:"背景颜色"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["reduction","show-close","onClose"])):c("",!0)],64)})),128)),"array"===e.option.componentStyle.styleType?(m(),p("div",{key:1,onClick:a,class:"inc-button"}," 添加 ")):c("",!0)])),_:1}),r(k,{title:"组件样式"},{default:U((()=>[r(g,{label:"组件背景"},{default:U((()=>[r(s,{modelValue:e.option.colorStyle.backgroundType,"onUpdate:modelValue":n[6]||(n[6]=l=>e.option.colorStyle.backgroundType=l)},{default:U((()=>[(m(),p(y,null,b(["透明","颜色","背景图片"],(e=>r(u,{key:e,label:e},null,8,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),"背景图片"===e.option.colorStyle.backgroundType?(m(),p(g,{key:0,label:"图片"},{default:U((()=>[r(v,{modelValue:e.option.colorStyle.image,"onUpdate:modelValue":n[7]||(n[7]=l=>e.option.colorStyle.image=l)},null,8,["modelValue"])])),_:1})):c("",!0),r(C,{modelValue:e.option.colorStyle.color,"onUpdate:modelValue":n[8]||(n[8]=l=>e.option.colorStyle.color=l),class:"oe-m-b-20",reset:""},{default:U((()=>["颜色"===e.option.colorStyle.backgroundType?(m(),p(w,{key:0,keyword:"background",label:"背景颜色"})):c("",!0)])),_:1},8,["modelValue"])])),_:1}),r(k,{title:"边距设置"},{default:U((()=>[r(T,{modelValue:e.option.padding,"onUpdate:modelValue":n[9]||(n[9]=l=>e.option.padding=l)},{default:U((()=>[r(I,{keyword:"top",label:"上边距",tips:"px",max:50}),r(I,{keyword:"bottom",label:"下边距",max:20,tips:"px"}),r(I,{keyword:"leftRight",label:"左右边距",max:20,tips:"px"}),r(I,{keyword:"topRadius",label:"上圆角",max:20,tips:"px"}),r(I,{keyword:"bottomRadius",label:"下圆角",max:20,tips:"px"})])),_:1},8,["modelValue"])])),_:1})],64)}))}});O.__scopeId="data-v-b57f308e";export default O;
