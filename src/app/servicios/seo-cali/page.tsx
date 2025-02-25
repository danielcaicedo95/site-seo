// app/servicios/seo-cali/page.tsx

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
  title: "Consultoría SEO en Cali - Crecimiento digital | Daniel C.",
  description:
    "Descubre cómo potenciar tu negocio en Cali con estrategias SEO locales. Consultoría SEO, optimización on-page, link building y más para transformar tu presencia digital.",
  keywords: ["SEO Cali", "consultoría SEO Cali", "SEO local Cali", "servicios SEO Cali"],
  alternates: {
    canonical: "https://daniseo.site/servicios/seo-cali",
  },
};

const presentacionData = {
    imageSrc: "/images/foto.png",
    title: "Estrategias SEO Profesionales. Enfoque en Usuarios y Mejores Prácticas EEAT",
    text: "Soy Daniel Caicedo, experto en SEO con más de 6 años de experiencia ayudando a negocios a posicionarse en motores de búsqueda. Mi enfoque combina tácticas actualizadas a los nuevos algoritmos con las mejores prácticas de EEAT (Experiencia, Conocimiento, Autoridad y Confianza), resolviendo las intenciones de búsqueda de los usuarios para generar resultados sostenibles.",
  };

const ServiciosCali = () => {
  const portadaData = {
    imagen: "/images/portada-cali.jpg",
    titulo: "Servicios SEO en Cali: Estrategia de Crecimiento Orgánico",
    descripcion: "Impulsa tu negocio en Cali con estrategias digitales personalizadas",
  };

  const faqs = [
    {
      question: "¿Cómo contratar un experto en SEO en Cali y garantizar resultados?",
      answer:
        "En Cali es fundamental revisar el portafolio, casos de éxito y testimonios locales. Un consultor SEO debe utilizar herramientas de análisis regional y estrategias adaptadas al mercado caleño para asegurar resultados medibles.",
    },
    {
      question: "¿Dónde encontrar un especialista en SEO en Cali?",
      answer:
        "Puedes encontrar profesionales en SEO a través de redes locales, Google My Business y plataformas especializadas. Una consulta personalizada te ayudará a evaluar tus necesidades en el contexto caleño.",
    },
    {
      question: "¿Cuánto cuesta contratar un consultor SEO en Cali?",
      answer:
        "En Cali, los precios para proyectos pequeños oscilan entre 700 mil y 1.5 millones COP mensuales, según la competencia y el alcance de la estrategia requerida.",
    },
    {
      question: "¿Qué estrategias de SEO se adaptan mejor al mercado caleño?",
      answer:
        "El SEO local es clave. Se recomienda optimizar la ficha de Google My Business, generar reseñas locales, usar keywords geolocalizadas y construir enlaces con sitios relevantes en Cali.",
    },
    {
      question: "¿En cuánto tiempo se ven resultados del SEO local en Cali?",
      answer:
        "Los primeros resultados pueden notarse en 1 a 3 meses, pero para consolidar una posición sólida se recomienda mantener la estrategia durante 6 a 12 meses de forma continua.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Daniel Caicedo - Consultoría SEO en Cali",
    url: "https://daniseo.site/servicios/seo-cali",
    telephone: "+573008061344", // Actualiza con tu número real
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Ejemplo #123",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      postalCode: "760001",
      addressCountry: "CO",
    },
    areaServed: "Cali",
    description:
      "Consultoría SEO especializada en el mercado caleño. Estrategias de SEO local, optimización on-page, link building y análisis de resultados para impulsar el crecimiento de tu negocio en Cali.",
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
          ¿Problemas para hacer crecer tu web en Cali?
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Según un estudio de la Cámara de Comercio de Cali, el 68% de las empresas locales
          enfrentan desafíos para aumentar su tráfico web y convertir visitantes en clientes.
          
        </p>
      </section>

      {/* Sección: Soluciones SEO */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-8 px-4 rounded-lg mx-auto max-w-5xl text-center my-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.6)]">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#ff0099] bg-clip-text text-transparent">
          Soluciones SEO para impulsar tu negocio en Cali
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Implementa estrategias locales, optimización on-page y campañas de link building que han
          demostrado aumentar el tráfico orgánico en hasta un 55% en el mercado caleño.
          <span className="italic"> (Fuente: Observatorio de Marketing Digital Cali)</span>
        </p>
      </section>

      <Presentacion imageSrc={presentacionData.imageSrc} title={presentacionData.title} text={presentacionData.text} />

      <ServiciosCompletos />
      <BeneficiosSeo />
      <FlujoTrabajo />
      <FAQ faqs={faqs} />
      <Contacto />
      <Footer />
    </Fragment>
  );
};

export default ServiciosCali;
