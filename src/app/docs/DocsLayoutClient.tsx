"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CircuitBoard,
  Home,
  ChevronRight,
  Search,
  Globe,
  Sun,
  Moon,
  Menu,
  BookOpen,
  Check,
  ChevronLeft,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { guideSections } from "@/data/guide-sections";
import { cn } from "@/lib/utils";
import {
  getReadProgress,
  getProgressPercent,
  getSectionCategories,
} from "@/lib/docs";

/* ═══════════════════════════════════════════════════════════
   ICON MAP — maps icon string names to lucide components
   ═══════════════════════════════════════════════════════════ */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: CircuitBoard,
  LayoutDashboard: CircuitBoard,
  Cpu: CircuitBoard,
  Settings: CircuitBoard,
  Palette: CircuitBoard,
  Layers: CircuitBoard,
  ShieldCheck: CircuitBoard,
  Rocket: CircuitBoard,
  Wrench: CircuitBoard,
  BookOpen: CircuitBoard,
  Code2: CircuitBoard,
  Terminal: CircuitBoard,
  HelpCircle: CircuitBoard,
  Zap: CircuitBoard,
  Smartphone: CircuitBoard,
  Search: CircuitBoard,
  Database: CircuitBoard,
  Bot: CircuitBoard,
  Key: CircuitBoard,
  Map: CircuitBoard,
  Security: CircuitBoard,
};

function SectionIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] || BookOpen;
  return <Icon className={className} />;
}

/* ═══════════════════════════════════════════════════════════
   CATEGORY NAMES (bilingual)
   ═══════════════════════════════════════════════════════════ */
const categoryNames: Record<string, { ar: string; en: string }> = {
  "Getting Started": { ar: "ابدأ من هنا", en: "Getting Started" },
  Architecture: { ar: "البنية والتصميم", en: "Architecture" },
  Features: { ar: "الميزات", en: "Features" },
  Reference: { ar: "مرجع", en: "Reference" },
};

/* ═══════════════════════════════════════════════════════════
   SIDEBAR SECTION LIST
   ═══════════════════════════════════════════════════════════ */
function SidebarContent({
  readSections,
  progress,
  lang,
  isRTL,
}: {
  readSections: Set<string>;
  progress: number;
  lang: "ar" | "en";
  isRTL: boolean;
}) {
  const pathname = usePathname();
  const categories = useMemo(() => getSectionCategories(), []);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-[#1e2d4d]">
        <div className="flex items-center gap-2 mb-3">
          <CircuitBoard className="h-4 w-4 text-[#00ff66]" />
          <span className="text-sm font-bold gradient-neon-text">
            {lang === "ar" ? "دليل المطور" : "Developer Guide"}
          </span>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#7a8ba8]">
              {lang === "ar" ? "التقدم" : "Progress"}
            </span>
            <span className="text-[#00ff66] font-mono font-medium">
              {readSections.size}/{guideSections.length}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-[#151d33] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#00ff66] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Section list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {categories.map((cat) => {
          const catName = categoryNames[cat.name] || {
            ar: cat.name,
            en: cat.name,
          };
          return (
            <div key={cat.name}>
              <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#3d506e]">
                {lang === "ar" ? catName.ar : catName.en}
              </div>
              <div className="space-y-0.5">
                {cat.sections.map((section) => {
                  const isActive = pathname === `/docs/${section.id}`;
                  const isRead = readSections.has(section.id);
                  return (
                    <Link
                      key={section.id}
                      href={`/docs/${section.id}/`}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all",
                        isActive
                          ? "bg-[#00ff66]/10 text-[#00ff66]"
                          : "text-[#7a8ba8] hover:bg-white/5 hover:text-[#e8edf5]"
                      )}
                    >
                      <SectionIcon
                        name={section.icon}
                        className={cn(
                          "h-4 w-4 shrink-0",
                          isActive ? "text-[#00ff66]" : "text-[#3d506e]"
                        )}
                      />
                      <span className="flex-1 truncate">
                        {lang === "ar"
                          ? section.title.ar
                          : section.title.en}
                      </span>
                      {isRead && (
                        <Check className="h-3 w-3 text-[#00ff66] shrink-0" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-[#1e2d4d]">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#7a8ba8] hover:bg-white/5 hover:text-[#e8edf5] transition-all"
        >
          <Home className="h-3.5 w-3.5" />
          <span>{lang === "ar" ? "العودة للرئيسية" : "Back to Home"}</span>
        </Link>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DOCS LAYOUT CLIENT (main "use client" wrapper)
   ═══════════════════════════════════════════════════════════ */
export default function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang, toggle, isRTL } = useLang();
  const { theme, toggleTheme, toggleSearch } = useGuideStore();
  const pathname = usePathname();

  // Read progress: computed directly from localStorage (re-computed on each render, cheap)
  const readSections = getReadProgress();
  const progress = getProgressPercent();

  // Sidebar state: track whether user explicitly opened it, auto-close on navigation
  const [userRequestedOpen, setUserRequestedOpen] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const sidebarOpen = userRequestedOpen && openPath === pathname;

  const handleOpenSidebar = useCallback(() => {
    setUserRequestedOpen(true);
    setOpenPath(pathname);
  }, [pathname]);

  const handleCloseSidebar = useCallback(() => {
    setUserRequestedOpen(false);
  }, []);

  // Keyboard shortcut: Cmd+K for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleSearch();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleSearch]);

  // Current section title for breadcrumbs
  const currentSection = useMemo(() => {
    const slug = pathname?.replace("/docs/", "").replace(/\/$/, "") || "";
    return guideSections.find((s) => s.id === slug);
  }, [pathname]);

  const Chevron = isRTL() ? ChevronLeft : ChevronRight;

  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col",
        isLight ? "bg-gray-50 text-gray-900" : "bg-[#0a0f1a] text-[#e8edf5]"
      )}
    >
      {/* ─── PROGRESS BAR (top) ─── */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
        <div
          className="h-full bg-[#00ff66] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ─── HEADER ─── */}
      <header
        className={cn(
          "sticky top-0 z-50 h-14 flex items-center border-b",
          isLight
            ? "bg-white/80 backdrop-blur-md border-gray-200"
            : "glass-dark border-[#1e2d4d] shadow-lg shadow-black/10"
        )}
        style={{ marginTop: "2px" }}
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-3">
            {/* Mobile sidebar toggle */}
            <button
              onClick={handleOpenSidebar}
              className={cn(
                "lg:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-all",
                isLight
                  ? "hover:bg-gray-100 text-gray-600"
                  : "hover:bg-white/10 text-[#7a8ba8]"
              )}
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Logo / Back to Home */}
            <Link
              href="/"
              className="flex items-center gap-2 group shrink-0"
            >
              <CircuitBoard
                className={cn(
                  "h-5 w-5 sm:h-6 sm:w-6 group-hover:shadow-[0_0_12px_#00ff66] transition-shadow",
                  isLight ? "text-green-600" : "text-[#00ff66]"
                )}
              />
              <span
                className={cn(
                  "font-bold text-sm sm:text-base hidden sm:inline",
                  isLight ? "text-gray-900" : "gradient-neon-text"
                )}
              >
                Smart Systems Lab
              </span>
            </Link>

            {/* Breadcrumbs */}
            <nav className="hidden md:flex items-center gap-1.5 text-xs">
              <Link
                href="/"
                className={cn(
                  "hover:underline transition-colors",
                  isLight
                    ? "text-gray-400 hover:text-gray-600"
                    : "text-[#3d506e] hover:text-[#7a8ba8]"
                )}
              >
                {lang === "ar" ? "الرئيسية" : "Home"}
              </Link>
              <Chevron
                className={cn("h-3 w-3", isLight ? "text-gray-300" : "text-[#3d506e]")}
              />
              <Link
                href="/docs/overview/"
                className={cn(
                  "hover:underline transition-colors",
                  isLight
                    ? "text-gray-400 hover:text-gray-600"
                    : "text-[#3d506e] hover:text-[#7a8ba8]"
                )}
              >
                Docs
              </Link>
              {currentSection && (
                <>
                  <Chevron
                    className={cn(
                      "h-3 w-3",
                      isLight ? "text-gray-300" : "text-[#3d506e]"
                    )}
                  />
                  <span
                    className={cn(
                      "font-medium",
                      isLight ? "text-gray-700" : "text-[#e8edf5]"
                    )}
                  >
                    {lang === "ar"
                      ? currentSection.title.ar
                      : currentSection.title.en}
                  </span>
                </>
              )}
            </nav>
          </div>

          {/* Right side: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search trigger */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={toggleSearch}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
                      isLight
                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                        : "bg-white/5 text-[#7a8ba8] hover:bg-white/10 hover:text-[#e8edf5] neon-border"
                    )}
                  >
                    <Search className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">
                      {lang === "ar" ? "بحث" : "Search"}
                    </span>
                    <kbd
                      className={cn(
                        "hidden md:inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-mono",
                        isLight
                          ? "bg-gray-200 text-gray-500"
                          : "bg-white/5 text-[#3d506e]"
                      )}
                    >
                      ⌘K
                    </kbd>
                  </button>
                </TooltipTrigger>
                <TooltipContent>Search docs (⌘K)</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Language toggle */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={toggle}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
                      isLight
                        ? "bg-gray-100 text-cyan-600 hover:bg-gray-200 border border-gray-200"
                        : "neon-border-cyan hover:bg-[#00e5ff]/5"
                    )}
                    aria-label={
                      lang === "ar"
                        ? "Switch to English"
                        : "التبديل إلى العربية"
                    }
                  >
                    <Globe className="h-3.5 w-3.5 text-[#00e5ff]" />
                    <span className="text-[#00e5ff] hidden sm:inline">
                      {lang === "ar" ? "EN" : "عربي"}
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  {lang === "ar"
                    ? "Switch to English"
                    : "التبديل إلى العربية"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Theme toggle */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={toggleTheme}
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-lg transition-all",
                      isLight
                        ? "bg-gray-100 text-amber-600 hover:bg-gray-200 border border-gray-200"
                        : "bg-white/5 text-[#ffab00] hover:bg-white/10 neon-border"
                    )}
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  {theme === "dark"
                    ? lang === "ar"
                      ? "الوضع الفاتح"
                      : "Light mode"
                    : lang === "ar"
                      ? "الوضع الداكن"
                      : "Dark mode"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      {/* ─── MAIN CONTENT AREA ─── */}
      <div className="flex-1 flex">
        {/* Desktop Sidebar */}
        <aside
          className={cn(
            "hidden lg:flex lg:flex-col lg:w-[280px] lg:fixed lg:top-[58px] lg:bottom-0 border-r overflow-hidden",
            isLight
              ? "bg-white border-gray-200"
              : "bg-[#0c1220] border-[#1e2d4d]"
          )}
        >
          <SidebarContent
            readSections={readSections}
            progress={progress}
            lang={lang}
            isRTL={isRTL()}
          />
        </aside>

        {/* Content area (with left margin on desktop for sidebar) */}
        <main
          className={cn(
            "flex-1 min-h-[calc(100vh-58px)]",
            "lg:ml-[280px]"
          )}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
            {children}
          </div>
        </main>
      </div>

      {/* ─── MOBILE SIDEBAR (Sheet) ─── */}
      <Sheet open={sidebarOpen} onOpenChange={(open) => { if (!open) handleCloseSidebar(); }}>
        <SheetContent
          side={isRTL() ? "right" : "left"}
          className={cn(
            "w-[280px] p-0",
            isLight
              ? "bg-white border-gray-200"
              : "bg-[#0c1220] border-[#1e2d4d]"
          )}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>
              {lang === "ar" ? "قائمة الأقسام" : "Section Menu"}
            </SheetTitle>
          </SheetHeader>
          <SidebarContent
            readSections={readSections}
            progress={progress}
            lang={lang}
            isRTL={isRTL()}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
