(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{2686:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var s=r(9009),n=r(5904),i=r(550),c=r(1664),l=r.n(c),a=r(5893);function d(e){var t=e.title,r=e.coverImage,c=e.date,d=e.excerpt,u=e.author,x=e.slug;return(0,a.jsxs)("section",{children:[(0,a.jsx)("div",{className:"mb-8 md:mb-16",children:(0,a.jsx)(i.Z,{title:t,url:r.url,slug:x})}),(0,a.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-x-10 mb-20 md:mb-28",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight",children:(0,a.jsx)(l(),{href:""+"/posts/".concat(x),children:(0,a.jsx)("a",{className:"hover:underline",children:t})})}),(0,a.jsx)("div",{className:"mb-4 md:mb-0 text-lg text-th-accent-medium",children:(0,a.jsx)(n.Z,{dateString:c})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:d}),(0,a.jsx)(s.Z,{name:u.name,picture:u.picture})]})]})]})}},2486:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var s=r(5893);function n(e){var t=e.title;return(0,s.jsx)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:(0,s.jsxs)("h1",{className:"text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8",children:[t,"."]})})}},5964:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(9009),n=r(5904),i=r(550),c=r(1664),l=r.n(c),a=r(5893);function d(e){var t=e.title,r=e.coverImage,c=e.date,d=e.excerpt,u=e.author,x=e.slug;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsx)(i.Z,{slug:x,title:t,url:r.url})}),(0,a.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,a.jsx)(l(),{href:""+"/posts/".concat(x),children:(0,a.jsx)("a",{className:"hover:underline",children:t})})}),(0,a.jsx)("div",{className:"text-lg mb-4 text-th-accent-medium",children:(0,a.jsx)(n.Z,{dateString:c})}),(0,a.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:d}),(0,a.jsx)(s.Z,{name:u.name,picture:u.picture})]})}function u(e){var t=e.posts;return(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"More Stories"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-20 md:gap-y-32 mb-32 ",children:t.map((function(e){return(0,a.jsx)(d,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},4002:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return m}});var s=r(9480),n=r(5964),i=r(2686),c=r(2486),l=r(3535),a=r(9008),d=r.n(a),u=r(2814),x=r(5893),m=!0;t.default=function(e){var t=e.category,r=e.preview,a=e.categories,m=e.authors,o=t.posts[0],g=t.posts.slice(1).map((function(e){return{slug:e.slug,title:e.title,coverImage:e.coverImage,date:e.date,author:m.find((function(t){return t.name=e.author})),excerpt:e.excerpt}})),h={name:o.author,picture:m[0].picture};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.Z,{children:(0,x.jsxs)(l.Z,{preview:r,categories:a,children:[(0,x.jsx)(d(),{children:(0,x.jsxs)("title",{children:["LMNAs Blog | Category ",t.name]})}),(0,x.jsx)(c.Z,{title:t.name}),o&&(0,x.jsx)(i.Z,{title:o.title,coverImage:o.coverImage,date:o.date,author:h,slug:o.slug,excerpt:o.excerpt}),g.length>0&&(0,x.jsx)(n.Z,{posts:g})]})}),(0,x.jsx)(u.Z,{})]})}},1571:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return r(4002)}])}},function(e){e.O(0,[112,448,774,888,179],(function(){return t=1571,e(e.s=t);var t}));var t=e.O();_N_E=t}]);