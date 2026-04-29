import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CardGrid } from "@/components/sections/CardGrid";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { featureCards, pains, portfolioItems, services } from "@/content/pages";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <Image
          src="/images/hero-web-prophecy.png"
          alt="Ordinateur affichant un site de paroisse dans une eglise lumineuse"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/65 to-ink/20" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Agence digitale catholique
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Sites web et applications modernes pour paroisses catholiques
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-100 sm:text-xl">
              Web Prophecy aide les paroisses a mieux communiquer, accueillir les fideles,
              publier leurs horaires, gerer les demandes de sacrements et developper les dons
              en ligne grace a des sites rapides, clairs et faciles a administrer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink hover:bg-gold-dark">
                Demander un audit gratuit
              </Link>
              <Link href="/creation-site-internet-paroisse" className="inline-flex items-center gap-2 rounded-md border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Voir l'offre paroissiale <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Problemes concrets"
            title="Un site paroissial doit servir le quotidien, pas seulement presenter une vitrine."
            text="Les fideles cherchent des informations simples. Les equipes paroissiales ont besoin d'un outil fiable, lisible et sobre."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {pains.map((pain) => (
              <div key={pain} className="flex gap-3 rounded-md border border-stone-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 shrink-0 text-gold-dark" aria-hidden="true" size={20} />
                <p className="text-sm leading-6 text-stone-650">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Des outils numeriques simples pour servir la mission pastorale"
            text="Web Prophecy construit des parcours utiles pour les paroissiens, les familles, les benevoles et les secretariats."
          />
          <div className="mt-10">
            <CardGrid cards={services} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Fonctionnalites"
            title="Les briques attendues d'un systeme de communication paroissiale"
            align="center"
          />
          <div className="mt-10">
            <CardGrid cards={featureCards} />
          </div>
        </div>
      </section>

      <section className="soft-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Realisations"
            title="Des projets catholiques concrets, presentes sans temoignages inventes"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {portfolioItems.map((item) => (
              <article key={item.title} className="rounded-md border border-white/70 bg-white/92 p-6 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-gold-dark">{item.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-650">{item.description}</p>
                {item.href ? (
                  <a href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline" target="_blank" rel="noreferrer">
                    Voir le projet <ArrowRight aria-hidden="true" size={16} />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
