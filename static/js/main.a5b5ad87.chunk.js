(this.webpackJsonprtchess=this.webpackJsonprtchess||[]).push([[0],{70:function(n,e,t){"use strict";t.r(e);var i=t(1),c=t.n(i),o=t(27),r=t.n(o),a=t(10),s=t.n(a),d=t(15),l=t(5),b=t(34),u=t(11);function h(n){var e,t=n.remoteDescription,i=n.iceServers,c=void 0===i?[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:turn.anyfirewall.com:443?transport=tcp",username:"webrtc",credential:"webrtc"}]:i,o=n.onChannelOpen,r=n.onMessageReceived,a=n.onDisconnect,l=new RTCPeerConnection({iceServers:c});function b(){return(b=Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.createOffer();case 2:e=n.sent,l.setLocalDescription(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(){return(u=Object(d.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.setRemoteDescription(JSON.parse(e));case 2:return n.next=4,l.createAnswer();case 4:t=n.sent,l.setLocalDescription(t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){l.setRemoteDescription(JSON.parse(n))}function p(n){e&&e.send(n)}return new Promise((function(n){l.onicecandidate=function(e){null===e.candidate&&l.localDescription&&(l.localDescription.sdp.replace("b=AS:30","b=AS:1638400"),n({localDescription:JSON.stringify(l.localDescription),setAnswerDescription:h,sendMessage:p}))},l.oniceconnectionstatechange=function(){"disconnected"==l.iceConnectionState&&a()},t?(l.ondatachannel=function(n){var t=n.channel;(e=t).onopen=function(){o()},e.onmessage=function(n){r(n.data)}},function(n){u.apply(this,arguments)}(t)):(function(){try{(e=l.createDataChannel("RTCHESS_CHANNEL_LABEL")).onopen=function(){o()},e.onmessage=function(n){r(n.data)}}catch(n){console.error("No data channel (peerConnection)",n)}}(),function(){b.apply(this,arguments)}())}))}var p,f=t(0);!function(n){n.HOST="HOST",n.SLAVE="SLAVE"}(p||(p={}));var j,m,O,x,g,v=[{urls:"stun:stun.l.google.com:19302"}],y=new b.a,w=Object(i.createContext)({}),C=function(n){var e=n.children,t=Object(i.useState)(void 0),c=Object(l.a)(t,2),o=c[0],r=c[1],a=Object(i.useState)(),b=Object(l.a)(a,2),j=b[0],m=b[1],O=Object(i.useState)(!1),x=Object(l.a)(O,2),g=x[0],C=x[1],S=Object(i.useRef)(),k=Object(i.useCallback)((function(){return C(!0)}),[C]),E=Object(i.useCallback)((function(){C(!1),r(void 0)}),[C,r]),D=Object(i.useCallback)((function(n){try{var e=JSON.parse(n);y.next(e)}catch(t){console.error(t)}}),[]),z=Object(i.useCallback)(Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof o){n.next=2;break}return n.abrupt("return");case 2:return r(p.HOST),n.next=5,h({iceServers:v,onMessageReceived:D,onChannelOpen:k,onDisconnect:E});case 5:S.current=n.sent,m(u.a.encode(S.current.localDescription));case 7:case"end":return n.stop()}}),n)}))),[o,r,D,k,m]),R=Object(i.useCallback)(function(){var n=Object(d.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof o){n.next=2;break}return n.abrupt("return");case 2:return r(p.SLAVE),n.next=5,h({iceServers:v,remoteDescription:u.a.decode(e.description),onMessageReceived:D,onChannelOpen:k,onDisconnect:E});case 5:S.current=n.sent,m(u.a.encode(S.current.localDescription));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[o,r,D,k,m]),A=Object(i.useCallback)((function(n){S.current&&S.current.setAnswerDescription(u.a.decode(n.description))}),[]),M=Object(i.useCallback)((function(n){if(S.current){var e=JSON.stringify(n);S.current.sendMessage(e)}}),[]),T=Object(i.useMemo)((function(){return j?{description:j}:void 0}),[j]);return Object(f.jsx)(w.Provider,{value:{mode:o,isConnected:g,localConnectionDescription:T,startAsHost:z,startAsSlave:R,setRemoteConnectionDescription:A,sendMessage:M,peerConnectionSubject:y},children:e})},S=t(2),k=t(3),E=Object(k.b)(j||(j=Object(S.a)(["\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n  /* Document\n    ========================================================================== */\n\n  /**\n   * 1. Correct the line height in all browsers.\n   * 2. Prevent adjustments of font size after orientation changes in iOS.\n   */\n\n  html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n\n  /* Sections\n    ========================================================================== */\n\n  /**\n   * Remove the margin in all browsers.\n   */\n\n  body {\n    margin: 0;\n    font-family: 'Source Code Pro', monospace;\n  }\n\n  /**\n   * Render the \"main\" element consistently in IE.\n   */\n\n  main {\n    display: block;\n  }\n\n  /**\n   * Correct the font size and margin on \"h1\" elements within \"section\" and\n   * \"article\" contexts in Chrome, Firefox, and Safari.\n   */\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  /* Grouping content\n    ========================================================================== */\n\n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \"em\" font sizing in all browsers.\n   */\n\n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /* Text-level semantics\n    ========================================================================== */\n\n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n\n  a {\n    background-color: transparent;\n  }\n\n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n\n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \"em\" font sizing in all browsers.\n   */\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /**\n   * Add the correct font size in all browsers.\n   */\n\n  small {\n    font-size: 80%;\n  }\n\n  /**\n   * Prevent \"sub\" and \"sup\" elements from affecting the line height in\n   * all browsers.\n   */\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /* Embedded content\n    ========================================================================== */\n\n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n\n  img {\n    border-style: none;\n  }\n\n  /* Forms\n    ========================================================================== */\n\n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n\n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\n  button,\n  input {\n    /* 1 */\n    overflow: visible;\n  }\n\n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\n  button,\n  select {\n    /* 1 */\n    text-transform: none;\n  }\n\n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\n  button,\n  [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n  }\n\n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n\n  button::-moz-focus-inner,\n  [type='button']::-moz-focus-inner,\n  [type='reset']::-moz-focus-inner,\n  [type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n\n  button:-moz-focusring,\n  [type='button']:-moz-focusring,\n  [type='reset']:-moz-focusring,\n  [type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  /**\n   * Correct the padding in Firefox.\n   */\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from \"fieldset\" elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    \"fieldset\" elements in all browsers.\n   */\n\n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n\n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\n  textarea {\n    overflow: auto;\n  }\n\n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n  [type='checkbox'],\n  [type='radio'] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n  [type='number']::-webkit-inner-spin-button,\n  [type='number']::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n  [type='search'] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n\n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n  [type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to \"inherit\" in Safari.\n   */\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n\n  /* Interactive\n    ========================================================================== */\n\n  /*\n  * Add the correct display in Edge, IE 10+, and Firefox.\n  */\n\n  details {\n    display: block;\n  }\n\n  /*\n  * Add the correct display in all browsers.\n  */\n\n  summary {\n    display: list-item;\n  }\n\n  /* Misc\n    ========================================================================== */\n\n  /**\n   * Add the correct display in IE 10+.\n   */\n\n  template {\n    display: none;\n  }\n\n  /**\n   * Add the correct display in IE 10.\n   */\n\n  [hidden] {\n    display: none;\n  }\n"]))),D=Object(k.a)(m||(m=Object(S.a)(["\n  ",";\n\n  html, body {\n    font-family: Lucida Console, Courier, monospace;\n    color: black;\n    font-size: 10px;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n"])),E),z=t(38),R=t.n(z),A=k.c.button(O||(O=Object(S.a)(["\n  background-color: black;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 1vh 2vh;\n  font-size: 1.5vh;\n  display: ","\n"])),(function(n){return n.hide?"none":"default"})),M=t.p+"static/media/logo.f8f94c84.svg",T=k.c.div(x||(x=Object(S.a)(["\n  width: 95%;\n  margin-left: 2%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2.5vh 2vw 2vh 2vw;\n  img {\n    max-width: 200px;\n  }\n"])));function I(n){var e=n.onClickButton,t=n.hideButton;return Object(f.jsxs)(T,{children:[Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:M})}),Object(f.jsx)(A,{hide:t,onClick:e,children:"Play Now"})]})}var N,P,F=k.c.div(g||(g=Object(S.a)(["\nwidth: 100%;\nfont-weight: 600;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 1.5vh;\nmargin-top: 5vh;\na {\n  color: #5BA02D;\n  &:visited {\n    color: #5BA02D;\n  }\n}\n"]))),L=Object(i.memo)((function(){return Object(f.jsx)(F,{children:Object(f.jsxs)("span",{children:["Made with WebRTC and \ud83d\udc96 by ",Object(f.jsx)("a",{href:"https://arora-aditya.com",target:"_blank",children:"Aditya Arora"})]})})})),H=t(39),J=t.n(H);!function(n){n.ME="ME",n.STRANGER="FRIEND"}(N||(N={})),function(n){n.TEXT="TEXT",n.MOVE="MOVE"}(P||(P={}));var B,V,_,G,X,q,K,W,Q,U,Y,Z,$,nn,en,tn,cn,on,rn,an,sn,dn=t(24),ln=new(t(71).a),bn=Object(i.createContext)(ln),un=function(){var n=Object(i.useContext)(bn),e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],o=t[1];return Object(i.useEffect)((function(){var e=n.subscribe((function(n){o((function(e){return[].concat(Object(dn.a)(e),[n])}))}));return function(){return e.unsubscribe()}}),[n,o]),{chatMessages:c,sendChatMessage:Object(i.useCallback)((function(e){n.next(e)}),[n])}},hn=function(){var n=un(),e=n.chatMessages,t=n.sendChatMessage,c=function(){var n=Object(i.useContext)(w);return{mode:n.mode,isConnected:n.isConnected,localConnectionDescription:n.localConnectionDescription,startAsHost:n.startAsHost,startAsSlave:n.startAsSlave,setRemoteConnectionDescription:n.setRemoteConnectionDescription,sendMessage:n.sendMessage}}(),o=c.mode,r=c.isConnected,a=c.localConnectionDescription,s=c.startAsHost,d=c.startAsSlave,l=c.setRemoteConnectionDescription,b=c.sendMessage;return{mode:o,isConnected:r,localConnectionDescription:a,chatMessages:e,startAsHost:s,startAsSlave:d,setRemoteConnectionDescription:l,sendTextChatMessage:Object(i.useCallback)((function(n){var e={id:J.a.generate(),sender:N.STRANGER,type:P.TEXT,timestamp:+new Date,payload:n};b(e),t({id:e.id,sender:N.ME,timestamp:e.timestamp,text:e.payload})}),[b,t])}},pn=function(){var n=un().sendChatMessage;!function(n){var e=Object(i.useContext)(w).peerConnectionSubject;Object(i.useEffect)((function(){var t=e.subscribe(n);return function(){return t.unsubscribe()}}),[e,n])}(Object(i.useCallback)((function(e){e.type===P.TEXT&&n({id:e.id,sender:N.STRANGER,timestamp:e.timestamp,text:e.payload})}),[n]))},fn=k.c.div(B||(B=Object(S.a)([""]))),jn=k.c.div(V||(V=Object(S.a)(["\n"]))),mn=k.c.div(_||(_=Object(S.a)(["\n"]))),On=Object(i.memo)((function(n){var e=n.chatMessage;return Object(f.jsxs)(mn,{children:[Object(f.jsxs)(jn,{children:[Object(f.jsx)("span",{children:e.sender===N.ME?"Me":"Friend"})," (",new Date(e.timestamp).toLocaleTimeString(),")"]}),Object(f.jsx)(fn,{children:e.text})]})})),xn=Object(i.memo)((function(n){var e=n.chatMessage;return Object(f.jsx)(On,{chatMessage:e})})),gn=k.c.textarea(G||(G=Object(S.a)(["\n  display: block;\n  font-size: 10px;\n  width: 100%;\n  height: 30px;\n  border: 1px solid black;\n  outline: none;\n  background-image: none;\n  appearance: none;\n  background-color: transparent;\n  box-shadow: none;\n"]))),vn=Object(k.c)(A)(X||(X=Object(S.a)(["\n"]))),yn=Object(k.c)(gn)(q||(q=Object(S.a)(["\n"]))),wn=k.c.form(K||(K=Object(S.a)(["\n"]))),Cn=k.c.div(W||(W=Object(S.a)(["\n"]))),Sn=k.c.div(Q||(Q=Object(S.a)(["\n"]))),kn=k.c.div(U||(U=Object(S.a)(["\n"]))),En=Object(i.memo)((function(){var n=hn(),e=n.chatMessages,t=n.sendTextChatMessage,c=Object(i.useState)(""),o=Object(l.a)(c,2),r=o[0],a=o[1],s=Object(i.useRef)(),d=Object(i.useCallback)((function(){t(r),a("")}),[t,r,a]),b=Object(i.useCallback)((function(n){n.preventDefault(),n.stopPropagation(),a(n.target.value)}),[a]),u=Object(i.useCallback)((function(n){13!==n.which&&13!==n.keyCode||n.shiftKey||s.current&&(n.preventDefault(),n.stopPropagation(),d())}),[d]),h=Object(i.useCallback)((function(n){n.preventDefault(),n.stopPropagation(),d()}),[d]);return Object(f.jsxs)(kn,{children:[Object(f.jsx)(Sn,{children:Object(f.jsx)(Cn,{children:e.map((function(n){return Object(f.jsx)(xn,{chatMessage:n},n.id)}))})}),Object(f.jsxs)(wn,{ref:s,onSubmit:h,children:[Object(f.jsx)(yn,{placeholder:"Message...",value:r,onChange:b,onKeyDown:u}),Object(f.jsx)(vn,{type:"submit",children:"Send"})]})]})})),Dn=t(40),zn=Object(Dn.a)({description:function(n){return"string"===typeof n&&n.length>0?void 0:"required"}});function Rn(n){return u.a.encode(JSON.stringify(n))}function An(n){return JSON.parse(u.a.decode(n))}var Mn,Tn,In,Nn,Pn,Fn,Ln,Hn,Jn,Bn,Vn,_n,Gn,Xn,qn,Kn,Wn,Qn,Un,Yn=Object(k.c)(gn)(Y||(Y=Object(S.a)(["\n  width: 100px;\n"]))),Zn=(Object(k.c)(A)(Z||(Z=Object(S.a)(["\n  width: 100px;\n"]))),Object(k.c)(A)($||($=Object(S.a)(["\n  width: 100px;\n  margin-top: 4px;\n"])))),$n=k.c.div(nn||(nn=Object(S.a)([""]))),ne=k.c.form(en||(en=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),ee=k.c.div(tn||(tn=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),te=(k.c.div(cn||(cn=Object(S.a)(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 200px;\n  align-items: stretch;\n  border: 1px solid black;\n  border-top: none;\n\n  > "," {\n    width: 100%;\n    border-left: 1px solid black;\n\n    &:first-child {\n      border-left: none;\n    }\n  }\n"])),ee),k.c.div(on||(on=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),k.c.div(rn||(rn=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-around;\n"])))),ie=k.c.div(an||(an=Object(S.a)(["\n  font-size: 1.5vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  button {\n    margin: 1vh;\n    width: fit-content;\n  }\n  hr {\n    width: 90%;\n  }\n  textarea {\n  }\n"]))),ce=k.c.div(sn||(sn=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 4vh;\n  height: 4vh;\n  font-size: 1.5vh;\n  background-color: black;\n  color: white;\n  border-radius: 50%;\n  transform: translate(0px, -2.5vh);\n  > span {\n    transform: translate(0.5px, -1.5px);\n    line-height: 1;\n  }\n"]))),oe=Object(i.memo)((function(){var n=hn(),e=n.startAsHost,t=n.startAsSlave,o=c.a.useState(""),r=Object(l.a)(o,2),a=r[0],s=r[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),u=b[0],h=b[1];return Object(f.jsxs)(te,{children:[Object(f.jsx)(ie,{children:Object(f.jsx)(A,{onClick:function(n){n.preventDefault(),n.stopPropagation(),e()},children:"Start new"})}),Object(f.jsxs)(ie,{children:[Object(f.jsx)("hr",{}),Object(f.jsx)(ce,{children:Object(f.jsx)("span",{children:"or"})})]}),Object(f.jsx)(ie,{children:Object(f.jsxs)(ne,{onSubmit:function(n){n.preventDefault(),n.stopPropagation();try{var e=An(a);if(zn(e))throw new Error;t(e)}catch(u){h("Connection Description invalid!")}},children:[Object(f.jsx)(Yn,{value:a,onChange:function(n){n.preventDefault(),n.stopPropagation(),h(""),s(n.target.value)},placeholder:"Paste invitation code here..."}),!!u&&Object(f.jsx)($n,{children:u}),Object(f.jsx)(Zn,{type:"submit",children:"Join"})]})})]})})),re=t(23),ae=t.n(re),se=k.c.div(Mn||(Mn=Object(S.a)([""]))),de=Object(k.c)(gn)(Tn||(Tn=Object(S.a)(["\n  margin-bottom: 1vh;\n"]))),le=(Object(k.c)(A)(In||(In=Object(S.a)(["\n"]))),Object(k.c)(A)(Nn||(Nn=Object(S.a)(["\n  width: 70%;\n  margin-top: 4px;\n"]))),k.c.form(Pn||(Pn=Object(S.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])))),be=k.c.div(Fn||(Fn=Object(S.a)(["\n  color: black;\n  margin-bottom: 1vh;\n  margin-top: 1vh;\n"]))),ue=k.c.div(Ln||(Ln=Object(S.a)(["\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  width: 2vh;\n  height: 2vh;\n  background-color: black;\n  color: white;\n  border-radius: 50%;\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  > span {\n    display: inline-block;\n    // transform: translate(-0.2vh, -0.2vh);\n  }\n"]))),he=k.c.div(Hn||(Hn=Object(S.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n  border-top: none;\n"]))),pe=k.c.div(Jn||(Jn=Object(S.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  font-size: 1.5vh;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),fe=Object(i.memo)((function(){var n=hn(),e=n.localConnectionDescription,t=n.setRemoteConnectionDescription,c=Object(i.useState)(""),o=Object(l.a)(c,2),r=o[0],a=o[1],s=Object(i.useState)(""),d=Object(l.a)(s,2),b=d[0],u=d[1],h=Object(i.createRef)(),p=Rn(e);return Object(f.jsxs)(pe,{children:[Object(f.jsxs)(he,{children:[Object(f.jsx)(ue,{children:Object(f.jsx)("span",{children:"1"})}),Object(f.jsx)(be,{children:"Send this code to your buddy:"}),Object(f.jsx)(de,{ref:h,value:p,readOnly:!0}),Object(f.jsx)(A,{onClick:function(){h.current&&(h.current.select(),ae()(p))},children:"Copy to clipboard"})]}),Object(f.jsxs)(he,{children:[Object(f.jsx)(ue,{children:Object(f.jsx)("span",{children:"2"})}),Object(f.jsxs)(le,{onSubmit:function(n){try{n.stopPropagation(),n.preventDefault();var e=An(r);if(zn(e))throw new Error;t(e)}catch(b){u("Connection Description invalid!")}},children:[Object(f.jsx)(be,{children:"Code from your buddy:"}),Object(f.jsx)(de,{value:r,onChange:function(n){n.preventDefault(),n.stopPropagation(),u(""),a(n.target.value)},placeholder:"Paste an answer code"}),Object(f.jsx)(A,{type:"submit",children:"Connect"})]}),!!b&&Object(f.jsx)(se,{children:b})]})]})})),je=Object(k.c)(A)(Bn||(Bn=Object(S.a)(["\n  margin-top: 1vh;\n"]))),me=Object(k.c)(gn)(Vn||(Vn=Object(S.a)(["\n  width: 70%;\n"]))),Oe=k.c.div(_n||(_n=Object(S.a)(["\n  font-size: 1.5vh;\n  color: black;\n  margin-bottom: 1vh;\n"]))),xe=k.c.div(Gn||(Gn=Object(S.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n"]))),ge=k.c.div(Xn||(Xn=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]))),ve=Object(i.memo)((function(){var n=hn().localConnectionDescription,e=Object(i.createRef)(),t=Rn(n);return Object(f.jsx)(ge,{children:Object(f.jsxs)(xe,{children:[Object(f.jsx)(Oe,{children:"Send back this code back to your friend"}),Object(f.jsx)(me,{ref:e,value:t,readOnly:!0}),Object(f.jsx)(je,{onClick:function(){e.current&&(e.current.select(),ae()(t))},children:"Copy to clipboard"})]})})})),ye=t.p+"static/media/message_undraw.58f7be79.svg",we=t.p+"static/media/share_undraw.8870c8da.svg",Ce=k.c.div(qn||(qn=Object(S.a)(["\n"]))),Se=k.c.div(Kn||(Kn=Object(S.a)(["\n"]))),ke=k.c.div(Wn||(Wn=Object(S.a)(["\n  margin-left: 5%;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-items: space-between;\n  justify-content: center;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    flex-direction: ","\n  }\n  img {\n    width: 80%;\n    @media (min-width: 768px) {\n      width: 70%;\n    }\n    margin-top: 5vh;\n    margin-bottom: 5vh;\n  }\n"])),(function(n){return n.reversed?"row-reverse":"row"})),Ee=k.c.div(Qn||(Qn=Object(S.a)(["\n  width: 100%;\n  @media (min-width: 768px) {\n    width: 60%;\n  }\n  font-size: 2vh;\n  margin: 2vh;\n  margin-left: 5vh;\n  margin-bottom: 5vh;\n  font-weight: 900;\n  @media only screen and (max-width: 900px){\n    width: 70%;\n  }\n"]))),De=(k.c.div(Un||(Un=Object(S.a)(["\n  width: 100%;\n  @media (min-width: 768px) {\n    width: 60%;\n  }\n  font-size: 2vh;\n  margin: 2vh;\n  margin-left: 5vh;\n  margin-bottom: 5vh;\n  font-weight: 900;\n  @media only screen and (max-width: 900px){\n    width: 70%;\n  }\n"]))),Object(i.memo)((function(){var n=hn(),e=n.mode,t=n.isConnected,c=Object(i.useState)(!1),o=Object(l.a)(c,2),r=o[0],a=o[1];return pn(),Object(f.jsxs)(Se,{children:[Object(f.jsx)(I,{onClickButton:function(){return a(!0)},hideButton:t}),!t&&Object(f.jsxs)(Ce,{children:[Object(f.jsxs)(ke,{children:[Object(f.jsx)(Ee,{children:"Serverless Chess with friends with the ability to analyse and share games!"}),Object(f.jsx)("img",{src:ye})]}),Object(f.jsxs)(ke,{reversed:!0,children:[Object(f.jsxs)(Ee,{children:["Simply share the invite codes between devices and instantly start playing!",Object(f.jsx)("br",{}),"No data recorded anywhere!"]}),Object(f.jsx)("img",{src:we})]}),Object(f.jsxs)(R.a,{style:{content:{height:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",padding:"3vh 3vh",marginRight:"-50%",transform:"translate(-50%, -50%)"}},isOpen:r,onRequestClose:function(){return a(!1)},contentLabel:"Start New or Join",children:[!e&&Object(f.jsx)(oe,{}),e===p.HOST&&!t&&Object(f.jsx)(fe,{}),e===p.SLAVE&&!t&&Object(f.jsx)(ve,{})]})]}),e&&t&&Object(f.jsx)(En,{}),Object(f.jsx)(L,{})]})})));r.a.render(Object(f.jsx)(C,{children:Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(D,{}),Object(f.jsx)(De,{})]})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.a5b5ad87.chunk.js.map