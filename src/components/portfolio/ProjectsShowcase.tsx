"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Car,
  Lock,
  PartyPopper,
  Thermometer,
  Droplets,
  DoorOpen,
  Flame,
  Square,
  Wind,
  CreditCard,
  ShieldCheck,
  Music,
  Lightbulb,
  ChevronDown,
  Code2,
  Activity,
  Cpu,
  Zap,
  Eye,
  EyeOff,
  Volume2,
  Timer,
} from "lucide-react";
import { useLang } from "@/lib/language";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";

/* ═══════════════════════════════════════════════════════════════
   DATA — 4 Real IoT Projects
   ═══════════════════════════════════════════════════════════════ */

interface IoTProject {
  id: number;
  icon: React.ReactNode;
  statusColor: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  hardware: string[];
  tech: string[];
  innovation: { ar: string; en: string };
  codeSnippet: string;
  architecture: string;
}

const PROJECTS: IoTProject[] = [
  {
    id: 1,
    icon: <Building2 className="h-6 w-6" />,
    statusColor: "#00ff66",
    title: {
      ar: "نظام إدارة المباني الذكية",
      en: "Smart Building Management System",
    },
    description: {
      ar: "نظام أتمتة هجين متكامل يعتمد على معمارية ثنائية المعالجات (Arduino Mega + ESP8266) لإدارة صلاحيات الدخول، حماية المناطق الأمنية، تتبع البيئة المحيطة، والتحكم عن بعد عبر Firebase وتطبيق أندرويد.",
      en: "A hybrid automation system using dual-controller architecture (Arduino Mega + ESP8266) for access control, security zones, environmental monitoring, and remote control via Firebase and Android app.",
    },
    hardware: [
      "Arduino Mega",
      "ESP8266",
      "DHT11",
      "Flame Sensor",
      "PIR",
      "LDR",
      "Servo",
      "Relay",
      "LCD 16x2",
      "Keypad 4x3",
      "DS3231 RTC",
    ],
    tech: ["C++", "Firebase RTDB", "Kotlin", "Serial3"],
    innovation: {
      ar: "المنطق المحلي أولاً — كشف الحريق يفتح الأبواب بدون إنترنت",
      en: 'Safety-first local logic — fire detection opens doors without internet',
    },
    codeSnippet: `// 🔥 FIRE SAFETY — Local logic (no internet needed)
void checkFireSensor() {
  bool fireDetected = digitalRead(FLAME_PIN) == LOW;
  if (fireDetected) {
    digitalWrite(BUZZER_PIN, HIGH);
    // OVERRIDE: Open ALL doors immediately
    for (int i = 0; i < NUM_DOORS; i++) {
      doorServos[i].write(OPEN_ANGLE);
      doorStates[i] = true;
    }
    // Log to Firebase (best-effort, non-blocking)
    Firebase.setString("/alerts/fire", "ACTIVE");
    Firebase.setInt("/safety/override", 1);
  }
}`,
    architecture: `┌─────────────┐   Serial3   ┌──────────────┐
│  Arduino     │◄──────────►│   ESP8266    │
│  Mega 2560   │            │  (WiFi)      │
│              │            └──────┬───────┘
│ ┌──────────┐ │                   │ HTTPS
│ │ DHT11    │ │            ┌──────▼───────┐
│ │ Flame    │ │            │  Firebase    │
│ │ PIR×3    │ │            │  RTDB        │
│ │ LDR      │ │            └──────┬───────┘
│ │ Keypad   │ │                   │
│ │ RTC      │ │            ┌──────▼───────┐
│ │ LCD 16×2 │ │            │  Android App │
│ │ Servo×2  │ │            └──────────────┘
│ └──────────┘ │
└─────────────┘`,
  },
  {
    id: 2,
    icon: <Car className="h-6 w-6" />,
    statusColor: "#00e5ff",
    title: {
      ar: "نظام مواقف السيارات الذكي ومنظومة السلامة",
      en: "Smart Parking & Multi-Sensor Safety",
    },
    description: {
      ar: "منظومة حوسبة فيزيائية متطورة تجمع بين 9 حساسات مواقف IR، كشف الغاز MQ-2، والاهتزاز SW-420، مربوطة ببوابة ويب عبر معمارية 3 مستويات (Mega → Uno Bridge → Python API → Firebase).",
      en: "Advanced physical computing system combining 9 IR parking sensors, MQ-2 gas detection, SW-420 vibration sensing, connected to a web portal via 3-tier architecture (Mega → Uno Bridge → Python API → Firebase).",
    },
    hardware: [
      "Arduino Mega 2560",
      "Arduino Uno",
      "MQ-2",
      "SW-420",
      "LDR",
      "TTP223",
      "3× Servo",
      "Relay",
      "Buzzer",
      "LCD 20×4",
      "9× IR",
    ],
    tech: ["C++", "Python", "Firebase REST", "GitHub Pages"],
    innovation: {
      ar: "خط أنابيب urllib غير قابل للحجب مع منع إعادة ضبط DTR/RTS",
      en: "Non-blocking urllib pipeline with DTR/RTS reset prevention",
    },
    codeSnippet: `// 🔧 Non-blocking sensor scan with serial bridge
void scanAllSensors() {
  parkingCount = 0;
  for (int i = 0; i < 9; i++) {
    slots[i].occupied = digitalRead(IR_PINS[i]) == LOW;
    if (slots[i].occupied) parkingCount++;
  }
  // Send to Uno bridge (DTR/RTS safe)
  Serial1.print("P:");
  for (int i = 0; i < 9; i++)
    Serial1.print(slots[i].occupied ? "1" : "0");
  Serial1.print(",G:");
  Serial1.println(analogRead(GAS_PIN));
}`,
    architecture: `┌─────────────┐  Serial1  ┌───────────┐  USB  ┌────────────┐
│  Arduino    │──────────►│  Arduino  │──────►│  Python    │
│  Mega 2560  │           │  Uno      │       │  API       │
│             │           │ (Bridge)  │       │  Server    │
│ ┌─────────┐ │           └───────────┘       └─────┬──────┘
│ │ 9× IR   │ │                                      │
│ │ MQ-2    │ │                               REST   │
│ │ SW-420  │ │                               API   │
│ │ LDR     │ │                                      ▼
│ │ TTP223  │ │                               ┌─────────────┐
│ │ 3×Servo │ │                               │  Firebase   │
│ │ Buzzer  │ │                               └─────┬──────┘
│ │ LCD20×4 │ │                                     │
│ └─────────┘ │                               ┌─────▼──────┐
└─────────────┘                               │ GitHub     │
                                              │ Pages Web  │
                                              └────────────┘`,
  },
  {
    id: 3,
    icon: <Lock className="h-6 w-6" />,
    statusColor: "#ffab00",
    title: {
      ar: "الخزنة الذكية عالية الأمان",
      en: "High-Security RFID Smart Safe",
    },
    description: {
      ar: "نظام حماية متطور يعتمد على معالجة الحافة (Edge Computing) مع خوارزمية مكافحة تجمد المعالج المبتكرة تضمن عمل قارئ RFID بنسبة 100% حتى مع ضعف الشبكة.",
      en: "Advanced security system using edge computing with an innovative Anti-Freeze Algorithm ensuring 100% RFID reader performance even on weak networks.",
    },
    hardware: ["ESP32", "MFRC522 RFID", "Relay", "Buzzer", "12V Solenoid Lock"],
    tech: ["C++", "Firebase REST", "Preferences", "HTTPClient"],
    innovation: {
      ar: "خوارزمية مكافحة التجمد: MAX_FAILS=3, FAIL_COOLDOWN=30 ثانية",
      en: "Anti-Freeze: MAX_FAILS=3, FAIL_COOLDOWN=30s",
    },
    codeSnippet: `// 🛡️ Anti-Freeze Algorithm — 100% RFID uptime
#define MAX_FAILS    3
#define FAIL_COOLDOWN 30000  // 30 seconds
unsigned long lastFailTime = 0;
int consecutiveFails = 0;

bool checkRFID() {
  bool cardPresent = mfrc522.PICC_IsNewCardPresent();
  if (!cardPresent) {
    consecutiveFails++;
    if (consecutiveFails >= MAX_FAILS) {
      lastFailTime = millis();
      // Hard reset SPI + MFRC522
      SPI.end(); delay(100);
      SPI.begin(); mfrc522.PCD_Init();
      consecutiveFails = 0;
    }
    return false;
  }
  consecutiveFails = 0;  // Success — reset counter
  return mfrc522.PICC_ReadCardSerial();
}`,
    architecture: `┌──────────────────────────────────────────┐
│              ESP32 (Edge Node)          │
│                                        │
│  ┌──────────┐    ┌──────────────────┐  │
│  │ MFRC522  │    │  Anti-Freeze     │  │
│  │ RFID     │───►│  Algorithm       │  │
│  │ Reader   │    │  MAX_FAILS=3     │  │
│  └──────────┘    │  COOLDOWN=30s    │  │
│                  └────────┬─────────┘  │
│  ┌──────────┐             │            │
│  │ Buzzer   │◄────────────┤            │
│  │ Relay    │◄────────────┤            │
│  │ Solenoid │             │            │
│  └──────────┘             │            │
│                           │ HTTP       │
│  ┌──────────┐            ▼            │
│  │ Flash    │    ┌──────────────┐      │
│  │ (Prefs)  │    │   Firebase   │      │
│  │ UIDs     │    │   REST API   │      │
│  └──────────┘    └──────────────┘      │
└──────────────────────────────────────────┘`,
  },
  {
    id: 4,
    icon: <PartyPopper className="h-6 w-6" />,
    statusColor: "#b44dff",
    title: {
      ar: "نظام أتمتة صالات الأفراح الذكي",
      en: "Automated Smart Wedding Hall System",
    },
    description: {
      ar: "نظام تفاعلي متكامل لإدارة الصالات يعتمد على حساسات التقارب والمسافة لإطلاق المؤثرات الضوئية والموسيقى عبر DFPlayer Mini، مع آلة حالات برمجية (State Machine) معقدة.",
      en: "Interactive events management system using proximity and distance sensors to trigger lighting effects and music via DFPlayer Mini, with a complex State Machine architecture.",
    },
    hardware: [
      "ESP32",
      "DFPlayer Mini",
      "2× HC-SR04",
      "IR Sensor",
      "2× Servo",
      "6-Channel Relay",
      "Speaker",
    ],
    tech: ["C++", "Firebase RTDB", "ESP32Servo", "DFRobotDFPlayerMini"],
    innovation: {
      ar: "آلة حالات مع 6 أوضاع إضاءة + تشغيل تلقائي MP3",
      en: "State Machine with 6 lighting modes + auto-next MP3",
    },
    codeSnippet: `// 🎭 State Machine — 6 Lighting Modes + Auto MP3
enum HallState { IDLE, ENTRY, WEDDING, DANCE, CAKE, EXIT };
HallState currentState = IDLE;

void updateStateMachine() {
  unsigned long now = millis();
  switch (currentState) {
    case ENTRY:
      if (now - stateStart > 10000) {
        currentState = WEDDING; stateStart = now;
        setLightingMode(WARM_WHITE);
        dfplayer.play(2);  // Wedding march
      }
      break;
    case DANCE:
      cycleLightingEffects(); // 6 modes rotating
      if (dfplayer.available())
        dfplayer.play(nextTrack++); // Auto-advance
      break;
    case EXIT:
      if (now - stateStart > 15000)
        currentState = IDLE; // Full shutdown
      break;
  }
}`,
    architecture: `┌────────────────────────────────────────────┐
│            ESP32 (State Machine)           │
│                                            │
│  ┌───────────┐    ┌────────────────────┐   │
│  │ HC-SR04×2 │───►│                    │   │
│  │ IR Sensor │───►│   State Machine    │   │
│  └───────────┘    │  ┌───┐  ┌─────┐   │   │
│                   │  │   ▼  ▼     │    │   │
│  ┌───────────┐    │  │IDLE│ENTRY│   │   │
│  │ DFPlayer  │◄───┤  │  ↓  │ ↓   │   │   │
│  │ Mini      │    │  │EXIT│WED. │   │   │
│  │ + Speaker │    │  │  ↓  │ ↓   │   │   │
│  └───────────┘    │  │DANCE│CAKE │   │   │
│                   │  └─────────────┘   │   │
│  ┌───────────┐    └────────┬───────────┘   │
│  │ 6-Ch Relay│◄────────────┤               │
│  │ + Servo×2 │             │               │
│  └───────────┘             │ Firebase RTDB  │
│                   ┌────────▼──────────┐    │
│                   │   Remote Control  │    │
│                   └───────────────────┘    │
└────────────────────────────────────────────┘`,
  },
];

/* ═══════════════════════════════════════════════════════════════
   TELEMETRY SIMULATION HOOKS
   ═══════════════════════════════════════════════════════════════ */

function useBuildingTelemetry() {
  const [data, setData] = useState({
    temp: 24,
    humidity: 55,
    doorOpen: false,
    fireAlarm: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        temp: Math.max(18, Math.min(40, prev.temp + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2)),
        humidity: Math.max(20, Math.min(90, prev.humidity + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 5)),
        doorOpen: Math.random() > 0.85,
        fireAlarm: Math.random() > 0.97,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return data;
}

function useParkingTelemetry() {
  const initial = [true, true, false, true, false, false, true, true, false];
  const [slots, setSlots] = useState(initial);
  const [gasLevel, setGasLevel] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlots((prev) => {
        const next = [...prev];
        if (Math.random() > 0.7) {
          const idx = Math.floor(Math.random() * 9);
          next[idx] = !next[idx];
        }
        return next;
      });
      setGasLevel(Math.max(0, Math.min(100, gasLevel + (Math.random() - 0.5) * 10)));
    }, 3000);
    return () => clearInterval(interval);
  }, [gasLevel]);

  return { slots, gasLevel, occupied: slots.filter(Boolean).length };
}

function useSafeTelemetry() {
  const [data, setData] = useState({
    lastUID: "──",
    locked: true,
    scanning: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        scanning: true,
      }));
      setTimeout(() => {
        if (Math.random() > 0.4) {
          const uid = `A3:B${Math.floor(Math.random() * 9)}:C${Math.floor(Math.random() * 99).toString().padStart(2, "0")}`;
          const authorized = Math.random() > 0.3;
          setData({
            lastUID: uid,
            locked: !authorized,
            scanning: false,
          });
        } else {
          setData((prev) => ({ ...prev, scanning: false }));
        }
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return data;
}

function useWeddingTelemetry() {
  const modes = ["IDLE", "ENTRY", "WEDDING", "DANCE", "CAKE", "EXIT"] as const;
  const [data, setData] = useState({
    mode: "WEDDING" as (typeof modes)[number],
    trackNum: 2,
    lights: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        mode: modes[Math.floor(Math.random() * modes.length)],
        trackNum: Math.max(1, Math.min(15, prev.trackNum + (Math.random() > 0.5 ? 1 : -1))),
        lights: Math.random() > 0.2,
      }));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return data;
}

/* ═══════════════════════════════════════════════════════════════
   TELEMETRY PANELS
   ═══════════════════════════════════════════════════════════════ */

function BuildingTelemetry() {
  const { t: lang } = useLang();
  const { temp, humidity, doorOpen, fireAlarm } = useBuildingTelemetry();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {/* Temperature */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#00ff6620]">
        <div className="flex items-center gap-1.5 mb-2">
          <Thermometer className="h-3.5 w-3.5 text-[#ff6b6b]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            {lang("الحرارة", "Temp")}
          </span>
        </div>
        <div className="text-xl font-bold text-[#ff6b6b] font-mono">{temp.toFixed(1)}°C</div>
        <div className="mt-1.5 h-1.5 bg-[#1a2340] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${Math.min(100, ((temp - 10) / 40) * 100)}%`,
              background: "linear-gradient(90deg, #00ff66, #ffab00, #ff3d5a)",
            }}
          />
        </div>
      </div>

      {/* Humidity */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#00ff6620]">
        <div className="flex items-center gap-1.5 mb-2">
          <Droplets className="h-3.5 w-3.5 text-[#4fc3f7]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            {lang("الرطوبة", "Humidity")}
          </span>
        </div>
        <div className="text-xl font-bold text-[#4fc3f7] font-mono">{humidity.toFixed(0)}%</div>
        <div className="mt-1.5 h-1.5 bg-[#1a2340] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-[#4fc3f7] transition-all duration-1000"
            style={{ width: `${humidity}%` }}
          />
        </div>
      </div>

      {/* Door Status */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#00ff6620]">
        <div className="flex items-center gap-1.5 mb-2">
          <DoorOpen className="h-3.5 w-3.5 text-[#00ff66]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            {lang("الباب", "Door")}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className={doorOpen ? "led-on" : "led-off"} />
          <span className="text-sm font-semibold font-mono" style={{ color: doorOpen ? "#00ff66" : "#2a3d5c" }}>
            {doorOpen ? lang("مفتوح", "OPEN") : lang("مغلق", "LOCKED")}
          </span>
        </div>
      </div>

      {/* Fire Alarm */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#00ff6620]">
        <div className="flex items-center gap-1.5 mb-2">
          <Flame className="h-3.5 w-3.5 text-[#ff3d5a]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            {lang("الحريق", "Fire")}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className={fireAlarm ? "led-red animate-pulse" : "led-off"} />
          <span className="text-sm font-semibold font-mono" style={{ color: fireAlarm ? "#ff3d5a" : "#2a3d5c" }}>
            {fireAlarm ? lang("إنذار!", "ALARM!") : lang("آمن", "SAFE")}
          </span>
        </div>
      </div>
    </div>
  );
}

function ParkingTelemetry() {
  const { t: lang } = useLang();
  const { slots, gasLevel, occupied } = useParkingTelemetry();

  return (
    <div className="space-y-3">
      {/* Parking Slots Grid */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#00e5ff20]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            {lang("المواقف", "Parking Slots")}
          </span>
          <span className="text-xs font-mono text-[#00e5ff]">
            {occupied}/9 {lang("مشغول", "occupied")}
          </span>
        </div>
        <div className="grid grid-cols-9 gap-1.5">
          {slots.map((filled, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.3 }}
              className="aspect-square rounded-md flex items-center justify-center transition-all duration-500"
              style={{
                background: filled
                  ? "linear-gradient(135deg, #ff3d5a, #ff6b6b)"
                  : "linear-gradient(135deg, #0a0f1a, #1a2340)",
                border: filled ? "1px solid #ff3d5a80" : "1px solid #00e5ff30",
                boxShadow: filled ? "0 0 8px #ff3d5a40" : "none",
              }}
              title={`Slot ${i + 1}: ${filled ? lang("مشغول", "Occupied") : lang("فارغ", "Empty")}`}
            >
              <Car className={`h-2.5 w-2.5 ${filled ? "text-white" : "text-[#00e5ff60]"}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gas Level */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#00e5ff20]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Wind className="h-3.5 w-3.5 text-[#ffab00]" />
            <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
              MQ-2 {lang("الغاز", "Gas")}
            </span>
          </div>
          <span
            className="text-xs font-mono font-bold"
            style={{ color: gasLevel > 60 ? "#ff3d5a" : gasLevel > 30 ? "#ffab00" : "#00ff66" }}
          >
            {gasLevel.toFixed(0)} ppm
          </span>
        </div>
        <div className="h-2 bg-[#1a2340] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            animate={{ width: `${Math.min(100, gasLevel)}%` }}
            transition={{ duration: 1 }}
            style={{
              background:
                gasLevel > 60
                  ? "linear-gradient(90deg, #ffab00, #ff3d5a)"
                  : gasLevel > 30
                    ? "linear-gradient(90deg, #00ff66, #ffab00)"
                    : "#00ff66",
              boxShadow: gasLevel > 60 ? "0 0 10px #ff3d5a60" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function SafeTelemetry() {
  const { t: lang } = useLang();
  const { lastUID, locked, scanning } = useSafeTelemetry();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {/* Card Reader Simulation */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#ffab0020]">
        <div className="flex items-center gap-1.5 mb-2">
          <CreditCard className="h-3.5 w-3.5 text-[#ffab00]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            RFID {lang("القراءة", "Reader")}
          </span>
          {scanning && (
            <span className="text-[9px] text-[#ffab00] animate-pulse ml-auto">
              ● {lang("مسح...", "Scanning...")}
            </span>
          )}
        </div>
        <div className="bg-[#0a0f1a] border border-[#ffab0030] rounded-md px-3 py-2 font-mono text-sm">
          <span className="text-[#7a8ba8] text-[10px]">UID: </span>
          <motion.span
            key={lastUID}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#ffab00] font-bold"
          >
            {lastUID}
          </motion.span>
        </div>
      </div>

      {/* Lock Status */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#ffab0020]">
        <div className="flex items-center gap-1.5 mb-2">
          <ShieldCheck className="h-3.5 w-3.5 text-[#00ff66]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            {lang("حالة القفل", "Lock Status")}
          </span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <motion.div
            animate={{ rotate: locked ? 0 : 45 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Lock className={`h-5 w-5 ${locked ? "text-[#00ff66]" : "text-[#ffab00]"}`} />
          </motion.div>
          <span
            className="text-sm font-semibold font-mono"
            style={{ color: locked ? "#00ff66" : "#ffab00" }}
          >
            {locked ? lang("🔒 مقفل", "🔒 LOCKED") : lang("🔓 مفتوح", "🔓 UNLOCKED")}
          </span>
        </div>
      </div>
    </div>
  );
}

function WeddingTelemetry() {
  const { t: lang } = useLang();
  const { mode, trackNum, lights } = useWeddingTelemetry();

  const modeColors: Record<string, string> = {
    IDLE: "#7a8ba8",
    ENTRY: "#00ff66",
    WEDDING: "#ffab00",
    DANCE: "#b44dff",
    CAKE: "#ff6b6b",
    EXIT: "#00e5ff",
  };

  const modeLabels: Record<string, { ar: string; en: string }> = {
    IDLE: { ar: "خامل", en: "IDLE" },
    ENTRY: { ar: "دخول", en: "ENTRY" },
    WEDDING: { ar: "حفل", en: "WEDDING" },
    DANCE: { ar: "رقص", en: "DANCE" },
    CAKE: { ar: "كعكة", en: "CAKE" },
    EXIT: { ar: "خروج", en: "EXIT" },
  };

  const color = modeColors[mode] || "#7a8ba8";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {/* Hall Mode */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#b44dff20]">
        <div className="flex items-center gap-1.5 mb-2">
          <Activity className="h-3.5 w-3.5 text-[#b44dff]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            {lang("وضع القاعة", "Hall Mode")}
          </span>
        </div>
        <motion.span
          key={mode}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono"
          style={{
            color,
            background: `${color}18`,
            border: `1px solid ${color}40`,
            boxShadow: `0 0 12px ${color}30`,
          }}
        >
          {lang(modeLabels[mode].ar, modeLabels[mode].en)}
        </motion.span>
      </div>

      {/* Music Track */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#b44dff20]">
        <div className="flex items-center gap-1.5 mb-2">
          <Music className="h-3.5 w-3.5 text-[#00e5ff]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            DFPlayer
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-[#00e5ff]" />
          <span className="text-sm font-mono font-bold text-[#00e5ff]">
            Track #{trackNum.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Light State */}
      <div className="bg-[#0a0f1a] rounded-lg p-3 border border-[#b44dff20]">
        <div className="flex items-center gap-1.5 mb-2">
          <Lightbulb className="h-3.5 w-3.5 text-[#ffab00]" />
          <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider">
            {lang("الإضاءة", "Lights")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${lights ? "led-amber" : "led-off"}`}
          />
          <span className="text-sm font-mono" style={{ color: lights ? "#ffab00" : "#2a3d5c" }}>
            {lights
              ? lang("6 قنوات فعّالة", "6-Ch Active")
              : lang("مطفأة", "OFF")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT CARD
   ═══════════════════════════════════════════════════════════════ */

interface ProjectCardProps {
  project: IoTProject;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { t: lang, isRTL } = useLang();
  const [expanded, setExpanded] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const telemetryMap: Record<number, React.ReactNode> = {
    1: <BuildingTelemetry />,
    2: <ParkingTelemetry />,
    3: <SafeTelemetry />,
    4: <WeddingTelemetry />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="glass-card-dark rounded-xl overflow-hidden card-hover"
    >
      {/* ── Status Top Border ── */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.statusColor}, ${project.statusColor}60, transparent)`,
        }}
      />

      {/* ── Card Header ── */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
            style={{
              background: `${project.statusColor}15`,
              border: `1px solid ${project.statusColor}30`,
              color: project.statusColor,
            }}
          >
            {project.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="font-bold text-sm sm:text-base text-foreground leading-tight"
              dir={isRTL() ? "rtl" : "ltr"}
            >
              {lang(project.title.ar, project.title.en)}
            </h3>
            <p
              className="text-xs text-[#7a8ba8] mt-0.5 font-mono"
              dir="ltr"
            >
              {lang(project.title.en, project.title.ar)}
            </p>
          </div>
        </div>

        {/* ── Description ── */}
        <p
          className="text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed mb-4"
          dir={isRTL() ? "rtl" : "ltr"}
        >
          {lang(project.description.ar, project.description.en)}
        </p>

        {/* ── Hardware Tags ── */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1.5">
            <Cpu className="h-3 w-3 text-[#7a8ba8]" />
            <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold">
              {lang("العتاد", "Hardware")}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.hardware.map((hw) => (
              <span
                key={hw}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#151d33] text-[#c5cdd8] border border-[#1e2d4d]"
              >
                {hw}
              </span>
            ))}
          </div>
        </div>

        {/* ── Tech Tags ── */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1.5">
            <Code2 className="h-3 w-3 text-[#7a8ba8]" />
            <span className="text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold">
              {lang("التقنيات", "Tech")}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium border"
                style={{
                  background: `${project.statusColor}10`,
                  color: project.statusColor,
                  borderColor: `${project.statusColor}30`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Key Innovation ── */}
        <div
          className="rounded-lg p-3 mb-4"
          style={{
            background: `${project.statusColor}08`,
            border: `1px solid ${project.statusColor}20`,
          }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <Zap className="h-3 w-3" style={{ color: project.statusColor }} />
            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: project.statusColor }}>
              {lang("الابتكار الرئيسي", "Key Innovation")}
            </span>
          </div>
          <p
            className="text-xs font-medium"
            style={{ color: `${project.statusColor}dd` }}
            dir={isRTL() ? "rtl" : "ltr"}
          >
            {lang(project.innovation.ar, project.innovation.en)}
          </p>
        </div>

        {/* ── Expand/Collapse Button ── */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium transition-all duration-200"
          style={{
            background: expanded ? `${project.statusColor}15` : "transparent",
            color: project.statusColor,
            border: `1px solid ${expanded ? `${project.statusColor}40` : `${project.statusColor}20`}`,
          }}
        >
          {expanded ? (
            <>
              {lang("إغلاق التفاصيل", "Collapse Details")}
              <ChevronDown className="h-3.5 w-3.5 rotate-180" />
            </>
          ) : (
            <>
              {lang("عرض التفاصيل", "View Details")}
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>

      {/* ── Expanded Content ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#1e2d4d]" />

            {/* ── Live Telemetry ── */}
            <div className="px-5 sm:px-6 pt-5 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-4 w-4 text-[#00ff66]" />
                <span className="text-xs font-semibold text-foreground">
                  {lang("📡 التيليمتري الحي", "📡 Live Telemetry")}
                </span>
                <span className="flex items-center gap-1 text-[9px] text-[#00ff66] animate-pulse ml-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
                  LIVE
                </span>
              </div>
              {telemetryMap[project.id]}
            </div>

            {/* ── Code Snippet Toggle ── */}
            <div className="px-5 sm:px-6 pb-4">
              <button
                onClick={() => setShowCode(!showCode)}
                className="flex items-center gap-2 text-xs font-medium text-[#7a8ba8] hover:text-foreground transition-colors"
              >
                {showCode ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                {lang("عرض الكود", "View Code")}
              </button>
            </div>

            {/* ── Code Block ── */}
            <AnimatePresence>
              {showCode && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-4">
                    <div className="rounded-lg overflow-hidden border border-[#1e2d4d]">
                      <SyntaxHighlighter
                        language="cpp"
                        style={atomDark}
                        customStyle={{
                          margin: 0,
                          padding: "1rem",
                          background: "#080c16",
                          fontSize: "11px",
                          lineHeight: "1.6",
                          borderRadius: "0.5rem",
                        }}
                        showLineNumbers
                        lineNumberStyle={{
                          color: "#2a3d5c",
                          fontSize: "10px",
                          minWidth: "2rem",
                        }}
                      >
                        {project.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Architecture Diagram ── */}
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="flex items-center gap-2 mb-3">
                <Timer className="h-4 w-4 text-[#00ff66]" />
                <span className="text-xs font-semibold text-foreground">
                  {lang("📐 معمارية النظام", "📐 System Architecture")}
                </span>
              </div>
              <div
                className="bg-[#080c16] rounded-lg p-4 border border-[#00ff6615] overflow-x-auto code-scroll"
              >
                <pre
                  className="text-[10px] sm:text-[11px] leading-relaxed font-mono whitespace-pre"
                  style={{ color: "#00ff66" }}
                  dir="ltr"
                >
                  {project.architecture}
                </pre>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — ProjectsShowcase
   ═══════════════════════════════════════════════════════════════ */

export default function ProjectsShowcase() {
  const { t: lang, isRTL } = useLang();

  return (
    <section className="w-full" dir={isRTL() ? "rtl" : "ltr"}>
      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 neon-text" />
            <span className="text-xs font-semibold tracking-wider uppercase neon-text">
              {lang("معرض المشاريع", "Projects Showcase")}
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#00ff6630] to-transparent" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
          {lang("مشاريع إنترنت الأشياء الحقيقية", "Real IoT Projects")}
        </h2>
        <p className="text-sm text-[#7a8ba8] max-w-2xl">
          {lang(
            "4 مشاريع حوسبة فيزيائية متكاملة بمعماريات متنوعة — من أتمتة المباني إلى صالات الأفراح الذكية",
            "4 complete physical computing projects with diverse architectures — from building automation to smart wedding halls"
          )}
        </p>
      </motion.div>

      {/* ── Project Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
