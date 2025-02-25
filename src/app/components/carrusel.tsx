"use client";

import { useEffect, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200); // Espera para evitar CLS
  }, []);

  return (
    <div className={`carrusel-container ${isLoaded ? "visible" : "hidden"}`}>
      <div className="carrusel-track">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="carrusel-item">
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={140}
              height={70}
              priority={i < 3}
              className="carrusel-img"
            />
          </div>
        ))}
      </div>

      {/* Estilos optimizados */}
      <style jsx>{`
        .carrusel-container {
          position: relative;
          width: 100%;
          max-width: 1600px;
          margin: auto;
          overflow: hidden;
          padding: 10px 0;
          background: rgb(17 24 39 / var(--tw-bg-opacity, 1));
          border-radius: 12px;
          box-shadow: 0px 4px 20px rgba(0, 255, 255, 0.3);
          margin-top: 1px;
        }

        .hidden {
          visibility: hidden;
        }

        .visible {
          visibility: visible;
          transition: visibility 0.2s;
        }

        .carrusel-track {
          display: flex;
          gap: 16px;
          padding: 10px 0;
          will-change: transform;
          animation: scroll 30s linear infinite;
          width: max-content;
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
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0px 4px 8px rgba(0, 255, 255, 0.3));
          min-width: 140px;
          min-height: 70px;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
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
