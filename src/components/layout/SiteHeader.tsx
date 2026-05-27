"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CircuitBoard, Search, Globe, Sun, Moon, Menu,
} from "lucide-react";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, toggle, lang } = useLang();
  const { theme, toggleTheme, toggleSearch, toggleSidebar } = useGuideStore();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-14 flex items-center",
        scrolled
          ? "glass-dark shadow-lg shadow-black/20 border-b border-[#1e2d4d]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0"
        >
          <CircuitBoard className="h-5 w-5 sm:h-6 sm:w-6 text-[#00ff66] group-hover:shadow-[0_0_12px_#00ff66] transition-shadow" />
          <span className="font-bold text-sm sm:text-base gradient-neon-text hidden sm:inline">
            {t("Smart Systems Lab", "Smart Systems Lab")}
          </span>
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Mobile menu button (only in docs view) */}
          {isDocs && (
            <button
              onClick={toggleSidebar}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-lg transition-all lg:hidden",
                theme === "light"
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                  : "bg-white/5 text-[#7a8ba8] hover:bg-white/10 hover:text-[#e8edf5] neon-border"
              )}
              aria-label={t("القائمة", "Menu")}
            >
              <Menu className="h-4 w-4" />
            </button>
          )}

          {/* Search trigger */}
          <button
            onClick={toggleSearch}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
              theme === "light"
                ? "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                : "bg-white/5 text-[#7a8ba8] hover:bg-white/10 hover:text-[#e8edf5] neon-border"
            )}
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t("بحث", "Search")}</span>
            <kbd className={cn(
              "hidden md:inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-mono",
              theme === "light" ? "bg-gray-200 text-gray-500" : "bg-white/5 text-[#3d506e]"
            )}>
              ⌘K
            </kbd>
          </button>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
              theme === "light"
                ? "bg-gray-100 text-cyan-600 hover:bg-gray-200 border border-gray-200"
                : "neon-border-cyan hover:bg-[#00e5ff]/5"
            )}
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Globe className="h-3.5 w-3.5 text-[#00e5ff]" />
            <span className="text-[#00e5ff] hidden sm:inline">{lang === "ar" ? "EN" : "عربي"}</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-lg transition-all",
              theme === "light"
                ? "bg-gray-100 text-amber-600 hover:bg-gray-200 border border-gray-200"
                : "bg-white/5 text-[#ffab00] hover:bg-white/10 neon-border"
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
