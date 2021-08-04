import{r as e,s as a,a as s}from"./index.30f0effc.js";import{d as l,n as t,K as r,r as o,o as u,c as d,e as c,g as n,F as i,L as m,m as p,t as v,j as f,p as b,k as g,A as h}from"./vendor.61326bd2.js";import{u as x}from"./use-antd-form.8a2682c7.js";import{u as w}from"./index.630a510a.js";const y=f();b("data-v-227fa026");const k={class:"w-full h-full flex justify-center items-center"},_={class:"grid grid-rows-1 gap-40 mt-64 px-56"},j=c("div",{class:"text-2xl font-medium"}," 早上好，欢迎使用Weitshop ",-1),C={class:"flex"},U={class:"flex justify-between"},q=c("span",null,"记住密码",-1),K=p(" 确定 "),L={class:"flex justify-center mt-96"};g();var $=l({expose:[],setup(l){const f=t(0),b=t(!0),g=r({account:"",mobile:"",password:"",code:""}),$=t(),{rules:A,validate:F}=x($,{account:[{trigger:"blur",message:"手机号为必填项",required:!0}],mobile:{required:!0,message:"手机号为必填项",trigger:"blur"},password:[{required:!0,message:"密码为必填项",trigger:"blur"},{trigger:"blur",message:"长度限制 6 ~ 18 位",min:6,max:18},{trigger:"blur",validator:(e,a)=>/([0-9A-z]){1,}/.test(a)?Promise.resolve():Promise.reject("账号需要包含数字")}],code:{required:!0,message:"验证码为必填项",trigger:"blur"}}),P=t(!1),z=async()=>{P.value||(await e({phone:g.mobile,event:"loginByMobile"}),h.success("验证码发送成功"),P.value=!0,I(),B())},{start:B,reset:I,current:M}=w({time:6e4,onFinish:()=>P.value=!1}),W=async()=>{await F(),0===f.value?(await a.dispatch("accountLogin",{account:g.account,password:g.password}),h.success("登录成功"),s.replace("/console")):(await a.dispatch("phoneLogin",{mobile:g.mobile,code:g.code}),h.success("登录成功"),s.replace("/console"))};return(e,a)=>{const s=o("a-input"),l=o("a-form-item"),t=o("a-tab-pane"),r=o("a-button"),h=o("a-tabs"),x=o("a-form"),w=o("a-checkbox"),F=o("a-card");return u(),d("div",k,[c(F,{class:"w-550 h-750 shadow drop-shadow-sm rounded-2xl"},{default:y((()=>[c("div",_,[j,c(x,{model:n(g),rules:n(A),ref:$},{default:y((()=>[c(h,{activeKey:f.value,"onUpdate:activeKey":a[5]||(a[5]=e=>f.value=e)},{default:y((()=>[c(t,{key:0,class:"pt-32"},{tab:y((()=>[c("span",{class:[[0!==f.value&&"text-gray-400"],"text-lg"]},"密码登录",2)])),default:y((()=>[0===f.value?(u(),d(i,{key:0},[c(l,{name:"account"},{default:y((()=>[c(s,{class:"h-48 rounded border-2",value:n(g).account,"onUpdate:value":a[1]||(a[1]=e=>n(g).account=e),placeholder:"请输入手机号码"},null,8,["value"])])),_:1}),c(l,{name:"password"},{default:y((()=>[c(s,{class:"h-48 rounded border-2",value:n(g).password,"onUpdate:value":a[2]||(a[2]=e=>n(g).password=e),placeholder:"请输入登录密码",type:"password"},null,8,["value"])])),_:1})],64)):m("",!0)])),_:1}),c(t,{key:1,class:"pt-32"},{tab:y((()=>[c("span",{class:[[1!==f.value&&"text-gray-400"],"text-lg"]},"免密登录",2)])),default:y((()=>[1===f.value?(u(),d(i,{key:0},[c(l,{name:"mobile"},{default:y((()=>[c(s,{class:"h-48 rounded border-2",value:n(g).mobile,"onUpdate:value":a[3]||(a[3]=e=>n(g).mobile=e),placeholder:"请输入手机号码"},null,8,["value"])])),_:1}),c(l,{name:"code"},{default:y((()=>[c("div",C,[c(s,{class:"h-48 rounded border-2 mr-16",value:n(g).code,"onUpdate:value":a[4]||(a[4]=e=>n(g).code=e),placeholder:"请输入验证码"},null,8,["value"]),c(r,{class:"h-48 rounded bg-blue text-sm text-white",onClick:z,disabled:P.value},{default:y((()=>[p(v(P.value?`${n(M).seconds}秒重新发送`:"发送验证码"),1)])),_:1},8,["disabled"])])])),_:1})],64)):m("",!0)])),_:1})])),_:1},8,["activeKey"])])),_:1},8,["model","rules"]),c("div",U,[c("div",null,[c(w,{class:"mr-8",checked:b.value,onChange:a[6]||(a[6]=e=>b.value=e.target.checked)},null,8,["checked"]),q]),c("div",null,[c("a",{class:"text-blue-400",onClick:a[7]||(a[7]=a=>e.$router.push("/auth/retrieve"))},"忘记密码")])]),c(r,{class:"h-56 bg-blue text-lg mt-8 text-white rounded-full",onClick:W},{default:y((()=>[K])),_:1})]),c("div",L,[c("a",{class:"text-blue-400 text-sm",onClick:a[8]||(a[8]=a=>e.$router.push("/auth/register"))}," 没有账号？立即注册 ")])])),_:1})])}}});$.__scopeId="data-v-227fa026";export default $;