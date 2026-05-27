"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home, ChevronLeft, ChevronRight,
} from "lucide-react";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { guideSections } from "@/data/guide-sections";
import { SectionIcon } from "@/lib/icon-map";
import GuideRenderer from "@/components/guide/GuideRenderer";
import { DocsSidebar, DesktopSidebar } from "@/components/guide/Sidebar";
import { cn } from "@/lib/utils";

export default function DocsClientPage() {
  const { t, lang, isRTL } = useLang();
  const { sidebarOpen, setSidebarOpen, markSectionRead } = useGuideStore();
  const params = useParams();
  const contentRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const slug = params.slug as string;

  // Find current section
  const currentIndex = guideSections.findIndex((s) => s.id === slug);
  const currentSection = currentIndex >= 0 ? guideSections[currentIndex] : guideSections[0];
  const prevSection = currentIndex > 0 ? guideSections[currentIndex - 1] : null;
  const nextSection = currentIndex < guideSections.length - 1 ? guideSections[currentIndex + 1] : null;

  // Mark section as read
  useEffect(() => {
    if (slug) {
      markSectionRead(slug);
    }
  }, [slug, markSectionRead]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      setProgress(scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0);
    };
    const el = contentRef.current;
    if (el) el.addEventListener("scroll", handleScroll, { passive: true });
    return () => { if (el) el.removeEventListener("scroll", handleScroll); };
  }, [currentSection]);

  // Scroll to top when section changes
  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [slug]);

  // Invalid slug - redirect to first section
  if (currentIndex < 0) {
    return (
      <div className="flex-1 flex items-center justify-center pt-14">
        <div className="text-center">
          <p className="text-[#7a8ba8] mb-4">{t("القسم غير موجود", "Section not found")}</p>
          <Link
            href="/docs/overview"
            className="gradient-neon text-[#0a0f1a] px-6 py-2 rounded-lg font-bold text-sm"
          >
            {t("الذهاب للنظرة العامة", "Go to Overview")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex-1 flex pt-14"
    >
      {/* Progress bar */}
      <div className="fixed top-14 left-0 right-0 z-40 h-0.5 bg-transparent">
        <div
          className="h-full gradient-neon transition-all duration-150"
          style={{ width: `${Math.min(progress * 100, 100)}%` }}
        />
      </div>

      {/* Desktop sidebar - always visible on lg */}
      <aside className="hidden lg:block fixed top-14 bottom-0 w-[280px] overflow-y-auto shrink-0 border-r border-[#1e2d4d] bg-[#0c1220] z-30">
        <DesktopSidebar />
      </aside>

      {/* Mobile sidebar drawer */}
      <DocsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <main
        ref={contentRef}
        className={cn(
          "flex-1 overflow-y-auto",
          "lg:ml-[280px]",
          isRTL() && "lg:ml-0 lg:mr-[280px]"
        )}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs mb-6 text-[#3d506e]">
            <Link
              href="/"
              className="hover:text-[#00ff66] transition-colors flex items-center gap-1"
            >
              <Home className="h-3 w-3" />
              {t("الرئيسية", "Home")}
            </Link>
            <ChevronRight className={cn("h-3 w-3", isRTL() ? "rotate-180" : "")} />
            <span className="text-[#e8edf5] truncate">
              {lang === "ar" ? currentSection.title.ar : currentSection.title.en}
            </span>
          </div>

          {/* Section header */}
          <motion.div
            key={currentSection.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#00ff66]/10 text-[#00ff66]">
                <SectionIcon name={currentSection.icon} className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold gradient-neon-text">
                  {lang === "ar" ? currentSection.title.ar : currentSection.title.en}
                </h1>
              </div>
            </div>
            <p className="text-sm text-[#7a8ba8]">
              {lang === "ar" ? currentSection.description.ar : currentSection.description.en}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            key={`content-${currentSection.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border p-5 sm:p-8 glass-card-dark"
          >
            <GuideRenderer
              content={lang === "ar" ? currentSection.content.ar : currentSection.content.en}
              lang={lang}
            />
          </motion.div>

          {/* Prev / Next navigation */}
          <div className="flex items-center justify-between gap-4 mt-8 mb-4">
            {prevSection ? (
              <Link
                href={`/docs/${prevSection.id}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-start flex-1 transition-all glass-card-dark hover:bg-[#151d33] text-[#c5cdd8] hover:text-[#e8edf5]"
              >
                {isRTL() ? <ChevronRight className="h-4 w-4 text-[#00ff66]" /> : <ChevronLeft className="h-4 w-4 text-[#00ff66]" />}
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider mb-0.5 text-[#3d506e]">
                    {t("السابق", "Previous")}
                  </div>
                  <div className="text-sm font-medium truncate">
                    {lang === "ar" ? prevSection.title.ar : prevSection.title.en}
                  </div>
                </div>
              </Link>
            ) : <div />}
            {nextSection ? (
              <Link
                href={`/docs/${nextSection.id}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-end flex-1 transition-all glass-card-dark hover:bg-[#151d33] text-[#c5cdd8] hover:text-[#e8edf5]"
              >
                <div className="min-w-0 text-end">
                  <div className="text-[10px] uppercase tracking-wider mb-0.5 text-[#3d506e]">
                    {t("التالي", "Next")}
                  </div>
                  <div className="text-sm font-medium truncate">
                    {lang === "ar" ? nextSection.title.ar : nextSection.title.en}
                  </div>
                </div>
                {isRTL() ? <ChevronLeft className="h-4 w-4 text-[#00ff66]" /> : <ChevronRight className="h-4 w-4 text-[#00ff66]" />}
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>
    </motion.div>
  );
}
