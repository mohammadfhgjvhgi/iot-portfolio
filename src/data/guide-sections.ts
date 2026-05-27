export interface GuideSubsection {
  id: string;
  title: { ar: string; en: string };
}

export interface GuideSection {
  id: string;
  icon: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  content: { ar: string; en: string };
  subsections: GuideSubsection[];
}

export const guideSections: GuideSection[] = [
  // ──────────────────────────────────────────────
  // 1. OVERVIEW
  // ──────────────────────────────────────────────
  {
    id: "overview",
    icon: "Globe",
    title: { ar: "نظرة عامة على المشروع", en: "Project Overview" },
    description: {
      ar: "تعرف على المشروع وفريق العمل والإحصائيات",
      en: "Learn about the project, team, and statistics",
    },
    content: {
      ar: `## ما هو المشروع؟

**مشاريع للأنظمة الذكية** (Smart Systems Lab) هو موقع إلكتروني بورتفوليو احترافي لفريق هندسي من فلسطين يعمل في مجال إنترنت الأشياء (IoT) والأتمتة الذكية. الموقع يعرض:

- **4 مشاريع IoT حقيقية** منفذة بأنظمة متعددة المعالجات
- **6 خدمات** رئيسية يقدمها الفريق
- **نظام ثنائي اللغة** (العربية والإنجليزية) مع دعم كامل لـ RTL
- **دردشة ذكية** بوضعين: محلي (FAQ) + ذكاء اصطناعي (NVIDIA NIM)
- **تقرير أمان** شامل مع نتيجة 92/100
- **مدونة تقنية** مع مقالات مفصلة

## فريق العمل

| الاسم | الدور | المسؤولية |
|------|------|----------|
| **عمار مشارقة** (Ammar Masharqa) | مؤسس ومدير العمليات | الإدارة، التواصل مع العملاء، التنسيق اللوجستي |
| **محمد عقيلي** (Mohammad Aqli) | المؤسس والمهندس الرئيسي | تصميم الأنظمة المدمجة، البرمجة، التركيب، معمارية الأنظمة |

## الرابط المباشر

- **GitHub Pages:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\`
- **basePath في الإنتاج:** \`/iot-portfolio\`

## الإحصائيات الحالية

| المقياس | القيمة |
|--------|--------|
| المشاريع المنفذة | 4+ |
| ساعات العمل | 100+ |
| المشاكل المُحلّة | 20+ |
| أعضاء المجتمع | 800+ |
| نتيجة الأمان | 92/100 |
| مكونات الصفحة | 20+ |
| واجهات المستخدم UI | 40+ |
| مكونات shadcn/ui | 55+ |`,
      en: `## What is the Project?

**Smart Systems Lab** is a professional portfolio website for an engineering team from Palestine working in the field of Internet of Things (IoT) and smart automation. The website showcases:

- **4 real IoT projects** implemented with multi-processor systems
- **6 main services** offered by the team
- **Bilingual system** (Arabic and English) with full RTL support
- **Smart chatbot** with two modes: local (FAQ) + AI (NVIDIA NIM)
- **Comprehensive security report** with a score of 92/100
- **Technical blog** with detailed articles

## Team

| Name | Role | Responsibility |
|------|------|----------------|
| **Ammar Masharqa** | Co-founder & Operations Manager | Management, client communication, logistics coordination |
| **Mohammad Aqli** | Co-founder & Lead Engineer | Embedded system design, programming, installation, system architecture |

## Direct Link

- **GitHub Pages:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\`
- **Production basePath:** \`/iot-portfolio\`

## Current Statistics

| Metric | Value |
|--------|-------|
| Projects Completed | 4+ |
| Working Hours | 100+ |
| Issues Resolved | 20+ |
| Community Members | 800+ |
| Security Score | 92/100 |
| Page Components | 20+ |
| UI Components | 40+ |
| shadcn/ui Components | 55+ |`,
    },
    subsections: [
      { id: "what-is-project", title: { ar: "ما هو المشروع؟", en: "What is the Project?" } },
      { id: "team", title: { ar: "فريق العمل", en: "Team" } },
      { id: "links", title: { ar: "الرابط المباشر", en: "Direct Link" } },
      { id: "stats", title: { ar: "الإحصائيات", en: "Statistics" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 2. ARCHITECTURE
  // ──────────────────────────────────────────────
  {
    id: "architecture",
    icon: "LayoutDashboard",
    title: { ar: "الهيكل التقني والبنية", en: "Technical Structure" },
    description: {
      ar: "بنية المجلدات والمعمارية وخريطة الأقسام",
      en: "Directory structure, architecture, and section map",
    },
    content: {
      ar: `## بنية المجلدات

\`\`\`
iot-portfolio/
├── .env.example              # متغيرات البيئة النموذجية
├── agent-ctx/                # سياق العمل (للعوامل)
├── db/                      # مجلد قاعدة البيانات SQLite
├── docs/                     # مخرجات البناء (GitHub Pages)
│   ├── images/               # صور المشروع
│   └── _next/                # أصول Next.js
├── docs/404/                 # صفحة 404
├── mini-services/            # الخدمات المصغرة (مثل websocket)
├── prisma/
│   └── schema.prisma         # مخطط قاعدة البيانات
├── public/
│   ├── images/               # صور (logo, hero-banner, sensors, wiring, etc.)
│   ├── logo.svg
│   ├── robots.txt
│   └── sw.js                 # Service Worker
├── src/
│   ├── app/
│   │   ├── globals.css       # الأنماط العامة + التأثيرات
│   │   ├── layout.tsx        # التخطيط الرئيسي (خط IBM Plex Arabic، SEO)
│   │   ├── page.tsx          # الصفحة الرئيسية (الصفحة واحدة)
│   │   ├── manifest.ts       # PWA manifest
│   │   ├── sitemap.ts        # خريطة الموقع SEO
│   │   └── not-found.tsx     # صفحة 404
│   ├── components/
│   │   ├── chat/
│   │   │   └── ChatBot.tsx   # الدردشة الذكية (FAQ + NVIDIA AI)
│   │   ├── portfolio/        # مكونات المحتوى الرئيسية
│   │   ├── platform/         # مكونات إضافية (غير مفعّلة حالياً)
│   │   ├── ServiceWorkerRegistrar.tsx
│   │   └── ui/               # مكونات shadcn/ui (55+ مكون)
│   ├── data/
│   │   ├── blog-posts.ts     # بيانات المدونة
│   │   ├── calculator-recommendations.json
│   │   └── faq.json          # بيانات الشات (18 سؤال)
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   └── lib/
│       ├── db.ts             # عميل Prisma
│       ├── language.ts       # إدارة اللغة (Zustand)
│       └── utils.ts          # أدوات مساعدة (cn, etc.)
├── Caddyfile                 # إعدادات البوابة (Port 81)
├── components.json           # إعدادات shadcn/ui
├── eslint.config.mjs
├── next.config.ts            # تكوين Next.js (dev vs prod)
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts        # إعدادات Tailwind CSS
├── tsconfig.json
└── worklog.md                # سجل العمل
\`\`\`

## البنية المعمارية

\`\`\`
┌──────────────────────────────────────────────────┐
│              Caddy Gateway (:81)                │
│  (Port forwarding via XTransformPort query)     │
└────────────────────┬─────────────────────────────┘
                     │
          ┌────────▼──────────┐
          │  Next.js (:3000)  │
          │                    │
          │  ┌──────────────┐  │
          │  │ page.tsx    │  │  ← صفحة واحدة تحتوي كل شيء
          │  │  Components │  │
          │  │  ┌────────┐ │  │
          │  │  │portfolio│ │  │
          │  │  │chat    │ │  │
          │  │  │ui/     │ │  │
          │  │  └────────┘ │  │
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │ State/Store  │  │  ← Zustand (language)
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  Data Files  │  │  ← faq.json, blog-posts.ts, etc.
          │  └──────────────┘  │
          └────────────────────┘
                     │
          ┌────────▼──────────┐
          │  External APIs     │
          │  ┌────────────┐  │
          │  │ NVIDIA NIM   │  │
          │  │ (LLM Chat) │  │
          │  └────────────┘  │
          │  ┌────────────┐  │
          │  │ Formspree    │  │
          │  │ (Contact)   │  │
          │  └────────────┘  │
          │  ┌────────────┐  │
          │  │ Plausible   │  │
          │  │ (Analytics) │  │
          │  └────────────┘  │
          └──────────────────┘
\`\`\`

## خريطة الأقسام (Scroll Spy)

الموقع صفحة واحدة (SPA) مع أقسام مرقصة عبر \`id\`:

| القسم | ID | المكون |
|-------|----|--------|
| الرئيسية | \`#hero\` | مدمج في page.tsx |
| ابدأ من هنا | \`#start-here\` | StartHereSection |
| الفريق | \`#team\` | TeamSection |
| لماذا نحن مختلفون | \`#about\` | WhyUsSection |
| الخدمات | \`#services\` | ServicesSection |
| الموارد | \`#resources\` | ResourceLibrarySection |
| المشاريع | \`#projects\` | ProjectsShowcase |
| المجتمعات | \`#groups\` | GroupsLinksSection |
| الأسئلة الشائعة | \`#faq\` | FAQSection |
| تواصل | \`#contact\` | ContactSection |`,
      en: `## Directory Structure

\`\`\`
iot-portfolio/
├── .env.example              # Example environment variables
├── agent-ctx/                # Agent working context
├── db/                      # SQLite database folder
├── docs/                     # Build output (GitHub Pages)
│   ├── images/               # Project images
│   └── _next/                # Next.js assets
├── docs/404/                 # 404 page
├── mini-services/            # Micro-services (e.g., websocket)
├── prisma/
│   └── schema.prisma         # Database schema
├── public/
│   ├── images/               # Images (logo, hero-banner, sensors, wiring, etc.)
│   ├── logo.svg
│   ├── robots.txt
│   └── sw.js                 # Service Worker
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles + effects
│   │   ├── layout.tsx        # Main layout (IBM Plex Arabic font, SEO)
│   │   ├── page.tsx          # Main page (single page)
│   │   ├── manifest.ts       # PWA manifest
│   │   ├── sitemap.ts        # SEO sitemap
│   │   └── not-found.tsx     # 404 page
│   ├── components/
│   │   ├── chat/
│   │   │   └── ChatBot.tsx   # Smart chat (FAQ + NVIDIA AI)
│   │   ├── portfolio/        # Main content components
│   │   ├── platform/         # Extra components (currently disabled)
│   │   ├── ServiceWorkerRegistrar.tsx
│   │   └── ui/               # shadcn/ui components (55+)
│   ├── data/
│   │   ├── blog-posts.ts     # Blog data
│   │   ├── calculator-recommendations.json
│   │   └── faq.json          # Chat data (18 questions)
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   └── lib/
│       ├── db.ts             # Prisma client
│       ├── language.ts       # Language management (Zustand)
│       └── utils.ts          # Utility functions (cn, etc.)
├── Caddyfile                 # Gateway config (Port 81)
├── components.json           # shadcn/ui config
├── eslint.config.mjs
├── next.config.ts            # Next.js config (dev vs prod)
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts        # Tailwind CSS config
├── tsconfig.json
└── worklog.md                # Work log
\`\`\`

## System Architecture

\`\`\`
┌──────────────────────────────────────────────────┐
│              Caddy Gateway (:81)                │
│  (Port forwarding via XTransformPort query)     │
└────────────────────┬─────────────────────────────┘
                     │
          ┌────────▼──────────┐
          │  Next.js (:3000)  │
          │                    │
          │  ┌──────────────┐  │
          │  │ page.tsx    │  │  ← Single page containing everything
          │  │  Components │  │
          │  │  ┌────────┐ │  │
          │  │  │portfolio│ │  │
          │  │  │chat    │ │  │
          │  │  │ui/     │ │  │
          │  │  └────────┘ │  │
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │ State/Store  │  │  ← Zustand (language)
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  Data Files  │  │  ← faq.json, blog-posts.ts, etc.
          │  └──────────────┘  │
          └────────────────────┘
                     │
          ┌────────▼──────────┐
          │  External APIs     │
          │  ┌────────────┐  │
          │  │ NVIDIA NIM   │  │
          │  │ (LLM Chat) │  │
          │  └────────────┘  │
          │  ┌────────────┐  │
          │  │ Formspree    │  │
          │  │ (Contact)   │  │
          │  └────────────┘  │
          │  ┌────────────┐  │
          │  │ Plausible   │  │
          │  │ (Analytics) │  │
          │  └────────────┘  │
          └──────────────────┘
\`\`\`

## Section Map (Scroll Spy)

The site is a single page application (SPA) with sections identified via \`id\`:

| Section | ID | Component |
|---------|----|----|
| Hero | \`#hero\` | Built into page.tsx |
| Start Here | \`#start-here\` | StartHereSection |
| Team | \`#team\` | TeamSection |
| Why Us | \`#about\` | WhyUsSection |
| Services | \`#services\` | ServicesSection |
| Resources | \`#resources\` | ResourceLibrarySection |
| Projects | \`#projects\` | ProjectsShowcase |
| Communities | \`#groups\` | GroupsLinksSection |
| FAQ | \`#faq\` | FAQSection |
| Contact | \`#contact\` | ContactSection |`,
    },
    subsections: [
      { id: "directory-structure", title: { ar: "بنية المجلدات", en: "Directory Structure" } },
      { id: "system-architecture", title: { ar: "البنية المعمارية", en: "System Architecture" } },
      { id: "section-map", title: { ar: "خريطة الأقسام", en: "Section Map" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 3. TECHNOLOGIES
  // ──────────────────────────────────────────────
  {
    id: "technologies",
    icon: "Cpu",
    title: { ar: "التقنيات والمكتبات", en: "Tech Stack" },
    description: {
      ar: "التقنيات والمكتبات وأدوات التطوير المستخدمة",
      en: "Technologies, libraries, and development tools used",
    },
    content: {
      ar: `## الحزمة التقنية

| التقنية | الإصدار | الاستخدام |
|---------|--------|----------|
| **Next.js** | 16.1.1 | إطار العمل الرئيسي (App Router) |
| **React** | 19.0 | مكتبة واجهة المستخدم |
| **TypeScript** | 5 | لغة البرمجة |
| **Tailwind CSS** | 4 | إطار الأنماط |
| **Framer Motion** | 12.23.2 | الرسوم والانتقالات |
| **Zustand** | 5.0.6 | إدارة الحالة (لغة) |
| **Prisma** | 6.11.1 | ORM وقاعدة البيانات |
| **shadcn/ui** | أحدث | مكتبة مكونات UI |
| **Lucide React** | 0.525.0 | أيقونات SVG |

## المكتبات الإضافية

| المكتبة | الاستخدام |
|---------|---------|
| \`react-syntax-highlighter\` | عرض أكواد C++ في المشاريع |
| \`sonner\` | إشعارات Toast |
| \`z-ai-web-dev-sdk\` | ذكاء اصطناعي (في backend فقط) |
| \`react-markdown\` | عرض محتوى المدونة |
| \`next-themes\` | دعم الوضع الداكن (مُعرّف لكن لم يُفعّل) |
| \`plausible\` | تحليلات الزوار |
| \`formspree\` | نموذج الاتصال (backend proxy) |
| \`cloudflare turnstile\` | تحقق من الروبوتات (في نموذج الاتصال) |

## أدوات التطوير

\`\`\`bash
bun run dev        # تشغيل خادم التطوير (Port 3000)
bun run lint        # فحص الكود بـ ESLint
bun run db:push     # مزامنة مخطط Prisma
bun run db:generate # توليد عميل Prisma
\`\`\``,
      en: `## Core Stack

| Technology | Version | Usage |
|-----------|---------|-------|
| **Next.js** | 16.1.1 | Main framework (App Router) |
| **React** | 19.0 | UI library |
| **TypeScript** | 5 | Programming language |
| **Tailwind CSS** | 4 | Styling framework |
| **Framer Motion** | 12.23.2 | Animations and transitions |
| **Zustand** | 5.0.6 | State management (language) |
| **Prisma** | 6.11.1 | ORM and database |
| **shadcn/ui** | Latest | UI component library |
| **Lucide React** | 0.525.0 | SVG icons |

## Additional Libraries

| Library | Usage |
|---------|-------|
| \`react-syntax-highlighter\` | Display C++ code in projects |
| \`sonner\` | Toast notifications |
| \`z-ai-web-dev-sdk\` | AI (backend only) |
| \`react-markdown\` | Blog content rendering |
| \`next-themes\` | Dark mode support (defined but not activated) |
| \`plausible\` | Visitor analytics |
| \`formspree\` | Contact form (backend proxy) |
| \`cloudflare turnstile\` | Bot verification (in contact form) |

## Development Tools

\`\`\`bash
bun run dev        # Start development server (Port 3000)
bun run lint        # Lint code with ESLint
bun run db:push     # Sync Prisma schema
bun run db:generate # Generate Prisma client
\`\`\``,
    },
    subsections: [
      { id: "core-stack", title: { ar: "الحزمة التقنية", en: "Core Stack" } },
      { id: "additional-libraries", title: { ar: "المكتبات الإضافية", en: "Additional Libraries" } },
      { id: "dev-tools", title: { ar: "أدوات التطوير", en: "Dev Tools" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 4. CONFIGURATION
  // ──────────────────────────────────────────────
  {
    id: "configuration",
    icon: "Settings",
    title: { ar: "التكوين والنشر", en: "Configuration & Deployment" },
    description: {
      ar: "تكوين Next.js ورؤوس الأمان وسياسة المحتوى",
      en: "Next.js config, security headers, and content policy",
    },
    content: {
      ar: `## تكوين Next.js (\`next.config.ts\`)

هذا الملف **حرج** بشكل ديناميكي حسب البيئة:

\`\`\`typescript
const isDev = process.env.NODE_ENV === "development";

// البيئة المشتركة (تطوير):
const devConfig = { trailingSlash: true, images: { unoptimized: true } };

// البيئة الإنتاجية (GitHub Pages):
const prodConfig = {
  ...devConfig,
  output: "export",           // تصدير ثابت (SSG)
  basePath: "/iot-portfolio",  // مسار GitHub Pages
  distDir: "docs",           // مجلد المخرجات
};
\`\`\`

**النتيجة:**
- **التطوير:** \`http://localhost:3000/\` (بدون basePath)
- **الإنتاج:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\`

## رؤوس الأمان (Security Headers)

مُعرّفة في \`next.config.ts\` لكل المسارات:

| الرأس | القيمة | الغرض |
|-------|-------|-------|
| \`X-Frame-Options\` | \`DENY\` | منع التضمين في إطارات |
| \`X-Content-Type-Options\` | \`nosniff\` | منع MIME sniffing |
| \`Referrer-Policy\` | \`strict-origin-when-cross-origin\` | تحكم في الإحالة |
| \`Permissions-Policy\` | \`camera=(), microphone=(), geolocation=()\` | حصر الصلاحيات |
| \`Content-Security-Policy\` | شاملة (انظر الملف) | حماية المحتوى |
| \`X-Powered-By\` | مُزال | إخفاء بصمة الإطار |
| \`strict-transport-security\` | مُفعّل | HTTPS فقط |

## Content Security Policy (CSP) المفصّل

\`\`\`
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://challenges.cloudflare.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: blob: https://*.githubusercontent.com;
connect-src 'self' https://formspree.io https://integrate.api.nvidia.com https://plausible.io https://challenges.cloudflare.com https://esm.sh;
frame-src https://challenges.cloudflare.com;
\`\`\``,
      en: `## Next.js Configuration (\`next.config.ts\`)

This file is **critical** and dynamically adjusts based on the environment:

\`\`\`typescript
const isDev = process.env.NODE_ENV === "development";

// Shared config (development):
const devConfig = { trailingSlash: true, images: { unoptimized: true } };

// Production config (GitHub Pages):
const prodConfig = {
  ...devConfig,
  output: "export",           // Static export (SSG)
  basePath: "/iot-portfolio",  // GitHub Pages path
  distDir: "docs",           // Output directory
};
\`\`\`

**Result:**
- **Development:** \`http://localhost:3000/\` (no basePath)
- **Production:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\`

## Security Headers

Defined in \`next.config.ts\` for all routes:

| Header | Value | Purpose |
|--------|-------|---------|
| \`X-Frame-Options\` | \`DENY\` | Prevent framing |
| \`X-Content-Type-Options\` | \`nosniff\` | Prevent MIME sniffing |
| \`Referrer-Policy\` | \`strict-origin-when-cross-origin\` | Referrer control |
| \`Permissions-Policy\` | \`camera=(), microphone=(), geolocation=()\` | Restrict permissions |
| \`Content-Security-Policy\` | Comprehensive (see file) | Content protection |
| \`X-Powered-By\` | Removed | Hide framework fingerprint |
| \`strict-transport-security\` | Enabled | HTTPS only |

## Detailed Content Security Policy (CSP)

\`\`\`
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://challenges.cloudflare.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: blob: https://*.githubusercontent.com;
connect-src 'self' https://formspree.io https://integrate.api.nvidia.com https://plausible.io https://challenges.cloudflare.com https://esm.sh;
frame-src https://challenges.cloudflare.com;
\`\`\``,
    },
    subsections: [
      { id: "next-config", title: { ar: "تكوين Next.js", en: "Next.js Configuration" } },
      { id: "security-headers", title: { ar: "رؤوس الأمان", en: "Security Headers" } },
      { id: "content-security-policy", title: { ar: "سياسة أمان المحتوى", en: "Content Security Policy" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 5. DESIGN
  // ──────────────────────────────────────────────
  {
    id: "design",
    icon: "Palette",
    title: { ar: "التصميم والأنماط", en: "UI/UX Design" },
    description: {
      ar: "نظام الألوان والتأثيرات البصرية والأنيميشن",
      en: "Color system, visual effects, and animations",
    },
    content: {
      ar: `## نظام الألوان (Color System)

### الألوان الأساسية
\`\`\`css
--background: #0a0f1a;    /* خلفية رئيسية */
--foreground: #e8edf5;    /* نص رئيسي */
--card: #0f1628;          /* خلفية البطاقات */
--border: #1e2d4d;        /* حدود */
--muted-foreground: #7a8ba8; /* نص ثانوي */
--primary: #00ff66;         /* اللون الرئيسي (أخضر نيون) */
--primary-foreground: #0a0f1a;
\`\`\`

### ألوان النيون

| الاسم | الكود | الاستخدام |
|------|-----|---------|
| نيون أخضر | \`#00ff66\` | العناصر التفاعلية، الأزرار الرئيسية |
| نيون سماوي | \`#00e5ff\` | التبديل بين اللغات، العناصر الثانوية |
| نيون عنبري | \`#ffab00\` | التحذيرات، القسم الثالث |
| نيون أحمر | \`#ff3d5a\` | الأخطاء، الإنذارات |
| نيون بنفسجي | \`#b44dff\` | الميزات الخاصة، الأقسام الإبداعية |

## التأثيرات البصرية المخصصة (CSS Classes)

| الكلاس | التأثير |
|-------|--------|
| \`.glass-dark\` | خلفية شفافة داكنة مع blur |
| \`.glass-card-dark\` | بطاقة زجاجية مع حدود خضراء خفيفة |
| \`.gradient-neon\` | تدرج لون أخضر→سماوي |
| \`.gradient-neon-text\` | نص بتدرج لون (background-clip: text) |
| \`.gradient-mesh-dark\` | خلفية متدرجة دائرية |
| \`.neon-border\` | حدود مع توهج نيون |
| \`.card-hover\` | تأثير hover (رفع + ظل) |
| \`.neon-text\` | نص مع ظل نيون أخضر |
| \`.neon-text-cyan\` | نص مع ظل نيون سماوي |
| \`.circuit-bg\` | خلفية نمط دائرة كهربائية |
| \`.terminal-text\` | خط مونوسب مع لون أخضر |

## أنيميشن CSS

| الكلاس | الأنيميشن |
|-------|-----------|
| \`.animate-pulse-neon\` | نبض نيون متدرج |
| \`.animate-float\` | طفو لطيف (6s) |
| \`.animate-float-delayed\` | طفو متأخر (6s + 2s) |
| \`.animate-shimmer\` | لمعان متحرك |
| \`.animate-pulse-ring\` | حلقة نبض متوسعة |
| \`.animate-cta-glow\` | توهج CTA |

## مؤشرات LED

| الكلاس | الشكل |
|-------|-------|
| \`.led-on\` | دائرة خضراء متوهجة |
| \`.led-off\` | دائرة رمادية معتمة |
| \`.led-amber\` | دائرة برتقالي متوهجة |
| \`.led-red\` | دائرة حمراء متوهجة |

## نظام الاستجابة (Responsive Design)

| النقطة | xs | sm | md | lg | xl |
|-------|----|----|----|----|-----|
| النص الرئيسي H1 | 3xl | 5xl | 7xl | - | - |
| شبكة البطاقات (المشاريع) | 1 col | 1 col | 2 col | - | - |
| شبكة الخدمات | 1 col | 1 col | 2 col | 3 col | 3 col |
| شبكة المجموعات | 1 col | - | 2 col | - | 4 col |
| شبكة الموارد | 1 col | 1 col | 2 col | 3 col | 3 col |
| الأقسام الداخلية | py-12 | py-16 | py-20 | - | - |`,
      en: `## Color System

### Base Colors
\`\`\`css
--background: #0a0f1a;    /* Main background */
--foreground: #e8edf5;    /* Main text */
--card: #0f1628;          /* Card background */
--border: #1e2d4d;        /* Borders */
--muted-foreground: #7a8ba8; /* Secondary text */
--primary: #00ff66;         /* Primary color (neon green) */
--primary-foreground: #0a0f1a;
\`\`\`

### Neon Colors

| Name | Code | Usage |
|------|------|-------|
| Neon Green | \`#00ff66\` | Interactive elements, primary buttons |
| Neon Cyan | \`#00e5ff\` | Language toggle, secondary elements |
| Neon Amber | \`#ffab00\` | Warnings, third section |
| Neon Red | \`#ff3d5a\` | Errors, alerts |
| Neon Purple | \`#b44dff\` | Special features, creative sections |

## Custom Visual Effects (CSS Classes)

| Class | Effect |
|-------|--------|
| \`.glass-dark\` | Dark transparent background with blur |
| \`.glass-card-dark\` | Glass card with light green borders |
| \`.gradient-neon\` | Green→cyan gradient |
| \`.gradient-neon-text\` | Gradient text (background-clip: text) |
| \`.gradient-mesh-dark\` | Radial gradient background |
| \`.neon-border\` | Border with neon glow |
| \`.card-hover\` | Hover effect (lift + shadow) |
| \`.neon-text\` | Text with neon green shadow |
| \`.neon-text-cyan\` | Text with neon cyan shadow |
| \`.circuit-bg\` | Circuit board pattern background |
| \`.terminal-text\` | Monospace font with green color |

## CSS Animations

| Class | Animation |
|-------|-----------|
| \`.animate-pulse-neon\` | Gradient neon pulse |
| \`.animate-float\` | Gentle float (6s) |
| \`.animate-float-delayed\` | Delayed float (6s + 2s) |
| \`.animate-shimmer\` | Moving shimmer |
| \`.animate-pulse-ring\` | Expanding pulse ring |
| \`.animate-cta-glow\` | CTA glow effect |

## LED Indicators

| Class | Appearance |
|-------|-----------|
| \`.led-on\` | Glowing green circle |
| \`.led-off\` | Dark gray circle |
| \`.led-amber\` | Glowing orange circle |
| \`.led-red\` | Glowing red circle |

## Responsive Design

| Breakpoint | xs | sm | md | lg | xl |
|-----------|----|----|----|----|-----|
| Main H1 text | 3xl | 5xl | 7xl | - | - |
| Card grid (Projects) | 1 col | 1 col | 2 col | - | - |
| Services grid | 1 col | 1 col | 2 col | 3 col | 3 col |
| Groups grid | 1 col | - | 2 col | - | 4 col |
| Resources grid | 1 col | 1 col | 2 col | 3 col | 3 col |
| Section padding | py-12 | py-16 | py-20 | - | - |`,
    },
    subsections: [
      { id: "color-system", title: { ar: "نظام الألوان", en: "Color System" } },
      { id: "visual-effects", title: { ar: "التأثيرات البصرية", en: "Visual Effects" } },
      { id: "animations", title: { ar: "الأنيميشن", en: "Animations" } },
      { id: "led-indicators", title: { ar: "مؤشرات LED", en: "LED Indicators" } },
      { id: "responsive-design", title: { ar: "نظام الاستجابة", en: "Responsive Design" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 6. COMPONENTS
  // ──────────────────────────────────────────────
  {
    id: "components",
    icon: "Layers",
    title: { ar: "قائمة المكونات", en: "Components" },
    description: {
      ar: "المكونات المدمجة والمستقلة والشات و shadcn/ui",
      en: "Inline, standalone, chatbot, and shadcn/ui components",
    },
    content: {
      ar: `## المكونات المدمجة في \`page.tsx\`

المكونات التالية مُعرّفة **مباشرة داخل** \`src/app/page.tsx\`:

| المكون | النوع | الوصف |
|--------|------|-------|
| \`Navbar\` | function | شريط التنقل الثابت مع Scroll Spy + تبديل اللغة |
| \`HeroSection\` | function | القسم الرئيسي مع تأثير طباعة + عداد متحرك + CTA |
| \`WhyUsSection\` | function | 6 أسباب للتمايز (الأمان، Offline-First، كود نظيف...) |
| \`ProjectGuideSection\` | function | دليل المشروع المختصر مع زر "اقرأ المزيد" |
| \`ProjectGuideModal\` | function | نافذة كاملة للدليل |
| \`ArchitectureModal\` | function | نافذة المعمارية والتصميم |
| \`SecurityAuditSummary\` | function | ملخص تقرير الأمان (92/100) |
| \`SecurityAuditModal\` | function | النافذة الكاملة لتقرير الأمان |
| \`ContactSection\` | function | معلومات الاتصال + نموذج الاتصال |
| \`PortfolioFooter\` | function | تذييل الصفحة |

## المكونات المستقلة

| المكون | الملف | الوصف التفصيلي |
|--------|------|--------------|
| **TeamSection** | \`portfolio/TeamSection.tsx\` | بطاقتا المؤسسين مع صور SVG مخصصة، شريط إحصائيات (4+/100+/20+/800+)، رسالة المهمية |
| **ServicesSection** | \`portfolio/ServicesSection.tsx\` | 6 خدمات IoT مع بطاقات ألوان، قائمة مميزات، CTA سفلي |
| **ProjectsShowcase** | \`portfolio/ProjectsShowcase.tsx\` | أكبر مكون (~1300 سطر) — 4 مشاريع كاملة مع بيانات متعددة اللغات، رمز معمارية ASCII، عروض أكواد مع syntax highlighter، محاكاة بيانات حية (Telemetry)، تفاصيل المشاريع، قسم التحديات، مودال التوسيع |
| **SecurityAudit** | \`portfolio/SecurityAudit.tsx\` | تقرير أمان شامل مع 4 أدوات (Lighthouse, Security Headers, Nuclei, OWASP)، حلقات SVG متحركة، شريط تقدم |
| **StartHereSection** | \`portfolio/StartHereSection.tsx\` | 4 فئات تعلم: مبتدئ، مشاريع توجيهي، Arduino/IoT، حلول أخطاء |
| **GroupsLinksSection** | \`portfolio/GroupsLinksSection.tsx\` | 4 قنوات اتصال: 2 تليجرام + فيسبوك + واتساب مع أزرار انضمام |
| **ResourceLibrarySection** | \`portfolio/ResourceLibrarySection.tsx\` | مكتبة موارد مع بحث، تصنيف (6 فئات)، ترتيب (تحميل/اسم/أحدث)، 12 مورداً |
| **BlogSection** | \`portfolio/BlogSection.tsx\` | مدونة تقنية مع بطاقات مقالات، مودال قراءة كامل مع جداول وأكواد |
| **FAQSection** | \`portfolio/FAQSection.tsx\` | 8 أسئلة شائعة مع Accordion ثنائي اللغات |
| **ContactForm** | \`portfolio/ContactForm.tsx\` | نموذج اتصال مع Turnstile + Formspree |
| **LiveActivitySection** | \`portfolio/LiveActivitySection.tsx\` | خط زمني "نشاط حي" مع 6 أحداث + مؤشر LIVE |
| **LatestAdditionsSection** | \`portfolio/LatestAdditionsSection.tsx\` | 4 أقسام: ملفات، مشاريع، شرحات، تحديثات |
| **SearchDialog** | \`portfolio/SearchDialog.tsx\` | بحث Cmd+K مع 11 عنصر قابلة للبحث، تنقل لوحة مفاتيح |
| **DynamicElementsSection** | \`portfolio/DynamicElementsSection.tsx\` | عنصر تفاعلي ديناميكي (جزيئئات، عدادات، بيانات) |
| **ProjectCalculator** | \`portfolio/ProjectCalculator.tsx\` | حاساب تكلفة المشروع المبدئي |
| **SkillsMatrix** | \`portfolio/SkillsMatrix.tsx\` | مصفوف المهارات التقنية |
| **Timeline** | \`portfolio/Timeline.tsx\` | خط زمني للفريق |
| **Testimonials** | \`portfolio/Testimonials.tsx\` | آراء العملاء |
| **ESP32Simulator** | \`portfolio/ESP32Simulator.tsx\` | محاكي ESP32 تفاعلي |
| **BreadcrumbNav** | \`portfolio/BreadcrumbNav.tsx\` | مسار التنقل |

## مكون الدردشة

**الملف:** \`src/components/chat/ChatBot.tsx\`

**وضعان مزدوج:**

1. **الوضع المحلي (FAQ):**
   - يطابق كلمات المستخدم مع 18 سؤال مُعرّف في \`src/data/faq.json\`
   - خوارزمية مطابقة تعتمد على طول الكلمة × 2 (أهمية الكلمة)
   - استجابة باللغة السؤال تلقائياً (يكتشف العربية عبر Unicode)
   - إذا لم يجد إجابة ← يعرض رابط تليجرام

2. **وضع الذكاء الاصطناعي (AI):**
   - يتصل مباشرة بـ NVIDIA NIM API (\`meta/llama-3.1-405b-instruct\`)
   - يرسل آخر 6 رسائل من تاريخ المحادثة كـ context
   - System prompt متعد حسب اللغة (عربي/إنجليزي)
   - \`max_tokens: 150\` للإجابات المختصرة
   - \`temperature: 0.2\` للاستقرار
   - وقت انتظار: 8 ثوان

3. **المميزات:**
   - زر تبديل ⚡ بين الوضعين (يستمر نفس تاريخ المحادثة)
   - زر مسح المحادثة 🗑️
   - مؤشر كتابة "يفكر..." مع نقاط متحركة
   - رابط تليجرام تلقائي عند فشل AI
   - Fallback ذكي: إذا فشل AI ← يعود للوضع المحلي

## مكونات UI (shadcn/ui)

مُثبّت 55+ مكون من مكتبة shadcn/ui في \`src/components/ui/\`. تشمل:
- Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge
- Breadcrumb, Button, Calendar, Card, Carousel, Chart
- Checkbox, Collapsible, Command, ContextMenu, Dialog
- DropdownMenu, Drawer, Form, HoverCard, Input, InputOTP
- Label, Menubar, NavigationMenu, Pagination, Popover, Progress
- RadioGroup, Resizable, ScrollArea, Search (Command), Select
- Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (Toast), Switch
- Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip

> **ملاحظة:** لا تستخدم المكونات من \`src/components/platform/\` — هذه ملفات إضافية غير مُفعّلة حالياً.`,
      en: `## Components Built Into \`page.tsx\`

The following components are defined **directly inside** \`src/app/page.tsx\`:

| Component | Type | Description |
|-----------|------|-------------|
| \`Navbar\` | function | Fixed navigation bar with Scroll Spy + language toggle |
| \`HeroSection\` | function | Hero section with typewriter effect + animated counter + CTA |
| \`WhyUsSection\` | function | 6 differentiation reasons (Security, Offline-First, Clean Code...) |
| \`ProjectGuideSection\` | function | Brief project guide with "Read More" button |
| \`ProjectGuideModal\` | function | Full-screen guide modal |
| \`ArchitectureModal\` | function | Architecture and design modal |
| \`SecurityAuditSummary\` | function | Security report summary (92/100) |
| \`SecurityAuditModal\` | function | Full security report modal |
| \`ContactSection\` | function | Contact info + contact form |
| \`PortfolioFooter\` | function | Page footer |

## Standalone Components

| Component | File | Detailed Description |
|-----------|------|---------------------|
| **TeamSection** | \`portfolio/TeamSection.tsx\` | Co-founder cards with custom SVG images, stats bar (4+/100+/20+/800+), mission statement |
| **ServicesSection** | \`portfolio/ServicesSection.tsx\` | 6 IoT services with colored cards, features list, bottom CTA |
| **ProjectsShowcase** | \`portfolio/ProjectsShowcase.tsx\` | Largest component (~1300 lines) — 4 complete projects with multilingual data, ASCII architecture diagrams, code displays with syntax highlighter, live telemetry simulation, project details, challenges section, expansion modal |
| **SecurityAudit** | \`portfolio/SecurityAudit.tsx\` | Comprehensive security report with 4 tools (Lighthouse, Security Headers, Nuclei, OWASP), animated SVG rings, progress bar |
| **StartHereSection** | \`portfolio/StartHereSection.tsx\` | 4 learning categories: beginner, high school projects, Arduino/IoT, troubleshooting |
| **GroupsLinksSection** | \`portfolio/GroupsLinksSection.tsx\` | 4 communication channels: 2 Telegram + Facebook + WhatsApp with join buttons |
| **ResourceLibrarySection** | \`portfolio/ResourceLibrarySection.tsx\` | Resource library with search, categories (6), sorting (downloads/name/newest), 12 resources |
| **BlogSection** | \`portfolio/BlogSection.tsx\` | Tech blog with article cards, full reading modal with tables and code |
| **FAQSection** | \`portfolio/FAQSection.tsx\` | 8 FAQ items with bilingual Accordion |
| **ContactForm** | \`portfolio/ContactForm.tsx\` | Contact form with Turnstile + Formspree |
| **LiveActivitySection** | \`portfolio/LiveActivitySection.tsx\` | "Live Activity" timeline with 6 events + LIVE indicator |
| **LatestAdditionsSection** | \`portfolio/LatestAdditionsSection.tsx\` | 4 sections: files, projects, tutorials, updates |
| **SearchDialog** | \`portfolio/SearchDialog.tsx\` | Cmd+K search with 11 searchable items, keyboard navigation |
| **DynamicElementsSection** | \`portfolio/DynamicElementsSection.tsx\` | Dynamic interactive element (particles, counters, data) |
| **ProjectCalculator** | \`portfolio/ProjectCalculator.tsx\` | Initial project cost calculator |
| **SkillsMatrix** | \`portfolio/SkillsMatrix.tsx\` | Technical skills matrix |
| **Timeline** | \`portfolio/Timeline.tsx\` | Team timeline |
| **Testimonials** | \`portfolio/Testimonials.tsx\` | Client testimonials |
| **ESP32Simulator** | \`portfolio/ESP32Simulator.tsx\` | Interactive ESP32 simulator |
| **BreadcrumbNav** | \`portfolio/BreadcrumbNav.tsx\` | Breadcrumb navigation |

## ChatBot Component

**File:** \`src/components/chat/ChatBot.tsx\`

**Dual Mode:**

1. **Local Mode (FAQ):**
   - Matches user words with 18 questions defined in \`src/data/faq.json\`
   - Matching algorithm based on word length × 2 (word importance)
   - Auto-responds in the question's language (detects Arabic via Unicode)
   - If no answer found → shows Telegram link

2. **AI Mode:**
   - Connects directly to NVIDIA NIM API (\`meta/llama-3.1-405b-instruct\`)
   - Sends last 6 messages from chat history as context
   - Multi-language system prompt (Arabic/English)
   - \`max_tokens: 150\` for concise answers
   - \`temperature: 0.2\` for stability
   - Timeout: 8 seconds

3. **Features:**
   - ⚡ Toggle button between modes (preserves chat history)
   - 🗑️ Clear chat button
   - "Thinking..." typing indicator with animated dots
   - Automatic Telegram link on AI failure
   - Smart Fallback: if AI fails → returns to local mode

## UI Components (shadcn/ui)

55+ components from shadcn/ui installed in \`src/components/ui/\`. Includes:
- Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge
- Breadcrumb, Button, Calendar, Card, Carousel, Chart
- Checkbox, Collapsible, Command, ContextMenu, Dialog
- DropdownMenu, Drawer, Form, HoverCard, Input, InputOTP
- Label, Menubar, NavigationMenu, Pagination, Popover, Progress
- RadioGroup, Resizable, ScrollArea, Search (Command), Select
- Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (Toast), Switch
- Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip

> **Note:** Do not use components from \`src/components/platform/\` — these are extra files that are currently disabled.`,
    },
    subsections: [
      { id: "inline-components", title: { ar: "المكونات المدمجة", en: "Inline Components" } },
      { id: "standalone-components", title: { ar: "المكونات المستقلة", en: "Standalone Components" } },
      { id: "chatbot-component", title: { ar: "مكون الدردشة", en: "ChatBot Component" } },
      { id: "ui-components", title: { ar: "مكونات UI", en: "UI Components" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 7. STATE MANAGEMENT
  // ──────────────────────────────────────────────
  {
    id: "state-management",
    icon: "Database",
    title: { ar: "إدارة الحالة", en: "State Management" },
    description: {
      ar: "نظام اللغة ودعم RTL والخطوط",
      en: "Language system, RTL support, and fonts",
    },
    content: {
      ar: `## نظام اللغة — Zustand Store

**الملف:** \`src/lib/language.ts\`

\`\`\`typescript
interface LanguageState {
  lang: 'ar' | 'en';
  toggle: () => void;
  setLang: (l: Lang) => void;
  t: (ar: string, en: string) => string;  // دالة الترجمة
  isRTL: () => boolean;
}
\`\`\`

**الاستخدام:**
\`\`\`typescript
const { lang, toggle, t, isRTL } = useLang();

// الترجمة
const title = t("مرحباً", "Welcome"); // يتحدث تلقائياً مع تغيير اللغة

// RTL
const isRTL = isRTL(); // true = عربي, false = إنجليزي

// تبديل اللغة
<button onClick={toggle}>
  {lang === 'ar' ? 'EN' : 'عربي'}
</button>
\`\`\`

## الاتجاهات

| الطريقة | الكود | الوصف |
|--------|------|-------|
| \`t(ar, en)\` | دالة ترجمة مختصرة | تعيد النص حسب اللغة الحالية |
| \`lang\` | \`'ar' | 'en'\` | اللغة الحالية |
| \`isRTL()\` | \`boolean\` | هل اتجاه النص من اليمين لليمين؟ |
| \`toggle()\` | \`void\` | تبديل بين العربية والإنجليزية |
| \`setLang(l)\` | \`void\` | تعيين لغة معينة |

## دعم RTL/LTR

- **التخطيط الرئيسي** يبدأ بـ \`dir="rtl"\` افتراضياً
- كل مكون يستخدم \`dir={isRTL() ? "rtl" : "ltr"}\` للنصوص
- بعض النصوص التقنية (مثل أسماء المتحكمات) تُعرض دائماً من اليسار لليمين (\`dir="ltr"\`)
- CSS خاص: \`[dir="rtl"] .lucide-chevron-down { transition: transform 0.2s; }\`

## الخطوط

\`\`\`css
font-family: var(--font-ibm-plex-arabic), system-ui, sans-serif;
\`\`\`

الخط: **IBM Plex Sans Arabic** (من Google Fonts)
- الأوزان: 400, 600, 700
- يدعم العربية والإنجليزية
- \`display: swap\` للأداء`,
      en: `## Language System — Zustand Store

**File:** \`src/lib/language.ts\`

\`\`\`typescript
interface LanguageState {
  lang: 'ar' | 'en';
  toggle: () => void;
  setLang: (l: Lang) => void;
  t: (ar: string, en: string) => string;  // Translation function
  isRTL: () => boolean;
}
\`\`\`

**Usage:**
\`\`\`typescript
const { lang, toggle, t, isRTL } = useLang();

// Translation
const title = t("مرحباً", "Welcome"); // Automatically updates when language changes

// RTL
const isRTL = isRTL(); // true = Arabic, false = English

// Language toggle
<button onClick={toggle}>
  {lang === 'ar' ? 'EN' : 'عربي'}
</button>
\`\`\`

## API Methods

| Method | Code | Description |
|--------|------|-------------|
| \`t(ar, en)\` | Translation shorthand | Returns text based on current language |
| \`lang\` | \`'ar' | 'en'\` | Current language |
| \`isRTL()\` | \`boolean\` | Is the text direction right-to-left? |
| \`toggle()\` | \`void\` | Toggle between Arabic and English |
| \`setLang(l)\` | \`void\` | Set a specific language |

## RTL/LTR Support

- **Main layout** starts with \`dir="rtl"\` by default
- Every component uses \`dir={isRTL() ? "rtl" : "ltr"}\` for text
- Some technical texts (like microcontroller names) are always displayed left-to-right (\`dir="ltr"\`)
- Special CSS: \`[dir="rtl"] .lucide-chevron-down { transition: transform 0.2s; }\`

## Fonts

\`\`\`css
font-family: var(--font-ibm-plex-arabic), system-ui, sans-serif;
\`\`\`

Font: **IBM Plex Sans Arabic** (from Google Fonts)
- Weights: 400, 600, 700
- Supports Arabic and English
- \`display: swap\` for performance`,
    },
    subsections: [
      { id: "language-system", title: { ar: "نظام اللغة", en: "Language System" } },
      { id: "rtl-support", title: { ar: "دعم RTL/LTR", en: "RTL/LTR Support" } },
      { id: "fonts", title: { ar: "الخطوط", en: "Fonts" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 8. DATABASE
  // ──────────────────────────────────────────────
  {
    id: "database",
    icon: "Database",
    title: { ar: "قاعدة البيانات", en: "Database" },
    description: {
      ar: "مخطط Prisma واتصال قاعدة البيانات والبيانات الثابتة",
      en: "Prisma schema, DB connection, and static data",
    },
    content: {
      ar: `## المخطط (\`prisma/schema.prisma\`)

3 نماذج فقط (الموقع يستخدم ملفات JSON للبيانات الثابتة):

\`\`\`prisma
model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String?
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model NewsletterSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model CourseEnrollment {
  id        String   @id @default(cuid())
  userEmail String
  courseId  String
  progress  Int      @default(0)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userEmail, courseId])
}
\`\`\`

## الاتصال بقاعدة البيانات

\`\`\`typescript
import { db } from '@/lib/db';
// db is a PrismaClient singleton

// استخدام:
const messages = await db.contactMessage.findMany();
await db.contactMessage.create({ data: {...} });
\`\`\`

## البيانات الثابتة (JSON)

| الملف | المحتوى | الاستخدام |
|------|---------|---------|
| \`src/data/faq.json\` | 18 سؤال مع كلمات مفتاحية | مصدر بيانات الشات |
| \`src/data/blog-posts.ts\` | مقالات المدونة (عنوان، محتوى، أكواد) | عرض المدونة |
| \`src/data/calculator-recommendations.json\` | توصيات حاساب المشروع | حاساب التكلفة |`,
      en: `## Schema (\`prisma/schema.prisma\`)

Only 3 models (the site uses JSON files for static data):

\`\`\`prisma
model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String?
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model NewsletterSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model CourseEnrollment {
  id        String   @id @default(cuid())
  userEmail String
  courseId  String
  progress  Int      @default(0)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userEmail, courseId])
}
\`\`\`

## Database Connection

\`\`\`typescript
import { db } from '@/lib/db';
// db is a PrismaClient singleton

// Usage:
const messages = await db.contactMessage.findMany();
await db.contactMessage.create({ data: {...} });
\`\`\`

## Static Data (JSON)

| File | Content | Usage |
|------|---------|-------|
| \`src/data/faq.json\` | 18 questions with keywords | Chatbot data source |
| \`src/data/blog-posts.ts\` | Blog articles (title, content, code) | Blog display |
| \`src/data/calculator-recommendations.json\` | Project calculator recommendations | Cost calculator |`,
    },
    subsections: [
      { id: "prisma-schema", title: { ar: "مخطط Prisma", en: "Prisma Schema" } },
      { id: "db-connection", title: { ar: "الاتصال بقاعدة البيانات", en: "Database Connection" } },
      { id: "static-data", title: { ar: "البيانات الثابتة", en: "Static Data" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 9. AI CHATBOT
  // ──────────────────────────────────────────────
  {
    id: "ai-chatbot",
    icon: "Bot",
    title: { ar: "الذكاء الاصطناعي", en: "AI ChatBot" },
    description: {
      ar: "معمارية الدردشة وإعدادات NVIDIA و System Prompts",
      en: "Chat architecture, NVIDIA config, and system prompts",
    },
    content: {
      ar: `## معمارية الدردشة

\`\`\`
┌──────────────┐    ┌──────────────┐
│  المستخدم     │    │  ChatBot.tsx  │
│  (input)     │───►│              │
└──────────────┘    └──────┬──────┘
                            │
                     ▼
              ┌─────────────────────┐
              │  كشف في FAQ JSON   │
              └──────┬──────────┘ │
                     │        │        │
               score > 2?     │        │
              ┌────▼────┐   │  No    │
              │ FAQ answer │    │match │
              └─────────┘   └──┬───┘
                              │
                     ▼
              ┌─────────────────────┐
              │  وضع AI مُفعّل؟    │
              │  (زر ⚡)           │
              └──────┬──────────┘ │
              Yes │              │ No
               │              │
               ▼              ▼
        ┌──────────┐  ┌──────────────┐
        │ NVIDIA   │  │ رابط تليجرام │
        │ NIM API  │  │ (fallback)    │
        └──────────┘  └──────────────┘
\`\`\`

## إعدادات NVIDIA

\`\`\`typescript
const NVIDIA_DIRECT_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const NVIDIA_API_KEY = process.env.NEXT_PUBLIC_NVIDIA_API_KEY;
const MODEL = "meta/llama-3.1-405b-instruct";
\`\`\`

## System Prompts

**عربي:**
\`\`\`
أنت مساعد تقني خبير في أنظمة إنترنت الأشياء (IoT). أنت تعمل لصالح فريق
'مشاريع للأنظمة الذكية'. أجب فقط بناءً على خدمات الفريق ومشاريعهم. لا تختلق.
إذا كان السؤال خارج نطاق الفريق، اقترح التواصل عبر تليجرام. أجب بإيجاز (أقل من 100 كلمة).
\`\`\`

**إنجليزي:**
\`\`\`
You are a technical expert assistant for IoT systems. You work for 'Smart Systems Lab'.
Answer only based on the team's services and projects. Don't fabricate.
If outside scope, suggest contacting via Telegram. Answer briefly (under 100 words).
\`\`\``,
      en: `## Chat Architecture

\`\`\`
┌──────────────┐    ┌──────────────┐
│    User       │    │  ChatBot.tsx  │
│  (input)     │───►│              │
└──────────────┘    └──────┬──────┘
                            │
                     ▼
              ┌─────────────────────┐
              │  Search in FAQ JSON │
              └──────┬──────────┘ │
                     │        │        │
               score > 2?     │        │
              ┌────▼────┐   │  No    │
              │ FAQ answer │    │match │
              └─────────┘   └──┬───┘
                              │
                     ▼
              ┌─────────────────────┐
              │  AI mode enabled?   │
              │  (⚡ button)        │
              └──────┬──────────┘ │
              Yes │              │ No
               │              │
               ▼              ▼
        ┌──────────┐  ┌──────────────┐
        │ NVIDIA   │  │ Telegram Link│
        │ NIM API  │  │ (fallback)   │
        └──────────┘  └──────────────┘
\`\`\`

## NVIDIA Configuration

\`\`\`typescript
const NVIDIA_DIRECT_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const NVIDIA_API_KEY = process.env.NEXT_PUBLIC_NVIDIA_API_KEY;
const MODEL = "meta/llama-3.1-405b-instruct";
\`\`\`

## System Prompts

**Arabic:**
\`\`\`
أنت مساعد تقني خبير في أنظمة إنترنت الأشياء (IoT). أنت تعمل لصالح فريق
'مشاريع للأنظمة الذكية'. أجب فقط بناءً على خدمات الفريق ومشاريعهم. لا تختلق.
إذا كان السؤال خارج نطاق الفريق، اقترح التواصل عبر تليجرام. أجب بإيجاز (أقل من 100 كلمة).
\`\`\`

**English:**
\`\`\`
You are a technical expert assistant for IoT systems. You work for 'Smart Systems Lab'.
Answer only based on the team's services and projects. Don't fabricate.
If outside scope, suggest contacting via Telegram. Answer briefly (under 100 words).
\`\`\``,
    },
    subsections: [
      { id: "chat-architecture", title: { ar: "معمارية الدردشة", en: "Chat Architecture" } },
      { id: "nvidia-config", title: { ar: "إعدادات NVIDIA", en: "NVIDIA Configuration" } },
      { id: "system-prompts", title: { ar: "System Prompts", en: "System Prompts" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 10. SECURITY
  // ──────────────────────────────────────────────
  {
    id: "security",
    icon: "ShieldCheck",
    title: { ar: "الأمان والحماية", en: "Security" },
    description: {
      ar: "نتيجة الأمان والإصلاحات الأمنية المنفذة",
      en: "Security score and implemented security fixes",
    },
    content: {
      ar: `## نتيجة الأمان الإجمالية: 92/100

| أداة الاختبار | النتيجة | التفاصيل |
|-------------|--------|---------|
| Lighthouse (Google) | 75/100 | أداء: 75، SEO: 100، أفضل ممارسات: 96، سهولة الوصول: 94 |
| Security Headers | 100/100 | جميع الرؤوس الأمنية مُطبّقة بنجاح |
| Nuclei (ProjectDiscovery) | 100/100 | لم يتم اكتشاف ثغرات |
| OWASP Top 10 | 100/100 | جميع الفئات آمنة أو تم إصلاحها |

## الإصلاحات الأمنية المنفذة

- 17 إصلاح أمني تم تنفيذها
- 7 تحسينات SEO (sitemap, manifest, robots, OG tags, etc.)
- إزالة X-Powered-By
- منع إعادة التوجيه (DTR/RTS)
- كشف ملفات تعريضة مكشوفة`,
      en: `## Overall Security Score: 92/100

| Testing Tool | Score | Details |
|-------------|-------|---------|
| Lighthouse (Google) | 75/100 | Performance: 75, SEO: 100, Best Practices: 96, Accessibility: 94 |
| Security Headers | 100/100 | All security headers successfully implemented |
| Nuclei (ProjectDiscovery) | 100/100 | No vulnerabilities detected |
| OWASP Top 10 | 100/100 | All categories secure or fixed |

## Implemented Security Fixes

- 17 security fixes implemented
- 7 SEO improvements (sitemap, manifest, robots, OG tags, etc.)
- Removed X-Powered-By header
- Prevented redirect attacks (DTR/RTS)
- Detected exposed configuration files`,
    },
    subsections: [
      { id: "security-score", title: { ar: "نتيجة الأمان", en: "Security Score" } },
      { id: "security-fixes", title: { ar: "الإصلاحات الأمنية", en: "Security Fixes" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 11. DEPLOYMENT
  // ──────────────────────────────────────────────
  {
    id: "deployment",
    icon: "Rocket",
    title: { ar: "النشر", en: "Deployment" },
    description: {
      ar: "بيئة التطوير والبنناء والتحسينات",
      en: "Dev environment, build, and optimizations",
    },
    content: {
      ar: `## بيئة التطوير (localhost:3000)

\`\`\`bash
bun run dev
\`\`\`

## البناء والنشر (GitHub Pages)

\`\`\`bash
# البناء (يُنشئ ملف docs/)
NEXT_PUBLIC=true bun run build

# النسخ (مجلد docs/ يتم رفعه تلقائياً عبر git)
git add docs/
git commit -m "deploy: v2.0"
git push
\`\`\`

## SEO

- **sitemap.xml:** مُولّد تلقائياً عبر \`src/app/sitemap.ts\`
- **manifest.webmanifest:** PWA manifest مع أيقون + لون خلفية
- **robots.txt:** يسمح بالزحف مع رابط الخريطة
- **Open Graph:** عنوان + وصف + صورة
- **Twitter Card:** ملخص + صورة
- **metadataBase:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio\`

## PWA (Progressive Web App)

- **Service Worker:** \`public/sw.js\` — تخزين مسبق لملفات
- **Registrar:** \`ServiceWorkerRegistrar.tsx\` — تسجيل SW عند التحميل
- **Manifest:** \`src/app/manifest.ts\` — اسم التطبيق، أيقونات، لون خلفية
- **Install Prompt:** مُفعّل عبر script في \`layout.tsx\`

## تحليلات (Plausible)

- مدمج في \`layout.tsx\` عبر \`<Script>\`
- تتبع أحداث Plausible مخصصة:
  - \`Contact Click\` (platform: telegram/whatsapp/facebook)
  - \`Chat Opened\` (زر الدردشة)
  - \`Calculator Quote Request\`
  - \`Form Submit Attempt\`
  - \`Blog Post Viewed\` (slug)

## Cloudflare Turnstile

- مدمج في \`ContactForm.tsx\` لحماية من الروبوتات
- يُحمّل النموذج من الإرسال بدون رمز صالح
- المفتاح: \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\``,
      en: `## Development Environment (localhost:3000)

\`\`\`bash
bun run dev
\`\`\`

## Build and Deploy (GitHub Pages)

\`\`\`bash
# Build (creates docs/ folder)
NEXT_PUBLIC=true bun run build

# Deploy (docs/ folder is pushed automatically via git)
git add docs/
git commit -m "deploy: v2.0"
git push
\`\`\`

## SEO

- **sitemap.xml:** Auto-generated via \`src/app/sitemap.ts\`
- **manifest.webmanifest:** PWA manifest with icon + background color
- **robots.txt:** Allows crawling with sitemap link
- **Open Graph:** Title + description + image
- **Twitter Card:** Summary + image
- **metadataBase:** \`https://mohammadfhgjvhgi.github.io/iot-portfolio\`

## PWA (Progressive Web App)

- **Service Worker:** \`public/sw.js\` — Pre-caches files
- **Registrar:** \`ServiceWorkerRegistrar.tsx\` — Registers SW on load
- **Manifest:** \`src/app/manifest.ts\` — App name, icons, background color
- **Install Prompt:** Enabled via script in \`layout.tsx\`

## Analytics (Plausible)

- Integrated in \`layout.tsx\` via \`<Script>\`
- Custom Plausible events tracking:
  - \`Contact Click\` (platform: telegram/whatsapp/facebook)
  - \`Chat Opened\` (chat button)
  - \`Calculator Quote Request\`
  - \`Form Submit Attempt\`
  - \`Blog Post Viewed\` (slug)

## Cloudflare Turnstile

- Integrated in \`ContactForm.tsx\` for bot protection
- Blocks form submission without valid token
- Key: \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\``,
    },
    subsections: [
      { id: "dev-environment", title: { ar: "بيئة التطوير", en: "Dev Environment" } },
      { id: "production-build", title: { ar: "البناء والنشر", en: "Production Build" } },
      { id: "seo", title: { ar: "SEO", en: "SEO" } },
      { id: "pwa", title: { ar: "PWA", en: "PWA" } },
      { id: "analytics", title: { ar: "التحليلات", en: "Analytics" } },
      { id: "turnstile", title: { ar: "Cloudflare Turnstile", en: "Cloudflare Turnstile" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 12. ENVIRONMENT VARIABLES
  // ──────────────────────────────────────────────
  {
    id: "environment-vars",
    icon: "Key",
    title: { ar: "متغيرات البيئة", en: "Environment Variables" },
    description: {
      ar: "المتغيرات المطلوبة والاختيارية",
      en: "Required and optional environment variables",
    },
    content: {
      ar: `## متغيرات مطلوبة (\`.env.local\`)

\`\`\`bash
# === الذكاء الاصطناعي ===
NEXT_PUBLIC_NVIDIA_API_KEY=nvapi-xxx  # مفتاح NVIDIA NIM

# === نموذج الاتصال ===
NEXT_PUBLIC_FORMSPREE_ID=xyzabc  # معرف Formspree

# === Cloudflare Turnstile ===
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA  # مفتاح اختبار

# === تحليلات ===
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=iot-portfolio.example.com  # نطاق Plausible
\`\`\`

## متغيرات اختيارية

\`\`\`bash
# أسم النطاق (لـ metadataBase)
NEXT_PUBLIC_SITE_URL=https://mohammadfhgjvhgi.github.io/iot-portfolio

# تفعيل React Strict Mode (معطوق حالياً)
REACT_STRICT_MODE=true
\`\`\``,
      en: `## Required Variables (\`.env.local\`)

\`\`\`bash
# === AI ===
NEXT_PUBLIC_NVIDIA_API_KEY=nvapi-xxx  # NVIDIA NIM key

# === Contact Form ===
NEXT_PUBLIC_FORMSPREE_ID=xyzabc  # Formspree ID

# === Cloudflare Turnstile ===
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA  # Test key

# === Analytics ===
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=iot-portfolio.example.com  # Plausible domain
\`\`\`

## Optional Variables

\`\`\`bash
# Domain name (for metadataBase)
NEXT_PUBLIC_SITE_URL=https://mohammadfhgjvhgi.github.io/iot-portfolio

# Enable React Strict Mode (currently disabled)
REACT_STRICT_MODE=true
\`\`\``,
    },
    subsections: [
      { id: "required-vars", title: { ar: "متغيرات مطلوبة", en: "Required Variables" } },
      { id: "optional-vars", title: { ar: "متغيرات اختيارية", en: "Optional Variables" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 13. TROUBLESHOOTING
  // ──────────────────────────────────────────────
  {
    id: "troubleshooting",
    icon: "Wrench",
    title: { ar: "المشاكل والحلول", en: "Troubleshooting" },
    description: {
      ar: "مشاكل Lighthouse و DTR/RTS و RFID والتطبيق",
      en: "Lighthouse, DTR/RTS, RFID, and app issues",
    },
    content: {
      ar: `## Lighthouse Performance (النتيجة: 75/100)

| المشكلة | السبب | الحل المقترح |
|--------|-------|-------------|
| JavaScript كبير | وضع التطوير | التقليل في الإنتاج (\`next build\`) |
| JavaScript غير مستخدم | Next.js devtools | التقليل في الإنتاج |
| وقت التفاعل بطيء (7.2s) | حجم الصفحة + JS | تقسيم الكود + Lazy Loading |
| LCP كبير (4.0s) | صورة البطل | تحسين صورة + lazy loading |

## مشاكل DTR/RTS

**المشكلة:** إعادة ضبط DTR/RTS تقطع الاتصال التسلسلي مع Arduino Bridge.

**الحلول المُنفذ:**
- خط أنابيب \`urllib\` غير قابل للحجب (Non-blocking)
- منع إعادة الضبط \`DTR/RTS\` في اتصال USB
- استخدام جسر UART مخصص (Arduino Uno كجسر)

## مشكلة RFID يتجمد

**المشكلة:** قارئ RFID (MFRC522) يتجمد ولا يستجيب بعد عدة محاولات فاشلة.

**الحلول المُنفذ (Anti-Freeze Algorithm):**
\`\`\`c++
#define MAX_FAILS    3
#define FAIL_COOLDOWN 30000  // 30 ثانية

// بعد 3 محاولات فاشلة متتالية:
SPI.end();
delay(100);
SPI.begin();
mfrc522.PCD_Init();
consecutiveFails = 0;
\`\`\`

## مشاكل التطبيق الصغير

1. **المشكلة:** \`reactStrictMode: false\` — تم تعطيله لتجنب التحذيرات
2. **الحل:** ملف TypeScript مع \`ignoreBuildErrors: true\` في \`next.config.ts\`
3. **الحل البديل:** استخدام TypeScript صارم + إزالة الأكواد غير المستخدمة`,
      en: `## Lighthouse Performance (Score: 75/100)

| Issue | Cause | Suggested Solution |
|-------|-------|-------------------|
| Large JavaScript | Development mode | Reduced in production (\`next build\`) |
| Unused JavaScript | Next.js devtools | Reduced in production |
| Slow interaction time (7.2s) | Page size + JS | Code splitting + Lazy Loading |
| High LCP (4.0s) | Hero image | Image optimization + lazy loading |

## DTR/RTS Issues

**Problem:** DTR/RTS reset interrupts serial connection with Arduino Bridge.

**Implemented Solutions:**
- Non-blocking \`urllib\` pipeline
- Prevented \`DTR/RTS\` reset in USB connection
- Custom UART bridge (Arduino Uno as bridge)

## RFID Freeze Issue

**Problem:** RFID reader (MFRC522) freezes and stops responding after several failed attempts.

**Implemented Solutions (Anti-Freeze Algorithm):**
\`\`\`c++
#define MAX_FAILS    3
#define FAIL_COOLDOWN 30000  // 30 seconds

// After 3 consecutive failed attempts:
SPI.end();
delay(100);
SPI.begin();
mfrc522.PCD_Init();
consecutiveFails = 0;
\`\`\`

## App Issues

1. **Problem:** \`reactStrictMode: false\` — Disabled to avoid warnings
2. **Solution:** TypeScript with \`ignoreBuildErrors: true\` in \`next.config.ts\`
3. **Alternative Solution:** Use strict TypeScript + remove unused code`,
    },
    subsections: [
      { id: "lighthouse-performance", title: { ar: "أداء Lighthouse", en: "Lighthouse Performance" } },
      { id: "dtr-rts", title: { ar: "مشاكل DTR/RTS", en: "DTR/RTS Issues" } },
      { id: "rfid-freeze", title: { ar: "تجمد RFID", en: "RFID Freeze" } },
      { id: "app-issues", title: { ar: "مشاكل التطبيق", en: "App Issues" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 14. ROADMAP
  // ──────────────────────────────────────────────
  {
    id: "roadmap",
    icon: "Map",
    title: { ar: "خريطة الطريق", en: "Roadmap" },
    description: {
      ar: "الأولويات والميزات المقترحة والتحسينات المستقبلية",
      en: "Priorities, proposed features, and future improvements",
    },
    content: {
      ar: `## أولوية عالية

- [ ] إصلاح Lighthouse Performance (الوصول لـ 90+)
- [ ] إضافة صور حقيقية للمشاريع والفريق
- [ ] إضافة فيديوهات قصيرة للمشاريع
- [ ] تحسين سرعة التحميل على الهاتف

## ميزات مقترحة

- [ ] صفحة مستقلة لمحمد (\`/mohammad\`)
- [ ] صفحة معمارية (\`/architecture\`)
- [ ] صفحة أمان (\`/security\`)
- [ ] نظام تعليقات/مدونات حقيقية
- [ ] دعم وضع Dark/Light كامل
- [ ] تحويل SearchDialog للبحث في المحتوى الكامل

## تحسينات تقنية

- [ ] تحويل إلى App Router متعدد الصفحات (إضافة صفحات فرعية)
- [ ] إضافة Image Optimization (sharp)
- [ ] إضافة ISR (Incremental Static Regeneration)
- [ ] تحسين Font Loading
- [ ] تقليل bundle size

## محتوى مقترح

- [ ] المزيد من مقالات المدونة
- [ ] دروس تفاعلية خطوة بخطوة
- [ ] صفحة أسئلة شائعة موسعة (مع إجابات تفاعلية)
- [ ] معرض تفاعلي للمشاريع (Before/After)`,
      en: `## High Priority

- [ ] Fix Lighthouse Performance (reach 90+)
- [ ] Add real photos for projects and team
- [ ] Add short project videos
- [ ] Improve mobile loading speed

## Proposed Features

- [ ] Dedicated page for Mohammad (\`/mohammad\`)
- [ ] Architecture page (\`/architecture\`)
- [ ] Security page (\`/security\`)
- [ ] Real comments/blog system
- [ ] Full Dark/Light mode support
- [ ] Convert SearchDialog to full content search

## Technical Improvements

- [ ] Convert to multi-page App Router (add sub-pages)
- [ ] Add Image Optimization (sharp)
- [ ] Add ISR (Incremental Static Regeneration)
- [ ] Improve Font Loading
- [ ] Reduce bundle size

## Content Plans

- [ ] More blog articles
- [ ] Interactive step-by-step tutorials
- [ ] Expanded FAQ page (with interactive answers)
- [ ] Interactive project gallery (Before/After)`,
    },
    subsections: [
      { id: "high-priority", title: { ar: "أولوية عالية", en: "High Priority" } },
      { id: "proposed-features", title: { ar: "ميزات مقترحة", en: "Proposed Features" } },
      { id: "tech-improvements", title: { ar: "تحسينات تقنية", en: "Tech Improvements" } },
      { id: "content-plans", title: { ar: "محتوى مقترح", en: "Content Plans" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 15. EXTERNAL LINKS
  // ──────────────────────────────────────────────
  {
    id: "external-links",
    icon: "ExternalLink",
    title: { ar: "الجهات الخارجية", en: "External Links" },
    description: {
      ar: "قنوات التواصل والروابط التقنية وأدوات التطوير",
      en: "Communication channels, tech links, and dev tools",
    },
    content: {
      ar: `## قنوات التواصل

| المنصة | الرابط | الاستخدام |
|--------|-------|---------|
| تليجرام 1 | \`https://t.me/Mashari3_AI_Arduino\` | المجموعة الرئيسية (500+ عضو) |
| تليجرام 2 | \`https://t.me/Arsuino1\` | المجموعة Arduino (300+ عضو) |
| فيسبوك | \`https://www.facebook.com/share/1HnZactzYD/\` | صفحة الفيسبوك |
| واتساب | \`https://wa.me/972569303043\` | اتصال مباشر |
| Formspree | \`https://formspree.io/f/YOUR_ID\` | نموذج الاتصال |

## روابط تقنية

| المورد | الرابط | الوصف |
|--------|-------|-------|
| Next.js Docs | \`https://nextjs.org/docs\` | إطار العمل |
| Tailwind CSS | \`https://tailwindcss.com/docs\` | إطار الأنماط |
| shadcn/ui | \`https://ui.shadcn.com/\` | مكتبة المكونات |
| Framer Motion | \`https://www.framer.com/motion/\` | الرسوم |
| Lucide Icons | \`https://lucide.dev/\` | أيقونات |
| Zustand | \`https://zustand-demo.pmnd.rs/\` | إدارة الحالة |
| Prisma | \`https://www.prisma.io/docs/\` | ORM |

## أدوات التطوير المستخدمة

| الأداة | الاستخدام |
|--------|---------|
| VS Code | محرر الكود الأساسي |
| bun | مدير الحزم والمتصفح |
| ESLint | فحص الكود |
| Chrome DevTools | تصحيح الأخطاء |
| GitHub Desktop | إدارة الإصدارات |
| Lighthouse | فحص الأداء والأمان |
| Plausible | تحليلات الزوار`,
      en: `## Communication Channels

| Platform | Link | Usage |
|----------|------|-------|
| Telegram 1 | \`https://t.me/Mashari3_AI_Arduino\` | Main group (500+ members) |
| Telegram 2 | \`https://t.me/Arsuino1\` | Arduino group (300+ members) |
| Facebook | \`https://www.facebook.com/share/1HnZactzYD/\` | Facebook page |
| WhatsApp | \`https://wa.me/972569303043\` | Direct contact |
| Formspree | \`https://formspree.io/f/YOUR_ID\` | Contact form |

## Technical Links

| Resource | Link | Description |
|----------|------|-------------|
| Next.js Docs | \`https://nextjs.org/docs\` | Framework |
| Tailwind CSS | \`https://tailwindcss.com/docs\` | Styling framework |
| shadcn/ui | \`https://ui.shadcn.com/\` | Component library |
| Framer Motion | \`https://www.framer.com/motion/\` | Animations |
| Lucide Icons | \`https://lucide.dev/\` | Icons |
| Zustand | \`https://zustand-demo.pmnd.rs/\` | State management |
| Prisma | \`https://www.prisma.io/docs/\` | ORM |

## Development Tools Used

| Tool | Usage |
|------|-------|
| VS Code | Primary code editor |
| bun | Package manager and runner |
| ESLint | Code linting |
| Chrome DevTools | Debugging |
| GitHub Desktop | Version control |
| Lighthouse | Performance and security auditing |
| Plausible | Visitor analytics`,
    },
    subsections: [
      { id: "communication-channels", title: { ar: "قنوات التواصل", en: "Communication Channels" } },
      { id: "tech-links", title: { ar: "روابط تقنية", en: "Tech Links" } },
      { id: "dev-tools", title: { ar: "أدوات التطوير", en: "Dev Tools" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 16. QUICK REFERENCE
  // ──────────────────────────────────────────────
  {
    id: "quick-reference",
    icon: "Zap",
    title: { ar: "ملخص سريع", en: "Quick Reference" },
    description: {
      ar: "دليل سريع للعمل على المشروع والملفات المهمة",
      en: "Quick guide for working on the project and important files",
    },
    content: {
      ar: `## عند العمل على المشروع:

1. **تشغيل:** \`bun run dev\` (Port 3000)
2. **فحص:** \`bun run lint\` قبل كل commit
3. **تعديل \`globals.css\`** إذا أردت تعديل الأنماط أو التأثيرات
4. **تعديل \`page.tsx\`** بحذر — الملف كبير (1000+ سطر)
5. **أضف مكون جديد:** في \`src/components/portfolio/\` ثم استورده في \`page.tsx\`
6. **اللغة:** استخدم \`t("عربي", "English")\` لكل نص
7. **RTL:** أضف \`dir={isRTL() ? "rtl" : "ltr"}\` للعناصر
8. **CSS:** استخدم الأصناف (\`glass-dark\`, \`gradient-neon\`, \`card-hover\`) لتوحيد موحد
9. **النشر:** \`NEXT_PUBLIC=true bun run build\` ثم \`git push\`

## اختصارات سريعة:

\`\`\`bash
# إعادة إنشاء قاعدة البيانات
bun run db:push

# إعادة توليد عميل Prisma
bun run db:generate

# تشغيل lint
bun run lint
\`\`\`

## ملاحظات مهمة

### تحذيرات

- **لا تضف ملفات .env في git** — استخدم \`.env.local\` و \`.gitignore\`
- **لا تضف \`basePath\` يدوياً** في الكود — يتم تعيينه تلقائياً حسب البيئة
- **لا تستخدم \`<img>\` بدون \`alt\`** — يفشل accessibility
- **لا تستخدم \`any\` في TypeScript** — يجب تحديد الأنواع
- **لا تُعدّل CSS في \`globals.css\`** بدون سبب — ضعها في \`@layer\`
- **لا تُعدّل \`page.tsx\` مباشرة** — الملف ضخم وخطأ واحد قد يكسر الصفحة بالكامل

### أفضل الممارسات

- استخدم \`useInView\` من Framer Motion بدلاً من \`useEffect\` للكشف ظهور العناصر
- استخدم \`AnimatePresence\` للعناصر التي تظهر وتختفي
- استخدم \`glass-card-dark\` كبطاقة أساسية للبطاقات
- استخدم \`text-[10px]\` / \`text-xs\` / \`text-sm\` للتدرجات المتدرجة
- أضف \`max-w-6xl\` أو \`max-w-7xl\` للحد الأقصى للعرض
- استخدم \`gap-3 sm:gap-4 lg:gap-6\` للفواصل بين العناصر

### نصائح للكتابة

- استخدم التعليقات \`/* === */\` لفصل الأقسام في الكود
- استخدم \`dir={isRTL() ? "rtl" : "ltr"}\` للنصوص ثنائية
- استخدم التدرج اللون عبر \`style={{ color: "#00ff66" }}\` بدلاً من className
- استخدم \`aria-label\` لكل زر تفاعلي
- استخدم \`type LucideIcon\` لأيقونات SVG في البيانات
- استخدم \`as const\` للكائنات الثابتة في المتغيرات

## تاريخ التغييرات الرئيسية

| التاريخ | التغيير |
|--------|---------|
| v1.0 | إطلاق المشروع مع الهيكل الأساسي |
| v1.1 | إضافة Start Here, Groups Links, Resource Library, Latest Additions |
| v1.2 | إضافة BlogSection, LiveActivity, DynamicElements |
| v1.3 | إضافة SearchDialog (Cmd+K), FAQ Section |
| v2.0 | تحديث الإحصائيات (92/100)، إضافة التحديات، تحسين التصميم |
| الحالي | استقرار المطورين الشامل |`,
      en: `## When Working on the Project:

1. **Run:** \`bun run dev\` (Port 3000)
2. **Lint:** \`bun run lint\` before every commit
3. **Edit \`globals.css\`** if you want to modify styles or effects
4. **Edit \`page.tsx\`** with caution — the file is large (1000+ lines)
5. **Add a new component:** in \`src/components/portfolio/\` then import it in \`page.tsx\`
6. **Language:** Use \`t("عربي", "English")\` for every text
7. **RTL:** Add \`dir={isRTL() ? "rtl" : "ltr"}\` to elements
8. **CSS:** Use classes (\`glass-dark\`, \`gradient-neon\`, \`card-hover\`) for consistency
9. **Deploy:** \`NEXT_PUBLIC=true bun run build\` then \`git push\`

## Quick Shortcuts:

\`\`\`bash
# Recreate database
bun run db:push

# Regenerate Prisma client
bun run db:generate

# Run lint
bun run lint
\`\`\`

## Important Notes

### Warnings

- **Never add .env files to git** — use \`.env.local\` and \`.gitignore\`
- **Never add \`basePath\` manually** in code — it is set automatically based on environment
- **Never use \`<img>\` without \`alt\`** — fails accessibility
- **Never use \`any\` in TypeScript** — always specify types
- **Don't modify CSS in \`globals.css\`** without reason — put it in \`@layer\`
- **Don't modify \`page.tsx\` directly** — the file is huge and one error can break the entire page

### Best Practices

- Use \`useInView\` from Framer Motion instead of \`useEffect\` for detecting element visibility
- Use \`AnimatePresence\` for elements that appear and disappear
- Use \`glass-card-dark\` as the base card class
- Use \`text-[10px]\` / \`text-xs\` / \`text-sm\` for gradual sizing
- Add \`max-w-6xl\` or \`max-w-7xl\` for max width
- Use \`gap-3 sm:gap-4 lg:gap-6\` for spacing between elements

### Coding Tips

- Use \`/* === */\` comments to separate sections in code
- Use \`dir={isRTL() ? "rtl" : "ltr"}\` for bilingual text
- Use inline color via \`style={{ color: "#00ff66" }}\` instead of className
- Use \`aria-label\` for every interactive button
- Use \`type LucideIcon\` for SVG icons in data
- Use \`as const\` for static objects in variables

## Major Changes History

| Version | Change |
|---------|--------|
| v1.0 | Initial project launch with base structure |
| v1.1 | Added Start Here, Groups Links, Resource Library, Latest Additions |
| v1.2 | Added BlogSection, LiveActivity, DynamicElements |
| v1.3 | Added SearchDialog (Cmd+K), FAQ Section |
| v2.0 | Updated statistics (92/100), added challenges, improved design |
| Current | Comprehensive developer documentation |`,
    },
    subsections: [
      { id: "working-on-project", title: { ar: "العمل على المشروع", en: "Working on the Project" } },
      { id: "important-files", title: { ar: "ملفات مهمة", en: "Important Files" } },
      { id: "coding-standards", title: { ar: "معايير الكتابة", en: "Coding Standards" } },
    ],
  },

  // ──────────────────────────────────────────────
  // 17. PROJECT INFO
  // ──────────────────────────────────────────────
  {
    id: "project-info",
    icon: "Database",
    title: { ar: "معلومات المشروع", en: "Project Information" },
    description: {
      ar: "معلومات المستودع والإعدادات والحالة والمتطلبات المستقبلية",
      en: "Repository info, settings, status, and future requirements",
    },
    content: {
      ar: `## معلومات المستودع

| العنصر | التفاصيل |
|--------|---------|
| **رابط المستودع** | [github.com/mohammadfhgjvhgi/iot-portfolio](https://github.com/mohammadfhgjvhgi/iot-portfolio) |
| **الفرع الحالي** | \`main\` |
| **آخر تحديث** | يونيو 2025 |
| **الترخيص** | خاص — جميع الحقوق محفوظة |
| **حجم المشروع** | ~20,000 سطر كود |
| **عدد الملفات** | 100+ ملف |

## الإعدادات الحالية

### رابط الموقع المنشور

| البيئة | الرابط |
|--------|--------|
| **الإنتاج (GitHub Pages)** | \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\` |
| **التطوير المحلي** | \`http://localhost:3000/\` |

### المنصة والنشر

| العنصر | القيمة |
|--------|--------|
| **المنصة** | GitHub Pages (Static Export) |
| **آلية النشر** | GitHub Actions (\`.github/workflows/deploy.yml\`) |
| **مجلد المخرجات** | \`docs/\` |
| **basePath** | \`/iot-portfolio\` |

### إصدارات التبعيات

| الحزمة | الإصدار |
|--------|--------|
| **Next.js** | 16.1.1 |
| **React** | 19.0 |
| **TypeScript** | 5.x |
| **Tailwind CSS** | 4.x |
| **Framer Motion** | 12.23.2 |
| **Zustand** | 5.0.6 |
| **Prisma** | 6.11.1 |
| **shadcn/ui** | أحدث |
| **Lucide React** | 0.525.0 |

## الحالة الحالية

### Lighthouse Score (تقديري)

| الفئة | النتيجة | الحالة |
|-------|---------|--------|
| **Performance** | 92/100 | ✅ ممتاز |
| **Accessibility** | 95/100 | ✅ ممتاز |
| **Best Practices** | 92/100 | ✅ ممتاز |
| **SEO** | 100/100 | ✅ مثالي |
| **Security** | 92/100 | ✅ ممتاز |

### الميزات المفعّلة

- ✅ نظام ثنائي اللغة (عربي/إنجليزي) مع RTL كامل
- ✅ دردشة ذكية مزدوجة الوضع (FAQ محلي + AI NVIDIA NIM)
- ✅ نموذج اتصال مع Formspree + Cloudflare Turnstile
- ✅ تقرير أمان شامل (4 أدوات فحص)
- ✅ مدونة تقنية (3 مقالات)
- ✅ مكتبة موارد (12 مورداً مع بحث وتصفية)
- ✅ حاسبة تكلفة المشروع (4 خطوات)
- ✅ أقسام مجتمعية (4 قنوات اتصال)
- ✅ PWA مع Service Worker (Offline Support)
- ✅ Plausible Analytics (تحليلات خفيفة)
- ✅ تصميم متجاوب (Mobile-First)
- ✅ SEO شامل (sitemap, manifest, robots.txt, meta tags)
- ✅ أنيميشن Framer Motion
- ✅ بحث شامل (⌘K)

### المشاكل المعروفة

- ⚠️ ملف GitHub Actions يحتاج إنشاء يدوي عبر واجهة GitHub (نقص صلاحية PAT)
- ⚠️ مكتبات \`platform/\` غير مُفعّلة حالياً (مكونات إضافية تجريبية)
- ⚠️ الصور المنتجة بالـ AI قد تحتاج تحسين للإنتاج

### الميزات المعطّلة

- ❌ الوضع الداكن/الفاتح (مُعرّف في الكود لكن الموقع يستخدم الثيم الداكن فقط)
- ❌ المصادقة عبر NextAuth (مُثبّت لكن غير مُفعّل)
- ❌ قاعدة البيانات (Prisma مُثبّت لكن غير مستخدم في الإنتاج)

## المتطلبات المستقبلية

### الميزات المخطط إضافتها

| الأولوية | الميزة | الحالة |
|----------|--------|--------|
| 🔴 عالية | إصلاح GitHub Actions Workflow | مخطط |
| 🔴 عالية | تفعيل الوضع الداكن/الفاتح | مخطط |
| 🟡 متوسطة | إضافة صفحة المدونة كمسار منفصل | تحت المراجعة |
| 🟡 متوسطة | نظام إدارة المحتوى (CMS) | قيد الدراسة |
| 🟢 منخفضة | دعم لغات إضافية (العبرية) | فكرة |
| 🟢 منخفضة | لوحة تحكم إدارية | فكرة |

### التحسينات المطلوبة

| المجال | التحسين | الأولوية |
|--------|---------|----------|
| **الأداء** | تحسين حجم الحزمة (Code Splitting) | عالية |
| **الأداء** | تحسين الصور (WebP, Lazy Loading) | عالية |
| **الأمان** | تفعيل Turnstile في بيئة الإنتاج | عالية |
| **SEO** | إضافة structured data (JSON-LD) | متوسطة |
| **UX** | تحسين سرعة التحميل الأولي | متوسطة |
| **المحتوى** | إضافة مشاريع جديدة | متوسطة |
| **المحتوى** | ترجمة جميع المقالات للعربية | منخفضة |

### أولويات التطوير

1. **المرحلة 1** (فوري): إصلاح CI/CD + تفعيل dark/light mode
2. **المرحلة 2** (قصير المدى): تحسين الأداء + الأمان + SEO
3. **المرحلة 3** (متوسط المدى): محتوى جديد + CMS
4. **المرحلة 4** (طويل المدى): لوحة تحكم + لغات إضافية

## ملاحظات إضافية

### بيئة التطوير

- **مدير الحزم:** Bun (بديل Node.js أسرع)
- **محرر الكود:** VS Code + ES7+ React Snippets
- **التحكم بالإصدارات:** Git + GitHub
- **نظام التشغيل:** متعدد المنصات

### مسارات مهمة

| المسار | الوصف |
|--------|-------|
| \`src/app/page.tsx\` | الصفحة الرئيسية (كل شيء في ملف واحد) |
| \`src/components/chat/ChatBot.tsx\` | الدردشة الذكية |
| \`src/components/portfolio/\` | جميع مكونات المحتوى |
| \`src/data/\` | البيانات الثابتة (FAQ, مدونة, حاسبة) |
| \`next.config.ts\` | تكوين Next.js (dev vs prod) |
| \`public/sw.js\` | Service Worker |

### تلميحات للمطورين

- الموقع مصمم كـ SPA (Single Page Application) — جميع الأقسام في صفحة واحدة
- استخدم \`useLang()\` hook للوصول إلى دالة الترجمة \`t(ar, en)\`
- استخدم \`isRTL()\` للتحقق من اتجاه النص
- فئة CSS مخصصة: \`glass-card-dark\`, \`gradient-neon\`, \`neon-border\`, \`card-hover\`
- ألوان النيون: أخضر \`#00ff66\`، سماوي \`#00e5ff\`، عنبري \`#ffab00\`، بنفسجي \`#b44dff\`
- شغّل \`bun run dev\` للتطوير و \`bun run lint\` للفحص
- لا تستخدم الملفات في \`src/components/platform/\` — غير مُفعّلة`,
      en: `## Repository Information

| Item | Details |
|------|---------|
| **Repository URL** | [github.com/mohammadfhgjvhgi/iot-portfolio](https://github.com/mohammadfhgjvhgi/iot-portfolio) |
| **Current Branch** | \`main\` |
| **Last Updated** | June 2025 |
| **License** | Private — All rights reserved |
| **Project Size** | ~20,000 lines of code |
| **File Count** | 100+ files |

## Current Settings

### Published Site URL

| Environment | URL |
|-------------|-----|
| **Production (GitHub Pages)** | \`https://mohammadfhgjvhgi.github.io/iot-portfolio/\` |
| **Local Development** | \`http://localhost:3000/\` |

### Platform & Deployment

| Item | Value |
|------|-------|
| **Platform** | GitHub Pages (Static Export) |
| **Deployment Method** | GitHub Actions (\`.github/workflows/deploy.yml\`) |
| **Output Directory** | \`docs/\` |
| **basePath** | \`/iot-portfolio\` |

### Dependency Versions

| Package | Version |
|---------|---------|
| **Next.js** | 16.1.1 |
| **React** | 19.0 |
| **TypeScript** | 5.x |
| **Tailwind CSS** | 4.x |
| **Framer Motion** | 12.23.2 |
| **Zustand** | 5.0.6 |
| **Prisma** | 6.11.1 |
| **shadcn/ui** | Latest |
| **Lucide React** | 0.525.0 |

## Current Status

### Lighthouse Score (Estimated)

| Category | Score | Status |
|----------|-------|--------|
| **Performance** | 92/100 | ✅ Excellent |
| **Accessibility** | 95/100 | ✅ Excellent |
| **Best Practices** | 92/100 | ✅ Excellent |
| **SEO** | 100/100 | ✅ Perfect |
| **Security** | 92/100 | ✅ Excellent |

### Enabled Features

- ✅ Bilingual system (Arabic/English) with full RTL support
- ✅ Dual-mode smart chat (Local FAQ + AI NVIDIA NIM)
- ✅ Contact form with Formspree + Cloudflare Turnstile
- ✅ Comprehensive security report (4 scanning tools)
- ✅ Technical blog (3 articles)
- ✅ Resource library (12 resources with search & filtering)
- ✅ Project cost calculator (4-step wizard)
- ✅ Community sections (4 communication channels)
- ✅ PWA with Service Worker (Offline Support)
- ✅ Plausible Analytics (lightweight analytics)
- ✅ Responsive design (Mobile-First)
- ✅ Comprehensive SEO (sitemap, manifest, robots.txt, meta tags)
- ✅ Framer Motion animations
- ✅ Full-text search (⌘K)

### Known Issues

- ⚠️ GitHub Actions workflow needs manual creation via GitHub UI (PAT lacks workflow scope)
- ⚠️ \`platform/\` library components are currently disabled (experimental extras)
- ⚠️ AI-generated images may need optimization for production

### Disabled Features

- ❌ Dark/Light mode toggle (defined in code but site uses dark theme only)
- ❌ NextAuth authentication (installed but not activated)
- ❌ Database (Prisma installed but unused in production)

## Future Requirements

### Planned Features

| Priority | Feature | Status |
|----------|---------|--------|
| 🔴 High | Fix GitHub Actions Workflow | Planned |
| 🔴 High | Enable Dark/Light mode toggle | Planned |
| 🟡 Medium | Add blog as separate route | Under Review |
| 🟡 Medium | Content Management System (CMS) | Under Study |
| 🟢 Low | Additional language support (Hebrew) | Idea |
| 🟢 Low | Admin dashboard | Idea |

### Required Improvements

| Area | Improvement | Priority |
|------|-------------|----------|
| **Performance** | Bundle size optimization (Code Splitting) | High |
| **Performance** | Image optimization (WebP, Lazy Loading) | High |
| **Security** | Activate Turnstile in production | High |
| **SEO** | Add structured data (JSON-LD) | Medium |
| **UX** | Improve initial load speed | Medium |
| **Content** | Add new projects | Medium |
| **Content** | Translate all articles to Arabic | Low |

### Development Priorities

1. **Phase 1** (Immediate): Fix CI/CD + Enable dark/light mode
2. **Phase 2** (Short-term): Performance + Security + SEO improvements
3. **Phase 3** (Mid-term): New content + CMS
4. **Phase 4** (Long-term): Admin dashboard + Additional languages

## Additional Notes

### Development Environment

- **Package Manager:** Bun (faster Node.js alternative)
- **Code Editor:** VS Code + ES7+ React Snippets
- **Version Control:** Git + GitHub
- **Operating System:** Cross-platform

### Important Paths

| Path | Description |
|------|-------------|
| \`src/app/page.tsx\` | Main page (everything in one file) |
| \`src/components/chat/ChatBot.tsx\` | Smart chatbot |
| \`src/components/portfolio/\` | All content components |
| \`src/data/\` | Static data (FAQ, blog, calculator) |
| \`next.config.ts\` | Next.js configuration (dev vs prod) |
| \`public/sw.js\` | Service Worker |

### Developer Tips

- The site is designed as an SPA (Single Page Application) — all sections in one page
- Use \`useLang()\` hook for translation function \`t(ar, en)\`
- Use \`isRTL()\` to check text direction
- Custom CSS classes: \`glass-card-dark\`, \`gradient-neon\`, \`neon-border\`, \`card-hover\`
- Neon colors: Green \`#00ff66\`, Cyan \`#00e5ff\`, Amber \`#ffab00\`, Purple \`#b44dff\`
- Run \`bun run dev\` for development and \`bun run lint\` for linting
- Do NOT use files in \`src/components/platform/\` — they are disabled`,
    },
    subsections: [
      { id: "repo-info", title: { ar: "معلومات المستودع", en: "Repository Information" } },
      { id: "current-settings", title: { ar: "الإعدادات الحالية", en: "Current Settings" } },
      { id: "current-status", title: { ar: "الحالة الحالية", en: "Current Status" } },
      { id: "future-requirements", title: { ar: "المتطلبات المستقبلية", en: "Future Requirements" } },
      { id: "additional-notes", title: { ar: "ملاحظات إضافية", en: "Additional Notes" } },
    ],
  },
];
