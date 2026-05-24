"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Cpu,
  Wifi,
  Code2,
  Cog,
  Globe,
  Rocket,
  Microchip,
  CircuitBoard,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — 2 Founders (Bilingual)
   ═══════════════════════════════════════════════════════════════ */

interface Founder {
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  bio: { ar: string; en: string };
  skills: string[];
  color: string;
  glowColor: string;
  avatarIcon: React.ReactNode;
}

const FOUNDERS: Founder[] = [
  {
    name: { ar: "عمار مشارقة", en: "Ammar Masharqa" },
    role: {
      ar: "مؤسس ومدير العمليات",
      en: "Co-Founder & Operations Manager",
    },
    bio: {
      ar: "الشريك المؤسس لفريق مشاريع للأنظمة الذكية. يدير الشؤون الإدارية والتواصل مع العملاء وتنسيق المشاريع. يمتلك فهمًا عامًا في مجال إنترنت الأشياء ويساهم في دعم الفريق والتنظيم اللوجستي لضمان سير العمل بسلاسة.",
      en: "Co-founder of Smart Systems Lab. Manages administration, client communications, and project coordination. Has a general understanding of IoT and contributes to team support and logistical organization to ensure smooth operations.",
    },
    skills: ["Project Management", "Client Relations", "Team Coordination", "IoT Overview", "Content Creation"],
    color: "#00ff66",
    glowColor: "#00ff6640",
    avatarIcon: <Users className="h-8 w-8" />,
  },
  {
    name: { ar: "محمد عقيلي", en: "Mohammad Aqli" },
    role: {
      ar: "المؤسس والمهندس الرئيسي",
      en: "Founder & Lead Engineer",
    },
    bio: {
      ar: "المهندس الرئيسي لفريق مشاريع للأنظمة الذكية. متخصص في تصميم الأنظمة المدمجة، تركيب القطع الإلكترونية، معرفة أنواع المتحكمات والحساسات، والبرمجة بأنواعها — من الخفيفة إلى المعقدة. يبني المنطق البرمجي على المتحكمات بمنهجية هندسية تضمن الأمان والاستقرار. خبرة واسعة في معمارية الأنظمة متعددة المعالجات والاتصال التسلسلي والتكامل مع السحابة.",
      en: "Lead engineer at Smart Systems Lab. Specializing in embedded systems design, hardware assembly, component knowledge (MCUs, sensors), and programming — from light to complex. Builds software logic for microcontrollers with engineering methodology ensuring safety and stability. Extensive experience in multi-processor architectures, serial communication, and cloud integration.",
    },
    skills: ["Arduino", "ESP32/8266", "C/C++", "Hardware Design", "Firebase", "Python", "Assembly"],
    color: "#00e5ff",
    glowColor: "#00e5ff40",
    avatarIcon: <CircuitBoard className="h-8 w-8" />,
  },
];

/* ═══════════════════════════════════════════════════════════════
   STATS DATA
   ═══════════════════════════════════════════════════════════════ */

interface TeamStat {
  value: { ar: string; en: string };
  label: { ar: string; en: string };
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

const STATS: TeamStat[] = [
  {
    value: { ar: "+٤", en: "4+" },
    label: { ar: "مشاريع", en: "Projects" },
    icon: <Cog className="h-4 w-4" />,
    color: "#00ff66",
    glowColor: "#00ff6640",
  },
  {
    value: { ar: "+١٠", en: "10+" },
    label: { ar: "حساسات", en: "Sensors" },
    icon: <Wifi className="h-4 w-4" />,
    color: "#00e5ff",
    glowColor: "#00e5ff40",
  },
  {
    value: { ar: "+٣", en: "3+" },
    label: { ar: "متحكمات", en: "MCUs" },
    icon: <Cpu className="h-4 w-4" />,
    color: "#ffab00",
    glowColor: "#ffab0040",
  },
  {
    value: { ar: "+٥", en: "5+" },
    label: { ar: "بروتوكولات", en: "Protocols" },
    icon: <Globe className="h-4 w-4" />,
    color: "#b44dff",
    glowColor: "#b44dff40",
  },
];

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
} as const;

const pillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.06,
      ease: "easeOut" as const,
    },
  }),
} as const;

const statVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: "easeOut" as const,
    },
  }),
} as const;

/* ═══════════════════════════════════════════════════════════════
   AVATAR PLACEHOLDER — SVG with gradient + circuit icon
   ═══════════════════════════════════════════════════════════════ */

function FounderAvatar({
  founder,
}: {
  founder: Founder;
}) {
  return (
    <div className="relative mx-auto mb-5">
      {/* ── Outer Glow Ring ── */}
      <motion.div
        animate={{
          boxShadow: [
            `0 0 20px ${founder.glowColor}, 0 0 40px ${founder.glowColor}`,
            `0 0 30px ${founder.glowColor}, 0 0 60px ${founder.glowColor}`,
            `0 0 20px ${founder.glowColor}, 0 0 40px ${founder.glowColor}`,
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${founder.color}18, transparent 70%)`,
        }}
      >
        {/* ── Avatar Circle ── */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 112 112"
          className="rounded-full"
          style={{ overflow: "hidden" }}
        >
          <defs>
            <linearGradient
              id={`avatar-grad-${founder.color.replace("#", "")}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={founder.color} stopOpacity="0.25" />
              <stop offset="50%" stopColor={founder.color} stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0a0f1a" stopOpacity="1" />
            </linearGradient>
            {/* Circuit trace pattern */}
            <pattern
              id={`circuit-${founder.color.replace("#", "")}`}
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 14 L 14 14 L 14 0"
                fill="none"
                stroke={founder.color}
                strokeWidth="0.5"
                opacity="0.12"
              />
              <path
                d="M 14 14 L 28 14"
                fill="none"
                stroke={founder.color}
                strokeWidth="0.5"
                opacity="0.12"
              />
              <path
                d="M 14 14 L 14 28"
                fill="none"
                stroke={founder.color}
                strokeWidth="0.5"
                opacity="0.12"
              />
              <circle cx="14" cy="14" r="1.5" fill={founder.color} opacity="0.15" />
            </pattern>
          </defs>
          {/* Background circle */}
          <circle cx="56" cy="56" r="56" fill="#0a0f1a" />
          {/* Gradient overlay */}
          <circle
            cx="56"
            cy="56"
            r="55"
            fill={`url(#avatar-grad-${founder.color.replace("#", "")})`}
          />
          {/* Circuit pattern overlay */}
          <circle
            cx="56"
            cy="56"
            r="55"
            fill={`url(#circuit-${founder.color.replace("#", "")})`}
          />
          {/* Border ring */}
          <circle
            cx="56"
            cy="56"
            r="55"
            fill="none"
            stroke={founder.color}
            strokeWidth="1.5"
            opacity="0.3"
            strokeDasharray="4 4"
          />
        </svg>

        {/* ── Icon Overlay ── */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ color: founder.color }}
        >
          {founder.avatarIcon}
        </div>
      </motion.div>

      {/* ── Palestine Badge ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 200 }}
        className="absolute -bottom-1 left-1/2 -translate-x-1/2"
      >
        <span
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap"
          style={{
            background: `${founder.color}15`,
            border: `1px solid ${founder.color}30`,
            color: founder.color,
            boxShadow: `0 0 10px ${founder.glowColor}`,
          }}
        >
          🇵🇸 Palestine
        </span>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOUNDER CARD
   ═══════════════════════════════════════════════════════════════ */

function FounderCard({
  founder,
  index,
}: {
  founder: Founder;
  index: number;
}) {
  const { t: lang, isRTL } = useLang();

  return (
    <motion.div
      variants={cardVariants}
      className="glass-card-dark rounded-xl overflow-hidden card-hover group relative"
      style={{
        borderColor: `${founder.color}12`,
      }}
    >
      {/* ── Glowing Top Border ── */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${founder.color}, ${founder.color}80, transparent)`,
          boxShadow: `0 0 12px ${founder.glowColor}`,
        }}
      />

      {/* ── Subtle Corner Glow (top-right) ── */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${founder.glowColor}, transparent 70%)`,
        }}
      />

      <div className="p-6 sm:p-8 relative">
        {/* ── Avatar ── */}
        <FounderAvatar founder={founder} />

        {/* ── Name (primary + secondary language) ── */}
        <div className="text-center mb-3">
          <h3
            className="text-lg sm:text-xl font-bold leading-tight"
            style={{ color: founder.color }}
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(founder.name.ar, founder.name.en)}
          </h3>
          <p
            className="text-xs text-[#7a8ba8] mt-0.5 font-mono"
            dir="ltr"
          >
            {lang(founder.name.en, founder.name.ar)}
          </p>
        </div>

        {/* ── Role Badge ── */}
        <div className="flex justify-center mb-4">
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold"
            style={{
              background: `${founder.color}10`,
              color: `${founder.color}dd`,
              border: `1px solid ${founder.color}25`,
            }}
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(founder.role.ar, founder.role.en)}
          </span>
        </div>

        {/* ── Bio ── */}
        <p
          className="text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed mb-5 text-center"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {lang(founder.bio.ar, founder.bio.en)}
        </p>

        {/* ── Divider ── */}
        <div
          className="w-16 h-px mx-auto mb-5"
          style={{
            background: `linear-gradient(90deg, transparent, ${founder.color}40, transparent)`,
          }}
        />

        {/* ── Skills ── */}
        <div>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <Code2 className="h-3 w-3 text-[#7a8ba8]" />
            <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold">
              {lang("المهارات", "Skills")}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            {founder.skills.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i}
                variants={pillVariants}
                className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all duration-300 cursor-default"
                style={{
                  background: `${founder.color}08`,
                  color: `${founder.color}cc`,
                  border: `1px solid ${founder.color}20`,
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: `0 0 14px ${founder.glowColor}, 0 0 4px ${founder.glowColor}`,
                  borderColor: `${founder.color}50`,
                  background: `${founder.color}18`,
                  color: founder.color,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TEAM STATS BAR
   ═══════════════════════════════════════════════════════════════ */

function TeamStatsBar() {
  const { t: lang } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
      className="mt-8 sm:mt-10 glass-card-dark rounded-xl p-4 sm:p-5"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label.en}
            custom={i}
            variants={statVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-2 py-2"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{
                background: `${stat.color}12`,
                border: `1px solid ${stat.color}25`,
                boxShadow: `0 0 10px ${stat.glowColor}`,
                color: stat.color,
              }}
            >
              {stat.icon}
            </div>
            <span
              className="text-xl sm:text-2xl font-bold font-mono"
              style={{ color: stat.color }}
            >
              {lang(stat.value.ar, stat.value.en)}
            </span>
            <span className="text-[10px] sm:text-xs text-[#7a8ba8] font-medium uppercase tracking-wider">
              {lang(stat.label.ar, stat.label.en)}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MISSION STATEMENT
   ═══════════════════════════════════════════════════════════════ */

function MissionStatement() {
  const { t: lang, isRTL } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 sm:mt-8 relative"
    >
      <div
        className="rounded-xl p-5 sm:p-6 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(0,255,102,0.05), rgba(0,229,255,0.03), rgba(15,22,40,0.8))`,
          border: `1px solid rgba(0,255,102,0.1)`,
        }}
      >
        {/* ── Decorative corner glow ── */}
        <div
          className="absolute -top-10 -left-10 w-40 h-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,255,102,0.08), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-10 -right-10 w-40 h-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,229,255,0.06), transparent 70%)",
          }}
        />

        <div className="relative flex items-start gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5"
            style={{
              background: "rgba(0,255,102,0.1)",
              border: "1px solid rgba(0,255,102,0.2)",
            }}
          >
            <Rocket className="h-4.5 w-4.5 text-[#00ff66]" />
          </div>
          <div>
            <h4
              className="text-sm sm:text-base font-bold mb-2 gradient-neon-text"
              dir={isRTL() ? "rtl" : "ltr"}
            >
              {lang(
                "رسالتنا",
                "Our Mission"
              )}
            </h4>
            <p
              className="text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed"
              dir={isRTL() ? "rtl" : "ltr"}
            >
              {lang(
                "نؤمن بأن فلسطين قادرة على إنتاج تقنيات عالمية في مجال إنترنت الأشياء. نسعى لبناء حلول مدمجة ذكية تدمج بين العتاد والبرمجيات والسحابة — من فلسطين إلى العالم.",
                "We believe Palestine is capable of producing world-class IoT technologies. We strive to build intelligent embedded solutions that bridge hardware, software, and the cloud — from Palestine to the world."
              )}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="led-on" />
              <span className="text-[11px] text-[#00ff66] font-medium">
                {lang(
                  "صُنع في فلسطين 🇵🇸",
                  "Made in Palestine 🇵🇸"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — TeamSection
   ═══════════════════════════════════════════════════════════════ */

export default function TeamSection() {
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
            <Users className="h-4 w-4 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("فريقنا", "Our Team")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed">
          {lang(
            "العيون التي تُصنع من فلسطين — مهندسان شغوفان بإنترنت الأشياء",
            "The minds behind our work — two engineers passionate about IoT"
          )}
        </p>
      </motion.div>

      {/* ── Founder Cards ── */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {FOUNDERS.map((founder, index) => (
          <FounderCard key={founder.name.en} founder={founder} index={index} />
        ))}
      </motion.div>

      {/* ── Team Stats Bar ── */}
      <TeamStatsBar />

      {/* ── Mission Statement ── */}
      <MissionStatement />
    </section>
  );
}
