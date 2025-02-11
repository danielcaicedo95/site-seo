"use client";

import { useState, useEffect, useCallback } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";

// Carga diferida del componente de reseñas
const ReseñaForm = dynamic(() => import("./ReseñaForm"), { ssr: false });

const Reseñas = () => {
  const [reseñaGuardada, setReseñaGuardada] = useState(false);
  const [reseña, setReseña] = useState<{ nombre: string; comentario: string; estrellas: number; foto: string | null } | null>(null);

  useEffect(() => {
    const storedReseña = localStorage.getItem("reseña");
    if (storedReseña) {
      setReseña(JSON.parse(storedReseña));
      setReseñaGuardada(true);
    }
  }, []);

  const handleGuardarReseña = useCallback((nuevaReseña: any) => {
    setReseña(nuevaReseña);
    setReseñaGuardada(true);
    localStorage.setItem("reseña", JSON.stringify(nuevaReseña));
  }, []);

  return (
    <section className="reseñas py-10 px-5 text-center bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-[#00ffcc]">Reseñas de Nuestros Clientes</h2>

      {!reseñaGuardada ? (
        <ReseñaForm onGuardarReseña={handleGuardarReseña} />
      ) : (
        <div className="mt-6 flex flex-col items-center">
          <FaCheckCircle className="text-green-500 text-5xl mb-2" />
          <p className="text-lg font-semibold text-gray-300">¡Gracias por tu reseña!</p>
        </div>
      )}

      {/* Lista de reseñas */}
      {reseña && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">Tu reseña</h3>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-md mx-auto border border-gray-700">
            {reseña.foto && (
              <Image
                src={reseña.foto}
                alt="Usuario"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-3 border-4 border-[#00ffcc]"
                loading="lazy"
              />
            )}
            <h3 className="font-semibold text-lg text-[#00ffcc]">{reseña.nombre}</h3>
            <div className="flex justify-center my-2">
              {[...Array(reseña.estrellas)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="italic text-gray-300">“{reseña.comentario}”</p>
          </div>
        </div>
      )}

      {/* Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Organization",
              "name": "Tu Empresa"
            },
            "review": reseña
              ? {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": reseña.nombre
                  },
                  "reviewBody": reseña.comentario,
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": reseña.estrellas,
                    "bestRating": 5
                  }
                }
              : null
          })
        }}
      />
    </section>
  );
};

export default Reseñas;