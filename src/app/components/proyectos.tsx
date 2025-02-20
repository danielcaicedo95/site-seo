"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Globe, Zap } from "lucide-react";

const proyectos = [
  {
    nombre: "WhatMenu",
    descripcion:
      "Aplicación web para gestión de menús digitales en restaurantes, desarrollada con React y Material UI.",
    icono: <Globe size={40} className="text-blue-400" />,
    github: "#",
  },
  {
    nombre: "SEO Tool",
    descripcion:
      "Herramienta de auditoría SEO automatizada con Django, Python y OpenAI API para diagnósticos detallados.",
    icono: <Code size={40} className="text-green-400" />,
    github: "#",
  },
  {
    nombre: "Website Modular",
    descripcion:
      "Web modular con TinaCMS y Next.js para gestión de contenido flexible y optimización SEO avanzada.",
    icono: <Zap size={40} className="text-yellow-400" />,
    github: "#",
  },
  {
    nombre: "Este Sitio Web",
    descripcion:
      "Sitio web profesional optimizado con Next.js, diseño UX/UI avanzado y compatibilidad con Core Web Vitals.",
    icono: <Globe size={40} className="text-purple-400" />,
    github: "#",
  },
];

export default function ProyectosPersonales() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="pt-8 pb-16 text-center">
      {/* Título con gradiente */}
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
        Proyectos Personales
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            className="relative w-40 h-40 flex items-center justify-center rounded-full border border-gray-500 bg-gray-900 shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl"
            style={{
              boxShadow: "0 4px 20px rgba(0, 102, 255, 0.3)",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: hoverIndex === index ? 0 : 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {proyecto.icono}
              <p className="mt-2 text-white text-sm font-medium">{proyecto.nombre}</p>
            </motion.div>

            {hoverIndex === index && (
              <motion.div
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -180 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-3 bg-gray-800 text-white rounded-full"
              >
                <p className="text-xs font-medium text-center">{proyecto.descripcion}</p>
                <a
                  href={proyecto.github}
                  className="mt-2 text-blue-400 text-xs hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en GitHub
                </a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
