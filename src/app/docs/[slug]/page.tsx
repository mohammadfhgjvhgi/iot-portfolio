import { guideSections } from "@/data/guide-sections";
import type { Metadata } from "next";
import DocsClientPage from "./DocsClientPage";

export async function generateStaticParams() {
  return guideSections.map((section) => ({
    slug: section.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = guideSections.find((s) => s.id === slug);
  if (!section) return { title: "Not Found" };

  return {
    title: `${section.title.en} | Smart Systems Lab Developer Guide`,
    description: section.description.en,
    openGraph: {
      title: `${section.title.en} | Developer Guide`,
      description: section.description.en,
    },
    alternates: {
      canonical: `/docs/${slug}`,
    },
  };
}

export default function DocsSlugPage() {
  return <DocsClientPage />;
}
