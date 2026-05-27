"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Search,
  CornerDownLeft,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Hash,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLang } from "@/lib/language";

const SEARCHABLE_ITEMS = [
  { id: "hero", ar: "الرئيسية", en: "Home", section: "hero" },
  { id: "start-here", ar: "ابدأ من هنا", en: "Start Here", section: "about" },
  { id: "team", ar: "الفريق", en: "Team", section: "team" },
  { id: "services", ar: "الخدمات", en: "Services", section: "services" },
  { id: "calculator", ar: "احسب مشروعك", en: "Calculator", section: "calculator" },
  { id: "projects", ar: "المشاريع", en: "Projects", section: "projects" },
  { id: "skills", ar: "المهارات", en: "Skills", section: "skills" },
  { id: "security", ar: "فحص الأمان", en: "Security Audit", section: "audit" },
  { id: "testimonials", ar: "آراء العملاء", en: "Testimonials", section: "testimonials" },
  { id: "blog", ar: "المدونة", en: "Blog", section: "blog" },
  { id: "faq", ar: "الأسئلة الشائعة", en: "FAQ", section: "contact" },
  { id: "contact", ar: "تواصل معنا", en: "Contact", section: "contact" },
];

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/* ═══ SEARCH TRIGGER BUTTON ═══ */
export function SearchTrigger({ onClick }: { onClick: () => void }) {
  const { t, isRTL } = useLang();
  const ChevronIcon = isRTL() ? ArrowLeft : ArrowRight;

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium glass-card-dark hover:bg-white/5 transition-all group"
      aria-label={t("بحث...", "Search...")}
    >
      <Search className="h-4 w-4 text-[#7a8ba8] group-hover:text-[#00ff66] transition-colors" />
      <span className="text-[#7a8ba8] group-hover:text-[#e8edf5] transition-colors hidden sm:inline">
        {t("بحث...", "Search...")}
      </span>
      <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono text-[#3d506e] bg-[#0a0f1a]/60 border border-[#1e2d4d]">
        ⌘K
      </kbd>
    </button>
  );
}

/* ═══ SEARCH DIALOG ═══ */
export default function SearchDialog() {
  const { t, lang, isRTL } = useLang();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? SEARCHABLE_ITEMS.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.ar.includes(q) ||
          item.en.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q)
        );
      })
    : SEARCHABLE_ITEMS;

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
    (sectionId: string) => {
      scrollToSection(sectionId);
      handleClose();
    },
    [handleClose]
  );

  // Keyboard shortcut: Ctrl+K / Cmd+K
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

  // Keyboard navigation inside dialog
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0 && activeIndex < results.length) {
      e.preventDefault();
      handleSelect(results[activeIndex].section);
    } else if (e.key === "Escape") {
      handleClose();
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-result-item]");
      items[activeIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <>
      <SearchTrigger onClick={handleOpen} />
      <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
        <DialogContent
          className="sm:max-w-md glass-dark border-[#1e2d4d] p-0 gap-0 overflow-hidden"
          showCloseButton={false}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{t("بحث في الموقع", "Site Search")}</DialogTitle>
            <DialogDescription>{t("ابحث عن الأقسام", "Search for sections")}</DialogDescription>
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
              placeholder={t("ابحث عن قسم...", "Search for a section...")}
              className="flex-1 bg-transparent text-[#e8edf5] placeholder-[#3d506e] text-sm outline-none"
              dir={isRTL() ? "rtl" : "ltr"}
            />
            <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono text-[#3d506e] bg-[#0a0f1a]/60 border border-[#1e2d4d]">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div
            ref={listRef}
            className="max-h-72 overflow-y-auto py-2 px-2 code-scroll"
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
                      onClick={() => handleSelect(item.section)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                        isActive
                          ? "bg-[#00ff66]/10 text-[#00ff66]"
                          : "text-[#e8edf5] hover:bg-white/5"
                      }`}
                    >
                      <Hash
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? "text-[#00ff66]" : "text-[#3d506e]"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium block truncate">
                          {lang === "ar" ? item.ar : item.en}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-[#00ff66]/15 text-[#00ff66]"
                            : "bg-[#0a0f1a]/60 text-[#3d506e]"
                        }`}
                      >
                        #{item.section}
                      </span>
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
              {t("للاختيار", "to select")}
            </span>
            <span className="flex items-center gap-1">
              ⌘K {t("لفتح", "to open")}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
