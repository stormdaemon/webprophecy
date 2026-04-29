export const siteConfig = {
  name: "Web Prophecy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://webprophecy.netlify.app",
  baseline: "Le numerique au service des paroisses vivantes.",
  description:
    "Agence digitale catholique specialisee dans les sites web et applications modernes pour paroisses, dioceses et communautes religieuses.",
  email: "tlafont49@gmail.com",
  phone: "07 68 51 95 68",
  address: "149 rue Henri Fichon, 16100 Cognac, France",
  founder: "Theo Lafont",
  legalName: "Theo Lafont, entrepreneur individuel",
  siren: "884 758 970",
  siret: "884 758 970 00047",
  vat: "FR59 884 758 970"
};

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Creer un site paroissial", href: "/creation-site-internet-paroisse" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "A propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = [
  { label: "Mentions legales", href: "/mentions-legales" },
  { label: "Politique de confidentialite", href: "/politique-de-confidentialite" }
];
