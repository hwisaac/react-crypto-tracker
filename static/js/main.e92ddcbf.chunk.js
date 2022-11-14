(this["webpackJsonpreact-crypto-tracker"]=this["webpackJsonpreact-crypto-tracker"]||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(27),o=t.n(r),a=t(15),s=t(7),l=t(9),d=t(18),j=t(8),b=t(28),h="https://api.coinpaprika.com/v1";function p(){return fetch("".concat(h,"/coins")).then((function(n){return n.json()}))}var u=t(44),x=t.n(u),O=t(1);var f=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){return fetch("https://ohlcv-api.nomadcoders.workers.dev?coinId=".concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data;return Object(O.jsx)("div",{children:c?"Loading chart...":Object(O.jsx)(x.a,{type:"line",series:[{name:"Price",data:null===i||void 0===i?void 0:i.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})};var g,m,v,y,k,w,C,I,L,q=function(){return Object(O.jsx)("h1",{children:"Price"})},Q=s.c.h1(g||(g=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),z=s.c.span(m||(m=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),P=s.c.div(v||(v=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),S=s.c.header(y||(y=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),F=s.c.div(k||(k=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),T=s.c.div(w||(w=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),A=s.c.p(C||(C=Object(l.a)(["\n  margin: 20px 0px;\n"]))),M=s.c.div(I||(I=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),$=s.c.span(L||(L=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var _,B,D,J,R,E,H,U=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),i=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(h,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(h,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,p=s.data,u=r||l;return Object(O.jsxs)(P,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("title",{children:null!==e&&void 0!==e&&e.name?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(O.jsx)(S,{children:Object(O.jsx)(Q,{children:null!==e&&void 0!==e&&e.name?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),u?Object(O.jsx)(z,{children:"Loading..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(F,{children:[Object(O.jsxs)(T,{children:[Object(O.jsx)("span",{children:"Rank:"}),Object(O.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(O.jsxs)(T,{children:[Object(O.jsx)("span",{children:"Symbol:"}),Object(O.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(O.jsxs)(T,{children:[Object(O.jsx)("span",{children:"Price:"}),Object(O.jsxs)("span",{children:["$",null===p||void 0===p?void 0:p.quotes.USD.price.toFixed(3)]})]})]}),Object(O.jsx)(A,{children:null===o||void 0===o?void 0:o.description}),Object(O.jsxs)(F,{children:[Object(O.jsxs)(T,{children:[Object(O.jsx)("span",{children:"Total Suply:"}),Object(O.jsx)("span",{children:null===p||void 0===p?void 0:p.total_supply})]}),Object(O.jsxs)(T,{children:[Object(O.jsx)("span",{children:"Max Supply:"}),Object(O.jsx)("span",{children:null===p||void 0===p?void 0:p.max_supply})]})]}),Object(O.jsxs)(M,{children:[Object(O.jsx)($,{isActive:null!==c,children:Object(O.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(O.jsx)($,{isActive:null!==t,children:Object(O.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/:coinId/price",children:Object(O.jsx)(q,{})}),Object(O.jsx)(j.a,{path:"/:coinId/chart",children:Object(O.jsx)(f,{coinId:n})})]})]})]})},G=s.c.div(_||(_=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),K=s.c.header(B||(B=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),N=s.c.ul(D||(D=Object(l.a)([""]))),V=s.c.li(J||(J=Object(l.a)(["\n  background-color: white;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),W=s.c.h1(R||(R=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),X=s.c.span(E||(E=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),Y=s.c.img(H||(H=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var Z=function(){var n=Object(a.useQuery)("allCoins",p),e=n.isLoading,t=n.data;return Object(O.jsxs)(G,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("title",{children:"\ucf54\uc778"})}),Object(O.jsx)(K,{children:Object(O.jsx)(W,{children:"\ucf54\uc778"})}),e?Object(O.jsx)(X,{children:"Loading..."}):Object(O.jsx)(N,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(O.jsx)(V,{children:Object(O.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(O.jsx)(Y,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var nn,en=function(){return Object(O.jsx)(d.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/:coinId",children:Object(O.jsx)(U,{})}),Object(O.jsx)(j.a,{path:"/",children:Object(O.jsx)(Z,{})})]})})},tn=t(48),cn=Object(s.b)(nn||(nn=Object(l.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n  box-sizing: border-box;\n}\nbody{\n\tfont-weight: 300;\n  background-color: ",";\n\tcolor:",";\n  line-height: 1.2;\n}\na{\n  text-decoration: none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var rn=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(cn,{}),Object(O.jsx)(en,{}),";",Object(O.jsx)(tn.ReactQueryDevtools,{initialIsOpen:!0})]})},on=new a.QueryClient;o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(a.QueryClientProvider,{client:on,children:Object(O.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#9c88ff"},children:Object(O.jsx)(rn,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.e92ddcbf.chunk.js.map