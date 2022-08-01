/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  assetPrefix: '/beer-next-js',
  basePath: '/beer-next-js'
}

module.exports = nextConfig
