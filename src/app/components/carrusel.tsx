"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      track.style.transition = "none";
      track.style.transform = `translateX(0%)`;

      requestAnimationFrame(() => {
        track.style.transition = "transform 30s linear";
        track.style.transform = `translateX(-100%)`;
      });
    };

    const interval = setInterval(animate, 30000);
    animate();

    setLoaded(true); // ✅ Evita FOUC mostrando el carrusel solo cuando esté listo

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`carrusel-container ${loaded ? "visible" : ""}`}>
      <div ref={trackRef} className="carrusel-track">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="carrusel-item">
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={160}
              height={80}
              priority={i < 3}
              loading={i >= 3 ? "lazy" : "eager"}
              className="carrusel-img"
            />
          </div>
        ))}
      </div>

      {/* Estilos en el mismo archivo */}
      <style jsx>{`
        .carrusel-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: auto;
          overflow: hidden;
          padding: 10px 0;
          background: rgb(17 24 39 / var(--tw-bg-opacity, 1));
          border-radius: 12px;
          box-shadow: 0px 4px 20px rgba(0, 255, 255, 0.3);
          margin-top: 10px;
          opacity: 0; /* 🔹 Oculta el carrusel al cargar */
          transition: opacity 0.5s ease-in-out;
        }

        .carrusel-container.visible {
          opacity: 1; /* 🔹 Lo muestra cuando está listo */
        }

        .carrusel-track {
          display: flex;
          gap: 16px;
          cursor: grab;
          padding: 10px 0;
          will-change: transform;
        }

        .carrusel-item {
          position: relative;
          width: 140px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(0, 255, 255, 0.192);
          border-radius: 10px;
          box-shadow: 0px 2px 6px rgba(0, 255, 255, 0.3);
          transition: transform 0.3s ease-in-out;
        }

        .carrusel-item:hover {
          transform: scale(1.1);
        }

        .carrusel-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0px 4px 8px rgba(0, 255, 255, 0.3));
        }

        @media (max-width: 768px) {
          .carrusel-container {
            padding: 5px 0;
          }

          .carrusel-item {
            width: 120px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
}
