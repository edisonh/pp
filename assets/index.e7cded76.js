var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as I,u as me,r as f,o as K,a as Y,b as v,c as G,w as c,e as r,f as n,N as ge,g as he,h as fe,z as ve,i as _e,j as ke,k as Z,l as ye,m as we,n as Ee,p as xe,q as Fe,s as y,t as Ne,v as Be,x as be,y as w,A as C,B as De,C as Ie,D as B,E as _,F as X,G as Ce,H as $e,I as $,L as Ae,J as Q,K as Se,M as Le,O as Pe,P as Oe,Q as Te,R as Re,S as Me,T as Ve,U as q,V as je,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ye,a1 as Ge,a2 as Ze}from"./vendor.b7de2019.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};Xe();const Qe=I({setup(e){return window.$message=me(),(t,o)=>null}}),qe=["https://mysecpikpak-cf.finexyz.shop"],et=I({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(qe))}),(o,s)=>{const a=Y("router-view");return v(),G(n(ke),{locale:n(ve),"date-locale":n(_e),"theme-overrides":t.value},{default:c(()=>[r(n(fe),null,{default:c(()=>[r(n(ge),null,{default:c(()=>[r(n(he),null,{default:c(()=>[r(Qe),r(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),tt="modulepreload",ee={},ot="",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${ot}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":tt,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((F,m)=>{l.addEventListener("load",F),l.addEventListener("error",m)})})).then(()=>t())};var at="assets/logo1.08eb9157.png";const p=Z.create({});p.interceptors.request.use(e=>{var o,s;if(((o=e.url)==null?void 0:o.indexOf("http://localhost"))===0)return e.headers=e.headers||{},e.headers["Content-Type"]="text/plain",e;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((s=e.url)==null?void 0:s.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const i=Math.floor(Math.random()*a.length);e.url=a[i]+"/"+e.url}}return e});let x=!1;p.interceptors.response.use(e=>e,e=>{var s;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const a=window.localStorage.getItem("pikpakLoginData"),i=a?JSON.parse(a):{};return i.username&&i.password&&!x?(console.log("wait",o.url),x=!0,p.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),x=!1,p(o))).catch(()=>(b.push("/login"),!1))):i.username&&i.password&&x?new Promise((l,F)=>{const m=setInterval(()=>{x||(clearInterval(m),l(p(o)))},100)}):(b.push("/login?redirect="+b.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const st=Z.create({});st.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const nt=_("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[_("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),_("div",{class:"logo-box__text"},"PikPak")],-1),it={key:0,class:"content-bottom"},rt=w("\u4F1A\u5458\u7801"),lt={style:{"margin-bottom":"0"}},ut=_("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),ct=w(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),dt={class:"bottom-user-info"},pt={key:0,src:at,class:"user-info-avatar"},mt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},gt={class:"user-info-name"},ht={key:0},ft={class:"action"},vt=w(" \u9000\u51FA\u767B\u5F55 "),_t=w("\u6DFB\u52A0"),kt=I({setup(e){const t=f(!1),o=u=>()=>q($,null,{default:()=>q(u)}),s=ye(),a=we(),i=f([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(je)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),l=f(),F=()=>{p.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},m=f(),A=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{m.value=u.data}).catch(u=>{console.log(u)})},k=f(),oe=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var d;k.value=(d=u.data)==null?void 0:d.data})},ae=(u,d)=>{console.log(d),s.push("/"+d.key)};K(()=>{F(),A(),oe()});const N=f(),E=f(!1),se=()=>{p.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:N.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),A()}).catch(u=>{console.log(u)}).finally(()=>{E.value=!1})},S=f(!1),ne=u=>{S.value=u<800,t.value||(t.value=u<800)};Ee(a,()=>{S.value&&(t.value=!0)});const ie=xe(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{p.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(u=>{console.log(u)})}})};return(u,d)=>{const le=Y("router-view"),ue=Fe("resize");return v(),y(Ve,null,[Ne(r(n(Q),{"has-sider":"",onResize:ne},{default:c(()=>[r(n(Be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=h=>t.value=!0),onExpand:d[2]||(d[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,L,P,O,T,R,M,V,j,z,J;return[nt,r(n(be),{options:i.value,value:String(n(a).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?B("",!0):(v(),y("div",it,[w(C(n(te)((h=m.value)==null?void 0:h.quota.usage))+" / "+C(n(te)((L=m.value)==null?void 0:L.quota.limit))+" ",1),r(n(De),{type:"primary",onClick:d[0]||(d[0]=Et=>E.value=!0)},{default:c(()=>[rt]),_:1}),((P=m.value)==null?void 0:P.quota)?(v(),G(n(Ie),{key:0,type:"line",percentage:Number((((O=m.value)==null?void 0:O.quota.usage)/((T=m.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=k.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):B("",!0),_("p",lt,[r(n(X),{placement:"right"},{trigger:c(()=>[ut]),default:c(()=>[ct]),_:1})])])),t.value?B("",!0):(v(),y("div",{key:1,class:Ce(["sider-bottom",{vip:((M=k.value)==null?void 0:M.status)==="ok"}])},[_("div",dt,[((V=k.value)==null?void 0:V.status)==="ok"?(v(),y("img",pt)):(v(),y("img",mt)),_("div",gt,[w(C((j=l.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",ht,[r(n($e),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):B("",!0)]),_("div",ft,[r(n(X),null,{trigger:c(()=>[r(n($),{onClick:re},{default:c(()=>[r(n(Ae))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),r(n(Q),null,{default:c(()=>[r(n(Se),{style:{height:"100vh"}},{default:c(()=>[r(n(Le),{style:{"max-height":"100vh"}},{default:c(()=>[r(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),r(n(Me),{show:E.value,"onUpdate:show":d[5]||(d[5]=h=>E.value=h)},{default:c(()=>[r(n(Pe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[r(n($),{onClick:d[3]||(d[3]=h=>E.value=!1)},{default:c(()=>[r(n(Oe))]),_:1})]),action:c(()=>[r(n(Te),{block:!0,type:"primary",disabled:!N.value,onClick:se},{default:c(()=>[_t]),_:1},8,["disabled"])]),default:c(()=>[r(n(Re),{placeholder:"\u4F1A\u5458\u7801",value:N.value,"onUpdate:value":d[4]||(d[4]=h=>N.value=h)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),yt=[{path:"/",name:"home",component:kt,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>g(()=>import("./list.12993ed6.js"),["assets/list.12993ed6.js","assets/list.f9003be0.css","assets/vendor.b7de2019.js","assets/clipboard.4478cb5e.js"])},{path:"video",name:"video",component:()=>g(()=>import("./list.12993ed6.js"),["assets/list.12993ed6.js","assets/list.f9003be0.css","assets/vendor.b7de2019.js","assets/clipboard.4478cb5e.js"])},{path:"image",name:"image",component:()=>g(()=>import("./list.12993ed6.js"),["assets/list.12993ed6.js","assets/list.f9003be0.css","assets/vendor.b7de2019.js","assets/clipboard.4478cb5e.js"])},{path:"trash",name:"trash",component:()=>g(()=>import("./trash.f1111c7f.js"),["assets/trash.f1111c7f.js","assets/trash.99a3677d.css","assets/vendor.b7de2019.js"])},{path:"setting",name:"setting",component:()=>g(()=>import("./setting.4c0ebb5f.js"),["assets/setting.4c0ebb5f.js","assets/setting.f947579c.css","assets/vendor.b7de2019.js"])},{path:"invited",name:"invited",component:()=>g(()=>import("./invited.167ae105.js"),["assets/invited.167ae105.js","assets/invited.74b24e1e.css","assets/clipboard.4478cb5e.js","assets/vendor.b7de2019.js"])}]},{path:"/s/:id/:password?",name:"shareInfo",component:()=>g(()=>import("./shareInfo.74ad61f7.js"),["assets/shareInfo.74ad61f7.js","assets/shareInfo.678356c6.css","assets/vendor.b7de2019.js"])},{path:"/login",name:"login",component:()=>g(()=>import("./login.9b24c402.js"),["assets/login.9b24c402.js","assets/login.a8b45006.css","assets/vendor.b7de2019.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>g(()=>import("./sms.438489d4.js"),["assets/sms.438489d4.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.b7de2019.js"])},{path:"/register",name:"register",component:()=>g(()=>import("./register.0ea0c03d.js"),["assets/register.0ea0c03d.js","assets/register.5588ce76.css","assets/vendor.b7de2019.js","assets/phone-pc2.dbf6d71e.js"])}],wt=Ke({history:Ye(),routes:yt});var b=wt;const D=Ge(et);D.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,i=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(a,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});D.config.globalProperties.$http=p;D.use(b);D.mount("#app");export{te as b,p as i,qe as p};
