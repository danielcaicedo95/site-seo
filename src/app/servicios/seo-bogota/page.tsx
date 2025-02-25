// app/servicios/seo-bogota/page.tsx

import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import ServiciosCompletos from "@/app/components/serviciosCompletos";
import BeneficiosSeo from "@/app/components/beneficiosSeo";
import FlujoTrabajo from "@/app/components/flujoTrabajo";
import FAQ from "../../components/faqs";
import { Metadata } from "next";
import Footer from "@/app/components/footer";
import Contacto from "../../components/contactForm";
import { Fragment } from "react";
import Presentacion from "@/app/components/presentacion";

export const metadata: Metadata = {
  title: "Consultor SEO Bogotá - Servicios SEO Bogotá | Daniel C.",
  description:
    "Impulsa tu negocio en Bogotá con estrategias SEO locales. Descubre consultoría, auditoría, posicionamiento web y marketing digital en Bogotá para transformar tu presencia online.",
  keywords: [
    "agencia seo bogota",
    "agencia de posicionamiento seo bogota",
    "agencia seo bogotá",
    "seo bogota",
    "consultoria seo en bogotá",
    "servicios seo bogota",
    "auditoria seo bogota",
    "expertos en seo bogota",
    "posicionamiento seo bogotá",
    "posicionamiento web seo bogota",
    "consultor seo bogota",
    "marketing digital y seo en bogotá",
    "agencia de seo bogota",
    "auditoría seo bogotá",
    "bogota seo",
    "consultor seo bogotá",
    "curso de seo en bogota",
    "curso seo bogota",
    "empresa seo bogota",
    "empresa seo bogotá",
    "experto seo bogota"
  ],
  alternates: {
    canonical: "https://daniseo.site/servicios/seo-bogota",
  },
};

const presentacionData = {
  imageSrc: "/images/foto.png",
  title: "Estrategias SEO Profesionales: Enfocadas en el Mercado Bogotano",
  text: "Soy Daniel Caicedo, experto en SEO con más de 6 años de experiencia ayudando a negocios a destacar en los motores de búsqueda. Mi enfoque integra tácticas actualizadas con las mejores prácticas de EEAT para resolver la intención de búsqueda de tus clientes y generar resultados sostenibles, especialmente en el competitivo mercado de Bogotá.",
};

const ServiciosBogota = () => {
  const portadaData = {
    imagen: "/images/portada-bogota.jpg",
    titulo: "Servicios SEO en Bogotá: Posicionamiento Web de Alto Impacto",
    descripcion: "Potencia tu negocio en Bogotá con estrategias digitales a medida",
  };

  const faqs = [
    {
      question: "¿Cómo contratar un experto en SEO en Bogotá y garantizar resultados?",
      answer:
        "En Bogotá es esencial revisar el portafolio, casos de éxito y testimonios locales. Un consultor SEO debe usar herramientas de análisis específicas para el mercado bogotano y adaptar estrategias que aseguren un crecimiento sostenible.",
    },
    {
      question: "¿Dónde encontrar un especialista en SEO en Bogotá?",
      answer:
        "Puedes encontrar expertos en SEO a través de plataformas locales, Google My Business y redes profesionales. Una consulta personalizada te ayudará a evaluar las necesidades de tu negocio en la capital.",
    },
    {
      question: "¿Cuánto cuesta contratar un consultor SEO en Bogotá?",
      answer:
        "En Bogotá, los precios para proyectos pequeños pueden variar entre 800 mil y 1.8 millones COP mensuales, según el alcance de la estrategia y la competencia en tu sector.",
    },
    {
      question: "¿Qué estrategias de SEO se adaptan mejor al mercado bogotano?",
      answer:
        "El SEO local es clave. Se recomienda optimizar la ficha de Google My Business, obtener reseñas locales, utilizar keywords específicas de Bogotá y desarrollar campañas de link building con sitios relevantes de la capital.",
    },
    {
      question: "¿En cuánto tiempo se notan los resultados del SEO local en Bogotá?",
      answer:
        "Los primeros resultados pueden verse en 1 a 3 meses, pero para alcanzar una posición consolidada se sugiere mantener la estrategia durante 6 a 12 meses de forma continua.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Daniel Caicedo - Consultoría SEO en Bogotá",
    url: "https://daniseo.site/servicios/seo-bogota",
    telephone: "+573008061344", // Actualiza con tu número real
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrera 10 #15-17", // Ejemplo de dirección en Bogotá
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      postalCode: "110111",
      addressCountry: "CO",
    },
    areaServed: "Bogotá",
    description:
      "Consultoría SEO especializada en el mercado bogotano. Estrategias de SEO local, optimización on-page, link building y análisis de resultados para impulsar el crecimiento de tu negocio en Bogotá.",
    logo: "https://daniseo.site/images/logo-presentacion.png",
  };

  return (
    <Fragment>
      {/* Datos estructurados (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Navbar y Portada */}
      <Navbar />
      <Portada
        imagen={portadaData.imagen}
        titulo={portadaData.titulo}
        descripcion={portadaData.descripcion}
      />

      {/* Sección: Problemas de crecimiento */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-8 px-4 rounded-lg mx-auto max-w-5xl text-center my-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.6)]">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#ff0099] bg-clip-text text-transparent">
          ¿Problemas para hacer crecer tu web en Bogotá?
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Según un estudio de la Cámara de Comercio de Bogotá, hasta el 72% de las empresas en la capital
          enfrentan desafíos para aumentar su tráfico web y convertir visitantes en clientes.
          
        </p>
      </section>

      {/* Sección: Soluciones SEO */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-8 px-4 rounded-lg mx-auto max-w-5xl text-center my-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.6)]">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#ff0099] bg-clip-text text-transparent">
          Soluciones SEO para impulsar tu negocio en Bogotá
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Implementa estrategias locales, optimización on-page y campañas de link building que han
          demostrado aumentar el tráfico orgánico en hasta un 60% en el competitivo mercado bogotano.
          
        </p>
      </section>

      {/* Presentación del experto */}
      <Presentacion
        imageSrc={presentacionData.imageSrc}
        title={presentacionData.title}
        text={presentacionData.text}
      />

      {/* Resto del contenido */}
      <ServiciosCompletos />
      <BeneficiosSeo />
      <FlujoTrabajo />
      <FAQ faqs={faqs} />
      <Contacto />
      <Footer />
    </Fragment>
  );
};

export default ServiciosBogota;
