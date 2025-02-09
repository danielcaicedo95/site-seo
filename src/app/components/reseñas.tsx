"use client";

import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaCamera, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const Reseñas = () => {
  const [reseñaGuardada, setReseñaGuardada] = useState(false);
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [foto, setFoto] = useState<string | null>(null);
  const [estrellas, setEstrellas] = useState<number>(0);
  const [reseña, setReseña] = useState<{ nombre: string; comentario: string; estrellas: number; foto: string | null } | null>(null);

  useEffect(() => {
    const storedReseña = localStorage.getItem("reseña");
    if (storedReseña) {
      setReseña(JSON.parse(storedReseña));
      setReseñaGuardada(true);
    }
  }, []);

  const handleGuardarReseña = () => {
    if (!nombre.trim() || !comentario.trim() || estrellas === 0) {
      alert("Por favor, completa todos los campos antes de enviar la reseña.");
      return;
    }

    const nuevaReseña = { nombre, comentario, estrellas, foto };
    setReseña(nuevaReseña);
    setReseñaGuardada(true);
    localStorage.setItem("reseña", JSON.stringify(nuevaReseña));
  };

  const handleCargarImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="reseñas py-10 px-5 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Reseñas de Nuestros Clientes</h2>

      {!reseñaGuardada ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Deja tu reseña</h3>

          {/* Subir foto */}
          <label className="block cursor-pointer mb-3">
            <span className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
              <FaCamera /> Subir Foto
            </span>
            <input type="file" className="hidden" accept="image/*" onChange={handleCargarImagen} />
          </label>
          {foto && <Image src={foto} alt="Foto de usuario" width={80} height={80} className="mx-auto rounded-full" />}

          {/* Nombre */}
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 mb-3"
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
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 mb-3"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>

          {/* Guardar reseña */}
          <button
            className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition w-full"
            onClick={handleGuardarReseña}
          >
            Guardar Reseña
          </button>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center">
          <FaCheckCircle className="text-green-500 text-5xl mb-2" />
          <p className="text-lg font-semibold text-gray-700">¡Gracias por tu reseña!</p>
        </div>
      )}

      {/* Lista de reseñas */}
      {reseña && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Tu reseña</h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
            {reseña.foto && (
              <Image
                src={reseña.foto}
                alt="Usuario"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-3 border-4 border-gray-300"
              />
            )}
            <h3 className="font-semibold text-lg">{reseña.nombre}</h3>
            <div className="flex justify-center my-2">
              {[...Array(reseña.estrellas)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="italic text-gray-700">"{reseña.comentario}"</p>
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
