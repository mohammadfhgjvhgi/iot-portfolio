"use client";

import { AlertTriangle, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/30 dark:via-background dark:to-teal-950/20" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Icon */}
        <div className="inline-flex p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/30 mb-8">
          <AlertTriangle className="h-16 w-16 text-amber-500 dark:text-amber-400" />
        </div>

        {/* Error code */}
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-bold text-foreground mb-3">
          الصفحة غير موجودة
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          <br />
          تأكد من صحة الرابط أو عُد إلى الصفحة الرئيسية.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 shadow-lg shadow-emerald-600/20 gap-2 font-semibold"
            onClick={() => window.location.href = "/"}
          >
            <Home className="h-4 w-4" />
            العودة للرئيسية
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl px-8 gap-2 border-border/60"
            onClick={() => window.history.back()}
          >
            <ArrowRight className="h-4 w-4" />
            الصفحة السابقة
          </Button>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground mb-4">صفحات قد تهمك:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "الرئيسية", href: "/" },
              { label: "المسار التعليمي", href: "/?tab=learning" },
              { label: "المشاريع", href: "/?tab=projects" },
              { label: "الدعم الفني", href: "/?tab=support" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs rounded-lg bg-muted/50 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
