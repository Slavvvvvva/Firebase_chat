(this.webpackJsonpfirebase_chat=this.webpackJsonpfirebase_chat||[]).push([[0],{19:function(e,t,a){e.exports={login_vrapper:"login-page_login_vrapper__1trkP",login_form:"login-page_login_form__1mqBW",login_form_crete:"login-page_login_form_crete__3h1QU"}},26:function(e,t,a){e.exports={header:"chat-room-page_header__2hFff",back_botton:"chat-room-page_back_botton__2jU5m",chat_name:"chat-room-page_chat_name__3ries",chat_description:"chat-room-page_chat_description__lAYSZ",message_vrapper:"chat-room-page_message_vrapper__3rcAq",input_vrapper:"chat-room-page_input_vrapper__1Ksw1"}},28:function(e,t,a){e.exports={chatItem:"chat-room-item_chatItem__3e-vn",icon:"chat-room-item_icon__1N4YV",text_vrapper:"chat-room-item_text_vrapper__1hFvd",name:"chat-room-item_name__3tE6H",description:"chat-room-item_description__30HmN"}},29:function(e,t,a){e.exports={create_page_vrapper:"create_page_create_page_vrapper__ttxCg",description_vrapper:"create_page_description_vrapper__1UeT6",description:"create_page_description__A5ji_",input_vrapper:"create_page_input_vrapper__3zqWI"}},34:function(e,t,a){e.exports={user:"user-icon_user__QemHu",userImg:"user-icon_userImg__3sdi1",online:"user-icon_online__zvbgh"}},35:function(e,t,a){e.exports={form_vrapper:"form-input_form_vrapper__1fZ1O",input:"form-input_input__1_kFz",lebel:"form-input_lebel__1Hg_A"}},36:function(e,t,a){e.exports={profile_vrapper:"profile_page_profile_vrapper__1mBR0",user_info_vrapper:"profile_page_user_info_vrapper__3JBEu"}},39:function(e,t,a){e.exports={header:"mainPage_header__3hhQ3",chatlist:"mainPage_chatlist__2OVt-"}},42:function(e,t,a){e.exports={navigationButton:"navigation-button_navigationButton__2Rg5l",icon:"navigation-button_icon__37yAR"}},43:function(e,t,a){e.exports={textarea:"autogrow-textarea_textarea__2thjN",send_button:"autogrow-textarea_send_button__2QRBR"}},45:function(e,t,a){e.exports={body:"App_body__wWwgO"}},46:function(e,t,a){e.exports={navigation:"navigation_navigation__1kn-L"}},50:function(e,t,a){e.exports={message_vrapper:"message_message_vrapper__1e3l2",text_vrapper:"message_text_vrapper__3HIzi",text:"message_text__1mhiz",time:"message_time__36v47",name:"message_name__40zYc",not_your_message_vrapper:"message_not_your_message_vrapper__23Fik",not_your_text_vrapper:"message_not_your_text_vrapper__2c_9K",not_your_text:"message_not_your_text__1QbuQ",not_your_time:"message_not_your_time__YXTtQ",not_your_name:"message_not_your_name__3vYfi"}},51:function(e,t,a){e.exports={button:"custom-button_button__2nFsm"}},62:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(33),s=a.n(c),i=(a(62),a(27)),o=a(6),u=a(45),l=a.n(u),p=a(39),j=a.n(p),d=a.p+"static/media/chat.fc2014b3.svg",_=a(28),m=a.n(_),b=a(1),h=function(e){var t=e.chatName,a=e.chatDescription,n=e.chatImg,r=e.patch;return Object(b.jsxs)(i.b,{to:"/chatroom/".concat(r),className:m.a.chatItem,children:[Object(b.jsx)("img",{className:m.a.icon,src:n,alt:"chat room icon"}),Object(b.jsxs)("div",{className:m.a.text_vrapper,children:[Object(b.jsxs)("p",{className:m.a.name,children:[" ",t," "]}),Object(b.jsxs)("p",{className:m.a.description,children:[" ",a," "]})]})]})},f=a(46),O=a.n(f),g=a(42),v=a.n(g),x=function(e){var t=e.patch,a=e.image,n=e.alt;return Object(b.jsx)(i.b,{to:t,className:v.a.navigationButton,children:Object(b.jsx)("img",{src:a,alt:n,className:v.a.icon})})},y=a.p+"static/media/profile.6d853f3a.svg",N=a.p+"static/media/settings.2f5cad20.svg",w=a.p+"static/media/chats.63b19f5e.svg",C=function(){return Object(b.jsxs)("nav",{className:O.a.navigation,children:[Object(b.jsx)(x,{patch:"/",alt:"Go to chatrooms page",image:w}),Object(b.jsx)(x,{patch:"/profile",alt:"Go to your profile page",image:y}),Object(b.jsx)(x,{patch:"/create",alt:"Go to create new chatroom",image:N})]})},S=a(11),U=a(10),E=function(e){return e.chat},L=Object(U.a)([E],(function(e){return e.asyncMessege})),M=Object(U.a)([E],(function(e){return e.chatList})),k=Object(U.a)([E],(function(e){return e.message})),I=a(31);a(44),a(82);I.a.initializeApp({apiKey:"AIzaSyDR-QQpSb3gMwU0bMweizV_8H8h1HGVuqQ",authDomain:"fir-chat-74bd6.firebaseapp.com",projectId:"fir-chat-74bd6",storageBucket:"fir-chat-74bd6.appspot.com",messagingSenderId:"140017521818",appId:"1:140017521818:web:a15122b57bdca461ed3b23"});var R=I.a.firestore(),A=I.a,T="SET_CTATROOM_LIST",F="SET_ASYNC_MESSAGE",P="GET_MESEGES",G=function(e){return{type:F,payload:e}},D=Object(U.b)({chatList:M}),B=Object(S.b)(D,{asyncGetChatList:function(){return function(e){R.collection("ChatList").get().then((function(t){var a=[];t.forEach((function(e){return a.push(e.data())})),e({type:T,payload:a})}))}}})((function(e){var t=e.chatList,a=e.asyncGetChatList;if(Object(n.useEffect)((function(){a()}),[a]),!t)return Object(b.jsx)("p",{children:"loading"});var r=t.map((function(e,t){return Object(b.jsx)(h,{chatName:e.name,chatDescription:e.description,chatImg:e.imageUrl||d,patch:e.name},"".concat(t,"jkdjndki"))}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:j.a.header,children:[Object(b.jsx)("h1",{children:"Chat rooms"}),Object(b.jsx)("input",{type:"search",placeholder:"Search"})]}),Object(b.jsx)("div",{className:j.a.chatlist,children:r}),Object(b.jsx)(C,{})]})})),Q=a(18),q=a.n(Q),z=a(21),Y=a(23),H=a(48),V=a.n(H),W=a(43),J=a.n(W),K=Object(U.a)([function(e){return e.user}],(function(e){return e.currentUser})),X=Object(U.b)({currentUser:K,errorMesege:L}),Z=Object(S.b)(X,{asyncSendMesege:function(e,t,a){return function(n){R.collection("".concat(e)).add({uid:t.uid,displayName:t.displayName,email:t.email,photoURL:t.photoURL,text:a,createdAt:A.firestore.FieldValue.serverTimestamp()}).catch((function(e){var t=e.errorCode,a=e.errorMessage;n(G(t+""+a))}))}}})((function(e){var t=e.currentUser,a=e.asyncSendMesege,r=e.errorMesege,c=Object(n.useState)(""),s=Object(Y.a)(c,2),i=s[0],u=s[1],l=Object(o.h)().chatRoomName,p=function(){var e=Object(z.a)(q.a.mark((function e(){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=i.replace(/\s+/g," "))&&" "!==n&&a(l,t,n),u("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V.a,{value:i,rows:1,maxRows:13,className:J.a.textarea,placeholder:r||"Messege",onChange:function(e){u(e.target.value)}}),Object(b.jsx)("button",{className:J.a.send_button,onClick:p})]})})),$=a(49),ee=a.n($),te=a(34),ae=a.n(te),ne=a.p+"static/media/iconfinder_user-alt_285645.75fdf75c.svg",re=function(e){var t=e.online,a=e.image;return Object(b.jsxs)("div",{className:ae.a.user,children:[Object(b.jsx)("img",{className:ae.a.userImg,alt:"user avatar",src:a||ne}),t&&Object(b.jsx)("div",{className:ae.a.online})]})},ce=a(50),se=a.n(ce),ie=function(e){var t=e.notYour,a=e.children,n=e.time,r=e.name,c=ee.a.bind(se.a),s=c({message_vrapper:!0,not_your_message_vrapper:t}),i=c({text_vrapper:!0,not_your_text_vrapper:t}),o=c({text:!0,not_your_text:t}),u=c({time:!0,not_your_time:t}),l=c({name:!0,not_your_name:t});return Object(b.jsxs)("div",{className:s,children:[Object(b.jsx)(re,{}),Object(b.jsx)("div",{className:i,children:Object(b.jsx)("p",{className:o,children:a})}),Object(b.jsx)("p",{className:u,children:n}),Object(b.jsx)("p",{className:l,children:r})]})},oe=a(26),ue=a.n(oe),le=Object(U.b)({currentUser:K,message:k}),pe=Object(S.b)(le,{acyncGetMesege:function(e){return function(t){R.collection("".concat(e)).orderBy("createdAt").onSnapshot((function(e){var a=[];e.forEach((function(e){if("Local"!==e.metadata.hasPendingWrites)return a.push(e.data())})),t({type:P,payload:a})}))}}})((function(e){var t=e.currentUser,a=e.message,r=e.acyncGetMesege,c=e.chatRoomDescription,s=Object(o.h)().chatRoomName,i=Object(o.g)(),u=Object(n.useRef)(null),l=function(e){var t;null===(t=u.current)||void 0===t||t.scrollIntoView(e)};if(Object(n.useEffect)((function(){r(s)}),[r,s]),Object(n.useEffect)((function(){l({behavior:"auto"})}),[]),Object(n.useEffect)((function(){l({behavior:"smooth"})}),[a]),!a)return Object(b.jsx)("p",{children:"Loading"});var p=a.map((function(e,a){return Object(b.jsx)(ie,{notYour:!(e.uid===t.uid),time:e.createdAt?e.createdAt.toDate().toLocaleTimeString("it-IT"):null,name:e.displayName||e.email,children:e.text},"".concat(a,"kll"))}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:ue.a.header,children:[Object(b.jsx)("button",{className:ue.a.back_botton,onClick:function(){return i.push("/")}}),Object(b.jsx)("p",{className:ue.a.chat_name,children:s}),Object(b.jsx)("p",{className:ue.a.chat_description,children:c})]}),Object(b.jsxs)("div",{className:ue.a.message_vrapper,children:[p,Object(b.jsx)("div",{ref:u})]}),Object(b.jsx)("div",{className:ue.a.input_vrapper,children:Object(b.jsx)(Z,{})})]})})),je=a(22),de=a(7),_e=a(19),me=a.n(_e),be=a(57),he=a(35),fe=a.n(he),Oe=function(e){var t=e.handleChainge,a=e.label,n=Object(be.a)(e,["handleChainge","label"]);return Object(b.jsxs)("div",{className:fe.a.form_vrapper,children:[a?Object(b.jsx)("label",{className:fe.a.lebel,children:a}):null,Object(b.jsx)("input",Object(de.a)({className:fe.a.input,onChange:t},n))]})},ge="SET_CURRENT_USER",ve="SET_ERROR_MESSAGES",xe="LOG_OUT_USER",ye=function(e){return{type:ge,payload:e}},Ne=function(e){return{type:ve,payload:e}},we=function(){return{type:xe}},Ce=a(51),Se=a.n(Ce),Ue=function(e){var t=e.children,a=e.disabled,n=e.type,r=e.clickFunction;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{className:Se.a.button,disabled:a,type:n,onClick:r,children:t})})},Ee=Object(S.b)(null,{asyncCeateAndSetCurrentUser:function(e){var t=e.email,a=e.password;return function(e){A.auth().createUserWithEmailAndPassword(t,a).then((function(t){var a=t.user;e(ye(a))})).catch((function(t){var a=t.errorCode,n=t.errorMessage;e(Ne(a+""+n))}))}},asyncLoginAndSetCurrentUser:function(e,t){return function(a){A.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(ye(t))})).catch((function(e){var t=e.errorCode,n=e.errorMessage;a(Ne(t+""+n))}))}}})((function(e){var t=e.asyncCeateAndSetCurrentUser,a=e.asyncLoginAndSetCurrentUser,r=Object(n.useState)({email:"",password:""}),c=Object(Y.a)(r,2),s=c[0],i=c[1],o=function(){var e=Object(z.a)(q.a.mark((function e(t){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=s.email,r=s.password,a(n,r),i({email:"",password:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,a=t.value,n=t.name;i(Object(de.a)(Object(de.a)({},s),{},Object(je.a)({},n,a)))},l=Object(n.useState)({email:"",password:"",confirmPassword:""}),p=Object(Y.a)(l,2),j=p[0],d=p[1],_=function(){var e=Object(z.a)(q.a.mark((function e(a){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=j.password,r=j.confirmPassword,n===r){e.next=6;break}return alert("password dont match"),e.abrupt("return");case 6:t(j);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.target,a=t.name,n=t.value;d(Object(de.a)(Object(de.a)({},j),{},Object(je.a)({},a,n)))},h=j.email,f=j.password,O=j.confirmPassword;return Object(b.jsxs)("div",{className:me.a.login_vrapper,children:[Object(b.jsxs)("form",{onSubmit:o,className:me.a.login_form,children:[Object(b.jsx)("h2",{className:me.a.title,children:"I already haw an acaunt"}),Object(b.jsx)("span",{className:me.a.description,children:" Sign in with your email and password "}),Object(b.jsx)(Oe,{name:"email",type:"email",value:s.email,handleChainge:u,placeholder:"email",required:!0}),Object(b.jsx)(Oe,{name:"password",type:"password",value:s.password,handleChainge:u,placeholder:"password",required:!0}),Object(b.jsx)(Ue,{type:"submit",disabled:!1,children:" Sign In"})]}),Object(b.jsxs)("form",{onSubmit:_,className:"".concat(me.a.login_form," ").concat(me.a.login_form_crete," "),children:[Object(b.jsx)("h2",{className:me.a.title,children:"Or"}),Object(b.jsx)("span",{className:me.a.description,children:" Create new acaunt with email and password "}),Object(b.jsx)(Oe,{type:"email",name:"email",value:h,onChange:m,placeholder:"Email",required:!0}),Object(b.jsx)(Oe,{type:"password",name:"password",value:f,onChange:m,placeholder:"Password",required:!0}),Object(b.jsx)(Oe,{type:"password",name:"confirmPassword",value:O,onChange:m,placeholder:"Confirm Password",required:!0}),Object(b.jsx)(Ue,{type:"submit",disabled:!1,children:" Sign In"})]})]})})),Le=a(36),Me=a.n(Le),ke=Object(U.b)({currentUser:K}),Ie=Object(S.b)(ke,{asyncLogOutUser:function(){return function(e){A.auth().signOut().then((function(){e(we())})).catch((function(t){var a=t.errorCode,n=t.errorMessage;e(Ne(a+""+n))}))}}})((function(e){var t=e.asyncLogOutUser,a=e.currentUser;return Object(b.jsxs)("div",{className:Me.a.profile_vrapper,children:[Object(b.jsxs)("div",{className:Me.a.user_info_vrapper,children:[Object(b.jsx)(re,{image:a.photoURL,online:!1}),Object(b.jsxs)("p",{className:Me.a.user_nickname,children:[" ",a.displayName||"User name not exist"," "]}),Object(b.jsx)(Ue,{clickFunction:function(){return t()},children:" LogOut "})]}),Object(b.jsx)(C,{})]})})),Re=a(29),Ae=a.n(Re),Te=Object(U.b)({asyncMessege:L}),Fe=Object(S.b)(Te,{asyncCeateNewChatroom:function(e){var t=e.name,a=e.description,n=e.imageUrl;return function(e){R.collection("ChatList").add({name:t,description:a,imageUrl:n}).then((function(){e(G("Sending was suckcesful"))})).catch((function(t){var a=t.errorCode,n=t.errorMessage;e(G(a+""+n))}))}}})((function(e){var t=e.asyncCeateNewChatroom,a=e.asyncMessege,r=Object(n.useState)({name:"",description:"",imageUrl:null}),c=Object(Y.a)(r,2),s=c[0],i=c[1],o=function(){var e=Object(z.a)(q.a.mark((function e(a){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(s),i(Object(de.a)(Object(de.a)({},s),{},{name:"",description:"",imageUrl:null}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,a=t.value,n=t.name;i(Object(de.a)(Object(de.a)({},s),{},Object(je.a)({},n,a)))};return Object(b.jsxs)("div",{className:Ae.a.create_page_vrapper,children:[Object(b.jsx)("div",{className:Ae.a.description_vrapper,children:Object(b.jsx)("p",{className:Ae.a.description,children:" You can create new open chatroom"})}),Object(b.jsx)("div",{className:Ae.a.input_vrapper,children:Object(b.jsxs)("form",{className:Ae.a.form,onSubmit:o,children:[Object(b.jsx)(Oe,{handleChainge:u,name:"name",value:s.name,label:"Chatroom name"}),Object(b.jsx)(Oe,{handleChainge:u,name:"description",value:s.description,label:"Chatroom description"}),Object(b.jsx)(Ue,{disabled:!0,children:" Select chat icon "}),Object(b.jsx)(Ue,{type:"submit",children:" Create "}),a]})}),Object(b.jsx)(C,{})]})})),Pe=Object(U.b)({currentUser:K}),Ge=Object(S.b)(Pe,{asyncIsUserLogined:function(){return function(e){A.auth().onAuthStateChanged((function(t){e(t?ye(t):we())}))}}})((function(e){var t=e.asyncIsUserLogined,a=e.currentUser;return Object(n.useEffect)((function(){t()}),[t]),Object(b.jsx)(i.a,{children:Object(b.jsx)("div",{className:l.a.body,children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/chatroom/:chatRoomName",render:function(){return a?Object(b.jsx)(pe,{}):Object(b.jsx)(o.a,{to:"/login"})}}),Object(b.jsx)(o.b,{path:"/login",render:function(){return a?Object(b.jsx)(o.a,{to:"/"}):Object(b.jsx)(Ee,{})}}),Object(b.jsx)(o.b,{path:"/profile",render:function(){return a?Object(b.jsx)(Ie,{}):Object(b.jsx)(o.a,{to:"/login"})}}),Object(b.jsx)(o.b,{path:"/create",render:function(){return a?Object(b.jsx)(Fe,{}):Object(b.jsx)(o.a,{to:"/login"})}}),Object(b.jsx)(o.b,{path:"/",render:function(){return a?Object(b.jsx)(B,{}):Object(b.jsx)(o.a,{to:"/login"})}}),Object(b.jsx)(o.b,{path:"/*",render:function(){return Object(b.jsx)("h1",{children:" 404 page not found "})}})]})})})})),De=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},Be=a(25),Qe=a(56),qe=a(52),ze=a(53),Ye=a(54),He={currentUser:null,errorMasage:null},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(de.a)(Object(de.a)({},e),{},{currentUser:t.payload,errorMasage:null});case ve:return Object(de.a)(Object(de.a)({},e),{},{errorMasage:t.payload});case xe:return Object(de.a)(Object(de.a)({},e),{},{currentUser:null});default:return e}},We={chatList:null,message:null,asyncMessege:null},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(de.a)(Object(de.a)({},e),{},{chatList:t.payload});case F:return Object(de.a)(Object(de.a)({},e),{},{asyncMessege:t.payload});case P:return Object(de.a)(Object(de.a)({},e),{},{message:t.payload});default:return e}},Ke={key:"root",storage:a.n(Ye).a,whitelist:[]},Xe=Object(Be.b)({user:Ve,chat:Je}),Ze=Object(Qe.a)(Ke,Xe),$e=[ze.a],et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Be.c,tt=Object(Be.d)(Ze,et(Be.a.apply(void 0,$e))),at=Object(qe.a)(tt),nt=tt,rt=a(55);s.a.render(Object(b.jsx)(S.a,{store:nt,children:Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(rt.a,{persistor:at,children:Object(b.jsx)(Ge,{})})})}),document.getElementById("root")),De()}},[[81,1,2]]]);
//# sourceMappingURL=main.f09ba395.chunk.js.map