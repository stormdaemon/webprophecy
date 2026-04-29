import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicePages } from "@/content/seo-growth";
import { faqJsonLd, serviceJsonLd } from "@/lib/growthSchema";
import { pageMetadata } from "@/lib/seo";

const page = servicePages.find((item) => item.slug === "audit-site-paroissial")!;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path
});

export default function AuditSiteParoissialPage() {
  return (
    <main>
      <JsonLd data={[serviceJsonLd(page), faqJsonLd(page)]} />
      <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: page.title, href: page.path }]} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">{page.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{page.title}</h1>
            <p className="mt-6 text-lg leading-8 text-stone-650">{page.intro}</p>
            <ul className="mt-8 grid gap-3">
              {page.points.map((point) => (
                <li key={point} className="rounded-md border border-stone-200 bg-white p-4 text-stone-650">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
