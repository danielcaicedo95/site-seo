import React, { useState, useEffect } from "react";

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
  avgPagePosition: number | null;
  totalClicks: number;
  totalImpressions: number;
  avgCtr: number;
}

interface PageMetricsProps {
  siteUrl: string;
  onDataLoaded: (data: PageData[]) => void;
}

const PageMetrics: React.FC<PageMetricsProps> = ({ siteUrl, onDataLoaded }) => {
  const [data, setData] = useState<PageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [attempts, setAttempts] = useState<number>(0);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/search-console/keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteUrl }),
      });

      if (!response.ok) throw new Error("Error al obtener los datos");

      const result: { pages: PageData[] } = await response.json();
      const filteredPages = result.pages.filter((page) => page.queries.length > 0);
      setData(filteredPages);
      onDataLoaded(filteredPages);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (attempts < 5) {
      fetchData();
    }
  }, [siteUrl, attempts]);

  // Verificar si el 90% de las páginas tienen datos
  const totalPages = data.length;
  const pagesWithQueries = data.filter((page) => page.queries.length > 0).length;
  const dataReady = totalPages > 0 && pagesWithQueries / totalPages >= 0.9;

  // Si no se alcanza el 90% y hay intentos disponibles, reintentar
  useEffect(() => {
    if (!dataReady && attempts < 7) {
      setTimeout(() => setAttempts((prev) => prev + 1), 3000);
    }
  }, [dataReady, attempts]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">📊 Páginas y Consultas Relacionadas</h2>

      {loading ? (
        <p className="text-center text-blue-600">🔄 Cargando datos...</p>
      ) : !dataReady && attempts < 5 ? (
        <p className="text-center text-red-500">
          ⚠️ Intentando obtener más datos... (Intento {attempts}/5)
        </p>
      ) : !dataReady && attempts >= 5 ? (
        <p className="text-center text-red-500">
          ⚠️ No se pudo obtener suficientes datos. Intenta más tarde.
        </p>
      ) : (
        <div className="overflow-x-auto">
  <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
    <thead>
      <tr className="bg-gray-100 text-gray-700">
        <th className="px-4 py-3 border text-left">Página</th>
        <th className="px-4 py-3 border text-center">Clics</th>
        <th className="px-4 py-3 border text-center">Impresiones</th>
        <th className="px-4 py-3 border text-center">CTR (%)</th>
        <th className="px-4 py-3 border text-center">Posición</th>
        <th className="px-4 py-3 border text-center">Acción</th>
      </tr>
    </thead>
    <tbody>
      {data.map((page, index) => (
        <React.Fragment key={page.url}>
          <tr className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
            <td className="px-4 py-3 border font-medium text-blue-600 break-words max-w-xs">{page.url}</td>
            <td className="px-4 py-3 border text-center">{page.totalClicks}</td>
            <td className="px-4 py-3 border text-center">{page.totalImpressions}</td>
            <td className="px-4 py-3 border text-center">{page.avgCtr.toFixed(2)}%</td>
            <td className="px-4 py-3 border text-center">
              {page.avgPagePosition !== null ? page.avgPagePosition.toFixed(1) : "N/A"}
            </td>
            <td className="px-4 py-3 border text-center">
              <button
                className="text-blue-600 font-medium hover:text-blue-800 transition"
                onClick={() =>
                  setExpanded((prev) => ({
                    ...prev,
                    [page.url]: !prev[page.url],
                  }))
                }
              >
                {expanded[page.url] ? "🔽 Ocultar" : "▶️ Ver"}
              </button>
            </td>
          </tr>
          {expanded[page.url] && (
            <tr className="bg-gray-100">
              <td colSpan={6}>
                <div className="p-4">
                  <h3 className="text-md font-semibold mb-2 text-gray-700">Consultas Relacionadas</h3>
                  <table className="w-full border border-gray-300 rounded-md overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                      <tr>
                        <th className="px-4 py-2 border">Consulta</th>
                        <th className="px-4 py-2 border">Clics</th>
                        <th className="px-4 py-2 border">Impresiones</th>
                        <th className="px-4 py-2 border">CTR (%)</th>
                        <th className="px-4 py-2 border">Posición</th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.queries.map((query, qIndex) => (
                        <tr key={query.query} className={qIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-2 border">{query.query}</td>
                          <td className="px-4 py-2 border text-center">{query.clicks}</td>
                          <td className="px-4 py-2 border text-center">{query.impressions}</td>
                          <td className="px-4 py-2 border text-center">{(query.ctr * 100).toFixed(2)}%</td>
                          <td className="px-4 py-2 border text-center">{query.position.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          )}
        </React.Fragment>
      ))}
    </tbody>
  </table>
</div>

      )}
    </div>
  );
};

export default PageMetrics;
