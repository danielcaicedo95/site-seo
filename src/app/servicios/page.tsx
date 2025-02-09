"use client";

import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import ServiciosCompletos from "@/app/components/serviciosCompletos";
import BeneficiosSeo from "@/app/components/beneficiosSeo";
import FlujoTrabajo from "@/app/components/flujoTrabajo";
import FAQ from "../components/faqs";



import Footer from "@/app/components/footer";

const Servicios = () => {
  // Datos para la portada de la página de servicios
  const portadaData = {
    imagen: "/images/portada2.jpg", // Imagen destacada para esta página
    titulo: "Nuestros Servicios SEO",
    descripcion:
      "Descubre nuestras estrategias de posicionamiento web para llevar tu negocio al siguiente nivel.",
  };

  const faqs = [
    {
      question: "¿Qué es el SEO y por qué es importante?",
      answer:
        "El SEO (Search Engine Optimization) es el proceso de optimizar tu sitio web para mejorar su visibilidad en los motores de búsqueda. Es importante porque ayuda a atraer tráfico orgánico y aumentar la relevancia de tu sitio.",
    },
    {
      question: "¿Cómo puedo mejorar el rendimiento de mi sitio web?",
      answer:
        "Puedes mejorar el rendimiento optimizando imágenes, usando caché, minimizando el código CSS y JavaScript, y utilizando un CDN para servir contenido estático.",
    },
    {
      question: "¿Qué son los Core Web Vitals?",
      answer:
        "Los Core Web Vitals son métricas clave que miden la experiencia del usuario en términos de carga, interactividad y estabilidad visual. Incluyen LCP (Largest Contentful Paint), FID (First Input Delay) y CLS (Cumulative Layout Shift).",
    },
    {
      question: "¿Cómo afecta el SEO al tráfico de mi sitio?",
      answer:
        "Un buen SEO aumenta la visibilidad de tu sitio en los resultados de búsqueda, lo que genera más tráfico orgánico y mejora la tasa de conversión.",
    },
  ];


  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Portada */}
      <Portada
        imagen={portadaData.imagen}
        titulo={portadaData.titulo}
        descripcion={portadaData.descripcion}
      />

      {/* Sección de Servicios */}
    
      <ServiciosCompletos />

      <BeneficiosSeo/>

      <FlujoTrabajo/>

      <FAQ faqs={faqs} />

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Servicios;
