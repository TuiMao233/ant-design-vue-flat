var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,a=(l,o,t)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[o]=t,i=(e,i)=>{for(var d in i||(i={}))l.call(i,d)&&a(e,d,i[d]);if(o)for(var d of o(i))t.call(i,d)&&a(e,d,i[d]);return e};import{a as d,b as u,o as n,c as r,g as s,s as p,F as m,P as c,u as b,t as g,M as f,V as _,k as y,p as V,X as S,h as k}from"./vendor.71e19cde.js";import{_ as x}from"./EditHeader.67fbf51f.js";import{_ as h}from"./EditCardForm.eb8b3b86.js";import{_ as j}from"./ImageItem.b647d306.js";import{_ as v}from"./ColorGroup.vue_vue&type=script&setup=true&lang.dc9fb82e.js";import{_ as U}from"./ColorInput.60244a44.js";import{_ as T}from"./SliderGroup.vue_vue&type=script&setup=true&lang.84a8a9b8.js";import{_ as w}from"./SliderInput.27251042.js";import{_ as C}from"./EditCardItem.9ed044a9.js";import{_ as L}from"./LinkItem.c2fdbd3b.js";import{l as I,n as E}from"./index.a53c91c6.js";const O=y();V("data-v-5f9f3ed4");const D=S("开启"),F=S("关闭"),P=S("开启"),H=S("关闭"),R=s("i",{class:"ri-align-left"},null,-1),z=s("i",{class:"ri-align-center"},null,-1),A=s("i",{class:"ri-align-right"},null,-1),G=s("span",{class:"remarks-text"},"建议图片尺寸为宽128X高128px",-1),K={key:0,style:{height:"0.5px","background-color":"#d9d9d9",margin:"0.5px 15px"}},X={class:"oe-flex oe-m-b-16"},Y={class:"oe-flex-1"},q=s("span",{class:"oe-m-r-6"},"+添加",-1);k();var B=d({expose:[],props:{option:{type:Object,required:!0}},setup(e){const l=e,o=I.cloneDeep(l.option.carouselSetting.imageList[0]),t=e=>l.option.carouselSetting.imageList.length<8&&l.option.carouselSetting.imageList.push(I.cloneDeep(i(i({},e),{CACHE_KEY_LIST:E(5)})));return t(o),t(o),t(o),O(((a,i)=>{const d=u("el-radio"),y=u("el-radio-group"),V=u("el-form-item"),S=u("el-radio-button"),k=u("el-input");return n(),r(m,null,[s(x,{title:"图片展播",icon:"ad-image-exhibition"}),s(h,{title:"轮播图设置"},{default:O((()=>[s(v,{modelValue:e.option.carouselSetting.color,"onUpdate:modelValue":i[5]||(i[5]=l=>e.option.carouselSetting.color=l)},{default:O((()=>[s(V,{label:"主标题"},{default:O((()=>[s(y,{modelValue:e.option.carouselSetting.title,"onUpdate:modelValue":i[1]||(i[1]=l=>e.option.carouselSetting.title=l)},{default:O((()=>[s(d,{label:!0},{default:O((()=>[D])),_:1}),s(d,{label:!1},{default:O((()=>[F])),_:1})])),_:1},8,["modelValue"])])),_:1}),e.option.carouselSetting.title?(n(),r(U,{key:0,label:"颜色",keyword:"title"})):p("",!0),s(V,{label:"副标题"},{default:O((()=>[s(y,{modelValue:e.option.carouselSetting.subTitle,"onUpdate:modelValue":i[2]||(i[2]=l=>e.option.carouselSetting.subTitle=l)},{default:O((()=>[s(d,{label:!0},{default:O((()=>[P])),_:1}),s(d,{label:!1},{default:O((()=>[H])),_:1})])),_:1},8,["modelValue"])])),_:1}),e.option.carouselSetting.subTitle?(n(),r(U,{key:1,label:"颜色",keyword:"subTitle"})):p("",!0),s(V,{label:"对齐方式"},{default:O((()=>[s(y,{modelValue:e.option.carouselSetting.align,"onUpdate:modelValue":i[3]||(i[3]=l=>e.option.carouselSetting.align=l),size:"small"},{default:O((()=>[s(S,{label:"left"},{default:O((()=>[R])),_:1}),s(S,{label:"center"},{default:O((()=>[z])),_:1}),s(S,{label:"right"},{default:O((()=>[A])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(V,{label:"图片内容"},{default:O((()=>[G])),_:1}),(n(!0),r(m,null,c(e.option.carouselSetting.imageList,((o,t)=>(n(),r(m,{key:o.CACHE_KEY_LIST},[0!==t?(n(),r("div",K)):p("",!0),s(C,{class:"card-item","show-close":1!==e.option.carouselSetting.imageList.length,style:{borderTopStyle:0===t&&"solid",borderBottomStyle:t+1===e.option.carouselSetting.imageList.length?"solid":""},onClose:e=>(e=>l.option.carouselSetting.imageList.splice(e,1))(t)},{default:O((()=>[s("div",X,[s(j,{modelValue:o.image,"onUpdate:modelValue":e=>o.image=e,bgColor:"#FFF",border:"1px dashed #D9D9D9",size:"84"},null,8,["modelValue","onUpdate:modelValue"]),s("div",Y,[e.option.carouselSetting.title?(n(),r(V,{key:0,label:"主标题"},{default:O((()=>[s(k,{modelValue:o.title,"onUpdate:modelValue":e=>o.title=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):p("",!0),e.option.carouselSetting.subTitle?(n(),r(V,{key:1,label:"副标题"},{default:O((()=>[s(k,{modelValue:o.subTitle,"onUpdate:modelValue":e=>o.subTitle=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):p("",!0)])]),s(L,{modelValue:o.link,"onUpdate:modelValue":e=>o.link=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["show-close","style","onClose"])],64)))),128)),s("div",{class:"inc-button",onClick:i[4]||(i[4]=e=>t(b(o)))},[q,s("span",null,g(e.option.carouselSetting.imageList.length)+"/"+g(8),1)])])),_:1},8,["modelValue"])])),_:1}),s(h,{title:"组件样式"},{default:O((()=>[s(V,{label:"组件背景"},{default:O((()=>[s(y,{modelValue:e.option.colorStyle.backgroundType,"onUpdate:modelValue":i[6]||(i[6]=l=>e.option.colorStyle.backgroundType=l)},{default:O((()=>[(n(),r(m,null,c(["透明","颜色","背景图片"],(e=>s(d,{label:e,key:e},null,8,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),f(s(V,{label:"背景颜色"},{default:O((()=>[s(U,{modelValue:e.option.colorStyle.color.background,"onUpdate:modelValue":i[7]||(i[7]=l=>e.option.colorStyle.color.background=l),reset:""},null,8,["modelValue"])])),_:1},512),[[_,"颜色"===e.option.colorStyle.backgroundType]]),f(s(V,{label:"选择图片"},{default:O((()=>[s(j,{modelValue:e.option.colorStyle.image,"onUpdate:modelValue":i[8]||(i[8]=l=>e.option.colorStyle.image=l)},null,8,["modelValue"])])),_:1},512),[[_,"背景图片"===e.option.colorStyle.backgroundType]])])),_:1}),s(h,{title:"边距设置"},{default:O((()=>[s(T,{modelValue:e.option.padding,"onUpdate:modelValue":i[9]||(i[9]=l=>e.option.padding=l)},{default:O((()=>[s(w,{keyword:"top",label:"上边距",max:50,tips:"px"}),s(w,{keyword:"bottom",label:"下边距",max:20,tips:"px"}),s(w,{keyword:"leftRight",label:"左右边距",max:20,tips:"px"}),s(w,{keyword:"topRadius",label:"上圆角",max:20,tips:"px"}),s(w,{keyword:"bottomRadius",label:"下圆角",max:20,tips:"px"})])),_:1},8,["modelValue"])])),_:1})],64)}))}});B.__scopeId="data-v-5f9f3ed4";export default B;
