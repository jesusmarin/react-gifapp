(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(2),u=n(9),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,c,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=5&api_key=P4IRcExpicUDZSeqRZIOLhRtf0JzqNov"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.url,n=t.title;return Object(a.jsxs)("div",{className:"card animate_animated animate__bounce",children:[Object(a.jsx)("img",{src:e,alt:n}),Object(a.jsx)("p",{children:n})]})},m=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){setTimeout((function(){r({data:t,loading:!1})}),2e3)}))}),[t]),a}(e),r=n.data,i=n.loading;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e}),i&&Object(a.jsx)("p",{className:" animate_animated animate__flash",children:"Cargando..."}),Object(a.jsx)("div",{className:"card-grid animate_animated animate__bounce",children:r.map((function(t){return Object(a.jsx)(p,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["One Punch"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:" GifExpertApp"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(m,{category:t},t)}))})]})};n(17);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4b2b1e27.chunk.js.map