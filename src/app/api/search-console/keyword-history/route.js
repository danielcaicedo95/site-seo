// /api/search-console/keyword-history/route.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  // Obtenemos el token, incluyendo el secret
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("🔍 Token recibido en keyword-history:", token);

  if (!token?.accessToken) {
    console.error("⚠️ No se obtuvo accessToken en keyword-history");
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  const { siteUrl } = await req.json();
  if (!siteUrl) {
    return NextResponse.json({ error: "No site URL provided" }, { status: 400 });
  }

  try {
    // Calculamos el rango: desde hace hasta 4 años (o lo máximo disponible)
    const today = new Date();
    const oldestDate = new Date();
    oldestDate.setFullYear(today.getFullYear() - 4);

    const formattedStartDate = oldestDate.toISOString().split("T")[0];
    const formattedEndDate = today.toISOString().split("T")[0];

    // Realizamos la consulta a la API de Google Search Console
    const keywordResponse = await fetch(
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
          dimensions: ["query", "date"], // Agrupar por palabra clave y fecha
          rowLimit: 25000, // Permitimos un gran volumen de datos
        }),
      }
    );

    if (!keywordResponse.ok) {
      const errorData = await keywordResponse.json();
      console.error("⚠️ Error en la consulta de histórico:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch keyword history", details: errorData },
        { status: keywordResponse.status }
      );
    }

    const keywordData = await keywordResponse.json();

    // Organizamos los datos: agrupamos por cada palabra clave
    const keywordHistory = {};
    (keywordData.rows || []).forEach((row) => {
      const [query, date] = row.keys;
      if (!keywordHistory[query]) {
        keywordHistory[query] = [];
      }
      keywordHistory[query].push({
        date,
        clicks: row.clicks || 0,
        impressions: row.impressions || 0,
        position: row.position || 0,
      });
    });

    return NextResponse.json({ keywordHistory });
  } catch (error) {
    console.error("⚠️ Error interno en keyword-history:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
