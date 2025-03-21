// components/search-tool/LongMetrics/LongMetricsDashboard.tsx
import React, { useState, useEffect } from "react";
import FilterControls from "./FilterControls";
import KeywordTrends from "./KeywordTrends";
import PagePerformance from "./PagePerformance";
import ComparisonChart from "./ComparisonChart";
import DataTable from "./DataTable";
import useKeywordHistory, { FilterValues } from "./useKeywordHistory";

/**
 * Componente principal de LongMetrics.
 * Integra los controles de filtrado y muestra los datos obtenidos de la API en varios módulos.
 */
export default function LongMetricsDashboard({ siteUrl }: { siteUrl: string }) {
    const [filters, setFilters] = useState<FilterValues>({ siteUrl });
  
    useEffect(() => {
      setFilters({ siteUrl });
    }, [siteUrl]);
  
    const { data, loading, error } = useKeywordHistory(filters);
  
    return (
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">LongMetrics Dashboard</h1>
        <FilterControls onChange={(newFilters) => setFilters(newFilters)} />
        {loading && <p>Cargando datos...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {data && (
          <>
            <KeywordTrends keywordHistory={data} />
            <PagePerformance />
            <ComparisonChart />
            <DataTable keywordHistory={data} />
          </>
        )}
      </div>
    );
  }
  