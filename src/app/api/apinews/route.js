export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
      return new Response(JSON.stringify({ error: "No search query provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=es&pageSize=3&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Error en la API externa");
    }

    const data = await response.json();

    return new Response(JSON.stringify({ articles: data.articles.slice(0, 3) }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error en la API de tendencias:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
