(this.webpackJsonprtchess=this.webpackJsonprtchess||[]).push([[0],{77:function(n,e,t){"use strict";t.r(e);var i=t(0),o=t.n(i),r=t(30),c=t.n(r),a=t(10),s=t.n(a),l=t(18),d=t(4),u=t(38),b=t(11);function h(n){var e,t=n.remoteDescription,i=n.iceServers,o=void 0===i?[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:turn.anyfirewall.com:443?transport=tcp",username:"webrtc",credential:"webrtc"}]:i,r=n.onChannelOpen,c=n.onMessageReceived,a=n.onDisconnect,d=new RTCPeerConnection({iceServers:o});function u(){return(u=Object(l.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.createOffer();case 2:e=n.sent,d.setLocalDescription(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(){return(b=Object(l.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.setRemoteDescription(JSON.parse(e));case 2:return n.next=4,d.createAnswer();case 4:t=n.sent,d.setLocalDescription(t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){d.setRemoteDescription(JSON.parse(n))}function f(n){e&&e.send(n)}return new Promise((function(n){d.onicecandidate=function(e){null===e.candidate&&d.localDescription&&(d.localDescription.sdp.replace("b=AS:30","b=AS:1638400"),n({localDescription:JSON.stringify(d.localDescription),setAnswerDescription:h,sendMessage:f}))},d.oniceconnectionstatechange=function(){"disconnected"===d.iceConnectionState&&a()},t?(d.ondatachannel=function(n){var t=n.channel;(e=t).onopen=function(){r()},e.onmessage=function(n){c(n.data)}},function(n){b.apply(this,arguments)}(t)):(function(){try{(e=d.createDataChannel("RTCHESS_CHANNEL_LABEL")).onopen=function(){r()},e.onmessage=function(n){c(n.data)}}catch(n){console.error("No data channel (peerConnection)",n)}}(),function(){u.apply(this,arguments)}())}))}var f,p=t(1);!function(n){n.HOST="HOST",n.SLAVE="SLAVE"}(f||(f={}));var j,m,O,g,v,x=[{urls:"stun:stun.l.google.com:19302"}],y=new u.a,w=Object(i.createContext)({}),S=function(n){var e=n.children,t=Object(i.useState)(void 0),o=Object(d.a)(t,2),r=o[0],c=o[1],a=Object(i.useState)(),u=Object(d.a)(a,2),j=u[0],m=u[1],O=Object(i.useState)(!1),g=Object(d.a)(O,2),v=g[0],S=g[1],C=Object(i.useRef)(),k=Object(i.useCallback)((function(){return S(!0)}),[S]),E=Object(i.useCallback)((function(){S(!1),c(void 0)}),[S,c]),D=Object(i.useCallback)((function(n){try{var e=JSON.parse(n);y.next(e)}catch(t){console.error(t)}}),[]),R=Object(i.useCallback)(Object(l.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof r){n.next=2;break}return n.abrupt("return");case 2:return c(f.HOST),n.next=5,h({iceServers:x,onMessageReceived:D,onChannelOpen:k,onDisconnect:E});case 5:C.current=n.sent,m(b.a.encode(C.current.localDescription));case 7:case"end":return n.stop()}}),n)}))),[r,c,D,k,E,m]),z=Object(i.useCallback)(function(){var n=Object(l.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof r){n.next=2;break}return n.abrupt("return");case 2:return c(f.SLAVE),n.next=5,h({iceServers:x,remoteDescription:b.a.decode(e.description),onMessageReceived:D,onChannelOpen:k,onDisconnect:E});case 5:C.current=n.sent,m(b.a.encode(C.current.localDescription));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[r,c,D,k,E,m]),A=Object(i.useCallback)((function(n){C.current&&C.current.setAnswerDescription(b.a.decode(n.description))}),[]),M=Object(i.useCallback)((function(n){if(C.current){var e=JSON.stringify(n);C.current.sendMessage(e)}}),[]),P=Object(i.useMemo)((function(){return j?{description:j}:void 0}),[j]);return Object(p.jsx)(w.Provider,{value:{mode:r,isConnected:v,localConnectionDescription:P,startAsHost:R,startAsSlave:z,setRemoteConnectionDescription:A,sendMessage:M,peerConnectionSubject:y},children:e})},C=t(2),k=t(3),E=Object(k.b)(j||(j=Object(C.a)(["\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n  /* Document\n    ========================================================================== */\n\n  /**\n   * 1. Correct the line height in all browsers.\n   * 2. Prevent adjustments of font size after orientation changes in iOS.\n   */\n\n  html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n\n  /* Sections\n    ========================================================================== */\n\n  /**\n   * Remove the margin in all browsers.\n   */\n\n  body {\n    margin: 0;\n    font-family: 'Source Code Pro', monospace;\n  }\n\n  /**\n   * Render the \"main\" element consistently in IE.\n   */\n\n  main {\n    display: block;\n  }\n\n  /**\n   * Correct the font size and margin on \"h1\" elements within \"section\" and\n   * \"article\" contexts in Chrome, Firefox, and Safari.\n   */\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  /* Grouping content\n    ========================================================================== */\n\n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \"em\" font sizing in all browsers.\n   */\n\n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /* Text-level semantics\n    ========================================================================== */\n\n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n\n  a {\n    background-color: transparent;\n  }\n\n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n\n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \"em\" font sizing in all browsers.\n   */\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /**\n   * Add the correct font size in all browsers.\n   */\n\n  small {\n    font-size: 80%;\n  }\n\n  /**\n   * Prevent \"sub\" and \"sup\" elements from affecting the line height in\n   * all browsers.\n   */\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /* Embedded content\n    ========================================================================== */\n\n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n\n  img {\n    border-style: none;\n  }\n\n  /* Forms\n    ========================================================================== */\n\n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n\n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\n  button,\n  input {\n    /* 1 */\n    overflow: visible;\n  }\n\n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\n  button,\n  select {\n    /* 1 */\n    text-transform: none;\n  }\n\n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\n  button,\n  [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n  }\n\n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n\n  button::-moz-focus-inner,\n  [type='button']::-moz-focus-inner,\n  [type='reset']::-moz-focus-inner,\n  [type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n\n  button:-moz-focusring,\n  [type='button']:-moz-focusring,\n  [type='reset']:-moz-focusring,\n  [type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  /**\n   * Correct the padding in Firefox.\n   */\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from \"fieldset\" elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    \"fieldset\" elements in all browsers.\n   */\n\n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n\n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\n  textarea {\n    overflow: auto;\n  }\n\n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n  [type='checkbox'],\n  [type='radio'] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n  [type='number']::-webkit-inner-spin-button,\n  [type='number']::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n  [type='search'] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n\n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n  [type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to \"inherit\" in Safari.\n   */\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n\n  /* Interactive\n    ========================================================================== */\n\n  /*\n  * Add the correct display in Edge, IE 10+, and Firefox.\n  */\n\n  details {\n    display: block;\n  }\n\n  /*\n  * Add the correct display in all browsers.\n  */\n\n  summary {\n    display: list-item;\n  }\n\n  /* Misc\n    ========================================================================== */\n\n  /**\n   * Add the correct display in IE 10+.\n   */\n\n  template {\n    display: none;\n  }\n\n  /**\n   * Add the correct display in IE 10.\n   */\n\n  [hidden] {\n    display: none;\n  }\n"]))),D=Object(k.a)(m||(m=Object(C.a)(["\n  ",";\n\n  html, body {\n    font-family: Lucida Console, Courier, monospace;\n    color: black;\n    font-size: 10px;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n"])),E),R=t(42),z=t.n(R),A=k.c.button(O||(O=Object(C.a)(["\n  background-color: black;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 1vh 2vh;\n  font-size: 1.5vh;\n  display: ","\n"])),(function(n){return n.hide?"none":"default"})),M=t.p+"static/media/logo.f8f94c84.svg",P=k.c.div(g||(g=Object(C.a)(["\n  width: 95%;\n  margin-left: 2%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2.5vh 2vw 2vh 2vw;\n  img {\n    max-width: 200px;\n  }\n"])));function q(n){var e=n.onClickButton,t=n.hideButton;return Object(p.jsxs)(P,{children:[Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:M,alt:"logo"})}),Object(p.jsx)(A,{hide:t,onClick:e,children:"Play Now"})]})}var T=k.c.div(v||(v=Object(C.a)(["\nwidth: 100%;\nfont-weight: 600;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 1.5vh;\nmargin-top: 5vh;\na {\n  color: #5BA02D;\n  &:visited {\n    color: #5BA02D;\n  }\n}\n"]))),N=Object(i.memo)((function(){return Object(p.jsx)(T,{children:Object(p.jsxs)("span",{children:["Made with WebRTC and \ud83d\udc96 by ",Object(p.jsx)("a",{href:"https://arora-aditya.com",target:"_blank",rel:"noreferrer",children:"Aditya Arora"})]})})})),I=t(43),H=t.n(I),F=t(17),B=t(16),L=t(13);function _(n){var e=n.pieceSquare,t=n.history,i=t.length&&t[t.length-1].from,o=t.length&&t[t.length-1].to;return Object(L.a)(Object(L.a)(Object(B.a)({},e,{backgroundColor:"rgba(255, 255, 0, 0.4)"}),t.length&&Object(B.a)({},i,{backgroundColor:"rgba(255, 255, 0, 0.4)"})),t.length&&Object(B.a)({},o,{backgroundColor:"rgba(255, 255, 0, 0.4)"}))}var J,G,K=function(n,e,t,i){var r=o.a.useState({}),c=Object(d.a)(r,2),a=c[0],s=c[1],l=o.a.useState({}),u=Object(d.a)(l,2),b=u[0],h=u[1],f=o.a.useState(""),p=Object(d.a)(f,2),j=p[0],m=p[1],O=o.a.useState([]),g=Object(d.a)(O,2),v=g[0],x=g[1];return{position:e,onDrop:function(e){var o=e.sourceSquare,r=e.targetSquare;n.turn()===i[0]&&(n.game_over()||null!==n.move({from:o,to:r,promotion:"q"})&&(t(n.fen()),x(n.history({verbose:!0})),h(_({pieceSquare:j,history:v}))))},onMouseOverSquare:function(e){var t=n.moves({square:e,verbose:!0});if(0!==t.length){for(var i=[],o=0;o<t.length;o++)i.push(t[o].to);!function(n,e){var t=[n].concat(Object(F.a)(e)).reduce((function(n,e){return Object(L.a)(Object(L.a)(Object(L.a)({},n),Object(B.a)({},e,{background:"rgba(44, 230, 44, 0.219)"})),_({history:v,pieceSquare:j}))}),{});h(Object(L.a)(Object(L.a)({},b),t))}(e,i)}},onMouseOutSquare:function(n){h(_({pieceSquare:j,history:v}))},onDragOverSquare:function(n){s("e4"===n||"d4"===n||"e5"===n||"d5"===n?{backgroundColor:"cornFlowerBlue"}:{boxShadow:"inset 0 0 1px 4px rgb(255, 255, 0)"})},onSquareClick:function(e){n.turn()===i[0]&&(m(e),null!==n.move({from:j,to:e,promotion:"q"})&&(t(n.fen()),x(n.history({verbose:!0})),m("")))},squareStyles:b,dropStyle:a}},Q=t(27),V=t(32),W=t.n(V);!function(n){n.ME="ME",n.STRANGER="FRIEND"}(J||(J={})),function(n){n.TEXT="TEXT",n.CHESS="CHESS"}(G||(G={}));var X,U,Y,Z,$,nn,en,tn,on,rn,cn,an,sn=new(t(78).a),ln=Object(i.createContext)(sn),dn=function(){var n=Object(i.useContext)(ln),e=Object(i.useState)([]),t=Object(d.a)(e,2),o=t[0],r=t[1];return Object(i.useEffect)((function(){var e=n.subscribe((function(n){r((function(e){return[].concat(Object(F.a)(e),[n])}))}));return function(){return e.unsubscribe()}}),[n,r]),{chatMessages:o,sendChatMessage:Object(i.useCallback)((function(e){n.next(e)}),[n])}},un=function(){var n=dn(),e=n.chatMessages,t=n.sendChatMessage,o=function(){var n=Object(i.useContext)(w);return{mode:n.mode,isConnected:n.isConnected,localConnectionDescription:n.localConnectionDescription,startAsHost:n.startAsHost,startAsSlave:n.startAsSlave,setRemoteConnectionDescription:n.setRemoteConnectionDescription,sendMessage:n.sendMessage}}(),r=o.mode,c=o.isConnected,a=o.localConnectionDescription,s=o.startAsHost,l=o.startAsSlave,d=o.setRemoteConnectionDescription,u=o.sendMessage;return{mode:r,isConnected:c,localConnectionDescription:a,chatMessages:e,startAsHost:s,startAsSlave:l,setRemoteConnectionDescription:d,sendTextChatMessage:Object(i.useCallback)((function(n){var e={id:W.a.generate(),sender:J.STRANGER,type:G.TEXT,timestamp:+new Date,payload:n};u(e),t({id:e.id,sender:J.ME,timestamp:e.timestamp,text:e.payload})}),[u,t]),sendChessMessage:Object(i.useCallback)((function(n){var e={id:W.a.generate(),sender:J.STRANGER,type:G.CHESS,timestamp:+new Date,payload:n};u(e)}),[u])}},bn=function(n){var e=dn().sendChatMessage;!function(n){var e=Object(i.useContext)(w).peerConnectionSubject;Object(i.useEffect)((function(){var t=e.subscribe(n);return function(){return t.unsubscribe()}}),[e,n])}(Object(i.useCallback)((function(t){t.type===G.TEXT?e({id:t.id,sender:J.STRANGER,timestamp:t.timestamp,text:t.payload}):t.type===G.CHESS&&n(t.payload)}),[e,n]))},hn=k.c.div(X||(X=Object(C.a)([""]))),fn=k.c.div(U||(U=Object(C.a)(["\n  font-weight: bold;\n  margin-top: 0.5vh;\n  margin-bottom: 0.25vh;\n"]))),pn=k.c.div(Y||(Y=Object(C.a)(["\n"]))),jn=Object(i.memo)((function(n){var e=n.chatMessage;return Object(p.jsxs)(pn,{children:[Object(p.jsxs)(fn,{children:[Object(p.jsx)("span",{children:e.sender===J.ME?"Me":"Friend"})," (",new Date(e.timestamp).toLocaleTimeString(),")"]}),Object(p.jsx)(hn,{children:e.text})]})})),mn=Object(i.memo)((function(n){var e=n.chatMessage;return Object(p.jsx)(jn,{chatMessage:e})})),On=k.c.textarea(Z||(Z=Object(C.a)(["\n  display: block;\n  font-size: 10px;\n  width: 100%;\n  height: 30px;\n  border: 1px solid black;\n  outline: none;\n  background-image: none;\n  appearance: none;\n  background-color: transparent;\n  box-shadow: none;\n"]))),gn=Object(k.c)(A)($||($=Object(C.a)(["\n  max-width: 10vh;\n  margin-top: 1vh;\n  align-self: flex-end;\n"]))),vn=Object(k.c)(On)(nn||(nn=Object(C.a)(["\n"]))),xn=k.c.form(en||(en=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),yn=k.c.div(tn||(tn=Object(C.a)(["\n"]))),wn=k.c.div(on||(on=Object(C.a)(["\n  overflow: auto; \n  display: flex; \n  max-height: 10vh;\n  width: 80vw;\n  @media (min-width: 768px) {\n    max-height: 550px;\n    width: 20vw;\n  }\n  flex-direction: column-reverse;\n"]))),Sn=k.c.div(rn||(rn=Object(C.a)(["\n"]))),Cn=function(n){var e=n.canRestart,t=n.doRestart,o=un(),r=o.chatMessages,c=o.sendTextChatMessage,a=Object(i.useState)(""),s=Object(d.a)(a,2),l=s[0],u=s[1],b=Object(i.useRef)(),h=Object(i.useCallback)((function(){c(l),u("")}),[c,l,u]),f=Object(i.useCallback)((function(n){n.preventDefault(),n.stopPropagation(),u(n.target.value)}),[u]),j=Object(i.useCallback)((function(n){13!==n.which&&13!==n.keyCode||n.shiftKey||b.current&&(n.preventDefault(),n.stopPropagation(),h())}),[h]),m=Object(i.useCallback)((function(n){n.preventDefault(),n.stopPropagation(),h()}),[h]);return Object(p.jsxs)(Sn,{children:[Object(p.jsx)(wn,{children:Object(p.jsx)(yn,{children:r.map((function(n){return Object(p.jsx)(mn,{chatMessage:n},n.id)}))})}),Object(p.jsxs)(xn,{ref:b,onSubmit:m,children:[Object(p.jsx)(vn,{placeholder:"Message...",value:l,onChange:f,onKeyDown:j}),Object(p.jsx)(gn,{type:"submit",children:"Send"}),e&&Object(p.jsx)(gn,{onClick:t,children:"Restart"})]})]})},kn=k.c.div(cn||(cn=Object(C.a)(["\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),En=k.c.div(an||(an=Object(C.a)(["\n  width: 80vw;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n  align-items: center;\n  justify-content: space-around;\n"]))),Dn=new("function"===typeof Q?Q:Q.Chess);function Rn(n){var e=n.fen,t=n.setFen,o=n.orientation,r="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",c=un(),a=c.sendChessMessage,s=c.sendTextChatMessage,l=Object(i.useState)(!1),u=Object(d.a)(l,2),b=u[0],h=u[1],f=K(Dn,e,t,o),j=f.onMouseOverSquare,m=f.onMouseOutSquare,O=f.onDragOverSquare,g=f.onSquareClick,v=f.dropStyle,x=f.squareStyles,y=f.onDrop,w=Object(i.useState)(window.innerWidth),S=Object(d.a)(w,2),C=S[0],k=S[1],E=Object(i.useCallback)((function(){a(e)}),[a,e]);Object(i.useEffect)((function(){window.onresize=function(){k(window.innerWidth)}}),[]);Object(i.useEffect)((function(){Dn.load(e)}),[e]),Object(i.useEffect)((function(){E()}),[e,E]);return Object(i.useEffect)((function(){e===r&&h(!1)}),[e]),Object(i.useEffect)((function(){var n=o[0]!==Dn.turn();Dn.game_over()&&(Dn.in_checkmate()&&n?s("Game over ".concat("w"===Dn.turn()?"white":"black"," lost")):(Dn.in_draw()||Dn.in_threefold_repetition()||Dn.in_stalemate()||Dn.insufficient_material())&&n&&s("Game over, it was a draw!"),e!==r&&h(!0))}),[e,s]),Object(p.jsx)(kn,{children:Object(p.jsxs)(En,{children:[Object(p.jsx)(H.a,{id:"humanvshuman",boardStyle:{borderRadius:"5px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.5)"},calcWidth:function(){return C<700?C-10:600},position:e,onDrop:y,onMouseOverSquare:j,onMouseOutSquare:m,onDragOverSquare:O,onSquareClick:g,squareStyles:x,dropSquareStyle:v,transitionDuration:0,orientation:o}),Object(p.jsx)(Cn,{canRestart:b,doRestart:function(){t(r),h(!1),s("Game restarted")}})]})})}var zn,An,Mn,Pn,qn,Tn,Nn,In=t(44),Hn=Object(In.a)({description:function(n){return"string"===typeof n&&n.length>0?void 0:"required"}});function Fn(n){return b.a.encode(JSON.stringify(n))}function Bn(n){return JSON.parse(b.a.decode(n))}var Ln,_n,Jn,Gn,Kn,Qn,Vn,Wn,Xn,Un,Yn,Zn,$n,ne,ee,te,ie=Object(k.c)(On)(zn||(zn=Object(C.a)(["\n  width: 100%;\n"]))),oe=Object(k.c)(A)(An||(An=Object(C.a)(["\n  width: 100px;\n  margin-top: 4px;\n"]))),re=k.c.div(Mn||(Mn=Object(C.a)([""]))),ce=k.c.form(Pn||(Pn=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),ae=k.c.div(qn||(qn=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-around;\n"]))),se=k.c.div(Tn||(Tn=Object(C.a)(["\n  font-size: 1.5vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  button {\n    margin: 1vh;\n    width: fit-content;\n  }\n  hr {\n    width: 90%;\n  }\n  textarea {\n  }\n"]))),le=k.c.div(Nn||(Nn=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 4vh;\n  height: 4vh;\n  font-size: 1.5vh;\n  background-color: black;\n  color: white;\n  border-radius: 50%;\n  transform: translate(0px, -2.5vh);\n  > span {\n    transform: translate(0.5px, -1.5px);\n    line-height: 1;\n  }\n"]))),de=Object(i.memo)((function(){var n=un(),e=n.startAsHost,t=n.startAsSlave,r=o.a.useState(""),c=Object(d.a)(r,2),a=c[0],s=c[1],l=Object(i.useState)(""),u=Object(d.a)(l,2),b=u[0],h=u[1];return Object(p.jsxs)(ae,{children:[Object(p.jsx)(se,{children:Object(p.jsx)(A,{onClick:function(n){n.preventDefault(),n.stopPropagation(),e()},children:"Start new"})}),Object(p.jsxs)(se,{children:[Object(p.jsx)("hr",{}),Object(p.jsx)(le,{children:Object(p.jsx)("span",{children:"or"})})]}),Object(p.jsx)(se,{children:Object(p.jsxs)(ce,{onSubmit:function(n){n.preventDefault(),n.stopPropagation();try{var e=Bn(a);if(Hn(e))throw new Error;t(e)}catch(b){h("Connection Description invalid!")}},children:[Object(p.jsx)(ie,{value:a,onChange:function(n){n.preventDefault(),n.stopPropagation(),h(""),s(n.target.value)},placeholder:"Paste invitation code here..."}),!!b&&Object(p.jsx)(re,{children:b}),Object(p.jsx)(oe,{type:"submit",children:"Join"})]})})]})})),ue=t(26),be=t.n(ue),he=k.c.div(Ln||(Ln=Object(C.a)([""]))),fe=Object(k.c)(On)(_n||(_n=Object(C.a)(["\n  margin-bottom: 1vh;\n"]))),pe=k.c.form(Jn||(Jn=Object(C.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),je=k.c.div(Gn||(Gn=Object(C.a)(["\n  color: black;\n  margin-bottom: 1vh;\n  margin-top: 1vh;\n"]))),me=k.c.div(Kn||(Kn=Object(C.a)(["\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  width: 2vh;\n  height: 2vh;\n  background-color: black;\n  color: white;\n  border-radius: 50%;\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  > span {\n    display: inline-block;\n    // transform: translate(-0.2vh, -0.2vh);\n  }\n"]))),Oe=k.c.div(Qn||(Qn=Object(C.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n  border-top: none;\n"]))),ge=k.c.div(Vn||(Vn=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  font-size: 1.5vh;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),ve=Object(i.memo)((function(){var n=un(),e=n.localConnectionDescription,t=n.setRemoteConnectionDescription,o=Object(i.useState)(""),r=Object(d.a)(o,2),c=r[0],a=r[1],s=Object(i.useState)(""),l=Object(d.a)(s,2),u=l[0],b=l[1],h=Object(i.createRef)(),f=Fn(e);return Object(p.jsxs)(ge,{children:[Object(p.jsxs)(Oe,{children:[Object(p.jsx)(me,{children:Object(p.jsx)("span",{children:"1"})}),Object(p.jsx)(je,{children:"Send this code to your buddy:"}),Object(p.jsx)(fe,{ref:h,value:f,readOnly:!0}),Object(p.jsx)(A,{onClick:function(){h.current&&(h.current.select(),be()(f))},children:"Copy to clipboard"})]}),Object(p.jsxs)(Oe,{children:[Object(p.jsx)(me,{children:Object(p.jsx)("span",{children:"2"})}),Object(p.jsxs)(pe,{onSubmit:function(n){try{n.stopPropagation(),n.preventDefault();var e=Bn(c);if(Hn(e))throw new Error;t(e)}catch(u){b("Connection Description invalid!")}},children:[Object(p.jsx)(je,{children:"Code from your buddy:"}),Object(p.jsx)(fe,{value:c,onChange:function(n){n.preventDefault(),n.stopPropagation(),b(""),a(n.target.value)},placeholder:"Paste an answer code"}),!!u&&Object(p.jsx)(he,{children:u}),Object(p.jsx)(A,{type:"submit",children:"Connect"})]})]})]})})),xe=Object(k.c)(A)(Wn||(Wn=Object(C.a)(["\n  margin-top: 1vh;\n"]))),ye=Object(k.c)(On)(Xn||(Xn=Object(C.a)(["\n  width: 70%;\n"]))),we=k.c.div(Un||(Un=Object(C.a)(["\n  font-size: 1.5vh;\n  color: black;\n  margin-bottom: 1vh;\n"]))),Se=k.c.div(Yn||(Yn=Object(C.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n"]))),Ce=k.c.div(Zn||(Zn=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]))),ke=Object(i.memo)((function(){var n=un().localConnectionDescription,e=Object(i.createRef)(),t=Fn(n);return Object(p.jsx)(Ce,{children:Object(p.jsxs)(Se,{children:[Object(p.jsx)(we,{children:"Send back this code back to your friend"}),Object(p.jsx)(ye,{ref:e,value:t,readOnly:!0}),Object(p.jsx)(xe,{onClick:function(){e.current&&(e.current.select(),be()(t))},children:"Copy to clipboard"})]})})})),Ee=t.p+"static/media/message_undraw.58f7be79.svg",De=t.p+"static/media/share_undraw.8870c8da.svg",Re=k.c.div($n||($n=Object(C.a)(["\n"]))),ze=k.c.div(ne||(ne=Object(C.a)(["\n"]))),Ae=k.c.div(ee||(ee=Object(C.a)(["\n  margin-left: 5%;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-items: space-between;\n  justify-content: center;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    flex-direction: ","\n  }\n  img {\n    width: 80%;\n    @media (min-width: 768px) {\n      width: 70%;\n    }\n    margin-top: 5vh;\n    margin-bottom: 5vh;\n  }\n"])),(function(n){return n.reversed?"row-reverse":"row"})),Me=k.c.div(te||(te=Object(C.a)(["\n  width: 100%;\n  @media (min-width: 768px) {\n    width: 60%;\n  }\n  font-size: 2vh;\n  margin: 2vh;\n  margin-left: 5vh;\n  margin-bottom: 5vh;\n  font-weight: 900;\n  @media only screen and (max-width: 900px){\n    width: 70%;\n  }\n"]))),Pe=Object(i.memo)((function(){var n="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",e=un(),t=e.mode,o=e.isConnected,r=Object(i.useState)(!1),c=Object(d.a)(r,2),a=c[0],s=c[1],l=Object(i.useState)(n),u=Object(d.a)(l,2),b=u[0],h=u[1];return bn((function(n){h(n)})),Object(i.useEffect)((function(){o||h(n)}),[h,o]),Object(p.jsxs)(ze,{children:[Object(p.jsx)(q,{onClickButton:function(){return s(!0)},hideButton:o}),!o&&Object(p.jsxs)(Re,{children:[Object(p.jsxs)(Ae,{children:[Object(p.jsx)(Me,{children:"Serverless Chess with friends with the ability to analyse and share games!"}),Object(p.jsx)("img",{src:Ee,alt:"people messaging on phone drawing"})]}),Object(p.jsxs)(Ae,{reversed:!0,children:[Object(p.jsxs)(Me,{children:["Simply share the invite codes between devices and instantly start playing!",Object(p.jsx)("br",{}),"No data recorded anywhere!"]}),Object(p.jsx)("img",{src:De,alt:"sharing drawing"})]}),Object(p.jsxs)(z.a,{style:{content:{height:t?"auto":"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",padding:"3vh 7vh",marginRight:"-50%",transform:"translate(-50%, -50%)"}},isOpen:a,onRequestClose:function(){return s(!1)},contentLabel:"Start New or Join",children:[!t&&Object(p.jsx)(de,{}),t===f.HOST&&!o&&Object(p.jsx)(ve,{}),t===f.SLAVE&&!o&&Object(p.jsx)(ke,{})]})]}),t&&o&&Object(p.jsx)(Re,{children:Object(p.jsx)(Rn,{fen:b,setFen:h,orientation:t===f.HOST?"white":"black"})}),Object(p.jsx)(N,{})]})}));c.a.render(Object(p.jsx)(S,{children:Object(p.jsxs)(i.Fragment,{children:[Object(p.jsx)(D,{}),Object(p.jsx)(Pe,{})]})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.83f2a66e.chunk.js.map