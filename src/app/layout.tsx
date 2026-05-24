import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IoT & Embedded Systems Portfolio | محفظة مشاريع إنترنت الأشياء",
  description:
    "Professional portfolio showcasing production-ready IoT ecosystems, smart building automation, embedded systems engineering, and cloud-connected applications.",
  keywords: [
    "IoT", "Embedded Systems", "Arduino", "ESP32", "Smart Building",
    "Portfolio", "Firebase", "Microcontroller", "Automation",
    "إنترنت الأشياء", "أنظمة مدمجة", "أردوينو", "مشاريع إلكترونية",
  ],
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${ibmPlexArabic.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster position="top-left" dir="rtl" richColors closeButton />
      </body>
    </html>
  );
}
