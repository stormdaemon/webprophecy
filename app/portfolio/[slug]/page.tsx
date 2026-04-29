import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { detailedPortfolioItems } from "@/content/seo-growth";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return detailedPortfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = detailedPortfolioItems.find((project) => project.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} - Portfolio`,
    description: item.description,
    alternates: { canonical: `/portfolio/${item.slug}` }
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = detailedPortfolioItems.find((project) => project.slug === slug);
  if (!item) notFound();

  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Portfolio", href: "/portfolio" }, { name: item.title, href: `/portfolio/${item.slug}` }]} />
      <article className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">{item.type}</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">{item.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-650">{item.description}</p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-md border border-stone-200 bg-stone-100">
          <Image src={item.image} alt={`Capture du projet ${item.title}`} fill sizes="100vw" className="object-cover" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Enjeu", item.challenge],
            ["Solution", item.solution],
            ["Impact", item.impact]
          ].map(([title, text]) => (
            <section key={title} className="rounded-md border border-stone-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 leading-7 text-stone-650">{text}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={item.href || "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800">
            Visiter le site <ExternalLink aria-hidden="true" size={16} />
          </a>
          <Link href="/contact" className="rounded-md border border-stone-300 px-5 py-3 text-sm font-semibold text-ink hover:bg-stone-100">
            Discuter d'un projet similaire
          </Link>
        </div>
      </article>
    </main>
  );
}
