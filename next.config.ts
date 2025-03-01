const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['daniseo.site'], // Permitir imágenes de daniseo.site
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daniseo.site",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  experimental: {
    scrollRestoration: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
