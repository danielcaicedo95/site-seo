"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    let animationFrame: number;

    const animateScroll = () => {
      controls.start({ x: "-100%", transition: { duration: 15, ease: "linear" } })
        .then(() => controls.set({ x: "0%" }))
        .then(() => {
          animationFrame = requestAnimationFrame(animateScroll);
        });
    };

    requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [controls]);

  return (
    <div className="carrusel-container">
      {/* Flecha izquierda */}
      {!isMobile && (
        <button className="carrusel-button left" aria-label="Anterior">
          <ChevronLeft size={30} />
        </button>
      )}

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

      {/* Flecha derecha */}
      {!isMobile && (
        <button className="carrusel-button right" aria-label="Siguiente">
          <ChevronRight size={30} />
        </button>
      )}
    </div>
  );
}
