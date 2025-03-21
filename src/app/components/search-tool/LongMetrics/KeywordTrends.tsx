// components/search-tool/LongMetrics/KeywordTrends.tsx
import React, { useState, useEffect } from "react";
import { KeywordHistory } from "./useKeywordHistory";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface KeywordTrendsProps {
  keywordHistory: KeywordHistory;
}

type TrendAnalysis = {
  keyword: string;
  upcomingGrowth: boolean;
  upcomingMonths: string[];
  monthlyAverages: Record<number, number>;
  overallAverage: number;
  upcomingAverage: number;
  historicalData: { date: string; impressions: number }[];
};

function analyzeTrends(keywordHistory: KeywordHistory): TrendAnalysis[] {
  const trends: TrendAnalysis[] = [];
  const now = new Date();
  const currentMonth = now.getMonth();
  const upcomingMonthsIndexes = [(currentMonth + 1) % 12, (currentMonth + 2) % 12];

  Object.entries(keywordHistory).forEach(([keyword, records]) => {
    const monthTotals: Record<number, { total: number; count: number }> = {};
    records.forEach(({ date, impressions }) => {
      const month = new Date(date).getMonth();
      if (!monthTotals[month]) monthTotals[month] = { total: 0, count: 0 };
      monthTotals[month].total += impressions;
      monthTotals[month].count += 1;
    });

    const monthlyAverages: Record<number, number> = {};
    let overallSum = 0,
      overallCount = 0;

    for (let m = 0; m < 12; m++) {
      if (monthTotals[m]) {
        monthlyAverages[m] = monthTotals[m].total / monthTotals[m].count;
        overallSum += monthTotals[m].total;
        overallCount += monthTotals[m].count;
      } else {
        monthlyAverages[m] = 0;
      }
    }

    const overallAverage = overallCount > 0 ? overallSum / overallCount : 0;
    const upcomingAverage =
      upcomingMonthsIndexes.reduce((sum, m) => sum + (monthlyAverages[m] || 0), 0) /
      upcomingMonthsIndexes.length;
    const upcomingGrowth = upcomingAverage > overallAverage * 1.25;
    const upcomingMonths = upcomingMonthsIndexes.map((m) =>
      new Date(2024, m, 1).toLocaleString("default", { month: "long" })
    );

    trends.push({
      keyword,
      upcomingGrowth,
      upcomingMonths,
      monthlyAverages,
      overallAverage,
      upcomingAverage,
      historicalData: records,
    });
  });

  return trends.filter((t) => t.upcomingGrowth).sort((a, b) => b.upcomingAverage - a.upcomingAverage).slice(0, 50);
}

export default function KeywordTrends({ keywordHistory }: KeywordTrendsProps) {
  const [expandedKeyword, setExpandedKeyword] = useState<string | null>(null);
  const [trendData, setTrendData] = useState<TrendAnalysis[] | null>(null);

  useEffect(() => {
    if (keywordHistory && Object.keys(keywordHistory).length > 0) {
      const analyzedData = analyzeTrends(keywordHistory);
      setTrendData(analyzedData);
    }
  }, [keywordHistory]);

  if (!trendData) {
    return (
      <div className="flex justify-center items-center h-32">
        <p className="text-gray-500">Cargando tendencias...</p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Tendencias de Palabras Clave</h2>
      <p className="text-gray-700 mb-4">
        Basándonos en datos históricos, estas palabras clave han mostrado incrementos de tráfico en ciertos meses.
        Se ha identificado que en los próximos dos meses pueden experimentar un aumento significativo, lo que permite
        a los equipos de SEO y marketing preparar contenido y campañas estratégicas con anticipación.
      </p>
      <div className="space-y-4">
        {trendData.map((trend) => (
          <div key={trend.keyword} className="border p-4 rounded-md bg-white shadow">
            <button
              onClick={() =>
                setExpandedKeyword(expandedKeyword === trend.keyword ? null : trend.keyword)
              }
              className="w-full text-left font-semibold text-blue-600 hover:underline focus:outline-none"
            >
              {trend.keyword}
            </button>
            {expandedKeyword === trend.keyword && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  Picos históricos en: {trend.upcomingMonths.join(", ")}.<br />
                  Promedio global: {trend.overallAverage.toFixed(0)} impresiones.<br />
                  Estimación próxima: {trend.upcomingAverage.toFixed(0)} impresiones.
                </p>
                <div className="mt-4 h-40">
                  <Line
                    data={{
                      labels: trend.historicalData.map((d) => d.date),
                      datasets: [
                        {
                          label: "Impresiones",
                          data: trend.historicalData.map((d) => d.impressions),
                          borderColor: "#3b82f6",
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                      scales: { x: { display: false } },
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
