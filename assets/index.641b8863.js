var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var Y=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,O=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&Y(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&Y(e,o,t[o]);return e};import{d as F,u as ge,r as f,o as W,a as X,b as B,c as G,w as c,e as r,f as i,N as me,g as he,h as ve,z as fe,i as Ae,j as ke,k as M,l as Be,m as we,n as Ne,p as _e,q as be,s as b,t as Ce,v as Ee,x as De,y as N,A as S,B as ye,C as Oe,D as C,E as A,F as q,G as Fe,H as Se,I as x,L as xe,J as Z,K as Ie,M as Pe,O as Le,P as Qe,Q as je,R as Je,S as Te,T as ze,U as $,V as Ve,W as Re,X as He,Y as Ke,Z as Ue,_ as Ye,$ as We,a0 as Xe,a1 as Ge,a2 as Me,a3 as qe}from"./vendor.b04d76c4.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};Ze();const $e=F({setup(e){return window.$message=ge(),(t,o)=>null}}),et=["https://mysecpikpak-cf.goodcnxyz.shop"],tt=F({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return W(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,s)=>{const a=X("router-view");return B(),G(i(ke),{locale:i(fe),"date-locale":i(Ae),"theme-overrides":t.value},{default:c(()=>[r(i(ve),null,{default:c(()=>[r(i(me),null,{default:c(()=>[r(i(he),null,{default:c(()=>[r($e),r(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},at="",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${at}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":ot,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((E,m)=>{l.addEventListener("load",E),l.addEventListener("error",m)})})).then(()=>t())};var st="data:image/png;base64,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",it="assets/logo1.08eb9157.png";const p=M.create({});let h=!1;window.localStorage.setItem("timestamp",""+new Date().valueOf());p.interceptors.request.use(e=>{var o,s;if(((o=e.url)==null?void 0:o.indexOf("http://localhost"))===0)return e.headers=e.headers||{},e.method=="post"?e.headers["Content-Type"]="application/json":e.headers["Content-Type"]="text/plain",e;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((s=e.url)==null?void 0:s.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const n=Math.floor(Math.random()*a.length);e.url=a[n]+"/"+e.url}}return e});p.interceptors.response.use(e=>{if(e&&e.data){const t=e.data;if((t==null?void 0:t.error)=="unauthenticated"){const o=window.localStorage.getItem("pikpakLoginData"),s=o?JSON.parse(o):{};if(s.username&&s.password&&!h)h=!0,JSON.parse(window.localStorage.getItem("pikpakClient")||"{}"),p.post("https://user.mypikpak.com/v1/auth/signin",O({client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(a=>{a.data&&a.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(a.data)),h=!1}).catch(()=>(w.push("/login"),!1));else if(s.username&&s.password&&h){const a=setInterval(()=>{h||clearInterval(a)},100)}else w.push("/login?redirect="+w.currentRoute.value.fullPath)}}return e},e=>{var s;const{response:t,config:o}=e;if(t&&t.status)switch(t.status){case 401:console.log(1);const a=window.localStorage.getItem("pikpakLoginData"),n=a?JSON.parse(a):{};return n.username&&n.password&&!h?(console.log("wait",o.url),h=!0,JSON.parse(window.localStorage.getItem("pikpakClient")||"{}"),p.post("https://user.mypikpak.com/v1/auth/signin",O({client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},n)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),h=!1,p(o))).catch(()=>(w.push("/login"),!1))):n.username&&n.password&&h?new Promise((l,E)=>{const m=setInterval(()=>{h||(clearInterval(m),l(p(o)))},100)}):(w.push("/login?redirect="+w.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=M.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const rt=A("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[A("img",{src:st,class:"logo-box__icon",alt:""}),A("div",{class:"logo-box__text"},"PikPak")],-1),lt={key:0,class:"content-bottom"},ut=N("\u4F1A\u5458\u7801"),ct={style:{"margin-bottom":"0"}},dt=A("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),pt=N(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),gt={class:"bottom-user-info"},mt={key:0,src:it,class:"user-info-avatar"},ht={class:"user-info-name"},vt={key:0},ft={class:"action"},At=N(" \u9000\u51FA\u767B\u5F55 "),kt=N("\u6DFB\u52A0"),Bt=F({setup(e){const t=f(!1),o=u=>()=>$(x,null,{default:()=>$(u)}),s=Be(),a=we(),n=f([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u641C\u7D22",key:"search",icon:o(Ve)},{label:"\u89C6\u9891",key:"video",icon:o(Re)},{label:"\u56FE\u7247",key:"image",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ke)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ye)}]),l=f(),E=()=>{p.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},m=f(),I=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{m.value=u.data}).catch(u=>{console.log(u)})},k=f(),oe=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var d;k.value=(d=u.data)==null?void 0:d.data})},ae=(u,d)=>{console.log(d),s.push("/"+d.key)};W(()=>{E(),I(),oe()});const D=f(),_=f(!1),se=()=>{p.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:D.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),I()}).catch(u=>{console.log(u)}).finally(()=>{_.value=!1})},P=f(!1),ie=u=>{P.value=u<800,t.value||(t.value=u<800)};Ne(a,()=>{P.value&&(t.value=!0)});const ne=_e(),re=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{p.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(u=>{console.log(u)})}})};return(u,d)=>{const le=X("router-view"),ue=be("resize");return B(),b(ze,null,[Ce(r(i(Z),{"has-sider":"",onResize:ie},{default:c(()=>[r(i(Ee),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=v=>t.value=!0),onExpand:d[2]||(d[2]=v=>t.value=!1),bordered:""},{default:c(()=>{var v,L,Q,j,J,T,z,V,R,H,K;return[rt,r(i(De),{options:n.value,value:String(i(a).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?C("",!0):(B(),b("div",lt,[N(S(i(te)((v=m.value)==null?void 0:v.quota.usage))+" / "+S(i(te)((L=m.value)==null?void 0:L.quota.limit))+" ",1),r(i(ye),{type:"primary",onClick:d[0]||(d[0]=_t=>_.value=!0)},{default:c(()=>[ut]),_:1}),((Q=m.value)==null?void 0:Q.quota)?(B(),G(i(Oe),{key:0,type:"line",percentage:Number((((j=m.value)==null?void 0:j.quota.usage)/((J=m.value)==null?void 0:J.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((T=k.value)==null?void 0:T.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):C("",!0),A("p",ct,[r(i(q),{placement:"right"},{trigger:c(()=>[dt]),default:c(()=>[pt]),_:1})])])),t.value?C("",!0):(B(),b("div",{key:1,class:Fe(["sider-bottom",{vip:((z=k.value)==null?void 0:z.status)==="ok"}])},[A("div",gt,[((V=k.value)==null?void 0:V.status)==="ok"?(B(),b("img",mt)):C("",!0),A("div",ht,[N(S((R=l.value)==null?void 0:R.name)+" ",1),((H=k.value)==null?void 0:H.status)==="ok"&&((K=k.value)==null?void 0:K.expire)?(B(),b("div",vt,[r(i(Se),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):C("",!0)]),A("div",ft,[r(i(q),null,{trigger:c(()=>[r(i(x),{onClick:re},{default:c(()=>[r(i(xe))]),_:1})]),default:c(()=>[At]),_:1})])])],2))]}),_:1},8,["collapsed"]),r(i(Z),null,{default:c(()=>[r(i(Ie),{style:{height:"100vh"}},{default:c(()=>[r(i(Pe),{style:{"max-height":"100vh"}},{default:c(()=>[r(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),r(i(Te),{show:_.value,"onUpdate:show":d[5]||(d[5]=v=>_.value=v)},{default:c(()=>[r(i(Le),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[r(i(x),{onClick:d[3]||(d[3]=v=>_.value=!1)},{default:c(()=>[r(i(Qe))]),_:1})]),action:c(()=>[r(i(je),{block:!0,type:"primary",disabled:!D.value,onClick:se},{default:c(()=>[kt]),_:1},8,["disabled"])]),default:c(()=>[r(i(Je),{placeholder:"\u4F1A\u5458\u7801",value:D.value,"onUpdate:value":d[4]||(d[4]=v=>D.value=v)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:Bt,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>g(()=>import("./list.d02ea2a5.js"),["assets/list.d02ea2a5.js","assets/list.f9003be0.css","assets/vendor.b04d76c4.js","assets/clipboard.f0451f71.js"])},{path:"search",name:"search",component:()=>g(()=>import("./search.dc443c57.js"),["assets/search.dc443c57.js","assets/search.8cfb6c91.css","assets/vendor.b04d76c4.js"])},{path:"video",name:"video",component:()=>g(()=>import("./list.d02ea2a5.js"),["assets/list.d02ea2a5.js","assets/list.f9003be0.css","assets/vendor.b04d76c4.js","assets/clipboard.f0451f71.js"])},{path:"image",name:"image",component:()=>g(()=>import("./list.d02ea2a5.js"),["assets/list.d02ea2a5.js","assets/list.f9003be0.css","assets/vendor.b04d76c4.js","assets/clipboard.f0451f71.js"])},{path:"trash",name:"trash",component:()=>g(()=>import("./trash.aef28d92.js"),["assets/trash.aef28d92.js","assets/trash.99a3677d.css","assets/vendor.b04d76c4.js"])},{path:"setting",name:"setting",component:()=>g(()=>import("./setting.809676c3.js"),["assets/setting.809676c3.js","assets/setting.f947579c.css","assets/vendor.b04d76c4.js"])},{path:"invited",name:"invited",component:()=>g(()=>import("./invited.882bff7c.js"),["assets/invited.882bff7c.js","assets/invited.74b24e1e.css","assets/clipboard.f0451f71.js","assets/vendor.b04d76c4.js"])}]},{path:"/s/:id/:password?",name:"shareInfo",component:()=>g(()=>import("./shareInfo.ea0d93bf.js"),["assets/shareInfo.ea0d93bf.js","assets/shareInfo.678356c6.css","assets/vendor.b04d76c4.js"])},{path:"/login",name:"login",component:()=>g(()=>import("./login.7c23c059.js"),["assets/login.7c23c059.js","assets/login.a8b45006.css","assets/vendor.b04d76c4.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>g(()=>import("./sms.6c0481c0.js"),["assets/sms.6c0481c0.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.b04d76c4.js"])},{path:"/register",name:"register",component:()=>g(()=>import("./register.fa6e41d4.js"),["assets/register.fa6e41d4.js","assets/register.5588ce76.css","assets/vendor.b04d76c4.js","assets/phone-pc2.dbf6d71e.js"])}],Nt=Xe({history:Ge(),routes:wt});var w=Nt;const y=Me(tt);y.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,n=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(a,n)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});y.config.globalProperties.$http=p;y.use(w);y.mount("#app");export{te as b,p as i,et as p};
