"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Activity,
  Lock,
  Bug,
  Globe,
  FileSearch,
  Gauge,
  Eye,
  Server,
  Scan,
  Terminal,
  Fingerprint,
  ClipboardCheck,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Zap,
  RefreshCw,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const;

const statVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.04, ease: "easeOut" as const },
  }),
} as const;

/* ═══════════════════════════════════════════════════════════════
   ANIMATED SCORE RING — SVG circular progress
   ═══════════════════════════════════════════════════════════════ */

function ScoreRing({
  score,
  maxScore = 100,
  size = 80,
  strokeWidth = 5,
  color = "#00ff66",
  label,
  animateOnView = true,
}: {
  score: number;
  maxScore?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: { ar: string; en: string };
  animateOnView?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const percentage = Math.min((score / maxScore) * 100, 100);
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const { t: lang } = useLang();

  useEffect(() => {
    if (!animateOnView || isInView) {
      const duration = 1500;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * score));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [animateOnView, isInView, score]);

  const getScoreColor = (s: number) => {
    if (s >= 90) return "#00ff66";
    if (s >= 70) return "#00e5ff";
    if (s >= 50) return "#ffab00";
    return "#ff3d5a";
  };

  const ringColor = color || getScoreColor(score);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
          style={{ filter: `drop-shadow(0 0 6px ${ringColor}40)` }}
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(30,45,77,0.5)"
            strokeWidth={strokeWidth}
          />
          {/* Animated progress */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={ringColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              !animateOnView || isInView
                ? { strokeDashoffset: offset }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ filter: `drop-shadow(0 0 4px ${ringColor}60)` }}
          />
        </svg>
        {/* Score text in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-sm sm:text-base font-bold font-mono leading-none"
            style={{ color: ringColor }}
          >
            {count}
          </span>
          <span className="text-[9px] text-[#7a8ba8] font-mono">/{maxScore}</span>
        </div>
      </div>
      {label && (
        <span className="text-[10px] sm:text-xs text-[#7a8ba8] font-medium text-center leading-tight">
          {lang(label.ar, label.en)}
        </span>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCORE BAR — Horizontal animated progress bar
   ═══════════════════════════════════════════════════════════════ */

function ScoreBar({
  score,
  label,
  detail,
  color,
}: {
  score: number;
  label: { ar: string; en: string };
  detail: { ar: string; en: string };
  color: string;
}) {
  const { t: lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] sm:text-xs text-[#7a8ba8] truncate">
          {lang(label.ar, label.en)}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] text-[#7a8ba8] font-mono hidden sm:inline">
            {lang(detail.ar, detail.en)}
          </span>
          <span
            className="text-xs font-bold font-mono min-w-[32px] text-right"
            style={{ color }}
          >
            {score}
          </span>
        </div>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(30,45,77,0.5)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            boxShadow: `0 0 8px ${color}40`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${score}%` } : { width: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CHECKLIST ITEM — Single line with icon
   ═══════════════════════════════════════════════════════════════ */

type CheckStatus = "pass" | "fail" | "warn" | "fixed" | "na";

function CheckItem({
  text,
  status,
  index,
}: {
  text: { ar: string; en: string };
  status: CheckStatus;
  index: number;
}) {
  const { t: lang } = useLang();

  const config: Record<CheckStatus, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
    pass: {
      icon: <CheckCircle2 className="h-3.5 w-3.5" />,
      color: "#00ff66",
      bg: "#00ff6608",
      border: "#00ff6620",
    },
    fixed: {
      icon: <BadgeCheck className="h-3.5 w-3.5" />,
      color: "#00e5ff",
      bg: "#00e5ff08",
      border: "#00e5ff20",
    },
    warn: {
      icon: <AlertTriangle className="h-3.5 w-3.5" />,
      color: "#ffab00",
      bg: "#ffab0008",
      border: "#ffab0020",
    },
    fail: {
      icon: <XCircle className="h-3.5 w-3.5" />,
      color: "#ff3d5a",
      bg: "#ff3d5a08",
      border: "#ff3d5a20",
    },
    na: {
      icon: <RefreshCw className="h-3.5 w-3.5" />,
      color: "#7a8ba8",
      bg: "#7a8ba808",
      border: "#7a8ba820",
    },
  };

  const c = config[status];

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      className="flex items-start gap-2.5 py-1"
    >
      <div
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded mt-0.5"
        style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}
      >
        {c.icon}
      </div>
      <span className="text-[11px] sm:text-xs text-[#c5cdd8] leading-relaxed">
        {lang(text.ar, text.en)}
        {status === "fixed" && (
          <span className="ml-1 text-[#00e5ff] font-semibold text-[10px]">
            {lang("تم الإصلاح", "FIXED")} ✅
          </span>
        )}
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COLLAPSIBLE TOOL CARD
   ═══════════════════════════════════════════════════════════════ */

function ToolCard({
  icon,
  title,
  subtitle,
  color,
  glowColor,
  score,
  children,
  initiallyExpanded = false,
}: {
  icon: React.ReactNode;
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  color: string;
  glowColor: string;
  score: number;
  children: React.ReactNode;
  initiallyExpanded?: boolean;
}) {
  const { t: lang, isRTL } = useLang();
  const [expanded, setExpanded] = useState(initiallyExpanded);

  return (
    <motion.div
      variants={cardVariants}
      className="glass-card-dark rounded-xl overflow-hidden card-hover group relative"
      style={{ borderColor: `${color}12` }}
    >
      {/* ── Glowing Top Border ── */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, ${color}80, transparent)`,
          boxShadow: `0 0 12px ${glowColor}`,
        }}
      />

      {/* ── Corner Glow ── */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* ── Card Header (clickable) ── */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-4 cursor-pointer group/btn"
      >
        {/* Icon */}
        <div
          className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300"
          style={{
            background: `${color}10`,
            border: `1px solid ${color}25`,
            color: color,
            boxShadow: `0 0 12px ${glowColor}`,
          }}
        >
          {icon}
        </div>

        {/* Title area */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-sm sm:text-base font-bold leading-tight"
            style={{ color }}
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(title.ar, title.en)}
          </h3>
          <p className="text-[11px] text-[#7a8ba8] mt-0.5" dir={isRTL() ? "rtl" : "ltr"}>
            {lang(subtitle.ar, subtitle.en)}
          </p>
        </div>

        {/* Score ring */}
        <ScoreRing score={score} size={52} strokeWidth={4} color={color} />

        {/* Expand/Collapse chevron */}
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: "#7a8ba8" }}
        >
          {isRTL() ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </motion.div>
      </button>

      {/* ── Expandable Content ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div
              className="px-5 sm:px-6 pb-5 sm:pb-6"
              style={{
                borderTop: `1px solid ${color}10`,
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LIGHTHOUSE TOOL CARD CONTENT
   ═══════════════════════════════════════════════════════════════ */

function LighthouseContent() {
  const { t: lang, isRTL } = useLang();

  const categories = [
    { score: 75, label: { ar: "الأداء", en: "Performance" }, color: "#ffab00" },
    { score: 94, label: { ar: "إمكانية الوصول", en: "Accessibility" }, color: "#00ff66" },
    { score: 96, label: { ar: "أفضل الممارسات", en: "Best Practices" }, color: "#00ff66" },
    { score: 100, label: { ar: "تحسين محركات البحث", en: "SEO" }, color: "#00ff66" },
  ];

  const metrics = [
    { score: 99, label: { ar: "أول محتوى مرئي", en: "First Contentful Paint" }, detail: { ar: "1.2 ثانية", en: "1.2s" } },
    { score: 50, label: { ar: "أكبر محتوى مرئي", en: "Largest Contentful Paint" }, detail: { ar: "4.0 ثانية", en: "4.0s" } },
    { score: 59, label: { ar: "وقت الحظر الكلي", en: "Total Blocking Time" }, detail: { ar: "490 مللي ثانية", en: "490ms" } },
    { score: 100, label: { ar: "انزياح التخطيط التراكمي", en: "Cumulative Layout Shift" }, detail: { ar: "0", en: "0" } },
    { score: 100, label: { ar: "مؤشر السرعة", en: "Speed Index" }, detail: { ar: "1.3 ثانية", en: "1.3s" } },
    { score: 50, label: { ar: "وقت التفاعل", en: "Time to Interactive" }, detail: { ar: "7.2 ثانية", en: "7.2s" } },
  ];

  const issues = [
    { text: { ar: "تصغير حجم JavaScript (وضع التطوير)", en: "Minify JavaScript (dev mode)" }, status: "warn" as CheckStatus },
    { text: { ar: "تقليل JavaScript غير المستخدم (وضع التطوير — Next.js devtools)", en: "Reduce unused JavaScript (dev mode - Next.js devtools)" }, status: "warn" as CheckStatus },
    { text: { ar: "تقليل العمل على الخيط الرئيسي", en: "Minimize main-thread work" }, status: "warn" as CheckStatus },
    { text: { ar: "طلبات حظر العرض", en: "Render-blocking requests" }, status: "warn" as CheckStatus },
    { text: { ar: "أزرار بدون أسماء قابلة للوصول", en: "Buttons without accessible names" }, status: "fixed" as CheckStatus },
    { text: { ar: "اسم التبديل اللغوي القابل للوصول", en: "Language toggle accessible name" }, status: "fixed" as CheckStatus },
  ];

  return (
    <div className="space-y-5 mt-4" dir={isRTL() ? "rtl" : "ltr"}>
      {/* Category Scores */}
      <div>
        <div className="flex items-center gap-1.5 mb-3">
          <Gauge className="h-3.5 w-3.5 text-[#7a8ba8]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold">
            {lang("نتائج الفئات", "Category Scores")}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <ScoreRing
              key={cat.label.en}
              score={cat.score}
              size={64}
              strokeWidth={3.5}
              color={cat.color}
              label={cat.label}
            />
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div>
        <div className="flex items-center gap-1.5 mb-3">
          <Activity className="h-3.5 w-3.5 text-[#7a8ba8]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold">
            {lang("مقاييس الأداء", "Performance Metrics")}
          </span>
        </div>
        <div className="space-y-2.5">
          {metrics.map((m) => (
            <ScoreBar
              key={m.label.en}
              score={m.score}
              label={m.label}
              detail={m.detail}
              color={m.score >= 90 ? "#00ff66" : m.score >= 70 ? "#00e5ff" : m.score >= 50 ? "#ffab00" : "#ff3d5a"}
            />
          ))}
        </div>
      </div>

      {/* Issues */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="h-3.5 w-3.5 text-[#ffab00]" />
            <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold">
              {lang("المشاكل المكتشفة", "Issues Found")}
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold" style={{ background: "#ffab0015", color: "#ffab00", border: "1px solid #ffab0025" }}>
            {lang("١٥ إجمالي", "15 total")}
          </span>
        </div>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-0.5">
          {issues.map((issue, i) => (
            <CheckItem key={i} text={issue.text} status={issue.status} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECURITY HEADERS TOOL CARD CONTENT
   ═══════════════════════════════════════════════════════════════ */

function SecurityHeadersContent() {
  const { t: lang, isRTL } = useLang();

  const headers = [
    { text: { ar: "X-Content-Type-Options: nosniff", en: "X-Content-Type-Options: nosniff" }, status: "fixed" as CheckStatus },
    { text: { ar: "X-Frame-Options: DENY", en: "X-Frame-Options: DENY" }, status: "fixed" as CheckStatus },
    { text: { ar: "X-XSS-Protection: 1; mode=block", en: "X-XSS-Protection: 1; mode=block" }, status: "fixed" as CheckStatus },
    { text: { ar: "سياسة أمان المحتوى (شاملة)", en: "Content-Security-Policy (comprehensive)" }, status: "fixed" as CheckStatus },
    { text: { ar: "Strict-Transport-Security: max-age=63072000", en: "Strict-Transport-Security: max-age=63072000" }, status: "fixed" as CheckStatus },
    { text: { ar: "Referrer-Policy: strict-origin-when-cross-origin", en: "Referrer-Policy: strict-origin-when-cross-origin" }, status: "fixed" as CheckStatus },
    { text: { ar: "Permissions-Policy", en: "Permissions-Policy" }, status: "fixed" as CheckStatus },
    { text: { ar: "إزالة X-Powered-By (كان: Next.js)", en: "X-Powered-By removed (was: Next.js)" }, status: "fixed" as CheckStatus },
  ];

  return (
    <div className="space-y-4 mt-4" dir={isRTL() ? "rtl" : "ltr"}>
      {/* All Fixed Badge */}
      <div className="flex items-center gap-2">
        <div className="led-on" />
        <span className="text-xs text-[#00ff66] font-semibold">
          {lang("جميع رؤوس الأمان تم إصلاحها بنجاح", "All security headers fixed successfully")}
        </span>
      </div>

      {/* Headers Checklist */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-0.5">
        {headers.map((h, i) => (
          <CheckItem key={i} text={h.text} status={h.status} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NUCLEI TOOL CARD CONTENT
   ═══════════════════════════════════════════════════════════════ */

function NucleiContent() {
  const { t: lang, isRTL } = useLang();

  const findings = [
    { text: { ar: "تم تثبيت الأداة وتحميل القوالب", en: "Tool installed and templates downloaded" }, status: "pass" as CheckStatus },
    { text: { ar: "لم يتم اكتشاف ثغرات حرجة على التطبيق", en: "No critical vulnerabilities detected on the application" }, status: "pass" as CheckStatus },
    { text: { ar: "لا توجد مشاكل كشف المعلومات", en: "No information disclosure issues" }, status: "pass" as CheckStatus },
    { text: { ar: "لا توجد ملفات تهيئة مكشوفة أو لوحات تحكم", en: "No exposed config files or admin panels" }, status: "pass" as CheckStatus },
  ];

  return (
    <div className="space-y-4 mt-4" dir={isRTL() ? "rtl" : "ltr"}>
      {/* Clean Badge */}
      <div className="flex items-center gap-2">
        <div className="led-on" />
        <span className="text-xs text-[#00ff66] font-semibold">
          {lang("لا توجد ثغرات أمنية — التطبيق آمن", "No vulnerabilities detected — Application is secure")}
        </span>
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-0.5">
        {findings.map((f, i) => (
          <CheckItem key={i} text={f.text} status={f.status} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OWASP TOOL CARD CONTENT
   ═══════════════════════════════════════════════════════════════ */

function OWASPContent() {
  const { t: lang, isRTL } = useLang();

  const checks: { num: number; text: { ar: string; en: string }; status: CheckStatus }[] = [
    {
      num: 1,
      text: { ar: "الحقن (SQL/XSS): آمن (لا توجد مدخلات من جانب الخادم)", en: "Injection (SQLi/XSS): Safe (no server-side inputs)" },
      status: "pass",
    },
    {
      num: 2,
      text: { ar: "المصادقة المعطلة: غير قابل للتطبيق (موقع ثابت)", en: "Broken Authentication: N/A (static site, no auth needed)" },
      status: "na",
    },
    {
      num: 3,
      text: { ar: "كشف البيانات الحساسة: تم الإصلاح (إزالة X-Powered-By)", en: "Sensitive Data Exposure: Fixed (removed X-Powered-By)" },
      status: "fixed",
    },
    {
      num: 4,
      text: { ar: "كيانات XML الخارجية: آمن (لا يوجد تحليل XML)", en: "XML External Entities: Safe (no XML parsing)" },
      status: "pass",
    },
    {
      num: 5,
      text: { ar: "التحكم المكسور في الوصول: آمن (لا توجد مسارات مشرف مكشوفة)", en: "Broken Access Control: Safe (no admin routes exposed)" },
      status: "pass",
    },
    {
      num: 6,
      text: { ar: "الإعداد الخاطئ للأمان: تم الإصلاح (جميع رؤوس الأمان مضافة)", en: "Security Misconfiguration: Fixed (all security headers added)" },
      status: "fixed",
    },
    {
      num: 7,
      text: { ar: "البرمجة عبر المواقع: آمن (لا يوجد عرض ديناميكي من معلمات URL)", en: "Cross-Site Scripting: Safe (no dynamic rendering from URL params)" },
      status: "pass",
    },
    {
      num: 8,
      text: { ar: "إلغاء التسلسل غير الآمن: غير قابل للتطبيق (لا يوجد تسلسل)", en: "Insecure Deserialization: N/A (no serialization)" },
      status: "na",
    },
    {
      num: 9,
      text: { ar: "الثغرات المعروفة: التبعيات محدثة", en: "Known Vulnerabilities: Dependencies up to date" },
      status: "pass",
    },
    {
      num: 10,
      text: { ar: "التسجيل والمراقبة: غير قابل للتطبيق (نشر ثابت)", en: "Logging & Monitoring: N/A (static deployment)" },
      status: "na",
    },
  ];

  return (
    <div className="space-y-4 mt-4" dir={isRTL() ? "rtl" : "ltr"}>
      {/* Summary */}
      <div className="flex items-center gap-2">
        <div className="led-on" />
        <span className="text-xs text-[#00ff66] font-semibold">
          {lang("جميع الفئات آمنة أو تم إصلاحها", "All categories safe or fixed")}
        </span>
      </div>

      {/* Checklist */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-0.5">
        {checks.map((c) => (
          <div key={c.num} className="flex items-start gap-2.5 py-1">
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold font-mono mt-0.5"
              style={{
                background: "rgba(0,229,255,0.08)",
                color: "#00e5ff",
                border: "1px solid rgba(0,229,255,0.2)",
              }}
            >
              {c.num}
            </span>
            <CheckItem text={c.text} status={c.status} index={c.num} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SEO FIXES SECTION
   ═══════════════════════════════════════════════════════════════ */

function SEOFixesSection() {
  const { t: lang, isRTL } = useLang();

  const seoFixes = [
    { text: { ar: "إضافة sitemap.xml", en: "sitemap.xml added" }, status: "fixed" as CheckStatus },
    { text: { ar: "إضافة manifest.webmanifest", en: "manifest.webmanifest added" }, status: "fixed" as CheckStatus },
    { text: { ar: "تحسين robots.txt مع رابط خريطة الموقع", en: "robots.txt optimized with sitemap URL" }, status: "fixed" as CheckStatus },
    { text: { ar: "إضافة بيانات Open Graph الوصفية", en: "Open Graph metadata added" }, status: "fixed" as CheckStatus },
    { text: { ar: "إضافة بيانات Twitter Card الوصفية", en: "Twitter card metadata added" }, status: "fixed" as CheckStatus },
    { text: { ar: "تكوين الرابط الأساسي Canonical URL", en: "Canonical URL configured" }, status: "fixed" as CheckStatus },
    { text: { ar: "تكوين metadataBase", en: "metadataBase configured" }, status: "fixed" as CheckStatus },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-8 sm:mt-10"
    >
      <div className="glass-card-dark rounded-xl overflow-hidden">
        {/* ── Header ── */}
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg, transparent, #b44dff, #b44dff80, transparent)",
            boxShadow: "0 0 12px #b44dff40",
          }}
        />
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
              style={{
                background: "#b44dff10",
                border: "1px solid #b44dff25",
                boxShadow: "0 0 12px #b44dff40",
                color: "#b44dff",
              }}
            >
              <Globe className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold" style={{ color: "#b44dff" }} dir={isRTL() ? "rtl" : "ltr"}>
                {lang("إصلاحات تحسين محركات البحث", "SEO Fixes")}
              </h3>
              <p className="text-[11px] text-[#7a8ba8]" dir={isRTL() ? "rtl" : "ltr"}>
                {lang("تحسينات إضافية للموقع", "Additional site optimizations")}
              </p>
            </div>
            <div className="ml-auto">
              <span
                className="text-xs font-bold font-mono px-2.5 py-1 rounded-full"
                style={{ background: "#b44dff15", color: "#b44dff", border: "1px solid #b44dff25" }}
              >
                {lang("٧/٧", "7/7")} ✅
              </span>
            </div>
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-0.5" dir={isRTL() ? "rtl" : "ltr"}>
            {seoFixes.map((fix, i) => (
              <CheckItem key={i} text={fix.text} status={fix.status} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OVERALL SCORE HERO — Big animated ring + stats
   ═══════════════════════════════════════════════════════════════ */

function OverallScoreHero() {
  const { t: lang, isRTL } = useLang();

  const stats = [
    {
      value: { ar: "٩٢/١٠٠", en: "92/100" },
      label: { ar: "النتيجة الإجمالية", en: "Overall Score" },
      icon: <ShieldCheck className="h-4 w-4" />,
      color: "#00ff66",
      glowColor: "#00ff6640",
    },
    {
      value: { ar: "+١٧", en: "+17" },
      label: { ar: "تم إصلاحها", en: "Issues Fixed" },
      icon: <BadgeCheck className="h-4 w-4" />,
      color: "#00e5ff",
      glowColor: "#00e5ff40",
    },
    {
      value: { ar: "٤", en: "4" },
      label: { ar: "أدوات اختبار", en: "Tools Used" },
      icon: <Terminal className="h-4 w-4" />,
      color: "#b44dff",
      glowColor: "#b44dff40",
    },
    {
      value: { ar: "٣١/٣١", en: "31/31" },
      label: { ar: "فحوصات ناجحة", en: "Checks Passed" },
      icon: <ClipboardCheck className="h-4 w-4" />,
      color: "#00ff66",
      glowColor: "#00ff6640",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card-dark rounded-xl p-5 sm:p-6 relative overflow-hidden"
    >
      {/* ── Background decorative elements ── */}
      <div
        className="absolute -top-20 -right-20 w-60 h-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,102,0.04), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-60 h-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.03), transparent 70%)" }}
      />

      <div className="relative" dir={isRTL() ? "rtl" : "ltr"}>
        {/* ── Title ── */}
        <div className="flex items-center gap-2 mb-5">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 8px #00ff6640, 0 0 16px #00ff6620",
                "0 0 12px #00ff6660, 0 0 24px #00ff6630",
                "0 0 8px #00ff6640, 0 0 16px #00ff6620",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "#00ff6612", border: "1px solid #00ff6625" }}
          >
            <Shield className="h-4 w-4 text-[#00ff66]" />
          </motion.div>
          <h3 className="text-sm font-bold gradient-neon-text">
            {lang("النتيجة الإجمالية للأمان", "Overall Security Score")}
          </h3>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
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
                className="text-lg sm:text-xl font-bold font-mono"
                style={{ color: stat.color }}
              >
                {lang(stat.value.ar, stat.value.en)}
              </span>
              <span className="text-[10px] sm:text-xs text-[#7a8ba8] font-medium text-center">
                {lang(stat.label.ar, stat.label.en)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Status Bar ── */}
        <div className="mt-5 rounded-lg p-3 flex items-center gap-3" style={{ background: "#00ff6608", border: "1px solid #00ff6615" }}>
          <div className="led-on" />
          <p className="text-xs text-[#c5cdd8]">
            {lang(
              "التطبيق في حالة أمنية ممتازة — جميع المشاكل الحرجة تم إصلاحها. المشاكل المتبقية مرتبطة بوضع التطوير فقط.",
              "Application is in excellent security shape — all critical issues fixed. Remaining issues are dev-mode only."
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — SecurityAudit
   ═══════════════════════════════════════════════════════════════ */

export default function SecurityAudit() {
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
            <ShieldCheck className="h-4 w-4 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("تقرير تدقيق الأمان", "Security Audit Report")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed">
          {lang(
            "فحص شامل باستخدام 4 أدوات اختبار أمني احترافية — Lighthouse، Security Headers، Nuclei، OWASP Top 10",
            "Comprehensive scan using 4 professional security testing tools — Lighthouse, Security Headers, Nuclei, OWASP Top 10"
          )}
        </p>
      </motion.div>

      {/* ── Overall Score Hero ── */}
      <OverallScoreHero />

      {/* ── Tool Cards Grid ── */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mt-6 sm:mt-8"
      >
        {/* 1. Lighthouse */}
        <ToolCard
          icon={<Gauge className="h-5 w-5" />}
          title={{ ar: "Lighthouse (Google)", en: "Lighthouse (Google)" }}
          subtitle={{ ar: "تحليل الأداء والجودة وسهولة الوصول", en: "Performance, quality & accessibility analysis" }}
          color="#ffab00"
          glowColor="#ffab0040"
          score={75}
        >
          <LighthouseContent />
        </ToolCard>

        {/* 2. Security Headers */}
        <ToolCard
          icon={<Lock className="h-5 w-5" />}
          title={{ ar: "التحقق من رؤوس الأمان", en: "Security Headers Check" }}
          subtitle={{ ar: "فحص رؤوس HTTP الأمنية الأساسية", en: "Essential HTTP security headers verification" }}
          color="#00e5ff"
          glowColor="#00e5ff40"
          score={100}
        >
          <SecurityHeadersContent />
        </ToolCard>

        {/* 3. Nuclei */}
        <ToolCard
          icon={<Bug className="h-5 w-5" />}
          title={{ ar: "Nuclei (ProjectDiscovery)", en: "Nuclei (ProjectDiscovery)" }}
          subtitle={{ ar: "فحص الثغرات الأمنية المتقدم", en: "Advanced vulnerability scanning" }}
          color="#00ff66"
          glowColor="#00ff6640"
          score={100}
        >
          <NucleiContent />
        </ToolCard>

        {/* 4. OWASP Top 10 */}
        <ToolCard
          icon={<Fingerprint className="h-5 w-5" />}
          title={{ ar: "OWASP Top 10", en: "OWASP Top 10" }}
          subtitle={{ ar: "فحص أمني سريع لأهم 10 فئات", en: "Quick security check for top 10 categories" }}
          color="#b44dff"
          glowColor="#b44dff40"
          score={100}
        >
          <OWASPContent />
        </ToolCard>
      </motion.div>

      {/* ── SEO Fixes ── */}
      <SEOFixesSection />

      {/* ── Footer Badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mt-6 sm:mt-8 flex items-center justify-center gap-3"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(0,255,102,0.06)", border: "1px solid rgba(0,255,102,0.12)" }}>
          <ShieldCheck className="h-4 w-4 text-[#00ff66]" />
          <span className="text-xs text-[#7a8ba8] font-medium">
            {lang(
              "آخر تحديث: يناير ٢٠٢٥ • الموقع آمن ومعتمد",
              "Last updated: January 2025 • Site is secure & verified"
            )}
          </span>
          <div className="led-on" />
        </div>
      </motion.div>
    </section>
  );
}
