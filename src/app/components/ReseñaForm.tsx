"use client";

import { useState, useCallback } from "react";
import { FaStar, FaRegStar, FaCamera } from "react-icons/fa";
import Image from "next/image";

const ReseñaForm = ({ onGuardarReseña }: { onGuardarReseña: (reseña: any) => void }) => {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [foto, setFoto] = useState<string | null>(null);
  const [estrellas, setEstrellas] = useState<number>(0);

  const handleCargarImagen = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleGuardarReseña = useCallback(() => {
    if (!nombre.trim() || !comentario.trim() || estrellas === 0) {
      alert("Por favor, completa todos los campos antes de enviar la reseña.");
      return;
    }

    const nuevaReseña = { nombre, comentario, estrellas, foto };
    onGuardarReseña(nuevaReseña);
  }, [nombre, comentario, estrellas, foto, onGuardarReseña]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-[#00ffcc]">Deja tu reseña</h3>

      {/* Subir foto */}
      <label className="block cursor-pointer mb-3">
        <span className="flex items-center justify-center gap-2 text-blue-400 font-semibold">
          <FaCamera /> Subir Foto
        </span>
        <input type="file" className="hidden" accept="image/*" onChange={handleCargarImagen} />
      </label>
      {foto && (
        <Image
          src={foto}
          alt="Foto de usuario"
          width={80}
          height={80}
          className="mx-auto rounded-full border-2 border-[#00ffcc]"
          loading="lazy"
        />
      )}

      {/* Nombre */}
      <input
        type="text"
        placeholder="Tu nombre"
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#00ffcc] mb-3 bg-gray-700 text-white"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      {/* Selección de estrellas */}
      <div className="flex justify-center mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} onClick={() => setEstrellas(i)} className="cursor-pointer text-2xl">
            {i <= estrellas ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-400" />}
          </span>
        ))}
      </div>

      {/* Comentario */}
      <textarea
        placeholder="Escribe tu reseña"
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#00ffcc] mb-3 bg-gray-700 text-white"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      ></textarea>

      {/* Guardar reseña */}
      <button
        className="px-5 py-2 bg-[#00ffcc] text-gray-900 font-semibold rounded-lg shadow-md hover:bg-[#00ccaa] transition w-full"
        onClick={handleGuardarReseña}
      >
        Guardar Reseña
      </button>
    </div>
  );
};

export default ReseñaForm;