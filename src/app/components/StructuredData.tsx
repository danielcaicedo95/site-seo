import Head from 'next/head';

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Daniel Caicedo - Consultor SEO",
    "url": "https://daniseo.site",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://daniseo.site/?s={search_term}",
      "query-input": "required name=search_term"
    }
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Daniel Caicedo SEO",
    "url": "https://daniseo.site",
    "logo": "https://daniseo.site/logo.png",
    "description": "Especialista SEO, Freelance, posciona tu sitio web en google, bing, safary y mas con las mejores practicas y en cualquier cms Drupal, shopify, wordpress, etc. ",
    "telephone": "+573008061344",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bogotá, Colombia",
      "addressLocality": "Bogotá",
      "addressCountry": "CO"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bogotá"
      },
      {
        "@type": "City",
        "name": "Cali"
      },
      {
        "@type": "City",
        "name": "Medellín"
      },
      {
        "@type": "City",
        "name": "Barranquilla"
      },
      {
        "@type": "City",
        "name": "Cartagena"
      },
      {
        "@type": "City",
        "name": "Risaralda"
      },
      {
        "@type": "City",
        "name": "Santa Marta"
      },
      {
        "@type": "City",
        "name": "Bucaramanga"
      },
      {
        "@type": "City",
        "name": "Popayan"
      },
    ]
  };
  

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </Head>
  );
};

export default StructuredData;
