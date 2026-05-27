"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Download,
  Settings,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe,
  Cpu,
  Terminal,
  Sparkles,
  Star,
  Zap,
  BookOpen,
  Trophy,
  Wifi,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EnvStep {
  title: string;
  description: string;
}

interface Environment {
  id: string;
  name: string;
  nameEn: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  gradient: string;
  description: string;
  features: string[];
  steps: EnvStep[];
  requirements: string[];
  downloadUrl: string;
}

const comparisonItems = [
  {
    name: "Arduino IDE",
    label: "الأفضل للمبتدئين",
    icon: Cpu,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
  },
  {
    name: "VS Code + PlatformIO",
    label: "الأفضل للمحترفين",
    icon: Code2,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    name: "Thonny IDE",
    label: "الأفضل لـ MicroPython",
    icon: Terminal,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    name: "Tinkercad Circuits",
    label: "محاكي للتعلم بدون عتاد",
    icon: Globe,
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
  },
  {
    name: "Wokwi",
    label: "محاكي أونلاين متقدم",
    icon: Wifi,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
];

const environments: Environment[] = [
  {
    id: "arduino-ide",
    name: "Arduino IDE",
    nameEn: "Arduino IDE 2.x",
    icon: Cpu,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
    gradient: "from-teal-500 to-emerald-600",
    description:
      "بيئة التطوير الرسمية من Arduino. الأكثر سهولة للمبتدئين وتدعم جميع لوحات Arduino و ESP32.",
    features: [
      "محرر أكواد متطور مع دعم C/C++",
      "مدير اللوحات (Board Manager) لتثبيت الدعم",
      "مدير المكتبات (Library Manager) المدمج",
      "شاشة مراقبة تسلسلية (Serial Monitor)",
      "دعم التصحيح (Debugger) مع لوحات معينة",
      "مجاني ومفتوح المصدر",
    ],
    steps: [
      { title: "تحميل البرنامج", description: "قم بزيارة arduino.cc/en/software وحمّل النسخة المناسبة لنظامك (Windows/Mac/Linux). النسخة الحالية هي Arduino IDE 2.x." },
      { title: "تثبيت البرنامج", description: "شغّل ملف التثبيت واتبع الخطوات. في Windows اضغط Next ثم Install. في Mac اسحب الأيقونة لمجلد Applications." },
      { title: "إضافة دعم ESP32", description: "افتح File > Preferences، أضف الرابط https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json في خانة Additional Boards Manager URLs." },
      { title: "تثبيت لوحة ESP32", description: "افتح Tools > Board > Boards Manager، ابحث عن esp32 واضغط Install على ESP32 by Espressif Systems." },
      { title: "تثبيت المكتبات", description: "افتح Tools > Manage Libraries، ابحث عن المكتبات المطلوبة مثل DHT sensor library و Adafruit SSD1306 واضغط Install." },
      { title: "اختبار أول مشروع", description: "اختر اللوحة من Tools > Board، اختر المنفذ من Tools > Port، اكتب كود Blink واضغط Upload." },
    ],
    requirements: ["نظام Windows 10+ أو macOS 10.14+ أو Linux", "مساحة 500 ميجابايت على القرص", "منفذ USB فارغ", "لوحة Arduino أو ESP32"],
    downloadUrl: "https://www.arduino.cc/en/software",
  },
  {
    id: "vscode-platformio",
    name: "VS Code + PlatformIO",
    nameEn: "Visual Studio Code + PlatformIO",
    icon: Code2,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    gradient: "from-emerald-500 to-teal-600",
    description:
      "بيئة تطوير متقدمة باستخدام VS Code مع إضافة PlatformIO. مثالية للمشاريع الكبيرة والمحترفين.",
    features: [
      "محرر قوي مع IntelliSense وAuto-complete",
      "إدارة تبعيات (Dependencies) تلقائية",
      "دعم عشرات اللوحات والمتحكمات",
      "نظام بناء متقدم وموحد",
      "وحدة اختبار مدمجة (Unit Testing)",
      "تكامل مع Git و CI/CD",
    ],
    steps: [
      { title: "تثبيت VS Code", description: "حمّل VS Code من code.visualstudio.com وثبّته. هو محرر مجاني من Microsoft يدعم العديد من اللغات." },
      { title: "تثبيت PlatformIO", description: "افتح VS Code، اذهب إلى Extensions (Ctrl+Shift+X)، ابحث عن PlatformIO IDE واضغط Install. سيتم تثبيت Python وDependencies تلقائياً." },
      { title: "إنشاء مشروع جديد", description: "اضغط على أيقونة PlatformIO في الشريط الجانبي، اختر New Project، حدد اللوحة (مثلاً ESP32 Dev Module) واسم المشروع." },
      { title: "فهم هيكل المشروع", description: "src/main.cpp هو الملف الرئيسي. platformio.ini لإعدادات المشروع والمكتبات. lib/ للمكتبات المحلية." },
      { title: "كتابة وتحميل الكود", description: "اكتب الكود في main.cpp، اضغط ✓ للتحقق من الترجمة (Build)، أو اضغط → لتحميل الكود على اللوحة." },
      { title: "مراقبة المنفذ التسلسلي", description: "اضغط على أيقونة Serial Monitor في شريط أدوات PlatformIO لمراقبة البيانات من المتحكم." },
    ],
    requirements: ["VS Code أحدث إصدار", "اتصال إنترنت (للتحميل الأول)", "مساحة 2 جيجابايت على القرص", "Python 3.x (يُثبت تلقائياً)"],
    downloadUrl: "https://platformio.org/install",
  },
  {
    id: "thonny-micropython",
    name: "Thonny IDE",
    nameEn: "Thonny + MicroPython",
    icon: Terminal,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    gradient: "from-amber-500 to-orange-600",
    description:
      "بيئة خفيفة وسهلة لتعلم MicroPython على ESP32 و ESP8266. مثالية للمبتدئين في البرمجة.",
    features: [
      "واجهة بسيطة وسهلة الاستخدام",
      "مترجم Python مدمج ( REPL)",
      "مدير حزم (pip) مدمج",
      "دعم تحميل ملفات على المتحكم",
      "مفحص متغيرات (Inspector) مرئي",
      "دعم تصحيح الأخطاء (Debugger)",
    ],
    steps: [
      { title: "تحميل Thonny", description: "قم بزيارة thonny.org وحمّل النسخة المناسبة لنظامك. متوفر لـ Windows و Mac و Linux." },
      { title: "تحميل MicroPython Firmware", description: "من micropython.org/download/ حمّل ملف firmware لـ ESP32 أو ESP8266 (ملف .bin أو .dfu)." },
      { title: "تفليش المتحكم", description: "افتح Thonny > Tools > Options > Interpreter > MicroPython (ESP32). اختر ملف الـ firmware واضغط Install." },
      { title: "إعداد المنفذ", description: "اختر Tools > Options > Interpreter > MicroPython (ESP32) وحدد المنفذ الصحيح (COM على Windows أو /dev/ttyUSB على Linux)." },
      { title: "اختبار REPL", description: "سيظهر Shell في Thonny. اكتب print('Hello World') واضغط Enter. يجب أن يطبع النص على المتحكم." },
      { title: "تحميل ملفات", description: "اكتب كود Python في المحرر، اضغط File > Save As واختر MicroPython device لحفظه مباشرة على المتحكم كـ main.py." },
    ],
    requirements: ["ESP32 أو ESP8266", "كابل USB (Micro USB أو USB-C)", "اتصال إنترنت لتحميل المكتبات", "حواسيب بسيط - لا يحتاج موارد عالية"],
    downloadUrl: "https://thonny.org",
  },
  {
    id: "tinkercad",
    name: "Tinkercad Circuits",
    nameEn: "Tinkercad Circuits",
    icon: Globe,
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
    gradient: "from-sky-500 to-cyan-600",
    description:
      "محاكي إلكترونيات عبر المتصفح من Autodesk. لا يحتاج أي لوحة حقيقية - كل شيء افتراضي عبر الإنترنت.",
    features: [
      "محاكي كامل عبر المتصفح - لا تثبيت",
      "دعم Arduino ومدة محاكاة فورية",
      "مكتبة واسعة من المكونات",
      "لوحة تجارب افتراضية",
      "عرض الكود أثناء المحاكاة",
      "مشاركة المشاريع مع الآخرين",
    ],
    steps: [
      { title: "إنشاء حساب", description: "زر tinkercad.com وأنشئ حساب مجاني عبر حساب Google أو Autodesk. الخدمة مجانية تماماً." },
      { title: "إنشاء دائرة جديدة", description: "من لوحة التحكم اضغط Circuits > Create new Circuit. ستفتح لوحة تجارب افتراضية فارغة." },
      { title: "إضافة المكونات", description: "من قائمة المكونات على اليمين، اسحب Arduino Uno وLED ومقاومة وBreadboard إلى لوحة التجارب." },
      { title: "التوصيل", description: "انقر على طرف أي مكون واسحب إلى طرف آخر لإنشاء سلك التوصيل. الألوان تتغير تلقائياً." },
      { title: "كتابة الكود", description: "اضغط على Arduino ثم Code. اكتب كود Blink في المحرر المدمج أو استخدم Code Blocks للبرمجة المرئية." },
      { title: "بدء المحاكاة", description: "اضغط زر Start Simulation. سترى LED يومض ويمكنك مراقبة Serial Monitor والتحكم بالدائرة." },
    ],
    requirements: ["متصفح حديث (Chrome/Firefox/Edge)", "اتصال إنترنت مستقر", "حساب Autodesk مجاني", "لا يحتاج أي عتاد حقيقي"],
    downloadUrl: "https://www.tinkercad.com/circuits",
  },
  {
    id: "wokwi",
    name: "Wokwi",
    nameEn: "Wokwi Online Simulator",
    icon: Globe,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    gradient: "from-orange-500 to-red-600",
    description:
      "محاكي أونلاين لمشاريع Arduino و ESP32 و Raspberry Pi Pico. لا يحتاج أي تثبيت — يعمل مباشرة من المتصفح مع دعم كامل لمكتبات Arduino الشائعة.",
    features: [
      "محاكي كامل عبر المتصفح — لا تثبيت",
      "يدعم Arduino, ESP32, RP2040, STM32",
      "مكتبة واسعة من المكونات الافتراضية",
      "دعم مخططات SPI و I2C",
      "مشاريع جاهزة للتعلم والتجريب",
      "تكامل مع GitHub لحفظ المشاريع",
    ],
    steps: [
      { title: "فتح الموقع", description: "زر wokwi.com من متصفحك. لا يحتاج تسجيل أو تثبيت. الموقع مجاني بالكامل." },
      { title: "إنشاء مشروع جديد", description: "اضغط Create New Project. اختر نوع اللوحة (Arduino Uno أو ESP32 أو Raspberry Pi Pico)." },
      { title: "إضافة المكونات", description: "من قائمة المكونات الافتراضية، أضف LEDs, buttons, sensors, displays. كل مكون له توصيلات مرئية واضحة." },
      { title: "كتابة الكود", description: "اكتب كود Arduino في المحرر المدمج. يدعم syntax highlighting و auto-complete." },
      { title: "تشغيل المحاكاة", description: "اضغط زر Run. ستشاهد المحاكاة تعمل مباشرة مع تأثيرات مرئية حقيقية." },
      { title: "حفظ المشاريع", description: "احفظ مشاريعك بحساب GitHub. شاركها مع الآخرين عبر رابط مباشر." },
    ],
    requirements: ["متصفح حديث (Chrome/Firefox/Edge)", "اتصال إنترنت مستقر", "حساب GitHub اختياري لحفظ المشاريع", "لا يحتاج أي عتاد حقيقي"],
    downloadUrl: "https://wokwi.com",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function EnvironmentsPage() {
  const [expandedEnv, setExpandedEnv] = useState<string>("arduino-ide");

  return (
    <div className="space-y-12 pb-8">
      {/* Header */}
      <section className="text-center">
        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
          <Monitor className="h-3.5 w-3.5 ml-1" />
          5 بيئات تطوير
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          بيئات البرمجة والتطوير
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          تعرّف على أشهر بيئات البرمجة المستخدمة في مشاريع المتحكمات
          الدقيقة مع خطوات التثبيت والإعداد
        </p>
      </section>

      {/* Quick Comparison */}
      <section className="max-w-4xl mx-auto">
        <Card className="border-border/50 bg-muted/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              مقارنة سريعة — أي بيئة تناسبك؟
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {comparisonItems.map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center gap-2.5 p-3 rounded-xl ${item.bgColor} border border-border/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                >
                  <div className={`${item.color} shrink-0`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Environments */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {environments.map((env) => {
          const isExpanded = expandedEnv === env.id;
          const isNoInstall =
            env.id === "tinkercad" || env.id === "wokwi";

          return (
            <motion.div key={env.id} variants={item}>
              <Card className="border-border/50 overflow-hidden hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                <button
                  onClick={() => setExpandedEnv(isExpanded ? null : env.id)}
                  className="w-full text-right"
                >
                  <CardHeader className="pb-4 hover:bg-muted/30 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${env.gradient} text-white shrink-0 shadow-lg`}
                      >
                        <env.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <CardTitle className="text-lg">
                            {env.name}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {env.nameEn}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {env.description}
                        </CardDescription>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>{env.steps.length} خطوات</span>
                          <span>{env.features.length} مميزات</span>
                          <span className="flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            {isNoInstall ? "بدون تثبيت" : "تحميل مجاني"}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                </button>

                {isExpanded && (
                  <CardContent className="pt-0 pb-6 px-6">
                    <div className="border-t border-border/50 pt-4 space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          المميزات الرئيسية
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {env.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 p-2.5 rounded-lg bg-muted/30"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Setup Steps */}
                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <Settings className="h-4 w-4 text-primary" />
                          خطوات التثبيت والإعداد
                        </h4>
                        <div className="space-y-3">
                          {env.steps.map((step, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl bg-muted/30 border border-border/30"
                            >
                              <div className="flex items-start gap-3">
                                <div className="flex h-7 w-7 rounded-full bg-primary/10 text-primary items-center justify-center text-sm font-bold shrink-0">
                                  {idx + 1}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm mb-1">
                                    {step.title}
                                  </h5>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Requirements & Download */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Card className="flex-1 border-border/30">
                          <CardContent className="p-4">
                            <h5 className="font-semibold text-sm mb-2">
                              المتطلبات
                            </h5>
                            <ul className="space-y-1">
                              {env.requirements.map((req, i) => (
                                <li
                                  key={i}
                                  className="text-xs text-muted-foreground flex items-start gap-1.5"
                                >
                                  <span className="text-primary mt-0.5">•</span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                        <div className="flex items-center">
                          <Button
                            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                            asChild
                          >
                            <a
                              href={env.downloadUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="h-4 w-4" />
                              {isNoInstall ? "فتح الموقع" : `تحميل ${env.name}`}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.section>
    </div>
  );
}
