import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    const localBusinessJsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Daniel Caicedo SEO",
      "url": "https://daniseo.site",
      "logo": "https://daniseo.site/logo.png",
      "description": "Consultor SEO en Colombia con más de 6 años de experiencia optimizando sitios web.",
      "telephone": "+573008061344",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bogotá, Colombia",
        "addressLocality": "Bogotá",
        "addressCountry": "CO"
      },
      "areaServed": [
        { "@type": "City", "name": "Bogotá" },
        { "@type": "City", "name": "Cali" },
        { "@type": "City", "name": "Medellín" },
        { "@type": "City", "name": "Pasto" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(localBusinessJsonLd);
    document.head.appendChild(script);
  }, []);

  return null;
};

export default StructuredData;
