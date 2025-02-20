// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://daniseo.site', // Cambia esto por tu dominio
    generateRobotsTxt: true, // Genera un archivo robots.txt
    sitemapSize: 7000, // Divide el sitemap en archivos más pequeños si es necesario
    exclude: ['/server-sitemap.xml'], // Excluye rutas que no quieras en el sitemap
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://tudominio.com/server-sitemap.xml', // Si tienes un sitemap dinámico
      ],
    },
  };