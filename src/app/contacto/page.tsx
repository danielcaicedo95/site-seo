"use client";

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

const About = () => {
  return (
    <main>
      <Navbar />

      {/* Portada principal */}
      <Portada />

      {/* Sección de información adicional */}
      <SobreMi/>

      <ExperienciaLaboral/>
      <Carrusel/>
      <Educacion/>
      <Habilidades/>
      <ProyectosPersonales/>
      <ContactForm/>
      <Footer/>
    </main>
  );
};

export default About;
