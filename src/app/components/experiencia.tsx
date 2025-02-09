"use client";

import { motion } from "framer-motion";

const experiencias = [
  {
    cargo: "SEO Senior - Freelance",
    empresa: "3dids.com - Shopify",
    fecha: "Dic 2023 - Nov 2024",
    tareas: [
      "📈 Diseñé y ejecuté estrategias SEO integrales para e-commerce en Shopify Plus.",
      "🚀 Optimicé Core Web Vitals y arquitectura web para mejorar la velocidad y conversión.",
      "🔗 Coordiné migraciones SEO asegurando posicionamiento estable y mejorado.",
    ],
  },
  {
    cargo: "SEO Specialist Senior",
    empresa: "Ariadna Communications Group - Drupal",
    fecha: "Jun 2023 - Dic 2023",
    tareas: [
      "🔍 Implementé estrategias de optimización on-page y técnica para Toyota Perú.",
      "🤖 Desarrollé herramientas automatizadas con IA para análisis SEO avanzados.",
      "📊 Mejoré la indexación y optimización técnica con enfoques data-driven.",
    ],
  },
  {
    cargo: "SEO Specialist Senior",
    empresa: "TitaMedia - VTEX",
    fecha: "Ago 2022 - Abr 2023",
    tareas: [
      "🔑 Diseñé estrategias SEO personalizadas para e-commerce en VTEX.",
      "📊 Lideré investigaciones de palabras clave y optimización on-page/off-page.",
      "⚡ Implementé mejoras técnicas para SEO móvil y rendimiento web.",
    ],
  },
  {
    cargo: "SEM Specialist",
    empresa: "Cita con el Derecho - WordPress",
    fecha: "Dic 2021 - Jul 2022",
    tareas: [
      "🎯 Gestioné campañas SEA con investigación de palabras clave estratégicas.",
      "💡 Optimizé anuncios y landing pages mejorando la conversión.",
      "📢 Desarrollé estrategias integrales de SEO técnico y link building.",
    ],
  },
  {
    cargo: "Webmaster | SEO | ASO | SEA",
    empresa: "Workana - Freelancer",
    fecha: "Oct 2020 - Nov 2021",
    tareas: [
      "🛠 Gestioné proyectos de SEO técnico y desarrollo en React.js y JavaScript.",
      "📲 Optimizé ASO para tiendas de aplicaciones y campañas SEM.",
      "📌 Supervisé la ejecución y mejora continua de estrategias digitales.",
    ],
  },
  {
    cargo: "Desarrollador Web y Marketing Digital",
    empresa: "Cinar Sistemas - WordPress",
    fecha: "Nov 2018 - Jul 2020",
    tareas: [
      "🌐 Lideré el desarrollo web en WordPress con estrategias SEO integradas.",
      "📢 Diseñé campañas publicitarias y optimización de embudos de conversión.",
      "📊 Analicé rendimiento para mejorar UX y reducir tasa de rebote.",
    ],
  },
];

const ExperienciaLaboral = () => {
  return (
    <section
      className="experiencia px-6 py-12 bg-gray-900 text-white"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text mb-8">
        Experiencia Laboral
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiencias.map((exp, index) => (
          <motion.div
            key={index}
            className="relative group p-6 rounded-xl bg-gray-800 shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <h3 className="text-xl font-semibold text-purple-400">{exp.cargo}</h3>
            <p className="text-sm text-gray-400">{exp.empresa}</p>
            <span className="block text-xs text-gray-500 mt-1">{exp.fecha}</span>

            <ul className="mt-4 space-y-2">
              {exp.tareas.map((tarea, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-300">
                  {tarea}
                </li>
              ))}
            </ul>

            {/* Efecto Hover Mejorado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-80 transition duration-300"
              whileHover={{ scale: 1.02 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienciaLaboral;
