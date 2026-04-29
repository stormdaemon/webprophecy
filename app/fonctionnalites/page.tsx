import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featurePages } from "@/content/seo-growth";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fonctionnalités pour sites paroissiaux",
  description: "Horaires de messes, dons en ligne, formulaires de sacrements, catéchisme, SEO local et accessibilité.",
  path: "/fonctionnalites"
});

export default function FeaturesIndexPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Fonctionnalités</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Les modules essentiels d'un site paroissial moderne</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featurePages.map((page) => (
            <Link key={page.path} href={page.path} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm hover:border-gold">
              <h2 className="text-xl font-semibold text-ink">{page.title}</h2>
              <p className="mt-3 leading-7 text-stone-650">{page.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                Découvrir <ArrowRight aria-hidden="true" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
