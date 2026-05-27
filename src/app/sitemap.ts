import type { MetadataRoute } from "next";
import { guideSections } from "@/data/guide-sections";

const BASE_URL = "https://mohammadfhgjvhgi.github.io/iot-portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `${BASE_URL}/iot-portfolio`;

  // Home page
  const homePage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Docs pages
  const docsPages: MetadataRoute.Sitemap = guideSections.map((section) => ({
    url: `${baseUrl}/docs/${section.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...homePage, ...docsPages];
}
