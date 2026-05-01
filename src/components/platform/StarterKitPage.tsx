"use client";

import { useState } from "react";
import { ShoppingCart, Package, Wrench, Copy, Check, Zap, TrendingUp, Crown, ChevronLeft, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { toast } from "sonner";

interface KitItem {
  name: string;
  quantity: string;
  price: string;
}

interface Kit {
  id: string;
  name: string;
  level: string;
  priceRange: string;
  description: string;
  icon: React.ReactNode;
  colorClass: {
    bg: string;
    bgLight: string;
    text: string;
    textLight: string;
    border: string;
    badge: string;
    badgeText: string;
    rowHover: string;
  };
  items: KitItem[];
  total: string;
}

interface Tool {
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}

const kit1Items: KitItem[] = [
  { name: "Arduino UNO R3", quantity: "×1", price: "$5" },
  { name: "Breadboard 830 نقطة", quantity: "×1", price: "$2" },
  { name: "أسلاك Jumper (M-M, M-F)", quantity: "×40", price: "$3" },
  { name: "LED (أحمر، أخضر، أصفر)", quantity: "×10", price: "$1" },
  { name: "مقاومات 220Ω", quantity: "×20", price: "$1" },
  { name: "زر ضغط 4-pin", quantity: "×5", price: "$1" },
  { name: "Buzzer أنبوبي", quantity: "×1", price: "$0.5" },
  { name: "Photoresistor LDR", quantity: "×2", price: "$1" },
  { name: "DHT11", quantity: "×1", price: "$2" },
  { name: "Servo Motor SG90", quantity: "×1", price: "$2" },
  { name: "USB Cable Type-B", quantity: "×1", price: "$2" },
];

const kit2Additional: KitItem[] = [
  { name: "ESP32 DevKit V1", quantity: "×1", price: "$5" },
  { name: "HC-SR04 حساس الموجات فوق الصوتية", quantity: "×1", price: "$2" },
  { name: "PIR HC-SR501 كشف الحركة", quantity: "×1", price: "$2" },
  { name: "Relay 4-Channel", quantity: "×1", price: "$3" },
  { name: "I2C LCD 16×2", quantity: "×1", price: "$3" },
  { name: "OLED SSD1306 0.96\"", quantity: "×1", price: "$3" },
  { name: "Soil Moisture Sensor", quantity: "×2", price: "$2" },
  { name: "MQ-2 Gas Sensor", quantity: "×1", price: "$2" },
  { name: "RGB LED Common Cathode", quantity: "×5", price: "$1" },
  { name: "Stepper Motor 28BYJ-48 + ULN2003 Driver", quantity: "×1", price: "$5" },
  { name: "DC Motor + L298N Driver", quantity: "×1", price: "$4" },
];

const kit3Additional: KitItem[] = [
  { name: "ESP32-CAM OV2640", quantity: "×1", price: "$6" },
  { name: "RFID RC522", quantity: "×1", price: "$3" },
  { name: "MPU6050", quantity: "×1", price: "$2" },
  { name: "BMP280", quantity: "×1", price: "$2" },
  { name: "IR Sensor TCRT5000", quantity: "×2", price: "$2" },
  { name: "Matrix Keypad 4×4", quantity: "×1", price: "$2" },
  { name: "WS2812B LED Strip 1m", quantity: "×1", price: "$5" },
  { name: "DS3231 RTC Module", quantity: "×1", price: "$2" },
  { name: "Potentiometer 10KΩ", quantity: "×5", price: "$2" },
  { name: "Transistor 2N2222", quantity: "×10", price: "$2" },
  { name: "Capacitor Assortment Kit", quantity: "×1", price: "$3" },
];

const kits: Kit[] = [
  {
    id: "beginner",
    name: "طقم المبتدئ",
    level: "مبتدئ",
    priceRange: "$20-25",
    description: "مثالي للمبتدئين الذين يبدؤون رحلتهم في عالم الإلكترونيات والبرمجة. يحتوي على الأساسيات اللازمة لتعلم التوصيلات والبرمجة الأساسية.",
    icon: <Zap className="h-6 w-6" />,
    colorClass: {
      bg: "bg-emerald-600",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
      text: "text-emerald-700 dark:text-emerald-400",
      textLight: "text-emerald-600 dark:text-emerald-300",
      border: "border-emerald-200 dark:border-emerald-800",
      badge: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      badgeText: "bg-emerald-600 text-white",
      rowHover: "hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20",
    },
    items: kit1Items,
    total: "~$20-25",
  },
  {
    id: "intermediate",
    name: "طقم المتوسط",
    level: "متوسط",
    priceRange: "$55-65",
    description: "للمتعلمين الذين أكملوا الأساسيات ويريدون الانتقال لمشاريع أعمق يشمل WiFi وBluetooth والتحكم بالأنظمة المنزلية والروبوتات.",
    icon: <TrendingUp className="h-6 w-6" />,
    colorClass: {
      bg: "bg-amber-600",
      bgLight: "bg-amber-50 dark:bg-amber-950/30",
      text: "text-amber-700 dark:text-amber-400",
      textLight: "text-amber-600 dark:text-amber-300",
      border: "border-amber-200 dark:border-amber-800",
      badge: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      badgeText: "bg-amber-600 text-white",
      rowHover: "hover:bg-amber-50/50 dark:hover:bg-amber-950/20",
    },
    items: kit2Additional,
    total: "~$55-65",
  },
  {
    id: "advanced",
    name: "طقم المتقدم",
    level: "متقدم",
    priceRange: "$95-115",
    description: "للمهندسين والهواة المتقدمين الذين يريدون بناء مشاريع معقدة تشمل الكاميرا، RFID، الحساسات المتقدمة، وأنظمة إنترنت الأشياء المتكاملة.",
    icon: <Crown className="h-6 w-6" />,
    colorClass: {
      bg: "bg-rose-600",
      bgLight: "bg-rose-50 dark:bg-rose-950/30",
      text: "text-rose-700 dark:text-rose-400",
      textLight: "text-rose-600 dark:text-rose-300",
      border: "border-rose-200 dark:border-rose-800",
      badge: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
      badgeText: "bg-rose-600 text-white",
      rowHover: "hover:bg-rose-50/50 dark:hover:bg-rose-950/20",
    },
    items: kit3Additional,
    total: "~$95-115",
  },
];

const tools: Tool[] = [
  {
    name: "لحام كهربائي 60W",
    price: "$15-30",
    description: "لحام المكونات على PCB — أساسي لأي مشروع إلكتروني",
    icon: <Wrench className="h-6 w-6 text-orange-500" />,
  },
  {
    name: "متعدد القياس Digital Multimeter",
    price: "$10-20",
    description: "قياس الجهد والتيار والمقاومة — أداة لا غنى عنها",
    icon: <Zap className="h-6 w-6 text-blue-500" />,
  },
  {
    name: "قاطع أسلاك",
    price: "$3-5",
    description: "قطع وتقشير الأسلاك بدقة وسرعة",
    icon: <ChevronLeft className="h-6 w-6 text-emerald-500" />,
  },
  {
    name: "مشط الأسلاك (Wire Stripper)",
    price: "$5-10",
    description: "تقشير الأسلاك بدقة دون قطع النحاس الداخلي",
    icon: <Package className="h-6 w-6 text-purple-500" />,
  },
];

function KitTab({ kit, kitIndex }: { kit: Kit; kitIndex: number }) {
  const [copied, setCopied] = useState(false);
  const c = kit.colorClass;

  const handleCopy = () => {
    let text = `📦 ${kit.name} (${kit.priceRange})\n`;
    text += "─".repeat(30) + "\n\n";

    if (kitIndex > 0) {
      text += `✅ يشمل كل ما في طقم ${kitIndex === 1 ? "المبتدئ" : "المتوسط"}\n\n`;
    }

    text += "القطعة | الكمية | السعر\n";
    text += "─".repeat(30) + "\n";
    kit.items.forEach((item) => {
      text += `${item.name} | ${item.quantity} | ${item.price}\n`;
    });
    text += "─".repeat(30) + "\n";
    text += `💰 المجموع: ${kit.total}\n`;
    text += "\n📌 الأسعار تقريبية من AliExpress";

    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("تم نسخ قائمة الشراء بنجاح!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Kit Header */}
      <Card className={`border ${c.border} overflow-hidden`}>
        <CardContent className="p-0">
          <div className={`${c.bgLight} px-5 py-4 border-b ${c.border}`}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.bg} text-white shadow-md`}>
                  {kit.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${c.text}`}>{kit.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{kit.description}</p>
                </div>
              </div>
              <Badge className={`${c.badgeText} text-sm px-3 py-1 font-bold shadow-sm`}>
                {kit.priceRange}
              </Badge>
            </div>
          </div>

          {/* Components Table */}
          <div className="p-4 sm:p-5">
            {kitIndex > 0 && (
              <div className={`flex items-center gap-2 rounded-lg ${c.bgLight} border ${c.border} px-4 py-3 mb-4`}>
                <Package className={`h-4 w-4 ${c.text}`} />
                <span className={`text-sm font-medium ${c.text}`}>
                  يشمل كل ما في طقم {kitIndex === 1 ? "المبتدئ" : "المتوسط"} +
                </span>
                <span className="text-sm text-muted-foreground">({kit.items.length} قطعة إضافية)</span>
              </div>
            )}

            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className={`${c.rowHover} border-b ${c.border}`}>
                      <TableHead className="text-right font-bold text-muted-foreground text-sm">القطعة</TableHead>
                      <TableHead className="text-center font-bold text-muted-foreground text-sm w-24">الكمية</TableHead>
                      <TableHead className="text-center font-bold text-muted-foreground text-sm w-24">السعر</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {kit.items.map((item, idx) => (
                      <TableRow key={idx} className={`${c.rowHover}`}>
                        <TableCell className="text-right font-medium text-sm">{item.name}</TableCell>
                        <TableCell className="text-center">
                          <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ${c.badge}`}>
                            {item.quantity}
                          </span>
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground font-mono">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Total + Copy */}
            <div className="flex items-center justify-between flex-wrap gap-3 mt-5 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-bold text-emerald-700 dark:text-emerald-400 text-lg">المجموع: {kit.total}</span>
              </div>
              <Button
                onClick={handleCopy}
                variant="outline"
                className={`gap-2 border ${c.border} ${c.text} hover:${c.bgLight} transition-all`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>نسخ قائمة الشراء</span>
                  </>
                )}
              </Button>
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 mt-3 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              <span>الأسعار تقريبية من AliExpress وقد تختلف حسب البلد والبائع</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ToolsTab() {
  return (
    <div className="space-y-4">
      <Card className="border-border/50 overflow-hidden">
        <CardContent className="p-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 dark:bg-slate-700 text-white shadow-md">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">أدوات التشغيل الأساسية</h3>
              <p className="text-sm text-muted-foreground mt-0.5">أدوات ضرورية للعمل على المشاريع الإلكترونية واللحام والتوصيل</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool, idx) => (
              <Card key={idx} className="border-border/50 shadow-sm hover:shadow-md transition-shadow group">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 group-hover:bg-muted transition-colors shrink-0">
                      {tool.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-bold text-sm text-foreground">{tool.name}</h4>
                        <Badge variant="outline" className="shrink-0 font-mono text-xs border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400">
                          {tool.price}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="flex items-start gap-2 mt-4 text-xs text-muted-foreground">
            <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
            <span>الأسعار تقريبية وقد تختلف حسب البلد والمتجر. يمكنك العثور على هذه الأدوات في متاجر الإلكترونيات المحلية أو عبر AliExpress/Amazon</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function StarterKitPage() {
  return (
    <div dir="rtl" className="space-y-6">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <Badge className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 px-3 py-1 text-sm">
          <Package className="h-3.5 w-3.5 ml-1" />
          أدوات البدء
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          أطقم المكونات الإلكترونية
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          اختر الطقم المناسب لمستواك — من المبتدئ مع Arduino UNO إلى المتقدم مع ESP32-CAM والمشاريع المعقدة.
          كل طقم مصمم ليكفيك في مسارك التعليمي.
        </p>
      </div>

      {/* Kit Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {kits.map((kit) => (
          <Card key={kit.id} className={`border ${kit.colorClass.border} hover:shadow-md transition-shadow`}>
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${kit.colorClass.bg} text-white shrink-0`}>
                {kit.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-bold text-sm ${kit.colorClass.text}`}>{kit.name}</h4>
                <p className="text-xs text-muted-foreground">{kit.items.length} قطعة</p>
              </div>
              <Badge className={`${kit.colorClass.badgeText} text-xs font-bold`}>
                {kit.priceRange}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="w-full sm:w-auto flex flex-wrap h-auto gap-1 p-1">
          <TabsTrigger
            value="beginner"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-sm text-xs sm:text-sm gap-1.5 px-3 sm:px-4 py-2"
          >
            <Zap className="h-4 w-4" />
            مبتدئ
          </TabsTrigger>
          <TabsTrigger
            value="intermediate"
            className="data-[state=active]:bg-amber-600 data-[state=active]:text-white data-[state=active]:shadow-sm text-xs sm:text-sm gap-1.5 px-3 sm:px-4 py-2"
          >
            <TrendingUp className="h-4 w-4" />
            متوسط
          </TabsTrigger>
          <TabsTrigger
            value="advanced"
            className="data-[state=active]:bg-rose-600 data-[state=active]:text-white data-[state=active]:shadow-sm text-xs sm:text-sm gap-1.5 px-3 sm:px-4 py-2"
          >
            <Crown className="h-4 w-4" />
            متقدم
          </TabsTrigger>
          <TabsTrigger
            value="tools"
            className="data-[state=active]:bg-slate-800 dark:data-[state=active]:bg-slate-700 data-[state=active]:text-white data-[state=active]:shadow-sm text-xs sm:text-sm gap-1.5 px-3 sm:px-4 py-2"
          >
            <Wrench className="h-4 w-4" />
            أدوات التشغيل
          </TabsTrigger>
        </TabsList>

        <TabsContent value="beginner" className="mt-4">
          <KitTab kit={kits[0]} kitIndex={0} />
        </TabsContent>
        <TabsContent value="intermediate" className="mt-4">
          <KitTab kit={kits[1]} kitIndex={1} />
        </TabsContent>
        <TabsContent value="advanced" className="mt-4">
          <KitTab kit={kits[2]} kitIndex={2} />
        </TabsContent>
        <TabsContent value="tools" className="mt-4">
          <ToolsTab />
        </TabsContent>
      </Tabs>

      {/* Bottom Tip */}
      <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardContent className="p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 shrink-0">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-1">نصيحة الشراء</h4>
              <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80 leading-relaxed">
                ننصح بشراء أطقم كاملة من بائع واحد على AliExpress لتوفير تكاليف الشحن.
                ابحث عن &quot;Arduino starter kit&quot; أو &quot;ESP32 kit&quot; واختر الطقم الذي يحتوي على أكبر عدد من القطع المطلوبة.
                يمكنك أيضاً شراء القطع الفردية حسب الحاجة من متاجر الإلكترونيات المحلية.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
