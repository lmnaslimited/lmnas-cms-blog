const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'https://lmnas-cms.herokuapp.com' : 'http://localhost:1337',
  'process.env.BACKEND_URL': prod ? '/lmnas-cms-blog' : '', 
}