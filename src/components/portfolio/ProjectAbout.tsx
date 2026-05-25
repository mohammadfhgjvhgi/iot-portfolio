"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Lightbulb,
  Target,
  Rocket,
  Eye,
  Heart,
  Cpu,
  Globe,
  ShieldCheck,
  Wrench,
  Layers,
  Users,
  Code2,
  Database,
  Wifi,
  Cog,
  Zap,
  ArrowDown,
  CheckCircle2,
  FileText,
  Star,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

/* ═══════════════════════════════════════════════════════════════
   SECTION BLOCK — Reusable section with icon + title + content
   ═══════════════════════════════════════════════════════════════ */

function SectionBlock({
  icon,
  iconColor,
  title,
  children,
  delay = 0,
}: {
  icon: React.ReactNode;
  iconColor: string;
  title: { ar: string; en: string };
  children: React.ReactNode;
  delay?: number;
}) {
  const { t: lang, isRTL } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card-dark rounded-xl overflow-hidden card-hover group relative"
    >
      {/* Glowing Top Border */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${iconColor}, ${iconColor}80, transparent)`,
          boxShadow: `0 0 12px ${iconColor}40`,
        }}
      />

      <div className="p-6 sm:p-8" dir={isRTL() ? "rtl" : "ltr"}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${iconColor}12`,
              border: `1px solid ${iconColor}30`,
              boxShadow: `0 0 12px ${iconColor}15`,
              color: iconColor,
            }}
          >
            {icon}
          </div>
          <h3
            className="text-base sm:text-lg font-bold"
            style={{ color: iconColor }}
          >
            {lang(title.ar, title.en)}
          </h3>
        </div>

        {/* Content */}
        <div className="text-[#7a8ba8] text-sm leading-[1.9] space-y-4">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — ProjectAbout
   ═══════════════════════════════════════════════════════════════ */

export default function ProjectAbout() {
  const { t: lang, isRTL } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });

  return (
    <section className="w-full" dir={isRTL() ? "rtl" : "ltr"}>
      {/* ═══ Section Header ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00ff6612] border border-[#00ff6625]">
            <BookOpen className="h-4.5 w-4.5 text-[#00ff66]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("عن المشروع", "About The Project")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-3xl">
          {lang(
            "دليل شامل يشرح فكرة الموقع، لماذا أنشأناه، ما الهدف منه، وكيف يعكس هوية فريقنا التقنية",
            "A comprehensive guide explaining the website idea, why we built it, its purpose, and how it reflects our team identity"
          )}
        </p>
      </motion.div>

      {/* ═══ Hero Banner ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative glass-card-dark rounded-xl overflow-hidden mb-8"
      >
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg, transparent, #00ff66, #00e5ff, #b44dff, #ffab00, transparent)",
          }}
        />
        <div className="p-6 sm:p-8 relative">
          {/* Decorative glows */}
          <div className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(0,255,102,0.06), transparent 70%)" }} />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 pointer-events-none rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(0,229,255,0.05), transparent 70%)" }} />

          <div className="relative text-center max-w-3xl mx-auto" dir={isRTL() ? "rtl" : "ltr"}>
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 8px #00ff6640, 0 0 16px #00ff6620",
                  "0 0 14px #00ff6660, 0 0 28px #00ff6630",
                  "0 0 8px #00ff6640, 0 0 16px #00ff6620",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(0,255,102,0.08)", border: "1px solid rgba(0,255,102,0.2)" }}
            >
              <FileText className="h-4 w-4 text-[#00ff66]" />
              <span className="text-xs font-semibold text-[#00ff66]">
                {lang("الدليل الشامل للمشروع", "The Comprehensive Project Guide")}
              </span>
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-relaxed">
              {lang(
                "مشاريع للأنظمة الذكية — Smart Systems Lab",
                "Smart Systems Lab — IoT Portfolio"
              )}
            </h3>

            <p className="text-[#7a8ba8] text-sm sm:text-base leading-[1.9]">
              {lang(
                "هذا الموقع ليس مجرد صفحة ويب عادية. إنه تجسيد حقيقي لرؤيتنا ورسالتنا كفريق هندسي فلسطيني متخصص في إنترنت الأشياء. كل سطر كود، كل قسم، كل تفصيلة صُممت بعناية لتعكس مستوى احترافيتنا وشغفنا بالتكنولوجيا.",
                "This website is not just a regular web page. It's a true embodiment of our vision and mission as a Palestinian engineering team specializing in IoT. Every line of code, every section, every detail was carefully designed to reflect our professionalism and passion for technology."
              )}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ═══ Main Sections Grid ═══ */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-6"
      >
        {/* ── 1. WHAT IS THE WEBSITE? ── */}
        <SectionBlock
          icon={<Globe className="h-5 w-5" />}
          iconColor="#00ff66"
          title={{ ar: "ما هو هذا الموقع؟", en: "What Is This Website?" }}
          delay={0}
        >
          <p>
            {lang(
              "موقع «مشاريع للأنظمة الذكية» هو معرض أعمال رقمي احترافي (Digital Portfolio) صُمم خصيصاً لعرض مشاريعنا الحقيقية في مجال إنترنت الأشياء (IoT) والأنظمة المدمجة (Embedded Systems).",
              "The «Smart Systems Lab» website is a professional digital portfolio specifically designed to showcase our real projects in the field of IoT (Internet of Things) and Embedded Systems."
            )}
          </p>
          <p>
            {lang(
              "الموقع يعرض 4 مشاريع حقيقية تم تنفيذها فعلاً — وليس مشاريع تعليمية أو تجريبية. كل مشروع يعالج مشكلة حقيقية ويمثل حلولاً هندسية متكاملة تجمع بين العتاد (Hardware) والبرمجيات (Software) والسحابة (Cloud).",
              "The site features 4 real, actually implemented projects — not educational or experimental ones. Each project addresses a real problem and represents complete engineering solutions combining hardware, software, and the cloud."
            )}
          </p>
          <div
            className="rounded-lg p-4 mt-2"
            style={{ background: "rgba(0,255,102,0.05)", border: "1px solid rgba(0,255,102,0.12)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Star className="h-3.5 w-3.5 text-[#00ff66]" />
              <span className="text-xs font-bold text-[#00ff66] uppercase tracking-wider">
                {lang("المشاريع الأربعة", "The Four Projects")}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { emoji: "🏢", ar: "نظام إدارة المباني الذكية", en: "Smart Building Management", color: "#00ff66" },
                { emoji: "🅿️", ar: "نظام مواقف السيارات الذكي", en: "Smart Parking & Safety System", color: "#00e5ff" },
                { emoji: "🔒", ar: "الخزنة الذكية عالية الأمان", en: "High-Security RFID Smart Safe", color: "#ffab00" },
                { emoji: "🎉", ar: "نظام أتمتة صالات الأفراح", en: "Automated Wedding Hall System", color: "#b44dff" },
              ].map((p) => (
                <div key={p.en} className="flex items-center gap-2.5 px-3 py-2 rounded-lg" style={{ background: `${p.color}08`, border: `1px solid ${p.color}15` }}>
                  <span className="text-lg">{p.emoji}</span>
                  <span className="text-xs text-[#c5cdd8]">{lang(p.ar, p.en)}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionBlock>

        {/* ── 2. WHAT IS THE IDEA? ── */}
        <SectionBlock
          icon={<Lightbulb className="h-5 w-5" />}
          iconColor="#ffab00"
          title={{ ar: "ما هي فكرة الموقع؟", en: "What Is The Idea?" }}
          delay={0.05}
        >
          <p>
            {lang(
              "الفكرة جاءت من إيماننا الراسخ بأن أعمالنا التطبيقية تتحدث عن نفسها أفضل من أي كلمات. بدلاً من الاعتماد على وصف نصي جاف أو صور بسيطة، أردنا أن نقدم تجربة تفاعلية كاملة تُشعر الزائر بما نقدمه فعلاً.",
              "The idea came from our strong belief that our practical work speaks for itself better than any words. Instead of relying on dry text descriptions or simple photos, we wanted to deliver a complete interactive experience that makes the visitor feel what we actually do."
            )}
          </p>
          <p>
            {lang(
              "تصميمنا يعتمد على مفهوم «التيليمتري الحي» (Live Telemetry) — وهو محاكاة تفاعلية تحاكي البيانات الحقيقية التي تُنتجها أنظمتنا. عند النقر على أي مشروع، ترى بيانات حية متحركة (حرارة، رطوبة، حالة الأبواب، مستوى الغاز) بالضبط كما لو كنت تُراقب النظام الحقيقي عن بُعد.",
              "Our design relies on the concept of «Live Telemetry» — an interactive simulation that mimics the real data our systems produce. When you click on any project, you see live animated data (temperature, humidity, door status, gas level) exactly as if you were remotely monitoring the real system."
            )}
          </p>
          <p>
            {lang(
              "كذلك أضفنا ميزات ذكية مثل: حاسبة المشاريع التفاعلية التي تُقترح لك المتحكمات والمكونات المناسبة لمشروعك، والمساعد الذكي (ChatBot) الذي يمكنه الإجابة على استفساراتك تقنياً، وآراء العملاء الحقيقية.",
              "We also added smart features like: the interactive Project Calculator that suggests the right MCUs and components for your project, the Smart Assistant (ChatBot) that can answer your technical queries, and real client testimonials."
            )}
          </p>
        </SectionBlock>

        {/* ── 3. WHY DID WE DESIGN IT? ── */}
        <SectionBlock
          icon={<Eye className="h-5 w-5" />}
          iconColor="#00e5ff"
          title={{ ar: "لماذا صممنا هذا الموقع؟", en: "Why Did We Design It?" }}
          delay={0.1}
        >
          <p className="font-semibold text-foreground text-sm">
            {lang("صممنا هذا الموقع لعدة أسباب جوهرية:", "We designed this website for several core reasons:")}
          </p>

          <div className="space-y-3 mt-2">
            {[
              {
                icon: <Target className="h-3.5 w-3.5" />,
                color: "#00ff66",
                ar: "إثبات الجودة والاحترافية: أردنا أن يرى أي عميل محتمل مستوى العمل الذي نقدمه. الموقع نفسه هو دليل على مهاراتنا — صُمم وبُرمج بأحدث التقنيات العالمية.",
                en: "Proving Quality & Professionalism: We wanted any potential client to see the level of work we deliver. The website itself is proof of our skills — designed and programmed with the latest global technologies.",
              },
              {
                icon: <Users className="h-3.5 w-3.5" />,
                color: "#00e5ff",
                ar: "جذب العملاء والشركات: الموقع يعمل كبطاقة عمل تفاعلية تصل لعملاء في فلسطين والمنطقة العربية وحتى العالم. مع دعم كامل للعربية والإنجليزية.",
                en: "Attracting Clients & Companies: The site works as an interactive business card reaching clients in Palestine, the Arab region, and worldwide. With full Arabic and English support.",
              },
              {
                icon: <ShieldCheck className="h-3.5 w-3.5" />,
                color: "#ffab00",
                ar: "بناء الثقة والشفافية: أضفنا قسم تدقيق الأمان (Security Audit) الذي يعرض نتائج فحص الموقع بأدوات احترافية — وهذا يعكس شفافيتنا واهتمامنا بالأمان.",
                en: "Building Trust & Transparency: We added a Security Audit section showing the site's test results with professional tools — reflecting our transparency and security focus.",
              },
              {
                icon: <Code2 className="h-3.5 w-3.5" />,
                color: "#b44dff",
                ar: "عرض الكود والمعمارية: كل مشروع يعرض مقطع كود حقيقي من النظام ومخطط المعمارية الهندسية — مما يُثبت أننا نمتلك خبرة حقيقية.",
                en: "Showcasing Code & Architecture: Each project displays real code snippets and engineering architecture diagrams — proving we have genuine expertise.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-3 rounded-lg" style={{ background: `${item.color}06`, border: `1px solid ${item.color}12` }}>
                <div className="mt-0.5 shrink-0" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <p className="text-[13px] leading-relaxed">{lang(item.ar, item.en)}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── 4. WHY DID WE CREATE IT? ── */}
        <SectionBlock
          icon={<Heart className="h-5 w-5" />}
          iconColor="#ff6b9d"
          title={{ ar: "لماذا أنشأنا هذا الموقع؟ (الدافع الحقيقي)", en: "Why Did We Create It? (The Real Motivation)" }}
          delay={0.15}
        >
          <p>
            {lang(
              "الدافع الحقيقي وراء إنشاء هذا الموقع أعمق من مجرد عرض الأعمال. نؤمن بأن فلسطين لديها إمكانيات هائلة في مجال التكنولوجيا، وأن الشباب الفلسطيني قادر على إنتاج حلول عالمية المستوى.",
              "The real motivation behind creating this website goes deeper than just showcasing work. We believe Palestine has enormous potential in technology, and that Palestinian youth can produce world-class solutions."
            )}
          </p>
          <p>
            {lang(
              "كفريق مكون من مهندسين فلسطينيين (عمار مشارقة ومحمد عقيلي)، أردنا أن نُثبت بأنه يمكننا بناء منتجات رقمية تنافسية من الألف إلى الياء — من تصميم واجهات المستخدم إلى البرمجة بالأحدث التقنيات، مروراً بتكامل السحابة والأمان والتحسين لمحركات البحث.",
              "As a team of Palestinian engineers (Ammar Masharqa and Mohammad Aqli), we wanted to prove that we can build competitive digital products from A to Z — from UI design to programming with the latest technologies, through cloud integration, security, and SEO optimization."
            )}
          </p>
          <p>
            {lang(
              "المشاريع التي نعرضها ليست مجرد تمارين أكاديمية — بل حلول هندسية حقيقية تم تنفيذها لعملاء فعليين. نظام المباني الذكية يحمي مباني حقيقية، ونظام المواقف يخدم مواقف حقيقية، والخزنة الذكية تؤمن أموالاً حقيقية، ونظام الأفراح يُشغّل فعاليات حقيقية.",
              "The projects we showcase are not academic exercises — they are real engineering solutions implemented for actual clients. The Smart Building system protects real buildings, the Parking system serves real parking lots, the Smart Safe secures real money, and the Wedding Hall system runs real events."
            )}
          </p>

          <div
            className="rounded-lg p-4 mt-2"
            style={{ background: "linear-gradient(135deg, rgba(0,255,102,0.05), rgba(0,229,255,0.03))", border: "1px solid rgba(0,255,102,0.12)" }}
          >
            <p className="text-xs font-bold gradient-neon-text mb-2">
              {lang("🇵🇸 رسالتنا الأساسية", "🇵🇸 Our Core Message")}
            </p>
            <p className="text-[13px] italic text-[#c5cdd8]">
              {lang(
                "«نؤمن بأن فلسطين قادرة على إنتاج تقنيات عالمية في مجال إنترنت الأشياء. نسعى لبناء حلول مدمجة ذكية تدمج بين العتاد والبرمجيات والسحابة — من فلسطين إلى العالم.»",
                "«We believe Palestine is capable of producing world-class IoT technologies. We strive to build intelligent embedded solutions that bridge hardware, software, and the cloud — from Palestine to the world.»"
              )}
            </p>
          </div>
        </SectionBlock>

        {/* ── 5. WHAT IS IT MEANT FOR? ── */}
        <SectionBlock
          icon={<Target className="h-5 w-5" />}
          iconColor="#b44dff"
          title={{ ar: "ما المراد من هذا الموقع؟ (الهدف)", en: "What Is It Meant For? (The Purpose)" }}
          delay={0.2}
        >
          <p className="font-semibold text-foreground text-sm">
            {lang("الموقع يخدم عدة أهداف محددة:", "The site serves several specific goals:")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              {
                icon: <Users className="h-4 w-4" />,
                color: "#00ff66",
                title_ar: "جذب العملاء",
                title_en: "Attract Clients",
                desc_ar: "أي شخص أو شركة لديه مشروع IoT في باله يستطيع أن يتصفح الموقع، يفهم قدراتنا، ويطلب عرض سعر مباشرة عبر حاسبة المشاريع أو نموذج التواصل.",
                desc_en: "Anyone or any company with an IoT project idea can browse the site, understand our capabilities, and request a quote directly through the project calculator or contact form.",
              },
              {
                icon: <Wrench className="h-4 w-4" />,
                color: "#00e5ff",
                title_ar: "عرض الخدمات",
                title_en: "Showcase Services",
                desc_ar: "الموقع يعرض 6 خدمات رئيسية نقدمها: أتمتة المباني، حلول IoT السحابية، أنظمة الأمان، شبكات الحساسات، أتمتة المناسبات، واستشارات تقنية.",
                desc_en: "The site showcases 6 main services we offer: building automation, cloud IoT solutions, security systems, sensor networks, event automation, and technical consulting.",
              },
              {
                icon: <Cpu className="h-4 w-4" />,
                color: "#ffab00",
                title_ar: "إثبات الخبرة الهندسية",
                title_en: "Prove Engineering Expertise",
                desc_ar: "كل مشروع يعرض الكود الحقيقي، مخطط المعمارية، قائمة العتاد المستخدم، والابتكار التقني. هذا يُثبت أننا نمتلك خبرة عملية حقيقية وليست نظرية.",
                desc_en: "Each project displays real code, architecture diagrams, hardware lists, and technical innovations. This proves we have genuine practical expertise, not just theoretical.",
              },
              {
                icon: <Rocket className="h-4 w-4" />,
                color: "#b44dff",
                title_ar: "بناء العلامة التجارية",
                title_en: "Build Brand Identity",
                desc_ar: "الموقع يبني هوية بصرية وتقنية قوية لفريق «مشاريع للأنظمة الذكية» ويجعله يبرز كعلامة تجارية احترافية في مجال IoT.",
                desc_en: "The site builds a strong visual and technical identity for «Smart Systems Lab» and makes it stand out as a professional brand in the IoT field.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg p-4" style={{ background: `${item.color}06`, border: `1px solid ${item.color}12` }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: `${item.color}12`, border: `1px solid ${item.color}20`, color: item.color }}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold" style={{ color: item.color }}>
                    {lang(item.title_ar, item.title_en)}
                  </span>
                </div>
                <p className="text-[12px] leading-relaxed">{lang(item.desc_ar, item.desc_en)}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── 6. WEBSITE SECTIONS OVERVIEW ── */}
        <SectionBlock
          icon={<Layers className="h-5 w-5" />}
          iconColor="#4fc3f7"
          title={{ ar: "أقسام الموقع ووظيفة كل قسم", en: "Website Sections & Their Functions" }}
          delay={0.25}
        >
          <p>
            {lang(
              "الموقع يتكون من 11 قسم رئيسي، كل قسم صُمم ليخدم غرضاً محدداً ويُضيف قيمة للزائر:",
              "The site consists of 11 main sections, each designed to serve a specific purpose and add value to the visitor:"
            )}
          </p>

          <div className="space-y-2.5 mt-3">
            {[
              { num: "01", ar: "الصفحة الرئيسية (Hero)", en: "Homepage (Hero)", desc_ar: "تقديم سريع للفريق مع إحصائيات متحركة (4+ مشاريع، 10+ حساسات، 3+ متحكمات، 6 خدمات) وزرّين للتفاعل السريع.", desc_en: "Quick team introduction with animated statistics (4+ projects, 10+ sensors, 3+ MCUs, 6 services) and two CTAs.", color: "#00ff66" },
              { num: "02", ar: "لماذا نحن مختلفون", en: "Why We're Different", desc_ar: "6 نقاط تميز أساسية: الأمان أولاً، العمل بدون إنترنت، التكامل السحابي، الكود النظيف، المشاريع الحقيقية، صُنع في فلسطين.", desc_en: "6 key differentiators: Safety first, offline operation, cloud integration, clean code, real projects, made in Palestine.", color: "#00e5ff" },
              { num: "03", ar: "الفريق", en: "The Team", desc_ar: "بطاقات تفاعلية لعمار مشارقة ومحمد عقيلي مع المهارات والأدوار ورسالة الفريق.", desc_en: "Interactive cards for Ammar Masharqa and Mohammad Aqli with skills, roles, and team mission.", color: "#ffab00" },
              { num: "04", ar: "الخدمات", en: "Services", desc_ar: "6 خدمات مع التفاصيل والميزات: أتمتة المباني، حلول IoT، الأمان، الحساسات، أتمتة المناسبات، الاستشارات.", desc_en: "6 services with details and features: building automation, IoT solutions, security, sensors, event automation, consulting.", color: "#b44dff" },
              { num: "05", ar: "حاسبة المشاريع", en: "Project Calculator", desc_ar: "معالج تفاعلي من 4 خطوات: نوع المشروع → عدد الحساسات → عدد الغرف → الميزانية → توصية فنية شاملة.", desc_en: "Interactive 4-step wizard: project type → sensors → rooms → budget → comprehensive technical recommendation.", color: "#ff6b9d" },
              { num: "06", ar: "المشاريع", en: "Projects", desc_ar: "4 مشاريع حقيقية مع تيليمتري حي، كود مصدري، مخططات معمارية، وتفاصيل العتاد والتقنيات.", desc_en: "4 real projects with live telemetry, source code, architecture diagrams, and hardware/tech details.", color: "#00ff66" },
              { num: "07", ar: "المهارات", en: "Skills", desc_ar: "مصفوفة مهارات تفاعلية تعرض قدرات الفريق في البرمجة، العتاد، البروتوكولات، والأدوات.", desc_en: "Interactive skills matrix displaying team capabilities in programming, hardware, protocols, and tools.", color: "#00e5ff" },
              { num: "08", ar: "تدقيق الأمان", en: "Security Audit", desc_ar: "نتائج فحص احترافي بـ 4 أدوات (Lighthouse, Security Headers, Nuclei, OWASP) مع نتيجة إجمالية 92/100.", desc_en: "Professional scan results with 4 tools (Lighthouse, Security Headers, Nuclei, OWASP) with overall score 92/100.", color: "#ffab00" },
              { num: "09", ar: "آراء العملاء", en: "Testimonials", desc_ar: "3 شهادات حقيقية من عملاء فلسطينيين مع تقييم 5 نجوم وتصنيف حسب المشروع.", desc_en: "3 real testimonials from Palestinian clients with 5-star ratings and project-based categorization.", color: "#b44dff" },
              { num: "10", ar: "المدونة التقنية", en: "Tech Blog", desc_ar: "3 مقالات تقنية متخصصة مع عرض الكود: مقارنة ESP32 vs Arduino، تصميم خزنة ذكية، بروتوكولات IoT.", desc_en: "3 specialized technical articles with code display: ESP32 vs Arduino comparison, smart safe design, IoT protocols.", color: "#4fc3f7" },
              { num: "11", ar: "التواصل", en: "Contact", desc_ar: "نموذج تواصل احترافي مع Formspree + Cloudflare Turnstile، وقنوات تواصل متعددة (تليجرام، فيسبوك، واتساب).", desc_en: "Professional contact form with Formspree + Cloudflare Turnstile, and multiple channels (Telegram, Facebook, WhatsApp).", color: "#ff6b9d" },
            ].map((item) => (
              <div key={item.num} className="flex gap-3 p-3 rounded-lg" style={{ background: `${item.color}04`, border: `1px solid ${item.color}10` }}>
                <span
                  className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-bold font-mono"
                  style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}20` }}
                >
                  {item.num}
                </span>
                <div>
                  <p className="text-xs font-bold text-foreground mb-0.5">{lang(item.ar, item.en)}</p>
                  <p className="text-[11px] leading-relaxed">{lang(item.desc_ar, item.desc_en)}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── 7. SMART FEATURES ── */}
        <SectionBlock
          icon={<Zap className="h-5 w-5" />}
          iconColor="#00ff66"
          title={{ ar: "الميزات الذكية في الموقع", en: "Smart Features of the Website" }}
          delay={0.3}
        >
          <p>
            {lang(
              "الموقع لا يكتفي بكون معرض أعمال ثابت — بل يدمج ميزات ذكية تجعله تفاعلي وحي:",
              "The site doesn't settle for being a static portfolio — it integrates smart features that make it interactive and alive:"
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              {
                icon: <Wifi className="h-4 w-4" />,
                color: "#00ff66",
                ar: "التيليمتري الحي (Live Telemetry)",
                en: "Live Telemetry",
                desc_ar: "محاكاة حية للبيانات الحقيقية — درجة الحرارة تتغير، مواقف السيارات تتحرك، قارئ RFID يمسح البطاقات.",
                desc_en: "Live simulation of real data — temperature changes, parking slots move, RFID reader scans cards.",
              },
              {
                icon: <Code2 className="h-4 w-4" />,
                color: "#00e5ff",
                ar: "عرض الكود الحقيقي",
                en: "Real Code Display",
                desc_ar: "كل مشروع يعرض مقطع كود حقيقي بتنسيق احترافي مع ترقيم الأسطر وتلوين البنية.",
                desc_en: "Each project displays real code snippets with professional formatting, line numbers, and syntax highlighting.",
              },
              {
                icon: <Cog className="h-4 w-4" />,
                color: "#ffab00",
                ar: "حاسبة المشاريع الذكية",
                en: "Smart Project Calculator",
                desc_ar: "معالج من 4 خطوات يُقترح لك المتحكم المناسب والبروتوكولات والوقت المتوقع.",
                desc_en: "4-step wizard suggesting the right MCU, protocols, and estimated timeline.",
              },
              {
                icon: <Cpu className="h-4 w-4" />,
                color: "#b44dff",
                ar: "المساعد الذكي (ChatBot)",
                en: "Smart Assistant (ChatBot)",
                desc_ar: "مساعد ذكي ثنائي اللغة (عربي/إنجليزي) يعمل بنظام FAQ محلي + وضع خبير IoT بالذكاء الاصطناعي.",
                desc_en: "Bilingual smart assistant (Arabic/English) with local FAQ mode + AI-powered IoT expert mode.",
              },
              {
                icon: <Globe className="h-4 w-4" />,
                color: "#ff6b9d",
                ar: "دعم ثنائي اللغة + RTL",
                en: "Bilingual + RTL Support",
                desc_ar: "تبديل فوري بين العربية والإنجليزية مع دعم كامل للكتابة من اليمين لليسار.",
                desc_en: "Instant switching between Arabic and English with full right-to-left writing support.",
              },
              {
                icon: <ShieldCheck className="h-4 w-4" />,
                color: "#4fc3f7",
                ar: "تدقيق أمان شفاف",
                en: "Transparent Security Audit",
                desc_ar: "عرض نتائج فحص الأمان بأدوات احترافية مع تفاصيل كل فحص ونتيجته.",
                desc_en: "Displaying security scan results with professional tools and details for each check.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg p-3" style={{ background: `${item.color}05`, border: `1px solid ${item.color}10` }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span className="text-[11px] font-bold" style={{ color: item.color }}>
                    {lang(item.ar, item.en)}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed">{lang(item.desc_ar, item.desc_en)}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── 8. TECHNOLOGY STACK ── */}
        <SectionBlock
          icon={<Code2 className="h-5 w-5" />}
          iconColor="#00e5ff"
          title={{ ar: "التقنيات المستخدمة في بناء الموقع", en: "Technologies Used to Build the Website" }}
          delay={0.35}
        >
          <p>
            {lang(
              "اخترنا أحدث وأفضل التقنيات المتاحة لبناء هذا الموقع، مما يُثبت بأننا متابعون لأحدث التطورات التقنية:",
              "We chose the latest and best available technologies to build this website, proving we stay up to date with technological developments:"
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {[
              { name: "Next.js 16", desc_ar: "أحدث إصدار من إطار React مع App Router", desc_en: "Latest React framework with App Router", color: "#ffffff" },
              { name: "TypeScript 5", desc_ar: "لغات البرمجة مع أنواع قوية لضمان جودة الكود", desc_en: "Programming with strong types for code quality", color: "#3178c6" },
              { name: "Tailwind CSS 4", desc_ar: "إطار عمل CSS لتنسيقات سريعة ومتجاوبة", desc_en: "CSS framework for fast, responsive styling", color: "#06b6d4" },
              { name: "Framer Motion", desc_ar: "مكتبة حركات سلسة وتفاعلات احترافية", desc_en: "Smooth animations and professional interactions", color: "#ff0055" },
              { name: "shadcn/ui", desc_ar: "مكتبة مكونات واجهة مستخدم احترافية", desc_en: "Professional UI component library", color: "#ffffff" },
              { name: "Zustand", desc_ar: "إدارة حالة خفيفة وسريعة", desc_en: "Lightweight and fast state management", color: "#ffffff" },
              { name: "GitHub Pages", desc_ar: "استضافة مجانية مع نشر تلقائي", desc_en: "Free hosting with automatic deployment", color: "#ffffff" },
              { name: "Cloudflare Turnstile", desc_ar: "حماية من السبام بدون CAPTCHA مزعج", desc_en: "Spam protection without annoying CAPTCHA", color: "#f48120" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: `${item.color}06`, border: `1px solid ${item.color}10` }}>
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: item.color }} />
                <div>
                  <span className="text-[11px] font-bold text-foreground">{item.name}</span>
                  <p className="text-[10px] text-[#7a8ba8]">{lang(item.desc_ar, item.desc_en)}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── 9. DESIGN PHILOSOPHY ── */}
        <SectionBlock
          icon={<Star className="h-5 w-5" />}
          iconColor="#ffab00"
          title={{ ar: "فلسفة التصميم", en: "Design Philosophy" }}
          delay={0.4}
        >
          <p>
            {lang(
              "اخترنا تصميماً يعكس طبيعة عملنا في إنترنت الأشياء والأمن السيبراني:",
              "We chose a design that reflects the nature of our work in IoT and cybersecurity:"
            )}
          </p>

          <div className="space-y-2.5 mt-3">
            {[
              {
                ar: "الخلفية الداكنة (#0a0f1a): تُشبه بيئة المختبرات التقنية ولوحات المراقبة (Dashboards) التي نستخدمها في مشاريعنا.",
                en: "Dark background (#0a0f1a): Resembles the environment of tech labs and monitoring dashboards we use in our projects.",
              },
              {
                ar: "ألوان النيون (#00ff66 أخضر، #00e5ff سماوي): تُشبه إشارات LED على المتحكمات والحساسات التي نعمل معها يومياً.",
                en: "Neon colors (#00ff66 green, #00e5ff cyan): Resemble LED indicators on microcontrollers and sensors we work with daily.",
              },
              {
                ar: "بطاقات الزجاج الداكن (Glass Dark): تعكس تقنية واجهات المستخدم الحديثة وتُعطي إحساساً بالعمق والاحترافية.",
                en: "Glass dark cards: Reflect modern UI technology and give a sense of depth and professionalism.",
              },
              {
                ar: "أنماط الدوائر الكهربائية (Circuit Background): خلفية دقيقة ترمز لعالم الإلكترونيات والأنظمة المدمجة.",
                en: "Circuit patterns background: A subtle background symbolizing the world of electronics and embedded systems.",
              },
              {
                ar: "الحركات السلسة (Framer Motion): تُعطي إحساساً بالحيوية — كأن الموقع «يعمل» و«يتفاعل» مثل أنظمتنا.",
                en: "Smooth animations (Framer Motion): Give a sense of vitality — as if the site is «working» and «interacting» like our systems.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-2.5 items-start p-2.5 rounded-lg" style={{ background: "rgba(255,171,0,0.04)", border: "1px solid rgba(255,171,0,0.08)" }}>
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#ffab00]" />
                <p className="text-[12px] leading-relaxed">{lang(item.ar, item.en)}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── 10. SUMMARY ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative glass-card-dark rounded-xl overflow-hidden"
        >
          <div
            className="h-[2px] w-full"
            style={{
              background: "linear-gradient(90deg, #00ff66, #00e5ff, #b44dff, #ffab00, #ff6b9d)",
            }}
          />
          <div className="p-6 sm:p-8" dir={isRTL() ? "rtl" : "ltr"}>
            {/* Decorative */}
            <div className="absolute -top-12 -right-12 w-40 h-40 pointer-events-none rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(0,255,102,0.06), transparent 70%)" }} />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 pointer-events-none rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(180,77,255,0.05), transparent 70%)" }} />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,255,102,0.15), rgba(0,229,255,0.1))",
                    border: "1px solid rgba(0,255,102,0.25)",
                  }}
                >
                  <Rocket className="h-5 w-5 text-[#00ff66]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold gradient-neon-text">
                  {lang("خلاصة", "In Summary")}
                </h3>
              </div>

              <div className="space-y-4 text-[#7a8ba8] text-sm leading-[1.9]">
                <p>
                  {lang(
                    "موقع «مشاريع للأنظمة الذكية» ليس مجرد معرض أعمال — بل هو تجسيد حقيقي لرؤيتنا كفريق هندسي فلسطيني. صممناه لكي يُمثلنا بأفضل صورة أمام العملاء والشركات، وليكون واجهة رقمية احترافية تُثبت قدراتنا في مجال إنترنت الأشياء.",
                    "The «Smart Systems Lab» website is not just a portfolio — it's a true embodiment of our vision as a Palestinian engineering team. We designed it to represent us in the best light before clients and companies, and to be a professional digital interface that proves our capabilities in IoT."
                  )}
                </p>
                <p>
                  {lang(
                    "كل ما تراه في هذا الموقع — من التصميم إلى الكود إلى الميزات الذكية — يعكس مستوى الاهتمام والتفاني الذي نقدمه في مشاريعنا الحقيقية. إذا كان هذا هو مستوى موقعنا العرضي، تخيّل ما يمكننا فعله في مشروعك القادم!",
                    "Everything you see on this site — from design to code to smart features — reflects the level of attention and dedication we put into our real projects. If this is the quality of our showcase site, imagine what we can do for your next project!"
                  )}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #00ff66, #00e5ff)",
                    color: "#0a0f1a",
                    boxShadow: "0 0 16px #00ff6630",
                  }}
                >
                  {lang("استعرض المشاريع", "View Projects")}
                  <ArrowDown className="h-3.5 w-3.5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer"
                  style={{
                    background: "transparent",
                    color: "#00ff66",
                    border: "1px solid rgba(0,255,102,0.3)",
                  }}
                >
                  {lang("تواصل معنا", "Contact Us")}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
