"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  BookOpen, Code2, Cpu, Wrench, Wifi, ChevronDown,
  CheckCircle2, Lock, GraduationCap, Play, FileCode,
  Lightbulb, MessageCircle, Copy, Check,
  ChevronLeft, ChevronRight, Clock, Download, Send, Facebook,
  HelpCircle, XCircle, RotateCcw, Bookmark,
} from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import cpp from "react-syntax-highlighter/dist/esm/languages/prism/cpp";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("cpp", cpp);

/* ─── Types ─── */
interface Lesson {
  title: string;
  desc: string;
  concepts: string[];
  code: string;
  exercise: string;
  dur: string;
  free: boolean;
}
interface Mod {
  id: string;
  icon: React.ElementType;
  title: string;
  lvl: string;
  lvlC: string;
  desc: string;
  lessons: Lesson[];
}

/* ═══════════════════════════════════════════
   Module 1: مقدمة في الأنظمة المدمجة (مبتدئ)
   ═══════════════════════════════════════════ */
const mods: Mod[] = [{
  id: "m1",
  icon: Cpu,
  title: "مقدمة في الأنظمة المدمجة",
  lvl: "مبتدئ",
  lvlC: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  desc: "تعرّف على عالم المتحكمات الدقيقة والفرق بين الأنظمة المختلفة والمفاهيم الأساسية في الإلكترونيات الرقمية.",
  lessons: [
    {
      title: "ما هي المتحكمات الدقيقة (MCU)؟",
      desc: "المتحكم الدقيق هو رقاقة إلكترونية تجمع معالج وذاكرة ومنافذ I/O في قطعة واحدة.\nيختلف عن المعالج العام (CPU) بأنه مصمم للتطبيقات المدمجة المحدودة وليس الحوسبة العامة.",
      concepts: [
        "الفرق بين MCU و CPU و SoC",
        "ذاكرة Flash (تخزين البرنامج) و RAM (البيانات) و EEPROM",
        "منافذ I/O الرقمية والتناظرية",
        "موجات الساعة والتردد (16MHz, 240MHz)",
      ],
      code: `// المتحكم الدقيق يجمع كل شيء في رقاقة واحدة:\n// معالج + Flash + RAM + I/O\n\n// مثال: Arduino Uno يحتوي على:\n//   المعالج: ATmega328P\n//   السرعة: 16 MHz\n//   ذاكرة Flash: 32 KB (تخزين البرنامج)\n//   ذاكرة SRAM: 2 KB (البيانات المؤقتة)\n//   EEPROM: 1 KB (تخزين دائم)\n//   المنافذ: 14 رقمي + 6 تناظري\n\n// مثال: ESP32 يحتوي على:\n//   المعالج: Xtensa LX6 Dual-Core\n//   السرعة: 240 MHz\n//   ذاكرة Flash: 4 MB\n//   ذاكرة SRAM: 520 KB\n//   Wi-Fi + Bluetooth مدمج`,
      exercise: "ابحث عن مواصفات ESP32-S3 واكتب مقارنة بينها وبين ATmega328P من حيث السرعة والذاكرة والاتصال اللاسلكي.",
      dur: "25 د", free: true,
    },
    {
      title: "مقارنة لوحات التحكم الشائعة",
      desc: "هناك عشرات اللوحات في السوق. سنركز على أربع: Arduino Uno للمبتدئين، ESP32 لـ IoT، STM32 للصناعي، Pi Pico للتعليم.\nكل لوحة لها معالج مختلف ومناطق استخدام مختلفة تناسب مشاريع معينة.",
      concepts: [
        "ATmega328P — معالج 8-bit بسرعة 16MHz (Arduino Uno)",
        "Xtensa LX6 — معالج 32-bit مزدوج النواة (ESP32)",
        "ARM Cortex-M3/M4 — معالجات STM32 الصناعية",
        "RP2040 — معالج Dual-Core من Raspberry Pi",
      ],
      code: `// مقارنة سريعة بين اللوحات (للقراءة):\n//\n// ┌─────────────┬─────────┬────────┬───────┬──────────┐\n// │ اللوحة      │ المعالج │ السرعة│ Flash │ Wi-Fi    │\n// ├─────────────┼─────────┼────────┼───────┼──────────┤\n// │ Arduino Uno │ 8-bit   │ 16 MHz│ 32 KB │ لا       │\n// │ ESP32       │ 32-bit  │240 MHz│  4 MB │ نعم      │\n// │ STM32F103   │ 32-bit  │ 72 MHz│ 64 KB │ لا       │\n// │ Pi Pico     │ 32-bit  │133 MHz│  2 MB │ لا       │\n// └─────────────┴─────────┴────────┴───────┴──────────┘`,
      exercise: "اختر مشروع إنارة ذكية وحدد أي لوحة تناسبه أكثر مع شرح الأسباب (السعر، السهولة، المميزات).",
      dur: "30 د", free: true,
    },
    {
      title: "الجهد والتيار والمقاومة — قانون أوم",
      desc: "ثلاثة مبادئ أساسية في الإلكترونيات: الجهد (V) بالفولت، والتيار (I) بالأمبير، والمقاومة (R) بالأوم.\nقانون أوم V=IR هو الأساس لحساب كل دائرة إلكترونية.",
      concepts: [
        "قانون أوم: V = I × R",
        "حساب القدرة: P = V × I",
        "الكود اللوني للمقاومات (4 أشرطة)",
        "مقاومة 220Ω لحماية LED من الحرق",
      ],
      code: `// === حساب مقاومة LED ===\n// المعطيات:\n//   V_source = 5V (Arduino)\n//   V_LED    = 2V (LED أحمر)\n//   I_LED    = 20mA = 0.02A\n//\n// القانون:\n//   R = (V_source - V_LED) / I_LED\n//   R = (5 - 2) / 0.02 = 150 أوم\n//\n// نستخدم أقرب قيمة أعلى: 220 أوم\n\n// === قراءة الكود اللوني ===\n// مثال: بني-أسود-بني-ذهبي\n//   بني  = 1\n//   أسود = 0\n//   بني  = ×10 (المضاعف)\n//   ذهبي = ±5% (التحمل)\n//   النتيجة: 10 × 10 = 100 أوم ± 5%\n\n// حساب القدرة المبددة:\n// P = V × I = 3V × 0.02A = 0.06W (مقاومة 1/4W تكفي)`,
      exercise: "احسب المقاومة اللازمة لتشغيل LED أحمر (2V, 15mA) مع مصدر 9V. ما مقدار القدرة المبددة في المقاومة؟",
      dur: "35 د", free: true,
    },
    {
      title: "Breadboard والتوصيل الأساسي",
      desc: "لوحة التجارب (Breadboard) تسمح بتوصيل الدوائر بدون لحام. نتعرف على تركيبها الداخلي.\nنوصل أول دائرة حقيقية: LED يومض مع مقاومة حماية 220Ω.",
      concepts: [
        "تركيب Breadboard من الداخل (صفوف وأعمدة متصلة)",
        "Jumper Wires ذكر-ذكر وذكر-أنثى",
        "توصيل LED + مقاومة 220Ω على Arduino",
        "أول برنامج: Blink LED",
      ],
      code: `#define LED_PIN 13\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);  // تشغيل LED\n  delay(1000);                   // انتظر ثانية\n  digitalWrite(LED_PIN, LOW);   // إطفاء LED\n  delay(1000);                   // انتظر ثانية\n}`,
      exercise: "غيّر الكود لعمل وميض سريع (200ms) ثم أضف LED ثاني على المنفذ 12 يومض بالتناوب مع الأول.",
      dur: "20 د", free: true,
    },
  ],
}, {
  /* ═══════════════════════════════════════════
     Module 2: البرمجة بـ Arduino/C++ (مبتدئ)
     ═══════════════════════════════════════════ */
  id: "m2",
  icon: Code2,
  title: "البرمجة بـ Arduino/C++",
  lvl: "مبتدئ",
  lvlC: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  desc: "تعلم البرمجة بهيكل Arduino: المتغيرات، الشروط، الحلقات، الدوال، والتعامل مع المداخل والمخارج.",
  lessons: [
    {
      title: "هيكل setup() و loop()",
      desc: "كل برنامج Arduino يحتوي على دالتين: setup() تنفذ مرة واحدة عند التشغيل، و loop() تتكرر بلا توقف.\nسنتعلم المتغيرات وأنواع البيانات وكيف نستخدم الثوابت.",
      concepts: [
        "setup() تنفذ مرة واحدة عند التشغيل",
        "loop() تتكرر بلا توقف",
        "أنواع البيانات: int, float, bool, String",
        "const و #define للثوابت",
      ],
      code: `#define LED_PIN 13\nconst int blinkInterval = 500;  // ثابت\nint counter = 0;                // متغير عام\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n  Serial.begin(9600);\n  Serial.println("Arduino Ready!");\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);\n  delay(blinkInterval);\n  digitalWrite(LED_PIN, LOW);\n  delay(blinkInterval);\n  counter++;\n  Serial.print("Blink count: ");\n  Serial.println(counter);\n}`,
      exercise: "أنشئ متغيراً يتحكم بسرعة الوميض. اجعل السرعة تتغير تدريجياً كل 5 ومضات.",
      dur: "30 د", free: true,
    },
    {
      title: "Digital I/O — المداخل والمخارج الرقمية",
      desc: "المنافذ الرقمية تعمل بمنطق HIGH (5V) أو LOW (0V).\nنستخدم pinMode لتعريف المنفذ وdigitalWrite للكتابة وdigitalRead للقراءة من زر.",
      concepts: [
        "pinMode(pin, INPUT / OUTPUT)",
        "digitalWrite(pin, HIGH / LOW)",
        "digitalRead(pin) — يرجع 0 أو 1",
        "INPUT_PULLUP — مقاومة سحب داخلية",
      ],
      code: `#define BTN_PIN 2\n#define LED_PIN 13\n\nvoid setup() {\n  pinMode(BTN_PIN, INPUT_PULLUP);  // زر مع مقاومة داخلية\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  int btnState = digitalRead(BTN_PIN);\n  if (btnState == LOW) {\n    digitalWrite(LED_PIN, HIGH);   // الزر مضغوط\n  } else {\n    digitalWrite(LED_PIN, LOW);    // الزر مرفوع\n  }\n}`,
      exercise: "أضف زر ثاني على المنفذ 3 يتحكم بـ LED ثاني. عند ضغط الزرين معاً يضيء LED ثالث.",
      dur: "35 د", free: true,
    },
    {
      title: "Analog و PWM",
      desc: "analogRead تقرأ قيماً مستمرة من 0 إلى 1023. analogWrite تنتج PWM 0-255.\nهذا يسمح بالتحكم في سطوع LED أو سرعة محرك بقيم متدرجة.",
      concepts: [
        "analogRead(pin) — قراءة 0 إلى 1023 (10-bit ADC)",
        "analogWrite(pin, value) — PWM من 0 إلى 255",
        "المنافذ التي تدعم PWM (علامة ~ على اللوحة)",
        "التدرج التدريجي (Fade) في السطوع",
      ],
      code: `#define LED_PIN 9  // يجب أن يدعم PWM (~)\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  // تدرج من الخافت إلى الساطع\n  for (int brightness = 0; brightness <= 255; brightness += 5) {\n    analogWrite(LED_PIN, brightness);\n    delay(30);\n  }\n  // تدرج من الساطع إلى الخافت\n  for (int brightness = 255; brightness >= 0; brightness -= 5) {\n    analogWrite(LED_PIN, brightness);\n    delay(30);\n  }\n}`,
      exercise: "استخدم potentiometer على A0 لقراءة القيمة والتحكم بسطوع LED عبر analogWrite.",
      dur: "40 د", free: false,
    },
    {
      title: "الشروط والحلقات",
      desc: "هياكل التحكم: if/else لاتخاذ القرارات، for و while للتكرار.\nسنتعلم إنشاء دوال خاصة ومفهوم debounce لتنقية إشارة الزر.",
      concepts: [
        "if / else if / else — الشرطية",
        "حلقات for و while",
        "إنشاء دوال void خاصة",
        "Debounce — تنقية إشارة الزر من الارتداد",
      ],
      code: `#define BTN_PIN 2\n#define LED_PIN 13\n\nint lastState = HIGH;\nunsigned long lastDebounce = 0;\nint pressCount = 0;\n\nvoid setup() {\n  pinMode(BTN_PIN, INPUT_PULLUP);\n  pinMode(LED_PIN, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int reading = digitalRead(BTN_PIN);\n  if (reading != lastState && millis() - lastDebounce > 50) {\n    lastState = reading;\n    if (reading == LOW) {\n      pressCount++;\n      blinkLED(pressCount);\n      Serial.print("Pressed: ");\n      Serial.println(pressCount);\n    }\n    lastDebounce = millis();\n  }\n}\n\nvoid blinkLED(int times) {\n  for (int i = 0; i < times && i < 10; i++) {\n    digitalWrite(LED_PIN, HIGH);\n    delay(200);\n    digitalWrite(LED_PIN, LOW);\n    delay(200);\n  }\n}`,
      exercise: "أنشئ نظام عداد: كل 5 ضغطات يضيء LED لمدة 3 ثوانٍ ويعرض الرسالة على Serial.",
      dur: "45 د", free: false,
    },
    {
      title: "Serial Monitor",
      desc: "المنفذ التسلسلي هو أداة الاتصال بين Arduino والحاسوب. نستخدمه للمراقبة والتصحيح.\nيمكن إرسال أوامر من الحاسوب والرد عليها في الوقت الحقيقي.",
      concepts: [
        "Serial.begin(9600) — تهيئة الاتصال",
        "Serial.print() و Serial.println()",
        "Serial.readStringUntil() — قراءة مدخلات",
        "Debugging — اكتشاف الأخطاء",
      ],
      code: `#define TEMP_PIN A0\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println("=== Sensor Monitor ===");\n  Serial.println("Type 'read' to get value");\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    String cmd = Serial.readStringUntil('\\n');\n    cmd.trim();\n    if (cmd == "read") {\n      int val = analogRead(TEMP_PIN);\n      float voltage = val * (5.0 / 1023.0);\n      float tempC = voltage * 100.0;\n      Serial.print("Raw: "); Serial.print(val);\n      Serial.print(" | V: "); Serial.print(voltage, 2);\n      Serial.print(" | Temp: ");\n      Serial.print(tempC, 1);\n      Serial.println("C");\n    } else {\n      Serial.println("Unknown command!");\n    }\n  }\n}`,
      exercise: "أضف أمر 'led on' و 'led off' للتحكم بـ LED عبر Serial Monitor.",
      dur: "30 د", free: false,
    },
    {
      title: "المكتبات — Library Manager",
      desc: "المكتبات أكواد جاهزة تضيف وظائف جديدة. نتعلم تثبيتها واستخدامها.\nسنستخدم Servo.h للتحكم بمحرك سيرفو وDHT.h لقراءة الحساسات.",
      concepts: [
        "Library Manager في Arduino IDE",
        "الفرق بين ملف .h و .cpp",
        "Servo.h — التحكم بمحرك السيرفو",
        "DHT.h و Wire.h — حساسات واتصال",
      ],
      code: `#include <Servo.h>\n\nServo myServo;\n\nvoid setup() {\n  myServo.attach(9);  // ربط السيرفو بالمنفذ 9\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  // مسح من 0 إلى 180 درجة\n  for (int angle = 0; angle <= 180; angle += 2) {\n    myServo.write(angle);\n    delay(20);\n  }\n  // العودة من 180 إلى 0\n  for (int angle = 180; angle >= 0; angle -= 2) {\n    myServo.write(angle);\n    delay(20);\n  }\n}`,
      exercise: "استخدم مكتبة DHT.h لقراءة الحرارة وعرضها على Serial Monitor كل 2 ثانية.",
      dur: "25 د", free: false,
    },
  ],
}, {
  /* ═══════════════════════════════════════════
     Module 3: الحساسات والمشغلات (متوسط)
     ═══════════════════════════════════════════ */
  id: "m3",
  icon: Wrench,
  title: "الحساسات والمشغلات",
  lvl: "متوسط",
  lvlC: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  desc: "تعلم استخدام أهم الحساسات وعناصر التشغيل مع أكواد حقيقية ومختبرة على أجهزة حقيقية.",
  lessons: [
    {
      title: "HC-SR04 — قياس المسافة بالموجات فوق الصوتية",
      desc: "حساس HC-SR04 يرسل موجة فوق صوتية ويقيس وقت ارتدادها لحساب المسافة.\nمبدأ العمل يعتمد على سرعة الصوت (340 م/ث) وحساب الوقت.",
      concepts: [
        "إرسال نبضة 10µs على TRIG",
        "pulseIn() لقياس عرض النبضة على ECHO",
        "المسافة = (الزمن × 0.034) / 2",
        "دقة القياس: ±3mm",
      ],
      code: `#define TRIG_PIN 9\n#define ECHO_PIN 10\n\nvoid setup() {\n  pinMode(TRIG_PIN, OUTPUT);\n  pinMode(ECHO_PIN, INPUT);\n  Serial.begin(9600);\n}\n\nfloat getDistance() {\n  digitalWrite(TRIG_PIN, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n  long duration = pulseIn(ECHO_PIN, HIGH, 30000);\n  if (duration == 0) return -1.0;\n  return duration * 0.034 / 2.0;\n}\n\nvoid loop() {\n  float dist = getDistance();\n  if (dist > 0) {\n    Serial.print("Distance: ");\n    Serial.print(dist, 1);\n    Serial.println(" cm");\n  } else {\n    Serial.println("Out of range!");\n  }\n  delay(500);\n}`,
      exercise: "أنشئ نظام تنبيه: إذا المسافة أقل من 10 سم شغّل LED أحمر، وإلا LED أخضر.",
      dur: "40 د", free: false,
    },
    {
      title: "DHT11/22 — الحرارة والرطوبة",
      desc: "حساسات DHT تقيس الحرارة والرطوبة مع بروتوكول بيانات واحد.\nDHT11 أرخص بينما DHT22 أدق. نحتاج مكتبة Adafruit DHT.",
      concepts: [
        "DHT11: ±2°C / ±5% RH — أرخص",
        "DHT22: ±0.5°C / ±2% RH — أدق",
        "مكتبة Adafruit DHT Unified",
        "فترة انتظار 2 ثانية بين القراءات",
      ],
      code: `#include <DHT.h>\n\n#define DHT_PIN 2\n#define DHT_TYPE DHT22\n\nDHT dht(DHT_PIN, DHT_TYPE);\n\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n  Serial.println("=== Weather Monitor ===");\n}\n\nvoid loop() {\n  float humidity = dht.readHumidity();\n  float tempC = dht.readTemperature();\n\n  if (isnan(humidity) || isnan(tempC)) {\n    Serial.println("Error reading DHT!");\n    return;\n  }\n\n  Serial.print("Temp: ");\n  Serial.print(tempC, 1);\n  Serial.print("C | Humidity: ");\n  Serial.print(humidity, 1);\n  Serial.println("%");\n\n  delay(2000);\n}`,
      exercise: "أضف مؤشر: إذا الحرارة فوق 35°C اطبع 'حر!' وإذا الرطوبة فوق 70% اطبع 'رطب!'.",
      dur: "35 د", free: false,
    },
    {
      title: "PIR HC-SR501 — كشف الحركة",
      desc: "حساس PIR يكشف التغير في الأشعة تحت الحمراء (حرارة الجسم).\nعند مرور شخص يعطي إشارة HIGH. يمكن تعديل الحساسية ومدة الانتظار.",
      concepts: [
        "مبدأ الأشعة تحت الحمراء (Infrared)",
        "مقاومة Delay Time و Sensitivity",
        "دورة التسخين (warm-up) 30 ثانية",
        "إشارة HIGH عند كشف حركة",
      ],
      code: `#define PIR_PIN 3\n#define BUZZ_PIN 8\n#define LED_PIN 13\n\nbool motionDetected = false;\n\nvoid setup() {\n  pinMode(PIR_PIN, INPUT);\n  pinMode(BUZZ_PIN, OUTPUT);\n  pinMode(LED_PIN, OUTPUT);\n  Serial.begin(9600);\n  Serial.println("Warming up PIR...");\n  delay(30000);  // وقت تسخين الحساس\n  Serial.println("PIR Ready!");\n}\n\nvoid loop() {\n  int pir = digitalRead(PIR_PIN);\n  if (pir == HIGH && !motionDetected) {\n    motionDetected = true;\n    digitalWrite(LED_PIN, HIGH);\n    tone(BUZZ_PIN, 1000, 200);\n    Serial.println("MOTION DETECTED!");\n  } else if (pir == LOW && motionDetected) {\n    motionDetected = false;\n    digitalWrite(LED_PIN, LOW);\n    Serial.println("Motion stopped");\n  }\n}`,
      exercise: "أنشئ إنارة تلقائية: عند كشف الحركة يضيء LED لمدة 10 ثوانٍ ثم ينطفئ.",
      dur: "30 د", free: false,
    },
    {
      title: "Servo Motor — التحكم بالزاوية",
      desc: "محرك السيرفو يدور بزاوية محددة 0-180°. مثالي للمشاريع التي تحتاج دقة.\nسنستخدمه مع HC-SR04 لإنشاء رادار يمسح المحيط.",
      concepts: [
        "زاوية التحكم: 0° إلى 180°",
        "servo.attach(pin) و servo.write(angle)",
        "عزم المحرك (torque) 1.8 kg/cm",
        "مشروع رادار مع HC-SR04",
      ],
      code: `#include <Servo.h>\n\n#define TRIG_PIN 10\n#define ECHO_PIN 11\n#define SERVO_PIN 9\n\nServo radarServo;\n\nvoid setup() {\n  pinMode(TRIG_PIN, OUTPUT);\n  pinMode(ECHO_PIN, INPUT);\n  radarServo.attach(SERVO_PIN);\n  Serial.begin(9600);\n  Serial.println("Radar Ready");\n}\n\nfloat measureDistance() {\n  digitalWrite(TRIG_PIN, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n  long d = pulseIn(ECHO_PIN, HIGH, 30000);\n  return (d > 0) ? d * 0.034 / 2.0 : -1;\n}\n\nvoid loop() {\n  for (int angle = 0; angle <= 180; angle += 5) {\n    radarServo.write(angle);\n    delay(30);\n    float dist = measureDistance();\n    Serial.print(angle);\n    Serial.print(",");\n    Serial.println(dist > 0 ? dist : 999);\n  }\n}`,
      exercise: "أضف LED يضيء بالأحمر إذا المسافة أقل من 15 سم في أي اتجاه.",
      dur: "35 د", free: false,
    },
    {
      title: "DC Motor + L298N — التحكم بالمحرك",
      desc: "المحركات DC تحتاج تيار عالي لا يستطيع Arduino توفيره.\nدرايفر L298N يحل هذه المشكلة باستخدام H-Bridge للتحكم بالاتجاه و PWM للسرعة.",
      concepts: [
        "H-Bridge — التحكم بالاتجاه والانعكاس",
        "ENA/ENB — التحكم بالسرعة عبر PWM",
        "IN1-IN4 — التحكم بالاتجاه",
        "حماية الدايود (flyback diode)",
      ],
      code: `#define ENA 5   // PWM سرعة المحرك 1\n#define IN1 6\n#define IN2 7\n#define IN3 8\n#define IN4 9\n#define ENB 10  // PWM سرعة المحرك 2\n\nvoid setup() {\n  pinMode(ENA, OUTPUT);\n  pinMode(IN1, OUTPUT);\n  pinMode(IN2, OUTPUT);\n  pinMode(ENB, OUTPUT);\n  pinMode(IN3, OUTPUT);\n  pinMode(IN4, OUTPUT);\n}\n\nvoid setMotor(int en, int in1, int in2, int spd) {\n  analogWrite(en, spd > 0 ? spd : -spd);\n  digitalWrite(in1, spd >= 0 ? HIGH : LOW);\n  digitalWrite(in2, spd >= 0 ? LOW  : HIGH);\n}\n\nvoid loop() {\n  // تقدم بسرعة 200\n  setMotor(ENA, IN1, IN2, 200);\n  setMotor(ENB, IN3, IN4, 200);\n  delay(2000);\n  // تراجع بسرعة 150\n  setMotor(ENA, IN1, IN2, -150);\n  setMotor(ENB, IN3, IN4, -150);\n  delay(1000);\n  // توقف\n  setMotor(ENA, IN1, IN2, 0);\n  setMotor(ENB, IN3, IN4, 0);\n  delay(1000);\n}`,
      exercise: "أنشئ سيارة تتحكم بها: زر 1 = تقدم، زر 2 = تراجع، زر 3 = دوران يمين.",
      dur: "45 د", free: false,
    },
  ],
}, {
  /* ═══════════════════════════════════════════
     Module 4: مشاريع تطبيقية (متقدم)
     ═══════════════════════════════════════════ */
  id: "m4",
  icon: Wrench,
  title: "مشاريع تطبيقية",
  lvl: "متقدم",
  lvlC: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  desc: "مشاريع حقيقية متكاملة تجمع عدة مكونات: أتمتة المنزل، محطة طقس IoT، وروبوتات ذكية.",
  lessons: [
    {
      title: "Smart Home بالـ ESP32 — أتمتة المنزل",
      desc: "مشروع أتمتة منزل كامل: ESP32 + 4-Channel Relay للتحكم في الأجهزة المنزلية عبر Wi-Fi.\nيتضمن جدولة زمنية لتشغيل الأجهزة تلقائياً.",
      concepts: [
        "الاتصال بـ Wi-Fi بـ ESP32",
        "استخدام 4-Channel Relay للتحكم بأجهزة AC",
        "جدولة زمنية (Scheduling)",
        "الحماية الكهربائية مع دايود flyback",
      ],
      code: `#include <WiFi.h>\n\n#define RELAY1 25\n#define RELAY2 26\n#define RELAY3 27\n#define RELAY4 14\n\nconst char* ssid = "YOUR_WIFI_SSID";\nconst char* password = "YOUR_WIFI_PASSWORD";\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(RELAY1, OUTPUT);\n  pinMode(RELAY2, OUTPUT);\n  pinMode(RELAY3, OUTPUT);\n  pinMode(RELAY4, OUTPUT);\n  // إطفاء كل الأجهزة عند التشغيل\n  digitalWrite(RELAY1, HIGH);\n  digitalWrite(RELAY2, HIGH);\n  digitalWrite(RELAY3, HIGH);\n  digitalWrite(RELAY4, HIGH);\n\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) delay(500);\n  Serial.println("WiFi Connected!");\n  Serial.print("IP: ");\n  Serial.println(WiFi.localIP());\n}\n\nvoid loop() {\n  // جدولة: تشغيل الجهاز 1 من 8-10 مساءً\n  int hour = (millis() / 3600000) % 24;\n  if (hour >= 20 && hour < 22) {\n    digitalWrite(RELAY1, LOW);  // تشغيل\n  } else {\n    digitalWrite(RELAY1, HIGH); // إطفاء\n  }\n  delay(1000);\n}`,
      exercise: "أضف تحكم عبر Web Server: صفحة HTML تسمح بتشغيل/إطفاء كل ريليه من المتصفح.",
      dur: "60 د", free: false,
    },
    {
      title: "محطة طقس IoT بـ ThingSpeak",
      desc: "محطة طقس ترسل بيانات الحرارة والرطوبة إلى ThingSpeak لعرضها كرسوم بيانية.\nالبيانات محفوظة في السحابة ويمكن الوصول إليها من أي مكان.",
      concepts: [
        "ThingSpeak API — إرسال البيانات",
        "WiFiClient للاتصال بالإنترنت",
        "تخزين البيانات السحابي",
        "رسم بياني حي عبر API",
      ],
      code: `#include <WiFi.h>\n#include <HTTPClient.h>\n#include <DHT.h>\n\n#define DHT_PIN 4\nDHT dht(DHT_PIN, DHT22);\n\nconst char* ssid = "YOUR_WIFI";\nconst char* pass = "YOUR_PASS";\nconst char* apiKey = "YOUR_THINGSPEAK_KEY";\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();\n  WiFi.begin(ssid, pass);\n  while (WiFi.status() != WL_CONNECTED) delay(500);\n  Serial.println("WiFi connected");\n}\n\nvoid loop() {\n  if (WiFi.status() == WL_CONNECTED) {\n    float h = dht.readHumidity();\n    float t = dht.readTemperature();\n    if (isnan(h) || isnan(t)) { delay(2000); return; }\n\n    HTTPClient http;\n    String url = "http://api.thingspeak.com/update"\n      "?api_key=" + String(apiKey)\n      + "&field1=" + String(t, 1)\n      + "&field2=" + String(h, 1);\n    http.begin(url);\n    int code = http.GET();\n    if (code == 200) Serial.println("Sent!");\n    http.end();\n  }\n  delay(15000);  // ThingSpeak: حد أدنى 15 ثانية\n}`,
      exercise: "أضف حقل الضغط الجوي مع BMP280 واعرض 3 رسوم بيانية على ThingSpeak.",
      dur: "55 د", free: false,
    },
    {
      title: "Line Follower — روبوت متتبع الخط",
      desc: "روبوت يتبع خطاً أسود على أرضية بيضاء باستخدام حساسين IR أسفل الجسم.\nخوارزمية PID تعدل سرعة كل محرك حسب انحراف الحساس عن الخط.",
      concepts: [
        "خوارزمية PID — التناسب والتكامل والتفاضل",
        "IR Sensors — كشف الأسود والأبيض",
        "القيادة التفاضلية (Differential Drive)",
        "معايرة حساسية الحساسات",
      ],
      code: `#define IR_LEFT A0\n#define IR_RIGHT A1\n#define ENA 5\n#define IN1 6\n#define IN2 7\n#define ENB 10\n#define IN3 8\n#define IN4 9\n\n#define BASE_SPEED 150\n#define THRESHOLD 500\n\nvoid setup() {\n  pinMode(IR_LEFT, INPUT);\n  pinMode(IR_RIGHT, INPUT);\n  pinMode(ENA, OUTPUT);\n  pinMode(IN1, OUTPUT);\n  pinMode(IN2, OUTPUT);\n  pinMode(ENB, OUTPUT);\n  pinMode(IN3, OUTPUT);\n  pinMode(IN4, OUTPUT);\n}\n\nvoid forward() {\n  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);\n  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);\n}\n\nvoid stopMotors() {\n  digitalWrite(IN1, LOW); digitalWrite(IN2, LOW);\n  digitalWrite(IN3, LOW); digitalWrite(IN4, LOW);\n}\n\nvoid loop() {\n  bool onLineL = analogRead(IR_LEFT) < THRESHOLD;\n  bool onLineR = analogRead(IR_RIGHT) < THRESHOLD;\n\n  if (onLineL && onLineR) {\n    analogWrite(ENA, BASE_SPEED);\n    analogWrite(ENB, BASE_SPEED);\n    forward();\n  } else if (!onLineL && onLineR) {\n    analogWrite(ENA, BASE_SPEED + 40);\n    analogWrite(ENB, BASE_SPEED - 60);\n    forward();\n  } else if (onLineL && !onLineR) {\n    analogWrite(ENA, BASE_SPEED - 60);\n    analogWrite(ENB, BASE_SPEED + 40);\n    forward();\n  } else {\n    stopMotors();\n  }\n}`,
      exercise: "أضف تقاطعات: عند خط عرضي توقف 2 ثانية ثم تابع. عند الملتقى اختر اليمين.",
      dur: "70 د", free: false,
    },
    {
      title: "Obstacle Avoidance — روبوت تجنب العقبات",
      desc: "روبوت يمسح المحيط باستخدام سيرفو + HC-SR04 ويتخذ قرارات ذكية لتجنب العقبات.\nيستخدم خوارزمية المسح الزاوي لتحديد أفضل اتجاه للمتابعة.",
      concepts: [
        "مسح زاوي 180° بالسيرفو",
        "اتخاذ قرار بناءً على أقرب مسافة",
        "خوارزمية Look-Ahead",
        "المقارنة بين المسح الأيسر والأيمن",
      ],
      code: `#include <Servo.h>\n\n#define TRIG_PIN 10\n#define ECHO_PIN 11\n#define SERVO_PIN 9\n#define MAX_DIST 200\n\nServo scanServo;\n#define ENA 5\n#define IN1 6\n#define IN2 7\n#define ENB 10\n#define IN3 8\n#define IN4 9\n\nvoid setup() {\n  scanServo.attach(SERVO_PIN);\n  pinMode(ENA, OUTPUT); pinMode(IN1, OUTPUT);\n  pinMode(IN2, OUTPUT); pinMode(ENB, OUTPUT);\n  pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);\n}\n\nint scanDist(int angle) {\n  scanServo.write(angle); delay(400);\n  digitalWrite(TRIG_PIN, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n  pinMode(ECHO_PIN, INPUT);\n  long d = pulseIn(ECHO_PIN, HIGH, 30000);\n  return (d > 0) ? d * 0.034 / 2 : -1;\n}\n\nvoid go() {\n  analogWrite(ENA,180); analogWrite(ENB,180);\n  digitalWrite(IN1,1); digitalWrite(IN2,0);\n  digitalWrite(IN3,1); digitalWrite(IN4,0);\n}\nvoid st() { analogWrite(ENA,0); analogWrite(ENB,0); }\nvoid turnL(int ms) {\n  analogWrite(ENA,150); analogWrite(ENB,150);\n  digitalWrite(IN1,0); digitalWrite(IN2,1);\n  digitalWrite(IN3,1); digitalWrite(IN4,0);\n  delay(ms); st();\n}\nvoid turnR(int ms) {\n  analogWrite(ENA,150); analogWrite(ENB,150);\n  digitalWrite(IN1,1); digitalWrite(IN2,0);\n  digitalWrite(IN3,0); digitalWrite(IN4,1);\n  delay(ms); st();\n}\n\nvoid loop() {\n  int front = scanDist(90);\n  if (front > 15 && front > 0) {\n    go();\n  } else {\n    st();\n    int left = scanDist(45);\n    int right = scanDist(135);\n    if (left > right && left > 10) turnL(300);\n    else if (right > left && right > 10) turnR(300);\n    else turnR(600);\n    scanServo.write(90);\n  }\n}`,
      exercise: "أضف مؤشر LED: أخضر عند التقدم، أصفر عند المسح، أحمر عند الالتفاف.",
      dur: "65 د", free: false,
    },
  ],
}, {
  /* ═══════════════════════════════════════════
     Module 5: إنترنت الأشياء IoT (متقدم)
     ═══════════════════════════════════════════ */
  id: "m5",
  icon: Wifi,
  title: "إنترنت الأشياء IoT",
  lvl: "متقدم",
  lvlC: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  desc: "ربط مشاريعك بالإنترنت: Wi-Fi، MQTT، Web Server، والتحكم عن بعد من أي مكان.",
  lessons: [
    {
      title: "WiFi بـ ESP32 — الاتصال بالشبكة",
      desc: "ESP32 يحتوي على Wi-Fi مدمج (802.11 b/g/n). سنتعلم البحث عن الشبكات المتاحة.\nوالاتصال بها باستخدام SSID وكلمة المرور.",
      concepts: [
        "WiFi.begin(ssid, password) — الاتصال",
        "WiFi.status() == WL_CONNECTED",
        "WiFi.scanNetworks() — البحث عن الشبكات",
        "WiFi.localIP() — عنوان IP المحلي",
      ],
      code: `#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  delay(1000);\n  Serial.println("=== WiFi Scanner ===\\n");\n\n  WiFi.mode(WIFI_STA);\n  WiFi.disconnect();\n  delay(100);\n\n  int n = WiFi.scanNetworks();\n  if (n == 0) {\n    Serial.println("No networks found!");\n  } else {\n    Serial.print("Found ");\n    Serial.print(n);\n    Serial.println(" networks:\\n");\n    for (int i = 0; i < n; i++) {\n      Serial.print(i + 1);\n      Serial.print(": ");\n      Serial.print(WiFi.SSID(i));\n      Serial.print(" (");\n      Serial.print(WiFi.RSSI(i));\n      Serial.print(" dBm)");\n      Serial.println(\n        WiFi.encryptionType(i) == WIFI_AUTH_OPEN\n        ? " [Open]" : " [Secured]"\n      );\n      delay(10);\n    }\n  }\n  Serial.println("\\nScan complete!");\n}\n\nvoid loop() {}`,
      exercise: "أنشئ كود يتصل بأقوى شبكة متاحة تلقائياً ويعرض عنوان IP الخاص بالـ ESP32.",
      dur: "40 د", free: false,
    },
    {
      title: "Blynk App — التحكم عن بعد",
      desc: "Blynk منصة سهلة لإنشاء تطبيقات تحكم عن بعد.\nنربط ESP32 بتطبيق الهاتف للتحكم في LED عبر Virtual Pins.",
      concepts: [
        "مكتبة BlynkSimpleEsp32",
        "BLYNK_WRITE(vPin) — استقبال من التطبيق",
        "BLYNK_CONNECTED() — عند الاتصال",
        "Virtual Pins — بيانات افتراضية",
      ],
      code: `#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"\n#define BLYNK_TEMPLATE_NAME "Smart LED"\n#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"\n\n#include <WiFi.h>\n#include <BlynkSimpleEsp32.h>\n\n#define LED_PIN 2\n\nconst char* ssid = "YOUR_WIFI";\nconst char* pass = "YOUR_PASS";\n\nBlynkTimer timer;\n\n// استقبال أمر من التطبيق\nBLYNK_WRITE(V0) {\n  int value = param.asInt();\n  digitalWrite(LED_PIN, value);\n}\n\nvoid sendSensor() {\n  int val = analogRead(34);\n  Blynk.virtualWrite(V1, val);\n}\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n  Serial.begin(115200);\n  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);\n  timer.setInterval(1000L, sendSensor);\n}\n\nvoid loop() {\n  Blynk.run();\n  timer.run();\n}`,
      exercise: "أضف زر V2 لتغيير سرعة الوميض وعرض قيمة potentiometer على V1.",
      dur: "45 د", free: false,
    },
    {
      title: "MQTT — أساسيات البروتوكول",
      desc: "MQTT بروتوكول خفيف لنقل الرسائل بين الأجهزة. يعتمد على نظام النشر/الاشتراك.\nسنتعلم الاتصال بمBroker ونشر واشتراك الرسائل.",
      concepts: [
        "Publish/Subscribe — نشر واشتراك",
        "Broker (Mosquitto / HiveMQ)",
        "Topics — موضوعات الرسائل",
        "QoS — جودة الخدمة (0, 1, 2)",
      ],
      code: `#include <WiFi.h>\n#include <PubSubClient.h>\n\nconst char* ssid = "YOUR_WIFI";\nconst char* pass = "YOUR_PASS";\nconst char* mqtt_server = "broker.hivemq.com";\nconst char* topic_temp = "home/temperature";\nconst char* topic_led  = "home/led";\n\nWiFiClient espClient;\nPubSubClient client(espClient);\n\nvoid callback(char* topic, byte* payload, unsigned int len) {\n  String msg = "";\n  for (int i = 0; i < len; i++)\n    msg += (char)payload[i];\n  Serial.print("Message [");\n  Serial.print(topic);\n  Serial.print("]: ");\n  Serial.println(msg);\n  if (String(topic) == topic_led) {\n    digitalWrite(2, msg == "ON" ? HIGH : LOW);\n  }\n}\n\nvoid reconnect() {\n  while (!client.connected()) {\n    if (client.connect("ESP32Client")) {\n      client.subscribe(topic_led);\n    } else delay(5000);\n  }\n}\n\nvoid setup() {\n  pinMode(2, OUTPUT);\n  Serial.begin(115200);\n  WiFi.begin(ssid, pass);\n  while (WiFi.status() != WL_CONNECTED) delay(500);\n  client.setServer(mqtt_server, 1883);\n  client.setCallback(callback);\n}\n\nvoid loop() {\n  if (!client.connected()) reconnect();\n  client.loop();\n  static unsigned long last = 0;\n  if (millis() - last > 5000) {\n    float t = random(200, 350) / 10.0;\n    client.publish(topic_temp, String(t).c_str());\n    last = millis();\n  }\n}`,
      exercise: "اشترك في 'home/alert' وعند استلام 'FIRE' شغّل buzzer وأرسل 'ACK'.",
      dur: "50 د", free: false,
    },
    {
      title: "Web Server محلي على ESP32",
      desc: "ننشئ خادم ويب محلي على ESP32 يعرض صفحة HTML للتحكم في الأجهزة من المتصفح.\nلا نحتاج إنترنت — ESP32 يُنشئ شبكة Wi-Fi خاصة (Access Point).",
      concepts: [
        "WebServer على المنفذ 80",
        "إرسال HTML عبر client.println()",
        "GET requests — قراءة المعاملات",
        "Access Point Mode — نقطة اتصال",
      ],
      code: `#include <WiFi.h>\n#include <WebServer.h>\n\nWebServer server(80);\n\nconst char* ssid = "ESP32_Control";\nconst char* pass = "12345678";\nbool ledState = false;\n\nvoid handleRoot() {\n  String html = "<!DOCTYPE html>"\n    "<html dir='rtl' lang='ar'>"\n    "<head><meta name='viewport'"\n    " content='width=device-width'>"\n    "<style>"\n    "body{font-family:Arial;text-align:center;"\n    "margin-top:50px}"\n    ".btn{padding:15px 40px;font-size:20px;"\n    "border:none;border-radius:10px;cursor:pointer;"\n    "margin:10px}"\n    ".on{background:#10b981;color:white}"\n    ".off{background:#ef4444;color:white}"\n    "</style></head><body>"\n    "<h1>التحكم بـ LED</h1>"\n    "<p>الحالة: LED ";\n  html += ledState ? "مُشغّل" : "مُطفأ";\n  html += "</p>"\n    "<a href='/on'><button class='btn on'>"\n    "تشغيل</button></a>"\n    "<a href='/off'><button class='btn off'>"\n    "إطفاء</button></a>"\n    "</body></html>";\n  server.send(200, "text/html", html);\n}\n\nvoid handleOn() {\n  ledState = true;\n  digitalWrite(2, HIGH);\n  server.sendHeader("Location", "/");\n  server.send(303);\n}\n\nvoid handleOff() {\n  ledState = false;\n  digitalWrite(2, LOW);\n  server.sendHeader("Location", "/");\n  server.send(303);\n}\n\nvoid setup() {\n  pinMode(2, OUTPUT);\n  WiFi.softAP(ssid, pass);\n  Serial.println(WiFi.softAPIP());\n  server.on("/", handleRoot);\n  server.on("/on", handleOn);\n  server.on("/off", handleOff);\n  server.begin();\n}\n\nvoid loop() {\n  server.handleClient();\n}`,
      exercise: "أضف 4 أزرار للتحكم بـ 4 Relay. أضف صفحة حالة تعرض حالة كل ريليه.",
      dur: "55 د", free: false,
    },
  ],
}];

const totalLessons = mods.reduce((a, m) => a + m.lessons.length, 0);
const freeLessons = mods.reduce((a, m) => a + m.lessons.filter(l => l.free).length, 0);

/* ─── Flat lesson list for prev/next navigation ─── */
const allLessons = mods.flatMap((m) =>
  m.lessons.map((lesson, idx) => ({
    ...lesson,
    moduleId: m.id,
    lessonIdx: idx,
    moduleTitle: m.title,
  })),
);

function getGlobalIdx(moduleId: string, lessonIdx: number): number {
  const modIdx = mods.findIndex((m) => m.id === moduleId);
  if (modIdx < 0) return 0;
  let sum = 0;
  for (let i = 0; i < modIdx; i++) sum += mods[i].lessons.length;
  return sum + lessonIdx;
}

/* ─── Quiz Types & Data ─── */
interface QuizQ {
  q: string;
  opts: string[];
  correct: number;
}

const quizData: Record<string, QuizQ[]> = {
  m1: [
    { q: "ما الفرق الرئيسي بين معالج Arduino Uno و ESP32؟", opts: ["كلاهما 32-bit مزدوج النواة", "Uno: ATmega328P 16MHz، ESP32: Dual-Core 240MHz مع WiFi", "ESP32 أبطأ من Uno", "لا يوجد فرق"], correct: 1 },
    { q: "ما هو قانون أوم؟", opts: ["P = V × I", "R = V / I", "V = I × R", "I = V × R"], correct: 2 },
    { q: "ما هو استخدام Breadboard؟", opts: ["لحام المكونات بشكل دائم", "تخزين البرامج", "التوصيل المؤقت بدون لحام", "قياس الجهد الكهربائي"], correct: 2 },
    { q: "كم منفذ رقمي يملك Arduino Uno؟", opts: ["6", "10", "14", "20"], correct: 2 },
    { q: "ما هي دقة ADC على Arduino Uno؟", opts: ["8-bit (0-255)", "10-bit (0-1023)", "12-bit (0-4095)", "16-bit (0-65535)"], correct: 1 },
  ],
  m2: [
    { q: "متى يُنفّذ دالة setup()؟", opts: ["في كل دورة من loop()", "مرة واحدة فقط عند التشغيل", "عند الضغط على زر Reset فقط", "كل ثانية واحدة"], correct: 1 },
    { q: "ماذا يطبع Serial.println(5/2) في Arduino؟", opts: ["2.5", "2", "2.0", "خطأ في التجميع"], correct: 1 },
    { q: "ما هو نطاق قيم PWM على Arduino؟", opts: ["0 إلى 1023", "0 إلى 100", "0 إلى 255", "0 إلى 5"], correct: 2 },
    { q: "ما الفرق بين pinMode و digitalWrite؟", opts: ["كلاهما يكتب قيمة رقمية", "pinMode يعرف نوع المنفذ، digitalWrite يكتب قيمة", "digitalWrite يعرف نوع المنفذ", "لا يوجد فرق بينهما"], correct: 1 },
    { q: "ما فائدة المكتبات في Arduino؟", opts: ["زيادة سرعة المعالج", "إضافة وظائف جاهزة مثل Servo.h و DHT.h", "توسيع ذاكرة Flash", "تحسين جودة الكود المصدري"], correct: 1 },
  ],
  m3: [
    { q: "ما هي المسافة القصوى لحساس HC-SR04؟", opts: ["100 سم", "200 سم", "400 سم", "1000 سم"], correct: 2 },
    { q: "ماذا يقيس حساس DHT22؟", opts: ["الجهد والتيار فقط", "الحرارة والرطوبة", "الضغط الجوي فقط", "المسافة والسرعة"], correct: 1 },
    { q: "كيف يعمل حساس PIR HC-SR501؟", opts: ["بإرسال موجات فوق صوتية", "بكشف التغير في الأشعة تحت الحمراء", "بقياس شدة الضوء", "بقراءة درجة الحرارة"], correct: 1 },
    { q: "ما هو نوع إشارة حساس MQ-2؟", opts: ["Digital فقط", "I2C", "Analog", "SPI"], correct: 2 },
    { q: "servo.write(90) يفعل ماذا؟", opts: ["يدور المحرك بسرعة 90%", "يحرك السيرفو للزاوية 90 درجة", "يدير المحرك 90 لفة", "يوقف المحرك بعد 90 ثانية"], correct: 1 },
  ],
  m4: [
    { q: "ما وظيفة درايفر L298N؟", opts: ["قراءة حساسات الحرارة", "تشغيل محركات DC والتحكم باتجاهها", "الاتصال بشبكة Wi-Fi", "عرض البيانات على شاشة OLED"], correct: 1 },
    { q: "Blynk App يعمل بـ؟", opts: ["Bluetooth فقط", "كابل USB فقط", "Wi-Fi أو Bluetooth", "لا يحتاج اتصال"], correct: 2 },
    { q: "بروتوكول I2C يحتاج كم سلك؟", opts: ["2 سلك", "3 أسلاك", "4 أسلاك (SDA, SCL, VCC, GND)", "6 أسلاك"], correct: 2 },
    { q: "OLED SSD1306 يعمل بـ؟", opts: ["UART", "I2C أو SPI", "Analog فقط", "PWM"], correct: 1 },
    { q: "ما هو ThingSpeak؟", opts: ["لغة برمجة للمتحكمات", "منصة IoT سحابية لعرض البيانات كرسوم بيانية", "نوع من الحساسات", "مكتبة Arduino"], correct: 1 },
  ],
  m5: [
    { q: "ESP32 يدعم Wi-Fi على أي نطاق ترددي؟", opts: ["5 GHz فقط", "2.4 GHz فقط", "2.4 GHz و 5 GHz", "900 MHz"], correct: 1 },
    { q: "MQTT يعمل بنظام؟", opts: ["Request/Response مثل HTTP", "Publish/Subscribe", "Peer-to-Peer", "Client/Server فقط"], correct: 1 },
    { q: "ما معنى Web Server محلي على ESP32؟", opts: ["المتصفح يتصل بسيررفر على الإنترنت", "المتصفح يتصل مباشرة بالـ ESP32 عبر شبكة محلية", "ESP32 يتحكم بالسيرفر الخارجي", "لا يمكن عمل Web Server على ESP32"], correct: 1 },
    { q: "ما الفرق بين TCP و UDP؟", opts: ["لا يوجد فرق", "TCP أسرع من UDP دائماً", "TCP موثوق (يضمن التسليم)، UDP سريع (بدون ضمان)", "UDP موثوق أكثر من TCP"], correct: 2 },
    { q: "عنوان IP محلي لـ ESP32 يكون عادة؟", opts: ["10.0.0.x", "192.168.x.x", "172.16.x.x", "8.8.8.x"], correct: 1 },
  ],
};

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */
export default function LearningPathPage() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState<string | null>("m1");
  const [codeKey, setCodeKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => { setMounted(true); setCurrentUrl(window.location.href); }, []);

  /* ─── Quiz State ─── */
  const QUIZ_KEY = "mashari3_quiz_scores";
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | null>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Record<string, number>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = localStorage.getItem(QUIZ_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const selectQuizAnswer = (modId: string, qIdx: number, optIdx: number) => {
    if (quizSubmitted.includes(modId)) return;
    setQuizAnswers((prev) => ({ ...prev, [`${modId}-${qIdx}`]: optIdx }));
  };

  const submitQuiz = (modId: string) => {
    const qs = quizData[modId];
    if (!qs) return;
    let score = 0;
    qs.forEach((q, i) => {
      const ans = quizAnswers[`${modId}-${i}`];
      if (ans === q.correct) score++;
    });
    setQuizSubmitted((prev) => prev.includes(modId) ? prev : [...prev, modId]);
    setQuizScores((prev) => {
      const next = { ...prev, [modId]: Math.max(prev[modId] || 0, score) };
      localStorage.setItem(QUIZ_KEY, JSON.stringify(next));
      return next;
    });
  };

  const resetQuiz = (modId: string) => {
    const newAnswers = { ...quizAnswers };
    const qs = quizData[modId];
    if (!qs) return;
    qs.forEach((_, i) => { delete newAnswers[`${modId}-${i}`]; });
    setQuizAnswers(newAnswers);
    setQuizSubmitted((prev) => prev.filter((id) => id !== modId));
  };

  const allAnswered = (modId: string) => {
    const qs = quizData[modId];
    if (!qs) return false;
    return qs.every((_, i) => quizAnswers[`${modId}-${i}`] !== null && quizAnswers[`${modId}-${i}`] !== undefined);
  };

  const getScoreMessage = (score: number, total: number) => {
    const pct = score / total;
    if (pct === 1) return { emoji: "🎉", msg: "ممتاز" };
    if (pct >= 0.8) return { emoji: "👏", msg: "جيد جداً" };
    if (pct >= 0.6) return { emoji: "👍", msg: "جيد" };
    return { emoji: "💪", msg: "حاول مرة ثانية" };
  };

  /* ─── Bookmarks State ─── */
  const BOOKMARKS_KEY = "mashari3_bookmarks";
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(BOOKMARKS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  /* ─── Notes State ─── */
  const NOTES_PREFIX = "mashari3_notes";
  const [notes, setNotes] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved: Record<string, string> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(NOTES_PREFIX)) {
          saved[key.replace(NOTES_PREFIX + "-", "")] = localStorage.getItem(key) || "";
        }
      }
      return saved;
    } catch {
      return {};
    }
  });
  const notesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateNote = useCallback((key: string, value: string) => {
    setNotes((prev) => {
      const next = { ...prev, [key]: value };
      if (notesTimerRef.current) clearTimeout(notesTimerRef.current);
      notesTimerRef.current = setTimeout(() => {
        localStorage.setItem(`${NOTES_PREFIX}-${key}`, value);
      }, 300);
      return next;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (notesTimerRef.current) clearTimeout(notesTimerRef.current);
    };
  }, []);

  const STORAGE_KEY = "mashari3_learning_progress";
  const [completed, setCompleted] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try { setCompleted(JSON.parse(e.newValue)); } catch {}
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const markComplete = (lessonId: string) => {
    setCompleted((prev) => {
      if (prev.includes(lessonId)) return prev;
      const next = [...prev, lessonId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const progressPct = totalLessons > 0 ? Math.round((completed.length / totalLessons) * 100) : 0;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 pb-8" dir="rtl">
      {/* ── Header ── */}
      <section className="text-center">
        <Badge className="mb-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
          <GraduationCap className="h-3.5 w-3.5 ml-1.5" /> المسار التعليمي
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          من الصفر إلى الاحتراف
        </h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
          {mods.length} وحدات · {totalLessons} درس · {freeLessons} مجانية بالكامل · أكواد مختبرة على أجهزة حقيقية
        </p>
      </section>

      {/* ── Progress Bar ── */}
      <Card className="border-border/40">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <FileCode className="h-4 w-4 text-emerald-600" /> تقدمك في المسار
            </h3>
            <Badge variant="secondary" className="text-xs bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400">
              {completed.length} / {totalLessons}
            </Badge>
          </div>
          <Progress value={progressPct} className="h-2" />
          <p className="text-[11px] text-muted-foreground mt-2">
            {progressPct === 0
              ? "ابدأ بالوحدة الأولى — كل درس مجاني يشمل شرح + كود + تمرين"
              : progressPct === 100
                ? "🎉 أحسنت! لقد أكملت جميع الدروس"
                : `أكملت ${completed.length} من ${totalLessons} درس (${progressPct}%) — استمر!`}
          </p>
        </CardContent>
      </Card>

      {/* ── Modules Accordion ── */}
      <div className="space-y-4">
        {mods.map((m) => {
          const isOpen = open === m.id;
          return (
            <Card key={m.id} className="border-border/40 overflow-hidden">
              {/* Module Header */}
              <button
                onClick={() => setOpen(isOpen ? null : m.id)}
                className="w-full text-right"
              >
                <div className="p-5 hover:bg-muted/20 transition-colors flex items-start gap-4">
                  <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-bold text-[15px]">{m.title}</h3>
                      <Badge variant="secondary" className={`text-[10px] ${m.lvlC}`}>
                        {m.lvl}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                    <div className="flex items-center gap-4 mt-2 text-[10px] text-muted-foreground">
                      <span>{m.lessons.length} دروس</span>
                      <span>{m.lessons.filter(l => l.free).length} مجانية</span>
                    </div>
                  </div>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Lessons */}
              {isOpen && (
                <div className="px-5 pb-5 border-t border-border/30 pt-4 max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    {m.lessons.map((l, idx) => {
                      const ck = `${m.id}-${idx}`;
                      const showCode = codeKey === ck;
                      return (
                        <div key={idx} className="rounded-xl border border-border/30 p-4 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                          {/* Metadata: reading time + difficulty + components */}
                          <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-1">
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{l.dur}</span>
                            <span>{m.id === "m1" || m.id === "m2" ? "⭐" : m.id === "m3" ? "⭐⭐" : "⭐⭐⭐"}</span>
                            <span className="flex items-center gap-1"><Wrench className="h-3 w-3" />{2 + idx % 3} قطع</span>
                          </div>

                          {/* Share bar */}
                          <div className="flex items-center gap-1 mb-2">
                            <button onClick={() => { if (navigator.clipboard && currentUrl) { navigator.clipboard.writeText(currentUrl); toast.success("تم نسخ الرابط!"); } }} className="p-1 rounded text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors" title="نسخ الرابط">
                              <Copy className="h-3 w-3" />
                            </button>
                            {mounted && currentUrl && <>
                            <a href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(l.title + " — مشاريع إلكترونية")}`} target="_blank" rel="noopener noreferrer" className="p-1 rounded text-muted-foreground hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/30 transition-colors" title="مشاركة على تليجرام">
                              <Send className="h-3 w-3" />
                            </a>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-1 rounded text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors" title="مشاركة على فيسبوك">
                              <Facebook className="h-3 w-3" />
                            </a>
                            </>}
                          </div>

                          {/* Title & Description */}
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 shrink-0">
                              {completed.includes(ck)
                                ? <Check className="h-4 w-4 text-emerald-600 bg-emerald-100 dark:bg-emerald-950 rounded-full p-0.5" />
                                : l.free
                                  ? <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                  : <Lock className="h-4 w-4 text-muted-foreground" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className="font-semibold text-xs">
                                  {idx + 1}. {l.title}
                                </span>
                                <button
                                  onClick={() => toggleBookmark(ck)}
                                  className={`shrink-0 h-6 w-6 rounded-md flex items-center justify-center transition-colors ${bookmarks.includes(ck) ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400" : "text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"}`}
                                  title={bookmarks.includes(ck) ? "إزالة المفضلة" : "إضافة للمفضلة"}
                                >
                                  <Bookmark className={`h-3.5 w-3.5 ${bookmarks.includes(ck) ? "fill-current" : ""}`} />
                                </button>
                                <Badge variant="outline" className="text-[10px]">{l.dur}</Badge>
                                {l.free && (
                                  <Badge className="text-[10px] bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400">
                                    مجاني
                                  </Badge>
                                )}
                              </div>
                              <p className="text-[11px] text-muted-foreground leading-relaxed whitespace-pre-line">
                                {l.desc}
                              </p>
                            </div>
                          </div>

                          {/* New Concepts */}
                          <div className="mt-3 mr-7">
                            <p className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 mb-1.5 flex items-center gap-1">
                              <BookOpen className="h-3 w-3" /> المفاهيم الجديدة
                            </p>
                            <ul className="space-y-0.5">
                              {l.concepts.map((c, ci) => (
                                <li key={ci} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                                  <span className="text-emerald-500 mt-0.5">•</span>{c}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Code Block */}
                          <div className="mt-3 mr-7">
                            <button
                              onClick={() => {
                                const next = showCode ? null : ck;
                                setCodeKey(next);
                                if (next) markComplete(ck);
                              }}
                              className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                            >
                              <Play className="h-3 w-3" />
                              {completed.includes(ck) ? "✅ تم العرض" : showCode ? "إخفاء الكود" : "عرض الكود"}
                            </button>
                            {showCode && (
                              <div className="mt-2 relative">
                                <div className="absolute top-2 left-2 flex items-center gap-1">
                                  <button
                                    onClick={() => handleCopy(l.code)}
                                    className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                                    title="نسخ الكود"
                                  >
                                    {copied
                                      ? <Check className="h-3 w-3 text-emerald-400" />
                                      : <Copy className="h-3 w-3" />}
                                  </button>
                                  <button
                                    onClick={() => {
                                      const blob = new Blob([l.code], { type: "text/plain" });
                                      const url = URL.createObjectURL(blob);
                                      const a = document.createElement("a");
                                      a.href = url;
                                      a.download = `${l.title.replace(/[^a-zA-Z0-9]/g, "_")}.ino`;
                                      a.click();
                                      URL.revokeObjectURL(url);
                                      toast.success("تم تنزيل الملف!");
                                    }}
                                    className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                                    title="تنزيل .ino"
                                  >
                                    <Download className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                                <SyntaxHighlighter
                                  language="cpp"
                                  style={oneDark}
                                  showLineNumbers
                                  lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
                                  customStyle={{
                                    margin: 0,
                                    borderRadius: "0.75rem",
                                    padding: "1rem",
                                    fontSize: "0.7rem",
                                    lineHeight: "1.6",
                                    background: "#0f172a",
                                    maxHeight: "18rem",
                                    overflowY: "auto",
                                  }}
                                  wrapLongLines
                                >
                                  {l.code}
                                </SyntaxHighlighter>
                              </div>
                            )}
                          </div>

                          {/* Exercise */}
                          <div className="mt-3 mr-7 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 p-3 border border-emerald-100 dark:border-emerald-900">
                            <p className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-1">
                              <Lightbulb className="h-3 w-3" /> تمرين عملي
                            </p>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                              {l.exercise}
                            </p>
                          </div>

                          {/* Notes */}
                          <div className="mt-3 mr-7">
                            <p className="text-[10px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                              📝 ملاحظاتي
                            </p>
                            <Textarea
                              value={notes[ck] || ""}
                              onChange={(e) => updateNote(ck, e.target.value)}
                              onBlur={() => {
                                if (notesTimerRef.current) {
                                  clearTimeout(notesTimerRef.current);
                                  localStorage.setItem(`${NOTES_PREFIX}-${ck}`, notes[ck] || "");
                                }
                              }}
                              placeholder="اكتب ملاحظاتك هنا..."
                              rows={3}
                              className="text-xs border-border/40 bg-muted/30 rounded-lg resize-none"
                            />
                          </div>

                          {/* Navigation */}
                          {(() => {
                            const lessonGlobalIdx = getGlobalIdx(m.id, idx);
                            const prevLesson = lessonGlobalIdx > 0 ? allLessons[lessonGlobalIdx - 1] : null;
                            const nextLesson = lessonGlobalIdx < allLessons.length - 1 ? allLessons[lessonGlobalIdx + 1] : null;
                            return (
                              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/20">
                                {prevLesson ? (
                                  <button
                                    onClick={() => { setOpen(prevLesson.moduleId); }}
                                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-emerald-600 transition-colors"
                                  >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>الدرس السابق</span>
                                  </button>
                                ) : <div />}
                                {nextLesson ? (
                                  <button
                                    onClick={() => { setOpen(nextLesson.moduleId); }}
                                    className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                  >
                                    <span>الدرس التالي</span>
                                    <ChevronLeft className="h-3 w-3" />
                                  </button>
                                ) : (
                                  <span className="text-xs text-emerald-600 font-medium">🎉 تهانينا! أكملت المسار</span>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      );
                    })}
                  </div>

                  {/* ── Quiz Section ── */}
                  {quizData[m.id] && (
                    <div className="mt-5 pt-5 border-t border-border/30">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400">
                          <HelpCircle className="h-4 w-4" />
                        </div>
                        <h4 className="font-bold text-sm">اختبر معلوماتك</h4>
                        <Badge variant="secondary" className="text-[10px] bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400 mr-auto">
                          {quizData[m.id].length} أسئلة
                        </Badge>
                        {quizScores[m.id] !== undefined && !quizSubmitted.includes(m.id) && (
                          <Badge variant="secondary" className="text-[10px] bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400">
                            أفضل نتيجة: {quizScores[m.id]}/{quizData[m.id].length}
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-4">
                        {quizData[m.id].map((qq, qi) => {
                          const ansKey = `${m.id}-${qi}`;
                          const selected = quizAnswers[ansKey];
                          const isSubmitted = quizSubmitted.includes(m.id);
                          const isCorrect = selected === qq.correct;
                          const labels = ["أ", "ب", "ج", "د"];
                          return (
                            <div key={qi} className="rounded-lg border border-border/30 p-3">
                              <p className="font-semibold text-xs mb-2.5">
                                <span className="text-violet-600 dark:text-violet-400 ml-1.5">{qi + 1}.</span>
                                {qq.q}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {qq.opts.map((opt, oi) => {
                                  const isSelected = selected === oi;
                                  let optClass = "text-xs p-2 rounded-lg border border-border/30 cursor-pointer transition-all text-right flex items-start gap-2 hover:border-violet-200 dark:hover:border-violet-800 hover:bg-violet-50/50 dark:hover:bg-violet-950/20";
                                  if (isSubmitted) {
                                    if (oi === qq.correct) {
                                      optClass = "text-xs p-2 rounded-lg border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 text-right flex items-start gap-2";
                                    } else if (isSelected && !isCorrect) {
                                      optClass = "text-xs p-2 rounded-lg border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-200 text-right flex items-start gap-2";
                                    } else {
                                      optClass = "text-xs p-2 rounded-lg border border-border/20 text-muted-foreground text-right flex items-start gap-2 opacity-50";
                                    }
                                  } else if (isSelected) {
                                    optClass = "text-xs p-2 rounded-lg border border-violet-300 dark:border-violet-700 bg-violet-50 dark:bg-violet-950/30 text-violet-800 dark:text-violet-200 text-right flex items-start gap-2 font-medium";
                                  }
                                  return (
                                    <button
                                      key={oi}
                                      onClick={() => selectQuizAnswer(m.id, qi, oi)}
                                      disabled={isSubmitted}
                                      className={optClass}
                                    >
                                      <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px] font-bold mt-px">
                                        {isSubmitted && oi === qq.correct ? (
                                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                        ) : isSubmitted && isSelected && !isCorrect ? (
                                          <XCircle className="h-3.5 w-3.5 text-red-600" />
                                        ) : (
                                          labels[oi]
                                        )}
                                      </span>
                                      <span className="flex-1 leading-relaxed">{opt}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Score / Submit / Reset */}
                      {quizSubmitted.includes(m.id) ? (
                        <div className="mt-4 text-center">
                          {(() => {
                            const score = quizScores[m.id] || 0;
                            const total = quizData[m.id].length;
                            const { emoji, msg } = getScoreMessage(score, total);
                            return (
                              <div className="rounded-xl border border-border/30 p-4 bg-gradient-to-br from-violet-50/50 to-emerald-50/50 dark:from-violet-950/20 dark:to-emerald-950/20">
                                <p className="text-2xl mb-1">{emoji}</p>
                                <p className="font-bold text-base">نتيجتك: {score}/{total}</p>
                                <p className="text-sm text-muted-foreground mt-1">{msg}</p>
                              </div>
                            );
                          })()}
                          <Button
                            variant="outline"
                            className="mt-3 text-xs gap-1.5"
                            onClick={() => resetQuiz(m.id)}
                          >
                            <RotateCcw className="h-3 w-3" /> أعد المحاولة
                          </Button>
                        </div>
                      ) : (
                        <div className="mt-4 text-center">
                          <Button
                            className="bg-violet-600 hover:bg-violet-700 text-white text-xs gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
                            disabled={!allAnswered(m.id)}
                            onClick={() => submitQuiz(m.id)}
                          >
                            <Send className="h-3 w-3" /> تحقق من الإجابات
                          </Button>
                          {!allAnswered(m.id) && (
                            <p className="text-[10px] text-muted-foreground mt-2">
                              أجب على جميع الأسئلة ثم اضغط تحقق
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 overflow-hidden">
        <CardContent className="p-6 text-center">
          <Lightbulb className="h-8 w-8 mx-auto mb-3 text-emerald-600" />
          <h3 className="font-bold text-lg mb-2">محتاج مساعدة في مشروعك؟</h3>
          <p className="text-sm text-muted-foreground mb-4">
            اسأل في مجموعة تليجرام — الرد خلال دقائق
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl gap-2" asChild>
            <a href="https://t.me/Arsuino1" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> مجموعة النقاش
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
