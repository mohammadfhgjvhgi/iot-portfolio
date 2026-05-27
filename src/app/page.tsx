"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CircuitBoard, Search, Globe, Sun, Moon, Menu, ChevronRight,
  ChevronLeft, ChevronDown, Check, BookOpen, LayoutDashboard,
  Cpu, Layers, Palette, Settings, ShieldCheck, Rocket,
  Wrench, Smartphone, ArrowRight, Github, ExternalLink,
  Code2, Home, Terminal, HelpCircle, Zap, X,
  Database, Bot, Key, Map,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { guideSections } from "@/data/guide-sections";
import GuideRenderer from "@/components/guide/GuideRenderer";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════
   ICON MAP — maps icon string names to lucide components
   ═══════════════════════════════════════════════════════════ */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, LayoutDashboard, Cpu, Settings, Palette, Layers,
  ShieldCheck, Rocket, Wrench, BookOpen, Code2, Terminal,
  HelpCircle, Zap, Smartphone, Search, Database, Bot, Key, Map,
};

function SectionIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const Icon = iconMap[name] || BookOpen;
  return <Icon className={className} />;
}

/* ═══════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════ */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════ */
function AnimatedCounter({ end, suffix = "", duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════
   GUIDE HEADER (sticky)
   ═══════════════════════════════════════════════════════════ */
function GuideHeader() {
  const { t, toggle, lang } = useLang();
  const { theme, toggleTheme, toggleSearch, view, setView, toggleSidebar } = useGuideStore();
  const [scrolled, setScrolled] = useState(false);

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
        <button
          onClick={() => setView("home")}
          className="flex items-center gap-2 group shrink-0"
        >
          <CircuitBoard className="h-5 w-5 sm:h-6 sm:w-6 text-[#00ff66] group-hover:shadow-[0_0_12px_#00ff66] transition-shadow" />
          <span className="font-bold text-sm sm:text-base gradient-neon-text hidden sm:inline">
            {t("Smart Systems Lab", "Smart Systems Lab")}
          </span>
        </button>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
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

          {/* Mobile menu (sidebar toggle in docs view, or just for sidebar) */}
          {view === "docs" && (
            <button
              onClick={toggleSidebar}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════
   SEARCH DIALOG
   ═══════════════════════════════════════════════════════════ */
function SearchDialog() {
  const { searchOpen, toggleSearch, setActiveSection, setView } = useGuideStore();
  const { t, lang } = useLang();
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
      setView("docs");
      setActiveSection(sectionId);
      toggleSearch();
      setQuery("");
    },
    [setView, setActiveSection, toggleSearch]
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
      </DialogContent>
    </Dialog>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOME VIEW
   ═══════════════════════════════════════════════════════════ */
function HomeView() {
  const { t, lang, isRTL } = useLang();
  const { theme, setView, setActiveSection } = useGuideStore();

  const handleStartReading = useCallback(() => {
    setActiveSection(guideSections[0].id);
    setView("docs");
  }, [setActiveSection, setView]);

  const handleSectionClick = useCallback((id: string) => {
    setActiveSection(id);
    setView("docs");
  }, [setActiveSection, setView]);

  /* Stats */
  const stats = [
    { value: 17, suffix: "", label: t("قسم", "Sections"), color: "#00ff66", icon: <BookOpen className="h-4 w-4" /> },
    { value: 4, suffix: "+", label: t("مشروع", "Projects"), color: "#00e5ff", icon: <Cpu className="h-4 w-4" /> },
    { value: 92, suffix: "/100", label: t("أمان", "Security"), color: "#00ff66", icon: <ShieldCheck className="h-4 w-4" /> },
    { value: 20, suffix: "+", label: t("مكون", "Components"), color: "#ffab00", icon: <Layers className="h-4 w-4" /> },
  ];

  /* Quick links */
  const quickLinkIds = ["overview", "architecture", "technologies", "components", "project-info", "security", "deployment", "troubleshooting", "quick-reference"];
  const quickSections = quickLinkIds
    .map((id) => guideSections.find((s) => s.id === id))
    .filter(Boolean) as typeof guideSections;

  /* Features */
  const features = [
    { icon: <Globe className="h-6 w-6" />, title: t("ثنائي اللغة", "Bilingual"), desc: t("عربي + إنجليزي مع دعم RTL كامل", "Arabic + English with full RTL support"), color: "#00e5ff" },
    { icon: <Moon className="h-6 w-6" />, title: t("الوضع الداكن", "Dark Theme"), desc: t("سمة داكنة احترافية بنيون أخضر", "Professional dark theme with neon green"), color: "#b44dff" },
    { icon: <Search className="h-6 w-6" />, title: t("بحث سريع", "Quick Search"), desc: t("ابحث بـ ⌘K بين جميع الأقسام", "Search with ⌘K across all sections"), color: "#00ff66" },
    { icon: <Smartphone className="h-6 w-6" />, title: t("متجاوب", "Responsive"), desc: t("يعمل على جميع أحجام الشاشات", "Works on all screen sizes"), color: "#ffab00" },
  ];

  const isLight = theme === "light";

  return (
    <motion.div {...pageTransition} className="flex-1 pt-14">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="absolute inset-0 gradient-mesh-dark" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-[#00ff66]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 sm:w-48 sm:h-48 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Badge className={cn(
              "px-3 py-1 mb-6 text-xs font-medium",
              isLight
                ? "bg-green-50 text-green-700 border border-green-200"
                : "neon-border glass-card-dark text-[#00ff66]"
            )}>
              <Zap className="h-3 w-3 mr-1" />
              v2.1 — Senior Edition
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            <span className={isLight ? "text-gray-900" : "text-[#e8edf5]"}>
              {t("دليل المطور الشامل", "Comprehensive Developer Guide")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={cn(
              "text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8",
              isLight ? "text-gray-500" : "text-[#7a8ba8]"
            )}
          >
            Smart Systems Lab — IoT Portfolio v2.1
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Button
              onClick={handleStartReading}
              size="lg"
              className={cn(
                "font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base transition-shadow",
                isLight
                  ? "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20"
                  : "gradient-neon text-[#0a0f1a] hover:shadow-[0_0_20px_#00ff6640]"
              )}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              {t("ابدأ القراءة", "Start Reading")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className={cn(
                "font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base",
                isLight
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "neon-border text-[#00ff66] hover:bg-[#00ff66]/10"
              )}
            >
              <a href="https://github.com/mohammadfhgjvhgi/iot-portfolio" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 + i * 0.1, type: "spring" }}
                className={cn(
                  "rounded-xl p-3 sm:p-4 card-hover text-center",
                  isLight
                    ? "bg-white border border-gray-200 shadow-sm"
                    : "glass-card-dark"
                )}
              >
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                  <span className={cn("text-xl sm:text-2xl font-bold", isLight ? "text-gray-900" : "gradient-neon-text")}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <span className={cn("text-[10px] sm:text-xs", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── QUICK LINKS ─── */}
      <section className={cn("py-16 sm:py-20 px-4 sm:px-6", isLight ? "bg-gray-50" : "")}>
        <div className="mx-auto max-w-6xl">
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-10 sm:mb-12">
            <h2 className={cn("text-2xl sm:text-3xl font-bold inline-block mb-3", isLight ? "text-gray-900" : "gradient-neon-text")}>
              {t("استكشف الأقسام", "Explore Sections")}
            </h2>
            <div className="w-20 h-0.5 gradient-neon mx-auto rounded-full opacity-60" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {quickSections.map((section) => (
              <motion.button
                key={section.id}
                variants={fadeUp}
                onClick={() => handleSectionClick(section.id)}
                className={cn(
                  "group p-4 sm:p-5 rounded-xl text-start card-hover transition-all",
                  isLight
                    ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md hover:shadow-green-600/5"
                    : "glass-card-dark"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors",
                  isLight
                    ? "bg-green-50 text-green-600 group-hover:bg-green-100"
                    : "bg-[#00ff66]/10 text-[#00ff66] group-hover:bg-[#00ff66]/20"
                )}>
                  <SectionIcon name={section.icon} className="h-5 w-5" />
                </div>
                <h3 className={cn("font-bold text-sm mb-1", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                  {lang === "ar" ? section.title.ar : section.title.en}
                </h3>
                <p className={cn("text-xs leading-relaxed line-clamp-2 mb-3", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>
                  {lang === "ar" ? section.description.ar : section.description.en}
                </p>
                <div className={cn("flex items-center gap-1 text-xs font-medium", isLight ? "text-green-600" : "text-[#00ff66]")}>
                  {t("اقرأ المزيد", "Read more")}
                  <ArrowRight className={cn("h-3 w-3 transition-transform group-hover:translate-x-1", isRTL() && "rotate-180")} />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-10 sm:mb-12">
            <h2 className={cn("text-2xl sm:text-3xl font-bold inline-block mb-3", isLight ? "text-gray-900" : "gradient-neon-text")}>
              {t("مميزات الدليل", "Guide Features")}
            </h2>
            <div className="w-20 h-0.5 gradient-neon mx-auto rounded-full opacity-60" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={cn(
                  "flex items-start gap-4 p-4 sm:p-5 rounded-xl card-hover",
                  isLight
                    ? "bg-white border border-gray-200 hover:shadow-md"
                    : "glass-card-dark"
                )}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${feat.color}15`, color: feat.color }}
                >
                  {feat.icon}
                </div>
                <div>
                  <h3 className={cn("font-bold text-sm mb-1", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                    {feat.title}
                  </h3>
                  <p className={cn("text-xs leading-relaxed", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT INFO DASHBOARD ─── */}
      <section className={cn("py-16 sm:py-20 px-4 sm:px-6", isLight ? "bg-gray-50" : "")}>
        <div className="mx-auto max-w-6xl">
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-10 sm:mb-12">
            <h2 className={cn("text-2xl sm:text-3xl font-bold inline-block mb-3", isLight ? "text-gray-900" : "gradient-neon-text")}>
              {t("معلومات المشروع", "Project Information")}
            </h2>
            <div className="w-20 h-0.5 gradient-neon mx-auto rounded-full opacity-60" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {/* Repo Info Card */}
            <motion.div
              variants={fadeUp}
              onClick={() => handleSectionClick("project-info")}
              className={cn(
                "group p-5 sm:p-6 rounded-xl card-hover transition-all cursor-pointer",
                isLight
                  ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md"
                  : "glass-card-dark"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", isLight ? "bg-green-50 text-green-600" : "bg-[#00ff66]/10 text-[#00ff66]")}>
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={cn("font-bold text-sm", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                    {t("معلومات المستودع", "Repository Info")}
                  </h3>
                  <span className={cn("text-xs", isLight ? "text-gray-400" : "text-[#3d506e]")}>GitHub</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>{t("الفرع", "Branch")}</span>
                  <code className={cn("text-xs px-2 py-0.5 rounded", isLight ? "bg-gray-100 text-gray-700" : "bg-[#151d33] text-[#00e5ff]")}>main</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>{t("الحجم", "Size")}</span>
                  <span className={cn("text-xs font-medium", isLight ? "text-gray-700" : "text-[#c5cdd8]")}>~20K {t("سطر", "LOC")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>{t("الملفات", "Files")}</span>
                  <span className={cn("text-xs font-medium", isLight ? "text-gray-700" : "text-[#c5cdd8]")}>100+</span>
                </div>
              </div>
            </motion.div>

            {/* Lighthouse Score Card */}
            <motion.div
              variants={fadeUp}
              className={cn(
                "group p-5 sm:p-6 rounded-xl card-hover transition-all",
                isLight
                  ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md"
                  : "glass-card-dark"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", isLight ? "bg-green-50 text-green-600" : "bg-[#00ff66]/10 text-[#00ff66]")}>
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={cn("font-bold text-sm", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                    Lighthouse Score
                  </h3>
                  <span className={cn("text-xs", isLight ? "text-gray-400" : "text-[#3d506e]")}>{t("تقديري", "Estimated")}</span>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: t("الأداء", "Performance"), value: 92, color: "#00ff66" },
                  { label: t("إمكانية الوصول", "Accessibility"), value: 95, color: "#00e5ff" },
                  { label: t("أفضل الممارسات", "Best Practices"), value: 92, color: "#ffab00" },
                  { label: "SEO", value: 100, color: "#b44dff" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className={cn("text-xs w-20 truncate", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>{item.label}</span>
                    <div className={cn("flex-1 h-1.5 rounded-full overflow-hidden", isLight ? "bg-gray-100" : "bg-[#151d33]")}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                    </div>
                    <span className={cn("text-[10px] font-mono font-medium", isLight ? "text-gray-600" : "text-[#c5cdd8]")}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Deployment & Settings Card */}
            <motion.div
              variants={fadeUp}
              onClick={() => handleSectionClick("project-info")}
              className={cn(
                "group p-5 sm:p-6 rounded-xl card-hover transition-all cursor-pointer",
                isLight
                  ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md"
                  : "glass-card-dark"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", isLight ? "bg-green-50 text-green-600" : "bg-[#00ff66]/10 text-[#00ff66]")}>
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={cn("font-bold text-sm", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                    {t("النشر والتكوين", "Deployment & Config")}
                  </h3>
                  <span className={cn("text-xs", isLight ? "text-gray-400" : "text-[#3d506e]")}>{t("الإعدادات الحالية", "Current Settings")}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>{t("المنصة", "Platform")}</span>
                  <span className={cn("text-xs font-medium", isLight ? "text-gray-700" : "text-[#c5cdd8]")}>GitHub Pages</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>Next.js</span>
                  <code className={cn("text-xs px-2 py-0.5 rounded", isLight ? "bg-gray-100 text-gray-700" : "bg-[#151d33] text-[#00e5ff]")}>16.1.1</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>React</span>
                  <code className={cn("text-xs px-2 py-0.5 rounded", isLight ? "bg-gray-100 text-gray-700" : "bg-[#151d33] text-[#00e5ff]")}>19.0</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>{t("الإخراج", "Output")}</span>
                  <code className={cn("text-xs px-2 py-0.5 rounded", isLight ? "bg-gray-100 text-gray-700" : "bg-[#151d33] text-[#00ff66]")}>Static SSG</code>
                </div>
              </div>
            </motion.div>

            {/* Enabled Features Card */}
            <motion.div
              variants={fadeUp}
              className={cn(
                "group p-5 sm:p-6 rounded-xl card-hover transition-all md:col-span-2",
                isLight
                  ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md"
                  : "glass-card-dark"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", isLight ? "bg-green-50 text-green-600" : "bg-[#00ff66]/10 text-[#00ff66]")}>
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={cn("font-bold text-sm", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                    {t("الميزات المفعّلة", "Enabled Features")}
                  </h3>
                  <span className={cn("text-xs", isLight ? "text-gray-400" : "text-[#3d506e]")}>14 {t("ميزة مفعّلة", "features active")}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  { icon: <Globe className="h-3 w-3" />, label: t("ثنائي اللغة", "Bilingual"), color: "#00e5ff" },
                  { icon: <Bot className="h-3 w-3" />, label: t("دردشة AI", "AI Chat"), color: "#00ff66" },
                  { icon: <ShieldCheck className="h-3 w-3" />, label: t("تقرير أمان", "Security"), color: "#00ff66" },
                  { icon: <BookOpen className="h-3 w-3" />, label: t("مدونة", "Blog"), color: "#ffab00" },
                  { icon: <Database className="h-3 w-3" />, label: t("مكتبة موارد", "Resources"), color: "#00e5ff" },
                  { icon: <Terminal className="h-3 w-3" />, label: "PWA", color: "#b44dff" },
                  { icon: <Search className="h-3 w-3" />, label: t("بحث ⌘K", "Search ⌘K"), color: "#00ff66" },
                  { icon: <Smartphone className="h-3 w-3" />, label: t("متجاوب", "Responsive"), color: "#ffab00" },
                ].map((feat) => (
                  <div key={feat.label} className={cn("flex items-center gap-2 px-3 py-2 rounded-lg", isLight ? "bg-gray-50" : "bg-[#151d33]/50")}>
                    <span style={{ color: feat.color }}>{feat.icon}</span>
                    <span className={cn("text-xs", isLight ? "text-gray-600" : "text-[#c5cdd8]")}>{feat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Future Roadmap Card */}
            <motion.div
              variants={fadeUp}
              onClick={() => handleSectionClick("project-info")}
              className={cn(
                "group p-5 sm:p-6 rounded-xl card-hover transition-all cursor-pointer",
                isLight
                  ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md"
                  : "glass-card-dark"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", isLight ? "bg-green-50 text-green-600" : "bg-[#00ff66]/10 text-[#00ff66]")}>
                  <Map className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={cn("font-bold text-sm", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                    {t("خارطة الطريق", "Roadmap")}
                  </h3>
                  <span className={cn("text-xs", isLight ? "text-gray-400" : "text-[#3d506e]")}>{t("4 مراحل", "4 Phases")}</span>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: t("CI/CD + Dark Mode", "CI/CD + Dark Mode"), color: "#ff3d5a", priority: "P1" },
                  { label: t("أداء + أمان + SEO", "Perf + Security + SEO"), color: "#ffab00", priority: "P2" },
                  { label: t("محتوى + CMS", "Content + CMS"), color: "#00e5ff", priority: "P3" },
                  { label: t("لوحة تحكم + لغات", "Dashboard + i18n"), color: "#b44dff", priority: "P4" },
                ].map((phase) => (
                  <div key={phase.priority} className="flex items-center gap-3">
                    <span className={cn("text-[10px] font-mono font-bold px-1.5 py-0.5 rounded", isLight ? "bg-gray-100 text-gray-600" : "bg-[#151d33]")} style={{ color: phase.color }}>
                      {phase.priority}
                    </span>
                    <span className={cn("text-xs flex-1 truncate", isLight ? "text-gray-600" : "text-[#c5cdd8]")}>{phase.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center">
                <span className={cn("flex items-center gap-1 text-xs font-medium", isLight ? "text-green-600" : "text-[#00ff66]")}>
                  {t("عرض التفاصيل الكاملة", "View full details")}
                  <ArrowRight className={cn("h-3 w-3 transition-transform group-hover:translate-x-1", isRTL() && "rotate-180")} />
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DOCS SIDEBAR
   ═══════════════════════════════════════════════════════════ */
function DocsSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, lang, isRTL } = useLang();
  const { activeSection, setActiveSection, readSections, expandedSections, toggleSectionExpanded, setView, theme } = useGuideStore();
  const [sidebarSearch, setSidebarSearch] = useState("");
  const isLight = theme === "light";

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
      setActiveSection(id);
      onClose();
    },
    [setActiveSection, onClose]
  );

  const readCount = readSections.size;
  const totalCount = guideSections.length;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <SheetContent side={isRTL() ? "right" : "left"} className={cn(
        "w-[280px] p-0 overflow-y-auto",
        isLight ? "bg-white border-gray-200" : "bg-[#0c1220] border-[#1e2d4d]"
      )}>
        <SheetHeader className={cn("p-4 border-b", isLight ? "border-gray-200" : "border-[#1e2d4d]")}>
          <SheetTitle className="flex items-center gap-2">
            <CircuitBoard className="h-4 w-4 text-[#00ff66]" />
            <span className={cn("text-sm font-bold", isLight ? "text-gray-900" : "gradient-neon-text")}>
              {t("دليل المطور", "Developer Guide")}
            </span>
          </SheetTitle>
        </SheetHeader>

        {/* Sidebar search */}
        <div className="px-3 py-2">
          <div className={cn("relative", isLight ? "" : "")}>
            <Search className="absolute top-1/2 -translate-y-1/2 left-3 h-3.5 w-3.5 text-[#7a8ba8]" />
            <Input
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder={t("تصفية الأقسام...", "Filter sections...")}
              className={cn(
                "pl-9 h-8 text-xs",
                isLight ? "bg-gray-50 border-gray-200" : "bg-[#151d33] border-[#1e2d4d] text-[#e8edf5] placeholder:text-[#3d506e]"
              )}
            />
          </div>
        </div>

        {/* Progress */}
        <div className="px-3 py-1.5">
          <div className={cn("text-[10px] font-medium mb-1", isLight ? "text-gray-400" : "text-[#3d506e]")}>
            {readCount}/{totalCount} {t("مقروءة", "read")}
          </div>
          <div className={cn("h-1 rounded-full overflow-hidden", isLight ? "bg-gray-100" : "bg-[#151d33]")}>
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
                      ? isLight
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-[#00ff66]/10 text-[#00ff66]"
                      : isLight
                        ? "text-gray-600 hover:bg-gray-50"
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
                            className={cn(
                              "w-full text-start text-[11px] px-2 py-1.5 rounded-md transition-all truncate",
                              isLight
                                ? "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                                : "text-[#3d506e] hover:text-[#7a8ba8] hover:bg-white/3"
                            )}
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
        <div className={cn("p-3 border-t", isLight ? "border-gray-200" : "border-[#1e2d4d]")}>
          <button
            onClick={() => { setView("home"); onClose(); }}
            className={cn(
              "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all",
              isLight
                ? "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
            )}
          >
            <Home className="h-3.5 w-3.5" />
            {t("العودة للرئيسية", "Back to Home")}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* ═══════════════════════════════════════════════════════════
   DOCS VIEW
   ═══════════════════════════════════════════════════════════ */
function DocsView() {
  const { t, lang, isRTL } = useLang();
  const { activeSection, setActiveSection, sidebarOpen, setSidebarOpen, setView, theme } = useGuideStore();
  const contentRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isLight = theme === "light";

  // Current section data
  const currentIndex = guideSections.findIndex((s) => s.id === activeSection);
  const currentSection = currentIndex >= 0 ? guideSections[currentIndex] : guideSections[0];
  const prevSection = currentIndex > 0 ? guideSections[currentIndex - 1] : null;
  const nextSection = currentIndex < guideSections.length - 1 ? guideSections[currentIndex + 1] : null;

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

  // Navigate to section
  const navigateTo = useCallback(
    (id: string) => {
      setActiveSection(id);
      if (contentRef.current) contentRef.current.scrollTop = 0;
    },
    [setActiveSection]
  );

  // Back to home
  const goHome = useCallback(() => {
    setView("home");
  }, [setView]);

  return (
    <motion.div {...pageTransition} className="flex-1 flex pt-14">
      {/* Progress bar */}
      <div className="fixed top-14 left-0 right-0 z-40 h-0.5 bg-transparent">
        <div
          className="h-full gradient-neon transition-all duration-150"
          style={{ width: `${Math.min(progress * 100, 100)}%` }}
        />
      </div>

      {/* Desktop sidebar - always visible on lg */}
      <aside className={cn(
        "hidden lg:block fixed top-14 bottom-0 w-[280px] overflow-y-auto shrink-0 border-r z-30",
        isLight ? "bg-white border-gray-200" : "bg-[#0c1220] border-[#1e2d4d]"
      )}>
        <DesktopSidebar onNavigate={navigateTo} />
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
          <div className={cn("flex items-center gap-2 text-xs mb-6", isLight ? "text-gray-400" : "text-[#3d506e]")}>
            <button onClick={goHome} className="hover:text-[#00ff66] transition-colors flex items-center gap-1">
              <Home className="h-3 w-3" />
              {t("الرئيسية", "Home")}
            </button>
            <ChevronRight className={cn("h-3 w-3", isRTL() ? "rotate-180" : "")} />
            <span className={cn("truncate", isLight ? "text-gray-700" : "text-[#e8edf5]")}>
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
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                isLight ? "bg-green-50 text-green-600" : "bg-[#00ff66]/10 text-[#00ff66]"
              )}>
                <SectionIcon name={currentSection.icon} className="h-5 w-5" />
              </div>
              <div>
                <h1 className={cn("text-2xl sm:text-3xl font-bold", isLight ? "text-gray-900" : "gradient-neon-text")}>
                  {lang === "ar" ? currentSection.title.ar : currentSection.title.en}
                </h1>
              </div>
            </div>
            <p className={cn("text-sm", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>
              {lang === "ar" ? currentSection.description.ar : currentSection.description.en}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            key={`content-${currentSection.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={cn(
              "rounded-2xl border p-5 sm:p-8",
              isLight
                ? "bg-white border-gray-200 shadow-sm"
                : "glass-card-dark"
            )}
          >
            <GuideRenderer
              content={lang === "ar" ? currentSection.content.ar : currentSection.content.en}
              lang={lang}
            />
          </motion.div>

          {/* Prev / Next navigation */}
          <div className="flex items-center justify-between gap-4 mt-8 mb-4">
            {prevSection ? (
              <button
                onClick={() => navigateTo(prevSection.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-xl text-start flex-1 transition-all",
                  isLight
                    ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-sm text-gray-700"
                    : "glass-card-dark hover:bg-[#151d33] text-[#c5cdd8] hover:text-[#e8edf5]"
                )}
              >
                {isRTL() ? <ChevronRight className="h-4 w-4 text-[#00ff66]" /> : <ChevronLeft className="h-4 w-4 text-[#00ff66]" />}
                <div className="min-w-0">
                  <div className={cn("text-[10px] uppercase tracking-wider mb-0.5", isLight ? "text-gray-400" : "text-[#3d506e]")}>
                    {t("السابق", "Previous")}
                  </div>
                  <div className="text-sm font-medium truncate">
                    {lang === "ar" ? prevSection.title.ar : prevSection.title.en}
                  </div>
                </div>
              </button>
            ) : <div />}
            {nextSection ? (
              <button
                onClick={() => navigateTo(nextSection.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-xl text-end flex-1 transition-all",
                  isLight
                    ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-sm text-gray-700"
                    : "glass-card-dark hover:bg-[#151d33] text-[#c5cdd8] hover:text-[#e8edf5]"
                )}
              >
                <div className="min-w-0 text-end">
                  <div className={cn("text-[10px] uppercase tracking-wider mb-0.5", isLight ? "text-gray-400" : "text-[#3d506e]")}>
                    {t("التالي", "Next")}
                  </div>
                  <div className="text-sm font-medium truncate">
                    {lang === "ar" ? nextSection.title.ar : nextSection.title.en}
                  </div>
                </div>
                {isRTL() ? <ChevronLeft className="h-4 w-4 text-[#00ff66]" /> : <ChevronRight className="h-4 w-4 text-[#00ff66]" />}
              </button>
            ) : <div />}
          </div>
        </div>
      </main>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DESKTOP SIDEBAR (always visible)
   ═══════════════════════════════════════════════════════════ */
function DesktopSidebar({ onNavigate }: { onNavigate: (id: string) => void }) {
  const { t, lang, isRTL } = useLang();
  const { activeSection, readSections, expandedSections, toggleSectionExpanded, setView, theme } = useGuideStore();
  const [sidebarSearch, setSidebarSearch] = useState("");
  const isLight = theme === "light";

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
      <div className={cn("px-4 py-4 border-b", isLight ? "border-gray-200" : "border-[#1e2d4d]")}>
        <div className="flex items-center gap-2 mb-3">
          <CircuitBoard className="h-4 w-4 text-[#00ff66]" />
          <span className={cn("text-sm font-bold", isLight ? "text-gray-900" : "gradient-neon-text")}>
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
            className={cn(
              "pl-9 h-8 text-xs",
              isLight ? "bg-gray-50 border-gray-200" : "bg-[#151d33] border-[#1e2d4d] text-[#e8edf5] placeholder:text-[#3d506e]"
            )}
          />
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 py-2">
        <div className={cn("text-[10px] font-medium mb-1", isLight ? "text-gray-400" : "text-[#3d506e]")}>
          {readCount}/{totalCount} {t("مقروءة", "read")}
        </div>
        <div className={cn("h-1 rounded-full overflow-hidden", isLight ? "bg-gray-100" : "bg-[#151d33]")}>
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
                onClick={() => onNavigate(section.id)}
                className={cn(
                  "w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-start text-xs font-medium transition-all",
                  isActive
                    ? isLight
                      ? "bg-green-50 text-green-700"
                      : "bg-[#00ff66]/10 text-[#00ff66]"
                    : isLight
                      ? "text-gray-600 hover:bg-gray-50"
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
                          onClick={() => onNavigate(section.id)}
                          className={cn(
                            "w-full text-start text-[11px] px-2 py-1.5 rounded-md transition-all truncate",
                            isLight
                              ? "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                              : "text-[#3d506e] hover:text-[#7a8ba8] hover:bg-white/3"
                          )}
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
      <div className={cn("p-3 border-t", isLight ? "border-gray-200" : "border-[#1e2d4d]")}>
        <button
          onClick={() => setView("home")}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all",
            isLight
              ? "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
          )}
        >
          <Home className="h-3.5 w-3.5" />
          {t("العودة للرئيسية", "Back to Home")}
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function GuideFooter() {
  const { t, lang } = useLang();
  const { theme, setView, setActiveSection } = useGuideStore();
  const isLight = theme === "light";

  const quickLinks = [
    { label: t("نظرة عامة", "Overview"), id: "overview" },
    { label: t("التقنيات", "Tech Stack"), id: "technologies" },
    { label: t("المكونات", "Components"), id: "components" },
    { label: t("الأمان", "Security"), id: "security" },
  ];

  const externalLinks = [
    { label: "GitHub", href: "https://github.com/mohammadfhgjvhgi/iot-portfolio" },
    { label: t("تليجرام", "Telegram"), href: "https://t.me/Mashari3_AI_Arduino" },
    { label: "WhatsApp", href: "https://wa.me/972569303043" },
  ];

  return (
    <footer className={cn("border-t", isLight ? "bg-gray-50 border-gray-200" : "bg-[#080c16] border-[#1e2d4d]")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <CircuitBoard className="h-5 w-5 text-[#00ff66]" />
              <span className={cn("text-sm font-bold", isLight ? "text-gray-900" : "gradient-neon-text")}>
                {t("Smart Systems Lab", "Smart Systems Lab")}
              </span>
            </div>
            <p className={cn("text-xs leading-relaxed", isLight ? "text-gray-500" : "text-[#3d506e]")}>
              {t(
                "دليل المطور الشامل — وثائق تقنية مفصلة لمشروع IoT Portfolio v2.1",
                "Comprehensive Developer Guide — Detailed technical documentation for IoT Portfolio v2.1"
              )}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={cn("text-xs font-semibold mb-3", isLight ? "text-gray-700" : "text-[#e8edf5]")}>
              {t("روابط سريعة", "Quick Links")}
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setActiveSection(link.id); setView("docs"); }}
                  className={cn("text-xs transition-colors", isLight ? "text-gray-500 hover:text-green-600" : "text-[#7a8ba8] hover:text-[#00ff66]")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* External links */}
          <div>
            <h4 className={cn("text-xs font-semibold mb-3", isLight ? "text-gray-700" : "text-[#e8edf5]")}>
              {t("روابط خارجية", "External Links")}
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("text-xs transition-colors flex items-center gap-1", isLight ? "text-gray-500 hover:text-green-600" : "text-[#7a8ba8] hover:text-[#00ff66]")}
                >
                  {link.label}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={cn("border-t pt-4", isLight ? "border-gray-200" : "border-[#1e2d4d]")}>
          <p className={cn("text-[10px] sm:text-xs text-center", isLight ? "text-gray-400" : "text-[#2a3d5c]")}>
            {t(
              "صُنع بشغف في فلسطين 🇵🇸 — جميع الحقوق محفوظة © 2025",
              "Made with passion in Palestine 🇵🇸 — All rights reserved © 2025"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */
export default function GuidePage() {
  const { view, theme } = useGuideStore();
  const isLight = theme === "light";

  // Initialize theme from localStorage and set dark class
  useEffect(() => {
    const saved = localStorage.getItem("guide-theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme class changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className={cn("min-h-screen flex flex-col", isLight ? "bg-white text-gray-900" : "bg-background text-foreground")}>
      <GuideHeader />
      <AnimatePresence mode="wait">
        {view === "home" ? <HomeView key="home" /> : <DocsView key="docs" />}
      </AnimatePresence>
      <SearchDialog />
      <GuideFooter />
    </div>
  );
}
