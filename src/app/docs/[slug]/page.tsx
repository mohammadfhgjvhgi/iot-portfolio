import { notFound } from "next/navigation";
import { getAllDocSlugs, getDocBySlug, getPrevNext } from "@/lib/docs";
import DocsSectionClient from "./DocsSectionClient";

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getDocBySlug(slug);
  if (!section) return { title: "Not Found" };
  return {
    title: `${section.title.en} | Developer Guide`,
    description: section.description.en,
  };
}

export default async function DocsSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getDocBySlug(slug);
  if (!section) notFound();

  const { prev, next } = getPrevNext(slug);

  return <DocsSectionClient section={section} prev={prev} next={next} />;
}
