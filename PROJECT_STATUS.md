# PROJECT_STATUS.md — IoT Portfolio / Developer Guide

> **آخر تحديث:** يوليو 2025
> **الإصدار:** v2.1 (Senior Edition)

---

## 1. معلومات المستودع (Repository Info)

| الحقل | القيمة |
|-------|--------|
| **الاسم** | iot-portfolio |
| **المنصة** | GitHub Pages (Static SSG) |
| **الرابط المباشر** | `https://mohammadfhgjvhgi.github.io/iot-portfolio/` |
| **GitHub** | `https://github.com/mohammadfhgjvhgi/iot-portfolio` |
| **الفرع** | `main` |
| **basePath (إنتاج)** | `/iot-portfolio` |
| **distDir (إنتاج)** | `docs` |
| **منفذ التطوير** | `3000` |
| **مدير الحزم** | `bun` |

---

## 2. الحالة الحالية للموقع (Current Site State)

### ما الذي يعرضه الموقع الآن؟
الموقع **حالياً** عبارة عن **Developer Guide** (دليل مطور) وليس بورتفوليو IoT الأصلي. الصفحة الرئيسية `page.tsx` تم استبدالها بملف دليل مطور يحتوي على:

- **HomeView:** صفحة هبوط مع Hero + إحصائيات + روابط سريعة + ميزات + لوحة معلومات المشروع
- **DocsView:** قارئ وثائق كامل مع شريط جانبي + 17 قسم دليل
- **GuideHeader:** شريط تنقل ثابت مع بحث + تبديل لغة + تبديل سمة
- **SearchDialog:** بحث ⌘K عبر كل الأقسام

### المكونات القديمة (البورتفوليو الأصلي)
المكونات التالية موجودة في `src/components/portfolio/` لكنها **غير مستخدمة حالياً** في الصفحة:

| المكون | الملف | الحالة |
|--------|-------|--------|
| TeamSection | `portfolio/TeamSection.tsx` | ❌ غير مُستدعى في page.tsx |
| ServicesSection | `portfolio/ServicesSection.tsx` | ❌ غير مُستدعى |
| ProjectsShowcase | `portfolio/ProjectsShowcase.tsx` | ❌ غير مُستدعى |
| SecurityAudit | `portfolio/SecurityAudit.tsx` | ❌ غير مُستدعى |
| StartHereSection | `portfolio/StartHereSection.tsx` | ❌ غير مُستدعى |
| GroupsLinksSection | `portfolio/GroupsLinksSection.tsx` | ❌ غير مُستدعى |
| ResourceLibrarySection | `portfolio/ResourceLibrarySection.tsx` | ❌ غير مُستدعى |
| BlogSection | `portfolio/BlogSection.tsx` | ❌ غير مُستدعى |
| FAQSection | `portfolio/FAQSection.tsx` | ❌ غير مُستدعى |
| ContactForm | `portfolio/ContactForm.tsx` | ❌ غير مُستدعى |
| LiveActivitySection | `portfolio/LiveActivitySection.tsx` | ❌ غير مُستدعى |
| LatestAdditionsSection | `portfolio/LatestAdditionsSection.tsx` | ❌ غير مُستدعى |
| SearchDialog | `portfolio/SearchDialog.tsx` | ❌ غير مُستدعى |
| DynamicElementsSection | `portfolio/DynamicElementsSection.tsx` | ❌ غير مُستدعى |
| ProjectCalculator | `portfolio/ProjectCalculator.tsx` | ❌ غير مُستدعى |
| SkillsMatrix | `portfolio/SkillsMatrix.tsx` | ❌ غير مُستدعى |
| Timeline | `portfolio/Timeline.tsx` | ❌ غير مُستدعى |
| Testimonials | `portfolio/Testimonials.tsx` | ❌ غير مُستدعى |
| ESP32Simulator | `portfolio/ESP32Simulator.tsx` | ❌ غير مُستدعى |
| BreadcrumbNav | `portfolio/BreadcrumbNav.tsx` | ❌ غير مُستدعى |

### المكونات النشطة حالياً
| المكون | الملف | الحالة |
|--------|-------|--------|
| ChatBot | `chat/ChatBot.tsx` | ❌ موجود لكن غير مُستدعى في page.tsx الحالي |
| ServiceWorkerRegistrar | `ServiceWorkerRegistrar.tsx` | ✅ يعمل في layout.tsx |
| GuideRenderer | `guide/GuideRenderer.tsx` | ✅ يُستخدم في DocsView |
| shadcn/ui | `ui/*` (48 ملف) | ✅ مُثبّتة |

---

## 3. البنية التقنية (Tech Stack)

### الحزمة الأساسية
| التقنية | الإصدار | الاستخدام |
|---------|--------|----------|
| Next.js | 16.1.1 | إطار العمل الرئيسي (App Router) |
| React | 19.0 | مكتبة واجهة المستخدم |
| TypeScript | 5 | لغة البرمجة |
| Tailwind CSS | 4 | إطار الأنماط |
| Framer Motion | 12.23.2 | الرسوم والانتقالات |
| Zustand | 5.0.6 | إدارة الحالة (لغة + دليل) |
| Prisma | 6.11.1 | ORM وقاعدة البيانات (SQLite) |
| shadcn/ui | أحدث | مكتبة مكونات UI (48 مكون) |
| Lucide React | 0.525.0 | أيقونات SVG |

### المكتبات الإضافية المُثبّتة
| المكتبة | الاستخدام |
|---------|---------|
| `react-syntax-highlighter` | عرض أكواد مع syntax highlighting |
| `react-markdown` + `remark-gfm` | عرض محتوى Markdown |
| `sonner` | إشعارات Toast |
| `z-ai-web-dev-sdk` | AI / Web Search (backend فقط) |
| `next-themes` | دعم الوضع الداكن/الفاتح (مُعرّف لكن لا يُستخدم بشكل مستقل) |
| `zod` | التحقق من البيانات |
| `react-hook-form` + `@hookform/resolvers` | نماذج |
| `recharts` | رسوم بيانية |
| `date-fns` | تواريخ |
| `sharp` | معالجة صور |
| `uuid` | معرّفات فريدة |

### المكتبات غير المُستخدمة فعلياً
| المكتبة | ملاحظة |
|---------|--------|
| `next-auth` | مُثبّت لكن لا يُستخدم |
| `@mdxeditor/editor` | مُثبّت لكن لا يُستخدم |
| `@dnd-kit/*` | مُثبّت لكن لا يُستخدم |
| `@tanstack/react-query` | مُثبّت لكن لا يُستخدم |
| `@tanstack/react-table` | مُثبّت لكن لا يُستخدم |
| `embla-carousel-react` | مُثبّت لكن لا يُستخدم |
| `vaul` | مُثبّت لكن لا يُستخدم |
| `input-otp` | مُثبّت لكن لا يُستخدم |
| `next-intl` | مُثبّت لكن لا يُستخدم (اللغة تُدار يدوياً عبر Zustand) |

---

## 4. هيكل الملفات (File Structure)

```
src/
├── app/
│   ├── globals.css           # 363 سطر — أنماط عامة + تأثيرات نيون + أنيميشن
│   ├── layout.tsx            # 122 سطر — Layout رئيسي (SEO, Plausible, PWA)
│   ├── page.tsx              # 1454 سطر — الصفحة الرئيسية (دليل المطور حالياً)
│   ├── manifest.ts           # PWA manifest
│   ├── sitemap.ts            # SEO sitemap
│   └── not-found.tsx         # صفحة 404
│
├── components/
│   ├── chat/
│   │   └── ChatBot.tsx       # 759 سطر — دردشة ذكية (FAQ + NVIDIA AI)
│   ├── guide/
│   │   └── GuideRenderer.tsx  # 341 سطر — عرض Markdown مع syntax highlight
│   ├── portfolio/            # 21 مكون — البورتفوليو الأصلي (غير مُستخدم حالياً)
│   ├── platform/             # 12 ملف — مكونات إضافية (غير مُفعّلة أبداً)
│   ├── ServiceWorkerRegistrar.tsx
│   └── ui/                   # 48 مكون shadcn/ui
│
├── data/
│   ├── faq.json              # 18 سؤال/جواب ثنائي اللغة
│   ├── guide-sections.ts     # 2278 سطر — 17 قسم دليل ثنائي اللغة
│   ├── blog-posts.ts         # بيانات المدونة
│   └── calculator-recommendations.json
│
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.ts
│
└── lib/
    ├── db.ts                 # عميل Prisma (SQLite)
    ├── language.ts           # Zustand store للغة (ar/en)
    ├── guide-store.ts        # Zustand store للدليل (view/theme/sidebar)
    └── utils.ts              # cn() وغيرها
```

---

## 5. مسارات API (API Routes)

| المسار | الطريقة | الوظيفة | الحالة |
|--------|---------|---------|--------|
| `/api/ai-chat` | POST | وكيل NVIDIA NIM API (LLM) | ✅ يعمل |
| `/api/contact` | POST/GET | حفظ/استرجاع رسائل الاتصال (Prisma) | ✅ يعمل |
| `/api/newsletter` | POST | اشتراك في النشرة البريدية (Prisma) | ✅ يعمل |
| `/api/search` | GET | بحث ويب عبر z-ai-web-dev-sdk | ✅ يعمل |
| `/api` | - | مسار فارغ | موجود |

### ⚠️ ملاحظة أمنية: مفتاح NVIDIA API
- في `ChatBot.tsx`: المفتاح يُقرأ من `process.env.NEXT_PUBLIC_NVIDIA_API_KEY` — **يُرسل للعميل** في builds ثابتة
- في `/api/ai-chat/route.ts`: المفتاح مكتوب **مباشرة في الكود** (hardcoded) — مشكلة أمنية

---

## 6. قاعدة البيانات (Database)

### المحرك: SQLite (via Prisma)
### المسار: `db/` (الافتراضي من env)

| الجدول | الحقول | الوظيفة |
|--------|--------|---------|
| `ContactMessage` | id, name, email, subject?, message, isRead, timestamps | رسائل نموذج الاتصال |
| `NewsletterSubscriber` | id, email (unique), isActive, timestamps | مشتركون النشرة |
| `CourseEnrollment` | id, userEmail, courseId, progress, isActive, timestamps | تسجيلات الدورات |

---

## 7. نظام الدليل (Guide System)

### 17 قسم دليل (guide-sections.ts):

| # | ID | العنوان (EN) |
|---|----|----|
| 1 | overview | Project Overview |
| 2 | architecture | Technical Structure |
| 3 | technologies | Tech Stack |
| 4 | configuration | Configuration & Deployment |
| 5 | design | UI/UX Design |
| 6 | components | Components |
| 7 | state-management | State Management |
| 8 | database | Database & Data |
| 9 | ai-chatbot | AI Chatbot |
| 10 | security | Security |
| 11 | deployment | Deployment & DevOps |
| 12 | environment-vars | Environment Variables |
| 13 | troubleshooting | Troubleshooting |
| 14 | roadmap | Future Roadmap |
| 15 | external-links | External Links |
| 16 | quick-reference | Quick Reference |
| 17 | project-info | Project Info |

كل قسم يحتوي على محتوى ثنائي اللغة (AR/EN) بتنسيق Markdown مع جداول وأكواد.

---

## 8. نظام اللغة (Language System)

| الخاصية | التفاصيل |
|---------|---------|
| **الإدارة** | Zustand store في `lib/language.ts` |
| **اللغات** | العربية (ar) + الإنجليزية (en) |
| **الافتراضي** | العربية |
| **التبديل** | زر في GuideHeader |
| **RTL/LTR** | يدعم عبر `isRTL()` + `dir` attribute |
| **الدالة** | `t(ar, en)` — تُرجع النص حسب اللغة الحالية |
| **الخط** | IBM Plex Sans Arabic (Google Fonts) |
| **الطول** | 19 سطر فقط |

---

## 9. نظام السمة (Theme System)

| الخاصية | التفاصيل |
|---------|---------|
| **الإدارة** | Zustand store في `lib/guide-store.ts` |
| **السمات** | dark (افتراضي) + light |
| **التخزين** | `localStorage.setItem('guide-theme', next)` |
| **التبديل** | زر Sun/Moon في GuideHeader |
| **CSS** | يدعم dark mode عبر `theme` state (ليس class-based) |

---

## 10. التصميم (Design System)

### ألوان النيون
| اللون | الكود | الاستخدام |
|-------|-------|----------|
| أخضر نيون | `#00ff66` | العناصر التفاعلية، الأزرار الرئيسية |
| سماوي نيون | `#00e5ff` | تبديل اللغة، العناصر الثانوية |
| عنبري نيون | `#ffab00` | التحذيرات، الأقسام الثالثة |
| أحمر نيون | `#ff3d5a` | الأخطاء، الإنذارات |
| بنفسجي نيون | `#b44dff` | الميزات الإبداعية |

### ألوان الخلفية
| المتغير | القيمة |
|---------|--------|
| `--background` | `#0a0f1a` |
| `--card` | `#0f1628` |
| `--border` | `#1e2d4d` |
| `--muted-foreground` | `#7a8ba8` |
| `--foreground` | `#e8edf5` |
| `--primary` | `#00ff66` |

### CSS Classes مخصصة
`glass-dark` · `glass-card-dark` · `gradient-neon` · `gradient-neon-text` · `gradient-mesh-dark` · `neon-border` · `neon-border-cyan` · `card-hover` · `neon-text` · `circuit-bg` · `terminal-text` · `led-on` · `led-off` · `led-amber` · `led-red` · `animate-pulse-neon` · `animate-float` · `animate-shimmer` · `animate-cta-glow`

---

## 11. مكون الدردشة (ChatBot)

### الملف: `src/components/chat/ChatBot.tsx` (759 سطر)

### الوضع المحلي (FAQ):
- يطابق كلمات المستخدم مع 18 سؤال في `faq.json`
- خوارزمية: `keyword.length * 3` (تطابق كامل) + `word.length * 2` (تطبيق جزئي)
- يكتشف اللغة تلقائياً (Unicode Arabic range)
- عتبة النتيجة: `score > 2`

### وضع AI (NVIDIA NIM):
- **النموذج:** `meta/llama-3.1-405b-instruct`
- **الإتصال:** مباشرة من العميل (client-side) إلى NVIDIA API
- **Context:** آخر 6 رسائل من تاريخ المحادثة
- **الإعدادات:** `max_tokens: 150`, `temperature: 0.2`, timeout: 8 ثوان
- **System Prompt:** ثنائي اللغة (ar/en)، يحدد دور المساعد كخبير IoT
- **Fallback:** إذا فشل AI ← يعود للوضع المحلي (FAQ)

### المميزات:
- زر تبديل ⚡ بين الوضعين
- زر مسح المحادثة 🗑️
- مؤشر كتابة متحرك
- رابط تليجرام تلقائي عند فشل الإجابة
- **حالياً غير مُستدعى** في page.tsx الحالي

---

## 12. تكوين Next.js (next.config.ts)

### التكوين الأساسي (مشترك):
```typescript
{
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },  // ⚠️
  reactStrictMode: false,                    // ⚠️
  poweredByHeader: false,
}
```

### تكوين الإنتاج فقط:
```typescript
{
  output: "export",           // Static SSG
  basePath: "/iot-portfolio",
  distDir: "docs",
}
```

### رؤوس الأمان المُفعّلة:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy: (شاملة — تشمل plausible, cloudflare, nvidia, fonts)`

---

## 13. SEO و PWA

### SEO:
- ✅ `sitemap.ts` — خريطة الموقع ديناميكية
- ✅ `robots.txt` — ملف الروبوتات
- ✅ `<meta>` شاملة في `layout.tsx` (title, description, OG, Twitter)
- ✅ `metadataBase` = `https://mohammadfhgjvhgi.github.io/iot-portfolio`
- ✅ Open Graph + Twitter Card

### PWA:
- ✅ `manifest.ts` — Web App Manifest
- ✅ `public/sw.js` — Service Worker
- ✅ `ServiceWorkerRegistrar.tsx` — تسجيل SW تلقائي

### التحليلات:
- ✅ Plausible Analytics (script في layout.tsx)
- ✅ Custom Events: Contact Click, Chat Opened, Calculator Quote, Form Submit, Blog Post View

---

## 14. الملفات غير المُستخدمة / القابلة للحذف

| الملف/المجلد | السبب |
|-------------|-------|
| `src/components/platform/*` (12 ملف) | مكونات غير مُفعّلة أبداً |
| `src/components/portfolio/*` (21 ملف) | غير مُستدعاة في page.tsx الحالي |
| `src/components/chat/ChatBot.tsx` | غير مُستدعى حالياً |
| `src/data/blog-posts.ts` | غير مُستدعى |
| `src/data/calculator-recommendations.json` | غير مُستدعى |
| مكتبات غير مُستخدمة (next-auth, @mdxeditor/editor, @dnd-kit/*, etc.) | زيادة حجم build |

---

## 15. إحصائيات المشروع الحقيقية

| المقياس | القيمة (حقيقي) |
|---------|----------------|
| إجمالي ملفات `.ts` / `.tsx` | 103 |
| مكونات portfolio | 21 |
| مكونات UI (shadcn) | 48 |
| مكونات platform | 12 |
| أقسام الدليل | 17 |
| أسئلة FAQ | 18 |
| مسارات API | 4 |
| جداول DB (Prisma) | 3 |
| سطور `page.tsx` | 1454 |
| سطور `ChatBot.tsx` | 759 |
| سطور `guide-sections.ts` | 2278 |
| سطور `globals.css` | 363 |

---

## 16. ملاحظات مهمة

1. **الموقع حالياً ليس بورتفوليو IoT** — تم تحويله إلى Developer Guide. المكونات الأصلية موجودة لكن غير مُستخدمة.

2. **ChatBot لا يعمل حالياً** — `ChatBot.tsx` غير مُستدعى في `page.tsx` الحالي.

3. **مفتاح NVIDIA API مكشوف** — مكتوب hardcoded في `/api/ai-chat/route.ts` ويتوفر للعميل عبر `NEXT_PUBLIC_` env var.

4. **`typescript: { ignoreBuildErrors: true }`** — أخطاء TypeScript لا تمنع البناء.

5. **`reactStrictMode: false`** — React Strict Mode مُعطّل.

6. **لا يوجد routing حقيقي** — الموقع صفحة واحدة (`/`) فقط مع views داخلية عبر Zustand.

7. **مكونات platform غير مُفعّلة** — 12 ملف في `src/components/platform/` لا علاقة لها بالموقع الحالي.

8. **next-themes مُثبّت لكن لا يُستخدم** — السمة تُدار يدوياً عبر `guide-store.ts`.

9. **Plausible domain** — يستخدم `iot-portfolio.example.com` كـ fallback (ليس domain حقيقي).

10. **لا يوجد اختبارات** — لا ملفات test في المشروع.

---

## 17. أوامر التطوير

```bash
bun run dev          # تشغيل خادم التطوير (:3000)
bun run lint         # فحص ESLint
bun run db:push      # مزامنة Prisma مع DB
bun run db:generate  # توليد Prisma Client
bun run build        # بناء الإنتاج (output: export → docs/)
```
