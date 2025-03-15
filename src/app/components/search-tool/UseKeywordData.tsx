import { useState, useEffect } from "react";

interface KeywordHistory {
  date: string;
  clicks: number;
  impressions: number;
  position: number | null;
}

interface KeywordData {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  history?: KeywordHistory[];
}

export function useKeywordData(siteUrl: string | null) {
  const [keywords, setKeywords] = useState<KeywordData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!siteUrl) return;

    // 🔹 Limpiamos los datos de sessionStorage al cambiar de sitio
    sessionStorage.removeItem(`keywords_${siteUrl}`);
    setLoading(true);
    setKeywords([]); // 🔹 Reseteamos las palabras clave al cambiar de sitio

    const now = new Date();
    const startDate = new Date(now.setDate(now.getDate() - 180)).toISOString().split("T")[0];
    const endDate = new Date().toISOString().split("T")[0];

    fetch("/api/search-console/keywords", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteUrl, startDate, endDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        const sortedKeywords = (data.keywords || [])
          .sort((a: KeywordData, b: KeywordData) => b.clicks - a.clicks)
          .slice(0, 30);

        setKeywords(sortedKeywords);
        sessionStorage.setItem(`keywords_${siteUrl}`, JSON.stringify(sortedKeywords));
      })
      .catch(() => setError("Error al obtener las palabras clave"))
      .finally(() => setLoading(false));
  }, [siteUrl]);

  return { keywords, loading, error };
}
