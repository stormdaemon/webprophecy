export const siteConfig = {
  name: "Web Prophecy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://webprophecy.netlify.app",
  baseline: "Le numérique au service des paroisses vivantes.",
  description:
    "Agence digitale catholique spécialisée dans les sites web et applications modernes pour paroisses, diocèses et communautés religieuses.",
  email: "tlafont49@gmail.com",
  phone: "07 68 51 95 68",
  address: "149 rue Henri Fichon, 16100 Cognac, France",
  founder: "Théo Lafont",
  legalName: "Théo Lafont, entrepreneur individuel",
  siren: "884 758 970",
  siret: "884 758 970 00047",
  vat: "FR59 884 758 970"
};

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Créer un site paroissial", href: "/creation-site-internet-paroisse" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = [
  { label: "Audit gratuit", href: "/audit-site-paroissial" },
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Glossaire", href: "/glossaire" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" }
];
