"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PortadaProps {
  imagen: string;
  titulo: string;
  descripcion: string;
}

const Portada: React.FC<PortadaProps> = ({ imagen, titulo, descripcion }) => {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Imagen optimizada con precarga automática controlada */}
      <Image
        src={imagen}
        alt="Portada background"
        fill
        priority={true} // ¡Este es el único necesario para precargar!
        quality={75}
        className="object-cover object-center -z-10"
      />

      {/* Contenedor semi-transparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-5"></div>

      {/* Contenido principal */}
      <div className="relative flex flex-col items-center text-center px-6 py-6 bg-black bg-opacity-40 rounded-xl max-w-[90%] sm:max-w-[70%]">
        {/* Título futurista */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        >
          {titulo}
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mt-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
        >
          {descripcion}
        </motion.p>

        {/* Botón futurista */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6"
        >
          <a
            href="#contacto"
            className="px-6 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border border-transparent hover:border-white shadow-md hover:shadow-blue-400/50 transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            aria-label="Ir a la sección de contacto"
          >
            Hablemos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portada;
