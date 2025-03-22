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
  title: "SEO en Bogotá | Agencia de Marketing Digital y Auditoría Local",
  description:
    "Mejora la visibilidad de tu negocio en Bogotá con estrategias SEO comprobadas. Optimiza tu sitio, destaca en Google Maps y realiza auditorías web locales con la experiencia de la agencia oficial en marketing digital.",
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
    titulo: "Optimiza tu presencia digital en Bogotá con nuestro SEO local",
    descripcion: "Mejora tu visibilidad en buscadores, alcanza a clientes locales y supera a la competencia.",
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
    Auditoría SEO Local
  </h2>
  <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
    Nuestro servicio de auditoría se basa en un análisis profundo de los elementos clave que impulsan la visibilidad online en Bogotá. Identificamos las áreas de mejora en el posicionamiento, detectamos oportunidades estratégicas y te brindamos recomendaciones precisas para destacar en un mercado altamente competitivo. Las evaluaciones detalladas y personalizadas muestran cómo mejorar la presencia de tu sitio, haciendo énfasis en la relevancia de “seo”, “bogotá” y otros términos esenciales para conectar con tu público.
  </p>
</section>

{/* Sección: Soluciones SEO */}
<section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-8 px-4 rounded-lg mx-auto max-w-5xl text-center my-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.6)]">
  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#ff0099] bg-clip-text text-transparent">
    Gestión de Google My Business y Local Listings
  </h2>
  <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
    Potencia tu estrategia local con soluciones integrales que maximizan la presencia de tu negocio en buscadores y mapas. Nuestra optimización te ayuda a resaltar en los directorios y plataformas clave, posicionando tu empresa como referente en el ámbito digital de Bogotá. Aprovechamos insights basados en los términos más influyentes y las tendencias emergentes, garantizando que cada aspecto de tu perfil digital impulse la conversión y visibilidad.
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
