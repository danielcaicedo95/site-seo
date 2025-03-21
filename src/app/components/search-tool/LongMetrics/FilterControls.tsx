// components/search-tool/LongMetrics/FilterControls.tsx
import React, { useState } from "react";

interface FilterControlsProps {
  onChange: (filters: { siteUrl: string }) => void;
}

/**
 * Componente de controles de filtrado para seleccionar el sitio web y otros filtros.
 */
export default function FilterControls({ onChange }: FilterControlsProps) {
  const [siteUrl, setSiteUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange({ siteUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">
        <span className="font-bold">Sitio Web:</span>
        <input
          type="text"
          placeholder="https://www.tusitio.com"
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Aplicar Filtro
      </button>
    </form>
  );
}
