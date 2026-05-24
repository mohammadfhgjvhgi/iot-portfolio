"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowUp, Globe, Github, Linkedin, Mail, Phone,
  Zap, Cpu, Radio, Code2, Server, Database,
  ChevronDown, Menu, X, ExternalLink, Terminal,
  CircuitBoard, Wifi, ShieldCheck, Rocket, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/language";
import ESP32Simulator from "@/components/portfolio/ESP32Simulator";
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
    { id: "about", label: t("عني", "About") },
    { id: "projects", label: t("المشاريع", "Projects") },
    { id: "simulator", label: t("المحاكي", "Simulator") },
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
              {t("محفظة المهندس", "Eng. Portfolio")}
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
  const fullText = lang === "ar" ? "مهندس أنظمة مدمجة & إنترنت الأشياء" : "Embedded Systems & IoT Engineer";

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
    }, 50);
    return () => clearInterval(interval);
  }, [lang, fullText]);

  const stats = [
    { value: "4+", label: t("مشاريع", "Projects"), icon: <Zap className="h-4 w-4" /> },
    { value: "10+", label: t("حساسات", "Sensors"), icon: <Radio className="h-4 w-4" /> },
    { value: "3+", label: t("متحكمات", "MCUs"), icon: <Cpu className="h-4 w-4" /> },
    { value: "5+", label: t("بروتوكولات", "Protocols"), icon: <Wifi className="h-4 w-4" /> },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-bg opacity-40" />
      <div className="absolute inset-0 gradient-mesh-dark" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff66]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neon-border glass-card-dark mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse-neon" />
          <span className="text-xs font-medium text-[#00ff66]">
            {t("متاح للمشاريع التجارية", "Available for Commercial Projects")}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="text-[#e8edf5]">{t("مرحباً، أنا", "Hi, I'm")}</span>
          <br />
          <span className="gradient-neon-text">
            {t("مهندس أنظمة ذكية", "Smart Systems Engineer")}
          </span>
        </motion.h1>

        {/* Typed Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-8 mb-8"
        >
          <span className="terminal-text text-lg sm:text-xl">
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-[#00ff66] ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-[#7a8ba8] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {lang === "ar"
            ? "أبني أنظمة إنترنت الأشياء الحقيقية — من المتحكمات الدقيقة إلى السحابة. مشاريع إنتاجية تجمع بين الأمان، الأتمتة، والتحكم الذكي عن بُعد."
            : "Building real-world IoT systems — from microcontrollers to the cloud. Production-ready projects combining security, automation, and intelligent remote control."}
        </motion.p>

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
            {t("تواصل معي", "Contact Me")}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.9 + i * 0.1 }}
              className="glass-card-dark rounded-xl p-4 card-hover text-center"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="text-[#00ff66]">{stat.icon}</span>
                <span className="text-2xl font-bold gradient-neon-text">{stat.value}</span>
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
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
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

/* ═══ ABOUT SECTION ═══ */
function AboutSection() {
  const { t, lang } = useLang();
  const principles = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: t("الأمان أولاً", "Safety First"),
      desc: lang === "ar"
        ? "أنظمة محلية تعمل بدون إنترنت — قرارات فورية للحالات الطارئة."
        : "Local systems that work offline — instant decisions for emergencies.",
      color: "#00ff66",
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: t("العمل المحلي", "Offline-First"),
      desc: lang === "ar"
        ? "معالجة حافة (Edge Computing) — العتاد يعمل باستقلالية تامة عن السحابة."
        : "Edge Computing — hardware operates completely independently from the cloud.",
      color: "#00e5ff",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: t("مزامنة سحابية", "Cloud Sync"),
      desc: lang === "ar"
        ? "ربط سلس مع Firebase لمراقبة البيانات والتحكم عن بُعد عبر التطبيقات."
        : "Seamless Firebase integration for data monitoring and remote control via apps.",
      color: "#ffab00",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: t("كود نظيف", "Clean Code"),
      desc: lang === "ar"
        ? "أكواد مقسمة، معادة الاستخدام، مع توثيق شامل ومقابل للإنتاج."
        : "Modular, reusable code with comprehensive documentation, production-ready.",
      color: "#b44dff",
    },
  ];

  return (
    <Section id="about" className="relative">
      <div className="absolute inset-0 gradient-mesh-dark opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle ar="من أنا" en="About Me" />

        <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#7a8ba8] text-base sm:text-lg leading-relaxed">
            {lang === "ar"
              ? "مهندس أنظمة مدمجة متخصص في إنترنت الأشياء (IoT) والأتمتة الذكية. أبني أنظمة حقيقية تربط العتاد بالسحابة — من لوحات التحكم والكشف الأمني إلى التطبيقات الذكية والتحكم عن بُعد. كل مشروع مبني من الصفر بفهم عميق للمشاكل الهندسية الحقيقية التي تظهر في الميدان."
              : "An embedded systems engineer specializing in IoT and smart automation. I build real systems bridging hardware to the cloud — from control panels and security detection to smart apps and remote control. Every project is built from scratch with deep understanding of real-world engineering challenges."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t("البريد الإلكتروني", "Email"),
      value: "engineer@example.com",
      href: "mailto:engineer@example.com",
      color: "#00ff66",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t("واتساب", "WhatsApp"),
      value: "+972 56-XXX-XXXX",
      href: "https://wa.me/972569303043",
      color: "#25D366",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: t("جيت هب", "GitHub"),
      value: "github.com/iot-engineer",
      href: "https://github.com",
      color: "#e8edf5",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/iot-engineer",
      href: "https://linkedin.com",
      color: "#0A66C2",
    },
  ];

  return (
    <Section id="contact" className="relative">
      <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle ar="تواصل معي" en="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-[#7a8ba8] mb-6">
              {lang === "ar"
                ? "مهتم بمشروع؟ أريد نظام أتمتة ذكي؟ تواصل معي وسأكون سعيداً بمساعدتك."
                : "Interested in a project? Need a smart automation system? Reach out and I'll be happy to help."}
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
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp}>
            <form onSubmit={handleSubmit} className="glass-card-dark rounded-2xl p-6 sm:p-8 space-y-5 gradient-card-border">
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
                  placeholder={lang === "ar" ? "example@email.com" : "example@email.com"}
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
                className="w-full gradient-neon text-[#0a0f1a] font-bold py-3 rounded-xl hover:shadow-[0_0_20px_#00ff6640] transition-shadow"
              >
                {sent ? t("تم الإرسال ✓", "Sent ✓") : t("إرسال الرسالة", "Send Message")}
              </Button>
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CircuitBoard className="h-5 w-5 text-[#00ff66]" />
            <span className="text-sm font-medium text-[#7a8ba8]">
              {t("محفظة مشاريع إنترنت الأشياء", "IoT Projects Portfolio")}
            </span>
          </div>
          <p className="text-xs text-[#3d506e]">
            {t(
              "صُمم وطُوّر بشغف — جميع الحقوق محفوظة © 2024",
              "Designed & developed with passion — All rights reserved © 2024"
            )}
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#7a8ba8] hover:text-[#e8edf5] transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#7a8ba8] hover:text-[#e8edf5] transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:engineer@example.com" className="text-[#7a8ba8] hover:text-[#e8edf5] transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
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
    const sections = ["hero", "about", "projects", "simulator", "skills", "timeline", "contact"];
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
        <AboutSection />

        <div className="relative">
          <Section id="projects">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <SectionTitle ar="المشاريع" en="Projects" />
              <ProjectsShowcase />
            </div>
          </Section>
        </div>

        <Section id="simulator">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle ar="محاكي ESP32 التفاعلي" en="Interactive ESP32 Simulator" />
            <ESP32Simulator />
          </div>
        </Section>

        <Section id="skills" className="relative">
          <div className="absolute inset-0 gradient-mesh-dark opacity-40" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle ar="المهارات والعتاد" en="Skills & Hardware" />
            <SkillsMatrix />
          </div>
        </Section>

        <Section id="timeline">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <SectionTitle ar="المسيرة الزمنية" en="Journey Timeline" />
            <Timeline />
          </div>
        </Section>

        <ContactSection />
      </main>

      <PortfolioFooter />
      <ScrollToTop />
    </div>
  );
}
