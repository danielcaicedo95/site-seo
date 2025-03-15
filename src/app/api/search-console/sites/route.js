import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = await getToken({ req });

  if (!token?.accessToken) {
    console.error("No access token found");
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  try {
    const response = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching sites from Google Search Console:", errorData);
      return NextResponse.json({ error: "Failed to fetch sites" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/search-console/sites:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}