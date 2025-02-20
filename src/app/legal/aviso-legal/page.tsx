
import { Metadata } from 'next';

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: 'Aviso Legal - Daniel Caicedo | Consultor SEO',
  description: 'Aviso legal del sitio web de Daniel Caicedo, consultor SEO en Colombia. Conoce los términos y condiciones, políticas de privacidad y más.',
  keywords: ['aviso legal', 'términos y condiciones', 'política de privacidad', 'SEO', 'Colombia'],
  alternates: {
    canonical: 'https://daniseo.site/legal/aviso-legal',
  },
};

const AvisoLegal: React.FC = () => {
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

        <h1 className="text-3xl font-bold text-center mb-6">Aviso Legal</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
          <p className="mb-4">
            El sitio web <strong>https://daniseo.site</strong> es propiedad de <strong>Daniel Caicedo</strong>, consultor SEO con más de 6 años de experiencia en estrategias de optimización para motores de búsqueda. Este aviso legal establece las condiciones de uso del sitio web y los servicios ofrecidos.
          </p>
          <p>
            Si tienes alguna pregunta o inquietud sobre este aviso legal, puedes contactarme a través de la información proporcionada en la sección de contacto del sitio web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Condiciones de Uso</h2>
          <p className="mb-4">
            Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">El contenido del sitio web es para fines informativos y asesoramiento profesional.</li>
            <li className="mb-2">No se permite el uso indebido del sitio web, incluyendo actividades ilegales o que infrinjan los derechos de terceros.</li>
            <li className="mb-2">Me reservo el derecho de modificar o retirar cualquier contenido o servicio sin previo aviso.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Propiedad Intelectual</h2>
          <p className="mb-4">
            Todo el contenido del sitio web, incluyendo textos, imágenes, logotipos y diseños, está protegido por derechos de propiedad intelectual y es propiedad de <strong>Daniel Caicedo</strong> o de terceros que han autorizado su uso.
          </p>
          <p>
            No se permite la reproducción, distribución o modificación del contenido sin autorización previa por escrito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitación de Responsabilidad</h2>
          <p className="mb-4">
            <strong>Daniel Caicedo</strong> no se hace responsable por:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Daños o pérdidas derivadas del uso del sitio web o de la imposibilidad de acceder a él por terceros</li>
            <li className="mb-2">Errores u omisiones en el contenido del sitio web por terceros</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Política de Privacidad</h2>
          <p className="mb-4">
            La privacidad de los usuarios es importante. Los datos personales recopilados a través del sitio web se tratarán de acuerdo con la legislación colombiana y se utilizarán únicamente para los fines especificados en la política de privacidad.
          </p>
          <p>
            Para más detalles, consulta la <a href="/politica-de-privacidad" className="text-blue-500 underline">Política de Privacidad</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Ley Aplicable y Jurisdicción</h2>
          <p className="mb-4">
            Este aviso legal se rige por las leyes de la República de Colombia. Cualquier disputa relacionada con el uso del sitio web estará sujeta a la jurisdicción de los tribunales competentes en Colombia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Modificaciones al Aviso Legal</h2>
          <p>
            Me reservo el derecho de modificar este aviso legal en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
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

export default AvisoLegal;