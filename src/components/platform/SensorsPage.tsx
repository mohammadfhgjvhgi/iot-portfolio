"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Thermometer,
  Radio,
  Eye,
  Sun,
  Wind,
  Droplets,
  Activity,
  RotateCcw,
  Zap,
  Volume2,
  Monitor,
  Layers,
  CircleDot,
  RectangleHorizontal,
  Grid,
  Tv,
  Cpu,
  Gauge,
  Compass,
  Sparkles,
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DatasheetRow {
  param: string;
  value: string;
  unit: string;
  notes: string;
}

interface ComponentEntry {
  name: string;
  nameAr: string;
  icon: React.ElementType;
  description: string;
  specs: string[];
  usage: string[];
  datasheet?: DatasheetRow[];
}

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  items: ComponentEntry[];
}

const categories: Category[] = [
  {
    id: "sensors",
    name: "الحساسات",
    icon: Radio,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    items: [
      {
        name: "DHT11",
        nameAr: "حساس الحرارة والرطوبة",
        icon: Thermometer,
        description: "حساس رقمي لقياس درجة الحرارة والرطوبة النسبية. سهل الاستخدام ومناسب للمشاريع المبتدئة، يحتوي على عنصر قياس مزدوج في غلاف بلاستيكي.",
        specs: [
          "جهد العمل: 3.3-5V DC",
          "نطاق القياس: 0-50°C حرارة، 20-90% رطوبة",
          "الدقة: ±2°C حرارة، ±5% رطوبة",
          "نوع الخرج: Digital (بروتوكول واحد-سلك)",
          "تردد العينة: 1 Hz (قراءة كل ثانية)",
        ],
        usage: ["محطات الطقس المنزلية", "أنظمة التكييف التلقائية", "البيوت المحمية الزراعية"],
        datasheet: [
          { param: "الدقة (الحرارة)", value: "±0.5", unit: "°C", notes: "نطاق مثالي 0-50°C" },
          { param: "نطاق الحرارة", value: "-40~80", unit: "°C", notes: "العملية -40~80°C" },
          { param: "نطاق الرطوبة", value: "0-100", unit: "%", notes: "الخطية 10-90%" },
          { param: "الجهد", value: "3.3-5", unit: "V", notes: "DC" },
          { param: "البروتوكول", value: "One-wire", unit: "", notes: "بروتوكول خاص DHT" },
          { param: "الدقة (الرطوبة)", value: "±2", unit: "%", notes: "في النطاق 0-100%" },
          { param: "فترة القراءة", value: "2", unit: "ثانية", notes: "أقل فترة بين القراءات" },
        ],
      },
      {
        name: "HC-SR04",
        nameAr: "حساس الموجات فوق الصوتية",
        icon: Radio,
        description: "حساس لقياس المسافة باستخدام الموجات فوق الصوتية. يرسل نبضة 40kHz ويستقبل الصدى لحساب المسافة بالزمن.",
        specs: [
          "جهد العمل: 5V DC",
          "نطاق القياس: 2-400 سم",
          "الدقة: ±3 مم",
          "نوع الخرج: Digital Pulse (ECHO pin)",
          "زاوية القياس: 15° مؤثرة",
          "تردد العمل: 40 kHz",
        ],
        usage: ["روبوتات تجنب العقبات", "أنظمة ركن السيارات", "عداد المسافات الذكي"],
        datasheet: [
          { param: "المدى", value: "2-400", unit: "cm", notes: "2cm كحد أدنى" },
          { param: "الدقة", value: "±3", unit: "mm", notes: "تتأثر بالحرارة" },
          { param: "زاوية القياس", value: "15", unit: "°", notes: "زاوية مؤثرة" },
          { param: "جهد العمل", value: "5", unit: "V", notes: "DC" },
          { param: "تيار الاستهلاك", value: "15", unit: "mA", notes: "أثناء القياس" },
          { param: "التردد", value: "40", unit: "kHz", notes: "الموجات فوق الصوتية" },
        ],
      },
      {
        name: "PIR",
        nameAr: "حساس الحركة بالأشعة تحت الحمراء",
        icon: Eye,
        description: "حساس يكشف الحركة البشرية بناءً على التغيرات في الأشعة تحت الحمراء المنبعثة. مثالي لأنظمة الأمان والإضاءة التلقائية.",
        specs: [
          "جهد العمل: 5-20V DC",
          "نطاق الكشف: حتى 7 متر",
          "زاوية الكشف: 120°",
          "نوع الخرج: Digital (HIGH/LOW)",
          "تأخير قابل للتعديل: 0.3s - 18s",
          "وقت الاستقرار: ~30 ثانية عند التشغيل",
        ],
        usage: ["إنارة تلقائية للحدائق", "أنظمة إنذار منزلية", "كاميرات مراقبة ذكية"],
        datasheet: [
          { param: "زاوية الرصد", value: "110", unit: "°", notes: "الرصد الفعال" },
          { param: "المدى", value: "3-7", unit: "m", notes: "قابل للتعديل" },
          { param: "جهد العمل", value: "4.5-20", unit: "V", notes: "DC" },
          { param: "وقت التسخين", value: "30", unit: "ثانية", notes: "عند التشغيل الأول" },
          { param: "تأخير الخرج", value: "2-200", unit: "ثانية", notes: "قابل للتعديل بالنبّاض" },
        ],
      },
      {
        name: "LDR",
        nameAr: "مقاومة ضوئية",
        icon: Sun,
        description: "مقاومة تتغير قيمتها حسب شدة الضوء المحيط. كلما زاد الضوء قلّت المقاومة والعكس. تحتاج دائرة مقسم جهد لقراءة قيمتها.",
        specs: [
          "جهد العمل: عادة 5V عبر مقسم جهد",
          "نطاق المقاومة: 10 KΩ (مضاء) - 1 MΩ (مظلم)",
          "الدقة: تعتمد على ADC المستخدم (عادة 10-bit)",
          "نوع الخرج: Analog (تناظري)",
          "وقت الاستجابة: 20-30 ms",
          "الحد الأقصى للطاقة: 150 mW",
        ],
        usage: ["إضاءة ليلية تلقائية", "مراقب شدة الإضاءة الشمسية", "روبوتات متتبعة الضوء"],
      },
      {
        name: "MQ-2",
        nameAr: "حساس الغاز والدخان",
        icon: Wind,
        description: "حساس كشف الغازات القابلة للاشتعال والدخان. يحتوي على عنصر تسخين داخلي وطبقة حساسة من أكسيد القصدير.",
        specs: [
          "جهد العمل: 5V DC",
          "نطاق الكشف: 300-10000 ppm",
          "الدقة: تعتمد على المعايرة (تحتاج مقارنة مع مصدر مرجعي)",
          "نوع الخرج: Analog + Digital (مع مقارن LM393)",
          "وقت التسخين الأولي: 20-30 ثانية",
          "كشف: الغاز الطبيعي، البروبان، الميثان، الدخان",
        ],
        usage: ["كاشف تسرب الغاز المنزلي", "أنظمة إنذار حريق", "مراقب جودة الهواء الداخلي"],
        datasheet: [
          { param: "الغازات المكتشفة", value: "LPG, CO, Smoke", unit: "", notes: "غازات قابلة للاشتعال" },
          { param: "جهد العمل", value: "5", unit: "V", notes: "DC" },
          { param: "خرج تناظري", value: "0-5", unit: "V", notes: "عبر ADC" },
          { param: "وقت التسخين", value: "20", unit: "ثانية", notes: "التسخين الأولي" },
          { param: "الحساسية", value: "300-10000", unit: "ppm", notes: "حسب نوع الغاز" },
        ],
      },
      {
        name: "Soil Moisture",
        nameAr: "حساس رطوبة التربة",
        icon: Droplets,
        description: "حساس يقيس محتوى الرطوبة في التربة باستخدام مبدأ التوصيلية الكهربائية. الأقطاب المغمورة تكتسب مقاومة تتناسب مع الجفاف.",
        specs: [
          "جهد العمل: 3.3-5V DC",
          "نطاق الخرج التناظري: 0-1023 (10-bit ADC)",
          "الدقة: تعتمد على نوع التربة ونوع الحساس",
          "نوع الخرج: Analog (تناظري)",
          "الأبعاد: 60×20 مم",
          "مادة الأقطاب: سيراميك مقاوم للتآكل أو نحاس مطلّي",
        ],
        usage: ["أنظمة الري التلقائي الذكي", "مراقبة النباتات المنزلية", "البيوت المحمية الزراعية"],
      },
      {
        name: "IR Sensor",
        nameAr: "حساس الأشعة تحت الحمراء",
        icon: Activity,
        description: "حساس يعمل كمستقبل/مرسل للأشعة تحت الحمراء. يُستخدم لاكتشاف الخطوط والعوائق القريبة. يحتوي على مقارن LM393 وعداد مقاومة للتعديل.",
        specs: [
          "جهد العمل: 3.3-5V DC",
          "نطاق الكشف: 2-30 سم (قابل للتعديل بالنبّاض)",
          "الدقة: اكتشاف ثنائي (وجود/غياب)",
          "نوع الخرج: Digital (HIGH/LOW)",
          "التردد: 38 kHz",
          "يمثل LED بالأشعة تحت الحمراء + مستقبل TSOP",
        ],
        usage: ["روبوت متتبع الخطوط", "عداد القطع على خط الإنتاج", "أنظمة الفرامل في الروبوتات"],
      },
      {
        name: "BMP280",
        nameAr: "حساس الضغط الجوي ودرجة الحرارة",
        icon: Gauge,
        description: "حساس دقيق للضغط الجوي ودرجة الحرارة من Bosch. يُستخدم في محطات الطقس وتقدير الارتفاع عن سطح البحر.",
        specs: [
          "جهد العمل: 1.71-3.6V DC",
          "نطاق الضغط: 300-1100 hPa (9000م - -500م فوق سطح البحر)",
          "دقة الضغط: ±1 hPa (دقة ارتفاع ±0.85م)",
          "دقة الحرارة: ±1°C",
          "نوع الخرج: I2C (عنوان 0x76/0x77) أو SPI (4 أسلاك)",
          "الاستهلاك: 2.7 µA في وضع السكون",
        ],
        usage: ["محطات الطقس المحمولة", "تقدير الارتفاع في الطائرات الصغيرة (Drones)", "أنظمة تنبؤات الطقس الذكية"],
        datasheet: [
          { param: "المدى", value: "300-1100", unit: "hPa", notes: "9000م - -500م فوق سطح البحر" },
          { param: "دقة الضغط", value: "±1", unit: "hPa", notes: "دقة ارتفاع ±0.85م" },
          { param: "دقة الحرارة", value: "±1", unit: "°C", notes: "في النطاق المثالي" },
          { param: "البروتوكول", value: "I2C/SPI", unit: "", notes: "عنوان 0x76/0x77" },
          { param: "الجهد", value: "1.8-3.6", unit: "V", notes: "DC" },
          { param: "الدقة", value: "0.01", unit: "hPa", notes: "أدنى خطوة قابلة للقراءة" },
        ],
      },
      {
        name: "MPU6050",
        nameAr: "حساس التسارع والجيروسكوب",
        icon: Compass,
        description: "وحدة قياس بالقصور الذاتي (IMU) تجمع بين مقياس تسارع 3 محاور وجيروسكوب 3 محاور في شريحة واحدة.",
        specs: [
          "جهد العمل: 2.375-3.46V DC",
          "نطاق التسارع: ±2g / ±4g / ±8g / ±16g (قابل للاختيار)",
          "نطاق الجيروسكوب: ±250 / ±500 / ±1000 / ±2000 °/s",
          "الدقة: 16-bit ADC لكل محور",
          "نوع الخرج: I2C (عنوان 0x68/0x69)",
          "ميزة DMP: معالج رقمي داخلي لحساب الكواتيرنيونات",
        ],
        usage: ["توازن الروبوتات ذات العجلتين", "طائرات الدرون والتوجيه الذاتي", "أنظمة تتبع الحركة في الـ VR"],
        datasheet: [
          { param: "التسارع", value: "±16", unit: "g", notes: "قابل للاختيار ±2/4/8/16g" },
          { param: "الجيروسكوب", value: "±2000", unit: "°/s", notes: "قابل للاختيار ±250/500/1000/2000°/s" },
          { param: "ADC", value: "16", unit: "bit", notes: "لكل محور" },
          { param: "البروتوكول", value: "I2C", unit: "", notes: "عنوان 0x68/0x69" },
          { param: "الجهد", value: "2.375-3.46", unit: "V", notes: "DC" },
          { param: "DMP", value: "نعم", unit: "", notes: "معالج رقمي داخلي للكواتيرنيونات" },
        ],
      },
    ],
  },
  {
    id: "actuators",
    name: "المشغلات",
    icon: Zap,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
    items: [
      {
        name: "SG90",
        nameAr: "محرك سيرفو صغير",
        icon: RotateCcw,
        description: "محرك سيرفو صغير يمكن التحكم بزواياه بدقة (0-180°). مثالي للمشاريع التي تحتاج حركة دقيقة محدودة النطاق.",
        specs: [
          "جهد العمل: 4.8-6V DC",
          "نطاق الدوران: 0-180° (±90°)",
          "الدقة: ~10° خطوة (تعتمد على PWM)",
          "نوع الخرج: إشارة PWM (50 Hz، عرض نبضة 1-2ms)",
          "عزم الدوران: 1.8 kg/cm عند 4.8V",
          "السرعة: 0.1 ثانية/60° عند 4.8V",
        ],
        usage: ["ذراع روبوت صغير", "رادار مسح دوار", "أبواب تلقائية للقفص الحيواني"],
        datasheet: [
          { param: "عزم الدوران", value: "1.8", unit: "kg/cm", notes: "عند 4.8V" },
          { param: "زاوية الدوران", value: "0-180", unit: "°", notes: "±90° من المركز" },
          { param: "السرعة", value: "0.1", unit: "s/60°", notes: "عند 4.8V" },
          { param: "الجهد", value: "4.8-6", unit: "V", notes: "DC" },
          { param: "الوزن", value: "9", unit: "g", notes: "بدون الأسلاك" },
        ],
      },
      {
        name: "DC Motor",
        nameAr: "محرك تيار مستمر",
        icon: Zap,
        description: "محرك يولد حركة دورانية عند تمرير تيار كهربائي. سرعته تتناسب مع الجهد الكهربائي واتجاهه يعكس بعكس القطبية.",
        specs: [
          "جهد العمل: 3V / 6V / 12V (حسب النوع)",
          "السرعة: 1000-12000 RPM (حسب النوع والحمل)",
          "الدقة: لا يمكن التحكم بالموضع مباشرة",
          "نوع التحكم: L298N أو L293D أو MOSFET",
          "عزم الدوران: يتناسب طردياً مع التيار",
          "التيار: 100mA - 2A حسب الحجم",
        ],
        usage: ["سيارات التحكم عن بُعد", "مراوح تبريد متغيرة السرعة", "مضخات المياه الزراعية"],
      },
      {
        name: "L298N",
        nameAr: "وحدة تحكم محركات مزدوجة",
        icon: Zap,
        description: "وحدة تحكم بالمحركات تدعم قناتين مستقلتين. تعتمد على شريحة L298N H-Bridge وتسمح بالتحكم باتجاه وسرعة محركين DC أو محرك خطوة أحادي الطور.",
        specs: [
          "جهد المحرك: 5-35V DC",
          "تيار لكل قناة: 2A (أقصى 3A م momentary)",
          "قنوات: 2 (محركين مستقلين)",
          "تحكم PWM: مدعوم عبر منافذ ENA/ENB",
          "الحماية: Flyback diodes مدمجة",
          "التحكم: 4 منافذ منطقية IN1-IN4 + 2 تمكين ENA/ENB",
        ],
        usage: ["سيارات التحكم عن بُعد", "روبوتات متحركة بمحركين", "مشاريع التحكم بالمحركات الخطوة"],
        datasheet: [
          { param: "جهد المحرك", value: "5-35", unit: "V", notes: "DC" },
          { param: "تيار لكل قناة", value: "2", unit: "A", notes: "أقصى 3A لمدة قصيرة" },
          { param: "قنوات", value: "2", unit: "", notes: "محركين مستقلين" },
          { param: "تحكم PWM", value: "نعم", unit: "", notes: "عبر ENA/ENB" },
          { param: "الحماية", value: "نعم", unit: "", notes: "Flyback diodes مدمجة" },
        ],
      },
      {
        name: "Stepper Motor",
        nameAr: "محرك خطوة",
        icon: Layers,
        description: "محرك يدور بزوايا ثابتة محددة (خطوات). يوفر تحكماً دقيقاً جداً في الموضع والسرعة دون الحاجة لتغذية راجعة.",
        specs: [
          "جهد العمل: 5-12V DC (يُحدد بالـ Driver)",
          "زاوية الخطوة: 1.8° (200 خطوة/دورة كاملة)",
          "الدقة: نصف خطوة (0.9°) مع تشغيل microstepping",
          "نوع التحكم: Driver متخصص (A4988, DRV8825, ULN2003)",
          "عزم الدوران: عالٍ عند السرعة المنخفضة",
          "الأنواع: Unipolar (5 أسلاك) أو Bipolar (4 أسلاك)",
        ],
        usage: ["طابعات 3D (تحريك المحاور)", "أذرع روبوتية دقيقة", "كاميرات مراقبة متحركة (Pan/Tilt)"],
      },
      {
        name: "Relay",
        nameAr: "ريميه (وحدة تحكم كهروميكانيكية)",
        icon: CircleDot,
        description: "مفتاح كهربائي يُتحكم به إلكترونياً عبر إشارة منخفضة. يسمح للمتحكم بالتحكم في أجهزة تعمل بجهد وتيار أعلى بكثير.",
        specs: [
          "جهد التحكم: 5V DC (من Arduino)",
          "الحد الأقصى للتحميل: 10A/250V AC أو 10A/30V DC",
          "الدقة: تشغيل/إيقاف ثنائي الحالة",
          "نوع الخرج: مفتاح ميكانيكي (NO و NC و COM)",
          "زمن التبديل: ~10 ms",
          "الأنواع: 1CH, 2CH, 4CH, 8CH (قنوات متعددة)",
        ],
        usage: ["تحكم في الإضاءة المنزلية", "تشغيل المكيفات والمضخات", "أنظمة الري الكهربائية"],
      },
      {
        name: "Buzzer",
        nameAr: "جرس إنذار",
        icon: Volume2,
        description: "مكبر صوت صغير يصدر نغمات عند تطبيق إشارة كهربائية. نوعان: نشط (ينغمة واحدة ثابتة) وسلبي (تحكم بالنغمة عبر PWM).",
        specs: [
          "جهد العمل: 3.3-5V DC",
          "نطاق التردد: 2.7 kHz ثابت (نشط) أو 100Hz-10kHz (سلبي)",
          "الدقة: تردد النغمة قابل للتعديل في النوع السلبي",
          "نوع التحكم: Digital (نشط) أو PWM (سلبي)",
          "مستوى الصوت: ~85 dB عند 10 سم",
          "الاستهلاك: ≤30 mA",
        ],
        usage: ["أنظمة إنذار الحريق والسرقة", "تأكيد الضغطات في لوحات المفاتيح", "مؤشرات صوتية للأجهزة"],
      },
      {
        name: "RGB LED",
        nameAr: "صمام ضوئي متعدد الألوان",
        icon: RectangleHorizontal,
        description: "LED يحتوي على 3 ثنائيات (أحمر، أخضر، أزرق) داخل غلاف واحد. خلط الألوان الثلاثة بنسب مختلفة ينتج أي لون مطلوب.",
        specs: [
          "جهد العمل: 1.8V (أحمر) - 3.3V (أخضر/أزرق)",
          "نطاق الألوان: 16.7 مليون لون عبر PWM",
          "الدقة: 8-bit لكل قناة (256 مستوى)",
          "نوع التحكم: 3 منافذ PWM منفصلة",
          "التيار: 20mA لكل لون (60mA كحد أقصى)",
          "الأنواع: Common Cathode (مشترك سالب) أو Common Anode (مشترك موجب)",
        ],
        usage: ["إضاءة مزاجية تفاعلية", "مؤشرات حالة متعددة الألوان", "مشاريع إضاءة ملونة متحركة"],
      },
      {
        name: "WS2812B LED Strip",
        nameAr: "شريط LED عنواني",
        icon: Sparkles,
        description: "شريط LED يتكون من وحدات WS2812B كل منها يحتوي LED RGB و IC تحكم. كل LED قابل للعنونة بشكل فردي بسلك بيانات واحد فقط.",
        specs: [
          "جهد العمل: 5V DC",
          "نطاق الألوان: 16.7 مليون لون لكل LED",
          "الدقة: تحكم فردي بكل LED (8-bit × 3 قنوات)",
          "نوع التحكم: بيانات رقمية سلك واحد (Single-wire NRZ)",
          "البروتوكول: NZR Timing (T0H=400ns, T1H=800ns)",
          "الكثافة: 30/60/144 LED لكل متر",
        ],
        usage: ["إضاءة خلفية للشاشات والغرف", "لافتات LED متحركة ومرئيات", "مؤشرات الإضاءة في السيارات الذكية"],
      },
    ],
  },
  {
    id: "basics",
    name: "القطع الأساسية",
    icon: Layers,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    items: [
      {
        name: "Resistor",
        nameAr: "مقاومة",
        icon: CircleDot,
        description: "مكون أساسي يحدد من مرور التيار الكهربائي في الدائرة وفقاً لقانون أوم. تحمي المكونات الحساسة من التيار الزائد.",
        specs: [
          "جهد العمل: عادة حتى 250V (لكن الحالة العملية أقل بكثير في مشاريع Arduino)",
          "نطاق القيم: 0.1Ω - 22MΩ (قيم شائعة: 220Ω, 1KΩ, 4.7KΩ, 10KΩ)",
          "الدقة: 1% (معدنية) أو 5% (كربونية)",
          "القدرة: 1/4W الأكثر استخداماً (6.25mA عند 5V لـ 1KΩ)",
          "قراءة القيمة: بالكود اللوني (4 أو 5 حلقات)",
          "الأنواع: ثابتة (Fixed) ومتغيرة (Potentiometer/Trimpot)",
        ],
        usage: ["حماية LED من التيار الزائد", "مقسمات الجهد (Voltage Divider)", "دوائر التوقيت RC مع المكثفات"],
      },
      {
        name: "Capacitor",
        nameAr: "مكثف",
        icon: RectangleHorizontal,
        description: "مكون يخزن الطاقة الكهربائية ويطلقها عند الحاجة. يستخدم لتصفية الإشارات، تنعيم الجهد، وتحديد الترددات في دوائر التوقيت.",
        specs: [
          "جهد العمل: حسب النوع (16V, 25V, 50V, 100V شائعة)",
          "نطاق السعة: من 1pF (سيراميك) إلى 10000µF (إلكتروليتي)",
          "الدقة: ±10% (سيراميك) إلى ±20% (إلكتروليتي)",
          "الأنواع: سيراميك (MLCC)، إلكتروليتي، فيلم (Film)، تانتالم",
          "ملاحظة القطبية: الإلكتروليتي له + و - (توصيل عكسي = انفجار)",
          "المعامل: ESR (المقاومة التسلسلية المكافئة) تؤثر على الأداء",
        ],
        usage: ["تصفية الضوضاء في مصادر الطاقة", "دوائر التوقيت مع المقاومات (555 Timer)", "تنعيم خرج منظمات الجهد"],
      },
      {
        name: "Transistor",
        nameAr: "ترانزستور",
        icon: Cpu,
        description: "مكون شبه موصل يعمل كمفتاح إلكتروني أو مكبر إشارة. أساسي في دوائر التحكم بالمحركات والأحمال التي يتجاوز تيارها قدرة المتحكم.",
        specs: [
          "جهد العمل: يختلف حسب النوع (Vceo: 40-600V للـ BJT)",
          "نطاق التيار: 100mA (2N2222) إلى 33A (TIP31C)",
          "الدقة: المكسب (hFE) يتراوح 10-800 حسب النوع",
          "الأنواع: NPN و PNP (BJT)، N-ch و P-ch (MOSFET)",
          "الأطراف: Base-Collector-Emitter (BJT) أو Gate-Drain-Source (MOSFET)",
          "أرقام شائعة: 2N2222, BC547, TIP31C (BJT) — IRF540, 2N7000 (MOSFET)",
        ],
        usage: ["تبديل الأحمال الثقيلة (محركات، مراوح)", "مكبرات الصوت البسيطة", "دوائر التحكم بالمحركات عبر PWM"],
      },
      {
        name: "Diode",
        nameAr: "ثنائي (دايود)",
        icon: RectangleHorizontal,
        description: "مكون يسمح بمرور التيار في اتجاه واحد فقط. أساسي في الحماية من عكس القطبية وتحويل التيار المتردد إلى مستمر.",
        specs: [
          "جهد العمل: حتى 1000V للأنواع القوية",
          "جهد القطع الأمامي: ~0.7V (سيليكون) أو ~0.3V (شوتكي)",
          "نطاق التيار: 200mA (1N4148) إلى 3A (1N5408)",
          "الأنواع: إشارة (1N4148)، قوي (1N4007)، شوتكي (1N5819)، زينر (حماية الجهد)",
          "زمن الاستجابة: ns (شوتكي سريع) إلى µs (عام)",
          "الملاحظة: شريط يحدد الكاثود (الطرف السالب)",
        ],
        usage: ["حماية من عكس القطبية", "مقومات التيار المتردد (AC→DC)", "حماية دوائر Relay من الطاقة العكسية"],
      },
      {
        name: "Voltage Regulator",
        nameAr: "منظم جهد",
        icon: Zap,
        description: "مكون يحافظ على جهد خرج ثابت مستقل من تقلبات جهد الدخل. ضروري لتوفير جهد 3.3V أو 5V ثابت للمتحكمات والمكونات الحساسة.",
        specs: [
          "جهد العمل (الدخل): 7-25V (LM7805)، 4.5-15V (AMS1117-3.3)",
          "جهد الخرج: 5V (LM7805)، 3.3V (AMS1117)، 1.25-37V قابل للتعديل (LM317)",
          "الدقة: ±2-4% (Line/Load Regulation)",
          "التيار الأقصى: 1A (LM7805) أو 1A (AMS1117)",
          "أنواع: خطي (Linear) — كفاءة 40-60% أو تبديلي (Switching) — كفاءة 80-95%",
          "الملاحظة: يحتاج مكثفات خارجية (0.1µF + 10µF) للتنعيم والمشتت الحراري عند الأحمال العالية",
        ],
        usage: ["تنظيم جهد التغذية للمتحكمات", "بناء مصادر طاقة DC مخصصة", "حماية المكونات الحساسة من ارتفاع الجهد"],
      },
      {
        name: "Breadboard",
        nameAr: "لوحة التجارب",
        icon: Grid,
        description: "لوحة تسمح بتوصيل المكونات الإلكترونية دون لحام. مثالية لتجربة الدوائر واختبارها قبل التنفيذ النهائي على PCB.",
        specs: [
          "جهد العمل: عادة حتى 500V (لكن الاستخدام العملي: 3-12V)",
          "نطاق التوصيل: 830 ثقب (الأكثر شيوعاً)",
          "الدقة: اتصال داخلي بملامسات فولاذية (Tie-points)",
          "الترتيب: 5 ثقوب متصلة أفقياً + عمودان طويلان للطاقة (VCC/GND)",
          "التيار لكل نقطة: 1A كحد أقصى",
          "قابلة لإعادة الاستخدام بلا حدود (بشرط عدم إتلاف الملامسات)",
        ],
        usage: ["بناء النماذج الأولية السريعة", "اختبار الدوائر قبل اللحام النهائي", "التعليم والتدريب على الإلكترونيات"],
      },
    ],
  },
  {
    id: "displays",
    name: "الشاشات",
    icon: Monitor,
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
    items: [
      {
        name: "LCD 16x2",
        nameAr: "شاشة كريستال سائل",
        icon: Monitor,
        description: "شاشة عرض أبجدية رقمية تعرض 16 حرفاً في صفين. الأكثر استخداماً في مشاريع Arduino للعرض البسيط للبيانات والمعلومات.",
        specs: [
          "جهد العمل: 5V DC (مع وحدة I2C) أو 5V (متوازي)",
          "نطاق العرض: 16 حرف × 2 صف (32 حرف)",
          "الدقة: 5×8 نقاط لكل حرف (内置 CGROM يحتوي 192 حرف)",
          "نوع الاتصال: متوازي 8-bit/4-bit أو I2C (عبر PCF8574)",
          "عنوان I2C: 0x27 أو 0x3F (حسب اللوحة)",
          "ميزة: خلفية مضيئة (أزرق/أخضر) مع مقاومة تناظرية لضبط التباين",
        ],
        usage: ["عرض قراءات الحساسات في الوقت الفعلي", "لوحات معلومات المنزل الذكي", "أجهزة القياس البسيطة"],
      },
      {
        name: "OLED SSD1306",
        nameAr: "شاشة OLED صغيرة",
        icon: Tv,
        description: "شاشة صغيرة بدقة عالية تعرض نصوصاً ورسومات وصوراً. تتميز بالتباين العالي (أسود حقيقي) واستهلاك منخفض.",
        specs: [
          "جهد العمل: 3.3-5V DC",
          "نطاق الدقة: 128×64 بكسل (0.96 بوصة) أو 128×32 بكسل",
          "الدقة: 1 بكسل مستقل (رسومات حرة)",
          "نوع الاتصال: I2C (عنوان 0x3C) أو SPI (4 أسلاك)",
          "اللون: أبيض/أزرق أو أبيض فقط (2 لون)",
          "الاستهلاك: ~20mA (مع إضاءة كاملة)",
        ],
        usage: ["ساعات ذكية DIY", "محطات طقس محمولة صغيرة", "شاشات معلومات أنظمة IoT"],
      },
      {
        name: "LED Matrix 8×8",
        nameAr: "مصفوفة LED",
        icon: Grid,
        description: "مجموعة LEDs مرتبة في شبكة 8×8 لعرض رسوم متحركة ونصوص. يمكن سلسلة عدة مصفوفات لشاشات أكبر.",
        specs: [
          "جهد العمل: 5V DC",
          "نطاق العرض: 8×8, 8×32, أو 64×32 بكسل",
          "الدقة: 1 بكسل لكل LED",
          "نوع التحكم: MAX7219 (سلسلة SPI) أو HT1632C",
          "الأنواع: أحادية اللون (أحمر/أخضر) أو RGB",
          "الترابط: يمكن سلسلة ما يصل إلى 8 وحدات MAX7219 معاً",
        ],
        usage: ["لافتات متحركة في المحلات", "ساعات نقطية (Dot Matrix Clock)", "رسوم متحركة زخرفية"],
      },
      {
        name: "TFT Display",
        nameAr: "شاشة ملونة TFT",
        icon: Monitor,
        description: "شاشة ملونة بدقة عالية تدعم اللمس (في بعض الموديلات). مثالية لواجهات المستخدم المتقدمة والمشاريع التي تحتاج عرض ألوان ورسومات غنية.",
        specs: [
          "جهد العمل: 3.3-5V DC",
          "نطاق الدقة: 128×160 (1.8\") إلى 320×480 (3.5\") بكسل",
          "الدقة: 16-bit أو 18-bit ألوان (65,536 / 262,144 لون)",
          "نوع الاتصال: SPI (مع تعريفات ILI9341/ST7789/ILI9488)",
          "اللمس: Resistive Touch عبر XPT2046 (في الموديلات المدعومة)",
          "السرعة: SPI بحد أقصى ~40MHz (محدود بالـ SPI bus)",
        ],
        usage: ["واجهات مستخدم رسومية تفاعلية", "أجهزة القياس المتعددة", "لوحات معلومات الروبوتات"],
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const glossary = [
  { ar: "منافذ الإدخال/الإخراج العامة", en: "GPIO", desc: "منافذ قابلة للبرمجة على المتحكم الدقيق يمكن تهيئتها كمخرجات رقمية أو مداخل تناظرية أو بروتوكولات اتصال." },
  { ar: "تعديل عرض النبضة", en: "PWM", desc: "تقنية تحكم بمتوسط الجهد عن طريق تبديل الإشارة بين HIGH و LOW بسرعة عالية. تُستخدم للتحكم بسطوع LED أو سرعة المحرك." },
  { ar: "دائرة متكاملة بين الرقائق", en: "I2C", desc: "بروتوكول اتصال تسلسلي يستخدم سلكين فقط (SDA للبيانات و SCL للساعة). يدعم عدة أجهزة على نفس الناقل." },
  { ar: "الواجهة المحيطية التسلسلية", en: "SPI", desc: "بروتوكول اتصال سريع يستخدم 4 أسلاك (MOSI, MISO, SCK, CS). أسرع من I2C ويستخدم لمحركات الأقراص والشاشات." },
  { ar: "المستقبل والمرسل غير المتزامن", en: "UART", desc: "بروتوكول اتصال تسلسلي بسيط بين جهازين يستخدم سلك TX و RX. يُستخدم للتواصل مع الكمبيوتر عبر Serial Monitor." },
  { ar: "المحول التناظري-الرقمي", en: "ADC", desc: "يحول الإشارات التناظرية (مثل الجهد) إلى قيم رقمية. Arduino Uno لديه ADC بدقة 10-bit (0-1023)." },
  { ar: "المحول الرقمي-التناظري", en: "DAC", desc: "يحول القيم الرقمية إلى إشارات تناظرية. ESP32 لديه DAC مدمج بينما Arduino Uno لا يمتلك واحدة." },
  { ar: "المتحكم الدقيق", en: "MCU", desc: "رقاقة إلكترونية تجمع معالج وذاكرة ومنافذ I/O في قطعة واحدة. مثل ATmega328P في Arduino و Xtensa LX6 في ESP32." },
  { ar: "ذاكرة الفلاش", en: "Flash Memory", desc: "ذاكرة غير متطايرة تخزن البرنامج بشكل دائم. Arduino Uno لديه 32KB و ESP32 لديه 4MB." },
  { ar: "ذاكرة الوصول العشوائي", en: "SRAM", desc: "ذاكرة مؤقتة تستخدم لتخزين المتغيرات أثناء تشغيل البرنامج. تتحدث عند قطع الطاقة." },
  { ar: "لوحة التجارب", en: "Breadboard", desc: "لوحة ذات ثقوب تسمح بتوصيل الدوائر الإلكترونية بدون لحام. صفوف الأعمدة متصلة داخلياً لتسهيل التوصيل." },
  { ar: "الحام", en: "Soldering", desc: "عملية ربط المكونات الإلكترونية ببعضها باستخدام القصدير المصهور. تحتاج معدات: مكواة لحام، قصدير، فليكس." },
  { ar: "مقاومة سحب للأعلى", en: "Pull-up Resistor", desc: "مقاومة تربط المنفذ بجهد VCC. تضمن أن المنفذ يكون في حالة HIGH عند عدم توصيله بشيء. القيمة الشائعة: 10KΩ." },
  { ar: "مقاومة سحب للأسفل", en: "Pull-down Resistor", desc: "مقاومة تربط المنفذ بالأرض (GND). تضمن أن المنفذ يكون في حالة LOW عند عدم توصيله. القيمة الشائعة: 10KΩ." },
  { ar: "الترانزستور", en: "Transistor", desc: "مكون إلكتروني يعمل كمفتاح أو مكبّر إشارة. أنواعه: NPN و PNP (BJT) و N-channel/P-channel (MOSFET)." },
  { ar: "الدايود", en: "Diode", desc: "مكون يسمح بمرور التيار في اتجاه واحد فقط. يُستخدم للحماية من عكس القطبية وتصفية الإشارات. LED هو نوع خاص." },
  { ar: "المكثف", en: "Capacitor", desc: "مكون يخزن الشحنة الكهربائية ويطلقها عند الحاجة. يُستخدم لتصفية الجهد وربط طاقة مستقرة وتخزين الطاقة." },
  { ar: "الريليه", en: "Relay", desc: "مفتاح كهروميكانيكي يتحكم بتوصيل التيار العالي باستخدام إشارة منخفضة من Arduino. يُستخدم لتشغيل الأجهزة المنزلية." },
  { ar: "محرك السيرفو", en: "Servo Motor", desc: "محرك يدور بزاوية محددة (0-180°) ويحافظ عليها. يُستخدم في الروبوتات والرادارات. يتحكم عبر إشارة PWM." },
  { ar: "المحرك الخطوي", en: "Stepper Motor", desc: "محرك يدور بزوايا صغيرة ثابتة (خطوات). يُستخدم في الطابعات وأقراص CD والروبوتات الدقيقة. يحتاج Driver." },
];

export default function SensorsPage() {
  const [activeCategory, setActiveCategory] = useState("sensors");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedDatasheet, setExpandedDatasheet] = useState<string | null>(null);

  const toggleDatasheet = (id: string) => {
    setExpandedDatasheet((prev) => (prev === id ? null : id));
 };

  const totalComponents = useMemo(
    () => categories.reduce((sum, cat) => sum + cat.items.length, 0),
    []
  );

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (i) =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.nameAr.includes(searchTerm) ||
        i.description.includes(searchTerm)
    ),
  }));

  const activeItems =
    filteredCategories.find((c) => c.id === activeCategory)?.items || [];

  return (
    <div className="space-y-8 pb-8" dir="rtl">
      {/* Header */}
      <section className="text-center">
        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
          <Radio className="h-3.5 w-3.5 ml-1" />
          دليل القطع الإلكترونية
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          الحساسات والمكونات
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          موسوعة شاملة لجميع الحساسات والمشغلات والقطع الأساسية والشاشات
          المستخدمة في مشاريع الإلكترونيات
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Badge variant="outline" className="text-sm">
            <Layers className="h-3.5 w-3.5 ml-1" />
            {categories.length} تصنيفات
          </Badge>
          <Badge variant="outline" className="text-sm">
            <Cpu className="h-3.5 w-3.5 ml-1" />
            {totalComponents} قطعة إلكترونية
          </Badge>
        </div>
      </section>

      {/* Search */}
      <div className="max-w-md mx-auto relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="ابحث عن حساس أو قطعة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-center pr-10"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {filteredCategories.map((cat) => (
          <Button
            key={cat.id}
            size="sm"
            variant={activeCategory === cat.id ? "default" : "outline"}
            className={
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : ""
            }
            onClick={() => setActiveCategory(cat.id)}
          >
            <cat.icon className="h-4 w-4 ml-1" />
            {cat.name}
            <Badge variant="secondary" className="mr-1 text-xs bg-white/20">
              {cat.items.length}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Items Grid */}
      <motion.div
        key={activeCategory + searchTerm}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {activeItems.map((entry) => (
          <motion.div key={entry.name} variants={item}>
            <Card className="border-border/50 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <entry.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{entry.nameAr}</CardTitle>
                    <CardDescription className="text-xs">
                      {entry.name}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.description}
                </p>

                {/* Specs */}
                <div>
                  <p className="text-xs font-semibold mb-1.5">المواصفات:</p>
                  <ul className="space-y-1">
                    {entry.specs.map((spec, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-1.5"
                      >
                        <span className="text-primary mt-1 shrink-0">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage */}
                <div className="pt-2 border-t border-border/30">
                  <p className="text-xs font-semibold mb-1">أمثلة الاستخدام:</p>
                  <ul className="space-y-1">
                    {entry.usage.map((u, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-1.5"
                      >
                        <span className="text-emerald-500 mt-1 shrink-0">▪</span>
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Datasheet Table */}
                {entry.datasheet && (
                  <div className="mt-3">
                    <button
                      onClick={() => toggleDatasheet(entry.name)}
                      className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      {expandedDatasheet === entry.name ? (
                        <ChevronUp className="h-3 w-3" />
                      ) : (
                        <ChevronDown className="h-3 w-3" />
                      )}
                      جدول المواصفات (Datasheet)
                    </button>
                    {expandedDatasheet === entry.name && (
                      <div className="mt-2 rounded-lg border border-border/30 overflow-hidden">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50 hover:bg-muted/50">
                              <TableHead className="text-[10px] font-bold h-8">المعامل</TableHead>
                              <TableHead className="text-[10px] font-bold h-8">القيمة</TableHead>
                              <TableHead className="text-[10px] font-bold h-8">الوحدة</TableHead>
                              <TableHead className="text-[10px] font-bold h-8">ملاحظات</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {entry.datasheet.map((row, i) => (
                              <TableRow key={i}>
                                <TableCell className="text-[11px] font-medium py-1.5">{row.param}</TableCell>
                                <TableCell className="text-[11px] py-1.5">{row.value}</TableCell>
                                <TableCell className="text-[11px] text-muted-foreground py-1.5">{row.unit}</TableCell>
                                <TableCell className="text-[11px] text-muted-foreground py-1.5">{row.notes}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {activeItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            لم يتم العثور على نتائج مطابقة
          </p>
        </div>
      )}

      {/* Glossary */}
      <section className="mt-12">
        <div className="text-center mb-6">
          <Badge className="mb-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
            <BookOpen className="h-3.5 w-3.5 ml-1" /> قاموس المصطلحات
          </Badge>
          <h3 className="text-xl font-bold">مسرد المصطلحات التقنية</h3>
          <p className="text-sm text-muted-foreground mt-1">20 مصطلحاً أساسياً في عالم الإلكترونيات والمتحكمات الدقيقة</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {glossary.map((term, idx) => (
            <div key={idx} className="rounded-xl border border-border/30 p-3 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-xs text-emerald-600 dark:text-emerald-400">{term.en}</span>
                <span className="text-[10px] text-muted-foreground">—</span>
                <span className="font-semibold text-xs">{term.ar}</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{term.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
