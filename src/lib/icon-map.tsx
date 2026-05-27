import React from "react";
import {
  Globe, LayoutDashboard, Cpu, Settings, Palette, Layers,
  ShieldCheck, Rocket, Wrench, BookOpen, Code2, Terminal,
  HelpCircle, Zap, Smartphone, Search, Database, Bot, Key, Map,
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, LayoutDashboard, Cpu, Settings, Palette, Layers,
  ShieldCheck, Rocket, Wrench, BookOpen, Code2, Terminal,
  HelpCircle, Zap, Smartphone, Search, Database, Bot, Key, Map,
};

export function SectionIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const Icon = iconMap[name] || BookOpen;
  return <Icon className={className} />;
}
