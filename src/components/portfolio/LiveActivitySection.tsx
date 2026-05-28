"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Activity,
  Zap,
  FileUp,
  CheckCircle2,
  Code2,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — Live Activities (Hardcoded, simulate live feel)
   ═══════════════════════════════════════════════════════════════ */

interface ActivityItem {
  id: number;
  type: string;
  icon: LucideIcon;
  color: string;
  ar: string;
  en: string;
  time: { ar: string; en: string };
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    type: "project",
    icon: Zap,
    color: "#00ff66",
    ar: "\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 \u062c\u062f\u064a\u062f: \u0646\u0638\u0627\u0645 \u0645\u0631\u0627\u0642\u0628\u0629 \u0628\u064a\u0626\u064a\u0629",
    en: "New project added: Environmental Monitoring System",
    time: { ar: "\u0645\u0646\u0630 15 \u062f\u0642\u064a\u0642\u0629", en: "15 min ago" },
  },
  {
    id: 2,
    type: "file",
    icon: FileUp,
    color: "#00e5ff",
    ar: "\u062a\u0645 \u0631\u0641\u0639 \u0645\u0644\u0641: \u0634\u0631\u062d DFPlayer Mini",
    en: "File uploaded: DFPlayer Mini Guide",
    time: { ar: "\u0645\u0646\u0630 \u0633\u0627\u0639\u0629", en: "1 hour ago" },
  },
  {
    id: 3,
    type: "solution",
    icon: CheckCircle2,
    color: "#ffab00",
    ar: "\u062a\u0645 \u062d\u0644 \u0645\u0634\u0643\u0644\u0629: \u062e\u0637\u0623 \u0641\u064a \u0627\u062a\u0635\u0627\u0644 SPI",
    en: "Problem solved: SPI connection error",
    time: { ar: "\u0645\u0646\u0630 \u0633\u0627\u0639\u062a\u064a\u0646", en: "2 hours ago" },
  },
  {
    id: 4,
    type: "code",
    icon: Code2,
    color: "#b44dff",
    ar: "\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0643\u0648\u062f: \u0646\u0638\u0627\u0645 \u0627\u0644\u0623\u0645\u0627\u0646 v2.1",
    en: "Code updated: Security System v2.1",
    time: { ar: "\u0645\u0646\u0630 3 \u0633\u0627\u0639\u0627\u062a", en: "3 hours ago" },
  },
  {
    id: 5,
    type: "member",
    icon: UserPlus,
    color: "#ff6b9d",
    ar: "\u0639\u0636\u0648 \u062c\u062f\u064a\u062f \u0627\u0646\u0636\u0645 \u0644\u0644\u0645\u062c\u062a\u0645\u0639",
    en: "New member joined the community",
    time: { ar: "\u0645\u0646\u0630 5 \u0633\u0627\u0639\u0627\u062a", en: "5 hours ago" },
  },
  {
    id: 6,
    type: "project",
    icon: Zap,
    color: "#00ff66",
    ar: "\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0645\u0634\u0631\u0648\u0639: \u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0641 \u0627\u0644\u0630\u0643\u064a",
    en: "Project updated: Smart Parking System",
    time: { ar: "\u0645\u0646\u0630 8 \u0633\u0627\u0639\u0627\u062a", en: "8 hours ago" },
  },
];

/* ═══════════════════════════════════════════════════════════════
   LIVE BADGE
   ═══════════════════════════════════════════════════════════════ */

function LiveBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
      style={{
        background: "rgba(0, 255, 102, 0.1)",
        border: "1px solid rgba(0, 255, 102, 0.25)",
        color: "#00ff66",
      }}
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ backgroundColor: "#00ff66" }}
        />
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{ backgroundColor: "#00ff66" }}
        />
      </span>
      LIVE
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ACTIVITY CARD
   ═══════════════════════════════════════════════════════════════ */

interface ActivityCardProps {
  activity: ActivityItem;
  index: number;
  isLatest: boolean;
}

function ActivityCard({ activity, index, isLatest }: ActivityCardProps) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const Icon = activity.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRTL() ? 20 : -20 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: isRTL() ? 20 : -20 }
      }
      transition={{
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      }}
      className="relative flex gap-4 group"
    >
      {/* ── Timeline Line (left) ── */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className="relative">
          {isLatest && (
            <span
              className="absolute -inset-1.5 rounded-full animate-ping opacity-30"
              style={{ backgroundColor: activity.color }}
            />
          )}
          <div
            className="h-3.5 w-3.5 rounded-full border-2 shrink-0 transition-shadow duration-300 group-hover:shadow-lg"
            style={{
              borderColor: activity.color,
              background: isLatest ? activity.color : "transparent",
              boxShadow: isLatest ? `0 0 8px ${activity.color}60` : undefined,
            }}
          />
        </div>
        {/* Vertical Line */}
        {index < ACTIVITIES.length - 1 && (
          <div
            className="w-px flex-1 min-h-[32px] mt-1 opacity-30"
            style={{
              background: `linear-gradient(180deg, ${activity.color}, transparent)`,
            }}
          />
        )}
      </div>

      {/* ── Activity Content ── */}
      <div className="flex-1 pb-6">
        <div className="flex items-start gap-3 rounded-xl p-3 -mx-1 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.02)]">
          {/* Icon Badge */}
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${activity.color}12`,
              border: `1px solid ${activity.color}25`,
            }}
          >
            <Icon className="h-4 w-4" style={{ color: activity.color }} />
          </div>

          {/* Text + Time */}
          <div className="flex-1 min-w-0">
            <p
              className="text-xs sm:text-[13px] text-[#c5cdd8] leading-relaxed"
              dir={isRTL() ? "rtl" : "ltr"}
            >
              {lang(activity.ar, activity.en)}
            </p>
            <p className="text-[11px] text-[#5a6a82] mt-1 font-mono">
              {lang(activity.time.ar, activity.time.en)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — LiveActivitySection
   ═══════════════════════════════════════════════════════════════ */

export default function LiveActivitySection() {
  const { t: lang, isRTL } = useLang();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  // Simulate a subtle "new activity" highlight that pulses periodically on the first item
  const [highlightFirst, setHighlightFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightFirst((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            <Activity className="h-4.5 w-4.5 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("\u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u062d\u064a", "Live Activity")}
          </h2>
          <LiveBadge />
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-2xl">
          {lang(
            "\u062a\u0627\u0628\u0639 \u0622\u062e\u0631 \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u062d\u0642\u064a\u0642\u064a",
            "Follow the latest activities and updates in real-time"
          )}
        </p>
      </motion.div>

      {/* ═══ Activity Timeline ═══ */}
      <div className="rounded-xl glass-card-dark p-4 sm:p-6 overflow-hidden">
        <AnimatePresence>
          {ACTIVITIES.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={index}
              isLatest={index === 0 && highlightFirst}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
