/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const isDev = process.env.NODE_ENV === 'dev'

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: isDev
  }
})
