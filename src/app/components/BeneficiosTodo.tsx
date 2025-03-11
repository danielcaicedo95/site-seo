"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface Beneficio {
  titulo: string;
  descripcion: string;
  imagen: string;
  posicionImagen: "left" | "right";
}

interface BeneficiosTodoProps {
  beneficios: Beneficio[];
  tituloSeccion: string;
  descripcionSeccion: string;
}

const BeneficiosTodo = ({
  beneficios,
  tituloSeccion,
  descripcionSeccion,
}: BeneficiosTodoProps) => {
  // Datos estructurados para SEO
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: tituloSeccion,
      description: descripcionSeccion,
      itemListElement: beneficios.map((beneficio, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: beneficio.titulo,
        description: beneficio.descripcion,
        image: beneficio.imagen,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [beneficios, tituloSeccion, descripcionSeccion]);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {tituloSeccion}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {descripcionSeccion}
          </p>
        </motion.div>

        {/* Lista de beneficios */}
        <div className="space-y-12">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col ${
                beneficio.posicionImagen === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              {/* Imagen */}
              <div className="w-full md:w-1/2 relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={beneficio.imagen}
                  alt={beneficio.titulo}
                  fill
                  className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2} // Prioriza las primeras imágenes
                />
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {beneficio.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosTodo;