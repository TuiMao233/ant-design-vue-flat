import{r as e,c as a,a as s}from"./index.30f0effc.js";import{u as r}from"./use-antd-form.8a2682c7.js";import{d as l,K as o,n as d,r as t,o as u,c as i,e as n,g as m,m as c,t as p,j as v,p as f,k as b,A as w}from"./vendor.61326bd2.js";import{u as h}from"./index.630a510a.js";const g=v();f("data-v-4d6d3a7e");const x={class:"w-full h-full flex justify-center items-center"},j={class:"mt-64 px-56"},_=n("div",{class:"text-2xl font-medium mb-40"}," 找回密码 ",-1),y={class:"flex"},P=c(" 确定 "),k={class:"flex justify-center mt-128"},q=n("span",null,"已有账号，立即",-1);b();var U=l({expose:[],setup(l){const v=o({mobile:"",password:"",repassword:"",code:""}),f=d(null),{rules:b,validate:U}=r(f,{mobile:{required:!0,message:"手机号为必填项"},password:[{required:!0,message:"密码为必填项",trigger:"blur"},{trigger:"blur",message:"长度限制 6 ~ 18 位",min:6,max:18},{trigger:"blur",validator:(e,a)=>/([0-9A-z]){1,}/.test(a)?Promise.resolve():Promise.reject("账号需要包含数字")},{trigger:"blur",validator:(e,a)=>/^[A-z]/.test(a)?Promise.resolve():Promise.reject("账号需要以字母开头")}],repassword:[{required:!0,message:"确认密码为必填项"},{trigger:"blur",validator:(e,a)=>a===(null==v?void 0:v.password)?Promise.resolve():Promise.reject("确认密码与密码不一致")}],code:{required:!0,message:"验证码为必填项"}}),A=d(!1),C=async()=>{A.value||(await U(["mobile"]),await e({phone:v.mobile,event:"resetByMobile"}),w.success("验证码发送成功"),A.value=!0,$(),z())},{start:z,reset:$,current:B}=h({time:6e4,onFinish:()=>A.value=!1}),F=async()=>{await U(),await a(v),w.success("密码修改成功"),s.push("/auth/login")};return(e,a)=>{const s=t("a-input"),r=t("a-form-item"),l=t("a-button"),o=t("a-form"),d=t("a-card");return u(),i("div",x,[n(d,{class:"w-550 h-750 shadow drop-shadow-sm rounded-2xl"},{default:g((()=>[n(o,{ref:f,rules:m(b),model:m(v)},{default:g((()=>[n("div",j,[_,n(r,{name:"mobile"},{default:g((()=>[n(s,{value:m(v).mobile,"onUpdate:value":a[1]||(a[1]=e=>m(v).mobile=e),class:"h-48 rounded border-2",placeholder:"请输入手机号码"},null,8,["value"])])),_:1}),n(r,{name:"code"},{default:g((()=>[n("div",y,[n(s,{value:m(v).code,"onUpdate:value":a[2]||(a[2]=e=>m(v).code=e),class:"h-48 rounded border-2 mr-16",placeholder:"请输入验证码"},null,8,["value"]),n(l,{class:"h-48 rounded bg-blue text-sm text-white",onClick:C,disabled:A.value},{default:g((()=>[c(p(A.value?`${m(B).seconds}秒重新发送`:"发送验证码"),1)])),_:1},8,["disabled"])])])),_:1}),n(r,{name:"password"},{default:g((()=>[n(s,{value:m(v).password,"onUpdate:value":a[3]||(a[3]=e=>m(v).password=e),class:"h-48 rounded border-2",placeholder:"请设置您的登录密码",type:"password"},null,8,["value"])])),_:1}),n(r,{name:"repassword"},{default:g((()=>[n(s,{value:m(v).repassword,"onUpdate:value":a[4]||(a[4]=e=>m(v).repassword=e),class:"h-48 rounded border-2",placeholder:"请再次输入您的密码",type:"password"},null,8,["value"])])),_:1}),n(l,{class:"h-56 w-full bg-blue text-lg mt-8 text-white rounded-full",onClick:F},{default:g((()=>[P])),_:1})]),n("div",k,[q,n("a",{class:"text-blue-400",onClick:a[5]||(a[5]=a=>e.$router.push("/auth/login"))}," 登录 ")])])),_:1},8,["rules","model"])])),_:1})])}}});U.__scopeId="data-v-4d6d3a7e";export default U;
