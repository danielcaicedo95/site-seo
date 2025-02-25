import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portadaMia";
import SobreMi from "@/app/components/sobreMi";
import Footer from "../components/footer";
import ExperienciaLaboral from "../components/experiencia";
import Carrusel from "../components/carrusel";
import Educacion from "../components/educacion";
import Habilidades from "../components/habilidades";
import ProyectosPersonales from "../components/proyectos";
import ContactForm from "../components/contactForm";
import Cms from "../components/cms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultor SEO - Técnico, On Page, Off Page e IA | Daniel C",
  description:
    "Especialista SEO en Colombia con más de 6 años de experiencia usando diferentes CMS, como WordPress, Magento, Shopify y Drupal. Experto en SEO para eCommerce y aumento de tráfico orgánico. Haz clic para conocerme.",
  keywords: ["inicio", "Next.js", "SEO"],
  alternates: {
    canonical: "https://daniseo.site/servicios/sobre-mi",
  },
};

const About = () => {
  return (
    <main>
      <Navbar />
      {/* Portada principal */}
      <Portada />
      {/* Sección de información adicional */}
      <SobreMi />
      <ExperienciaLaboral />
      <Carrusel />
      <Educacion />
      <Habilidades />
      <Cms/>
      <ProyectosPersonales />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default About;
