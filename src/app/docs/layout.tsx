import { Metadata } from "next";
import DocsLayoutClient from "./DocsLayoutClient";

export const metadata: Metadata = {
  title: "Developer Guide | Smart Systems Lab",
  description:
    "Comprehensive developer documentation for the IoT Portfolio project.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayoutClient>{children}</DocsLayoutClient>;
}
