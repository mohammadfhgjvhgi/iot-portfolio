import { guideSections, GuideSection } from "@/data/guide-sections";

// Get all section slugs for generateStaticParams
export function getAllDocSlugs(): string[] {
  return guideSections.map((s) => s.id);
}

// Get section by slug
export function getDocBySlug(slug: string): GuideSection | undefined {
  return guideSections.find((s) => s.id === slug);
}

// Get previous/next section
export function getPrevNext(slug: string): { prev?: GuideSection; next?: GuideSection } {
  const idx = guideSections.findIndex((s) => s.id === slug);
  return {
    prev: idx > 0 ? guideSections[idx - 1] : undefined,
    next: idx < guideSections.length - 1 ? guideSections[idx + 1] : undefined,
  };
}

// Get read progress from localStorage
export function getReadProgress(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem("docs-read-sections");
    return new Set(stored ? JSON.parse(stored) : []);
  } catch {
    return new Set();
  }
}

// Mark section as read
export function markSectionRead(slug: string): void {
  if (typeof window === "undefined") return;
  const progress = getReadProgress();
  progress.add(slug);
  localStorage.setItem("docs-read-sections", JSON.stringify([...progress]));
}

// Get progress percentage
export function getProgressPercent(): number {
  const total = guideSections.length;
  const read = getReadProgress().size;
  return total > 0 ? Math.round((read / total) * 100) : 0;
}

// Search sections
export function searchSections(query: string): GuideSection[] {
  if (!query.trim()) return guideSections;
  const q = query.toLowerCase();
  return guideSections.filter(
    (s) =>
      s.title.ar.toLowerCase().includes(q) ||
      s.title.en.toLowerCase().includes(q) ||
      s.description.ar.toLowerCase().includes(q) ||
      s.description.en.toLowerCase().includes(q) ||
      s.subsections.some(
        (sub) => sub.title.ar.toLowerCase().includes(q) || sub.title.en.toLowerCase().includes(q)
      )
  );
}

// Categories for sidebar grouping
export function getSectionCategories(): { name: string; sections: GuideSection[] }[] {
  return [
    {
      name: "Getting Started",
      sections: guideSections.slice(0, 4),
    },
    {
      name: "Architecture",
      sections: guideSections.slice(4, 8),
    },
    {
      name: "Features",
      sections: guideSections.slice(8, 12),
    },
    {
      name: "Reference",
      sections: guideSections.slice(12),
    },
  ];
}
