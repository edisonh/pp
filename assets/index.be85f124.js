var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as B,u as me,r as f,o as K,a as Y,b as v,c as Z,w as c,e as r,f as n,N as he,g as ge,h as fe,z as _e,i as ve,j as ke,k as G,l as ye,m as we,n as Ee,p as Fe,q as xe,s as w,t as be,v as Ne,x as Ie,y as E,A as C,B as De,C as Be,D as N,E as k,F as X,G as Ce,H as Se,I as S,L as Ae,J as Q,K as $e,M as Le,O as Pe,P as Oe,Q as Te,R as Re,S as je,T as Ve,U as q,V as Me,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ye,a1 as Ze,a2 as Ge,a3 as Xe}from"./vendor.d0fde776.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};Qe();const qe=B({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://mysecpikpak-cf.finexyz.shop"],tt=B({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,s)=>{const a=Y("router-view");return v(),Z(n(ke),{locale:n(_e),"date-locale":n(ve),"theme-overrides":t.value},{default:c(()=>[r(n(fe),null,{default:c(()=>[r(n(he),null,{default:c(()=>[r(n(ge),null,{default:c(()=>[r(qe),r(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},at="",p=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${at}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":ot,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((_,h)=>{u.addEventListener("load",_),u.addEventListener("error",h)})})).then(()=>t())};var st="assets/logo1.08eb9157.png";const m=G.create({});let x=!1;window.localStorage.setItem("timestamp",""+new Date().valueOf());m.interceptors.request.use(e=>{var o,s;if(((o=e.url)==null?void 0:o.indexOf("http://localhost"))===0)return e.headers=e.headers||{},e.method=="post"?e.headers["Content-Type"]="application/json":e.headers["Content-Type"]="text/plain",e;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((s=e.url)==null?void 0:s.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const i=Math.floor(Math.random()*a.length);e.url=a[i]+"/"+e.url}}return e});m.interceptors.response.use(e=>e,e=>{var s;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const a=window.localStorage.getItem("pikpakLoginData"),i=a?JSON.parse(a):{};if(i.username&&i.password&&!x){console.log("wait",o.url),x=!0;const u=JSON.parse(window.localStorage.getItem("pikpakClient")||"{}");return m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_secret:"dbw2OtmVEeuUvIptb1Coyg",client_id:u.clientId},i)).then(_=>(_.data&&_.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(_.data)),x=!1,m(o))).catch(()=>(I.push("/login"),!1))}else return i.username&&i.password&&x?new Promise((u,_)=>{const h=setInterval(()=>{x||(clearInterval(h),u(m(o)))},100)}):(I.push("/login?redirect="+I.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=G.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const it=k("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[k("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),k("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},lt=E("\u4F1A\u5458\u7801"),ut={style:{"margin-bottom":"0"}},ct=k("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),dt=E(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),pt={class:"bottom-user-info"},mt={key:0,src:st,class:"user-info-avatar"},ht={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},gt={class:"user-info-name"},ft={key:0},_t={class:"action"},vt=E(" \u9000\u51FA\u767B\u5F55 "),kt=E("\u6DFB\u52A0"),yt=B({setup(e){const t=f(!1),o=l=>()=>q(S,null,{default:()=>q(l)}),s=ye(),a=we(),i=f([{label:"\u6587\u4EF6",key:"list",icon:o(Ke)},{label:"\u641C\u7D22",key:"search",icon:o(Me)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u9080\u8BF7",key:"invited",icon:o(He)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(We)}]),u=f(),_=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},h=f(),A=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{h.value=l.data}).catch(l=>{console.log(l)})},y=f(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var d;y.value=(d=l.data)==null?void 0:d.data})},ae=(l,d)=>{console.log(d),s.push("/"+d.key)};K(()=>{_(),A(),oe()});const b=f(),F=f(!1),se=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:b.value,data:{}}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),A()}).catch(l=>{console.log(l)}).finally(()=>{F.value=!1})},$=f(!1),ne=l=>{$.value=l<800,t.value||(t.value=l<800)};Ee(a,()=>{$.value&&(t.value=!0)});const ie=Fe(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(l=>{console.log(l)})}})};return(l,d)=>{const le=Y("router-view"),ue=xe("resize");return v(),w(Ve,null,[be(r(n(Q),{"has-sider":"",onResize:ne},{default:c(()=>[r(n(Ne),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=g=>t.value=!0),onExpand:d[2]||(d[2]=g=>t.value=!1),bordered:""},{default:c(()=>{var g,L,P,O,T,R,j,V,M,z,J;return[it,r(n(Ie),{options:i.value,value:String(n(a).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?N("",!0):(v(),w("div",rt,[E(C(n(te)((g=h.value)==null?void 0:g.quota.usage))+" / "+C(n(te)((L=h.value)==null?void 0:L.quota.limit))+" ",1),r(n(De),{type:"primary",onClick:d[0]||(d[0]=Ft=>F.value=!0)},{default:c(()=>[lt]),_:1}),((P=h.value)==null?void 0:P.quota)?(v(),Z(n(Be),{key:0,type:"line",percentage:Number((((O=h.value)==null?void 0:O.quota.usage)/((T=h.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=y.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):N("",!0),k("p",ut,[r(n(X),{placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[dt]),_:1})])])),t.value?N("",!0):(v(),w("div",{key:1,class:Ce(["sider-bottom",{vip:((j=y.value)==null?void 0:j.status)==="ok"}])},[k("div",pt,[((V=y.value)==null?void 0:V.status)==="ok"?(v(),w("img",mt)):(v(),w("img",ht)),k("div",gt,[E(C((M=u.value)==null?void 0:M.name)+" ",1),((z=y.value)==null?void 0:z.status)==="ok"&&((J=y.value)==null?void 0:J.expire)?(v(),w("div",ft,[r(n(Se),{time:new Date(y.value.expire),type:"datetime"},null,8,["time"])])):N("",!0)]),k("div",_t,[r(n(X),null,{trigger:c(()=>[r(n(S),{onClick:re},{default:c(()=>[r(n(Ae))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),r(n(Q),null,{default:c(()=>[r(n($e),{style:{height:"100vh"}},{default:c(()=>[r(n(Le),{style:{"max-height":"100vh"}},{default:c(()=>[r(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),r(n(je),{show:F.value,"onUpdate:show":d[5]||(d[5]=g=>F.value=g)},{default:c(()=>[r(n(Pe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[r(n(S),{onClick:d[3]||(d[3]=g=>F.value=!1)},{default:c(()=>[r(n(Oe))]),_:1})]),action:c(()=>[r(n(Te),{block:!0,type:"primary",disabled:!b.value,onClick:se},{default:c(()=>[kt]),_:1},8,["disabled"])]),default:c(()=>[r(n(Re),{placeholder:"\u4F1A\u5458\u7801",value:b.value,"onUpdate:value":d[4]||(d[4]=g=>b.value=g)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:yt,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>p(()=>import("./list.7bfe44bd.js"),["assets/list.7bfe44bd.js","assets/list.f9003be0.css","assets/vendor.d0fde776.js","assets/clipboard.9a625c30.js"])},{path:"search",name:"search",component:()=>p(()=>import("./search.195977f3.js"),["assets/search.195977f3.js","assets/search.8cfb6c91.css","assets/vendor.d0fde776.js"])},{path:"video",name:"video",component:()=>p(()=>import("./list.7bfe44bd.js"),["assets/list.7bfe44bd.js","assets/list.f9003be0.css","assets/vendor.d0fde776.js","assets/clipboard.9a625c30.js"])},{path:"image",name:"image",component:()=>p(()=>import("./list.7bfe44bd.js"),["assets/list.7bfe44bd.js","assets/list.f9003be0.css","assets/vendor.d0fde776.js","assets/clipboard.9a625c30.js"])},{path:"trash",name:"trash",component:()=>p(()=>import("./trash.6b8a09df.js"),["assets/trash.6b8a09df.js","assets/trash.99a3677d.css","assets/vendor.d0fde776.js"])},{path:"setting",name:"setting",component:()=>p(()=>import("./setting.329dd8fe.js"),["assets/setting.329dd8fe.js","assets/setting.f947579c.css","assets/vendor.d0fde776.js"])},{path:"invited",name:"invited",component:()=>p(()=>import("./invited.ea1773de.js"),["assets/invited.ea1773de.js","assets/invited.74b24e1e.css","assets/clipboard.9a625c30.js","assets/vendor.d0fde776.js"])}]},{path:"/s/:id/:password?",name:"shareInfo",component:()=>p(()=>import("./shareInfo.7a259cdb.js"),["assets/shareInfo.7a259cdb.js","assets/shareInfo.678356c6.css","assets/vendor.d0fde776.js"])},{path:"/login",name:"login",component:()=>p(()=>import("./login.7daa1df5.js"),["assets/login.7daa1df5.js","assets/login.a8b45006.css","assets/vendor.d0fde776.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>p(()=>import("./sms.0ab1545c.js"),["assets/sms.0ab1545c.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.d0fde776.js"])},{path:"/register",name:"register",component:()=>p(()=>import("./register.da65319a.js"),["assets/register.da65319a.js","assets/register.5588ce76.css","assets/vendor.d0fde776.js","assets/phone-pc2.dbf6d71e.js"])}],Et=Ye({history:Ze(),routes:wt});var I=Et;const D=Ge(tt);D.directive("resize",{mounted(e,t,o){e.$$erd=Xe({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,i=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(a,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});D.config.globalProperties.$http=m;D.use(I);D.mount("#app");export{te as b,m as i,et as p};
