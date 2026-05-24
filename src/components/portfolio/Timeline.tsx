"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Building2,
  Car,
  ShieldCheck,
  PartyPopper,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — 6 Timeline Milestones (Bilingual)
   ═══════════════════════════════════════════════════════════════ */

interface TimelineItem {
  year: string;
  icon: LucideIcon;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  color: string;
  glowColor: string;
}

const TIMELINE: TimelineItem[] = [
  {
    year: "2022",
    icon: Zap,
    title: { ar: "البدايات", en: "First Steps" },
    description: {
      ar: "بدء رحلة تعلم الأردوينو والأنظمة المدمجة — أول مشروع LED يومض",
      en: "Started learning Arduino and embedded systems — first LED blink project",
    },
    color: "#00ff66",
    glowColor: "#00ff6640",
  },
  {
    year: "2023",
    icon: Building2,
    title: { ar: "نظام المباني الذكية", en: "Smart Building System" },
    description: {
      ar: "تطوير نظام إدارة المباني الذكي — Arduino Mega + ESP8266 + Firebase + تطبيق أندرويد",
      en: "Developed Smart Building Management System — Arduino Mega + ESP8266 + Firebase + Android",
    },
    color: "#00e5ff",
    glowColor: "#00e5ff40",
  },
  {
    year: "2023",
    icon: Car,
    title: { ar: "نظام المواقف الذكي", en: "Smart Parking System" },
    description: {
      ar: "بناء نظام مواقف السيارات مع منظومة سلامة متعددة الحساسات — معمارية 3 مستويات",
      en: "Built Smart Parking System with multi-sensor safety — 3-tier architecture",
    },
    color: "#00e5ff",
    glowColor: "#00e5ff40",
  },
  {
    year: "2024",
    icon: ShieldCheck,
    title: { ar: "الخزنة الذكية", en: "RFID Smart Safe" },
    description: {
      ar: "تطوير الخزنة الذكية مع خوارزمية مكافحة التجمد المبتكرة — Edge Computing",
      en: "Developed RFID Smart Safe with innovative Anti-Freeze Algorithm — Edge Computing",
    },
    color: "#ffab00",
    glowColor: "#ffab0040",
  },
  {
    year: "2024",
    icon: PartyPopper,
    title: { ar: "أتمتة صالات الأفراح", en: "Wedding Hall Automation" },
    description: {
      ar: "نظام أتمتة صالات الأفراح — آلة حالات مع مزامنة صوتية وضوئية",
      en: "Wedding Hall Automation System — State Machine with audio/light synchronization",
    },
    color: "#b44dff",
    glowColor: "#b44dff40",
  },
  {
    year: "2024+",
    icon: Rocket,
    title: { ar: "المحفظة الاحترافية", en: "Professional Portfolio" },
    description: {
      ar: "إطلاق المحفظة الهندسية الشاملة لعرض المشاريع والخبرات",
      en: "Launching comprehensive engineering portfolio to showcase projects and expertise",
    },
    color: "#00ff66",
    glowColor: "#00ff6640",
  },
];

/* ═══════════════════════════════════════════════════════════════
   TIMELINE ITEM CARD
   ═══════════════════════════════════════════════════════════════ */

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const isLeft = !isRTL() ? index % 2 === 0 : true;
  const isRight = !isRTL() ? index % 2 !== 0 : false;

  // On mobile, always on one side
  const slideFromX = isRTL()
    ? { hidden: { opacity: 0, x: -40, scale: 0.95 } }
    : isLeft
      ? { hidden: { opacity: 0, x: -40, scale: 0.95 } }
      : { hidden: { opacity: 0, x: 40, scale: 0.95 } };

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={slideFromX.hidden}
      animate={
        isInView
          ? { opacity: 1, x: 0, scale: 1 }
          : slideFromX.hidden
      }
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.05,
      }}
      className="relative flex items-start gap-4 sm:gap-6 md:gap-0"
    >
      {/* ── Desktop: Left Side (hidden on mobile) ── */}
      <div className="hidden md:block md:w-[calc(50%-28px)]">
        {!isRTL() && isLeft && (
          <div className="glass-card-dark rounded-xl p-5 card-hover group">
            <TimelineCardContent item={item} />
          </div>
        )}
        {isRTL() && (
          <div className="glass-card-dark rounded-xl p-5 card-hover group">
            <TimelineCardContent item={item} />
          </div>
        )}
      </div>

      {/* ── Timeline Node (Center) ── */}
      <div className="relative flex flex-col items-center shrink-0 z-10">
        {/* ── Glowing Dot ── */}
        <motion.div
          animate={
            isInView
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    `0 0 4px ${item.glowColor}`,
                    `0 0 16px ${item.glowColor}`,
                    `0 0 4px ${item.glowColor}`,
                  ],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-[18px] h-[18px] rounded-full border-[3px] flex items-center justify-center"
          style={{
            borderColor: item.color,
            background: "#0a0f1a",
            boxShadow: `0 0 12px ${item.glowColor}`,
          }}
        >
          <div
            className="w-[6px] h-[6px] rounded-full"
            style={{
              background: item.color,
              boxShadow: `0 0 6px ${item.color}`,
            }}
          />
        </motion.div>
      </div>

      {/* ── Desktop: Right Side / Mobile: Always ── */}
      <div className="flex-1 md:w-[calc(50%-28px)]">
        {/* Mobile always shows card */}
        <div className="md:hidden">
          <div className="glass-card-dark rounded-xl p-5 card-hover group">
            <TimelineCardContent item={item} />
          </div>
        </div>
        {/* Desktop right side */}
        {!isRTL() && isRight && (
          <div className="glass-card-dark rounded-xl p-5 card-hover group">
            <TimelineCardContent item={item} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CARD CONTENT (extracted for reuse)
   ═══════════════════════════════════════════════════════════════ */

function TimelineCardContent({ item }: { item: TimelineItem }) {
  const { t: lang, isRTL } = useLang();
  const Icon = item.icon;

  return (
    <>
      {/* ── Year Badge ── */}
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110"
          style={{
            background: `${item.color}12`,
            border: `1px solid ${item.color}25`,
            boxShadow: `0 0 10px ${item.glowColor}`,
          }}
        >
          <Icon className="h-4.5 w-4.5" style={{ color: item.color }} />
        </div>
        <div>
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold font-mono tracking-wider"
            style={{
              color: item.color,
              background: `${item.color}10`,
              border: `1px solid ${item.color}25`,
            }}
          >
            {item.year}
          </span>
        </div>
      </div>

      {/* ── Title ── */}
      <h3
        className="font-bold text-sm sm:text-base text-foreground mb-2 leading-tight"
        style={{ color: item.color }}
        dir={isRTL() ? "rtl" : "ltr"}
      >
        {lang(item.title.ar, item.title.en)}
      </h3>

      {/* ── Description ── */}
      <p
        className="text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed"
        dir={isRTL() ? "rtl" : "ltr"}
      >
        {lang(item.description.ar, item.description.en)}
      </p>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — Timeline
   ═══════════════════════════════════════════════════════════════ */

export default function Timeline() {
  const { t: lang, isRTL } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section className="w-full" dir={isRTL() ? "rtl" : "ltr"}>
      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00ff6612] border border-[#00ff6625]">
            <Zap className="h-4 w-4 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("رحلتي الهندسية", "My Engineering Journey")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed">
          {lang(
            "من أول LED يومض إلى منظومات إنترنت الأشياء المتكاملة — رحلة التعلم والابتكار",
            "From the first LED blink to full IoT systems — a journey of learning and innovation"
          )}
        </p>
      </motion.div>

      {/* ── Timeline Container ── */}
      <div ref={containerRef} className="relative">
        {/* ── Center Line (Desktop) ── */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full origin-top"
            style={{
              background: `linear-gradient(to bottom, #00ff66, #00e5ff60, #00ff6660, #b44dff40, #00ff6620)`,
              boxShadow: `0 0 8px #00ff6630, 0 0 20px #00ff6610`,
            }}
          />
        </div>

        {/* ── Side Line (Mobile) ── */}
        <div className="md:hidden absolute right-6 top-0 bottom-0 w-[2px]">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full origin-top"
            style={{
              background: `linear-gradient(to bottom, #00ff66, #00e5ff60, #00ff6660, #b44dff40, #00ff6620)`,
              boxShadow: `0 0 8px #00ff6630, 0 0 20px #00ff6610`,
            }}
          />
        </div>

        {/* ── Mobile Timeline Offset ── */}
        <div className="md:hidden flex flex-col gap-8 pl-12">
          {/* Mobile side dot wrapper */}
          {TIMELINE.map((item, index) => (
            <div key={`${item.year}-${index}`} className="relative">
              {/* Side dot */}
              <div
                className="absolute -right-[45px] top-[22px] w-[14px] h-[14px] rounded-full border-[3px] z-10"
                style={{
                  borderColor: item.color,
                  background: "#0a0f1a",
                  boxShadow: `0 0 10px ${item.glowColor}`,
                }}
              >
                <div
                  className="w-[5px] h-[5px] rounded-full mx-auto mt-[2px]"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 4px ${item.color}`,
                  }}
                />
              </div>
              {/* Card content for mobile */}
              <TimelineCardMobile item={item} index={index} />
            </div>
          ))}
        </div>

        {/* ── Desktop Timeline Items ── */}
        <div className="hidden md:flex flex-col gap-10">
          {TIMELINE.map((item, index) => (
            <TimelineCard key={`${item.year}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* ── End Marker ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex justify-center mt-10"
      >
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark"
          style={{
            borderColor: "#00ff6620",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse-neon" />
          <span className="text-xs font-medium text-[#00ff66]">
            {lang("المستقبل يبدأ الآن...", "The future starts now...")}
          </span>
          <Rocket className="h-3.5 w-3.5 text-[#00ff66]" />
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE TIMELINE CARD
   ═══════════════════════════════════════════════════════════════ */

function TimelineCardMobile({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRTL() ? -30 : 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, scale: 1 }
          : { opacity: 0, x: isRTL() ? -30 : 30, scale: 0.95 }
      }
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.08,
      }}
      className="glass-card-dark rounded-xl p-4 card-hover"
    >
      {/* ── Year Badge + Icon ── */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{
            background: `${item.color}12`,
            border: `1px solid ${item.color}25`,
            boxShadow: `0 0 8px ${item.glowColor}`,
          }}
        >
          <Icon className="h-4 w-4" style={{ color: item.color }} />
        </div>
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-wider"
          style={{
            color: item.color,
            background: `${item.color}10`,
            border: `1px solid ${item.color}25`,
          }}
        >
          {item.year}
        </span>
      </div>

      {/* ── Title ── */}
      <h3
        className="font-bold text-xs sm:text-sm mb-1.5 leading-tight"
        style={{ color: item.color }}
        dir={isRTL() ? "rtl" : "ltr"}
      >
        {lang(item.title.ar, item.title.en)}
      </h3>

      {/* ── Description ── */}
      <p
        className="text-[11px] sm:text-xs text-[#7a8ba8] leading-relaxed"
        dir={isRTL() ? "rtl" : "ltr"}
      >
        {lang(item.description.ar, item.description.en)}
      </p>
    </motion.div>
  );
}
