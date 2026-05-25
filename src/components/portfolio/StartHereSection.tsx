"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  BookOpen,
  Cpu,
  Wrench,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — 4 Learning Paths (Bilingual)
   ═══════════════════════════════════════════════════════════════ */

interface StartHereItem {
  icon: LucideIcon;
  color: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  btnText: { ar: string; en: string };
}

const START_ITEMS: StartHereItem[] = [
  {
    icon: GraduationCap,
    color: "#00ff66",
    title: {
      ar: "مبتدئ",
      en: "Beginner",
    },
    description: {
      ar: "مبتدئ في عالم الإلكترونيات؟ ابدأ هنا بأساسيات المتحكمات والحساسات خطوة بخطوة.",
      en: "New to electronics? Start here with microcontroller and sensor basics, step by step.",
    },
    btnText: {
      ar: "ابدأ الآن",
      en: "Start Now",
    },
  },
  {
    icon: BookOpen,
    color: "#00e5ff",
    title: {
      ar: "مشاريع التوجيهي",
      en: "Tawjihi Projects",
    },
    description: {
      ar: "مشاريع توجيهي جاهزة مع أكواد وملفات شرح كاملة.",
      en: "Ready-made Tawjihi projects with complete code and documentation.",
    },
    btnText: {
      ar: "ابدأ الآن",
      en: "Start Now",
    },
  },
  {
    icon: Cpu,
    color: "#ffab00",
    title: {
      ar: "Arduino و IoT",
      en: "Arduino & IoT",
    },
    description: {
      ar: "دورات وأمثلة عملية في Arduino وإنترنت الأشياء.",
      en: "Practical courses and examples in Arduino and IoT.",
    },
    btnText: {
      ar: "ابدأ الآن",
      en: "Start Now",
    },
  },
  {
    icon: Wrench,
    color: "#b44dff",
    title: {
      ar: "حلول الأخطاء",
      en: "Troubleshooting",
    },
    description: {
      ar: "تواجه مشكلة في مشروعك؟ ابحث عن الحل هنا.",
      en: "Facing issues with your project? Find solutions here.",
    },
    btnText: {
      ar: "ابدأ الآن",
      en: "Start Now",
    },
  },
];

/* ═══════════════════════════════════════════════════════════════
   START CARD
   ═══════════════════════════════════════════════════════════════ */

interface StartCardProps {
  item: StartHereItem;
  index: number;
}

function StartCard({ item, index }: StartCardProps) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.96 }
      }
      transition={{
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      }}
      className="relative group rounded-xl overflow-hidden glass-card-dark card-hover"
      style={{
        "--glow-color": item.color,
      } as React.CSSProperties}
    >
      {/* ── Colored Top Glow Line ── */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${item.color}, ${item.color}60, transparent)`,
        }}
      />

      {/* ── Hover Glow Effect ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          boxShadow: `inset 0 0 30px ${item.color}08, 0 0 25px ${item.color}10`,
        }}
      />

      {/* ── Card Content ── */}
      <div className="relative p-5 sm:p-6">
        {/* ── Icon Badge ── */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${item.color}12`,
            border: `1px solid ${item.color}30`,
            boxShadow: `0 0 12px ${item.color}15`,
          }}
        >
          <Icon className="h-5.5 w-5.5" style={{ color: item.color }} />
        </div>

        {/* ── Title (AR primary, EN subtitle) ── */}
        <div className="mb-3">
          <h3
            className="font-bold text-sm sm:text-base text-foreground leading-tight mb-1"
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(item.title.ar, item.title.en)}
          </h3>
          <p
            className="text-[11px] sm:text-xs text-[#7a8ba8] font-mono"
            dir="ltr"
          >
            {lang(item.title.en, item.title.ar)}
          </p>
        </div>

        {/* ── Description ── */}
        <p
          className="text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed mb-5"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {lang(item.description.ar, item.description.en)}
        </p>

        {/* ── CTA Button ── */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer"
          style={{
            background: `${item.color}15`,
            color: item.color,
            border: `1px solid ${item.color}30`,
          }}
        >
          {lang(item.btnText.ar, item.btnText.en)}
          <ArrowLeft
            className="h-3.5 w-3.5"
            style={{
              transform: isRTL() ? "scaleX(-1)" : "scaleX(-1)",
            }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — StartHereSection
   ═══════════════════════════════════════════════════════════════ */

export default function StartHereSection() {
  const { t: lang, isRTL } = useLang();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full" dir={isRTL() ? "rtl" : "ltr"}>
      {/* ═══ Section Header ═══ */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00ff6612] border border-[#00ff6625]">
            <Rocket className="h-4.5 w-4.5 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("ابدأ من هنا", "Start Here")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-2xl">
          {lang(
            "اختر المستوى الذي يناسبك وابدأ رحلتك في عالم الإلكترونيات وإنترنت الأشياء",
            "Choose your level and begin your journey in electronics and IoT"
          )}
        </p>
      </motion.div>

      {/* ═══ Cards Grid (2x2 desktop, 1 col mobile) ═══ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {START_ITEMS.map((item, index) => (
          <StartCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
