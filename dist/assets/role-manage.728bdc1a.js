import{u as a,a as e,aT as t,c as l,_ as s,aU as o,aS as n}from"./index.a53c91c6.js";import{a as c,l as i,w as r,b as d,o as u,c as p,g,u as m,s as h,k as f,p as v,X as C,h as b}from"./vendor.71e19cde.js";const k=f();v("data-v-a9e5c6dc");const y={class:"store-manage"},_={class:"card-header"},w=C(" 添加角色 "),z={class:"header-right"},x={key:0,class:"start-up"},S={key:1},F={class:"oe-flex"},j=C(" 编辑 "),B=C(" 禁用 "),P=C(" 启用 "),T=C(" 删除 ");b();var V=c({expose:[],setup(c){const f=a(),{pagination:v,handleSizeChange:C,handleCurrentChange:b}=e(),V=i([]),D=i(""),U=async(a,e,s)=>{await t([e],{status:s}),a.status=s,l.success(1==s?"启用成功!":"禁用成功!")};return r([()=>v.currentPage,()=>v.pageSize,D],(async()=>{const{data:a}=await n({page:v.currentPage,limit:v.pageSize,search:{name:D.value}});v.total=a.data.total,V.value=a.data.data}),{immediate:!0}),k(((a,e)=>{const t=d("el-button"),l=d("el-input"),n=d("el-empty"),c=d("el-table-column"),i=d("custom-button"),r=d("el-table"),q=d("el-pagination"),I=d("el-card");return u(),p("div",y,[g(I,{shadow:"never",class:"custom-crad-container custom-card-page"},{header:k((()=>[g("div",_,[g(t,{class:"button",type:"primary",icon:"el-icon-plus",onClick:e[1]||(e[1]=a=>m(f).push({path:"role-details"}))},{default:k((()=>[w])),_:1}),g("div",z,[g(l,{placeholder:"请输入内容",modelValue:D.value,"onUpdate:modelValue":e[2]||(e[2]=a=>D.value=a),"suffix-icon":"el-icon-search"},null,8,["modelValue"])])])])),default:k((()=>[g(r,{class:"table-box","cell-style":{background:"#fff"},data:V.value,style:{width:"100%"}},{empty:k((()=>[g(n,{class:"oe-m-t-30",description:"暂无角色"})])),default:k((()=>[g(c,{prop:"name",label:"角色名称"}),g(c,{prop:"explain",label:"描述","min-width":"400"}),g(c,{prop:"access_count",label:"员工数量"}),g(c,{label:"状态"},{default:k((({row:a})=>[1==a.status?(u(),p("div",x,"启用")):h("",!0),0==a.status?(u(),p("div",S,"禁用")):h("",!0)])),_:1}),g(c,{label:"操作","min-width":"400"},{default:k((({row:a,$index:e})=>[g("div",F,[g(i,{class:"oe-m-r-8",icon:"el-icon-edit-outline",color:"#FF9D28",onClick:e=>m(f).push({path:"role-details",query:{id:a.id}})},{default:k((()=>[j])),_:2},1032,["onClick"]),1==a.status?(u(),p(i,{key:0,class:"oe-m-r-8",icon:"ad-blacklist",color:"#FF0000",onClick:e=>U(a,a.id,0)},{default:k((()=>[B])),_:2},1032,["onClick"])):(u(),p(i,{key:1,class:"oe-m-r-8",icon:"ad-grade",color:"#2DB6F5",onClick:e=>U(a,a.id,1)},{default:k((()=>[P])),_:2},1032,["onClick"])),g(i,{class:"oe-m-r-8",icon:"el-icon-delete",color:"#FF0000",onClick:t=>(async(a,e)=>{await s.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await o([e]),V.value.splice(a,1),v.total-=1})(e,a.id)},{default:k((()=>[T])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),g(q,{class:"right-buttom-pagination","page-sizes":m(v).pageSizes,"page-size":m(v).pageSize,background:"","current-page":m(v).currentPage,layout:"total, prev, pager, next,sizes, jumper",total:m(v).total,onSizeChange:m(C),onCurrentChange:m(b)},null,8,["page-sizes","page-size","current-page","total","onSizeChange","onCurrentChange"])])),_:1})])}))}});V.__scopeId="data-v-a9e5c6dc";export default V;
