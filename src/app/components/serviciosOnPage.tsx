"use client";

import { motion } from "framer-motion";
import { FaCog, FaSearch, FaChartLine, FaCode, FaRocket, FaTools } from "react-icons/fa";
import { useEffect } from "react";

const servicios = [
  {
    titulo: "Optimización de Meta Tags",
    descripcion: [
      "Creación de títulos SEO optimizados con palabras clave",
      "Meta descripciones atractivas para mejorar el CTR",
      "Uso de meta robots para controlar la indexación",
      "Optimización de Open Graph para redes sociales",
      "Implementación de meta tags para móviles",
    ],
    icono: <FaSearch />,
  },
  {
    titulo: "Estructura de Contenido",
    descripcion: [
      "Uso correcto de encabezados (H1, H2, H3)",
      "Optimización de la densidad de palabras clave",
      "Creación de contenido relevante y de alta calidad",
      "Uso de listas y tablas para mejorar la legibilidad",
      "Inclusión de preguntas frecuentes (FAQ)",
    ],
    icono: <FaChartLine />,
  },
  {
    titulo: "Optimización de URLs",
    descripcion: [
      "Creación de URLs cortas y descriptivas",
      "Uso de palabras clave en las URLs",
      "Eliminación de caracteres especiales",
      "Estructura de URLs amigable para SEO",
      "Redirecciones 301 para URLs antiguas",
    ],
    icono: <FaCode />,
  },
  {
    titulo: "Optimización de Imágenes",
    descripcion: [
      "Compresión de imágenes sin pérdida de calidad",
      "Uso de formatos modernos (WebP, AVIF)",
      "Optimización de atributos alt para SEO",
      "Implementación de lazy loading",
      "Uso de nombres descriptivos en archivos",
    ],
    icono: <FaRocket />,
  },
  {
    titulo: "Enlaces Internos",
    descripcion: [
      "Creación de una estructura de enlaces internos sólida",
      "Uso de anchor text relevante",
      "Optimización del flujo de link juice",
      "Enlaces a páginas importantes desde el contenido",
      "Detección y corrección de enlaces rotos",
    ],
    icono: <FaTools />,
  },
  {
    titulo: "Experiencia de Usuario (UX)",
    descripcion: [
      "Diseño responsive para móviles",
      "Mejora de la velocidad de carga",
      "Optimización de la navegación",
      "Uso de breadcrumbs para mejorar la usabilidad",
      "Implementación de búsqueda interna",
    ],
    icono: <FaCog />,
  },
];

const ServiciosOnPage = () => {
  // Datos estructurados para SEO
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Servicios de SEO On-Page",
      description: "Optimización técnica y de contenido para mejorar el posicionamiento en buscadores.",
      itemListElement: servicios.map((servicio, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: servicio.titulo,
        description: servicio.descripcion.join(", "),
      })),
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
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Servicios de SEO On-Page
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Optimizamos cada aspecto de tu sitio web para mejorar su visibilidad en los motores de búsqueda y la experiencia del usuario.
          </p>
        </motion.div>

        {/* Lista de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 group shadow-[0_0_20px_rgba(0,255,204,0.3)]"
            >
              {/* Tornillos giratorios */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <FaCog className="text-slate-400/50 text-xl" />
              </motion.div>

              <motion.div
                className="absolute bottom-2 left-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <FaCog className="text-slate-400/50 text-xl" />
              </motion.div>

              {/* Icono central */}
              <div className="flex justify-center mb-4 text-4xl text-cyan-400 group-hover:text-purple-400 transition-colors">
                {servicio.icono}
              </div>

              <h2 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {servicio.titulo}
              </h2>

              <ul className="space-y-2 text-slate-300">
                {servicio.descripcion.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-cyan-400 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosOnPage;