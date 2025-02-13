"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import "../styles/components/carrusel.css";

const logos = [
  "/images/carrusel/logo1.png",
  "/images/carrusel/logo2.png",
  "/images/carrusel/logo3.png",
  "/images/carrusel/logo4.png",
  "/images/carrusel/logo5.png",
  "/images/carrusel/logo6.png",
  "/images/carrusel/logo7.png",
  "/images/carrusel/logo8.png",
  "/images/carrusel/logo9.png",
  "/images/carrusel/logo10.png",
  "/images/carrusel/logo11.png",
  "/images/carrusel/logo12.png",
];

export default function Carrusel() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Animación del carrusel
  useEffect(() => {
    if (!containerRef.current) return;

    const animateScroll = async () => {
      await controls.start({
        x: "-100%",
        transition: { duration: 15, ease: "linear" },
      });
      controls.set({ x: "0%" }); // Reinicia la posición
      animateScroll(); // Repite la animación
    };

    // Iniciar la animación solo si el componente está montado
    const timeout = setTimeout(() => {
      animateScroll();
    }, 100); // Pequeño retraso para asegurar que el componente esté montado

    // Limpiar la animación al desmontar el componente
    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <div className="carrusel-container">
      {/* Contenedor del carrusel */}
      <motion.div ref={containerRef} className="carrusel-track" animate={controls}>
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="carrusel-item">
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={160}
              height={80}
              priority={i < 3} // Prioridad para las primeras imágenes
              loading={i >= 3 ? "lazy" : "eager"}
              className="carrusel-img"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}