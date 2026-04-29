import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite Web Prophecy : donnees collectees, finalites, Formspree, conservation, droits RGPD et contact.",
  path: "/politique-de-confidentialite"
});

const privacy = [
  {
    title: "Donnees collectees",
    text: "Web Prophecy peut collecter les informations transmises volontairement via le formulaire de contact : nom, adresse email, telephone, paroisse ou structure, besoin principal, message et consentement RGPD."
  },
  {
    title: "Finalites",
    text: "Ces donnees servent uniquement a repondre aux demandes, preparer un audit, etablir un devis, assurer le suivi commercial et securiser les echanges lies au projet."
  },
  {
    title: "Formspree",
    text: "Le formulaire utilise Formspree comme prestataire technique d'acheminement. Les donnees soumises peuvent transiter par l'infrastructure de Formspree afin d'envoyer la notification a Web Prophecy."
  },
  {
    title: "Conservation",
    text: "Les messages de contact sont conserves pendant la duree necessaire au traitement de la demande, puis pour une duree raisonnable de suivi commercial ou d'obligation administrative."
  },
  {
    title: "Partage",
    text: "Aucune donnee personnelle n'est vendue. Les donnees peuvent etre traitees par des prestataires techniques strictement necessaires au fonctionnement du site, comme l'hebergeur Netlify ou Formspree."
  },
  {
    title: "Vos droits",
    text: `Vous pouvez demander l'acces, la rectification, l'effacement, la limitation ou l'opposition au traitement de vos donnees en ecrivant a ${siteConfig.email}.`
  },
  {
    title: "Cookies",
    text: "Le site peut utiliser des cookies techniques necessaires a son bon fonctionnement. Aucun outil de mesure d'audience non essentiel ne doit etre active sans information et consentement lorsque celui-ci est requis."
  }
];

export default function PrivacyPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-dark">Derniere mise a jour : 29/04/2026</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Politique de confidentialite</h1>
        <p className="mt-6 text-lg leading-8 text-stone-650">
          Cette politique explique comment Web Prophecy traite les donnees personnelles transmises
          dans le cadre de l'utilisation du site et des demandes de contact.
        </p>
        <div className="mt-10 grid gap-5">
          {privacy.map((item) => (
            <section key={item.title} className="rounded-md border border-stone-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-4 leading-7 text-stone-650">{item.text}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
