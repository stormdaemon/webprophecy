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
  title: "Création de site internet pour paroisse catholique",
  description:
    "Web Prophecy crée des sites internet modernes pour paroisses catholiques : horaires de messes, agenda, dons en ligne, formulaires de sacrements, catéchisme et actualités.",
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
              Agence web spécialisée pour paroisses catholiques
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Création de site internet pour paroisse catholique
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-650">
              Web Prophecy conçoit des sites modernes, rapides et faciles à mettre à jour pour
              aider les paroisses à informer, accueillir, inscrire, collecter et garder le lien
              avec leurs fidèles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800">
                Demander un diagnostic gratuit
              </Link>
              <a href="#fonctionnalites" className="inline-flex items-center gap-2 rounded-md border border-stone-300 px-5 py-3 text-sm font-semibold text-ink hover:bg-stone-100">
                Voir les fonctionnalités <ArrowRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
          <div className="rounded-md border border-stone-200 bg-ivory p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">À clarifier en priorité</p>
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
            eyebrow="Fonctionnalités essentielles"
            title="Tout ce qu'une paroisse doit rendre visible rapidement"
            text="Un bon site paroissial répond d'abord aux questions concrètes : horaires, contacts, sacrements, agenda, dons et inscriptions."
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
              text="Le site web centralise les informations publiques et rend la paroisse facile à trouver. Une PWA peut ensuite offrir un accès rapide, des annonces et une expérience plus fidèle."
            />
          </div>
          <div className="grid gap-4">
            {["Pages rapides sur mobile", "Lecture confortable pour tous les âges", "Présence locale cohérente", "Formulaires sécurisés et consentement RGPD"].map((item) => (
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
            eyebrow="Méthode"
            title="Une réalisation cadrée pour ne pas compliquer le quotidien des équipes"
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
          <SectionHeader eyebrow="FAQ" title="Questions fréquentes des paroisses" align="center" />
          <FAQAccordion items={pillarFaq} />
        </div>
      </section>
      <CTA />
    </main>
  );
}
