import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "يرجى إدخال بريد إلكتروني صحيح" },
        { status: 400 }
      );
    }

    await db.newsletterSubscriber.upsert({
      where: { email },
      update: { isActive: true },
      create: { email },
    });

    return NextResponse.json({ success: true, message: "تم الاشتراك بنجاح!" });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء الاشتراك" },
      { status: 500 }
    );
  }
}
