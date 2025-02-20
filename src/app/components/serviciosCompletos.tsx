"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const servicios = [
  {
    titulo: "SEO On Site",
    descripcion: "Optimizamos el contenido y la estructura interna de tu sitio para mejorar su relevancia.",
    "tareas": [
    "Optimización de títulos y descripciones (metadata)",
    "Análisis y estudio de palabras clave (KW Research)",
    "Jerarquización y estructura de encabezados (H1, H2, H3…)",
    "Mejora de legibilidad, semántica y UX del contenido",
    "Optimización de imágenes (atributo alt, tamaños y formatos adecuados)",
    "Estrategias de enlazado interno (interlinking) para mejorar indexación",
    "Implementación avanzada de datos estructurados (Schema: JSON-LD, microdatos, RDFa)"
  ]
  },
  {
    titulo: "SEO Off Page",
    descripcion: "Aumentamos la autoridad de tu sitio mediante estrategias de enlaces y menciones.",
    "tareas": [
      "Link Building estratégico y enlazado externo",
      "Guest Posting y Guest Blogging en blogs de autoridad",
      "Marketing de Contenidos para adquisición de enlaces",
      "Estrategia de backlinks y enlaces referidos",
      "Interacción social y menciones de marca",
      "Optimización de Google My Business",
      "Gestión de reseñas y reputación online",
      "Análisis de backlinks de la competencia",
      "Mejora de autoridad de dominio",
      "Disavow Links para eliminar enlaces tóxicos",
      "Obtención de enlaces dofollow de calidad",
      "Relaciones públicas digitales para fortalecer el SEO"
    ]
  },
  {
    titulo: "SEO Técnico",
    descripcion: "Mejoramos la estructura del sitio para que los motores de búsqueda lo indexen eficientemente.",
    "tareas": [
    "Corrección de errores de rastreo e indexación",
    "Implementación y optimización de sitemap y robots.txt",
    "Migraciones SEO: Optimización de redirecciones y estructura de URL",
    "Implementación de HTTPS y mejora de la seguridad web",
    "Optimización de recursos y carga eficiente (CSS, JS, imágenes)",
    "Estrategia Mobile-First y diseño responsive",
    "Implementación y optimización de AMP",
    "Corrección de errores de códigos de estado (4xx, 5xx)",
    "Optimización de JavaScript SEO para mejorar el renderizado",
    "Arquitectura web optimizada para mejor rastreo e indexación",
    ]
  },
  {
    titulo: "Estrategia SEO",
    descripcion: "Desarrollamos una estrategia SEO personalizada para maximizar el tráfico y conversiones.",
    "tareas": [
    "Análisis de competencia y benchmarking SEO",
    "Estrategia de posicionamiento y roadmap SEO",
    "Planificación de contenidos y estrategia de palabras clave",
    "SEO estratégico y optimización para Google SGE",
    "Implementación y revisión de EEAT en contenido de calidad",
    "Consultoría en liderazgo digital y estrategia de marketing SEO"
  ]
  },
  {
    titulo: "SEO Local",
    descripcion: "Utilizamos herramientas avanzadas para optimizar procesos y ahorrar tiempo.",
    "tareas": [
    "Optimización de Google My Business y ficha de Google",
    "Estrategias locales para mejorar posicionamiento en Google Maps",
    "Gestión de reseñas, opiniones y reputación online",
    "Implementación de NAP (Nombre, Dirección y Teléfono) y citaciones locales",
    "SEO para pequeñas empresas, pymes y negocios locales",
    "Geolocalización y SEO en Google Maps para mayor visibilidad"
  ]
  },
  {
    "titulo": "Automatización y Desarrollo SEO",
    "descripcion": "Automatizamos procesos SEO con herramientas avanzadas e IA, y creamos sitios web optimizados en Next.js",
    "tareas": [
      "SEO automatizado con bots, scraping y análisis con IA",
      "Generación automática de meta tags y datos estructurados",
      "Monitorización SEO en tiempo real y alertas de errores",
      "Desarrollo de sitios web en Next.js con SEO integrado",
      "Implementación de CMS optimizados (WordPress, Shopify, etc.)",
      "Optimización de velocidad, UX/UI y rendimiento técnico"
    ]
  }
  
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
            <h2 className="text-2xl font-semibold text-[#00ffcc] mb-3">
              {servicio.titulo}
            </h2>
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