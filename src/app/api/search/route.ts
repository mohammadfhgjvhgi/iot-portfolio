import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get("q");
    if (!query) {
      return NextResponse.json({ error: "Query parameter required" }, { status: 400 });
    }

    const zai = await ZAI.create();
    const results = await zai.functions.invoke("web_search", {
      query: `${query} Arduino ESP32 microcontroller projects عربي`,
      num: 5,
    });

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
