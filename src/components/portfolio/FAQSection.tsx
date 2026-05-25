"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/lib/language";

/* ═══════════════════════════════════════════════════════════════
   DATA — 8 FAQ Items (Bilingual)
   ═══════════════════════════════════════════════════════════════ */

const FAQ_ITEMS = [
  {
    ar: "ما هي الخدمات التي تقدمونها؟",
    en: "What services do you offer?",
    ar_answer: "نقدم 6 خدمات رئيسية: أنظمة المنازل الذكية، حلول IoT والتكامل السحابي، أنظمة الأمان، شبكات حساسات، أتمتة المنشآت، واستشارات تقنية.",
    en_answer: "We offer 6 main services: Smart Home systems, IoT & Cloud Integration, Security Systems, Sensor Networks, Facility Automation, and Technical Consulting.",
  },
  {
    ar: "هل تعمل أنظمتكم بدون إنترنت؟",
    en: "Do your systems work without internet?",
    ar_answer: "نعم! جميع أنظمتنا تعمل محلياً بدون إنترنت. الإنترنت ميزة إضافية للمراقبة عن بعد وليس شرطاً للعمل الأساسي.",
    en_answer: "Yes! All our systems work locally without internet. Internet is an optional feature for remote monitoring, not a requirement.",
  },
  {
    ar: "ما هي التقنيات المستخدمة؟",
    en: "What technologies do you use?",
    ar_answer: "نستخدم Arduino, ESP32, ESP8266 مع لغات C/C++ و Python. التكامل السحابي عبر Firebase مع بروتوكولات MQTT و HTTP.",
    en_answer: "We use Arduino, ESP32, ESP8266 with C/C++ and Python. Cloud integration via Firebase with MQTT and HTTP protocols.",
  },
  {
    ar: "كم تكلفة تنفيذ مشروع؟",
    en: "How much does a project cost?",
    ar_answer: "التكلفة تعتمد على حجم المشروع ومتطلباته. نقدم استشارة مجانية لتحديد احتياجاتك وتقديم عرض سعر دقيق.",
    en_answer: "Cost depends on project size and requirements. We offer free consultation to determine your needs and provide an accurate quote.",
  },
  {
    ar: "من هم أعضاء الفريق؟",
    en: "Who are the team members?",
    ar_answer: "فريقنا يتكون من شريكين مؤسسين: عمار مشارقة (مدير العمليات) ومحمد عقيلي (المهندس الرئيسي). فريق محلي من فلسطين.",
    en_answer: "Our team consists of two founding partners: Ammar Masharqa (Operations Manager) and Mohammad Aqli (Lead Engineer). A local team from Palestine.",
  },
  {
    ar: "هل تقدمون دعماً فنياً بعد التنفيذ؟",
    en: "Do you provide post-implementation support?",
    ar_answer: "نعم، نقدم دعماً فنياً مستمراً لجميع مشاريعنا. يمكنكم التواصل معنا عبر تليجرام أو واتساب في أي وقت.",
    en_answer: "Yes, we provide ongoing technical support for all our projects. You can reach us via Telegram or WhatsApp anytime.",
  },
  {
    ar: "كيف يمكنني الانضمام لمجتمعكم؟",
    en: "How can I join your community?",
    ar_answer: "يمكنك الانضمام عبر مجموعاتنا على تليجرام أو متابعتنا على فيسبوك. نساعد الجميع مجاناً في المجموعات.",
    en_answer: "You can join through our Telegram groups or follow us on Facebook. We help everyone for free in the groups.",
  },
  {
    ar: "هل يمكنكم تنفيذ مشروع توجيهي؟",
    en: "Can you build a Tawjihi project?",
    ar_answer: "نعم! نقدم مشاريع توجيهي جاهزة مع أكواد وملفات شرح كاملة. مع شرح تفصيلي لكل خطوة.",
    en_answer: "Yes! We provide ready Tawjihi projects with complete code and documentation. With detailed explanation for each step.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT — FAQSection
   ═══════════════════════════════════════════════════════════════ */

export default function FAQSection() {
  const { t: lang, isRTL } = useLang();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const listRef = useRef<HTMLDivElement>(null);
  const isListInView = useInView(listRef, { once: true, margin: "-40px" });

  return (
    <section className="w-full" dir={isRTL() ? "rtl" : "ltr"}>
      {/* ═══ Section Header ═══ */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00e5ff12] border border-[#00e5ff25]">
            <HelpCircle className="h-4.5 w-4.5 text-[#00e5ff]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold gradient-neon-text">
            {lang("الأسئلة الشائعة", "Frequently Asked Questions")}
          </h2>
        </div>
        <p className="text-sm text-[#7a8ba8] leading-relaxed max-w-2xl">
          {lang(
            "إجابات على أكثر الأسئلة شيوعاً عن خدماتنا ومشاريعنا",
            "Answers to the most common questions about our services and projects"
          )}
        </p>
      </motion.div>

      {/* ═══ FAQ Accordion ═══ */}
      <motion.div
        ref={listRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isListInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Accordion
          type="single"
          collapsible
          className="space-y-3"
        >
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-xl overflow-hidden glass-card-dark border-0 transition-all duration-300 data-[state=open]:shadow-[0_0_20px_rgba(0,229,255,0.08),0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <AccordionTrigger className="px-5 py-4 text-foreground text-sm sm:text-[15px] font-semibold hover:no-underline hover:text-foreground transition-colors duration-200 rounded-xl [&[data-state=open]>svg]:text-[#00e5ff]">
                <span dir={isRTL() ? "rtl" : "ltr"} className="text-start">
                  {lang(item.ar, item.en)}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4">
                <div
                  className="flex items-start gap-2.5"
                  dir={isRTL() ? "rtl" : "ltr"}
                >
                  <MessageCircle
                    className="h-3.5 w-3.5 shrink-0 mt-1 text-[#00e5ff] opacity-60"
                  />
                  <p className="text-sm text-[#7a8ba8] leading-relaxed">
                    {lang(item.ar_answer, item.en_answer)}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
