"use client";
import "../styles/components/portada.css";

interface PortadaProps {
  imagen: string;
  titulo: string;
  descripcion: string;
}

const Portada: React.FC<PortadaProps> = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="portada" style={{ backgroundImage: `url(${imagen})` }}>
      {/* Contenido encima de la imagen */}
      <div className="portada-content">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <a href="#contacto" className="btn-reserva" aria-label="Ir a la sección de contacto">Hablemos</a>
      </div>
    </div>
  );
};

export default Portada;
