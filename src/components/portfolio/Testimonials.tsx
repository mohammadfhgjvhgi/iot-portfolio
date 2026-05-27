"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══ TESTIMONIAL DATA ═══ */
const testimonials = [
  {
    quoteAr:
      "بفضل نظام الأمان الذي صممه الفريق، تمكنّا من مراقبة منشأتنا عن بُعد بدقة عالية. النظام يعمل بسلاسة حتى عندما يكون الإنترنت مقطوعاً.",
    quoteEn:
      "Thanks to the security system designed by the team, we can monitor our facilities remotely with high accuracy. The system works smoothly even when internet is down.",
    clientAr: "مهندس مباني — غزة",
    clientEn: "Building Engineer — Gaza",
    categoryAr: "نظام أمان منشآت",
    categoryEn: "Facility Security System",
    color: "#00ff66",
    stars: 5,
  },
  {
    quoteAr:
      "قاعة الأفراح أصبحت تعمل بسلاسة تامة. التحكم بالإضاءة والصوت أصبح تلقائياً، والعملاء سعداء جداً بالنتائج.",
    quoteEn:
      "The event hall now operates flawlessly. Lighting and sound control is fully automated, and clients are very happy with the results.",
    clientAr: "مدير فعاليات — رفح",
    clientEn: "Events Director — Rafah",
    categoryAr: "أتمتة صالات الأفراح",
    categoryEn: "Event Hall Automation",
    color: "#00e5ff",
    stars: 5,
  },
  {
    quoteAr:
      "الخزنة الذكية أعطتنا راحة ذهنية كبيرة. نظام كلمة المرور مع التنبيهات الفورية يجعلنا نشعر بالأمان دائماً.",
    quoteEn:
      "The smart safe gave us great peace of mind. The PIN system with instant alerts makes us feel secure at all times.",
    clientAr: "صاحب متجر — الخليل",
    clientEn: "Shop Owner — Hebron",
    categoryAr: "الخزنة الذكية",
    categoryEn: "Smart Safe System",
    color: "#ffab00",
    stars: 5,
  },
];

/* ═══ ANIMATION VARIANTS ═══ */
const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

/* ═══ COMPONENT ═══ */
export default function Testimonials() {
  const { lang, t, isRTL } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full">
      {/* Cards Container — horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="glass-card-dark gradient-card-border rounded-2xl p-6 flex flex-col justify-between min-w-[300px] md:min-w-0 snap-center shrink-0 group hover:shadow-lg transition-shadow duration-300"
            style={
              {
                "--card-color": item.color,
              } as React.CSSProperties
            }
          >
            {/* Top: Large Quotation Mark */}
            <div className="mb-4">
              <Quote
                className="h-8 w-8 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{ color: item.color }}
              />
            </div>

            {/* Quote Text */}
            <blockquote
              className="text-sm leading-relaxed mb-6 flex-1"
              dir={isRTL() ? "rtl" : "ltr"}
            >
              <p className="italic text-[#c8d1e0]">
                &ldquo;{lang === "ar" ? item.quoteAr : item.quoteEn}&rdquo;
              </p>
            </blockquote>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: item.stars }).map((_, si) => (
                <Star
                  key={si}
                  className="h-3.5 w-3.5 fill-current"
                  style={{ color: item.color }}
                />
              ))}
            </div>

            {/* Bottom: Client Info */}
            <div className="flex items-center justify-between gap-3 border-t border-[#1e2d4d] pt-4">
              <div className="flex items-center gap-3 min-w-0">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    backgroundColor: `${item.color}18`,
                    color: item.color,
                  }}
                >
                  {(lang === "ar" ? item.clientAr : item.clientEn).charAt(0)}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-sm font-bold truncate"
                    style={{ color: item.color }}
                  >
                    {lang === "ar" ? item.clientAr : item.clientEn}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <span
                className="text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0"
                style={{
                  backgroundColor: `${item.color}12`,
                  color: item.color,
                  border: `1px solid ${item.color}30`,
                }}
              >
                {lang === "ar" ? item.categoryAr : item.categoryEn}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
