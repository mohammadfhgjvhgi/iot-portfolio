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
  title: "مشاريع للأنظمة الذكية | Smart Systems Lab — IoT Engineering Team from Palestine",
  description:
    "IoT engineering team from Palestine building real smart systems — smart building automation, security systems, sensor networks, and event automation. From microcontrollers to the cloud.",
  keywords: [
    "IoT", "Embedded Systems", "Arduino", "ESP32", "Smart Building",
    "Smart Systems Lab", "Firebase", "Microcontroller", "Automation",
    "Palestine", "فلسطين", "إنترنت الأشياء", "أنظمة مدمجة", "أردوينو",
    "مشاريع إلكترونية", "متحكمات", "أتمتة",
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
