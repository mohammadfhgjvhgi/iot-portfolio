"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  ShoppingBag,
  GraduationCap,
  Gift,
  Monitor,
  Zap,
  Users,
  Video,
  Briefcase,
  CircuitBoard,
  Star,
  ArrowUpRight,
  Clock,
  BarChart3,
  Target,
  Lightbulb,
  CheckCircle2,
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
import { Progress } from "@/components/ui/progress";

interface RevenueIdea {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  howTo: string[];
  estimatedRevenue: string;
  difficulty: "سهل" | "متوسط" | "متقدم";
  difficultyColor: string;
  priority: "عالية" | "متوسطة" | "منخفضة";
  priorityColor: string;
  timeToStart: string;
  category: string;
}

const revenueIdeas: RevenueIdea[] = [
  {
    id: "courses",
    title: "بيع كورسات تعليمية مدفوعة",
    icon: GraduationCap,
    description:
      "أنشئ كورسات تعليمية متكاملة حول Arduino و ESP32 و IoT. يمكنك تسجيل فيديوهات شاملة وبيعها عبر المنصة أو منصات مثل Udemy.",
    howTo: [
      "حدد 5-10 مواضيع مطلوبة (مثل: مشروع smart home كامل)",
      "سجّل الفيديوهات بالعربية مع شرح عملي خطوة بخطوة",
      "أضف ملفات مشاريع جاهزة (Codes + Schematics) كموارد",
      "اعرض 2-3 دروس مجانية كـ Trailer للكورس",
      "استخدم منصة Udemy أو قم بإضافة نظام دفع على موقعك",
    ],
    estimatedRevenue: "$10-50 لكل كورس × 100-500 طالب = $1,000-25,000/سنة",
    difficulty: "متوسط",
    difficultyColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    priority: "عالية",
    priorityColor: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    timeToStart: "2-4 أسابيع",
    category: "محتوى تعليمي",
  },
  {
    id: "affiliate",
    title: "التسويق بالعمولة (Affiliate Marketing)",
    icon: ShoppingBag,
    description:
      "اربط موقعك ببرامج تسويق العمولة من متاجر إلكترونية مثل AliExpress و Amazon. عندما يشتري أحد من رابطك تحصل على عمولة.",
    howTo: [
      "سجّل في برامج AliExpress Associates و Amazon Associates",
      "أضف روابط شراء المكونات في كل مشروع (مثلاً: اشترِ ESP32 من هنا)",
      "أنشئ صفحة 'أدوات نوصي بها' في الموقع",
      "اكتب مقالات مراجعة (Reviews) للمكونات مع روابط شراء",
      "شارك الروابط في قنوات تليجرام مع ملاحظة أنها روابط دعم",
    ],
    estimatedRevenue: "$50-300/شهر من AliExpress + $30-150/شهر من Amazon",
    difficulty: "سهل",
    difficultyColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    priority: "عالية",
    priorityColor: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    timeToStart: "1-2 أسبوع",
    category: "تسويق",
  },
  {
    id: "kits",
    title: "بيع أدوات ومجموعات مشاريع جاهزة (Kits)",
    icon: CircuitBoard,
    description:
      "أعد حزم مشاريع جاهزة تحتوي على جميع المكونات المطلوبة لمشروع معين. ابيعها عبر الموقع أو AliExpress storefront.",
    howTo: [
      "صمّم 3-5 مجموعات (Starter Kit, Smart Home Kit, Robot Kit)",
      "تعاون مع موردين على AliExpress لشراء المكونات بالجملة",
      "أضف كتيب تعليمي مطبوع أو QR Code لفيديو شرح",
      "أنشئ متجر على الموقع أو استخدم Salla أو Zid",
      "اعرض المجموعات في فيديوهات YouTube و Instagram",
    ],
    estimatedRevenue: "$20-100 لكل مجموعة × 50-200 طلب/شهر = $1,000-20,000/سنة",
    difficulty: "متوسط",
    difficultyColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    priority: "عالية",
    priorityColor: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    timeToStart: "3-6 أسابيع",
    category: "تجارة",
  },
  {
    id: "membership",
    title: "عضويات مدفوعة للمحتوى الحصري (Patreon)",
    icon: Gift,
    description:
      "قدم محتوى حصري للمشتركين المدفوعين مثل مشاريع متقدمة، استشارات مباشرة، ملفات PCB جاهزة، ومجتمع خاص.",
    howTo: [
      "أنشئ صفحة على Patreon أو استخدم نظام عضويات على موقعك",
      "حدد مستويات: $5/شهر (محتوى إضافي) و $15/شهر (استشارات + مشاريع PCB)",
      "قدم محتوى مجاني جيد لجذب الأعضاء + محتوى حصري للمشتركين",
      "أضف مزايا مثل: استشارة أسبوعية، وصول مبكر للمحتوى، ملفات PCB جاهزة",
      "التزم بجدول نشر ثابت (2-4 محتويات حصرية شهرياً)",
    ],
    estimatedRevenue: "200 عضو × $5-15/شهر = $1,000-3,000/شهر",
    difficulty: "سهل",
    difficultyColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    priority: "عالية",
    priorityColor: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    timeToStart: "1-2 أسبوع",
    category: "اشتراكات",
  },
  {
    id: "adsense",
    title: "إعلانات Google AdSense",
    icon: Monitor,
    description:
      "أضف إعلانات Google AdSense على موقعك وصفحات المقالات. مع زيادة الزوار ستزداد الأرباح.",
    howTo: [
      "اجمع 50+ مقال محتوى ذو جودة عالية",
      "قدم بطلب لـ Google AdSense (يحتاج 500+ زيارة يومياً تقريباً)",
      "ضع الإعلانات بشكل ذكي بدون إزعاج المستخدم",
      "حسّن SEO للموقع لجذب زيارات من محركات البحث",
      "أنشئ مقالات متخصصة مثل 'أفضل حساسات Arduino 2025'",
    ],
    estimatedRevenue: "$5-20 CPM في المحتوى التقني العربي × 10K-50K زيارة/شهر = $50-1,000/شهر",
    difficulty: "سهل",
    difficultyColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    priority: "متوسطة",
    priorityColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    timeToStart: "2-4 أسابيع (بعد بناء محتوى)",
    category: "إعلانات",
  },
  {
    id: "consulting",
    title: "استشارات ومشاريع مخصصة",
    icon: Briefcase,
    description:
      "قدم خدمة استشارية لبناء مشاريع إلكترونية مخصصة للعملاء. مشاريع التخرج، أنظمة أتمتة للشركات الصغيرة، أو مشاريع IoT.",
    howTo: [
      "أضف صفحة 'خدمات' في الموقع مع أمثلة أعمال سابقة",
      "حدد أسعار واضحة: استشارة $30-50، مشروع كامل $100-500",
      "استخدم نموذج اتصال لاستقبال طلبات العملاء",
      "شارك نماذج أعمالك في قنوات التواصل (Portfolio)",
      "ركز على مشاريع التخرج الجامعي - طلب عالٍ في العالم العربي",
    ],
    estimatedRevenue: "3-5 مشاريع/شهر × $100-500 = $300-2,500/شهر",
    difficulty: "متوسط",
    difficultyColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    priority: "متوسطة",
    priorityColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    timeToStart: "1-2 أسبوع",
    category: "خدمات",
  },
  {
    id: "pcb",
    title: "بيع تصميمات PCB ومخططات مشاريع",
    icon: Zap,
    description:
      "صمم لوحات PCB مخصصة للمشاريع الشائعة وبيعها كملفات Gerber أو لوحات مطبوعة عبر خدمات مثل PCBWay.",
    howTo: [
      "صمّم لوحات PCB لمشاريعك الأكثر شعبية باستخدام KiCad أو EasyEDA",
      "بيع ملفات Gerber بمبلغ $5-15 لكل تصميم عبر الموقع",
      "تعاون مع PCBWay للحصول على رعاية أو عمولة",
      "أضف PCB كـ 'Add-on' عند بيع الكورسات أو Kits",
      "أنشئ متجر على GitHub أو Tindie لبيع التصاميم",
    ],
    estimatedRevenue: "$5-30 لكل تصميم × 20-100 بيع/شهر = $100-3,000/شهر",
    difficulty: "متقدم",
    difficultyColor: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    priority: "متوسطة",
    priorityColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    timeToStart: "3-4 أسابيع",
    category: "تصميمات",
  },
  {
    id: "youtube",
    title: "تحقيق دخل من YouTube",
    icon: Video,
    description:
      "أنشئ قناة YouTube بنفس محتوى المشاريع. فيديوهات تعليمية تجذب مشاهدات عالية ويمكن تحقيق دخل من الإعلانات.",
    howTo: [
      "أعد نفس محتوى المشاريع كفيديوهات تعليمية بطول 10-20 دقيقة",
      "استخدم DaVinci Resolve المجاني للمونتاج",
      "الوصول لـ 1000 مشترك + 4000 ساعة مشاهدة لتفعيل Monetization",
      "أضف روابط شراء المكونات في الوصف (Affiliate)",
      "نشر فيديو واحد أسبوعياً للحفاظ على النمو",
    ],
    estimatedRevenue: "$3-8 CPM × 50K-200K مشاهدة/شهر = $150-1,600/شهر + Affiliate",
    difficulty: "متوسط",
    difficultyColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    priority: "متوسطة",
    priorityColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    timeToStart: "2-3 أشهر",
    category: "محتوى فيديو",
  },
  {
    id: "tutoring",
    title: "تدريس عبر Zoom/Google Meet (مباشر)",
    icon: Users,
    description:
      "قدم دروساً خصوصية عبر الإنترنت للطلاب الذين يحتاجون متابعة شخصية في مشاريعهم أو كورسات مكثفة عبر Zoom.",
    howTo: [
      "حدد خدمات: ساعة واحدة $20-40، كورس مكثف 5 ساعات $80-150",
      "أعلن عن الخدمة في قنوات تليجرام والموقع",
      "استخدم Calendly لحجز المواعيد تلقائياً",
      "قدم حصة تجريبية مجانية (15 دقيقة) لجذب العملاء",
      "سجّل الحصص وبيعها ككورس مسجل لاحقاً",
    ],
    estimatedRevenue: "10-20 ساعة/شهر × $20-40 = $200-800/شهر",
    difficulty: "سهل",
    difficultyColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    priority: "منخفضة",
    priorityColor: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    timeToStart: "1 أسبوع",
    category: "تعليم مباشر",
  },
  {
    id: "iot-solutions",
    title: "تطوير حلول IoT للشركات",
    icon: Target,
    description:
      "قدم حلول إنترنت الأشياء المخصصة للشركات الصغيرة والمتوسطة مثل أنظمة المراقبة وأتمتة المصانع.",
    howTo: [
      "حدد مجالات تخصص: مراقبة زراعية، أتمتة مصنع صغير، نظام حضور",
      "ابنِ 2-3 مشاريع نموذجية (Demo) كـ Portfolio",
      "تواصل مع الشركات عبر LinkedIn أو المعارض المحلية",
      "شارك مع شريك مسؤول عن المبيعات (Business Development)",
      "ابدأ بمشاريع صغيرة ($500-2000) ثم توسع",
    ],
    estimatedRevenue: "$500-5,000 لكل مشروع × 2-5 مشاريع/سنة = $1,000-25,000/سنة",
    difficulty: "متقدم",
    difficultyColor: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    priority: "منخفضة",
    priorityColor: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    timeToStart: "1-3 أشهر",
    category: "حلول مؤسسية",
  },
];

const priorityMatrix = [
  { priority: "عالية", color: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300", items: ["التسويق بالعمولة", "عضويات Patreon", "بيع الكورسات", "بيع Kits"] },
  { priority: "متوسطة", color: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300", items: ["AdSense", "استشارات", "YouTube", "تصميمات PCB"] },
  { priority: "منخفضة", color: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300", items: ["تدريس مباشر", "حلول IoT للشركات"] },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function MonetizationPage() {
  const [expandedIdea, setExpandedIdea] = useState<string | null>("courses");
  const [filterCategory, setFilterCategory] = useState("الكل");

  const categories = ["الكل", ...Array.from(new Set(revenueIdeas.map((i) => i.category)))];
  const filtered = filterCategory === "الكل" ? revenueIdeas : revenueIdeas.filter((i) => i.category === filterCategory);

  return (
    <div className="space-y-12 pb-8">
      {/* Header */}
      <section className="text-center">
        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
          <DollarSign className="h-3.5 w-3.5 ml-1" />
          اقتراحات الربح
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          كيف تحوّل موقعك إلى مصدر دخل حقيقي
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
          10 اقتراحات مجرّبة لتحقيق دخل من منصة التعليم الإلكتروني. نحن
          شخصان - كل اقتراح يحتاج تخطيطاً وتنفيذاً حسب الوقت والجهد
          المتاحين.
        </p>
      </section>

      {/* Summary Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-primary">10</div>
            <div className="text-sm text-muted-foreground">مصدر دخل مقترح</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-8 w-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-primary">$3K-10K</div>
            <div className="text-sm text-muted-foreground">دخل شهري متوقع (مجمع)</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-primary">2-4</div>
            <div className="text-sm text-muted-foreground">أسابيع للبدء (أسرع خيار)</div>
          </CardContent>
        </Card>
      </section>

      {/* Priority Matrix */}
      <section>
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              مصفوفة الأولوية - ما تبدأ به أولاً
            </CardTitle>
            <CardDescription>
              ابدأ بالأفكار ذات الأولوية العالية لأنها الأسهل والأسرع في تحقيق الدخل
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {priorityMatrix.map((row) => (
              <div key={row.priority} className="flex items-start gap-3">
                <Badge className={`text-xs ${row.color} shrink-0 mt-1`}>
                  {row.priority}
                </Badge>
                <div className="flex flex-wrap gap-2">
                  {row.items.map((it) => (
                    <Badge key={it} variant="outline" className="text-xs">
                      {it}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={filterCategory === cat ? "default" : "outline"}
            className={filterCategory === cat ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setFilterCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Revenue Ideas */}
      <motion.section
        key={filterCategory}
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {filtered.map((idea) => {
          const isExpanded = expandedIdea === idea.id;
          return (
            <motion.div key={idea.id} variants={item}>
              <Card className="border-border/50 overflow-hidden hover:border-primary/30 transition-colors">
                <button
                  onClick={() => setExpandedIdea(isExpanded ? null : idea.id)}
                  className="w-full text-right"
                >
                  <CardHeader className="pb-4 hover:bg-muted/30 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                        <idea.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <CardTitle className="text-lg">
                            {idea.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {idea.category}
                          </Badge>
                          <Badge variant="secondary" className={`text-xs ${idea.difficultyColor}`}>
                            {idea.difficulty}
                          </Badge>
                          <Badge variant="secondary" className={`text-xs ${idea.priorityColor}`}>
                            أولوية: {idea.priority}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {idea.description}
                        </CardDescription>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {idea.estimatedRevenue}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            مدة البدء: {idea.timeToStart}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 flex items-center justify-center ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </div>
                    </div>
                  </CardHeader>
                </button>

                {isExpanded && (
                  <CardContent className="pt-0 pb-6 px-6">
                    <div className="border-t border-border/50 pt-4 space-y-4">
                      {/* Revenue Highlight */}
                      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          <span className="font-bold text-sm text-emerald-700 dark:text-emerald-300">
                            الدخل المتوقع
                          </span>
                        </div>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                          {idea.estimatedRevenue}
                        </p>
                      </div>

                      {/* How To Steps */}
                      <div>
                        <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-primary" />
                          كيف تبدأ - خطوات عملية
                        </h4>
                        <div className="space-y-2">
                          {idea.howTo.map((step, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
                            >
                              <div className="flex h-6 w-6 rounded-full bg-primary/10 text-primary items-center justify-center text-xs font-bold shrink-0">
                                {idx + 1}
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Tips */}
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-xs text-muted-foreground">
                          💡 <strong>نصيحة:</strong> بدءاً من 2-3 مصادر دخل متزامنة أفضل من الاعتماد على مصدر واحد.
                          ننصح بالبدء بـ Affiliate + Patreon لأنهما الأسرع في الإعداد.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.section>

      {/* Final Recommendation */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-teal-600 p-8 md:p-12 text-white">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            📋 خطة تنفيذ مقترحة (لشخصين)
          </h3>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <h4 className="font-bold mb-2">الشهر 1-2: الأساسيات</h4>
              <ul className="space-y-1.5 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  إعداد روابط Affiliate في جميع المشاريع على الموقع
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  إنشاء صفحة Patreon وعرض عضويات $5/$15
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  بناء 10+ مقالات SEO على الموقع لجذب زيارات
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <h4 className="font-bold mb-2">الشهر 3-4: التوسع</h4>
              <ul className="space-y-1.5 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  تسجيل أول كورس مدفوع (5-10 دروس)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  إطلاق قناة YouTube
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  تصميم أول Starter Kit للبيع
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <h4 className="font-bold mb-2">الشهر 5-6: الاحتراف</h4>
              <ul className="space-y-1.5 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  التقدم بطلب Google AdSense
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  إضافة خدمة الاستشارات والمشاريع المخصصة
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  البدء في تصميمات PCB للبيع
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-center">
            <p className="text-sm text-white/90">
              🎯 <strong>الهدف:</strong> الوصول إلى <strong>$1,000-3,000/شهر</strong> خلال 6 أشهر
              من مصادر دخل متعددة ومتنوعة
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
