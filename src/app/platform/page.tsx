"use client";

import { useRouter } from "next/navigation";
import HomePage from "@/components/platform/HomePage";

const tabToRoute: Record<string, string> = {
  learning: "/platform/learning",
  projects: "/platform/projects",
  sensors: "/platform/sensors",
  environments: "/platform/environments",
  starterkit: "/platform/starter-kits",
  calculator: "/platform/calculator",
  support: "/platform/support",
  about: "/platform/about",
};

export default function PlatformHomePage() {
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    const route = tabToRoute[tab] ?? "/platform";
    router.push(route);
  };

  return <HomePage onTabChange={handleTabChange} />;
}
