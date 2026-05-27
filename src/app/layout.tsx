import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import { SiteLayout } from "@/components/layout/SiteLayout";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "مشاريع للأنظمة الذكية | Smart Systems Lab — IoT Engineering Team",
  description:
    "Smart Systems Lab — IoT engineering team from Palestine. Real smart systems: building management, parking automation, RFID security, wedding hall automation, and more.",
  keywords: [
    "IoT", "Smart Systems", "Arduino", "ESP32", "Firebase",
    "Palestine", "Smart Home", "Automation", "Security Systems",
    "أنظمة ذكية", "أردوينو", "إنترنت الأشياء", "مشروعات",
  ],
  icons: { icon: "/iot-portfolio/images/logo.png" },
  openGraph: {
    type: "website",
    locale: "ar_PS",
    alternateLocale: "en_US",
    title: "مشاريع للأنظمة الذكية | Smart Systems Lab",
    description: "IoT engineering team from Palestine — building real smart systems.",
    siteName: "Smart Systems Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاريع للأنظمة الذكية | Smart Systems Lab",
    description: "IoT engineering team from Palestine — building real smart systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://mohammadfhgjvhgi.github.io/iot-portfolio"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Preconnect for Plausible */}
        <link rel="preconnect" href="https://plausible.io" />
      </head>
      <body className={`${ibmPlexArabic.variable} font-sans antialiased bg-background text-foreground`}>
        <ServiceWorkerRegistrar />
        <SiteLayout>{children}</SiteLayout>
        <Toaster position="top-left" dir="rtl" richColors closeButton />
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "iot-portfolio.example.com"}
          strategy="afterInteractive"
          defer
        />
        {/* Plausible Custom Events Tracker */}
        <Script id="plausible-events" strategy="afterInteractive">
          {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };

            document.addEventListener('click', function(e) {
              const target = e.target.closest('a[href*="t.me"], a[href*="wa.me"], a[href*="facebook"]');
              if (target) {
                var platform = 'unknown';
                if (target.href.includes('t.me')) platform = 'telegram';
                else if (target.href.includes('wa.me')) platform = 'whatsapp';
                else if (target.href.includes('facebook')) platform = 'facebook';
                plausible('Contact Click', { props: { platform: platform } });
              }

              var chatBtn = e.target.closest('[data-chat-btn]');
              if (chatBtn) {
                plausible('Chat Opened');
              }
            });
          `}
        </Script>
        {/* PWA Install Prompt Handler */}
        <Script id="pwa-install" strategy="afterInteractive">
          {`
            window.addEventListener('beforeinstallprompt', (e) => {
              e.preventDefault();
              window.deferredPrompt = e;
            });
          `}
        </Script>
      </body>
    </html>
  );
}
