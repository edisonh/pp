var ue=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var W=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&W(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&W(e,o,t[o]);return e};import{d as O,u as me,r as v,o as H,a as Y,b as _,c as K,w as u,e as l,f as r,N as he,g as ge,h as fe,z as ve,i as _e,j as ke,k as Z,m as ye,l as we,n as xe,p as Ie,q as Ee,s as Ne,t as w,v as Ce,x as Se,y as Fe,A as x,B as b,C as De,D as Oe,E as S,F as k,G,H as be,I as Pe,J as P,L as Be,K as Q,M as Le,O as Te,P as Ae,Q as $e,R as Ve,S as Re,T as Me,U as Xe,V as q,W as je,X as Je,Y as ze,Z as Ue,_ as We,$ as He,a0 as Ye,a1 as Ke,a2 as Ze,a3 as Ge,a4 as Qe}from"./vendor.8c394501.js";const qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};qe();const et=O({setup(e){return window.$message=me(),(t,o)=>null}}),tt=["https://mysecpikpak-cf.finexyz.shop"],ot=O({setup(e){const t=v({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return H(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(tt))}),(o,s)=>{const a=Y("router-view");return _(),K(r(ke),{locale:r(ve),"date-locale":r(_e),"theme-overrides":t.value},{default:u(()=>[l(r(fe),null,{default:u(()=>[l(r(he),null,{default:u(()=>[l(r(ge),null,{default:u(()=>[l(et),l(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),at="modulepreload",ee={},st="",h=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${st}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":at,a||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),a)return new Promise((g,m)=>{n.addEventListener("load",g),n.addEventListener("error",m)})})).then(()=>t())};var nt="assets/logo1.08eb9157.png";const p=Z.create({});let E=!1;window.localStorage.setItem("timestamp",""+new Date().valueOf());p.interceptors.request.use(e=>{var t;return((t=e.url)==null?void 0:t.indexOf("http://localhost"))===0&&(e.headers=e.headers||{},e.method=="post"?e.headers["Content-Type"]="application/json":e.headers["Content-Type"]="text/plain"),e});p.interceptors.request.use(async e=>{var t;if(((t=e.url)==null?void 0:t.indexOf("https://",4))<0){const o=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(o.length>0){const s=Math.floor(Math.random()*o.length);e.url=o[s]+"/"+e.url}}return e});p.interceptors.request.use(async e=>{var s;if(((s=e.url)==null?void 0:s.indexOf("/v1/shield/captcha/init"))<0)return e;const t=JSON.parse(window.localStorage.getItem("pikpakClient")||"{}");if(!t.clientId)return e;const o={"X-Client-Id":t.clientId,"X-Client-Version":"1.0.0","X-Device-Id":t.deviceId,"X-Device-Model":"chrome%2F114.0.0.0","X-Device-Name":"PC-Chrome","X-Device-Sign":"wdi10."+t.deviceId+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","X-Net-Work-Type":"NONE","X-Os-Version":"MacIntel","X-Platform-Version":1,"X-Protocol-Version":301,"X-Provider-Name":"NONE","X-Sdk-Version":"6.0.0"};return e.headers=e.headers||{},e.headers=C(C({},e.headers),o),e});p.interceptors.request.use(async e=>{var t;if(((t=e.url)==null?void 0:t.indexOf("/v1/shield/captcha/init"))<0&&e.url.indexOf("/v1/auth/signin")<0){const o=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");e.headers=e.headers||{},o.access_token&&(e.headers.Authorization=`${o.token_type||"Bearer"} ${o.access_token}`);const s=JSON.parse(window.localStorage.getItem("pikpakClient")||"{}");e.headers["X-Device-Id"]=s.deviceId}return e});p.interceptors.request.use(async e=>{var i,n;if(!e.url||((i=e.url)==null?void 0:i.indexOf("/v1/shield/captcha/init"))>=0)return e;const t=/https:\/\/.*\.mypikpak\.com(\/.*)/.exec(e.url),o=t?t[1]:"",s=((n=e.method)==null?void 0:n.toUpperCase())+":"+o,a=await rt(s);if(!a)throw"Fetch captcha token error";return e.headers=e.headers||{},e.headers["X-Captcha-Token"]=a,e});p.interceptors.response.use(e=>e,e=>{var s;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const a=window.localStorage.getItem("pikpakLoginData"),i=a?JSON.parse(a):{};return i.username&&i.password&&!E?(console.log("wait",o.url),E=!0,p.post("https://user.mypikpak.com/v1/auth/signin",C({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(n=>(n.data&&n.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(n.data)),E=!1,p(o))).catch(()=>(F.push("/login"),!1))):i.username&&i.password&&E?new Promise((n,g)=>{const m=setInterval(()=>{E||(clearInterval(m),n(p(o)))},100)}):(F.push("/login?redirect="+F.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const it=Z.create({});it.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});async function rt(e){const t=JSON.parse(window.localStorage.getItem("pikpakClient")||"{}"),o=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");if(!t.clientId)return null;const s={},a={action:e,client_id:t.clientId,device_id:t.deviceId,meta:s};if(e=="POST:/v1/auth/signin")a.meta.email=o.username||"";else{const n=window.localStorage.getItem("last_captcha_token");if(!n)throw{response:{status:401},message:"No captcha token",config:{url:"fk"}};const g=window.localStorage.getItem("timestamp")||"",{sub:m}=JSON.parse(window.localStorage.getItem("pikpakLogin")||'{sub: ""}');a.captcha_token=n,a.meta={captcha_sign:lt(t.clientId,t.clientVersion,t.packageName,t.deviceId,g),client_version:t.clientVersion,package_name:t.packageName,timestamp:g,user_id:m}}const i=await p.post("https://user.mypikpak.com/v1/shield/captcha/init",a);if(i&&i.data&&i.data.captcha_token){const n=i.data.captcha_token;return window.localStorage.setItem("captcha_token_"+e,n),window.localStorage.setItem("last_captcha_token",n),n}return null}function lt(e,t,o,s,a){return[{alg:"md5",salt:"C9qPpZLN8ucRTaTiUMWYS9cQvWOE"},{alg:"md5",salt:"+r6CQVxjzJV6LCV"},{alg:"md5",salt:"F"},{alg:"md5",salt:"pFJRC"},{alg:"md5",salt:"9WXYIDGrwTCz2OiVlgZa90qpECPD6olt"},{alg:"md5",salt:"/750aCr4lm/Sly/c"},{alg:"md5",salt:"RB+DT/gZCrbV"},{alg:"md5",salt:""},{alg:"md5",salt:"CyLsf7hdkIRxRm215hl"},{alg:"md5",salt:"7xHvLi2tOYP0Y92b"},{alg:"md5",salt:"ZGTXXxu8E/MIWaEDB+Sm/"},{alg:"md5",salt:"1UI3"},{alg:"md5",salt:"E7fP5Pfijd+7K+t6Tg/NhuLq0eEUVChpJSkrKxpO"},{alg:"md5",salt:"ihtqpG6FMt65+Xk+tWUH2"},{alg:"md5",salt:"NhXXU9rg4XXdzo7u5o"}].reduce((n,g)=>({salt:ye(n.salt+g.salt)}),{salt:e+t+o+s+a}).salt}const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const ct=k("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[k("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),k("div",{class:"logo-box__text"},"PikPak")],-1),ut={key:0,class:"content-bottom"},dt=x("\u4F1A\u5458\u7801"),pt={style:{"margin-bottom":"0"}},mt=k("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),ht=x(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),gt={class:"bottom-user-info"},ft={key:0,src:nt,class:"user-info-avatar"},vt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},_t={class:"user-info-name"},kt={key:0},yt={class:"action"},wt=x(" \u9000\u51FA\u767B\u5F55 "),xt=x("\u6DFB\u52A0"),It=O({setup(e){const t=v(!1),o=c=>()=>q(P,null,{default:()=>q(c)}),s=we(),a=xe(),i=v([{label:"\u6587\u4EF6",key:"list",icon:o(Ye)},{label:"\u641C\u7D22",key:"search",icon:o(je)},{label:"\u89C6\u9891",key:"video",icon:o(Je)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u9080\u8BF7",key:"invited",icon:o(We)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),n=v(),g=()=>{p.get("https://user.mypikpak.com/v1/user/me").then(c=>{window.localStorage.setItem("pikpakUser",JSON.stringify(c.data)),n.value=c.data}).catch(c=>{console.log(c)})},m=v(),B=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/about").then(c=>{m.value=c.data}).catch(c=>{console.log(c)})},y=v(),oe=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(c=>{var d;y.value=(d=c.data)==null?void 0:d.data})},ae=(c,d)=>{console.log(d),s.push("/"+d.key)};H(()=>{g(),B(),oe()});const N=v(),I=v(!1),se=()=>{p.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:N.value,data:{}}).then(c=>{window.$message.success("\u5151\u6362\u6210\u529F"),B()}).catch(c=>{console.log(c)}).finally(()=>{I.value=!1})},L=v(!1),ne=c=>{L.value=c<800,t.value||(t.value=c<800)};Ie(a,()=>{L.value&&(t.value=!0)});const ie=Ee(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{p.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(c=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(c=>{console.log(c)})}})};return(c,d)=>{const le=Y("router-view"),ce=Ne("resize");return _(),w(Xe,null,[Ce(l(r(Q),{"has-sider":"",onResize:ne},{default:u(()=>[l(r(Se),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=f=>t.value=!0),onExpand:d[2]||(d[2]=f=>t.value=!1),bordered:""},{default:u(()=>{var f,T,A,$,V,R,M,X,j,J,z;return[ct,l(r(Fe),{options:i.value,value:String(r(a).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?S("",!0):(_(),w("div",ut,[x(b(r(te)((f=m.value)==null?void 0:f.quota.usage))+" / "+b(r(te)((T=m.value)==null?void 0:T.quota.limit))+" ",1),l(r(De),{type:"primary",onClick:d[0]||(d[0]=Ct=>I.value=!0)},{default:u(()=>[dt]),_:1}),((A=m.value)==null?void 0:A.quota)?(_(),K(r(Oe),{key:0,type:"line",percentage:Number(((($=m.value)==null?void 0:$.quota.usage)/((V=m.value)==null?void 0:V.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=y.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):S("",!0),k("p",pt,[l(r(G),{placement:"right"},{trigger:u(()=>[mt]),default:u(()=>[ht]),_:1})])])),t.value?S("",!0):(_(),w("div",{key:1,class:be(["sider-bottom",{vip:((M=y.value)==null?void 0:M.status)==="ok"}])},[k("div",gt,[((X=y.value)==null?void 0:X.status)==="ok"?(_(),w("img",ft)):(_(),w("img",vt)),k("div",_t,[x(b((j=n.value)==null?void 0:j.name)+" ",1),((J=y.value)==null?void 0:J.status)==="ok"&&((z=y.value)==null?void 0:z.expire)?(_(),w("div",kt,[l(r(Pe),{time:new Date(y.value.expire),type:"datetime"},null,8,["time"])])):S("",!0)]),k("div",yt,[l(r(G),null,{trigger:u(()=>[l(r(P),{onClick:re},{default:u(()=>[l(r(Be))]),_:1})]),default:u(()=>[wt]),_:1})])])],2))]}),_:1},8,["collapsed"]),l(r(Q),null,{default:u(()=>[l(r(Le),{style:{height:"100vh"}},{default:u(()=>[l(r(Te),{style:{"max-height":"100vh"}},{default:u(()=>[l(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ce]]),l(r(Me),{show:I.value,"onUpdate:show":d[5]||(d[5]=f=>I.value=f)},{default:u(()=>[l(r(Ae),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":u(()=>[l(r(P),{onClick:d[3]||(d[3]=f=>I.value=!1)},{default:u(()=>[l(r($e))]),_:1})]),action:u(()=>[l(r(Ve),{block:!0,type:"primary",disabled:!N.value,onClick:se},{default:u(()=>[xt]),_:1},8,["disabled"])]),default:u(()=>[l(r(Re),{placeholder:"\u4F1A\u5458\u7801",value:N.value,"onUpdate:value":d[4]||(d[4]=f=>N.value=f)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),Et=[{path:"/",name:"home",component:It,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>h(()=>import("./list.db30ada2.js"),["assets/list.db30ada2.js","assets/list.f9003be0.css","assets/vendor.8c394501.js","assets/clipboard.c7552457.js"])},{path:"search",name:"search",component:()=>h(()=>import("./search.2115fec4.js"),["assets/search.2115fec4.js","assets/search.8cfb6c91.css","assets/vendor.8c394501.js"])},{path:"video",name:"video",component:()=>h(()=>import("./list.db30ada2.js"),["assets/list.db30ada2.js","assets/list.f9003be0.css","assets/vendor.8c394501.js","assets/clipboard.c7552457.js"])},{path:"image",name:"image",component:()=>h(()=>import("./list.db30ada2.js"),["assets/list.db30ada2.js","assets/list.f9003be0.css","assets/vendor.8c394501.js","assets/clipboard.c7552457.js"])},{path:"trash",name:"trash",component:()=>h(()=>import("./trash.5aa52b2b.js"),["assets/trash.5aa52b2b.js","assets/trash.99a3677d.css","assets/vendor.8c394501.js"])},{path:"setting",name:"setting",component:()=>h(()=>import("./setting.9e4c1237.js"),["assets/setting.9e4c1237.js","assets/setting.f947579c.css","assets/vendor.8c394501.js"])},{path:"invited",name:"invited",component:()=>h(()=>import("./invited.8e3928e3.js"),["assets/invited.8e3928e3.js","assets/invited.74b24e1e.css","assets/clipboard.c7552457.js","assets/vendor.8c394501.js"])}]},{path:"/s/:id/:password?",name:"shareInfo",component:()=>h(()=>import("./shareInfo.e0c780ec.js"),["assets/shareInfo.e0c780ec.js","assets/shareInfo.678356c6.css","assets/vendor.8c394501.js"])},{path:"/login",name:"login",component:()=>h(()=>import("./login.8392d14a.js"),["assets/login.8392d14a.js","assets/login.a8b45006.css","assets/vendor.8c394501.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>h(()=>import("./sms.c0dd498f.js"),["assets/sms.c0dd498f.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.8c394501.js"])},{path:"/register",name:"register",component:()=>h(()=>import("./register.b549c366.js"),["assets/register.b549c366.js","assets/register.5588ce76.css","assets/vendor.8c394501.js","assets/phone-pc2.dbf6d71e.js"])}],Nt=Ke({history:Ze(),routes:Et});var F=Nt;const D=Ge(ot);D.directive("resize",{mounted(e,t,o){e.$$erd=Qe({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,i=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var n;(n=o.props)==null||n.onResize(a,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});D.config.globalProperties.$http=p;D.use(F);D.mount("#app");export{te as b,p as i,tt as p};
