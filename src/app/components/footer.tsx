"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  // Función que desplaza la vista al formulario
  const scrollToFormulario = useCallback(() => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* 🔹 Fondo con efecto futurista (optimizado) */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md md:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
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
            className="w-40 h-auto"
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
              { name: "Aviso Legal", url: "/legal/aviso-legal" },
              { name: "Política de Privacidad", url: "/legal/politica-de-privacidad" },
              { name: "Política de Cookies", url: "/legal/politica-de-cookies" },
            ],
          },
          {
            title: "SEO por Ciudades",
            links: [
              { name: "SEO Cali", url: "/servicios" },
              { name: "SEO Bogotá", url: "/servicios" },
              { name: "SEO Medellín", url: "/servicios" },
              { name: "SEO Pasto", url: "/servicios" },
            ],
          },
          {
            title: "Servicios",
            links: [
              { name: "SEO", url: "/servicios" },
              { name: "SEM", url: "/servicios" },
              { name: "Desarrollo", url: "/servicios" },
              { name: "IA SEO", url: "/servicios" },
              { name: "Automatización", url: "/servicios" },
            ],
          },
          {
            title: "Navegación",
            links: [
              { name: "Inicio", url: "/" },
              { name: "Servicios", url: "/servicios" },
              { name: "Sobre Mi", url: "/sobre-mi" },
              { name: "Blog", url: "/blog" },
              { name: "Contacto", url: "/contacto" },
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="text-left"
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
          onClick={scrollToFormulario}
        >
          📩 Contáctanos
        </motion.button>
      </div>

    </footer>
  );
};

export default Footer;