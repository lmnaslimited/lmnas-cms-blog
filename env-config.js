const prod = process.env.NODE_ENV === 'production'

module.exports = {
  
 // 'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'https://lmnas-cms.herokuapp.com' : 'http://localhost:1337',
  //'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'https://lmnas-cms.herokuapp.com' : 'https://lmnas-cms.herokuapp.com',
  'process.env.BACKEND_URL': prod ? '' : '', 
   // 'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'http://localhost:1337' : 'http://localhost:1337',
   'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'https://dumps-240005.lmnaslens.com' : 'https://dumps-240005.lmnaslens.com',
   'process.env.STRAPI_PREVIEW_SECRET':'LMNAS',
   //'process.env.HOME_SITE_URL':"http://localhost:3000",
   'process.env.HOME_SITE_URL':"https://lmnas.com",
}

