"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CircuitBoard, Globe, Moon, Search, BookOpen, Cpu, Layers,
  ShieldCheck, Smartphone, Github, ArrowRight, Bot, Terminal,
  Database, Zap, Rocket, Map, Users, ExternalLink, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/lib/language";
import { useGuideStore } from "@/lib/guide-store";
import { guideSections } from "@/data/guide-sections";
import { SectionIcon } from "@/lib/icon-map";
import { AnimatedCounter } from "@/components/guide/AnimatedCounter";
import { cn } from "@/lib/utils";

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

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const { t, lang, isRTL } = useLang();
  const { theme } = useGuideStore();

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex-1 pt-14"
    >
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
            <Link href="/docs/overview">
              <Button
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
            </Link>
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
              <Link key={section.id} href={`/docs/${section.id}`}>
                <motion.div
                  variants={fadeUp}
                  className={cn(
                    "group p-4 sm:p-5 rounded-xl text-start card-hover transition-all h-full",
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
                </motion.div>
              </Link>
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

      {/* ─── TEAM & PROJECTS ─── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-10 sm:mb-12">
            <h2 className={cn("text-2xl sm:text-3xl font-bold inline-block mb-3", isLight ? "text-gray-900" : "gradient-neon-text")}>
              {t("فريق العمل والمشاريع", "Team & Projects")}
            </h2>
            <p className={cn("text-sm max-w-xl mx-auto", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>
              {t(
                "فريق هندسي من فلسطين 🇵🇸 — نبني أنظمة ذكية حقيقية تعتمد على معمارية متعددة المعالجات",
                "An engineering team from Palestine 🇵🇸 — building real smart systems with multi-processor architectures"
              )}
            </p>
            <div className="w-20 h-0.5 gradient-neon mx-auto rounded-full opacity-60 mt-3" />
          </motion.div>

          {/* Team Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10"
          >
            {[
              {
                name: "عمار مشارقة",
                nameEn: "Ammar Masharqa",
                role: t("مؤسس ومدير العمليات", "Co-founder & Operations Manager"),
                skills: ["Project Management", "Client Relations", "Team Coordination", "IoT Overview", "Content Creation"],
                color: "#00ff66",
              },
              {
                name: "محمد عقيلي",
                nameEn: "Mohammad Aqli",
                role: t("المؤسس والمهندس الرئيسي", "Co-founder & Lead Engineer"),
                skills: ["Arduino", "ESP32/8266", "C/C++", "Hardware Design", "Firebase", "Python", "Assembly"],
                color: "#00e5ff",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={cn(
                  "p-5 sm:p-6 rounded-xl card-hover",
                  isLight
                    ? "bg-white border border-gray-200 hover:shadow-md"
                    : "glass-card-dark"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg font-bold"
                    style={{ backgroundColor: `${member.color}15`, color: member.color }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={cn("font-bold text-sm", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                      {member.name}
                    </h3>
                    <p className={cn("text-xs mb-0.5", isLight ? "text-gray-400" : "text-[#3d506e]")}>{member.nameEn}</p>
                    <p className={cn("text-xs font-medium mb-2", isLight ? "text-gray-600" : "text-[#7a8ba8]")}>{member.role}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={cn(
                            "text-[10px] px-2 py-0 font-normal",
                            isLight
                              ? "border-gray-200 text-gray-500 bg-gray-50"
                              : "border-[#1e2d4d] text-[#7a8ba8] bg-[#151d33]/50"
                          )}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-6">
            <h3 className={cn("text-lg font-bold mb-4 flex items-center gap-2", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
              <Cpu className="h-5 w-5 text-[#00e5ff]" />
              {t("المشاريع المنفذة", "Completed Projects")}
            </h3>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
          >
            {[
              {
                title: t("نظام إدارة المباني الذكية", "Smart Building Management"),
                desc: t("معمارية ثنائية المعالجات (Arduino Mega + ESP8266) لإدارة صلاحيات الدخول، حماية المناطق، وتتبع البيئة عبر Firebase.", "Dual-processor (Arduino Mega + ESP8266) for access control, zone protection, and environment monitoring via Firebase."),
                tech: ["Arduino Mega", "ESP8266", "C++", "Firebase", "Kotlin"],
                color: "#00ff66",
                slug: "overview",
              },
              {
                title: t("نظام المواقف الذكي", "Smart Parking System"),
                desc: t("9 حساسات IR + كشف غاز MQ-2 + اهتزاز SW-420 عبر معمارية 3 مستويات (Mega → Uno → Python API).", "9 IR sensors + MQ-2 gas + SW-420 vibration via 3-tier architecture (Mega → Uno → Python API)."),
                tech: ["Arduino Mega", "Arduino Uno", "Python", "Firebase REST", "C++"],
                color: "#00e5ff",
                slug: "overview",
              },
              {
                title: t("الخزنة الذكية عالية الأمان", "High-Security RFID Smart Safe"),
                desc: t("معالجة الحافة مع خوارزمية مكافحة تجمد المعالج لضمان عمل RFID بنسبة 100%.", "Edge computing with anti-freeze algorithm ensuring 100% RFID reliability."),
                tech: ["ESP32", "MFRC522 RFID", "C++", "Firebase REST", "Preferences"],
                color: "#ffab00",
                slug: "overview",
              },
              {
                title: t("أتمتة صالات الأفراح", "Wedding Hall Automation"),
                desc: t("حساسات تقارب + HC-SR04 + DFPlayer Mini مع آلة حالات برمجية (6 أوضاع إضاءة).", "Proximity sensors + HC-SR04 + DFPlayer Mini with state machine (6 lighting modes)."),
                tech: ["ESP32", "DFPlayer Mini", "HC-SR04", "Firebase RTDB", "C++"],
                color: "#b44dff",
                slug: "overview",
              },
            ].map((project, i) => (
              <Link key={i} href={`/docs/${project.slug}`}>
                <motion.div
                  variants={fadeUp}
                  className={cn(
                    "group p-5 rounded-xl card-hover transition-all cursor-pointer h-full",
                    isLight
                      ? "bg-white border border-gray-200 hover:border-green-300 hover:shadow-md"
                      : "glass-card-dark"
                  )}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${project.color}15`, color: project.color }}
                    >
                      <Cpu className="h-4 w-4" />
                    </div>
                    <ArrowRight className={cn(
                      "h-4 w-4 text-[#3d506e] group-hover:text-[#00ff66] transition-all group-hover:translate-x-0.5",
                      isRTL() && "rotate-180 group-hover:-translate-x-0.5"
                    )} />
                  </div>
                  <h4 className={cn("font-bold text-sm mb-1", isLight ? "text-gray-900" : "text-[#e8edf5]")}>
                    {project.title}
                  </h4>
                  <p className={cn("text-xs leading-relaxed mb-3 line-clamp-2", isLight ? "text-gray-500" : "text-[#7a8ba8]")}>
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <code
                        key={t}
                        className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded",
                          isLight
                            ? "bg-gray-100 text-gray-600"
                            : "bg-[#151d33] text-[#3d506e]"
                        )}
                      >
                        {t}
                      </code>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={cn(
              "mt-10 p-5 sm:p-6 rounded-xl text-center",
              isLight
                ? "bg-green-50 border border-green-200"
                : "glass-card-dark"
            )}
          >
            <p className={cn("text-sm font-medium mb-3", isLight ? "text-gray-700" : "text-[#e8edf5]")}>
              {t("مشروع في بالك؟ تواصل معنا!", "Have a project in mind? Contact us!")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://t.me/Mashari3_AI_Arduino"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#0088cc] text-white hover:bg-[#0077b5] transition-colors shadow-lg shadow-[#0088cc20]"
              >
                <MessageCircle className="h-4 w-4" />
                Telegram
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://wa.me/972569303043"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors shadow-lg shadow-[#25D36620]"
              >
                WhatsApp
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
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
            <Link href="/docs/project-info">
              <motion.div
                variants={fadeUp}
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
            </Link>

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
            <Link href="/docs/project-info">
              <motion.div
                variants={fadeUp}
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
            </Link>

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
            <Link href="/docs/project-info">
              <motion.div
                variants={fadeUp}
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
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
