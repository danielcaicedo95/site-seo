"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isMounted, setIsMounted] = useState(false);

  // Animación del carrusel
  useEffect(() => {
    setIsMounted(true); // Marcar el componente como montado

    if (!containerRef.current) return;

    const animateScroll = async () => {
      if (!isMounted) return; // Verificar si el componente está montado

      await controls.start({
        x: "-100%",
        transition: { duration: 15, ease: "linear" },
      });

      if (!isMounted) return; // Verificar nuevamente antes de reiniciar

      controls.set({ x: "0%" }); // Reiniciar la posición
      animateScroll(); // Repetir la animación
    };

    // Iniciar la animación solo si el componente está montado
    const timeout = setTimeout(() => {
      animateScroll();
    }, 100); // Pequeño retraso para asegurar que el componente esté montado

    // Limpiar la animación al desmontar el componente
    return () => {
      setIsMounted(false); // Marcar el componente como desmontado
      clearTimeout(timeout);
    };
  }, [controls, isMounted]);

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