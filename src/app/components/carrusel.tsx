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
  const [itemsToShow, setItemsToShow] = useState(5);
  const [speed, setSpeed] = useState(20); // Velocidad inicial (segundos)
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setItemsToShow(isMobileView ? 3 : 5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const animateScroll = async () => {
      while (true) {
        await controls.start({ x: "-100%", transition: { duration: speed, ease: "linear" } });
        await controls.set({ x: "0%" });
      }
    };

    animateScroll();
  }, [controls, speed]);

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    setTimeout(() => setSpeed(20), 1000);
  };

  return (
    <div className="carrusel-container">
      {/* Flecha izquierda */}
      {!isMobile && (
        <button
          className="carrusel-button left"
          onClick={() => handleSpeedChange(5)}
          aria-label="Anterior"
        >
          <ChevronLeft size={30} />
        </button>
      )}

      {/* Contenedor del carrusel */}
      <motion.div
        ref={containerRef}
        className="carrusel-track"
        animate={controls}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        dragElastic={0.2}
        whileTap={{ cursor: "grabbing" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="carrusel-item">
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={160}
              height={80}
              priority={i < 5}
              className="carrusel-img"
            />
          </div>
        ))}
      </motion.div>

      {/* Flecha derecha */}
      {!isMobile && (
        <button
          className="carrusel-button right"
          onClick={() => handleSpeedChange(5)}
          aria-label="Siguiente"
        >
          <ChevronRight size={30} />
        </button>
      )}
    </div>
  );
}

