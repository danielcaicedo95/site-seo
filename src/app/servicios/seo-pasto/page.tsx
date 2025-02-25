// app/servicios/seo-pasto/page.tsx

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
  title: "Consultoría SEO en Pasto - Impulsa tu presencia digital | Daniel C.",
  description:
    "Potencia tu negocio en Pasto con estrategias SEO locales. Descubre consultoría, auditoría, posicionamiento web y marketing digital en Pasto para transformar tu presencia online.",
  keywords: [
    "seo pasto",
    "consultoría seo pasto",
    "servicios seo pasto",
    "auditoría seo pasto",
    "agencia seo pasto",
    "posicionamiento web seo pasto",
    "experto seo pasto"
  ],
  alternates: {
    canonical: "https://daniseo.site/servicios/seo-pasto",
  },
};

const presentacionData = {
  imageSrc: "/images/foto.png",
  title: "Estrategias SEO Innovadoras para el Mercado Pastuso",
  text: "Soy Daniel Caicedo, experto en SEO con más de 6 años de experiencia ayudando a negocios a posicionarse en los motores de búsqueda. Mi enfoque combina tácticas actualizadas con las mejores prácticas de EEAT para resolver la intención de búsqueda de tus clientes y generar resultados sostenibles, especialmente en el dinámico mercado de Pasto.",
};

const ServiciosPasto = () => {
  const portadaData = {
    imagen: "/images/portada-pasto.jpg",
    titulo: "Servicios SEO en Pasto: Crecimiento Digital para tu Negocio",
    descripcion: "Impulsa tu negocio en Pasto con estrategias digitales adaptadas a tu mercado local",
  };

  const faqs = [
    {
      question: "¿Cómo contratar un experto en SEO en Pasto y obtener resultados efectivos?",
      answer:
        "En Pasto es esencial revisar portafolios, casos de éxito y testimonios locales. Un consultor SEO debe utilizar herramientas de análisis adaptadas al mercado pastuso para lograr resultados medibles y sostenibles.",
    },
    {
      question: "¿Dónde puedo encontrar un especialista en SEO en Pasto?",
      answer:
        "Puedes buscar expertos en SEO a través de plataformas locales, Google My Business y redes profesionales. Una consulta personalizada te ayudará a determinar las necesidades específicas de tu negocio en Pasto.",
    },
    {
      question: "¿Cuál es el costo promedio de contratar un consultor SEO en Pasto?",
      answer:
        "En Pasto, los precios para proyectos pequeños pueden oscilar entre 600 mil y 1.3 millones COP mensuales, según el alcance de la estrategia y la competencia en el sector.",
    },
    {
      question: "¿Qué estrategias de SEO son ideales para el mercado pastuso?",
      answer:
        "El SEO local es fundamental. Se recomienda optimizar la ficha de Google My Business, generar reseñas locales, emplear keywords geolocalizadas y desarrollar campañas de link building con sitios relevantes en Pasto.",
    },
    {
      question: "¿Cuánto tiempo se necesita para ver resultados del SEO en Pasto?",
      answer:
        "Los primeros resultados pueden observarse en 1 a 3 meses, pero para consolidar un posicionamiento sólido se recomienda mantener la estrategia durante 6 a 12 meses de forma continua.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Daniel Caicedo - Consultoría SEO en Pasto",
    url: "https://daniseo.site/servicios/seo-pasto",
    telephone: "+57XXXXXXXXXX", // Actualiza con tu número real
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 20 #15-50", // Ejemplo de dirección en Pasto
      addressLocality: "Pasto",
      addressRegion: "Nariño",
      postalCode: "521000",
      addressCountry: "CO",
    },
    areaServed: "Pasto",
    description:
      "Consultoría SEO especializada en el mercado pastuso. Estrategias de SEO local, optimización on-page, link building y análisis de resultados para impulsar el crecimiento digital de tu negocio en Pasto.",
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
          ¿Tienes dificultades para hacer crecer tu web en Pasto?
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Estudios indican que cerca del 65% de las empresas en Pasto enfrentan retos para aumentar su tráfico y convertir visitantes en clientes.
          <span className="italic"> (Fuente: Cámara de Comercio de Pasto)</span>
        </p>
      </section>

      {/* Sección: Soluciones SEO */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-8 px-4 rounded-lg mx-auto max-w-5xl text-center my-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.6)]">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#ff0099] bg-clip-text text-transparent">
          Soluciones SEO para impulsar tu negocio en Pasto
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Implementa estrategias locales, optimización on-page y campañas de link building que han demostrado aumentar el tráfico orgánico en hasta un 55% en el mercado pastuso.
          <span className="italic"> (Fuente: Observatorio de Marketing Digital Pasto)</span>
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

export default ServiciosPasto;
