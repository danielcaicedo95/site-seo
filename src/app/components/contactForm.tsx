import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Mensaje enviado con éxito");
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          mensaje: "",
        });
      } else {
        alert("Error al enviar el mensaje: " + result.message);
      }
    } catch (error) {
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl p-8">
        {/* Columna izquierda: Mensaje llamativo */}
        <motion.div
          className="flex flex-col justify-center text-white"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">¡Hablemos!</h2>
          <p className="text-lg">
            Si tienes alguna pregunta o simplemente quieres ponerte en contacto, no dudes en enviarme un mensaje. Estaré encantado de ayudarte.
          </p>
        </motion.div>

        {/* Columna derecha: Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
            required
          />

          <PhoneInput
            country={"us"}
            value={formData.telefono}
            onChange={(value) => setFormData({ ...formData, telefono: value })}
            inputClass="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
            inputProps={{
              required: true,
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
            required
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
            rows={5}
            required
          />

          <motion.button
            type="submit"
            className="p-3 bg-purple-600 rounded text-white font-bold hover:bg-purple-700 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar mensaje
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}