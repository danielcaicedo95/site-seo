"use client";

import { motion } from "framer-motion";

const SobreMi = () => {
  return (
    <section 
      className="relative w-full max-w-4xl mx-auto p-6 sm:p-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-lg transition-all duration-300 hover:bg-opacity-100 mt-9 mb-9"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Animación del contenedor */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {/* Título con efecto degradado */}
        <h2 
          className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-center mb-4"
          itemProp="name"
        >
          Sobre mí
        </h2>

        {/* Texto resumido */}
        <p 
          className="text-gray-300 text-lg leading-relaxed text-center"
          itemProp="description"
        >
          Con experiencia en SEO, IA y desarrollo web, he trabajado con marcas líderes en Europa, EE.UU. y América Latina. 
          He posicionado sitios en varios idiomas, aplicando estrategias basadas en datos y KPIs. 
          Mi enfoque analítico garantiza resultados sólidos y sostenibles. 
          Apasionado por la tecnología, sigo tendencias emergentes para ofrecer soluciones innovadoras. 
          Monitorizo y optimizo constantemente para asegurar un rendimiento óptimo.
        </p>
      </motion.div>

      {/* Interactividad en hover */}
      <motion.div 
        whileHover={{ scale: 1.02 }} 
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 hover:opacity-20 transition-opacity"
      ></motion.div>
    </section>
  );
};

export default SobreMi;
