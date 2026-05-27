"use client";

import React from "react";
import Link from "next/link";
import {
  CircuitBoard, ExternalLink,
} from "lucide-react";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const { t, lang } = useLang();
  const { theme } = useGuideStore();
  const isLight = theme === "light";

  const quickLinks = [
    { label: t("نظرة عامة", "Overview"), href: "/docs/overview" },
    { label: t("التقنيات", "Tech Stack"), href: "/docs/technologies" },
    { label: t("المكونات", "Components"), href: "/docs/components" },
    { label: t("الأمان", "Security"), href: "/docs/security" },
  ];

  const externalLinks = [
    { label: "GitHub", href: "https://github.com/mohammadfhgjvhgi/iot-portfolio" },
    { label: t("تليجرام", "Telegram"), href: "https://t.me/Mashari3_AI_Arduino" },
    { label: "WhatsApp", href: "https://wa.me/972569303043" },
  ];

  return (
    <footer className={cn("border-t mt-auto", "bg-[#080c16] border-[#1e2d4d]")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <CircuitBoard className="h-5 w-5 text-[#00ff66]" />
              <span className="text-sm font-bold gradient-neon-text">
                {t("Smart Systems Lab", "Smart Systems Lab")}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#3d506e]">
              {t(
                "دليل المطور الشامل — وثائق تقنية مفصلة لمشروع IoT Portfolio v2.1",
                "Comprehensive Developer Guide — Detailed technical documentation for IoT Portfolio v2.1"
              )}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold mb-3 text-[#e8edf5]">
              {t("روابط سريعة", "Quick Links")}
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#7a8ba8] hover:text-[#00ff66] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* External links */}
          <div>
            <h4 className="text-xs font-semibold mb-3 text-[#e8edf5]">
              {t("روابط خارجية", "External Links")}
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#7a8ba8] hover:text-[#00ff66] transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1e2d4d] pt-4">
          <p className="text-[10px] sm:text-xs text-center text-[#2a3d5c]">
            {t(
              "صُنع بشغف في فلسطين 🇵🇸 — جميع الحقوق محفوظة © 2025",
              "Made with passion in Palestine 🇵🇸 — All rights reserved © 2025"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
