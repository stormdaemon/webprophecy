import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { glossaryPages } from "@/content/seo-growth";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return glossaryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = glossaryPages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title} - Glossaire`,
    description: page.definition,
    alternates: { canonical: `/glossaire/${page.slug}` }
  };
}

export default async function GlossaryPage({ params }: Props) {
  const { slug } = await params;
  const page = glossaryPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Glossaire", href: "/blog" }, { name: page.title, href: `/glossaire/${page.slug}` }]} />
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Glossaire</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">{page.title}</h1>
        <p className="mt-6 text-xl leading-8 text-stone-650">{page.definition}</p>
        <section className="mt-10 rounded-md border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-ink">Pourquoi c'est important ?</h2>
          <p className="mt-4 leading-7 text-stone-650">
            Ce terme revient souvent dans les projets de sites catholiques. Le clarifier permet de
            mieux cadrer un besoin, éviter les solutions trop lourdes et construire un parcours plus
            utile pour les fidèles.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800">
            En parler avec Web Prophecy
          </Link>
        </section>
      </article>
    </main>
  );
}
