(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[4],{327:function(e,t,c){},328:function(e,t,c){"use strict";var s=c(24),n=c(25);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(c(0)),r=(0,s(c(26)).default)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=r},332:function(e,t,c){"use strict";c.r(t);var s=c(16),n=c(0),i=c(27),r=(c(327),c(1)),j=function(e){var t=e.totalprice;return Object(r.jsxs)("div",{className:"totalAmount",children:[Object(r.jsx)("button",{children:"Buy now"}),Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Shipping"}),Object(r.jsx)("td",{children:"Free"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:" Total amount"}),Object(r.jsxs)("td",{children:["$ ",t]})]})]})})]})},a=c(42),d=c(328),l=c.n(d);t.default=function(){var e=Object(i.c)((function(e){return e.basket.data})),t=0;e.forEach((function(e){return t+=e.price}));var c=Object(i.b)(),d=Object(n.useState)(1),b=Object(s.a)(d,2),u=b[0],o=b[1];return Object(r.jsx)("div",{className:"basket container",children:Object(r.jsxs)("div",{className:"basket-main",children:[Object(r.jsxs)("div",{className:"basket-product",children:[0===e.length?Object(r.jsx)("h4",{children:"Your basket is empty"}):Object(r.jsxs)("h4",{children:["My ",e.length,1===e.length?" product:":" products:"]}),e.map((function(e,t){return Object(r.jsxs)("div",{className:"products",children:[Object(r.jsx)("div",{className:"product-image",children:Object(r.jsx)("img",{src:e.image,alt:"Product images"})}),Object(r.jsxs)("div",{className:"product-text",children:[Object(r.jsx)("p",{children:e.title}),Object(r.jsxs)("span",{children:["$ ",e.price]}),Object(r.jsx)("p",{children:e.description}),Object(r.jsxs)("div",{className:"quantity",children:["Quantity:",Object(r.jsx)("button",{children:"-"}),Object(r.jsx)("span",{children:u}),Object(r.jsx)("button",{onClick:function(){return c(Object(a.c)()),void o(u+1)},children:Object(r.jsx)(l.a,{})})]}),Object(r.jsx)("button",{onClick:function(){return function(e){c(Object(a.e)(e))}(e)},children:"Remove item"})]})]},t)}))]}),Object(r.jsx)("div",{className:"basket-buy-button",children:Object(r.jsx)(j,{totalprice:t})})]})})}}}]);
//# sourceMappingURL=4.141b4e7f.chunk.js.map