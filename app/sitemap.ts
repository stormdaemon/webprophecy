import type { MetadataRoute } from "next";
import { blogArticles } from "@/content/blog";
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
  const blogRoutes = blogArticles.map((article) => `/blog/${article.slug}`);

  return [...routes, "/blog", ...blogRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog") ? "weekly" : route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("creation-site-internet-paroisse") ? 0.9 : route === "/blog" ? 0.8 : 0.65
  }));
}
