import type { SeoPage } from "@/content/seo-growth";
import { siteConfig } from "@/content/site";

export function serviceJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: {
      "@type": "Country",
      name: "France"
    }
  };
}

export function faqJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
