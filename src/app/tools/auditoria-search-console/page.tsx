"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import SiteSelector from "@/app/components/search-tool/SiteSelector";
import PageMetrics from "@/app/components/search-tool/PageMetrics";
import KeywordAnalyzer from "@/app/components/search-tool/KeywordAnalyzer";
import KeywordCannibalization from "@/app/components/search-tool/KeywordCannibalization";
import KeywordPotential from "@/app/components/search-tool/KeywordPotential";
import Login from "@/app/components/search-tool/Login";
import { useKeywordData } from "@/app/components/search-tool/UseKeywordData";
import LongMetricsDashboard from "@/app/components/search-tool/LongMetrics/LongMetricsDashboard";

export default function AuditoriaSearchConsole() {
  const { data: session } = useSession();
  const [sites, setSites] = useState<string[]>([]);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"analytics" | "analyzer" | "cannibalization" | "potential" | "longmetrics">("analytics");
  const [keywordData, setKeywordData] = useState<any[]>([]);

  const { keywords, loading, error } = useKeywordData(selectedSite);

  useEffect(() => {
    if (session) {
      fetch("/api/search-console/sites")
        .then((res) => res.json())
        .then((data) => setSites(data.siteEntry?.map((site: any) => site.siteUrl) || []))
        .catch(() => console.error("Error fetching sites"));
    }
  }, [session]);

  useEffect(() => {
    setActiveTab("analytics");
  }, [selectedSite]);

  if (!session) return <Login signIn={signIn} />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Auditoría de Palabras Clave</h1>
        <p className="text-gray-600 mb-6">Bienvenido, {session.user?.email}</p>
        <button
          className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => signOut()}
        >
          Cerrar sesión
        </button>

        <SiteSelector sites={sites} setSelectedSite={setSelectedSite} />

        {selectedSite && (
          <>
            <div className="mt-4 flex border-b">
              <button
                className={`px-4 py-2 ${activeTab === "analytics" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-t`}
                onClick={() => setActiveTab("analytics")}
              >
                📊 Keyword Analytics
              </button>
              <button
                className={`px-4 py-2 ml-2 ${activeTab === "analyzer" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-t`}
                onClick={() => setActiveTab("analyzer")}
              >
                🔎 Keyword Analyzer
              </button>
              <button
                className={`px-4 py-2 ml-2 ${activeTab === "cannibalization" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-t`}
                onClick={() => setActiveTab("cannibalization")}
              >
                ⚠️ Keyword Cannibalization
              </button>
              <button
                className={`px-4 py-2 ml-2 ${activeTab === "potential" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-t`}
                onClick={() => setActiveTab("potential")}
              >
                🚀 Keyword Potential
              </button>
              <button
                className={`px-4 py-2 ml-2 ${activeTab === "longmetrics" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-t`}
                onClick={() => setActiveTab("longmetrics")}
              >
                📈 LongMetrics
              </button>
            </div>

            <div className="p-4 border border-t-0 bg-white">
              {activeTab === "analytics" ? (
                loading ? (
                  <p className="text-center text-gray-500">Cargando datos...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : (
                  <PageMetrics siteUrl={selectedSite} onDataLoaded={setKeywordData} />
                )
              ) : activeTab === "analyzer" ? (
                <KeywordAnalyzer data={keywordData} />
              ) : activeTab === "cannibalization" ? (
                <KeywordCannibalization data={keywordData} />
              ) : activeTab === "potential" ? (
                <KeywordPotential data={keywordData} />
              ) : (
                <LongMetricsDashboard siteUrl={selectedSite} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
