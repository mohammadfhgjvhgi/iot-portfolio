"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, PartyPopper, Shield, Car, Settings, Cpu, Clock, ArrowRight, ArrowLeft, Send, CheckCircle2, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/language";
import recommendations from "@/data/calculator-recommendations.json";

/* ═══ TYPES ═══ */
interface WizardState {
  projectType: string;
  sensors: number;
  rooms: number;
  budget: string;
}

const INITIAL_STATE: WizardState = {
  projectType: "",
  sensors: 1,
  rooms: 1,
  budget: "",
};

/* ═══ PROJECT TYPES CONFIG ═══ */
const projectTypes = [
  { type: "smart-home", icon: Home, color: "#00ff66" },
  { type: "event-hall", icon: PartyPopper, color: "#ffab00" },
  { type: "security", icon: Shield, color: "#ff3d5a" },
  { type: "parking", icon: Car, color: "#00e5ff" },
  { type: "other", icon: Settings, color: "#b44dff" },
];

/* ═══ BUDGET OPTIONS ═══ */
const budgetOptions = [
  { value: "500-1000", label_ar: "$500 – $1,000", label_en: "$500 – $1,000" },
  { value: "1000-3000", label_ar: "$1,000 – $3,000", label_en: "$1,000 – $3,000" },
  { value: "3000-5000", label_ar: "$3,000 – $5,000", label_en: "$3,000 – $5,000" },
  { value: "5000+", label_ar: "$5,000+", label_en: "$5,000+" },
];

/* ═══ STEP SLIDE ANIMATION ═══ */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

/* ═══ STEP INDICATOR ═══ */
function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const { t } = useLang();
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;
        return (
          <React.Fragment key={step}>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2 ${
                  isCompleted
                    ? "bg-[#00ff66] border-[#00ff66] text-[#0a0f1a]"
                    : isActive
                      ? "bg-transparent border-[#00ff66] text-[#00ff66] shadow-[0_0_12px_#00ff6640]"
                      : "bg-transparent border-[#1e2d4d] text-[#3d506e]"
                }`}
              >
                {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : step}
              </div>
            </div>
            {step < totalSteps && (
              <div
                className={`w-12 sm:w-20 h-0.5 mx-1 sm:mx-2 transition-all duration-500 ${
                  step < currentStep ? "bg-[#00ff66]" : "bg-[#1e2d4d]"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ═══ STEP 1: Project Type ═══ */
function StepProjectType({ state, setState }: { state: WizardState; setState: React.Dispatch<React.SetStateAction<WizardState>> }) {
  const { t } = useLang();
  const stepLabels = [
    t("المنزل الذكي", "Smart Home"),
    t("قاعة أفراح", "Event Hall"),
    t("نظام أمان", "Security System"),
    t("مواقف ذكية", "Smart Parking"),
    t("مشروع مخصص", "Custom Project"),
  ];
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#e8edf5] mb-2 text-center">
        {t("اختر نوع المشروع", "Choose Your Project Type")}
      </h3>
      <p className="text-sm text-[#7a8ba8] mb-6 text-center">
        {t("ما هو نوع النظام الذكي الذي تريد بناءه؟", "What kind of smart system do you want to build?")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projectTypes.map((pt, i) => {
          const Icon = pt.icon;
          const isSelected = state.projectType === pt.type;
          return (
            <motion.button
              key={pt.type}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setState((s) => ({ ...s, projectType: pt.type }))}
              className={`flex items-center gap-3 p-4 rounded-xl text-start transition-all duration-300 ${
                isSelected
                  ? "neon-border bg-[#00ff66]/10 shadow-[0_0_16px_#00ff6620]"
                  : "glass-card-dark hover:bg-white/5"
              }`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all"
                style={{
                  backgroundColor: isSelected ? `${pt.color}20` : `${pt.color}10`,
                  color: pt.color,
                }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <span className="text-sm font-medium text-[#e8edf5]">{stepLabels[i]}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ STEP 2: Sensors ═══ */
function StepSensors({ state, setState }: { state: WizardState; setState: React.Dispatch<React.SetStateAction<WizardState>> }) {
  const { t } = useLang();
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#e8edf5] mb-2 text-center">
        {t("عدد الحساسات", "Number of Sensors")}
      </h3>
      <p className="text-sm text-[#7a8ba8] mb-8 text-center">
        {t("كم عدد الحساسات التي تحتاجها في مشروعك؟", "How many sensors do you need for your project?")}
      </p>
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-[#7a8ba8]">1</span>
          <span className="text-2xl font-bold gradient-neon-text">{state.sensors}</span>
          <span className="text-xs text-[#7a8ba8]">10</span>
        </div>
        <input
          type="range"
          min={1}
          max={10}
          value={state.sensors}
          onChange={(e) => setState((s) => ({ ...s, sensors: parseInt(e.target.value) }))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #00ff66 0%, #00ff66 ${((state.sensors - 1) / 9) * 100}%, #1e2d4d ${((state.sensors - 1) / 9) * 100}%, #1e2d4d 100%)`,
          }}
        />
        <div className="flex justify-between mt-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <button
              key={n}
              onClick={() => setState((s) => ({ ...s, sensors: n }))}
              className={`text-[10px] w-5 h-5 rounded flex items-center justify-center transition-colors ${
                state.sensors >= n ? "text-[#00ff66]" : "text-[#3d506e]"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══ STEP 3: Rooms/Areas ═══ */
function StepRooms({ state, setState }: { state: WizardState; setState: React.Dispatch<React.SetStateAction<WizardState>> }) {
  const { t } = useLang();
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#e8edf5] mb-2 text-center">
        {t("عدد الغرف / المناطق", "Number of Rooms / Areas")}
      </h3>
      <p className="text-sm text-[#7a8ba8] mb-8 text-center">
        {t("كم غرفة أو منطقة تريد التحكم بها؟", "How many rooms or areas do you want to control?")}
      </p>
      <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
        <button
          onClick={() => setState((s) => ({ ...s, rooms: Math.max(1, s.rooms - 1) }))}
          className="w-11 h-11 rounded-xl glass-card-dark flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-all neon-border-cyan text-lg font-bold"
          aria-label={t("تقليل", "Decrease")}
        >
          −
        </button>
        <div className="w-20 h-20 rounded-2xl glass-card-dark flex items-center justify-center gradient-card-border">
          <span className="text-3xl font-bold gradient-neon-text">{state.rooms}</span>
        </div>
        <button
          onClick={() => setState((s) => ({ ...s, rooms: Math.min(5, s.rooms + 1) }))}
          className="w-11 h-11 rounded-xl glass-card-dark flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-all neon-border-cyan text-lg font-bold"
          aria-label={t("زيادة", "Increase")}
        >
          +
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setState((s) => ({ ...s, rooms: n }))}
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
              state.rooms === n
                ? "gradient-neon text-[#0a0f1a] shadow-[0_0_12px_#00ff6630]"
                : "glass-card-dark text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══ STEP 4: Budget ═══ */
function StepBudget({ state, setState }: { state: WizardState; setState: React.Dispatch<React.SetStateAction<WizardState>> }) {
  const { t, lang } = useLang();
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#e8edf5] mb-2 text-center">
        {t("نطاق الميزانية", "Budget Range")}
      </h3>
      <p className="text-sm text-[#7a8ba8] mb-8 text-center">
        {t("ما هي ميزانيتك المتوقعة للمشروع؟", "What is your expected budget for the project?")}
      </p>
      <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
        {budgetOptions.map((opt) => {
          const isSelected = state.budget === opt.value;
          return (
            <motion.button
              key={opt.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setState((s) => ({ ...s, budget: opt.value }))}
              className={`p-4 rounded-xl text-center transition-all duration-300 ${
                isSelected
                  ? "neon-border bg-[#00ff66]/10 shadow-[0_0_16px_#00ff6620]"
                  : "glass-card-dark hover:bg-white/5"
              }`}
            >
              <span className={`text-sm font-semibold ${isSelected ? "text-[#00ff66]" : "text-[#e8edf5]"}`}>
                {lang === "ar" ? opt.label_ar : opt.label_en}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ RECOMMENDATION CARD ═══ */
function RecommendationCard({ state, onReset }: { state: WizardState; onReset: () => void }) {
  const { t, lang } = useLang();
  const rec = recommendations.find((r) => r.projectType === state.projectType);
  if (!rec) return null;

  const mcu = rec.recommendation.mcu;
  const protocols = rec.recommendation.protocols;
  const estimatedTime = lang === "ar" ? rec.recommendation.estimatedTime_ar : rec.recommendation.estimatedTime;
  const description = lang === "ar" ? rec.recommendation.description_ar : rec.recommendation.description;
  const reason = lang === "ar" ? mcu.reason : mcu.name;

  const handleQuote = () => {
    const msg = encodeURIComponent(
      `🔔 طلب تسعيرة مشروع جديد\n\n` +
        `نوع المشروع: ${lang === "ar" ? rec.title_ar : rec.title_en}\n` +
        `عدد الحساسات: ${state.sensors}\n` +
        `عدد الغرف/المناطق: ${state.rooms}\n` +
        `الميزانية: ${state.budget}\n\n` +
        `MCU المقترح: ${mcu.name}\n` +
        `الوقت المتوقع: ${estimatedTime}`
    );
    window.open(`https://t.me/Mashari3_AI_Arduino?text=${msg}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-lg mx-auto"
    >
      <div className="glass-card-dark rounded-2xl p-6 gradient-card-border relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00ff66]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#00e5ff]/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl gradient-neon mx-auto mb-3 flex items-center justify-center">
              <Cpu className="h-7 w-7 text-[#0a0f1a]" />
            </div>
            <h3 className="text-xl font-bold gradient-neon-text mb-1">
              {lang === "ar" ? rec.title_ar : rec.title_en}
            </h3>
            <p className="text-xs text-[#7a8ba8]">
              {t("توصية فريقنا الهندسي", "Our Engineering Team Recommendation")}
            </p>
          </div>

          {/* Details Grid */}
          <div className="space-y-4 mb-6">
            {/* MCU */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0a0f1a]/60">
              <div className="w-9 h-9 rounded-lg bg-[#00ff66]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Cpu className="h-4 w-4 text-[#00ff66]" />
              </div>
              <div>
                <p className="text-xs text-[#7a8ba8] mb-0.5">{t("المتحكم المقترح", "Recommended MCU")}</p>
                <p className="text-sm font-semibold text-[#e8edf5]">{mcu.name}</p>
                <p className="text-[11px] text-[#7a8ba8] mt-0.5">{reason}</p>
              </div>
            </div>

            {/* Protocols */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0a0f1a]/60">
              <div className="w-9 h-9 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Radio className="h-4 w-4 text-[#00e5ff]" />
              </div>
              <div>
                <p className="text-xs text-[#7a8ba8] mb-1">{t("بروتوكولات الاتصال", "Communication Protocols")}</p>
                <div className="flex flex-wrap gap-1.5">
                  {protocols.map((p) => (
                    <span key={p} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#00e5ff]/10 text-[#00e5ff] neon-border-cyan">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0a0f1a]/60">
              <div className="w-9 h-9 rounded-lg bg-[#ffab00]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="h-4 w-4 text-[#ffab00]" />
              </div>
              <div>
                <p className="text-xs text-[#7a8ba8] mb-0.5">{t("الوقت المتوقع للتسليم", "Estimated Delivery Time")}</p>
                <p className="text-sm font-semibold text-[#ffab00]">{estimatedTime}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0a0f1a]/60">
              <div className="w-9 h-9 rounded-lg bg-[#b44dff]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Settings className="h-4 w-4 text-[#b44dff]" />
              </div>
              <div>
                <p className="text-xs text-[#7a8ba8] mb-0.5">{t("المكونات المقترحة", "Suggested Components")}</p>
                <p className="text-sm font-medium text-[#e8edf5]">{description}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleQuote}
              data-calc-quote="true"
              className="flex-1 gradient-neon text-[#0a0f1a] font-bold py-3 rounded-xl hover:shadow-[0_0_20px_#00ff6640] transition-shadow flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              {t("اطلب تسعيرة رسمية", "Request Official Quote")}
            </Button>
            <Button
              onClick={onReset}
              variant="outline"
              className="flex-1 neon-border text-[#00e5ff] hover:bg-[#00e5ff]/10 font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <ArrowRight className="h-4 w-4" />
              {t("أعد الحساب", "Recalculate")}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══ MAIN CALCULATOR COMPONENT ═══ */
export default function ProjectCalculator() {
  const { t, lang, isRTL } = useLang();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [state, setState] = useState<WizardState>({ ...INITIAL_STATE });
  const [completed, setCompleted] = useState(false);

  const totalSteps = 4;

  const goNext = () => {
    if (step < totalSteps) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      setCompleted(true);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return state.projectType !== "";
      case 2: return state.sensors >= 1;
      case 3: return state.rooms >= 1;
      case 4: return state.budget !== "";
      default: return false;
    }
  };

  const resetCalculator = () => {
    setStep(1);
    setDirection(0);
    setState({ ...INITIAL_STATE });
    setCompleted(false);
  };

  const stepLabels = [
    t("نوع المشروع", "Project Type"),
    t("الحساسات", "Sensors"),
    t("الغرف", "Rooms"),
    t("الميزانية", "Budget"),
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neon-border glass-card-dark mb-4">
          <Cpu className="h-4 w-4 text-[#00ff66]" />
          <span className="text-xs font-medium text-[#00ff66]">
            {t("أداة ذكية لحساب تكلفة مشروعك", "Smart Tool to Estimate Your Project")}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold gradient-neon-text mb-2">
          {t("احسب مشروعك الذكي", "Calculate Your Smart Project")}
        </h3>
        <p className="text-sm text-[#7a8ba8] max-w-md mx-auto">
          {t(
            "4 خطوات بسيطة للحصول على توصية هندسية مبدئية لمشروعك مع تقدير للتكلفة والوقت",
            "4 simple steps to get a preliminary engineering recommendation with cost and time estimates"
          )}
        </p>
      </motion.div>

      {/* Calculator Card */}
      <div className="glass-card-dark rounded-2xl p-6 sm:p-8 gradient-card-border">
        {!completed ? (
          <>
            {/* Step Indicator */}
            <StepIndicator currentStep={step} totalSteps={totalSteps} />

            {/* Current Step Label */}
            <p className="text-center text-xs text-[#7a8ba8] mb-6">
              {t("الخطوة", "Step")} {step}/{totalSteps} — {stepLabels[step - 1]}
            </p>

            {/* Step Content with Animation */}
            <div className="relative overflow-hidden min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {step === 1 && <StepProjectType state={state} setState={setState} />}
                  {step === 2 && <StepSensors state={state} setState={setState} />}
                  {step === 3 && <StepRooms state={state} setState={setState} />}
                  {step === 4 && <StepBudget state={state} setState={setState} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 mb-4">
              <div className="h-1.5 rounded-full bg-[#1e2d4d] overflow-hidden">
                <motion.div
                  className="h-full rounded-full gradient-neon"
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-3">
              <Button
                onClick={goBack}
                disabled={step === 1}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                  step === 1
                    ? "text-[#3d506e]"
                    : "neon-border text-[#00e5ff] hover:bg-[#00e5ff]/10"
                }`}
                variant="ghost"
              >
                {isRTL() ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                {t("رجوع", "Back")}
              </Button>

              <span className="text-[11px] text-[#3d506e]">
                {step}/{totalSteps}
              </span>

              <Button
                onClick={goNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed gradient-neon text-[#0a0f1a] hover:shadow-[0_0_16px_#00ff6630]"
              >
                {step === totalSteps ? t("عرض النتيجة", "See Result") : t("التالي", "Next")}
                {isRTL() ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </>
        ) : (
          <RecommendationCard state={state} onReset={resetCalculator} />
        )}
      </div>
    </div>
  );
}
