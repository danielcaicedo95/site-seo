"use client";

import React, { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import "react-phone-number-input/style.css";

const PhoneInput = lazy(() => import("react-phone-number-input"));

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
}

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData({ ...formData, telefono: value || "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          mensaje: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Formulario de Contacto",
            description: "Formulario para contactar con Daniel Caicedo.",
          }),
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl p-8">
        <motion.div
          className="flex flex-col justify-center text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold mb-4">¡Hablemos!</h1>
          <p className="text-lg">
            Si tienes alguna pregunta o simplemente quieres ponerte en contacto, no dudes en enviarme un mensaje. Estaré encantado de ayudarte.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div>
            <label htmlFor="nombre" className="sr-only">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="telefono" className="sr-only">
              Teléfono
            </label>
            <Suspense fallback={<div className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600">Loading...</div>}>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.telefono}
                onChange={handlePhoneChange}
                className="w-full p-3 rounded bg-white text-black border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </Suspense>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="sr-only">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
              rows={5}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="p-3 bg-purple-600 rounded text-white font-bold hover:bg-purple-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </motion.button>

          {submitStatus === "success" && (
            <p className="text-green-400 text-center">Mensaje enviado con éxito.</p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 text-center">Error al enviar el mensaje. Inténtalo de nuevo.</p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}