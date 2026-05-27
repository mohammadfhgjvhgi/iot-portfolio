"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  FileText,
  Cpu,
  BookOpen,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — Latest Additions (4 Subsections)
   ═══════════════════════════════════════════════════════════════ */

interface AdditionItem {
  title: { ar: string; en: string };
  time: { ar: string; en: string };
}

interface SubSection {
  icon: LucideIcon;
  color: string;
  title: { ar: string; en: string };
  items: AdditionItem[];
}

const SUBSECTIONS: SubSection[] = [
  {
    icon: FileText,
    color: "#00ff66",
    title: {
      ar: "\u0622\u062e\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062a",
      en: "Latest Files",
    },
    items: [
      {
        title: {
          ar: "\u0634\u0631\u062d DHT11 \u0643\u0627\u0645\u0644",
          en: "DHT11 Complete Guide",
        },
        time: { ar: "\u0645\u0646\u0630 \u0633\u0627\u0639\u062a\u064a\u0646", en: "2 hours ago" },
      },
      {
        title: {
          ar: "\u0645\u0644\u0641 \u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u062a\u0648\u062c\u064a\u0647\u064a",
          en: "Tawjihi Project File",
        },
        time: {
          ar: "\u0645\u0646\u0630 5 \u0633\u0627\u0639\u0627\u062a",
          en: "5 hours ago",
        },
      },
    ],
  },
  {
    icon: Cpu,
    color: "#00e5ff",
    title: {
      ar: "\u0622\u062e\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",
      en: "Latest Projects",
    },
    items: [
      {
        title: {
          ar: "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0641 \u0627\u0644\u0630\u0643\u064a",
          en: "Smart Parking System",
        },
        time: { ar: "\u0645\u0646\u0630 \u064a\u0648\u0645", en: "1 day ago" },
      },
      {
        title: {
          ar: "\u0646\u0638\u0627\u0645 \u0623\u062a\u0645\u062a\u0629 \u0627\u0644\u0635\u0627\u0644\u0627\u062a",
          en: "Hall Automation System",
        },
        time: { ar: "\u0645\u0646\u0630 3 \u0623\u064a\u0627\u0645", en: "3 days ago" },
      },
    ],
  },
  {
    icon: BookOpen,
    color: "#ffab00",
    title: {
      ar: "\u0622\u062e\u0631 \u0627\u0644\u0634\u0631\u0648\u062d\u0627\u062a",
      en: "Latest Tutorials",
    },
    items: [
      {
        title: {
          ar: "\u0643\u064a\u0641\u064a\u0629 \u0631\u0628\u0637 ESP32 \u0645\u0639 Firebase",
          en: "How to Connect ESP32 with Firebase",
        },
        time: { ar: "\u0645\u0646\u0630 \u064a\u0648\u0645", en: "1 day ago" },
      },
      {
        title: {
          ar: "\u0634\u0631\u062d \u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644 MQTT",
          en: "MQTT Protocol Guide",
        },
        time: { ar: "\u0645\u0646\u0630 4 \u0623\u064a\u0627\u0645", en: "4 days ago" },
      },
    ],
  },
  {
    icon: RefreshCw,
    color: "#b44dff",
    title: {
      ar: "\u0622\u062e\u0631 \u0627\u0644\u062a\u062d\u062f\u064a\u062b\u0627\u062a",
      en: "Latest Updates",
    },
    items: [
      {
        title: {
          ar: "\u062a\u062d\u062f\u064a\u062b \u0643\u0648\u062f \u0627\u0644\u0645\u0646\u0632\u0644 \u0627\u0644\u0630\u0643\u064a",
          en: "Smart Home Code Update",
        },
        time: {
          ar: "\u0645\u0646\u0630 6 \u0633\u0627\u0639\u0627\u062a",
          en: "6 hours ago",
        },
      },
      {
        title: {
          ar: "\u0625\u0636\u0627\u0641\u0629 \u062d\u0633\u0627\u0633\u0627\u062a \u062c\u062f\u064a\u062f\u0629",
          en: "New Sensors Added",
        },
        time: { ar: "\u0645\u0646\u0630 \u064a\u0648\u0645\u064a\u0646", en: "2 days ago" },
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SUBSECTION CARD
   ═══════════════════════════════════════════════════════════════ */

interface SubSectionCardProps {
  section: SubSection;
  index: number;
}

function SubSectionCard({ section, index }: SubSectionCardProps) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const Icon = section.icon;

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
        delay: index * 0.12,
      }}
      className="relative group rounded-xl overflow-hidden glass-card-dark card-hover"
    >
      {/* ── Colored Top Glow Line ── */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${section.color}, ${section.color}60, transparent)`,
        }}
      />

      {/* ── Hover Glow Effect ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          boxShadow: `inset 0 0 30px ${section.color}08, 0 0 25px ${section.color}10`,
        }}
      />

      {/* ── Card Content ── */}
      <div className="relative p-5">
        {/* ── Header: Icon + Title ── */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${section.color}12`,
              border: `1px solid ${section.color}30`,
              boxShadow: `0 0 12px ${section.color}15`,
            }}
          >
            <Icon className="h-5 w-5" style={{ color: section.color }} />
          </div>
          <h3
            className="font-bold text-sm sm:text-base text-foreground"
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(section.title.ar, section.title.en)}
          </h3>
        </div>

        {/* ── Items List ── */}
        <ul className="space-y-3">
          {section.items.map((item, itemIndex) => (
            <li key={itemIndex} className="group/item cursor-pointer">
              <div className="flex items-start gap-3 rounded-lg p-2.5 -mx-2.5 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.03)]">
                {/* Dot Indicator */}
                <span
                  className="mt-1.5 h-2 w-2 rounded-full shrink-0 transition-shadow duration-300 group-hover/item:shadow-lg"
                  style={{
                    background: section.color,
                    boxShadow: `0 0 6px ${section.color}60`,
                  }}
                />
                {/* Item Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs sm:text-[13px] text-[#c5cdd8] leading-snug truncate"
                    dir={isRTL() ? "rtl" : "ltr"}
                  >
                    {lang(item.title.ar, item.title.en)}
                  </p>
                  <p className="text-[11px] text-[#5a6a82] mt-0.5 font-mono">
                    {lang(item.time.ar, item.time.en)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — LatestAdditionsSection
   ═══════════════════════════════════════════════════════════════ */

export default function LatestAdditionsSection() {
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
            {lang("\u0622\u062e\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a", "Latest Additions")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-2xl">
          {lang(
            "\u062a\u0627\u0628\u0639 \u0623\u062d\u062f\u062b \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0634\u0631\u0648\u062d\u0627\u062a",
            "Follow the latest files, projects, and tutorials"
          )}
        </p>
      </motion.div>

      {/* ═══ 2x2 Grid ═══ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {SUBSECTIONS.map((section, index) => (
          <SubSectionCard key={index} section={section} index={index} />
        ))}
      </div>
    </section>
  );
}
