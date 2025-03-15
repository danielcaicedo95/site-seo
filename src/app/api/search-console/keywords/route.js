import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const token = await getToken({ req });

  if (!token?.accessToken) {
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  const { siteUrl } = await req.json();
  if (!siteUrl) {
    return NextResponse.json({ error: "No site URL provided" }, { status: 400 });
  }

  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 180);

  const formattedStartDate = startDate.toISOString().split("T")[0];
  const formattedEndDate = today.toISOString().split("T")[0];

  try {
    // 🔹 Obtener hasta 100 páginas principales ordenadas por clics
    const pageResponse = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: formattedStartDate,
          endDate: formattedEndDate,
          dimensions: ["page"],
          rowLimit: 100,
          orderBy: [{ field: "clicks", order: "descending" }],
        }),
      }
    );

    if (!pageResponse.ok) {
      const errorData = await pageResponse.json();
      return NextResponse.json({ error: "Failed to fetch pages", details: errorData }, { status: pageResponse.status });
    }

    const pageData = await pageResponse.json();

    const pages = await Promise.all(
      (pageData.rows || []).map(async (page) => {
        const pageUrl = page.keys[0];

        // 🔹 Obtener MÁXIMO 30 palabras clave por URL
        const queryResponse = await fetch(
          `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              startDate: formattedStartDate,
              endDate: formattedEndDate,
              dimensions: ["query"],
              dimensionFilterGroups: [
                {
                  filters: [{ dimension: "page", expression: pageUrl }],
                },
              ],
              rowLimit: 30,
              orderBy: [{ field: "clicks", order: "descending" }],
            }),
          }
        );

        if (!queryResponse.ok) {
          console.error("⚠️ Error obteniendo consultas para:", pageUrl);
          return { url: pageUrl, queries: [], avgPagePosition: null };
        }

        const queryData = await queryResponse.json();

        // 🔹 Transformar los datos de consultas
        const queries = queryData.rows
          ? queryData.rows.map(row => ({
              query: row.keys[0],
              clicks: row.clicks || 0,
              impressions: row.impressions || 0,
              ctr: row.ctr || 0,
              position: row.position || 0,
            }))
          : [];

        // 🔹 Calcular posición promedio de la página
        const avgPagePosition = queries.length > 0
          ? queries.reduce((sum, q) => sum + q.position, 0) / queries.length
          : null;

        return {
          url: pageUrl,
          queries,
          avgPagePosition, // ✅ Agregamos esta métrica
          totalClicks: page.clicks || 0, // ✅ Total de clics de la página
          totalImpressions: page.impressions || 0, // ✅ Total de impresiones de la página
          avgCtr: queries.length > 0
            ? (queries.reduce((sum, q) => sum + q.ctr, 0) / queries.length) * 100
            : 0, // ✅ CTR promedio de la página
        };
      })
    );

    return NextResponse.json({ pages });
  } catch (error) {
    console.error("⚠️ Error interno:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
