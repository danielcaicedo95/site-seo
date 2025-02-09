"use client";

import Navbar from "@/app/components/navbar";
import Portada from "@/app/components/portada";
import ServiciosCompletos from "@/app/components/serviciosCompletos";
import BeneficiosSeo from "@/app/components/beneficiosSeo";
import FlujoTrabajo from "@/app/components/flujoTrabajo";



import Footer from "@/app/components/footer";

const Servicios = () => {
  // Datos para la portada de la página de servicios
  const portadaData = {
    imagen: "/images/portada2.jpg", // Imagen destacada para esta página
    titulo: "Nuestros Servicios SEO",
    descripcion:
      "Descubre nuestras estrategias de posicionamiento web para llevar tu negocio al siguiente nivel.",
  };


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
    
      <ServiciosCompletos />

      <BeneficiosSeo/>

      <FlujoTrabajo/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Servicios;
