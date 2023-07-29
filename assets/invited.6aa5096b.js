import{C as I}from"./clipboard.c7552457.js";import{i as v}from"./index.1fd0583d.js";import{d as S,r,a5 as H,o as L,b as h,t as g,e,f as a,aG as M,w as u,O as T,aH as _,J as m,aI as $,A as c,B as F,aJ as f,aK as j,aL as z,ae as V,S as G,R as B,as as J,aM as R,ah as q,a8 as K,E as O,aw as U,V as w,aN as P,I as Q}from"./vendor.8c394501.js";const W={class:"list-page"},X=c("\u590D\u5236"),Y=c("\u7ACB\u5373\u4E0B\u8F7D"),Z={key:0,class:"loading"},ee=c("\u52A0\u8F7D\u4E2D "),se=S({setup(ae){const C=t=>{U(()=>{const s=document.createElement("button"),i=new I(s,{text:()=>t,action:()=>"copy"});i.on("success",l=>{window.$message.success("\u590D\u5236\u6210\u529F"),i.destroy()}),i.on("error",l=>{window.$message.error("\u590D\u5236\u5931\u8D25\uFF0C\u60A8\u53EF\u4EE5F12\u6253\u5F00\u63A7\u5236\u53F0\u624B\u52A8\u590D\u5236\uFF0C\u6216\u624B\u52A8\u590D\u5236\u5F39\u7A97\u8F93\u5165\u6846")}),s.click()})},d=r(),x=async()=>{v.get("https://api-drive.mypikpak.com/vip/v1/activity/inviteCode").then(t=>{var s;d.value=(s=t.data)==null?void 0:s.code})},n=r();H(()=>n.value.invited_nums<=0);const N=r({vip_rebate:"\u4F1A\u5458\u5206\u6210",invite_reward:"\u9080\u8BF7\u5956\u52B1",relation:"\u9080\u8BF7\u5173\u7CFB"}),A=async()=>{v.get("https://api-drive.mypikpak.com/vip/v1/activity/inviteInfo").then(t=>{n.value=t.data}).catch(()=>{n.value={}})},D=r([{title:"\u9080\u8BF7\u7528\u6237",key:"invited_user"},{title:"\u5956\u52B1\u7C7B\u578B",key:"reward_source",render:t=>w(P,{type:t.reward_source=="vip_rebate"?"info":"success"},{default:()=>N.value[t.reward_source]})},{title:"\u5929\u6570",key:"reward_days"},{title:"\u65F6\u95F4",key:"time",align:"right",render:t=>w(Q,{time:new Date(String(t.time)||""),format:"yyyy-MM-dd HH:MM:ss"})}]),o=r([]),p=r(!1),y=async(t,s=30)=>{let i="https://api-drive.mypikpak.com/vip/v1/activity/inviteList";t&&(i+=`?begin=${t}&limit=${s}`),p.value=!0,v.get(i).then(l=>{var k;t||(o.value=[]),o.value=o.value.concat(((k=l.data)==null?void 0:k.data)||[])}).finally(()=>{p.value=!1})},b=()=>{v.get(`https://api-drive.mypikpak.com/package/v1/apk/url/${d.value}`).then(t=>{window.open(t.data.apk_url)})},E=t=>{t.target.offsetHeight+t.target.scrollTop>=t.target.scrollHeight-30&&o.value.length<n.value.invited_nums&&!p.value&&y(o.value[o.value.length-1].time)};return L(()=>{x(),A(),y()}),(t,s)=>(h(),g("div",W,[e(a(M),null,{default:u(()=>[e(a(_),{span:12},{default:u(()=>{var i;return[e(a(f),{label:"\u4F1A\u5458\u5206\u6210(\u5929/\u6B21)",value:(i=n.value)==null?void 0:i.invited_join_days},{prefix:u(()=>[e(a(m),null,{default:u(()=>[e(a($))]),_:1})]),suffix:u(()=>{var l;return[c("/ "+F((l=n.value)==null?void 0:l.join_vip_nums),1)]}),_:1},8,["value"])]}),_:1}),e(a(_),{span:12},{default:u(()=>{var i;return[e(a(f),{label:"\u9080\u8BF7\u5956\u52B1(\u5929/\u4EBA)",value:(i=n.value)==null?void 0:i.add_days},{prefix:u(()=>[e(a(m),null,{default:u(()=>[e(a(j))]),_:1})]),suffix:u(()=>{var l;return[c("/ "+F((l=n.value)==null?void 0:l.invited_nums),1)]}),_:1},8,["value"])]}),_:1}),e(a(_),{span:12},{default:u(()=>[e(a(f),{label:"\u9080\u8BF7\u94FE\u63A5"},{prefix:u(()=>[e(a(m),null,{default:u(()=>[e(a(z))]),_:1})]),default:u(()=>[e(a(V),{inline:""},{default:u(()=>[e(a(G),{type:"text",size:"small",value:"https://toapp.mypikpak.com/activity/invited?code="+d.value},null,8,["value"]),e(a(B),{size:"small",type:"primary",onClick:s[0]||(s[0]=i=>C("https://toapp.mypikpak.com/activity/invited?code="+d.value))},{default:u(()=>[X]),_:1})]),_:1}),e(a(J))]),_:1})]),_:1}),e(a(_),{span:12},{default:u(()=>[e(a(f),{label:"\u4E0B\u8F7D\u63A8\u5E7F"},{prefix:u(()=>[e(a(m),null,{default:u(()=>[e(a(R))]),_:1})]),default:u(()=>[e(a(B),{size:"small",type:"primary",onClick:b},{default:u(()=>[Y]),_:1})]),_:1})]),_:1})]),_:1}),e(a(T),{style:{"max-height":"calc(100vh - 250px)"},onScroll:E},{default:u(()=>[e(a(q),{data:o.value,columns:D.value},null,8,["data","columns"]),p.value?(h(),g("div",Z,[e(a(K),{size:"small"}),ee])):O("",!0)]),_:1})]))}});export{se as default};