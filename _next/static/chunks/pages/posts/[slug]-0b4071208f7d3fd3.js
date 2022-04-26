(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{5964:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9009),l=n(843),s=n(550),i=n(1664),a=n.n(i),c=n(5893);function o(e){var t=e.title,n=e.coverImage,i=e.date,o=e.excerpt,d=e.author,m=e.slug;return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"mb-5",children:(0,c.jsx)(s.Z,{slug:m,title:t,url:n.url})}),(0,c.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,c.jsx)(a(),{href:""+"/posts/".concat(m),children:(0,c.jsx)("a",{className:"hover:underline",children:t})})}),(0,c.jsx)("div",{className:"text-lg mb-4 text-th-accent-medium",children:(0,c.jsx)(l.Z,{dateString:i})}),(0,c.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:o}),(0,c.jsx)(r.Z,{name:d.name,picture:d.picture})]})}function d(e){var t=e.posts;return(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"More Stories"}),(0,c.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-20 md:gap-y-32 mb-32 ",children:t.map((function(e){return(0,c.jsx)(o,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},9894:function(e,t,n){"use strict";var r=n(3227),l=n(8361),s=n(5971),i=n(2715),a=n(1193);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var l=a(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=m(n(7294)),d=m(n(6505));function m(e){return e&&e.__esModule?e:{default:e}}var u={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function x(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){s(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return l(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||u[e]||"An unexpected error has occurred";return o.default.createElement("div",{style:f.error},o.default.createElement(d.default,null,o.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),o.default.createElement("div",null,o.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?o.default.createElement("h1",{style:f.h1},e):null,o.default.createElement("div",{style:f.desc},o.default.createElement("h2",{style:f.h2},this.props.title||e?t:o.default.createElement(o.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),n}(o.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=x,h.origGetInitialProps=x;var f={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},2564:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return I}});var r=n(1163),l=n(2918),s=n(9480),i=(n(7294),n(6873)),a=n.n(i),c=n(1664),o=n.n(c),d=n(5893);function m(e){var t=e.ctaLink;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("section",{className:"text-th-accent-medium body-font",children:(0,d.jsx)("div",{className:"container py-6 mx-auto",children:(0,d.jsx)("div",{className:"flex flex-row sm:items-center items-start mx-auto",children:(0,d.jsx)(o(),{href:"".concat(t.target),children:(0,d.jsxs)("a",{className:"hover:underline flex-grow sm:pr-16 text-2xl font-bold title-font text-th-accent-medium",children:[t.title.title," :",(0,d.jsx)("span",{className:"hover:underline flex-grow sm:pr-16 text-xl font-light title-font text-th-accent-medium ",children:t.title.subTitle})]})})})})})})}function u(e){var t=e.why;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("section",{className:"text-th-primary-medium body-font",children:(0,d.jsxs)("div",{className:"container flex flex-wrap px-5 py-8 mx-auto bg-th-background-secondary",children:[(0,d.jsx)("div",{className:"container px-5 py-4 mx-auto bg-th-background",children:(0,d.jsx)("div",{className:"flex flex-wrap w-full flex-col items-center text-center",children:(0,d.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-2 text-th-primary-medium",children:t.sectionTitle.title})})}),(0,d.jsx)("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6",children:(0,d.jsx)("div",{className:"p-4 flex",children:(0,d.jsx)("div",{className:a().markdown,dangerouslySetInnerHTML:{__html:t.html_content}})})})]})})})}function x(e){var t=e.content;return(0,d.jsx)("div",{className:"max-w-2xl mx-auto",children:t.map((function(e){switch(e.__typename){case"ComponentBodySection":return"why"==e.type?(0,d.jsx)(u,{why:e},e.sectionId):(0,d.jsx)("div",{className:a().markdown,dangerouslySetInnerHTML:{__html:e.html_content}},e.sectionId);case"ComponentCtaButton":return(0,d.jsx)(m,{ctaLink:e},e.id)}}))})}var h=n(5964);function f(){return(0,d.jsx)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:(0,d.jsx)(o(),{href:"/",children:(0,d.jsx)("a",{className:"hover:underline",children:"Insight"})})})}var g=n(9009),p=n(843),j=n(550);function v(e){var t=e.children;return(0,d.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})}function y(e){var t=e.title,n=e.coverImage,r=e.date,l=e.author,s=e.heroCta;return console.log(s.target),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("section",{className:"body-font",children:(0,d.jsxs)("div",{className:"container mx-auto flex md:px-5 py-4 md:flex-row flex-col items-center",children:[(0,d.jsxs)("div",{className:"lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[(0,d.jsx)("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-th-primary-light",children:t}),(0,d.jsx)("div",{className:"hidden md:block md:mb-12",children:(0,d.jsx)(g.Z,{className:"mt-8",name:l.name,picture:l.picture})}),s?(0,d.jsx)("p",{className:"text-sm mt-4 text-th-primary-light mb-4 w-3/5",children:s.title.subTitle}):null,(0,d.jsx)("div",{className:"flex w-full md:justify-start justify-center items-end",children:(0,d.jsx)(o(),{href:s.target.startsWith("/")?""+s.target:s.target,children:(0,d.jsx)("button",{className:"inline-flex text-white bg-th-accent-light border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:s.title.title})})})]}),(0,d.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-2/5 h-full",children:(0,d.jsx)(j.Z,{title:t,url:n.url,height:"1300"})})]})}),(0,d.jsxs)("div",{className:"max-w-2xl mx-auto mt-8",children:[(0,d.jsx)("div",{className:"block md:hidden mb-6",children:(0,d.jsx)(g.Z,{name:l.name,picture:l.picture})}),(0,d.jsx)("div",{className:"mb-6 text-lg text-th-accent-medium",children:(0,d.jsx)(p.Z,{dateString:r})})]})]})}function b(){return(0,d.jsx)("hr",{className:"border-accent-2 mt-28 mb-24"})}var N=n(1889),_=n(9008),w=n(2814),k=!0;function I(e){var t=e.post,n=e.morePosts,i=e.preview,a=e.categories,c=(0,r.useRouter)();return c.isFallback||null!==t&&void 0!==t&&t.slug?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{children:(0,d.jsxs)(N.Z,{preview:i,categories:a,children:[(0,d.jsx)(f,{}),c.isFallback?(0,d.jsx)(v,{children:"Loading\u2026"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("article",{children:[(0,d.jsxs)(_.default,{children:[(0,d.jsxs)("title",{children:[t.title," | ",t.category.name," Blog of LMNAs"]}),(0,d.jsx)("meta",{property:"og:image",content:t.ogImage.url})]}),(0,d.jsx)(y,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author,heroCta:t.herocta}),(0,d.jsx)(x,{content:t.content})]}),(0,d.jsx)(b,{}),n.length>0&&(0,d.jsx)(h.Z,{posts:n})]})]})}),(0,d.jsx)(w.Z,{})]}):(0,d.jsx)(l.default,{statusCode:404})}},9808:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(2564)}])},6873:function(e){e.exports={markdown:"markdown-styles_markdown__h_8de","ol-d":"markdown-styles_ol-d__FeMx6","ul-d":"markdown-styles_ul-d___euor"}},2918:function(e,t,n){e.exports=n(9894)},1163:function(e,t,n){e.exports=n(1587)}},function(e){e.O(0,[112,676,774,888,179],(function(){return t=9808,e(e.s=t);var t}));var t=e.O();_N_E=t}]);