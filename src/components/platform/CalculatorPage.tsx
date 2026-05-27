"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  Lightbulb,
  ArrowDownUp,
  ArrowLeftRight,
  Zap,
  Info,
  RotateCcw,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

/* ──────────────────────── E12 Series ──────────────────────── */
const E12_BASE = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2];

function getNearestE12(value: number): number {
  if (value <= 0) return 0;
  // Find the E12 value >= calculated value
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const normalized = value / magnitude;
  for (const base of E12_BASE) {
    const scaled = base * magnitude;
    if (scaled >= value) return scaled;
  }
  // Next decade
  return E12_BASE[0] * magnitude * 10;
}

function formatResistance(ohms: number): string {
  if (ohms >= 1_000_000) return `${(ohms / 1_000_000).toFixed(1)} MΩ`;
  if (ohms >= 1_000) return `${(ohms / 1_000).toFixed(1)} kΩ`;
  return `${ohms.toFixed(1)} Ω`;
}

/* ══════════════════════════════════════════════════════════════
   1. Ohm's Law Calculator
   ══════════════════════════════════════════════════════════════ */
function OhmsLawCalc() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [result, setResult] = useState<{ label: string; value: string; power?: string } | null>(null);

  const calculate = () => {
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    const r = parseFloat(resistance);
    const filled = [!isNaN(v) && voltage !== "", !isNaN(i) && current !== "", !isNaN(r) && resistance !== ""].filter(Boolean).length;

    if (filled < 2) {
      toast.error("يرجى ملء حقلين على الأقل للحساب");
      return;
    }
    if (filled === 3) {
      // Just show power
      setResult({ label: "القدرة المبددة", value: `${(v * i).toFixed(4)} W`, power: `P = V × I = ${v} × ${i} = ${(v * i).toFixed(4)} W` });
      return;
    }

    let calcV = v, calcI = i, calcR = r;
    if (isNaN(v)) {
      calcV = i * r;
      setResult({ label: "الجهد (V)", value: `${calcV.toFixed(4)} V`, power: `P = V × I = ${calcV.toFixed(4)} × ${i} = ${(calcV * i).toFixed(4)} W` });
    } else if (isNaN(i)) {
      if (v === 0) { toast.error("لا يمكن حساب التيار عندما الجهد = 0 والمقاومة معطاة"); return; }
      calcI = v / r;
      setResult({ label: "التيار (A)", value: `${calcI.toFixed(4)} A`, power: `P = V × I = ${v} × ${calcI.toFixed(4)} = ${(v * calcI).toFixed(4)} W` });
    } else {
      if (i === 0) { toast.error("لا يمكن حساب المقاومة عندما التيار = 0 والجهد معطى"); return; }
      calcR = v / i;
      setResult({ label: "المقاومة (Ω)", value: formatResistance(calcR), power: `P = V × I = ${v} × ${i} = ${(v * i).toFixed(4)} W` });
    }
  };

  const reset = () => {
    setVoltage(""); setCurrent(""); setResistance(""); setResult(null);
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">قانون أوم</CardTitle>
            <CardDescription>V = I × R — املأ حقلين واحسب الثالث</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">الجهد (V)</label>
            <Input
              type="number"
              step="any"
              placeholder="مثلاً 5"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              className="text-center"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">التيار (A)</label>
            <Input
              type="number"
              step="any"
              placeholder="مثلاً 0.02"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="text-center"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">المقاومة (Ω)</label>
            <Input
              type="number"
              step="any"
              placeholder="مثلاً 220"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              className="text-center"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculate} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
            <Calculator className="h-4 w-4 ml-1" />
            احسب
          </Button>
          <Button variant="outline" onClick={reset} size="icon">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {result && (
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="font-bold text-emerald-700 dark:text-emerald-300 text-lg">{result.value}</span>
            </div>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{result.label}</p>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1 font-mono">{result.power}</p>
          </div>
        )}

        <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
          <Info className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
          <span>القدرة المبددة P = V × I (بالواط). القيم السالبة أو الصفرية للجهد/المقاومة غير صالحة.</span>
        </div>
      </CardContent>
    </Card>
  );
}

/* ══════════════════════════════════════════════════════════════
   2. LED Resistor Calculator
   ══════════════════════════════════════════════════════════════ */
function LEDResistorCalc() {
  const [vSource, setVSource] = useState("5");
  const [vLed, setVLed] = useState("2");
  const [iLed, setILed] = useState("20");
  const [result, setResult] = useState<{ calc: number; e12: number } | null>(null);

  const calculate = () => {
    const vs = parseFloat(vSource);
    const vl = parseFloat(vLed);
    const il = parseFloat(iLed);

    if (isNaN(vs) || isNaN(vl) || isNaN(il)) {
      toast.error("يرجى ملء جميع الحقول بقيم صحيحة");
      return;
    }
    if (il <= 0) {
      toast.error("تيار LED يجب أن يكون أكبر من صفر");
      return;
    }
    if (vs <= vl) {
      toast.error("جهد المصدر يجب أن يكون أكبر من جهد LED");
      return;
    }

    const calcR = (vs - vl) / (il / 1000);
    const e12R = getNearestE12(calcR);
    setResult({ calc: calcR, e12: e12R });
  };

  const reset = () => {
    setVSource("5"); setVLed("2"); setILed("20"); setResult(null);
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">مقاومة LED</CardTitle>
            <CardDescription>احسب المقاومة المناسبة لحماية صمام LED</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">جهد المصدر (V)</label>
            <Input
              type="number"
              step="any"
              value={vSource}
              onChange={(e) => setVSource(e.target.value)}
              className="text-center"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">جهد LED Forward (V)</label>
            <Input
              type="number"
              step="any"
              value={vLed}
              onChange={(e) => setVLed(e.target.value)}
              className="text-center"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">التيار المطلوب (mA)</label>
            <Input
              type="number"
              step="any"
              value={iLed}
              onChange={(e) => setILed(e.target.value)}
              className="text-center"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculate} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
            <Calculator className="h-4 w-4 ml-1" />
            احسب
          </Button>
          <Button variant="outline" onClick={reset} size="icon">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {result && (
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 p-4 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="text-center p-3 rounded-lg bg-white dark:bg-emerald-950/30">
                <p className="text-xs text-muted-foreground mb-1">القيمة المحسوبة</p>
                <p className="font-bold text-emerald-700 dark:text-emerald-300 text-lg">
                  {formatResistance(result.calc)}
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  ({result.calc.toFixed(2)} Ω)
                </p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white dark:bg-emerald-950/30">
                <p className="text-xs text-muted-foreground mb-1">أقرب قيمة E12 أعلى</p>
                <p className="font-bold text-emerald-700 dark:text-emerald-300 text-lg">
                  {formatResistance(result.e12)}
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  ({result.e12.toFixed(1)} Ω)
                </p>
              </div>
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 text-center font-mono">
              R = (V_source - V_LED) / (I_LED / 1000) = ({parseFloat(vSource)} - {parseFloat(vLed)}) / ({parseFloat(iLed)} / 1000) = {result.calc.toFixed(2)} Ω
            </p>
          </div>
        )}

        <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
          <Info className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
          <span>استخدم دائماً مقاومة أعلى من القيمة المحسوبة لحماية LED. القيم القياسية من سلسلة E12: 1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2</span>
        </div>
      </CardContent>
    </Card>
  );
}

/* ══════════════════════════════════════════════════════════════
   3. Voltage Divider Calculator
   ══════════════════════════════════════════════════════════════ */
function VoltageDividerCalc() {
  const [vIn, setVIn] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const vi = parseFloat(vIn);
    const r1v = parseFloat(r1);
    const r2v = parseFloat(r2);

    if (isNaN(vi) || isNaN(r1v) || isNaN(r2v)) {
      toast.error("يرجى ملء جميع الحقول بقيم صحيحة");
      return;
    }
    if (r1v <= 0 || r2v <= 0) {
      toast.error("قيم المقاومات يجب أن تكون أكبر من صفر");
      return;
    }

    const vOut = vi * r2v / (r1v + r2v);
    setResult(`${vOut.toFixed(4)} V`);
  };

  const reset = () => {
    setVIn(""); setR1(""); setR2(""); setResult(null);
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400">
            <ArrowDownUp className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">مقسم الجهد</CardTitle>
            <CardDescription>V_out = V_in × R2 / (R1 + R2)</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">V_in (V)</label>
            <Input
              type="number"
              step="any"
              placeholder="مثلاً 12"
              value={vIn}
              onChange={(e) => setVIn(e.target.value)}
              className="text-center"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">R1 (Ω)</label>
            <Input
              type="number"
              step="any"
              placeholder="مثلاً 10000"
              value={r1}
              onChange={(e) => setR1(e.target.value)}
              className="text-center"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">R2 (Ω)</label>
            <Input
              type="number"
              step="any"
              placeholder="مثلاً 10000"
              value={r2}
              onChange={(e) => setR2(e.target.value)}
              className="text-center"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculate} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
            <Calculator className="h-4 w-4 ml-1" />
            احسب
          </Button>
          <Button variant="outline" onClick={reset} size="icon">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {result && (
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="font-bold text-emerald-700 dark:text-emerald-300 text-lg">{result}</span>
            </div>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">V_out</p>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 font-mono">
              V_out = {parseFloat(vIn)} × {parseFloat(r2)} / ({parseFloat(r1)} + {parseFloat(r2)}) = {result}
            </p>
          </div>
        )}

        <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
          <Info className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
          <span>لا تستخدم مقسم جهد لتغذية حمل يحتاج تيار عالي. مقسم الجهد مناسب فقط للإشارات والإحساس.</span>
        </div>
      </CardContent>
    </Card>
  );
}

/* ══════════════════════════════════════════════════════════════
   4. Unit Converter
   ══════════════════════════════════════════════════════════════ */

interface UnitDef {
  label: string;
  toBase: (v: number) => number;
  fromBase: (v: number) => number;
  symbol: string;
}

const resistanceUnits: UnitDef[] = [
  { label: "Ω", toBase: (v) => v, fromBase: (v) => v, symbol: "Ω" },
  { label: "kΩ", toBase: (v) => v * 1000, fromBase: (v) => v / 1000, symbol: "kΩ" },
  { label: "MΩ", toBase: (v) => v * 1_000_000, fromBase: (v) => v / 1_000_000, symbol: "MΩ" },
];

const currentUnits: UnitDef[] = [
  { label: "μA", toBase: (v) => v / 1_000_000, fromBase: (v) => v * 1_000_000, symbol: "μA" },
  { label: "mA", toBase: (v) => v / 1000, fromBase: (v) => v * 1000, symbol: "mA" },
  { label: "A", toBase: (v) => v, fromBase: (v) => v, symbol: "A" },
];

const capacitanceUnits: UnitDef[] = [
  { label: "pF", toBase: (v) => v / 1_000_000, fromBase: (v) => v * 1_000_000, symbol: "pF" },
  { label: "nF", toBase: (v) => v / 1000, fromBase: (v) => v * 1000, symbol: "nF" },
  { label: "μF", toBase: (v) => v, fromBase: (v) => v, symbol: "μF" },
];

function UnitConverterSection({
  title,
  units,
  color,
}: {
  title: string;
  units: UnitDef[];
  color: string;
}) {
  const [value, setValue] = useState("");
  const [unitIdx, setUnitIdx] = useState(0);

  const numVal = parseFloat(value);
  const isValid = !isNaN(numVal) && value !== "";

  const baseValue = isValid ? units[unitIdx].toBase(numVal) : null;

  const conversions = useMemo(() => {
    if (baseValue === null) return null;
    return units.map((u, i) => ({
      label: u.label,
      value: u.fromBase(baseValue),
      active: i === unitIdx,
    }));
  }, [baseValue, unitIdx, units]);

  const formatNum = (n: number): string => {
    if (n === 0) return "0";
    if (Math.abs(n) >= 0.01 && Math.abs(n) < 10_000_000) {
      return parseFloat(n.toPrecision(6)).toString();
    }
    return n.toExponential(3);
  };

  return (
    <div className="space-y-3">
      <h4 className={`font-semibold text-sm ${color}`}>{title}</h4>
      <div className="flex gap-2">
        <Input
          type="number"
          step="any"
          placeholder="أدخل القيمة"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 text-center"
        />
        <select
          value={unitIdx}
          onChange={(e) => setUnitIdx(Number(e.target.value))}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer min-w-[80px]"
        >
          {units.map((u, i) => (
            <option key={u.label} value={i}>{u.label}</option>
          ))}
        </select>
      </div>

      {conversions && (
        <div className="grid grid-cols-3 gap-2">
          {conversions.map((c) => (
            <div
              key={c.label}
              className={`rounded-lg p-3 text-center border transition-colors ${
                c.active
                  ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800"
                  : "bg-muted/30 border-border/50"
              }`}
            >
              <p className="text-[10px] text-muted-foreground mb-1">{c.label}</p>
              <p className={`text-sm font-semibold font-mono ${c.active ? "text-emerald-700 dark:text-emerald-300" : "text-foreground"}`}>
                {formatNum(c.value)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function UnitConverterTab() {
  return (
    <div className="space-y-6">
      <Card className="border-border/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400">
              <ArrowLeftRight className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg">تحويل الوحدات</CardTitle>
              <CardDescription>حوّل بين وحدات الإلكترونيات المختلفة في الوقت الفعلي</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <UnitConverterSection
            title="مقاومة"
            units={resistanceUnits}
            color="text-emerald-600 dark:text-emerald-400"
          />
          <div className="border-t border-border/30" />
          <UnitConverterSection
            title="تيار"
            units={currentUnits}
            color="text-teal-600 dark:text-teal-400"
          />
          <div className="border-t border-border/30" />
          <UnitConverterSection
            title="سعة"
            units={capacitanceUnits}
            color="text-amber-600 dark:text-amber-400"
          />

          <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
            <Info className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
            <div className="space-y-1">
              <p>• 1 kΩ = 1,000 Ω &nbsp;|&nbsp; 1 MΩ = 1,000,000 Ω</p>
              <p>• 1 mA = 1,000 μA &nbsp;|&nbsp; 1 A = 1,000,000 μA</p>
              <p>• 1 nF = 1,000 pF &nbsp;|&nbsp; 1 μF = 1,000,000 pF</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   Main Component
   ══════════════════════════════════════════════════════════════ */
export default function CalculatorPage() {
  return (
    <div className="space-y-8 pb-8" dir="rtl">
      {/* Header */}
      <section className="text-center">
        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
          <Calculator className="h-3.5 w-3.5 ml-1" />
          أدوات حساب إلكترونية
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          الآلة الحاسبة الإلكترونية
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          حاسبات هندسية لقانون أوم، مقاومة LED، مقسم الجهد، وتحويل الوحدات —
          كل ما تحتاجه لتصميم دوائرك الإلكترونية
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Badge variant="outline" className="text-sm">
            <Zap className="h-3.5 w-3.5 ml-1" />
            4 حاسبات
          </Badge>
          <Badge variant="outline" className="text-sm">
            <Info className="h-3.5 w-3.5 ml-1" />
            حسابات فورية
          </Badge>
        </div>
      </section>

      {/* Calculator Tabs */}
      <Tabs defaultValue="ohm" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 h-auto p-1">
          <TabsTrigger
            value="ohm"
            className="flex flex-col items-center gap-1 py-2.5 px-2 text-[11px] sm:text-xs data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <Calculator className="h-4 w-4" />
            <span>قانون أوم</span>
          </TabsTrigger>
          <TabsTrigger
            value="led"
            className="flex flex-col items-center gap-1 py-2.5 px-2 text-[11px] sm:text-xs data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <Lightbulb className="h-4 w-4" />
            <span>مقاومة LED</span>
          </TabsTrigger>
          <TabsTrigger
            value="divider"
            className="flex flex-col items-center gap-1 py-2.5 px-2 text-[11px] sm:text-xs data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <ArrowDownUp className="h-4 w-4" />
            <span>مقسم الجهد</span>
          </TabsTrigger>
          <TabsTrigger
            value="units"
            className="flex flex-col items-center gap-1 py-2.5 px-2 text-[11px] sm:text-xs data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <ArrowLeftRight className="h-4 w-4" />
            <span>تحويل وحدات</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ohm" className="mt-6">
          <OhmsLawCalc />
        </TabsContent>
        <TabsContent value="led" className="mt-6">
          <LEDResistorCalc />
        </TabsContent>
        <TabsContent value="divider" className="mt-6">
          <VoltageDividerCalc />
        </TabsContent>
        <TabsContent value="units" className="mt-6">
          <UnitConverterTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
