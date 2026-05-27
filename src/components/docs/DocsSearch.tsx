"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  Search,
  Command,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  BookOpen,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { guideSections } from "@/data/guide-sections";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

/* ═══ SEARCH TRIGGER BUTTON ═══ */
export function DocsSearchTrigger({ onClick }: { onClick: () => void }) {
  const { t } = useLang();

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium glass-card-dark hover:bg-white/5 transition-all group"
      aria-label={t("بحث في الدليل...", "Search docs...")}
    >
      <Search className="h-4 w-4 text-[#7a8ba8] group-hover:text-[#00ff66] transition-colors" />
      <span className="text-[#7a8ba8] group-hover:text-[#e8edf5] transition-colors hidden sm:inline">
        {t("بحث...", "Search...")}
      </span>
      <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono text-[#3d506e] bg-white/5 border border-[#1e2d4d]">
        <Command className="h-2.5 w-2.5" />K
      </kbd>
    </button>
  );
}

/* ═══ SEARCH DIALOG ═══ */
export default function DocsSearch() {
  const { t, lang, isRTL } = useLang();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  /* Flatten guide sections + subsections for search */
  const searchableItems = useMemo(() => {
    const items: {
      id: string;
      sectionId: string;
      ar: string;
      en: string;
      arDesc: string;
      enDesc: string;
      isSubsection: boolean;
    }[] = [];

    for (const section of guideSections) {
      items.push({
        id: section.id,
        sectionId: section.id,
        ar: section.title.ar,
        en: section.title.en,
        arDesc: section.description.ar,
        enDesc: section.description.en,
        isSubsection: false,
      });
      for (const sub of section.subsections) {
        items.push({
          id: `${section.id}#${sub.id}`,
          sectionId: section.id,
          ar: sub.title.ar,
          en: sub.title.en,
          arDesc: section.title.ar,
          enDesc: section.title.en,
          isSubsection: true,
        });
      }
    }
    return items;
  }, []);

  /* Filter results based on query */
  const results = useMemo(() => {
    if (!query.trim()) return searchableItems.slice(0, 12);
    const q = query.toLowerCase().trim();
    return searchableItems.filter(
      (item) =>
        item.ar.includes(q) ||
        item.en.toLowerCase().includes(q) ||
        item.arDesc.includes(q) ||
        item.enDesc.toLowerCase().includes(q) ||
        item.sectionId.includes(q)
    );
  }, [query, searchableItems]);

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery("");
    setActiveIndex(-1);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(-1);
  }, []);

  const handleSelect = useCallback(
    (item: (typeof searchableItems)[number]) => {
      // Navigate to the docs section page
      const hash = item.isSubsection ? `#${item.id.split("#")[1]}` : "";
      window.location.href = `/docs/${item.sectionId}${hash}`;
      handleClose();
    },
    [handleClose]
  );

  /* Keyboard shortcut: Ctrl+K / Cmd+K */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) {
          handleClose();
        } else {
          handleOpen();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleOpen, handleClose]);

  /* Keyboard navigation inside dialog */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (
      e.key === "Enter" &&
      activeIndex >= 0 &&
      activeIndex < results.length
    ) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    } else if (e.key === "Escape") {
      handleClose();
    }
  };

  /* Scroll active item into view */
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-result-item]");
      items[activeIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <>
      <DocsSearchTrigger onClick={handleOpen} />
      <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
        <DialogContent
          className="sm:max-w-lg glass-dark border-[#1e2d4d] p-0 gap-0 overflow-hidden"
          showCloseButton={false}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>
              {t("بحث في الدليل", "Search Documentation")}
            </DialogTitle>
            <DialogDescription>
              {t("ابحث عن الأقسام والمواضيع", "Search sections and topics")}
            </DialogDescription>
          </DialogHeader>

          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-[#1e2d4d] px-4 py-3">
            <Search className="h-5 w-5 text-[#7a8ba8] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              placeholder={t("ابحث في الدليل...", "Search documentation...")}
              className="flex-1 bg-transparent text-[#e8edf5] placeholder-[#3d506e] text-sm outline-none"
              dir={isRTL() ? "rtl" : "ltr"}
            />
            <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono text-[#3d506e] bg-white/5 border border-[#1e2d4d]">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div
            ref={listRef}
            className="max-h-80 overflow-y-auto py-2 px-2"
          >
            {results.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <Search className="h-8 w-8 text-[#3d506e] mb-3" />
                <p className="text-sm text-[#7a8ba8]">
                  {t("لا توجد نتائج", "No results found")}
                </p>
                <p className="text-xs text-[#3d506e] mt-1">
                  {t("جرب كلمات بحث مختلفة", "Try different search terms")}
                </p>
              </div>
            ) : (
              <div className="space-y-0.5">
                {results.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={item.id}
                      data-result-item
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left",
                        isActive
                          ? "bg-[#00ff66]/10 text-[#00ff66]"
                          : "text-[#c5cdd8] hover:bg-white/5 hover:text-[#e8edf5]"
                      )}
                      dir={isRTL() ? "rtl" : "ltr"}
                    >
                      <BookOpen
                        className={cn(
                          "h-4 w-4 shrink-0",
                          isActive ? "text-[#00ff66]" : "text-[#3d506e]"
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium block truncate">
                          {lang === "ar" ? item.ar : item.en}
                        </span>
                        {item.isSubsection && (
                          <span className="text-[11px] text-[#3d506e] block truncate mt-0.5">
                            {lang === "ar" ? item.arDesc : item.enDesc}
                          </span>
                        )}
                      </div>
                      {isActive && (
                        <CornerDownLeft className="h-3.5 w-3.5 text-[#00ff66] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="border-t border-[#1e2d4d] px-4 py-2 flex items-center justify-between text-[10px] text-[#3d506e]">
            <span className="flex items-center gap-1">
              <ArrowUp className="h-3 w-3" />
              <ArrowDown className="h-3 w-3" />
              {t("للتنقل", "to navigate")}
            </span>
            <span className="flex items-center gap-1">
              <CornerDownLeft className="h-3 w-3" />
              {t("لفتح", "to open")}
            </span>
            <span className="flex items-center gap-1">
              <Command className="h-2.5 w-2.5" />K {t("للإغلاق", "to close")}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
