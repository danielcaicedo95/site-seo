import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import BeneficiosSeo from "@/app/components/beneficiosSeo";
import FlujoTrabajo from "@/app/components/flujoTrabajo";
import FAQ from "@/app/components/faqs";
import { Metadata } from 'next';
import Footer from "@/app/components/footer";
import Contacto from "@/app/components/contactForm";
import ServiciosOnPage from "@/app/components/serviciosOnPage";
import BeneficiosTodo from "@/app/components/BeneficiosTodo";
import Cms from "@/app/components/cms";



interface Beneficio {
    titulo: string;
    descripcion: string;
    imagen: string;
    posicionImagen: "left" | "right"; // Solo acepta "left" o "right"
  }

  export const metadata: Metadata = {
    title: 'SEO On Page y SEO On Site | Daniel C.',
    description:
      '¿Buscas optimizar tu sitio web con SEO On Page y SEO On Site? Somos especialistas en mejorar la arquitectura, contenido y rendimiento de tu web para aumentar su visibilidad en buscadores. Descubre nuestras auditorías y estrategias avanzadas para posicionarte mejor en Google.',
    keywords: [
      'SEO On Page',
      'SEO On Site',
      'optimización SEO On Page',
      'mejorar SEO en página',
      'estructura web SEO',
      'SEO para contenido',
      'estrategia SEO On Page',
      'posicionamiento SEO en página',
      'SEO técnico On Page',
      'SEO para rendimiento web',
      'optimización de imágenes SEO',
      'mejora de velocidad web',
      'SEO para WordPress',
      'SEO para ecommerce',
      'SEO para blogs',
      'SEO local On Page',
      'SEO para UX y experiencia de usuario',
      'SEO para estructura de enlaces',
      'mejorar tiempo de carga web',
      'optimización de encabezados H1, H2',
      'implementación de schema markup',
      'mejora de CTR en Google',
      'auditoría SEO On Page',
      'mejorar posicionamiento con SEO On Page',
      'optimización de meta etiquetas',
      'SEO técnico en sitio',
      'SEO para sitios web corporativos',
      'mejorar indexación en Google',
      'optimización de URL SEO-friendly',
      'SEO para mejorar la autoridad de página'
    ],
    alternates: {
      canonical: 'https://daniseo.site/servicios/seo-on-page',
    },
  };

const Servicios = () => {
  // Datos para la portada de la página de servicios
  const portadaData = {
    imagen: "/images/seo-onpage-colombia.jpg",
    titulo: "Servicios de SEO On Page",
    descripcion:
      "Optimiza cada elemento de tu sitio web: mejora el contenido, las meta etiquetas, URLs, imágenes y la experiencia de usuario para aumentar la visibilidad en buscadores.",
  };  

  const beneficiosData: Beneficio[] = [
    {
      titulo: "Investigación de Palabras Clave: La base de una estrategia efectiva",
      descripcion:
        "Realiza un análisis exhaustivo de palabras clave y de la competencia para identificar oportunidades, tendencias y nichos relevantes. Esta investigación es fundamental para alinear el contenido y la estructura SEO On Page de tu sitio.",
      imagen: "/images/beneficiostodo/seo-onpage/keyword-research.png",
      posicionImagen: "left",
    },
    {
      titulo: "Optimización de Contenido: Actualización y Relevancia",
      descripcion:
        "Actualiza y optimiza el contenido de tu sitio mejorando la metadata, los párrafos, encabezados y datos estructurados. Asegúrate de que las URLs sean SEO-friendly y que cada página responda a las búsquedas de tu audiencia.",
      imagen: "/images/beneficiostodo/seo-onpage/contenido-integral.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "Enlazado Interno: Estructura que Potencia la Autoridad",
      descripcion:
        "Una estrategia sólida de enlaces internos facilita la navegación, distribuye la autoridad de página y mejora la indexación, permitiendo que Google entienda la relevancia y la jerarquía de tu contenido.",
      imagen: "/images/beneficiostodo/seo-onpage/enlazado-interno.png",
      posicionImagen: "left",
    },
    {
      titulo: "Optimización de Imágenes: Calidad y Rendimiento",
      descripcion:
        "Reduce el tamaño de las imágenes, utiliza formatos modernos y añade atributos ALT descriptivos. Esto mejora la velocidad de carga y la experiencia del usuario, aspectos cruciales para el SEO On Page.",
      imagen: "/images/beneficiostodo/seo-onpage/imagenes-multimedia.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "Optimización de Interacción: UX y Engagement",
      descripcion:
        "Mejora la interacción del usuario con un diseño responsive, navegación intuitiva y elementos interactivos. Reducir la tasa de rebote y potenciar el engagement son factores clave para mejorar tu posicionamiento en buscadores.",
      imagen: "/images/beneficiostodo/seo-onpage/interaccion.jpg",
      posicionImagen: "left",
    },
  ];
  
  

  const faqs = [
    {
      question: "¿Qué es el SEO On Page?",
      answer:
        "El SEO On Page se refiere a la optimización de elementos internos de un sitio web—como el contenido, las meta etiquetas, la estructura de URL y la experiencia de usuario—para mejorar su posicionamiento en los motores de búsqueda.",
    },
    {
      question: "¿Cuáles son los elementos clave del SEO On Page?",
      answer:
        "Los elementos clave incluyen: meta títulos y descripciones, encabezados (H1, H2, etc.), contenido optimizado, URLs amigables, imágenes con etiquetas alt, enlaces internos y una estructura de navegación clara.",
    },
    {
      question: "¿Cómo optimizar las meta etiquetas para SEO On Page?",
      answer:
        "Para optimizar las meta etiquetas: 1) Utiliza palabras clave relevantes en el título y la descripción. 2) Mantén la longitud adecuada para evitar cortes. 3) Asegúrate de que cada página tenga etiquetas únicas y descriptivas.",
    },
    {
      question: "¿Cómo mejorar la estructura de URLs para SEO On Page?",
      answer:
        "Utiliza URLs cortas, descriptivas y amigables para los usuarios. Incluye palabras clave, elimina parámetros innecesarios y evita números o caracteres especiales para facilitar la indexación y mejorar la experiencia de usuario.",
    },
    {
      question: "¿Qué importancia tiene el contenido en el SEO On Page?",
      answer:
        "El contenido de calidad es fundamental: debe ser relevante, original y estar optimizado de forma natural con palabras clave. Esto no solo atrae tráfico, sino que también mejora la autoridad y el posicionamiento en buscadores.",
    },
    {
      question: "¿Cómo optimizar las imágenes para SEO On Page?",
      answer:
        "Optimiza las imágenes reduciendo su tamaño, utilizando formatos modernos como WebP, y agregando etiquetas alt descriptivas que incluyan palabras clave. Esto mejora tanto la velocidad de carga como la accesibilidad.",
    },
    {
      question: "¿Qué rol juega la experiencia del usuario (UX) en el SEO On Page?",
      answer:
        "Una experiencia de usuario óptima—con diseño responsive, tiempos de carga rápidos y navegación intuitiva—reduce la tasa de rebote y mejora la interacción, factores que influyen positivamente en el posicionamiento.",
    },
    {
      question: "¿Cómo realizar una auditoría de SEO On Page?",
      answer:
        "Para auditar el SEO On Page: revisa la optimización de meta títulos, descripciones, estructura de URLs, calidad y relevancia del contenido, optimización de imágenes y enlaces internos, y analiza la velocidad de carga utilizando herramientas como Google Search Console y Lighthouse.",
    },
    {
      question: "¿Cuál es la diferencia entre SEO On Page y SEO Off Page?",
      answer:
        "El SEO On Page se centra en la optimización interna de la web, mientras que el SEO Off Page se enfoca en factores externos, como la obtención de backlinks y menciones en otras páginas, para mejorar la autoridad del sitio.",
    },
    {
      question: "¿Cómo afecta la velocidad de carga al SEO On Page?",
      answer:
        "Una velocidad de carga rápida mejora la experiencia del usuario y es un factor de ranking en Google. Estrategias como la optimización de recursos, uso de CDN y compresión de archivos son esenciales para reducir los tiempos de carga.",
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
      <ServiciosOnPage />

      <BeneficiosTodo
  beneficios={beneficiosData}
  tituloSeccion="¿Por qué el SEO On Page es esencial para tu sitio web?"
  descripcionSeccion="El SEO On Page optimiza cada aspecto de tu sitio, desde el contenido y las meta etiquetas hasta la estructura de URL y la experiencia del usuario, mejorando la visibilidad en los buscadores. Descubre sus beneficios clave:"
/>


      <Cms/>

      <FlujoTrabajo />

      <FAQ faqs={faqs} />

      <Contacto/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Servicios;
