import{a as e,u as a,f as l,_ as t,ad as s,c as o,X as n}from"./index.a53c91c6.js";import{a as i,l as c,w as d,b as r,o as u,c as p,g as m,t as g,u as v,k as h,p as f,X as y,h as b}from"./vendor.71e19cde.js";const C=h();f("data-v-7d421e96");const z={class:"header"},w={class:"header-left"},x=m("div",{class:"add-button-box"},[m("i",{class:"ad-shapePlus"}),m("span",{class:"text"},"新增支持")],-1),_={class:"header-right"},S={class:"overflow-ellipsis"},k={class:"edit oe-flex"},V=y("编辑"),P=y("删除"),j={class:"goods-list-footer"},B={class:"select-all"},T=y(" 全选当前页 "),A=y(" 删除 "),F={class:"completePager"};b();var U=i({expose:[],setup(i){const{pagination:h,handleSizeChange:f,handleCurrentChange:y}=e(),b=a(),U=e=>{b.push({path:"/commodity/addSupport",query:{id:e}})},X=c([]),q=c(""),E=c(),I=c([]),D=()=>{I.value.length?G.value=!0:G.value=!1},G=c(!1),H=e=>{var a,l;e&&I.value?1==e&&(null==(l=E.value)||l.toggleAllSelection()):null==(a=E.value)||a.clearSelection()},J=e=>{I.value=e};d(I,(()=>{I.value.length==X.value.length?G.value=!0:G.value=!1}));const K=async()=>{const{data:e}=await n({page:h.currentPage,limit:h.pageSize,name:q.value});h.total=e.data.total,X.value=e.data.data,X.value=e.data.data};d([()=>h.pageSize,()=>h.currentPage,q],K,{immediate:!0});const L=()=>{const e=[];I.value.forEach((a=>{e.push(a.id)})),t.confirm("此操作将永久删除选中的支持, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await s({id:e.join()}),o({type:"success",message:"删除成功!"}),K()}))};return C(((e,a)=>{const n=r("el-button"),i=r("el-input"),c=r("el-empty"),d=r("el-table-column"),b=r("custom-button"),M=r("el-table"),N=r("el-checkbox"),O=r("el-pagination"),Q=r("el-card");return u(),p(Q,{shadow:"never",class:"custom-crad-container support-card"},{default:C((()=>[m("div",z,[m("div",w,[m(n,{type:"primary",class:"add-goods",size:"small",onClick:a[1]||(a[1]=e=>U())},{default:C((()=>[x])),_:1})]),m("div",_,[m(i,{placeholder:"请输入名称",size:"small","suffix-icon":"el-icon-search",modelValue:q.value,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value=e)},null,8,["modelValue"])])]),m(M,{border:!1,class:"goods-list",ref:E,data:X.value,"tooltip-effect":"dark",style:{width:"100%"},onSelectAll:D,onSelectionChange:J,"default-sort":{prop:["createtime","num","type"],order:"descending"}},{empty:C((()=>[m(c,{class:"oe-m-t-30",description:"暂无商品支持"})])),default:C((()=>[m(d,{type:"selection"}),m(d,{label:"分组名称",prop:"name"}),m(d,{label:"描述",prop:"description"},{default:C((e=>[m("div",S,g(e.row.description),1)])),_:1}),m(d,{label:"商品数",prop:"num",sortable:""}),m(d,{label:"新增时间",prop:"createtime",sortable:""},{default:C((e=>[m("span",null,g(v(l)(e.row.createtime)),1)])),_:1}),m(d,{label:"操作",width:"180"},{default:C((e=>[m("div",k,[m(n,{class:"oe-m-l-0",onClick:a=>U(e.row.id),type:"primary",size:"mini",icon:"ad-edit"},{default:C((()=>[V])),_:2},1032,["onClick"]),m(b,{onClick:a=>(async e=>{t.confirm("此操作将永久删除该支持, 是否继续?","删除支持",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await s({id:e}),o({type:"success",message:"删除成功!"}),K()}))})(e.row.id),icon:"ad-delete",color:"#FF0000",class:"public-move-left"},{default:C((()=>[P])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),m("div",j,[m("div",B,[m(N,{class:"oe-m-r-14",modelValue:G.value,"onUpdate:modelValue":a[3]||(a[3]=e=>G.value=e),onChange:H},{default:C((()=>[T])),_:1},8,["modelValue"]),m(n,{disabled:!I.value.length,type:"text",onClick:L},{default:C((()=>[A])),_:1},8,["disabled"])]),m("div",F,[m(O,{background:"",onSizeChange:v(f),onCurrentChange:v(y),"current-page":v(h).currentPage,"page-sizes":v(h).pageSizes,"page-size":v(h).pageSize,layout:"total, sizes, prev, pager, next, jumper",total:v(h).total},null,8,["onSizeChange","onCurrentChange","current-page","page-sizes","page-size","total"])])])])),_:1})}))}});U.__scopeId="data-v-7d421e96";export default U;
