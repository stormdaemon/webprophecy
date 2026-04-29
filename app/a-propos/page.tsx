import type { Metadata } from "next";
import Link from "next/link";
import { aboutMilestones } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "A propos",
  description:
    "L'histoire de Web Prophecy, nee de projets catholiques concrets autour d'une radio, de Wikibible et du service digital des paroisses.",
  path: "/a-propos"
});

export default function AboutPage() {
  return (
    <main>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">A propos</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Une agence nee au contact de projets catholiques tres concrets
            </h1>
          </div>
          <div className="prose prose-stone max-w-none text-lg leading-8 text-stone-650">
            <p>
              En avril 2024, alors que Theo Lafont travaillait deja comme freelance dans le
              digital, une rencontre a change la trajectoire de son activite : celle de Samuel,
              venu avec un projet de radio catholique a la fois ambitieux et exigeant.
            </p>
            <p>
              Le besoin depassait largement la creation d'un site. Il fallait penser le studio,
              le streaming, l'infrastructure technique, la presence web et les usages reels des
              auditeurs. Ce travail a demande plusieurs mois de mise en place et a ouvert la voie
              a d'autres projets catholiques.
            </p>
            <p>
              Parmi eux, <a href="https://wikibible.fr" target="_blank" rel="noreferrer">Wikibible</a>,
              imagine comme un Wikipedia biblique accessible et ambitieux, a confirme une intuition :
              le monde catholique porte des projets numeriques forts, mais il manque encore
              d'acteurs specialises capables de comprendre sa culture, son vocabulaire et ses
              contraintes.
            </p>
            <p>
              Web Prophecy est ne de cette conviction : permettre aux paroisses, communautes et
              associations catholiques de beneficier d'outils modernes sans perdre la sobriete, la
              clarte et le sens du service.
            </p>
            <Link href="/contact" className="inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-stone-800">
              Echanger sur votre projet
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {aboutMilestones.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-md border border-stone-200 p-6">
                <Icon aria-hidden="true" className="text-gold-dark" size={28} />
                <h2 className="mt-5 text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 leading-7 text-stone-650">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
