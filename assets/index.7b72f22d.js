var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as I,u as me,r as f,o as K,a as Y,b as v,c as G,w as c,e as i,f as s,N as ge,g as he,h as fe,z as ve,i as _e,j as ke,k as Z,l as ye,m as we,n as Ee,p as be,q as Fe,s as y,t as xe,v as Ne,x as De,y as w,A as C,B as Be,C as Ie,D as N,E as _,F as X,G as Ce,H as Se,I as S,L as $e,J as Q,K as Ae,M as Le,O as Pe,P as Oe,Q as Te,R as Re,S as je,T as Ve,U as q,V as Me,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ye,a1 as Ge,a2 as Ze,a3 as Xe}from"./vendor.d0fde776.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};Qe();const qe=I({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://mysecpikpak-cf.finexyz.shop"],tt=I({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,n)=>{const a=Y("router-view");return v(),G(s(ke),{locale:s(ve),"date-locale":s(_e),"theme-overrides":t.value},{default:c(()=>[i(s(fe),null,{default:c(()=>[i(s(ge),null,{default:c(()=>[i(s(he),null,{default:c(()=>[i(qe),i(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},at="",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${at}${n}`,n in ee)return;ee[n]=!0;const a=n.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":ot,a||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),a)return new Promise((F,g)=>{l.addEventListener("load",F),l.addEventListener("error",g)})})).then(()=>t())};var st="assets/logo1.08eb9157.png";const m=Z.create({});let b=!1;window.localStorage.setItem("timestamp",""+new Date().valueOf());m.interceptors.request.use(e=>{var o;if(((o=e.url)==null?void 0:o.indexOf("http://localhost"))===0)return e.headers=e.headers||{},e.method=="post"?e.headers["Content-Type"]="application/json":e.headers["Content-Type"]="text/plain",e;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),e});m.interceptors.response.use(e=>e,e=>{var n;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const a=window.localStorage.getItem("pikpakLoginData"),r=a?JSON.parse(a):{};return r.username&&r.password&&!b?(console.log("wait",o.url),b=!0,JSON.parse(window.localStorage.getItem("pikpakClient")||"{}"),m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),b=!1,m(o))).catch(()=>(D.push("/login"),!1))):r.username&&r.password&&b?new Promise((l,F)=>{const g=setInterval(()=>{b||(clearInterval(g),l(m(o)))},100)}):(D.push("/login?redirect="+D.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((n=t==null?void 0:t.data)==null?void 0:n.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=Z.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let n=Math.floor(o/10);return e=e/Math.pow(2,10*n),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[n]};const it=_("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[_("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),_("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},lt=w("\u4F1A\u5458\u7801"),ut={style:{"margin-bottom":"0"}},ct=_("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),pt=w(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),dt={class:"bottom-user-info"},mt={key:0,src:st,class:"user-info-avatar"},gt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},ht={class:"user-info-name"},ft={key:0},vt={class:"action"},_t=w(" \u9000\u51FA\u767B\u5F55 "),kt=w("\u6DFB\u52A0"),yt=I({setup(e){const t=f(!1),o=u=>()=>q(S,null,{default:()=>q(u)}),n=ye(),a=we(),r=f([{label:"\u6587\u4EF6",key:"list",icon:o(Ke)},{label:"\u641C\u7D22",key:"search",icon:o(Me)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u9080\u8BF7",key:"invited",icon:o(He)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(We)}]),l=f(),F=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},g=f(),$=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{g.value=u.data}).catch(u=>{console.log(u)})},k=f(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var p;k.value=(p=u.data)==null?void 0:p.data})},ae=(u,p)=>{console.log(p),n.push("/"+p.key)};K(()=>{F(),$(),oe()});const x=f(),E=f(!1),se=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:x.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),$()}).catch(u=>{console.log(u)}).finally(()=>{E.value=!1})},A=f(!1),ne=u=>{A.value=u<800,t.value||(t.value=u<800)};Ee(a,()=>{A.value&&(t.value=!0)});const ie=be(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),n.push("/login")}).catch(u=>{console.log(u)})}})};return(u,p)=>{const le=Y("router-view"),ue=Fe("resize");return v(),y(Ve,null,[xe(i(s(Q),{"has-sider":"",onResize:ne},{default:c(()=>[i(s(Ne),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=h=>t.value=!0),onExpand:p[2]||(p[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,L,P,O,T,R,j,V,M,z,J;return[it,i(s(De),{options:r.value,value:String(s(a).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?N("",!0):(v(),y("div",rt,[w(C(s(te)((h=g.value)==null?void 0:h.quota.usage))+" / "+C(s(te)((L=g.value)==null?void 0:L.quota.limit))+" ",1),i(s(Be),{type:"primary",onClick:p[0]||(p[0]=bt=>E.value=!0)},{default:c(()=>[lt]),_:1}),((P=g.value)==null?void 0:P.quota)?(v(),G(s(Ie),{key:0,type:"line",percentage:Number((((O=g.value)==null?void 0:O.quota.usage)/((T=g.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=k.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):N("",!0),_("p",ut,[i(s(X),{placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[pt]),_:1})])])),t.value?N("",!0):(v(),y("div",{key:1,class:Ce(["sider-bottom",{vip:((j=k.value)==null?void 0:j.status)==="ok"}])},[_("div",dt,[((V=k.value)==null?void 0:V.status)==="ok"?(v(),y("img",mt)):(v(),y("img",gt)),_("div",ht,[w(C((M=l.value)==null?void 0:M.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",ft,[i(s(Se),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):N("",!0)]),_("div",vt,[i(s(X),null,{trigger:c(()=>[i(s(S),{onClick:re},{default:c(()=>[i(s($e))]),_:1})]),default:c(()=>[_t]),_:1})])])],2))]}),_:1},8,["collapsed"]),i(s(Q),null,{default:c(()=>[i(s(Ae),{style:{height:"100vh"}},{default:c(()=>[i(s(Le),{style:{"max-height":"100vh"}},{default:c(()=>[i(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),i(s(je),{show:E.value,"onUpdate:show":p[5]||(p[5]=h=>E.value=h)},{default:c(()=>[i(s(Pe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[i(s(S),{onClick:p[3]||(p[3]=h=>E.value=!1)},{default:c(()=>[i(s(Oe))]),_:1})]),action:c(()=>[i(s(Te),{block:!0,type:"primary",disabled:!x.value,onClick:se},{default:c(()=>[kt]),_:1},8,["disabled"])]),default:c(()=>[i(s(Re),{placeholder:"\u4F1A\u5458\u7801",value:x.value,"onUpdate:value":p[4]||(p[4]=h=>x.value=h)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:yt,redirect:"/list",beforeEnter:(e,t,o)=>{const n=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!n||!n.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.aff4bb9c.js"),["assets/list.aff4bb9c.js","assets/list.f9003be0.css","assets/vendor.d0fde776.js","assets/clipboard.9a625c30.js"])},{path:"search",name:"search",component:()=>d(()=>import("./search.a48e14e4.js"),["assets/search.a48e14e4.js","assets/search.8cfb6c91.css","assets/vendor.d0fde776.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.aff4bb9c.js"),["assets/list.aff4bb9c.js","assets/list.f9003be0.css","assets/vendor.d0fde776.js","assets/clipboard.9a625c30.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.aff4bb9c.js"),["assets/list.aff4bb9c.js","assets/list.f9003be0.css","assets/vendor.d0fde776.js","assets/clipboard.9a625c30.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.3673bffb.js"),["assets/trash.3673bffb.js","assets/trash.99a3677d.css","assets/vendor.d0fde776.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.21801335.js"),["assets/setting.21801335.js","assets/setting.f947579c.css","assets/vendor.d0fde776.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.94547497.js"),["assets/invited.94547497.js","assets/invited.74b24e1e.css","assets/clipboard.9a625c30.js","assets/vendor.d0fde776.js"])}]},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.beb36952.js"),["assets/shareInfo.beb36952.js","assets/shareInfo.678356c6.css","assets/vendor.d0fde776.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.6a68e522.js"),["assets/login.6a68e522.js","assets/login.a8b45006.css","assets/vendor.d0fde776.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.4b869bed.js"),["assets/sms.4b869bed.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.d0fde776.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.2b52453c.js"),["assets/register.2b52453c.js","assets/register.5588ce76.css","assets/vendor.d0fde776.js","assets/phone-pc2.dbf6d71e.js"])}],Et=Ye({history:Ge(),routes:wt});var D=Et;const B=Ze(tt);B.directive("resize",{mounted(e,t,o){e.$$erd=Xe({strategy:"scroll"}),e.$$erd.listenTo({},e,n=>{let a=n.offsetWidth,r=n.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(a,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});B.config.globalProperties.$http=m;B.use(D);B.mount("#app");export{te as b,m as i,et as p};
