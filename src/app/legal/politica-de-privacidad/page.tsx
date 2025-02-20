
import { Metadata } from 'next';

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: 'Política de Privacidad - Daniel Caicedo | Consultor SEO',
  description: 'Política de privacidad del sitio web de Daniel Caicedo, consultor SEO en Colombia. Conoce cómo recopilamos, usamos y protegemos tus datos personales.',
  keywords: ['política de privacidad', 'privacidad', 'SEO', 'Colombia'],
  alternates: {
    canonical: 'https://daniseo.site/politica-de-privacidad',
  },
};

const PoliticaPrivacidad: React.FC = () => {
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

        <h1 className="text-3xl font-bold text-center mb-6">Política de Privacidad</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
          <p className="mb-4">
            En <strong>https://daniseo.site</strong>, propiedad de <strong>Daniel Caicedo</strong>, nos comprometemos a proteger y respetar tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tus datos personales cuando visitas nuestro sitio web o utilizas nuestros servicios.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Información que recopilamos</h2>
          <p className="mb-4">
            Podemos recopilar y procesar los siguientes datos personales:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Información de contacto (nombre, correo electrónico, número de teléfono).</li>
            <li className="mb-2">Datos técnicos (dirección IP, tipo de navegador, páginas visitadas).</li>
            <li className="mb-2">Información proporcionada al contactarnos o solicitar nuestros servicios.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Uso de la información</h2>
          <p className="mb-4">
            Utilizamos la información recopilada para los siguientes fines:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Proporcionar y mejorar nuestros servicios.</li>
            <li className="mb-2">Responder a consultas y solicitudes.</li>
            <li className="mb-2">Enviar comunicaciones relacionadas con nuestros servicios.</li>
            <li className="mb-2">Cumplir con obligaciones legales y regulatorias.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Compartir información con terceros</h2>
          <p className="mb-4">
            No compartimos tus datos personales con terceros, excepto en los siguientes casos:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Cuando sea necesario para cumplir con una obligación legal.</li>
            <li className="mb-2">Con proveedores de servicios que nos ayudan a operar el sitio web (por ejemplo, hosting o herramientas de análisis).</li>
            <li className="mb-2">Con tu consentimiento explícito.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Derechos de los usuarios</h2>
          <p className="mb-4">
            De acuerdo con la legislación colombiana, tienes los siguientes derechos sobre tus datos personales:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Acceder a tus datos personales.</li>
            <li className="mb-2">Solicitar la rectificación o eliminación de tus datos.</li>
            <li className="mb-2">Oponerte al tratamiento de tus datos.</li>
            <li className="mb-2">Revocar tu consentimiento en cualquier momento.</li>
          </ul>
          <p>
            Para ejercer estos derechos, puedes contactarnos a través de la información proporcionada en la sección de contacto del sitio web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Seguridad de los datos</h2>
          <p className="mb-4">
            Implementamos medidas técnicas y organizativas para proteger tus datos personales contra accesos no autorizados, pérdida o alteración. Sin embargo, ninguna medida de seguridad es infalible, por lo que no podemos garantizar la seguridad absoluta de tus datos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cambios en la política de privacidad</h2>
          <p className="mb-4">
            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será notificado en esta página.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. E-E-A-T (Experiencia, Expertise, Autoridad y Confiabilidad)</h2>
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

export default PoliticaPrivacidad;