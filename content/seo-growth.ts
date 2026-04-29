import { portfolioItems } from "@/content/pages";

export type SeoPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  points: string[];
  faq: { question: string; answer: string }[];
};

export const servicePages: SeoPage[] = [
  {
    slug: "application-paroisse",
    path: "/application-paroisse",
    title: "Application paroisse et PWA catholique",
    description: "Créer une application paroissiale légère, installable et simple à maintenir grâce à une PWA.",
    eyebrow: "Application paroissiale",
    intro: "Une PWA permet à une paroisse de proposer une expérience mobile proche d'une application, sans imposer le coût et la maintenance d'une application native.",
    points: ["Installation sur smartphone", "Accès rapide aux horaires et annonces", "Notifications possibles", "Maintenance plus simple qu'une application native"],
    faq: [
      { question: "Une paroisse a-t-elle besoin d'une application ?", answer: "Pas toujours. Le site reste la base SEO. La PWA devient utile quand les fidèles consultent souvent les horaires, annonces ou feuilles paroissiales." },
      { question: "Est-ce plus simple qu'une application native ?", answer: "Oui. Une PWA se déploie comme un site web et peut offrir une expérience mobile très fluide." }
    ]
  },
  {
    slug: "refonte-site-paroisse",
    path: "/refonte-site-paroisse",
    title: "Refonte de site paroissial",
    description: "Moderniser un ancien site paroissial sans perdre le SEO, les contenus utiles ni la simplicité d'administration.",
    eyebrow: "Refonte",
    intro: "Une refonte réussie clarifie les informations essentielles, améliore la performance mobile et transforme un site ancien en véritable outil pastoral.",
    points: ["Audit des pages existantes", "Redirections SEO", "Nouvelle architecture claire", "Migration progressive des contenus utiles"],
    faq: [
      { question: "Faut-il tout refaire ?", answer: "Non. On conserve ce qui sert, on fusionne ce qui se répète et on supprime ce qui brouille la lecture." },
      { question: "Le référencement peut-il être conservé ?", answer: "Oui, à condition de prévoir les redirections, les titres, les liens internes et le sitemap." }
    ]
  },
  {
    slug: "audit-site-paroissial",
    path: "/audit-site-paroissial",
    title: "Audit gratuit de site paroissial",
    description: "Recevoir un diagnostic clair de votre site paroissial : SEO, lisibilité, mobile, formulaires, dons et conversion.",
    eyebrow: "Audit gratuit",
    intro: "L'audit identifie les blocages concrets qui empêchent votre site de rendre service aux fidèles et aux équipes paroissiales.",
    points: ["Analyse SEO et technique", "Audit mobile et accessibilité", "Relecture des parcours sacrements", "Plan d'action priorisé"],
    faq: [
      { question: "Que reçoit-on après l'audit ?", answer: "Une synthèse claire des priorités : ce qui bloque, ce qui peut être corrigé vite et ce qui mérite une refonte." },
      { question: "L'audit engage-t-il la paroisse ?", answer: "Non. Il sert d'abord à comprendre votre situation et à ouvrir un échange utile." }
    ]
  }
];

export const featurePages: SeoPage[] = [
  {
    slug: "horaires-messes",
    path: "/fonctionnalites/horaires-messes",
    title: "Horaires de messes sur site paroissial",
    description: "Afficher les horaires de messes, confessions, adorations et offices de manière claire et fiable.",
    eyebrow: "Horaires",
    intro: "Les horaires sont souvent la première raison de visite. Ils doivent être visibles, à jour et lisibles sur mobile.",
    points: ["Horaires réguliers", "Changements exceptionnels", "Lieux et accès", "Lien ou intégration MessesInfo"],
    faq: [
      { question: "Peut-on afficher plusieurs clochers ?", answer: "Oui, chaque lieu peut avoir son adresse, ses horaires et ses informations pratiques." },
      { question: "Peut-on signaler les horaires exceptionnels ?", answer: "Oui, c'est même essentiel pour Noël, Pâques, vacances ou fêtes locales." }
    ]
  },
  {
    slug: "dons-en-ligne-paroisse",
    path: "/fonctionnalites/dons-en-ligne-paroisse",
    title: "Dons en ligne pour paroisse",
    description: "Créer des pages de dons claires pour le denier, la quête, les offrandes et les projets paroissiaux.",
    eyebrow: "Dons en ligne",
    intro: "Une page de don efficace inspire confiance, explique le sens du geste et oriente vers la bonne plateforme.",
    points: ["Denier de l'Église", "Quête en ligne", "Offrandes et intentions", "Lien vers plateforme diocésaine"],
    faq: [
      { question: "Faut-il gérer le paiement sur le site ?", answer: "Pas forcément. Le site peut orienter vers une plateforme diocésaine ou une solution déjà validée." },
      { question: "Comment rassurer les donateurs ?", answer: "En expliquant clairement l'usage du don, le circuit de paiement et les contacts disponibles." }
    ]
  },
  {
    slug: "formulaires-sacrements",
    path: "/fonctionnalites/formulaires-sacrements",
    title: "Formulaires de sacrements pour paroisse",
    description: "Centraliser les demandes de baptême, mariage, certificats, obsèques et rendez-vous pastoraux.",
    eyebrow: "Sacrements",
    intro: "Les formulaires pastoraux doivent ouvrir un dialogue, pas remplacer l'accueil humain de la paroisse.",
    points: ["Demande de baptême", "Préparation mariage", "Certificat de baptême", "Rendez-vous avec un prêtre"],
    faq: [
      { question: "Peut-on limiter les données collectées ?", answer: "Oui. On demande seulement les informations utiles au premier contact." },
      { question: "Le secrétariat reçoit-il les demandes ?", answer: "Oui, les notifications peuvent être envoyées aux bonnes personnes selon le type de demande." }
    ]
  },
  {
    slug: "inscriptions-catechisme",
    path: "/fonctionnalites/inscriptions-catechisme",
    title: "Inscriptions catéchisme en ligne",
    description: "Simplifier les inscriptions au catéchisme, à l'aumônerie et aux groupes jeunes.",
    eyebrow: "Catéchisme",
    intro: "Un formulaire clair réduit les échanges dispersés et aide les familles à commencer la démarche sereinement.",
    points: ["Informations parent/enfant", "Niveau scolaire", "Autorisations", "Export et suivi"],
    faq: [
      { question: "Peut-on adapter le formulaire par année ?", answer: "Oui, les champs peuvent évoluer selon l'organisation paroissiale." },
      { question: "Peut-on ajouter un paiement ?", answer: "Oui, si la paroisse utilise déjà une solution adaptée." }
    ]
  },
  {
    slug: "seo-local-paroisse",
    path: "/fonctionnalites/seo-local-paroisse",
    title: "SEO local pour paroisse",
    description: "Optimiser la visibilité locale d'une paroisse sur Google, Maps et les recherches conversationnelles.",
    eyebrow: "SEO local",
    intro: "Une paroisse doit être trouvée facilement par ville, quartier, horaires, sacrements et lieux de culte.",
    points: ["Pages locales", "Google Business Profile", "Données Schema.org", "Cohérence nom, adresse, téléphone"],
    faq: [
      { question: "Une paroisse peut-elle travailler son SEO local ?", answer: "Oui, surtout avec des informations cohérentes et des pages locales utiles." },
      { question: "Google Maps compte-t-il ?", answer: "Oui, la fiche Google est souvent la première porte d'entrée." }
    ]
  },
  {
    slug: "accessibilite-site-paroissial",
    path: "/fonctionnalites/accessibilite-site-paroissial",
    title: "Accessibilité de site paroissial",
    description: "Rendre un site paroissial lisible, confortable et utilisable par toutes les générations.",
    eyebrow: "Accessibilité",
    intro: "Un site paroissial doit accueillir aussi les personnes âgées, les visiteurs pressés et les utilisateurs mobiles.",
    points: ["Contrastes forts", "Textes lisibles", "Navigation clavier", "Formulaires compréhensibles"],
    faq: [
      { question: "L'accessibilité est-elle importante pour une paroisse ?", answer: "Oui, parce qu'elle touche directement l'accueil des fidèles." },
      { question: "Faut-il tout rendre complexe ?", answer: "Non. Les bases simples apportent déjà beaucoup : contraste, taille, structure et labels." }
    ]
  }
];

export const localPages = [
  { slug: "paris", city: "Paris", title: "Création de site web pour paroisse à Paris" },
  { slug: "lyon", city: "Lyon", title: "Création de site web pour paroisse à Lyon" },
  { slug: "bordeaux", city: "Bordeaux", title: "Création de site web pour paroisse à Bordeaux" },
  { slug: "nantes", city: "Nantes", title: "Création de site web pour paroisse à Nantes" },
  { slug: "toulouse", city: "Toulouse", title: "Création de site web pour paroisse à Toulouse" },
  { slug: "charente", city: "Charente", title: "Agence web catholique en Charente" },
  { slug: "nouvelle-aquitaine", city: "Nouvelle-Aquitaine", title: "Agence web catholique en Nouvelle-Aquitaine" }
];

export const glossaryPages = [
  { slug: "site-paroissial", title: "Site paroissial", definition: "Un site paroissial centralise les horaires, contacts, sacrements, actualités, dons et informations pratiques d'une paroisse." },
  { slug: "pwa-paroisse", title: "PWA paroisse", definition: "Une PWA paroissiale est une application web installable sur smartphone, plus légère qu'une application native." },
  { slug: "seo-local-paroisse", title: "SEO local paroisse", definition: "Le SEO local aide une paroisse à être trouvée sur Google par ville, quartier, horaires ou service pastoral." },
  { slug: "denier-en-ligne", title: "Denier en ligne", definition: "Le denier en ligne permet d'orienter les fidèles vers une contribution claire, souvent via une plateforme diocésaine." },
  { slug: "messesinfo", title: "MessesInfo", definition: "MessesInfo est un service de référence pour trouver des horaires de messes et lieux de culte catholiques." },
  { slug: "formulaire-sacrement", title: "Formulaire de sacrement", definition: "Un formulaire de sacrement recueille les informations utiles au premier contact pour un baptême, mariage ou certificat." }
];

export const detailedPortfolioItems = portfolioItems.map((item) => ({
  ...item,
  slug: item.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  challenge: "Clarifier le message, rendre l'offre immédiatement compréhensible et donner un parcours d'action simple.",
  solution: "Une interface rapide, lisible et structurée autour des usages réels : comprendre, explorer, écouter, soutenir ou prendre contact.",
  impact: "Une présence digitale plus crédible, plus partageable et mieux alignée avec la mission catholique portée par le projet."
}));

export const allSeoRoutes = [
  ...servicePages.map((page) => page.path),
  ...featurePages.map((page) => page.path),
  ...localPages.map((page) => `/creation-site-web-paroisse/${page.slug}`),
  ...glossaryPages.map((page) => `/glossaire/${page.slug}`),
  ...detailedPortfolioItems.map((page) => `/portfolio/${page.slug}`)
];
