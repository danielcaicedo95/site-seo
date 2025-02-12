"use client";

import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Datos de las 12 reseñas predefinidas
const reseñas = [
  {
    nombre: "Ana López",
    foto: "/user1.jpg", // Cambia por la ruta de tus imágenes
    estrellas: 5,
    comentario: "¡Increíble servicio! Mi marca personal despegó gracias a su ayuda.",
    correo: "ana.lopez@example.com",
  },
  {
    nombre: "Carlos Ruiz",
    foto: "/user2.jpg",
    estrellas: 5,
    comentario: "Profesionales de primer nivel. ¡Los recomiendo totalmente!",
    correo: "carlos.ruiz@example.com",
  },
  {
    nombre: "María Gómez",
    foto: "/user3.jpg",
    estrellas: 4,
    comentario: "Muy contenta con los resultados. ¡Gracias por todo!",
    correo: "maria.gomez@example.com",
  },
  {
    nombre: "Javier Torres",
    foto: "/user4.jpg",
    estrellas: 5,
    comentario: "Transformaron mi presencia en línea. ¡Excelente trabajo!",
    correo: "javier.torres@example.com",
  },
  {
    nombre: "Lucía Méndez",
    foto: "/user5.jpg",
    estrellas: 5,
    comentario: "Superaron mis expectativas. ¡Los mejores en lo que hacen!",
    correo: "lucia.mendez@example.com",
  },
  {
    nombre: "Pedro Sánchez",
    foto: "/user6.jpg",
    estrellas: 4,
    comentario: "Muy profesionales y atentos a los detalles. ¡Gracias!",
    correo: "pedro.sanchez@example.com",
  },
  {
    nombre: "Sofía Ramírez",
    foto: "/user7.jpg",
    estrellas: 5,
    comentario: "Mi marca personal nunca había lucido tan bien. ¡Increíble!",
    correo: "sofia.ramirez@example.com",
  },
  {
    nombre: "Diego Castro",
    foto: "/user8.jpg",
    estrellas: 5,
    comentario: "El mejor equipo para potenciar tu marca. ¡Los recomiendo!",
    correo: "diego.castro@example.com",
  },
  {
    nombre: "Elena Vargas",
    foto: "/user9.jpg",
    estrellas: 4,
    comentario: "Muy satisfecha con su trabajo. ¡Gracias por todo!",
    correo: "elena.vargas@example.com",
  },
  {
    nombre: "Miguel Ángel",
    foto: "/user10.jpg",
    estrellas: 5,
    comentario: "¡Increíble experiencia! Mi marca personal brilla ahora más que nunca.",
    correo: "miguel.angel@example.com",
  },
  {
    nombre: "Laura Fernández",
    foto: "/user11.jpg",
    estrellas: 5,
    comentario: "Excelente atención y resultados. ¡Totalmente recomendados!",
    correo: "laura.fernandez@example.com",
  },
  {
    nombre: "Roberto Navarro",
    foto: "/user12.jpg",
    estrellas: 4,
    comentario: "Muy contento con el servicio. ¡Gracias por su profesionalismo!",
    correo: "roberto.navarro@example.com",
  },
];

const Reseñas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Detecta si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll en móvil
  useEffect(() => {
    if (isMobile && containerRef.current) {
      const interval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
          if (
            containerRef.current.scrollLeft + containerRef.current.clientWidth >=
            containerRef.current.scrollWidth
          ) {
            containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 5000); // Cambia cada 5 segundos
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Reseñas a mostrar (6 en desktop, todas si se hace clic en "Ver más")
  const reseñasMostradas = showAll ? reseñas : reseñas.slice(0, 6);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-purple-900 to-blue-900">
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        Reseñas de Clientes
      </h2>
      <div
        ref={containerRef}
        className={`grid ${isMobile ? "grid-flow-col auto-cols-[80%] gap-4 overflow-x-auto snap-x snap-mandatory" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}`}
      >
        {reseñasMostradas.map((reseña, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-800 to-blue-800 p-6 rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105 snap-center"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={reseña.foto}
                alt={reseña.nombre}
                width={64}
                height={64}
                className="rounded-full border-2 border-purple-400"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">{reseña.nombre}</h3>
                <div className="flex space-x-1">
                  {[...Array(reseña.estrellas)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-200 italic mb-4">“{reseña.comentario}”</p>
            <p className="text-sm text-purple-300">{reseña.correo}</p>
          </div>
        ))}
      </div>
      {!isMobile && !showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
          >
            Ver más
          </button>
        </div>
      )}
    </section>
  );
};

export default Reseñas;