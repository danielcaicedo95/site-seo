
import "./styles/global.css";

import { Metadata } from 'next';

import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import Carrusel from "@/app/components/carrusel";
import Presentacion from "@/app/components/presentacion";
import ServiciosSeo from "@/app/components/servicios-seo";
import Cms from "@/app/components/cms";
import Logros from "@/app/components/logros";
import Reseñas from "@/app/components/reseñas"; 
import Footer from "@/app/components/footer"; 
import Contacto from "./components/contactForm";

// 🔹 Definir la interfaz aquí directamente para evitar errores
interface Servicio {
  titulo: string;
  descripcion: string;
  enlace: string;
  imagen: string;
  posicionImagen: "left" | "right";
}

export const metadata: Metadata = {
  title: 'Consultor SEO - Técnico, On Page, Off Page e IA | Daniel C', // Título específico
  description: 'Especialista SEO en Colombia con más de 6 años de experiencia usando diferentes CMS, como WordPress, Magento, Shopify y Drupal. Experto en SEO para eCommerce y aumento de tráfico orgánico. Haz clic para conocerme.', // Descripción específica
  keywords: ['inicio', 'Next.js', 'SEO'], // Palabras clave específicas
  alternates: {
    canonical: 'https://home.com', // URL canónica específica
  },
};

const Home: React.FC = () => {
  const portadaData = {
    imagen: "/images/portada1.jpg",
    titulo: "Experto en SEO, Estrategias SGI, Soluciones IA y Crecimiento Digital",
    descripcion: "¿Sabías que el 93% de las experiencias en línea comienzan con un motor de búsqueda?",
  };

  const presentacionData = {
    imageSrc: "/images/foto.png",
    title: "Estrategias SEO Profesionales. Enfoque en Usuarios y Mejores Prácticas EEAT",
    text: "Soy Daniel Caicedo, experto en SEO con más de 6 años de experiencia ayudando a negocios a posicionarse en motores de búsqueda. Mi enfoque combina tácticas actualizadas a los nuevos algoritmos con las mejores prácticas de EEAT (Experiencia, Conocimiento, Autoridad y Confianza), resolviendo las intenciones de búsqueda de los usuarios para generar resultados sostenibles.",
  };

  const serviciosData: Servicio[] = [
    {
      titulo: "SEO Técnico",
      descripcion: "Optimizamos la estructura y el rendimiento de tu sitio web para un mejor rastreo por motores de búsqueda.",
      enlace: "/seo-tecnico",
      imagen: "/images/seo-tecnico.jpg",
      posicionImagen: "left",
    },
    {
      titulo: "SEO On Page",
      descripcion: "Mejoramos la relevancia de tus páginas mediante optimización de contenido y etiquetas meta.",
      enlace: "/seo-on-page",
      imagen: "/images/seo-onpage.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "SEO Off Page",
      descripcion: "Aumentamos la autoridad de tu sitio mediante construcción de enlaces y estrategias de contenido.",
      enlace: "/seo-off-page",
      imagen: "/images/seo-offpage.jpg",
      posicionImagen: "left",
    },
    {
      titulo: "SEO IA",
      descripcion: "Impulsamos tu estrategia SEO con inteligencia artificial para análisis avanzado y automatización.",
      enlace: "/seo-ia",
      imagen: "/images/seo-ia.jpg",
      posicionImagen: "right",
    },
  ];

  return (
    <div>
      <Navbar />
      <Portada imagen={portadaData.imagen} titulo={portadaData.titulo} descripcion={portadaData.descripcion} />
      <Carrusel />
      <Presentacion imageSrc={presentacionData.imageSrc} title={presentacionData.title} text={presentacionData.text} />
      
      {/* Sección de Servicios SEO con imágenes */}
      <ServiciosSeo servicios={serviciosData} />

      <Cms />
      <Logros />
      <Reseñas />
      <Contacto/>
      
      <Footer />
    </div>
  );
};

export default Home;
