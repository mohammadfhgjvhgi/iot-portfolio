"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "@/components/ui/command";
import { BookOpen, Lightbulb, Radio, Terminal, HelpCircle, Info, Cpu, Wrench, Wifi, Code2, Phone, Calculator, ShoppingBag } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import SiteHeader from "@/components/platform/SiteHeader";
import SiteFooter from "@/components/platform/SiteFooter";
import AnimatedBackground from "@/components/platform/AnimatedBackground";
import HomePage from "@/components/platform/HomePage";
import LearningPathPage from "@/components/platform/LearningPathPage";
import ProjectsPage from "@/components/platform/ProjectsPage";
import SensorsPage from "@/components/platform/SensorsPage";
import EnvironmentsPage from "@/components/platform/EnvironmentsPage";
import StarterKitPage from "@/components/platform/StarterKitPage";
import SupportPage from "@/components/platform/SupportPage";
import AboutPage from "@/components/platform/AboutPage";
import CalculatorPage from "@/components/platform/CalculatorPage";

const t = { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }, exit: { opacity: 0, transition: { duration: 0.15 } } };

interface SearchItem {
  id: string;
  title: string;
  description: string;
  tab: string;
  group: string;
}

const searchData: SearchItem[] = [
  // الصفحة الرئيسية
  { id: "home", title: "الصفحة الرئيسية", description: "نظرة عامة على المنصة والمحتوى", tab: "home", group: "الأقسام" },
  // المسار التعليمي - 23 درس
  { id: "m1-0", title: "ما هي المتحكمات الدقيقة (MCU)؟", description: "الوحدة 1: مقدمة في الأنظمة المدمجة", tab: "learning", group: "المسار التعليمي" },
  { id: "m1-1", title: "مقارنة لوحات التحكم الشائعة", description: "Arduino Uno, ESP32, STM32, Pi Pico", tab: "learning", group: "المسار التعليمي" },
  { id: "m1-2", title: "الجهد والتيار والمقاومة — قانون أوم", description: "حساب المقاومات والقدرة المبددة", tab: "learning", group: "المسار التعليمي" },
  { id: "m1-3", title: "Breadboard والتوصيل الأساسي", description: "أول دائرة: LED يومض + Blink", tab: "learning", group: "المسار التعليمي" },
  { id: "m2-0", title: "هيكل setup() و loop()", description: "الوحدة 2: البرمجة بـ Arduino/C++", tab: "learning", group: "المسار التعليمي" },
  { id: "m2-1", title: "Digital I/O — المداخل والمخارج الرقمية", description: "pinMode, digitalWrite, digitalRead", tab: "learning", group: "المسار التعليمي" },
  { id: "m2-2", title: "Analog و PWM", description: "analogRead, analogWrite, التحكم بالسطوع", tab: "learning", group: "المسار التعليمي" },
  { id: "m2-3", title: "الشروط والحلقات", description: "if/else, for, while, debounce", tab: "learning", group: "المسار التعليمي" },
  { id: "m2-4", title: "Serial Monitor", description: "المراقبة والتصحيح عبر المنفذ التسلسلي", tab: "learning", group: "المسار التعليمي" },
  { id: "m2-5", title: "المكتبات — Library Manager", description: "Servo.h, DHT.h, تثبيت المكتبات", tab: "learning", group: "المسار التعليمي" },
  { id: "m3-0", title: "HC-SR04 — قياس المسافة", description: "الوحدة 3: الحساسات والمشغلات", tab: "learning", group: "المسار التعليمي" },
  { id: "m3-1", title: "DHT11/22 — الحرارة والرطوبة", description: "مكتبة Adafruit DHT", tab: "learning", group: "المسار التعليمي" },
  { id: "m3-2", title: "PIR HC-SR501 — كشف الحركة", description: "الأشعة تحت الحمراء", tab: "learning", group: "المسار التعليمي" },
  { id: "m3-3", title: "Servo Motor — التحكم بالزاوية", description: "مشروع رادار مع HC-SR04", tab: "learning", group: "المسار التعليمي" },
  { id: "m3-4", title: "DC Motor + L298N", description: "H-Bridge, PWM, التحكم بالاتجاه", tab: "learning", group: "المسار التعليمي" },
  { id: "m4-0", title: "Smart Home بالـ ESP32", description: "الوحدة 4: مشاريع تطبيقية", tab: "learning", group: "المسار التعليمي" },
  { id: "m4-1", title: "محطة طقس IoT بـ ThingSpeak", description: "إرسال بيانات للحطة السحابية", tab: "learning", group: "المسار التعليمي" },
  { id: "m4-2", title: "Line Follower — روبوت متتبع الخط", description: "خوارزمية PID", tab: "learning", group: "المسار التعليمي" },
  { id: "m4-3", title: "Obstacle Avoidance — تجنب العقبات", description: "مسح زاوي 180°", tab: "learning", group: "المسار التعليمي" },
  { id: "m5-0", title: "WiFi بـ ESP32", description: "الوحدة 5: إنترنت الأشياء IoT", tab: "learning", group: "المسار التعليمي" },
  { id: "m5-1", title: "Blynk App — التحكم عن بعد", description: "Virtual Pins, BlynkSimpleEsp32", tab: "learning", group: "المسار التعليمي" },
  { id: "m5-2", title: "MQTT — أساسيات البروتوكول", description: "Publish/Subscribe, HiveMQ", tab: "learning", group: "المسار التعليمي" },
  { id: "m5-3", title: "Web Server محلي على ESP32", description: "Access Point Mode, HTML", tab: "learning", group: "المسار التعليمي" },
  // المشاريع - 10 مشاريع
  { id: "proj-0", title: "مصباح LED ذكي بالبلوتوث", description: "مشروع مبتدئ — Arduino Uno + HC-05", tab: "projects", group: "المشاريع" },
  { id: "proj-1", title: "نظام ري تلقائي", description: "مشروع مبتدئ — Arduino + حساس رطوبة التربة", tab: "projects", group: "المشاريع" },
  { id: "proj-2", title: "نظام إنذار حريق", description: "مشروع متوسط — Arduino + MQ-2 + Buzzer", tab: "projects", group: "المشاريع" },
  { id: "proj-3", title: "عداد الزوار بالأشعة تحت الحمراء", description: "مشروع متوسط — Arduino + PIR + OLED", tab: "projects", group: "المشاريع" },
  { id: "proj-4", title: "روبوت متتبع الخط", description: "مشروع متقدم — 2× IR + L298N", tab: "projects", group: "المشاريع" },
  { id: "proj-5", title: "محطة طقس IoT", description: "مشروع متقدم — ESP32 + DHT22 + ThingSpeak", tab: "projects", group: "المشاريع" },
  { id: "proj-6", title: "مرآة ذكية مع OLED", description: "مشروع متقدم — ESP32 + OLED + NTP", tab: "projects", group: "المشاريع" },
  { id: "proj-7", title: "قفل بالبصمة", description: "مشروع متقدم — ESP32 + Fingerprint + Servo", tab: "projects", group: "المشاريع" },
  { id: "proj-8", title: "نظام مراقبة بالكاميرا", description: "مشروع متقدم — ESP32-CAM + Blynk", tab: "projects", group: "المشاريع" },
  { id: "proj-9", title: "سيارة تحكم عن بعد بالواي فاي", description: "مشروع متقدم — ESP32 + Web Server + L298N", tab: "projects", group: "المشاريع" },
  // الحساسات
  { id: "sensors", title: "موسوعة الحساسات", description: "27 قطعة إلكترونية مع مواصفات دقيقة", tab: "sensors", group: "الأقسام" },
  { id: "s-dht22", title: "DHT22 — حساس الحرارة والرطوبة", description: "±0.5°C, I2C, 3.3-5V", tab: "sensors", group: "الحساسات" },
  { id: "s-hcsr04", title: "HC-SR04 — حساس الموجات فوق الصوتية", description: "قياس المسافة 2-400cm", tab: "sensors", group: "الحساسات" },
  { id: "s-pir", title: "PIR HC-SR501 — كشف الحركة", description: "الأشعة تحت الحمراء", tab: "sensors", group: "الحساسات" },
  { id: "s-mq2", title: "MQ-2 — حساس الغاز والدخان", description: "كشف الغازات القابلة للاشتعال", tab: "sensors", group: "الحساسات" },
  { id: "s-ldr", title: "LDR — مقاومة ضوئية", description: "قياس شدة الضوء", tab: "sensors", group: "الحساسات" },
  // الأقسام الأخرى
  { id: "calculator", title: "الآلة الحاسبة الإلكترونية", description: "قانون أوم، مقاومة LED، مقسم الجهد، تحويل وحدات", tab: "calculator", group: "الأدوات" },
  { id: "environments", title: "بيئات البرمجة", description: "Arduino IDE, VS Code, Thonny, Tinkercad, Wokwi", tab: "environments", group: "الأقسام" },
  { id: "starterkit", title: "أطقم البدء", description: "أطقم المكونات الإلكترونية (مبتدئ، متوسط، متقدم)", tab: "starterkit", group: "الأقسام" },
  { id: "sk-1", title: "طقم المبتدئ ($20-25)", description: "Arduino UNO + حساسات أساسية + Breadboard", tab: "starterkit", group: "أطقم البدء" },
  { id: "sk-2", title: "طقم المتوسط ($55-65)", description: "ESP32 + HC-SR04 + OLED + Relay + Motor", tab: "starterkit", group: "أطقم البدء" },
  { id: "sk-3", title: "طقم المتقدم ($95-115)", description: "ESP32-CAM + RFID + MPU6050 + WS2812B", tab: "starterkit", group: "أطقم البدء" },
  { id: "support", title: "الدعم الفني", description: "تواصل معنا + الأسئلة الشائعة", tab: "support", group: "الأقسام" },
  { id: "about", title: "من نحن", description: "عن المنصة والمؤسسين", tab: "about", group: "الأقسام" },
];

const groupIcons: Record<string, React.ReactNode> = {
  "الأقسام": <Cpu className="h-4 w-4" />,
  "الأدوات": <Calculator className="h-4 w-4" />,
  "المسار التعليمي": <BookOpen className="h-4 w-4" />,
  "المشاريع": <Lightbulb className="h-4 w-4" />,
  "الحساسات": <Radio className="h-4 w-4" />,
  "أطقم البدء": <ShoppingBag className="h-4 w-4" />,
};

export default function Home() {
  const [tab, setTab] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((id: string) => {
    setTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
  }, []);

  /* ── Loading skeleton timer ── */
  useEffect(() => {
    if (loading) {
      if (loadingTimer.current) clearTimeout(loadingTimer.current);
      loadingTimer.current = setTimeout(() => setLoading(false), 300);
    }
    return () => {
      if (loadingTimer.current) clearTimeout(loadingTimer.current);
    };
  }, [tab]);

  /* ── Ctrl+K search shortcut ── */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  /* ── Scroll handlers ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      setShowScrollTop(scrollTop > 300);
      setScrollProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* ── Skeleton components ── */
  const HomeSkeleton = () => (
    <div className="space-y-6 animate-pulse">
      <Skeleton className="h-12 w-64 rounded-lg" />
      <Skeleton className="h-4 w-96" />
      <Skeleton className="h-4 w-80" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-48 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
      </div>
    </div>
  );

  const ContentSkeleton = ({ lines = 3, cards = 4 }: { lines?: number; cards?: number }) => (
    <div className="space-y-6 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={i === 0 ? "h-10 w-56 rounded-lg" : "h-4 w-full max-w-2xl"} />
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: cards }).map((_, i) => (
          <Skeleton key={i} className="h-44 rounded-xl" />
        ))}
      </div>
    </div>
  );

  const getSkeleton = () => {
    if (tab === "home") return <HomeSkeleton />;
    if (["learning", "projects", "sensors"].includes(tab)) return <ContentSkeleton lines={3} cards={4} />;
    return <ContentSkeleton lines={2} cards={2} />;
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* ═══ Reading Progress Bar ═══ */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-l from-emerald-500 to-teal-500 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <SiteHeader activeTab={tab} onTabChange={go} onSearchOpen={() => setSearchOpen(true)} />
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
            <AnimatePresence mode="wait">
              <motion.div key={tab} variants={t} initial="initial" animate="animate" exit="exit">
                {loading ? getSkeleton() : (
                  <>
                    {tab === "home" && <HomePage onTabChange={go} />}
                    {tab === "learning" && <LearningPathPage />}
                    {tab === "projects" && <ProjectsPage />}
                    {tab === "sensors" && <SensorsPage />}
                    {tab === "calculator" && <CalculatorPage />}
                    {tab === "environments" && <EnvironmentsPage />}
                    {tab === "starterkit" && <StarterKitPage />}
                    {tab === "support" && <SupportPage />}
                    {tab === "about" && <AboutPage />}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <SiteFooter onTabChange={go} />
      </div>

      {/* ═══ Search Dialog ═══ */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen} title="بحث" description="ابحث في المنصة">
        <CommandInput placeholder="ابحث عن درس، مشروع، أو حساس..." />
        <CommandList>
          <CommandEmpty>لا توجد نتائج.</CommandEmpty>
          {(() => {
            const groups = [...new Set(searchData.map((item) => item.group))];
            return groups.map((group, idx) => (
              <span key={group}>
                {idx > 0 && <CommandSeparator />}
                <CommandGroup heading={group}>
                  {searchData
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <CommandItem
                        key={item.id}
                        value={`${item.title} ${item.description}`}
                        onSelect={() => {
                          go(item.tab);
                          setSearchOpen(false);
                        }}
                        className="flex-row-reverse text-right"
                      >
                        <span className="ml-2 text-muted-foreground">{groupIcons[item.group]}</span>
                        <div>
                          <div className="font-medium text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>
              </span>
            ));
          })()}
        </CommandList>
      </CommandDialog>

      {/* ═══ WhatsApp Floating Button ═══ */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "#25D366" }}
            aria-label="تواصل معنا عبر واتساب"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-20" style={{ backgroundColor: "#25D366" }} />
            <MessageCircle className="h-6 w-6 text-white relative z-10" />
          </button>
        </PopoverTrigger>
        <PopoverContent side="left" align="end" className="w-72 p-0">
          <div className="px-4 py-3 border-b border-border/20">
            <h4 className="font-bold text-sm">تواصل عبر واتساب</h4>
            <p className="text-[11px] text-muted-foreground">اختر المهندس للتواصل المباشر</p>
          </div>
          <div className="p-2">
            <a
              href="https://wa.me/972569303043"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: "#25D366" }}>
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs">المهندس محمد عادل العقيلي</p>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5" dir="ltr"><Phone className="h-3 w-3" />+972 56-930-3043</p>
              </div>
            </a>
            <a
              href="https://wa.me/972568673748"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: "#25D366" }}>
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs">المهندس عمار محمد مشارقة</p>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5" dir="ltr"><Phone className="h-3 w-3" />+972 56-867-3748</p>
              </div>
            </a>
          </div>
        </PopoverContent>
      </Popover>

      {/* ═══ Scroll to Top Button ═══ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="h-11 w-11 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all"
              aria-label="العودة لأعلى الصفحة"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
