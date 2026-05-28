"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Wifi,
  WifiOff,
  Thermometer,
  Droplets,
  RotateCcw,
  AlertTriangle,
  Zap,
  Activity,
  Monitor,
  CircuitBoard,
  Radio,
} from "lucide-react";
import { useLang } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ═══════════════════════════════════════════
   Types
   ═══════════════════════════════════════════ */

interface GpioPin {
  id: string;
  label: string;
  labelAr: string;
  icon: React.ReactNode;
}

interface SensorData {
  temperature: number;
  humidity: number;
}

interface LogEntry {
  id: number;
  message: string;
  timestamp: string;
  type: "ok" | "data" | "gpio" | "info" | "warn" | "alarm";
}

/* ═══════════════════════════════════════════
   Constants
   ═══════════════════════════════════════════ */

const GPIO_PINS: GpioPin[] = [
  { id: "D2", label: "LED", labelAr: "مصباح LED", icon: <Zap className="h-3 w-3" /> },
  { id: "D4", label: "Relay", labelAr: "ريلاي", icon: <Radio className="h-3 w-3" /> },
  { id: "D5", label: "Servo", labelAr: "سيرفو", icon: <Activity className="h-3 w-3" /> },
  { id: "D12", label: "Buzzer", labelAr: "جرس إنذار", icon: <AlertTriangle className="h-3 w-3" /> },
  { id: "D13", label: "LED 2", labelAr: "LED 2", icon: <Zap className="h-3 w-3" /> },
  { id: "D14", label: "Fan", labelAr: "مروحة", icon: <Activity className="h-3 w-3" /> },
  { id: "D25", label: "Sensor", labelAr: "حساس", icon: <Thermometer className="h-3 w-3" /> },
  { id: "D26", label: "Motor", labelAr: "محرك", icon: <CircuitBoard className="h-3 w-3" /> },
];

const LOG_COLORS: Record<LogEntry["type"], string> = {
  ok: "text-emerald-400",
  data: "text-cyan-400",
  gpio: "text-amber-400",
  info: "text-slate-400",
  warn: "text-orange-400",
  alarm: "text-red-400",
};

const LOG_PREFIX: Record<LogEntry["type"], string> = {
  ok: "[OK]",
  data: "[DATA]",
  gpio: "[GPIO]",
  info: "[INFO]",
  warn: "[WARN]",
  alarm: "[ALARM]",
};

/* ═══════════════════════════════════════════
   Helper: format time HH:MM:SS
   ═══════════════════════════════════════════ */

function getTimeStr(): string {
  const d = new Date();
  return [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((v) => String(v).padStart(2, "0"))
    .join(":");
}

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */

export default function ESP32Simulator() {
  const { t, lang } = useLang();
  const isRTL = lang === "ar";

  /* ── State ── */
  const [gpioStates, setGpioStates] = useState<Record<string, boolean>>({});
  const [sensorData, setSensorData] = useState<SensorData>({
    temperature: 24.5,
    humidity: 55,
  });
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [alarmMode, setAlarmMode] = useState(false);
  const [wifiConnected, setWifiConnected] = useState(false);
  const [oledFrame, setOledFrame] = useState(0);
  const [uptime, setUptime] = useState(0);

  const logIdRef = useRef(0);
  const serialEndRef = useRef<HTMLDivElement>(null);
  const sensorInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const uptimeInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const oledInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Add Log ── */
  const addLog = useCallback(
    (message: string, type: LogEntry["type"] = "info") => {
      logIdRef.current += 1;
      setLogs((prev) => {
        const next = [
          ...prev,
          { id: logIdRef.current, message, timestamp: getTimeStr(), type },
        ];
        // Keep last 100 logs
        if (next.length > 100) return next.slice(-100);
        return next;
      });
    },
    [],
  );

  /* ── Auto-scroll serial monitor ── */
  useEffect(() => {
    serialEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  /* ── Boot sequence ── */
  useEffect(() => {
    const bootMessages: { msg: string; type: LogEntry["type"]; delay: number }[] = [
      { msg: isRTL ? "تشغيل النظام..." : "Booting system...", type: "info", delay: 200 },
      { msg: "ESP32-WROOM-32 v4.4.1", type: "info", delay: 600 },
      { msg: isRTL ? "تهيئة GPIO..." : "Initializing GPIO...", type: "info", delay: 1000 },
      { msg: isRTL ? "تم ضبط 8 أطراف GPIO" : "8 GPIO pins configured", type: "ok", delay: 1400 },
      { msg: isRTL ? "الاتصال بـ WiFi..." : "Connecting to WiFi...", type: "info", delay: 2000 },
      { msg: isRTL ? "تم الاتصال بشبكة IoT-Lab" : "Connected to IoT-Lab network", type: "ok", delay: 3000 },
      { msg: `IP: 192.168.1.${Math.floor(Math.random() * 200) + 50}`, type: "ok", delay: 3200 },
      { msg: isRTL ? "تهيئة حساس DHT22..." : "Initializing DHT22 sensor...", type: "info", delay: 3800 },
      { msg: isRTL ? "الحساس جاهز" : "Sensor ready", type: "ok", delay: 4200 },
      { msg: isRTL ? "بدء خادم الويب على المنفذ 80" : "Web server started on port 80", type: "ok", delay: 4600 },
      { msg: isRTL ? "النظام يعمل بنجاح ✓" : "System running successfully ✓", type: "ok", delay: 5200 },
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];
    bootMessages.forEach(({ msg, type, delay }) => {
      timers.push(
        setTimeout(() => {
          addLog(msg, type);
          if (type === "ok" && msg.includes("Connected") || (isRTL && msg.includes("تم الاتصال"))) {
            setWifiConnected(true);
          }
        }, delay),
      );
    });

    // Connect WiFi after boot
    timers.push(setTimeout(() => setWifiConnected(true), 3000));

    return () => timers.forEach(clearTimeout);
  }, []);

  /* ── Sensor simulation interval ── */
  useEffect(() => {
    sensorInterval.current = setInterval(() => {
      setSensorData((prev) => ({
        temperature: Math.round((prev.temperature + (Math.random() - 0.5) * 1.2) * 10) / 10,
        humidity: Math.round((prev.humidity + (Math.random() - 0.5) * 3) * 10) / 10,
      }));
    }, 3000);
    return () => {
      if (sensorInterval.current) clearInterval(sensorInterval.current);
    };
  }, []);

  /* ── Uptime counter ── */
  useEffect(() => {
    uptimeInterval.current = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => {
      if (uptimeInterval.current) clearInterval(uptimeInterval.current);
    };
  }, []);

  /* ── OLED frame cycle ── */
  useEffect(() => {
    oledInterval.current = setInterval(() => {
      setOledFrame((prev) => (prev + 1) % 3);
    }, 4000);
    return () => {
      if (oledInterval.current) clearInterval(oledInterval.current);
    };
  }, []);

  /* ── Toggle GPIO Pin ── */
  const togglePin = useCallback(
    (pinId: string) => {
      setGpioStates((prev) => {
        const newState = !prev[pinId];
        const level = newState ? "HIGH" : "LOW";
        const pin = GPIO_PINS.find((p) => p.id === pinId);
        const pinLabel = pin
          ? `${pinId} → ${level} (${isRTL ? pin.labelAr : pin.label})`
          : `${pinId} → ${level}`;
        addLog(pinLabel, "gpio");
        return { ...prev, [pinId]: newState };
      });
    },
    [addLog, isRTL],
  );

  /* ── Simulate Sensor Reading ── */
  const simulateSensor = useCallback(() => {
    const temp = (22 + Math.random() * 8).toFixed(1);
    const hum = (40 + Math.random() * 30).toFixed(1);
    setSensorData({ temperature: parseFloat(temp), humidity: parseFloat(hum) });
    addLog(
      `T:${temp}°C  H:${hum}%  ${(isRTL ? "ضغط:" : "P:")}${(1000 + Math.random() * 50).toFixed(0)}hPa`,
      "data",
    );
  }, [addLog, isRTL]);

  /* ── Toggle Alarm Mode ── */
  const toggleAlarm = useCallback(() => {
    setAlarmMode((prev) => {
      const next = !prev;
      if (next) {
        addLog(isRTL ? "⚠ تم تفعيل وضع الإنذار!" : "⚠ ALARM MODE ACTIVATED!", "alarm");
        // Turn on buzzer pin in alarm mode
        setGpioStates((g) => ({ ...g, D12: true }));
      } else {
        addLog(isRTL ? "تم إلغاء وضع الإنذار" : "Alarm mode deactivated", "ok");
      }
      return next;
    });
  }, [addLog, isRTL]);

  /* ── Reset All ── */
  const resetAll = useCallback(() => {
    setGpioStates({});
    setAlarmMode(false);
    setSensorData({ temperature: 24.5, humidity: 55 });
    setUptime(0);
    setLogs([]);
    logIdRef.current = 0;
    addLog(isRTL ? "تم إعادة تشغيل النظام..." : "System reset...", "warn");
    setTimeout(() => {
      addLog(isRTL ? "النظام جاهز" : "System ready", "ok");
    }, 800);
  }, [addLog, isRTL]);

  /* ── Format uptime ── */
  const formatUptime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  /* ═══════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════ */

  return (
    <section className="w-full max-w-5xl mx-auto space-y-6">
      {/* ═══ Header ═══ */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-3">
          <Cpu className="h-6 w-6 text-emerald-400" />
          <h2 className="text-2xl sm:text-3xl font-bold neon-text">
            {t("محاكي ESP32 التفاعلي", "Interactive ESP32 Simulator")}
          </h2>
          <Cpu className="h-6 w-6 text-emerald-400" />
        </div>
        <p className="text-muted-foreground text-sm">
          {t(
            "تفاعل مع لوحة ESP32 مباشرة في المتصفح — قبّل الأطراف، راقب البيانات، وتعلّم",
            "Interact with an ESP32 board right in your browser — toggle pins, monitor data, and learn",
          )}
        </p>
      </div>

      {/* ═══ Main Grid: Board + OLED | Controls ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* ═══ Left: ESP32 Board + OLED + Serial Monitor ═══ */}
        <div className="lg:col-span-2 space-y-4">
          {/* ═══ ESP32 Board Visual ═══ */}
          <div className="glass-card-dark rounded-2xl p-4 sm:p-6 circuit-bg relative overflow-hidden">
            {/* Scan overlay */}
            <div className="scan-overlay absolute inset-0 pointer-events-none rounded-2xl" />

            {/* ═══ Board SVG ═══ */}
            <div className="relative z-10">
              {/* Board body */}
              <div
                className="relative mx-auto rounded-xl p-1"
                style={{
                  maxWidth: "520px",
                  background:
                    "linear-gradient(145deg, #12182e 0%, #0d1222 50%, #0a0e1a 100%)",
                  border: "2px solid #1e2d4d",
                }}
              >
                {/* Antenna */}
                <div className="flex justify-center pt-2">
                  <div className="relative">
                    <svg width="60" height="24" viewBox="0 0 60 24" className="drop-shadow-lg">
                      <defs>
                        <linearGradient id="antGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3a4d6c" />
                          <stop offset="100%" stopColor="#1a2a44" />
                        </linearGradient>
                      </defs>
                      <path d="M10 20 Q30 0 50 20" fill="none" stroke="url(#antGrad)" strokeWidth="4" strokeLinecap="round" />
                      <path d="M14 20 Q30 5 46 20" fill="none" stroke="#00ff6640" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="30" cy="8" r="2" className={wifiConnected ? "fill-emerald-400 animate-pulse" : "fill-slate-600"} />
                    </svg>
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] text-muted-foreground/60 font-mono">ANT</span>
                  </div>
                </div>

                {/* Main chip area */}
                <div className="mx-4 sm:mx-8 my-3">
                  <div
                    className="rounded-lg p-4 sm:p-6 relative"
                    style={{
                      background: "linear-gradient(135deg, #161e36 0%, #111828 100%)",
                      border: "1px solid #1e2d4d",
                    }}
                  >
                    {/* ESP32 chip label */}
                    <div className="text-center space-y-1 mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <Cpu className="h-5 w-5 text-emerald-400/70" />
                        <span className="font-mono text-sm font-bold text-emerald-300 tracking-wider">
                          ESP32-WROOM-32
                        </span>
                        <Cpu className="h-5 w-5 text-emerald-400/70" />
                      </div>
                      <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-muted-foreground/50">
                        <span>240MHz</span>
                        <span className="w-1 h-1 rounded-full bg-emerald-400/40" />
                        <span>520KB SRAM</span>
                        <span className="w-1 h-1 rounded-full bg-emerald-400/40" />
                        <span>4MB Flash</span>
                      </div>
                    </div>

                    {/* Chip metallic look */}
                    <div
                      className="mx-auto rounded-md flex items-center justify-center"
                      style={{
                        width: "120px",
                        height: "60px",
                        background: "linear-gradient(180deg, #2a3a5a 0%, #1a2a42 40%, #0f1a2e 100%)",
                        border: "1px solid #3a4d6c",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                      }}
                    >
                      <span className="font-mono text-[9px] text-slate-500 tracking-[0.2em]">ESPRESSIF</span>
                      {/* Pin dots on chip */}
                      <div className="absolute top-2 left-4 w-1 h-1 rounded-full bg-slate-600" />
                      <div className="absolute top-2 right-4 w-1 h-1 rounded-full bg-slate-600" />
                      <div className="absolute bottom-2 left-4 w-1 h-1 rounded-full bg-slate-600" />
                      <div className="absolute bottom-2 right-4 w-1 h-1 rounded-full bg-slate-600" />
                    </div>

                    {/* Status LEDs */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <div className="flex items-center gap-1.5">
                        <div className={alarmMode ? "led-red animate-pulse" : wifiConnected ? "led-on animate-pulse-neon" : "led-off"} />
                        <span className="text-[9px] font-mono text-muted-foreground/60">
                          {alarmMode ? "ALARM" : "WiFi"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="led-amber animate-pulse-neon" />
                        <span className="text-[9px] font-mono text-muted-foreground/60">
                          {t("طاقة", "PWR")}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className={alarmMode ? "led-red animate-pulse" : "led-off"} />
                        <span className="text-[9px] font-mono text-muted-foreground/60">
                          {t("إنذار", "ALR")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ═══ GPIO Pins Row ═══ */}
                <div className="mx-2 sm:mx-6 mb-3">
                  <div className="text-[9px] font-mono text-muted-foreground/40 text-center mb-2 tracking-wider">
                    GPIO PINS
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {GPIO_PINS.map((pin) => {
                      const isOn = !!gpioStates[pin.id];
                      return (
                        <motion.button
                          key={pin.id}
                          onClick={() => togglePin(pin.id)}
                          className={`
                            group relative flex flex-col items-center justify-center gap-1 py-2 sm:py-2.5 rounded-lg
                            transition-all duration-200 cursor-pointer select-none
                            ${
                              isOn
                                ? "bg-emerald-500/15 border border-emerald-400/40 shadow-[0_0_12px_rgba(0,255,102,0.2)]"
                                : "bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60"
                            }
                            ${alarmMode && pin.id === "D12" ? "bg-red-500/15 border-red-400/40 shadow-[0_0_12px_rgba(255,61,90,0.3)]" : ""}
                          `}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Toggle ${pin.id} ${pin.label}`}
                          role="switch"
                          aria-checked={isOn}
                        >
                          {/* Pin number */}
                          <span
                            className={`font-mono text-[10px] sm:text-xs font-bold ${
                              alarmMode && pin.id === "D12" ? "text-red-400" : isOn ? "text-emerald-400" : "text-muted-foreground/60"
                            }`}
                          >
                            {pin.id}
                          </span>

                          {/* LED indicator */}
                          <div className="relative">
                            <div
                              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                alarmMode && pin.id === "D12"
                                  ? "bg-red-500 shadow-[0_0_8px_rgba(255,61,90,0.6)]"
                                  : isOn
                                    ? "bg-emerald-400 shadow-[0_0_8px_rgba(0,255,102,0.6)]"
                                    : "bg-slate-700"
                              }`}
                            />
                            {isOn && !(alarmMode && pin.id === "D12") && (
                              <motion.div
                                className="absolute inset-0 rounded-full bg-emerald-400"
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{ scale: 1.8, opacity: 0 }}
                                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
                              />
                            )}
                            {alarmMode && pin.id === "D12" && isOn && (
                              <motion.div
                                className="absolute inset-0 rounded-full bg-red-500"
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{ scale: 1.8, opacity: 0 }}
                                transition={{ duration: 0.4, repeat: Infinity }}
                              />
                            )}
                          </div>

                          {/* Pin label */}
                          <span
                            className={`text-[8px] sm:text-[9px] font-mono ${
                              alarmMode && pin.id === "D12" ? "text-red-300" : isOn ? "text-emerald-300/80" : "text-muted-foreground/40"
                            }`}
                          >
                            {isRTL ? pin.labelAr : pin.label}
                          </span>

                          {/* State badge */}
                          <span
                            className={`text-[7px] font-mono font-bold tracking-wider ${
                              alarmMode && pin.id === "D12" ? "text-red-400" : isOn ? "text-emerald-400" : "text-slate-600"
                            }`}
                          >
                            {isOn ? "HIGH" : "LOW"}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* USB Port */}
                <div className="flex justify-center pb-3">
                  <div className="relative">
                    <div
                      className="rounded-md mx-auto"
                      style={{
                        width: "52px",
                        height: "18px",
                        background: "linear-gradient(180deg, #3a4d6c 0%, #1a2a44 100%)",
                        border: "1px solid #4a5d7c",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                      }}
                    >
                      <div className="w-6 h-1.5 bg-slate-800 rounded-sm mx-auto mt-[5px]" />
                    </div>
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] text-muted-foreground/40 font-mono whitespace-nowrap">
                      USB-C
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ OLED Display + Info Cards ═══ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* OLED Display */}
            <div className="glass-card-dark rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="h-4 w-4 text-emerald-400/70" />
                <span className="text-xs font-mono text-muted-foreground">
                  {t("شاشة OLED", "OLED Display")}
                </span>
                <span className="text-[9px] font-mono text-muted-foreground/40 ml-auto">128×64</span>
              </div>

              {/* OLED screen */}
              <div
                className="relative rounded-lg p-3 font-mono text-[11px] sm:text-xs leading-relaxed overflow-hidden"
                style={{
                  background: "#050a12",
                  border: "2px solid #1a2a44",
                  color: "#00ff66",
                  minHeight: "130px",
                }}
              >
                {/* Scan line effect */}
                <div
                  className="absolute left-0 w-full h-6 pointer-events-none opacity-30"
                  style={{
                    background: "linear-gradient(transparent, rgba(0,255,102,0.06), transparent)",
                    animation: "scan-line 4s linear infinite",
                  }}
                />

                <div className="relative z-10 terminal-text">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={oledFrame}
                      initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isRTL ? -10 : 10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-0.5"
                    >
                      {oledFrame === 0 && (
                        <>
                          <div className="text-emerald-400/60">{"═══ "}{t("قراءات الحساسات", "Sensor Readings")}{" ═══"}</div>
                          <div className="mt-1">
                            <Thermometer className="inline h-3 w-3 mr-1" />
                            {t("الحرارة", "Temp")}: {sensorData.temperature.toFixed(1)}°C
                          </div>
                          <div>
                            <Droplets className="inline h-3 w-3 mr-1" />
                            {t("الرطوبة", "Hum")}: {sensorData.humidity.toFixed(1)}%
                          </div>
                          <div>
                            {t("الضغط", "Press")}: {(1013 + Math.random() * 5).toFixed(1)}hPa
                          </div>
                          <div className="text-emerald-400/40 mt-1">──────────────────</div>
                        </>
                      )}
                      {oledFrame === 1 && (
                        <>
                          <div className="text-emerald-400/60">{"═══ "}{t("حالة WiFi", "WiFi Status")}{" ═══"}</div>
                          <div className="mt-1 flex items-center gap-2">
                            {wifiConnected ? (
                              <>
                                <Wifi className="h-3 w-3" />
                                <span>{t("متصل", "Connected")}</span>
                              </>
                            ) : (
                              <>
                                <WifiOff className="h-3 w-3" />
                                <span>{t("غير متصل", "Disconnected")}</span>
                              </>
                            )}
                          </div>
                          <div className="text-[10px]">SSID: IoT-Lab</div>
                          <div className="text-[10px]">IP: 192.168.1.{Math.floor(Math.random() * 200) + 50}</div>
                          <div className="text-[10px]">
                            {t("الإشارة", "Signal")}: {wifiConnected ? "▓▓▓▓░ -42dBm" : "░░░░░"}
                          </div>
                          <div className="text-emerald-400/40 mt-1">──────────────────</div>
                        </>
                      )}
                      {oledFrame === 2 && (
                        <>
                          <div className="text-emerald-400/60">{"═══ "}{t("حالة الأطراف", "GPIO States")}{" ═══"}</div>
                          <div className="mt-1">
                            {GPIO_PINS.map((pin) => (
                              <div key={pin.id} className="flex items-center gap-1 text-[10px]">
                                <span
                                  className={`inline-block w-1.5 h-1.5 rounded-full ${
                                    gpioStates[pin.id] ? "bg-emerald-400 shadow-[0_0_4px_rgba(0,255,102,0.6)]" : "bg-slate-700"
                                  }`}
                                />
                                <span>{pin.id}:</span>
                                <span className={gpioStates[pin.id] ? "text-emerald-300" : "text-slate-600"}>
                                  {gpioStates[pin.id] ? "HIGH" : "LOW"}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="text-emerald-400/40 mt-1">──────────────────</div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* System Info Card */}
            <div className="glass-card-dark rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-emerald-400/70" />
                <span className="text-xs font-mono text-muted-foreground">
                  {t("معلومات النظام", "System Info")}
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Uptime */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{t("وقت التشغيل", "Uptime")}</span>
                  <span className="font-mono text-xs text-emerald-400">{formatUptime(uptime)}</span>
                </div>

                {/* WiFi Status */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{t("WiFi", "WiFi")}</span>
                  <Badge
                    variant="outline"
                    className={`text-[10px] h-5 px-2 ${
                      wifiConnected
                        ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                        : "border-red-500/40 text-red-400 bg-red-500/10"
                    }`}
                  >
                    {wifiConnected ? (
                      <Wifi className="h-3 w-3 mr-1 inline" />
                    ) : (
                      <WifiOff className="h-3 w-3 mr-1 inline" />
                    )}
                    {wifiConnected ? t("متصل", "Connected") : t("غير متصل", "Offline")}
                  </Badge>
                </div>

                {/* Temperature */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{t("الحرارة", "Temperature")}</span>
                  <div className="flex items-center gap-1.5">
                    <Thermometer className="h-3.5 w-3.5 text-amber-400" />
                    <span className="font-mono text-xs text-foreground">{sensorData.temperature.toFixed(1)}°C</span>
                  </div>
                </div>

                {/* Humidity */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{t("الرطوبة", "Humidity")}</span>
                  <div className="flex items-center gap-1.5">
                    <Droplets className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="font-mono text-xs text-foreground">{sensorData.humidity.toFixed(1)}%</span>
                  </div>
                </div>

                {/* Active GPIO */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{t("أطراف نشطة", "Active Pins")}</span>
                  <span className="font-mono text-xs text-emerald-400">
                    {Object.values(gpioStates).filter(Boolean).length}/{GPIO_PINS.length}
                  </span>
                </div>

                {/* Alarm Status */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{t("وضع الإنذار", "Alarm Mode")}</span>
                  <Badge
                    variant="outline"
                    className={`text-[10px] h-5 px-2 ${
                      alarmMode
                        ? "border-red-500/40 text-red-400 bg-red-500/10 animate-pulse"
                        : "border-slate-700/40 text-muted-foreground/60 bg-slate-800/20"
                    }`}
                  >
                    {alarmMode ? "⚠ ON" : "OFF"}
                  </Badge>
                </div>

                {/* Memory */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{t("الذاكرة الحرة", "Free Heap")}</span>
                  <span className="font-mono text-xs text-emerald-400/70">
                    {(250 - uptime * 0.02).toFixed(0)} KB
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ Serial Monitor ═══ */}
          <div className="glass-card-dark rounded-xl overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  {t("المراقب التسلسلي", "Serial Monitor")} — 115200 baud
                </span>
              </div>
              <span className="text-[9px] font-mono text-muted-foreground/40">
                {logs.length} {t("رسالة", "messages")}
              </span>
            </div>

            {/* Terminal area */}
            <div
              className="p-3 sm:p-4 font-mono text-[11px] sm:text-xs max-h-56 overflow-y-auto code-scroll"
              style={{ background: "#080c16" }}
            >
              {logs.length === 0 ? (
                <div className="text-muted-foreground/40 flex items-center gap-2">
                  <span className="animate-pulse">●</span>
                  {t("بانتظار بدء التشغيل...", "Waiting for boot sequence...")}
                </div>
              ) : (
                logs.map((log) => (
                  <div
                    key={log.id}
                    className={`${LOG_COLORS[log.type]} leading-relaxed`}
                  >
                    <span className="text-muted-foreground/30 mr-2">{log.timestamp}</span>
                    <span className="font-bold mr-1">{LOG_PREFIX[log.type]}</span>
                    <span>{log.message}</span>
                  </div>
                ))
              )}
              <div ref={serialEndRef} />
            </div>
          </div>
        </div>

        {/* ═══ Right: Controls Panel ═══ */}
        <div className="space-y-4">
          {/* Controls */}
          <div className="glass-card-dark rounded-xl p-4 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-semibold text-foreground">
                {t("لوحة التحكم", "Control Panel")}
              </span>
            </div>

            {/* Simulate Sensor */}
            <Button
              onClick={simulateSensor}
              className="w-full h-11 text-sm font-medium gap-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <Thermometer className="h-4 w-4" />
              {t("محاكاة حساس", "Simulate Sensor")}
            </Button>

            {/* Fire Alarm Toggle */}
            <motion.button
              onClick={toggleAlarm}
              className={`
                w-full h-11 rounded-lg text-sm font-medium gap-2 flex items-center justify-center
                transition-all duration-200 cursor-pointer select-none
                ${
                  alarmMode
                    ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30"
                    : "bg-secondary border border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                }
              `}
              whileTap={{ scale: 0.97 }}
            >
              <AlertTriangle className="h-4 w-4" />
              {alarmMode ? t("⚠ إنذار نشط", "⚠ Alarm Active") : t("وضع الإنذار", "Fire Alarm")}
              {alarmMode && <span className="ml-1 text-base">🔔</span>}
            </motion.button>

            {/* Reset */}
            <Button
              onClick={resetAll}
              variant="outline"
              className="w-full h-11 text-sm font-medium gap-2 border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-all cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              {t("إعادة ضبط", "Reset")}
            </Button>
          </div>

          {/* Quick GPIO Reference */}
          <div className="glass-card-dark rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CircuitBoard className="h-4 w-4 text-emerald-400/70" />
              <span className="text-xs font-mono text-muted-foreground">
                {t("مرجع الأطراف", "Pin Reference")}
              </span>
            </div>

            <div className="space-y-1.5">
              {GPIO_PINS.map((pin) => {
                const isOn = !!gpioStates[pin.id];
                return (
                  <div
                    key={pin.id}
                    className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-secondary/50 transition-colors cursor-pointer"
                    onClick={() => togglePin(pin.id)}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-colors ${
                        alarmMode && pin.id === "D12"
                          ? "bg-red-500 shadow-[0_0_4px_rgba(255,61,90,0.5)]"
                          : isOn
                            ? "bg-emerald-400 shadow-[0_0_4px_rgba(0,255,102,0.5)]"
                            : "bg-slate-700"
                      }`}
                    />
                    <span className="font-mono text-[11px] text-muted-foreground w-7">{pin.id}</span>
                    <span className="text-[11px] text-foreground/70">
                      {isRTL ? pin.labelAr : pin.label}
                    </span>
                    <span className="ml-auto font-mono text-[9px] text-muted-foreground/40">
                      {isOn ? "HIGH" : "LOW"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Specs Mini Card */}
          <div className="glass-card-dark rounded-xl p-4 space-y-2.5">
            <div className="text-xs font-mono text-muted-foreground">
              {t("المواصفات", "Specs")}
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              {[
                { label: t("المعالج", "CPU"), value: "Xtensa 240MHz" },
                { label: "RAM", value: "520 KB" },
                { label: "Flash", value: "4 MB" },
                { label: "WiFi", value: "802.11 b/g/n" },
                { label: "BT", value: "4.2 + BLE" },
                { label: "GPIO", value: "34 pins" },
                { label: "ADC", value: "18-ch 12-bit" },
                { label: t("جهد", "Voltage"), value: "3.3V" },
              ].map((spec) => (
                <div key={spec.label} className="flex flex-col gap-0.5 p-1.5 rounded bg-secondary/30">
                  <span className="text-muted-foreground/50">{spec.label}</span>
                  <span className="text-emerald-400/80">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
