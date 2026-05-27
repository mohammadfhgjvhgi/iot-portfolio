"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { type GuideSection } from "@/data/guide-sections";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

/* Icon mapping for section icons (string name → Lucide) */
const iconMap: Record<string, React.ElementType> = {
  Globe: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  LayoutDashboard: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  ),
  Cpu: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Palette: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  Layers: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
};

/* Fallback icon for unmapped names */
function DefaultIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

interface DocsPaginationProps {
  prev?: GuideSection;
  next?: GuideSection;
}

export default function DocsPagination({ prev, next }: DocsPaginationProps) {
  const { t, lang, isRTL } = useLang();
  const ArrowIcon = isRTL() ? ArrowLeft : ArrowRight;

  function getIcon(iconName: string) {
    const Component = iconMap[iconName] || DefaultIcon;
    return <Component />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 not-prose">
      {/* Previous button */}
      {prev ? (
        <Link
          href={`/docs/${prev.id}`}
          className={cn(
            "glass-card-dark p-4 rounded-xl border border-[#1e2d4d] hover:border-[#00ff66]/30",
            "transition-all group flex items-center gap-3",
            isRTL() ? "sm:text-right sm:flex-row-reverse" : "sm:text-left"
          )}
        >
          <div className="w-10 h-10 rounded-lg bg-[#00ff66]/10 text-[#00ff66] flex items-center justify-center shrink-0">
            {getIcon(prev.icon)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[#7a8ba8] mb-1">
              {isRTL() ? (
                <span className="flex items-center gap-1">
                  {t("التالي", "Next")}
                  <ArrowRight className="h-3 w-3 text-[#00ff66] rtl:rotate-180" />
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3 text-[#00ff66]" />
                  {t("السابق", "Previous")}
                </span>
              )}
            </p>
            <p className="text-sm font-medium text-[#e8edf5] truncate">
              {lang === "ar" ? prev.title.ar : prev.title.en}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next button */}
      {next ? (
        <Link
          href={`/docs/${next.id}`}
          className={cn(
            "glass-card-dark p-4 rounded-xl border border-[#1e2d4d] hover:border-[#00ff66]/30",
            "transition-all group flex items-center gap-3",
            isRTL() ? "sm:text-left sm:flex-row-reverse" : "sm:text-right sm:flex-row-reverse"
          )}
        >
          <div className="w-10 h-10 rounded-lg bg-[#00ff66]/10 text-[#00ff66] flex items-center justify-center shrink-0">
            {getIcon(next.icon)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[#7a8ba8] mb-1">
              {isRTL() ? (
                <span className="flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3 text-[#00ff66]" />
                  {t("السابق", "Previous")}
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  {t("التالي", "Next")}
                  <ArrowRight className="h-3 w-3 text-[#00ff66]" />
                </span>
              )}
            </p>
            <p className="text-sm font-medium text-[#e8edf5] truncate">
              {lang === "ar" ? next.title.ar : next.title.en}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
