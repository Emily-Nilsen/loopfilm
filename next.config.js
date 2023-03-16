/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    minimumCacheTTL: 31536000,
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/locations/',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/work/',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/work/dream-big/',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/saga-holidays/',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/work/ex-machina/',
        destination: '/work',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
