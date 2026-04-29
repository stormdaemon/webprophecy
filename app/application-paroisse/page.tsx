import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/sections/SeoLandingPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicePages } from "@/content/seo-growth";
import { faqJsonLd, serviceJsonLd } from "@/lib/growthSchema";
import { pageMetadata } from "@/lib/seo";

const page = servicePages.find((item) => item.slug === "application-paroisse")!;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path
});

export default function ApplicationParoissePage() {
  return (
    <>
      <JsonLd data={[serviceJsonLd(page), faqJsonLd(page)]} />
      <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: page.title, href: page.path }]} />
      <SeoLandingPage page={page} />
    </>
  );
}
