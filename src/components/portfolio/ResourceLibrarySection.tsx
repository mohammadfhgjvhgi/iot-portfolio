"use client";

import React, { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  Library,
  Search,
  Download,
  Eye,
  Cpu,
  FileText,
  Code2,
  CircuitBoard,
  FolderOpen,
  ArrowUpDown,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — Resource Library (Bilingual)
   ═══════════════════════════════════════════════════════════════ */

interface ResourceItem {
  id: number;
  name: { ar: string; en: string };
  type: "project" | "pdf" | "code" | "schematic" | "file";
  category: "arduino" | "esp32" | "iot" | "esp8266" | "tawjihi";
  downloads: number;
  icon: string;
}

const RESOURCES: ResourceItem[] = [
  { id: 1, name: { ar: "مشروع نظام المنزل الذكي", en: "Smart Home System Project" }, type: "project", category: "arduino", downloads: 1250, icon: "home" },
  { id: 2, name: { ar: "شرح DHT11 كامل", en: "DHT11 Complete Guide" }, type: "pdf", category: "arduino", downloads: 890, icon: "file" },
  { id: 3, name: { ar: "كود الخزنة الذكية", en: "Smart Safe Code" }, type: "code", category: "esp32", downloads: 670, icon: "code" },
  { id: 4, name: { ar: "مخطط نظام المواقف", en: "Parking System Schematic" }, type: "schematic", category: "iot", downloads: 540, icon: "circuit" },
  { id: 5, name: { ar: "ملف مشروع التوجيهي", en: "Tawjihi Project File" }, type: "file", category: "tawjihi", downloads: 2100, icon: "graduation" },
  { id: 6, name: { ar: "دورة ESP8266 للمبتدئين", en: "ESP8266 Beginner Course" }, type: "pdf", category: "esp8266", downloads: 1560, icon: "wifi" },
  { id: 7, name: { ar: "أكواد حساسات شائعة", en: "Common Sensor Codes" }, type: "code", category: "arduino", downloads: 980, icon: "code" },
  { id: 8, name: { ar: "مشروع نظام الأمان", en: "Security System Project" }, type: "project", category: "iot", downloads: 430, icon: "shield" },
  { id: 9, name: { ar: "مخطط الجسر التسلسلي", en: "Serial Bridge Schematic" }, type: "schematic", category: "arduino", downloads: 320, icon: "circuit" },
  { id: 10, name: { ar: "ملف أتمتة الفعاليات", en: "Event Automation File" }, type: "file", category: "tawjihi", downloads: 780, icon: "graduation" },
  { id: 11, name: { ar: "شرح Firebase مع Arduino", en: "Firebase with Arduino Guide" }, type: "pdf", category: "iot", downloads: 1340, icon: "cloud" },
  { id: 12, name: { ar: "مشروع مراقبة بيئية", en: "Environmental Monitoring Project" }, type: "project", category: "esp32", downloads: 560, icon: "thermometer" },
];

/* ═══════════════════════════════════════════════════════════════
   TYPE & CATEGORY CONFIG
   ═══════════════════════════════════════════════════════════════ */

const TYPE_CONFIG: Record<string, { icon: LucideIcon; color: string; label: { ar: string; en: string } }> = {
  project: { icon: Cpu, color: "#00ff66", label: { ar: "مشروع", en: "Project" } },
  pdf: { icon: FileText, color: "#ff6b9d", label: { ar: "PDF", en: "PDF" } },
  code: { icon: Code2, color: "#00e5ff", label: { ar: "كود", en: "Code" } },
  schematic: { icon: CircuitBoard, color: "#ffab00", label: { ar: "مخطط", en: "Schematic" } },
  file: { icon: FolderOpen, color: "#b44dff", label: { ar: "ملف", en: "File" } },
};

const CATEGORIES: { key: string; label: { ar: string; en: string }; color: string }[] = [
  { key: "all", label: { ar: "الكل", en: "All" }, color: "#7a8ba8" },
  { key: "arduino", label: { ar: "Arduino", en: "Arduino" }, color: "#00ff66" },
  { key: "esp8266", label: { ar: "ESP8266", en: "ESP8266" }, color: "#00e5ff" },
  { key: "iot", label: { ar: "IoT", en: "IoT" }, color: "#ffab00" },
  { key: "tawjihi", label: { ar: "توجيهي", en: "Tawjihi" }, color: "#b44dff" },
  { key: "esp32", label: { ar: "ESP32", en: "ESP32" }, color: "#4fc3f7" },
];

type SortOption = "downloads" | "name" | "newest";

/* ═══════════════════════════════════════════════════════════════
   RESOURCE CARD
   ═══════════════════════════════════════════════════════════════ */

interface ResourceCardProps {
  resource: ResourceItem;
  index: number;
}

function ResourceCard({ resource, index }: ResourceCardProps) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  const typeConfig = TYPE_CONFIG[resource.type];
  const TypeIcon = typeConfig.icon;
  const categoryConfig = CATEGORIES.find((c) => c.key === resource.category);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.97 }}
      transition={{
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.06,
      }}
      className="relative group rounded-xl overflow-hidden glass-card-dark card-hover"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          boxShadow: `inset 0 0 30px ${typeConfig.color}08, 0 0 20px ${typeConfig.color}10`,
        }}
      />

      <div className="relative p-4 sm:p-5">
        {/* Top row: type icon + category badge */}
        <div className="flex items-start justify-between mb-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${typeConfig.color}12`,
              border: `1px solid ${typeConfig.color}30`,
              boxShadow: `0 0 10px ${typeConfig.color}12`,
            }}
          >
            <TypeIcon className="h-4.5 w-4.5" style={{ color: typeConfig.color }} />
          </div>

          {categoryConfig && (
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded-full"
              style={{
                color: categoryConfig.color,
                background: `${categoryConfig.color}12`,
                border: `1px solid ${categoryConfig.color}25`,
              }}
            >
              {lang(categoryConfig.label.ar, categoryConfig.label.en)}
            </span>
          )}
        </div>

        {/* Resource name */}
        <h3
          className="font-bold text-sm text-foreground leading-tight mb-2 line-clamp-2"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {lang(resource.name.ar, resource.name.en)}
        </h3>

        {/* Meta row: type label + downloads */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[11px] font-medium"
            style={{ color: typeConfig.color }}
          >
            {lang(typeConfig.label.ar, typeConfig.label.en)}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-[#7a8ba8]">
            <Download className="h-3 w-3" />
            <span>{resource.downloads.toLocaleString()}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer"
            style={{
              background: `${typeConfig.color}15`,
              color: typeConfig.color,
              border: `1px solid ${typeConfig.color}25`,
            }}
          >
            <Download className="h-3.5 w-3.5" />
            {isRTL() ? "تحميل" : "Download"}
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 bg-[#1a2340] text-[#7a8ba8] border border-[#1e2d4d] hover:text-foreground hover:border-[#2a3d5c] cursor-pointer"
          >
            <Eye className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — ResourceLibrarySection
   ═══════════════════════════════════════════════════════════════ */

export default function ResourceLibrarySection() {
  const { t: lang, isRTL } = useLang();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("downloads");

  const filteredResources = useMemo(() => {
    let result = [...RESOURCES];

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((r) => r.category === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(
        (r) =>
          r.name.ar.toLowerCase().includes(query) ||
          r.name.en.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case "downloads":
        result.sort((a, b) => b.downloads - a.downloads);
        break;
      case "name":
        result.sort((a, b) =>
          lang(a.name.ar, a.name.en).localeCompare(lang(b.name.ar, b.name.en))
        );
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
    }

    return result;
  }, [searchQuery, activeCategory, sortBy, lang]);

  const SORT_OPTIONS: { key: SortOption; label: { ar: string; en: string } }[] = [
    { key: "downloads", label: { ar: "الأكثر تحميلاً", en: "Most Downloads" } },
    { key: "name", label: { ar: "الاسم (أ-ي)", en: "Name (A-Z)" } },
    { key: "newest", label: { ar: "الأحدث", en: "Newest" } },
  ];

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
            <Library className="h-4.5 w-4.5 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("مكتبة الموارد", "Resource Library")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-2xl">
          {lang(
            "أكواد، ملفات، مشاريع، ومخططات — كل ما تحتاجه في مكان واحد",
            "Codes, files, projects, and schematics — everything you need in one place"
          )}
        </p>
      </motion.div>

      {/* ═══ Controls Bar ═══ */}
      <div className="mb-6 space-y-4">
        {/* Search + Sort row */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute top-1/2 -translate-y-1/2 h-4 w-4 text-[#7a8ba8] pointer-events-none"
              style={isRTL() ? { right: "12px" } : { left: "12px" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang("ابحث في المكتبة...", "Search library...")}
              dir={isRTL() ? "rtl" : "ltr"}
              className="w-full h-10 rounded-lg bg-[#0f1628] border border-[#1e2d4d] text-sm text-foreground placeholder:text-[#7a8ba8] focus:outline-none focus:border-[#00ff6640] focus:ring-1 focus:ring-[#00ff6630] transition-all duration-200"
              style={{
                paddingLeft: isRTL() ? "12px" : "40px",
                paddingRight: isRTL() ? "40px" : "12px",
              }}
            />
          </div>

          {/* Sort dropdown */}
          <div className="relative flex items-center gap-2">
            <ArrowUpDown className="h-3.5 w-3.5 text-[#7a8ba8] shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              dir={isRTL() ? "rtl" : "ltr"}
              className="h-10 rounded-lg bg-[#0f1628] border border-[#1e2d4d] text-sm text-foreground focus:outline-none focus:border-[#00ff6640] focus:ring-1 focus:ring-[#00ff6630] transition-all duration-200 cursor-pointer appearance-none pl-3 pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237a8ba8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: isRTL() ? "8px center" : "calc(100% - 8px) center",
                paddingLeft: isRTL() ? "28px" : "12px",
                paddingRight: isRTL() ? "12px" : "28px",
              }}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.key} value={opt.key}>
                  {lang(opt.label.ar, opt.label.en)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer"
                style={{
                  color: isActive ? "#0a0f1a" : cat.color,
                  background: isActive ? cat.color : `${cat.color}12`,
                  border: `1px solid ${isActive ? cat.color : `${cat.color}25`}`,
                  boxShadow: isActive ? `0 0 12px ${cat.color}30` : "none",
                }}
              >
                {lang(cat.label.ar, cat.label.en)}
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══ Results count ═══ */}
      <div className="mb-4">
        <span className="text-xs text-[#7a8ba8] font-mono">
          {filteredResources.length} {lang("مورد", "resources")}
        </span>
      </div>

      {/* ═══ Resources Grid ═══ */}
      <div className="max-h-[600px] overflow-y-auto pr-1" style={isRTL() ? { paddingLeft: "4px" } : { paddingRight: "4px" }}>
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Search className="h-10 w-10 text-[#1e2d4d] mb-3" />
            <p className="text-sm text-[#7a8ba8]">
              {lang("لا توجد نتائج", "No results found")}
            </p>
            <p className="text-xs text-[#4a5568] mt-1">
              {lang("جرّب كلمة بحث أو تصنيف مختلف", "Try a different search term or category")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
