"use client";

import "./styles/global.css";
import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import Carrusel from "@/app/components/carrusel";
import Presentacion from "@/app/components/presentacion";
import ServiciosSeo from "@/app/components/servicios-seo";
import Cms from "@/app/components/cms";
import Logros from "@/app/components/logros";
import Reseñas from "@/app/components/reseñas"; 
import Footer from "@/app/components/footer"; 

// 🔹 Definir la interfaz aquí directamente para evitar errores
interface Servicio {
  titulo: string;
  descripcion: string;
  enlace: string;
  imagen: string;
  posicionImagen: "left" | "right";
}

const Home: React.FC = () => {
  const portadaData = {
    imagen: "/images/portada1.jpg",
    titulo: "Bienvenidos a Nuestro Servicio SEO",
    descripcion: "Ofrecemos soluciones personalizadas de SEO para mejorar la visibilidad de tu sitio web.",
  };

  const presentacionData = {
    imageSrc: "/images/logo-presentacion.png",
    title: "¿Por qué elegirnos?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget nulla ut odio faucibus interdum. Curabitur tristique libero vel metus tincidunt fringilla. Proin euismod consectetur mi at gravida. Suspendisse potenti. Fusce sit amet lacus eget justo venenatis pellentesque vel sit amet nisi.",
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
      <Footer />
    </div>
  );
};

export default Home;
