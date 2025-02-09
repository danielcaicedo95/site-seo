"use client";

import Image from "next/image";
import "../styles/components/presentacion.css";

interface PresentacionProps {
  imageSrc: string;
  title: string;
  text: string;
}

const Presentacion: React.FC<PresentacionProps> = ({ imageSrc, title, text }) => {
  return (
    <div className="presentacion">
      {/* Sección del logo */}
      <div className="presentacion-logo">
        <Image
          src={imageSrc}
          alt="Logo Presentación"
          title="Logo Presentación"
          width={180}
          height={180}
          className="logo-image"
        />
      </div>

      {/* Sección del texto */}
      <div className="presentacion-texto">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Presentacion;
