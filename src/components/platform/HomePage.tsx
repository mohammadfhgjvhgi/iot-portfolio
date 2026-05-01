"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Cpu, Send, BookOpen, Code2, Users, CircuitBoard, Zap, Radio,
  ChevronLeft, Lightbulb, MessageCircle, Wifi, ArrowLeftRight,
  Play, Shield, Clock, Award, CheckCircle2, Terminal,
  Gauge, Pin, Battery, MonitorSmartphone, Cloud, Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props { onTabChange: (t: string) => void; }

/* ── Animated counter — useEffect to avoid hydration issues ── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1800;
    const step = value / (dur / 16);
    let cur = 0;
    const timer = setInterval(() => {
      cur += step;
      if (cur >= value) { cur = value; clearInterval(timer); }
      setN(Math.round(cur));
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <>{n}{suffix}</>;
}

/* ── Hero Illustration (pure CSS + Lucide) ── */
function HeroIllustration() {
  const nodes = [
    { x: 10, y: 15, icon: Cpu, size: 40, color: "bg-emerald-500", delay: 0 },
    { x: 75, y: 10, icon: Wifi, size: 36, color: "bg-teal-500", delay: 0.2 },
    { x: 85, y: 65, icon: Code2, size: 34, color: "bg-green-500", delay: 0.4 },
    { x: 15, y: 70, icon: Lightbulb, size: 32, color: "bg-amber-500", delay: 0.1 },
    { x: 50, y: 45, icon: CircuitBoard, size: 48, color: "bg-emerald-600", delay: 0.3 },
    { x: 35, y: 85, icon: Gauge, size: 28, color: "bg-teal-400", delay: 0.5 },
    { x: 65, y: 30, icon: Zap, size: 30, color: "bg-yellow-500", delay: 0.15 },
  ];
  return (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
      {/* Background grid pattern */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-cyan-950/20 border border-emerald-200/50 dark:border-emerald-800/30 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="10" y1="15" x2="50" y2="45" stroke="currentColor" strokeWidth="0.3" className="text-emerald-400 dark:text-emerald-600 opacity-40" strokeDasharray="2,2" />
          <line x1="75" y1="10" x2="50" y2="45" stroke="currentColor" strokeWidth="0.3" className="text-teal-400 dark:text-teal-600 opacity-40" strokeDasharray="2,2" />
          <line x1="85" y1="65" x2="50" y2="45" stroke="currentColor" strokeWidth="0.3" className="text-green-400 dark:text-green-600 opacity-40" strokeDasharray="2,2" />
          <line x1="15" y1="70" x2="50" y2="45" stroke="currentColor" strokeWidth="0.3" className="text-amber-400 dark:text-amber-600 opacity-40" strokeDasharray="2,2" />
          <line x1="65" y1="30" x2="75" y2="10" stroke="currentColor" strokeWidth="0.3" className="text-yellow-400 dark:text-yellow-600 opacity-30" strokeDasharray="2,2" />
          <line x1="35" y1="85" x2="50" y2="45" stroke="currentColor" strokeWidth="0.3" className="text-teal-400 dark:text-teal-600 opacity-30" strokeDasharray="2,2" />
        </svg>
      </div>
      {/* Floating nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: node.delay }}
        >
          <div className="animate-float" style={{ animationDelay: `${node.delay}s` }}>
            <div className={`${node.size === 48 ? "p-3" : "p-2.5"} rounded-xl ${node.color} shadow-lg text-white`}>
              <node.icon className="h-full w-full" style={{ height: node.size - 20, width: node.size - 20 }} />
            </div>
          </div>
        </motion.div>
      ))}
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/20 dark:bg-emerald-400/10 rounded-full blur-3xl" />
    </div>
  );
}

/* ── Board data with full specs from Datasheets ── */
const boards = [
  {
    name: "Arduino Uno R3", chip: "ATmega328P", flash: "32 KB", ram: "2 KB", clock: "16 MHz",
    pins: "20", voltage: "5V", wifi: false, icon: Cpu, color: "from-emerald-500 to-green-600",
    desc: "المعيار الذهبي للتعلم والمشاريع البسيطة. معالج AVR 8-bit بسيط مع USB مدمج، EEPROM مدمج، ومجتمع ضخم من المكتبات الجاهزة. السعر ~$23.",
  },
  {
    name: "ESP32 DevKit", chip: "Xtensa LX6 Dual-Core", flash: "4 MB", ram: "520 KB", clock: "240 MHz",
    pins: "34", voltage: "3.3V", wifi: true, icon: Wifi, color: "from-teal-500 to-cyan-600",
    desc: "وحش صغير مزدوج النواة مع Wi-Fi 802.11 b/g/n + BLE 4.2 مدمج. يحتوي ADC 12-bit و DAC و touch sensors. الأفضل لمشاريع IoT والمنزل الذكي.",
  },
  {
    name: "STM32F103C8", chip: "ARM Cortex-M3", flash: "64 KB", ram: "20 KB", clock: "72 MHz",
    pins: "37", voltage: "3.3V", wifi: false, icon: CircuitBoard, color: "from-amber-500 to-orange-600",
    desc: "متحكم ARM 32-bit احترافي من STMicroelectronics. يوفر ADC 12-bit مزدوج، 7 تايمرات، CAN bus. مستخدم في الصناعة والأجهزة الطبية. السعر ~$2.",
  },
  {
    name: "Raspberry Pi Pico", chip: "RP2040 Dual-Core", flash: "2 MB", ram: "264 KB", clock: "133 MHz",
    pins: "30", voltage: "3.3V", wifi: false, icon: Zap, color: "from-rose-500 to-pink-600",
    desc: "رخيص الثمن ($4) ويدعم MicroPython و C/C++. معالج ARM Cortex-M0+ مزدوج النواة مع PIO (Programmable I/O) فريد. مثالي للنماذج الأولية السريعة.",
  },
];

const boardSpecs = [
  { key: "flash", label: "Flash Memory" },
  { key: "ram", label: "SRAM" },
  { key: "clock", label: "Clock Speed" },
  { key: "pins", label: "GPIO Pins" },
  { key: "voltage", label: "Operating V" },
] as const;

/* ── Section navigation cards ── */
const sections = [
  { icon: BookOpen, title: "المسار التعليمي", desc: "23 درس متدرج من الصفر للاحتراف مع أكواد حقيقية ومفاهيم جديدة لكل درس", tab: "learning" },
  { icon: Lightbulb, title: "كتالوج المشاريع", desc: "10 مشاريع تطبيقية كاملة مع أكواد جاهزة وقائمة مكونات وخطوات التنفيذ", tab: "projects" },
  { icon: Radio, title: "موسوعة الحساسات", desc: "27 قطعة إلكترونية مع مواصفات دقيقة من Datasheets حقيقية وأمثلة استخدام", tab: "sensors" },
  { icon: Terminal, title: "بيئات التطوير", desc: "5 بيئات برمجة مع خطوات التثبيت: Arduino IDE, VS Code, Thonny, Tinkercad, Wokwi", tab: "environments" },
];

/* ── Features ── */
const features = [
  { icon: Play, title: "محتوى مرئي عملي", desc: "شرح تفصيلي لكل خطوة مع تطبيق مباشر على الدائرة والأكواد" },
  { icon: Code2, title: "أكواد جاهزة ومختبرة", desc: "كل كود مكتوب على Arduino IDE حقيقياً ومضمون العمل مع زر نسخ" },
  { icon: Shield, title: "حماية القطع", desc: "نصائح حماية من الحرق واختيار المقاومات المناسبة لكل دائرة" },
  { icon: Clock, title: "متابعة التقدم", desc: "شريط تقدم مرئي يعرفك وين وصلت في المسار التعليمي" },
  { icon: Users, title: "مجتمع داعم", desc: "+5000 عضو في تليجرام جاهزون للمساعدة والإجابة على أسئلتك" },
  { icon: Award, title: "شهادات إنجاز", desc: "احصل على شهادة بعد إتمام كل وحدة تعليمية بنجاح" },
];

/* ── Quick Start CTA Buttons ── */
const ctaButtons = [
  { title: "تعلم Arduino من الصفر", desc: "23 درس متدرج من المبتدئ إلى المتقدم مع أكواد حقيقية ومفاهيم جديدة لكل درس", tab: "learning", icon: BookOpen, color: "from-emerald-500 to-green-600" },
  { title: "استكشف 10 مشاريع تطبيقية", desc: "مشاريع حقيقية كاملة مع أكواد جاهزة وقائمة مكونات وخطوات التنفيذ خطوة بخطوة", tab: "projects", icon: Lightbulb, color: "from-teal-500 to-cyan-600" },
  { title: "تعرّف على 27 قطعة إلكترونية", desc: "دليل شامل للحساسات والمشغلات مع مواصفات دقيقة من Datasheets وأمثلة استخدام", tab: "sensors", icon: Radio, color: "from-amber-500 to-orange-600" },
];

const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

export default function HomePage({ onTabChange }: Props) {
  const [hoveredBoard, setHoveredBoard] = useState<number | null>(null);

  return (
    <div className="space-y-24 pb-12">
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/30 dark:via-background dark:to-teal-950/20 border border-emerald-100/50 dark:border-emerald-900/30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/40 px-4 py-1.5">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></span>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">المنصة العربية #1 لتعلم الإلكترونيات</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.15] tracking-tight">
                تعلّم بناء مشاريع{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">إلكترونية حقيقية</span>
                {" "}من الصفر
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                مسار تعليمي متكامل بالعربية لبناء مشاريع Arduino و ESP32 و STM32.
                23 درس، 10 مشاريع تطبيقية، أكواد مختبرة، ومجتمع +5000 عضو يدعمك.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 shadow-lg shadow-emerald-600/20 transition-all gap-2 font-semibold" onClick={() => onTabChange("learning")}>
                  ابدأ التعلم مجاناً <ArrowLeftRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl px-8 gap-2 border-border/60" asChild>
                  <a href="https://t.me/Mashari3_AI_Arduino" target="_blank" rel="noopener noreferrer"><Send className="h-4 w-4" /> تابعنا على تليجرام</a>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-2 flex-wrap">
                {[
                  { icon: CheckCircle2, text: "محتوى عربي مجاني" },
                  { icon: CheckCircle2, text: "أكواد جاهزة للنسخ" },
                  { icon: CheckCircle2, text: "مجتمع داعم 24/7" },
                ].map((c, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground"><c.icon className="h-4 w-4 text-emerald-500" />{c.text}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
                <div className="relative">
                  <HeroIllustration />
                </div>
                {/* Floating badges */}
                <div className="absolute -bottom-3 -right-3 sm:bottom-4 sm:right-4 flex flex-col gap-2">
                  {[
                    { n: "23", l: "درس تعليمي" },
                    { n: "10", l: "مشروع كامل" },
                    { n: "27", l: "قطعة إلكترونية" },
                  ].map((b, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 rounded-xl px-3 py-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-center animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                      <div className="text-lg font-extrabold text-emerald-600">{b.n}</div>
                      <div className="text-[10px] text-muted-foreground font-medium">{b.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: CircuitBoard, value: 4, label: "لوحات تحكم مشروحة", suffix: "+" },
          { icon: Radio, value: 27, label: "حساس وقطعة إلكترونية", suffix: "" },
          { icon: Lightbulb, value: 10, label: "مشروع تطبيقي كامل", suffix: "" },
          { icon: Users, value: 5000, label: "عضو في مجتمعنا", suffix: "+" },
        ].map((s, i) => (
          <Card key={i} className="border-border/40 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
            <CardContent className="p-5 text-center">
              <s.icon className="h-6 w-6 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
              <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400"><Counter value={s.value} suffix={s.suffix} /></div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* ══════════ BOARDS COMPARISON — Full Specs ══════════ */}
      <section>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
            <Cpu className="h-3 w-3 ml-1" /> مواصفات تقنية حقيقية
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">لوحات التحكم — مواصفات من Datasheets</h2>
          <p className="text-muted-foreground mt-2 text-sm">قارن بين أشهر المتحكمات بمواصفاتها الحقيقية من ورقات البيانات الرسمية</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {boards.map((b, i) => (
            <motion.div key={b.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHoveredBoard(i)} onMouseLeave={() => setHoveredBoard(null)}>
              <Card className={`border-border/40 overflow-hidden transition-all duration-300 ${hoveredBoard === i ? "shadow-xl shadow-emerald-500/5 border-emerald-300 dark:border-emerald-700 -translate-y-1" : ""}`}>
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`bg-gradient-to-l ${b.color} px-5 py-4 flex items-center gap-3`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm"><b.icon className="h-5 w-5 text-white" /></div>
                    <div>
                      <h3 className="font-bold text-white text-base">{b.name}</h3>
                      <p className="text-white/70 text-xs">{b.chip}</p>
                    </div>
                    {b.wifi && <Badge className="mr-auto bg-white/20 text-white border-0 text-[10px]">Wi-Fi + BLE</Badge>}
                  </div>
                  {/* Specs Grid — 5 columns */}
                  <div className="p-5 grid grid-cols-5 gap-2">
                    {boardSpecs.map((s) => (
                      <div key={s.key} className="bg-muted/40 rounded-lg p-2 text-center">
                        <div className="text-[9px] text-muted-foreground font-medium leading-tight">{s.label}</div>
                        <div className="text-xs font-bold mt-0.5">{b[s.key as keyof typeof b]}</div>
                      </div>
                    ))}
                  </div>
                  {/* Description */}
                  <div className="px-5 pb-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ WHY US ══════════ */}
      <section className="bg-muted/30 rounded-3xl p-8 sm:p-12 border border-border/30">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">لماذا هذه المنصة مختلفة؟</h2>
          <p className="text-muted-foreground mt-2 text-sm">محتوى حقيقي، أكواد مختبرة، ومعلومات من مصادر موثوقة — وليس مجرد نسخ ولصق</p>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div key={i} variants={fade} transition={{ duration: 0.4 }}>
              <div className="flex gap-4 p-5 rounded-2xl bg-background border border-border/40 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 h-full">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
                  <f.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════ EXPLORE SECTIONS ══════════ */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">استكشف أقسام المنصة</h2>
          <p className="text-muted-foreground mt-2 text-sm">كل قسم يحتوي على محتوى حقيقي ومفيد — جاهز للتطبيق</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((s, i) => (
            <motion.div key={s.tab} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -3 }}>
              <Card className="border-border/40 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer h-full group" onClick={() => onTabChange(s.tab)}>
                <CardContent className="p-5">
                  <div className="inline-flex p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 mb-4 group-hover:scale-110 transition-transform">
                    <s.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-[15px] mb-1.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                    {s.title} <ChevronLeft className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ QUICK START CTA ═══════════ */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">ابدأ رحلتك الآن</h2>
          <p className="text-muted-foreground mt-1 text-sm">اختر ما يناسبك وابدأ التعلم فوراً — كل المحتوى مجاني ومفتوح</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ctaButtons.map((cta, i) => (
            <motion.div key={cta.tab} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -2 }}>
              <Card className="border-border/40 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer h-full overflow-hidden group" onClick={() => onTabChange(cta.tab)}>
                <CardContent className="p-5">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cta.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <cta.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm leading-relaxed mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">{cta.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{cta.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    تعلم المزيد <ChevronLeft className="h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ TECHNOLOGIES WE COVER ══════════ */}
      <section className="bg-muted/20 rounded-3xl p-8 sm:p-10 border border-border/20">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">التقنيات التي نغطيها</h2>
          <p className="text-muted-foreground text-sm">من الأساسيات إلى التطبيقات المتقدمة</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {[
            { icon: Cpu, label: "Arduino" },
            { icon: Wifi, label: "ESP32" },
            { icon: CircuitBoard, label: "STM32" },
            { icon: Zap, label: "Raspberry Pi Pico" },
            { icon: Cloud, label: "IoT" },
            { icon: Globe, label: "Web Server" },
            { icon: MonitorSmartphone, label: "Blynk App" },
            { icon: Battery, label: "Power Mgmt" },
            { icon: Pin, label: "GPIO / I2C / SPI" },
            { icon: Gauge, label: "Sensors" },
            { icon: Terminal, label: "MicroPython" },
            { icon: Code2, label: "C / C++" },
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background border border-border/30 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-0.5 transition-all duration-300">
              <tech.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-[11px] font-medium text-muted-foreground text-center">{tech.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-emerald-600 to-teal-700">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative z-10 px-6 sm:px-12 py-14 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">انضم لأكبر مجتمع عربي لتعلم الإلكترونيات</h3>
          <p className="text-white/80 max-w-xl mx-auto mb-8">+5000 عضو نشط في قنواتنا على تليجرام. مشاريع جديدة كل أسبوع، مساعدة فورية، ومحتوى حصري.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90 font-bold rounded-xl px-8 shadow-lg gap-2" asChild>
              <a href="https://t.me/Mashari3_AI_Arduino" target="_blank" rel="noopener noreferrer"><Send className="h-4 w-4" /> قناة تليجرام</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 rounded-xl px-8 gap-2" asChild>
              <a href="https://t.me/Arsuino1" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> مجموعة النقاش</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
