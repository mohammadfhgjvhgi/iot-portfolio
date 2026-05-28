"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Cloud,
  ShieldCheck,
  Radio,
  PartyPopper,
  Lightbulb,
  CheckCircle2,
  Wrench,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — 6 IoT Services (Bilingual)
   ═══════════════════════════════════════════════════════════════ */

interface ServiceFeature {
  ar: string;
  en: string;
}

interface ServiceItem {
  icon: LucideIcon;
  color: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  features: ServiceFeature[];
}

const SERVICES: ServiceItem[] = [
  {
    icon: Building2,
    color: "#00ff66",
    title: {
      ar: "\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0646\u0627\u0632\u0644 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064a \u0627\u0644\u0630\u0643\u064a\u0629",
      en: "Smart Home & Building Automation",
    },
    description: {
      ar: "\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0646\u0641\u064a\u0630 \u0623\u0646\u0638\u0645\u0629 \u062a\u062d\u0643\u0645 \u0630\u0643\u064a\u0629 \u0644\u0644\u0645\u0628\u0627\u0646\u064a \u062a\u0634\u0645\u0644 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062f\u062e\u0648\u0644\u060c \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0628\u064a\u0626\u064a\u0629\u060c \u0643\u0634\u0641 \u0627\u0644\u062d\u0631\u064a\u0642\u060c \u0648\u0627\u0644\u062a\u062d\u0643\u0645 \u0639\u0646 \u0628\u064f\u0639\u062f \u0639\u0628\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0647\u0627\u062a\u0641.",
      en: "Design and implementation of smart building control systems including access management, environmental monitoring, fire detection, and remote control via mobile apps.",
    },
    features: [
      { ar: "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062f\u062e\u0648\u0644 \u0648\u0627\u0644\u062e\u0631\u0648\u062c \u0627\u0644\u0630\u0643\u064a\u0629", en: "Smart access & exit management" },
      { ar: "\u0643\u0634\u0641 \u0627\u0644\u062d\u0631\u064a\u0642 \u0648\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0641\u0648\u0631\u064a\u0629", en: "Fire detection & instant alerts" },
      { ar: "\u062a\u062d\u0643\u0645 \u0639\u0646 \u0628\u064f\u0639\u062f \u0639\u0628\u0631 \u062a\u0637\u0628\u064a\u0642 \u0647\u0627\u062a\u0641", en: "Remote control via mobile app" },
    ],
  },
  {
    icon: Cloud,
    color: "#00e5ff",
    title: {
      ar: "\u062d\u0644\u0648\u0644 \u0625\u0646\u062a\u0631\u0646\u062a \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u0648\u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0627\u0644\u0633\u062d\u0627\u0628\u064a",
      en: "IoT Solutions & Cloud Integration",
    },
    description: {
      ar: "\u0631\u0628\u0637 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0648\u0627\u0644\u062d\u0648\u0627\u0633\u064a\u0628 \u0628\u0627\u0644\u0633\u062d\u0627\u0628\u0629 \u0639\u0628\u0631 Firebase \u0648REST API. \u0644\u0648\u062d\u0627\u062a \u0645\u0631\u0627\u0642\u0628\u0629 \u062d\u064a\u0629\u060c \u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0641\u0648\u0631\u064a\u0629\u060c \u0648\u062a\u062d\u0643\u0645 \u0639\u0646 \u0628\u064f\u0639\u062f \u0645\u0646 \u0623\u064a \u0645\u0643\u0627\u0646 \u0641\u064a \u0627\u0644\u0639\u0627\u0644\u0645.",
      en: "Connecting devices and computers to the cloud via Firebase and REST API. Live monitoring dashboards, instant alerts, and remote control from anywhere in the world.",
    },
    features: [
      { ar: "\u0644\u0648\u062d\u0627\u062a \u0645\u0631\u0627\u0642\u0628\u0629 \u062d\u064a\u0629 \u0639\u0628\u0631 Firebase", en: "Live dashboards via Firebase" },
      { ar: "\u062a\u0643\u0627\u0645\u0644 REST API \u0645\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629", en: "REST API integration with devices" },
      { ar: "\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0641\u0648\u0631\u064a\u0629 \u0648\u062a\u062d\u0643\u0645 \u0639\u0627\u0644\u0645\u064a", en: "Instant alerts & global control" },
    ],
  },
  {
    icon: ShieldCheck,
    color: "#ffab00",
    title: {
      ar: "\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u0627\u0644\u062a\u062d\u0643\u0645 \u0628\u0627\u0644\u062f\u062e\u0648\u0644",
      en: "Security & Access Control Systems",
    },
    description: {
      ar: "\u0623\u0646\u0638\u0645\u0629 \u062d\u0645\u0627\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629 \u0628\u0642\u0627\u0631\u0626\u0627\u062a RFID\u060c \u0623\u0642\u0641\u0627\u0644 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629\u060c \u0648\u0645\u0646\u0637\u0642 \u0645\u062d\u0644\u064a \u064a\u0639\u0645\u0644 \u0628\u062f\u0648\u0646 \u0625\u0646\u062a\u0631\u0646\u062a. \u062e\u0648\u0627\u0631\u0632\u0645\u064a\u0627\u062a \u0645\u0643\u0627\u0641\u062d\u0629 \u0627\u0644\u062a\u062c\u0645\u062f \u062a\u0636\u0645\u0646 \u0639\u0645\u0644 \u0627\u0644\u0646\u0638\u0627\u0645 24/7.",
      en: "Advanced security systems with RFID readers, electronic locks, and local logic that works without internet. Anti-freeze algorithms ensuring 24/7 system operation.",
    },
    features: [
      { ar: "\u0642\u0627\u0631\u0626\u0627\u062a RFID \u0648\u0623\u0642\u0641\u0627\u0644 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629", en: "RFID readers & electronic locks" },
      { ar: "\u0645\u0646\u0637\u0642 \u0645\u062d\u0644\u064a \u0644\u0644\u0639\u0645\u0644 \u0628\u062f\u0648\u0646 \u0625\u0646\u062a\u0631\u0646\u062a", en: "Offline local logic capability" },
      { ar: "\u062e\u0648\u0627\u0631\u0632\u0645\u064a\u0627\u062a \u0645\u0643\u0627\u0641\u062d\u0629 \u0627\u0644\u062a\u062c\u0645\u062f Anti-Freeze", en: "Anti-Freeze algorithms" },
    ],
  },
  {
    icon: Radio,
    color: "#b44dff",
    title: {
      ar: "\u0634\u0628\u0643\u0627\u062a \u062d\u0633\u0627\u0633\u0627\u062a \u0645\u062e\u0635\u0635\u0629",
      en: "Custom Sensor Networks",
    },
    description: {
      ar: "\u062a\u0635\u0645\u064a\u0645 \u0634\u0628\u0643\u0627\u062a \u062d\u0633\u0627\u0633\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 (IR\u060c \u063a\u0627\u0632\u060c \u0627\u0647\u062a\u0632\u0627\u0632\u060c \u062d\u0631\u0627\u0631\u0629\u060c \u0631\u0637\u0648\u0628\u0629) \u0645\u0639 \u0645\u0639\u0645\u0627\u0631\u064a\u0629 \u062c\u0633\u0631 Serial \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0634\u0643\u0644 \u0645\u0648\u062b\u0648\u0642 \u0625\u0644\u0649 \u0627\u0644\u0633\u062d\u0627\u0628\u0629.",
      en: "Designing multi-sensor networks (IR, gas, vibration, temperature, humidity) with Serial bridge architecture for reliable data transmission to the cloud.",
    },
    features: [
      { ar: "\u062d\u0633\u0627\u0633\u0627\u062a IR \u0648\u063a\u0627\u0632 \u0648\u0627\u0647\u062a\u0632\u0627\u0632", en: "IR, gas & vibration sensors" },
      { ar: "\u0645\u0639\u0645\u0627\u0631\u064a\u0629 \u062c\u0633\u0631 Serial \u0627\u0644\u0645\u0648\u062b\u0648\u0642\u0629", en: "Reliable Serial bridge architecture" },
      { ar: "\u0646\u0642\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u063a\u064a\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062d\u062c\u0628", en: "Non-blocking data pipeline" },
    ],
  },
  {
    icon: PartyPopper,
    color: "#ff6b9d",
    title: {
      ar: "\u0623\u062a\u0645\u062a\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0627\u062a \u0648\u0627\u0644\u0642\u0627\u0639\u0627\u062a",
      en: "Event & Venue Automation",
    },
    description: {
      ar: "\u0623\u0646\u0638\u0645\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0644\u0644\u0642\u0627\u0639\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u0627\u0631\u062d \u062a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u062d\u0633\u0627\u0633\u0627\u062a \u0627\u0644\u062a\u0642\u0627\u0631\u0628 \u0648\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u0645\u0624\u062b\u0631\u0627\u062a \u0627\u0644\u0636\u0648\u0626\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b \u0639\u0628\u0631 \u0622\u0644\u0629 \u062d\u0627\u0644\u0627\u062a \u0628\u0631\u0645\u062c\u064a\u0629.",
      en: "Interactive venue systems using proximity and distance sensors to trigger lighting effects and music automatically via software state machines.",
    },
    features: [
      { ar: "\u0622\u0644\u0629 \u062d\u0627\u0644\u0627\u062a \u0628\u0631\u0645\u062c\u064a\u0629 (State Machine)", en: "Software state machine logic" },
      { ar: "\u062d\u0633\u0627\u0633\u0627\u062a \u062a\u0642\u0627\u0631\u0628 \u0648\u0645\u0633\u0627\u0641\u0629 HC-SR04", en: "Proximity & distance sensors (HC-SR04)" },
      { ar: "\u0645\u0632\u0627\u0645\u0646\u0629 \u0625\u0636\u0627\u0621\u0629 \u0648\u0635\u0648\u062a DFPlayer", en: "Light & sound sync via DFPlayer" },
    ],
  },
  {
    icon: Lightbulb,
    color: "#4fc3f7",
    title: {
      ar: "\u0646\u0645\u0627\u0630\u062c \u0623\u0648\u0644\u064a\u0629 \u0648\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u062a\u0642\u0646\u064a\u0629",
      en: "Prototyping & Technical Consulting",
    },
    description: {
      ar: "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0625\u0644\u0649 \u0646\u0645\u0627\u0630\u062c \u0623\u0648\u0644\u064a\u0629 \u0639\u0627\u0645\u0644\u0629. \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0641\u064a \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a\u060c \u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064a\u0629\u060c \u0648\u062d\u0644 \u0627\u0644\u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629 \u0627\u0644\u0645\u0639\u0642\u062f\u0629.",
      en: "Turning ideas into working prototypes. Technical consulting in component selection, architecture design, and solving complex engineering problems.",
    },
    features: [
      { ar: "\u0646\u0645\u0627\u0630\u062c \u0623\u0648\u0644\u064a\u0629 \u0639\u0627\u0645\u0644\u0629 \u0628\u0633\u0631\u0639\u0629", en: "Fast working prototypes" },
      { ar: "\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a", en: "Component selection consulting" },
      { ar: "\u062d\u0644 \u0627\u0644\u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629 \u0627\u0644\u0645\u0639\u0642\u062f\u0629", en: "Complex engineering problem solving" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SERVICE CARD
   ═══════════════════════════════════════════════════════════════ */

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const Icon = service.icon;

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
        "--glow-color": service.color,
      } as React.CSSProperties}
    >
      {/* ── Colored Top Glow Line ── */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${service.color}, ${service.color}60, transparent)`,
        }}
      />

      {/* ── Hover Glow Effect ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          boxShadow: `inset 0 0 30px ${service.color}08, 0 0 25px ${service.color}10`,
        }}
      />

      {/* ── Card Content ── */}
      <div className="relative p-5 sm:p-6">
        {/* ── Icon Badge ── */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${service.color}12`,
            border: `1px solid ${service.color}30`,
            boxShadow: `0 0 12px ${service.color}15`,
          }}
        >
          <Icon className="h-5.5 w-5.5" style={{ color: service.color }} />
        </div>

        {/* ── Title (AR primary, EN subtitle) ── */}
        <div className="mb-3">
          <h3
            className="font-bold text-sm sm:text-base text-foreground leading-tight mb-1"
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(service.title.ar, service.title.en)}
          </h3>
          <p
            className="text-[11px] sm:text-xs text-[#7a8ba8] font-mono"
            dir="ltr"
          >
            {lang(service.title.en, service.title.ar)}
          </p>
        </div>

        {/* ── Description ── */}
        <p
          className="text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed mb-4"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {lang(service.description.ar, service.description.en)}
        </p>

        {/* ── Features List ── */}
        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-2.5">
              <CheckCircle2
                className="h-3.5 w-3.5 shrink-0 mt-0.5"
                style={{ color: service.color, opacity: 0.8 }}
              />
              <span
                className="text-[11px] sm:text-xs text-[#c5cdd8] leading-snug"
                dir={isRTL() ? "rtl" : "ltr"}
              >
                {lang(feature.ar, feature.en)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — ServicesSection
   ═══════════════════════════════════════════════════════════════ */

export default function ServicesSection() {
  const { t: lang, isRTL } = useLang();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  const scrollToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
            <Wrench className="h-4.5 w-4.5 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("\u062e\u062f\u0645\u0627\u062a\u0646\u0627", "Our Services")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-2xl">
          {lang(
            "\u0641\u0631\u064a\u0642 \u0647\u0646\u062f\u0633\u0629 \u0625\u0646\u062a\u0631\u0646\u062a \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u0645\u0646 \u0641\u0644\u0633\u0637\u064a\u0646 \u2014 \u0646\u062d\u0648\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0625\u0644\u0649 \u0645\u0646\u0638\u0648\u0645\u0627\u062a \u0630\u0643\u064a\u0629 \u062d\u0642\u064a\u0642\u064a\u0629",
            "IoT engineering team from Palestine \u2014 turning ideas into real smart systems"
          )}
        </p>
      </motion.div>

      {/* ═══ Services Grid ═══ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* ═══ Bottom CTA Section ═══ */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 sm:mt-16"
      >
        <div
          className="relative rounded-2xl overflow-hidden glass-card-dark gradient-card-border"
          style={{
            background: `linear-gradient(135deg, rgba(0,255,102,0.04) 0%, rgba(0,229,255,0.03) 50%, rgba(180,77,255,0.03) 100%)`,
          }}
        >
          {/* Decorative gradient line */}
          <div
            className="h-[2px] w-full"
            style={{
              background: `linear-gradient(90deg, transparent, #00ff66, #00e5ff, #b44dff, transparent)`,
            }}
          />

          <div className="p-8 sm:p-10 flex flex-col items-center text-center gap-5">
            {/* Heading */}
            <h3
              className="text-lg sm:text-xl font-bold text-foreground leading-snug"
              dir={isRTL() ? "rtl" : "ltr"}
            >
              {lang(
                "\u0645\u0634\u0631\u0648\u0639 \u0641\u064a \u0628\u0627\u0644\u0643\u061f \u062e\u0644\u064a\u0646\u0627 \u0646\u0633\u0648\u064a\u0647!",
                "Have a project in mind? Let's build it!"
              )}
            </h3>

            {/* Subtitle */}
            <p
              className="text-sm text-[#7a8ba8] max-w-lg leading-relaxed"
              dir={isRTL() ? "rtl" : "ltr"}
            >
              {lang(
                "\u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0645\u0634\u0631\u0648\u0639\u0643 \u0635\u063a\u064a\u0631\u0627\u064b \u0623\u0648 \u0643\u0628\u064a\u0631\u0627\u064b\u060c \u0646\u062d\u0646 \u062c\u0627\u0647\u0632\u0648\u0646 \u0644\u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u0641\u064a \u062a\u062d\u0642\u064a\u0642\u0647. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0627\u0644\u064a\u0648\u0645 \u0648\u0644\u0646\u0628\u062f\u0623 \u0627\u0644\u0639\u0645\u0644.",
                "Whether your project is small or large, we're ready to help you make it happen. Contact us today and let's get started."
              )}
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #00ff66, #00e5ff)",
                color: "#0a0f1a",
                boxShadow: "0 0 20px #00ff6630, 0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              {lang("\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627", "Get in Touch")}
              <ArrowDown
                className="h-4 w-4"
                style={{
                  transform: isRTL() ? "rotate(90deg)" : "rotate(90deg)",
                }}
              />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
