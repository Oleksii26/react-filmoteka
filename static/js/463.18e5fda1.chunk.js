"use strict";(self.webpackChunkreact_filmoteka=self.webpackChunkreact_filmoteka||[]).push([[463],{6:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(885),a=r(791),c=r(257),u=r(87),i=r(689),o="Cast_container__3pnQ0",s=r(184),p=function(){var t=(0,a.useState)([]),n=(0,e.Z)(t,2),r=n[0],p=n[1],f=(0,i.UO)().movieId;return(0,a.useEffect)((function(){(0,c.Mn)(f).then((function(t){return p(t.cast)}))}),[f]),(0,s.jsx)("div",{className:o,children:r.map((function(t){return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{width:120,src:t.profile_path?"".concat(c.k4).concat(t.profile_path):t.gender?c.Ob:c.Ez,alt:t.name}),(0,s.jsxs)("p",{children:[" ",(0,s.jsx)(u.rU,{to:"".concat(t.id),children:t.name})]}),(0,s.jsx)(i.j3,{})]},t.id)}))})}},257:function(t,n,r){r.d(n,{Ez:function(){return p},Mn:function(){return m},Ob:function(){return f},PO:function(){return s},WE:function(){return h},fA:function(){return k},i2:function(){return v},k4:function(){return o},rZ:function(){return l},x6:function(){return d}});var e=r(861),a=r(757),c=r.n(a),u=r(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="6e9a81a407105e7aedf1637991fa6ef2",o="https://image.tmdb.org/t/p/w500/",s="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447__340.jpg",p="https://image.shutterstock.com/image-vector/woman-avatar-design-ai-8-260nw-2083328116.jpg",f="https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-538707355.jpg",v=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/trending/all/day?api_key=".concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),k=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/person/".concat(n,"?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=463.18e5fda1.chunk.js.map