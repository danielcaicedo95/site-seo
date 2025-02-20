
import { Metadata } from 'next';

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: 'Política de Cookies - Daniel Caicedo | Consultor SEO',
  description: 'Política de cookies del sitio web de Daniel Caicedo, consultor SEO en Colombia. Conoce cómo utilizamos las cookies y cómo gestionarlas.',
  keywords: ['política de cookies', 'cookies', 'SEO', 'Colombia'],
  alternates: {
    canonical: 'https://daniseo.site/politica-de-cookies',
  },
};

const PoliticaCookies: React.FC = () => {
  // Datos estructurados para E-E-A-T
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Daniel Caicedo",
    "jobTitle": "Consultor SEO",
    "url": "https://daniseo.site",
    "sameAs": [
      "https://www.linkedin.com/in/daniel-caicedo",
      "https://twitter.com/danielcaicedo"
    ],
    "description": "Especialista en SEO con más de 6 años de experiencia en estrategias de optimización para motores de búsqueda.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colombia"
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-20 mt-16"> {/* Ajuste de margen superior */}
        {/* Datos estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <h1 className="text-3xl font-bold text-center mb-6">Política de Cookies</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las cookies?</h2>
          <p className="mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, móvil) cuando visitas un sitio web. Estas cookies permiten que el sitio web recuerde tus preferencias y mejoren tu experiencia de usuario.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Tipos de cookies que utilizamos</h2>
          <p className="mb-4">
            En <strong>https://daniseo.site</strong> utilizamos los siguientes tipos de cookies:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <strong>Cookies técnicas:</strong> Son necesarias para el correcto funcionamiento del sitio web.
            </li>
            <li className="mb-2">
              <strong>Cookies de análisis:</strong> Nos permiten medir y analizar el comportamiento de los usuarios en el sitio web.
            </li>
            <li className="mb-2">
              <strong>Cookies de preferencias:</strong> Almacenan tus preferencias de uso, como el idioma o la región.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Consentimiento de cookies</h2>
          <p className="mb-4">
            Al utilizar este sitio web, aceptas el uso de cookies de acuerdo con esta política. Si no estás de acuerdo, puedes desactivar las cookies en la configuración de tu navegador. Sin embargo, esto puede afectar la funcionalidad del sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cómo gestionar las cookies</h2>
          <p className="mb-4">
            Puedes gestionar o eliminar las cookies en cualquier momento a través de la configuración de tu navegador. A continuación, te indicamos cómo hacerlo en los navegadores más populares:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos del sitio.
            </li>
            <li className="mb-2">
              <strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio.
            </li>
            <li className="mb-2">
              <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos del sitio web.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cambios en la política de cookies</h2>
          <p className="mb-4">
            Me reservo el derecho de modificar esta política de cookies en cualquier momento. Cualquier cambio será notificado en esta página.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. E-E-A-T (Experiencia, Expertise, Autoridad y Confiabilidad)</h2>
          <p className="mb-4">
            <strong>Daniel Caicedo</strong> cuenta con más de 6 años de experiencia en el campo del SEO, trabajando con diversas herramientas y estrategias para mejorar el posicionamiento orgánico de sitios web. Mi expertise incluye:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Optimización técnica y on-page para motores de búsqueda.</li>
            <li className="mb-2">Estrategias de link building y SEO off-page.</li>
            <li className="mb-2">Uso de herramientas avanzadas como Google Search Console, Ahrefs y SEMrush.</li>
            <li className="mb-2">Implementación de soluciones de IA para análisis predictivo y automatización de tareas SEO.</li>
          </ul>
          <p>
            Mi trabajo ha sido reconocido por clientes en Colombia y a nivel internacional, lo que refuerza mi autoridad y confiabilidad en el campo del SEO.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;