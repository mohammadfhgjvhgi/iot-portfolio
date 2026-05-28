"use client";

import React from "react";
import Link from "next/link";
import {
  CircuitBoard, ExternalLink, BookOpen, FileText,
} from "lucide-react";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const { t, lang } = useLang();
  const { theme } = useGuideStore();
  const isLight = theme === "light";

  const mainLinks = [
    { label: t("المنصة التعليمية", "Learning Platform"), href: "/platform/" },
    { label: t("المسار التعليمي", "Learning Path"), href: "/platform/learning" },
    { label: t("المشاريع", "Projects"), href: "/platform/projects" },
    { label: t("الحساسات", "Sensors"), href: "/platform/sensors" },
  ];

  const docsLinks = [
    { label: t("نظرة عامة", "Overview"), href: "/docs/overview/" },
    { label: t("الهيكل التقني", "Architecture"), href: "/docs/architecture/" },
    { label: t("التقنيات", "Tech Stack"), href: "/docs/technologies/" },
    { label: t("الأمان", "Security"), href: "/docs/security/" },
  ];

  const externalLinks = [
    { label: "GitHub", href: "https://github.com/mohammadfhgjvhgi/iot-portfolio" },
    { label: t("تليجرام", "Telegram"), href: "https://t.me/Mashari3_AI_Arduino" },
    { label: "WhatsApp", href: "https://wa.me/972569303043" },
  ];

  return (
    <footer className={cn("border-t mt-auto", isLight ? "bg-gray-50 border-gray-200" : "bg-[#080c16] border-[#1e2d4d]")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6">
          {/* Logo & description */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-3 group">
              <CircuitBoard className={cn(
                "h-5 w-5 transition-shadow",
                isLight ? "text-emerald-600" : "text-[#00ff66] group-hover:shadow-[0_0_12px_#00ff66]"
              )} />
              <span className={cn(
                "text-sm font-bold",
                isLight ? "text-gray-900" : "gradient-neon-text"
              )}>
                {t("Smart Systems Lab", "Smart Systems Lab")}
              </span>
            </Link>
            <p className={cn(
              "text-xs leading-relaxed",
              isLight ? "text-gray-500" : "text-[#3d506e]"
            )}>
              {t(
                "فريق هندسي من فلسطين يصنع أنظمة إنترنت الأشياء والأتمتة الذكية. منصة تعليمية + دليل مطور شامل.",
                "An engineering team from Palestine building real IoT and smart automation systems. Educational platform + comprehensive developer guide."
              )}
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className={cn(
              "text-xs font-semibold mb-3 flex items-center gap-1.5",
              isLight ? "text-gray-700" : "text-[#e8edf5]"
            )}>
              <BookOpen className="h-3.5 w-3.5 text-emerald-500" />
              {t("المنصة التعليمية", "Learning Platform")}
            </h4>
            <div className="flex flex-col gap-y-1.5">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs transition-colors hover:underline",
                    isLight ? "text-gray-500 hover:text-emerald-600" : "text-[#7a8ba8] hover:text-emerald-400"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Docs links */}
          <div>
            <h4 className={cn(
              "text-xs font-semibold mb-3 flex items-center gap-1.5",
              isLight ? "text-gray-700" : "text-[#e8edf5]"
            )}>
              <FileText className="h-3.5 w-3.5 text-[#00e5ff]" />
              {t("دليل المطور", "Developer Guide")}
            </h4>
            <div className="flex flex-col gap-y-1.5">
              {docsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs transition-colors hover:underline",
                    isLight ? "text-gray-500 hover:text-cyan-600" : "text-[#7a8ba8] hover:text-cyan-400"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* External links */}
          <div>
            <h4 className={cn(
              "text-xs font-semibold mb-3",
              isLight ? "text-gray-700" : "text-[#e8edf5]"
            )}>
              {t("روابط خارجية", "External Links")}
            </h4>
            <div className="flex flex-col gap-y-1.5">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-xs transition-colors flex items-center gap-1 hover:underline",
                    isLight ? "text-gray-500 hover:text-gray-700" : "text-[#7a8ba8] hover:text-[#e8edf5]"
                  )}
                >
                  {link.label}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={cn(
          "border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-2",
          isLight ? "border-gray-200" : "border-[#1e2d4d]"
        )}>
          <p className={cn(
            "text-[10px] sm:text-xs text-center",
            isLight ? "text-gray-400" : "text-[#2a3d5c]"
          )}>
            {t(
              "صُنع بشغف في فلسطين 🇵🇸 — جميع الحقوق محفوظة © 2025",
              "Made with passion in Palestine 🇵🇸 — All rights reserved © 2025"
            )}
          </p>
          <div className="flex items-center gap-3">
            <Link href="/platform/" className={cn(
              "text-[10px] hover:underline",
              isLight ? "text-gray-400 hover:text-emerald-600" : "text-[#3d506e] hover:text-emerald-400"
            )}>
              {t("المنصة التعليمية", "Platform")}
            </Link>
            <Link href="/docs/overview/" className={cn(
              "text-[10px] hover:underline",
              isLight ? "text-gray-400 hover:text-cyan-600" : "text-[#3d506e] hover:text-cyan-400"
            )}>
              {t("دليل المطور", "Docs")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
