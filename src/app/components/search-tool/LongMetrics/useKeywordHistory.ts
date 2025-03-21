// components/search-tool/LongMetrics/useKeywordHistory.ts
import { useState, useEffect } from "react";

export interface KeywordRecord {
  date: string;
  clicks: number;
  impressions: number;
  position: number;
}

export interface KeywordHistory {
  [keyword: string]: KeywordRecord[];
}

export interface KeywordHistoryData {
  keywordHistory: KeywordHistory;
}

export interface ErrorResponse {
  error: string;
}

export type ApiResponse = KeywordHistoryData | ErrorResponse;

export interface FilterValues {
  siteUrl: string;
  // Se pueden agregar más filtros (fechas, etc.) si se desea
}

export default function useKeywordHistory(filters: FilterValues) {
  const [data, setData] = useState<KeywordHistory | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!filters.siteUrl) return;
    setLoading(true);
    setError(null);

    fetch("/api/search-console/keyword-history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteUrl: filters.siteUrl })
    })
      .then((res) => res.json())
      .then((result: ApiResponse) => {
        if ("error" in result) {
          setError(result.error);
        } else {
          setData(result.keywordHistory);
        }
      })
      .catch((err) => setError("Error al obtener el historial de keywords"))
      .finally(() => setLoading(false));
  }, [filters]);

  return { data, loading, error };
}
