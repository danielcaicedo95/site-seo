import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portadaMia";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Consultor SEO - Técnico, On Page, Off Page e IA | Daniel C",
  description:
    "Especialista SEO en Colombia con más de 6 años de experiencia usando diferentes CMS, como WordPress, Magento, Shopify y Drupal. Experto en SEO para eCommerce y aumento de tráfico orgánico. Haz clic para conocerme.",
  keywords: ["inicio", "Next.js", "SEO"],
  alternates: {
    canonical: "https://home.com",
  },
};


const About = () => {
  return (
    <main>
      <Navbar />

      {/* Portada principal */}
      <Portada />

      
      <ContactForm/>
      <Footer/>
    </main>
  );
};

export default About;
