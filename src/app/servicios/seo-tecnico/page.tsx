import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import BeneficiosSeo from "@/app/components/beneficiosSeo";
import FlujoTrabajo from "@/app/components/flujoTrabajo";
import FAQ from "@/app/components/faqs";
import { Metadata } from 'next';
import Footer from "@/app/components/footer";
import Contacto from "@/app/components/contactForm";
import ServiciosTecnicos from "@/app/components/serviciosTecnicos";
import BeneficiosTodo from "@/app/components/BeneficiosTodo";
import Cms from "@/app/components/cms";


interface Beneficio {
    titulo: string;
    descripcion: string;
    imagen: string;
    posicionImagen: "left" | "right"; // Solo acepta "left" o "right"
  }

export const metadata: Metadata = {
  title: 'Especialista SEO Tecnico  | Daniel C.	',
  description:
    '¿Necesitas un especialista SEO técnico o un consultor SEO técnico? Ofrecemos estrategias y técnicas de posicionamiento avanzadas para mejorar tu visibilidad en buscadores. Realizamos auditorías SEO técnico completas para optimizar tu sitio web. ¡Potencia tu presencia en línea con nuestros servicios de SEO técnico!',
  keywords: [ 'servicios seo', 
    'Next.js', 
    'SEO técnico', 
    'seo colombia', 
    'seo ecuador', 
    'seo latinoamerica', 
    'seo cali', 
    'seo bogota', 
    'seo medellin', 
    'optimización seo', 
    'auditoria seo', 
    'mejorar posicionamiento web', 
    'seo para empresas', 
    'seo técnico para pymes', 
    'herramientas seo', 
    'seo local colombia', 
    'seo local ecuador', 
    'seo para latinoamérica', 
    'consultor seo colombia', 
    'consultor seo ecuador', 
    'seo para ecommerce', 
    'seo para startups', 
    'seo técnico avanzado', 
    'seo para desarrolladores', 
    'seo y next.js', 
    'posicionamiento web en google', 
    'seo para sitios web', 
    'seo técnico en bogotá', 
    'seo técnico en medellín', 
    'seo técnico en cali', 
    'seo para páginas web', 
    'seo técnico para latinoamérica'],
  alternates: {
    canonical: 'https://daniseo.site/servicios/seo-tecnico',
  },
};

const Servicios = () => {
  // Datos para la portada de la página de servicios
  const portadaData = {
    imagen: "/images/seo-tecnico-colombia.jpg",
    titulo: "Servicios de SEO Tenico",
    descripcion:
      "Mejora la calidad técnica de tu sitio web, ofrece una experiencia de usuario excepcional y garantiza una velocidad de carga óptima",
  };

  const beneficiosData: Beneficio[] = [
    {
      titulo: "Velocidad de carga: La primera impresión cuenta",
      descripcion:
        "Un sitio rápido no solo mejora el posicionamiento en Google, sino que también aumenta la satisfacción del usuario. Optimizamos tu sitio para que cargue en menos de 2 segundos, mejorando métricas clave como LCP (Largest Contentful Paint) y FID (First Input Delay).",
      imagen: "/images/beneficiostodo/seo-tecnico/velocidad.jpg",
      posicionImagen: "left",
    },
    {
      titulo: "Rastreabilidad: Que Google te encuentre",
      descripcion:
        "Si Google no puede rastrear tu sitio, no existes en los resultados de búsqueda. Optimizamos el archivo robots.txt, el sitemap.xml y la estructura de enlaces internos para que Google indexe todas tus páginas importantes.",
      imagen: "/images/beneficiostodo/seo-tecnico/rastreo.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "Indexabilidad: Asegura que tu contenido se muestre",
      descripcion:
        "¿Sabías que muchas páginas no aparecen en Google por errores técnicos? Corregimos problemas como etiquetas 'noindex', contenido duplicado y redirecciones rotas para que tu sitio sea completamente indexable.",
      imagen: "/images/beneficiostodo/seo-tecnico/indexacion.jpg",
      posicionImagen: "left",
    },
    {
      titulo: "Experiencia de usuario (UX): Más que diseño bonito",
      descripcion:
        "Un sitio web no solo debe verse bien, sino funcionar bien. Optimizamos la navegación, la estructura de URLs y la usabilidad móvil para que los usuarios encuentren lo que buscan rápidamente.",
      imagen: "/images/beneficiostodo/seo-tecnico/ux.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "Datos estructurados: Destaca en los resultados de búsqueda",
      descripcion:
        "Con schema markup y datos estructurados, tu sitio puede aparecer con rich snippets (resultados enriquecidos) en Google, como reseñas, preguntas frecuentes y más. Esto aumenta el CTR (Click-Through Rate) y la visibilidad.",
      imagen: "/images/beneficiostodo/seo-tecnico/schema.jpg",
      posicionImagen: "left",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo mejorar la velocidad de carga de un sitio web para SEO?",
      answer: "Para optimizar la velocidad: 1) Implementa lazy loading en imágenes y videos. 2) Usa un CDN (Content Delivery Network) y caching avanzado. 3) Optimiza Core Web Vitals (LCP, FID, CLS). 4) Minimiza y comprime archivos CSS y JavaScript. 5) Usa formatos de imagen modernos como WebP o AVIF. 6) Configura compresión Brotli o GZIP."
    },
    {
      question: "¿Qué errores de rastreo afectan el SEO técnico de un sitio web?",
      answer: "Los errores más comunes son: 1) Códigos de estado HTTP 4xx y 5xx. 2) Bloqueos en el archivo robots.txt. 3) URLs no canonizadas. 4) Contenido duplicado. 5) Redirecciones en cadena. 6) Tiempos de respuesta lentos. 7) JavaScript bloqueado para los rastreadores de Google."
    },
    {
      question: "¿Cómo optimizar el archivo robots.txt para mejorar el SEO técnico?",
      answer: "Para optimizar robots.txt: 1) Permite el acceso a contenido importante. 2) Bloquea solo recursos no esenciales. 3) Especifica la ubicación del sitemap.xml. 4) Evita bloquear archivos CSS y JavaScript. 5) Usa directivas modernas como 'max-snippet'. 6) Valida el archivo con Google Search Console."
    },
    {
      question: "¿Qué es el crawling budget y cómo optimizarlo para SEO?",
      answer: "El crawling budget es el número de páginas que Google rastrea en tu sitio. Para optimizarlo: 1) Elimina contenido duplicado. 2) Mejora la arquitectura de enlaces internos. 3) Reduce los códigos de error (4xx, 5xx). 4) Prioriza URLs importantes. 5) Usa etiquetas canónicas correctamente. 6) Optimiza la velocidad de respuesta del servidor. 7) Actualiza el sitemap dinámicamente."
    },
    {
      question: "¿Cómo solucionar problemas de indexación en Google?",
      answer: "Pasos para corregir problemas de indexación: 1) Verifica bloqueos en robots.txt. 2) Corrige meta etiquetas robots. 3) Elimina etiquetas 'noindex' accidentales. 4) Resuelve problemas de contenido duplicado. 5) Soluciona errores de rastreo. 6) Asegura que el JavaScript se renderice correctamente. 7) Usa la herramienta de inspección de URLs en Google Search Console."
    },
    {
      question: "¿Qué configuración técnica necesita un sitemap.xml para SEO?",
      answer: "Mejores prácticas para sitemap.xml: 1) Incluye solo URLs canónicas. 2) Prioriza contenido clave. 3) Actualiza el sitemap dinámicamente. 4) Divide el sitemap en múltiples archivos si es necesario. 5) Usa hreflang para sitios internacionales. 6) Incluye imágenes y videos relevantes. 7) Envía el sitemap mediante Google Search Console o cabeceras HTTP."
    },
    {
      question: "¿Cómo optimizar el rendimiento de JavaScript para SEO técnico?",
      answer: "Técnicas clave: 1) Implementa Server-Side Rendering (SSR) o Static Site Generation (SSG). 2) Usa lazy loading para cargar scripts. 3) Minimiza y comprime el código JavaScript. 4) Evita recursos bloqueantes (render-blocking). 5) Pre-carga recursos críticos. 6) Usa dynamic imports para cargar código bajo demanda. 7) Monitoriza el rendimiento con herramientas como Lighthouse."
    },
    {
      question: "¿Qué errores técnicos afectan el mobile-first indexing?",
      answer: "Problemas comunes: 1) Contenido diferente en móvil y escritorio. 2) Diseño no responsive. 3) Elementos táctiles demasiado pequeños. 4) Interstitials molestos en móvil. 5) Carga lenta en conexiones 3G. 6) Bloqueo de recursos CSS y JavaScript. 7) Metatags viewport incorrectos o ausentes."
    },
    {
      question: "¿Cómo realizar una migración técnica de sitio sin perder posicionamiento SEO?",
      answer: "Checklist para migraciones: 1) Configura redirecciones 301 para todas las URLs. 2) Actualiza el sitemap.xml. 3) Mantén la estructura de URLs. 4) Conserva meta etiquetas y títulos. 5) Monitorea la indexación en Google Search Console. 6) Actualiza datos estructurados y schema markup. 7) Configura redirecciones server-side para evitar cadenas largas."
    },
    {
      question: "¿Qué ventajas tiene HTTPS para el SEO técnico?",
      answer: "Beneficios de HTTPS: 1) Mejora la seguridad y confianza del sitio. 2) Es requisito para usar HTTP/2. 3) Mejora Core Web Vitals. 4) Necesario para Progressive Web Apps (PWAs). 5) Impacto positivo en rankings de Google. 6) Permite el uso de nuevas APIs web. 7) Evita advertencias de 'mixed content' en el navegador."
    }
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
      <ServiciosTecnicos />

      <BeneficiosTodo
      beneficios={beneficiosData}
      tituloSeccion="¿Por qué el SEO técnico es esencial para tu sitio web?"
      descripcionSeccion="El SEO técnico no solo mejora tu posicionamiento en Google, sino que también optimiza la experiencia del usuario y la eficiencia de tu sitio. Descubre sus beneficios clave:"

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
