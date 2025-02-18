"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

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
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden py-2.5 bg-gray-900 rounded-lg shadow-[0px_4px_20px_rgba(0,255,255,0.3)] mt-2.5">
      {/* Contenedor del carrusel */}
      <motion.div
        ref={containerRef}
        className="flex gap-4 cursor-grab py-2.5"
        animate={controls}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="relative w-[140px] h-[70px] flex items-center justify-center flex-shrink-0 bg-[rgba(0,255,255,0.192)] rounded-lg shadow-[0px_2px_6px_rgba(0,255,255,0.3)] transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={160}
              height={80}
              priority={i < 3} // Prioridad para las primeras imágenes
              loading={i >= 3 ? "lazy" : "eager"}
              className="w-full h-auto object-contain filter drop-shadow-[0px_4px_8px_rgba(0,255,255,0.3)]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}