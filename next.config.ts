const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
    // Añadir esta configuración para controlar el comportamiento de precarga
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Usar domains solo si cargas imágenes de dominios externos
    // domains: ['tu-dominio.com'], 
  },
  // Revisa si esta configuración experimental sigue siendo válida en Next.js 15+
  experimental: {
    scrollRestoration: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig);