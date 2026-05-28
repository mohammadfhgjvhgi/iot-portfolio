"use client";

import React, { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SearchDialog } from "@/components/guide/SearchDialog";
import ChatBot from "@/components/chat/ChatBot";
import { useGuideStore } from "@/lib/guide-store";
import { cn } from "@/lib/utils";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useGuideStore();
  const pathname = usePathname();

  // /docs/* and /platform/* have their own layouts with their own headers/footers
  const hasOwnLayout = useMemo(() => {
    const p = pathname || "";
    return p.startsWith("/docs") || p.startsWith("/platform");
  }, [pathname]);

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
      {/* Only show main header/footer on pages that don't have their own layout */}
      {!hasOwnLayout && <SiteHeader />}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <SearchDialog />
      <ChatBot />
      {!hasOwnLayout && <SiteFooter />}
    </div>
  );
}
