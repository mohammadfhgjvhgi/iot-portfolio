import { create } from 'zustand';

type Lang = 'ar' | 'en';

interface LanguageState {
  lang: Lang;
  toggle: () => void;
  setLang: (l: Lang) => void;
  t: (ar: string, en: string) => string;
  isRTL: () => boolean;
}

export const useLang = create<LanguageState>((set, get) => ({
  lang: 'ar',
  toggle: () => set((s) => ({ lang: s.lang === 'ar' ? 'en' : 'ar' })),
  setLang: (l) => set({ lang: l }),
  t: (ar: string, en: string) => get().lang === 'ar' ? ar : en,
  isRTL: () => get().lang === 'ar',
}));
