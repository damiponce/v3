/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  async redirects() {
    return [
       {
          source: '/en/posts/:slug*',
          destination: '/posts/:slug*',
          permanent: true,
          locale: false
        },
    ]
}
  // rules: [{ test: /\.exr$/, use: 'raw-loader' }]
}