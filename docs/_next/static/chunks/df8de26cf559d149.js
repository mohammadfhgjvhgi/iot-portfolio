(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={assign:function(){return c},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return s}};for(var o in i)Object.defineProperty(a,o,{enumerable:!0,get:i[o]});function r(e){let t={};for(let[a,i]of e.entries()){let e=t[a];void 0===e?t[a]=i:Array.isArray(e)?e.push(i):t[a]=[e,i]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[a,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(a,n(e));else t.set(a,n(i));return t}function c(e,...t){for(let a of t){for(let t of a.keys())e.delete(t);for(let[t,i]of a.entries())e.append(t,i)}return e}},95057,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={formatUrl:function(){return s},formatWithValidation:function(){return l},urlObjectKeys:function(){return c}};for(var o in i)Object.defineProperty(a,o,{enumerable:!0,get:i[o]});let r=e.r(90809)._(e.r(98183)),n=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:a}=e,i=e.protocol||"",o=e.pathname||"",s=e.hash||"",c=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:a&&(l=t+(~a.indexOf(":")?`[${a}]`:a),e.port&&(l+=":"+e.port)),c&&"object"==typeof c&&(c=String(r.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||n.test(i))&&!1!==l?(l="//"+(l||""),o&&"/"!==o[0]&&(o="/"+o)):l||(l=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${l}${o}${d}${s}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return s(e)}},18581,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return o}});let i=e.r(71645);function o(e,t){let a=(0,i.useRef)(null),o=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=a.current;e&&(a.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(a.current=r(e,i)),t&&(o.current=r(t,i))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},18967,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return P},MissingStaticPage:function(){return v},NormalizeError:function(){return y},PageNotFoundError:function(){return S},SP:function(){return h},ST:function(){return f},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return l},getURL:function(){return d},isAbsoluteUrl:function(){return c},isResSent:function(){return p},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return A}};for(var o in i)Object.defineProperty(a,o,{enumerable:!0,get:i[o]});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,a=!1;return(...i)=>(a||(a=!0,t=e(...i)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>s.test(e);function l(){let{protocol:e,hostname:t,port:a}=window.location;return`${e}//${t}${a?":"+a:""}`}function d(){let{href:e}=window.location,t=l();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let a=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(a&&p(a))return i;if(!i)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return i}let h="u">typeof performance,f=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class y extends Error{}class S extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class P extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function A(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return r}});let i=e.r(18967),o=e.r(52817);function r(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),a=new URL(e,t);return a.origin===t&&(0,o.hasBasePath)(a.pathname)}catch(e){return!1}}},84508,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={default:function(){return b},useLinkStatus:function(){return S}};for(var o in i)Object.defineProperty(a,o,{enumerable:!0,get:i[o]});let r=e.r(90809),n=e.r(18050),s=r._(e.r(71645)),c=e.r(95057),l=e.r(8372),d=e.r(18581),u=e.r(18967),p=e.r(5550);e.r(33525);let m=e.r(91949),g=e.r(73668),h=e.r(9396);function f(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}function b(t){var a;let i,o,r,[c,b]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),S=(0,s.useRef)(null),{href:v,as:P,children:A,prefetch:C=null,passHref:x,replace:I,shallow:k,scroll:T,onClick:w,onMouseEnter:R,onTouchStart:L,legacyBehavior:D=!1,onNavigate:M,ref:E,unstable_dynamicOnHover:N,...j}=t;i=A,D&&("string"==typeof i||"number"==typeof i)&&(i=(0,n.jsx)("a",{children:i}));let O=s.default.useContext(l.AppRouterContext),F=!1!==C,_=!1!==C?null===(a=C)||"auto"===a?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:B,as:U}=s.default.useMemo(()=>{let e=f(v);return{href:e,as:P?f(P):e}},[v,P]);if(D){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(i)}let G=D?o&&"object"==typeof o&&o.ref:E,H=s.default.useCallback(e=>(null!==O&&(S.current=(0,m.mountLinkInstance)(e,B,O,_,F,b)),()=>{S.current&&((0,m.unmountLinkForCurrentNavigation)(S.current),S.current=null),(0,m.unmountPrefetchableInstance)(e)}),[F,B,O,_,b]),V={ref:(0,d.useMergedRef)(H,G),onClick(t){D||"function"!=typeof w||w(t),D&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!O||t.defaultPrevented||function(t,a,i,o,r,n,c){if("u">typeof window){let l,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((l=t.currentTarget.getAttribute("target"))&&"_self"!==l||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(a)){r&&(t.preventDefault(),location.replace(a));return}if(t.preventDefault(),c){let e=!1;if(c({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(i||a,r?"replace":"push",n??!0,o.current)})}}(t,B,U,S,I,T,M)},onMouseEnter(e){D||"function"!=typeof R||R(e),D&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),O&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===N)},onTouchStart:function(e){D||"function"!=typeof L||L(e),D&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),O&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===N)}};return(0,u.isAbsoluteUrl)(U)?V.href=U:D&&!x&&("a"!==o.type||"href"in o.props)||(V.href=(0,p.addBasePath)(U)),r=D?s.default.cloneElement(o,V):(0,n.jsx)("a",{...j,...V,children:i}),(0,n.jsx)(y.Provider,{value:c,children:r})}e.r(84508);let y=(0,s.createContext)(m.IDLE_LINK_STATUS),S=()=>(0,s.useContext)(y);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},55436,e=>{"use strict";let t=(0,e.i(75254).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);e.s(["Search",()=>t],55436)},48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",()=>t],48256)},8621,95603,e=>{"use strict";let t=(0,e.i(68834).create)(e=>({activeSection:"",sidebarOpen:!1,searchOpen:!1,readSections:new Set,expandedSections:new Set,theme:"dark",setActiveSection:t=>e(e=>({activeSection:t,readSections:new Set([...e.readSections,t])})),toggleSidebar:()=>e(e=>({sidebarOpen:!e.sidebarOpen})),setSidebarOpen:t=>e({sidebarOpen:t}),toggleSearch:()=>e(e=>({searchOpen:!e.searchOpen})),setSearchOpen:t=>e({searchOpen:t}),markSectionRead:t=>e(e=>({readSections:new Set([...e.readSections,t])})),toggleSectionExpanded:t=>e(e=>{let a=new Set(e.expandedSections);return a.has(t)?a.delete(t):a.add(t),{expandedSections:a}}),toggleTheme:()=>e(e=>{let t="dark"===e.theme?"light":"dark";return"u">typeof document&&(document.documentElement.classList.toggle("dark","dark"===t),localStorage.setItem("guide-theme",t)),{theme:t}}),setTheme:t=>e({theme:t})}));e.s(["useGuideStore",0,t],8621);let a=[{id:"overview",icon:"Globe",title:{ar:"نظرة عامة على المشروع",en:"Project Overview"},description:{ar:"تعرف على المشروع وفريق العمل والإحصائيات",en:"Learn about the project, team, and statistics"},content:{ar:`## ما هو المشروع؟

**مشاريع للأنظمة الذكية** (Smart Systems Lab) هو موقع إلكتروني بورتفوليو احترافي لفريق هندسي من فلسطين يعمل في مجال إنترنت الأشياء (IoT) والأتمتة الذكية. الموقع يعرض:

- **4 مشاريع IoT حقيقية** منفذة بأنظمة متعددة المعالجات
- **6 خدمات** رئيسية يقدمها الفريق
- **نظام ثنائي اللغة** (العربية والإنجليزية) مع دعم كامل لـ RTL
- **دردشة ذكية** بوضعين: محلي (FAQ) + ذكاء اصطناعي (NVIDIA NIM)
- **تقرير أمان** شامل مع نتيجة 92/100
- **مدونة تقنية** مع مقالات مفصلة
- **دليل مطور شامل** مع 17 قسماً متعدد الصفحات

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
| مكونات shadcn/ui | 55+ |`,en:`## What is the Project?

**Smart Systems Lab** is a professional portfolio website for an engineering team from Palestine working in the field of Internet of Things (IoT) and smart automation. The website showcases:

- **4 real IoT projects** implemented with multi-processor systems
- **6 main services** offered by the team
- **Bilingual system** (Arabic and English) with full RTL support
- **Smart chatbot** with two modes: local (FAQ) + AI (NVIDIA NIM)
- **Comprehensive security report** with a score of 92/100
- **Technical blog** with detailed articles
- **Comprehensive developer guide** with 17 multi-page sections

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
| shadcn/ui Components | 55+ |`},subsections:[{id:"what-is-project",title:{ar:"ما هو المشروع؟",en:"What is the Project?"}},{id:"team",title:{ar:"فريق العمل",en:"Team"}},{id:"links",title:{ar:"الرابط المباشر",en:"Direct Link"}},{id:"stats",title:{ar:"الإحصائيات",en:"Statistics"}}]},{id:"architecture",icon:"LayoutDashboard",title:{ar:"الهيكل التقني والبنية",en:"Technical Structure"},description:{ar:"بنية المجلدات والمعمارية وخريطة المسارات",en:"Directory structure, architecture, and route map"},content:{ar:`## بنية المجلدات

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
│   │   ├── page.tsx          # الصفحة الرئيسية (دليل المطور، ~520 سطر)
│   │   ├── manifest.ts       # PWA manifest
│   │   ├── sitemap.ts        # خريطة الموقع SEO
│   │   ├── not-found.tsx     # صفحة 404
│   │   ├── api/              # API Routes
│   │   │   ├── route.ts      # API رئيسي
│   │   │   ├── contact/route.ts
│   │   │   ├── ai-chat/route.ts
│   │   │   ├── search/route.ts
│   │   │   └── newsletter/route.ts
│   │   └── docs/
│   │       └── [slug]/
│   │           ├── page.tsx  # صفحة الوثائق (generateStaticParams)
│   │           └── DocsClientPage.tsx
│   ├── components/
│   │   ├── chat/
│   │   │   └── ChatBot.tsx   # الدردشة الذكية (FAQ + NVIDIA AI)
│   │   ├── guide/
│   │   │   ├── Sidebar.tsx       # الشريط الجانبي للدليل
│   │   │   ├── SearchDialog.tsx  # بحث Cmd+K
│   │   │   ├── GuideRenderer.tsx # محلل Markdown للدليل
│   │   │   └── AnimatedCounter.tsx # عداد متحرك
│   │   ├── layout/
│   │   │   ├── SiteLayout.tsx  # التخطيط العام (رأس + تذييل + شريط جانبي)
│   │   │   ├── SiteHeader.tsx  # رأس الصفحة
│   │   │   └── SiteFooter.tsx  # تذييل الصفحة
│   │   ├── ServiceWorkerRegistrar.tsx
│   │   └── ui/               # مكونات shadcn/ui (55+ مكون)
│   ├── data/
│   │   ├── guide-sections.ts # بيانات أقسام الدليل (17 قسماً)
│   │   └── faq.json          # بيانات الشات (18 سؤال)
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   └── lib/
│       ├── db.ts             # عميل Prisma
│       ├── language.ts       # إدارة اللغة (Zustand)
│       ├── guide-store.ts    # حالة الدليل (Zustand)
│       ├── icon-map.tsx      # خريطة الأيقونات
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
          │  │ App Router   │  │  ← Multi-page routing
          │  │  Components │  │
          │  │  ┌────────┐ │  │
          │  │  │layout/ │ │  │  ← SiteLayout, SiteHeader, SiteFooter
          │  │  │guide/  │ │  │  ← Sidebar, GuideRenderer, SearchDialog
          │  │  │chat    │ │  │  ← ChatBot
          │  │  │ui/     │ │  │  ← shadcn/ui (55+)
          │  │  └────────┘ │  │
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │ State/Store  │  │  ← Zustand (language + guide theme)
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  Data Files  │  │  ← guide-sections.ts, faq.json
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  API Routes  │  │  ← contact, ai-chat, search, newsletter
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

## خريطة المسارات (Route Map)

الموقع يستخدم Next.js App Router مع مسارات متعددة:

| الصفحة | المسار | المكون/الملف |
|-------|--------|-------------|
| الرئيسية (الدليل) | \`/\` | \`src/app/page.tsx\` |
| صفحة الوثائق | \`/docs/[slug]\` | \`src/app/docs/[slug]/page.tsx\` |
| صفحة 404 | \`/404\` | \`src/app/not-found.tsx\` |
| API - اتصال | \`/api/contact\` | \`src/app/api/contact/route.ts\` |
| API - دردشة AI | \`/api/ai-chat\` | \`src/app/api/ai-chat/route.ts\` |
| API - بحث | \`/api/search\` | \`src/app/api/search/route.ts\` |
| API - نشرة | \`/api/newsletter\` | \`src/app/api/newsletter/route.ts\` |

صفحات الدليل تُولّد تلقائياً عبر \`generateStaticParams\` من \`guideSections\` (17 صفحة).`,en:`## Directory Structure

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
│   │   ├── page.tsx          # Home page (developer guide landing, ~520 lines)
│   │   ├── manifest.ts       # PWA manifest
│   │   ├── sitemap.ts        # SEO sitemap
│   │   ├── not-found.tsx     # 404 page
│   │   ├── api/              # API Routes
│   │   │   ├── route.ts      # Main API route
│   │   │   ├── contact/route.ts
│   │   │   ├── ai-chat/route.ts
│   │   │   ├── search/route.ts
│   │   │   └── newsletter/route.ts
│   │   └── docs/
│   │       └── [slug]/
│   │           ├── page.tsx  # Docs page (generateStaticParams)
│   │           └── DocsClientPage.tsx
│   ├── components/
│   │   ├── chat/
│   │   │   └── ChatBot.tsx   # Smart chat (FAQ + NVIDIA AI)
│   │   ├── guide/
│   │   │   ├── Sidebar.tsx       # Guide sidebar navigation
│   │   │   ├── SearchDialog.tsx  # Cmd+K search
│   │   │   ├── GuideRenderer.tsx # Markdown renderer for guide
│   │   │   └── AnimatedCounter.tsx # Animated counter
│   │   ├── layout/
│   │   │   ├── SiteLayout.tsx  # Overall layout (header + footer + sidebar)
│   │   │   ├── SiteHeader.tsx  # Page header
│   │   │   └── SiteFooter.tsx  # Page footer
│   │   ├── ServiceWorkerRegistrar.tsx
│   │   └── ui/               # shadcn/ui components (55+)
│   ├── data/
│   │   ├── guide-sections.ts # Guide section data (17 sections)
│   │   └── faq.json          # Chat data (18 questions)
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   └── lib/
│       ├── db.ts             # Prisma client
│       ├── language.ts       # Language management (Zustand)
│       ├── guide-store.ts    # Guide state (Zustand)
│       ├── icon-map.tsx      # Icon mapping
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
          │  │ App Router   │  │  ← Multi-page routing
          │  │  Components │  │
          │  │  ┌────────┐ │  │
          │  │  │layout/ │ │  │  ← SiteLayout, SiteHeader, SiteFooter
          │  │  │guide/  │ │  │  ← Sidebar, GuideRenderer, SearchDialog
          │  │  │chat    │ │  │  ← ChatBot
          │  │  │ui/     │ │  │  ← shadcn/ui (55+)
          │  │  └────────┘ │  │
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │ State/Store  │  │  ← Zustand (language + guide theme)
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  Data Files  │  │  ← guide-sections.ts, faq.json
          │  └──────────────┘  │
          │                    │
          │  ┌──────────────┐  │
          │  │  API Routes  │  │  ← contact, ai-chat, search, newsletter
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

## Route Map

The site uses Next.js App Router with multiple routes:

| Page | Route | Component/File |
|------|-------|----------------|
| Home (Guide Landing) | \`/\` | \`src/app/page.tsx\` |
| Docs Page | \`/docs/[slug]\` | \`src/app/docs/[slug]/page.tsx\` |
| 404 Page | \`/404\` | \`src/app/not-found.tsx\` |
| API - Contact | \`/api/contact\` | \`src/app/api/contact/route.ts\` |
| API - AI Chat | \`/api/ai-chat\` | \`src/app/api/ai-chat/route.ts\` |
| API - Search | \`/api/search\` | \`src/app/api/search/route.ts\` |
| API - Newsletter | \`/api/newsletter\` | \`src/app/api/newsletter/route.ts\` |

Guide pages are auto-generated via \`generateStaticParams\` from \`guideSections\` (17 pages).`},subsections:[{id:"directory-structure",title:{ar:"بنية المجلدات",en:"Directory Structure"}},{id:"system-architecture",title:{ar:"البنية المعمارية",en:"System Architecture"}},{id:"route-map",title:{ar:"خريطة المسارات",en:"Route Map"}}]},{id:"technologies",icon:"Cpu",title:{ar:"التقنيات والمكتبات",en:"Tech Stack"},description:{ar:"التقنيات والمكتبات وأدوات التطوير المستخدمة",en:"Technologies, libraries, and development tools used"},content:{ar:`## الحزمة التقنية

| التقنية | الإصدار | الاستخدام |
|---------|--------|----------|
| **Next.js** | 16.1.1 | إطار العمل الرئيسي (App Router) |
| **React** | 19.0 | مكتبة واجهة المستخدم |
| **TypeScript** | 5 | لغة البرمجة |
| **Tailwind CSS** | 4 | إطار الأنماط |
| **Framer Motion** | 12.23.2 | الرسوم والانتقالات |
| **Zustand** | 5.0.6 | إدارة الحالة (لغة + سمة الدليل) |
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
\`\`\``,en:`## Core Stack

| Technology | Version | Usage |
|-----------|---------|-------|
| **Next.js** | 16.1.1 | Main framework (App Router) |
| **React** | 19.0 | UI library |
| **TypeScript** | 5 | Programming language |
| **Tailwind CSS** | 4 | Styling framework |
| **Framer Motion** | 12.23.2 | Animations and transitions |
| **Zustand** | 5.0.6 | State management (language + guide theme) |
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
\`\`\``},subsections:[{id:"core-stack",title:{ar:"الحزمة التقنية",en:"Core Stack"}},{id:"additional-libraries",title:{ar:"المكتبات الإضافية",en:"Additional Libraries"}},{id:"dev-tools",title:{ar:"أدوات التطوير",en:"Dev Tools"}}]},{id:"configuration",icon:"Settings",title:{ar:"التكوين والنشر",en:"Configuration & Deployment"},description:{ar:"تكوين Next.js ورؤوس الأمان وسياسة المحتوى",en:"Next.js config, security headers, and content policy"},content:{ar:`## تكوين Next.js (\`next.config.ts\`)

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
\`\`\``,en:`## Next.js Configuration (\`next.config.ts\`)

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
\`\`\``},subsections:[{id:"next-config",title:{ar:"تكوين Next.js",en:"Next.js Configuration"}},{id:"security-headers",title:{ar:"رؤوس الأمان",en:"Security Headers"}},{id:"content-security-policy",title:{ar:"سياسة أمان المحتوى",en:"Content Security Policy"}}]},{id:"design",icon:"Palette",title:{ar:"التصميم والأنماط",en:"UI/UX Design"},description:{ar:"نظام الألوان والتأثيرات البصرية والأنيميشن",en:"Color system, visual effects, and animations"},content:{ar:`## نظام الألوان (Color System)

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
| الأقسام الداخلية | py-12 | py-16 | py-20 | - | - |`,en:`## Color System

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
| Section padding | py-12 | py-16 | py-20 | - | - |`},subsections:[{id:"color-system",title:{ar:"نظام الألوان",en:"Color System"}},{id:"visual-effects",title:{ar:"التأثيرات البصرية",en:"Visual Effects"}},{id:"animations",title:{ar:"الأنيميشن",en:"Animations"}},{id:"led-indicators",title:{ar:"مؤشرات LED",en:"LED Indicators"}},{id:"responsive-design",title:{ar:"نظام الاستجابة",en:"Responsive Design"}}]},{id:"components",icon:"Layers",title:{ar:"قائمة المكونات",en:"Components"},description:{ar:"مكونات التخطيط والدليل والشات و shadcn/ui",en:"Layout, guide, chatbot, and shadcn/ui components"},content:{ar:`## مكونات التخطيط (\`layout/\`)

| المكون | الملف | الوصف |
|--------|------|-------|
| **SiteLayout** | \`layout/SiteLayout.tsx\` | التخطيط العام الذي يغلف كل الصفحات — يتضمن SiteHeader + الشريط الجانبي + SiteFooter + ChatBot |
| **SiteHeader** | \`layout/SiteHeader.tsx\` | رأس الصفحة مع تبديل اللغة، زر البحث ⌘K، وتبديل السمة (داكن/فاتح) |
| **SiteFooter** | \`layout/SiteFooter.tsx\` | تذييل الصفحة مع روابط سريعة ومعلومات حقوق النشر |

## مكونات الدليل (\`guide/\`)

| المكون | الملف | الوصف |
|--------|------|-------|
| **Sidebar** | \`guide/Sidebar.tsx\` | الشريط الجانبي للتنقل بين أقسام الدليل الـ 17، مع دعم ثنائي اللغة وتتبع القسم النشط |
| **SearchDialog** | \`guide/SearchDialog.tsx\` | حوار البحث السريع ⌘K — يبحث في عناوين الأقسام والمحتوى |
| **GuideRenderer** | \`guide/GuideRenderer.tsx\` | محلل محتوى Markdown — يحول المحتوى النصي لكل من العربية والإنجليزية إلى HTML مع تنسيق الجداول والأكواد |
| **AnimatedCounter** | \`guide/AnimatedCounter.tsx\` | عداد متحرك للأرقام — يستخدم في الصفحة الرئيسية لإحصائيات المشاريع والأمان والمكونات |

## مكون الدردشة (\`chat/\`)

**الملف:** \`chat/ChatBot.tsx\`

**وضعان مزدوج:**

1. **الوضع المحلي (FAQ):**
   - يطابق كلمات المستخدم مع 18 سؤال مُعرّف في \`src/data/faq.json\`
   - خوارزمية مطابقة تعتمد على طول الكلمة \xd7 2 (أهمية الكلمة)
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

## مكونات أخرى

| المكون | الملف | الوصف |
|--------|------|-------|
| **ServiceWorkerRegistrar** | \`ServiceWorkerRegistrar.tsx\` | تسجيل Service Worker لتفعيل PWA و Offline Support |

## مكونات الصفحة الرئيسية

الصفحة الرئيسية (\`src/app/page.tsx\`) هي صفحة هبوط الدليل (~520 سطر) وتتضمن:
- قسم Hero مع عنوان الدليل وإحصائيات متحركة (17 قسماً، 4+ مشاريع، 92/100 أمان)
- شبكة روابط سريعة لاستكشاف الأقسام (9 أقسام مميزة)
- بطاقات المميزات (ثنائي اللغة، داكن، بحث ⌘K، متجاوب)
- لوحة معلومات المشروع (معلومات المستودع، Lighthouse، النشر)
- بطاقة الميزات المفعّلة (14 ميزة)
- خارطة الطريق (4 مراحل)

## مكونات UI (shadcn/ui)

مُثبّت 55+ مكون من مكتبة shadcn/ui في \`src/components/ui/\`. تشمل:
- Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge
- Breadcrumb, Button, Calendar, Card, Carousel, Chart
- Checkbox, Collapsible, Command, ContextMenu, Dialog
- DropdownMenu, Drawer, Form, HoverCard, Input, InputOTP
- Label, Menubar, NavigationMenu, Pagination, Popover, Progress
- RadioGroup, Resizable, ScrollArea, Search (Command), Select
- Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (Toast), Switch
- Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip`,en:`## Layout Components (\`layout/\`)

| Component | File | Description |
|-----------|------|-------------|
| **SiteLayout** | \`layout/SiteLayout.tsx\` | Overall layout wrapping all pages — includes SiteHeader + Sidebar + SiteFooter + ChatBot |
| **SiteHeader** | \`layout/SiteHeader.tsx\` | Page header with language toggle, ⌘K search button, and theme toggle (dark/light) |
| **SiteFooter** | \`layout/SiteFooter.tsx\` | Page footer with quick links and copyright info |

## Guide Components (\`guide/\`)

| Component | File | Description |
|-----------|------|-------------|
| **Sidebar** | \`guide/Sidebar.tsx\` | Sidebar navigation for the 17 guide sections, with bilingual support and active section tracking |
| **SearchDialog** | \`guide/SearchDialog.tsx\` | Quick search dialog ⌘K — searches across section titles and content |
| **GuideRenderer** | \`guide/GuideRenderer.tsx\` | Markdown content renderer — converts text content for both Arabic and English to formatted HTML with tables and code blocks |
| **AnimatedCounter** | \`guide/AnimatedCounter.tsx\` | Animated number counter — used on the home page for project, security, and component statistics |

## Chat Component (\`chat/\`)

**File:** \`chat/ChatBot.tsx\`

**Dual Mode:**

1. **Local Mode (FAQ):**
   - Matches user words with 18 questions defined in \`src/data/faq.json\`
   - Matching algorithm based on word length \xd7 2 (word importance)
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

## Other Components

| Component | File | Description |
|-----------|------|-------------|
| **ServiceWorkerRegistrar** | \`ServiceWorkerRegistrar.tsx\` | Registers Service Worker for PWA and Offline Support |

## Home Page Components

The home page (\`src/app/page.tsx\`) is a guide landing page (~520 lines) that includes:
- Hero section with guide title and animated statistics (17 sections, 4+ projects, 92/100 security)
- Quick links grid to explore sections (9 featured sections)
- Feature cards (Bilingual, Dark, Search ⌘K, Responsive)
- Project information dashboard (repo info, Lighthouse, deployment)
- Enabled features card (14 active features)
- Roadmap (4 phases)

## UI Components (shadcn/ui)

55+ components from shadcn/ui installed in \`src/components/ui/\`. Includes:
- Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge
- Breadcrumb, Button, Calendar, Card, Carousel, Chart
- Checkbox, Collapsible, Command, ContextMenu, Dialog
- DropdownMenu, Drawer, Form, HoverCard, Input, InputOTP
- Label, Menubar, NavigationMenu, Pagination, Popover, Progress
- RadioGroup, Resizable, ScrollArea, Search (Command), Select
- Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (Toast), Switch
- Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip`},subsections:[{id:"layout-components",title:{ar:"مكونات التخطيط",en:"Layout Components"}},{id:"guide-components",title:{ar:"مكونات الدليل",en:"Guide Components"}},{id:"chatbot-component",title:{ar:"مكون الدردشة",en:"ChatBot Component"}},{id:"ui-components",title:{ar:"مكونات UI",en:"UI Components"}}]},{id:"state-management",icon:"Database",title:{ar:"إدارة الحالة",en:"State Management"},description:{ar:"نظام اللغة، حالة الدليل، ودعم RTL والخطوط",en:"Language system, guide state, RTL support, and fonts"},content:{ar:`## نظام اللغة — Zustand Store

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

## حالة الدليل — Zustand Store

**الملف:** \`src/lib/guide-store.ts\`

يدير حالة الدليل بما في ذلك:
- **السمة (Theme):** \`'dark' | 'light'\` — يتحكم بالسمة البصرية للدليل
- **القسم النشط:** تتبع القسم الحالي المعروض

\`\`\`typescript
const { theme } = useGuideStore();
const isLight = theme === "light";
\`\`\`

## خريطة الأيقونات

**الملف:** \`src/lib/icon-map.tsx\`

يربط أسماء الأيقونات (string) بمكونات Lucide React الفعلية. يُستخدم في الشريط الجانبي والصفحة الرئيسية لعرض أيقونات الأقسام ديناميكياً.

\`\`\`typescript
import { SectionIcon } from "@/lib/icon-map";
<SectionIcon name="Globe" className="h-5 w-5" />
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
- \`display: swap\` للأداء`,en:`## Language System — Zustand Store

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

## Guide State — Zustand Store

**File:** \`src/lib/guide-store.ts\`

Manages guide state including:
- **Theme:** \`'dark' | 'light'\` — controls the visual theme of the guide
- **Active Section:** tracks the currently displayed section

\`\`\`typescript
const { theme } = useGuideStore();
const isLight = theme === "light";
\`\`\`

## Icon Map

**File:** \`src/lib/icon-map.tsx\`

Maps icon names (string) to actual Lucide React components. Used in the sidebar and home page to dynamically render section icons.

\`\`\`typescript
import { SectionIcon } from "@/lib/icon-map";
<SectionIcon name="Globe" className="h-5 w-5" />
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
- \`display: swap\` for performance`},subsections:[{id:"language-system",title:{ar:"نظام اللغة",en:"Language System"}},{id:"guide-state",title:{ar:"حالة الدليل",en:"Guide State"}},{id:"rtl-support",title:{ar:"دعم RTL/LTR",en:"RTL/LTR Support"}},{id:"fonts",title:{ar:"الخطوط",en:"Fonts"}}]},{id:"database",icon:"Database",title:{ar:"قاعدة البيانات",en:"Database"},description:{ar:"مخطط Prisma واتصال قاعدة البيانات والبيانات الثابتة",en:"Prisma schema, DB connection, and static data"},content:{ar:`## المخطط (\`prisma/schema.prisma\`)

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

## البيانات الثابتة

| الملف | المحتوى | الاستخدام |
|------|---------|---------|
| \`src/data/guide-sections.ts\` | 17 قسم دليل مع محتوى ثنائي اللغة | بيانات الدليل وتوليد الصفحات |
| \`src/data/faq.json\` | 18 سؤال مع كلمات مفتاحية | مصدر بيانات الشات |`,en:`## Schema (\`prisma/schema.prisma\`)

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

## Static Data

| File | Content | Usage |
|------|---------|-------|
| \`src/data/guide-sections.ts\` | 17 guide sections with bilingual content | Guide data and page generation |
| \`src/data/faq.json\` | 18 questions with keywords | Chatbot data source |`},subsections:[{id:"prisma-schema",title:{ar:"مخطط Prisma",en:"Prisma Schema"}},{id:"db-connection",title:{ar:"الاتصال بقاعدة البيانات",en:"Database Connection"}},{id:"static-data",title:{ar:"البيانات الثابتة",en:"Static Data"}}]},{id:"ai-chatbot",icon:"Bot",title:{ar:"الذكاء الاصطناعي",en:"AI ChatBot"},description:{ar:"معمارية الدردشة وإعدادات NVIDIA و System Prompts",en:"Chat architecture, NVIDIA config, and system prompts"},content:{ar:`## معمارية الدردشة

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
\`\`\``,en:`## Chat Architecture

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
\`\`\``},subsections:[{id:"chat-architecture",title:{ar:"معمارية الدردشة",en:"Chat Architecture"}},{id:"nvidia-config",title:{ar:"إعدادات NVIDIA",en:"NVIDIA Configuration"}},{id:"system-prompts",title:{ar:"System Prompts",en:"System Prompts"}}]},{id:"security",icon:"ShieldCheck",title:{ar:"الأمان والحماية",en:"Security"},description:{ar:"نتيجة الأمان والإصلاحات الأمنية المنفذة",en:"Security score and implemented security fixes"},content:{ar:`## نتيجة الأمان الإجمالية: 92/100

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
- كشف ملفات تعريضة مكشوفة`,en:`## Overall Security Score: 92/100

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
- Detected exposed configuration files`},subsections:[{id:"security-score",title:{ar:"نتيجة الأمان",en:"Security Score"}},{id:"security-fixes",title:{ar:"الإصلاحات الأمنية",en:"Security Fixes"}}]},{id:"deployment",icon:"Rocket",title:{ar:"النشر",en:"Deployment"},description:{ar:"بيئة التطوير والبنناء والتحسينات",en:"Dev environment, build, and optimizations"},content:{ar:`## بيئة التطوير (localhost:3000)

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

- مدمج في نموذج الاتصال لحماية من الروبوتات
- يُحمّل النموذج من الإرسال بدون رمز صالح
- المفتاح: \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\``,en:`## Development Environment (localhost:3000)

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

- Integrated in the contact form for bot protection
- Blocks form submission without valid token
- Key: \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\``},subsections:[{id:"dev-environment",title:{ar:"بيئة التطوير",en:"Dev Environment"}},{id:"production-build",title:{ar:"البناء والنشر",en:"Production Build"}},{id:"seo",title:{ar:"SEO",en:"SEO"}},{id:"pwa",title:{ar:"PWA",en:"PWA"}},{id:"analytics",title:{ar:"التحليلات",en:"Analytics"}},{id:"turnstile",title:{ar:"Cloudflare Turnstile",en:"Cloudflare Turnstile"}}]},{id:"environment-vars",icon:"Key",title:{ar:"متغيرات البيئة",en:"Environment Variables"},description:{ar:"المتغيرات المطلوبة والاختيارية",en:"Required and optional environment variables"},content:{ar:`## متغيرات مطلوبة (\`.env.local\`)

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
\`\`\``,en:`## Required Variables (\`.env.local\`)

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
\`\`\``},subsections:[{id:"required-vars",title:{ar:"متغيرات مطلوبة",en:"Required Variables"}},{id:"optional-vars",title:{ar:"متغيرات اختيارية",en:"Optional Variables"}}]},{id:"troubleshooting",icon:"Wrench",title:{ar:"المشاكل والحلول",en:"Troubleshooting"},description:{ar:"مشاكل Lighthouse و DTR/RTS و RFID والتطبيق",en:"Lighthouse, DTR/RTS, RFID, and app issues"},content:{ar:`## Lighthouse Performance (النتيجة: 75/100)

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
3. **الحل البديل:** استخدام TypeScript صارم + إزالة الأكواد غير المستخدمة`,en:`## Lighthouse Performance (Score: 75/100)

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
3. **Alternative Solution:** Use strict TypeScript + remove unused code`},subsections:[{id:"lighthouse-performance",title:{ar:"أداء Lighthouse",en:"Lighthouse Performance"}},{id:"dtr-rts",title:{ar:"مشاكل DTR/RTS",en:"DTR/RTS Issues"}},{id:"rfid-freeze",title:{ar:"تجمد RFID",en:"RFID Freeze"}},{id:"app-issues",title:{ar:"مشاكل التطبيق",en:"App Issues"}}]},{id:"roadmap",icon:"Map",title:{ar:"خريطة الطريق",en:"Roadmap"},description:{ar:"الأولويات والميزات المقترحة والتحسينات المستقبلية",en:"Priorities, proposed features, and future improvements"},content:{ar:`## أولوية عالية

- [ ] إصلاح Lighthouse Performance (الوصول لـ 90+)
- [ ] إضافة صور حقيقية للمشاريع والفريق
- [ ] إضافة فيديوهات قصيرة للمشاريع
- [ ] تحسين سرعة التحميل على الهاتف

## ميزات مقترحة

- [ ] صفحة مستقلة لمحمد (\`/mohammad\`)
- [ ] صفحة معمارية (\`/architecture\`)
- [ ] صفحة أمان (\`/security\`)
- [ ] نظام تعليقات/مدونات حقيقية
- [x] دعم وضع Dark/Light كامل
- [ ] تحويل SearchDialog للبحث في المحتوى الكامل

## تحسينات تقنية

- [x] تحويل إلى App Router متعدد الصفحات (تم: \`/docs/[slug]\`)
- [ ] إضافة Image Optimization (sharp)
- [ ] إضافة ISR (Incremental Static Regeneration)
- [ ] تحسين Font Loading
- [ ] تقليل bundle size

## محتوى مقترح

- [ ] المزيد من مقالات المدونة
- [ ] دروس تفاعلية خطوة بخطوة
- [ ] صفحة أسئلة شائعة موسعة (مع إجابات تفاعلية)
- [ ] معرض تفاعلي للمشاريع (Before/After)`,en:`## High Priority

- [ ] Fix Lighthouse Performance (reach 90+)
- [ ] Add real photos for projects and team
- [ ] Add short project videos
- [ ] Improve mobile loading speed

## Proposed Features

- [ ] Dedicated page for Mohammad (\`/mohammad\`)
- [ ] Architecture page (\`/architecture\`)
- [ ] Security page (\`/security\`)
- [ ] Real comments/blog system
- [x] Full Dark/Light mode support
- [ ] Convert SearchDialog to full content search

## Technical Improvements

- [x] Convert to multi-page App Router (done: \`/docs/[slug]\`)
- [ ] Add Image Optimization (sharp)
- [ ] Add ISR (Incremental Static Regeneration)
- [ ] Improve Font Loading
- [ ] Reduce bundle size

## Content Plans

- [ ] More blog articles
- [ ] Interactive step-by-step tutorials
- [ ] Expanded FAQ page (with interactive answers)
- [ ] Interactive project gallery (Before/After)`},subsections:[{id:"high-priority",title:{ar:"أولوية عالية",en:"High Priority"}},{id:"proposed-features",title:{ar:"ميزات مقترحة",en:"Proposed Features"}},{id:"tech-improvements",title:{ar:"تحسينات تقنية",en:"Tech Improvements"}},{id:"content-plans",title:{ar:"محتوى مقترح",en:"Content Plans"}}]},{id:"external-links",icon:"ExternalLink",title:{ar:"الجهات الخارجية",en:"External Links"},description:{ar:"قنوات التواصل والروابط التقنية وأدوات التطوير",en:"Communication channels, tech links, and dev tools"},content:{ar:`## قنوات التواصل

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
| Plausible | تحليلات الزوار`,en:`## Communication Channels

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
| Plausible | Visitor analytics`},subsections:[{id:"communication-channels",title:{ar:"قنوات التواصل",en:"Communication Channels"}},{id:"tech-links",title:{ar:"روابط تقنية",en:"Tech Links"}},{id:"dev-tools",title:{ar:"أدوات التطوير",en:"Dev Tools"}}]},{id:"quick-reference",icon:"Zap",title:{ar:"ملخص سريع",en:"Quick Reference"},description:{ar:"دليل سريع للعمل على المشروع والملفات المهمة",en:"Quick guide for working on the project and important files"},content:{ar:`## عند العمل على المشروع:

1. **تشغيل:** \`bun run dev\` (Port 3000)
2. **فحص:** \`bun run lint\` قبل كل commit
3. **تعديل \`globals.css\`** إذا أردت تعديل الأنماط أو التأثيرات
4. **تعديل الصفحة الرئيسية:** \`src/app/page.tsx\` (~520 سطر، صفحة هبوط الدليل)
5. **أضف مكون جديد:** في \`src/components/layout/\` أو \`src/components/guide/\` ثم استورده
6. **تعديل محتوى الدليل:** \`src/data/guide-sections.ts\` (17 قسم)
7. **اللغة:** استخدم \`t("عربي", "English")\` لكل نص
8. **RTL:** أضف \`dir={isRTL() ? "rtl" : "ltr"}\` للعناصر
9. **CSS:** استخدم الأصناف (\`glass-dark\`, \`gradient-neon\`, \`card-hover\`) لتوحيد موحد
10. **النشر:** \`NEXT_PUBLIC=true bun run build\` ثم \`git push\`

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
| v2.1 | إعادة هيكلة: إزالة portfolio/ و platform/، إضافة layout/ و guide/، تحويل إلى App Router متعدد الصفحات (/docs/[slug])، دليل المطور الشامل (17 قسم) |`,en:`## When Working on the Project:

1. **Run:** \`bun run dev\` (Port 3000)
2. **Lint:** \`bun run lint\` before every commit
3. **Edit \`globals.css\`** if you want to modify styles or effects
4. **Edit the home page:** \`src/app/page.tsx\` (~520 lines, guide landing page)
5. **Add a new component:** in \`src/components/layout/\` or \`src/components/guide/\` then import it
6. **Edit guide content:** \`src/data/guide-sections.ts\` (17 sections)
7. **Language:** Use \`t("عربي", "English")\` for every text
8. **RTL:** Add \`dir={isRTL() ? "rtl" : "ltr"}\` to elements
9. **CSS:** Use classes (\`glass-dark\`, \`gradient-neon\`, \`card-hover\`) for consistency
10. **Deploy:** \`NEXT_PUBLIC=true bun run build\` then \`git push\`

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
| v2.1 | Refactored: removed portfolio/ and platform/, added layout/ and guide/, converted to multi-page App Router (/docs/[slug]), comprehensive developer guide (17 sections) |`},subsections:[{id:"working-on-project",title:{ar:"العمل على المشروع",en:"Working on the Project"}},{id:"important-files",title:{ar:"ملفات مهمة",en:"Important Files"}},{id:"coding-standards",title:{ar:"معايير الكتابة",en:"Coding Standards"}}]},{id:"project-info",icon:"Database",title:{ar:"معلومات المشروع",en:"Project Information"},description:{ar:"معلومات المستودع والإعدادات والحالة والمتطلبات المستقبلية",en:"Repository info, settings, status, and future requirements"},content:{ar:`## معلومات المستودع

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
- ✅ دليل مطور شامل (17 قسم متعدد الصفحات)
- ✅ بحث شامل (⌘K)
- ✅ تبديل السمة (داكن/فاتح)
- ✅ PWA مع Service Worker (Offline Support)
- ✅ Plausible Analytics (تحليلات خفيفة)
- ✅ تصميم متجاوب (Mobile-First)
- ✅ SEO شامل (sitemap, manifest, robots.txt, meta tags)
- ✅ أنيميشن Framer Motion

### المشاكل المعروفة

- ⚠️ ملف GitHub Actions يحتاج إنشاء يدوي عبر واجهة GitHub (نقص صلاحية PAT)
- ⚠️ الصور المنتجة بالـ AI قد تحتاج تحسين للإنتاج

### الميزات المعطّلة

- ❌ المصادقة عبر NextAuth (مُثبّت لكن غير مُفعّل)
- ❌ قاعدة البيانات (Prisma مُثبّت لكن غير مستخدم في الإنتاج)

## المتطلبات المستقبلية

### الميزات المخطط إضافتها

| الأولوية | الميزة | الحالة |
|----------|--------|--------|
| 🔴 عالية | إصلاح GitHub Actions Workflow | مخطط |
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

1. **المرحلة 1** (فوري): إصلاح CI/CD
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
| \`src/app/page.tsx\` | الصفحة الرئيسية (دليل المطور، ~520 سطر) |
| \`src/app/docs/[slug]/page.tsx\` | صفحات الوثائق (generateStaticParams) |
| \`src/app/docs/[slug]/DocsClientPage.tsx\` | المكون العميل لصفحات الوثائق |
| \`src/components/layout/\` | مكونات التخطيط (SiteLayout, SiteHeader, SiteFooter) |
| \`src/components/guide/\` | مكونات الدليل (Sidebar, SearchDialog, GuideRenderer, AnimatedCounter) |
| \`src/components/chat/ChatBot.tsx\` | الدردشة الذكية |
| \`src/data/guide-sections.ts\` | بيانات أقسام الدليل (17 قسم) |
| \`src/data/faq.json\` | بيانات الشات (18 سؤال) |
| \`next.config.ts\` | تكوين Next.js (dev vs prod) |
| \`public/sw.js\` | Service Worker |

### تلميحات للمطورين

- الموقع يستخدم Next.js App Router مع مسارات متعددة
- الصفحة الرئيسية هي صفحة هبوط الدليل — صفحات المحتوى في \`/docs/[slug]\`
- استخدم \`useLang()\` hook للوصول إلى دالة الترجمة \`t(ar, en)\`
- استخدم \`useGuideStore()\` hook للوصول إلى حالة الدليل والسمة
- استخدم \`isRTL()\` للتحقق من اتجاه النص
- فئة CSS مخصصة: \`glass-card-dark\`, \`gradient-neon\`, \`neon-border\`, \`card-hover\`
- ألوان النيون: أخضر \`#00ff66\`، سماوي \`#00e5ff\`، عنبري \`#ffab00\`، بنفسجي \`#b44dff\`
- شغّل \`bun run dev\` للتطوير و \`bun run lint\` للفحص`,en:`## Repository Information

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
- ✅ Comprehensive developer guide (17 multi-page sections)
- ✅ Full-text search (⌘K)
- ✅ Theme toggle (dark/light)
- ✅ PWA with Service Worker (Offline Support)
- ✅ Plausible Analytics (lightweight analytics)
- ✅ Responsive design (Mobile-First)
- ✅ Comprehensive SEO (sitemap, manifest, robots.txt, meta tags)
- ✅ Framer Motion animations

### Known Issues

- ⚠️ GitHub Actions workflow needs manual creation via GitHub UI (PAT lacks workflow scope)
- ⚠️ AI-generated images may need optimization for production

### Disabled Features

- ❌ NextAuth authentication (installed but not activated)
- ❌ Database (Prisma installed but unused in production)

## Future Requirements

### Planned Features

| Priority | Feature | Status |
|----------|---------|--------|
| 🔴 High | Fix GitHub Actions Workflow | Planned |
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

1. **Phase 1** (Immediate): Fix CI/CD
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
| \`src/app/page.tsx\` | Home page (developer guide landing, ~520 lines) |
| \`src/app/docs/[slug]/page.tsx\` | Docs pages (generateStaticParams) |
| \`src/app/docs/[slug]/DocsClientPage.tsx\` | Client component for docs pages |
| \`src/components/layout/\` | Layout components (SiteLayout, SiteHeader, SiteFooter) |
| \`src/components/guide/\` | Guide components (Sidebar, SearchDialog, GuideRenderer, AnimatedCounter) |
| \`src/components/chat/ChatBot.tsx\` | Smart chatbot |
| \`src/data/guide-sections.ts\` | Guide section data (17 sections) |
| \`src/data/faq.json\` | Chat data (18 questions) |
| \`next.config.ts\` | Next.js configuration (dev vs prod) |
| \`public/sw.js\` | Service Worker |

### Developer Tips

- The site uses Next.js App Router with multiple routes
- The home page is a guide landing page — content pages are at \`/docs/[slug]\`
- Use \`useLang()\` hook for translation function \`t(ar, en)\`
- Use \`useGuideStore()\` hook for guide state and theme
- Use \`isRTL()\` to check text direction
- Custom CSS classes: \`glass-card-dark\`, \`gradient-neon\`, \`neon-border\`, \`card-hover\`
- Neon colors: Green \`#00ff66\`, Cyan \`#00e5ff\`, Amber \`#ffab00\`, Purple \`#b44dff\`
- Run \`bun run dev\` for development and \`bun run lint\` for linting`},subsections:[{id:"repo-info",title:{ar:"معلومات المستودع",en:"Repository Information"}},{id:"current-settings",title:{ar:"الإعدادات الحالية",en:"Current Settings"}},{id:"current-status",title:{ar:"الحالة الحالية",en:"Current Status"}},{id:"future-requirements",title:{ar:"المتطلبات المستقبلية",en:"Future Requirements"}},{id:"additional-notes",title:{ar:"ملاحظات إضافية",en:"Additional Notes"}}]}];e.s(["guideSections",0,a],95603)},60289,e=>{"use strict";let t=(0,e.i(75254).default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);e.s(["LayoutDashboard",()=>t],60289)},66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",()=>t],66992)},39616,47780,e=>{"use strict";var t=e.i(75254);let a=(0,t.default)("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Settings",()=>a],39616);let i=(0,t.default)("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]);e.s(["Palette",()=>i],47780)},52008,81418,e=>{"use strict";var t=e.i(75254);let a=(0,t.default)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);e.s(["Layers",()=>a],52008);let i=(0,t.default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>i],81418)},9912,e=>{"use strict";let t=(0,e.i(75254).default)("rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);e.s(["Rocket",()=>t],9912)},95116,e=>{"use strict";let t=(0,e.i(75254).default)("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);e.s(["Wrench",()=>t],95116)},10980,e=>{"use strict";let t=(0,e.i(75254).default)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);e.s(["BookOpen",()=>t],10980)},97625,e=>{"use strict";let t=(0,e.i(75254).default)("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["Code2",()=>t],97625)},68054,e=>{"use strict";let t=(0,e.i(75254).default)("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]);e.s(["Terminal",()=>t],68054)},74875,e=>{"use strict";let t=(0,e.i(75254).default)("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["HelpCircle",()=>t],74875)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],39312)},26707,e=>{"use strict";let t=(0,e.i(75254).default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);e.s(["Smartphone",()=>t],26707)},58041,e=>{"use strict";let t=(0,e.i(75254).default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",()=>t],58041)},31245,e=>{"use strict";let t=(0,e.i(75254).default)("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);e.s(["Bot",()=>t],31245)},34161,e=>{"use strict";let t=(0,e.i(75254).default)("key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);e.s(["Key",()=>t],34161)},73526,e=>{"use strict";let t=(0,e.i(75254).default)("map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);e.s(["Map",()=>t],73526)},49044,e=>{"use strict";var t=e.i(18050),a=e.i(48256),i=e.i(60289),o=e.i(66992),r=e.i(39616),n=e.i(47780),s=e.i(52008),c=e.i(81418),l=e.i(9912),d=e.i(95116),u=e.i(10980),p=e.i(97625),m=e.i(68054),g=e.i(74875),h=e.i(39312),f=e.i(26707),b=e.i(55436),y=e.i(58041),S=e.i(31245),v=e.i(34161),P=e.i(73526);let A={Globe:a.Globe,LayoutDashboard:i.LayoutDashboard,Cpu:o.Cpu,Settings:r.Settings,Palette:n.Palette,Layers:s.Layers,ShieldCheck:c.ShieldCheck,Rocket:l.Rocket,Wrench:d.Wrench,BookOpen:u.BookOpen,Code2:p.Code2,Terminal:m.Terminal,HelpCircle:g.HelpCircle,Zap:h.Zap,Smartphone:f.Smartphone,Search:b.Search,Database:y.Database,Bot:S.Bot,Key:v.Key,Map:P.Map};function C({name:e,className:a="h-4 w-4"}){let i=A[e]||u.BookOpen;return(0,t.jsx)(i,{className:a})}e.s(["SectionIcon",()=>C])}]);