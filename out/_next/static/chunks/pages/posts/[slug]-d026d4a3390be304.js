(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{9651:function(e,t,n){"use strict";var r=n(4575),l=n(3913),i=n(2205),a=n(8585),s=n(9754);function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var l=s(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return a(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=d(n(7294)),u=d(n(2717));function d(e){return e&&e.__esModule?e:{default:e}}var m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){i(n,e);var t=o(n);function n(){return r(this,n),t.apply(this,arguments)}return l(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:x.error},c.default.createElement(u.default,null,c.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:x.h1},e):null,c.default.createElement("div",{style:x.desc},c.default.createElement("h2",{style:x.h2},this.props.title||e?t:c.default.createElement(c.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),n}(c.default.Component);h.displayName="ErrorPage",h.getInitialProps=f,h.origGetInitialProps=f,t.default=h;var x={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},6211:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return N}});var r=n(1163),l=n(2918),i=n(5162),a=n(602),s=n.n(a),o=n(5893);function c(e){var t=e.content;return(0,o.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,o.jsx)("div",{className:s().markdown,dangerouslySetInnerHTML:{__html:t}})})}var u=n(2857),d=n(1664);function m(){return(0,o.jsxs)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:[(0,o.jsx)(d.default,{href:"/lmnas-cms-blog/",children:(0,o.jsx)("a",{className:"hover:underline",children:"Blog"})}),"."]})}var f=n(4014),h=n(6894),x=n(6126);function p(e){var t=e.children;return(0,o.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})}function g(e){var t=e.title,n=e.coverImage,r=e.date,l=e.author;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{children:t}),(0,o.jsx)("div",{className:"hidden md:block md:mb-12",children:(0,o.jsx)(f.Z,{name:l.name,picture:l.picture})}),(0,o.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:(0,o.jsx)(x.Z,{title:t,url:n.url})}),(0,o.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,o.jsx)("div",{className:"block md:hidden mb-6",children:(0,o.jsx)(f.Z,{name:l.name,picture:l.picture})}),(0,o.jsx)("div",{className:"mb-6 text-lg text-th-accent-medium",children:(0,o.jsx)(h.Z,{dateString:r})})]})]})}function v(){return(0,o.jsx)("hr",{className:"border-accent-2 mt-28 mb-24"})}var j=n(5286),b=n(9008),y=n(3703),_=!0;function N(e){var t=e.post,n=e.morePosts,a=e.preview,s=e.categories,d=(0,r.useRouter)();return d.isFallback||null!==t&&void 0!==t&&t.slug?(0,o.jsx)(j.Z,{preview:a,categories:s,children:(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(m,{}),d.isFallback?(0,o.jsx)(p,{children:"Loading\u2026"}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("article",{children:[(0,o.jsxs)(b.default,{children:[(0,o.jsxs)("title",{children:[t.title," | Next.js Blog Example with ",y.yf]}),(0,o.jsx)("meta",{property:"og:image",content:t.ogImage.url})]}),(0,o.jsx)(g,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),(0,o.jsx)(c,{content:t.content})]}),(0,o.jsx)(v,{}),n.length>0&&(0,o.jsx)(u.Z,{posts:n})]})]})}):(0,o.jsx)(l.default,{statusCode:404})}},9808:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(6211)}])},602:function(e){e.exports={markdown:"markdown-styles_markdown__h_8de"}},2918:function(e,t,n){e.exports=n(9651)},1163:function(e,t,n){e.exports=n(9898)}},function(e){e.O(0,[693,725,774,888,179],(function(){return t=9808,e(e.s=t);var t}));var t=e.O();_N_E=t}]);