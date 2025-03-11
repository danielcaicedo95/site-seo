import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import BeneficiosSeo from "@/app/components/beneficiosSeo";
import FlujoTrabajo from "@/app/components/flujoTrabajo";
import FAQ from "@/app/components/faqs";
import { Metadata } from 'next';
import Footer from "@/app/components/footer";
import Contacto from "@/app/components/contactForm";
import ServiciosOffPage from "@/app/components/serviciosOffPage";
import BeneficiosTodo from "@/app/components/BeneficiosTodo";
import Cms from "@/app/components/cms";

interface Beneficio {
  titulo: string;
  descripcion: string;
  imagen: string;
  posicionImagen: "left" | "right"; // Solo acepta "left" o "right"
}

export const metadata: Metadata = {
  title: 'SEO Off Page y Linkbuilding | Estrategias de Enlazado Externo',
  description:
    '¿Buscas mejorar la autoridad de tu sitio web con SEO Off Page? Somos expertos en linkbuilding, construcción de enlaces y estrategias de enlazado externo para aumentar la visibilidad y el posicionamiento en buscadores. Descubre cómo podemos ayudarte a obtener backlinks de calidad.',
  keywords: [
    'SEO Off Page',
    'Linkbuilding',
    'Enlazado externo',
    'Estrategias de SEO Off Page',
    'Construcción de enlaces',
    'Backlinks de calidad',
    'Autoridad de dominio',
    'Mejorar posicionamiento con SEO Off Page',
    'SEO para aumentar tráfico orgánico',
    'Estrategias de linkbuilding',
    'SEO para mejorar la autoridad de página',
    'SEO para aumentar la visibilidad',
    'SEO para mejorar el ranking en Google',
    'SEO para aumentar la relevancia',
    'SEO para mejorar la reputación online',
    'SEO para aumentar la confianza en tu sitio',
    'SEO para mejorar la indexación en Google',
    'SEO para mejorar la autoridad de marca',
    'SEO para aumentar la credibilidad',
    'SEO para mejorar la popularidad del sitio',
    'SEO para aumentar la autoridad de backlinks',
    'SEO para mejorar la relevancia de enlaces',
    'SEO para aumentar la autoridad de contenido',
    'SEO para mejorar la autoridad de dominio',
    'SEO para aumentar la autoridad de página',
    'SEO para mejorar la autoridad de sitio',
    'SEO para aumentar la autoridad de marca',
    'SEO para mejorar la autoridad de enlaces',
    'SEO para aumentar la autoridad de contenido',
    'SEO para mejorar la autoridad de dominio',
  ],
  alternates: {
    canonical: 'https://daniseo.site/servicios/seo-off-page',
  },
};

const Servicios = () => {
  // Datos para la portada de la página de servicios
  const portadaData = {
    imagen: "/images/seo-offpage-colombia.jpg",
    titulo: "Servicios de SEO Off Page y Linkbuilding",
    descripcion:
      "Aumenta la autoridad y visibilidad de tu sitio web con estrategias avanzadas de SEO Off Page. Construimos backlinks de calidad, mejoramos tu perfil de enlaces y potenciamos tu posicionamiento en buscadores.",
  };

  const beneficiosData: Beneficio[] = [
    {
      titulo: "Linkbuilding: La clave para construir autoridad",
      descripcion:
        "Desarrollamos estrategias de construcción de enlaces (linkbuilding) para obtener backlinks de alta calidad desde sitios relevantes. Esto mejora la autoridad de tu dominio y aumenta tu posicionamiento en los motores de búsqueda.",
      imagen: "/images/beneficiostodo/seo-offpage/linkbuilding.png",
      posicionImagen: "left",
    },
    {
      titulo: "Enlazado Externo: Mejora tu perfil de enlaces",
      descripcion:
        "Optimizamos tu perfil de enlaces externos para asegurar que provengan de fuentes confiables y relevantes. Esto aumenta la confianza de los motores de búsqueda en tu sitio y mejora tu ranking.",
      imagen: "/images/beneficiostodo/seo-offpage/enlazado-externo.png",
      posicionImagen: "right",
    },
    {
      titulo: "Guest Blogging: Publicación en sitios de autoridad",
      descripcion:
        "Escribimos y publicamos artículos en blogs de alta autoridad para obtener backlinks y aumentar la visibilidad de tu marca. Esta estrategia también mejora la reputación y credibilidad de tu sitio.",
      imagen: "/images/beneficiostodo/seo-offpage/guest-blogging.png",
      posicionImagen: "left",
    },
    {
      titulo: "Menciones de Marca: Aumenta tu visibilidad",
      descripcion:
        "Trabajamos para obtener menciones de tu marca en sitios web relevantes, lo que mejora tu reputación online y aumenta la confianza de los usuarios y motores de búsqueda en tu sitio.",
      imagen: "/images/beneficiostodo/seo-offpage/menciones-marca.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "Redes Sociales: Potencia tu alcance",
      descripcion:
        "Utilizamos redes sociales para promocionar tu contenido y atraer tráfico a tu sitio. Esto no solo aumenta la visibilidad, sino que también genera enlaces naturales y mejora tu autoridad.",
      imagen: "/images/beneficiostodo/seo-offpage/redes-sociales.jpg",
      posicionImagen: "left",
    },
  ];

  const faqs = [
    {
      question: "¿Qué es el SEO Off Page?",
      answer:
        "El SEO Off Page se refiere a las acciones realizadas fuera de tu sitio web para mejorar su posicionamiento en los motores de búsqueda. Esto incluye la construcción de enlaces (linkbuilding), menciones de marca, y estrategias de promoción en redes sociales.",
    },
    {
      question: "¿Qué es el linkbuilding y por qué es importante?",
      answer:
        "El linkbuilding es el proceso de obtener enlaces de otros sitios web hacia el tuyo. Es importante porque los motores de búsqueda consideran los backlinks como votos de confianza, lo que mejora la autoridad y el posicionamiento de tu sitio.",
    },
    {
      question: "¿Cómo se obtienen backlinks de calidad?",
      answer:
        "Los backlinks de calidad se obtienen a través de estrategias como guest blogging, creación de contenido valioso, participación en foros y directorios, y colaboraciones con influencers y sitios de autoridad.",
    },
    {
      question: "¿Qué es el enlazado externo y cómo beneficia al SEO?",
      answer:
        "El enlazado externo se refiere a los enlaces que apuntan a tu sitio desde otros sitios web. Beneficia al SEO al mejorar la autoridad de tu dominio, aumentar la visibilidad y generar tráfico de referencia.",
    },
    {
      question: "¿Cómo afectan las menciones de marca al SEO Off Page?",
      answer:
        "Las menciones de marca mejoran la reputación online y aumentan la confianza de los motores de búsqueda en tu sitio. Aunque no siempre incluyen un enlace, pueden generar tráfico y mejorar la autoridad de tu marca.",
    },
    {
      question: "¿Qué papel juegan las redes sociales en el SEO Off Page?",
      answer:
        "Las redes sociales ayudan a promocionar tu contenido, atraer tráfico y generar enlaces naturales. Aunque no son un factor directo de ranking, mejoran la visibilidad y la autoridad de tu sitio.",
    },
    {
      question: "¿Cómo se mide el éxito del SEO Off Page?",
      answer:
        "El éxito del SEO Off Page se mide a través de métricas como el número y la calidad de los backlinks, el tráfico de referencia, la autoridad de dominio y el posicionamiento en los motores de búsqueda.",
    },
    {
      question: "¿Qué es el guest blogging y cómo ayuda al SEO?",
      answer:
        "El guest blogging consiste en escribir artículos para otros blogs a cambio de un enlace a tu sitio. Ayuda al SEO al generar backlinks de calidad, aumentar la visibilidad y mejorar la autoridad de tu marca.",
    },
    {
      question: "¿Cuál es la diferencia entre SEO On Page y SEO Off Page?",
      answer:
        "El SEO On Page se enfoca en la optimización interna del sitio, como el contenido y la estructura, mientras que el SEO Off Page se centra en acciones externas, como la construcción de enlaces y la promoción en redes sociales.",
    },
    {
      question: "¿Cómo puedo empezar con el SEO Off Page?",
      answer:
        "Para empezar con el SEO Off Page, identifica oportunidades de linkbuilding, crea contenido valioso que otros quieran enlazar, y promociona tu sitio en redes sociales y otros canales externos.",
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
      <ServiciosOffPage />

      <BeneficiosTodo
        beneficios={beneficiosData}
        tituloSeccion="¿Por qué el SEO Off Page es esencial para tu sitio web?"
        descripcionSeccion="El SEO Off Page mejora la autoridad y visibilidad de tu sitio a través de estrategias como el linkbuilding, el enlazado externo y la promoción en redes sociales. Descubre sus beneficios clave:"
      />

      <Cms />

      <FlujoTrabajo />

      <FAQ faqs={faqs} />

      <Contacto />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Servicios;