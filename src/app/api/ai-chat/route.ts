import { NextResponse } from "next/server";

const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const NVIDIA_API_KEY = "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";
const MODEL = "meta/llama-3.1-405b-instruct";

const SYSTEM_PROMPTS = {
  ar: "أنت مساعد تقني خبير في أنظمة إنترنت الأشياء (IoT). أنت تعمل لصالح فريق 'مشاريع للأنظمة الذكية'. أجب فقط بناءً على خدمات الفريق ومشاريعهم. لا تختلق. إذا كان السؤال خارج نطاق الفريق، اقترح التواصل عبر تليجرام. أجب بإيجاز (أقل من 100 كلمة).",
  en: "You are a technical expert assistant for IoT systems. You work for 'Smart Systems Lab'. Answer only based on the team's services and projects. Don't fabricate. If outside scope, suggest contacting via Telegram. Answer briefly (under 100 words).",
} as const;

export async function POST(request: Request) {
  try {
    const { messages, language } = await request.json();

    const systemPrompt =
      SYSTEM_PROMPTS[language as keyof typeof SYSTEM_PROMPTS] ||
      SYSTEM_PROMPTS.en;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(NVIDIA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NVIDIA_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        max_tokens: 150,
        temperature: 0.2,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const errorData = await response.text();
      console.error("NVIDIA API error:", response.status, errorData);
      return NextResponse.json(
        { error: "AI service unavailable" },
        { status: response.status }
      );
    }

    const data = await response.json();

    const content =
      data.choices?.[0]?.message?.content || "No response generated.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("AI Chat API error:", error);
    if (error instanceof DOMException && error.name === "AbortError") {
      return NextResponse.json(
        { error: "Request timed out" },
        { status: 504 }
      );
    }
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
