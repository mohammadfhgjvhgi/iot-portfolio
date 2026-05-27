import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "دليل المطور الشامل | Smart Systems Lab — Developer Guide v2.1",
  description:
    "Comprehensive developer guide for Smart Systems Lab IoT Portfolio. Complete technical documentation covering architecture, components, security, deployment, and more.",
  keywords: [
    "Developer Guide", "IoT Portfolio", "Smart Systems Lab", "Next.js",
    "TypeScript", "Documentation", "Arduino", "ESP32",
    "دليل المطور", "أنظمة ذكية", "وثائق تقنية",
  ],
  icons: { icon: "/iot-portfolio/images/logo.png" },
  openGraph: {
    type: "website",
    locale: "ar_PS",
    alternateLocale: "en_US",
    title: "دليل المطور الشامل | Smart Systems Lab — Developer Guide",
    description: "Comprehensive developer documentation for the IoT Portfolio project.",
    siteName: "Smart Systems Lab — Developer Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Systems Lab — Developer Guide v2.1",
    description: "Comprehensive developer documentation for the IoT Portfolio project.",
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
        {children}
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

            // Track contact button clicks
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a[href*="t.me"], a[href*="wa.me"], a[href*="facebook"]');
              if (target) {
                var platform = 'unknown';
                if (target.href.includes('t.me')) platform = 'telegram';
                else if (target.href.includes('wa.me')) platform = 'whatsapp';
                else if (target.href.includes('facebook')) platform = 'facebook';
                plausible('Contact Click', { props: { platform: platform } });
              }

              // Track chat open
              var chatBtn = e.target.closest('[data-chat-btn]');
              if (chatBtn) {
                plausible('Chat Opened');
              }

              // Track calculator completion
              var calcQuote = e.target.closest('[data-calc-quote]');
              if (calcQuote) {
                plausible('Calculator Quote Request');
              }

              // Track form submission
              var formSubmit = e.target.closest('button[type="submit"]');
              if (formSubmit) {
                plausible('Form Submit Attempt');
              }

              // Track blog post view
              var blogPost = e.target.closest('[data-blog-post]');
              if (blogPost) {
                plausible('Blog Post Viewed', { props: { slug: blogPost.getAttribute('data-blog-post') || 'unknown' } });
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
