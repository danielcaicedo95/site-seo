"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Portada = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
    

      {/* Imagen de fondo optimizada */}
      <Image
        src="/images/portada3.jpg"
        alt="Fondo de portada"
        fill
        priority={true}
        quality={75}
        className="object-cover object-center"
      />

      {/* Contenedor semi-transparente para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido principal */}
      <div className="relative flex flex-col sm:flex-row items-center text-center sm:text-left px-6">
        {/* Imagen con efecto de brillo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-36 sm:w-44 md:w-52 lg:w-60 rounded-full overflow-hidden shadow-lg"
        >
          <Image
            src="/images/foto.png"
            alt="Daniel Caicedo"
            width={250}
            height={250}
            priority
            quality={80}
            className="w-full h-auto brightness-110 contrast-125"
          />
        </motion.div>

        {/* Texto y botón */}
        <div className="mt-4 sm:mt-0 sm:ml-6 text-white">
          {/* Nombre con degradado y brillo */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-md"
          >
            Daniel Caicedo
          </motion.h2>

          {/* Botón futurista */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4"
          >
            <Link href="/contacto">
              <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border border-transparent hover:border-white shadow-md hover:shadow-blue-400/50 transition-all duration-300">
                Hacer una consulta Gratis
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portada;