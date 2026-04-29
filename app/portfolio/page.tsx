import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { portfolioItems } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Decouvrez les projets catholiques accompagnes par Web Prophecy : Wikibible, radio catholique, sites paroissiaux et cas d'usage digitaux.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <main>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Portfolio"
            title="Des projets catholiques utiles, construits avec discretion et exigence"
            text="Cette page presente les realisations publiques et les accompagnements anonymises lorsque le contexte pastoral ou editorial demande de la discretion."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {portfolioItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm">
                <div className="relative aspect-[16/9] bg-stone-100">
                  <Image
                    src={item.image}
                    alt={`Capture d'ecran du projet ${item.title}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-h-[18rem] flex-col p-7">
                  <p className="text-sm font-semibold text-gold-dark">{item.type}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-4 flex-1 leading-7 text-stone-650">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-sage px-3 py-1 text-xs font-semibold text-ink">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline"
                    >
                      Ouvrir le site <ExternalLink aria-hidden="true" size={16} />
                    </a>
                  ) : (
                    <p className="mt-6 text-sm font-medium text-stone-500">URL a renseigner</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Vous voulez un projet aussi clair pour votre paroisse ?" />
    </main>
  );
}
