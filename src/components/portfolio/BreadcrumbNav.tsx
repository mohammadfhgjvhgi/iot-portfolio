"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  ChevronRight,
  ChevronLeft,
  MapPin,
} from "lucide-react";
import { useLang } from "@/lib/language";

const SECTIONS = [
  { id: "hero", ar: "الرئيسية", en: "Home" },
  { id: "team", ar: "الفريق", en: "Team" },
  { id: "services", ar: "الخدمات", en: "Services" },
  { id: "calculator", ar: "احسب مشروعك", en: "Calculator" },
  { id: "projects", ar: "المشاريع", en: "Projects" },
  { id: "skills", ar: "المهارات", en: "Skills" },
  { id: "audit", ar: "فحص الأمان", en: "Security" },
  { id: "testimonials", ar: "آراء العملاء", en: "Testimonials" },
  { id: "blog", ar: "المدونة", en: "Blog" },
  { id: "timeline", ar: "المسيرة", en: "Journey" },
  { id: "contact", ar: "تواصل", en: "Contact" },
];

export default function BreadcrumbNav() {
  const { t, lang, isRTL } = useLang();
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Show breadcrumb after scrolling past hero
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIdx = SECTIONS.findIndex((s) => s.id === activeSection);
  const ChevronIcon = isRTL() ? ChevronLeft : ChevronRight;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  // Build breadcrumb items: always show Home + current, and previous if exists
  const homeSection = SECTIONS[0];
  let prevSection = null;
  const currentSection = SECTIONS[activeIdx >= 0 ? activeIdx : 0];

  if (activeIdx > 1) {
    prevSection = SECTIONS[activeIdx - 1];
  }

  const sections = activeIdx <= 1
    ? [homeSection, currentSection]
    : [homeSection, prevSection!, currentSection];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:block hidden">
      <div className="glass-dark border-t border-[#1e2d4d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav
            aria-label={t("مسار التنقل", "Breadcrumb navigation")}
            className="flex items-center gap-1 h-11 overflow-x-auto code-scroll"
          >
            {sections.map((section, i) => {
              const isLast = i === sections.length - 1;
              const label = lang === "ar" ? section.ar : section.en;

              return (
                <React.Fragment key={section.id}>
                  {i > 0 && (
                    <ChevronIcon className="h-3 w-3 text-[#3d506e] shrink-0 mx-0.5" />
                  )}
                  {i === 0 ? (
                    <button
                      onClick={() => scrollTo(section.id)}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-[#7a8ba8] hover:text-[#00ff66] hover:bg-[#00ff66]/5 transition-all shrink-0"
                    >
                      <Home className="h-3.5 w-3.5" />
                      <span>{label}</span>
                    </button>
                  ) : isLast ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold text-[#00ff66] shrink-0">
                      <MapPin className="h-3 w-3" />
                      <span>{label}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse-neon" />
                    </span>
                  ) : (
                    <button
                      onClick={() => scrollTo(section.id)}
                      className="px-2 py-1 rounded-md text-xs font-medium text-[#7a8ba8] hover:text-[#00e5ff] hover:bg-[#00e5ff]/5 transition-all shrink-0"
                    >
                      {label}
                    </button>
                  )}
                </React.Fragment>
              );
            })}

            {/* Section progress dots */}
            <div className="ml-auto flex items-center gap-1 pl-3 border-l border-[#1e2d4d]">
              {SECTIONS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="group relative"
                  aria-label={lang === "ar" ? s.ar : s.en}
                >
                  <span
                    className={`block w-1.5 h-1.5 rounded-full transition-all ${
                      s.id === activeSection
                        ? "bg-[#00ff66] shadow-[0_0_6px_#00ff66] scale-125"
                        : "bg-[#1e2d4d] group-hover:bg-[#7a8ba8] group-hover:scale-110"
                    }`}
                  />
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
