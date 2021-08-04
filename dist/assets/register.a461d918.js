import{r as e,b as a,a as s}from"./index.30f0effc.js";import{u as l}from"./use-antd-form.8a2682c7.js";import{d as r,K as t,n as o,r as d,o as u,c as i,e as n,g as c,m,t as p,j as v,p as b,k as f,A as g}from"./vendor.61326bd2.js";import{u as w}from"./index.630a510a.js";const h=v();b("data-v-345a8400");const x={class:"w-full h-full flex justify-center items-center"},_={class:"mt-64 px-56"},j=n("div",{class:"text-2xl mb-40 font-medium"}," 新人注册，免费体验系统 ",-1),y={class:"flex"},k=m(" 确定 "),q={class:"flex justify-between mt-112 mx-56 text-gray-400"},P=n("div",null,[n("span",null,"注册即同意"),n("a",{class:"text-blue-400"},"《weitshop云平台协议》")],-1),U=n("span",null,"已有账号，立即",-1);f();var A=r({expose:[],setup(r){const v=t({mobile:"",password:"",repassword:"",code:""}),b=o(),{rules:f,validate:A}=l(b,{account:[{trigger:"blur",message:"手机号为必填项",required:!0}],mobile:{required:!0,message:"手机号为必填项",trigger:"blur"},password:[{required:!0,message:"密码为必填项",trigger:"blur"},{trigger:"blur",message:"长度限制 6 ~ 18 位",min:6,max:18},{trigger:"blur",validator:(e,a)=>/([0-9A-z]){1,}/.test(a)?Promise.resolve():Promise.reject("账号需要包含数字")},{trigger:"blur",validator:(e,a)=>/^[A-z]/.test(a)?Promise.resolve():Promise.reject("账号需要以字母开头")}],code:{required:!0,message:"验证码为必填项",trigger:"blur"}}),C=o(!1),z=async()=>{C.value||(await A(["mobile"]),await e({phone:v.mobile,event:"registerByMobile"}),g.success("验证码发送成功"),C.value=!0,B(),$())},{start:$,reset:B,current:F}=w({time:6e4,onFinish:()=>C.value=!1}),I=async()=>{await A(),await a(v),g.success("注册成功"),s.push("/auth/login")};return(e,a)=>{const s=d("a-input"),l=d("a-form-item"),r=d("a-button"),t=d("a-form"),o=d("a-card");return u(),i("div",x,[n(o,{class:"w-550 h-750 shadow drop-shadow-sm rounded-2xl"},{default:h((()=>[n(t,{ref:b,rules:c(f),model:c(v)},{default:h((()=>[n("div",_,[j,n(l,{name:"mobile"},{default:h((()=>[n(s,{value:c(v).mobile,"onUpdate:value":a[1]||(a[1]=e=>c(v).mobile=e),class:"h-48 rounded border-2",placeholder:"请输入手机号码"},null,8,["value"])])),_:1}),n(l,{name:"code"},{default:h((()=>[n("div",y,[n(s,{value:c(v).code,"onUpdate:value":a[2]||(a[2]=e=>c(v).code=e),class:"h-48 rounded border-2 mr-16",placeholder:"请输入验证码"},null,8,["value"]),n(r,{class:"h-48 rounded bg-blue text-sm text-white",onClick:z,disabled:C.value},{default:h((()=>[m(p(C.value?`${c(F).seconds}秒重新发送`:"发送验证码"),1)])),_:1},8,["disabled"])])])),_:1}),n(l,{name:"password"},{default:h((()=>[n(s,{value:c(v).password,"onUpdate:value":a[3]||(a[3]=e=>c(v).password=e),class:"h-48 rounded border-2",placeholder:"请设置您的登录密码",type:"password"},null,8,["value"])])),_:1}),n(l,{name:"repassword"},{default:h((()=>[n(s,{value:c(v).repassword,"onUpdate:value":a[4]||(a[4]=e=>c(v).repassword=e),class:"h-48 rounded border-2",placeholder:"请再次输入您的密码",type:"password"},null,8,["value"])])),_:1}),n(r,{class:"h-56 w-full bg-blue text-lg mt-8 text-white rounded-full",onClick:I},{default:h((()=>[k])),_:1})]),n("div",q,[P,n("div",null,[U,n("a",{class:"text-blue-400",onClick:a[5]||(a[5]=a=>e.$router.push("/auth/login"))}," 登录 ")])])])),_:1},8,["rules","model"])])),_:1})])}}});A.__scopeId="data-v-345a8400";export default A;
