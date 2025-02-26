// components/FuturisticLogo.tsx
import React from "react";

const FuturisticLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Icono Futurista */}
      <div className="relative">
        {/* Base del icono */}
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 rounded-lg transform rotate-45 shadow-2xl shadow-purple-500/50 animate-glow"></div>
        {/* Brillo adicional */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/30 to-transparent rounded-lg animate-shine"></div>
        {/* Detalle central (simula un motor de búsqueda) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* Texto con estilo de firma profesional */}
      <div className="text-white">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-text-glow font-signature">
          DaniSEO<span className="text-purple-400">.site</span>
        </h1>
        <p className="text-sm text-gray-300 mt-1">Futuristic SEO Solutions</p>
      </div>
    </div>
  );
};

export default FuturisticLogo;