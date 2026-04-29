import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: SeoInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website"
    }
  };
}
