import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CardGrid } from "@/components/sections/CardGrid";
import { CTA } from "@/components/sections/CTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { featureCards, pillarFaq, pains, processSteps } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";
import { parishWebsiteServiceSchema, pillarFaqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Creation de site internet pour paroisse catholique",
  description:
    "Web Prophecy cree des sites internet modernes pour paroisses catholiques : horaires de messes, agenda, dons en ligne, formulaires de sacrements, catechisme et actualites.",
  path: "/creation-site-internet-paroisse"
});

export default function CreationSiteInternetParoissePage() {
  return (
    <main>
      <JsonLd data={[parishWebsiteServiceSchema, pillarFaqSchema]} />
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">
              Agence web specialisee pour paroisses catholiques
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Creation de site internet pour paroisse catholique
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-650">
              Web Prophecy concoit des sites modernes, rapides et faciles a mettre a jour pour
              aider les paroisses a informer, accueillir, inscrire, collecter et garder le lien
              avec leurs fideles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800">
                Demander un audit gratuit
              </Link>
              <a href="#fonctionnalites" className="inline-flex items-center gap-2 rounded-md border border-stone-300 px-5 py-3 text-sm font-semibold text-ink hover:bg-stone-100">
                Voir les fonctionnalites <ArrowRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
          <div className="rounded-md border border-stone-200 bg-ivory p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">A clarifier en priorite</p>
            <div className="mt-5 grid gap-3">
              {pains.slice(0, 5).map((pain) => (
                <div key={pain} className="flex gap-3">
                  <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-gold-dark" size={20} />
                  <p className="text-sm leading-6 text-stone-650">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fonctionnalites" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Fonctionnalites essentielles"
            title="Tout ce qu'une paroisse doit rendre visible rapidement"
            text="Un bon site paroissial repond d'abord aux questions concretes : horaires, contacts, sacrements, agenda, dons et inscriptions."
          />
          <div className="mt-10">
            <CardGrid cards={featureCards} />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Site ou application"
              title="Commencer par le bon outil, pas par la solution la plus lourde"
              text="Le site web donne la visibilite Google et centralise les informations publiques. Une PWA peut ensuite apporter un acces rapide, des notifications et une experience plus fidele."
            />
          </div>
          <div className="grid gap-4">
            {["Performance mobile et Core Web Vitals", "Accessibilite pour personnes agees", "SEO local et donnees Schema.org", "Formulaires securises et consentement RGPD"].map((item) => (
              <div key={item} className="rounded-md border border-stone-200 p-5">
                <p className="font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Methode"
            title="Une realisation cadree pour ne pas compliquer le quotidien des equipes"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold text-sm font-bold text-ink">
                  {index + 1}
                </span>
                <p className="mt-5 leading-7 text-stone-650">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Questions frequentes des paroisses" align="center" />
          <FAQAccordion items={pillarFaq} />
        </div>
      </section>
      <CTA />
    </main>
  );
}
