import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import FAQ from "../components/faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Especialista SEO en Colombia | Daniel C",
  description:
    "Contáctame para mejorar el posicionamiento de tu sitio web en Colombia. Especialista en SEO técnico, SEO local, SEO para eCommerce y estrategias de contenido. ¡Agenda una consulta ahora!",
  keywords: [
    "SEO Colombia",
    "consultor SEO Bogotá",
    "posicionamiento web Colombia",
    "SEO técnico",
    "SEO local",
    "especialista SEO",
    "aumentar tráfico orgánico",
    "contacto SEO",
    "SEO para eCommerce",
    "optimización SEO en Colombia",
    "consultoría SEO",
    "estrategias SEO 2024",
    "SEO en Medellín",
    "SEO en Cali",
    "SEO en Barranquilla",
  ],
  alternates: {
    canonical: "https://daniseo.site/contacto",
  },
  openGraph: {
    title: "Contacto - Especialista SEO en Colombia | Daniel C",
    description:
      "Contáctame para mejorar el posicionamiento de tu sitio web en Colombia. Especialista en SEO técnico, SEO local, SEO para eCommerce y estrategias de contenido. ¡Agenda una consulta ahora!",
    url: "https://daniseo.site/contacto",
    siteName: "Daniel C - Especialista SEO",
    images: [
      {
        url: "https://daniseo.site/images/portada1.jpg",
        width: 1200,
        height: 630,
        alt: "Especialista SEO Colombia",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

const portadaData = {
  imagen: "/images/portada1.jpg",
  titulo: "Especialista SEO Colombia",
  descripcion: "¿Sabías que el 93% de las experiencias en línea comienzan con un motor de búsqueda?",
};

const faqs = [
  {
    question: "¿Cómo puedo mejorar el SEO de mi sitio web en Colombia?",
    answer: "Para mejorar el SEO en Colombia, enfócate en palabras clave locales, optimiza tu sitio para móviles, genera contenido en español y utiliza herramientas como Google My Business para SEO local. Además, asegúrate de que tu sitio cumpla con los Core Web Vitals de Google.",
  },
  {
    question: "¿Qué es el SEO local y cómo funciona en Colombia?",
    answer: "El SEO local se enfoca en posicionar tu negocio en búsquedas geográficas específicas. En Colombia, es clave optimizar tu ficha de Google My Business, incluir palabras clave con nombres de ciudades o regiones, y generar reseñas positivas de clientes locales.",
  },
  {
    question: "¿Cómo puedo aparecer en Google Maps en Colombia?",
    answer: "Para aparecer en Google Maps, crea y optimiza tu perfil de Google My Business con información completa (nombre, dirección, teléfono, horarios). Además, genera reseñas de clientes y utiliza palabras clave locales en tu descripción.",
  },
  {
    question: "¿Cuánto cuesta contratar un consultor SEO en Colombia?",
    answer: "El costo de un consultor SEO en Colombia varía según la experiencia y el alcance del proyecto. Los precios pueden oscilar entre $1.000.000 y $5.000.000 COP mensuales, dependiendo de la complejidad y los objetivos.",
  },
  {
    question: "¿Qué estrategias de contenido funcionan mejor para el SEO en Colombia?",
    answer: "En Colombia, el contenido en español optimizado para palabras clave locales, blogs informativos, guías prácticas y videos tienen un alto impacto. Además, el contenido debe estar alineado con las tendencias de búsqueda y las necesidades de tu audiencia.",
  },
  {
    question: "¿Cómo puedo medir el éxito de mi estrategia SEO?",
    answer: "Puedes medir el éxito de tu estrategia SEO mediante herramientas como Google Analytics y Google Search Console. Monitorea métricas como el tráfico orgánico, las palabras clave posicionadas, el tiempo en página y la tasa de conversión.",
  },
  {
    question: "¿Qué errores comunes debo evitar en el SEO técnico?",
    answer: "Algunos errores comunes incluyen no optimizar la velocidad del sitio, no usar HTTPS, tener enlaces rotos, no implementar datos estructurados y no optimizar para móviles. Evitar estos errores es clave para un buen posicionamiento.",
  },
  {
    question: "¿Cómo puedo generar backlinks de calidad en Colombia?",
    answer: "Para generar backlinks en Colombia, colabora con blogs locales, participa en directorios de negocios, publica artículos invitados en sitios de autoridad y genera contenido de alta calidad que otros quieran enlazar.",
  },
  {
    question: "¿Qué es el SEO para eCommerce y cómo aplicarlo en Colombia?",
    answer: "El SEO para eCommerce se enfoca en optimizar fichas de productos, mejorar la experiencia de usuario y generar tráfico orgánico. En Colombia, es clave usar palabras clave locales, optimizar para móviles y generar reseñas de clientes.",
  },
  {
    question: "¿Cómo puedo optimizar mi sitio web para búsquedas de voz?",
    answer: "Para optimizar para búsquedas de voz, usa un lenguaje natural y conversacional, responde preguntas comunes, optimiza para móviles y utiliza datos estructurados como FAQPage. Esto es especialmente útil en Colombia, donde el uso de búsquedas por voz está creciendo.",
  },
];

const Contact = () => {
  return (
    <main>
      <Navbar />
      <Portada
        imagen={portadaData.imagen}
        titulo={portadaData.titulo}
        descripcion={portadaData.descripcion}
      />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mt-8 text-purple-600">
          Contáctanos para Mejorar tu SEO en Colombia
        </h2>
        <p className="text-center mt-4 text-gray-700">
          ¿Necesitas ayuda con el posicionamiento de tu sitio web? ¡Escríbenos o llámanos al{" "}
          <a href="tel:+573008061344" className="text-blue-500 hover:text-blue-700">
            +57 300 806 1344
          </a>{" "}
          y te asesoraremos!
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <ContactForm />
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">Información de Contacto</h3>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li>
                <strong>Teléfono:</strong>{" "}
                <a href="tel:+573008061344" className="text-blue-400 hover:text-blue-300">
                  +57 300 806 1344
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="danielcaicedoco@gmail.com" className="text-blue-400 hover:text-blue-300">
                  info@daniseo.site
                </a>
              </li>
              <li>
                <strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white">Encuéntranos en Redes Sociales</h3>
              <div className="flex space-x-4 mt-4">
                <a href="https://linkedin.com/in/daniseo" className="hover:opacity-80">
                  <img src="/images/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="https://github.com/daniseo" className="hover:opacity-80">
                  <img src="/images/github.png" alt="GitHub" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ faqs={faqs} />
      <Footer />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Daniel C - Especialista SEO",
          "image": "https://daniseo.site/images/portada1.jpg",
          "telephone": "+573008061344",
          "email": "danielcaicedoco@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Colombia",
            "addressRegion": "Pasto",
            "postalCode": "520001",
            "streetAddress": "Cr 21 # 6 - 124",
          },
          "url": "https://daniseo.site",
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$$$",
        })}
      </script>
    </main>
  );
};

export default Contact;