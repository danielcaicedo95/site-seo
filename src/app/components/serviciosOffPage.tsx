"use client";

import { motion } from "framer-motion";
import { FaLink, FaUsers, FaPencilAlt, FaShareAlt, FaBullhorn, FaChartLine } from "react-icons/fa";
import { useEffect } from "react";

const servicios = [
  {
    titulo: "Linkbuilding Estratégico",
    descripcion: [
      "Obtención de backlinks de alta autoridad",
      "Enlaces desde sitios relevantes y de nicho",
      "Estrategias de outreach para construir relaciones",
      "Uso de herramientas avanzadas para análisis de enlaces",
      "Monitoreo constante del perfil de backlinks",
    ],
    icono: <FaLink />,
  },
  {
    titulo: "Guest Blogging",
    descripcion: [
      "Publicación de artículos en blogs de autoridad",
      "Creación de contenido de valor para otros sitios",
      "Inclusión de enlaces contextuales en los artículos",
      "Colaboraciones con influencers y expertos",
      "Mejora de la visibilidad y reputación de marca",
    ],
    icono: <FaPencilAlt />,
  },
  {
    titulo: "Menciones de Marca",
    descripcion: [
      "Obtención de menciones en medios y blogs",
      "Estrategias para aumentar la visibilidad de la marca",
      "Conversión de menciones en enlaces",
      "Monitoreo de menciones no vinculadas",
      "Mejora de la autoridad y confianza de la marca",
    ],
    icono: <FaBullhorn />,
  },
  {
    titulo: "Enlazado Externo",
    descripcion: [
      "Optimización del perfil de enlaces externos",
      "Eliminación de enlaces tóxicos o dañinos",
      "Construcción de enlaces desde directorios de calidad",
      "Uso de estrategias de link reclamation",
      "Mejora de la autoridad de dominio (DA)",
    ],
    icono: <FaShareAlt />,
  },
  {
    titulo: "Redes Sociales y SEO",
    descripcion: [
      "Promoción de contenido en redes sociales",
      "Generación de tráfico y enlaces naturales",
      "Estrategias de engagement para aumentar la visibilidad",
      "Uso de redes sociales para construir relaciones",
      "Monitoreo del impacto en el SEO",
    ],
    icono: <FaUsers />,
  },
  {
    titulo: "Análisis y Reportes",
    descripcion: [
      "Auditoría completa del perfil de backlinks",
      "Identificación de oportunidades de linkbuilding",
      "Reportes mensuales de progreso y resultados",
      "Análisis de la competencia y estrategias",
      "Optimización continua del SEO Off Page",
    ],
    icono: <FaChartLine />,
  },
];

const ServiciosOffPage = () => {
  // Datos estructurados para SEO
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Servicios de SEO Off-Page",
      description: "Estrategias avanzadas de linkbuilding y enlazado externo para mejorar la autoridad y visibilidad de tu sitio.",
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
            Servicios de SEO Off-Page
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mejora la autoridad y visibilidad de tu sitio web con estrategias avanzadas de linkbuilding, guest blogging y enlazado externo.
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

export default ServiciosOffPage;