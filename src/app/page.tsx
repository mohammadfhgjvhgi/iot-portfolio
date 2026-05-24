"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowUp, Globe, Github, Linkedin, Mail, Phone,
  Zap, Cpu, Radio, Code2, Server, Database,
  ChevronDown, Menu, X, ExternalLink,
  CircuitBoard, Wifi, ShieldCheck, Rocket, Star,
  MapPin, Send, Users, Wrench, Target, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/language";
import TeamSection from "@/components/portfolio/TeamSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProjectsShowcase from "@/components/portfolio/ProjectsShowcase";
import SkillsMatrix from "@/components/portfolio/SkillsMatrix";
import Timeline from "@/components/portfolio/Timeline";

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

/* ═══ SECTION WRAPPER ═══ */
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={stagger}
      className={`py-16 sm:py-20 ${className}`}
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
    <motion.div ref={ref} variants={fadeUp} className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold gradient-neon-text inline-block mb-3">
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
      setCount(Math.floor(progress * end));
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
    { id: "team", label: t("الفريق", "Team") },
    { id: "services", label: t("الخدمات", "Services") },
    { id: "projects", label: t("المشاريع", "Projects") },
    { id: "skills", label: t("المهارات", "Skills") },
    { id: "timeline", label: t("المسيرة", "Journey") },
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
            <CircuitBoard className="h-7 w-7 text-[#00ff66] group-hover:shadow-[0_0_12px_#00ff66] transition-shadow" />
            <span className="font-bold text-lg gradient-neon-text hidden sm:inline">
              {t("مشاريع للأنظمة الذكية", "Smart Systems Lab")}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "text-[#00ff66] bg-[#00ff66]/10"
                    : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium neon-border hover:bg-[#00ff66]/5 transition-all"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4 text-[#00e5ff]" />
              <span className="text-[#00e5ff]">{lang === "ar" ? "EN" : "عربي"}</span>
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
            <div className="px-4 py-3 space-y-1">
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

/* ═══ HERO SECTION ═══ */
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
    }, 40);
    return () => clearInterval(interval);
  }, [lang, fullText]);

  const stats = [
    { value: 4, suffix: "+", label: t("مشاريع حقيقية", "Real Projects"), icon: <Zap className="h-4 w-4" />, color: "#00ff66" },
    { value: 10, suffix: "+", label: t("حساسات", "Sensors"), icon: <Radio className="h-4 w-4" />, color: "#00e5ff" },
    { value: 3, suffix: "+", label: t("متحكمات", "MCUs"), icon: <Cpu className="h-4 w-4" />, color: "#ffab00" },
    { value: 6, suffix: "", label: t("خدمات", "Services"), icon: <Target className="h-4 w-4" />, color: "#b44dff" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-bg opacity-40" />
      <div className="absolute inset-0 gradient-mesh-dark" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff66]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#b44dff]/3 rounded-full blur-3xl animate-float" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neon-border glass-card-dark mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse-neon" />
          <span className="text-xs font-medium text-[#00ff66]">
            {t("🇵🇸 من فلسطين — جاهزون لمشاريعكم", "🇵🇸 From Palestine — Ready for Your Projects")}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="text-[#e8edf5]">{t("نبني أنظمة", "We Build")}</span>
          <br />
          <span className="gradient-neon-text">
            {t("ذكية حقيقية", "Real Smart Systems")}
          </span>
        </motion.h1>

        {/* Typed Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-8 mb-6"
        >
          <span className="terminal-text text-base sm:text-lg md:text-xl">
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-[#00ff66] ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-[#7a8ba8] text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {lang === "ar"
            ? "فريق هندسي متخصص في إنترنت الأشياء والأتمتة الذكية. نحول الأفكار إلى مشاريع إنتاجية حقيقية تجمع بين الأمان، الأتمتة، والتحكم الذكي عن بُعد."
            : "An engineering team specializing in IoT and smart automation. We turn ideas into production-ready projects combining security, automation, and intelligent remote control."}
        </motion.p>

        {/* Founders Names */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card-dark">
            <div className="w-2 h-2 rounded-full bg-[#00ff66]" />
            <span className="text-xs text-[#00ff66] font-medium">عمار مشارقة</span>
          </div>
          <span className="text-[#3d506e] text-xs">×</span>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card-dark">
            <div className="w-2 h-2 rounded-full bg-[#00e5ff]" />
            <span className="text-xs text-[#00e5ff] font-medium">محمد عقيلي</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="gradient-neon text-[#0a0f1a] font-bold px-8 py-3 rounded-xl hover:shadow-[0_0_20px_#00ff6640] transition-shadow"
          >
            {t("استعرض المشاريع", "View Projects")}
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="neon-border text-[#00ff66] hover:bg-[#00ff66]/10 font-semibold px-8 py-3 rounded-xl"
          >
            {t("تواصل معنا", "Contact Us")}
          </Button>
        </motion.div>

        {/* Stats with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={countUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 1 + i * 0.15, type: "spring" }}
              className="glass-card-dark rounded-xl p-4 card-hover text-center"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span style={{ color: stat.color }}>{stat.icon}</span>
                <span className="text-2xl font-bold gradient-neon-text">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <span className="text-xs text-[#7a8ba8]">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
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
        ? "جميع أنظمتنا تعمل محلياً بدون إنترنت — قرارات فورية للحالات الطارئة مثل كشف الحريق."
        : "All our systems work locally without internet — instant decisions for emergencies like fire detection.",
      color: "#00ff66",
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: t("العمل بدون إنترنت", "Offline-First"),
      desc: lang === "ar"
        ? "معالجة حافة (Edge Computing) — العتاد يعمل باستقلالية تامة. الإنترنت ميزة إضافية وليس شرطاً."
        : "Edge Computing — hardware operates independently. Internet is a feature, not a requirement.",
      color: "#00e5ff",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: t("تكامل سحابي", "Cloud Integration"),
      desc: lang === "ar"
        ? "مزامنة سلسة مع Firebase لمراقبة البيانات والتحكم عن بُعد عبر التطبيقات في أي وقت."
        : "Seamless Firebase sync for data monitoring and remote control via apps, anytime.",
      color: "#ffab00",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: t("كود نظيف ومنظم", "Clean Code"),
      desc: lang === "ar"
        ? "أكواد مقسمة وواضحة مع توثيق شامل. كل مشروع قابل للتطوير والصيانة بسهولة."
        : "Modular, clean code with comprehensive documentation. Every project is maintainable and scalable.",
      color: "#b44dff",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: t("مشاريع حقيقية وليس تجريبية", "Real Projects"),
      desc: lang === "ar"
        ? "ليس مشاريع تعليمية — كل مشروع حل مشكلة حقيقية وتم اختباره في بيئة إنتاجية."
        : "Not educational demos — every project solves a real problem and has been tested in production.",
      color: "#ff6b9d",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: t("صُنع في فلسطين 🇵🇸", "Made in Palestine 🇵🇸"),
      desc: lang === "ar"
        ? "فريق محلي من فلسطين يفهم احتياجات السوق ويقدم دعماً فنياً مباشراً وسريعاً."
        : "A local team from Palestine that understands market needs and provides direct, fast support.",
      color: "#4fc3f7",
    },
  ];

  return (
    <Section id="about" className="relative">
      <div className="absolute inset-0 gradient-mesh-dark opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle ar="لماذا نحن مختلفون" en="Why We're Different" />

        <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#7a8ba8] text-base sm:text-lg leading-relaxed">
            {lang === "ar"
              ? "لا نقدم مشاريع أردوينو تعليمية عادية. نبني منظومات هندسية متكاملة تعتمد على معمارية ثنائية ومتعددة المعالجات، مع خوارزميات حماية مبتكرة ضمان عمل مستقر 24/7."
              : "We don't offer ordinary educational Arduino projects. We build complete engineering ecosystems based on dual and multi-processor architectures, with innovative protection algorithms ensuring stable 24/7 operation."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card-dark rounded-xl p-6 card-hover gradient-card-border text-center group"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-shadow group-hover:shadow-lg"
                style={{ backgroundColor: `${p.color}15`, color: p.color }}
              >
                {p.icon}
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: p.color }}>
                {p.title}
              </h3>
              <p className="text-xs text-[#7a8ba8] leading-relaxed">{p.desc}</p>
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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending — redirect to Telegram for actual contact
    await new Promise((r) => setTimeout(r, 800));
    const msg = encodeURIComponent(`🔔 New message from portfolio\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    window.open(`https://t.me/Mashari3_AI_Arduino?text=${msg}`, "_blank");
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
    setSending(false);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-[#7a8ba8] mb-6">
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
                className="flex items-center gap-4 p-4 rounded-xl glass-card-dark card-hover group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                  style={{ backgroundColor: `${c.color}15`, color: c.color }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-[#7a8ba8]">{c.label}</p>
                  <p className="text-sm font-medium text-[#e8edf5] group-hover:text-[#00ff66] transition-colors">
                    {c.value}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-[#7a8ba8] mr-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}

            {/* Location Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 p-4 rounded-xl glass-card-dark mt-4"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#00ff6615] text-[#00ff66]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-[#7a8ba8]">{t("الموقع", "Location")}</p>
                <p className="text-sm font-medium text-[#e8edf5]">{t("فلسطين 🇵🇸", "Palestine 🇵🇸")}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp}>
            <form onSubmit={handleSubmit} className="glass-card-dark rounded-2xl p-6 sm:p-8 space-y-5 gradient-card-border">
              <div className="flex items-center gap-2 mb-2">
                <Send className="h-4 w-4 text-[#00ff66]" />
                <span className="text-sm font-semibold text-foreground">
                  {t("أرسل رسالة", "Send a Message")}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#7a8ba8] mb-1.5">
                  {t("الاسم", "Name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0a0f1a] border border-[#1e2d4d] rounded-lg px-4 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630] outline-none transition-all"
                  placeholder={t("أدخل اسمك", "Enter your name")}
                  dir={lang === "ar" ? "rtl" : "ltr"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#7a8ba8] mb-1.5">
                  {t("البريد الإلكتروني", "Email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0a0f1a] border border-[#1e2d4d] rounded-lg px-4 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630] outline-none transition-all"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#7a8ba8] mb-1.5">
                  {t("الرسالة", "Message")}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0a0f1a] border border-[#1e2d4d] rounded-lg px-4 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630] outline-none transition-all resize-none"
                  placeholder={t("اكتب رسالتك هنا...", "Write your message here...")}
                  dir={lang === "ar" ? "rtl" : "ltr"}
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full gradient-neon text-[#0a0f1a] font-bold py-3 rounded-xl hover:shadow-[0_0_20px_#00ff6640] transition-shadow disabled:opacity-50"
              >
                {sending
                  ? t("جاري الإرسال...", "Sending...")
                  : sent
                    ? t("تم الإرسال ✓", "Sent ✓")
                    : t("إرسال عبر تليجرام ↗", "Send via Telegram ↗")}
              </Button>
              <p className="text-[10px] text-[#3d506e] text-center mt-2">
                {t("سيتم فتح تليجرام لإرسال رسالتك", "Telegram will open to send your message")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══ FOOTER ═══ */
function PortfolioFooter() {
  const { t, lang } = useLang();
  return (
    <footer className="border-t border-[#1e2d4d] bg-[#080c16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Team */}
          <div className="flex items-center gap-3">
            <CircuitBoard className="h-6 w-6 text-[#00ff66]" />
            <div>
              <span className="text-sm font-bold gradient-neon-text">
                {t("مشاريع للأنظمة الذكية", "Smart Systems Lab")}
              </span>
              <p className="text-[10px] text-[#3d506e]">
                {t("عمار مشارقة × محمد عقيلي", "Ammar Masharqa × Mohammad Aqli")}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-[#7a8ba8]">
            <a
              href="https://t.me/Mashari3_AI_Arduino"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff66] transition-colors text-xs"
            >
              Telegram
            </a>
            <span className="text-[#1e2d4d]">|</span>
            <a
              href="https://www.facebook.com/share/1HnZactzYD/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff66] transition-colors text-xs"
            >
              Facebook
            </a>
            <span className="text-[#1e2d4d]">|</span>
            <a
              href="https://wa.me/972569303043"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff66] transition-colors text-xs"
            >
              WhatsApp
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#3d506e]">
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
          className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full gradient-neon text-[#0a0f1a] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_#00ff6640] transition-shadow"
          aria-label={t("العودة لأعلى", "Scroll to top")}
        >
          <ArrowUp className="h-5 w-5" />
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
    const sections = ["hero", "team", "services", "projects", "skills", "timeline", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
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
        <HeroSection />

        {/* Why Us / About */}
        <WhyUsSection />

        {/* Team */}
        <div className="relative">
          <Section id="team">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <TeamSection />
            </div>
          </Section>
        </div>

        {/* Services */}
        <Section id="services" className="relative">
          <div className="absolute inset-0 gradient-mesh-dark opacity-40" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <ServicesSection />
          </div>
        </Section>

        {/* Projects */}
        <div className="relative">
          <Section id="projects">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <SectionTitle ar="مشاريعنا الحقيقية" en="Our Real Projects" />
              <ProjectsShowcase />
            </div>
          </Section>
        </div>

        {/* Skills */}
        <Section id="skills" className="relative">
          <div className="absolute inset-0 gradient-mesh-dark opacity-40" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <SkillsMatrix />
          </div>
        </Section>

        {/* Timeline */}
        <Section id="timeline">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Timeline />
          </div>
        </Section>

        {/* Contact */}
        <ContactSection />
      </main>

      <PortfolioFooter />
      <ScrollToTop />
    </div>
  );
}
