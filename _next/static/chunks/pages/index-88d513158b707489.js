(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{119:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var r=s(4014),n=s(6894),l=s(6126),i=s(1664),a=s(5893);function c(e){var t=e.title,s=e.coverImage,c=e.date,o=e.excerpt,d=e.author,m=e.slug;return(0,a.jsxs)("section",{children:[(0,a.jsx)("div",{className:"mb-8 md:mb-16",children:(0,a.jsx)(l.Z,{title:t,url:s.url,slug:m})}),(0,a.jsxs)("div",{className:"md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight",children:(0,a.jsx)(i.default,{href:"/lmnas-cms-blog"+"/posts/".concat(m),children:(0,a.jsx)("a",{className:"hover:underline",children:t})})}),(0,a.jsx)("div",{className:"mb-4 md:mb-0 text-lg text-th-accent-medium",children:(0,a.jsx)(n.Z,{dateString:c})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:o}),(0,a.jsx)(r.Z,{name:d.name,picture:d.picture})]})]})]})}},1256:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(5893);function n(e){var t=e.title;return(0,r.jsx)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:(0,r.jsxs)("h1",{className:"text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8",children:[t,"."]})})}},7179:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return y},default:function(){return N}});var r=s(5162),n=(s(1256),s(1664)),l=s(7462),i=s(3153),a=s(5893),c=function(e){var t=(0,l.Z)({},i)[e.icon];return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t,{className:"h-7 w-7 ","aria-hidden":"true"})})};function o(e){var t=e.category,s=e.color,r=s?"bg-"+s:"bg-th-accent-light";return(0,a.jsx)("div",{className:"py-4 md:p-4 md:w-1/4 mx-4 sm:w-1/2 w-full",children:(0,a.jsx)(n.default,{href:"/lmnas-cms-blog"+"/category/".concat(t.slug),children:(0,a.jsxs)("button",{type:"button",className:"bg-th-primary-light shadow-sm text-th-background inline-flex  pt-3 pb-2 px-5 rounded-lg items-center hover:bg-th-accent-medium hover:text-th-primary-light focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out",children:[(0,a.jsx)("div",{className:"shadow-sm text-th-background  py-6 -mt-4 -mb-3 px-1 -ml-5  items-center hover:bg-th-accent-medium hover:text-th-primary-light focus:outline-none "+r}),(0,a.jsx)(c,{icon:t.svg}),(0,a.jsx)("span",{className:"ml-4 flex items-start flex-col leading-none",children:(0,a.jsx)("span",{className:"text-xs  mb-1",children:t.name.toUpperCase()})}),(0,a.jsxs)("span",{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 mb-1 ml-8 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})," "]})]})})})}var d=["purple-400","teal-400","pink-400","indigo-400"];function m(e){var t=e.categories;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{class:" body-font hidden md:block",children:(0,a.jsx)("div",{class:"container mx-auto py-12",children:(0,a.jsx)("div",{class:"flex flex-wrap justify-center text-center",children:t.map((function(e,t){return(0,a.jsx)(o,{category:e,color:d[t]})}))})})})})}var x=s(119),h=s(6126);function u(e){var t=e.size,s=(e.imageSrc,e.post),r=" md:w-"+t,l=("".concat(s.coverImage.url.startsWith("/")?"https://lmnas-cms.herokuapp.com":"").concat(s.coverImage.url),s.excerpt.length<150*parseInt(t)?s.excerpt:s.excerpt.substring(0,150*parseInt(t))+"...");return(0,a.jsx)("div",{class:"py-4 md:p-4 "+r,children:(0,a.jsxs)("div",{class:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden",children:[(0,a.jsx)(h.Z,{slug:s.slug,title:s.title,url:s.coverImage.url,height:1500/parseInt(t)}),(0,a.jsxs)("div",{class:"p-6",children:[(0,a.jsx)("h2",{class:"tracking-widest text-xs title-font font-medium  text-th-accent-medium  mb-1",children:s.category.name?s.category.name.toUpperCase():"Unclassified"}),(0,a.jsx)("h1",{class:"title-font text-2xl font-medium mb-3 text-gray-100 inline ",children:(0,a.jsx)(n.default,{href:"/lmnas-cms-blog"+"/posts/".concat(s.slug),children:(0,a.jsx)("a",{className:"hover:underline",children:s.title})})}),(0,a.jsx)("p",{class:"lg:h-36 md:h-36 w-full text-th-primary-dark leading-relaxed mb-3",children:l}),(0,a.jsxs)("div",{class:"flex items-center flex-wrap",children:[(0,a.jsxs)("a",{href:"/lmnas-cms-blog"+"/posts/".concat(s.slug),class:"text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0",children:["Learn More",(0,a.jsxs)("svg",{viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",class:"w-4 h-4 ml-2",children:[(0,a.jsx)("path",{d:"M5 12h14"}),(0,a.jsx)("path",{d:"M12 5l7 7-7 7"})]})]}),(0,a.jsxs)("span",{class:"text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200",children:[(0,a.jsxs)("svg",{stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",class:"w-4 h-4 mr-1",children:[(0,a.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"1.2K"]}),(0,a.jsxs)("span",{class:"text-gray-400 inline-flex items-center leading-none text-sm",children:[(0,a.jsx)("svg",{stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round","stroke-linejoin":"round",viewBox:"0 0 24 24",class:"w-4 h-4 mr-1",children:(0,a.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),"6"]})]})]})]})})}s(4298);function g(e){var t=e.size,s=(e.imageSrc,e.post),r=" md:w-"+t;"".concat(s.coverImage.url.startsWith("/")?"https://lmnas-cms.herokuapp.com":"").concat(s.coverImage.url);return(0,a.jsx)("div",{class:"py-4 md:p-4 "+r,children:(0,a.jsxs)("div",{class:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-purple-400",children:[(0,a.jsx)("h1",{class:"text-5xl p-5 font-medium text-center text-white title-font mb-2 ",children:"Subscribe us to get our Latest Posts and Newsletters"}),(0,a.jsx)("iframe",{src:"//cx.lmnas.com/form/3",width:"100%",height:"100%",className:"inset-0 bg-gray-200 pt-10 p-2",frameBorder:"2",title:"map",marginHeight:"0",marginWidth:"4",scrolling:"no",children:(0,a.jsx)("p",{children:"Your browser does not support iframes."})})]})})}function p(e){var t=e.size,s=e.imageSrc,r=(e.post," md:w-"+t);return(0,a.jsx)("div",{class:"py-4 md:p-4 "+r,children:(0,a.jsxs)("div",{class:"h-full border-2 border-th-primary-medium border-opacity-60 rounded-lg overflow-hidden bg-th-accent-medium",children:[(0,a.jsx)("h1",{class:"text-5xl p-5 font-medium text-center text-th-primary-light title-font mb-2 ",children:"Download Case Studies form Our Resource centre"}),(0,a.jsxs)("div",{class:"relative",children:[(0,a.jsx)(h.Z,{url:s,title:"Download lmnas resource",height:1500/parseInt(t)}),(0,a.jsx)("button",{class:"absolute top-0 bg-purple-500 text-th-primary-light p-2 rounded hover:bg-th-accent-medium m-20 transform transition hover:scale-105 duration-300 ease-in-out",children:"Download Now"})]})]})})}function f(e){var t=e.allPosts,s=(e.preview,e.categories),r=t[0];t.slice(1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{classNameName:"body-font",children:[s&&(0,a.jsx)(m,{categories:s}),r&&(0,a.jsx)(x.Z,{title:r.title,coverImage:r.coverImage,date:r.date,author:r.author,slug:r.slug,excerpt:r.excerpt}),(0,a.jsx)("section",{className:"text-gray-600 body-font",children:(0,a.jsx)("div",{className:"container px-5 mx-auto py-12",children:(0,a.jsxs)("div",{className:"flex flex-wrap -m-4",children:[(0,a.jsx)(u,{post:t[1]?t[1]:r,size:"1/3"}),(0,a.jsx)(u,{post:t[2]?t[2]:r,size:"1/3"}),(0,a.jsx)(g,{post:r,size:"1/3"})]})})})]}),(0,a.jsx)("section",{className:"text-gray-600 body-font",children:(0,a.jsx)("div",{className:"container px-5 mx-auto py-12",children:(0,a.jsxs)("div",{className:"flex flex-wrap -m-4",children:[(0,a.jsx)(p,{imageSrc:"https://res.cloudinary.com/lmnas/image/upload/v1649901729/download_card_5821x3886_d1e1c9daee.jpg",size:"1/3"}),(0,a.jsx)(u,{post:t[3]?t[3]:r,size:"2/3"})]})})})]})}var j=s(1854),v=s(9008),b=s(3703),w=s(6837),y=!0;function N(e){var t=e.allPosts,s=e.preview,n=e.categories;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"bg-th-background",children:[(0,a.jsx)(r.Z,{children:(0,a.jsxs)(j.Z,{preview:s,categories:n,children:[(0,a.jsx)(v.default,{children:(0,a.jsxs)("title",{children:["LMNAs Blog with ",b.yf]})}),(0,a.jsx)(f,{allPosts:t,preview:s,categories:n})]})}),(0,a.jsx)(w.default,{})]})})}},6837:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}});var r=s(5893);function n(){return(0,r.jsx)("div",{className:" text-center mx-auto py-4 px-40 flex  w-full  flex-col sm:flex-row bg-th-accent-medium  opacity-80",children:(0,r.jsxs)("p",{className:"text-th-primary-light font-semibold text-lg text-center",children:["\xa9 2021",(0,r.jsx)("a",{href:"#",rel:"noopener noreferrer",className:"text-th-primary-light ml-1",target:"_blank",children:"Designed By LMNAs Limited"})]})})}},8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7179)}])}},function(e){e.O(0,[693,998,292,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);