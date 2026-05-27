"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { GuideSection } from "@/data/guide-sections";
import GuideRenderer from "@/components/guide/GuideRenderer";
import { markSectionRead } from "@/lib/docs";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════
   DOCS PAGINATION (Prev / Next)
   ═══════════════════════════════════════════════════════════ */
function DocsPagination({
  prev,
  next,
}: {
  prev?: GuideSection;
  next?: GuideSection;
}) {
  const { lang, isRTL } = useLang();
  const { theme } = useGuideStore();
  const isLight = theme === "light";
  const PrevArrow = isRTL() ? ArrowRight : ArrowLeft;
  const NextArrow = isRTL() ? ArrowLeft : ArrowRight;

  return (
    <div className="flex items-center justify-between gap-4 mt-12 pt-6 border-t border-[#1e2d4d]">
      {prev ? (
        <Link
          href={`/docs/${prev.id}/`}
          className={cn(
            "flex-1 group flex items-center gap-3 p-4 rounded-xl transition-all",
            isLight
              ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md"
              : "glass-card-dark card-hover"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-lg shrink-0",
              isLight
                ? "bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-600"
                : "bg-white/5 text-[#7a8ba8] group-hover:bg-[#00ff66]/10 group-hover:text-[#00ff66]"
            )}
          >
            <PrevArrow className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div
              className={cn(
                "text-[10px] uppercase tracking-wider mb-0.5",
                isLight ? "text-gray-400" : "text-[#3d506e]"
              )}
            >
              {lang === "ar" ? "السابق" : "Previous"}
            </div>
            <div
              className={cn(
                "text-sm font-medium truncate",
                isLight ? "text-gray-700" : "text-[#e8edf5]"
              )}
            >
              {lang === "ar" ? prev.title.ar : prev.title.en}
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/docs/${next.id}/`}
          className={cn(
            "flex-1 group flex items-center justify-end gap-3 p-4 rounded-xl transition-all text-end",
            isLight
              ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md"
              : "glass-card-dark card-hover"
          )}
        >
          <div className="min-w-0">
            <div
              className={cn(
                "text-[10px] uppercase tracking-wider mb-0.5",
                isLight ? "text-gray-400" : "text-[#3d506e]"
              )}
            >
              {lang === "ar" ? "التالي" : "Next"}
            </div>
            <div
              className={cn(
                "text-sm font-medium truncate",
                isLight ? "text-gray-700" : "text-[#e8edf5]"
              )}
            >
              {lang === "ar" ? next.title.ar : next.title.en}
            </div>
          </div>
          <div
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-lg shrink-0",
              isLight
                ? "bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-600"
                : "bg-white/5 text-[#7a8ba8] group-hover:bg-[#00ff66]/10 group-hover:text-[#00ff66]"
            )}
          >
            <NextArrow className="h-4 w-4" />
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DOCS SECTION CLIENT
   ═══════════════════════════════════════════════════════════ */
export default function DocsSectionClient({
  section,
  prev,
  next,
}: {
  section: GuideSection;
  prev?: GuideSection;
  next?: GuideSection;
}) {
  const { lang, isRTL } = useLang();
  const { theme } = useGuideStore();
  const isLight = theme === "light";

  // Mark section as read on mount
  useEffect(() => {
    markSectionRead(section.id);
  }, [section.id]);

  // Also mark in Zustand store for sidebar sync
  const { markSectionRead: storeMarkRead } = useGuideStore();
  useEffect(() => {
    storeMarkRead(section.id);
  }, [section.id, storeMarkRead]);

  return (
    <div className="animate-in fade-in-0 duration-300">
      {/* ─── SECTION HEADER ─── */}
      <div className="mb-8">
        {/* Icon badge */}
        <div
          className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4",
            isLight
              ? "bg-green-50 text-green-600"
              : "bg-[#00ff66]/10 text-[#00ff66]"
          )}
        >
          <BookOpen className="h-6 w-6" />
        </div>

        {/* Title */}
        <h1
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-bold mb-3",
            isLight ? "text-gray-900" : "gradient-neon-text"
          )}
        >
          {lang === "ar" ? section.title.ar : section.title.en}
        </h1>

        {/* Description */}
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed max-w-2xl",
            isLight ? "text-gray-500" : "text-[#7a8ba8]"
          )}
        >
          {lang === "ar" ? section.description.ar : section.description.en}
        </p>

        {/* Subsections chips */}
        {section.subsections.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {section.subsections.map((sub) => (
              <span
                key={sub.id}
                className={cn(
                  "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium",
                  isLight
                    ? "bg-gray-100 text-gray-500 border border-gray-200"
                    : "bg-[#151d33] text-[#7a8ba8] border border-[#1e2d4d]"
                )}
              >
                {lang === "ar" ? sub.title.ar : sub.title.en}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ─── CONTENT ─── */}
      <div
        className={cn(
          "rounded-xl p-4 sm:p-6 lg:p-8 mb-6",
          isLight
            ? "bg-white border border-gray-200 shadow-sm"
            : "glass-card-dark"
        )}
      >
        <GuideRenderer
          content={lang === "ar" ? section.content.ar : section.content.en}
          lang={lang}
        />
      </div>

      {/* ─── PAGINATION ─── */}
      <DocsPagination prev={prev} next={next} />
    </div>
  );
}
