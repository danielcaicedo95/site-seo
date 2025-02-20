import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import ServiciosCompletos from "@/app/components/serviciosCompletos";
import BeneficiosSeo from "@/app/components/beneficiosSeo";
import FlujoTrabajo from "@/app/components/flujoTrabajo";
import FAQ from "../components/faqs";
import { Metadata } from 'next';
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: 'Consultoria SEO - Posiciona tu web rapidamente | Daniel C.	',
  description:
    'Potencia tu negocio con estrategias de posicionamiento web efectivas. Ofrezco consultoría SEO en Colombia, optimización On Site y Off Page. Backlinking, auditoría SEO y redacción especializada. Implementa una estrategia SEO web que te ayude a posicionar tu página rápidamente con las mejores prácticas',
  keywords: ['inicio', 'Next.js', 'SEO'],
  alternates: {
    canonical: 'https://home.com',
  },
};

const Servicios = () => {
  // Datos para la portada de la página de servicios
  const portadaData = {
    imagen: "/images/portada2.jpg",
    titulo: "Servicios SEO: Estrategia de Crecimiento Organico	",
    descripcion:
      "Agente de crecimiento, mas que una agencia	",
  };

  const faqs = [
    {
      question: "¿Cómo contratar un experto en SEO y garantizar resultados?",
      answer: "Para contratar un SEO con experiencia, revisa su historial de proyectos, testimonios y casos de éxito. Un consultor SEO debe ofrecer estrategias basadas en datos, usar herramientas avanzadas como Google Search Console, Ahrefs o Screaming Frog y aplicar metodologías como SEO técnico, link building estratégico y automatización SEO. Te recomiendo agendar una consulta conmigo para evaluar tu caso."
    },
    {
      question: "¿Dónde contratar un especialista en SEO con experiencia comprobada?",
      answer: "Puedes contratar un SEO experto a través de LinkedIn, Google Partners, agencias especializadas o por recomendación de clientes satisfechos. Asegúrate de que maneje estrategias actualizadas alineadas con Google SGE, SEO estratégico y EEAT. Si necesitas un especialista con experiencia, puedes agendar una reunión conmigo."
    },
    {
      question: "¿Cuánto cobra un consultor SEO y qué factores influyen en el precio?",
      answer: "El costo de un consultor SEO varía según el tamaño del proyecto, el nivel de competencia, la autoridad del dominio y los objetivos de posicionamiento. En proyectos pequeños, las tarifas oscilan entre 700 mil y 1.5 millones COP al mes, mientras que estrategias avanzadas pueden superar los 3 millones COP. Lo ideal es realizar un análisis previo y definir una estrategia personalizada."
    },
    {
      question: "¿Qué hace un experto en SEO para mejorar el posicionamiento web?",
      answer: "Un especialista en SEO optimiza un sitio web a nivel técnico, de contenido y autoridad para mejorar su posicionamiento en Google, Bing y otros motores de búsqueda. Aplica estrategias como SEO técnico, corrigiendo errores de indexación y optimizando Core Web Vitals; SEO de contenidos, mediante una estrategia de palabras clave, contenido optimizado para EEAT y marketing de contenidos; SEO off-page, con link building estratégico, guest posting y relaciones públicas digitales; y Automatización SEO, utilizando IA, scraping SEO y monitorización de rankings en tiempo real."
    },
    {
      question: "¿Cómo contratar un consultor SEO en Colombia con estrategias avanzadas?",
      answer: "Para encontrar un consultor SEO en Colombia con enfoque en SEO estratégico y EEAT, busca profesionales con experiencia demostrada en SEO técnico, marketing de contenidos y estrategias de autoridad de dominio. Puedes buscar en plataformas como LinkedIn, Google Business o agencias especializadas, o bien, contactarme directamente para asesorarte."
    },
    {
      question: "¿En cuánto tiempo se ven los resultados del SEO y qué factores influyen?",
      answer: "Los primeros avances en SEO pueden verse en 1 a 3 meses, pero para lograr objetivos sólidos se recomienda un período de 6 a 12 meses. Factores como competencia, optimización técnica, calidad del contenido EEAT y autoridad del dominio influyen en la velocidad de los resultados."
    },
    {
      question: "¿Cómo encontrar un consultor SEO internacional con experiencia global?",
      answer: "Si buscas un consultor SEO con experiencia en posicionamiento internacional, revisa su conocimiento en SEO multilingüe, estrategias de contenido global y adaptación a distintos mercados. Plataformas como Upwork, LinkedIn o agencias internacionales pueden ayudarte, o bien, puedes consultarme directamente para diseñar una estrategia de SEO global."
    },
    {
      question: "¿Cómo mejorar el SEO local para negocios y pymes?",
      answer: "El SEO local es clave para destacar en Google Maps y búsquedas regionales. Para optimizarlo, es fundamental reclamar y optimizar tu ficha de Google My Business con información actualizada, conseguir reseñas positivas para mejorar tu reputación online, aplicar estrategias de NAP (nombre, dirección, teléfono) coherentes en todas tus citaciones locales, implementar SEO on-page con keywords locales y contenido geolocalizado, y generar backlinks de calidad con relevancia local."
    },
    {
      question: "¿Cómo funciona la automatización SEO y qué beneficios tiene?",
      answer: "La automatización SEO optimiza procesos con IA y herramientas avanzadas para ahorrar tiempo y mejorar resultados. Entre sus beneficios destacan el scraping SEO para análisis masivo de palabras clave y backlinks, el uso de bots para monitorización de rankings en tiempo real, la generación automática de meta tags y schema markup, la automatización de informes SEO con herramientas como Google Looker Studio y la configuración de alertas automáticas de errores SEO para actuar de inmediato."
    },
    {
      question: "¿Cómo crear sitios web optimizados para SEO con Next.js y CMS?",
      answer: "Para garantizar un sitio optimizado para SEO, es esencial usar Next.js para mejorar la velocidad y la indexación, implementar un CMS optimizado como WordPress, Shopify o Webflow, optimizar Core Web Vitals y mobile-first para mejorar la UX, aplicar datos estructurados y marcado schema, y diseñar una arquitectura web optimizada para la rastreabilidad de Google."
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
      <ServiciosCompletos />

      <BeneficiosSeo />

      <FlujoTrabajo />

      <FAQ faqs={faqs} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Servicios;
