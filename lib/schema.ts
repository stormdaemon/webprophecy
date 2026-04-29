import { pillarFaq } from "@/content/pages";
import { siteConfig } from "@/content/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "149 rue Henri Fichon",
    postalCode: "16100",
    addressLocality: "Cognac",
    addressCountry: "FR"
  },
  areaServed: {
    "@type": "Country",
    name: "France"
  },
  knowsAbout: [
    "Creation de site internet paroissial",
    "Application paroissiale",
    "SEO local pour paroisse",
    "Dons en ligne",
    "Horaires de messes",
    "Formulaires de sacrements"
  ]
};

export const parishWebsiteServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creation de site internet pour paroisse catholique",
  serviceType: "Creation de site internet paroissial",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  areaServed: {
    "@type": "Country",
    name: "France"
  },
  description:
    "Creation de sites web et applications pour paroisses catholiques : horaires de messes, agenda, dons en ligne, formulaires de sacrements et inscriptions."
};

export const pillarFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pillarFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};
