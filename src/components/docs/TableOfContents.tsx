"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

interface HeadingItem {
  id: string;
  text: string;
  level: "h2" | "h3";
}

export default function TableOfContents() {
  const { t, isRTL } = useLang();
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  /* Extract headings from the rendered markdown content */
  const extractHeadings = useCallback(() => {
    // Look for headings within the docs content area
    const contentArea =
      document.querySelector("[data-docs-content]") ||
      document.querySelector("article") ||
      document.querySelector("main");

    if (!contentArea) return;

    const headingElements = contentArea.querySelectorAll("h2, h3");
    const items: HeadingItem[] = [];

    headingElements.forEach((el) => {
      if (el.id) {
        items.push({
          id: el.id,
          text: el.textContent || "",
          level: el.tagName.toLowerCase() as "h2" | "h3",
        });
      }
    });

    setHeadings(items);
  }, []);

  /* Set up IntersectionObserver for scroll spy */
  useEffect(() => {
    // Defer heading extraction to avoid synchronous setState in effect
    const rafId = requestAnimationFrame(() => extractHeadings());

    // Observe for DOM changes (content may render after mount)
    const observerTimeout = setTimeout(extractHeadings, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(observerTimeout);
    };
  }, [extractHeadings]);

  useEffect(() => {
    if (headings.length === 0) return;

    const contentArea =
      document.querySelector("[data-docs-content]") ||
      document.querySelector("article") ||
      document.querySelector("main");

    if (!contentArea) return;

    const headingElements = contentArea.querySelectorAll("h2, h3");

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is currently intersecting
        const visibleEntries = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (visibleEntries.length > 0) {
          // Pick the one closest to the top of the viewport
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      {
        // Detect headings that are in the upper portion of the viewport
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 1],
      }
    );

    headingElements.forEach((el) => {
      if (el.id) {
        observer.observe(el);
      }
    });

    // Set initial active heading based on scroll position
    const handleInitialScroll = () => {
      let currentId = "";
      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentId = headings[i].id;
            break;
          }
        }
      }
      if (currentId) setActiveId(currentId);
    };

    handleInitialScroll();

    // Re-check on scroll with debounce
    let scrollTimer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleInitialScroll, 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(scrollTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  /* Smooth scroll to heading */
  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav
      className="max-h-[calc(100vh-12rem)] overflow-y-auto"
      aria-label={t("جدول المحتويات", "Table of Contents")}
    >
      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7a8ba8] mb-3 px-3">
        {t("في هذا القسم", "On this page")}
      </h4>
      <ul className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={cn(
                  "block w-full text-left py-1.5 text-sm leading-relaxed transition-all duration-200",
                  "border-l-2",
                  heading.level === "h3" ? "pl-6" : "pl-3",
                  isActive
                    ? "text-[#00ff66] border-[#00ff66] font-medium"
                    : "text-[#7a8ba8] border-transparent hover:text-[#e8edf5] hover:border-[#1e2d4d]"
                )}
                dir={isRTL() ? "rtl" : "ltr"}
              >
                <span className="line-clamp-2">{heading.text}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
