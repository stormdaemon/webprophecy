import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { publicBlogArticles } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ressources pour paroisses",
  description:
    "Guides pratiques pour moderniser un site paroissial, mieux présenter les horaires, les sacrements, les dons, le catéchisme et la vie locale.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">
              Ressources
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Des repères clairs pour moderniser la communication de votre paroisse
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-650">
              Horaires, sacrements, dons, catéchisme, accessibilité, refonte de site ou présence
              locale : retrouvez des guides concrets pour avancer sans complexifier le quotidien
              des équipes.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {publicBlogArticles.map((article) => (
              <article key={article.slug} className="flex min-h-[21rem] flex-col rounded-md border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold-dark">
                  <span>{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-ink">
                  <Link href={`/blog/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 leading-7 text-stone-650">{article.description}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline"
                >
                  Lire le guide <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
