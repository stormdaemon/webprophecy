import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mentions legales",
  description: "Mentions legales du site Web Prophecy, agence digitale catholique editee par Theo Lafont.",
  path: "/mentions-legales"
});

const sections = [
  {
    title: "Editeur du site",
    body: [
      `Le present site est edite par ${siteConfig.legalName}.`,
      "Nom commercial : Web Prophecy.",
      `Adresse du siege social : ${siteConfig.address}.`,
      `Telephone : ${siteConfig.phone}.`,
      `Adresse email : ${siteConfig.email}.`
    ]
  },
  {
    title: "Identification de l'entreprise",
    body: [
      "Forme juridique : entrepreneur individuel.",
      `SIREN : ${siteConfig.siren}.`,
      `SIRET du siege social : ${siteConfig.siret}.`,
      `Numero de TVA intracommunautaire : ${siteConfig.vat}.`,
      "Code NAF / APE : 4791B - Vente a distance sur catalogue specialise.",
      "Registre : Registre National des Entreprises (RNE)."
    ]
  },
  {
    title: "Directeur de la publication",
    body: [`Le directeur de la publication est ${siteConfig.founder}.`]
  },
  {
    title: "Hebergement du site",
    body: [
      "Le site est heberge par Netlify, Inc.",
      "Adresse : 44 Montgomery Street, Suite 300, San Francisco, California 94104, Etats-Unis.",
      "Site web : https://www.netlify.com."
    ]
  },
  {
    title: "Objet du site",
    body: [
      "Le site Web Prophecy presente des services de creation de sites internet, d'applications web, de strategie digitale et de communication numerique pour paroisses catholiques, communautes religieuses, associations catholiques et structures assimilees.",
      "Les informations publiees sont fournies a titre indicatif. Web Prophecy s'efforce de maintenir les contenus a jour mais ne peut garantir l'exactitude permanente de toutes les informations diffusees."
    ]
  },
  {
    title: "Propriete intellectuelle",
    body: [
      "L'ensemble des contenus presents sur le site, notamment les textes, images, elements graphiques, logos, interfaces, maquettes et codes, est protege par le droit de la propriete intellectuelle.",
      "Sauf autorisation ecrite prealable, toute reproduction, representation, modification, adaptation, diffusion ou exploitation totale ou partielle des contenus du site est interdite."
    ]
  },
  {
    title: "Responsabilite",
    body: [
      "Web Prophecy ne saurait etre tenu responsable des dommages directs ou indirects resultant de l'acces au site, de son utilisation, d'une interruption de service, d'un dysfonctionnement technique ou de la presence eventuelle d'erreurs.",
      "Le site peut contenir des liens vers des sites tiers. Web Prophecy n'exerce aucun controle sur ces sites et decline toute responsabilite concernant leurs contenus ou pratiques."
    ]
  },
  {
    title: "Donnees personnelles et cookies",
    body: [
      "Des donnees personnelles peuvent etre collectees via les formulaires de contact, demandes d'audit ou echanges par email : nom, email, telephone, structure, message et donnees techniques strictement necessaires.",
      `Pour exercer vos droits d'acces, de rectification, d'effacement ou de limitation, contactez ${siteConfig.email}.`,
      "Le site peut utiliser des cookies techniques necessaires. Les cookies non essentiels ne doivent etre deposes qu'apres consentement."
    ]
  }
];

export default function LegalPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Derniere mise a jour : 29/04/2026</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Mentions legales</h1>
        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-md border border-stone-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
              <div className="mt-4 grid gap-3 text-base leading-7 text-stone-650">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
