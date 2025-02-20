"use client";

import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const reseñas = [
  {
    nombre: "Alejandro Martínez",
    foto: "/images/reviews/user1.png",
    estrellas: 5,
    comentario:
      "Trabajar con Daniel Caicedo ha sido una de las mejores decisiones para mi negocio. Su conocimiento en SEO y estrategias digitales realmente marcan la diferencia. En pocos meses, logramos un crecimiento impresionante en tráfico y conversiones.",
    correo: "alejoc3838@gmail.com",
  },
  {
    nombre: "Lucía Fernández",
    foto: "/images/reviews/user2.png",
    estrellas: 5,
    comentario:
      "Dani no solo es un experto en SEO, sino que también sabe explicar cada paso del proceso de forma clara y sencilla. Gracias a su trabajo, nuestra web ahora aparece en los primeros resultados de Google.",
    correo: "lucia.fernandez@3dids.com",
  },
  {
    nombre: "Miguel Ángel Torres",
    foto: "/images/reviews/user3.png",
    estrellas: 5,
    comentario:
      "Desde el primer momento, Daniel mostró un enfoque estratégico y bien definido para mejorar nuestro posicionamiento. No solo optimizó nuestra web, sino que también nos dio recomendaciones valiosas para seguir creciendo. profesional y comprometido!",
    correo: "miguelangel16@hotmail.com",
  },
  {
    nombre: "Andrea López",
    foto: "/images/reviews/user4.png",
    estrellas: 5,
    comentario:
      "Dani nos ayudó a salir de una penalización de Google y a recuperar posiciones en los buscadores. Su análisis fue preciso y su asesoramiento, invaluable. Sin duda, un profesional con muchísima experiencia en SEO.",
    correo: "andrea.lopez@alaronasrudio.com",
  },
  {
    nombre: "Javier",
    foto: "/images/reviews/user5.png",
    estrellas: 5,
    comentario:
      "Si buscas un experto en SEO que realmente entienda cómo posicionar una web, Daniel Caicedo es la persona indicada. Gracias a su trabajo, ahora recibimos tráfico de calidad y hemos aumentado nuestras conversiones. ¡Totalmente recomendable!",
    correo: "javiert1244@gmail.com",
  },
  {
    nombre: "Carla Méndez",
    foto: "/images/reviews/user6.png",
    estrellas: 5,
    comentario:
      "Dani es un profesional excepcional. No solo optimizó nuestra web, sino que también nos enseñó estrategias de contenido y link building que marcaron la diferencia. Su trabajo ha sido clave en el crecimiento de nuestro negocio online.",
    correo: "carlamen@3dids.com",
  },
  {
    nombre: "Fernando Gómez",
    foto: "/images/reviews/user7.png",
    estrellas: 5,
    comentario:
      "Trabajar con Daniel ha sido una experiencia increíble. Su conocimiento en SEO técnico y estrategias de contenido es impresionante. Siempre atento a los detalles y con una visión clara de lo que funciona en Google. Un placer trabajar con él",
    correo: "fernandogo96@hotmail.com",
  },
  {
    nombre: "Ricardo López",
    foto: "/images/reviews/user9.png",
    estrellas: 5,
    comentario:
      "Daniel es un experto en SEO con un enfoque claro y directo. Nos explicó todo el proceso, desde la auditoría hasta la implementación de mejoras. Nuestro tráfico orgánico ha crecido muchísimo gracias a su ayuda. Muy recomendado",
    correo: "ricardolop92@gmail.com",
  },
  {
    nombre: "Sofía H.",
    foto: "/images/reviews/user10.png",
    estrellas: 5,
    comentario:
      "Increíble el trabajo de Dani. Nos ayudó a estructurar mejor nuestro sitio y a posicionarnos en nichos muy competitivos. Siempre está al día con las últimas tendencias de Google y eso marca la diferencia. ¡Gracias, Dani!",
    correo: "sofiah@3dids.com",
  },
];

const Reseñas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Detección de móvil usando matchMedia (más eficiente que 'resize')
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Auto-scroll en móviles, diferido cuando sea posible
  useEffect(() => {
    if (isMobile && containerRef.current) {
      const scrollContainer = containerRef.current;
      let intervalId: NodeJS.Timeout;

      const startAutoScroll = () => {
        intervalId = setInterval(() => {
          scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
          if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth
          ) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          }
        }, 5000);
      };

      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(() => {
          startAutoScroll();
        });
      } else {
        startAutoScroll();
      }
      return () => clearInterval(intervalId);
    }
  }, [isMobile]);

  // En móviles se muestran todas las reseñas; en desktop, 6 por defecto (hasta 'Ver más')
  const displayedReseñas = isMobile ? reseñas : showAll ? reseñas : reseñas.slice(0, 6);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-purple-900 to-blue-900">
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        Reseñas de Clientes
      </h2>
      <div
        ref={containerRef}
        className={
          isMobile
            ? "grid grid-flow-col auto-cols-[80%] gap-4 overflow-x-auto snap-x snap-mandatory"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        {displayedReseñas.map((reseña, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-800 to-blue-800 p-6 rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105 snap-center"
          >
            <div className="flex items-center space-x-4 mb-4">
              {/* Contenedor fijo para la foto, asegurando círculos uniformes */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={reseña.foto}
                  alt={reseña.nombre}
                  fill
                  className="rounded-full border-2 border-purple-400 object-cover"
                  loading="lazy"
                />
              </div>
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
