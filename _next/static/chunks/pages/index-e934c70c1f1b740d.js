(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{119:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var r=s(4014),n=s(6894),a=s(6126),l=s(1664),i=s(5893);function c(e){var t=e.title,s=e.coverImage,c=e.date,o=e.excerpt,d=e.author,m=e.slug;return(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{className:"mb-8 md:mb-16",children:(0,i.jsx)(a.Z,{title:t,url:s.url,slug:m})}),(0,i.jsxs)("div",{className:"md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight",children:(0,i.jsx)(l.default,{href:"/lmnas-cms-blog"+"/posts/".concat(m),children:(0,i.jsx)("a",{className:"hover:underline",children:t})})}),(0,i.jsx)("div",{className:"mb-4 md:mb-0 text-lg text-th-accent-medium",children:(0,i.jsx)(n.Z,{dateString:c})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:o}),(0,i.jsx)(r.Z,{name:d.name,picture:d.picture})]})]})]})}},1256:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(5893);function n(e){var t=e.title;return(0,r.jsx)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:(0,r.jsxs)("h1",{className:"text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8",children:[t,"."]})})}},7179:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return N},default:function(){return y}});var r=s(5162),n=(s(1256),s(1664)),a=s(7462),l=s(3153),i=s(5893),c=function(e){var t=(0,a.Z)({},l)[e.icon];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t,{className:"h-7 w-7 ","aria-hidden":"true"})})};function o(e){var t=e.category,s=e.color,r=s?"bg-"+s:"bg-th-accent-light";return(0,i.jsx)("div",{className:"py-4 md:p-4 md:w-1/4 mx-4 sm:w-1/2 w-full",children:(0,i.jsx)(n.default,{href:"/lmnas-cms-blog"+"/category/".concat(t.slug),children:(0,i.jsxs)("button",{type:"button",className:"bg-th-primary-light shadow-sm text-th-background inline-flex  pt-3 pb-2 px-5 rounded-lg items-center hover:bg-th-accent-medium hover:text-th-primary-light focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out",children:[(0,i.jsx)("div",{className:"shadow-sm text-th-background  py-6 -mt-4 -mb-3 px-1 -ml-5  items-center hover:bg-th-accent-medium hover:text-th-primary-light focus:outline-none "+r}),(0,i.jsx)(c,{icon:t.svg}),(0,i.jsx)("span",{className:"ml-4 flex items-start flex-col leading-none",children:(0,i.jsx)("span",{className:"text-xs  mb-1",children:t.name.toUpperCase()})}),(0,i.jsxs)("span",{children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 mb-1 ml-8 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})," "]})]})})})}var d=["purple-400","teal-400","pink-400","indigo-400"];function m(e){var t=e.categories;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{class:" body-font hidden md:block",children:(0,i.jsx)("div",{class:"container mx-auto py-12",children:(0,i.jsx)("div",{class:"flex flex-wrap justify-center text-center",children:t.map((function(e,t){return(0,i.jsx)(o,{category:e,color:d[t]})}))})})})})}var x=s(119),h=s(6126);function u(e){var t=e.size,s=(e.imageSrc,e.post),r=("".concat(s.coverImage.url.startsWith("/")?"https://lmnas-cms.herokuapp.com":"").concat(s.coverImage.url),s.excerpt.length<150*parseInt(t)?s.excerpt:s.excerpt.substring(0,150*parseInt(t))+"...");return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden",children:[(0,i.jsx)(h.Z,{slug:s.slug,title:s.title,url:s.coverImage.url,width:720*parseInt(t),height:400}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsx)("h2",{className:"tracking-widest text-xs title-font font-medium  text-th-accent-medium  mb-1",children:s.category.name?s.category.name.toUpperCase():"UnclassNameified"}),(0,i.jsx)("h1",{className:"title-font text-lg font-medium mb-3 text-gray-100",children:(0,i.jsx)(n.default,{href:"/lmnas-cms-blog"+"/posts/".concat(s.slug),children:(0,i.jsx)("a",{classNameName:"hover:underline",children:s.title})})}),(0,i.jsx)("p",{className:"w-full text-th-primary-dark leading-relaxed mb-3",children:r}),(0,i.jsxs)("div",{className:"flex items-center flex-wrap",children:[(0,i.jsxs)("a",{href:"/lmnas-cms-blog"+"/posts/".concat(s.slug),className:"text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0",children:["Learn More",(0,i.jsxs)("svg",{viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4 ml-2",children:[(0,i.jsx)("path",{d:"M5 12h14"}),(0,i.jsx)("path",{d:"M12 5l7 7-7 7"})]})]}),(0,i.jsxs)("span",{className:"text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200",children:[(0,i.jsxs)("svg",{stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",className:"w-4 h-4 mr-1",children:[(0,i.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,i.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"1.2K"]}),(0,i.jsxs)("span",{className:"text-gray-400 inline-flex items-center leading-none text-sm",children:[(0,i.jsx)("svg",{stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",className:"w-4 h-4 mr-1",children:(0,i.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),"6"]})]})]})]})})}s(4298);function g(e){e.size,e.imageSrc;var t=e.post;"".concat(t.coverImage.url.startsWith("/")?"https://lmnas-cms.herokuapp.com":"").concat(t.coverImage.url);return(0,i.jsxs)("div",{class:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-purple-400",children:[(0,i.jsx)("h1",{class:"text-5xl p-5 font-medium text-center text-white title-font mb-2 ",children:"Subscribe us to get our Latest Posts and Newsletters"}),(0,i.jsx)("iframe",{src:"//cx.lmnas.com/form/3",width:"100%",height:"100%",className:"inset-0 bg-gray-200 pt-10 p-2",frameBorder:"2",title:"map",marginHeight:"0",marginWidth:"4",scrolling:"no",children:(0,i.jsx)("p",{children:"Your browser does not support iframes."})})]})}function p(e){var t=e.size,s=e.imageSrc;e.post;return(0,i.jsxs)("div",{class:"h-full border-2 border-th-primary-medium border-opacity-60 rounded-lg overflow-hidden bg-th-accent-medium",children:[(0,i.jsx)("h1",{class:"text-5xl p-5 font-medium text-center text-th-primary-light title-font mb-2 ",children:"Download Case Studies form Our Resource centre"}),(0,i.jsxs)("div",{class:"relative",children:[(0,i.jsx)(h.Z,{url:s,title:"Download lmnas resource",height:1500/parseInt(t)}),(0,i.jsx)("button",{class:"absolute top-0 bg-purple-500 text-th-primary-light p-2 rounded hover:bg-th-accent-medium m-20 transform transition hover:scale-105 duration-300 ease-in-out",children:"Download Now"})]})]})}function j(e){var t=e.allPosts,s=(e.preview,e.categories),r=t[0];t.slice(1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"body-font",children:[s&&(0,i.jsx)(m,{categories:s}),r&&(0,i.jsx)(x.Z,{title:r.title,coverImage:r.coverImage,date:r.date,author:r.author,slug:r.slug,excerpt:r.excerpt}),(0,i.jsx)("section",{className:"body-font",children:(0,i.jsx)("div",{className:"container mx-auto py-12",children:(0,i.jsxs)("div",{className:"md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-12 mb-20 md:mb-28",children:[(0,i.jsx)(u,{post:t[1]?t[1]:r,size:"1/3"}),(0,i.jsx)(u,{post:t[2]?t[2]:r,size:"1/3"}),(0,i.jsx)(g,{post:r,size:"1/3"}),(0,i.jsx)(p,{imageSrc:"https://res.cloudinary.com/lmnas/image/upload/v1649901729/download_card_5821x3886_d1e1c9daee.jpg",size:"1/3"}),(0,i.jsx)("div",{className:"col-span-2",children:(0,i.jsx)(u,{post:t[3]?t[3]:r,size:"1/3"})})]})})})]}),(0,i.jsx)("section",{className:"text-gray-600 body-font",children:(0,i.jsx)("div",{className:"container px-5 mx-auto py-12",children:(0,i.jsx)("div",{className:"flex flex-wrap -m-4"})})})]})}var f=s(1854),v=s(9008),b=s(3703),w=s(6837),N=!0;function y(e){var t=e.allPosts,s=e.preview,n=e.categories;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"bg-th-background",children:[(0,i.jsx)(r.Z,{children:(0,i.jsxs)(f.Z,{preview:s,categories:n,children:[(0,i.jsx)(v.default,{children:(0,i.jsxs)("title",{children:["LMNAs Blog with ",b.yf]})}),(0,i.jsx)(j,{allPosts:t,preview:s,categories:n})]})}),(0,i.jsx)(w.default,{})]})})}},8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7179)}])}},function(e){e.O(0,[693,998,12,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);