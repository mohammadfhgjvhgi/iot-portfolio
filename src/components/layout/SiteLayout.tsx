"use client";

import React, { useEffect } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SearchDialog } from "@/components/guide/SearchDialog";
import { useGuideStore } from "@/lib/guide-store";
import { cn } from "@/lib/utils";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useGuideStore();

  // Initialize theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("guide-theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme class changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className={cn("min-h-screen flex flex-col")}>
      <SiteHeader />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <SearchDialog />
      <SiteFooter />
    </div>
  );
}
