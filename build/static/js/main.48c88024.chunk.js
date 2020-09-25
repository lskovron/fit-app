(this["webpackJsonpfit-app"]=this["webpackJsonpfit-app"]||[]).push([[0],{112:function(e,a,t){e.exports=t(166)},117:function(e,a,t){},118:function(e,a,t){},148:function(e,a){},166:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),o=t.n(r),c=(t(117),t(97)),i=t(96),m=t(6),s=(t(118),t(8)),u=t(197),E=t(212),d=t(91),f=t.n(d),g=t(93),p=t.n(g),b=t(92),h=t.n(b),v=t(202),y=function(){return l.a.createElement("div",{style:{padding:20}},l.a.createElement(u.a,{container:!0,spacing:5},l.a.createElement(u.a,{item:!0,sm:4,style:{background:"#79bdf2",display:"flex"},justify:"center",alignItems:"center"},l.a.createElement(E.a,{title:"Send us an email!",placement:"top"},l.a.createElement(v.a,{style:{boxShadow:"none"},onClick:function(){window.open("mailto:jake@thefitexperience.com")}},l.a.createElement(f.a,{style:{color:"#fff"}})))),l.a.createElement(u.a,{item:!0,sm:4,style:{background:"#5b8eb5",display:"flex"},justify:"center",alignItems:"center"},l.a.createElement(E.a,{title:"Located in Boulder, CO",placement:"top"},l.a.createElement(h.a,{style:{color:"#fff"}}))),l.a.createElement(u.a,{item:!0,sm:4,style:{background:"#1e2f3d",display:"flex"},justify:"center",alignItems:"center"},l.a.createElement(E.a,{title:"Visit our Instagram page",placement:"top"},l.a.createElement(v.a,{style:{boxShadow:"none"},onClick:function(){window.open("https://www.instagram.com","_blank")}},l.a.createElement(p.a,{style:{color:"#fff"}}))))))},O=t(55),x=t.n(O),S=function(){return l.a.createElement("div",{id:"header"},l.a.createElement("img",{id:"logo",src:x.a,alt:"FIT Logo"}))},j=t(203),N=Object(j.a)((function(){return{logo:{width:200,maxWidth:"100%"}}})),C=function(){var e=N();return l.a.createElement("div",{style:{padding:20}},l.a.createElement(u.a,{container:!0,spacing:5,style:{background:"#f9fcfe"}},l.a.createElement(u.a,{item:!0,sm:4,style:{alignItems:"flex-end",justifyContent:"center",display:"flex",flexDirection:"column",position:"relative"}},l.a.createElement("p",{style:{margin:0}},"Learn More at"),l.a.createElement("a",{href:"#/",style:{textDecoration:"none",color:"#576a7c"}},l.a.createElement("strong",null,"TheFitExperience.com")),l.a.createElement("div",{style:{position:"absolute",bottom:0,left:0,right:0,textAlign:"center"}},l.a.createElement("p",{style:{margin:0,fontSize:12,color:"#a0a9b3"}},"@2020 The Fit Experience"))),l.a.createElement(u.a,{item:!0,sm:4,style:{textAlign:"center"}},l.a.createElement("img",{src:x.a,alt:"logo",className:e.logo})),l.a.createElement(u.a,{item:!0,sm:4,style:{alignItems:"flex-start",justifyContent:"center",display:"flex",flexDirection:"column",position:"relative"}},l.a.createElement("p",{style:{margin:0}},"An Operating"),l.a.createElement("p",{style:{textDecoration:"none",color:"#576a7c",margin:0}},l.a.createElement("strong",null,"Philosophy For Life")),l.a.createElement("div",{style:{position:"absolute",bottom:0,left:0,right:0,textAlign:"center"}},l.a.createElement("a",{href:"#/",style:{margin:0,fontSize:12,textDecoration:"none",color:"#a0a9b3"}},"Terms and Conditions")))))},w=t(94),T=t.n(w),I=["cognitive","emotional","physical","financial","spiritual"],k={cognitive:["#ff3a00","#ff4a00","#ff5a00","#ff6a00","#ff7e00","#ff9400","#ffb100","#ffd200"],emotional:["#00296f","#00396f","#004980","#005f92","#007aa9","#009cc1","#08c6de"],physical:["#a11500","#b51800","#c01a00","#cb1c00","#d72100","#e43304","#f26b3e"],financial:["#004c00","#005d00","#006e00","#008200","#009906","#1cb423","#68d566"],spiritual:["#01188d","#02188d","#071d9c","#1224ac","#2733be","#4d52d1","#8e8ee7"]},A=t(30),L=t(206),R=Object(n.createContext)(),P=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(R.Provider,{value:Object(n.useReducer)(a,t)},r)},M=function(){return Object(n.useContext)(R)},F=t(210),B=t(211),D=t(205),W=t(208),H=t(204),G=Object(j.a)((function(e){return{questionContainer:{margin:"30px 0 50px","& .MuiFormLabel-root.Mui-focused":{color:"rgba(0, 0, 0, 0.54)"},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#79bdf2"},"& .MuiIconButton-colorSecondary:hover":{background:"rgba(121, 189, 242,.08)"}},question:{fontWeight:700,display:"block",paddingBottom:15,fontSize:22,color:"#576a7c"}}})),z=function(e){var a=e.text,t=e.reverse,r=e.subdimension,o=e.dimension,c=e.index,i=e.totalQs,m=e.setCanContinue,u=G(),E=M(),d=Object(s.a)(E,2),f=d[0].answers,g=d[1],p=Object(n.useState)(0),b=Object(s.a)(p,2),h=b[0],v=b[1],y=function(e){var a,t=Object(A.a)({},f);t[o][r][c]=e,g({answers:t}),(a=t[o][r]).length!==i||a.includes(void 0)||m(!0)};return Object(n.useEffect)((function(){v(0)}),[r,o]),l.a.createElement("div",{className:u.questionContainer},l.a.createElement(F.a,{component:"fieldset",style:{display:"block"}},l.a.createElement(H.a,{component:"legend",className:u.question},a),l.a.createElement(B.a,{row:!0,"aria-label":"Marital Status",name:"marital",value:h,onChange:function(e){if(e.target.value){var a=e.target.value;"skip"!==e.target.value&&(a=parseInt(e.target.value)),v(a),y(a)}}},l.a.createElement(D.a,{labelPlacement:"bottom",value:t?5:1,control:l.a.createElement(W.a,null),label:"1"}),l.a.createElement(D.a,{labelPlacement:"bottom",value:t?4:2,control:l.a.createElement(W.a,null),label:"2"}),l.a.createElement(D.a,{labelPlacement:"bottom",value:3,control:l.a.createElement(W.a,null),label:"3"}),l.a.createElement(D.a,{labelPlacement:"bottom",value:t?2:4,control:l.a.createElement(W.a,null),label:"4"}),l.a.createElement(D.a,{labelPlacement:"bottom",value:t?1:5,control:l.a.createElement(W.a,null),label:"5"}),l.a.createElement("div",{style:{margin:"25px 40px 0px",flexGrow:1,borderTop:"1px solid #a0a9b3"}}),l.a.createElement(D.a,{labelPlacement:"bottom",value:"skip",control:l.a.createElement(W.a,null),label:"n/a"}))))},U=(window&&window.location&&window.location.hostname).includes("fitexperience")?"http://results.thefitexperience.com":"http://localhost:8888/fit-backend",q=Object(j.a)((function(){return{button:{display:"block",margin:"0 auto",fontSize:35,fontFamily:"Libre Baskerville,serif",padding:"0 50px",borderRadius:20,color:"white",textTransform:"none",fontWeight:700,background:"#79bdf2","&:hover":{background:"#1e7ce1"},"&:disabled":{background:"#a0a9b3",color:"white"},marginBottom:50}}})),$=Object(m.f)((function(e){var a=e.history,t=e.currentDimensionIndex,r=e.setCurrentDimensionIndex,o=M(),c=Object(s.a)(o,1)[0].answers,i=q(),m=I[t],u=Object(n.useState)(null),E=Object(s.a)(u,2),d=E[0],f=E[1],g=Object(n.useState)(0),p=Object(s.a)(g,2),b=p[0],h=p[1],y=Object(n.useState)(!1),O=Object(s.a)(y,2),x=O[0],S=O[1],j=Object(n.useState)(!0),N=Object(s.a)(j,2),C=N[0],w=N[1];Object(n.useEffect)((function(){T(),window.scrollTo({top:0,left:0,behavior:"smooth"})}),[m]);var T=function(){w(!0);var e="".concat(U,"/wp-json/wp/v2/").concat(m,"?orderby=menu_order&order=asc");fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){w(!1),console.log(e),h(0),f(e),a(e)})).catch((function(e){w(!1),console.log(e)}));var a=function(e){var a=Object(A.a)({},c);e.forEach((function(e){a[m][e.slug]=[]}))}};return d?l.a.createElement("div",null,C?l.a.createElement("div",null,l.a.createElement("h2",null,"Loading"),l.a.createElement(L.a,null)):l.a.createElement(l.a.Fragment,null,d[b].acf.questions.map((function(e,a){return l.a.createElement(z,{dimension:m,subdimension:d[b].slug,key:a,index:a,reverse:e.reverse_sort,text:e.question,totalQs:d[b].acf.questions.length,setCanContinue:S})})),l.a.createElement("div",{style:{marginTop:20}},l.a.createElement(v.a,{variant:"contained",disabled:!x,onClick:function(){S(!1),d.length>b+1?h(b+1):I.length>t+1?r(t+1):a.push("/results")},className:i.button},"Continue")))):l.a.createElement(l.a.Fragment,null,C?l.a.createElement("div",null,l.a.createElement("h2",null,"Loading"),l.a.createElement(L.a,null)):null)})),V=t(41),_=t.n(V),Y=t(42),J=t.n(Y),Q=t(43),Z=t.n(Q),K=t(44),X=t.n(K),ee=t(45),ae=t.n(ee),te=Object(j.a)((function(){return{progressWrapper:{display:"block",textAlign:"center"},progressSegment:{display:"inline-block",width:"17%",margin:"0 1%",height:5,"& img":{filter:"grayscale(1)",opacity:.4,width:70}},cog:{"& img":{filter:"none",opacity:1}},emo:{"& img":{filter:"none",opacity:1}},phy:{"& img":{filter:"none",opacity:1}},fin:{"& img":{filter:"none",opacity:1}},spi:{"& img":{filter:"none",opacity:1}}}})),ne=function(e){var a=e.currentDimensionIndex,t=te();return console.log(t.dimColors),l.a.createElement("div",{className:t.progressWrapper},I.map((function(e,n){return l.a.createElement("div",{key:n,className:"".concat(t.progressSegment,"\n                    ").concat(0===n&&a>=n?t.cog:1===n&&a>=n?t.emo:2===n&&a>=n?t.phy:3===n&&a>=n?t.fin:4===n&&a>=n?t.spi:"")},0===n&&l.a.createElement("img",{src:_.a,alt:"dimension logo"}),1===n&&l.a.createElement("img",{src:J.a,alt:"dimension logo"}),2===n&&l.a.createElement("img",{src:Z.a,alt:"dimension logo"}),3===n&&l.a.createElement("img",{src:X.a,alt:"dimension logo"}),4===n&&l.a.createElement("img",{src:ae.a,alt:"dimension logo"}))})))},le=Object(m.f)((function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement("div",{style:{padding:40,paddingTop:0}},l.a.createElement("h1",{style:{textAlign:"center",marginBottom:30}},"Assessment"),l.a.createElement("h2",{style:{textAlign:"center",fontFamily:"Open Sans, lato, sans-serif",fontSize:"1.8rem",margin:"50px 0",color:k[I[t]][6]}},I[t].toUpperCase()),l.a.createElement(ne,{currentDimensionIndex:t}),l.a.createElement("p",{style:{fontSize:18,lineHeight:1.5,margin:"30px 20px",textAlign:"center"}},"There are no right or wrong answers. Try to answer candidly.\xa0 Please rate how true the following statements are for you on a scale of 1-5:"),l.a.createElement("img",{src:T.a,alt:"rating scale",style:{maxWidth:"100%",marginBottom:30}}),l.a.createElement($,{currentDimensionIndex:t,setCurrentDimensionIndex:r})),l.a.createElement(C,null),l.a.createElement(y,null))})),re=Object(m.f)((function(e){var a=e.history,t=M(),r=Object(s.a)(t,1)[0],o=r.answers,c=r.name,i=r.email,m=r.age,u=r.income,E=r.weight,d=r.height,f=r.gender,g=r.marital,p=r.family,b=r.ethnicity,h=r.education,v=r.language,y=r.employment,O=r.location,x=function(e){var a=e.reduce((function(e,a){return parseInt(e)+parseInt(a)}))/e.length;return parseFloat(a.toFixed(2))};return Object(n.useEffect)((function(){var e,t,n,l=!1;if(Object.keys(o).forEach((function(e){Object.entries(o[e]).length>0&&(l=!0)})),l){var r=function(e){console.log(e);var a={},t=[];for(var n in e){var l=[];for(var r in e[n]){var o=e[n][r].filter((function(e){return"skip"!==e}));if(o.length){var c="".concat(n.substr(0,1),"-").concat(r),i=4*x(o);a[c]=i,l.push(i),t.push(i)}}l.length&&(a["t-".concat(n,"-score")]=x(l))}return a["t-overall-score"]=x(t),console.log(a),a}(o);n=r,[{participant:c},{email:i},{age:m},{income:u},{weight:E},{height:d},{gender:f},{education:h},{marital:g},{family:p},{ethnicity:b},{language:v},{employment:y},{location:O}].forEach((function(e){var a=Object.keys(e)[0];""!==e[a]&&(n[a]=e[a])})),(r=n)&&(r.nodupe=(e=1,t=999999,Math.floor(Math.random()*(t-e))+e),window.location="".concat(U,"/results?").concat(function(e){var a=[];for(var t in e)e.hasOwnProperty(t)&&a.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return a.join("&")}(r)))}else a.push("/")}),[]),l.a.createElement("section",{style:{textAlign:"center",padding:"80px 50px"}},l.a.createElement(L.a,null))})),oe=t(65),ce=t.n(oe),ie=Object(j.a)((function(){return{contentWrap:{padding:"40px 60px"},primaryContent:{marginBottom:40,"& p":{fontSize:20,lineHeight:1.4,color:"#a0a9b3"}},secondaryContent:{"& h3":{fontSize:"1.5rem",marginBottom:15},"& p":{fontSize:20,lineHeight:1.4,color:"#a0a9b3"},"& a":{textTransform:"uppercase",fontWeight:"bold",textDecoration:"none",color:"#79bdf2"}},h2:{marginTop:60,textAlign:"center",fontSize:"1.8rem","&:after":{content:"''",borderBottom:"1px solid",width:60,display:"block",margin:"20px auto"}},imgRow:{display:"inline-block",textAlign:"center",padding:"20px 8px 5px","& span":{fontWeight:700,fontSize:10,display:"block"},"& img":{width:65}},subColors:{fontWeight:700,display:"inline-block",padding:"5px 20px 8px 0",fontSize:15,fontFamily:"Open Sans Condensed"},imgWrap:{paddingRight:10,"& img":{maxWidth:120,width:"90%"}},dimensionContent:{fontSize:22,marginTop:10,lineHeight:1.5,color:"#a0a9b3"},subHeader:{fontWeight:"bold",fontFamily:"Open Sans, lato, sans-serif",textTransform:"uppercase",marginTop:30,marginBottom:0,"& span":{color:"#576a7c!important",fontFamily:"Libre Baskerville",textTransform:"none"}},allSet:{color:"#79bdf2",marginTop:60,textAlign:"center",fontSize:"1rem",fontFamily:"Open Sans, lato, sans-serif",fontWeight:900,"&:after":{content:"''",borderBottom:"1px solid #aaaaaa",width:180,display:"block",margin:"25px auto"}},continueButton:{display:"block",margin:"0 auto",fontSize:50,fontFamily:"Libre Baskerville,serif",padding:"0 50px",borderRadius:20,color:"white",textTransform:"none",fontWeight:700,background:"#79bdf2","&:hover":{background:"#1e7ce1"}}}})),me=Object(m.f)((function(e){var a=e.history,t=ie(),r=Object(n.useState)(!1),o=Object(s.a)(r,2),c=o[0],i=o[1],m=Object(n.useState)({}),E=Object(s.a)(m,2),d=E[0],f=E[1],g=Object(n.useState)([]),p=Object(s.a)(g,2),b=p[0],h=p[1],O=["i","ii","iii","iv","v"];return Object(n.useEffect)((function(){!function(){i(!0);var e="".concat(U,"/wp-json/wp/v2/pages/116");fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),i(!1),f({circumplex:e.acf.circumplex,primary:e.content.rendered,secondary:e.acf.secondary_text}),h([{key:"cognitive",title:"Cognitive",img:_.a,content:e.acf.cognitive_description,subdimensions:["LEARNING STRATEGIES","INTELLECTUAL ENGAGEMENT","EFFORTFUL CONTROL","ATTENTION","AUTONOMY","SOCIAL COGNITION"]},{key:"emotional",title:"Emotional",img:J.a,content:e.acf.emotional_description,subdimensions:["CURRENT EMOTIONAL HEALTH","SELF-COMPASSION AND EMOTIONAL AWARENESS","STRESS RESILIENCE","GRATITUDE AND POSITIVITY","MINDSET","SOCIAL ENGAGEMENT"]},{key:"financial",title:"Financial",img:X.a,content:e.acf.financial_description,subdimensions:["LONG-TERM PERSPECTIVE","SHORT-TERM PERSPECTIVE","REDUCE SADNESS","INCREASE HAPPINESS","NON-PECUNIARY"]},{key:"physical",title:"Physical",img:Z.a,content:e.acf.physical_description,subdimensions:["NUTRITION","NUTRITIONAL KNOWLEDGE","ACTIVITY LEVEL","AEROBIC ACTIVITY","STRENGTH TRAINING","SLEEP HABITS","SELF-IMAGE"]},{key:"spiritual",title:"Spiritual",img:ae.a,content:e.acf.spiritual_description,subdimensions:["CONNECTION","COMPASSION AND EMPATHY","FORGIVENESS","PURPOSE","PRESENCE"]}])})).catch((function(e){i(!1),console.log(e)}))}()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),c?l.a.createElement("div",{className:t.contentWrap},l.a.createElement("h2",null,"Loading"),l.a.createElement(L.a,null)):l.a.createElement("div",{className:t.contentWrap},l.a.createElement("div",{className:t.primaryContent},ce()(d.primary)),l.a.createElement(u.a,{container:!0,className:t.secondaryContent,spacing:5},l.a.createElement(u.a,{item:!0,sm:4,style:{display:"flex",flexDirection:"row",alignItems:"center"}},l.a.createElement("img",{src:d.circumplex,alt:"circumplex example",width:"100%"})),l.a.createElement(u.a,{item:!0,sm:8},l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:k.cognitive[6]}},"COGNITIVE"),l.a.createElement("img",{src:_.a,alt:"dimension"})),l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:k.physical[5]}},"PHYSICAL"),l.a.createElement("img",{src:Z.a,alt:"dimension"})),l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:k.spiritual[6]}},"SPIRITUALITY"),l.a.createElement("img",{src:ae.a,alt:"dimension"})),l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:k.emotional[6]}},"EMOTIONAL"),l.a.createElement("img",{src:J.a,alt:"dimension"})),l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:k.financial[6]}},"FINANCIAL"),l.a.createElement("img",{src:X.a,alt:"dimension"})),ce()(d.secondary))),l.a.createElement("h2",{className:t.h2},"Table of Contents"),b.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("h3",{className:t.subHeader,style:{color:k[e.key][6]}},l.a.createElement("span",null,O[a],".")," ",e.title),l.a.createElement(u.a,{container:!0,spacing:2,style:{display:"flex",flexDirection:"row",alignItems:"center"}},l.a.createElement(u.a,{item:!0,sm:2},l.a.createElement("div",{className:t.imgWrap},l.a.createElement("img",{src:e.img,alt:"dim"}))),l.a.createElement(u.a,{item:!0,sm:10,style:{margin:"20px 0",paddingLeft:20,borderLeft:"1px solid",borderColor:k[e.key][6]}},l.a.createElement("p",{className:t.dimensionContent},e.content),e.subdimensions.map((function(a,n){return l.a.createElement("span",{key:n,className:t.subColors,style:{color:k[e.key][n]}},a)})))))})),l.a.createElement("h3",{className:t.allSet},"ALL SET?"),l.a.createElement(v.a,{className:t.continueButton,variant:"contained",onClick:function(){a.push("/your-info")}},"Let's begin")),l.a.createElement(C,null),l.a.createElement(y,null))})),se=t(95),ue=t(207),Ee=t(167),de=Object(j.a)((function(){return{form:{padding:"0 60px 30px","& h1":{textAlign:"center",marginBottom:45},"& .MuiOutlinedInput-root":{borderRadius:0,background:"#efefef",color:"#576a7c"},"& .MuiFormControl-root":{width:"45%",marginRight:"5%",marginBottom:20,border:0,"& label":{fontWeight:700},"& .MuiFormLabel-asterisk":{color:"#79bdf2"},"& .MuiOutlinedInput-notchedOutline":{border:"none"},"@media(max-width:480px)":{width:"100%"}},"& .MuiFormLabel-root":{fontWeight:700,color:"#576a7c",marginBottom:10},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#79bdf2"},"& .MuiIconButton-colorSecondary:hover":{background:"rgba(121, 189, 242,.08)"}},left:{width:"50%",float:"left",margin:0,display:"inline-block"},right:{width:"50%",float:"right",margin:0,display:"inline-block"},formControl:{paddingBottom:40},button:{display:"block",margin:"0 auto",fontSize:35,fontFamily:"Libre Baskerville,serif",padding:"0 50px",borderRadius:20,color:"white",textTransform:"none",fontWeight:700,background:"#79bdf2","&:hover":{background:"#1e7ce1"}}}})),fe=Object(m.f)((function(e){var a=e.history,t=de(),r=M(),o=Object(s.a)(r,2);Object(se.a)(o[0]);var c=o[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],E=m[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),g=f[0],p=f[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),O=h[0],x=h[1],j=Object(n.useState)(""),N=Object(s.a)(j,2),w=N[0],T=N[1],I=Object(n.useState)(""),k=Object(s.a)(I,2),A=k[0],L=k[1],R=Object(n.useState)(""),P=Object(s.a)(R,2),G=P[0],z=P[1],U=Object(n.useState)(""),q=Object(s.a)(U,2),$=q[0],V=q[1],_=Object(n.useState)(""),Y=Object(s.a)(_,2),J=Y[0],Q=Y[1],Z=Object(n.useState)(""),K=Object(s.a)(Z,2),X=K[0],ee=K[1],ae=Object(n.useState)(""),te=Object(s.a)(ae,2),ne=te[0],le=te[1],re=Object(n.useState)(""),oe=Object(s.a)(re,2),ce=oe[0],ie=oe[1],me=Object(n.useState)(!1),fe=Object(s.a)(me,2),ge=fe[0],pe=fe[1],be=Object(n.useState)(!1),he=Object(s.a)(be,2),ve=he[0],ye=he[1],Oe=Object(n.useState)(""),xe=Object(s.a)(Oe,2),Se=xe[0],je=xe[1],Ne=Object(n.useState)(""),Ce=Object(s.a)(Ne,2),we=Ce[0],Te=Ce[1],Ie=Object(n.useState)(""),ke=Object(s.a)(Ie,2),Ae=ke[0],Le=ke[1],Re=Object(n.useState)(""),Pe=Object(s.a)(Re,2),Me=Pe[0],Fe=Pe[1],Be=Object(n.useRef)(null),De=Object(n.useRef)(null);return Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement("form",{className:t.form,onSubmit:function(e){if(e.preventDefault(),ve||ge)return console.log("erre"),ie("Please fix the highlighted field(s) above"),ve&&Be.current&&Be.current.focus(),void(ge&&De.current&&De.current.focus());c({name:u,email:g,age:O,income:w,weight:A,height:G,gender:Se,marital:Ae,family:$,ethnicity:J,education:X,language:ne,employment:we,location:Me}),a.push("/assessment")}},l.a.createElement("h1",null,"Tell us about yourself"),l.a.createElement("div",{className:t.formControl,style:{margin:"0 -10px 0px"}},l.a.createElement(ue.a,{variant:"outlined",required:!0,ref:Be,label:"Name",error:ve,value:u,onChange:function(e){return E(e.target.value)},onBlur:function(){ye(""===u)}}),l.a.createElement(ue.a,{variant:"outlined",required:!0,ref:De,label:"Email",error:ge,helperText:ge?"Invalid entry.":"",value:g,onChange:function(e){return p(e.target.value)},onBlur:function(){pe(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(g))}})),l.a.createElement("div",{className:t.formControl},l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Gender"),l.a.createElement(B.a,{"aria-label":"gender",name:"gender1",value:Se,onChange:function(e){return je(e.target.value)}},l.a.createElement(D.a,{value:"female",control:l.a.createElement(W.a,null),label:"Female"}),l.a.createElement(D.a,{value:"male",control:l.a.createElement(W.a,null),label:"Male"}),l.a.createElement(D.a,{value:"other",control:l.a.createElement(W.a,null),label:"Other"}),l.a.createElement(D.a,{value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"}))),l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Age (optional)"),l.a.createElement(B.a,{style:{display:"block"},"aria-label":"age",name:"age",value:O,onChange:function(e){return x(e.target.value)}},l.a.createElement(D.a,{className:t.left,value:"0-15",control:l.a.createElement(W.a,null),label:"0-15"}),l.a.createElement(D.a,{className:t.right,value:"46-55",control:l.a.createElement(W.a,null),label:"46-55"}),l.a.createElement(D.a,{className:t.left,value:"16-25",control:l.a.createElement(W.a,null),label:"16-25"}),l.a.createElement(D.a,{className:t.right,value:"56-65",control:l.a.createElement(W.a,null),label:"56-65"}),l.a.createElement(D.a,{className:t.left,value:"26-35",control:l.a.createElement(W.a,null),label:"26-35"}),l.a.createElement(D.a,{className:t.right,value:"66-75",control:l.a.createElement(W.a,null),label:"66-75"}),l.a.createElement(D.a,{className:t.left,value:"36-45",control:l.a.createElement(W.a,null),label:"36-45"}),l.a.createElement(D.a,{className:t.right,value:"75+",control:l.a.createElement(W.a,null),label:"75+"}),l.a.createElement(D.a,{className:t.left,value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"})))),l.a.createElement("div",{className:t.formControl},l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Ethnicity (optional)"),l.a.createElement(B.a,{"aria-label":"ethnicity",name:"ethnicity",value:J,onChange:function(e){return Q(e.target.value)}},l.a.createElement(D.a,{value:"caucasian",control:l.a.createElement(W.a,null),label:"Caucasian"}),l.a.createElement(D.a,{value:"african-american",control:l.a.createElement(W.a,null),label:"African American"}),l.a.createElement(D.a,{value:"latino-hispanic",control:l.a.createElement(W.a,null),label:"Latino or Hispanic"}),l.a.createElement(D.a,{value:"asian",control:l.a.createElement(W.a,null),label:"Asian"}),l.a.createElement(D.a,{value:"native-american",control:l.a.createElement(W.a,null),label:"Native American"}),l.a.createElement(D.a,{value:"islander",control:l.a.createElement(W.a,null),label:"Native Hawaiian or Pacific Islander"}),l.a.createElement(D.a,{value:"two-or-more",control:l.a.createElement(W.a,null),label:"Two or More"}),l.a.createElement(D.a,{value:"other",control:l.a.createElement(W.a,null),label:"Other/Unknown"}),l.a.createElement(D.a,{value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"}))),l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Annual Household Income (optional)"),l.a.createElement(B.a,{"aria-label":"income",name:"income",value:w,onChange:function(e){return T(e.target.value)}},l.a.createElement(D.a,{value:"less-25",control:l.a.createElement(W.a,null),label:"Less than $25,000"}),l.a.createElement(D.a,{value:"26-50",control:l.a.createElement(W.a,null),label:"$26,000-$50,000"}),l.a.createElement(D.a,{value:"51-100",control:l.a.createElement(W.a,null),label:"$51,000-$100,000"}),l.a.createElement(D.a,{value:"101-150",control:l.a.createElement(W.a,null),label:"$101,00-$150,000"}),l.a.createElement(D.a,{value:"151-200",control:l.a.createElement(W.a,null),label:"$151,000-$200,000"}),l.a.createElement(D.a,{value:"more-200",control:l.a.createElement(W.a,null),label:"More than $200,000"}),l.a.createElement(D.a,{value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"})))),l.a.createElement("div",{className:t.formControl,style:{margin:"0 -10px 0px"}},l.a.createElement(ue.a,{variant:"outlined",placeholder:"ex: Boulder, CO, USA",label:"Location (optional)",style:{width:"95%"},error:ve,value:Me,onChange:function(e){return Fe(e.target.value)}}),l.a.createElement(ue.a,{variant:"outlined",label:"Height (optional)",value:G,placeholder:"ex: 6'1\"",onChange:function(e){return z(e.target.value)}}),l.a.createElement(ue.a,{variant:"outlined",label:"Weight (optional)",value:A,placeholder:"ex: 150 pounds",onChange:function(e){return L(e.target.value)}})),l.a.createElement("div",{className:t.formControl},l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Marital Status (optional)"),l.a.createElement(B.a,{"aria-label":"Marital Status",name:"marital",value:Ae,onChange:function(e){return Le(e.target.value)}},l.a.createElement(D.a,{value:"single",control:l.a.createElement(W.a,null),label:"Single"}),l.a.createElement(D.a,{value:"married",control:l.a.createElement(W.a,null),label:"Married"}),l.a.createElement(D.a,{value:"divorced",control:l.a.createElement(W.a,null),label:"Divorced"}),l.a.createElement(D.a,{value:"widowed",control:l.a.createElement(W.a,null),label:"Widowed"}),l.a.createElement(D.a,{value:"domestic-partnership",control:l.a.createElement(W.a,null),label:"Domestic partnership"}),l.a.createElement(D.a,{value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"}))),l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Family and Dependents (optional)"),l.a.createElement(B.a,{"aria-label":"family",name:"family",value:$,onChange:function(e){return V(e.target.value)}},l.a.createElement(D.a,{value:"none",control:l.a.createElement(W.a,null),label:"None"}),l.a.createElement(D.a,{value:"1",control:l.a.createElement(W.a,null),label:"1"}),l.a.createElement(D.a,{value:"2-4",control:l.a.createElement(W.a,null),label:"2-4"}),l.a.createElement(D.a,{value:"4+",control:l.a.createElement(W.a,null),label:"More than 4"}),l.a.createElement(D.a,{value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"})))),l.a.createElement("div",{className:t.formControl},l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Education (optional)"),l.a.createElement(B.a,{"aria-label":"Education",name:"education",value:X,onChange:function(e){return ee(e.target.value)}},l.a.createElement(D.a,{value:"some-high-school",control:l.a.createElement(W.a,null),label:"Some High School"}),l.a.createElement(D.a,{value:"high-school",control:l.a.createElement(W.a,null),label:"High School"}),l.a.createElement(D.a,{value:"bachelor",control:l.a.createElement(W.a,null),label:"Bachelor's Degree"}),l.a.createElement(D.a,{value:"masters",control:l.a.createElement(W.a,null),label:"Master's Degree"}),l.a.createElement(D.a,{value:"phd",control:l.a.createElement(W.a,null),label:"Ph. D or higher"}),l.a.createElement(D.a,{value:"trade-school",control:l.a.createElement(W.a,null),label:"Trade School"}),l.a.createElement(D.a,{value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"}))),l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Employment (optional)"),l.a.createElement(B.a,{"aria-label":"employment",name:"employment",value:we,onChange:function(e){return Te(e.target.value)}},l.a.createElement(D.a,{value:"full-time",control:l.a.createElement(W.a,null),label:"Employed Full-Time"}),l.a.createElement(D.a,{value:"part-time",control:l.a.createElement(W.a,null),label:"Employed Part-Time"}),l.a.createElement(D.a,{value:"seeking",control:l.a.createElement(W.a,null),label:"Seeking Opportunities"}),l.a.createElement(D.a,{value:"retired",control:l.a.createElement(W.a,null),label:"Retired"}),l.a.createElement(D.a,{value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"})))),l.a.createElement("div",{className:t.formControl},l.a.createElement(F.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Language (optional)"),l.a.createElement(B.a,{"aria-label":"language",name:"language",value:ne,onChange:function(e){return le(e.target.value)}},l.a.createElement(D.a,{value:"english",control:l.a.createElement(W.a,null),label:"English"}),l.a.createElement(D.a,{value:"spanish",control:l.a.createElement(W.a,null),label:"Spanish"}),l.a.createElement(D.a,{value:"portugese",control:l.a.createElement(W.a,null),label:"Portugese"}),l.a.createElement(D.a,{value:"french",control:l.a.createElement(W.a,null),label:"French"}),l.a.createElement(D.a,{value:"mandarin",control:l.a.createElement(W.a,null),label:"Mandarin"}),l.a.createElement(D.a,{value:"arabic",control:l.a.createElement(W.a,null),label:"Arabic"}),l.a.createElement(D.a,{value:"other",control:l.a.createElement(W.a,null),label:"Other"}),l.a.createElement(D.a,{value:"n-a",control:l.a.createElement(W.a,null),label:"Prefer not to say"})))),ce&&l.a.createElement(Ee.a,{style:{color:"#f44336"}},ce),l.a.createElement("br",null),l.a.createElement(v.a,{variant:"contained",type:"submit",className:t.button},"Continue")),l.a.createElement(C,null),l.a.createElement(y,null))})),ge=Object(m.f)((function(e){e.location,e.history;return l.a.createElement("div",{id:"page-container"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",render:me}),l.a.createElement(m.a,{path:"/assessment",render:le}),l.a.createElement(m.a,{path:"/your-info",render:fe}),l.a.createElement(m.a,{path:"/results",render:re})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=Object(i.a)();o.a.render(l.a.createElement(P,{initialState:{questionnaireId:null,questionnaireTitle:null,questions:[],answers:{cognitive:{},emotional:{},physical:{},financial:{},spiritual:{}},name:"",email:"",age:"",income:"",weight:"",height:"",gender:"",occupation:"",marital:"",ethnicity:"",education:"",employment:""},reducer:function(e,a){return Object(A.a)(Object(A.a)({},e),a)}},l.a.createElement(c.a,{history:pe},l.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,a,t){e.exports=t.p+"static/media/cog.a9063339.svg"},42:function(e,a,t){e.exports=t.p+"static/media/emo.671822c6.svg"},43:function(e,a,t){e.exports=t.p+"static/media/phy.95da910b.svg"},44:function(e,a,t){e.exports=t.p+"static/media/fin.0864f32a.svg"},45:function(e,a,t){e.exports=t.p+"static/media/spi.10d304c6.svg"},55:function(e,a,t){e.exports=t.p+"static/media/logo.d0d785cc.png"},94:function(e,a,t){e.exports=t.p+"static/media/scale.7f3bfc1b.png"}},[[112,1,2]]]);
//# sourceMappingURL=main.48c88024.chunk.js.map