import{_ as e}from"./EditHeader.67fbf51f.js";import{_ as o}from"./EditCardForm.eb8b3b86.js";import{a as t,b as a,o as l,c as r,g as d,I as n,F as p,P as s}from"./vendor.71e19cde.js";var m=t({expose:[],props:{option:{type:Object,required:!0}},setup:t=>(m,i)=>{const u=a("el-radio"),f=a("el-radio-group"),b=a("el-form-item");return l(),r(p,null,[d(e,{icon:"ad-operate-note",title:"运营笔记"}),d(o,{title:"组件风格"},{default:n((()=>[d(b,{label:"商品样式"},{default:n((()=>[d(f,{modelValue:t.option.componentStyle.componentModal,"onUpdate:modelValue":i[1]||(i[1]=e=>t.option.componentStyle.componentModal=e)},{default:n((()=>[(l(),r(p,null,s(["默认","投影","描边"],(e=>d(u,{key:e,label:e},null,8,["label"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})],64)}});export default m;
