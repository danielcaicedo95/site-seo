"use client";

import { motion } from "framer-motion";
import styles from "../styles/components/servicios-seo.module.css";
import Image from "next/image";
import { useEffect } from "react";

interface Servicio {
  titulo: string;
  descripcion: string;
  enlace: string;
  imagen: string; // Nueva propiedad para la imagen
  posicionImagen: "left" | "right"; // Debe ser exactamente "left" o "right"
}


interface ServiciosSeoProps {
  servicios: Servicio[];
}

const ServiciosSeo: React.FC<ServiciosSeoProps> = ({ servicios }) => {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Servicios SEO",
      "itemListElement": servicios.map((servicio, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": servicio.titulo,
        "description": servicio.descripcion,
        "url": servicio.enlace,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [servicios]);

  return (
    <section className={styles["servicios-seo"]}>
      <h2 className={styles["servicio-titulo"]}>🌟 Nuestros Servicios SEO</h2>
      <p className={styles["servicio-descripcion"]}>
        Descubre cómo nuestros servicios pueden ayudarte a mejorar tu presencia online.
      </p>

      {servicios.map((servicio, index) => (
        <motion.div
          key={index}
          className={`${styles.servicio} ${
            servicio.posicionImagen === "left" ? styles["reverse-servicio"] : ""
          }`}
          itemScope
          itemType="https://schema.org/Service"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Imagen */}
          <div className={styles["servicio-imagen-container"]}>
            <Image
              src={servicio.imagen}
              alt={servicio.titulo}
              width={600}
              height={400}
              className={styles["servicio-imagen"]}
              priority
            />
          </div>

          {/* Texto */}
          <div className={styles["servicio-texto"]}>
            <h3 className={styles["servicio-titulo"]}>{servicio.titulo}</h3>
            <p className={styles["servicio-descripcion"]}>{servicio.descripcion}</p>
            <a href={servicio.enlace} className="text-sm text-blue-400 underline">
              Saber más
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ServiciosSeo;
