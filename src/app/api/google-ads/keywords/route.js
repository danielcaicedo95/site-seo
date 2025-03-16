// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   const session = await getServerSession(authOptions);

//   if (!session?.accessToken) {
//     return NextResponse.json({ error: "No access token, please log in again" }, { status: 401 });
//   }

//   // 🔹 Tu Google Ads Customer ID
//   const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID;
//   const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;

//   const url = `https://googleads.googleapis.com/v13/customers/${customerId}/googleAds:search`;

//   const query = {
//     query: `
//       SELECT 
//         keyword_view.resource_name, 
//         segments.keyword_text, 
//         metrics.impressions, 
//         metrics.clicks, 
//         metrics.average_cpc 
//       FROM keyword_view 
//       WHERE segments.date DURING LAST_30_DAYS 
//       LIMIT 10
//     `,
//   };

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${session.accessToken}`,
//         "Content-Type": "application/json",
//         "developer-token": developerToken,
//       },
//       body: JSON.stringify(query),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       return NextResponse.json({ error: "Error en la API de Google Ads", details: data }, { status: response.status });
//     }

//     return NextResponse.json({ keywords: data });
//   } catch (error) {
//     return NextResponse.json({ error: "Error en la solicitud", details: error.message }, { status: 500 });
//   }
// }
