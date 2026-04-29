import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contactez Web Prophecy pour un audit gratuit, une création de site paroissial, une refonte, une PWA ou un projet digital catholique.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Parlons de votre site paroissial
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-650">
              Décrivez votre contexte, votre paroisse ou votre communauté, puis les besoins les
              plus urgents. Vous pouvez aussi demander un audit gratuit de votre site actuel.
            </p>
            <div className="mt-8 rounded-md border border-stone-200 bg-white p-6 text-sm leading-7 text-stone-650">
              <p className="font-semibold text-ink">Coordonnées</p>
              <a className="mt-3 block underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a className="block underline" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
              <p className="mt-3">{siteConfig.address}</p>
            </div>
          </div>
          <div className="rounded-md border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
