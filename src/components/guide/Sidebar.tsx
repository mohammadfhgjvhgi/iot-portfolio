"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CircuitBoard, Search, Home, Check, ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { guideSections } from "@/data/guide-sections";
import { SectionIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════
   MOBILE SIDEBAR (Sheet drawer)
   ═══════════════════════════════════════════════════════════ */
export function DocsSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, lang, isRTL } = useLang();
  const { readSections, expandedSections, toggleSectionExpanded, setSidebarOpen } = useGuideStore();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarSearch, setSidebarSearch] = useState("");

  const activeSection = pathname.replace("/docs/", "");

  const filteredSections = useMemo(() => {
    if (!sidebarSearch.trim()) return guideSections;
    const q = sidebarSearch.toLowerCase();
    return guideSections.filter(
      (s) =>
        s.title.ar.toLowerCase().includes(q) ||
        s.title.en.toLowerCase().includes(q) ||
        s.subsections.some((sub) => sub.title.ar.toLowerCase().includes(q) || sub.title.en.toLowerCase().includes(q))
    );
  }, [sidebarSearch]);

  const handleSectionClick = useCallback(
    (id: string) => {
      router.push(`/docs/${id}`);
      onClose();
    },
    [router, onClose]
  );

  const readCount = readSections.size;
  const totalCount = guideSections.length;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <SheetContent side={isRTL() ? "right" : "left"} className="w-[280px] p-0 overflow-y-auto bg-[#0c1220] border-[#1e2d4d]">
        <SheetHeader className="p-4 border-b border-[#1e2d4d]">
          <SheetTitle className="flex items-center gap-2">
            <CircuitBoard className="h-4 w-4 text-[#00ff66]" />
            <span className="text-sm font-bold gradient-neon-text">
              {t("دليل المطور", "Developer Guide")}
            </span>
          </SheetTitle>
        </SheetHeader>

        {/* Sidebar search */}
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute top-1/2 -translate-y-1/2 left-3 h-3.5 w-3.5 text-[#7a8ba8]" />
            <Input
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder={t("تصفية الأقسام...", "Filter sections...")}
              className="pl-9 h-8 text-xs bg-[#151d33] border-[#1e2d4d] text-[#e8edf5] placeholder:text-[#3d506e]"
            />
          </div>
        </div>

        {/* Progress */}
        <div className="px-3 py-1.5">
          <div className="text-[10px] font-medium mb-1 text-[#3d506e]">
            {readCount}/{totalCount} {t("مقروءة", "read")}
          </div>
          <div className="h-1 rounded-full overflow-hidden bg-[#151d33]">
            <div
              className="h-full gradient-neon rounded-full transition-all duration-500"
              style={{ width: `${(readCount / totalCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Sections */}
        <nav className="flex-1 px-2 py-2 space-y-0.5">
          {filteredSections.map((section) => {
            const isActive = activeSection === section.id;
            const isRead = readSections.has(section.id);
            const isExpanded = expandedSections.has(section.id);

            return (
              <div key={section.id}>
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-start text-xs font-medium transition-all group",
                    isActive
                      ? "bg-[#00ff66]/10 text-[#00ff66]"
                      : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
                  )}
                >
                  <SectionIcon
                    name={section.icon}
                    className={cn("h-3.5 w-3.5 shrink-0", isActive ? "text-[#00ff66]" : "text-[#7a8ba8]")}
                  />
                  <span className="flex-1 truncate">
                    {lang === "ar" ? section.title.ar : section.title.en}
                  </span>
                  {isRead && <Check className="h-3 w-3 text-[#00ff66] shrink-0" />}
                  {section.subsections.length > 0 && (
                    <ChevronDown
                      className={cn("h-3 w-3 shrink-0 transition-transform", isExpanded && "rotate-180")}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSectionExpanded(section.id);
                      }}
                    />
                  )}
                </button>

                {/* Subsections */}
                <AnimatePresence>
                  {isExpanded && section.subsections.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-6 mr-2 mt-0.5 space-y-0.5">
                        {section.subsections.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleSectionClick(section.id)}
                            className="w-full text-start text-[11px] px-2 py-1.5 rounded-md transition-all truncate text-[#3d506e] hover:text-[#7a8ba8] hover:bg-white/3"
                          >
                            {lang === "ar" ? sub.title.ar : sub.title.en}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Back to Home */}
        <div className="p-3 border-t border-[#1e2d4d]">
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
          >
            <Home className="h-3.5 w-3.5" />
            {t("العودة للرئيسية", "Back to Home")}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* ═══════════════════════════════════════════════════════════
   DESKTOP SIDEBAR (always visible on lg)
   ═══════════════════════════════════════════════════════════ */
export function DesktopSidebar() {
  const { t, lang, isRTL } = useLang();
  const { readSections, expandedSections, toggleSectionExpanded } = useGuideStore();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarSearch, setSidebarSearch] = useState("");

  const activeSection = pathname.replace("/docs/", "");

  const filteredSections = useMemo(() => {
    if (!sidebarSearch.trim()) return guideSections;
    const q = sidebarSearch.toLowerCase();
    return guideSections.filter(
      (s) =>
        s.title.ar.toLowerCase().includes(q) ||
        s.title.en.toLowerCase().includes(q)
    );
  }, [sidebarSearch]);

  const readCount = readSections.size;
  const totalCount = guideSections.length;

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-[#1e2d4d]">
        <div className="flex items-center gap-2 mb-3">
          <CircuitBoard className="h-4 w-4 text-[#00ff66]" />
          <span className="text-sm font-bold gradient-neon-text">
            {t("دليل المطور", "Developer Guide")}
          </span>
        </div>
        {/* Search */}
        <div className="relative">
          <Search className="absolute top-1/2 -translate-y-1/2 left-3 h-3.5 w-3.5 text-[#7a8ba8]" />
          <Input
            value={sidebarSearch}
            onChange={(e) => setSidebarSearch(e.target.value)}
            placeholder={t("تصفية الأقسام...", "Filter sections...")}
            className="pl-9 h-8 text-xs bg-[#151d33] border-[#1e2d4d] text-[#e8edf5] placeholder:text-[#3d506e]"
          />
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 py-2">
        <div className="text-[10px] font-medium mb-1 text-[#3d506e]">
          {readCount}/{totalCount} {t("مقروءة", "read")}
        </div>
        <div className="h-1 rounded-full overflow-hidden bg-[#151d33]">
          <div
            className="h-full gradient-neon rounded-full transition-all duration-500"
            style={{ width: `${(readCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Section list */}
      <nav className="flex-1 overflow-y-auto px-2 py-1 space-y-0.5">
        {filteredSections.map((section) => {
          const isActive = activeSection === section.id;
          const isRead = readSections.has(section.id);
          const isExpanded = expandedSections.has(section.id);

          return (
            <div key={section.id}>
              <button
                onClick={() => router.push(`/docs/${section.id}`)}
                className={cn(
                  "w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-start text-xs font-medium transition-all",
                  isActive
                    ? "bg-[#00ff66]/10 text-[#00ff66]"
                    : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
                )}
              >
                <SectionIcon
                  name={section.icon}
                  className={cn("h-3.5 w-3.5 shrink-0", isActive ? "text-[#00ff66]" : "")}
                />
                <span className="flex-1 truncate">
                  {lang === "ar" ? section.title.ar : section.title.en}
                </span>
                {isRead && <Check className="h-3 w-3 text-[#00ff66] shrink-0" />}
                {section.subsections.length > 0 && (
                  <ChevronDown
                    className={cn("h-3 w-3 shrink-0 transition-transform", isExpanded && "rotate-180")}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSectionExpanded(section.id);
                    }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isExpanded && section.subsections.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-6 mr-2 mt-0.5 space-y-0.5">
                      {section.subsections.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => router.push(`/docs/${section.id}`)}
                          className="w-full text-start text-[11px] px-2 py-1.5 rounded-md transition-all truncate text-[#3d506e] hover:text-[#7a8ba8] hover:bg-white/3"
                        >
                          {lang === "ar" ? sub.title.ar : sub.title.en}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Back to home */}
      <div className="p-3 border-t border-[#1e2d4d]">
        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
        >
          <Home className="h-3.5 w-3.5" />
          {t("العودة للرئيسية", "Back to Home")}
        </Link>
      </div>
    </div>
  );
}
