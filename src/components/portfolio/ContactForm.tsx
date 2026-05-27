"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useLang } from "@/lib/language";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORMSPREE_ID";

// Cloudflare Turnstile integration
function TurnstileWidget({
  onSuccess,
  onError,
}: {
  onSuccess: (token: string) => void;
  onError: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"; // test key

  useEffect(() => {
    // Load Turnstile script
    const existingScript = document.querySelector('script[src*="challenges.cloudflare.com"]');
    if (existingScript) {
      renderWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => renderWidget();
    document.head.appendChild(script);

    function renderWidget() {
      if (!ref.current || !(window as unknown as Record<string, unknown>).turnstile) return;
      (window as unknown as { turnstile: { render: (el: HTMLElement, opts: Record<string, unknown>) => string } }).turnstile.render(ref.current, {
        sitekey: siteKey,
        callback: onSuccess,
        "error-callback": onError,
        theme: "dark",
        size: "normal",
      });
    }

    return () => {
      // Cleanup
    };
  }, [siteKey, onSuccess, onError]);

  return <div ref={ref} className="flex justify-center" />;
}

export default function ContactForm() {
  const { lang, t, isRTL } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _turnstile: turnstileToken || "test-mode",
        }),
      });

      if (res.ok) {
        toast.success(
          lang === "ar"
            ? "تم استلام رسالتك، سنتواصل معك قريباً 🚀"
            : "Your message has been received, we'll get back to you soon! 🚀"
        );
        setFormData({ name: "", email: "", message: "" });
        setTurnstileToken(null);
      } else {
        toast.error(
          lang === "ar"
            ? "حدث خطأ أثناء الإرسال، حاول مرة أخرى"
            : "An error occurred while sending, please try again"
        );
      }
    } catch {
      toast.error(
        lang === "ar"
          ? "تعذر الاتصال بالخادم، تحقق من إنترنتك"
          : "Unable to connect to the server, check your internet"
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-[#0a0f1a] border border-[#1e2d4d] rounded-lg px-4 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630] outline-none transition-all";

  const isTestMode = FORMSPREE_ID === "YOUR_FORMSPREE_ID";

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card-dark rounded-2xl p-6 sm:p-8 space-y-5 gradient-card-border"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Send className="h-4 w-4 text-[#00ff66]" />
        <span className="text-sm font-semibold text-[#e8edf5]">
          {t("أرسل رسالة", "Send a Message")}
        </span>
      </div>

      {isTestMode && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#ffab00]/10 border border-[#ffab00]/20 text-[#ffab00] text-xs">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
          <span>
            {lang === "ar"
              ? "وضع الاختبار — قم بتعيين NEXT_PUBLIC_FORMSPREE_ID في .env.local"
              : "Test mode — Set NEXT_PUBLIC_FORMSPREE_ID in .env.local"}
          </span>
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-[#7a8ba8] mb-1.5">
          {t("الاسم", "Name")}
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder={t("أدخل اسمك", "Enter your name")}
          dir={isRTL() ? "rtl" : "ltr"}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[#7a8ba8] mb-1.5">
          {t("البريد الإلكتروني", "Email")}
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
          placeholder="example@email.com"
          dir="ltr"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[#7a8ba8] mb-1.5">
          {t("الرسالة", "Message")}
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder={t("اكتب رسالتك هنا...", "Write your message here...")}
          dir={isRTL() ? "rtl" : "ltr"}
        />
      </div>

      {/* Turnstile */}
      {!isTestMode && !turnstileToken && (
        <TurnstileWidget
          onSuccess={(token) => {
            setTurnstileToken(token);
            setTurnstileReady(true);
          }}
          onError={() => {
            setTurnstileReady(false);
          }}
        />
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={sending || (!isTestMode && !turnstileToken)}
        className="w-full gradient-neon text-[#0a0f1a] font-bold py-3 rounded-xl hover:shadow-[0_0_20px_#00ff6640] transition-shadow disabled:opacity-50"
      >
        {sending ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("جاري الإرسال...", "Sending...")}
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            {t("إرسال الرسالة", "Send Message")}
          </span>
        )}
      </Button>
    </form>
  );
}
