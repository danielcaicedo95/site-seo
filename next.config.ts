/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Reemplaza esto con los dominios de tus imágenes si es necesario
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
