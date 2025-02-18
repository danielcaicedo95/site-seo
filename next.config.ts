const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  // Removido: swcMinify (ya no necesario en Next.js 15+)
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  // Revisa si esta configuración experimental sigue siendo válida en Next.js 15+
  // Si experimentas problemas, considera comentar o eliminar esta sección
  experimental: {
    scrollRestoration: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig);