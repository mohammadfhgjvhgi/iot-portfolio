"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Send,
  Globe,
  Phone,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — 4 Community Groups (Bilingual)
   ═══════════════════════════════════════════════════════════════ */

interface GroupItem {
  icon: LucideIcon;
  color: string;
  name: string;
  description: { ar: string; en: string };
  members: { ar: string; en: string };
  link: string;
  features: { ar: string; en: string }[];
}

const GROUPS: GroupItem[] = [
  {
    icon: Send,
    color: "#0088cc",
    name: "Telegram — @Mashari3_AI_Arduino",
    description: {
      ar: "المجموعة الرئيسية — أكواد Arduino، مشاريع IoT، مساعدة فنية، مناقشات، ملفات شرح",
      en: "Main Group — Arduino codes, IoT projects, tech support, discussions, tutorials",
    },
    members: {
      ar: "500+ عضو",
      en: "500+ members",
    },
    link: "https://t.me/Mashari3_AI_Arduino",
    features: [
      { ar: "أكواد Arduino", en: "Arduino Codes" },
      { ar: "مشاريع IoT", en: "IoT Projects" },
      { ar: "مساعدة فنية", en: "Tech Support" },
      { ar: "ملفات شرح", en: "Tutorials" },
    ],
  },
  {
    icon: Send,
    color: "#0088cc",
    name: "Telegram — @Arsuino1",
    description: {
      ar: "مجموعة Arduino الخاصة — حلول أخطاء، مشاريع تعليمية، مناقشات تقنية",
      en: "Arduino Special Group — Error solutions, educational projects, tech discussions",
    },
    members: {
      ar: "300+ عضو",
      en: "300+ members",
    },
    link: "https://t.me/Arsuino1",
    features: [
      { ar: "حلول أخطاء", en: "Error Solutions" },
      { ar: "مشاريع تعليمية", en: "Educational Projects" },
      { ar: "مناقشات تقنية", en: "Tech Discussions" },
    ],
  },
  {
    icon: Globe,
    color: "#1877F2",
    name: "Facebook Page",
    description: {
      ar: "صفحتنا على فيسبوك — آخر الأخبار والمشاريع والتحديثات",
      en: "Our Facebook Page — Latest news, projects, and updates",
    },
    members: {
      ar: "200+ متابع",
      en: "200+ followers",
    },
    link: "https://www.facebook.com/share/1HnZactzYD/",
    features: [
      { ar: "آخر الأخبار", en: "Latest News" },
      { ar: "المشاريع", en: "Projects" },
      { ar: "تحديثات", en: "Updates" },
    ],
  },
  {
    icon: Phone,
    color: "#25D366",
    name: "WhatsApp",
    description: {
      ar: "تواصل مباشر مع الفريق — استفسارات سريعة ودعم فني",
      en: "Direct team contact — Quick inquiries and technical support",
    },
    members: {
      ar: "متاح 24/7",
      en: "Available 24/7",
    },
    link: "https://wa.me/972569303043",
    features: [
      { ar: "دعم فني", en: "Tech Support" },
      { ar: "استفسارات سريعة", en: "Quick Inquiries" },
      { ar: "متاح 24/7", en: "Available 24/7" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   GROUP CARD
   ═══════════════════════════════════════════════════════════════ */

interface GroupCardProps {
  group: GroupItem;
  index: number;
}

function GroupCard({ group, index }: GroupCardProps) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const Icon = group.icon;

  return (
    <motion.a
      ref={ref}
      href={group.link}
      target="_blank"
      rel="noopener noreferrer"
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
      className="relative group rounded-xl overflow-hidden glass-card-dark card-hover block"
      style={{
        "--glow-color": group.color,
      } as React.CSSProperties}
    >
      {/* ── Colored Top Border ── */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${group.color}, ${group.color}60, transparent)`,
        }}
      />

      {/* ── Hover Glow Effect ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          boxShadow: `inset 0 0 30px ${group.color}08, 0 0 25px ${group.color}10`,
        }}
      />

      {/* ── Card Content ── */}
      <div className="relative p-5 sm:p-6 flex flex-col h-full">
        {/* ── Icon Badge ── */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${group.color}15`,
            border: `1px solid ${group.color}30`,
            boxShadow: `0 0 12px ${group.color}15`,
          }}
        >
          <Icon className="h-5.5 w-5.5" style={{ color: group.color }} />
        </div>

        {/* ── Group Name ── */}
        <h3
          className="font-bold text-sm sm:text-base text-foreground leading-tight mb-2"
          dir="ltr"
        >
          {group.name}
        </h3>

        {/* ── Description ── */}
        <p
          className="text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed mb-4 flex-grow"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {lang(group.description.ar, group.description.en)}
        </p>

        {/* ── Feature Tags ── */}
        <div className="flex flex-wrap gap-1.5 mb-4" dir={isRTL() ? "rtl" : "ltr"}>
          {group.features.map((feature, featureIndex) => (
            <span
              key={featureIndex}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium"
              style={{
                background: `${group.color}12`,
                color: `${group.color}`,
                border: `1px solid ${group.color}20`,
              }}
            >
              {lang(feature.ar, feature.en)}
            </span>
          ))}
        </div>

        {/* ── Bottom Row: Members Badge + Join Button ── */}
        <div
          className="flex items-center justify-between gap-3 mt-auto pt-4"
          style={{
            borderTop: `1px solid ${group.color}15`,
          }}
        >
          {/* Members Badge */}
          <span
            className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md"
            style={{
              background: `${group.color}10`,
              color: group.color,
            }}
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(group.members.ar, group.members.en)}
          </span>

          {/* Join Button */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer"
            style={{
              background: `${group.color}20`,
              color: group.color,
              border: `1px solid ${group.color}35`,
            }}
          >
            {lang("انضم الآن", "Join Now")}
            <ExternalLink className="h-3 w-3" />
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — GroupsLinksSection
   ═══════════════════════════════════════════════════════════════ */

export default function GroupsLinksSection() {
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
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00e5ff12] border border-[#00e5ff25]">
            <Users className="h-4.5 w-4.5 text-[#00e5ff]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("انضم لمجتمعنا", "Join Our Community")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-2xl">
          {lang(
            "كن جزءاً من مجتمع تقني متخصص في إنترنت الأشياء والأتمتة",
            "Be part of a specialized tech community in IoT and automation"
          )}
        </p>
      </motion.div>

      {/* ═══ Groups Grid (1 col mobile, 2 md, 4 xl) ═══ */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {GROUPS.map((group, index) => (
          <GroupCard key={index} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}
