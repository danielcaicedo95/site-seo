"use client";
import styles from "../styles/components/flujoTrabajo.module.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Pasos del flujo de trabajo
const pasos = [
  {
    titulo: "Estudio y análisis",
    descripcion:
      "Estudiamos a fondo los objetivos del cliente, la industria y el mercado. Analizamos tendencias, competidores y oportunidades para definir el mejor enfoque SEO.",
  },
  {
    titulo: "Definición del proyecto",
    descripcion:
      "Establecemos los objetivos SEO alineados con el negocio. Definimos métricas clave, creamos estrategias personalizadas y aseguramos una planificación efectiva.",
  },
  {
    titulo: "Auditoría, rastreo e indexación",
    descripcion:
      "Realizamos una auditoría completa del sitio web, analizamos el rastreo de Googlebot, detectamos errores de indexación y optimizamos la arquitectura del sitio.",
  },
  {
    titulo: "SEO On-Page",
    descripcion:
      "Optimizamos títulos, metadescripciones, contenido, URLs y estructura del sitio. Implementamos un estudio de palabras clave y mejoras en la arquitectura web.",
  },
  {
    titulo: "SEO Técnico",
    descripcion:
      "Mejoramos la velocidad de carga, la usabilidad móvil, el rendimiento en Core Web Vitals y solucionamos problemas técnicos como JavaScript, HTML, CSS y más.",
  },
  {
    titulo: "SEO Off-Page",
    descripcion:
      "Desarrollamos estrategias de link building, PR digital y autoridad de dominio. Identificamos oportunidades para mejorar la reputación del sitio en la web.",
  },
  {
    titulo: "Estrategia SEO",
    descripcion:
      "Optimizamos la captación de tráfico de calidad y conversiones. Refinamos la estrategia basándonos en datos analíticos y pruebas constantes.",
  },
  {
    titulo: "Automatización e IA para SEO",
    descripcion:
      "Usamos herramientas de IA y automatización para optimizar procesos como generación de contenido, análisis de datos y detección de tendencias SEO.",
  },
  {
    titulo: "SEO, SGE y actualizaciones",
    descripcion:
      "Adaptamos estrategias para las nuevas SERPs, actualizaciones del algoritmo de Google y la integración del SGE (Search Generative Experience).",
  },
];

const FlujoTrabajo = () => {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Flujo de trabajo SEO",
      "itemListElement": pasos.map((paso, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": paso.titulo,
        "description": paso.descripcion,
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
    <section className={styles.flujoContainer}>
      <h2 className={styles.titulo}>🚀 Flujo de trabajo</h2>
      <p className={styles.descripcion}>
        No trabajamos por partes o paquetes. Nos enfocamos en resultados reales,
        optimizando cada paso del proceso SEO para lograr el máximo impacto.
      </p>

      {/* Diagrama de pasos */}
      <div className={styles.diagrama}>
        {pasos.map((paso, index) => (
          <motion.div
            key={index}
            className={styles.paso}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.numero}>{index + 1}</div>
            <div className={styles.contenido}>
              <h3>{paso.titulo}</h3>
              <p>{paso.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlujoTrabajo;
