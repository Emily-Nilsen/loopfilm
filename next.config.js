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
        source: 'http://www.loopfilm.no/',
        destination: 'https://loopfilm.no',
        permanent: true,
      },
      {
        source: 'https://loopfilm.no/locations/',
        destination: 'https://loopfilm.no/locations',
        permanent: true,
      },
      {
        source: 'https://www.loopfilm.no/',
        destination: 'https://loopfilm.no',
        permanent: true,
      },
      {
        source: 'http://loopfilm.no/',
        destination: 'https://loopfilm.no',
        permanent: true,
      },
      {
        source: 'https://loopfilm.no/work/',
        destination: 'https://loopfilm.no/work',
        permanent: true,
      },
      {
        source: 'https://loopfilm.no/work/dream-big/',
        destination: 'https://loopfilm.no/work',
        permanent: true,
      },
      {
        source: 'https://loopfilm.no/saga-holidays/',
        destination: 'https://loopfilm.no/work',
        permanent: true,
      },
      {
        source: 'https://loopfilm.no/ex-machina/',
        destination: 'https://loopfilm.no/work',
        permanent: true,
      },
      {
        source: 'http://loopfilm.no/locations',
        destination: 'https://loopfilm.no/locations',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
