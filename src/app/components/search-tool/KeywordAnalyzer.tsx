import React, { useState, useMemo } from "react";
import nlp from "compromise";

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

interface KeywordAnalyzerProps {
  data: PageData[];
}

const classifyKeyword = (keyword: string): string => {
  const doc = nlp(keyword.toLowerCase());

  if (doc.has("#QuestionWord") || /qué|cómo|por qué|dónde|cuándo|cuál/.test(keyword)) {
    return "🔎 Informativas";
  }
  if (doc.has("#Adjective") || /mejor|top|comparativa|reseña|opinión/.test(keyword)) {
    return "🛍️ Comerciales";
  }
  if (doc.has("#Verb") || /comprar|reservar|contratar|registrarse|suscribirse/.test(keyword)) {
    return "🛒 Transaccionales";
  }
  if (doc.has("#Noun") || /login|oficial|web|acceso|inicio/.test(keyword)) {
    return "📍 Navegacionales";
  }

  return "❓ Sin Clasificar";
};

const KeywordAnalyzer: React.FC<KeywordAnalyzerProps> = ({ data }) => {
  console.log("🔍 Keywords recibidas en KeywordAnalyzer:", data);

  const [expanded, setExpanded] = useState<{ [category: string]: boolean }>({});
  const [showAll, setShowAll] = useState<{ [category: string]: boolean }>({});

  const classifiedKeywords = useMemo(() => {
    if (!data.length) {
      console.warn("⚠️ No hay palabras clave para clasificar.");
      return {
        "🔎 Informativas": [],
        "🛍️ Comerciales": [],
        "🛒 Transaccionales": [],
        "📍 Navegacionales": [],
        "❓ Sin Clasificar": [],
      };
    }

    console.log("✅ Clasificando palabras clave...");
    const categories: { [category: string]: string[] } = {
      "🔎 Informativas": [],
      "🛍️ Comerciales": [],
      "🛒 Transaccionales": [],
      "📍 Navegacionales": [],
      "❓ Sin Clasificar": [],
    };

    data.forEach((page) => {
      page.queries.forEach((queryData) => {
        const category = classifyKeyword(queryData.query);
        categories[category].push(queryData.query);
      });
    });

    console.log("📊 Resultados de clasificación:", categories);
    return categories;
  }, [data]);

  return (
    <div className="p-6 bg-white shadow-md rounded-md mt-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Análisis de Intención de Búsqueda</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No hay palabras clave disponibles.</p>
      ) : (
        <div className="space-y-4">
          {Object.entries(classifiedKeywords).map(([category, kwList]) => (
            <div key={category} className="border border-gray-300 rounded-md overflow-hidden">
              <button
                className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition"
                onClick={() => setExpanded((prev) => ({ ...prev, [category]: !prev[category] }))}
              >
                {expanded[category] ? "🔽" : "▶️"} {category} ({kwList.length})
              </button>
              {expanded[category] && (
                <div className="p-4 bg-white">
                  {kwList.length > 0 ? (
                    <>
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {kwList
                          .slice(0, showAll[category] ? kwList.length : 50)
                          .map((kw, index) => (
                            <li key={index} className="bg-gray-100 text-gray-800 p-2 rounded-md">
                              {kw}
                            </li>
                          ))}
                      </ul>
                      {kwList.length > 50 && (
                        <button
                          className="mt-2 text-blue-500 hover:underline"
                          onClick={() =>
                            setShowAll((prev) => ({ ...prev, [category]: !prev[category] }))
                          }
                        >
                          {showAll[category] ? "Ver menos" : `Ver más (${kwList.length - 50} más)`}
                        </button>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-500">No hay palabras clave en esta categoría.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeywordAnalyzer;
