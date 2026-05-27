import { create } from "zustand";

interface GuideState {
  activeSection: string;
  sidebarOpen: boolean;
  searchOpen: boolean;
  readSections: Set<string>;
  expandedSections: Set<string>;
  theme: "dark" | "light";

  setActiveSection: (id: string) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSearch: () => void;
  setSearchOpen: (open: boolean) => void;
  markSectionRead: (id: string) => void;
  toggleSectionExpanded: (id: string) => void;
  toggleTheme: () => void;
  setTheme: (theme: "dark" | "light") => void;
}

export const useGuideStore = create<GuideState>((set) => ({
  activeSection: "",
  sidebarOpen: false,
  searchOpen: false,
  readSections: new Set<string>(),
  expandedSections: new Set<string>(),
  theme: "dark",

  setActiveSection: (id) =>
    set((state) => ({
      activeSection: id,
      readSections: new Set([...state.readSections, id]),
    })),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen })),
  setSearchOpen: (open) => set({ searchOpen: open }),
  markSectionRead: (id) =>
    set((state) => ({
      readSections: new Set([...state.readSections, id]),
    })),
  toggleSectionExpanded: (id) =>
    set((state) => {
      const next = new Set(state.expandedSections);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { expandedSections: next };
    }),
  toggleTheme: () =>
    set((s) => {
      const next = s.theme === "dark" ? "light" : "dark";
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("guide-theme", next);
      }
      return { theme: next };
    }),
  setTheme: (theme) => set({ theme }),
}));
