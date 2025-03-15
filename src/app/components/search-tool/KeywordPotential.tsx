import React, { useState, useMemo } from "react";

interface QueryMetrics {
  query: string;
  clicks: number;
  impressions: number;
  position: number;
  ctr: number;
}

interface PageData {
  url: string;
  queries: QueryMetrics[];
}

interface KeywordPotentialProps {
  data: PageData[];
}

const KeywordPotential: React.FC<KeywordPotentialProps> = ({ data }) => {
  const [ctrThreshold, setCtrThreshold] = useState<number>(5);
  const [impressionsThreshold, setImpressionsThreshold] = useState<number>(1000);
  const [positionRange, setPositionRange] = useState<[number, number]>([5, 20]);

  const highPotentialKeywords = useMemo(() => {
    return data.flatMap((page) =>
      page.queries
        .filter(
          (query) =>
            query.ctr * 100 >= ctrThreshold &&
            query.impressions >= impressionsThreshold &&
            query.position >= positionRange[0] &&
            query.position <= positionRange[1]
        )
        .map((query) => ({ ...query, url: page.url }))
    );
  }, [data, ctrThreshold, impressionsThreshold, positionRange]);

  const getRecommendation = (position: number, ctr: number) => {
    if (position <= 5) return "🔗 Consolida la posición con backlinks y optimización de CTR.";
    if (position <= 10) return "📝 Refuerza la autoridad con contenido más profundo y enlaces internos.";
    if (ctr < 2) return "📌 Mejora el título y meta descripción para aumentar el CTR.";
    return "🚀 Optimiza la estructura de contenido y aumenta la relevancia con más secciones.";
  };

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">📊 Palabras Clave con Alto Potencial</h2>
      <p className="text-gray-600 mb-4">
        Detecta consultas con alto CTR e impresiones, pero que aún pueden mejorar su posición en Google.
      </p>

      <div className="flex flex-wrap gap-4 mb-4">
        <label className="flex-1 min-w-[120px]">
          <span className="text-sm font-medium">CTR mínimo (%)</span>
          <input
            type="number"
            value={ctrThreshold}
            onChange={(e) => setCtrThreshold(Number(e.target.value))}
            className="border p-2 rounded w-full focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="flex-1 min-w-[120px]">
          <span className="text-sm font-medium">Impresiones mínimas</span>
          <input
            type="number"
            value={impressionsThreshold}
            onChange={(e) => setImpressionsThreshold(Number(e.target.value))}
            className="border p-2 rounded w-full focus:ring focus:ring-blue-300"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="px-4 py-2 border">Consulta</th>
              <th className="px-4 py-2 border">Página</th>
              <th className="px-4 py-2 border text-center">Clics</th>
              <th className="px-4 py-2 border text-center">Impresiones</th>
              <th className="px-4 py-2 border text-center">CTR</th>
              <th className="px-4 py-2 border text-center">Posición</th>
              <th className="px-4 py-2 border w-60">Recomendación</th>
            </tr>
          </thead>
          <tbody>
            {highPotentialKeywords.map(({ query, url, clicks, impressions, ctr, position }) => (
              <tr key={query} className="border-b hover:bg-gray-50 text-sm">
                <td className="px-4 py-2 border font-medium">{query}</td>
                <td className="px-4 py-2 border text-blue-600 underline truncate max-w-[150px]">
                  <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                </td>
                <td className="px-4 py-2 border text-center">{clicks}</td>
                <td className="px-4 py-2 border text-center">{impressions}</td>
                <td className="px-4 py-2 border text-center">{(ctr * 100).toFixed(2)}%</td>
                <td className="px-4 py-2 border text-center">{position.toFixed(1)}</td>
                <td className="px-4 py-2 border text-gray-700 text-sm">{getRecommendation(position, ctr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {highPotentialKeywords.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No se encontraron palabras clave con alto potencial.</p>
      )}
    </div>
  );
};

export default KeywordPotential;
