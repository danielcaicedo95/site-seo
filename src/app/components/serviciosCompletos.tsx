"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const servicios = [
  {
    titulo: "SEO On Page",
    descripcion: "Optimizamos el contenido y la estructura interna de tu sitio para mejorar su relevancia.",
    tareas: [
      "Optimización de meta títulos y descripciones",
      "Estructura de encabezados (H1, H2, H3...)",
      "Mejora de la legibilidad y UX del contenido",
      "Optimización de imágenes (alt, tamaños, formatos)",
      "Uso correcto de enlaces internos",
      "Implementación de datos estructurados",
    ],
  },
  {
    titulo: "SEO Off Page",
    descripcion: "Aumentamos la autoridad de tu sitio mediante estrategias de enlaces y menciones.",
    tareas: [
      "Link building estratégico",
      "Guest posting en blogs de autoridad",
      "Creación de menciones en redes sociales",
      "Optimización de Google My Business",
      "Gestión de reseñas y reputación online",
      "Análisis de backlinks de la competencia",
    ],
  },
  {
    titulo: "SEO Técnico",
    descripcion: "Mejoramos la estructura del sitio para que los motores de búsqueda lo indexen eficientemente.",
    tareas: [
      "Corrección de errores de rastreo",
      "Optimización de velocidad y Core Web Vitals",
      "Implementación de sitemap y robots.txt",
      "Mejora de la indexabilidad con etiquetas canónicas",
      "Optimización de redirecciones y estructura de URL",
      "Implementación de HTTPS y seguridad web",
    ],
  },
  {
    titulo: "Estrategia SEO",
    descripcion: "Desarrollamos una estrategia SEO personalizada para maximizar el tráfico y conversiones.",
    tareas: [
      "Análisis de palabras clave",
      "Estudio de competencia y mercado",
      "Planificación de contenido SEO",
      "Estrategia de enlazado interno",
      "Optimización de la experiencia del usuario (UX)",
      "Consultoría y seguimiento personalizado",
    ],
  },
  {
    titulo: "Automatización SEO",
    descripcion: "Utilizamos herramientas avanzadas para optimizar procesos y ahorrar tiempo.",
    tareas: [
      "Generación automatizada de meta tags",
      "Análisis de SEO con IA",
      "Monitorización de rankings en tiempo real",
      "Automatización de informes SEO",
      "Optimización de contenido con algoritmos inteligentes",
      "Alertas automáticas de errores SEO",
    ],
  },
  {
    titulo: "Creación de Sitios Web SEO",
    descripcion: "Desarrollamos sitios en Next.js y CMS optimizados para el posicionamiento desde el inicio.",
    tareas: [
      "Desarrollo en Next.js con SEO integrado",
      "Implementación de CMS (WordPress, Shopify, etc.)",
      "Optimización de velocidad y rendimiento",
      "Diseño UX/UI enfocado en conversión",
      "Implementación de datos estructurados",
      "Hosting y configuración técnica optimizada",
    ],
  },
];

const ServiciosCompletos = () => {
  useEffect(() => {
    // Generar e insertar datos estructurados
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Servicios SEO Completos",
      "provider": {
        "@type": "Organization",
        "name": "Tu Agencia SEO",
        "url": "https://tusitio.com"
      },
      "serviceType": "SEO",
      "description": "Servicios avanzados de SEO On Page, Off Page, Técnico, Estrategia SEO, Automatización y Creación de Sitios Web.",
      "areaServed": "Global",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Optimización Web",
        "itemListElement": servicios.map(servicio => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": servicio.titulo,
            "description": servicio.descripcion
          }
        }))
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-700 transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-[#00ffcc] mb-3">
              {servicio.titulo}
            </h3>
            <p className="text-gray-300 mb-4">{servicio.descripcion}</p>
            <ul className="list-disc pl-5 text-gray-400">
              {servicio.tareas.map((tarea, i) => (
                <li key={i} className="mb-2">{tarea}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosCompletos;