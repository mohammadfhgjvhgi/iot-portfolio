"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  HelpCircle,
  Award,
  Star,
  TrendingUp,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — 5 Dynamic Cards
   ═══════════════════════════════════════════════════════════════ */

interface DynamicCardData {
  icon: LucideIcon;
  color: string;
  title: { ar: string; en: string };
  content: { ar: string; en: string };
  subtitle?: { ar: string; en: string };
  badge?: { ar: string; en: string };
  progress?: number; // 0-100 for stat bars
  wide?: boolean; // spans full width on md+
}

const DYNAMIC_CARDS: DynamicCardData[] = [
  {
    icon: HelpCircle,
    color: "#00ff66",
    title: { ar: "\u0633\u0624\u0627\u0644 \u0627\u0644\u064a\u0648\u0645", en: "Question of the Day" },
    content: {
      ar: "\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 Arduino Mega \u0648 ESP32\u061f",
      en: "What's the difference between Arduino Mega and ESP32?",
    },
    subtitle: {
      ar: "\u0627\u0646\u0636\u0645 \u0644\u0644\u0645\u062c\u062a\u0645\u0639 \u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0625\u062c\u0627\u0628\u0629",
      en: "Join the community to find out",
    },
    wide: true,
  },
  {
    icon: Award,
    color: "#00e5ff",
    title: { ar: "\u0645\u0644\u0641 \u0627\u0644\u0623\u0633\u0628\u0648\u0639", en: "File of the Week" },
    content: {
      ar: "\u062f\u0648\u0631\u0629 ESP32 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629 \u2014 12 \u062f\u0631\u0633",
      en: "Advanced ESP32 Course \u2014 12 Lessons",
    },
    subtitle: { ar: "1,200 \u062a\u062d\u0645\u064a\u0644", en: "1,200 downloads" },
    wide: true,
  },
  {
    icon: Star,
    color: "#ffab00",
    title: { ar: "\u0645\u0634\u0631\u0648\u0639 \u0645\u0645\u064a\u0632", en: "Featured Project" },
    content: {
      ar: "\u0646\u0638\u0627\u0645 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0628\u0627\u0646\u064a \u0627\u0644\u0630\u0643\u064a\u0629",
      en: "Smart Building Management System",
    },
    badge: { ar: "\u0627\u0644\u0623\u0643\u062b\u0631 \u062a\u0641\u0627\u0639\u0644\u0627\u064b", en: "Most Popular" },
  },
  {
    icon: TrendingUp,
    color: "#b44dff",
    title: { ar: "\u0625\u062d\u0635\u0627\u0626\u064a\u0629 \u0627\u0644\u064a\u0648\u0645", en: "Today's Stat" },
    content: {
      ar: "350+ \u0645\u0633\u062a\u062e\u062f\u0645 \u0646\u0634\u0637 \u0627\u0644\u064a\u0648\u0645",
      en: "350+ active users today",
    },
    progress: 72,
  },
  {
    icon: MessageCircle,
    color: "#ff6b9d",
    title: { ar: "\u0622\u062e\u0631 \u0646\u0634\u0627\u0637 \u0627\u0644\u0645\u062c\u062a\u0645\u0639", en: "Latest Community Activity" },
    content: {
      ar: "\u062a\u0645 \u0627\u0644\u0625\u062c\u0627\u0628\u0629 \u0639\u0644\u0649 25 \u0633\u0624\u0627\u0644 \u0627\u0644\u064a\u0648\u0645",
      en: "25 questions answered today",
    },
    subtitle: { ar: "+150 \u0631\u0633\u0627\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a", en: "+150 messages in groups" },
  },
];

/* ═══════════════════════════════════════════════════════════════
   DYNAMIC CARD
   ═══════════════════════════════════════════════════════════════ */

interface DynamicCardProps {
  card: DynamicCardData;
  index: number;
}

function DynamicCard({ card, index }: DynamicCardProps) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const Icon = card.icon;

  // Stagger animation delay, plus a subtle float
  const floatDelay = index * 0.8;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 24, scale: 0.97 }
      }
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      }}
      className={`relative group rounded-xl overflow-hidden glass-card-dark card-hover ${
        card.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* ── Colored Top Border ── */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${card.color}, ${card.color}60, transparent)`,
        }}
      />

      {/* ── Hover Glow ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          boxShadow: `inset 0 0 30px ${card.color}08, 0 0 25px ${card.color}10`,
        }}
      />

      {/* ── Floating animation wrapper ── */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="relative p-5"
      >
        {/* ── Icon + Title Row ── */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${card.color}12`,
              border: `1px solid ${card.color}30`,
              boxShadow: `0 0 12px ${card.color}15`,
            }}
          >
            <Icon className="h-5 w-5" style={{ color: card.color }} />
          </div>
          <h3
            className="font-bold text-sm sm:text-base text-foreground"
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(card.title.ar, card.title.en)}
          </h3>
          {/* Badge (optional) */}
          {card.badge && (
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold"
              style={{
                background: `${card.color}18`,
                border: `1px solid ${card.color}30`,
                color: card.color,
              }}
            >
              {lang(card.badge.ar, card.badge.en)}
            </span>
          )}
        </div>

        {/* ── Main Content ── */}
        <p
          className="text-sm sm:text-[15px] text-[#c5cdd8] leading-relaxed mb-2 font-medium"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {lang(card.content.ar, card.content.en)}
        </p>

        {/* ── Subtitle ── */}
        {card.subtitle && (
          <p
            className="text-xs text-[#5a6a82]"
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(card.subtitle.ar, card.subtitle.en)}
          </p>
        )}

        {/* ── Progress Bar (for stat cards) ── */}
        {card.progress !== undefined && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] text-[#5a6a82] font-mono">
                {card.progress}%
              </span>
              <span className="text-[11px] text-[#5a6a82]">
                {lang("\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0646\u0634\u0627\u0637", "Activity Level")}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#1a2340] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${card.progress}%` } : { width: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 + 0.3 }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${card.color}, ${card.color}80)`,
                  boxShadow: `0 0 8px ${card.color}40`,
                }}
              />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — DynamicElementsSection
   ═══════════════════════════════════════════════════════════════ */

export default function DynamicElementsSection() {
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
            <Sparkles className="h-4.5 w-4.5 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("\u0639\u0646\u0627\u0635\u0631 \u062a\u0641\u0627\u0639\u0644\u064a\u0629", "Dynamic Elements")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-2xl">
          {lang(
            "\u0645\u062d\u062a\u0648\u0649 \u064a\u062a\u062c\u062f\u062f \u0628\u0627\u0633\u062a\u0645\u0631\u0627\u0631 \u2014 \u0627\u0628\u0642\u064e \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639",
            "Continuously refreshing content \u2014 stay updated"
          )}
        </p>
      </motion.div>

      {/* ═══ Dynamic Cards Grid ═══ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {DYNAMIC_CARDS.map((card, index) => (
          <DynamicCard key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
