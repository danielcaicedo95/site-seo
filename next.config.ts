const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'], 
    unoptimized: false,
  },
  experimental: {
    scrollRestoration: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
