"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowUp, Globe, Github, Linkedin, Mail, Phone,
  Zap, Cpu, Radio, Code2, Server, Database,
  ChevronDown, Menu, X, ExternalLink,
  CircuitBoard, Wifi, ShieldCheck, Rocket, Star,
  MapPin, Send, Users, Wrench, Target, TrendingUp,
  Loader2, Timer, Clock, CheckCircle2, AlertTriangle,
  MessageCircle, BookOpen, FileText, LayoutDashboard,
  User, Layers, Monitor, Smartphone, Cloud, Cable,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/language";

// Existing components
import TeamSection from "@/components/portfolio/TeamSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProjectsShowcase from "@/components/portfolio/ProjectsShowcase";
import SkillsMatrix from "@/components/portfolio/SkillsMatrix";
import Timeline from "@/components/portfolio/Timeline";
import SecurityAudit from "@/components/portfolio/SecurityAudit";
import Testimonials from "@/components/portfolio/Testimonials";
import ChatBot from "@/components/chat/ChatBot";
import ProjectCalculator from "@/components/portfolio/ProjectCalculator";
import ContactForm from "@/components/portfolio/ContactForm";
import BlogSection from "@/components/portfolio/BlogSection";

// New components
import StartHereSection from "@/components/portfolio/StartHereSection";
import GroupsLinksSection from "@/components/portfolio/GroupsLinksSection";
import ResourceLibrarySection from "@/components/portfolio/ResourceLibrarySection";
import LatestAdditionsSection from "@/components/portfolio/LatestAdditionsSection";
import LiveActivitySection from "@/components/portfolio/LiveActivitySection";
import DynamicElementsSection from "@/components/portfolio/DynamicElementsSection";
import FAQSection from "@/components/portfolio/FAQSection";
import SearchDialog from "@/components/portfolio/SearchDialog";
import BreadcrumbNav from "@/components/portfolio/BreadcrumbNav";

/* ═══ ANIMATION VARIANTS ═══ */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const countUp = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
};

/* ═══ LOADING SKELETON ═══ */
function SectionSkeleton() {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="h-8 w-48 bg-[#151d33] rounded-lg mb-4 animate-pulse mx-auto" />
        <div className="h-1 w-20 bg-[#151d33] rounded-full mb-12 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-[#151d33] rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══ SECTION WRAPPER ═══ */
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={stagger}
      className={`py-12 sm:py-16 md:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

/* ═══ SECTION TITLE ═══ */
function SectionTitle({ ar, en }: { ar: string; en: string }) {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center mb-10 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-neon-text inline-block mb-3">
        {t(ar, en)}
      </h2>
      <div className="w-20 h-0.5 gradient-neon mx-auto rounded-full opacity-60" />
    </motion.div>
  );
}

/* ═══ ANIMATED COUNTER ═══ */
function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══ NAVBAR ═══ */
function Navbar({ activeSection }: { activeSection: string }) {
  const { lang, toggle, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "hero", label: t("الرئيسية", "Home") },
    { id: "start-here", label: t("ابدأ من هنا", "Start Here") },
    { id: "team", label: t("الفريق", "Team") },
    { id: "services", label: t("الخدمات", "Services") },
    { id: "resources", label: t("الموارد", "Resources") },
    { id: "projects", label: t("المشاريع", "Projects") },
    { id: "groups", label: t("المجتمعات", "Community") },
    { id: "faq", label: t("الأسئلة", "FAQ") },
    { id: "contact", label: t("تواصل", "Contact") },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group" aria-label="Go to homepage">
            <CircuitBoard className="h-6 w-6 sm:h-7 sm:w-7 text-[#00ff66] group-hover:shadow-[0_0_12px_#00ff66] transition-shadow" />
            <span className="font-bold text-sm sm:text-lg gradient-neon-text hidden sm:inline">
              {t("مشاريع للأنظمة الذكية", "Smart Systems Lab")}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "text-[#00ff66] bg-[#00ff66]/10"
                    : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Search + Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <SearchDialog />
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium neon-border hover:bg-[#00ff66]/5 transition-all"
              aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            >
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#00e5ff]" />
              <span className="text-[#00e5ff] hidden sm:inline">{lang === "ar" ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-[#1e2d4d] overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1 max-h-[60vh] overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "text-[#00ff66] bg-[#00ff66]/10"
                      : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ═══ HERO SECTION — Improved (Requirement 1) ═══ */
function HeroSection() {
  const { t, lang } = useLang();
  const [typedText, setTypedText] = useState("");
  const fullText = lang === "ar"
    ? "حلول إنترنت الأشياء الحقيقية — من المتحكمات إلى السحابة"
    : "Real IoT Solutions — From Microcontrollers to the Cloud";

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [lang, fullText]);

  // Updated stats per requirement 9
  const stats = [
    { value: 4, suffix: "+", label: t("مشاريع حقيقية", "Real Projects"), icon: <Zap className="h-4 w-4" />, color: "#00ff66" },
    { value: 100, suffix: "+", label: t("ساعة عمل", "Work Hours"), icon: <Timer className="h-4 w-4" />, color: "#00e5ff" },
    { value: 20, suffix: "+", label: t("مشكلة حُلّت", "Problems Solved"), icon: <Wrench className="h-4 w-4" />, color: "#ffab00" },
    { value: 800, suffix: "+", label: t("عضو مجتمع", "Community"), icon: <Users className="h-4 w-4" />, color: "#b44dff" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute inset-0 gradient-mesh-dark" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-[#00ff66]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-36 h-36 sm:w-48 sm:h-48 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-[#b44dff]/3 rounded-full blur-3xl animate-float" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full neon-border glass-card-dark mb-6 sm:mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse-neon" />
          <span className="text-[10px] sm:text-xs font-medium text-[#00ff66]">
            {t("🇵🇸 من فلسطين — جاهزون لمشاريعكم", "🇵🇸 From Palestine — Ready for Your Projects")}
          </span>
        </motion.div>

        {/* Main Heading — Clear in first 3 seconds */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
        >
          <span className="text-[#e8edf5]">{t("نبني أنظمة", "We Build")}</span>
          <br />
          <span className="gradient-neon-text">
            {t("ذكية حقيقية", "Real Smart Systems")}
          </span>
        </motion.h1>

        {/* Typed Subtitle — What we do */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-7 sm:h-8 mb-4 sm:mb-5"
        >
          <span className="terminal-text text-sm sm:text-lg md:text-xl">
            {typedText}
            <span className="inline-block w-0.5 h-4 sm:h-5 bg-[#00ff66] ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Clear Description — Who we are, what's the benefit */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[#7a8ba8] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
        >
          {lang === "ar"
            ? "فريق هندسي من فلسطين يصنع أنظمة إنترنت الأشياء والأتمتة الذكية. مشاريع حقيقية تعمل بدون إنترنت — من المتحكمات إلى السحابة."
            : "An engineering team from Palestine building real IoT and smart automation systems. Projects that work offline — from microcontrollers to the cloud."}
        </motion.p>

        {/* Founders Names — Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-card-dark">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span className="text-[10px] sm:text-xs text-[#00ff66] font-medium">عمار مشارقة</span>
          </div>
          <span className="text-[#3d506e] text-xs">×</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-card-dark">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-[10px] sm:text-xs text-[#00e5ff] font-medium">محمد عقيلي</span>
          </div>
        </motion.div>

        {/* CTA Buttons — Only 2 as required */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <Button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="gradient-neon text-[#0a0f1a] font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-[0_0_20px_#00ff6640] transition-shadow text-sm sm:text-base"
          >
            {t("استكشف المشاريع", "Explore Projects")}
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("groups")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="neon-border text-[#00ff66] hover:bg-[#00ff66]/10 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base"
          >
            {t("انضم للمجتمع", "Join Community")}
          </Button>
        </motion.div>

        {/* Live Stats Counter Bar — Requirement 1 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={countUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.95 + i * 0.12, type: "spring" }}
              className="glass-card-dark rounded-xl p-3 sm:p-4 card-hover text-center"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span style={{ color: stat.color }}>{stat.icon}</span>
                <span className="text-xl sm:text-2xl font-bold gradient-neon-text">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-[#7a8ba8]">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-12 sm:mt-16"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById("start-here")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[#7a8ba8] hover:text-[#00ff66] transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ WHY US SECTION ═══ */
function WhyUsSection() {
  const { t, lang } = useLang();
  const reasons = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: t("الأمان أولاً", "Safety First"),
      desc: lang === "ar"
        ? "جميع أنظمتنا تعمل محلياً بدون إنترنت — قرارات فورية للحالات الطارئة."
        : "All systems work locally without internet — instant decisions for emergencies.",
      color: "#00ff66",
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: t("العمل بدون إنترنت", "Offline-First"),
      desc: lang === "ar"
        ? "معالجة حافة (Edge Computing) — العتاد يعمل باستقلالية تامة."
        : "Edge Computing — hardware operates with full independence.",
      color: "#00e5ff",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: t("تكامل سحابي", "Cloud Integration"),
      desc: lang === "ar"
        ? "مزامنة مع Firebase لمراقبة البيانات والتحكم عن بُعد."
        : "Firebase sync for data monitoring and remote control.",
      color: "#ffab00",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: t("كود نظيف", "Clean Code"),
      desc: lang === "ar"
        ? "أكواد مقسمة مع توثيق شامل. قابل للتطوير والصيانة."
        : "Modular code with comprehensive documentation. Maintainable and scalable.",
      color: "#b44dff",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: t("مشاريع حقيقية", "Real Projects"),
      desc: lang === "ar"
        ? "كل مشروع حل مشكلة حقيقية ومُختبر في بيئة إنتاجية."
        : "Every project solves a real problem, tested in production.",
      color: "#ff6b9d",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: t("صُنع في فلسطين 🇵🇸", "Made in Palestine 🇵🇸"),
      desc: lang === "ar"
        ? "فريق محلي يفهم احتياجات السوق ويقدم دعماً فنياً مباشراً."
        : "Local team understanding market needs with direct support.",
      color: "#4fc3f7",
    },
  ];

  return (
    <Section id="about" className="relative">
      <div className="absolute inset-0 gradient-mesh-dark opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle ar="لماذا نحن مختلفون" en="Why We're Different" />

        <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-[#7a8ba8] text-sm sm:text-base md:text-lg leading-relaxed">
            {lang === "ar"
              ? "لا نقدم مشاريع أردوينو تعليمية عادية. نبني منظومات هندسية متكاملة تعتمد على معمارية ثنائية ومتعددة المعالجات، مع خوارزميات حماية مبتكرة ضمان عمل مستقر 24/7."
              : "We don't offer ordinary educational Arduino projects. We build complete engineering ecosystems based on dual and multi-processor architectures, with innovative protection algorithms ensuring stable 24/7 operation."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {reasons.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card-dark rounded-xl p-4 sm:p-6 card-hover gradient-card-border text-center group"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-shadow group-hover:shadow-lg"
                style={{ backgroundColor: `${p.color}15`, color: p.color }}
              >
                {p.icon}
              </div>
              <h3 className="font-bold text-xs sm:text-sm mb-1.5 sm:mb-2" style={{ color: p.color }}>
                {p.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#7a8ba8] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══ CONTACT SECTION ═══ */
function ContactSection() {
  const { t, lang } = useLang();

  const contacts = [
    {
      icon: <Send className="h-5 w-5" />,
      label: t("تليجرام", "Telegram"),
      value: "@Mashari3_AI_Arduino",
      href: "https://t.me/Mashari3_AI_Arduino",
      color: "#0088cc",
    },
    {
      icon: <Send className="h-5 w-5" />,
      label: t("تليجرام 2", "Telegram 2"),
      value: "@Arsuino1",
      href: "https://t.me/Arsuino1",
      color: "#0088cc",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t("فيسبوك", "Facebook"),
      value: t("صفحتنا على فيسبوك", "Our Facebook Page"),
      href: "https://www.facebook.com/share/1HnZactzYD/",
      color: "#1877F2",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: t("واتساب", "WhatsApp"),
      value: "+972 56-XXX-XXXX",
      href: "https://wa.me/972569303043",
      color: "#25D366",
    },
  ];

  return (
    <Section id="contact" className="relative">
      <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle ar="تواصل معنا" en="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <motion.div variants={fadeUp} className="space-y-3 sm:space-y-4">
            <p className="text-[#7a8ba8] mb-4 sm:mb-6 text-sm sm:text-base">
              {lang === "ar"
                ? "عندك مشروع في بالك؟ تبي نظام أتمتة ذكي؟ أو بس استفسار تقني؟ تواصل معنا وسنرد عليك بأسرع وقت."
                : "Have a project in mind? Need a smart automation system? Or just a technical question? Reach out and we'll get back to you ASAP."}
            </p>

            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-card-dark card-hover group"
              >
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                  style={{ backgroundColor: `${c.color}15`, color: c.color }}
                >
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#7a8ba8]">{c.label}</p>
                  <p className="text-xs sm:text-sm font-medium text-[#e8edf5] group-hover:text-[#00ff66] transition-colors truncate">
                    {c.value}
                  </p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#7a8ba8] mr-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </motion.a>
            ))}

            {/* Location Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl glass-card-dark mt-3 sm:mt-4"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-[#00ff6615] text-[#00ff66]">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#7a8ba8]">{t("الموقع", "Location")}</p>
                <p className="text-xs sm:text-sm font-medium text-[#e8edf5]">{t("فلسطين 🇵🇸", "Palestine 🇵🇸")}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

/* ═══ FOOTER — Enhanced ═══ */
function PortfolioFooter() {
  const { t, lang } = useLang();

  const footerLinks = [
    { label: t("الرئيسية", "Home"), href: "#hero" },
    { label: t("المشاريع", "Projects"), href: "#projects" },
    { label: t("الموارد", "Resources"), href: "#resources" },
    { label: t("الخدمات", "Services"), href: "#services" },
    { label: t("الأسئلة الشائعة", "FAQ"), href: "#faq" },
    { label: t("تواصل", "Contact"), href: "#contact" },
  ];

  const socialLinks = [
    { label: "Telegram", href: "https://t.me/Mashari3_AI_Arduino" },
    { label: "Facebook", href: "https://www.facebook.com/share/1HnZactzYD/" },
    { label: "WhatsApp", href: "https://wa.me/972569303043" },
  ];

  return (
    <footer className="border-t border-[#1e2d4d] bg-[#080c16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo & Team */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <CircuitBoard className="h-5 w-5 sm:h-6 sm:w-6 text-[#00ff66]" />
              <span className="text-sm sm:text-base font-bold gradient-neon-text">
                {t("مشاريع للأنظمة الذكية", "Smart Systems Lab")}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-[#3d506e] mb-1">
              {t("عمار مشارقة × محمد عقيلي", "Ammar Masharqa × Mohammad Aqli")}
            </p>
            <p className="text-[10px] sm:text-xs text-[#3d506e]">
              {t("مركز تقني احترافي حي يخدم المجتمع التقني", "A professional tech hub serving the tech community")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-[#e8edf5] mb-3">
              {t("روابط سريعة", "Quick Links")}
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[10px] sm:text-xs text-[#7a8ba8] hover:text-[#00ff66] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-[#e8edf5] mb-3">
              {t("تابعنا", "Follow Us")}
            </h4>
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] sm:text-xs text-[#7a8ba8] hover:text-[#00ff66] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-[#1e2d4d] pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <p className="text-[10px] sm:text-xs text-[#3d506e]">
            {t(
              "صُنع بشغف في فلسطين 🇵🇸 — جميع الحقوق محفوظة © 2025",
              "Made with passion in Palestine 🇵🇸 — All rights reserved © 2025"
            )}
          </p>
          <p className="text-[10px] text-[#2a3d5c]">
            {t("مرجع إثباتات خبرات محمد", "Mohammad's Experience Portfolio")}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══ SECURITY AUDIT SUMMARY (Homepage Card) ═══ */
function SecurityAuditSummary() {
  const { t, lang } = useLang();

  return (
    <motion.div variants={fadeUp} className="text-center">
      <SectionTitle ar="تقرير تدقيق الأمان" en="Security Audit Report" />
      <div className="max-w-lg mx-auto">
        <div className="glass-card-dark rounded-xl p-6 sm:p-8 card-hover mb-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 8px #00ff6640, 0 0 16px #00ff6620",
                  "0 0 12px #00ff6660, 0 0 24px #00ff6630",
                  "0 0 8px #00ff6640, 0 0 16px #00ff6620",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: "#00ff6612", border: "1px solid #00ff6625" }}
            >
              <ShieldCheck className="h-7 w-7 text-[#00ff66]" />
            </motion.div>
          </div>
          <div className="text-4xl font-bold gradient-neon-text mb-2">92<span className="text-lg text-[#7a8ba8]">/100</span></div>
          <p className="text-sm text-[#7a8ba8] mb-2">
            {lang === "ar"
              ? "نتيجة أمنية ممتازة — 4 أدوات اختبار، 17 إصلاح أمني"
              : "Excellent security score — 4 testing tools, 17 security fixes"}
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="led-on" />
            <span className="text-xs text-[#00ff66] font-medium">
              {lang === "ar" ? "جميع الثغرات الحرجة تم إصلاحها" : "All critical vulnerabilities fixed"}
            </span>
          </div>
          <Button
            onClick={() => window.dispatchEvent(new CustomEvent("open-security-modal"))}
            variant="outline"
            className="neon-border text-[#00ff66] hover:bg-[#00ff66]/10 font-semibold text-sm"
          >
            {lang === "ar" ? "عرض التقرير الكامل" : "View Full Report"}
            <ExternalLink className="h-3.5 w-3.5 mr-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══ SECURITY AUDIT MODAL ═══ */
function SecurityAuditModal() {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLang();

  useEffect(() => {
    const handler = (e: CustomEvent) => { setOpen(true); };
    window.addEventListener("open-security-modal", handler as EventListener);
    return () => window.removeEventListener("open-security-modal", handler as EventListener);
  }, []);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-10 overflow-y-auto"
        onClick={() => setOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          className="w-full max-w-6xl bg-[#0a0f1a] rounded-2xl border border-[#1e2d4d] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 glass-dark border-b border-[#1e2d4d] px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold gradient-neon-text">
              {lang === "ar" ? "تقرير تدقيق الأمان الكامل" : "Full Security Audit Report"}
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 sm:p-6">
            <SecurityAudit />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══ PROJECT GUIDE SECTION (Shortened) ═══ */
function ProjectGuideSection() {
  const { t, lang } = useLang();
  const [showMore, setShowMore] = useState(false);

  const fullText = lang === "ar"
    ? "نظام بيئي متكامل لإنشاء وصيانة أنظمة إنترنت الأشياء الذكية. يضم المنصة 4 مشاريع حقيقية مُنفذة بأنظمة ثنائية وثلاثية المعالجات، مع معمارية قائمة على معالجة الحافة (Edge Computing) والتكامل السحابي عبر Firebase. كل مشروع يمر بمراحل: تحديد المشكلة → التصميم المعماري → التركيب → البرمجة → الاختبار → النشر. استخدمنا تقنيات Arduino Mega، ESP32، ESP8266 مع بروتوكولات اتصال متعددة (Serial, I2C, SPI, HTTP, MQTT). الفلسفة التصميمية تعتمد على الأمان أولاً — جميع الأنظمة تعمل محلياً بدون إنترنت وتتضمن خوارزميات حماية مبتكرة مثل Anti-Freeze للخزنة الذكية. الكود مكتوب بلغة C++ مع معايير هندسية صارمة لضمان الاستقرار والصيانة."
    : "A complete ecosystem for building and maintaining smart IoT systems. The platform includes 4 real projects built with dual and triple processor architectures, using an edge computing approach with Firebase cloud integration. Each project goes through: problem definition → architectural design → assembly → programming → testing → deployment. We used Arduino Mega, ESP32, ESP8266 with multiple communication protocols (Serial, I2C, SPI, HTTP, MQTT). The design philosophy is safety-first — all systems work locally without internet and include innovative protection algorithms like Anti-Freeze for the smart safe. Code is written in C++ with strict engineering standards for stability and maintainability.";

  const truncated = fullText.slice(0, lang === "ar" ? 180 : 280);

  return (
    <Section id="guide" className="relative">
      <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle ar="الدليل الشامل للمشروع" en="Comprehensive Project Guide" />
        <motion.div variants={fadeUp} className="glass-card-dark rounded-xl p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-4 w-4 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              {lang === "ar" ? "نظرة عامة" : "Overview"}
            </span>
          </div>
          <p className="text-sm text-[#7a8ba8] leading-relaxed mb-4" dir={lang === "ar" ? "rtl" : "ltr"}>
            {showMore ? fullText : truncated}
            {!showMore && <span className="text-[#3d506e]">...</span>}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all"
            style={{
              background: "#00e5ff10",
              color: "#00e5ff",
              border: "1px solid #00e5ff25",
            }}
          >
            {showMore
              ? (lang === "ar" ? "عرض أقل" : "Show Less")
              : (lang === "ar" ? "اقرأ المزيد" : "Read More")}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showMore ? "rotate-180" : ""}`} />
          </button>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══ PROJECT GUIDE MODAL (Full content) ═══ */
function ProjectGuideModal() {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLang();

  useEffect(() => {
    const handler = (e: CustomEvent) => { setOpen(true); };
    window.addEventListener("open-guide-modal", handler as EventListener);
    return () => window.removeEventListener("open-guide-modal", handler as EventListener);
  }, []);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-10 overflow-y-auto"
        onClick={() => setOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          className="w-full max-w-4xl bg-[#0a0f1a] rounded-2xl border border-[#1e2d4d] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 glass-dark border-b border-[#1e2d4d] px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold gradient-neon-text">
              {lang === "ar" ? "الدليل الشامل للمشروع" : "Comprehensive Project Guide"}
            </h2>
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6 sm:p-8" dir={lang === "ar" ? "rtl" : "ltr"}>
            <ProjectGuideSection />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══ ARCHITECTURE MODAL (Design Philosophy + Tech Stack) ═══ */
function ArchitectureModal() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const handler = (e: CustomEvent) => { setOpen(true); };
    window.addEventListener("open-arch-modal", handler as EventListener);
    return () => window.removeEventListener("open-arch-modal", handler as EventListener);
  }, []);

  if (!open) return null;

  const designPrinciples = lang === "ar"
    ? [
        { title: "الأمان أولاً", desc: "جميع الأنظمة تعمل محلياً بدون إنترنت — قرارات فورية للحالات الطارئة. المنطق المحلي يسبق السحابة.", icon: <ShieldCheck className="h-5 w-5" />, color: "#00ff66" },
        { title: "معالجة الحافة", desc: "Edge Computing — المعالجة تتم على المتحكم مباشرة بدون الاعتماد على سيرفر خارجي.", icon: <Cpu className="h-5 w-5" />, color: "#00e5ff" },
        { title: "كود نظيف وقابل للصيانة", desc: "تقسيم منطقي للكود، تسميات واضحة، وتوثيق شامل. معايير هندسية صارمة.", icon: <Code2 className="h-5 w-5" />, color: "#ffab00" },
        { title: "التكامل السحابي كطبقة إضافية", desc: "Firebase للمراقبة عن بعد والتحكم — ميزة إضافية وليست شرطاً للعمل.", icon: <Cloud className="h-5 w-5" />, color: "#b44dff" },
      ]
    : [
        { title: "Safety First", desc: "All systems work locally without internet — instant decisions for emergencies. Local logic precedes cloud.", icon: <ShieldCheck className="h-5 w-5" />, color: "#00ff66" },
        { title: "Edge Computing", desc: "Processing happens on the microcontroller directly — no dependency on external servers.", icon: <Cpu className="h-5 w-5" />, color: "#00e5ff" },
        { title: "Clean & Maintainable Code", desc: "Logical code separation, clear naming, comprehensive documentation. Strict engineering standards.", icon: <Code2 className="h-5 w-5" />, color: "#ffab00" },
        { title: "Cloud as Optional Layer", desc: "Firebase for remote monitoring and control — an optional feature, not a requirement.", icon: <Cloud className="h-5 w-5" />, color: "#b44dff" },
      ];

  const techStack = [
    { category: lang === "ar" ? "المتحكمات" : "Microcontrollers", items: ["Arduino Mega 2560", "Arduino Uno", "ESP32", "ESP8266"], color: "#00ff66" },
    { category: lang === "ar" ? "الحساسات" : "Sensors", items: ["DHT11", "MQ-2 Gas", "Flame", "PIR Motion", "LDR Light", "IR", "HC-SR04 Ultrasonic", "TTP223 Touch", "SW-420 Vibration", "RFID MFRC522"], color: "#00e5ff" },
    { category: lang === "ar" ? "لغات البرمجة" : "Languages", items: ["C/C++ (Arduino)", "Python", "Kotlin (Android)"], color: "#ffab00" },
    { category: lang === "ar" ? "التكامل السحابي" : "Cloud Integration", items: ["Firebase RTDB", "Firebase REST API", "HTTP/HTTPS", "Serial Communication", "SPI", "I2C"], color: "#b44dff" },
    { category: lang === "ar" ? "المكونات الإلكترونية" : "Electronic Components", items: ["Servo Motors", "Relays", "Solenoid Locks", "LCD Displays", "Keypads", "Buzzers", "DFPlayer Mini", "LED Arrays"], color: "#ff6b9d" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-10 overflow-y-auto"
        onClick={() => setOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          className="w-full max-w-5xl bg-[#0a0f1a] rounded-2xl border border-[#1e2d4d] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 glass-dark border-b border-[#1e2d4d] px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold gradient-neon-text">
              {lang === "ar" ? "فلسفة التصميم والتقنيات" : "Design Philosophy & Tech Stack"}
            </h2>
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6 sm:p-8 space-y-8" dir={lang === "ar" ? "rtl" : "ltr"}>
            {/* Design Philosophy */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LayoutDashboard className="h-5 w-5 text-[#00ff66]" />
                <h3 className="text-base font-bold text-[#e8edf5]">
                  {lang === "ar" ? "فلسفة التصميم" : "Design Philosophy"}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {designPrinciples.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card-dark rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${p.color}15`, color: p.color }}>
                        {p.icon}
                      </div>
                      <h4 className="text-sm font-bold" style={{ color: p.color }}>{p.title}</h4>
                    </div>
                    <p className="text-xs text-[#7a8ba8] leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-5 w-5 text-[#00e5ff]" />
                <h3 className="text-base font-bold text-[#e8edf5]">
                  {lang === "ar" ? "التقنيات المستخدمة" : "Technologies Used"}
                </h3>
              </div>
              <div className="space-y-4">
                {techStack.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="glass-card-dark rounded-xl p-4"
                  >
                    <h4 className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: cat.color }}>
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium"
                          style={{
                            background: `${cat.color}08`,
                            color: `${cat.color}cc`,
                            border: `1px solid ${cat.color}20`,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══ MOHAMMAD DEDICATED MODAL ═══ */
function MohammadModal() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const handler = (e: CustomEvent) => { setOpen(true); };
    window.addEventListener("open-mohammad-modal", handler as EventListener);
    return () => window.removeEventListener("open-mohammad-modal", handler as EventListener);
  }, []);

  if (!open) return null;

  const stats = [
    { label: lang === "ar" ? "المشاريع المُنفذة" : "Projects Built", value: "4+", color: "#00e5ff" },
    { label: lang === "ar" ? "ساعات العمل" : "Work Hours", value: "400+", color: "#00ff66" },
    { label: lang === "ar" ? "المشاكل المُحلّة" : "Problems Solved", value: "40+", color: "#ffab00" },
    { label: lang === "ar" ? "أنواع المتحكمات" : "MCU Types", value: "4+", color: "#b44dff" },
  ];

  const skills = [
    "Arduino (Mega, Uno, Nano)", "ESP32 / ESP8266", "C / C++ (Embedded)",
    "Python", "Hardware Design & Assembly", "Firebase RTDB & REST",
    "Serial Communication (UART/SPI/I2C)", "Sensor Integration",
    "State Machine Architecture", "Edge Computing", "Multi-Processor Systems",
    "PCB Design Basics", "Android (Kotlin)", "Git & GitHub",
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-10 overflow-y-auto"
        onClick={() => setOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          className="w-full max-w-4xl bg-[#0a0f1a] rounded-2xl border border-[#1e2d4d] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 glass-dark border-b border-[#1e2d4d] px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#00e5ff]">
              {lang === "ar" ? "محمد عقيلي — المهندس الرئيسي" : "Mohammad Aqli — Lead Engineer"}
            </h2>
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6 sm:p-8" dir={lang === "ar" ? "rtl" : "ltr"}>
            {/* Avatar & Name */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#00e5ff10] border-2 border-[#00e5ff30]">
                  <CircuitBoard className="h-10 w-10 text-[#00e5ff]" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#00e5ff15] text-[#00e5ff] border border-[#00e5ff30]">🇵🇸 Palestine</span>
                </div>
              </div>
              <div className="text-center sm:text-start">
                <h3 className="text-2xl font-bold text-[#00e5ff] mb-1">{lang === "ar" ? "محمد عقيلي" : "Mohammad Aqli"}</h3>
                <p className="text-sm text-[#7a8ba8] mb-2">{lang === "ar" ? "المؤسس والمهندس الرئيسي — مشاريع للأنظمة الذكية" : "Founder & Lead Engineer — Smart Systems Lab"}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <a href="https://t.me/Mashari3_AI_Arduino" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0088cc15] text-[#0088cc] border border-[#0088cc25] hover:bg-[#0088cc25] transition-colors">
                    <Send className="h-3 w-3" /> Telegram
                  </a>
                  <a href="https://wa.me/972569303043" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#25D36615] text-[#25D366] border border-[#25D36625] hover:bg-[#25D36625] transition-colors">
                    <MessageCircle className="h-3 w-3" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="glass-card-dark rounded-xl p-5 mb-6">
              <p className="text-sm text-[#7a8ba8] leading-relaxed">
                {lang === "ar"
                  ? "المهندس الرئيسي لفريق مشاريع للأنظمة الذكية. متخصص في تصميم الأنظمة المدمجة، تركيب القطع الإلكترونية، معرفة أنواع المتحكمات والحساسات، والبرمجة بأنواعها — من الخفيفة إلى المعقدة. يبني المنطق البرمجي على المتحكمات بمنهجية هندسية تضمن الأمان والاستقرار. خبرة واسعة في معمارية الأنظمة متعددة المعالجات والاتصال التسلسلي والتكامل مع السحابة."
                  : "Lead engineer at Smart Systems Lab. Specializing in embedded systems design, hardware assembly, component knowledge (MCUs, sensors), and programming — from light to complex. Builds software logic for microcontrollers with engineering methodology ensuring safety and stability. Extensive experience in multi-processor architectures, serial communication, and cloud integration."}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {stats.map((s, i) => (
                <div key={i} className="glass-card-dark rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10px] text-[#7a8ba8] mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="glass-card-dark rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="h-4 w-4 text-[#00e5ff]" />
                <h4 className="text-sm font-bold text-[#e8edf5]">{lang === "ar" ? "المهارات التقنية" : "Technical Skills"}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#00e5ff08] text-[#00e5ffcc] border border-[#00e5ff20]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══ FLOATING TELEGRAM BUTTON ═══ */
function FloatingTelegramButton() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          href="https://t.me/Mashari3_AI_Arduino"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-14 sm:bottom-16 right-4 sm:right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm shadow-lg transition-shadow hover:shadow-[0_0_20px_#0088cc60]"
          style={{ background: "linear-gradient(135deg, #0088cc, #00a8e8)" }}
          aria-label={lang === "ar" ? "تواصل عبر تليجرام" : "Contact via Telegram"}
        >
          <Send className="h-4 w-4" />
          <span className="hidden sm:inline">{lang === "ar" ? "تواصل معنا" : "Chat Now"}</span>
          <span className="sm:hidden">{lang === "ar" ? "تليجرام" : "Telegram"}</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ═══ SCROLL TO TOP ═══ */
function ScrollToTop() {
  const [show, setShow] = useState(false);
  const { t } = useLang();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-14 sm:bottom-16 left-4 sm:left-6 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full gradient-neon text-[#0a0f1a] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_#00ff6640] transition-shadow"
          aria-label={t("العودة لأعلى", "Scroll to top")}
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ═══ MAIN PAGE ═══ */
export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const { lang, isRTL } = useLang();

  // Update document direction on language change
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", isRTL() ? "rtl" : "ltr");
    html.setAttribute("lang", lang);
  }, [lang, isRTL]);

  // Track active section on scroll
  useEffect(() => {
    const sections = [
      "hero", "start-here", "about", "guide", "architecture", "team", "groups",
      "services", "calculator", "resources", "projects",
      "latest", "activity", "dynamic",
      "skills", "audit", "testimonials", "blog", "timeline",
      "faq", "contact"
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: "-5% 0px -5% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1a] noise-overlay relative">
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        {/* 1. HERO — Improved */}
        <HeroSection />

        {/* 2. START HERE — Requirement 2 */}
        <div className="relative">
          <Section id="start-here">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <StartHereSection />
            </div>
          </Section>
        </div>

        {/* 3. WHY US / ABOUT */}
        <WhyUsSection />

        {/* 3b. PROJECT GUIDE (Shortened — Req 1) */}
        <ProjectGuideSection />

        {/* 3c. ARCHITECTURE LINK (Req 2) */}
        <div className="relative">
          <Section id="architecture" className="relative">
            <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
              <motion.div variants={fadeUp} className="text-center">
                <SectionTitle ar="فلسفة التصميم والتقنيات" en="Design Philosophy & Tech Stack" />
                <p className="text-sm text-[#7a8ba8] mb-6 max-w-xl mx-auto">
                  {lang === "ar"
                    ? "تعرّف على فلسفتنا في التصميم والتقنيات المستخدمة في جميع مشاريعنا"
                    : "Learn about our design philosophy and technologies used across all projects"}
                </p>
                <Button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-arch-modal"))}
                  variant="outline"
                  className="neon-border text-[#00ff66] hover:bg-[#00ff66]/10 font-semibold text-sm"
                >
                  {lang === "ar" ? "عرض الفلسفة والتقنيات" : "View Philosophy & Tech Stack"}
                  <Layers className="h-3.5 w-3.5 mr-2" />
                </Button>
              </motion.div>
            </div>
          </Section>
        </div>

        {/* 4. TEAM */}
        <div className="relative">
          <Section id="team">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <TeamSection />
              {/* Mohammad dedicated link (Req 10) */}
              <motion.div variants={fadeUp} className="mt-6 text-center">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-mohammad-modal"))}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all"
                  style={{
                    background: "#00e5ff10",
                    color: "#00e5ff",
                    border: "1px solid #00e5ff25",
                  }}
                >
                  <User className="h-4 w-4" />
                  {lang === "ar" ? "عرض صفحة محمد العقيلي الكاملة" : "View Mohammad Aqli's Full Profile"}
                </button>
              </motion.div>
            </div>
          </Section>
        </div>

        {/* 5. GROUPS LINKS — Requirement 3 */}
        <div className="relative">
          <Section id="groups" className="relative">
            <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
              <GroupsLinksSection />
            </div>
          </Section>
        </div>

        {/* 6. SERVICES */}
        <Section id="services" className="relative">
          <div className="absolute inset-0 gradient-mesh-dark opacity-40" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <ServicesSection />
          </div>
        </Section>

        {/* 7. CALCULATOR */}
        <div className="relative">
          <Section id="calculator">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <SectionTitle ar="احسب مشروعك" en="Calculate Your Project" />
              <ProjectCalculator />
            </div>
          </Section>
        </div>

        {/* 8. RESOURCE LIBRARY — Requirement 4 */}
        <div className="relative">
          <Section id="resources" className="relative">
            <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
              <ResourceLibrarySection />
            </div>
          </Section>
        </div>

        {/* 9. PROJECTS — Requirement 5 (enhanced) */}
        <div className="relative">
          <Section id="projects">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <SectionTitle ar="مشاريعنا الحقيقية" en="Our Real Projects" />
              <ProjectsShowcase />
            </div>
          </Section>
        </div>

        {/* 10. LATEST ADDITIONS — Requirement 6 */}
        <div className="relative">
          <Section id="latest" className="relative">
            <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
              <LatestAdditionsSection />
            </div>
          </Section>
        </div>

        {/* 11. LIVE ACTIVITY — Requirement 7 */}
        <div className="relative">
          <Section id="activity">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <LiveActivitySection />
            </div>
          </Section>
        </div>

        {/* 12. DYNAMIC ELEMENTS — Requirement 12 */}
        <div className="relative">
          <Section id="dynamic" className="relative">
            <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
              <DynamicElementsSection />
            </div>
          </Section>
        </div>

        {/* 13. SKILLS */}
        <Section id="skills" className="relative">
          <div className="absolute inset-0 gradient-mesh-dark opacity-40" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <SkillsMatrix />
          </div>
        </Section>

        {/* 14. SECURITY AUDIT — Moved to modal (Req 3) */}
        <div className="relative">
          <Section id="audit" className="relative">
            <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
              <SecurityAuditSummary />
            </div>
          </Section>
        </div>

        {/* 15. TESTIMONIALS */}
        <Section id="testimonials" className="relative">
          <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle ar="ماذا يقول عملاؤنا" en="What Our Clients Say" />
            <Testimonials />
          </div>
        </Section>

        {/* 16. BLOG */}
        <Section id="blog" className="relative">
          <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle ar="المدونة التقنية" en="Tech Blog" />
            <BlogSection />
          </div>
        </Section>

        {/* 17. TIMELINE */}
        <Section id="timeline">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Timeline />
          </div>
        </Section>

        {/* 18. FAQ — Requirement 11 */}
        <div className="relative">
          <Section id="faq" className="relative">
            <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
            <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
              <FAQSection />
            </div>
          </Section>
        </div>

        {/* 19. CONTACT */}
        <ContactSection />
      </main>

      <PortfolioFooter />
      <BreadcrumbNav />
      <ScrollToTop />
      <FloatingTelegramButton />
      <ChatBot />

      {/* ═══ MODALS ═══ */}
      <SecurityAuditModal />
      <ProjectGuideModal />
      <ArchitectureModal />
      <MohammadModal />
    </div>
  );
}
