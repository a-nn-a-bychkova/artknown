(this.webpackJsonpartknown=this.webpackJsonpartknown||[]).push([[4],{76:function(t,e,i){t.exports={Img:"ModalGalleryView_Img__2d6dV",Container:"ModalGalleryView_Container__28seg"}},77:function(t,e,i){t.exports={List:"GalleryView_List__2hw72",Item:"GalleryView_Item__2UVw8",Img:"GalleryView_Img__Z7M3D",ModalContainer:"GalleryView_ModalContainer__3Y-vo"}},80:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return C}));var a=i(18),n=i(0),c=i(76),o=i.n(c),s=i(1);function r(t){var e=t.selectedPicture,i=t.postsList,a=t.setIsModalOpen,c=t.setSelectedPicture;Object(n.useEffect)((function(){return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}}),[e]);var r=function(t){var n=i.indexOf(i.find((function(t){return t===e})));37===t.keyCode?c(0===n?i[i.length-1]:i[n-1]):39===t.keyCode?n<i.length-1?c(i[n+1]):c(i[0]):27===t.keyCode&&a(!1)};return e&&Object(s.jsx)("div",{className:o.a.Container,children:Object(s.jsx)("img",{src:e.img,alt:e.text,className:o.a.Img})})}var m=i.p+"static/media/eugene.3f723e71.jpg",d=i.p+"static/media/gene-smiling.5efea5e1.jpg",p=i.p+"static/media/gene.a7e09c18.jpg",g=i.p+"static/media/guitar.451d47be.jpg",u=i.p+"static/media/photo-0.38c188b7.jpg",l=i.p+"static/media/photo-1.f11b6d90.jpg",j=i.p+"static/media/photo-2.08053ef7.jpg",f=i.p+"static/media/photo-3.68bb8cb3.jpg",x=i.p+"static/media/photo-4.27411bb9.jpg",b=i.p+"static/media/photo-5.3f41e441.jpg",h=i.p+"static/media/photo-6.a32617f7.jpg",_=i.p+"static/media/photo-7.ba4d7e4b.jpg",v=i.p+"static/media/photo-8.1ff49e7b.jpg",O=i.p+"static/media/photo-11.888d99e4.jpg",w=i.p+"static/media/photo-12.6c6c62a4.jpg",I=i.p+"static/media/photo-13.23cddcf5.jpg",k=i.p+"static/media/photo-14.f63ab8b6.jpg",y=i.p+"static/media/photo-15.3ac7c545.jpg",L=i(77),M=i.n(L),N=[{text:"0",img:m},{text:"1",img:d},{text:"2",img:p},{text:"3",img:g},{text:"4",img:u},{text:"5",img:l},{text:"6",img:j},{text:"7",img:f},{text:"8",img:x},{text:"9",img:b},{text:"10",img:h},{text:"11",img:_},{text:"12",img:v},{text:"13",img:O},{text:"14",img:w},{text:"15",img:I},{text:"16",img:k},{text:"17",img:y}];function C(){var t=Object(n.useState)(!1),e=Object(a.a)(t,2),i=e[0],c=e[1],o=Object(n.useState)(),m=Object(a.a)(o,2),d=m[0],p=m[1];Object(n.useEffect)((function(){return document.addEventListener("click",g),function(){document.removeEventListener("click",g)}}),[]);var g=function(t){"IMG"===t.target.nodeName&&(p(N.find((function(e){return e.text===t.target.alt}))),t.target.alt&&c((function(t){return!t}))),"IMG"!==t.target.nodeName&&"svg"!==t.target.nodeName&&"line"!==t.target.nodeName&&c((function(t){return!t}))};return Object(s.jsxs)("div",{children:[N&&Object(s.jsx)("ul",{className:M.a.List,children:N.map((function(t){return Object(s.jsx)("li",{className:M.a.Item,children:Object(s.jsx)("img",{src:t.img,alt:t.text,className:M.a.Img})},t.text)}))}),i&&Object(s.jsx)(r,{selectedPicture:d,postsList:N,setIsModalOpen:c,setSelectedPicture:p})]})}}}]);
//# sourceMappingURL=4.c5d047a9.chunk.js.map