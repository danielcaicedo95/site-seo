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
  totalClicks: number;
  totalImpressions: number;
  avgCtr: number;
  avgPagePosition: number | null;
}

interface KeywordCannibalizationProps {
  data: PageData[];
}

const KeywordCannibalization: React.FC<KeywordCannibalizationProps> = ({ data }) => {
  const [excludedKeywords, setExcludedKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddExclusion = () => {
    if (inputValue.trim() && !excludedKeywords.includes(inputValue.trim())) {
      setExcludedKeywords([...excludedKeywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveExclusion = (keyword: string) => {
    setExcludedKeywords(excludedKeywords.filter((k) => k !== keyword));
  };

  const canibalizedKeywords = useMemo(() => {
    const keywordMap: Record<string, { query: string; pages: { url: string; position: number; clicks: number; impressions: number }[] }> = {};

    data.forEach((page) => {
      page.queries.forEach((query) => {
        if (!excludedKeywords.some((kw) => query.query.includes(kw))) {
          if (!keywordMap[query.query]) {
            keywordMap[query.query] = { query: query.query, pages: [] };
          }
          keywordMap[query.query].pages.push({
            url: page.url,
            position: query.position,
            clicks: query.clicks,
            impressions: query.impressions,
          });
        }
      });
    });

    return Object.values(keywordMap).filter((entry) => entry.pages.length > 1);
  }, [data, excludedKeywords]);

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">🚀 Canibalización de Palabras Clave</h2>
      
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 rounded mr-2"
          placeholder="Palabra clave a excluir"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-3 py-2 rounded" onClick={handleAddExclusion}>
          Agregar
        </button>
      </div>
      
      <div className="mb-4">
        {excludedKeywords.map((kw) => (
          <span key={kw} className="bg-gray-200 px-2 py-1 rounded mr-2 inline-block">
            {kw} <button onClick={() => handleRemoveExclusion(kw)}>❌</button>
          </span>
        ))}
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Consulta</th>
            <th className="px-4 py-2 border">Páginas en conflicto</th>
          </tr>
        </thead>
        <tbody>
          {canibalizedKeywords.map(({ query, pages }) => (
            <tr key={query} className="border-b">
              <td className="px-4 py-2 border font-bold">{query}</td>
              <td className="px-4 py-2 border">
                {pages.map((page) => (
                  <div key={page.url} className="text-sm">
                    🔗 {page.url} (Pos: {page.position.toFixed(1)}, Clics: {page.clicks}, Impresiones: {page.impressions})
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeywordCannibalization;