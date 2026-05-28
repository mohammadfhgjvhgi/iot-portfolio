"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Home,
  ChevronRight,
  ChevronLeft,
  Search,
  Globe,
  Sun,
  Moon,
  Menu,
  Send,
  MessageCircle,
  Facebook,
  GraduationCap,
  Lightbulb,
  Radio,
  Terminal,
  Package,
  Calculator,
  HelpCircle,
  Users,
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
import { Button } from "@/components/ui/button";

/* ═══════════════════════════════════════════════════════════
   NAVIGATION DATA
   ═══════════════════════════════════════════════════════════ */

interface NavItem {
  id: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  ar: string;
  en: string;
}

interface NavSection {
  id: string;
  ar: string;
  en: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    id: "main",
    ar: "الأقسام الرئيسية",
    en: "Main Sections",
    items: [
      { id: "home", href: "/platform/", icon: Home, ar: "الرئيسية", en: "Home" },
      {
        id: "learning",
        href: "/platform/learning",
        icon: GraduationCap,
        ar: "المسار التعليمي",
        en: "Learning Path",
      },
      {
        id: "projects",
        href: "/platform/projects",
        icon: Lightbulb,
        ar: "المشاريع",
        en: "Projects",
      },
      {
        id: "sensors",
        href: "/platform/sensors",
        icon: Radio,
        ar: "الحساسات",
        en: "Sensors",
      },
    ],
  },
  {
    id: "tools",
    ar: "أدوات وموارد",
    en: "Tools & Resources",
    items: [
      {
        id: "environments",
        href: "/platform/environments",
        icon: Terminal,
        ar: "بيئات البرمجة",
        en: "Environments",
      },
      {
        id: "starter-kits",
        href: "/platform/starter-kits",
        icon: Package,
        ar: "أطقم البدء",
        en: "Starter Kits",
      },
      {
        id: "calculator",
        href: "/platform/calculator",
        icon: Calculator,
        ar: "الآلة الحاسبة",
        en: "Calculator",
      },
    ],
  },
  {
    id: "community",
    ar: "المجتمع",
    en: "Community",
    items: [
      {
        id: "support",
        href: "/platform/support",
        icon: HelpCircle,
        ar: "الدعم الفني",
        en: "Support",
      },
      {
        id: "about",
        href: "/platform/about",
        icon: Users,
        ar: "من نحن",
        en: "About",
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   SIDEBAR CONTENT (shared between desktop & mobile)
   ═══════════════════════════════════════════════════════════ */
function SidebarContent({
  lang,
  isRTL,
  isLight,
  onNavigate,
}: {
  lang: "ar" | "en";
  isRTL: boolean;
  isLight: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) => {
      if (href === "/platform/") return pathname === "/platform/";
      return pathname?.startsWith(href) ?? false;
    },
    [pathname]
  );

  return (
    <div className="flex flex-col h-full">
      {/* ── Sidebar Header ── */}
      <div
        className={cn(
          "p-4 border-b",
          isLight ? "border-gray-200" : "border-[#1e2d4d]"
        )}
      >
        <div className="flex items-center gap-2">
          <BookOpen
            className={cn(
              "h-5 w-5",
              isLight ? "text-emerald-600" : "text-emerald-400"
            )}
          />
          <span
            className={cn(
              "text-sm font-bold",
              isLight ? "text-emerald-700" : "text-emerald-400"
            )}
          >
            {lang === "ar" ? "المنصة التعليمية" : "Learning Platform"}
          </span>
        </div>
      </div>

      {/* ── Navigation Sections ── */}
      <div className="flex-1 overflow-y-auto p-3 space-y-5">
        {navSections.map((section) => (
          <div key={section.id}>
            <div
              className={cn(
                "px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider",
                isLight ? "text-gray-400" : "text-[#3d506e]"
              )}
            >
              {lang === "ar" ? section.ar : section.en}
            </div>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all",
                      active
                        ? isLight
                          ? "bg-emerald-50 text-emerald-700 font-medium"
                          : "bg-emerald-500/10 text-emerald-400 font-medium"
                        : isLight
                          ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          : "text-[#7a8ba8] hover:bg-white/5 hover:text-[#e8edf5]"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        active
                          ? isLight
                            ? "text-emerald-600"
                            : "text-emerald-400"
                          : isLight
                            ? "text-gray-400"
                            : "text-[#3d506e]"
                      )}
                    />
                    <span className="flex-1 truncate">
                      {lang === "ar" ? item.ar : item.en}
                    </span>
                    {active && (
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full shrink-0",
                          isLight ? "bg-emerald-500" : "bg-emerald-400"
                        )}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ── Sidebar Footer ── */}
      <div
        className={cn(
          "p-3 border-t space-y-2",
          isLight ? "border-gray-200" : "border-[#1e2d4d]"
        )}
      >
        {/* Social links */}
        <div className="flex items-center gap-2">
          <a
            href="https://t.me/smart_systems_lab"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-lg transition-all",
              isLight
                ? "text-sky-500 hover:bg-sky-50"
                : "text-sky-400 hover:bg-white/5"
            )}
            aria-label="Telegram"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href="https://facebook.com/smart.systems.lab"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-lg transition-all",
              isLight
                ? "text-blue-500 hover:bg-blue-50"
                : "text-blue-400 hover:bg-white/5"
            )}
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all",
            isLight
              ? "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              : "text-[#7a8ba8] hover:bg-white/5 hover:text-[#e8edf5]"
          )}
        >
          <Home className="h-3.5 w-3.5" />
          <span>{lang === "ar" ? "العودة للرئيسية" : "Back to Home"}</span>
        </Link>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   BREADCRUMBS HELPERS
   ═══════════════════════════════════════════════════════════ */
function getSectionLabel(pathname: string, lang: "ar" | "en"): string | null {
  for (const section of navSections) {
    for (const item of section.items) {
      if (
        item.href === "/platform/"
          ? pathname === "/platform/"
          : pathname?.startsWith(item.href)
      ) {
        return lang === "ar" ? item.ar : item.en;
      }
    }
  }
  return null;
}

/* ═══════════════════════════════════════════════════════════
   PLATFORM LAYOUT CLIENT (main "use client" wrapper)
   ═══════════════════════════════════════════════════════════ */
export default function PlatformLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang, toggle, isRTL } = useLang();
  const { theme, toggleTheme, toggleSearch } = useGuideStore();
  const pathname = usePathname();
  const isLight = theme === "light";
  const Chevron = isRTL() ? ChevronLeft : ChevronRight;

  // Current section label for breadcrumbs
  const currentSectionLabel = useMemo(
    () => getSectionLabel(pathname || "", lang),
    [pathname, lang]
  );

  // Mobile sidebar state: track whether user explicitly opened it, auto-close on navigation
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

  // Auto-close mobile sidebar when pathname changes (openPath won't match anymore)
  // No effect needed — sidebarOpen is derived from userRequestedOpen && openPath === pathname

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col",
        isLight ? "bg-gray-50 text-gray-900" : "bg-[#0a0f1a] text-[#e8edf5]"
      )}
    >
      {/* ─── HEADER ─── */}
      <header
        className={cn(
          "sticky top-0 z-50 h-14 flex items-center border-b",
          isLight
            ? "bg-white/80 backdrop-blur-md border-gray-200"
            : "bg-[#0a0f1a]/90 backdrop-blur-md border-[#1e2d4d] shadow-lg shadow-black/10"
        )}
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 flex items-center justify-between">
          {/* Left side: Menu + Logo + Breadcrumbs */}
          <div className="flex items-center gap-3">
            {/* Mobile sidebar toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-8 w-8"
              onClick={handleOpenSidebar}
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Logo / Back to Home */}
            <Link
              href="/"
              className="flex items-center gap-2 group shrink-0"
            >
              <BookOpen
                className={cn(
                  "h-5 w-5 sm:h-6 sm:w-6 transition-shadow",
                  isLight
                    ? "text-emerald-600 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    : "text-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.5)]"
                )}
              />
              <span
                className={cn(
                  "font-bold text-sm sm:text-base hidden sm:inline",
                  isLight
                    ? "text-gray-900"
                    : "text-[#e8edf5]"
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
                className={cn(
                  "h-3 w-3",
                  isLight ? "text-gray-300" : "text-[#3d506e]"
                )}
              />
              <Link
                href="/platform/"
                className={cn(
                  "hover:underline transition-colors",
                  isLight
                    ? "text-gray-400 hover:text-gray-600"
                    : "text-[#3d506e] hover:text-[#7a8ba8]"
                )}
              >
                {lang === "ar" ? "المنصة" : "Platform"}
              </Link>
              {currentSectionLabel && pathname !== "/platform/" && (
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
                    {currentSectionLabel}
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
                        : "bg-white/5 text-[#7a8ba8] hover:bg-white/10 hover:text-[#e8edf5] border border-[#1e2d4d]/50"
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
                <TooltipContent>
                  {lang === "ar" ? "بحث (⌘K)" : "Search (⌘K)"}
                </TooltipContent>
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
                        ? "bg-gray-100 text-teal-600 hover:bg-gray-200 border border-gray-200"
                        : "bg-white/5 text-teal-400 hover:bg-white/10 border border-[#1e2d4d]/50"
                    )}
                    aria-label={
                      lang === "ar"
                        ? "Switch to English"
                        : "التبديل إلى العربية"
                    }
                  >
                    <Globe className="h-3.5 w-3.5 text-teal-500" />
                    <span className="text-teal-500 hidden sm:inline">
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
                        : "bg-white/5 text-[#ffab00] hover:bg-white/10 border border-[#1e2d4d]/50"
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
            "hidden lg:flex lg:flex-col lg:w-[280px] lg:fixed lg:top-[58px] lg:bottom-0 border-l overflow-hidden",
            isLight
              ? "bg-white border-gray-200"
              : "bg-[#0c1220] border-[#1e2d4d]"
          )}
        >
          <SidebarContent
            lang={lang}
            isRTL={isRTL()}
            isLight={isLight}
          />
        </aside>

        {/* Content area with sidebar margin */}
        <main
          className={cn(
            "flex-1 min-h-[calc(100vh-58px)]",
            isRTL() ? "lg:mr-[280px]" : "lg:ml-[280px]"
          )}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
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
              {lang === "ar" ? "قائمة المنصة" : "Platform Menu"}
            </SheetTitle>
          </SheetHeader>
          <SidebarContent
            lang={lang}
            isRTL={isRTL()}
            isLight={isLight}
            onNavigate={handleCloseSidebar}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
