import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, subject } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "يرجى ملء جميع الحقول المطلوبة" }, { status: 400 });
    }
    await db.contactMessage.create({ data: { name, email, message, subject: subject || null } });
    return NextResponse.json({ success: true, message: "تم إرسال رسالتك بنجاح" });
  } catch {
    return NextResponse.json({ error: "حدث خطأ أثناء إرسال الرسالة" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await db.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 50 });
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
