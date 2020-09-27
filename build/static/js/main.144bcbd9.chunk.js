(this["webpackJsonpfit-app"]=this["webpackJsonpfit-app"]||[]).push([[0],{113:function(e,a,t){e.exports=t(167)},118:function(e,a,t){},121:function(e,a,t){},149:function(e,a){},167:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),o=t.n(r),c=(t(118),t(98)),i=t(97),m=t(6),s=t(66),u=(t(121),t(7)),E=t(198),d=t(213),f=t(92),g=t.n(f),p=t(94),b=t.n(p),h=t(93),v=t.n(h),y=t(203),O=function(){return l.a.createElement("div",{style:{padding:20}},l.a.createElement(E.a,{container:!0,spacing:5},l.a.createElement(E.a,{item:!0,sm:4,style:{background:"#79bdf2",display:"flex"},justify:"center",alignItems:"center"},l.a.createElement(d.a,{title:"Send us an email!",placement:"top"},l.a.createElement(y.a,{style:{boxShadow:"none"},onClick:function(){window.open("mailto:jake@thefitexperience.com")}},l.a.createElement(g.a,{style:{color:"#fff"}})))),l.a.createElement(E.a,{item:!0,sm:4,style:{background:"#5b8eb5",display:"flex"},justify:"center",alignItems:"center"},l.a.createElement(d.a,{title:"Located in Boulder, CO",placement:"top"},l.a.createElement(v.a,{style:{color:"#fff"}}))),l.a.createElement(E.a,{item:!0,sm:4,style:{background:"#1e2f3d",display:"flex"},justify:"center",alignItems:"center"},l.a.createElement(d.a,{title:"Visit our Instagram page",placement:"top"},l.a.createElement(y.a,{style:{boxShadow:"none"},onClick:function(){window.open("https://www.instagram.com","_blank")}},l.a.createElement(b.a,{style:{color:"#fff"}}))))))},x=t(55),S=t.n(x),j=function(){return l.a.createElement("div",{id:"header"},l.a.createElement("img",{id:"logo",src:S.a,alt:"FIT Logo"}))},N=t(204),w=Object(N.a)((function(){return{logo:{width:200,maxWidth:"100%"}}})),C=function(){var e=w();return l.a.createElement("div",{style:{padding:20}},l.a.createElement(E.a,{container:!0,spacing:5,style:{background:"#f9fcfe"}},l.a.createElement(E.a,{item:!0,sm:4,style:{alignItems:"flex-end",justifyContent:"center",display:"flex",flexDirection:"column",position:"relative"}},l.a.createElement("p",{style:{margin:0}},"Learn More at"),l.a.createElement("a",{href:"#/",style:{textDecoration:"none",color:"#576a7c"}},l.a.createElement("strong",null,"TheFitExperience.com")),l.a.createElement("div",{style:{position:"absolute",bottom:0,left:0,right:0,textAlign:"center"}},l.a.createElement("p",{style:{margin:0,fontSize:12,color:"#a0a9b3"}},"@2020 The Fit Experience"))),l.a.createElement(E.a,{item:!0,sm:4,style:{textAlign:"center"}},l.a.createElement("img",{src:S.a,alt:"logo",className:e.logo})),l.a.createElement(E.a,{item:!0,sm:4,style:{alignItems:"flex-start",justifyContent:"center",display:"flex",flexDirection:"column",position:"relative"}},l.a.createElement("p",{style:{margin:0}},"An Operating"),l.a.createElement("p",{style:{textDecoration:"none",color:"#576a7c",margin:0}},l.a.createElement("strong",null,"Philosophy For Life")),l.a.createElement("div",{style:{position:"absolute",bottom:0,left:0,right:0,textAlign:"center"}},l.a.createElement("a",{href:"#/",style:{margin:0,fontSize:12,textDecoration:"none",color:"#a0a9b3"}},"Terms and Conditions")))))},I=t(95),T=t.n(I),k=["cognitive","physical","financial","emotional","spiritual"],A={cognitive:["#ff3a00","#ff4a00","#ff5a00","#ff6a00","#ff7e00","#ff9400","#ffb100","#ffd200"],emotional:["#00296f","#00396f","#004980","#005f92","#007aa9","#009cc1","#08c6de"],physical:["#a11500","#b51800","#c01a00","#cb1c00","#d72100","#e43304","#f26b3e"],financial:["#004c00","#005d00","#006e00","#008200","#009906","#1cb423","#68d566"],spiritual:["#01188d","#02188d","#071d9c","#1224ac","#2733be","#4d52d1","#8e8ee7"]},R=t(30),L=t(207),P=Object(n.createContext)(),M=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(P.Provider,{value:Object(n.useReducer)(a,t)},r)},F=function(){return Object(n.useContext)(P)},B=t(211),D=t(212),W=t(206),z=t(209),H=t(205),G=Object(N.a)((function(e){return{questionContainer:{margin:"30px 0 50px","& .MuiFormLabel-root.Mui-focused":{color:"rgba(0, 0, 0, 0.54)"},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#79bdf2"},"& .MuiIconButton-colorSecondary:hover":{background:"rgba(121, 189, 242,.08)"}},question:{fontWeight:700,display:"block",paddingBottom:15,fontSize:22,color:"#576a7c"}}})),U=function(e){var a=e.text,t=e.reverse,r=e.subdimension,o=e.dimension,c=e.index,i=e.totalQs,m=e.setCanContinue,s=G(),E=F(),d=Object(u.a)(E,2),f=d[0].answers,g=d[1],p=Object(n.useState)(0),b=Object(u.a)(p,2),h=b[0],v=b[1],y=function(e){var a,t=Object(R.a)({},f);t[o][r][c]=e,g({answers:t}),(a=t[o][r]).length!==i||a.includes(void 0)||m(!0)};return Object(n.useEffect)((function(){v(0)}),[r,o]),l.a.createElement("div",{className:s.questionContainer},l.a.createElement(B.a,{component:"fieldset",style:{display:"block"}},l.a.createElement(H.a,{component:"legend",className:s.question},c+1,". ",a),l.a.createElement(D.a,{row:!0,"aria-label":"Marital Status",name:"marital",value:h,onChange:function(e){if(e.target.value){var a=e.target.value;"skip"!==e.target.value&&(a=parseInt(e.target.value)),v(a),y(a)}}},l.a.createElement(W.a,{labelPlacement:"bottom",value:t?5:1,control:l.a.createElement(z.a,null),label:"1"}),l.a.createElement(W.a,{labelPlacement:"bottom",value:t?4:2,control:l.a.createElement(z.a,null),label:"2"}),l.a.createElement(W.a,{labelPlacement:"bottom",value:3,control:l.a.createElement(z.a,null),label:"3"}),l.a.createElement(W.a,{labelPlacement:"bottom",value:t?2:4,control:l.a.createElement(z.a,null),label:"4"}),l.a.createElement(W.a,{labelPlacement:"bottom",value:t?1:5,control:l.a.createElement(z.a,null),label:"5"}),l.a.createElement("div",{style:{margin:"25px 40px 0px",flexGrow:1,borderTop:"1px solid #a0a9b3"}}),l.a.createElement(W.a,{labelPlacement:"bottom",value:"skip",control:l.a.createElement(z.a,null),label:"n/a"}))))},q=(window&&window.location&&window.location.hostname).includes("fitexperience")?"http://results.thefitexperience.com":"http://localhost:8888/fit-backend",$=Object(N.a)((function(){return{button:{display:"block",margin:"0 auto",fontSize:35,fontFamily:"Libre Baskerville,serif",padding:"0 50px",borderRadius:20,color:"white",textTransform:"none",fontWeight:700,background:"#79bdf2","&:hover":{background:"#1e7ce1"},"&:disabled":{background:"#a0a9b3",color:"white"},marginBottom:50}}})),V=Object(m.f)((function(e){var a=e.history,t=e.currentDimensionIndex,r=e.setCurrentDimensionIndex,o=F(),c=Object(u.a)(o,2),i=c[0],m=i.answers,s=i.progress,E=c[1],d=$(),f=k[t],g=Object(n.useState)(null),p=Object(u.a)(g,2),b=p[0],h=p[1],v=Object(n.useState)(0),O=Object(u.a)(v,2),x=O[0],S=O[1],j=Object(n.useState)(!1),N=Object(u.a)(j,2),w=N[0],C=N[1],I=Object(n.useState)(!0),T=Object(u.a)(I,2),A=T[0],P=T[1],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;window.scrollTo({top:e,left:0,behavior:"smooth"})};Object(n.useEffect)((function(){B(),M()}),[f]);var B=function(){P(!0);var e="".concat(q,"/wp-json/wp/v2/").concat(f,"?orderby=menu_order&order=asc");fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){P(!1),S(0),h(e),a(e)})).catch((function(e){P(!1),console.log(e)}));var a=function(e){var a=Object(R.a)({},m);e.forEach((function(e){a[f][e.slug]=[]}))}};return b?l.a.createElement("div",null,A?l.a.createElement("div",null,l.a.createElement("h2",null,"Loading"),l.a.createElement(L.a,null)):l.a.createElement(l.a.Fragment,null,b[x].acf.questions.map((function(e,a){return l.a.createElement(U,{dimension:f,subdimension:b[x].slug,key:a,index:a,reverse:e.reverse_sort,text:e.question,totalQs:b[x].acf.questions.length,setCanContinue:C})})),l.a.createElement("div",{style:{marginTop:20}},l.a.createElement(y.a,{variant:"contained",disabled:!w,onClick:function(){M(200),E({progress:s+1}),C(!1),b.length>x+1?S(x+1):k.length>t+1?r(t+1):a.push("/results")},className:d.button},"Continue")))):l.a.createElement(l.a.Fragment,null,A?l.a.createElement("div",null,l.a.createElement("h2",null,"Loading"),l.a.createElement(L.a,null)):null)})),_=t(41),Y=t.n(_),J=t(42),Q=t.n(J),Z=t(43),K=t.n(Z),X=t(44),ee=t.n(X),ae=t(45),te=t.n(ae),ne=Object(N.a)((function(){return{progressWrapper:{display:"block",textAlign:"center"},totalProgress:{textAlign:"right",fontFamily:"Open Sans Condensed,Open Sans, sans-serif",fontSize:10,marginRight:"8%"},progressSegment:{display:"inline-block",width:"17%",margin:"0 1%",height:5,"& img":{filter:"grayscale(1)",opacity:.4,width:70}},cog:{"& img":{filter:"none",opacity:1}},emo:{"& img":{filter:"none",opacity:1}},phy:{"& img":{filter:"none",opacity:1}},fin:{"& img":{filter:"none",opacity:1}},spi:{"& img":{filter:"none",opacity:1}}}})),le=function(e){var a=e.currentDimensionIndex,t=ne(),n=F(),r=100*Object(u.a)(n,1)[0].progress/29;return l.a.createElement("div",{className:t.progressWrapper},l.a.createElement("div",{className:t.totalProgress},parseInt(r),"% complete"),k.map((function(e,n){return l.a.createElement("div",{key:n,className:"".concat(t.progressSegment,"\n                    ").concat(0===n&&a>=n?t.cog:1===n&&a>=n?t.emo:2===n&&a>=n?t.phy:3===n&&a>=n?t.fin:4===n&&a>=n?t.spi:"")},0===n&&l.a.createElement("img",{src:Y.a,alt:"dimension logo"}),1===n&&l.a.createElement("img",{src:K.a,alt:"dimension logo"}),2===n&&l.a.createElement("img",{src:ee.a,alt:"dimension logo"}),3===n&&l.a.createElement("img",{src:Q.a,alt:"dimension logo"}),4===n&&l.a.createElement("img",{src:te.a,alt:"dimension logo"}))})))},re=Object(m.f)((function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement("div",{style:{padding:40,paddingTop:0}},l.a.createElement("h1",{style:{textAlign:"center",marginBottom:30}},"Assessment"),l.a.createElement("h2",{style:{textAlign:"center",fontFamily:"Open Sans, lato, sans-serif",fontSize:"1.8rem",margin:"50px 0",color:A[k[t]][6]}},k[t].toUpperCase()),l.a.createElement(le,{currentDimensionIndex:t}),l.a.createElement("p",{style:{fontSize:18,lineHeight:1.5,margin:"30px 20px",textAlign:"center"}},"There are no right or wrong answers. Try to answer candidly.\xa0 Please rate how true the following statements are for you on a scale of 1-5:"),l.a.createElement("img",{src:T.a,alt:"rating scale",style:{maxWidth:"100%",marginBottom:30}}),l.a.createElement(V,{currentDimensionIndex:t,setCurrentDimensionIndex:r})),l.a.createElement(C,null),l.a.createElement(O,null))})),oe=Object(m.f)((function(e){var a=e.history,t=F(),r=Object(u.a)(t,1)[0],o=r.answers,c=r.name,i=r.email,m=r.age,s=r.income,E=r.weight,d=r.height,f=r.gender,g=r.marital,p=r.family,b=r.ethnicity,h=r.education,v=r.language,y=r.employment,O=r.location,x=function(e){var a=e.reduce((function(e,a){return parseInt(e)+parseInt(a)}))/e.length;return parseFloat(a.toFixed(2))};return Object(n.useEffect)((function(){var e,t,n,l=!1;if(Object.keys(o).forEach((function(e){Object.entries(o[e]).length>0&&(l=!0)})),l){var r=function(e){console.log(e);var a={},t=[];for(var n in e){var l=[];for(var r in e[n]){var o=e[n][r].filter((function(e){return"skip"!==e}));if(o.length){var c="".concat(n.substr(0,1),"-").concat(r),i=20*x(o);a[c]=i,l.push(i),t.push(i)}}l.length&&(a["t-".concat(n,"-score")]=x(l))}return a["t-overall-score"]=x(t),console.log(a),a}(o);n=r,[{participant:c},{email:i},{age:m},{income:s},{weight:E},{height:d},{gender:f},{education:h},{marital:g},{family:p},{ethnicity:b},{language:v},{employment:y},{location:O}].forEach((function(e){var a=Object.keys(e)[0];""!==e[a]&&(n[a]=e[a])})),(r=n)&&(r.nodupe=(e=1,t=999999,Math.floor(Math.random()*(t-e))+e),window.location="".concat(q,"/results?").concat(function(e){var a=[];for(var t in e)e.hasOwnProperty(t)&&a.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return a.join("&")}(r)))}else a.push("/")}),[]),l.a.createElement("section",{style:{textAlign:"center",padding:"80px 50px"}},l.a.createElement(L.a,null))})),ce=t(65),ie=t.n(ce),me=Object(N.a)((function(){return{contentWrap:{padding:"40px 60px"},primaryContent:{marginBottom:40,"& p":{fontSize:20,lineHeight:1.4,color:"#a0a9b3"}},secondaryContent:{"& h3":{fontSize:"1.5rem",marginBottom:15},"& p":{fontSize:20,lineHeight:1.4,color:"#a0a9b3"},"& a":{textTransform:"uppercase",fontWeight:"bold",textDecoration:"none",color:"#79bdf2"}},h2:{marginTop:60,textAlign:"center",fontSize:"1.8rem","&:after":{content:"''",borderBottom:"1px solid",width:60,display:"block",margin:"20px auto"}},imgRow:{display:"inline-block",textAlign:"center",padding:"20px 8px 5px","& span":{fontWeight:700,fontSize:10,display:"block",fontFamily:"Open Sans Condensed, Open Sans, sans-serif"},"& img":{width:65}},subColors:{fontWeight:700,display:"inline-block",padding:"5px 20px 8px 0",fontSize:15,fontFamily:"Open Sans Condensed"},imgWrap:{paddingRight:10,"& img":{maxWidth:120,width:"90%"}},dimensionContent:{fontSize:22,marginTop:10,lineHeight:1.5,color:"#a0a9b3"},subHeader:{fontWeight:"bold",fontFamily:"Open Sans, lato, sans-serif",textTransform:"uppercase",marginTop:30,marginBottom:0,"& span":{color:"#576a7c!important",fontFamily:"Libre Baskerville",textTransform:"none"}},allSet:{color:"#79bdf2",marginTop:60,textAlign:"center",fontSize:"1rem",fontFamily:"Open Sans, lato, sans-serif",fontWeight:900,"&:after":{content:"''",borderBottom:"1px solid #aaaaaa",width:180,display:"block",margin:"25px auto"}},continueButton:{display:"block",margin:"0 auto",fontSize:50,fontFamily:"Libre Baskerville,serif",padding:"0 50px",borderRadius:20,color:"white",textTransform:"none",fontWeight:700,background:"#79bdf2","&:hover":{background:"#1e7ce1"}}}})),se=Object(m.f)((function(e){var a=e.history,t=me(),r=Object(n.useState)(!1),o=Object(u.a)(r,2),c=o[0],i=o[1],m=Object(n.useState)({}),s=Object(u.a)(m,2),d=s[0],f=s[1],g=Object(n.useState)([]),p=Object(u.a)(g,2),b=p[0],h=p[1],v=["i","ii","iii","iv","v"];return Object(n.useEffect)((function(){!function(){i(!0);var e="".concat(q,"/wp-json/wp/v2/pages/116");fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){i(!1),f({circumplex:e.acf.circumplex,primary:e.content.rendered,secondary:e.acf.secondary_text}),h([{key:"cognitive",title:"Cognitive",img:Y.a,content:e.acf.cognitive_description,subdimensions:["LEARNING STRATEGIES","INTELLECTUAL ENGAGEMENT","EFFORTFUL CONTROL","ATTENTION","AUTONOMY","SOCIAL COGNITION"]},{key:"emotional",title:"Emotional",img:Q.a,content:e.acf.emotional_description,subdimensions:["CURRENT EMOTIONAL HEALTH","SELF-COMPASSION AND EMOTIONAL AWARENESS","STRESS RESILIENCE","GRATITUDE AND POSITIVITY","MINDSET","SOCIAL ENGAGEMENT"]},{key:"financial",title:"Financial",img:ee.a,content:e.acf.financial_description,subdimensions:["LONG-TERM PERSPECTIVE","SHORT-TERM PERSPECTIVE","REDUCE SADNESS","INCREASE HAPPINESS","NON-PECUNIARY"]},{key:"physical",title:"Physical",img:K.a,content:e.acf.physical_description,subdimensions:["NUTRITION","NUTRITIONAL KNOWLEDGE","ACTIVITY LEVEL","AEROBIC ACTIVITY","STRENGTH TRAINING","SLEEP HABITS","SELF-IMAGE"]},{key:"spiritual",title:"Spiritual",img:te.a,content:e.acf.spiritual_description,subdimensions:["CONNECTION","COMPASSION AND EMPATHY","FORGIVENESS","PURPOSE","PRESENCE"]}])})).catch((function(e){i(!1),console.log(e)}))}()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),c?l.a.createElement("div",{className:t.contentWrap},l.a.createElement("h2",null,"Loading"),l.a.createElement(L.a,null)):l.a.createElement("div",{className:t.contentWrap},l.a.createElement("div",{className:t.primaryContent},ie()(d.primary)),l.a.createElement(E.a,{container:!0,className:t.secondaryContent,spacing:5},l.a.createElement(E.a,{item:!0,sm:4,style:{display:"flex",flexDirection:"row",alignItems:"center"}},l.a.createElement("img",{src:d.circumplex,alt:"circumplex example",width:"100%"})),l.a.createElement(E.a,{item:!0,sm:8},l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:A.cognitive[6]}},"COGNITIVE"),l.a.createElement("img",{src:Y.a,alt:"dimension"})),l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:A.physical[5]}},"PHYSICAL"),l.a.createElement("img",{src:K.a,alt:"dimension"})),l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:A.spiritual[6]}},"SPIRITUALITY"),l.a.createElement("img",{src:te.a,alt:"dimension"})),l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:A.emotional[6]}},"EMOTIONAL"),l.a.createElement("img",{src:Q.a,alt:"dimension"})),l.a.createElement("div",{className:t.imgRow},l.a.createElement("span",{style:{color:A.financial[6]}},"FINANCIAL"),l.a.createElement("img",{src:ee.a,alt:"dimension"})),ie()(d.secondary))),l.a.createElement("h2",{className:t.h2},"Table of Contents"),b.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("h3",{className:t.subHeader,style:{color:A[e.key][6]}},l.a.createElement("span",null,v[a],".")," ",e.title),l.a.createElement(E.a,{container:!0,spacing:2,style:{display:"flex",flexDirection:"row",alignItems:"center"}},l.a.createElement(E.a,{item:!0,sm:2},l.a.createElement("div",{className:t.imgWrap},l.a.createElement("img",{src:e.img,alt:"dim"}))),l.a.createElement(E.a,{item:!0,sm:10,style:{margin:"20px 0",paddingLeft:20,borderLeft:"1px solid",borderColor:A[e.key][6]}},l.a.createElement("p",{className:t.dimensionContent},e.content),e.subdimensions.map((function(a,n){return l.a.createElement("span",{key:n,className:t.subColors,style:{color:A[e.key][n]}},a)})))))})),l.a.createElement("h3",{className:t.allSet},"ALL SET?"),l.a.createElement(y.a,{className:t.continueButton,variant:"contained",onClick:function(){a.push("/your-info")}},"Let's begin")),l.a.createElement(C,null),l.a.createElement(O,null))})),ue=t(96),Ee=t(208),de=t(168),fe=Object(N.a)((function(){return{form:{padding:"0 60px 30px","& h1":{textAlign:"center",marginBottom:45},"& .MuiOutlinedInput-root":{borderRadius:0,background:"#efefef",color:"#576a7c"},"& .MuiFormControl-root":{width:"45%",marginRight:"5%",marginBottom:20,border:0,"& label":{fontWeight:700},"& .MuiFormLabel-asterisk":{color:"#79bdf2"},"& .MuiOutlinedInput-notchedOutline":{border:"none"},"@media(max-width:480px)":{width:"100%"}},"& .MuiFormLabel-root":{fontWeight:700,color:"#576a7c",marginBottom:10},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#79bdf2"},"& .MuiIconButton-colorSecondary:hover":{background:"rgba(121, 189, 242,.08)"}},left:{width:"50%",float:"left",margin:0,display:"inline-block"},right:{width:"50%",float:"right",margin:0,display:"inline-block"},formControl:{paddingBottom:40},button:{display:"block",margin:"0 auto",fontSize:35,fontFamily:"Libre Baskerville,serif",padding:"0 50px",borderRadius:20,color:"white",textTransform:"none",fontWeight:700,background:"#79bdf2","&:hover":{background:"#1e7ce1"}}}})),ge=Object(m.f)((function(e){var a=e.history,t=fe(),r=F(),o=Object(u.a)(r,2);Object(ue.a)(o[0]);var c=o[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),s=m[0],E=m[1],d=Object(n.useState)(""),f=Object(u.a)(d,2),g=f[0],p=f[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),v=h[0],x=h[1],S=Object(n.useState)(""),N=Object(u.a)(S,2),w=N[0],I=N[1],T=Object(n.useState)(""),k=Object(u.a)(T,2),A=k[0],R=k[1],L=Object(n.useState)(""),P=Object(u.a)(L,2),M=P[0],G=P[1],U=Object(n.useState)(""),q=Object(u.a)(U,2),$=q[0],V=q[1],_=Object(n.useState)(""),Y=Object(u.a)(_,2),J=Y[0],Q=Y[1],Z=Object(n.useState)(""),K=Object(u.a)(Z,2),X=K[0],ee=K[1],ae=Object(n.useState)(""),te=Object(u.a)(ae,2),ne=te[0],le=te[1],re=Object(n.useState)(""),oe=Object(u.a)(re,2),ce=oe[0],ie=oe[1],me=Object(n.useState)(!1),se=Object(u.a)(me,2),ge=se[0],pe=se[1],be=Object(n.useState)(!1),he=Object(u.a)(be,2),ve=he[0],ye=he[1],Oe=Object(n.useState)(""),xe=Object(u.a)(Oe,2),Se=xe[0],je=xe[1],Ne=Object(n.useState)(""),we=Object(u.a)(Ne,2),Ce=we[0],Ie=we[1],Te=Object(n.useState)(""),ke=Object(u.a)(Te,2),Ae=ke[0],Re=ke[1],Le=Object(n.useState)(""),Pe=Object(u.a)(Le,2),Me=Pe[0],Fe=Pe[1],Be=Object(n.useRef)(null),De=Object(n.useRef)(null);return Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement("form",{className:t.form,onSubmit:function(e){if(e.preventDefault(),ve||ge)return console.log("erre"),ie("Please fix the highlighted field(s) above"),ve&&Be.current&&Be.current.focus(),void(ge&&De.current&&De.current.focus());c({name:s,email:g,age:v,income:w,weight:A,height:M,gender:Se,marital:Ae,family:$,ethnicity:J,education:X,language:ne,employment:Ce,location:Me}),a.push("/assessment")}},l.a.createElement("h1",null,"Tell us about yourself"),l.a.createElement("div",{className:t.formControl,style:{margin:"0 -10px 0px"}},l.a.createElement(Ee.a,{variant:"outlined",required:!0,ref:Be,label:"Name",error:ve,value:s,onChange:function(e){return E(e.target.value)},onBlur:function(){ye(""===s)}}),l.a.createElement(Ee.a,{variant:"outlined",required:!0,ref:De,label:"Email",error:ge,helperText:ge?"Invalid entry.":"",value:g,onChange:function(e){return p(e.target.value)},onBlur:function(){pe(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(g))}})),l.a.createElement("div",{className:t.formControl},l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Gender"),l.a.createElement(D.a,{"aria-label":"gender",name:"gender1",value:Se,onChange:function(e){return je(e.target.value)}},l.a.createElement(W.a,{value:"female",control:l.a.createElement(z.a,null),label:"Female"}),l.a.createElement(W.a,{value:"male",control:l.a.createElement(z.a,null),label:"Male"}),l.a.createElement(W.a,{value:"other",control:l.a.createElement(z.a,null),label:"Other"}),l.a.createElement(W.a,{value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"}))),l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Age (optional)"),l.a.createElement(D.a,{style:{display:"block"},"aria-label":"age",name:"age",value:v,onChange:function(e){return x(e.target.value)}},l.a.createElement(W.a,{className:t.left,value:"0-15",control:l.a.createElement(z.a,null),label:"0-15"}),l.a.createElement(W.a,{className:t.right,value:"46-55",control:l.a.createElement(z.a,null),label:"46-55"}),l.a.createElement(W.a,{className:t.left,value:"16-25",control:l.a.createElement(z.a,null),label:"16-25"}),l.a.createElement(W.a,{className:t.right,value:"56-65",control:l.a.createElement(z.a,null),label:"56-65"}),l.a.createElement(W.a,{className:t.left,value:"26-35",control:l.a.createElement(z.a,null),label:"26-35"}),l.a.createElement(W.a,{className:t.right,value:"66-75",control:l.a.createElement(z.a,null),label:"66-75"}),l.a.createElement(W.a,{className:t.left,value:"36-45",control:l.a.createElement(z.a,null),label:"36-45"}),l.a.createElement(W.a,{className:t.right,value:"75+",control:l.a.createElement(z.a,null),label:"75+"}),l.a.createElement(W.a,{className:t.left,value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"})))),l.a.createElement("div",{className:t.formControl},l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Ethnicity (optional)"),l.a.createElement(D.a,{"aria-label":"ethnicity",name:"ethnicity",value:J,onChange:function(e){return Q(e.target.value)}},l.a.createElement(W.a,{value:"caucasian",control:l.a.createElement(z.a,null),label:"Caucasian"}),l.a.createElement(W.a,{value:"african-american",control:l.a.createElement(z.a,null),label:"African American"}),l.a.createElement(W.a,{value:"latino-hispanic",control:l.a.createElement(z.a,null),label:"Latino or Hispanic"}),l.a.createElement(W.a,{value:"asian",control:l.a.createElement(z.a,null),label:"Asian"}),l.a.createElement(W.a,{value:"native-american",control:l.a.createElement(z.a,null),label:"Native American"}),l.a.createElement(W.a,{value:"islander",control:l.a.createElement(z.a,null),label:"Native Hawaiian or Pacific Islander"}),l.a.createElement(W.a,{value:"two-or-more",control:l.a.createElement(z.a,null),label:"Two or More"}),l.a.createElement(W.a,{value:"other",control:l.a.createElement(z.a,null),label:"Other/Unknown"}),l.a.createElement(W.a,{value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"}))),l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Annual Household Income (optional)"),l.a.createElement(D.a,{"aria-label":"income",name:"income",value:w,onChange:function(e){return I(e.target.value)}},l.a.createElement(W.a,{value:"less-25",control:l.a.createElement(z.a,null),label:"Less than $25,000"}),l.a.createElement(W.a,{value:"26-50",control:l.a.createElement(z.a,null),label:"$26,000-$50,000"}),l.a.createElement(W.a,{value:"51-100",control:l.a.createElement(z.a,null),label:"$51,000-$100,000"}),l.a.createElement(W.a,{value:"101-150",control:l.a.createElement(z.a,null),label:"$101,00-$150,000"}),l.a.createElement(W.a,{value:"151-200",control:l.a.createElement(z.a,null),label:"$151,000-$200,000"}),l.a.createElement(W.a,{value:"more-200",control:l.a.createElement(z.a,null),label:"More than $200,000"}),l.a.createElement(W.a,{value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"})))),l.a.createElement("div",{className:t.formControl,style:{margin:"0 -10px 0px"}},l.a.createElement(Ee.a,{variant:"outlined",placeholder:"ex: Boulder, CO, USA",label:"Location (optional)",style:{width:"95%"},error:ve,value:Me,onChange:function(e){return Fe(e.target.value)}}),l.a.createElement(Ee.a,{variant:"outlined",label:"Height (optional)",value:M,placeholder:"ex: 6'1\"",onChange:function(e){return G(e.target.value)}}),l.a.createElement(Ee.a,{variant:"outlined",label:"Weight (optional)",value:A,placeholder:"ex: 150 pounds",onChange:function(e){return R(e.target.value)}})),l.a.createElement("div",{className:t.formControl},l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Marital Status (optional)"),l.a.createElement(D.a,{"aria-label":"Marital Status",name:"marital",value:Ae,onChange:function(e){return Re(e.target.value)}},l.a.createElement(W.a,{value:"single",control:l.a.createElement(z.a,null),label:"Single"}),l.a.createElement(W.a,{value:"married",control:l.a.createElement(z.a,null),label:"Married"}),l.a.createElement(W.a,{value:"divorced",control:l.a.createElement(z.a,null),label:"Divorced"}),l.a.createElement(W.a,{value:"widowed",control:l.a.createElement(z.a,null),label:"Widowed"}),l.a.createElement(W.a,{value:"domestic-partnership",control:l.a.createElement(z.a,null),label:"Domestic partnership"}),l.a.createElement(W.a,{value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"}))),l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Family and Dependents (optional)"),l.a.createElement(D.a,{"aria-label":"family",name:"family",value:$,onChange:function(e){return V(e.target.value)}},l.a.createElement(W.a,{value:"none",control:l.a.createElement(z.a,null),label:"None"}),l.a.createElement(W.a,{value:"1",control:l.a.createElement(z.a,null),label:"1"}),l.a.createElement(W.a,{value:"2-4",control:l.a.createElement(z.a,null),label:"2-4"}),l.a.createElement(W.a,{value:"4+",control:l.a.createElement(z.a,null),label:"More than 4"}),l.a.createElement(W.a,{value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"})))),l.a.createElement("div",{className:t.formControl},l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Education (optional)"),l.a.createElement(D.a,{"aria-label":"Education",name:"education",value:X,onChange:function(e){return ee(e.target.value)}},l.a.createElement(W.a,{value:"some-high-school",control:l.a.createElement(z.a,null),label:"Some High School"}),l.a.createElement(W.a,{value:"high-school",control:l.a.createElement(z.a,null),label:"High School"}),l.a.createElement(W.a,{value:"bachelor",control:l.a.createElement(z.a,null),label:"Bachelor's Degree"}),l.a.createElement(W.a,{value:"masters",control:l.a.createElement(z.a,null),label:"Master's Degree"}),l.a.createElement(W.a,{value:"phd",control:l.a.createElement(z.a,null),label:"Ph. D or higher"}),l.a.createElement(W.a,{value:"trade-school",control:l.a.createElement(z.a,null),label:"Trade School"}),l.a.createElement(W.a,{value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"}))),l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Employment (optional)"),l.a.createElement(D.a,{"aria-label":"employment",name:"employment",value:Ce,onChange:function(e){return Ie(e.target.value)}},l.a.createElement(W.a,{value:"full-time",control:l.a.createElement(z.a,null),label:"Employed Full-Time"}),l.a.createElement(W.a,{value:"part-time",control:l.a.createElement(z.a,null),label:"Employed Part-Time"}),l.a.createElement(W.a,{value:"seeking",control:l.a.createElement(z.a,null),label:"Seeking Opportunities"}),l.a.createElement(W.a,{value:"retired",control:l.a.createElement(z.a,null),label:"Retired"}),l.a.createElement(W.a,{value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"})))),l.a.createElement("div",{className:t.formControl},l.a.createElement(B.a,{component:"fieldset"},l.a.createElement(H.a,{component:"legend"},"Language (optional)"),l.a.createElement(D.a,{"aria-label":"language",name:"language",value:ne,onChange:function(e){return le(e.target.value)}},l.a.createElement(W.a,{value:"english",control:l.a.createElement(z.a,null),label:"English"}),l.a.createElement(W.a,{value:"spanish",control:l.a.createElement(z.a,null),label:"Spanish"}),l.a.createElement(W.a,{value:"portugese",control:l.a.createElement(z.a,null),label:"Portugese"}),l.a.createElement(W.a,{value:"french",control:l.a.createElement(z.a,null),label:"French"}),l.a.createElement(W.a,{value:"mandarin",control:l.a.createElement(z.a,null),label:"Mandarin"}),l.a.createElement(W.a,{value:"arabic",control:l.a.createElement(z.a,null),label:"Arabic"}),l.a.createElement(W.a,{value:"other",control:l.a.createElement(z.a,null),label:"Other"}),l.a.createElement(W.a,{value:"n-a",control:l.a.createElement(z.a,null),label:"Prefer not to say"})))),ce&&l.a.createElement(de.a,{style:{color:"#f44336"}},ce),l.a.createElement("br",null),l.a.createElement(y.a,{variant:"contained",type:"submit",className:t.button},"Continue")),l.a.createElement(C,null),l.a.createElement(O,null))})),pe=Object(m.f)((function(e){var a=e.location;return s.a.initialize("UA-179037435-1"),Object(n.useEffect)((function(){s.a.pageview(window.location.pathname+window.location.search)}),[a]),l.a.createElement("div",{id:"page-container"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",render:se}),l.a.createElement(m.a,{path:"/assessment",render:re}),l.a.createElement(m.a,{path:"/your-info",render:ge}),l.a.createElement(m.a,{path:"/results",render:oe})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=Object(i.a)();o.a.render(l.a.createElement(M,{initialState:{questionnaireId:null,questionnaireTitle:null,questions:[],answers:{cognitive:{},emotional:{},physical:{},financial:{},spiritual:{}},name:"",email:"",age:"",income:"",weight:"",height:"",gender:"",occupation:"",marital:"",ethnicity:"",education:"",employment:"",progress:0},reducer:function(e,a){return Object(R.a)(Object(R.a)({},e),a)}},l.a.createElement(c.a,{history:be},l.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,a,t){e.exports=t.p+"static/media/cog.a9063339.svg"},42:function(e,a,t){e.exports=t.p+"static/media/emo.671822c6.svg"},43:function(e,a,t){e.exports=t.p+"static/media/phy.95da910b.svg"},44:function(e,a,t){e.exports=t.p+"static/media/fin.0864f32a.svg"},45:function(e,a,t){e.exports=t.p+"static/media/spi.10d304c6.svg"},55:function(e,a,t){e.exports=t.p+"static/media/logo.d0d785cc.png"},95:function(e,a,t){e.exports=t.p+"static/media/scale.7f3bfc1b.png"}},[[113,1,2]]]);
//# sourceMappingURL=main.144bcbd9.chunk.js.map