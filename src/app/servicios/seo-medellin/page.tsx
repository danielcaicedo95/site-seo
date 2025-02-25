// app/servicios/seo-medellin/page.tsx

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
  title: "Consultor SEO Medellín - Impulsa tu negocio digital | Daniel C.",
  description:
    "Potencia tu negocio en Medellín con estrategias SEO locales. Descubre consultoría, auditoría, posicionamiento web y marketing digital en Medellín para transformar tu presencia online.",
  keywords: [
    "agencia seo medellin",
    "consultoría seo medellin",
    "seo medellin",
    "servicios seo medellin",
    "auditoría seo medellin",
    "posicionamiento web seo medellin",
    "consultor seo medellin",
    "marketing digital medellin",
    "experto seo medellin"
  ],
  alternates: {
    canonical: "https://daniseo.site/servicios/seo-medellin",
  },
};

const presentacionData = {
  imageSrc: "/images/foto.png",
  title: "Estrategias SEO Especializadas para el Mercado Paisa",
  text: "Soy Daniel Caicedo, experto en SEO con más de 6 años de experiencia ayudando a negocios a posicionarse en los motores de búsqueda. Mi enfoque combina tácticas actualizadas con las mejores prácticas de EEAT, resolviendo la intención de búsqueda de tus clientes para generar resultados sostenibles, especialmente en el competitivo entorno de Medellín.",
};

const ServiciosMedellin = () => {
  const portadaData = {
    imagen: "/images/portada-medellin.jpg",
    titulo: "Servicios SEO en Medellín: Crecimiento Digital Paisa",
    descripcion: "Impulsa tu negocio en Medellín con estrategias digitales a medida",
  };

  const faqs = [
    {
      question: "¿Cómo contratar un experto en SEO en Medellín y garantizar resultados?",
      answer:
        "En Medellín es fundamental revisar el portafolio, casos de éxito y testimonios locales. Un consultor SEO debe usar herramientas de análisis adaptadas al mercado paisa para asegurar resultados sostenibles.",
    },
    {
      question: "¿Dónde encontrar un especialista en SEO en Medellín?",
      answer:
        "Puedes encontrar expertos en SEO a través de plataformas locales, Google My Business y redes profesionales. Una consulta personalizada te ayudará a evaluar las necesidades de tu negocio en la ciudad.",
    },
    {
      question: "¿Cuánto cuesta contratar un consultor SEO en Medellín?",
      answer:
        "En Medellín, los precios para proyectos pequeños varían entre 750 mil y 1.6 millones COP mensuales, dependiendo del alcance de la estrategia y la competencia en tu sector.",
    },
    {
      question: "¿Qué estrategias de SEO se adaptan mejor al mercado medellinense?",
      answer:
        "El SEO local es esencial. Se recomienda optimizar la ficha de Google My Business, obtener reseñas locales, utilizar keywords específicas de Medellín y desarrollar campañas de link building con sitios relevantes en la región.",
    },
    {
      question: "¿En cuánto tiempo se notan los resultados del SEO local en Medellín?",
      answer:
        "Los primeros resultados pueden observarse en 1 a 3 meses, pero para lograr un posicionamiento sólido se recomienda mantener la estrategia durante 6 a 12 meses de forma continua.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Daniel Caicedo - Consultoría SEO en Medellín",
    url: "https://daniseo.site/servicios/seo-medellin",
    telephone: "+57XXXXXXXXXX", // Actualiza con tu número real
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 80 #45-67", // Ejemplo de dirección en Medellín
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      postalCode: "050001",
      addressCountry: "CO",
    },
    areaServed: "Medellín",
    description:
      "Consultoría SEO especializada en el mercado de Medellín. Estrategias de SEO local, optimización on-page, link building y análisis de resultados para impulsar el crecimiento digital de tu negocio en Medellín.",
    logo: "https://daniseo.site/images/logo-presentacion.png",
  };

  return (
    <Fragment>
      {/* Datos estructurados (JSON-LD) para SEO local */}
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
          ¿Dificultades para hacer crecer tu web en Medellín?
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Estudios recientes indican que cerca del 70% de las empresas en Medellín
          enfrentan retos para aumentar su tráfico web y convertir visitantes en clientes.
          <span className="italic"> (Fuente: Cámara de Comercio de Medellín)</span>
        </p>
      </section>

      {/* Sección: Soluciones SEO */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-8 px-4 rounded-lg mx-auto max-w-5xl text-center my-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.6)]">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#ff0099] bg-clip-text text-transparent">
          Soluciones SEO para impulsar tu negocio en Medellín
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Implementa estrategias locales, optimización on-page y campañas de link building que han
          demostrado aumentar el tráfico orgánico en hasta un 58% en el competitivo mercado medellinense.
          <span className="italic"> (Fuente: Observatorio de Marketing Digital Medellín)</span>
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

export default ServiciosMedellin;
