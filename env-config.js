const prod = process.env.NODE_ENV === 'production'

module.exports = {
  
 // 'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'https://lmnas-cms.herokuapp.com' : 'http://localhost:1337',
  //'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'https://lmnas-cms.herokuapp.com' : 'https://lmnas-cms.herokuapp.com',
  'process.env.BACKEND_URL': prod ? '' : '', 
   'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'http://localhost:1337' : 'http://localhost:1337',

}

