"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = useCallback(() => {
    setMostrarFormulario((prev) => !prev);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* 🔹 Fondo con efecto futurista */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        {/* 🔹 Logo + Información SEO */}
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo-presentacion.png"
            alt="Logo de la empresa"
            width={160}
            height={50}
            priority
          />
          <h2 className="text-lg font-bold tracking-wider mt-3">
            Tu Agencia SEO
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Elevamos tu negocio con estrategias SEO de alto impacto.
          </p>
        </motion.div>

        {/* 🔹 Sección reutilizable para enlaces */}
        {[
          {
            title: "Legal",
            links: [
              { name: "Aviso Legal", url: "/aviso-legal" },
              { name: "Política de Privacidad", url: "/politica-de-privacidad" },
              { name: "Política de Cookies", url: "/politica-de-cookies" },
            ],
          },
          {
            title: "Eventos",
            links: [
              { name: "Black Friday 2025", url: "/black-friday-2025" },
              { name: "Cyber Monday 2025", url: "/cyber-monday-2025" },
              { name: "SEO Trends 2025", url: "/seo-trends-2025" },
            ],
          },
          {
            title: "Servicios",
            links: [
              { name: "SEO", url: "/seo" },
              { name: "SEM", url: "/sem" },
              { name: "Desarrollo", url: "/desarrollo" },
              { name: "IA SEO", url: "/ia-seo" },
              { name: "Automatización", url: "/automatizacion" },
            ],
          },
          {
            title: "Navegación",
            links: [
              { name: "Inicio", url: "/" },
              { name: "Sobre Nosotros", url: "/sobre-nosotros" },
              { name: "Blog", url: "/blog" },
              { name: "Contacto", url: "/contacto" },
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * (index + 1) }}
          >
            <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Botón de contacto */}
      <div className="text-center mt-10">
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
          onClick={toggleFormulario}
        >
          📩 Contáctanos
        </motion.button>
      </div>

      {/* 🔹 Formulario emergente */}
      {mostrarFormulario && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-center">
              Déjanos tus datos
            </h3>

            {/* Nombre */}
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-300 mb-3"
            />

            {/* Empresa */}
            <input
              type="text"
              placeholder="Empresa (opcional)"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-300 mb-3"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-300 mb-3"
            />

            {/* Mensaje */}
            <textarea
              placeholder="¿En qué podemos ayudarte?"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-300 mb-3"
            ></textarea>

            {/* Botón de Enviar */}
            <button className="px-5 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:scale-105 transition transform duration-300 w-full">
              Enviar
            </button>

            {/* Cerrar */}
            <button
              className="mt-3 text-gray-400 underline block text-center"
              onClick={toggleFormulario}
            >
              Cancelar
            </button>
          </motion.div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

