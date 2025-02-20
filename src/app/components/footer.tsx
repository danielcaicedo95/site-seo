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
      {/* Fondo con efecto futurista */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md md:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        {/* Logo e Información SEO */}
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

        {/* Secciones de enlaces (Legal, Ciudades, Servicios, Navegación) */}
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
              { name: "SEO Cali", url: "/seo-cali" },
              { name: "SEO Bogotá", url: "/seo-bogota" },
              { name: "SEO Medellín", url: "/seo-medellin" },
              { name: "SEO Pasto", url: "/seo-pasto" },
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

      {/* Sección de botones para redes sociales */}
      <div className="container mx-auto px-4 md:px-6 mt-10 flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
        <Link
          href="https://www.linkedin.com/in/dcaicedo/"
          target="_blank"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
        >
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <span className="text-white font-semibold">LinkedIn</span>
        </Link>
        <Link
          href="https://github.com/danielcaicedo95"
          target="_blank"
          className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
        >
          <Image
            src="/images/github.png"
            alt="GitHub"
            width={24}
            height={24}
          />
          <span className="text-white font-semibold">GitHub</span>
        </Link>
      </div>

      {/* Créditos */}
      <div className="text-center mt-8 relative z-10">
        <p className="text-sm text-gray-400">
          Sitio web hecho por Daniel Caicedo en Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;