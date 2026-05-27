"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu,
  Radio,
  Settings,
  Wifi,
  Code2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — 6 Skill Categories (Bilingual)
   ═══════════════════════════════════════════════════════════════ */

interface SkillCategory {
  icon: LucideIcon;
  title: { ar: string; en: string };
  color: string;
  glowColor: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    icon: Cpu,
    title: { ar: "المتحكمات الدقيقة", en: "Microcontrollers" },
    color: "#00ff66",
    glowColor: "#00ff6640",
    skills: [
      "Arduino Uno",
      "Arduino Mega 2560",
      "ESP32 NodeMCU",
      "ESP8266",
      "Arduino Nano",
    ],
  },
  {
    icon: Radio,
    title: { ar: "الحساسات", en: "Sensors" },
    color: "#00e5ff",
    glowColor: "#00e5ff40",
    skills: [
      "DHT11/22",
      "HC-SR04 Ultrasonic",
      "PIR HC-SR501",
      "MQ-2 Gas",
      "Flame Sensor",
      "LDR",
      "Tilt Sensor",
      "TTP223 Touch",
      "SW-420 Vibration",
      "IR Proximity",
    ],
  },
  {
    icon: Settings,
    title: { ar: "المشغلات", en: "Actuators" },
    color: "#ffab00",
    glowColor: "#ffab0040",
    skills: [
      "Servo Motor (SG90, MG996R)",
      "DC Motor + L298N",
      "Relay Modules",
      "DFPlayer Mini MP3",
      "Buzzer",
    ],
  },
  {
    icon: Wifi,
    title: { ar: "بروتوكولات الاتصال", en: "Communication" },
    color: "#b44dff",
    glowColor: "#b44dff40",
    skills: [
      "Serial UART",
      "I2C",
      "SPI",
      "WiFi (ESP32/8266)",
      "HTTP/REST API",
      "Firebase Realtime DB",
    ],
  },
  {
    icon: Code2,
    title: { ar: "البرمجيات", en: "Software" },
    color: "#ff6b9d",
    glowColor: "#ff6b9d40",
    skills: [
      "C/C++ (Arduino)",
      "Python 3",
      "Kotlin (Android)",
      "HTML/CSS/JS",
      "Firebase Admin",
    ],
  },
  {
    icon: Wrench,
    title: { ar: "الأدوات", en: "Tools" },
    color: "#4fc3f7",
    glowColor: "#4fc3f740",
    skills: [
      "Arduino IDE",
      "VS Code",
      "Fritzing",
      "Serial Monitor",
      "Logic Analyzer",
    ],
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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.04,
      ease: "easeOut",
    },
  }),
};

/* ═══════════════════════════════════════════════════════════════
   CATEGORY CARD
   ═══════════════════════════════════════════════════════════════ */

function CategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const { t: lang } = useLang();
  const Icon = category.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="glass-card-dark rounded-xl overflow-hidden card-hover group"
      style={{
        borderColor: `${category.color}15`,
      }}
    >
      {/* ── Top Glow Line ── */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${category.color}, ${category.color}60, transparent)`,
        }}
      />

      <div className="p-5 sm:p-6">
        {/* ── Category Header ── */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{
              background: `${category.color}12`,
              border: `1px solid ${category.color}25`,
              boxShadow: `0 0 12px ${category.glowColor}`,
            }}
          >
            <Icon className="h-5 w-5" style={{ color: category.color }} />
          </div>
          <div>
            <h3
              className="font-bold text-sm text-foreground leading-tight"
              style={{ color: category.color }}
            >
              {lang(category.title.ar, category.title.en)}
            </h3>
            <span className="text-[10px] text-[#7a8ba8] font-mono">
              {category.skills.length} {lang("عنصر", "items")}
            </span>
          </div>
        </div>

        {/* ── Skills Grid ── */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              custom={i}
              variants={pillVariants}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all duration-300 cursor-default"
              style={{
                background: `${category.color}08`,
                color: `${category.color}dd`,
                border: `1px solid ${category.color}20`,
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: `0 0 16px ${category.glowColor}, 0 0 4px ${category.glowColor}`,
                borderColor: `${category.color}50`,
                background: `${category.color}18`,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — SkillsMatrix
   ═══════════════════════════════════════════════════════════════ */

export default function SkillsMatrix() {
  const { t: lang, isRTL } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const totalSkills = CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);

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
            <Cpu className="h-4 w-4 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("مصفوفة المهارات والعتاد", "Skills & Hardware Matrix")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed">
          {lang(
            `${CATEGORIES.length} تصنيفات × ${totalSkills} عنصر — تغطي المتحكمات والحساسات والمشغلات والبروتوكولات والبرمجيات والأدوات`,
            `${CATEGORIES.length} categories × ${totalSkills} items — covering microcontrollers, sensors, actuators, protocols, software, and tools`
          )}
        </p>
      </motion.div>

      {/* ── Skills Grid ── */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
      >
        {CATEGORIES.map((category, index) => (
          <CategoryCard key={category.title.en} category={category} index={index} />
        ))}
      </motion.div>

      {/* ── Bottom Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 sm:mt-10 glass-card-dark rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.title.en} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: cat.color,
                  boxShadow: `0 0 8px ${cat.glowColor}`,
                }}
              />
              <span className="text-xs text-[#7a8ba8]">
                {lang(cat.title.ar, cat.title.en)}
              </span>
              <span
                className="text-xs font-bold font-mono"
                style={{ color: cat.color }}
              >
                {cat.skills.length}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
