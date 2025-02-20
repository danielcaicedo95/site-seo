
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
import FAQ from "./components/faqs";
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
      imagen: "/images/servicios-home/seo-tecnico.jpg",
      posicionImagen: "left",
    },
    {
      titulo: "SEO On Page",
      descripcion: "Mejoramos la relevancia de tus páginas mediante optimización de contenido y etiquetas meta.",
      enlace: "/seo-on-page",
      imagen: "/images/servicios-home/seo-onpage.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "SEO Off Page",
      descripcion: "Aumentamos la autoridad de tu sitio mediante construcción de enlaces y estrategias de contenido.",
      enlace: "/seo-off-page",
      imagen: "/images/servicios-home/seo-offpage.jpg",
      posicionImagen: "left",
    },
    {
      titulo: "SEO IA",
      descripcion: "Impulsamos tu estrategia SEO con inteligencia artificial para análisis avanzado y automatización.",
      enlace: "/seo-ia",
      imagen: "/images/servicios-home/seo-ia.jpg",
      posicionImagen: "right",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo mejorar el SEO en 2025?",
      answer: "Para destacar en Google este año, es fundamental adaptar el SEO a SGE (Search Generative Experience) y EEAT (Experiencia, Pericia, Autoridad y Confianza). Implementa estrategias basadas en contenido optimizado para búsquedas conversacionales, mejora la velocidad web y utiliza datos estructurados para mejorar la visibilidad en los resultados enriquecidos."
    },
    {
      question: "¿Qué es EEAT y cómo afecta al posicionamiento web?",
      answer: "EEAT evalúa la experiencia, especialización, autoridad y confianza de un sitio web. Para mejorar tu EEAT, es clave contar con contenido escrito por expertos, incluir fuentes verificables, generar backlinks de calidad y optimizar la identidad digital mediante reseñas y menciones en sitios de autoridad."
    },
    {
      question: "¿Cómo posicionar un sitio web en varios países con SEO internacional?",
      answer: "El SEO internacional requiere una correcta implementación de etiquetas hreflang, optimización de contenido multilingüe y estrategias de link building adaptadas a cada mercado. Además, es clave usar dominios geolocalizados o subdirectorios específicos para cada región para mejorar la relevancia y la experiencia del usuario."
    },
    {
      question: "¿Cuáles son las mejores herramientas SEO para mejorar el posicionamiento?",
      answer: "Algunas herramientas esenciales son Ahrefs y Semrush para análisis de palabras clave y backlinks, Screaming Frog y Google Search Console para auditoría técnica, y SurferSEO para optimización de contenido. Usar estas herramientas te permitirá mejorar la indexación y la estrategia de SEO on-page y off-page."
    },
    {
      question: "¿Cómo adaptar mi web a la SGE (Search Generative Experience) de Google?",
      answer: "Para optimizar tu web para SGE, crea contenido basado en preguntas y respuestas, implementa datos estructurados, mejora la experiencia de usuario (UX) y usa técnicas de SEO semántico. La SGE favorece respuestas claras y bien estructuradas, por lo que es clave ofrecer información relevante y confiable."
    },
    {
      question: "¿Cómo mejorar el SEO local y posicionar en Google Maps?",
      answer: "Optimiza tu ficha de Google My Business con información detallada, publica contenido geolocalizado, fomenta las reseñas de clientes y usa datos estructurados LocalBusiness. Además, genera backlinks locales y menciones en directorios para aumentar la autoridad de tu negocio en tu área."
    },
    {
      question: "¿Cuánto tiempo tarda el SEO en mostrar resultados?",
      answer: "El SEO es una estrategia a medio-largo plazo. Factores como la competencia, la autoridad del dominio, la optimización técnica y la calidad del contenido influyen en los tiempos. Generalmente, se pueden ver mejoras en 3 a 6 meses, pero los resultados más sólidos llegan después del primer año."
    },
    {
      question: "¿Cómo automatizar procesos SEO para mejorar la eficiencia?",
      answer: "La automatización en SEO permite escalar estrategias mediante inteligencia artificial y herramientas como Zapier, Screaming Frog y Google Looker Studio. Puedes automatizar auditorías, generación de metadatos, seguimiento de posiciones y link building, mejorando la eficiencia y el tiempo de respuesta."
    },
    {
      question: "¿Cuáles son las diferencias entre SEO para ecommerce y SEO para servicios?",
      answer: "El SEO para ecommerce se centra en optimizar fichas de productos, datos estructurados y experiencia de compra. El SEO para servicios prioriza la generación de leads, contenido informativo y SEO local. Ambos requieren estrategias de contenido y backlinks adaptadas a su audiencia."
    },
    {
      question: "¿Cómo estructurar un sitio web para un mejor posicionamiento SEO?",
      answer: "Una arquitectura web optimizada mejora la rastreabilidad y experiencia del usuario. Usa URLs limpias, menús bien jerarquizados, enlaces internos estratégicos y datos estructurados. Además, optimiza la velocidad de carga y aplica Core Web Vitals para garantizar un rendimiento óptimo."
    }
  ];
  

  return (
    <div>
      <Navbar />
      <Portada imagen={portadaData.imagen} titulo={portadaData.titulo} descripcion={portadaData.descripcion} />
      
      <Presentacion imageSrc={presentacionData.imageSrc} title={presentacionData.title} text={presentacionData.text} />
      <Carrusel />
      {/* Sección de Servicios SEO con imágenes */}
      <ServiciosSeo servicios={serviciosData} />

      <Cms />
      <Logros />
      <Reseñas />
      <FAQ faqs={faqs} />
      <Contacto/>
      
      <Footer />
    </div>
  );
};

export default Home;
