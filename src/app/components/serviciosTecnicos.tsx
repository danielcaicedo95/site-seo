"use client";

import { motion } from "framer-motion";
import { FaCog, FaSearch, FaChartLine, FaCode, FaRocket, FaTools } from "react-icons/fa";

const servicios = [
  {
    titulo: "Auditorías SEO Técnico",
    descripcion: [
      "Diagnóstico completo de arquitectura web",
      "Optimización de meta tags y headers",
      "Análisis de velocidad y Core Web Vitals",
      "Revisión de estructura de URLs",
      "Detección de contenido duplicado"
    ],
    icono: <FaSearch />
  },
  {
    titulo: "Optimización Rastreo/Indexación",
    descripcion: [
      "Mejora de robots.txt y sitemap.xml",
      "Estrategias de crawling budget",
      "Solución de errores 4xx/5xx",
      "Canonicalización avanzada",
      "Optimización de JavaScript SEO"
    ],
    icono: <FaChartLine />
  },
  {
    titulo: "Datos Estructurados Avanzados",
    descripcion: [
      "Implementación JSON-LD",
      "Rich snippets para featured snippets",
      "Schema markup para local SEO",
      "Validación Google Rich Results",
      "Microdatos para e-commerce"
    ],
    icono: <FaCode />
  },
  {
    titulo: "Optimización de Velocidad",
    descripcion: [
      "Mejora de LCP, FID y CLS",
      "Optimización de recursos críticos",
      "Implementación de lazy loading",
      "Caching y CDN avanzado",
      "Compresión Next-Gen (WebP/AVIF)"
    ],
    icono: <FaRocket />
  },
  {
    titulo: "Arquitectura Web SEO",
    descripcion: [
      "Estructura de silos temáticos",
      "Pirámide de enlaces internos",
      "Taxonomía de categorías",
      "Mobile-first indexing",
      "Eliminación contenido thin"
    ],
    icono: <FaTools />
  },
  {
    titulo: "Web Performance Optimization",
    descripcion: [
      "Análisis Lighthouse",
      "Optimización SSR/SSG",
      "Preloading estratégico",
      "Minificación recursos",
      "Monitorización continua"
    ],
    icono: <FaCog />
  }
];

const ServiciosTecnicos = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
};

export default ServiciosTecnicos;