var re=Object.defineProperty,de=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var T=(f,s,u)=>s in f?re(f,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):f[s]=u,H=(f,s)=>{for(var u in s||(s={}))he.call(s,u)&&T(f,u,s[u]);if(P)for(var u of P(s))_e.call(s,u)&&T(f,u,s[u]);return f},V=(f,s)=>de(f,fe(s));import{d as pe,r as g,m as ve,l as ge,p as ye,ab as Fe,n as me,o as ke,b as D,s as B,E as y,e as l,f as n,as as we,w as i,ad as Ce,M as Ee,F as x,D as N,R as De,aA as be,Q as m,c as Be,y as _,A as xe,a9 as Ne,ag as Se,a7 as Ae,I as S,ah as $e,ak as Re,P as Ie,U as p,a8 as q,at as ze}from"./vendor.b04d76c4.js";import{i as d,b as Me}from"./index.0bb9054c.js";const Le={class:"list-page list-page-files"},Ue={class:"header"},Oe={class:"search"},Pe=_(" \u641C\u7D22 "),Te={class:"action"},He=_(" \u68C0\u67E5\u672A\u4E0B\u8F7D\u6587\u4EF6 "),Ve=_(" \u68C0\u67E5\u91CD\u590D\u6587\u4EF6 "),qe=_(" \u68C0\u67E5\u5DF2\u5220\u9664\u6587\u4EF6 "),Je=_("\u91CD\u65B0\u626B\u63CF"),je={key:0,class:"loading"},Ge=_("\u52A0\u8F7D\u4E2D "),Ze={key:0,class:"outer-wrapper static show"},Ke={class:"toolbar-wrapper"},Qe=_(" \u526A\u5207\u6240\u9009 "),Xe=_(" \u6279\u91CF\u4E0B\u8F7D "),Ye=_(" \u5220\u9664\u6240\u9009 "),at=pe({setup(f){const s=g(),u=ve();ge();const r=g([]);ye();const J=g(!1),C=g(),A=Fe(),k=g(),b=g("");let F=null;const j=g([{type:"selection"},{title:"\u540D\u79F0",key:"name",sorter:"default",render:e=>p("div",{class:"file-info"},[p("img",{src:e.thumbnail_link||e.icon_link}),p(q,{class:"title"},[p("span",{},String(e.name)),e.exist?p("a",{style:"color: #306eff; text-decoration: underline; float: right;",target:"_blank",href:e.exist.url,onClick:ze(()=>{},["stop"])},[e.exist.filename]):p("span")]),p("span",{class:"action"},"1")])},{title:"\u5927\u5C0F",key:"size",sorter:(e,t)=>e.size-t.size,align:"right",render:e=>Number(e.size)>0?Me(Number(e.size)):"",className:"size",width:100},{title:"\u8DEF\u5F84",key:"path",sorter:"default",render:e=>p("div",{class:"file-info"},[p("img",{src:e.icon_link}),p(q,{class:"title"},{default:()=>String(e.path)})])}]),$=()=>{C.value=JSON.parse(window.localStorage.getItem("pikpakMoveFiles")||"[]"),s.value=[],r.value=[]};me(u,()=>{$()}),ke(()=>{$()});const G=e=>{e.target.offsetHeight+e.target.scrollTop>=e.target.scrollHeight-30},Z=e=>{let t=[];s.value.forEach(a=>{if(r.value.indexOf(a.id)!==-1)t.push(a.id);else if(a.children)for(let o in a.children)r.value.indexOf(a.children[o].id)!==-1&&t.push(a.children[o].id)}),K(t),r.value=[]},K=e=>{C.value=e,window.localStorage.setItem("pikpakMoveFiles",JSON.stringify(e)),window.$message.success("\u526A\u5207\u6210\u529F\uFF0C\u8BF7\u70B9\u51FB\u9875\u9762\u53F3\u4E0A\u65B9\u7C98\u8D34\u6309\u94AE")},Q=e=>{d.post("https://api-drive.mypikpak.com/drive/v1/files:batchTrash",{ids:typeof e=="string"?[e]:e}).then(()=>{ae(typeof e=="string"?[e]:e),window.$message.success("\u5220\u9664\u6210\u529F"),r.value=[],F&&F()})},X=async()=>{const e=async c=>await d.get("https://api-drive.mypikpak.com/drive/v1/files/"+c,{params:{_magic:"2021",thumbnail_size:"SIZE_LARGE"}}),t=async()=>{const c=JSON.parse(JSON.stringify(r.value)),h=new Set;for(let w in s.value)s.value[w].kind==="drive#folder"&&h.add(s.value[w].id);const U=[];for(let w in c){if(h.has(c[w]))continue;const O=await e(c[w]);U.push({url:O.data.web_content_link,filename:O.data.name})}return U},a=c=>{const h="chrome_extension_id";chrome.runtime.sendMessage(h,{msg:"pikpak_batch_download",items:c})};k.value=A.create({title:"\u6279\u91CF\u4E0B\u8F7D\u6587\u4EF6",closable:!0,content:"\u6B63\u5728\u83B7\u53D6\u6587\u4EF6\u5217\u8868..."});const o=await t();r.value=[],k.value.content="\u5171\u83B7\u53D6\u5230"+o.length+"\u4E2A\u6587\u4EF6",a(o)},R=async()=>{s.value=await se("name",b.value),F=R},I=async()=>{s.value=await te(),F=I},Y=async(e,t,a)=>{const o={phase:{eq:"PHASE_TYPE_COMPLETE"},trashed:{eq:!1}};return(await d.get("https://api-drive.mypikpak.com/drive/v1/files",{params:{parent_id:e,limit:t,filters:o,thumbnail_size:"SIZE_LARGE",with_audit:!0,page_token:a||void 0}})).data},W=async e=>{const t=100;let a="",o=[];for(let c=0;c<10;c++){const h=await Y(e,t,a);if(o=o.concat(h.files),h.files.length<t||!h.next_page_token)break;a=h.next_page_token}return o},v="http://localhost:3000/pikpak",ee=async(e,t)=>{await d.post(`${v}/files`,{parentIds:e,files:t})},te=async()=>(await d.get(`${v}/files/redundancy`)).data,z=async()=>(await d.get(`${v}/files/undownloaded`)).data,M=async()=>(await d.get(`${v}/files/deleted`)).data,ae=async e=>{await d.get(`${v}/delete/files/${e.join(",")}`)},se=async(e,t)=>(await d.get(`${v}/files/${e}/${encodeURIComponent(t)}`)).data,ne=async e=>(await d.get(`${v}/file/${e}`)).data,le=async e=>{await d.get(`${v}/file/scanned/${e}`)},L=async e=>{const t=e[e.length-1],a=await W(t);await ee(e,a);for(let o=0;o<a.length;o++)a[o].kind=="drive#folder"&&((await ne(a[o].id)).scanned||await L(e.concat([a[o].id]))),e.length==1&&E(`\u5DF2\u626B\u63CF${Math.floor((o+1)/a.length*100)}%(${o+1}/${a.length})...`);t!=""&&await le(t)},E=async e=>{if(k.value)try{k.value.destroy()}catch{}k.value=A.info({title:e})},ie=async()=>{E("\u5F00\u59CB\u626B\u63CF\u5168\u76D8...");try{await L([""]),E("\u626B\u63CF\u5B8C\u6210")}catch(e){E("\u626B\u63CF\u51FA\u9519: "+e)}},oe=async()=>{s.value=await z(),F=z},ue=e=>`http://localhost:3000/xvideo/search/vid/${encodeURIComponent(e)}`,ce=async()=>{let e=await M();e=e.map(t=>V(H({},t),{exist:{filename:t.name,url:ue(t.name)}})),s.value=e,F=M};return(e,t)=>(D(),B("div",Le,[y("div",Ue,[y("div",Oe,[l(n(we),null,{default:i(()=>[l(n(De),{placeholder:"\u6587\u4EF6\u540D\u3001hash",value:b.value,"onUpdate:value":t[0]||(t[0]=a=>b.value=a)},{prefix:i(()=>[l(n(be))]),_:1},8,["value"]),l(n(m),{type:"primary",ghost:"",onClick:R},{default:i(()=>[Pe]),_:1})]),_:1})]),y("div",Te,[l(n(Ce),null,{default:i(()=>{var a;return[((a=C.value)==null?void 0:a.length)?(D(),Be(n(m),{key:0,type:"default"},{default:i(()=>[_(" \u7C98\u8D34\u5DF2\u526A\u5207"+xe(C.value.length)+"\u9879\u8D44\u6E90 ",1)]),_:1})):N("",!0),l(n(m),{onClick:oe},{default:i(()=>[He]),_:1}),l(n(m),{onClick:I},{default:i(()=>[Ve]),_:1}),l(n(m),{onClick:ce},{default:i(()=>[qe]),_:1}),l(n(Ne),{onPositiveClick:ie},{trigger:i(()=>[l(n(m),null,{default:i(()=>[Je]),_:1})]),_:1})]}),_:1})])]),l(n(Ee),{style:{"max-height":"calc(100vh - 190px)"},onScroll:G},{default:i(()=>[l(n(Se),{"checked-row-keys":r.value,"onUpdate:checked-row-keys":t[1]||(t[1]=a=>r.value=a),"row-key":a=>a.id,data:s.value,size:"small",columns:j.value,bordered:!1},null,8,["checked-row-keys","row-key","data","columns"]),J.value?(D(),B("div",je,[l(n(Ae),{size:"small"}),Ge])):N("",!0)]),_:1}),r.value.length?(D(),B("div",Ze,[y("div",Ke,[y("div",{class:"toolbar-item",onClick:Z},[l(n(x),null,{trigger:i(()=>[l(n(S),null,{default:i(()=>[l(n($e))]),_:1})]),default:i(()=>[Qe]),_:1})]),y("div",{class:"toolbar-item",onClick:X},[l(n(x),null,{trigger:i(()=>[l(n(S),null,{default:i(()=>[l(n(Re))]),_:1})]),default:i(()=>[Xe]),_:1})]),y("div",{class:"toolbar-item",onClick:t[2]||(t[2]=a=>Q(r.value))},[l(n(x),null,{trigger:i(()=>[l(n(S),null,{default:i(()=>[l(n(Ie))]),_:1})]),default:i(()=>[Ye]),_:1})])])])):N("",!0)]))}});export{at as default};
