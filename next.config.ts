const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  // Removido: swcMinify: true (ya está habilitado por defecto en Next.js reciente)
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  experimental: {
    // Verifica que esta opción experimental esté disponible en tu versión de Next.js
    scrollRestoration: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig);