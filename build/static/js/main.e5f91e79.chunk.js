(this["webpackJsonpfit-app"]=this["webpackJsonpfit-app"]||[]).push([[0],{102:function(e,t,a){},131:function(e,t){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),c=(a(102),a(83)),i=a(82),u=a(6),s=a(9),m=a(28),f=a(185),g=Object(n.createContext)(),d=function(e){var t=e.reducer,a=e.initialState,r=e.children;return l.a.createElement(g.Provider,{value:Object(n.useReducer)(t,a)},r)},b=function(){return Object(n.useContext)(g)},p=["cognitive","emotional","physical","financial","spiritual"],E=a(179),h=a(190),v=a(189),j=a(184),O=a(188),w=a(183),y=Object(E.a)((function(e){return{questionContainer:{margin:"30px 0 50px","& .MuiFormLabel-root.Mui-focused":{color:"rgba(0, 0, 0, 0.54)"}},question:{fontWeight:700,display:"block",paddingBottom:15}}})),S=function(e){var t=e.text,a=e.reverse,r=e.subdimension,o=e.dimension,c=e.index,i=e.totalQs,u=e.setCanContinue,f=y(),g=b(),d=Object(s.a)(g,2),p=d[0].answers,E=d[1],S=Object(n.useState)(0),C=Object(s.a)(S,2),x=C[0],I=C[1],k=function(e){var t,a=Object(m.a)({},p);a[o][r][c]=e,E({answers:a}),(t=a[o][r]).length!==i||t.includes(void 0)||u(!0)};return Object(n.useEffect)((function(){I(0)}),[r,o]),l.a.createElement("div",{className:f.questionContainer},l.a.createElement(h.a,{component:"fieldset"},l.a.createElement(w.a,{component:"legend",className:f.question},t),l.a.createElement(v.a,{row:!0,"aria-label":"Marital Status",name:"marital",value:x,onChange:function(e){if(e.target.value){var t=e.target.value;"skip"!==e.target.value&&(t=parseInt(e.target.value)),I(t),k(t)}}},l.a.createElement(j.a,{labelPlacement:"top",value:a?5:1,control:l.a.createElement(O.a,null),label:"1"}),l.a.createElement(j.a,{labelPlacement:"top",value:a?4:2,control:l.a.createElement(O.a,null),label:"2"}),l.a.createElement(j.a,{labelPlacement:"top",value:3,control:l.a.createElement(O.a,null),label:"3"}),l.a.createElement(j.a,{labelPlacement:"top",value:a?2:4,control:l.a.createElement(O.a,null),label:"4"}),l.a.createElement(j.a,{labelPlacement:"top",value:a?1:5,control:l.a.createElement(O.a,null),label:"5"}),l.a.createElement("strong",{style:{margin:20,marginBottom:0,fontStyle:"italic"}},"  or  "),l.a.createElement(j.a,{labelPlacement:"top",value:"skip",control:l.a.createElement(O.a,null),label:"I prefer not to answer"}))))},C=a(186),x=(window&&window.location&&window.location.hostname).includes("fitexperience")?"http://results.thefitexperience.com":"http://localhost:8888/fit-backend",I=Object(u.f)((function(e){var t=e.history,a=e.currentDimensionIndex,r=e.setCurrentDimensionIndex,o=b(),c=Object(s.a)(o,1)[0].answers,i=p[a],u=Object(n.useState)(null),g=Object(s.a)(u,2),d=g[0],E=g[1],h=Object(n.useState)(0),v=Object(s.a)(h,2),j=v[0],O=v[1],w=Object(n.useState)(!1),y=Object(s.a)(w,2),I=y[0],k=y[1],q=Object(n.useState)(!0),M=Object(s.a)(q,2),F=M[0],P=M[1];Object(n.useEffect)((function(){N()}),[i]);var N=function(){P(!0);var e="".concat(x,"/wp-json/wp/v2/").concat(i,"?orderby=menu_order&order=asc");fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){P(!1),console.log(e),O(0),E(e),t(e)})).catch((function(e){P(!1),console.log(e)}));var t=function(e){var t=Object(m.a)({},c);e.forEach((function(e){t[i][e.slug]=[]}))}};return d?l.a.createElement("div",null,F?l.a.createElement("div",null,l.a.createElement("h2",null,"Loading"),l.a.createElement(f.a,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{fontStyle:"italic",fontSize:12}},"There are no right or wrong answers so please answer these candidly.\xa0 Please rate how true the following statements are for you on a scale of 1-5:"),l.a.createElement("p",{style:{fontStyle:"italic",fontSize:12,textAlign:"center"}},l.a.createElement("b",null,"1")," = absolutely untrue; ",l.a.createElement("b",null,"2")," = Mostly untrue; ",l.a.createElement("b",null,"3")," = neither true nor untrue; ",l.a.createElement("b",null,"4")," = Mostly true; ",l.a.createElement("b",null,"5")," = absolutely true"),d[j].acf.questions.map((function(e,t){return l.a.createElement(S,{dimension:i,subdimension:d[j].slug,key:t,index:t,reverse:e.reverse_sort,text:e.question,totalQs:d[j].acf.questions.length,setCanContinue:k})})),l.a.createElement("div",{style:{marginTop:20}},l.a.createElement(C.a,{variant:"contained",disabled:!I,onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),k(!1),d.length>j+1?O(j+1):p.length>a+1?r(a+1):t.push("/results")}},"Continue")))):l.a.createElement(l.a.Fragment,null,F?l.a.createElement("div",null,l.a.createElement("h2",null,"Loading"),l.a.createElement(f.a,null)):null)})),k=a(74),q=a.n(k),M=a(75),F=a.n(M),P=a(76),N=a.n(P),B=a(77),T=a.n(B),D=a(78),L=a.n(D),R=Object(E.a)((function(){return{progressWrapper:{display:"block",textAlign:"center"},progressSegment:{display:"inline-block",width:"17%",margin:"0 1%",height:5,"& img":{filter:"grayscale(1)",opacity:.4,width:70}},cog:{"& img":{filter:"none",opacity:1}},emo:{"& img":{filter:"none",opacity:1}},phy:{"& img":{filter:"none",opacity:1}},fin:{"& img":{filter:"none",opacity:1}},spi:{"& img":{filter:"none",opacity:1}}}})),A=function(e){var t=e.currentDimensionIndex,a=R();return console.log(a.dimColors),l.a.createElement("div",{className:a.progressWrapper},p.map((function(e,n){return l.a.createElement("div",{key:n,className:"".concat(a.progressSegment,"\n                    ").concat(0===n&&t>=n?a.cog:1===n&&t>=n?a.emo:2===n&&t>=n?a.phy:3===n&&t>=n?a.fin:4===n&&t>=n?a.spi:"")},0===n&&l.a.createElement("img",{src:q.a,alt:"dimension logo"}),1===n&&l.a.createElement("img",{src:F.a,alt:"dimension logo"}),2===n&&l.a.createElement("img",{src:N.a,alt:"dimension logo"}),3===n&&l.a.createElement("img",{src:T.a,alt:"dimension logo"}),4===n&&l.a.createElement("img",{src:L.a,alt:"dimension logo"}))})))},W=Object(u.f)((function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{currentDimensionIndex:a}),l.a.createElement(I,{currentDimensionIndex:a,setCurrentDimensionIndex:r}))})),z=Object(u.f)((function(e){var t=e.history,a=b(),r=Object(s.a)(a,1)[0],o=r.answers,c=r.name,i=r.email,u=r.age,m=r.income,g=r.weight,d=r.height,p=r.gender,E=r.occupation,h=r.marital,v=function(e){var t=e.reduce((function(e,t){return parseInt(e)+parseInt(t)}))/e.length;return parseFloat(t.toFixed(2))};return Object(n.useEffect)((function(){var e,a,n,l=!1;if(Object.keys(o).forEach((function(e){Object.entries(o[e]).length>0&&(l=!0)})),l){var r=function(e){console.log(e);var t={},a=[];for(var n in e){var l=[];for(var r in e[n]){var o=e[n][r].filter((function(e){return"skip"!==e}));if(o.length){var c="".concat(n.substr(0,1),"-").concat(r),i=4*v(o);t[c]=i,l.push(i),a.push(i)}}l.length&&(t["t-".concat(n,"-score")]=v(l))}return t["t-overall-score"]=v(a),console.log(t),t}(o);n=r,[{participant:c},{email:i},{age:u},{income:m},{weight:g},{height:d},{gender:p},{occupation:E},{marital:h}].forEach((function(e){var t=Object.keys(e)[0];""!==e[t]&&(n[t]=e[t])})),(r=n)&&(r.nodupe=(e=1,a=999999,Math.floor(Math.random()*(a-e))+e),window.location="".concat(x,"/results?").concat(function(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")}(r)))}else t.push("/")}),[]),l.a.createElement(f.a,null)})),G=a(79),H=a.n(G),J=a(80),Q=a.n(J),U=function(){return l.a.createElement("div",{id:"header"},l.a.createElement("img",{id:"logo",src:Q.a,alt:"FIT Logo"}))},Z=Object(u.f)((function(e){var t=e.history,a=Object(n.useState)(!1),r=Object(s.a)(a,2),o=r[0],c=r[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],g=u[1];return Object(n.useEffect)((function(){!function(){c(!0);var e="".concat(x,"/wp-json/wp/v2/pages/116");fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){c(!1),g(e.content.rendered)})).catch((function(e){c(!1),console.log(e)}))}()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null),o?l.a.createElement("div",null,l.a.createElement("h2",null,"Loading"),l.a.createElement(f.a,null)):l.a.createElement(l.a.Fragment,null,H()(m),l.a.createElement(C.a,{variant:"contained",onClick:function(){t.push("/your-info")}},"Begin!")))})),$=a(81),_=a(187),Y=a(150),K=Object(E.a)((function(){return{form:{"& .MuiFormControl-root":{width:"45%",marginRight:"5%",marginBottom:20,"@media(max-width:480px)":{width:"100%"}}}}})),V=Object(u.f)((function(e){var t=e.history,a=K(),r=b(),o=Object(s.a)(r,2);Object($.a)(o[0]);var c=o[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1],g=Object(n.useState)(""),d=Object(s.a)(g,2),p=d[0],E=d[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),x=S[0],I=S[1],k=Object(n.useState)(""),q=Object(s.a)(k,2),M=q[0],F=q[1],P=Object(n.useState)(""),N=Object(s.a)(P,2),B=N[0],T=N[1],D=Object(n.useState)(""),L=Object(s.a)(D,2),R=L[0],A=L[1],W=Object(n.useState)(""),z=Object(s.a)(W,2),G=z[0],H=z[1],J=Object(n.useState)(!1),Q=Object(s.a)(J,2),U=Q[0],Z=Q[1],V=Object(n.useState)(!1),X=Object(s.a)(V,2),ee=X[0],te=X[1],ae=Object(n.useState)("female"),ne=Object(s.a)(ae,2),le=ne[0],re=ne[1],oe=Object(n.useState)("student"),ce=Object(s.a)(oe,2),ie=ce[0],ue=ce[1],se=Object(n.useState)("single"),me=Object(s.a)(se,2),fe=me[0],ge=me[1],de=Object(n.useRef)(null),be=Object(n.useRef)(null);return l.a.createElement("form",{className:a.form,onSubmit:function(e){if(e.preventDefault(),ee||U)return console.log("erre"),H("Please fix the highlighted field(s) above"),ee&&de.current&&de.current.focus(),void(U&&be.current&&be.current.focus());c({name:m,email:p,age:x,income:M,weight:B,height:R,gender:le,occupation:ie,marital:fe}),t.push("/assessment")}},l.a.createElement("h1",null,"Your info"),l.a.createElement("div",{className:a.formControl},l.a.createElement(_.a,{variant:"outlined",required:!0,ref:de,label:"Name",error:ee,value:m,onChange:function(e){return f(e.target.value)},onBlur:function(){te(""===m)}}),l.a.createElement(_.a,{variant:"outlined",required:!0,ref:be,label:"Email",error:U,helperText:U?"Invalid entry.":"",value:p,onChange:function(e){return E(e.target.value)},onBlur:function(){Z(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p))}})),l.a.createElement(h.a,{component:"fieldset"},l.a.createElement(w.a,{component:"legend"},"Gender"),l.a.createElement(v.a,{"aria-label":"gender",name:"gender1",value:le,onChange:function(e){return re(e.target.value)}},l.a.createElement(j.a,{value:"female",control:l.a.createElement(O.a,null),label:"Female"}),l.a.createElement(j.a,{value:"male",control:l.a.createElement(O.a,null),label:"Male"}),l.a.createElement(j.a,{value:"no-answer",control:l.a.createElement(O.a,null),label:"I prefer not to answer"}))),l.a.createElement("div",{className:a.formControl},l.a.createElement(_.a,{variant:"outlined",label:"Age (optional)",value:x,onChange:function(e){return I(e.target.value)}}),l.a.createElement(_.a,{variant:"outlined",label:"Annual Household Income (optional)",value:M,onChange:function(e){return F(e.target.value)}})),l.a.createElement("div",{className:a.formControl},l.a.createElement(_.a,{variant:"outlined",label:"Height (optional)",value:R,onChange:function(e){return A(e.target.value)}}),l.a.createElement(_.a,{variant:"outlined",label:"Weight (optional)",value:B,onChange:function(e){return T(e.target.value)}})),l.a.createElement("div",{className:a.formControl},l.a.createElement("br",null),l.a.createElement(h.a,{component:"fieldset"},l.a.createElement(w.a,{component:"legend"},"Occupation"),l.a.createElement(v.a,{"aria-label":"Occupation",name:"occupation",value:ie,onChange:function(e){return ue(e.target.value)}},l.a.createElement(j.a,{value:"student",control:l.a.createElement(O.a,null),label:"Student"}),l.a.createElement(j.a,{value:"professional",control:l.a.createElement(O.a,null),label:"Professional"}),l.a.createElement(j.a,{value:"retiree",control:l.a.createElement(O.a,null),label:"Retiree"}),l.a.createElement(j.a,{value:"other",control:l.a.createElement(O.a,null),label:"Other"}))),l.a.createElement(h.a,{component:"fieldset"},l.a.createElement(w.a,{component:"legend"},"Marital Status"),l.a.createElement(v.a,{"aria-label":"Marital Status",name:"marital",value:fe,onChange:function(e){return ge(e.target.value)}},l.a.createElement(j.a,{value:"single",control:l.a.createElement(O.a,null),label:"Single"}),l.a.createElement(j.a,{value:"married",control:l.a.createElement(O.a,null),label:"Married"}),l.a.createElement(j.a,{value:"living-with-so",control:l.a.createElement(O.a,null),label:"Living with significant other"}),l.a.createElement(j.a,{value:"other",control:l.a.createElement(O.a,null),label:"Other"})))),G&&l.a.createElement(Y.a,{style:{color:"#f44336"}},G),l.a.createElement("br",null),l.a.createElement(C.a,{variant:"contained",type:"submit"},"Continue"))})),X=Object(u.f)((function(e){e.location,e.history;return l.a.createElement("div",{id:"page-container"},l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",render:Z}),l.a.createElement(u.a,{path:"/assessment",render:W}),l.a.createElement(u.a,{path:"/your-info",render:V}),l.a.createElement(u.a,{path:"/results",render:z})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=Object(i.a)();o.a.render(l.a.createElement(d,{initialState:{questionnaireId:null,questionnaireTitle:null,questions:[],answers:{cognitive:{},emotional:{},physical:{},financial:{},spiritual:{}},name:"Leo",email:"l@leo.com",age:"27",income:"50,000",weight:"170",height:"5 foot 10",gender:"male",occupation:"professional",marital:"single"},reducer:function(e,t){return Object(m.a)(Object(m.a)({},e),t)}},l.a.createElement(c.a,{history:ee},l.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a.p+"static/media/cog.a9063339.svg"},75:function(e,t,a){e.exports=a.p+"static/media/emo.671822c6.svg"},76:function(e,t,a){e.exports=a.p+"static/media/phy.95da910b.svg"},77:function(e,t,a){e.exports=a.p+"static/media/fin.0864f32a.svg"},78:function(e,t,a){e.exports=a.p+"static/media/spi.10d304c6.svg"},80:function(e,t,a){e.exports=a.p+"static/media/logo.d0d785cc.png"},97:function(e,t,a){e.exports=a(149)}},[[97,1,2]]]);
//# sourceMappingURL=main.e5f91e79.chunk.js.map