
// const prod = process.env.NODE_ENV === 'production'

// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   module.exports = {  
//     images: {
//       domains: ["localhost", "res.cloudinary.com", "lmnas.com"],
//     },
//     reactStrictMode: true,
//   basePath: '/blog',
//   };
// } else if (process.env.NODE_ENV === "production") {
//   module.exports = {
//     images: {
//       loader: 'cloudinary',
//       path: 'https://res.cloudinary.com/lmnas/image/fetch/',
//       domains: ["res.cloudinary.com"],
      
//     },
//     reactStrictMode: true,
//   basePath: '/blog',
//     //assetPrefix: '/lmnas-cms-blog/'
//   };
// }


module.exports = {  
  images: {
    // domains: ["localhost"],
    domains: ["dumps-240005.lmnaslens.com"],

  },
  
  // reactStrictMode: true,
basePath: '/blog',
};