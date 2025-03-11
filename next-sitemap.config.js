// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://daniseo.site', // Cambia esto por tu dominio
    generateRobotsTxt: true, // Genera un archivo robots.txt
    sitemapSize: 5000, // Reduce el tamaño para evitar sobrecarga
    exclude: ['/server-sitemap.xml', '/admin', '/dashboard', '/api/*'], // Excluye rutas sensibles
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/dashboard', '/api/*', '/private/*'], // Bloquea rutas irrelevantes para SEO
        },
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: ['/server-sitemap.xml', '/hidden-page'], // Control específico para Google
        },
      ],
      additionalSitemaps: [
        'https://daniseo.site/sitemap.xml', // Sitemap principal
        'https://daniseo.site/server-sitemap.xml', // Sitemap dinámico del servidor
      ],
    },
};