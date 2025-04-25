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
          locale: false,
      },
    ]
  },
  transpilePackages: ["geist"],
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true, 
  // rules: [{ test: /\.exr$/, use: 'raw-loader' }]
}