(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[5],{333:function(t,e,c){},344:function(t,e,c){"use strict";c.r(e);var n=c(13),a=c(0),o=c(45),s=c.n(o),r=c(19),i=c(25),j=c(79),u=c.n(j),d=c(103),b=c.n(d),l=c(331),O=c(58),h=c(4),f=(c(333),c(1));e.default=function(){var t=Object(r.b)(),e=Object(r.c)((function(t){return t.categoriesReduceer.data})),c=Object(r.c)((function(t){return t.login.data}));Object(a.useEffect)((function(){s.a.get("https://fakestoreapi.com/products/category/jewelery").then((function(e){return t(Object(i.f)(e.data))})).catch((function(t){return console.log(t)}))}),[t]);var o=Object(a.useState)(!1),j=Object(n.a)(o,2),d=j[0],p=j[1],x=Object(a.useState)(!1),m=Object(n.a)(x,2),g=m[0],k=m[1],v=function(){k(!0)},w=Object(f.jsx)(h.b,{to:"/basket",children:"Go to the basket"});return Object(f.jsx)("div",{className:"category",children:Object(f.jsxs)("div",{className:"product-container container",children:[e.map((function(e,n){return Object(f.jsxs)("div",{className:"products",children:[Object(f.jsx)("div",{className:"product-image",children:Object(f.jsx)("img",{src:e.image,alt:"Product images"})}),Object(f.jsx)("p",{children:e.title}),Object(f.jsxs)("span",{children:["$ ",e.price]}),Object(f.jsxs)("div",{className:"product-hover",children:[c?Object(f.jsxs)("button",{onClick:function(){return function(e){t(Object(i.a)(e)),v()}(e)},children:[Object(f.jsx)(u.a,{}),"Add basket"]}):Object(f.jsxs)("button",{onClick:function(){return p(!0)},children:[Object(f.jsx)(u.a,{}),"Add basket"]}),Object(f.jsx)(h.b,{to:"/product/".concat(e.id),children:Object(f.jsxs)("button",{children:[Object(f.jsx)(b.a,{}),"View Product"]})})]})]},n)})),Object(f.jsx)(O.a,{ModalOpenLogin:d,setModalOpenFunc:function(){p(!1)}}),Object(f.jsx)(l.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:g,action:w,autoHideDuration:3e3,onClose:function(t){"clickaway"!==t&&k(!1)},message:"Your product was added."})]})})}}}]);
//# sourceMappingURL=5.6195864e.chunk.js.map