(this.webpackJsonpartknown=this.webpackJsonpartknown||[]).push([[3],{72:function(e,t,i){e.exports={Image:"EventsView_Image__qHBAR",ImageBig:"EventsView_ImageBig__1ijAE",ul:"EventsView_ul__1w1Z0",li:"EventsView_li__186z3",liImageBig:"EventsView_liImageBig__2PGZ8"}},73:function(e,t,i){e.exports={Img:"ModalView_Img__2VJNB",Container:"ModalView_Container__3QjyF"}},81:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return p}));var n=i(18),a=i(72),c=i.n(a),r=i.p+"static/media/2021-05-28-schoolpub.56737d17.jpg",s=i.p+"static/media/2021-05-01-fazenda.4cbfb7f8.jpg",d=i.p+"static/media/2021-02-14-heisenberg.46262b00.jpg",g=i.p+"static/media/2022-10-18-2-art-area.f6540b9f.jpg",o=i(0),u=i(73),l=i.n(u),m=i(1);function f(e){var t=e.selectedPicture,i=e.postsList,n=e.setIsModalOpen,a=e.setSelectedPicture;Object(o.useEffect)((function(){return document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}}),[t]);var c=function(e){var c=i.indexOf(i.find((function(e){return e===t})));37===e.keyCode?a(0===c?i[i.length-1]:i[c-1]):39===e.keyCode?c<i.length-1?a(i[c+1]):a(i[0]):27===e.keyCode&&n(!1)};return t&&Object(m.jsx)("div",{className:l.a.Container,children:Object(m.jsx)("img",{src:t.img,alt:t.text,className:l.a.Img})})}var b=[{id:"1",text:"Art Area 18.10.2022",img:g,big:!0,width:"900px",height:"300px"},{id:"2",text:"School Pub 28.05.2021",img:r,big:!1,width:"500px",height:"300px"},{id:"3",text:"Fazenda 01.05.2021",img:s,big:!1,width:"300px",height:"300px"},{id:"4",text:"Heisenberg 14.02.2021",img:d,big:!1,width:"350px",height:"300px"}];function p(){var e=Object(o.useState)(!1),t=Object(n.a)(e,2),i=t[0],a=t[1],r=Object(o.useState)(),s=Object(n.a)(r,2),d=s[0],g=s[1];Object(o.useEffect)((function(){return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}}),[]);var u=function(e){"IMG"===e.target.nodeName&&(g(b.find((function(t){return t.text===e.target.alt}))),e.target.alt&&a((function(e){return!e}))),"IMG"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"line"!==e.target.nodeName&&a((function(e){return!e}))};return Object(m.jsxs)("div",{children:[b&&Object(m.jsx)("ul",{className:c.a.ul,children:b.map((function(e){return Object(m.jsx)("li",{className:e.big?c.a.liImageBig:c.a.li,children:Object(m.jsx)("img",{src:e.img,alt:e.text,className:e.big?c.a.liImageBig:c.a.Image})},e.id)}))}),i&&Object(m.jsx)(f,{selectedPicture:d,postsList:b,setIsModalOpen:a,setSelectedPicture:g})]})}}}]);
//# sourceMappingURL=3.55ac34e9.chunk.js.map