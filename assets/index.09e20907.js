var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as I,u as me,r as g,o as K,a as Y,b as _,c as G,w as c,e as r,f as n,N as he,g as fe,h as ge,z as _e,i as ve,j as ke,k as Z,l as ye,m as we,n as Ee,p as xe,q as Fe,s as y,t as Ne,v as be,x as Be,y as w,A as C,B as De,C as Ie,D as b,E as v,F as X,G as Ce,H as Ae,I as A,L as Se,J as Q,K as $e,M as Le,O as Pe,P as Oe,Q as Te,R as Re,S as je,T as Me,U as q,V as Ve,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ye,a1 as Ge,a2 as Ze,a3 as Xe}from"./vendor.54f6d311.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};Qe();const qe=I({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://mysecpikpak-cf.finexyz.shop"],tt=I({setup(e){const t=g({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,s)=>{const a=Y("router-view");return _(),G(n(ke),{locale:n(_e),"date-locale":n(ve),"theme-overrides":t.value},{default:c(()=>[r(n(ge),null,{default:c(()=>[r(n(he),null,{default:c(()=>[r(n(fe),null,{default:c(()=>[r(qe),r(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},at="",p=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${at}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":ot,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((F,h)=>{l.addEventListener("load",F),l.addEventListener("error",h)})})).then(()=>t())};var st="assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o,s;if(((o=e.url)==null?void 0:o.indexOf("http://localhost"))===0)return e.headers=e.headers||{},e.method=="post"?e.headers["Content-Type"]="application/json":e.headers["Content-Type"]="text/plain",e;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((s=e.url)==null?void 0:s.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const i=Math.floor(Math.random()*a.length);e.url=a[i]+"/"+e.url}}return e});let x=!1;m.interceptors.response.use(e=>e,e=>{var s;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const a=window.localStorage.getItem("pikpakLoginData"),i=a?JSON.parse(a):{};return i.username&&i.password&&!x?(console.log("wait",o.url),x=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),x=!1,m(o))).catch(()=>(B.push("/login"),!1))):i.username&&i.password&&x?new Promise((l,F)=>{const h=setInterval(()=>{x||(clearInterval(h),l(m(o)))},100)}):(B.push("/login?redirect="+B.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=Z.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const it=v("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[v("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),v("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},lt=w("\u4F1A\u5458\u7801"),ut={style:{"margin-bottom":"0"}},ct=v("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),dt=w(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),pt={class:"bottom-user-info"},mt={key:0,src:st,class:"user-info-avatar"},ht={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},ft={class:"user-info-name"},gt={key:0},_t={class:"action"},vt=w(" \u9000\u51FA\u767B\u5F55 "),kt=w("\u6DFB\u52A0"),yt=I({setup(e){const t=g(!1),o=u=>()=>q(A,null,{default:()=>q(u)}),s=ye(),a=we(),i=g([{label:"\u6587\u4EF6",key:"list",icon:o(Ke)},{label:"\u641C\u7D22",key:"search",icon:o(Ve)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u9080\u8BF7",key:"invited",icon:o(He)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(We)}]),l=g(),F=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},h=g(),S=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{h.value=u.data}).catch(u=>{console.log(u)})},k=g(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var d;k.value=(d=u.data)==null?void 0:d.data})},ae=(u,d)=>{console.log(d),s.push("/"+d.key)};K(()=>{F(),S(),oe()});const N=g(),E=g(!1),se=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:N.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),S()}).catch(u=>{console.log(u)}).finally(()=>{E.value=!1})},$=g(!1),ne=u=>{$.value=u<800,t.value||(t.value=u<800)};Ee(a,()=>{$.value&&(t.value=!0)});const ie=xe(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(u=>{console.log(u)})}})};return(u,d)=>{const le=Y("router-view"),ue=Fe("resize");return _(),y(Me,null,[Ne(r(n(Q),{"has-sider":"",onResize:ne},{default:c(()=>[r(n(be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=f=>t.value=!0),onExpand:d[2]||(d[2]=f=>t.value=!1),bordered:""},{default:c(()=>{var f,L,P,O,T,R,j,M,V,z,J;return[it,r(n(Be),{options:i.value,value:String(n(a).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?b("",!0):(_(),y("div",rt,[w(C(n(te)((f=h.value)==null?void 0:f.quota.usage))+" / "+C(n(te)((L=h.value)==null?void 0:L.quota.limit))+" ",1),r(n(De),{type:"primary",onClick:d[0]||(d[0]=xt=>E.value=!0)},{default:c(()=>[lt]),_:1}),((P=h.value)==null?void 0:P.quota)?(_(),G(n(Ie),{key:0,type:"line",percentage:Number((((O=h.value)==null?void 0:O.quota.usage)/((T=h.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=k.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):b("",!0),v("p",ut,[r(n(X),{placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[dt]),_:1})])])),t.value?b("",!0):(_(),y("div",{key:1,class:Ce(["sider-bottom",{vip:((j=k.value)==null?void 0:j.status)==="ok"}])},[v("div",pt,[((M=k.value)==null?void 0:M.status)==="ok"?(_(),y("img",mt)):(_(),y("img",ht)),v("div",ft,[w(C((V=l.value)==null?void 0:V.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(_(),y("div",gt,[r(n(Ae),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):b("",!0)]),v("div",_t,[r(n(X),null,{trigger:c(()=>[r(n(A),{onClick:re},{default:c(()=>[r(n(Se))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),r(n(Q),null,{default:c(()=>[r(n($e),{style:{height:"100vh"}},{default:c(()=>[r(n(Le),{style:{"max-height":"100vh"}},{default:c(()=>[r(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),r(n(je),{show:E.value,"onUpdate:show":d[5]||(d[5]=f=>E.value=f)},{default:c(()=>[r(n(Pe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[r(n(A),{onClick:d[3]||(d[3]=f=>E.value=!1)},{default:c(()=>[r(n(Oe))]),_:1})]),action:c(()=>[r(n(Te),{block:!0,type:"primary",disabled:!N.value,onClick:se},{default:c(()=>[kt]),_:1},8,["disabled"])]),default:c(()=>[r(n(Re),{placeholder:"\u4F1A\u5458\u7801",value:N.value,"onUpdate:value":d[4]||(d[4]=f=>N.value=f)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:yt,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>p(()=>import("./list.fb76390f.js"),["assets/list.fb76390f.js","assets/list.f9003be0.css","assets/vendor.54f6d311.js","assets/clipboard.8f8e3e88.js"])},{path:"search",name:"search",component:()=>p(()=>import("./search.162e2650.js"),["assets/search.162e2650.js","assets/search.8cfb6c91.css","assets/vendor.54f6d311.js"])},{path:"video",name:"video",component:()=>p(()=>import("./list.fb76390f.js"),["assets/list.fb76390f.js","assets/list.f9003be0.css","assets/vendor.54f6d311.js","assets/clipboard.8f8e3e88.js"])},{path:"image",name:"image",component:()=>p(()=>import("./list.fb76390f.js"),["assets/list.fb76390f.js","assets/list.f9003be0.css","assets/vendor.54f6d311.js","assets/clipboard.8f8e3e88.js"])},{path:"trash",name:"trash",component:()=>p(()=>import("./trash.795322ec.js"),["assets/trash.795322ec.js","assets/trash.99a3677d.css","assets/vendor.54f6d311.js"])},{path:"setting",name:"setting",component:()=>p(()=>import("./setting.92049cba.js"),["assets/setting.92049cba.js","assets/setting.f947579c.css","assets/vendor.54f6d311.js"])},{path:"invited",name:"invited",component:()=>p(()=>import("./invited.4b71d4e2.js"),["assets/invited.4b71d4e2.js","assets/invited.74b24e1e.css","assets/clipboard.8f8e3e88.js","assets/vendor.54f6d311.js"])}]},{path:"/s/:id/:password?",name:"shareInfo",component:()=>p(()=>import("./shareInfo.fcb061c7.js"),["assets/shareInfo.fcb061c7.js","assets/shareInfo.678356c6.css","assets/vendor.54f6d311.js"])},{path:"/login",name:"login",component:()=>p(()=>import("./login.2e50762d.js"),["assets/login.2e50762d.js","assets/login.a8b45006.css","assets/vendor.54f6d311.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>p(()=>import("./sms.562071fd.js"),["assets/sms.562071fd.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.54f6d311.js"])},{path:"/register",name:"register",component:()=>p(()=>import("./register.8bcc2824.js"),["assets/register.8bcc2824.js","assets/register.5588ce76.css","assets/vendor.54f6d311.js","assets/phone-pc2.dbf6d71e.js"])}],Et=Ye({history:Ge(),routes:wt});var B=Et;const D=Ze(tt);D.directive("resize",{mounted(e,t,o){e.$$erd=Xe({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,i=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(a,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});D.config.globalProperties.$http=m;D.use(B);D.mount("#app");export{te as b,m as i,et as p};
