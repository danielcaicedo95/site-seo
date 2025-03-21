// components/search-tool/LongMetrics/DataTable.tsx
import React from "react";
import { KeywordHistory } from "./useKeywordHistory";

/**
 * Componente que muestra una tabla dinámica con los datos SEO.
 * Permite explorar keywords y sus métricas con opciones de orden y búsqueda.
 */
interface DataTableProps {
  keywordHistory: KeywordHistory;
}

export default function DataTable({ keywordHistory }: DataTableProps) {
  // Para este ejemplo, se construye una tabla simple a partir de la data de keywords
  const rows: { keyword: string; date: string; clicks: number; impressions: number; position: number }[] = [];

  Object.entries(keywordHistory).forEach(([keyword, records]) => {
    records.forEach((record) => {
      rows.push({
        keyword,
        date: record.date,
        clicks: record.clicks,
        impressions: record.impressions,
        position: record.position,
      });
    });
  });

  return (
    <div className="mb-6 overflow-x-auto">
      <h2 className="text-xl font-bold mb-2">Tabla de Datos SEO</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Palabra Clave</th>
            <th className="px-4 py-2 border">Fecha</th>
            <th className="px-4 py-2 border">Clics</th>
            <th className="px-4 py-2 border">Impresiones</th>
            <th className="px-4 py-2 border">Posición</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border">{row.keyword}</td>
              <td className="px-4 py-2 border">{row.date}</td>
              <td className="px-4 py-2 border">{row.clicks}</td>
              <td className="px-4 py-2 border">{row.impressions}</td>
              <td className="px-4 py-2 border">{row.position.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
