import type { Metadata } from "next";
import Link from "next/link";
import { localPages } from "@/content/seo-growth";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Création de site web pour paroisse par ville",
  description: "Pages locales Web Prophecy pour accompagner les paroisses selon leur ville, diocèse ou région.",
  path: "/creation-site-web-paroisse"
});

export default function LocalIndexPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Présence locale</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Des sites paroissiaux pensés pour leur territoire</h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {localPages.map((page) => (
            <Link key={page.slug} href={`/creation-site-web-paroisse/${page.slug}`} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm hover:border-gold">
              <h2 className="text-xl font-semibold text-ink">{page.title}</h2>
              <p className="mt-3 text-stone-650">Créer une présence claire, locale et utile pour les fidèles à {page.city}.</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
