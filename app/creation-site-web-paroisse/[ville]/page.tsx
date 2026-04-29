import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { localPages } from "@/content/seo-growth";

type Props = { params: Promise<{ ville: string }> };

export function generateStaticParams() {
  return localPages.map((page) => ({ ville: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const page = localPages.find((item) => item.slug === ville);
  if (!page) return {};
  return {
    title: page.title,
    description: `Web Prophecy accompagne les paroisses à ${page.city} pour créer des sites rapides, clairs et pensés pour les fidèles.`,
    alternates: { canonical: `/creation-site-web-paroisse/${page.slug}` }
  };
}

export default async function LocalPage({ params }: Props) {
  const { ville } = await params;
  const page = localPages.find((item) => item.slug === ville);
  if (!page) notFound();

  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: page.title, href: `/creation-site-web-paroisse/${page.slug}` }]} />
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">SEO local catholique</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{page.title}</h1>
        <p className="mt-6 text-lg leading-8 text-stone-650">
          Web Prophecy aide les paroisses, communautés et associations catholiques de {page.city} à
          créer des sites lisibles, rapides et utiles pour les fidèles : horaires, sacrements,
          agenda, dons, formulaires et visibilité locale.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {["Horaires et lieux de culte lisibles", "Pages sacrements orientées contact", "Google Business Profile cohérent", "SEO local et données structurées"].map((item) => (
            <div key={item} className="rounded-md border border-stone-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">{item}</h2>
              <p className="mt-3 leading-7 text-stone-650">
                Une information claire et stable aide les personnes à trouver la paroisse, préparer une
                démarche et contacter la bonne équipe.
              </p>
            </div>
          ))}
        </div>
        <Link href="/audit-site-paroissial" className="mt-10 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800">
          Demander un audit local gratuit
        </Link>
      </section>
    </main>
  );
}
