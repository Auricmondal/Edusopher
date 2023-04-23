/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash:true,
  optimizeFonts:true,
  swcMinify:true,
    images: {
      domains: ['cdn.sanity.io'],
      minimumCacheTTL:1500000,
  },
}

module.exports = nextConfig
