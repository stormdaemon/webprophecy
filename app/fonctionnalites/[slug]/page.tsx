import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/sections/SeoLandingPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { featurePages } from "@/content/seo-growth";
import { faqJsonLd, serviceJsonLd } from "@/lib/growthSchema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featurePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = featurePages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: { title: page.title, description: page.description, url: page.path, type: "website" }
  };
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const page = featurePages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd data={[serviceJsonLd(page), faqJsonLd(page)]} />
      <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Fonctionnalités", href: "/creation-site-internet-paroisse" }, { name: page.title, href: page.path }]} />
      <SeoLandingPage page={page} />
    </>
  );
}
