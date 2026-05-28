import { Metadata } from "next";
import PlatformLayoutClient from "./PlatformLayoutClient";

export const metadata: Metadata = {
  title: "المنصة التعليمية | Smart Systems Lab",
  description:
    "تعلم بناء مشاريع Arduino و ESP32 و STM32 من الصفر — 23 درس، 10 مشاريع، 27 حساس",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PlatformLayoutClient>{children}</PlatformLayoutClient>;
}
