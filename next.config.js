/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash:true,
  optimizeFonts:true,
  swcMinify:true,
    images: {
      unoptimized :true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io'
        },
      ],
      minimumCacheTTL:1500000,
  },
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer(nextConfig)
