"use client";

import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Send,
  MessageCircle,
  Facebook,
  HelpCircle,
  ChevronDown,
  AlertTriangle,
  Wrench,
  BookOpen,
  Users,
  ExternalLink,
  Mail,
  Phone,
  MessageSquare,
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
import { Textarea } from "@/components/ui/textarea";

const socialChannels = [
  {
    name: "قناة تليجرام",
    nameEn: "Telegram Channel",
    description: "مشاريع إلكترونية وذكاء اصطناعي",
    url: "https://t.me/Mashari3_AI_Arduino",
    icon: Send,
    color: "text-sky-500",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
    borderColor: "border-sky-200 dark:border-sky-800",
    members: "+5000",
    type: "قناة",
  },
  {
    name: "مجموعة النقاش",
    nameEn: "Discussion Group",
    description: "مشاريع إلكترونية وذكاء اصطناعي",
    url: "https://t.me/Arsuino1",
    icon: MessageCircle,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    members: "+3000",
    type: "مجموعة",
  },
  {
    name: "صفحة فيسبوك",
    nameEn: "Facebook Page",
    description: "مشاريع إلكترونية وذكاء اصطناعي",
    url: "https://www.facebook.com/share/1HnZactzYD/",
    icon: Facebook,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    members: "+2000",
    type: "صفحة",
  },
];

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "ما هو Arduino وما الفرق بينه وبين ESP32؟",
    answer: "Arduino هو منصة إلكترونية مفتوحة المصدر تستخدم للنماذج الأولية. Arduino Uno أبسط وأسهل للمبتدئين بينما ESP32 أكثر قوة ويدعم Wi-Fi و Bluetooth مدمج مما يجعله مثالياً لمشاريع IoT.",
    category: "أساسيات",
  },
  {
    question: "كيف أبدأ تعلم الإلكترونيات من الصفر؟",
    answer: "ابدأ بمسارنا التعليمي: Module 1 - تعرف على المفاهيم الأساسية (جهد، تيار، مقاومة)، ثم Module 2 - تعلم البرمجة بلغة Arduino/C++. اشترِ مجموعة مبتدئين (Starter Kit) تحتوي على لوحة ومكونات أساسية.",
    category: "تعليم",
  },
  {
    question: "ما هي المكونات الأساسية التي أحتاجها للبدء؟",
    answer: "لوحة Arduino Uno أو ESP32، لوحة تجارب (Breadboard)، أسلاك توصيل (Jumper Wires)، LEDs، مقاومات (220Ω و 1KΩ)، حساسات أساسية (DHT11 و HC-SR04)، ومحرك سيرفو SG90.",
    category: "مكونات",
  },
  {
    question: "كيف أحمي متحكمي من الحرق؟",
    answer: "1) لا تتجاوز الجهد المسموح (5V لـ Arduino)، 2) استخدم مقاومات حماية مع LEDs، 3) لا توصل المحركات مباشرة - استخدم Driver مثل L298N، 4) تحقق من القطبية قبل التوصيل، 5) استخدم دايود حماية مع Relay.",
    category: "حماية",
  },
  {
    question: "هل يمكنني استخدام ESP32 بدون إنترنت؟",
    answer: "نعم! ESP32 يعمل بشكل طبيعي بدون إنترنت. يمكنك استخدام جميع المنافذ والحساسات والمحركات. الإنترنت ضروري فقط لميزات Wi-Fi مثل التحكم عن بعد أو إرسال البيانات لمنصات سحابية.",
    category: "ESP32",
  },
  {
    question: "ما هو أفضل برنامج لبرمجة Arduino؟",
    answer: "للمبتدئين: Arduino IDE (الأسهل). للمتقدمين: VS Code مع PlatformIO (أقوى). للتعلم بـ Python: Thonny مع MicroPython. للمحاكاة بدون عتاد: Tinkercad Circuits.",
    category: "برامج",
  },
  {
    question: "كيف أحل مشكلة 'Upload Failed' في Arduino؟",
    answer: "1) تأكد من اختيار اللوحة الصحيحة من Tools > Board، 2) تأكد من اختيار المنفذ الصحيح من Tools > Port، 3) تأكد من تثبيت التعريفات (Drivers)، 4) جرب الضغط على زر Reset قبل الرفع، 5) تأكد أن لا يوجد برنامج آخر يستخدم المنفذ.",
    category: "مشاكل شائعة",
  },
  {
    question: "كيف أربط شاشة OLED مع Arduino؟",
    answer: "شاشة OLED SSD1306 تتصل عبر I2C: SDA إلى A4 و SCL إلى A5 (Arduino Uno). ثبّت مكتبة Adafruit SSD1306 و Adafruit GFX من Library Manager. استخدم المثال المدمج (ssd1306_128x64_i2c) كنقطة بداية.",
    category: "شاشات",
  },
];

const troubleshooting = [
  {
    icon: AlertTriangle,
    title: "اللوحة لا تُعرّف في الكمبيوتر",
    solution: "ثبّت تعريفات CH340 (للنسخ المقلدة) أو FTDI (للنسخ الأصلية) من الإنترنت. على Windows تحقق من Device Manager.",
  },
  {
    icon: Wrench,
    title: "رفع الكود يفشل دائماً",
    solution: "تأكد من اختيار اللوحة والمنفذ الصحيح. تأكد من أن لا برنامج آخر (مثل Serial Monitor) مفتوح على نفس المنفذ. جرب كابل USB مختلف.",
  },
  {
    icon: AlertTriangle,
    title: "الحساس لا يعطي قراءات صحيحة",
    solution: "تأكد من التوصيلات (VCC, GND, Signal). راجع ورقة البيانات (Datasheet) للحساس. تأكد من تثبيت المكتبة الصحيحة. اختبر ببرنامج Example المدمج.",
  },
  {
    icon: Wrench,
    title: "المحرك لا يدور أو يصدر صوتاً فقط",
    solution: "تأكد من توفير طاقة كافية (المحركات تحتاج طاقة أعلى مما يوفره USB). استخدم مصدر طاقة خارجي. تأكد من توصيل Driver بشكل صحيح (ENA, IN1, IN2).",
  },
  {
    icon: AlertTriangle,
    title: "ESP32 لا يتصل بالـ Wi-Fi",
    solution: "تأكد من اسم الشبكة وكلمة المرور (حساسة لحالة الأحرف). بعض الشبكات تحتاج MAC filtering. جرب شبكة هاتف كاختبار. تأكد من تعريف SSID و PASSWORD في الكود.",
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

export default function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>("faq0");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleContactSubmit = async () => {
    if (!contactName || !contactEmail || !contactMessage) return;
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
        }),
      });
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      toast.success("تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.");
    } catch {
      toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    }
  };

  return (
    <div className="space-y-12 pb-8">
      {/* Header */}
      <section className="text-center">
        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
          <HelpCircle className="h-3.5 w-3.5 ml-1" />
          الدعم الفني
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          تحتاج مساعدة؟ نحن هنا
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          تواصل معنا عبر قنواتنا أو تصفح الأسئلة الشائعة وحلول
          المشاكل التقنية
        </p>
      </section>

      {/* Social Channels */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">تواصل معنا مباشرة</h3>
          <p className="text-sm text-muted-foreground">
            انضم لقنواتنا للحصول على أحدث المشاريع والدروس والدعم
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {socialChannels.map((ch) => (
            <motion.div key={ch.url} variants={item}>
              <a
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card
                  className={`border-2 ${ch.borderColor} hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 h-full group`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${ch.bgColor} mb-4`}
                    >
                      <ch.icon className={`h-8 w-8 ${ch.color}`} />
                    </div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {ch.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {ch.description}
                    </p>
                    <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                      <Badge variant="secondary">{ch.type}</Badge>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {ch.members} عضو
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>انضم الآن</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WhatsApp Direct Contact */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">تواصل مباشرة عبر واتساب</h3>
          <p className="text-sm text-muted-foreground">اتصل بنا مباشرة للحصول على دعم فوري</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a href="https://wa.me/972569303043" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 hover:shadow-lg hover:-translate-y-1 transition-all bg-emerald-50/50 dark:bg-emerald-950/20 group">
            <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">المهندس محمد عادل العقيلي</h4>
              <p className="text-xs text-muted-foreground mt-0.5" dir="ltr">+972 56-930-3043</p>
            </div>
          </a>
          <a href="https://wa.me/972568673748" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 hover:shadow-lg hover:-translate-y-1 transition-all bg-emerald-50/50 dark:bg-emerald-950/20 group">
            <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">المهندس عمار محمد مشارقة</h4>
              <p className="text-xs text-muted-foreground mt-0.5" dir="ltr">+972 56-867-3748</p>
            </div>
          </a>
        </div>
      </section>

      {/* Quick Support CTA */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-teal-600 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-3">
            سؤال سريع؟ اسأل في مجموعة التليجرام
          </h3>
          <p className="text-white/80 mb-6">
            أكثر من 3000 عضو نشط جاهزون لمساعدتك في أي مشكلة تقنية. الردود
            تكون خلال دقائق!
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 gap-2 font-bold"
            asChild
          >
            <a
              href="https://t.me/Arsuino1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              انضم لمجموعة النقاش
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            الأسئلة الشائعة
          </h3>
          <p className="text-sm text-muted-foreground">
            إجابات لأكثر الأسئلة شيوعاً في عالم المتحكمات الدقيقة
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const faqId = `faq${idx}`;
            const isOpen = expandedFaq === faqId;
            return (
              <Card key={idx} className="border-border/50 overflow-hidden hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300">
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : faqId)}
                  className="w-full text-right"
                >
                  <CardHeader className="py-4 px-5 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-semibold text-sm">
                          {faq.question}
                        </span>
                        <Badge
                          variant="secondary"
                          className="text-xs hidden sm:inline-flex"
                        >
                          {faq.category}
                        </Badge>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                </button>
                {isOpen && (
                  <CardContent className="px-5 pb-4 pt-0">
                    <div className="border-t border-border/30 pt-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/* Troubleshooting */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            حلول سريعة للمشاكل الشائعة
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {troubleshooting.map((ts, idx) => (
            <Card
              key={idx}
              className="border-border/50 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 shrink-0">
                    <ts.icon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      {ts.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ts.solution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <Card className="border-border/50 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">أرسل لنا رسالة</CardTitle>
            <CardDescription>
              لم تجد إجابتك؟ أرسل سؤالك وسنرد عليك في أقرب وقت ممكن
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  الاسم
                </label>
                <Input
                  placeholder="اسمك الكامل"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  البريد الإلكتروني
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  dir="ltr"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                الرسالة
              </label>
              <Textarea
                placeholder="اكتب سؤالك أو مشكلتك هنا بالتفصيل..."
                rows={5}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
              />
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              onClick={handleContactSubmit}
            >
              <Mail className="h-4 w-4" />
              إرسال الرسالة
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
