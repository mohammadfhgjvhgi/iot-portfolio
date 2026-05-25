(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/language.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLang",
    ()=>useLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        lang: 'ar',
        toggle: ()=>set((s)=>({
                    lang: s.lang === 'ar' ? 'en' : 'ar'
                })),
        setLang: (l)=>set({
                lang: l
            }),
        t: (ar, en)=>get().lang === 'ar' ? ar : en,
        isRTL: ()=>get().lang === 'ar'
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/portfolio/TeamSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cog.js [app-client] (ecmascript) <export default as Cog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circuit-board.js [app-client] (ecmascript) <export default as CircuitBoard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FOUNDERS = [
    {
        name: {
            ar: "عمار مشارقة",
            en: "Ammar Masharqa"
        },
        role: {
            ar: "مؤسس ومدير العمليات",
            en: "Co-Founder & Operations Manager"
        },
        bio: {
            ar: "الشريك المؤسس لفريق مشاريع للأنظمة الذكية. يدير الشؤون الإدارية والتواصل مع العملاء وتنسيق المشاريع. يمتلك فهمًا عامًا في مجال إنترنت الأشياء ويساهم في دعم الفريق والتنظيم اللوجستي لضمان سير العمل بسلاسة.",
            en: "Co-founder of Smart Systems Lab. Manages administration, client communications, and project coordination. Has a general understanding of IoT and contributes to team support and logistical organization to ensure smooth operations."
        },
        skills: [
            "Project Management",
            "Client Relations",
            "Team Coordination",
            "IoT Overview",
            "Content Creation"
        ],
        color: "#00ff66",
        glowColor: "#00ff6640",
        avatarIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
            lineNumber: 46,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: {
            ar: "محمد عقيلي",
            en: "Mohammad Aqli"
        },
        role: {
            ar: "المؤسس والمهندس الرئيسي",
            en: "Founder & Lead Engineer"
        },
        bio: {
            ar: "المهندس الرئيسي لفريق مشاريع للأنظمة الذكية. متخصص في تصميم الأنظمة المدمجة، تركيب القطع الإلكترونية، معرفة أنواع المتحكمات والحساسات، والبرمجة بأنواعها — من الخفيفة إلى المعقدة. يبني المنطق البرمجي على المتحكمات بمنهجية هندسية تضمن الأمان والاستقرار. خبرة واسعة في معمارية الأنظمة متعددة المعالجات والاتصال التسلسلي والتكامل مع السحابة.",
            en: "Lead engineer at Smart Systems Lab. Specializing in embedded systems design, hardware assembly, component knowledge (MCUs, sensors), and programming — from light to complex. Builds software logic for microcontrollers with engineering methodology ensuring safety and stability. Extensive experience in multi-processor architectures, serial communication, and cloud integration."
        },
        skills: [
            "Arduino",
            "ESP32/8266",
            "C/C++",
            "Hardware Design",
            "Firebase",
            "Python",
            "Assembly"
        ],
        color: "#00e5ff",
        glowColor: "#00e5ff40",
        avatarIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__["CircuitBoard"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
            lineNumber: 61,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const STATS = [
    {
        value: {
            ar: "+٤",
            en: "4+"
        },
        label: {
            ar: "مشاريع",
            en: "Projects"
        },
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__["Cog"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
            lineNumber: 81,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#00ff66",
        glowColor: "#00ff6640"
    },
    {
        value: {
            ar: "+١٠",
            en: "10+"
        },
        label: {
            ar: "حساسات",
            en: "Sensors"
        },
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#00e5ff",
        glowColor: "#00e5ff40"
    },
    {
        value: {
            ar: "+٣",
            en: "3+"
        },
        label: {
            ar: "متحكمات",
            en: "MCUs"
        },
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#ffab00",
        glowColor: "#ffab0040"
    },
    {
        value: {
            ar: "+٥",
            en: "5+"
        },
        label: {
            ar: "بروتوكولات",
            en: "Protocols"
        },
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#b44dff",
        glowColor: "#b44dff40"
    }
];
/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */ const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.15
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.96
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
const pillVariants = {
    hidden: {
        opacity: 0,
        scale: 0.7,
        y: 8
    },
    visible: (i)=>({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: i * 0.06,
                ease: "easeOut"
            }
        })
};
const statVariants = {
    hidden: {
        opacity: 0,
        y: 15,
        scale: 0.9
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: i * 0.1,
                ease: "easeOut"
            }
        })
};
/* ═══════════════════════════════════════════════════════════════
   AVATAR PLACEHOLDER — SVG with gradient + circuit icon
   ═══════════════════════════════════════════════════════════════ */ function FounderAvatar({ founder }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    boxShadow: [
                        `0 0 20px ${founder.glowColor}, 0 0 40px ${founder.glowColor}`,
                        `0 0 30px ${founder.glowColor}, 0 0 60px ${founder.glowColor}`,
                        `0 0 20px ${founder.glowColor}, 0 0 40px ${founder.glowColor}`
                    ]
                },
                transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center",
                style: {
                    background: `radial-gradient(circle, ${founder.color}18, transparent 70%)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 112 112",
                        className: "rounded-full",
                        style: {
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: `avatar-grad-${founder.color.replace("#", "")}`,
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "100%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: founder.color,
                                                stopOpacity: "0.25"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                                lineNumber: 206,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: founder.color,
                                                stopOpacity: "0.08"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#0a0f1a",
                                                stopOpacity: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                        id: `circuit-${founder.color.replace("#", "")}`,
                                        x: "0",
                                        y: "0",
                                        width: "28",
                                        height: "28",
                                        patternUnits: "userSpaceOnUse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 0 14 L 14 14 L 14 0",
                                                fill: "none",
                                                stroke: founder.color,
                                                strokeWidth: "0.5",
                                                opacity: "0.12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 14 14 L 28 14",
                                                fill: "none",
                                                stroke: founder.color,
                                                strokeWidth: "0.5",
                                                opacity: "0.12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 14 14 L 14 28",
                                                fill: "none",
                                                stroke: founder.color,
                                                strokeWidth: "0.5",
                                                opacity: "0.12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "14",
                                                cy: "14",
                                                r: "1.5",
                                                fill: founder.color,
                                                opacity: "0.15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "56",
                                cy: "56",
                                r: "56",
                                fill: "#0a0f1a"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "56",
                                cy: "56",
                                r: "55",
                                fill: `url(#avatar-grad-${founder.color.replace("#", "")})`
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "56",
                                cy: "56",
                                r: "55",
                                fill: `url(#circuit-${founder.color.replace("#", "")})`
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "56",
                                cy: "56",
                                r: "55",
                                fill: "none",
                                stroke: founder.color,
                                strokeWidth: "1.5",
                                opacity: "0.3",
                                strokeDasharray: "4 4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        style: {
                            color: founder.color
                        },
                        children: founder.avatarIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.4,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200
                },
                className: "absolute -bottom-1 left-1/2 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap",
                    style: {
                        background: `${founder.color}15`,
                        border: `1px solid ${founder.color}30`,
                        color: founder.color,
                        boxShadow: `0 0 10px ${founder.glowColor}`
                    },
                    children: "🇵🇸 Palestine"
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_c = FounderAvatar;
/* ═══════════════════════════════════════════════════════════════
   FOUNDER CARD
   ═══════════════════════════════════════════════════════════════ */ function FounderCard({ founder, index }) {
    _s();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: cardVariants,
        className: "glass-card-dark rounded-xl overflow-hidden card-hover group relative",
        style: {
            borderColor: `${founder.color}12`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full",
                style: {
                    background: `linear-gradient(90deg, transparent, ${founder.color}, ${founder.color}80, transparent)`,
                    boxShadow: `0 0 12px ${founder.glowColor}`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500",
                style: {
                    background: `radial-gradient(circle at top right, ${founder.glowColor}, transparent 70%)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 sm:p-8 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FounderAvatar, {
                        founder: founder
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg sm:text-xl font-bold leading-tight",
                                style: {
                                    color: founder.color
                                },
                                dir: isRTL() ? "rtl" : "ltr",
                                children: lang(founder.name.ar, founder.name.en)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#7a8ba8] mt-0.5 font-mono",
                                dir: "ltr",
                                children: lang(founder.name.en, founder.name.ar)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold",
                            style: {
                                background: `${founder.color}10`,
                                color: `${founder.color}dd`,
                                border: `1px solid ${founder.color}25`
                            },
                            dir: isRTL() ? "rtl" : "ltr",
                            children: lang(founder.role.ar, founder.role.en)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed mb-5 text-center",
                        dir: isRTL() ? "rtl" : "ltr",
                        children: lang(founder.bio.ar, founder.bio.en)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-px mx-auto mb-5",
                        style: {
                            background: `linear-gradient(90deg, transparent, ${founder.color}40, transparent)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-1.5 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                        className: "h-3 w-3 text-[#7a8ba8]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold",
                                        children: lang("المهارات", "Skills")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-1.5",
                                children: founder.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        custom: i,
                                        variants: pillVariants,
                                        className: "inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all duration-300 cursor-default",
                                        style: {
                                            background: `${founder.color}08`,
                                            color: `${founder.color}cc`,
                                            border: `1px solid ${founder.color}20`
                                        },
                                        whileHover: {
                                            scale: 1.08,
                                            boxShadow: `0 0 14px ${founder.glowColor}, 0 0 4px ${founder.glowColor}`,
                                            borderColor: `${founder.color}50`,
                                            background: `${founder.color}18`,
                                            color: founder.color
                                        },
                                        children: skill
                                    }, skill, false, {
                                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
_s(FounderCard, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = FounderCard;
/* ═══════════════════════════════════════════════════════════════
   TEAM STATS BAR
   ═══════════════════════════════════════════════════════════════ */ function TeamStatsBar() {
    _s1();
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: 0.55
        },
        className: "mt-8 sm:mt-10 glass-card-dark rounded-xl p-4 sm:p-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6",
            children: STATS.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    custom: i,
                    variants: statVariants,
                    initial: "hidden",
                    animate: "visible",
                    className: "flex flex-col items-center gap-2 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-9 w-9 items-center justify-center rounded-lg",
                            style: {
                                background: `${stat.color}12`,
                                border: `1px solid ${stat.color}25`,
                                boxShadow: `0 0 10px ${stat.glowColor}`,
                                color: stat.color
                            },
                            children: stat.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl sm:text-2xl font-bold font-mono",
                            style: {
                                color: stat.color
                            },
                            children: lang(stat.value.ar, stat.value.en)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] sm:text-xs text-[#7a8ba8] font-medium uppercase tracking-wider",
                            children: lang(stat.label.ar, stat.label.en)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, this)
                    ]
                }, stat.label.en, true, {
                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                    lineNumber: 448,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
            lineNumber: 446,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, this);
}
_s1(TeamStatsBar, "EB+8YGRLp3dNhYSc1KnABaj+ALA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = TeamStatsBar;
/* ═══════════════════════════════════════════════════════════════
   MISSION STATEMENT
   ═══════════════════════════════════════════════════════════════ */ function MissionStatement() {
    _s2();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 15
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: 0.7
        },
        className: "mt-6 sm:mt-8 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl p-5 sm:p-6 relative overflow-hidden",
            style: {
                background: `linear-gradient(135deg, rgba(0,255,102,0.05), rgba(0,229,255,0.03), rgba(15,22,40,0.8))`,
                border: `1px solid rgba(0,255,102,0.1)`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-10 -left-10 w-40 h-40 pointer-events-none",
                    style: {
                        background: "radial-gradient(circle, rgba(0,255,102,0.08), transparent 70%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-10 -right-10 w-40 h-40 pointer-events-none",
                    style: {
                        background: "radial-gradient(circle, rgba(0,229,255,0.06), transparent 70%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                    lineNumber: 511,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5",
                            style: {
                                background: "rgba(0,255,102,0.1)",
                                border: "1px solid rgba(0,255,102,0.2)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                className: "h-4.5 w-4.5 text-[#00ff66]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 526,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm sm:text-base font-bold mb-2 gradient-neon-text",
                                    dir: isRTL() ? "rtl" : "ltr",
                                    children: lang("رسالتنا", "Our Mission")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed",
                                    dir: isRTL() ? "rtl" : "ltr",
                                    children: lang("نؤمن بأن فلسطين قادرة على إنتاج تقنيات عالمية في مجال إنترنت الأشياء. نسعى لبناء حلول مدمجة ذكية تدمج بين العتاد والبرمجيات والسحابة — من فلسطين إلى العالم.", "We believe Palestine is capable of producing world-class IoT technologies. We strive to build intelligent embedded solutions that bridge hardware, software, and the cloud — from Palestine to the world.")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "led-on"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                            lineNumber: 548,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-[#00ff66] font-medium",
                                            children: lang("صُنع في فلسطين 🇵🇸", "Made in Palestine 🇵🇸")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                    lineNumber: 547,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                            lineNumber: 528,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                    lineNumber: 518,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/portfolio/TeamSection.tsx",
            lineNumber: 497,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
        lineNumber: 491,
        columnNumber: 5
    }, this);
}
_s2(MissionStatement, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = MissionStatement;
function TeamSection() {
    _s3();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        once: true,
        margin: "-80px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "mb-8 sm:mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#00ff6612] border border-[#00ff6625]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "h-4 w-4 text-[#00ff66]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold gradient-neon-text",
                                children: lang("فريقنا", "Our Team")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                                lineNumber: 585,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 581,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#7a8ba8] leading-relaxed",
                        children: lang("العيون التي تُصنع من فلسطين — مهندسان شغوفان بإنترنت الأشياء", "The minds behind our work — two engineers passionate about IoT")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: containerRef,
                variants: containerVariants,
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8",
                children: FOUNDERS.map((founder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FounderCard, {
                        founder: founder,
                        index: index
                    }, founder.name.en, false, {
                        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                        lineNumber: 606,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 598,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamStatsBar, {}, void 0, false, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MissionStatement, {}, void 0, false, {
                fileName: "[project]/src/components/portfolio/TeamSection.tsx",
                lineNumber: 614,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/TeamSection.tsx",
        lineNumber: 573,
        columnNumber: 5
    }, this);
}
_s3(TeamSection, "1WjLaktVxR7VZ69gCdVwA3ZUuHc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c4 = TeamSection;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "FounderAvatar");
__turbopack_context__.k.register(_c1, "FounderCard");
__turbopack_context__.k.register(_c2, "TeamStatsBar");
__turbopack_context__.k.register(_c3, "MissionStatement");
__turbopack_context__.k.register(_c4, "TeamSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/portfolio/ServicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SERVICES = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        color: "#00ff66",
        title: {
            ar: "\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0646\u0627\u0632\u0644 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064a \u0627\u0644\u0630\u0643\u064a\u0629",
            en: "Smart Home & Building Automation"
        },
        description: {
            ar: "\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0646\u0641\u064a\u0630 \u0623\u0646\u0638\u0645\u0629 \u062a\u062d\u0643\u0645 \u0630\u0643\u064a\u0629 \u0644\u0644\u0645\u0628\u0627\u0646\u064a \u062a\u0634\u0645\u0644 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062f\u062e\u0648\u0644\u060c \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0628\u064a\u0626\u064a\u0629\u060c \u0643\u0634\u0641 \u0627\u0644\u062d\u0631\u064a\u0642\u060c \u0648\u0627\u0644\u062a\u062d\u0643\u0645 \u0639\u0646 \u0628\u064f\u0639\u062f \u0639\u0628\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0647\u0627\u062a\u0641.",
            en: "Design and implementation of smart building control systems including access management, environmental monitoring, fire detection, and remote control via mobile apps."
        },
        features: [
            {
                ar: "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062f\u062e\u0648\u0644 \u0648\u0627\u0644\u062e\u0631\u0648\u062c \u0627\u0644\u0630\u0643\u064a\u0629",
                en: "Smart access & exit management"
            },
            {
                ar: "\u0643\u0634\u0641 \u0627\u0644\u062d\u0631\u064a\u0642 \u0648\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0641\u0648\u0631\u064a\u0629",
                en: "Fire detection & instant alerts"
            },
            {
                ar: "\u062a\u062d\u0643\u0645 \u0639\u0646 \u0628\u064f\u0639\u062f \u0639\u0628\u0631 \u062a\u0637\u0628\u064a\u0642 \u0647\u0627\u062a\u0641",
                en: "Remote control via mobile app"
            }
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        color: "#00e5ff",
        title: {
            ar: "\u062d\u0644\u0648\u0644 \u0625\u0646\u062a\u0631\u0646\u062a \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u0648\u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0627\u0644\u0633\u062d\u0627\u0628\u064a",
            en: "IoT Solutions & Cloud Integration"
        },
        description: {
            ar: "\u0631\u0628\u0637 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0648\u0627\u0644\u062d\u0648\u0627\u0633\u064a\u0628 \u0628\u0627\u0644\u0633\u062d\u0627\u0628\u0629 \u0639\u0628\u0631 Firebase \u0648REST API. \u0644\u0648\u062d\u0627\u062a \u0645\u0631\u0627\u0642\u0628\u0629 \u062d\u064a\u0629\u060c \u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0641\u0648\u0631\u064a\u0629\u060c \u0648\u062a\u062d\u0643\u0645 \u0639\u0646 \u0628\u064f\u0639\u062f \u0645\u0646 \u0623\u064a \u0645\u0643\u0627\u0646 \u0641\u064a \u0627\u0644\u0639\u0627\u0644\u0645.",
            en: "Connecting devices and computers to the cloud via Firebase and REST API. Live monitoring dashboards, instant alerts, and remote control from anywhere in the world."
        },
        features: [
            {
                ar: "\u0644\u0648\u062d\u0627\u062a \u0645\u0631\u0627\u0642\u0628\u0629 \u062d\u064a\u0629 \u0639\u0628\u0631 Firebase",
                en: "Live dashboards via Firebase"
            },
            {
                ar: "\u062a\u0643\u0627\u0645\u0644 REST API \u0645\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629",
                en: "REST API integration with devices"
            },
            {
                ar: "\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0641\u0648\u0631\u064a\u0629 \u0648\u062a\u062d\u0643\u0645 \u0639\u0627\u0644\u0645\u064a",
                en: "Instant alerts & global control"
            }
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        color: "#ffab00",
        title: {
            ar: "\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u0627\u0644\u062a\u062d\u0643\u0645 \u0628\u0627\u0644\u062f\u062e\u0648\u0644",
            en: "Security & Access Control Systems"
        },
        description: {
            ar: "\u0623\u0646\u0638\u0645\u0629 \u062d\u0645\u0627\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629 \u0628\u0642\u0627\u0631\u0626\u0627\u062a RFID\u060c \u0623\u0642\u0641\u0627\u0644 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629\u060c \u0648\u0645\u0646\u0637\u0642 \u0645\u062d\u0644\u064a \u064a\u0639\u0645\u0644 \u0628\u062f\u0648\u0646 \u0625\u0646\u062a\u0631\u0646\u062a. \u062e\u0648\u0627\u0631\u0632\u0645\u064a\u0627\u062a \u0645\u0643\u0627\u0641\u062d\u0629 \u0627\u0644\u062a\u062c\u0645\u062f \u062a\u0636\u0645\u0646 \u0639\u0645\u0644 \u0627\u0644\u0646\u0638\u0627\u0645 24/7.",
            en: "Advanced security systems with RFID readers, electronic locks, and local logic that works without internet. Anti-freeze algorithms ensuring 24/7 system operation."
        },
        features: [
            {
                ar: "\u0642\u0627\u0631\u0626\u0627\u062a RFID \u0648\u0623\u0642\u0641\u0627\u0644 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629",
                en: "RFID readers & electronic locks"
            },
            {
                ar: "\u0645\u0646\u0637\u0642 \u0645\u062d\u0644\u064a \u0644\u0644\u0639\u0645\u0644 \u0628\u062f\u0648\u0646 \u0625\u0646\u062a\u0631\u0646\u062a",
                en: "Offline local logic capability"
            },
            {
                ar: "\u062e\u0648\u0627\u0631\u0632\u0645\u064a\u0627\u062a \u0645\u0643\u0627\u0641\u062d\u0629 \u0627\u0644\u062a\u062c\u0645\u062f Anti-Freeze",
                en: "Anti-Freeze algorithms"
            }
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
        color: "#b44dff",
        title: {
            ar: "\u0634\u0628\u0643\u0627\u062a \u062d\u0633\u0627\u0633\u0627\u062a \u0645\u062e\u0635\u0635\u0629",
            en: "Custom Sensor Networks"
        },
        description: {
            ar: "\u062a\u0635\u0645\u064a\u0645 \u0634\u0628\u0643\u0627\u062a \u062d\u0633\u0627\u0633\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 (IR\u060c \u063a\u0627\u0632\u060c \u0627\u0647\u062a\u0632\u0627\u0632\u060c \u062d\u0631\u0627\u0631\u0629\u060c \u0631\u0637\u0648\u0628\u0629) \u0645\u0639 \u0645\u0639\u0645\u0627\u0631\u064a\u0629 \u062c\u0633\u0631 Serial \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0634\u0643\u0644 \u0645\u0648\u062b\u0648\u0642 \u0625\u0644\u0649 \u0627\u0644\u0633\u062d\u0627\u0628\u0629.",
            en: "Designing multi-sensor networks (IR, gas, vibration, temperature, humidity) with Serial bridge architecture for reliable data transmission to the cloud."
        },
        features: [
            {
                ar: "\u062d\u0633\u0627\u0633\u0627\u062a IR \u0648\u063a\u0627\u0632 \u0648\u0627\u0647\u062a\u0632\u0627\u0632",
                en: "IR, gas & vibration sensors"
            },
            {
                ar: "\u0645\u0639\u0645\u0627\u0631\u064a\u0629 \u062c\u0633\u0631 Serial \u0627\u0644\u0645\u0648\u062b\u0648\u0642\u0629",
                en: "Reliable Serial bridge architecture"
            },
            {
                ar: "\u0646\u0642\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u063a\u064a\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062d\u062c\u0628",
                en: "Non-blocking data pipeline"
            }
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"],
        color: "#ff6b9d",
        title: {
            ar: "\u0623\u062a\u0645\u062a\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0627\u062a \u0648\u0627\u0644\u0642\u0627\u0639\u0627\u062a",
            en: "Event & Venue Automation"
        },
        description: {
            ar: "\u0623\u0646\u0638\u0645\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0644\u0644\u0642\u0627\u0639\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u0627\u0631\u062d \u062a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u062d\u0633\u0627\u0633\u0627\u062a \u0627\u0644\u062a\u0642\u0627\u0631\u0628 \u0648\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u0645\u0624\u062b\u0631\u0627\u062a \u0627\u0644\u0636\u0648\u0626\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b \u0639\u0628\u0631 \u0622\u0644\u0629 \u062d\u0627\u0644\u0627\u062a \u0628\u0631\u0645\u062c\u064a\u0629.",
            en: "Interactive venue systems using proximity and distance sensors to trigger lighting effects and music automatically via software state machines."
        },
        features: [
            {
                ar: "\u0622\u0644\u0629 \u062d\u0627\u0644\u0627\u062a \u0628\u0631\u0645\u062c\u064a\u0629 (State Machine)",
                en: "Software state machine logic"
            },
            {
                ar: "\u062d\u0633\u0627\u0633\u0627\u062a \u062a\u0642\u0627\u0631\u0628 \u0648\u0645\u0633\u0627\u0641\u0629 HC-SR04",
                en: "Proximity & distance sensors (HC-SR04)"
            },
            {
                ar: "\u0645\u0632\u0627\u0645\u0646\u0629 \u0625\u0636\u0627\u0621\u0629 \u0648\u0635\u0648\u062a DFPlayer",
                en: "Light & sound sync via DFPlayer"
            }
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        color: "#4fc3f7",
        title: {
            ar: "\u0646\u0645\u0627\u0630\u062c \u0623\u0648\u0644\u064a\u0629 \u0648\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u062a\u0642\u0646\u064a\u0629",
            en: "Prototyping & Technical Consulting"
        },
        description: {
            ar: "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0625\u0644\u0649 \u0646\u0645\u0627\u0630\u062c \u0623\u0648\u0644\u064a\u0629 \u0639\u0627\u0645\u0644\u0629. \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0641\u064a \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a\u060c \u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064a\u0629\u060c \u0648\u062d\u0644 \u0627\u0644\u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629 \u0627\u0644\u0645\u0639\u0642\u062f\u0629.",
            en: "Turning ideas into working prototypes. Technical consulting in component selection, architecture design, and solving complex engineering problems."
        },
        features: [
            {
                ar: "\u0646\u0645\u0627\u0630\u062c \u0623\u0648\u0644\u064a\u0629 \u0639\u0627\u0645\u0644\u0629 \u0628\u0633\u0631\u0639\u0629",
                en: "Fast working prototypes"
            },
            {
                ar: "\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a",
                en: "Component selection consulting"
            },
            {
                ar: "\u062d\u0644 \u0627\u0644\u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629 \u0627\u0644\u0645\u0639\u0642\u062f\u0629",
                en: "Complex engineering problem solving"
            }
        ]
    }
];
function ServiceCard({ service, index }) {
    _s();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-40px"
    });
    const Icon = service.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 30,
            scale: 0.96
        },
        animate: isInView ? {
            opacity: 1,
            y: 0,
            scale: 1
        } : {
            opacity: 0,
            y: 30,
            scale: 0.96
        },
        transition: {
            duration: 0.55,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ],
            delay: index * 0.1
        },
        className: "relative group rounded-xl overflow-hidden glass-card-dark card-hover",
        style: {
            "--glow-color": service.color
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 w-full",
                style: {
                    background: `linear-gradient(90deg, ${service.color}, ${service.color}60, transparent)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl",
                style: {
                    boxShadow: `inset 0 0 30px ${service.color}08, 0 0 25px ${service.color}10`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative p-5 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110",
                        style: {
                            background: `${service.color}12`,
                            border: `1px solid ${service.color}30`,
                            boxShadow: `0 0 12px ${service.color}15`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-5.5 w-5.5",
                            style: {
                                color: service.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-sm sm:text-base text-foreground leading-tight mb-1",
                                dir: isRTL() ? "rtl" : "ltr",
                                children: lang(service.title.ar, service.title.en)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] sm:text-xs text-[#7a8ba8] font-mono",
                                dir: "ltr",
                                children: lang(service.title.en, service.title.ar)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed mb-4",
                        dir: isRTL() ? "rtl" : "ltr",
                        children: lang(service.description.ar, service.description.en)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: service.features.map((feature, featureIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3.5 w-3.5 shrink-0 mt-0.5",
                                        style: {
                                            color: service.color,
                                            opacity: 0.8
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] sm:text-xs text-[#c5cdd8] leading-snug",
                                        dir: isRTL() ? "rtl" : "ltr",
                                        children: lang(feature.ar, feature.en)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, featureIndex, true, {
                                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(ServiceCard, "A8FN1NOxFpuVcpJ6wjXm7yA469I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ServiceCard;
function ServicesSection() {
    _s1();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isHeaderInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headerRef, {
        once: true,
        margin: "-60px"
    });
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isCtaInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ctaRef, {
        once: true,
        margin: "-40px"
    });
    const scrollToContact = ()=>{
        const contactEl = document.getElementById("contact");
        if (contactEl) {
            contactEl.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: headerRef,
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: isHeaderInView ? {
                    opacity: 1,
                    y: 0
                } : {
                    opacity: 0,
                    y: 16
                },
                transition: {
                    duration: 0.5
                },
                className: "mb-8 sm:mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-9 w-9 items-center justify-center rounded-lg bg-[#00ff6612] border border-[#00ff6625]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                    className: "h-4.5 w-4.5 text-[#00ff66]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold gradient-neon-text",
                                children: lang("\u062e\u062f\u0645\u0627\u062a\u0646\u0627", "Our Services")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#7a8ba8] leading-relaxed max-w-2xl",
                        children: lang("\u0641\u0631\u064a\u0642 \u0647\u0646\u062f\u0633\u0629 \u0625\u0646\u062a\u0631\u0646\u062a \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u0645\u0646 \u0641\u0644\u0633\u0637\u064a\u0646 \u2014 \u0646\u062d\u0648\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0625\u0644\u0649 \u0645\u0646\u0638\u0648\u0645\u0627\u062a \u0630\u0643\u064a\u0629 \u062d\u0642\u064a\u0642\u064a\u0629", "IoT engineering team from Palestine \u2014 turning ideas into real smart systems")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6",
                children: SERVICES.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                        service: service,
                        index: index
                    }, index, false, {
                        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: ctaRef,
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: isCtaInView ? {
                    opacity: 1,
                    y: 0
                } : {
                    opacity: 0,
                    y: 20
                },
                transition: {
                    duration: 0.5,
                    delay: 0.2
                },
                className: "mt-12 sm:mt-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-2xl overflow-hidden glass-card-dark gradient-card-border",
                    style: {
                        background: `linear-gradient(135deg, rgba(0,255,102,0.04) 0%, rgba(0,229,255,0.03) 50%, rgba(180,77,255,0.03) 100%)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[2px] w-full",
                            style: {
                                background: `linear-gradient(90deg, transparent, #00ff66, #00e5ff, #b44dff, transparent)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 sm:p-10 flex flex-col items-center text-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg sm:text-xl font-bold text-foreground leading-snug",
                                    dir: isRTL() ? "rtl" : "ltr",
                                    children: lang("\u0645\u0634\u0631\u0648\u0639 \u0641\u064a \u0628\u0627\u0644\u0643\u061f \u062e\u0644\u064a\u0646\u0627 \u0646\u0633\u0648\u064a\u0647!", "Have a project in mind? Let's build it!")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[#7a8ba8] max-w-lg leading-relaxed",
                                    dir: isRTL() ? "rtl" : "ltr",
                                    children: lang("\u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0645\u0634\u0631\u0648\u0639\u0643 \u0635\u063a\u064a\u0631\u0627\u064b \u0623\u0648 \u0643\u0628\u064a\u0631\u0627\u064b\u060c \u0646\u062d\u0646 \u062c\u0627\u0647\u0632\u0648\u0646 \u0644\u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u0641\u064a \u062a\u062d\u0642\u064a\u0642\u0647. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0627\u0644\u064a\u0648\u0645 \u0648\u0644\u0646\u0628\u062f\u0623 \u0627\u0644\u0639\u0645\u0644.", "Whether your project is small or large, we're ready to help you make it happen. Contact us today and let's get started.")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: scrollToContact,
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    className: "inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer",
                                    style: {
                                        background: "linear-gradient(135deg, #00ff66, #00e5ff)",
                                        color: "#0a0f1a",
                                        boxShadow: "0 0 20px #00ff6630, 0 4px 16px rgba(0,0,0,0.3)"
                                    },
                                    children: [
                                        lang("\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627", "Get in Touch"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                            className: "h-4 w-4",
                                            style: {
                                                transform: isRTL() ? "rotate(90deg)" : "rotate(90deg)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/ServicesSection.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s1(ServicesSection, "t8TJV4f4qg98azrZ4po/2wPbf5I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ServicesSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "ServiceCard");
__turbopack_context__.k.register(_c1, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/portfolio/ProjectsShowcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-client] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Light$3e$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/esm/light.js [app-client] (ecmascript) <export default as Light>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$hljs$2f$atom$2d$one$2d$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const PROJECTS = [
    {
        id: 1,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
            lineNumber: 54,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        statusColor: "#00ff66",
        title: {
            ar: "نظام إدارة المباني الذكية",
            en: "Smart Building Management System"
        },
        description: {
            ar: "نظام أتمتة هجين متكامل يعتمد على معمارية ثنائية المعالجات (Arduino Mega + ESP8266) لإدارة صلاحيات الدخول، حماية المناطق الأمنية، تتبع البيئة المحيطة، والتحكم عن بعد عبر Firebase وتطبيق أندرويد.",
            en: "A hybrid automation system using dual-controller architecture (Arduino Mega + ESP8266) for access control, security zones, environmental monitoring, and remote control via Firebase and Android app."
        },
        hardware: [
            "Arduino Mega",
            "ESP8266",
            "DHT11",
            "Flame Sensor",
            "PIR",
            "LDR",
            "Servo",
            "Relay",
            "LCD 16x2",
            "Keypad 4x3",
            "DS3231 RTC"
        ],
        tech: [
            "C++",
            "Firebase RTDB",
            "Kotlin",
            "Serial3"
        ],
        innovation: {
            ar: "المنطق المحلي أولاً — كشف الحريق يفتح الأبواب بدون إنترنت",
            en: 'Safety-first local logic — fire detection opens doors without internet'
        },
        codeSnippet: `// 🔥 FIRE SAFETY — Local logic (no internet needed)
void checkFireSensor() {
  bool fireDetected = digitalRead(FLAME_PIN) == LOW;
  if (fireDetected) {
    digitalWrite(BUZZER_PIN, HIGH);
    // OVERRIDE: Open ALL doors immediately
    for (int i = 0; i < NUM_DOORS; i++) {
      doorServos[i].write(OPEN_ANGLE);
      doorStates[i] = true;
    }
    // Log to Firebase (best-effort, non-blocking)
    Firebase.setString("/alerts/fire", "ACTIVE");
    Firebase.setInt("/safety/override", 1);
  }
}`,
        architecture: `┌─────────────┐   Serial3   ┌──────────────┐
│  Arduino     │◄──────────►│   ESP8266    │
│  Mega 2560   │            │  (WiFi)      │
│              │            └──────┬───────┘
│ ┌──────────┐ │                   │ HTTPS
│ │ DHT11    │ │            ┌──────▼───────┐
│ │ Flame    │ │            │  Firebase    │
│ │ PIR×3    │ │            │  RTDB        │
│ │ LDR      │ │            └──────┬───────┘
│ │ Keypad   │ │                   │
│ │ RTC      │ │            ┌──────▼───────┐
│ │ LCD 16×2 │ │            │  Android App │
│ │ Servo×2  │ │            └──────────────┘
│ └──────────┘ │
└─────────────┘`
    },
    {
        id: 2,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        statusColor: "#00e5ff",
        title: {
            ar: "نظام مواقف السيارات الذكي ومنظومة السلامة",
            en: "Smart Parking & Multi-Sensor Safety"
        },
        description: {
            ar: "منظومة حوسبة فيزيائية متطورة تجمع بين 9 حساسات مواقف IR، كشف الغاز MQ-2، والاهتزاز SW-420، مربوطة ببوابة ويب عبر معمارية 3 مستويات (Mega → Uno Bridge → Python API → Firebase).",
            en: "Advanced physical computing system combining 9 IR parking sensors, MQ-2 gas detection, SW-420 vibration sensing, connected to a web portal via 3-tier architecture (Mega → Uno Bridge → Python API → Firebase)."
        },
        hardware: [
            "Arduino Mega 2560",
            "Arduino Uno",
            "MQ-2",
            "SW-420",
            "LDR",
            "TTP223",
            "3× Servo",
            "Relay",
            "Buzzer",
            "LCD 20×4",
            "9× IR"
        ],
        tech: [
            "C++",
            "Python",
            "Firebase REST",
            "GitHub Pages"
        ],
        innovation: {
            ar: "خط أنابيب urllib غير قابل للحجب مع منع إعادة ضبط DTR/RTS",
            en: "Non-blocking urllib pipeline with DTR/RTS reset prevention"
        },
        codeSnippet: `// 🔧 Non-blocking sensor scan with serial bridge
void scanAllSensors() {
  parkingCount = 0;
  for (int i = 0; i < 9; i++) {
    slots[i].occupied = digitalRead(IR_PINS[i]) == LOW;
    if (slots[i].occupied) parkingCount++;
  }
  // Send to Uno bridge (DTR/RTS safe)
  Serial1.print("P:");
  for (int i = 0; i < 9; i++)
    Serial1.print(slots[i].occupied ? "1" : "0");
  Serial1.print(",G:");
  Serial1.println(analogRead(GAS_PIN));
}`,
        architecture: `┌─────────────┐  Serial1  ┌───────────┐  USB  ┌────────────┐
│  Arduino    │──────────►│  Arduino  │──────►│  Python    │
│  Mega 2560  │           │  Uno      │       │  API       │
│             │           │ (Bridge)  │       │  Server    │
│ ┌─────────┐ │           └───────────┘       └─────┬──────┘
│ │ 9× IR   │ │                                      │
│ │ MQ-2    │ │                               REST   │
│ │ SW-420  │ │                               API   │
│ │ LDR     │ │                                      ▼
│ │ TTP223  │ │                               ┌─────────────┐
│ │ 3×Servo │ │                               │  Firebase   │
│ │ Buzzer  │ │                               └─────┬──────┘
│ │ LCD20×4 │ │                                     │
│ └─────────┘ │                               ┌─────▼──────┐
└─────────────┘                               │ GitHub     │
                                              │ Pages Web  │
                                              └────────────┘`
    },
    {
        id: 3,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        statusColor: "#ffab00",
        title: {
            ar: "الخزنة الذكية عالية الأمان",
            en: "High-Security RFID Smart Safe"
        },
        description: {
            ar: "نظام حماية متطور يعتمد على معالجة الحافة (Edge Computing) مع خوارزمية مكافحة تجمد المعالج المبتكرة تضمن عمل قارئ RFID بنسبة 100% حتى مع ضعف الشبكة.",
            en: "Advanced security system using edge computing with an innovative Anti-Freeze Algorithm ensuring 100% RFID reader performance even on weak networks."
        },
        hardware: [
            "ESP32",
            "MFRC522 RFID",
            "Relay",
            "Buzzer",
            "12V Solenoid Lock"
        ],
        tech: [
            "C++",
            "Firebase REST",
            "Preferences",
            "HTTPClient"
        ],
        innovation: {
            ar: "خوارزمية مكافحة التجمد: MAX_FAILS=3, FAIL_COOLDOWN=30 ثانية",
            en: "Anti-Freeze: MAX_FAILS=3, FAIL_COOLDOWN=30s"
        },
        codeSnippet: `// 🛡️ Anti-Freeze Algorithm — 100% RFID uptime
#define MAX_FAILS    3
#define FAIL_COOLDOWN 30000  // 30 seconds
unsigned long lastFailTime = 0;
int consecutiveFails = 0;

bool checkRFID() {
  bool cardPresent = mfrc522.PICC_IsNewCardPresent();
  if (!cardPresent) {
    consecutiveFails++;
    if (consecutiveFails >= MAX_FAILS) {
      lastFailTime = millis();
      // Hard reset SPI + MFRC522
      SPI.end(); delay(100);
      SPI.begin(); mfrc522.PCD_Init();
      consecutiveFails = 0;
    }
    return false;
  }
  consecutiveFails = 0;  // Success — reset counter
  return mfrc522.PICC_ReadCardSerial();
}`,
        architecture: `┌──────────────────────────────────────────┐
│              ESP32 (Edge Node)          │
│                                        │
│  ┌──────────┐    ┌──────────────────┐  │
│  │ MFRC522  │    │  Anti-Freeze     │  │
│  │ RFID     │───►│  Algorithm       │  │
│  │ Reader   │    │  MAX_FAILS=3     │  │
│  └──────────┘    │  COOLDOWN=30s    │  │
│                  └────────┬─────────┘  │
│  ┌──────────┐             │            │
│  │ Buzzer   │◄────────────┤            │
│  │ Relay    │◄────────────┤            │
│  │ Solenoid │             │            │
│  └──────────┘             │            │
│                           │ HTTP       │
│  ┌──────────┐            ▼            │
│  │ Flash    │    ┌──────────────┐      │
│  │ (Prefs)  │    │   Firebase   │      │
│  │ UIDs     │    │   REST API   │      │
│  └──────────┘    └──────────────┘      │
└──────────────────────────────────────────┘`
    },
    {
        id: 4,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        statusColor: "#b44dff",
        title: {
            ar: "نظام أتمتة صالات الأفراح الذكي",
            en: "Automated Smart Wedding Hall System"
        },
        description: {
            ar: "نظام تفاعلي متكامل لإدارة الصالات يعتمد على حساسات التقارب والمسافة لإطلاق المؤثرات الضوئية والموسيقى عبر DFPlayer Mini، مع آلة حالات برمجية (State Machine) معقدة.",
            en: "Interactive events management system using proximity and distance sensors to trigger lighting effects and music via DFPlayer Mini, with a complex State Machine architecture."
        },
        hardware: [
            "ESP32",
            "DFPlayer Mini",
            "2× HC-SR04",
            "IR Sensor",
            "2× Servo",
            "6-Channel Relay",
            "Speaker"
        ],
        tech: [
            "C++",
            "Firebase RTDB",
            "ESP32Servo",
            "DFRobotDFPlayerMini"
        ],
        innovation: {
            ar: "آلة حالات مع 6 أوضاع إضاءة + تشغيل تلقائي MP3",
            en: "State Machine with 6 lighting modes + auto-next MP3"
        },
        codeSnippet: `// 🎭 State Machine — 6 Lighting Modes + Auto MP3
enum HallState { IDLE, ENTRY, WEDDING, DANCE, CAKE, EXIT };
HallState currentState = IDLE;

void updateStateMachine() {
  unsigned long now = millis();
  switch (currentState) {
    case ENTRY:
      if (now - stateStart > 10000) {
        currentState = WEDDING; stateStart = now;
        setLightingMode(WARM_WHITE);
        dfplayer.play(2);  // Wedding march
      }
      break;
    case DANCE:
      cycleLightingEffects(); // 6 modes rotating
      if (dfplayer.available())
        dfplayer.play(nextTrack++); // Auto-advance
      break;
    case EXIT:
      if (now - stateStart > 15000)
        currentState = IDLE; // Full shutdown
      break;
  }
}`,
        architecture: `┌────────────────────────────────────────────┐
│            ESP32 (State Machine)           │
│                                            │
│  ┌───────────┐    ┌────────────────────┐   │
│  │ HC-SR04×2 │───►│                    │   │
│  │ IR Sensor │───►│   State Machine    │   │
│  └───────────┘    │  ┌───┐  ┌─────┐   │   │
│                   │  │   ▼  ▼     │    │   │
│  ┌───────────┐    │  │IDLE│ENTRY│   │   │
│  │ DFPlayer  │◄───┤  │  ↓  │ ↓   │   │   │
│  │ Mini      │    │  │EXIT│WED. │   │   │
│  │ + Speaker │    │  │  ↓  │ ↓   │   │   │
│  └───────────┘    │  │DANCE│CAKE │   │   │
│                   │  └─────────────┘   │   │
│  ┌───────────┐    └────────┬───────────┘   │
│  │ 6-Ch Relay│◄────────────┤               │
│  │ + Servo×2 │             │               │
│  └───────────┘             │ Firebase RTDB  │
│                   ┌────────▼──────────┐    │
│                   │   Remote Control  │    │
│                   └───────────────────┘    │
└────────────────────────────────────────────┘`
    }
];
/* ═══════════════════════════════════════════════════════════════
   TELEMETRY SIMULATION HOOKS
   ═══════════════════════════════════════════════════════════════ */ function useBuildingTelemetry() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        temp: 24,
        humidity: 55,
        doorOpen: false,
        fireAlarm: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBuildingTelemetry.useEffect": ()=>{
            const interval = setInterval({
                "useBuildingTelemetry.useEffect.interval": ()=>{
                    setData({
                        "useBuildingTelemetry.useEffect.interval": (prev)=>({
                                temp: Math.max(18, Math.min(40, prev.temp + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2)),
                                humidity: Math.max(20, Math.min(90, prev.humidity + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 5)),
                                doorOpen: Math.random() > 0.85,
                                fireAlarm: Math.random() > 0.97
                            })
                    }["useBuildingTelemetry.useEffect.interval"]);
                }
            }["useBuildingTelemetry.useEffect.interval"], 2000);
            return ({
                "useBuildingTelemetry.useEffect": ()=>clearInterval(interval)
            })["useBuildingTelemetry.useEffect"];
        }
    }["useBuildingTelemetry.useEffect"], []);
    return data;
}
_s(useBuildingTelemetry, "udw8EiiHOVF/Acw1+DYcu0nayxk=");
function useParkingTelemetry() {
    _s1();
    const initial = [
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false
    ];
    const [slots, setSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [gasLevel, setGasLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useParkingTelemetry.useEffect": ()=>{
            const interval = setInterval({
                "useParkingTelemetry.useEffect.interval": ()=>{
                    setSlots({
                        "useParkingTelemetry.useEffect.interval": (prev)=>{
                            const next = [
                                ...prev
                            ];
                            if (Math.random() > 0.7) {
                                const idx = Math.floor(Math.random() * 9);
                                next[idx] = !next[idx];
                            }
                            return next;
                        }
                    }["useParkingTelemetry.useEffect.interval"]);
                    setGasLevel(Math.max(0, Math.min(100, gasLevel + (Math.random() - 0.5) * 10)));
                }
            }["useParkingTelemetry.useEffect.interval"], 3000);
            return ({
                "useParkingTelemetry.useEffect": ()=>clearInterval(interval)
            })["useParkingTelemetry.useEffect"];
        }
    }["useParkingTelemetry.useEffect"], [
        gasLevel
    ]);
    return {
        slots,
        gasLevel,
        occupied: slots.filter(Boolean).length
    };
}
_s1(useParkingTelemetry, "4PVtZDG0XevfQT5zP1LbKsitArY=");
function useSafeTelemetry() {
    _s2();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        lastUID: "──",
        locked: true,
        scanning: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSafeTelemetry.useEffect": ()=>{
            const interval = setInterval({
                "useSafeTelemetry.useEffect.interval": ()=>{
                    setData({
                        "useSafeTelemetry.useEffect.interval": (prev)=>({
                                ...prev,
                                scanning: true
                            })
                    }["useSafeTelemetry.useEffect.interval"]);
                    setTimeout({
                        "useSafeTelemetry.useEffect.interval": ()=>{
                            if (Math.random() > 0.4) {
                                const uid = `A3:B${Math.floor(Math.random() * 9)}:C${Math.floor(Math.random() * 99).toString().padStart(2, "0")}`;
                                const authorized = Math.random() > 0.3;
                                setData({
                                    lastUID: uid,
                                    locked: !authorized,
                                    scanning: false
                                });
                            } else {
                                setData({
                                    "useSafeTelemetry.useEffect.interval": (prev)=>({
                                            ...prev,
                                            scanning: false
                                        })
                                }["useSafeTelemetry.useEffect.interval"]);
                            }
                        }
                    }["useSafeTelemetry.useEffect.interval"], 800);
                }
            }["useSafeTelemetry.useEffect.interval"], 4000);
            return ({
                "useSafeTelemetry.useEffect": ()=>clearInterval(interval)
            })["useSafeTelemetry.useEffect"];
        }
    }["useSafeTelemetry.useEffect"], []);
    return data;
}
_s2(useSafeTelemetry, "SAj+LqKK6IUKp6EFcMVuSX8n4WI=");
function useWeddingTelemetry() {
    _s3();
    const modes = [
        "IDLE",
        "ENTRY",
        "WEDDING",
        "DANCE",
        "CAKE",
        "EXIT"
    ];
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        mode: "WEDDING",
        trackNum: 2,
        lights: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWeddingTelemetry.useEffect": ()=>{
            const interval = setInterval({
                "useWeddingTelemetry.useEffect.interval": ()=>{
                    setData({
                        "useWeddingTelemetry.useEffect.interval": (prev)=>({
                                mode: modes[Math.floor(Math.random() * modes.length)],
                                trackNum: Math.max(1, Math.min(15, prev.trackNum + (Math.random() > 0.5 ? 1 : -1))),
                                lights: Math.random() > 0.2
                            })
                    }["useWeddingTelemetry.useEffect.interval"]);
                }
            }["useWeddingTelemetry.useEffect.interval"], 3500);
            return ({
                "useWeddingTelemetry.useEffect": ()=>clearInterval(interval)
            })["useWeddingTelemetry.useEffect"];
        }
    }["useWeddingTelemetry.useEffect"], []);
    return data;
}
_s3(useWeddingTelemetry, "bLeTHhvpxrkdCmUTIjkjMds/zmc=");
/* ═══════════════════════════════════════════════════════════════
   TELEMETRY PANELS
   ═══════════════════════════════════════════════════════════════ */ function BuildingTelemetry() {
    _s4();
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const { temp, humidity, doorOpen, fireAlarm } = useBuildingTelemetry();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#00ff6620]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                className: "h-3.5 w-3.5 text-[#ff6b6b]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: lang("الحرارة", "Temp")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold text-[#ff6b6b] font-mono",
                        children: [
                            temp.toFixed(1),
                            "°C"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 h-1.5 bg-[#1a2340] rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full transition-all duration-1000",
                            style: {
                                width: `${Math.min(100, (temp - 10) / 40 * 100)}%`,
                                background: "linear-gradient(90deg, #00ff66, #ffab00, #ff3d5a)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#00ff6620]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                className: "h-3.5 w-3.5 text-[#4fc3f7]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: lang("الرطوبة", "Humidity")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold text-[#4fc3f7] font-mono",
                        children: [
                            humidity.toFixed(0),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 h-1.5 bg-[#1a2340] rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-[#4fc3f7] transition-all duration-1000",
                            style: {
                                width: `${humidity}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#00ff6620]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"], {
                                className: "h-3.5 w-3.5 text-[#00ff66]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: lang("الباب", "Door")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: doorOpen ? "led-on" : "led-off"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold font-mono",
                                style: {
                                    color: doorOpen ? "#00ff66" : "#2a3d5c"
                                },
                                children: doorOpen ? lang("مفتوح", "OPEN") : lang("مغلق", "LOCKED")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#00ff6620]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                className: "h-3.5 w-3.5 text-[#ff3d5a]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: lang("الحريق", "Fire")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: fireAlarm ? "led-red animate-pulse" : "led-off"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold font-mono",
                                style: {
                                    color: fireAlarm ? "#ff3d5a" : "#2a3d5c"
                                },
                                children: fireAlarm ? lang("إنذار!", "ALARM!") : lang("آمن", "SAFE")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
}
_s4(BuildingTelemetry, "kpuXuRqEPV8H6LIs/WgTluuIuzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        useBuildingTelemetry
    ];
});
_c = BuildingTelemetry;
function ParkingTelemetry() {
    _s5();
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const { slots, gasLevel, occupied } = useParkingTelemetry();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#00e5ff20]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: lang("المواقف", "Parking Slots")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono text-[#00e5ff]",
                                children: [
                                    occupied,
                                    "/9 ",
                                    lang("مشغول", "occupied")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-9 gap-1.5",
                        children: slots.map((filled, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    scale: [
                                        1,
                                        1.05,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 0.3
                                },
                                className: "aspect-square rounded-md flex items-center justify-center transition-all duration-500",
                                style: {
                                    background: filled ? "linear-gradient(135deg, #ff3d5a, #ff6b6b)" : "linear-gradient(135deg, #0a0f1a, #1a2340)",
                                    border: filled ? "1px solid #ff3d5a80" : "1px solid #00e5ff30",
                                    boxShadow: filled ? "0 0 8px #ff3d5a40" : "none"
                                },
                                title: `Slot ${i + 1}: ${filled ? lang("مشغول", "Occupied") : lang("فارغ", "Empty")}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                    className: `h-2.5 w-2.5 ${filled ? "text-white" : "text-[#00e5ff60]"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#00e5ff20]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                        className: "h-3.5 w-3.5 text-[#ffab00]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                        children: [
                                            "MQ-2 ",
                                            lang("الغاز", "Gas")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 541,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono font-bold",
                                style: {
                                    color: gasLevel > 60 ? "#ff3d5a" : gasLevel > 30 ? "#ffab00" : "#00ff66"
                                },
                                children: [
                                    gasLevel.toFixed(0),
                                    " ppm"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 540,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 bg-[#1a2340] rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full rounded-full",
                            animate: {
                                width: `${Math.min(100, gasLevel)}%`
                            },
                            transition: {
                                duration: 1
                            },
                            style: {
                                background: gasLevel > 60 ? "linear-gradient(90deg, #ffab00, #ff3d5a)" : gasLevel > 30 ? "linear-gradient(90deg, #00ff66, #ffab00)" : "#00ff66",
                                boxShadow: gasLevel > 60 ? "0 0 10px #ff3d5a60" : "none"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
        lineNumber: 505,
        columnNumber: 5
    }, this);
}
_s5(ParkingTelemetry, "gdXJlzib9VKs5IfG6jxOIdESaRc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        useParkingTelemetry
    ];
});
_c1 = ParkingTelemetry;
function SafeTelemetry() {
    _s6();
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const { lastUID, locked, scanning } = useSafeTelemetry();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#ffab0020]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                className: "h-3.5 w-3.5 text-[#ffab00]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 584,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: [
                                    "RFID ",
                                    lang("القراءة", "Reader")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 585,
                                columnNumber: 11
                            }, this),
                            scanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-[#ffab00] animate-pulse ml-auto",
                                children: [
                                    "● ",
                                    lang("مسح...", "Scanning...")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 583,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#0a0f1a] border border-[#ffab0030] rounded-md px-3 py-2 font-mono text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#7a8ba8] text-[10px]",
                                children: "UID: "
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    opacity: 0,
                                    x: -5
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                className: "text-[#ffab00] font-bold",
                                children: lastUID
                            }, lastUID, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 596,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#ffab0020]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                className: "h-3.5 w-3.5 text-[#00ff66]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 610,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: lang("حالة القفل", "Lock Status")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 609,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    rotate: locked ? 0 : 45
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: `h-5 w-5 ${locked ? "text-[#00ff66]" : "text-[#ffab00]"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 616,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold font-mono",
                                style: {
                                    color: locked ? "#00ff66" : "#ffab00"
                                },
                                children: locked ? lang("🔒 مقفل", "🔒 LOCKED") : lang("🔓 مفتوح", "🔓 UNLOCKED")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
        lineNumber: 580,
        columnNumber: 5
    }, this);
}
_s6(SafeTelemetry, "g7ZQxT9nuDBx4DGIAdbnp9YuZKo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        useSafeTelemetry
    ];
});
_c2 = SafeTelemetry;
function WeddingTelemetry() {
    _s7();
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const { mode, trackNum, lights } = useWeddingTelemetry();
    const modeColors = {
        IDLE: "#7a8ba8",
        ENTRY: "#00ff66",
        WEDDING: "#ffab00",
        DANCE: "#b44dff",
        CAKE: "#ff6b6b",
        EXIT: "#00e5ff"
    };
    const modeLabels = {
        IDLE: {
            ar: "خامل",
            en: "IDLE"
        },
        ENTRY: {
            ar: "دخول",
            en: "ENTRY"
        },
        WEDDING: {
            ar: "حفل",
            en: "WEDDING"
        },
        DANCE: {
            ar: "رقص",
            en: "DANCE"
        },
        CAKE: {
            ar: "كعكة",
            en: "CAKE"
        },
        EXIT: {
            ar: "خروج",
            en: "EXIT"
        }
    };
    const color = modeColors[mode] || "#7a8ba8";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#b44dff20]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "h-3.5 w-3.5 text-[#b44dff]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 663,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: lang("وضع القاعة", "Hall Mode")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 664,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            scale: 0.8,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        className: "inline-block px-3 py-1 rounded-full text-xs font-bold font-mono",
                        style: {
                            color,
                            background: `${color}18`,
                            border: `1px solid ${color}40`,
                            boxShadow: `0 0 12px ${color}30`
                        },
                        children: lang(modeLabels[mode].ar, modeLabels[mode].en)
                    }, mode, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 668,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 661,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#b44dff20]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                className: "h-3.5 w-3.5 text-[#00e5ff]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: "DFPlayer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 688,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                className: "h-4 w-4 text-[#00e5ff]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 693,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-mono font-bold text-[#00e5ff]",
                                children: [
                                    "Track #",
                                    trackNum.toString().padStart(2, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 685,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0a0f1a] rounded-lg p-3 border border-[#b44dff20]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                className: "h-3.5 w-3.5 text-[#ffab00]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider",
                                children: lang("الإضاءة", "Lights")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 702,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-3 h-3 rounded-full ${lights ? "led-amber" : "led-off"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 709,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-mono",
                                style: {
                                    color: lights ? "#ffab00" : "#2a3d5c"
                                },
                                children: lights ? lang("6 قنوات فعّالة", "6-Ch Active") : lang("مطفأة", "OFF")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 712,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 708,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
        lineNumber: 659,
        columnNumber: 5
    }, this);
}
_s7(WeddingTelemetry, "sGQOPgg5DeUoVh6mCq20g+Mx2k0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        useWeddingTelemetry
    ];
});
_c3 = WeddingTelemetry;
function ProjectCard({ project, index }) {
    _s8();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCode, setShowCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const telemetryMap = {
        1: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildingTelemetry, {}, void 0, false, {
            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
            lineNumber: 738,
            columnNumber: 8
        }, this),
        2: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParkingTelemetry, {}, void 0, false, {
            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
            lineNumber: 739,
            columnNumber: 8
        }, this),
        3: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SafeTelemetry, {}, void 0, false, {
            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
            lineNumber: 740,
            columnNumber: 8
        }, this),
        4: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeddingTelemetry, {}, void 0, false, {
            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
            lineNumber: 741,
            columnNumber: 8
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: index * 0.12
        },
        className: "glass-card-dark rounded-xl overflow-hidden card-hover",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 w-full",
                style: {
                    background: `linear-gradient(90deg, ${project.statusColor}, ${project.statusColor}60, transparent)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 752,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg",
                                style: {
                                    background: `${project.statusColor}15`,
                                    border: `1px solid ${project.statusColor}30`,
                                    color: project.statusColor
                                },
                                children: project.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 762,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm sm:text-base text-foreground leading-tight",
                                        dir: isRTL() ? "rtl" : "ltr",
                                        children: lang(project.title.ar, project.title.en)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 773,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#7a8ba8] mt-0.5 font-mono",
                                        dir: "ltr",
                                        children: lang(project.title.en, project.title.ar)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 779,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 761,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed mb-4",
                        dir: isRTL() ? "rtl" : "ltr",
                        children: lang(project.description.ar, project.description.en)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 789,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                        className: "h-3 w-3 text-[#7a8ba8]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 799,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold",
                                        children: lang("العتاد", "Hardware")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 800,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 798,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: project.hardware.map((hw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#151d33] text-[#c5cdd8] border border-[#1e2d4d]",
                                        children: hw
                                    }, hw, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 806,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 804,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 797,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                        className: "h-3 w-3 text-[#7a8ba8]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 819,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold",
                                        children: lang("التقنيات", "Tech")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 820,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 818,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: project.tech.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium border",
                                        style: {
                                            background: `${project.statusColor}10`,
                                            color: project.statusColor,
                                            borderColor: `${project.statusColor}30`
                                        },
                                        children: tech
                                    }, tech, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 826,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 824,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 817,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg p-3 mb-4",
                        style: {
                            background: `${project.statusColor}08`,
                            border: `1px solid ${project.statusColor}20`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "h-3 w-3",
                                        style: {
                                            color: project.statusColor
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 850,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold uppercase tracking-wider",
                                        style: {
                                            color: project.statusColor
                                        },
                                        children: lang("الابتكار الرئيسي", "Key Innovation")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 851,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 849,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium",
                                style: {
                                    color: `${project.statusColor}dd`
                                },
                                dir: isRTL() ? "rtl" : "ltr",
                                children: lang(project.innovation.ar, project.innovation.en)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 855,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 842,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setExpanded(!expanded),
                        className: "w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium transition-all duration-200",
                        style: {
                            background: expanded ? `${project.statusColor}15` : "transparent",
                            color: project.statusColor,
                            border: `1px solid ${expanded ? `${project.statusColor}40` : `${project.statusColor}20`}`
                        },
                        children: expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                lang("إغلاق التفاصيل", "Collapse Details"),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-3.5 w-3.5 rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                    lineNumber: 877,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                lang("عرض التفاصيل", "View Details"),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                    lineNumber: 882,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 865,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 760,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.35,
                        ease: [
                            0.25,
                            0.46,
                            0.45,
                            0.94
                        ]
                    },
                    className: "overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-[#1e2d4d]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                            lineNumber: 898,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 sm:px-6 pt-5 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            className: "h-4 w-4 text-[#00ff66]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                            lineNumber: 903,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-foreground",
                                            children: lang("📡 التيليمتري الحي", "📡 Live Telemetry")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 text-[9px] text-[#00ff66] animate-pulse ml-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-[#00ff66]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                                    lineNumber: 908,
                                                    columnNumber: 19
                                                }, this),
                                                "LIVE"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                            lineNumber: 907,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                    lineNumber: 902,
                                    columnNumber: 15
                                }, this),
                                telemetryMap[project.id]
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                            lineNumber: 901,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 sm:px-6 pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowCode(!showCode),
                                className: "flex items-center gap-2 text-xs font-medium text-[#7a8ba8] hover:text-foreground transition-colors",
                                children: [
                                    showCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 921,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 921,
                                        columnNumber: 66
                                    }, this),
                                    lang("عرض الكود", "View Code")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 917,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                            lineNumber: 916,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: showCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    height: 0,
                                    opacity: 0
                                },
                                animate: {
                                    height: "auto",
                                    opacity: 1
                                },
                                exit: {
                                    height: 0,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.25
                                },
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 sm:px-6 pb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg overflow-hidden border border-[#1e2d4d]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Light$3e$__["Light"], {
                                            language: "cpp",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$hljs$2f$atom$2d$one$2d$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                            customStyle: {
                                                margin: 0,
                                                padding: "1rem",
                                                background: "#080c16",
                                                fontSize: "11px",
                                                lineHeight: "1.6",
                                                borderRadius: "0.5rem"
                                            },
                                            showLineNumbers: true,
                                            lineNumberStyle: {
                                                color: "#2a3d5c",
                                                fontSize: "10px",
                                                minWidth: "2rem"
                                            },
                                            children: project.codeSnippet
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                            lineNumber: 938,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 937,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                    lineNumber: 936,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 929,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                            lineNumber: 927,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 sm:px-6 pb-5 sm:pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                            className: "h-4 w-4 text-[#00ff66]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                            lineNumber: 967,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-foreground",
                                            children: lang("📐 معمارية النظام", "📐 System Architecture")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                            lineNumber: 968,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                    lineNumber: 966,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#080c16] rounded-lg p-4 border border-[#00ff6615] overflow-x-auto code-scroll",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "text-[10px] sm:text-[11px] leading-relaxed font-mono whitespace-pre",
                                        style: {
                                            color: "#00ff66"
                                        },
                                        dir: "ltr",
                                        children: project.architecture
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 975,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                    lineNumber: 972,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                            lineNumber: 965,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                    lineNumber: 891,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 889,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
        lineNumber: 745,
        columnNumber: 5
    }, this);
}
_s8(ProjectCard, "IHAX5c5lfLBNijmi2SZ/z3qGBfc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = ProjectCard;
function ProjectsShowcase() {
    _s9();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "mb-8 sm:mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                        className: "h-5 w-5 neon-text"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold tracking-wider uppercase neon-text",
                                        children: lang("معرض المشاريع", "Projects Showcase")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 1008,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-px bg-gradient-to-l from-transparent via-[#00ff6630] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                                lineNumber: 1014,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 1007,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl sm:text-2xl font-bold text-foreground mb-1",
                        children: lang("مشاريع إنترنت الأشياء الحقيقية", "Real IoT Projects")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 1016,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#7a8ba8] max-w-2xl",
                        children: lang("4 مشاريع حوسبة فيزيائية متكاملة بمعماريات متنوعة — من أتمتة المباني إلى صالات الأفراح الذكية", "4 complete physical computing projects with diverse architectures — from building automation to smart wedding halls")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 1019,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 1001,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6",
                children: PROJECTS.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                        project: project,
                        index: idx
                    }, project.id, false, {
                        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                        lineNumber: 1030,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
                lineNumber: 1028,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/ProjectsShowcase.tsx",
        lineNumber: 999,
        columnNumber: 5
    }, this);
}
_s9(ProjectsShowcase, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c5 = ProjectsShowcase;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "BuildingTelemetry");
__turbopack_context__.k.register(_c1, "ParkingTelemetry");
__turbopack_context__.k.register(_c2, "SafeTelemetry");
__turbopack_context__.k.register(_c3, "WeddingTelemetry");
__turbopack_context__.k.register(_c4, "ProjectCard");
__turbopack_context__.k.register(_c5, "ProjectsShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/portfolio/SkillsMatrix.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsMatrix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CATEGORIES = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        title: {
            ar: "المتحكمات الدقيقة",
            en: "Microcontrollers"
        },
        color: "#00ff66",
        glowColor: "#00ff6640",
        skills: [
            "Arduino Uno",
            "Arduino Mega 2560",
            "ESP32 NodeMCU",
            "ESP8266",
            "Arduino Nano"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
        title: {
            ar: "الحساسات",
            en: "Sensors"
        },
        color: "#00e5ff",
        glowColor: "#00e5ff40",
        skills: [
            "DHT11/22",
            "HC-SR04 Ultrasonic",
            "PIR HC-SR501",
            "MQ-2 Gas",
            "Flame Sensor",
            "LDR",
            "Tilt Sensor",
            "TTP223 Touch",
            "SW-420 Vibration",
            "IR Proximity"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        title: {
            ar: "المشغلات",
            en: "Actuators"
        },
        color: "#ffab00",
        glowColor: "#ffab0040",
        skills: [
            "Servo Motor (SG90, MG996R)",
            "DC Motor + L298N",
            "Relay Modules",
            "DFPlayer Mini MP3",
            "Buzzer"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
        title: {
            ar: "بروتوكولات الاتصال",
            en: "Communication"
        },
        color: "#b44dff",
        glowColor: "#b44dff40",
        skills: [
            "Serial UART",
            "I2C",
            "SPI",
            "WiFi (ESP32/8266)",
            "HTTP/REST API",
            "Firebase Realtime DB"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        title: {
            ar: "البرمجيات",
            en: "Software"
        },
        color: "#ff6b9d",
        glowColor: "#ff6b9d40",
        skills: [
            "C/C++ (Arduino)",
            "Python 3",
            "Kotlin (Android)",
            "HTML/CSS/JS",
            "Firebase Admin"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        title: {
            ar: "الأدوات",
            en: "Tools"
        },
        color: "#4fc3f7",
        glowColor: "#4fc3f740",
        skills: [
            "Arduino IDE",
            "VS Code",
            "Fritzing",
            "Serial Monitor",
            "Logic Analyzer"
        ]
    }
];
/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */ const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
const pillVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: (i)=>({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                delay: i * 0.04,
                ease: "easeOut"
            }
        })
};
/* ═══════════════════════════════════════════════════════════════
   CATEGORY CARD
   ═══════════════════════════════════════════════════════════════ */ function CategoryCard({ category, index }) {
    _s();
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const Icon = category.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: cardVariants,
        className: "glass-card-dark rounded-xl overflow-hidden card-hover group",
        style: {
            borderColor: `${category.color}15`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full",
                style: {
                    background: `linear-gradient(90deg, ${category.color}, ${category.color}60, transparent)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110",
                                style: {
                                    background: `${category.color}12`,
                                    border: `1px solid ${category.color}25`,
                                    boxShadow: `0 0 12px ${category.glowColor}`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-5 w-5",
                                    style: {
                                        color: category.color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm text-foreground leading-tight",
                                        style: {
                                            color: category.color
                                        },
                                        children: lang(category.title.ar, category.title.en)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#7a8ba8] font-mono",
                                        children: [
                                            category.skills.length,
                                            " ",
                                            lang("عنصر", "items")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: category.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                custom: i,
                                variants: pillVariants,
                                className: "inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all duration-300 cursor-default",
                                style: {
                                    background: `${category.color}08`,
                                    color: `${category.color}dd`,
                                    border: `1px solid ${category.color}20`
                                },
                                whileHover: {
                                    scale: 1.08,
                                    boxShadow: `0 0 16px ${category.glowColor}, 0 0 4px ${category.glowColor}`,
                                    borderColor: `${category.color}50`,
                                    background: `${category.color}18`
                                },
                                children: skill
                            }, skill, false, {
                                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(CategoryCard, "EB+8YGRLp3dNhYSc1KnABaj+ALA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = CategoryCard;
function SkillsMatrix() {
    _s1();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        once: true,
        margin: "-80px"
    });
    const totalSkills = CATEGORIES.reduce((sum, cat)=>sum + cat.skills.length, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "mb-8 sm:mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#00ff6612] border border-[#00ff6625]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                    className: "h-4 w-4 text-[#00ff66]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold gradient-neon-text",
                                children: lang("مصفوفة المهارات والعتاد", "Skills & Hardware Matrix")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#7a8ba8] leading-relaxed",
                        children: lang(`${CATEGORIES.length} تصنيفات × ${totalSkills} عنصر — تغطي المتحكمات والحساسات والمشغلات والبروتوكولات والبرمجيات والأدوات`, `${CATEGORIES.length} categories × ${totalSkills} items — covering microcontrollers, sensors, actuators, protocols, software, and tools`)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: containerRef,
                variants: containerVariants,
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
                className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6",
                children: CATEGORIES.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
                        category: category,
                        index: index
                    }, category.title.en, false, {
                        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: 0.6
                },
                className: "mt-8 sm:mt-10 glass-card-dark rounded-xl p-4 sm:p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-center gap-6 sm:gap-10",
                    children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full",
                                    style: {
                                        background: cat.color,
                                        boxShadow: `0 0 8px ${cat.glowColor}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#7a8ba8]",
                                    children: lang(cat.title.ar, cat.title.en)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold font-mono",
                                    style: {
                                        color: cat.color
                                    },
                                    children: cat.skills.length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cat.title.en, true, {
                            fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SkillsMatrix.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s1(SkillsMatrix, "1WjLaktVxR7VZ69gCdVwA3ZUuHc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = SkillsMatrix;
var _c, _c1;
__turbopack_context__.k.register(_c, "CategoryCard");
__turbopack_context__.k.register(_c1, "SkillsMatrix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/portfolio/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TIMELINE = [
    {
        year: "2022",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: {
            ar: "البدايات",
            en: "First Steps"
        },
        description: {
            ar: "بدء رحلة تعلم الأردوينو والأنظمة المدمجة — أول مشروع LED يومض",
            en: "Started learning Arduino and embedded systems — first LED blink project"
        },
        color: "#00ff66",
        glowColor: "#00ff6640"
    },
    {
        year: "2023",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        title: {
            ar: "نظام المباني الذكية",
            en: "Smart Building System"
        },
        description: {
            ar: "تطوير نظام إدارة المباني الذكي — Arduino Mega + ESP8266 + Firebase + تطبيق أندرويد",
            en: "Developed Smart Building Management System — Arduino Mega + ESP8266 + Firebase + Android"
        },
        color: "#00e5ff",
        glowColor: "#00e5ff40"
    },
    {
        year: "2023",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        title: {
            ar: "نظام المواقف الذكي",
            en: "Smart Parking System"
        },
        description: {
            ar: "بناء نظام مواقف السيارات مع منظومة سلامة متعددة الحساسات — معمارية 3 مستويات",
            en: "Built Smart Parking System with multi-sensor safety — 3-tier architecture"
        },
        color: "#00e5ff",
        glowColor: "#00e5ff40"
    },
    {
        year: "2024",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: {
            ar: "الخزنة الذكية",
            en: "RFID Smart Safe"
        },
        description: {
            ar: "تطوير الخزنة الذكية مع خوارزمية مكافحة التجمد المبتكرة — Edge Computing",
            en: "Developed RFID Smart Safe with innovative Anti-Freeze Algorithm — Edge Computing"
        },
        color: "#ffab00",
        glowColor: "#ffab0040"
    },
    {
        year: "2024",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"],
        title: {
            ar: "أتمتة صالات الأفراح",
            en: "Wedding Hall Automation"
        },
        description: {
            ar: "نظام أتمتة صالات الأفراح — آلة حالات مع مزامنة صوتية وضوئية",
            en: "Wedding Hall Automation System — State Machine with audio/light synchronization"
        },
        color: "#b44dff",
        glowColor: "#b44dff40"
    },
    {
        year: "2024+",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        title: {
            ar: "المحفظة الاحترافية",
            en: "Professional Portfolio"
        },
        description: {
            ar: "إطلاق المحفظة الهندسية الشاملة لعرض المشاريع والخبرات",
            en: "Launching comprehensive engineering portfolio to showcase projects and expertise"
        },
        color: "#00ff66",
        glowColor: "#00ff6640"
    }
];
/* ═══════════════════════════════════════════════════════════════
   TIMELINE ITEM CARD
   ═══════════════════════════════════════════════════════════════ */ function TimelineCard({ item, index }) {
    _s();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px"
    });
    const isLeft = !isRTL() ? index % 2 === 0 : true;
    const isRight = !isRTL() ? index % 2 !== 0 : false;
    // On mobile, always on one side
    const slideFromX = isRTL() ? {
        hidden: {
            opacity: 0,
            x: -40,
            scale: 0.95
        }
    } : isLeft ? {
        hidden: {
            opacity: 0,
            x: -40,
            scale: 0.95
        }
    } : {
        hidden: {
            opacity: 0,
            x: 40,
            scale: 0.95
        }
    };
    const Icon = item.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: slideFromX.hidden,
        animate: isInView ? {
            opacity: 1,
            x: 0,
            scale: 1
        } : slideFromX.hidden,
        transition: {
            duration: 0.6,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ],
            delay: 0.05
        },
        className: "relative flex items-start gap-4 sm:gap-6 md:gap-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block md:w-[calc(50%-28px)]",
                children: [
                    !isRTL() && isLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card-dark rounded-xl p-5 card-hover group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCardContent, {
                            item: item
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    isRTL() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card-dark rounded-xl p-5 card-hover group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCardContent, {
                            item: item
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center shrink-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: isInView ? {
                        scale: [
                            1,
                            1.2,
                            1
                        ],
                        boxShadow: [
                            `0 0 4px ${item.glowColor}`,
                            `0 0 16px ${item.glowColor}`,
                            `0 0 4px ${item.glowColor}`
                        ]
                    } : {},
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    },
                    className: "w-[18px] h-[18px] rounded-full border-[3px] flex items-center justify-center",
                    style: {
                        borderColor: item.color,
                        background: "#0a0f1a",
                        boxShadow: `0 0 12px ${item.glowColor}`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[6px] h-[6px] rounded-full",
                        style: {
                            background: item.color,
                            boxShadow: `0 0 6px ${item.color}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/Timeline.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 md:w-[calc(50%-28px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card-dark rounded-xl p-5 card-hover group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCardContent, {
                                item: item
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    !isRTL() && isRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card-dark rounded-xl p-5 card-hover group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCardContent, {
                            item: item
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/Timeline.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(TimelineCard, "A8FN1NOxFpuVcpJ6wjXm7yA469I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = TimelineCard;
/* ═══════════════════════════════════════════════════════════════
   CARD CONTENT (extracted for reuse)
   ═══════════════════════════════════════════════════════════════ */ function TimelineCardContent({ item }) {
    _s1();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const Icon = item.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110",
                        style: {
                            background: `${item.color}12`,
                            border: `1px solid ${item.color}25`,
                            boxShadow: `0 0 10px ${item.glowColor}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-4.5 w-4.5",
                            style: {
                                color: item.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold font-mono tracking-wider",
                            style: {
                                color: item.color,
                                background: `${item.color}10`,
                                border: `1px solid ${item.color}25`
                            },
                            children: item.year
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-sm sm:text-base text-foreground mb-2 leading-tight",
                style: {
                    color: item.color
                },
                dir: isRTL() ? "rtl" : "ltr",
                children: lang(item.title.ar, item.title.en)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs sm:text-[13px] text-[#7a8ba8] leading-relaxed",
                dir: isRTL() ? "rtl" : "ltr",
                children: lang(item.description.ar, item.description.en)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(TimelineCardContent, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = TimelineCardContent;
function Timeline() {
    _s2();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        once: true,
        margin: "-80px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "mb-8 sm:mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#00ff6612] border border-[#00ff6625]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "h-4 w-4 text-[#00ff66]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold gradient-neon-text",
                                children: lang("رحلة الفريق الهندسية", "Our Engineering Journey")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#7a8ba8] leading-relaxed",
                        children: lang("من أول LED يومض إلى منظومات إنترنت الأشياء المتكاملة — رحلة التطور والابتكار", "From the first LED blink to full IoT systems — a journey of growth and innovation")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scaleY: 0
                            },
                            animate: isInView ? {
                                scaleY: 1
                            } : {
                                scaleY: 0
                            },
                            transition: {
                                duration: 1.5,
                                ease: "easeOut"
                            },
                            className: "w-full h-full origin-top",
                            style: {
                                background: `linear-gradient(to bottom, #00ff66, #00e5ff60, #00ff6660, #b44dff40, #00ff6620)`,
                                boxShadow: `0 0 8px #00ff6630, 0 0 20px #00ff6610`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden absolute right-6 top-0 bottom-0 w-[2px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scaleY: 0
                            },
                            animate: isInView ? {
                                scaleY: 1
                            } : {
                                scaleY: 0
                            },
                            transition: {
                                duration: 1.5,
                                ease: "easeOut"
                            },
                            className: "w-full h-full origin-top",
                            style: {
                                background: `linear-gradient(to bottom, #00ff66, #00e5ff60, #00ff6660, #b44dff40, #00ff6620)`,
                                boxShadow: `0 0 8px #00ff6630, 0 0 20px #00ff6610`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex flex-col gap-8 pl-12",
                        children: TIMELINE.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -right-[45px] top-[22px] w-[14px] h-[14px] rounded-full border-[3px] z-10",
                                        style: {
                                            borderColor: item.color,
                                            background: "#0a0f1a",
                                            boxShadow: `0 0 10px ${item.glowColor}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[5px] h-[5px] rounded-full mx-auto mt-[2px]",
                                            style: {
                                                background: item.color,
                                                boxShadow: `0 0 4px ${item.color}`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCardMobile, {
                                        item: item,
                                        index: index
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${item.year}-${index}`, true, {
                                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex flex-col gap-10",
                        children: TIMELINE.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCard, {
                                item: item,
                                index: index
                            }, `${item.year}-${index}`, false, {
                                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: isInView ? {
                    opacity: 1,
                    scale: 1
                } : {
                    opacity: 0,
                    scale: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 1
                },
                className: "flex justify-center mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark",
                    style: {
                        borderColor: "#00ff6620"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 rounded-full bg-[#00ff66] animate-pulse-neon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-[#00ff66]",
                            children: lang("المستقبل يبدأ الآن...", "The future starts now...")
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                            className: "h-3.5 w-3.5 text-[#00ff66]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/portfolio/Timeline.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/Timeline.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_s2(Timeline, "1WjLaktVxR7VZ69gCdVwA3ZUuHc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = Timeline;
/* ═══════════════════════════════════════════════════════════════
   MOBILE TIMELINE CARD
   ═══════════════════════════════════════════════════════════════ */ function TimelineCardMobile({ item, index }) {
    _s3();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-40px"
    });
    const Icon = item.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            x: isRTL() ? -30 : 30,
            scale: 0.95
        },
        animate: isInView ? {
            opacity: 1,
            x: 0,
            scale: 1
        } : {
            opacity: 0,
            x: isRTL() ? -30 : 30,
            scale: 0.95
        },
        transition: {
            duration: 0.5,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ],
            delay: index * 0.08
        },
        className: "glass-card-dark rounded-xl p-4 card-hover",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5 mb-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                        style: {
                            background: `${item.color}12`,
                            border: `1px solid ${item.color}25`,
                            boxShadow: `0 0 8px ${item.glowColor}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-4 w-4",
                            style: {
                                color: item.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/Timeline.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-wider",
                        style: {
                            color: item.color,
                            background: `${item.color}10`,
                            border: `1px solid ${item.color}25`
                        },
                        children: item.year
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/Timeline.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-xs sm:text-sm mb-1.5 leading-tight",
                style: {
                    color: item.color
                },
                dir: isRTL() ? "rtl" : "ltr",
                children: lang(item.title.ar, item.title.en)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] sm:text-xs text-[#7a8ba8] leading-relaxed",
                dir: isRTL() ? "rtl" : "ltr",
                children: lang(item.description.ar, item.description.en)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/Timeline.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/Timeline.tsx",
        lineNumber: 410,
        columnNumber: 5
    }, this);
}
_s3(TimelineCardMobile, "A8FN1NOxFpuVcpJ6wjXm7yA469I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c3 = TimelineCardMobile;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TimelineCard");
__turbopack_context__.k.register(_c1, "TimelineCardContent");
__turbopack_context__.k.register(_c2, "Timeline");
__turbopack_context__.k.register(_c3, "TimelineCardMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/portfolio/SecurityAudit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SecurityAudit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fingerprint.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */ const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.96
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
const statVariants = {
    hidden: {
        opacity: 0,
        y: 15,
        scale: 0.9
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: i * 0.1,
                ease: "easeOut"
            }
        })
};
const itemVariants = {
    hidden: {
        opacity: 0,
        x: -10
    },
    visible: (i)=>({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: i * 0.04,
                ease: "easeOut"
            }
        })
};
/* ═══════════════════════════════════════════════════════════════
   ANIMATED SCORE RING — SVG circular progress
   ═══════════════════════════════════════════════════════════════ */ function ScoreRing({ score, maxScore = 100, size = 80, strokeWidth = 5, color = "#00ff66", label, animateOnView = true }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const percentage = Math.min(score / maxScore * 100, 100);
    const radius = (size - strokeWidth * 2) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - percentage / 100 * circumference;
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScoreRing.useEffect": ()=>{
            if (!animateOnView || isInView) {
                const duration = 1500;
                const startTime = Date.now();
                const tick = {
                    "ScoreRing.useEffect.tick": ()=>{
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.round(eased * score));
                        if (progress < 1) requestAnimationFrame(tick);
                    }
                }["ScoreRing.useEffect.tick"];
                requestAnimationFrame(tick);
            }
        }
    }["ScoreRing.useEffect"], [
        animateOnView,
        isInView,
        score
    ]);
    const getScoreColor = (s)=>{
        if (s >= 90) return "#00ff66";
        if (s >= 70) return "#00e5ff";
        if (s >= 50) return "#ffab00";
        return "#ff3d5a";
    };
    const ringColor = color || getScoreColor(score);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "flex flex-col items-center gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    width: size,
                    height: size
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        className: "transform -rotate-90",
                        style: {
                            filter: `drop-shadow(0 0 6px ${ringColor}40)`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: size / 2,
                                cy: size / 2,
                                r: radius,
                                fill: "none",
                                stroke: "rgba(30,45,77,0.5)",
                                strokeWidth: strokeWidth
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: size / 2,
                                cy: size / 2,
                                r: radius,
                                fill: "none",
                                stroke: ringColor,
                                strokeWidth: strokeWidth,
                                strokeLinecap: "round",
                                strokeDasharray: circumference,
                                initial: {
                                    strokeDashoffset: circumference
                                },
                                animate: !animateOnView || isInView ? {
                                    strokeDashoffset: offset
                                } : {
                                    strokeDashoffset: circumference
                                },
                                transition: {
                                    duration: 1.5,
                                    ease: [
                                        0.25,
                                        0.46,
                                        0.45,
                                        0.94
                                    ]
                                },
                                style: {
                                    filter: `drop-shadow(0 0 4px ${ringColor}60)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm sm:text-base font-bold font-mono leading-none",
                                style: {
                                    color: ringColor
                                },
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-[#7a8ba8] font-mono",
                                children: [
                                    "/",
                                    maxScore
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] sm:text-xs text-[#7a8ba8] font-medium text-center leading-tight",
                children: lang(label.ar, label.en)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(ScoreRing, "cpc5y74wE7WNr0/zIUKSAE5N2Yg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = ScoreRing;
/* ═══════════════════════════════════════════════════════════════
   SCORE BAR — Horizontal animated progress bar
   ═══════════════════════════════════════════════════════════════ */ function ScoreBar({ score, label, detail, color }) {
    _s1();
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-20px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "space-y-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] sm:text-xs text-[#7a8ba8] truncate",
                        children: lang(label.ar, label.en)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] font-mono hidden sm:inline",
                                children: lang(detail.ar, detail.en)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold font-mono min-w-[32px] text-right",
                                style: {
                                    color
                                },
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 rounded-full overflow-hidden",
                style: {
                    background: "rgba(30,45,77,0.5)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "h-full rounded-full",
                    style: {
                        background: `linear-gradient(90deg, ${color}cc, ${color})`,
                        boxShadow: `0 0 8px ${color}40`
                    },
                    initial: {
                        width: 0
                    },
                    animate: isInView ? {
                        width: `${score}%`
                    } : {
                        width: 0
                    },
                    transition: {
                        duration: 1,
                        ease: [
                            0.25,
                            0.46,
                            0.45,
                            0.94
                        ],
                        delay: 0.1
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_s1(ScoreBar, "/hzHkFvjanp9x07iBUJZISAEyzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ScoreBar;
function CheckItem({ text, status, index }) {
    _s2();
    const { t: lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const config = {
        pass: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 259,
                columnNumber: 13
            }, this),
            color: "#00ff66",
            bg: "#00ff6608",
            border: "#00ff6620"
        },
        fixed: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this),
            color: "#00e5ff",
            bg: "#00e5ff08",
            border: "#00e5ff20"
        },
        warn: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 271,
                columnNumber: 13
            }, this),
            color: "#ffab00",
            bg: "#ffab0008",
            border: "#ffab0020"
        },
        fail: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 277,
                columnNumber: 13
            }, this),
            color: "#ff3d5a",
            bg: "#ff3d5a08",
            border: "#ff3d5a20"
        },
        na: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 283,
                columnNumber: 13
            }, this),
            color: "#7a8ba8",
            bg: "#7a8ba808",
            border: "#7a8ba820"
        }
    };
    const c = config[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: index,
        variants: itemVariants,
        className: "flex items-start gap-2.5 py-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-5 w-5 shrink-0 items-center justify-center rounded mt-0.5",
                style: {
                    color: c.color,
                    background: c.bg,
                    border: `1px solid ${c.border}`
                },
                children: c.icon
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] sm:text-xs text-[#c5cdd8] leading-relaxed",
                children: [
                    lang(text.ar, text.en),
                    status === "fixed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 text-[#00e5ff] font-semibold text-[10px]",
                        children: [
                            lang("تم الإصلاح", "FIXED"),
                            " ✅"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
_s2(CheckItem, "EB+8YGRLp3dNhYSc1KnABaj+ALA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = CheckItem;
/* ═══════════════════════════════════════════════════════════════
   COLLAPSIBLE TOOL CARD
   ═══════════════════════════════════════════════════════════════ */ function ToolCard({ icon, title, subtitle, color, glowColor, score, children, initiallyExpanded = false }) {
    _s3();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initiallyExpanded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: cardVariants,
        className: "glass-card-dark rounded-xl overflow-hidden card-hover group relative",
        style: {
            borderColor: `${color}12`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full",
                style: {
                    background: `linear-gradient(90deg, transparent, ${color}, ${color}80, transparent)`,
                    boxShadow: `0 0 12px ${glowColor}`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500",
                style: {
                    background: `radial-gradient(circle at top right, ${glowColor}, transparent 70%)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(!expanded),
                className: "w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-4 cursor-pointer group/btn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                        style: {
                            background: `${color}10`,
                            border: `1px solid ${color}25`,
                            color: color,
                            boxShadow: `0 0 12px ${glowColor}`
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm sm:text-base font-bold leading-tight",
                                style: {
                                    color
                                },
                                dir: isRTL() ? "rtl" : "ltr",
                                children: lang(title.ar, title.en)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[#7a8ba8] mt-0.5",
                                dir: isRTL() ? "rtl" : "ltr",
                                children: lang(subtitle.ar, subtitle.en)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                        score: score,
                        size: 52,
                        strokeWidth: 4,
                        color: color
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: expanded ? 180 : 0
                        },
                        transition: {
                            duration: 0.25
                        },
                        style: {
                            color: "#7a8ba8"
                        },
                        children: isRTL() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.35,
                        ease: [
                            0.25,
                            0.46,
                            0.45,
                            0.94
                        ]
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 sm:px-6 pb-5 sm:pb-6",
                        style: {
                            borderTop: `1px solid ${color}10`
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 424,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                    lineNumber: 417,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
_s3(ToolCard, "9OlDkwVLICJ93m3gp8LI5/zkxKM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = ToolCard;
/* ═══════════════════════════════════════════════════════════════
   LIGHTHOUSE TOOL CARD CONTENT
   ═══════════════════════════════════════════════════════════════ */ function LighthouseContent() {
    _s4();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const categories = [
        {
            score: 75,
            label: {
                ar: "الأداء",
                en: "Performance"
            },
            color: "#ffab00"
        },
        {
            score: 94,
            label: {
                ar: "إمكانية الوصول",
                en: "Accessibility"
            },
            color: "#00ff66"
        },
        {
            score: 96,
            label: {
                ar: "أفضل الممارسات",
                en: "Best Practices"
            },
            color: "#00ff66"
        },
        {
            score: 100,
            label: {
                ar: "تحسين محركات البحث",
                en: "SEO"
            },
            color: "#00ff66"
        }
    ];
    const metrics = [
        {
            score: 99,
            label: {
                ar: "أول محتوى مرئي",
                en: "First Contentful Paint"
            },
            detail: {
                ar: "1.2 ثانية",
                en: "1.2s"
            }
        },
        {
            score: 50,
            label: {
                ar: "أكبر محتوى مرئي",
                en: "Largest Contentful Paint"
            },
            detail: {
                ar: "4.0 ثانية",
                en: "4.0s"
            }
        },
        {
            score: 59,
            label: {
                ar: "وقت الحظر الكلي",
                en: "Total Blocking Time"
            },
            detail: {
                ar: "490 مللي ثانية",
                en: "490ms"
            }
        },
        {
            score: 100,
            label: {
                ar: "انزياح التخطيط التراكمي",
                en: "Cumulative Layout Shift"
            },
            detail: {
                ar: "0",
                en: "0"
            }
        },
        {
            score: 100,
            label: {
                ar: "مؤشر السرعة",
                en: "Speed Index"
            },
            detail: {
                ar: "1.3 ثانية",
                en: "1.3s"
            }
        },
        {
            score: 50,
            label: {
                ar: "وقت التفاعل",
                en: "Time to Interactive"
            },
            detail: {
                ar: "7.2 ثانية",
                en: "7.2s"
            }
        }
    ];
    const issues = [
        {
            text: {
                ar: "تصغير حجم JavaScript (وضع التطوير)",
                en: "Minify JavaScript (dev mode)"
            },
            status: "warn"
        },
        {
            text: {
                ar: "تقليل JavaScript غير المستخدم (وضع التطوير — Next.js devtools)",
                en: "Reduce unused JavaScript (dev mode - Next.js devtools)"
            },
            status: "warn"
        },
        {
            text: {
                ar: "تقليل العمل على الخيط الرئيسي",
                en: "Minimize main-thread work"
            },
            status: "warn"
        },
        {
            text: {
                ar: "طلبات حظر العرض",
                en: "Render-blocking requests"
            },
            status: "warn"
        },
        {
            text: {
                ar: "أزرار بدون أسماء قابلة للوصول",
                en: "Buttons without accessible names"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "اسم التبديل اللغوي القابل للوصول",
                en: "Language toggle accessible name"
            },
            status: "fixed"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 mt-4",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                className: "h-3.5 w-3.5 text-[#7a8ba8]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold",
                                children: lang("نتائج الفئات", "Category Scores")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                                score: cat.score,
                                size: 64,
                                strokeWidth: 3.5,
                                color: cat.color,
                                label: cat.label
                            }, cat.label.en, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "h-3.5 w-3.5 text-[#7a8ba8]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold",
                                children: lang("مقاييس الأداء", "Performance Metrics")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5",
                        children: metrics.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                score: m.score,
                                label: m.label,
                                detail: m.detail,
                                color: m.score >= 90 ? "#00ff66" : m.score >= 70 ? "#00e5ff" : m.score >= 50 ? "#ffab00" : "#ff3d5a"
                            }, m.label.en, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 505,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "h-3.5 w-3.5 text-[#ffab00]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-[#7a8ba8] uppercase tracking-wider font-semibold",
                                        children: lang("المشاكل المكتشفة", "Issues Found")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] px-2 py-0.5 rounded-full font-mono font-bold",
                                style: {
                                    background: "#ffab0015",
                                    color: "#ffab00",
                                    border: "1px solid #ffab0025"
                                },
                                children: lang("١٥ إجمالي", "15 total")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        className: "space-y-0.5",
                        children: issues.map((issue, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                text: issue.text,
                                status: issue.status,
                                index: i
                            }, i, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 531,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 472,
        columnNumber: 5
    }, this);
}
_s4(LighthouseContent, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = LighthouseContent;
/* ═══════════════════════════════════════════════════════════════
   SECURITY HEADERS TOOL CARD CONTENT
   ═══════════════════════════════════════════════════════════════ */ function SecurityHeadersContent() {
    _s5();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const headers = [
        {
            text: {
                ar: "X-Content-Type-Options: nosniff",
                en: "X-Content-Type-Options: nosniff"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "X-Frame-Options: DENY",
                en: "X-Frame-Options: DENY"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "X-XSS-Protection: 1; mode=block",
                en: "X-XSS-Protection: 1; mode=block"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "سياسة أمان المحتوى (شاملة)",
                en: "Content-Security-Policy (comprehensive)"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "Strict-Transport-Security: max-age=63072000",
                en: "Strict-Transport-Security: max-age=63072000"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "Referrer-Policy: strict-origin-when-cross-origin",
                en: "Referrer-Policy: strict-origin-when-cross-origin"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "Permissions-Policy",
                en: "Permissions-Policy"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "إزالة X-Powered-By (كان: Next.js)",
                en: "X-Powered-By removed (was: Next.js)"
            },
            status: "fixed"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 mt-4",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "led-on"
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[#00ff66] font-semibold",
                        children: lang("جميع رؤوس الأمان تم إصلاحها بنجاح", "All security headers fixed successfully")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                className: "space-y-0.5",
                children: headers.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                        text: h.text,
                        status: h.status,
                        index: i
                    }, i, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 570,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 558,
        columnNumber: 5
    }, this);
}
_s5(SecurityHeadersContent, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c5 = SecurityHeadersContent;
/* ═══════════════════════════════════════════════════════════════
   NUCLEI TOOL CARD CONTENT
   ═══════════════════════════════════════════════════════════════ */ function NucleiContent() {
    _s6();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const findings = [
        {
            text: {
                ar: "تم تثبيت الأداة وتحميل القوالب",
                en: "Tool installed and templates downloaded"
            },
            status: "pass"
        },
        {
            text: {
                ar: "لم يتم اكتشاف ثغرات حرجة على التطبيق",
                en: "No critical vulnerabilities detected on the application"
            },
            status: "pass"
        },
        {
            text: {
                ar: "لا توجد مشاكل كشف المعلومات",
                en: "No information disclosure issues"
            },
            status: "pass"
        },
        {
            text: {
                ar: "لا توجد ملفات تهيئة مكشوفة أو لوحات تحكم",
                en: "No exposed config files or admin panels"
            },
            status: "pass"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 mt-4",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "led-on"
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 595,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[#00ff66] font-semibold",
                        children: lang("لا توجد ثغرات أمنية — التطبيق آمن", "No vulnerabilities detected — Application is secure")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 594,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                className: "space-y-0.5",
                children: findings.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                        text: f.text,
                        status: f.status,
                        index: i
                    }, i, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 603,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 601,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 592,
        columnNumber: 5
    }, this);
}
_s6(NucleiContent, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c6 = NucleiContent;
/* ═══════════════════════════════════════════════════════════════
   OWASP TOOL CARD CONTENT
   ═══════════════════════════════════════════════════════════════ */ function OWASPContent() {
    _s7();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const checks = [
        {
            num: 1,
            text: {
                ar: "الحقن (SQL/XSS): آمن (لا توجد مدخلات من جانب الخادم)",
                en: "Injection (SQLi/XSS): Safe (no server-side inputs)"
            },
            status: "pass"
        },
        {
            num: 2,
            text: {
                ar: "المصادقة المعطلة: غير قابل للتطبيق (موقع ثابت)",
                en: "Broken Authentication: N/A (static site, no auth needed)"
            },
            status: "na"
        },
        {
            num: 3,
            text: {
                ar: "كشف البيانات الحساسة: تم الإصلاح (إزالة X-Powered-By)",
                en: "Sensitive Data Exposure: Fixed (removed X-Powered-By)"
            },
            status: "fixed"
        },
        {
            num: 4,
            text: {
                ar: "كيانات XML الخارجية: آمن (لا يوجد تحليل XML)",
                en: "XML External Entities: Safe (no XML parsing)"
            },
            status: "pass"
        },
        {
            num: 5,
            text: {
                ar: "التحكم المكسور في الوصول: آمن (لا توجد مسارات مشرف مكشوفة)",
                en: "Broken Access Control: Safe (no admin routes exposed)"
            },
            status: "pass"
        },
        {
            num: 6,
            text: {
                ar: "الإعداد الخاطئ للأمان: تم الإصلاح (جميع رؤوس الأمان مضافة)",
                en: "Security Misconfiguration: Fixed (all security headers added)"
            },
            status: "fixed"
        },
        {
            num: 7,
            text: {
                ar: "البرمجة عبر المواقع: آمن (لا يوجد عرض ديناميكي من معلمات URL)",
                en: "Cross-Site Scripting: Safe (no dynamic rendering from URL params)"
            },
            status: "pass"
        },
        {
            num: 8,
            text: {
                ar: "إلغاء التسلسل غير الآمن: غير قابل للتطبيق (لا يوجد تسلسل)",
                en: "Insecure Deserialization: N/A (no serialization)"
            },
            status: "na"
        },
        {
            num: 9,
            text: {
                ar: "الثغرات المعروفة: التبعيات محدثة",
                en: "Known Vulnerabilities: Dependencies up to date"
            },
            status: "pass"
        },
        {
            num: 10,
            text: {
                ar: "التسجيل والمراقبة: غير قابل للتطبيق (نشر ثابت)",
                en: "Logging & Monitoring: N/A (static deployment)"
            },
            status: "na"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 mt-4",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "led-on"
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 674,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[#00ff66] font-semibold",
                        children: lang("جميع الفئات آمنة أو تم إصلاحها", "All categories safe or fixed")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 675,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 673,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                className: "space-y-0.5",
                children: checks.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2.5 py-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold font-mono mt-0.5",
                                style: {
                                    background: "rgba(0,229,255,0.08)",
                                    color: "#00e5ff",
                                    border: "1px solid rgba(0,229,255,0.2)"
                                },
                                children: c.num
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 684,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                text: c.text,
                                status: c.status,
                                index: c.num
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 694,
                                columnNumber: 13
                            }, this)
                        ]
                    }, c.num, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 683,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 681,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 671,
        columnNumber: 5
    }, this);
}
_s7(OWASPContent, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c7 = OWASPContent;
/* ═══════════════════════════════════════════════════════════════
   SEO FIXES SECTION
   ═══════════════════════════════════════════════════════════════ */ function SEOFixesSection() {
    _s8();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const seoFixes = [
        {
            text: {
                ar: "إضافة sitemap.xml",
                en: "sitemap.xml added"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "إضافة manifest.webmanifest",
                en: "manifest.webmanifest added"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "تحسين robots.txt مع رابط خريطة الموقع",
                en: "robots.txt optimized with sitemap URL"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "إضافة بيانات Open Graph الوصفية",
                en: "Open Graph metadata added"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "إضافة بيانات Twitter Card الوصفية",
                en: "Twitter card metadata added"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "تكوين الرابط الأساسي Canonical URL",
                en: "Canonical URL configured"
            },
            status: "fixed"
        },
        {
            text: {
                ar: "تكوين metadataBase",
                en: "metadataBase configured"
            },
            status: "fixed"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 15
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: 0.9
        },
        className: "mt-8 sm:mt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card-dark rounded-xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[2px] w-full",
                    style: {
                        background: "linear-gradient(90deg, transparent, #b44dff, #b44dff80, transparent)",
                        boxShadow: "0 0 12px #b44dff40"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                    lineNumber: 728,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                                    style: {
                                        background: "#b44dff10",
                                        border: "1px solid #b44dff25",
                                        boxShadow: "0 0 12px #b44dff40",
                                        color: "#b44dff"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-4.5 w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                    lineNumber: 737,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm sm:text-base font-bold",
                                            style: {
                                                color: "#b44dff"
                                            },
                                            dir: isRTL() ? "rtl" : "ltr",
                                            children: lang("إصلاحات تحسين محركات البحث", "SEO Fixes")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                            lineNumber: 749,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[#7a8ba8]",
                                            dir: isRTL() ? "rtl" : "ltr",
                                            children: lang("تحسينات إضافية للموقع", "Additional site optimizations")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                            lineNumber: 752,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                    lineNumber: 748,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold font-mono px-2.5 py-1 rounded-full",
                                        style: {
                                            background: "#b44dff15",
                                            color: "#b44dff",
                                            border: "1px solid #b44dff25"
                                        },
                                        children: [
                                            lang("٧/٧", "7/7"),
                                            " ✅"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                        lineNumber: 757,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                    lineNumber: 756,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: containerVariants,
                            initial: "hidden",
                            animate: "visible",
                            className: "space-y-0.5",
                            dir: isRTL() ? "rtl" : "ltr",
                            children: seoFixes.map((fix, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                    text: fix.text,
                                    status: fix.status,
                                    index: i
                                }, i, false, {
                                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                    lineNumber: 768,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 766,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                    lineNumber: 735,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
            lineNumber: 726,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 720,
        columnNumber: 5
    }, this);
}
_s8(SEOFixesSection, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c8 = SEOFixesSection;
/* ═══════════════════════════════════════════════════════════════
   OVERALL SCORE HERO — Big animated ring + stats
   ═══════════════════════════════════════════════════════════════ */ function OverallScoreHero() {
    _s9();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const stats = [
        {
            value: {
                ar: "٩٢/١٠٠",
                en: "92/100"
            },
            label: {
                ar: "النتيجة الإجمالية",
                en: "Overall Score"
            },
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 788,
                columnNumber: 13
            }, this),
            color: "#00ff66",
            glowColor: "#00ff6640"
        },
        {
            value: {
                ar: "+١٧",
                en: "+17"
            },
            label: {
                ar: "تم إصلاحها",
                en: "Issues Fixed"
            },
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 795,
                columnNumber: 13
            }, this),
            color: "#00e5ff",
            glowColor: "#00e5ff40"
        },
        {
            value: {
                ar: "٤",
                en: "4"
            },
            label: {
                ar: "أدوات اختبار",
                en: "Tools Used"
            },
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 802,
                columnNumber: 13
            }, this),
            color: "#b44dff",
            glowColor: "#b44dff40"
        },
        {
            value: {
                ar: "٣١/٣١",
                en: "31/31"
            },
            label: {
                ar: "فحوصات ناجحة",
                en: "Checks Passed"
            },
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 809,
                columnNumber: 13
            }, this),
            color: "#00ff66",
            glowColor: "#00ff6640"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        },
        className: "glass-card-dark rounded-xl p-5 sm:p-6 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-20 -right-20 w-60 h-60 pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(0,255,102,0.04), transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-20 -left-20 w-60 h-60 pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(0,229,255,0.03), transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 827,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                dir: isRTL() ? "rtl" : "ltr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    boxShadow: [
                                        "0 0 8px #00ff6640, 0 0 16px #00ff6620",
                                        "0 0 12px #00ff6660, 0 0 24px #00ff6630",
                                        "0 0 8px #00ff6640, 0 0 16px #00ff6620"
                                    ]
                                },
                                transition: {
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                className: "flex h-8 w-8 items-center justify-center rounded-lg",
                                style: {
                                    background: "#00ff6612",
                                    border: "1px solid #00ff6625"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "h-4 w-4 text-[#00ff66]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                    lineNumber: 847,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 835,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold gradient-neon-text",
                                children: lang("النتيجة الإجمالية للأمان", "Overall Security Score")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 849,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6",
                        children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                custom: i,
                                variants: statVariants,
                                initial: "hidden",
                                animate: "visible",
                                className: "flex flex-col items-center gap-2 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-9 w-9 items-center justify-center rounded-lg",
                                        style: {
                                            background: `${stat.color}12`,
                                            border: `1px solid ${stat.color}25`,
                                            boxShadow: `0 0 10px ${stat.glowColor}`,
                                            color: stat.color
                                        },
                                        children: stat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                        lineNumber: 865,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg sm:text-xl font-bold font-mono",
                                        style: {
                                            color: stat.color
                                        },
                                        children: lang(stat.value.ar, stat.value.en)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                        lineNumber: 876,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] sm:text-xs text-[#7a8ba8] font-medium text-center",
                                        children: lang(stat.label.ar, stat.label.en)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                        lineNumber: 882,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, stat.label.en, true, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 857,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 855,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 rounded-lg p-3 flex items-center gap-3",
                        style: {
                            background: "#00ff6608",
                            border: "1px solid #00ff6615"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "led-on"
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 891,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#c5cdd8]",
                                children: lang("التطبيق في حالة أمنية ممتازة — جميع المشاكل الحرجة تم إصلاحها. المشاكل المتبقية مرتبطة بوضع التطوير فقط.", "Application is in excellent security shape — all critical issues fixed. Remaining issues are dev-mode only.")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 892,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 890,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 832,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 816,
        columnNumber: 5
    }, this);
}
_s9(OverallScoreHero, "UNNhB9K1aGauLBaoiFjIXgHXc6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c9 = OverallScoreHero;
function SecurityAudit() {
    _s10();
    const { t: lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        once: true,
        margin: "-80px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full",
        dir: isRTL() ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "mb-8 sm:mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#00ff6612] border border-[#00ff6625]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "h-4 w-4 text-[#00ff66]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                    lineNumber: 924,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 923,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold gradient-neon-text",
                                children: lang("تقرير تدقيق الأمان", "Security Audit Report")
                            }, void 0, false, {
                                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                                lineNumber: 926,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 922,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#7a8ba8] leading-relaxed",
                        children: lang("فحص شامل باستخدام 4 أدوات اختبار أمني احترافية — Lighthouse، Security Headers، Nuclei، OWASP Top 10", "Comprehensive scan using 4 professional security testing tools — Lighthouse, Security Headers, Nuclei, OWASP Top 10")
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 930,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 916,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OverallScoreHero, {}, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 939,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: containerRef,
                variants: containerVariants,
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
                className: "grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mt-6 sm:mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 951,
                            columnNumber: 17
                        }, void 0),
                        title: {
                            ar: "Lighthouse (Google)",
                            en: "Lighthouse (Google)"
                        },
                        subtitle: {
                            ar: "تحليل الأداء والجودة وسهولة الوصول",
                            en: "Performance, quality & accessibility analysis"
                        },
                        color: "#ffab00",
                        glowColor: "#ffab0040",
                        score: 75,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LighthouseContent, {}, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 958,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 950,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 963,
                            columnNumber: 17
                        }, void 0),
                        title: {
                            ar: "التحقق من رؤوس الأمان",
                            en: "Security Headers Check"
                        },
                        subtitle: {
                            ar: "فحص رؤوس HTTP الأمنية الأساسية",
                            en: "Essential HTTP security headers verification"
                        },
                        color: "#00e5ff",
                        glowColor: "#00e5ff40",
                        score: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecurityHeadersContent, {}, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 970,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 962,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 975,
                            columnNumber: 17
                        }, void 0),
                        title: {
                            ar: "Nuclei (ProjectDiscovery)",
                            en: "Nuclei (ProjectDiscovery)"
                        },
                        subtitle: {
                            ar: "فحص الثغرات الأمنية المتقدم",
                            en: "Advanced vulnerability scanning"
                        },
                        color: "#00ff66",
                        glowColor: "#00ff6640",
                        score: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NucleiContent, {}, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 982,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 974,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 987,
                            columnNumber: 17
                        }, void 0),
                        title: {
                            ar: "OWASP Top 10",
                            en: "OWASP Top 10"
                        },
                        subtitle: {
                            ar: "فحص أمني سريع لأهم 10 فئات",
                            en: "Quick security check for top 10 categories"
                        },
                        color: "#b44dff",
                        glowColor: "#b44dff40",
                        score: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OWASPContent, {}, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 994,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                        lineNumber: 986,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 942,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SEOFixesSection, {}, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: 1.1
                },
                className: "mt-6 sm:mt-8 flex items-center justify-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-4 py-2 rounded-full",
                    style: {
                        background: "rgba(0,255,102,0.06)",
                        border: "1px solid rgba(0,255,102,0.12)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            className: "h-4 w-4 text-[#00ff66]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 1009,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[#7a8ba8] font-medium",
                            children: lang("آخر تحديث: يناير ٢٠٢٥ • الموقع آمن ومعتمد", "Last updated: January 2025 • Site is secure & verified")
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 1010,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "led-on"
                        }, void 0, false, {
                            fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                            lineNumber: 1016,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                    lineNumber: 1008,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
                lineNumber: 1002,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/portfolio/SecurityAudit.tsx",
        lineNumber: 914,
        columnNumber: 5
    }, this);
}
_s10(SecurityAudit, "1WjLaktVxR7VZ69gCdVwA3ZUuHc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c10 = SecurityAudit;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "ScoreRing");
__turbopack_context__.k.register(_c1, "ScoreBar");
__turbopack_context__.k.register(_c2, "CheckItem");
__turbopack_context__.k.register(_c3, "ToolCard");
__turbopack_context__.k.register(_c4, "LighthouseContent");
__turbopack_context__.k.register(_c5, "SecurityHeadersContent");
__turbopack_context__.k.register(_c6, "NucleiContent");
__turbopack_context__.k.register(_c7, "OWASPContent");
__turbopack_context__.k.register(_c8, "SEOFixesSection");
__turbopack_context__.k.register(_c9, "OverallScoreHero");
__turbopack_context__.k.register(_c10, "SecurityAudit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/faq.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"keywords\":[\"خدمات\",\"خدمة\",\"services\",\"ماذا تقدمون\",\"ماذا تعملون\",\"tawfi3\",\"عرض\",\"offers\",\"what do you offer\"],\"answer_ar\":\"نقدم 6 خدمات رئيسية:\\n\\n🏠 **أنظمة المنازل والمباني الذكية** — تحكم ذكي بالإضاءة، الأبواب، المراقبة، كشف الحريق\\n☁️ **حلول IoT والتكامل السحابي** — ربط الأجهزة بـ Firebase ولوحات مراقبة حية\\n🔐 **أنظمة أمان وحماية** — كاميرات، حساسات حركة، إنذارات ذكية\\n📡 **شبكات حساسات لا سلكية** — ربط عشرات الحساسات بنظام مركزي\\n⚙️ **أتمتة وتحكم صناعي** — أنظمة تحكم آلية للمصانع والمشاغل\\n🛠️ **تصميم وبرمجة متحكمات** — برمجة Arduino, ESP32, STM32 بلغة C/C++\",\"answer_en\":\"We offer 6 main services:\\n\\n🏠 **Smart Home & Building Automation** — Smart control for lighting, doors, monitoring, fire detection\\n☁️ **IoT Solutions & Cloud Integration** — Connect devices to Firebase with live dashboards\\n🔐 **Security & Protection Systems** — Cameras, motion sensors, smart alarms\\n📡 **Wireless Sensor Networks** — Connect dozens of sensors to a central system\\n⚙️ **Industrial Automation & Control** — Automated control systems for factories\\n🛠️ **Microcontroller Design & Programming** — Arduino, ESP32, STM32 programming in C/C++\"},{\"id\":2,\"keywords\":[\"مشاريع\",\"projects\",\"كم مشروع\",\"how many projects\",\"اعمال\",\"أعمال\",\"portfolio\",\"portoflio\"],\"answer_ar\":\"أنجزنا **4 مشاريع حقيقية** حتى الآن:\\n\\n1. 🏠 **نظام المنزل الذكي** — تحكم شامل بالمنزل مع كشف حريق وأمان\\n2. 🔐 **الخزنة الذكية** — نظام أمان متعدد المستويات مع PIN وتتبع\\n3. 🏗️ **نظام أمان المنشآت** — مراقبة محيطية كاملة مع إنذارات ذكية\\n4. 🎪 **نظام أتمتة الفعاليات** — تنظيم فعاليات تلقائي بالكامل\\n\\nكل مشروع تم اختباره في بيئة حقيقية وليس تجريبياً.\",\"answer_en\":\"We have completed **4 real projects** so far:\\n\\n1. 🏠 **Smart Home System** — Full home control with fire detection & security\\n2. 🔐 **Smart Safe System** — Multi-level security with PIN & tracking\\n3. 🏗️ **Facility Security System** — Complete perimeter monitoring with smart alarms\\n4. 🎪 **Event Automation System** — Fully automated event organization\\n\\nEvery project has been tested in a real production environment.\"},{\"id\":3,\"keywords\":[\"تقنيات\",\"technologies\",\"تقنية\",\"تقنياتكم\",\"استخدمتم\",\"tools\",\"أدوات\",\"stack\",\"hardware\",\"hardware\",\"عتاد\"],\"answer_ar\":\"نستخدم مجموعة واسعة من التقنيات:\\n\\n**المتحكمات:** Arduino, ESP32, ESP8266, STM32\\n**البرمجة:** C/C++, Assembly, Python, JavaScript\\n**السحابة:** Firebase (Realtime DB, Firestore, Cloud Functions)\\n**الاتصال:** Wi-Fi, Bluetooth, UART, SPI, I2C\\n**الحساسات:** DHT22, PIR, MQ-2, Ultrasonic, RFID, IR\\n**البروتوكولات:** MQTT, HTTP, WebSockets\\n**التطبيقات:** Flutter, Android native\\n**التصميم:** Figma, KiCad\",\"answer_en\":\"We use a wide range of technologies:\\n\\n**Microcontrollers:** Arduino, ESP32, ESP8266, STM32\\n**Programming:** C/C++, Assembly, Python, JavaScript\\n**Cloud:** Firebase (Realtime DB, Firestore, Cloud Functions)\\n**Communication:** Wi-Fi, Bluetooth, UART, SPI, I2C\\n**Sensors:** DHT22, PIR, MQ-2, Ultrasonic, RFID, IR\\n**Protocols:** MQTT, HTTP, WebSockets\\n**Apps:** Flutter, Android native\\n**Design:** Figma, KiCad\"},{\"id\":4,\"keywords\":[\"انترنت\",\"بدون إنترنت\",\"offline\",\"wifi\",\"واي فاي\",\"اتصال\",\"connect\",\"لا يحتاج\",\"يعمل بدون\"],\"answer_ar\":\"نعم! **جميع أنظمتنا تعمل بدون إنترنت.**\\n\\nهذا من مبادئنا الأساسية:\\n\\n🔹 **معالجة حافة (Edge Computing)** — العتاد يتخذ القرارات محلياً\\n🔹 **استقلالية تامة** — الإنترنت ميزة إضافية وليس شرطاً\\n🔹 **قرارات فورية** — كشف الحريق والإنذارات تعمل حتى لو انقطع الإنترنت\\n🔹 **التكامل السحابي اختياري** — يتم تنشيطه عند توفر الإنترنت لمراقبة عن بُعد\",\"answer_en\":\"Yes! **All our systems work without internet.**\\n\\nThis is one of our core principles:\\n\\n🔹 **Edge Computing** — Hardware makes decisions locally\\n🔹 **Full Independence** — Internet is a feature, not a requirement\\n🔹 **Instant Decisions** — Fire detection and alarms work even without internet\\n🔹 **Cloud Integration is Optional** — Activated when internet is available for remote monitoring\"},{\"id\":5,\"keywords\":[\"خزنة\",\"safe\",\"خزنة ذكية\",\"smart safe\",\"locker\",\"قفل\",\"lock\"],\"answer_ar\":\"🔐 **الخزنة الذكية** نظام أمان متعدد المستويات:\\n\\n**المكونات:**\\n• لوحة مفاتيح رقمية (4 أرقام)\\n• قفل كهروميكانيكي\\n• حساسات إنذار (حركة + صوت)\\n• وحدة تحكم ESP32\\n\\n**المميزات:**\\n• فتح بإدخال PIN صحيح أو عبر التطبيق\\n• تتبع جميع محاولات الفتح\\n• إنذار عند 3 محاولات خاطئة\\n• تنبيه فوري عبر Firebase\\n• يعمل بدون إنترنت\",\"answer_en\":\"🔐 **Smart Safe System** — A multi-level security system:\\n\\n**Components:**\\n• Digital keypad (4-digit PIN)\\n• Electromechanical lock\\n• Alarm sensors (motion + sound)\\n• ESP32 controller\\n\\n**Features:**\\n• Open via correct PIN or mobile app\\n• Track all unlock attempts\\n• Alarm after 3 failed attempts\\n• Instant alert via Firebase\\n• Works without internet\"},{\"id\":6,\"keywords\":[\"فريق\",\"team\",\"من أنتم\",\"who are you\",\"أعضاء\",\"members\",\"عمار\",\"محمد\",\"ammar\",\"mohammad\",\"founders\"],\"answer_ar\":\"فريقنا يتكون من شريكين مؤسسين:\\n\\n🟢 **عمار مشارقة** — مؤسس ومدير العمليات\\n• إدارة المشاريع والتنسيق\\n• التواصل مع العملاء\\n• التخطيط الاستراتيجي\\n\\n🔵 **محمد عقيلي** — المؤسس والمهندس الرئيسي\\n• تصميم الأنظمة المدمجة\\n• تركيب القطع الإلكترونية\\n• البرمجة بجميع أنواعها\\n• معمارية متعددة المعالجات\\n\\n🇵🇸 فريق محلي من فلسطين!\",\"answer_en\":\"Our team consists of two founding partners:\\n\\n🟢 **Ammar Masharqa** — Founder & Operations Manager\\n• Project management & coordination\\n• Client communication\\n• Strategic planning\\n\\n🔵 **Mohammad Aqli** — Founder & Lead Engineer\\n• Embedded systems design\\n• Electronic component assembly\\n• All types of programming\\n• Multi-processor architecture\\n\\n🇵🇸 A local team from Palestine!\"},{\"id\":7,\"keywords\":[\"تواصل\",\"contact\",\"اتواصل\",\"تواصل معكم\",\"reach\",\"contact you\",\"تليجرام\",\"telegram\",\"واتساب\",\"whatsapp\"],\"answer_ar\":\"يمكنك التواصل معنا عبر عدة قنوات:\\n\\n📩 **تليجرام:** @Mashari3_AI_Arduino\\n📩 **تليجرام 2:** @Arsuino1\\n📱 **واتساب:** +972 56-XXX-XXXX\\n📘 **فيسبوك:** صفحتنا على فيسبوك\\n\\n💡 **أسرع طريقة:** تليجرام — نرد خلال ساعات قليلة!\\n\\nيمكنك أيضاً استخدام نموذج الاتصال في أسفل الصفحة.\",\"answer_en\":\"You can reach us through several channels:\\n\\n📩 **Telegram:** @Mashari3_AI_Arduino\\n📩 **Telegram 2:** @Arsuino1\\n📱 **WhatsApp:** +972 56-XXX-XXXX\\n📘 **Facebook:** Our Facebook page\\n\\n💡 **Fastest way:** Telegram — we reply within hours!\\n\\nYou can also use the contact form at the bottom of the page.\"},{\"id\":8,\"keywords\":[\"حساسات\",\"sensors\",\"sensor\",\"كم حساس\",\"how many sensors\",\"أنواع حساسات\",\"types\"],\"answer_ar\":\"نستخدم **+10 أنواع مختلفة من الحساسات**:\\n\\n🌡️ DHT22 — حرارة ورطوبة\\n🔥 MQ-2 — كشف غاز ودخان\\n👥 PIR — كشف حركة\\n📏 Ultrasonic — قياس المسافة\\n🏷️ RFID — تعريف لاسلكي\\n📡 IR — استقبال وإرسال بالأشعة تحت الحمراء\\n💡 LDR — مستوى الضوء\\n💧 Soil Moisture — رطوبة التربة\\n🔊 Microphone — كشف الصوت\\n🔄 Rotary Encoder — وضع دوار\\n\\nونضيف حساسات جديدة حسب احتياج كل مشروع.\",\"answer_en\":\"We use **10+ different sensor types**:\\n\\n🌡️ DHT22 — Temperature & humidity\\n🔥 MQ-2 — Gas & smoke detection\\n👥 PIR — Motion detection\\n📏 Ultrasonic — Distance measurement\\n🏷️ RFID — Wireless identification\\n📡 IR — Infrared send/receive\\n💡 LDR — Light level\\n💧 Soil Moisture — Soil humidity\\n🔊 Microphone — Sound detection\\n🔄 Rotary Encoder — Rotary position\\n\\nAnd we add new sensors based on each project's needs.\"},{\"id\":9,\"keywords\":[\"منزل ذكي\",\"smart home\",\"home automation\",\"بيت ذكي\",\"house\",\"automation\"],\"answer_ar\":\"🏠 **نظام المنزل الذكي** هو أول مشاريعنا وأكثرها تطوراً:\\n\\n**ما يتحكم فيه:**\\n• الإضاءة (تشغيل/إيقاف + تعتيم)\\n• الأبواب والنوافذ (فتح/إغلاق ذكي)\\n• نظام التكييف (حسب درجة الحرارة)\\n• كشف الحريق (إنذار فوري)\\n• المراقبة الأمنية (كاميرات + حساسات)\\n\\n**المميزات:**\\n• يعمل بدون إنترنت\\n• تحكم عن بُعد عبر تطبيق الهاتف\\n• جدولة زمنية تلقائية\\n• لوحة مراقبة حية عبر Firebase\\n• معمارية متعددة المعالجات\",\"answer_en\":\"🏠 **Smart Home System** is our first and most advanced project:\\n\\n**What it controls:**\\n• Lighting (on/off + dimming)\\n• Doors & windows (smart open/close)\\n• Air conditioning (temperature-based)\\n• Fire detection (instant alarm)\\n• Security monitoring (cameras + sensors)\\n\\n**Features:**\\n• Works without internet\\n• Remote control via mobile app\\n• Automatic scheduling\\n• Live dashboard via Firebase\\n• Multi-processor architecture\"},{\"id\":10,\"keywords\":[\"سعر\",\"تكلفة\",\"price\",\"cost\",\"كم يكلف\",\"كلفة\",\"أسعار\",\"prices\",\"budget\"],\"answer_ar\":\"التكلفة تختلف حسب المشروع ومتطلباته:\\n\\n💰 **عوامل التسعير:**\\n• نوع وعدد الحساسات والمتحكمات\\n• تعقيد البرمجيات المطلوبة\\n• التكامل السحابي (Firebase)\\n• تصميم وتصنيع PCB\\n• تطبيق هاتف مخصص\\n\\n💡 **نقدم استشارة مجانية** لتحديد احتياجاتك وتقديم عرض سعر دقيق.\\n\\n📩 تواصل معنا على تليجرام لمناقشة مشروعك!\",\"answer_en\":\"Cost varies depending on the project and requirements:\\n\\n💰 **Pricing factors:**\\n• Type and number of sensors & controllers\\n• Software complexity\\n• Cloud integration (Firebase)\\n• PCB design & manufacturing\\n• Custom mobile app\\n\\n💡 **We offer free consultation** to determine your needs and provide an accurate quote.\\n\\n📩 Contact us on Telegram to discuss your project!\"},{\"id\":11,\"keywords\":[\"firebase\",\"سحابي\",\"cloud\",\"مراقبة\",\"monitoring\",\"dashboard\",\"لوحة\"],\"answer_ar\":\"☁️ **التكامل مع Firebase** يتيح لك:\\n\\n📊 **لوحة مراقبة حية** — متابعة جميع البيانات في الوقت الحقيقي\\n🔔 **تنبيهات فورية** — إشعارات عند حدوث أي حدث\\n📱 **تحكم عن بُعد** — إدارة النظام من أي مكان\\n📈 **تسجيل البيانات** — حفظ وتحليل البيانات التاريخية\\n🔐 **مصادقة آمنة** — حماية الوصول للأذونات\\n\\nملاحظة: Firebase ميزة إضافية — النظام يعمل بشكل كامل بدون إنترنت.\",\"answer_en\":\"☁️ **Firebase Integration** enables:\\n\\n📊 **Live Dashboard** — Monitor all data in real-time\\n🔔 **Instant Alerts** — Notifications when events occur\\n📱 **Remote Control** — Manage the system from anywhere\\n📈 **Data Logging** — Save and analyze historical data\\n🔐 **Secure Auth** — Protected access with permissions\\n\\nNote: Firebase is an optional feature — the system works fully without internet.\"},{\"id\":12,\"keywords\":[\"أمان\",\"security\",\"حماية\",\"protection\",\"كاميرا\",\"camera\",\"مراقبة\",\"surveillance\"],\"answer_ar\":\"🔐 نحن نعطي **الأمان الأولوية الأولى**:\\n\\n**في مشاريعنا:**\\n• أنظمة تعمل محلياً — لا تعتمد على الإنترنت للقرارات الحرجة\\n• كشف الحريق والإنذارات تعمل فوراً 24/7\\n• أنظمة أمان متعددة المستويات (PIN + حساسات + تتبع)\\n\\n**في الكود:**\\n• كود نظيف ومقسم مع توثيق شامل\\n• خوارزميات حماية مبتكرة\\n• معمارية ثنائية ومتعددة المعالجات للاستقرار\\n\\nنؤمن بأن الأمان ليس خياراً بل أساس كل مشروع.\",\"answer_en\":\"🔐 **Safety is our #1 priority**:\\n\\n**In our projects:**\\n• Systems work locally — don't depend on internet for critical decisions\\n• Fire detection & alarms work instantly 24/7\\n• Multi-level security systems (PIN + sensors + tracking)\\n\\n**In our code:**\\n• Clean, modular code with comprehensive documentation\\n• Innovative protection algorithms\\n• Dual and multi-processor architecture for stability\\n\\nWe believe safety isn't optional — it's the foundation of every project.\"},{\"id\":13,\"keywords\":[\"فعاليات\",\"events\",\"أتمتة فعاليات\",\"event automation\",\"تنظيم\",\"organization\"],\"answer_ar\":\"🎪 **نظام أتمتة الفعاليات** ينظم الفعاليات تلقائياً:\\n\\n**المميزات:**\\n• جدولة تلقائية بالكامل\\n• إدارة الحضور والتحقق\\n• عرض وسائط متعددة\\n• أتمتة المهام المتكررة\\n• تتبع وتقارير\\n\\nهذا المشروع يثبت قدرتنا على بناء أنظمة معقدة تتجاوز مجال إنترنت الأشياء التقليدي.\",\"answer_en\":\"🎪 **Event Automation System** organizes events automatically:\\n\\n**Features:**\\n• Fully automatic scheduling\\n• Attendance management & verification\\n• Multimedia display\\n• Repetitive task automation\\n• Tracking & reporting\\n\\nThis project demonstrates our ability to build complex systems beyond traditional IoT.\"},{\"id\":14,\"keywords\":[\"arduino\",\"esp32\",\"متحكم\",\"microcontroller\",\"STM32\",\"esp8266\"],\"answer_ar\":\"نحن خبراء في **المتحكمات** والأنظمة المدمجة:\\n\\n🔵 **Arduino (UNO, Mega, Nano)** — مشاريع سريعة ونماذج أولية\\n🟢 **ESP32** — Wi-Fi + Bluetooth + قوة معالجة عالية\\n🟡 **ESP8266** — Wi-Fi اقتصادي للمشاريع البسيطة\\n🔴 **STM32** — مشاريع صناعية واحترافية\\n\\n**ما نقدمه:**\\n• تصميم المخططات الكهربائية\\n• تركيب القطع واللحام\\n• برمجة بلغة C/C++ و Assembly\\n• اختبار وتصحيح الأخطاء\\n• إعداد بروتوكولات الاتصال (UART, SPI, I2C)\",\"answer_en\":\"We are experts in **microcontrollers** and embedded systems:\\n\\n🔵 **Arduino (UNO, Mega, Nano)** — Rapid prototyping\\n🟢 **ESP32** — Wi-Fi + Bluetooth + high processing power\\n🟡 **ESP8266** — Budget-friendly Wi-Fi for simple projects\\n🔴 **STM32** — Industrial and professional projects\\n\\n**What we offer:**\\n• Circuit design\\n• Component assembly & soldering\\n• C/C++ and Assembly programming\\n• Testing & debugging\\n• Communication protocol setup (UART, SPI, I2C)\"},{\"id\":15,\"keywords\":[\"فلسطين\",\"palestine\",\"من أين\",\"where\",\"موقع\",\"location\",\"بلد\",\"country\"],\"answer_ar\":\"🇵🇸 **نحن من فلسطين!**\\n\\nفريق محلي يفهم احتياجات السوق المحلي والإقليمي. نقدم:\\n\\n• دعم فني مباشر وسريع\\n• أسعار مناسبة للسوق المحلي\\n• تواصل بالعربية والإنجليزية\\n• فهم عميق لتحديات البنية التحتية\\n• حلول تعمل في ظروف مختلفة (انقطاع إنترنت، انقطاع كهرباء)\\n\\nنؤمن بأن فلسطين قادرة على إنتاج تقنيات عالمية! 💚\",\"answer_en\":\"🇵🇸 **We are from Palestine!**\\n\\nA local team that understands local and regional market needs. We provide:\\n\\n• Direct and fast technical support\\n• Competitive prices for the local market\\n• Communication in Arabic and English\\n• Deep understanding of infrastructure challenges\\n• Solutions that work in various conditions (internet/power outages)\\n\\nWe believe Palestine can produce world-class technology! 💚\"},{\"id\":16,\"keywords\":[\"مرحبا\",\"hello\",\"hi\",\"اهلا\",\"أهلا\",\"سلام\",\"salam\",\"hey\",\"هاي\",\"مرحباً\"],\"answer_ar\":\"أهلاً وسهلاً! 👋\\n\\nأنا المساعد الذكي لفريق **مشاريع للأنظمة الذكية** 🟢\\n\\nيمكنني مساعدتك في:\\n• معرفة خدماتنا ومشاريعنا\\n• الاستفسار عن التقنيات المستخدمة\\n• معلومات عن الفريق\\n• كيفية التواصل معنا\\n\\nاسألني أي سؤال! 😊\",\"answer_en\":\"Hello and welcome! 👋\\n\\nI'm the smart assistant for **Smart Systems Lab** 🟢\\n\\nI can help you with:\\n• Learning about our services and projects\\n• Inquiries about technologies we use\\n• Information about our team\\n• How to contact us\\n\\nAsk me anything! 😊\"},{\"id\":17,\"keywords\":[\"شكرا\",\"thanks\",\"thank you\",\"مشكور\",\"شكراً\",\"thanku\",\"تسلم\"],\"answer_ar\":\"العفو! 😊\\n\\nإذا كان لديك أي سؤال آخر، لا تتردد في السؤال. وإذا تريد التواصل مع الفريق مباشرة:\\n\\n📩 **تليجرام:** @Mashari3_AI_Arduino\\n📱 **واتساب:** +972 56-XXX-XXXX\\n\\nنحن دائماً سعداء بمساعدتك! 🚀\",\"answer_en\":\"You're welcome! 😊\\n\\nIf you have any other questions, don't hesitate to ask. If you'd like to reach the team directly:\\n\\n📩 **Telegram:** @Mashari3_AI_Arduino\\n📱 **WhatsApp:** +972 56-XXX-XXXX\\n\\nWe're always happy to help! 🚀\"},{\"id\":18,\"keywords\":[\"arduino smart home\",\"project code\",\"source code\",\"كود المشروع\",\"github\",\"open source\",\"مفتوح المصدر\",\"سورس كود\"],\"answer_ar\":\"مشاريعنا ليست مفتوحة المصدر حالياً.\\n\\nلكننا نقدم:\\n• **توثيق شامل** لكل مشروع\\n• **شرح تفصيلي** للمكونات والبرمجيات\\n• **دعم فني** مستمر للعملاء\\n\\nإذا كنت مهتماً بمشروع مشابه، تواصل معنا وسنصمم لك حلاً مخصصاً يتناسب مع احتياجاتك.\\n\\n📩 @Mashari3_AI_Arduino\",\"answer_en\":\"Our projects are not open source at this time.\\n\\nHowever, we provide:\\n• **Comprehensive documentation** for each project\\n• **Detailed explanations** of components and software\\n• **Ongoing technical support** for clients\\n\\nIf you're interested in a similar project, contact us and we'll design a custom solution for your needs.\\n\\n📩 @Mashari3_AI_Arduino\"}]"));}),
"[project]/src/components/chat/ChatBot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faq$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/faq.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ═══ LANGUAGE DETECTION ═══ */ function isArabic(text) {
    const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    return arabicPattern.test(text);
}
/* ═══ FAQ MATCHING ═══ */ function findBestAnswer(query) {
    const normalizedQuery = query.toLowerCase().trim();
    const words = normalizedQuery.split(/\s+/);
    let bestMatch = {
        answer: "",
        score: 0
    };
    for (const faq of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faq$2e$json__$28$json$29$__["default"]){
        let score = 0;
        for (const keyword of faq.keywords){
            const kw = keyword.toLowerCase();
            if (normalizedQuery.includes(kw)) {
                score += kw.length * 3; // Exact substring match — highest weight
            }
            for (const word of words){
                if (kw.includes(word) && word.length > 1) {
                    score += word.length * 2; // Word-level match
                }
                if (word.includes(kw) && kw.length > 1) {
                    score += kw.length * 2;
                }
            }
        }
        if (score > bestMatch.score) {
            bestMatch = {
                answer: faq.answer_ar,
                score
            };
        }
    }
    // Determine language and return appropriate answer
    const queryIsArabic = isArabic(query);
    if (bestMatch.score > 2) {
        // Find the FAQ entry again to get both language versions
        for (const faq of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faq$2e$json__$28$json$29$__["default"]){
            let score = 0;
            for (const keyword of faq.keywords){
                const kw = keyword.toLowerCase();
                if (normalizedQuery.includes(kw)) score += kw.length * 3;
                for (const word of words){
                    if (kw.includes(word) && word.length > 1) score += word.length * 2;
                    if (word.includes(kw) && kw.length > 1) score += kw.length * 2;
                }
            }
            if (score === bestMatch.score) {
                return {
                    answer: queryIsArabic ? faq.answer_ar : faq.answer_en,
                    score
                };
            }
        }
    }
    return bestMatch;
}
function getDefaultResponse(lang) {
    return lang === "ar" ? "عذراً، لم أجد إجابة مناسبة لسؤالك. 💭\n\nيمكنك التواصل مباشرة مع الفريق عبر تليجرام للحصول على إجابة مفصلة!" : "Sorry, I couldn't find a suitable answer for your question. 💭\n\nYou can contact the team directly via Telegram for a detailed answer!";
}
function getGreeting(lang) {
    return lang === "ar" ? "أهلاً وسهلاً! 👋\n\nأنا المساعد الذكي لفريق **مشاريع للأنظمة الذكية** 🟢\n\nيمكنني مساعدتك في معرفة:\n• خدماتنا 🛠️\n• مشاريعنا 🏗️\n• التقنيات المستخدمة ⚙️\n• معلومات عن الفريق 👥\n\n**جرب أن تسأل:** \"ما هي خدماتكم؟\" أو \"ما هو مشروع الخزنة الذكية؟\"" : "Hello and welcome! 👋\n\nI'm the smart assistant for **Smart Systems Lab** 🟢\n\nI can help you learn about:\n• Our services 🛠️\n• Our projects 🏗️\n• Technologies we use ⚙️\n• Our team info 👥\n\n**Try asking:** \"What are your services?\" or \"What is the smart safe project?\"";
}
/* ═══ SIMPLE MARKDOWN RENDERER ═══ */ function SimpleMarkdown({ text }) {
    const lines = text.split("\n");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: lines.map((line, i)=>{
            // Bold text
            const parts = line.split(/(\*\*[^*]+\*\*)/g);
            const rendered = parts.map((part, j)=>{
                if (part.startsWith("**") && part.endsWith("**")) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "font-bold text-[#e8edf5]",
                        children: part.slice(2, -2)
                    }, j, false, {
                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                        lineNumber: 99,
                        columnNumber: 15
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: part
                }, j, false, {
                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                    lineNumber: 104,
                    columnNumber: 18
                }, this);
            });
            // Empty line = paragraph break
            if (line.trim() === "") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, i, false, {
                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                    lineNumber: 109,
                    columnNumber: 18
                }, this);
            }
            // Bullet points
            if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2 ml-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#00ff66] mt-0.5 shrink-0",
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                            lineNumber: 116,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: rendered
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                    lineNumber: 115,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "leading-relaxed",
                children: rendered
            }, i, false, {
                fileName: "[project]/src/components/chat/ChatBot.tsx",
                lineNumber: 123,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
}
_c = SimpleMarkdown;
function ChatBot() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasGreeted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Auto-scroll to bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBot.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatBot.useEffect"], [
        messages,
        isTyping
    ]);
    // Show greeting when first opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBot.useEffect": ()=>{
            if (isOpen && !hasGreeted.current) {
                hasGreeted.current = true;
                setMessages([
                    {
                        id: crypto.randomUUID(),
                        role: "bot",
                        content: getGreeting(lang),
                        timestamp: new Date()
                    }
                ]);
            }
        }
    }["ChatBot.useEffect"], [
        isOpen,
        lang
    ]);
    // Focus input when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBot.useEffect": ()=>{
            if (isOpen) {
                setTimeout({
                    "ChatBot.useEffect": ()=>inputRef.current?.focus()
                }["ChatBot.useEffect"], 400);
            }
        }
    }["ChatBot.useEffect"], [
        isOpen
    ]);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatBot.useCallback[sendMessage]": ()=>{
            const text = input.trim();
            if (!text) return;
            const userMsg = {
                id: crypto.randomUUID(),
                role: "user",
                content: text,
                timestamp: new Date()
            };
            setMessages({
                "ChatBot.useCallback[sendMessage]": (prev)=>[
                        ...prev,
                        userMsg
                    ]
            }["ChatBot.useCallback[sendMessage]"]);
            setInput("");
            setIsTyping(true);
            // Simulate thinking delay
            setTimeout({
                "ChatBot.useCallback[sendMessage]": ()=>{
                    const queryLang = isArabic(text) ? "ar" : "en";
                    const { answer, score } = findBestAnswer(text);
                    const responseText = score > 2 ? answer : getDefaultResponse(queryLang);
                    const showTelegram = score <= 2;
                    const botMsg = {
                        id: crypto.randomUUID(),
                        role: "bot",
                        content: responseText,
                        timestamp: new Date()
                    };
                    setMessages({
                        "ChatBot.useCallback[sendMessage]": (prev)=>[
                                ...prev,
                                botMsg
                            ]
                    }["ChatBot.useCallback[sendMessage]"]);
                    setIsTyping(false);
                }
            }["ChatBot.useCallback[sendMessage]"], 600 + Math.random() * 600);
        }
    }["ChatBot.useCallback[sendMessage]"], [
        input
    ]);
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    const clearChat = ()=>{
        setMessages([]);
        hasGreeted.current = false;
        setTimeout(()=>{
            hasGreeted.current = true;
            setMessages([
                {
                    id: crypto.randomUUID(),
                    role: "bot",
                    content: getGreeting(lang),
                    timestamp: new Date()
                }
            ]);
        }, 100);
    };
    const telegramLink = lang === "ar" ? "https://t.me/Mashari3_AI_Arduino" : "https://t.me/Mashari3_AI_Arduino";
    const telegramLabel = lang === "ar" ? "تحدث معنا على تليجرام 💬" : "Talk to us on Telegram 💬";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: ()=>setIsOpen(!isOpen),
                className: `fixed z-50 flex items-center justify-center shadow-lg transition-shadow ${isOpen ? "hidden" : "flex"}`,
                style: {
                    bottom: "1.5rem",
                    left: lang === "ar" ? "1.5rem" : "auto",
                    right: lang !== "ar" ? "1.5rem" : "auto"
                },
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: 0.95
                },
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-full gradient-neon flex items-center justify-center shadow-[0_0_20px_#00ff6640]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "h-6 w-6 text-[#0a0f1a]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full gradient-neon animate-ping opacity-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatBot.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 20,
                        scale: 0.9
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    },
                    className: "fixed z-50",
                    style: {
                        bottom: "1.5rem",
                        left: lang === "ar" ? "1.5rem" : "auto",
                        right: lang !== "ar" ? "1.5rem" : "auto",
                        width: "min(380px, calc(100vw - 2rem))",
                        maxHeight: "min(560px, calc(100vh - 4rem))"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card-dark rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-black/40",
                        style: {
                            height: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-3 border-b border-[#1e2d4d] bg-[#0c1220]/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full gradient-neon flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "h-4 w-4 text-[#0a0f1a]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold gradient-neon-text",
                                                        children: lang === "ar" ? "المساعد الذكي" : "Smart Assistant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-[#00ff66] flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 23
                                                            }, this),
                                                            lang === "ar" ? "متصل الآن" : "Online now"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: clearChat,
                                                className: "p-1.5 rounded-lg hover:bg-white/5 transition-colors text-[#7a8ba8] hover:text-[#00e5ff]",
                                                "aria-label": lang === "ar" ? "مسح المحادثة" : "Clear chat",
                                                title: lang === "ar" ? "مسح المحادثة" : "Clear chat",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsOpen(false),
                                                className: "p-1.5 rounded-lg hover:bg-white/5 transition-colors text-[#7a8ba8] hover:text-[#ff3d5a]",
                                                "aria-label": lang === "ar" ? "إغلاق" : "Close",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                lineNumber: 283,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-4 space-y-3 code-scroll",
                                style: {
                                    minHeight: "280px",
                                    maxHeight: "400px"
                                },
                                children: [
                                    messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            className: `flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${msg.role === "user" ? "bg-[#00e5ff20] text-[#00e5ff]" : "gradient-neon text-[#0a0f1a]"}`,
                                                    children: msg.role === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${msg.role === "user" ? "bg-[#00e5ff15] border border-[#00e5ff20] text-[#e8edf5] rounded-tr-sm" : "bg-[#151d33] border border-[#1e2d4d] text-[#c5cdd8] rounded-tl-sm"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleMarkdown, {
                                                            text: msg.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-[9px] text-[#3d506e] mt-1.5 ${msg.role === "user" ? "text-left" : "text-right"}`,
                                                            children: msg.timestamp.toLocaleTimeString([], {
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, msg.id, true, {
                                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                                            lineNumber: 323,
                                            columnNumber: 19
                                        }, this)),
                                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-full gradient-neon flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "h-3.5 w-3.5 text-[#0a0f1a]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                lineNumber: 377,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#151d33] border border-[#1e2d4d] rounded-2xl rounded-tl-sm px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full bg-[#00ff66]",
                                                            style: {
                                                                animation: "pulse-neon 1.4s ease-in-out infinite",
                                                                animationDelay: "0s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full bg-[#00ff66]",
                                                            style: {
                                                                animation: "pulse-neon 1.4s ease-in-out infinite",
                                                                animationDelay: "0.2s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full bg-[#00ff66]",
                                                            style: {
                                                                animation: "pulse-neon 1.4s ease-in-out infinite",
                                                                animationDelay: "0.4s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                lineNumber: 380,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                        lineNumber: 372,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                lineNumber: 318,
                                columnNumber: 15
                            }, this),
                            messages.length > 1 && messages[messages.length - 1].role === "bot" && findBestAnswer(messages.filter((m)=>m.role === "user").pop()?.content || "").score <= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: telegramLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                initial: {
                                    opacity: 0,
                                    y: 5
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "mx-4 mb-2 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-[#0088cc] bg-[#0088cc10] border border-[#0088cc25] hover:bg-[#0088cc20] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                                        lineNumber: 427,
                                        columnNumber: 21
                                    }, this),
                                    telegramLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                lineNumber: 419,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-3 border-t border-[#1e2d4d] bg-[#0c1220]/80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: inputRef,
                                            type: "text",
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            onKeyDown: handleKeyDown,
                                            placeholder: lang === "ar" ? "اكتب سؤالك هنا..." : "Type your question here...",
                                            dir: lang === "ar" ? "rtl" : "ltr",
                                            className: "flex-1 bg-[#0a0f1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630] outline-none transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                                            lineNumber: 435,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: sendMessage,
                                            disabled: !input.trim() || isTyping,
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            className: "w-10 h-10 rounded-xl gradient-neon flex items-center justify-center text-[#0a0f1a] disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_12px_#00ff6630] transition-opacity",
                                            "aria-label": lang === "ar" ? "إرسال" : "Send",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                                lineNumber: 455,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatBot.tsx",
                                            lineNumber: 447,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                                    lineNumber: 434,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatBot.tsx",
                                lineNumber: 433,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatBot.tsx",
                        lineNumber: 279,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatBot.tsx",
                    lineNumber: 265,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatBot.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ChatBot, "Sb3dSOI1p1+68iqKwQfSvoKTiZM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = ChatBot;
var _c, _c1;
__turbopack_context__.k.register(_c, "SimpleMarkdown");
__turbopack_context__.k.register(_c1, "ChatBot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circuit-board.js [app-client] (ecmascript) <export default as CircuitBoard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$TeamSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/portfolio/TeamSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$ServicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/portfolio/ServicesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$ProjectsShowcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/portfolio/ProjectsShowcase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$SkillsMatrix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/portfolio/SkillsMatrix.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/portfolio/Timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$SecurityAudit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/portfolio/SecurityAudit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatBot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatBot.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
/* ═══ ANIMATION VARIANTS ═══ */ const fadeUp = {
    initial: {
        opacity: 0,
        y: 30
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
const countUp = {
    initial: {
        opacity: 0,
        scale: 0.5
    },
    animate: {
        opacity: 1,
        scale: 1
    }
};
/* ═══ SECTION WRAPPER ═══ */ function Section({ id, children, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        id: id,
        ref: ref,
        initial: "initial",
        animate: isInView ? "animate" : "initial",
        variants: stagger,
        className: `py-16 sm:py-20 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Section, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Section;
/* ═══ SECTION TITLE ═══ */ function SectionTitle({ ar, en }) {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        variants: fadeUp,
        className: "text-center mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl sm:text-4xl font-bold gradient-neon-text inline-block mb-3",
                children: t(ar, en)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 h-0.5 gradient-neon mx-auto rounded-full opacity-60"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s1(SectionTitle, "1NmJhEQddUIkZ4o2jVoGXKkcvH8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = SectionTitle;
/* ═══ ANIMATED COUNTER ═══ */ function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
    _s2();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            if (!isInView) return;
            let startTime = null;
            const step = {
                "AnimatedCounter.useEffect.step": (timestamp)=>{
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    setCount(Math.floor(progress * end));
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                }
            }["AnimatedCounter.useEffect.step"];
            requestAnimationFrame(step);
        }
    }["AnimatedCounter.useEffect"], [
        isInView,
        end,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            count,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
_s2(AnimatedCounter, "6GaKik4gWnWh1KoebBmruSRSgxU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = AnimatedCounter;
/* ═══ NAVBAR ═══ */ function Navbar({ activeSection }) {
    _s3();
    const { lang, toggle, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 50)
            }["Navbar.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navItems = [
        {
            id: "hero",
            label: t("الرئيسية", "Home")
        },
        {
            id: "team",
            label: t("الفريق", "Team")
        },
        {
            id: "services",
            label: t("الخدمات", "Services")
        },
        {
            id: "projects",
            label: t("المشاريع", "Projects")
        },
        {
            id: "skills",
            label: t("المهارات", "Skills")
        },
        {
            id: "audit",
            label: t("فحص الأمان", "Security Audit")
        },
        {
            id: "timeline",
            label: t("المسيرة", "Journey")
        },
        {
            id: "contact",
            label: t("تواصل", "Contact")
        }
    ];
    const scrollTo = (id)=>{
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
        setMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-dark shadow-lg shadow-black/20" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollTo("hero"),
                            className: "flex items-center gap-2 group",
                            "aria-label": "Go to homepage",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__["CircuitBoard"], {
                                    className: "h-7 w-7 text-[#00ff66] group-hover:shadow-[0_0_12px_#00ff66] transition-shadow"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-lg gradient-neon-text hidden sm:inline",
                                    children: t("مشاريع للأنظمة الذكية", "Smart Systems Lab")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-1",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollTo(item.id),
                                    className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${activeSection === item.id ? "text-[#00ff66] bg-[#00ff66]/10" : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"}`,
                                    children: item.label
                                }, item.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggle,
                                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium neon-border hover:bg-[#00ff66]/5 transition-all",
                                    "aria-label": lang === "ar" ? "Switch to English" : "التبديل إلى العربية",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "h-4 w-4 text-[#00e5ff]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#00e5ff]",
                                            children: lang === "ar" ? "EN" : "عربي"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMenuOpen(!menuOpen),
                                    className: "lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors",
                                    "aria-label": "Toggle menu",
                                    children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 27
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 55
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "lg:hidden glass-dark border-t border-[#1e2d4d] overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 space-y-1",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollTo(item.id),
                                className: `block w-full text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeSection === item.id ? "text-[#00ff66] bg-[#00ff66]/10" : "text-[#7a8ba8] hover:text-[#e8edf5] hover:bg-white/5"}`,
                                children: item.label
                            }, item.id, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 187,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s3(Navbar, "Ozd0sE2E+iLiyefkCYeCVzCLFHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = Navbar;
/* ═══ HERO SECTION ═══ */ function HeroSection() {
    _s4();
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [typedText, setTypedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fullText = lang === "ar" ? "حلول إنترنت الأشياء الحقيقية — من المتحكمات إلى السحابة" : "Real IoT Solutions — From Microcontrollers to the Cloud";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            setTypedText("");
            let i = 0;
            const interval = setInterval({
                "HeroSection.useEffect.interval": ()=>{
                    if (i <= fullText.length) {
                        setTypedText(fullText.slice(0, i));
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }
            }["HeroSection.useEffect.interval"], 40);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(interval)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        lang,
        fullText
    ]);
    const stats = [
        {
            value: 4,
            suffix: "+",
            label: t("مشاريع حقيقية", "Real Projects"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 230,
                columnNumber: 80
            }, this),
            color: "#00ff66"
        },
        {
            value: 10,
            suffix: "+",
            label: t("حساسات", "Sensors"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 231,
                columnNumber: 68
            }, this),
            color: "#00e5ff"
        },
        {
            value: 3,
            suffix: "+",
            label: t("متحكمات", "MCUs"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 232,
                columnNumber: 65
            }, this),
            color: "#ffab00"
        },
        {
            value: 6,
            suffix: "",
            label: t("خدمات", "Services"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 233,
                columnNumber: 66
            }, this),
            color: "#b44dff"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 circuit-bg opacity-40"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 gradient-mesh-dark"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff66]/5 rounded-full blur-3xl animate-float"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-delayed"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 right-1/3 w-32 h-32 bg-[#b44dff]/3 rounded-full blur-3xl animate-float"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full neon-border glass-card-dark mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-[#00ff66] animate-pulse-neon"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-[#00ff66]",
                                children: t("🇵🇸 من فلسطين — جاهزون لمشاريعكم", "🇵🇸 From Palestine — Ready for Your Projects")
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.3,
                            duration: 0.6
                        },
                        className: "text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#e8edf5]",
                                children: t("نبني أنظمة", "We Build")
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "gradient-neon-text",
                                children: t("ذكية حقيقية", "Real Smart Systems")
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.6
                        },
                        className: "h-8 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "terminal-text text-base sm:text-lg md:text-xl",
                            children: [
                                typedText,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block w-0.5 h-5 bg-[#00ff66] ml-1 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.7
                        },
                        className: "text-[#7a8ba8] text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed",
                        children: lang === "ar" ? "فريق هندسي متخصص في إنترنت الأشياء والأتمتة الذكية. نحول الأفكار إلى مشاريع إنتاجية حقيقية تجمع بين الأمان، الأتمتة، والتحكم الذكي عن بُعد." : "An engineering team specializing in IoT and smart automation. We turn ideas into production-ready projects combining security, automation, and intelligent remote control."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.75
                        },
                        className: "flex items-center justify-center gap-3 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card-dark",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-[#00ff66]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#00ff66] font-medium",
                                        children: "عمار مشارقة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#3d506e] text-xs",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card-dark",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-[#00e5ff]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#00e5ff] font-medium",
                                        children: "محمد عقيلي"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.8
                        },
                        className: "flex flex-wrap items-center justify-center gap-4 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>document.getElementById("projects")?.scrollIntoView({
                                        behavior: "smooth"
                                    }),
                                className: "gradient-neon text-[#0a0f1a] font-bold px-8 py-3 rounded-xl hover:shadow-[0_0_20px_#00ff6640] transition-shadow",
                                children: t("استعرض المشاريع", "View Projects")
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth"
                                    }),
                                className: "neon-border text-[#00ff66] hover:bg-[#00ff66]/10 font-semibold px-8 py-3 rounded-xl",
                                children: t("تواصل معنا", "Contact Us")
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.9
                        },
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto",
                        children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: countUp,
                                initial: "initial",
                                animate: "animate",
                                transition: {
                                    delay: 1 + i * 0.15,
                                    type: "spring"
                                },
                                className: "glass-card-dark rounded-xl p-4 card-hover text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-1.5 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: stat.color
                                                },
                                                children: stat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold gradient-neon-text",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                    end: stat.value,
                                                    suffix: stat.suffix
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#7a8ba8]",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1.5
                        },
                        className: "mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            animate: {
                                y: [
                                    0,
                                    8,
                                    0
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity
                            },
                            onClick: ()=>document.getElementById("team")?.scrollIntoView({
                                    behavior: "smooth"
                                }),
                            className: "text-[#7a8ba8] hover:text-[#00ff66] transition-colors",
                            "aria-label": "Scroll down",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
_s4(HeroSection, "HYN2dTSPPVeYgC12QJpneJ9NssI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = HeroSection;
/* ═══ WHY US SECTION ═══ */ function WhyUsSection() {
    _s5();
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const reasons = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 394,
                columnNumber: 13
            }, this),
            title: t("الأمان أولاً", "Safety First"),
            desc: lang === "ar" ? "جميع أنظمتنا تعمل محلياً بدون إنترنت — قرارات فورية للحالات الطارئة مثل كشف الحريق." : "All our systems work locally without internet — instant decisions for emergencies like fire detection.",
            color: "#00ff66"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 402,
                columnNumber: 13
            }, this),
            title: t("العمل بدون إنترنت", "Offline-First"),
            desc: lang === "ar" ? "معالجة حافة (Edge Computing) — العتاد يعمل باستقلالية تامة. الإنترنت ميزة إضافية وليس شرطاً." : "Edge Computing — hardware operates independently. Internet is a feature, not a requirement.",
            color: "#00e5ff"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 410,
                columnNumber: 13
            }, this),
            title: t("تكامل سحابي", "Cloud Integration"),
            desc: lang === "ar" ? "مزامنة سلسة مع Firebase لمراقبة البيانات والتحكم عن بُعد عبر التطبيقات في أي وقت." : "Seamless Firebase sync for data monitoring and remote control via apps, anytime.",
            color: "#ffab00"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 418,
                columnNumber: 13
            }, this),
            title: t("كود نظيف ومنظم", "Clean Code"),
            desc: lang === "ar" ? "أكواد مقسمة وواضحة مع توثيق شامل. كل مشروع قابل للتطوير والصيانة بسهولة." : "Modular, clean code with comprehensive documentation. Every project is maintainable and scalable.",
            color: "#b44dff"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 426,
                columnNumber: 13
            }, this),
            title: t("مشاريع حقيقية وليس تجريبية", "Real Projects"),
            desc: lang === "ar" ? "ليس مشاريع تعليمية — كل مشروع حل مشكلة حقيقية وتم اختباره في بيئة إنتاجية." : "Not educational demos — every project solves a real problem and has been tested in production.",
            color: "#ff6b9d"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 434,
                columnNumber: 13
            }, this),
            title: t("صُنع في فلسطين 🇵🇸", "Made in Palestine 🇵🇸"),
            desc: lang === "ar" ? "فريق محلي من فلسطين يفهم احتياجات السوق ويقدم دعماً فنياً مباشراً وسريعاً." : "A local team from Palestine that understands market needs and provides direct, fast support.",
            color: "#4fc3f7"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        id: "about",
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 gradient-mesh-dark opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-6xl px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        ar: "لماذا نحن مختلفون",
                        en: "Why We're Different"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeUp,
                        className: "max-w-3xl mx-auto text-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#7a8ba8] text-base sm:text-lg leading-relaxed",
                            children: lang === "ar" ? "لا نقدم مشاريع أردوينو تعليمية عادية. نبني منظومات هندسية متكاملة تعتمد على معمارية ثنائية ومتعددة المعالجات، مع خوارزميات حماية مبتكرة ضمان عمل مستقر 24/7." : "We don't offer ordinary educational Arduino projects. We build complete engineering ecosystems based on dual and multi-processor architectures, with innovative protection algorithms ensuring stable 24/7 operation."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: reasons.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: fadeUp,
                                className: "glass-card-dark rounded-xl p-6 card-hover gradient-card-border text-center group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-shadow group-hover:shadow-lg",
                                        style: {
                                            backgroundColor: `${p.color}15`,
                                            color: p.color
                                        },
                                        children: p.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm mb-2",
                                        style: {
                                            color: p.color
                                        },
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#7a8ba8] leading-relaxed",
                                        children: p.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 473,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
_s5(WhyUsSection, "IUbGXjc/X1wYv1u8xPTk69mj8NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c5 = WhyUsSection;
/* ═══ CONTACT SECTION ═══ */ function ContactSection() {
    _s6();
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSending(true);
        // Simulate sending — redirect to Telegram for actual contact
        await new Promise((r)=>setTimeout(r, 800));
        const msg = encodeURIComponent(`🔔 New message from portfolio\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        window.open(`https://t.me/Mashari3_AI_Arduino?text=${msg}`, "_blank");
        setSent(true);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        setTimeout(()=>setSent(false), 3000);
        setSending(false);
    };
    const contacts = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 504,
                columnNumber: 13
            }, this),
            label: t("تليجرام", "Telegram"),
            value: "@Mashari3_AI_Arduino",
            href: "https://t.me/Mashari3_AI_Arduino",
            color: "#0088cc"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 511,
                columnNumber: 13
            }, this),
            label: t("تليجرام 2", "Telegram 2"),
            value: "@Arsuino1",
            href: "https://t.me/Arsuino1",
            color: "#0088cc"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 518,
                columnNumber: 13
            }, this),
            label: t("فيسبوك", "Facebook"),
            value: t("صفحتنا على فيسبوك", "Our Facebook Page"),
            href: "https://www.facebook.com/share/1HnZactzYD/",
            color: "#1877F2"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 525,
                columnNumber: 13
            }, this),
            label: t("واتساب", "WhatsApp"),
            value: "+972 56-XXX-XXXX",
            href: "https://wa.me/972569303043",
            color: "#25D366"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        id: "contact",
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 gradient-mesh-dark opacity-30"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-6xl px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        ar: "تواصل معنا",
                        en: "Get In Touch"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: fadeUp,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#7a8ba8] mb-6",
                                        children: lang === "ar" ? "عندك مشروع في بالك؟ تبي نظام أتمتة ذكي؟ أو بس استفسار تقني؟ تواصل معنا وسنرد عليك بأسرع وقت." : "Have a project in mind? Need a smart automation system? Or just a technical question? Reach out and we'll get back to you ASAP."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this),
                                    contacts.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                            href: c.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            variants: fadeUp,
                                            className: "flex items-center gap-4 p-4 rounded-xl glass-card-dark card-hover group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                                                    style: {
                                                        backgroundColor: `${c.color}15`,
                                                        color: c.color
                                                    },
                                                    children: c.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-[#7a8ba8]",
                                                            children: c.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-[#e8edf5] group-hover:text-[#00ff66] transition-colors",
                                                            children: c.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "h-4 w-4 text-[#7a8ba8] mr-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: fadeUp,
                                        className: "flex items-center gap-3 p-4 rounded-xl glass-card-dark mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-11 h-11 rounded-xl flex items-center justify-center bg-[#00ff6615] text-[#00ff66]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[#7a8ba8]",
                                                        children: t("الموقع", "Location")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-[#e8edf5]",
                                                        children: t("فلسطين 🇵🇸", "Palestine 🇵🇸")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 581,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 574,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 541,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: fadeUp,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "glass-card-dark rounded-2xl p-6 sm:p-8 space-y-5 gradient-card-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "h-4 w-4 text-[#00ff66]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-foreground",
                                                    children: t("أرسل رسالة", "Send a Message")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-[#7a8ba8] mb-1.5",
                                                    children: t("الاسم", "Name")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: formData.name,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            name: e.target.value
                                                        }),
                                                    className: "w-full bg-[#0a0f1a] border border-[#1e2d4d] rounded-lg px-4 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630] outline-none transition-all",
                                                    placeholder: t("أدخل اسمك", "Enter your name"),
                                                    dir: lang === "ar" ? "rtl" : "ltr"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 597,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-[#7a8ba8] mb-1.5",
                                                    children: t("البريد الإلكتروني", "Email")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    required: true,
                                                    value: formData.email,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            email: e.target.value
                                                        }),
                                                    className: "w-full bg-[#0a0f1a] border border-[#1e2d4d] rounded-lg px-4 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630] outline-none transition-all",
                                                    placeholder: "example@email.com",
                                                    dir: "ltr"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-[#7a8ba8] mb-1.5",
                                                    children: t("الرسالة", "Message")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    required: true,
                                                    rows: 4,
                                                    value: formData.message,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            message: e.target.value
                                                        }),
                                                    className: "w-full bg-[#0a0f1a] border border-[#1e2d4d] rounded-lg px-4 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630] outline-none transition-all resize-none",
                                                    placeholder: t("اكتب رسالتك هنا...", "Write your message here..."),
                                                    dir: lang === "ar" ? "rtl" : "ltr"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 625,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: sending,
                                            className: "w-full gradient-neon text-[#0a0f1a] font-bold py-3 rounded-xl hover:shadow-[0_0_20px_#00ff6640] transition-shadow disabled:opacity-50",
                                            children: sending ? t("جاري الإرسال...", "Sending...") : sent ? t("تم الإرسال ✓", "Sent ✓") : t("إرسال عبر تليجرام ↗", "Send via Telegram ↗")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-[#3d506e] text-center mt-2",
                                            children: t("سيتم فتح تليجرام لإرسال رسالتك", "Telegram will open to send your message")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 650,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 536,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 534,
        columnNumber: 5
    }, this);
}
_s6(ContactSection, "7zu9vbrrJPZeuqWJljMAEjcmw9Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c6 = ContactSection;
/* ═══ FOOTER ═══ */ function PortfolioFooter() {
    _s7();
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-[#1e2d4d] bg-[#080c16]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__["CircuitBoard"], {
                                className: "h-6 w-6 text-[#00ff66]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 670,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold gradient-neon-text",
                                        children: t("مشاريع للأنظمة الذكية", "Smart Systems Lab")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-[#3d506e]",
                                        children: t("عمار مشارقة × محمد عقيلي", "Ammar Masharqa × Mohammad Aqli")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 671,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 669,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-[#7a8ba8]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://t.me/Mashari3_AI_Arduino",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-[#00ff66] transition-colors text-xs",
                                children: "Telegram"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 683,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1e2d4d]",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 691,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.facebook.com/share/1HnZactzYD/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-[#00ff66] transition-colors text-xs",
                                children: "Facebook"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1e2d4d]",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 700,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/972569303043",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-[#00ff66] transition-colors text-xs",
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 701,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 682,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[#3d506e]",
                        children: t("صُنع بشغف في فلسطين 🇵🇸 — جميع الحقوق محفوظة © 2025", "Made with passion in Palestine 🇵🇸 — All rights reserved © 2025")
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 712,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 667,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 666,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 665,
        columnNumber: 5
    }, this);
}
_s7(PortfolioFooter, "IUbGXjc/X1wYv1u8xPTk69mj8NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c7 = PortfolioFooter;
/* ═══ SCROLL TO TOP ═══ */ function ScrollToTop() {
    _s8();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            const onScroll = {
                "ScrollToTop.useEffect.onScroll": ()=>setShow(window.scrollY > 400)
            }["ScrollToTop.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "ScrollToTop.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            initial: {
                opacity: 0,
                scale: 0.8
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.8
            },
            onClick: ()=>window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }),
            className: "fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full gradient-neon text-[#0a0f1a] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_#00ff6640] transition-shadow",
            "aria-label": t("العودة لأعلى", "Scroll to top"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 744,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 736,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 734,
        columnNumber: 5
    }, this);
}
_s8(ScrollToTop, "mQdCFLC96A44tBjL4oo8CoNjNx8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c8 = ScrollToTop;
function Home() {
    _s9();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hero");
    const { lang, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    // Update document direction on language change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const html = document.documentElement;
            html.setAttribute("dir", isRTL() ? "rtl" : "ltr");
            html.setAttribute("lang", lang);
        }
    }["Home.useEffect"], [
        lang,
        isRTL
    ]);
    // Track active section on scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const sections = [
                "hero",
                "team",
                "services",
                "projects",
                "skills",
                "audit",
                "timeline",
                "contact"
            ];
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    entries.forEach({
                        "Home.useEffect": (entry)=>{
                            if (entry.isIntersecting) setActiveSection(entry.target.id);
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"], {
                threshold: 0.3
            });
            sections.forEach({
                "Home.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (el) observer.observe(el);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-[#0a0f1a] noise-overlay relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Navbar, {
                activeSection: activeSection
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 786,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhyUsSection, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 789,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "team",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-6xl px-4 sm:px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$TeamSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 795,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 794,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 793,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 792,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        id: "services",
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 gradient-mesh-dark opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 802,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 mx-auto max-w-6xl px-4 sm:px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$ServicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 804,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 801,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "projects",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                        ar: "مشاريعنا الحقيقية",
                                        en: "Our Real Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$ProjectsShowcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 813,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 811,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 810,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 809,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        id: "skills",
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 gradient-mesh-dark opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 820,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$SkillsMatrix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 822,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 821,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 819,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        id: "audit",
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 gradient-mesh-dark opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 828,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 mx-auto max-w-6xl px-4 sm:px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$SecurityAudit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 830,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 829,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 827,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        id: "timeline",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-4xl px-4 sm:px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$portfolio$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 837,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 836,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 835,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactSection, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 842,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 785,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioFooter, {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 845,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollToTop, {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 846,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatBot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 847,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 782,
        columnNumber: 5
    }, this);
}
_s9(Home, "l8l9cQckZH8qgZzWDsX4zZXK0Os=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c9 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "SectionTitle");
__turbopack_context__.k.register(_c2, "AnimatedCounter");
__turbopack_context__.k.register(_c3, "Navbar");
__turbopack_context__.k.register(_c4, "HeroSection");
__turbopack_context__.k.register(_c5, "WhyUsSection");
__turbopack_context__.k.register(_c6, "ContactSection");
__turbopack_context__.k.register(_c7, "PortfolioFooter");
__turbopack_context__.k.register(_c8, "ScrollToTop");
__turbopack_context__.k.register(_c9, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b563908f._.js.map