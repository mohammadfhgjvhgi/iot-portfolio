"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Send,
  Facebook,
  MessageCircle,
  Moon,
  Sun,
  ChevronDown,
  Search,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import Image from "next/image";

interface SiteHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onSearchOpen?: () => void;
}

const primaryTabs = [
  { id: "home", label: "الرئيسية" },
  { id: "learning", label: "المسار التعليمي" },
  { id: "projects", label: "المشاريع" },
  { id: "sensors", label: "الحساسات" },
];

const moreTabs = [
  { id: "environments", label: "بيئات البرمجة" },
  { id: "starterkit", label: "أطقم البدء" },
  { id: "calculator", label: "الحاسبة" },
  { id: "support", label: "الدعم الفني" },
  { id: "about", label: "من نحن" },
];

const allTabs = [...primaryTabs, ...moreTabs];

export default function SiteHeader({ activeTab, onTabChange, onSearchOpen }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = resolvedTheme !== undefined;

  const isMoreActive = moreTabs.some((t) => activeTab === t.id);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goTo = useCallback((id: string) => {
    onTabChange(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [onTabChange]);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "shadow-sm bg-background/80 backdrop-blur-xl border-b border-border/40" : ""}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => goTo("home")} className="flex items-center gap-2.5 shrink-0 group">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 shadow-md group-hover:shadow-lg transition-shadow">
                <Image src="/images/logo.png" alt="" width={36} height={36} className="h-full w-full object-cover" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[13px] font-bold leading-tight text-foreground">مشاريع إلكترونية</span>
                <span className="text-[10px] leading-tight text-muted-foreground font-medium">وذكاء اصطناعي</span>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="التنقل">
              {primaryTabs.map((t) => (
                <button key={t.id} onClick={() => goTo(t.id)} className={`relative px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${activeTab === t.id ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground hover:text-foreground"}`}>
                  {activeTab === t.id && <motion.div layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-emerald-50 dark:bg-emerald-950/40" transition={{ type: "spring", stiffness: 500, damping: 35 }} />}
                  <span className="relative">{t.label}</span>
                </button>
              ))}

              {/* المزيد Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`relative px-3 py-2 rounded-lg text-[13px] font-medium transition-colors flex items-center gap-1 ${
                      isMoreActive
                        ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    المزيد
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isMoreActive ? "text-emerald-600 dark:text-emerald-400" : ""}`} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 min-w-[180px]">
                  {moreTabs.map((t) => (
                    <DropdownMenuItem
                      key={t.id}
                      onClick={() => goTo(t.id)}
                      className={`text-[13px] font-medium cursor-pointer flex items-center justify-between ${
                        activeTab === t.id
                          ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                          : ""
                      }`}
                    >
                      <span>{t.label}</span>
                      {activeTab === t.id && <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={onSearchOpen} className="relative h-8 w-8 rounded-lg" aria-label="بحث">
                <Search className="h-4 w-4" />
                <kbd className="pointer-events-none absolute -top-1 -right-1 hidden h-4 select-none items-center gap-0.5 rounded border bg-muted px-1 font-mono text-[9px] font-medium opacity-100 sm:flex">Ctrl+K</kbd>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="h-8 w-8 rounded-lg" suppressHydrationWarning>
                {mounted ? resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <div className="hidden md:flex items-center gap-0.5 mr-1">
                {[
                  { href: "https://t.me/Mashari3_AI_Arduino", icon: Send },
                  { href: "https://www.facebook.com/share/1HnZactzYD/", icon: Facebook },
                  { href: "https://t.me/Arsuino1", icon: MessageCircle },
                ].map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"><s.icon className="h-4 w-4" /></a>
                ))}
              </div>
              <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl overflow-hidden">
              <div className="mx-auto max-w-7xl px-4 py-3 space-y-0.5">
                {allTabs.map((t) => (
                  <button key={t.id} onClick={() => goTo(t.id)} className={`block w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === t.id ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400" : "text-muted-foreground hover:bg-muted/50"}`}>{t.label}</button>
                ))}
                <div className="flex items-center gap-2 pt-3 mt-2 border-t border-border/30 px-4">
                  <a href="https://t.me/Mashari3_AI_Arduino" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-muted-foreground hover:text-emerald-600 transition-colors"><Send className="h-3.5 w-3.5" /> قناة تليجرام</a>
                  <a href="https://t.me/Arsuino1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-muted-foreground hover:text-emerald-600 transition-colors"><MessageCircle className="h-3.5 w-3.5" /> مجموعة النقاش</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
