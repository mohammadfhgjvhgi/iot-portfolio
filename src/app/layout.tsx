import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "مشاريع إلكترونية وذكاء اصطناعي — منصة تعليمية عربية",
    template: "%s | مشاريع إلكترونية وذكاء اصطناعي",
  },
  description:
    "تعلم Arduino, ESP32, Raspberry Pi من الصفر. 23 درس تعليمي، 10 مشاريع تطبيقية، أكواد مجربة، دليل شراء القطع، وآلاف الدروس المجانية.",
  keywords: [
    "Arduino",
    "ESP32",
    "Raspberry Pi",
    "STM32",
    "متحكمات دقيقة",
    "مشاريع إلكترونية",
    "ذكاء اصطناعي",
    "IoT",
    "إنترنت الأشياء",
    "تعلم إلكترونيات",
    "Arduino بالعربي",
    "برمجة متحكمات",
    "حساسات إلكترونية",
  ],
  authors: [
    { name: "عمار مشارقة" },
    { name: "محمد العقيلي" },
  ],
  creator: "مشاريع إلكترونية وذكاء اصطناعي",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "مشاريع إلكترونية وذكاء اصطناعي",
    description:
      "منصة تعليمية عربية مجانية للمتحكمات الدقيقة والذكاء الاصطناعي — 23 درس، 10 مشاريع، أدوات تفاعلية",
    type: "website",
    locale: "ar_AR",
    siteName: "مشاريع إلكترونية وذكاء اصطناعي",
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاريع إلكترونية وذكاء اصطناعي",
    description: "تعلم Arduino و ESP32 من الصفر — منصة عربية مجانية",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${ibmPlexArabic.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-left" dir="rtl" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
