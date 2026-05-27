"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  Dialog, DialogContent, DialogTitle,
} from "@/components/ui/dialog";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { guideSections } from "@/data/guide-sections";
import { SectionIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function SearchDialog() {
  const { searchOpen, toggleSearch, markSectionRead } = useGuideStore();
  const { t, lang } = useLang();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return guideSections.map((s) => ({ section: s, subsection: null }));
    const q = query.toLowerCase();
    const matched: Array<{ section: typeof guideSections[0]; subsection: typeof guideSections[0]["subsections"][0] | null }> = [];
    for (const section of guideSections) {
      const titleMatch = section.title.ar.toLowerCase().includes(q) || section.title.en.toLowerCase().includes(q);
      const subMatch = section.subsections.find(
        (sub) => sub.title.ar.toLowerCase().includes(q) || sub.title.en.toLowerCase().includes(q)
      );
      if (titleMatch || subMatch) {
        matched.push({ section, subsection: subMatch || null });
      }
    }
    return matched;
  }, [query]);

  const navigate = useCallback(
    (sectionId: string) => {
      markSectionRead(sectionId);
      toggleSearch();
      router.push(`/docs/${sectionId}`);
      setQuery("");
      setActiveIndex(0);
    },
    [markSectionRead, toggleSearch, router]
  );

  // Focus input when dialog opens
  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!searchOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[activeIndex]) {
        e.preventDefault();
        navigate(results[activeIndex].section.id);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [searchOpen, results, activeIndex, navigate]);

  return (
    <Dialog open={searchOpen} onOpenChange={(open) => { if (!open) { toggleSearch(); setQuery(""); setActiveIndex(0); } }}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden" showCloseButton={false}>
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e2d4d]">
          <Search className="h-4 w-4 text-[#7a8ba8] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
            placeholder={t("ابحث في الأقسام...", "Search sections...")}
            className="flex-1 bg-transparent border-none outline-none text-sm text-[#e8edf5] placeholder:text-[#3d506e]"
          />
          <kbd className="text-[10px] text-[#3d506e] bg-white/5 rounded px-1.5 py-0.5 font-mono">
            ESC
          </kbd>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#7a8ba8]">
              {t("لا توجد نتائج", "No results found")}
            </div>
          ) : (
            results.map((item, i) => (
              <button
                key={item.section.id}
                onClick={() => navigate(item.section.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-start transition-all",
                  i === activeIndex
                    ? "bg-[#00ff66]/10 text-[#00ff66]"
                    : "text-[#c5cdd8] hover:bg-white/5"
                )}
              >
                <SectionIcon
                  name={item.section.icon}
                  className={cn("h-4 w-4 shrink-0", i === activeIndex ? "text-[#00ff66]" : "text-[#7a8ba8]")}
                />
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">
                    {lang === "ar" ? item.section.title.ar : item.section.title.en}
                  </div>
                  {item.subsection && (
                    <div className="text-xs text-[#7a8ba8] truncate">
                      {lang === "ar" ? item.subsection.title.ar : item.subsection.title.en}
                    </div>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
        <DialogTitle className="sr-only">{t("بحث", "Search")}</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
