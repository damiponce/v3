const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  transpilePackages: ['three'],
  module: {
    rules: [{ test: /\.exr$/, use: 'raw-loader' }],
  }
}