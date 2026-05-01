import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import type { SeoPage } from "@/content/seo-growth";

export function SeoLandingPage({ page }: { page: SeoPage }) {
  return (
    <main>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">{page.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{page.title}</h1>
            <p className="mt-6 text-lg leading-8 text-stone-650">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800">
                Demander un diagnostic gratuit
              </Link>
              <Link href="/creation-site-internet-paroisse" className="inline-flex items-center gap-2 rounded-md border border-stone-300 px-5 py-3 text-sm font-semibold text-ink hover:bg-stone-100">
                Découvrir l'accompagnement <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
          <div className="rounded-md border border-stone-200 bg-ivory p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Concrètement</p>
            <div className="mt-5 grid gap-3">
              {page.points.map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-gold-dark" size={20} />
                  <p className="text-sm leading-6 text-stone-650">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-ink">Questions fréquentes</h2>
          <FAQAccordion items={page.faq} />
        </div>
      </section>
    </main>
  );
}
