import{d as e,c as t}from"./order.28ff7f57.js";import{z as a,f as s}from"./index.a53c91c6.js";import{a as l,l as o,w as i,e as d,b as n,o as c,c as r,g as m,t as p,u,F as _,P as v,s as y,f,k as b,p as h,X as w,h as x,I as k}from"./vendor.71e19cde.js";const g=b();h("data-v-b009d33c");const C={class:"export-report-box"},j={class:"choice-box"},V=w("全选"),q=w("全部取消"),I=m("div",{class:"layer-box-tips"},"请选择需要导出的数据",-1),U={class:"oe-flex oe-flex-wrap layer-box"},A={key:0,class:"option-img",src:"/addons/weitshop_shop/weshop/public/home/backend/images/order/square-check.png",alt:""},B={class:"oe-flex bottom-btn oe-row-between"},O={class:"dialog-footer"},S=w("取 消"),z=w("确 定");x();var E=l({expose:[],props:{show:{type:Boolean,required:!0},option:{type:Object,required:!0}},setup(s,{emit:l}){const b=s,h=o();i(b,(()=>{b.show&&w()}));const w=async()=>{const{data:e}=await t(b.option);h.value=e.data.total},x=o([{name:"订单编号",select:!1,id:"order_sn"},{name:"会员等级",select:!1,id:"current_shop_user_level_id\t"},{name:"买家昵称",select:!1,id:"nickname"},{name:"买家手机号",select:!1,id:"mobile"},{name:"收货人姓名",select:!1,id:"consignee"},{name:"收货人手机号",select:!1,id:"phone"},{name:"收货地址省份",select:!1,id:"province_name"},{name:"收货地址地区",select:!1,id:"city_name"},{name:"收货地址",select:!1,id:"area_name"},{name:"买家备注",select:!1,id:"remark"},{name:"商品标题",select:!1,id:"goods_title"},{name:"商品编码",select:!1,id:"goods_code"},{name:"商品规格",select:!1,id:"goods_sku_text"},{name:"商品数量",select:!1,id:"goods_num"},{name:"支付方式",select:!1,id:"pay_type"},{name:"配送方式",select:!1,id:"delivery_type"},{name:"运费",select:!1,id:"dispatch_amount"},{name:"订单状态",select:!1,id:"status"},{name:"维权状态",select:!1,id:"is_after_sale"},{name:"下单时间",select:!1,id:"createtime"},{name:"付款时间",select:!1,id:"paytime"},{name:"发货时间",select:!1,id:"shipments_time"},{name:"完成时间",select:!1,id:"take_delivery_time"},{name:"物流单号",select:!1,id:"express_no"},{name:"物流公司",select:!1,id:"express_name"},{name:"买家备注",select:!1,id:"remark"}]),{isSelectAll:k,selectIds:E,selectItems:L}=a(x);k.value=!0;const R=async()=>{const{data:t}=await e({title:E.value,where:JSON.stringify(b.option)}),a=new Blob([t]),s=window.URL.createObjectURL(a),l=document.createElement("a");l.style.display="none",l.href=s,l.setAttribute("download","订单.xlsx"),document.body.appendChild(l),l.click(),J.value=!1},F=()=>{k.value=!1,x.value.forEach((e=>{e.select=!1}))},J=d({get:()=>b.show,set:()=>l("update:show")});return g(((e,t)=>{const a=n("el-button"),s=n("el-dialog");return c(),r("div",C,[m(s,{title:"导出",modelValue:u(J),"onUpdate:modelValue":t[3]||(t[3]=e=>f(J)?J.value=e:null),width:"815px"},{footer:g((()=>[m("div",B,[m("div",null,"总计导出数据："+p(h.value)+"条",1),m("div",O,[m(a,{onClick:t[2]||(t[2]=e=>J.value=!1)},{default:g((()=>[S])),_:1}),m(a,{type:"primary",onClick:R,disabled:!u(E).length},{default:g((()=>[z])),_:1},8,["disabled"])])])])),default:g((()=>[m("div",j,[m(a,{onClick:t[1]||(t[1]=e=>k.value=!0),type:"primary"},{default:g((()=>[V])),_:1}),m(a,{onClick:F},{default:g((()=>[q])),_:1})]),I,m("div",U,[(c(!0),r(_,null,v(x.value,((e,t)=>(c(),r("div",{key:t,class:["option-box",e.select?"selectStyle":""],onClick:t=>e.select=!e.select},[m("div",null,p(e.name),1),e.select?(c(),r("img",A)):y("",!0)],10,["onClick"])))),128))])])),_:1},8,["modelValue"])])}))}});E.__scopeId="data-v-b009d33c";const L={class:"dialog-footer"},R=w("取 消"),F=w("确 定");var J=l({expose:[],props:{show:{type:Boolean,required:!0},option:{type:Array,required:!0}},setup(e,{emit:t}){const a=e,l=d({get:()=>a.show,set:()=>t("update:show")});return(t,a)=>{const o=n("el-table-column"),i=n("el-table"),d=n("el-button"),_=n("el-dialog");return c(),r(_,{title:"日志",modelValue:u(l),"onUpdate:modelValue":a[3]||(a[3]=e=>f(l)?l.value=e:null),width:"800px"},{footer:k((()=>[m("span",L,[m(d,{onClick:a[1]||(a[1]=e=>l.value=!1)},{default:k((()=>[R])),_:1}),m(d,{type:"primary",onClick:a[2]||(a[2]=e=>l.value=!1)},{default:k((()=>[F])),_:1})])])),default:k((()=>[m(i,{data:e.option,stripe:"",style:{width:"100%"}},{default:k((()=>[m(o,{prop:"title",label:"事件"}),m(o,{prop:"name",label:"时间",width:"170px"},{default:k((e=>[w(p(u(s)(e.row.createtime)),1)])),_:1})])),_:1},8,["data"])])),_:1},8,["modelValue"])}}});export{J as _,E as a};
