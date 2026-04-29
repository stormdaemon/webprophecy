import type { Metadata } from "next";
import Link from "next/link";
import { glossaryPages } from "@/content/seo-growth";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Glossaire digital catholique",
  description: "Définitions SEO et digitales pour mieux comprendre les sites paroissiaux, PWA, MessesInfo, denier en ligne et formulaires de sacrements.",
  path: "/glossaire"
});

export default function GlossaryIndexPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Glossaire</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Comprendre les mots du digital catholique</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {glossaryPages.map((page) => (
            <Link key={page.slug} href={`/glossaire/${page.slug}`} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm hover:border-gold">
              <h2 className="text-xl font-semibold text-ink">{page.title}</h2>
              <p className="mt-3 leading-7 text-stone-650">{page.definition}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
