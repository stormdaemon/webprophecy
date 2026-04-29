import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const routes = [
  "",
  "/creation-site-internet-paroisse",
  "/portfolio",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("creation-site-internet-paroisse") ? 0.9 : 0.7
  }));
}
