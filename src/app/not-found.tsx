"use client";

import { AlertTriangle, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLang } from "@/lib/language";

export default function NotFound() {
  const { t, isRTL } = useLang();

  const helpfulLinks = [
    { label: t("الرئيسية", "Home"), href: "/" },
    { label: t("المشاريع", "Projects"), href: "/#projects" },
    { label: t("الخدمات", "Services"), href: "/#services" },
    { label: t("تواصل معنا", "Contact Us"), href: "/#contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-[#0a0f1a]">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh-dark opacity-60" />
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00ff66]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00e5ff]/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex p-6 rounded-3xl glass-card-dark mb-8"
        >
          <AlertTriangle className="h-16 w-16 text-[#ffab00]" />
        </motion.div>

        {/* Error code */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-8xl font-extrabold gradient-neon-text mb-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-[#e8edf5] mb-3"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {t("الصفحة غير موجودة", "Page Not Found")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#7a8ba8] mb-8 leading-relaxed"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {isRTL()
            ? "يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها.\nتأكد من صحة الرابط أو عُد إلى الصفحة الرئيسية."
            : "The page you're looking for doesn't exist or has been moved.\nCheck the URL or go back to the homepage."}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            size="lg"
            className="gradient-neon text-[#0a0f1a] font-bold rounded-xl px-8 shadow-[0_0_20px_#00ff6630] gap-2"
            onClick={() => (window.location.href = "/")}
          >
            <Home className="h-4 w-4" />
            {t("العودة للرئيسية", "Back to Home")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl px-8 gap-2 neon-border text-[#00e5ff] hover:bg-[#00e5ff]/10"
            onClick={() => window.history.back()}
          >
            {isRTL() ? <ArrowRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 rotate-180" />}
            {t("الصفحة السابقة", "Previous Page")}
          </Button>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-[#1e2d4d]"
        >
          <p className="text-xs text-[#7a8ba8] mb-4">
            {t("صفحات قد تهمك:", "Pages you might find useful:")}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {helpfulLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs rounded-lg glass-card-dark text-[#7a8ba8] hover:text-[#00ff66] hover:bg-[#00ff66]/5 transition-all neon-border"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
