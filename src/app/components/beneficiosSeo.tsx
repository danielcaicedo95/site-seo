"use client";

import styles from "../styles/components/beneficiosSEO.module.css";  
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const beneficios = [
  {
    titulo: "Generar autoridad de marca",
    descripcion:
      "En el mundo digital, la autoridad de marca se construye con SEO. Crear contenido de calidad, generar tráfico orgánico, obtener backlinks de sitios confiables, mejorar la experiencia del usuario y optimizar la presencia en redes son claves. Una marca con autoridad genera confianza, y un usuario que llega por confianza se queda a largo plazo.",
    imagen: "/images/tarjetas-servicio/google1.png",
    posicionImagen: "left",
  },
  {
    titulo: "Optimización de sitio web",
    descripcion:
      "La optimización del sitio no solo mejora el posicionamiento en buscadores, sino también la experiencia del usuario. Esto aumenta la retención y conversión de clientes, beneficiando tanto a quienes llegan por SEO como por publicidad pagada, redes o tráfico directo.",
    imagen: "/images/tarjetas-servicio/google1.png",
    posicionImagen: "right",
  },
  {
    titulo: "Nosotros trabajamos para los usuarios",
    descripcion:
      "Muchas agencias SEO optimizan solo para motores de búsqueda, pero con la llegada de la IA y el SGE, la prioridad es la experiencia del usuario. Google premia las webs que resuelven mejor la intención de búsqueda, asegurando que el contenido sea útil y relevante.",
    imagen: "/images/tarjetas-servicio/google1.png",
    posicionImagen: "left",
  },
];

const BeneficiosSEO = () => {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Beneficios del SEO",
      "itemListElement": beneficios.map((beneficio, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": beneficio.titulo,
        "description": beneficio.descripcion,
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
    <section className={styles.futurista}>
      <h2 className={styles.gradientText}>🚀 ¿Por qué contratar SEO?</h2>
      <p className={styles.parrafoIntro}>
        El SEO no solo mejora tu visibilidad en los motores de búsqueda, también tiene muchos otros beneficios.
      </p>

      {beneficios.map((beneficio, index) => (
        <motion.div
          key={index}
          className={`${styles.beneficioCard} ${
            beneficio.posicionImagen === "right" ? styles.reverseCard : ""
          }`}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Imagen */}
          <div className={styles.imagenContainer}>
            <Image
              src={beneficio.imagen}
              alt={beneficio.titulo}
              width={600}
              height={400}
              className={styles.imagen}
              priority
            />
          </div>

          {/* Texto */}
          <div className={styles.textoContainer}>
            <h3 className={styles.neonText}>{beneficio.titulo}</h3>
            <p className={styles.descripcion}>{beneficio.descripcion}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default BeneficiosSEO;
