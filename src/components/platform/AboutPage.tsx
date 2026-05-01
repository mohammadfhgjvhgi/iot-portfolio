"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  BookOpen,
  Heart,
  Globe,
  Zap,
  GraduationCap,
  Cpu,
  MessageCircle,
  Send,
  Facebook,
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

const stats = [
  { icon: Users, value: "5000+", label: "عضو نشط" },
  { icon: BookOpen, value: "100+", label: "درس تعليمي" },
  { icon: Cpu, value: "100+", label: "مشروع جاهز" },
  { icon: GraduationCap, value: "5", label: "وحدات تعليمية" },
];

const milestones = [
  {
    period: "البداية",
    title: "فكرة المنصة",
    description: "بدأت الفكرة من شغفنا بمشاريع الإلكترونيات والرغبة في نشر المعرفة باللغة العربية. لاحظنا نقص المحتوى العربي الجيد في هذا المجال.",
  },
  {
    period: "المرحلة الأولى",
    title: "إطلاق قناة تليجرام",
    description: "أنشأنا قناة تليجرام لمشاركة المشاريع والدروس بشكل مجاني. تجاوز عدد الأعضاء 5000 عضو خلال فترة قصيرة مما أكد الحاجة لمحتوى عربي.",
  },
  {
    period: "النمو",
    title: "التوسع في المحتوى",
    description: "أضفنا مجموعة النقاش التقنية وصفحة فيسبوك. بدأنا بإنتاج محتوى تعليمي متنوع يشمل مقاطع فيديو ومقالات ومشاريع تطبيقية.",
  },
  {
    period: "الآن",
    title: "إطلاق المنصة التعليمية",
    description: "نطلق منصة تعليمية متكاملة تحتوي على مسار تعليمي منظم، موسوعة للحساسات، مشاريع جاهزة، وأدوات تفاعلية لمساعدة المتعلمين العرب.",
  },
];

const values = [
  {
    icon: Globe,
    title: "محتوى عربي مجاني",
    description: "نؤمن بأن المعرفة يجب أن تكون متاحة للجميع. نسعى لتقديم محتوى تعليمي عالي الجودة باللغة العربية بشكل مجاني.",
  },
  {
    icon: Zap,
    title: "تعلم عملي",
    description: "نركز على المشاريع التطبيقية الحقيقية وليس النظري فقط. كل درس مرتبط بمشروع عملي يطبق ما تم تعلمه.",
  },
  {
    icon: Heart,
    title: "مجتمع داعم",
    description: "نبني مجتمعاً تعليمياً يتبادل الخبرات ويساعد المبتدئين. مجموعة النقاش مفتوحة للجميع بلا استثناء.",
  },
  {
    icon: Target,
    title: "من الصفر للاحتراف",
    description: "مسار تعليمي متدرج يبدأ من المفاهيم الأساسية وصولاً إلى مشاريع متقدمة في الذكاء الاصطناعي مع المتحكمات.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-8">
      {/* Header */}
      <section className="text-center">
        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
          <Award className="h-3.5 w-3.5 ml-1" />
          من نحن
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          عن منصة مشاريع إلكترونية وذكاء اصطناعي
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          منصة تعليمية عربية مجانية أسسها مهتمون بمجال الإلكترونيات
          والذكاء الاصطناعي 🇵🇸 من فلسطين، هدفها تمكين الطلاب العرب من تعلم وبناء
          مشاريعهم الإلكترونية بأنفسهم
        </p>
      </section>

      {/* Stats */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemAnim}>
            <Card className="border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Team */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">فريق المنصة</h3>
          <p className="text-sm text-muted-foreground">
            مؤسسان شغوفان بنشر العلوم الهندسية باللغة العربية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Card className="border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-1">عمار مشارقة</h4>
              <Badge variant="secondary" className="mb-3">
                مؤسس ومطور 🇵🇸
              </Badge>
              <p className="text-sm text-muted-foreground leading-relaxed">
                مهتم بمجال الإلكترونيات والمتحكمات الدقيقة والذكاء
                الاصطناعي. يهدف لتقديم محتوى تعليمي عربي عالي الجودة
                ومجاني للجميع.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-1">محمد عقيلي</h4>
              <Badge variant="secondary" className="mb-3">
                مؤسس ومطور 🇵🇸
              </Badge>
              <p className="text-sm text-muted-foreground leading-relaxed">
                شغوف بالتقنية والمشاريع الإلكترونية. يسعى لنشر ثقافة
                الابتكار والتعلم الذاتي في مجال الأنظمة المدمجة و IoT.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Values */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">ما يميزنا</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all h-full">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary inline-flex mb-4">
                    <val.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{val.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">رحلتنا</h3>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {milestones.map((ms, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                {idx < milestones.length - 1 && (
                  <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                )}
              </div>
              <Card className="flex-1 border-border/50 mb-2">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-xs">
                    {ms.period}
                  </Badge>
                  <CardTitle className="text-base">{ms.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ms.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-teal-600 p-8 md:p-12 text-white">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            كن جزءاً من مجتمعنا
          </h3>
          <p className="text-white/80 mb-6 text-lg">
            انضم لآلاف المتعلمين والمبدعين في قنواتنا على تليجرام وفيسبوك
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 gap-2 font-bold"
              asChild
            >
              <a
                href="https://t.me/Mashari3_AI_Arduino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-5 w-5" />
                قناة تليجرام
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 gap-2"
              asChild
            >
              <a
                href="https://t.me/Arsuino1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                مجموعة النقاش
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 gap-2"
              asChild
            >
              <a
                href="https://www.facebook.com/share/1HnZactzYD/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                صفحة فيسبوك
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
