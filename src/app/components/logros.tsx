"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Logro {
  key: string;
  image: string;
  title: string;
  description: string;
}

const logros: Logro[] = [
  {
    key: "alugo",
    image: "/images/logros/alugo.png",
    title: "Automatización SEO en Alugo",
    description:
      "Optimizamos las tareas técnicas de SEO, mejoramos las métricas de rastreo y aumentamos la indexación. El tráfico orgánico subió un 10% en solo 2 meses.",
  },
  {
    key: "cinar-sistemas",
    image: "/images/logros/cinar-sistemas.png",
    title: "SEO local y backlinks en Cinar Sistemas",
    description:
      "Posicionamos sus páginas clave en el Top 1-3 con palabras clave locales. Aumentamos un 35% los backlinks de calidad y el tráfico creció un 30% en 6 meses.",
  },
  {
    key: "greenwich",
    image: "/images/logros/greenwich.png",
    title: "Éxito en migración para Greenwich",
    description:
      "Tras una migración bien ejecutada, el CTR subió del 1.3% al 1.7% en menos de 2 meses. Las impresiones aumentaron un 60% y los clics un 50%.",
  },
  {
    key: "ritagraff",
    image: "/images/logros/ritagraff.png",
    title: "Estrategia SEO de embudo en Ritagraff",
    description:
      "Mediante una estrategia de embudo, incrementamos el tráfico un 15% en menos de 2 meses, logrando una mayor conversión.",
  },
  {
    key: "toyota",
    image: "/images/logros/toyota.png",
    title: "Automatización SEO en Toyota",
    description:
      "Automatizamos tareas técnicas en Drupal y optimizamos la calidad de leads, mejorando la eficiencia de captación.",
  },
  {
    key: "youin",
    image: "/images/logros/youin.png",
    title: "Migración y SEO internacional en Youin",
    description:
      "Realizamos una migración exitosa y optimizamos el SEO internacional, asegurando una mayor visibilidad global.",
  },
];

const Logros = () => {
  return (
    <section className="logros px-6 py-12 bg-gray-900" itemScope itemType="https://schema.org/CreativeWork">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-8" itemProp="name">
        Experiencia demostrada en resultados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {logros.map((logro, index) => (
          <motion.div
            key={logro.key}
            className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <Image
              src={logro.image}
              alt={logro.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover group-hover:brightness-75 transition duration-300"
              itemProp="image"
              priority={index < 3} // Prioriza las primeras imágenes para mejorar el LCP
            />
            
            {/* Información visible en móvil y desktop */}
            <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 p-4">
              <h3 className="text-lg font-bold text-white" itemProp="headline">{logro.title}</h3>
              <p className="text-sm text-gray-200" itemProp="description">{logro.description}</p>
            </div>

            {/* Indicador visual para móviles */}
            <div className="md:hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-100 group-hover:opacity-0 transition duration-300">
              <span className="text-white text-sm font-semibold">Toca para ver más</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Logros;