import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const token = await getToken({ req });
  console.log("Token recibido en API nuevooo:", token); // 👀 Verifica si el token se recibe correctamente

  const { siteUrl } = await req.json();

  if (!token?.accessToken) {
    console.error("No access token found");
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  if (!siteUrl) {
    return NextResponse.json({ error: "No site URL provided" }, { status: 400 });
  }

  try {
    const response = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inspectionUrl: siteUrl,
        siteUrl: siteUrl,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching index status:", errorData);
      return NextResponse.json({ error: "Failed to fetch index status" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ indexStatus: data });
  } catch (error) {
    console.error("Error in /api/search-console/data:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
