import{a as e,u as a,f as l,_ as t,af as s,c as o,a1 as n}from"./index.a53c91c6.js";import{a as c,l as i,w as d,b as r,o as u,c as p,g as m,t as g,u as v,k as h,p as f,X as b,h as y}from"./vendor.71e19cde.js";const C=h();f("data-v-2b664684");const z={class:"header"},x={class:"header-left"},w=m("div",{class:"add-button-box"},[m("i",{class:"ad-shapePlus"}),m("span",{class:"text"},"新增参数")],-1),_={class:"header-right"},S={class:"edit oe-flex"},k=b("编辑"),P=b("删除"),V={class:"goods-list-footer"},j={class:"select-all"},B=b(" 全选当前页 "),T=b(" 删除 "),A={class:"completePager"};y();var F=c({expose:[],setup(c){const{pagination:h,handleSizeChange:f,handleCurrentChange:b}=e(),y=a(),F=e=>{y.push({path:"/commodity/addParame",query:{id:e}})},U=i([]),q=i(""),E=i(),H=i([]),I=()=>{H.value.length?O.value=!0:O.value=!1},O=i(!1),X=e=>{var a,l;e&&H.value?1==e&&(null==(l=E.value)||l.toggleAllSelection()):null==(a=E.value)||a.clearSelection()},D=e=>{H.value=e};d(H,(()=>{H.value.length==U.value.length?O.value=!0:O.value=!1}));const G=async()=>{const{data:e}=await n({page:h.currentPage,limit:h.pageSize,name:q.value});h.total=e.data.total,U.value=e.data.data};d([()=>h.currentPage,()=>h.pageSize,q],G,{immediate:!0});const J=()=>{const e=[];H.value.forEach((a=>{e.push(a.id)})),t.confirm("此操作将永久删除该参数, 是否继续?","删除参数",{closeOnHashChange:!1,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await s({id:e.join()}),o({type:"success",message:"删除成功!"}),G()}))};return C(((e,a)=>{const n=r("el-button"),c=r("el-input"),i=r("el-empty"),d=r("el-table-column"),y=r("custom-button"),K=r("el-table"),L=r("el-checkbox"),M=r("el-pagination"),N=r("el-card");return u(),p(N,{shadow:"never",class:"custom-crad-container"},{default:C((()=>[m("div",z,[m("div",x,[m(n,{type:"primary",class:"add-goods",size:"small",onClick:a[1]||(a[1]=e=>F())},{default:C((()=>[w])),_:1})]),m("div",_,[m(c,{placeholder:"请输入名称",size:"small","suffix-icon":"el-icon-search",modelValue:q.value,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value=e)},null,8,["modelValue"])])]),m(K,{border:!1,class:"goods-list",ref:E,data:U.value,"tooltip-effect":"dark",style:{width:"100%"},onSelectAll:I,onSelectionChange:D,"default-sort":{prop:["num","createtime"],order:"descending"}},{empty:C((()=>[m(i,{class:"oe-m-t-30",description:"暂无商品参数"})])),default:C((()=>[m(d,{type:"selection",width:"55"}),m(d,{label:"参数名称",prop:"name"}),m(d,{label:"商品数",prop:"num",sortable:""}),m(d,{label:"新增时间",prop:"createtime",sortable:""},{default:C((e=>[m("span",null,g(v(l)(e.row.createtime)),1)])),_:1}),m(d,{label:"操作",width:"180"},{default:C((e=>[m("div",S,[m(n,{class:"oe-m-l-0",type:"primary",onClick:a=>F(e.row.id),size:"mini",icon:"ad-edit"},{default:C((()=>[k])),_:2},1032,["onClick"]),m(y,{onClick:a=>(async e=>{t.confirm("此操作将永久删除该参数, 是否继续?","删除参数",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await s({id:e}),o({type:"success",message:"删除成功!"}),G()}))})(e.row.id),icon:"ad-delete",color:"#FF0000",class:"public-move-left"},{default:C((()=>[P])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),m("div",V,[m("div",j,[m(L,{class:"oe-m-r-14",modelValue:O.value,"onUpdate:modelValue":a[3]||(a[3]=e=>O.value=e),onChange:X},{default:C((()=>[B])),_:1},8,["modelValue"]),m(n,{disabled:!H.value.length,type:"text",onClick:J,class:"delete-button"},{default:C((()=>[T])),_:1},8,["disabled"])]),m("div",A,[m(M,{background:"",onSizeChange:v(f),onCurrentChange:v(b),"current-page":v(h).currentPage,"page-sizes":v(h).pageSizes,"page-size":v(h).pageSize,layout:"total, sizes, prev, pager, next, jumper",total:v(h).total},null,8,["onSizeChange","onCurrentChange","current-page","page-sizes","page-size","total"])])])])),_:1})}))}});F.__scopeId="data-v-2b664684";export default F;
