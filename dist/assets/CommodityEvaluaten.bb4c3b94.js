import{_ as e}from"./EditHeader.67fbf51f.js";import{_ as o}from"./EditCardForm.eb8b3b86.js";import{_ as l}from"./ImageItem.b647d306.js";import{_ as a}from"./ColorGroup.vue_vue&type=script&setup=true&lang.dc9fb82e.js";import{_ as t}from"./ColorInput.60244a44.js";import{_ as r}from"./SliderGroup.vue_vue&type=script&setup=true&lang.84a8a9b8.js";import{_ as d}from"./SliderInput.27251042.js";import{a as u,b as p,o as i,c as n,g as s,F as m,P as b,s as c,k as y}from"./vendor.71e19cde.js";import"./index.a53c91c6.js";const f=y();var k=u({expose:[],props:{option:{type:Object,required:!0}},setup:u=>f(((y,k)=>{const _=p("el-radio"),g=p("el-radio-group"),V=p("el-form-item");return i(),n(m,null,[s(e,{title:"商品信息",icon:"ad-product-ranking"}),s(o,{title:"显示设置"},{default:f((()=>[s(V,{label:"评价数量"},{default:f((()=>[s(g,{modelValue:u.option.showSetting.evaluateNum,"onUpdate:modelValue":k[1]||(k[1]=e=>u.option.showSetting.evaluateNum=e)},{default:f((()=>[(i(),n(m,null,b([1,2,3,4],(e=>s(_,{key:e,label:e},null,8,["label"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),s(o,{title:"组件样式"},{default:f((()=>[s(V,{label:"组件背景"},{default:f((()=>[s(g,{modelValue:u.option.colorStyle.backgroundType,"onUpdate:modelValue":k[2]||(k[2]=e=>u.option.colorStyle.backgroundType=e)},{default:f((()=>[(i(),n(m,null,b(["透明","颜色","背景图片"],(e=>s(_,{key:e,label:e},null,8,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),"背景图片"===u.option.colorStyle.backgroundType?(i(),n(V,{key:0,label:"背景图片"},{default:f((()=>[s(l,{modelValue:u.option.colorStyle.image,"onUpdate:modelValue":k[3]||(k[3]=e=>u.option.colorStyle.image=e)},null,8,["modelValue"])])),_:1})):c("",!0),s(a,{modelValue:u.option.colorStyle.color,"onUpdate:modelValue":k[4]||(k[4]=e=>u.option.colorStyle.color=e),reset:""},{default:f((()=>["颜色"===u.option.colorStyle.backgroundType?(i(),n(t,{key:0,keyword:"background",label:"背景颜色"})):c("",!0),s(t,{keyword:"title",label:"标题颜色"}),s(t,{keyword:"btn",label:"更多颜色"}),s(t,{keyword:"icon",label:"图标颜色"}),s(t,{keyword:"subTitle",label:"用户名称"}),s(t,{keyword:"subIcon",label:"星级颜色"}),s(t,{keyword:"text",label:"内容颜色"}),s(t,{class:"long-slider-input",keyword:"line",label:"分割线颜色"})])),_:1},8,["modelValue"])])),_:1}),s(o,{title:"边距设置"},{default:f((()=>[s(r,{modelValue:u.option.padding,"onUpdate:modelValue":k[5]||(k[5]=e=>u.option.padding=e)},{default:f((()=>[s(d,{keyword:"top",label:"上边距",max:50,tips:"px"}),s(d,{keyword:"bottom",label:"下边距",max:20,tips:"px"})])),_:1},8,["modelValue"])])),_:1})],64)}))});k.__scopeId="data-v-487e3745";export default k;
