"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CircuitBoard, Search, Globe, Sun, Moon, Menu, X,
  BookOpen, FileText, ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, toggle, lang } = useLang();
  const { theme, toggleTheme, toggleSearch } = useGuideStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Navigation items for the header
  const mainNav = [
    { label: t("الرئيسية", "Home"), href: "/", id: "home" },
    { label: t("المنصة التعليمية", "Platform"), href: "/platform/", id: "platform" },
    { label: t("دليل المطور", "Developer Guide"), href: "/docs/overview/", id: "docs" },
  ];

  const isActive = (href: string, id: string) => {
    if (id === "home") return pathname === "/";
    if (id === "platform") return pathname?.startsWith("/platform");
    if (id === "docs") return pathname?.startsWith("/docs");
    return false;
  };

  // Platform sub-links
  const platformLinks = [
    { label: t("المسار التعليمي", "Learning Path"), href: "/platform/learning" },
    { label: t("المشاريع", "Projects"), href: "/platform/projects" },
    { label: t("الحساسات", "Sensors"), href: "/platform/sensors" },
    { label: t("بيئات البرمجة", "Environments"), href: "/platform/environments" },
    { label: t("أطقم البدء", "Starter Kits"), href: "/platform/starter-kits" },
    { label: t("الآلة الحاسبة", "Calculator"), href: "/platform/calculator" },
    { label: t("الدعم الفني", "Support"), href: "/platform/support" },
    { label: t("من نحن", "About"), href: "/platform/about" },
  ];

  // Docs sub-links (key sections)
  const docsLinks = [
    { label: t("نظرة عامة", "Overview"), href: "/docs/overview/" },
    { label: t("الهيكل التقني", "Architecture"), href: "/docs/architecture/" },
    { label: t("التقنيات", "Tech Stack"), href: "/docs/technologies/" },
    { label: t("المكونات", "Components"), href: "/docs/components/" },
    { label: t("الأمان", "Security"), href: "/docs/security/" },
    { label: t("النشر", "Deployment"), href: "/docs/deployment/" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-14",
        scrolled
          ? "glass-dark shadow-lg shadow-black/20 border-b border-[#1e2d4d]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0"
        >
          <CircuitBoard className="h-5 w-5 sm:h-6 sm:w-6 text-[#00ff66] group-hover:shadow-[0_0_12px_#00ff66] transition-shadow" />
          <div className="hidden sm:flex flex-col">
            <span className="text-xs sm:text-sm font-bold text-[#e8edf5] leading-tight">
              {t("مشاريع للأنظمة الذكية", "Smart Systems Lab")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label={t("التنقل الرئيسي", "Main Navigation")}>
          {mainNav.map((item) => {
            const active = isActive(item.href, item.id);
            const hasSubmenu = item.id === "platform" || item.id === "docs";
            const subLinks = item.id === "platform" ? platformLinks : docsLinks;

            if (hasSubmenu) {
              return (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "relative px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1",
                        active
                          ? "text-[#00ff66]"
                          : "text-[#7a8ba8] hover:text-[#e8edf5]"
                      )}
                    >
                      {active && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg bg-[#00ff66]/10"
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative">
                        {item.label}
                      </span>
                      <ChevronDown className={cn(
                        "h-3 w-3 transition-transform",
                        active ? "text-[#00ff66]" : ""
                      )} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="w-56 min-w-[200px] glass-dark border border-[#1e2d4d]"
                  >
                    <DropdownMenuItem asChild>
                      <Link href={item.href} className="text-[#00ff66] font-semibold text-xs">
                        {t("عرض الكل", "View All")} →
                      </Link>
                    </DropdownMenuItem>
                    <div className="h-px bg-[#1e2d4d] my-1" />
                    {subLinks.map((link) => (
                      <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href} className="text-xs text-[#7a8ba8] hover:text-[#e8edf5] cursor-pointer">
                          {link.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
                  active ? "text-[#00ff66]" : "text-[#7a8ba8] hover:text-[#e8edf5]"
                )}
              >
                {active && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-[#00ff66]/10"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-1.5">
          {/* Search */}
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
              "hidden md:inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[9px] font-mono",
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
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass-dark border-t border-[#1e2d4d] overflow-hidden"
          >
            <div className="mx-auto max-w-[1400px] px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
              {mainNav.map((item) => {
                const active = isActive(item.href, item.id);
                const hasSubmenu = item.id === "platform" || item.id === "docs";
                const subLinks = item.id === "platform" ? platformLinks : docsLinks;

                return (
                  <div key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        active
                          ? "text-[#00ff66] bg-[#00ff66]/10"
                          : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                    {/* Sub-links on mobile */}
                    {hasSubmenu && active && (
                      <div className="mr-4 mt-1 space-y-0.5 border-r-2 border-[#1e2d4d] pr-3">
                        {subLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-xs text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
