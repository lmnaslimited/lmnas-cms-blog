const prod = process.env.NODE_ENV === 'production'
const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
console.log(prod)

module.exports = {
  
  'process.env.NEXT_PUBLIC_STRAPI_API_URL': prod ? 'https://lmnas-cms.herokuapp.com' : 'http://localhost:1337',
  'process.env.BACKEND_URL': prod ? '/lmnas-cms-blog' : '', 
  'process.env.HOST_NAME': hostname
}