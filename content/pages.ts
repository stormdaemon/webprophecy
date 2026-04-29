import {
  CalendarDays,
  Church,
  ClipboardList,
  CreditCard,
  HandHeart,
  Mail,
  MapPinned,
  Radio,
  Search,
  ShieldCheck,
  Smartphone,
  UsersRound
} from "lucide-react";

export const pains = [
  "Horaires de messes difficiles à trouver sur mobile",
  "Ancien site lent, daté ou compliqué à mettre à jour",
  "Demandes de baptême, mariage et certificats dispersées",
  "Inscriptions au catéchisme encore gérées à la main",
  "Actualités éparpillées entre PDF, affiches, Facebook et WhatsApp",
  "Dons, denier et quêtes en ligne trop peu visibles"
];

export const services = [
  {
    icon: Church,
    title: "Sites paroissiaux",
    text: "Des sites rapides, lisibles et simples à administrer pour présenter la vie paroissiale, les horaires, l'agenda et les contacts essentiels."
  },
  {
    icon: Smartphone,
    title: "Applications et PWA",
    text: "Une expérience installable sur smartphone pour garder le lien avec les fidèles, sans la lourdeur d'une application native."
  },
  {
    icon: ClipboardList,
    title: "Formulaires pastoraux",
    text: "Baptême, mariage, catéchisme, intentions de messe et rendez-vous centralisés dans des parcours clairs."
  },
  {
    icon: Search,
    title: "SEO local",
    text: "Structure technique, contenus et données cohérentes pour mieux apparaître sur Google et aider chacun à trouver la paroisse."
  }
];

export const featureCards = [
  { icon: CalendarDays, title: "Horaires et agenda", text: "Messes, confessions, adorations, offices, retraites et événements accessibles en quelques secondes." },
  { icon: CreditCard, title: "Dons en ligne", text: "Des pages de soutien claires pour le denier, la quête, les offrandes ou une plateforme diocésaine." },
  { icon: Mail, title: "Newsletter", text: "Un lien régulier avec les paroissiens, les familles, les bénévoles et les visiteurs." },
  { icon: ShieldCheck, title: "RGPD et sécurité", text: "Formulaires sobres, consentement explicite, données minimales et bonnes pratiques techniques." },
  { icon: MapPinned, title: "Présence locale", text: "Adresse, accès, Google Business Profile, Schema.org et informations pratiques cohérentes." },
  { icon: UsersRound, title: "Administration simple", text: "Des contenus organisés pour que les équipes non techniques puissent garder le site vivant." }
];

export const portfolioItems = [
  {
    title: "Wikibible",
    type: "Projet public",
    href: "https://wikibible.fr",
    image: "/images/portfolio/wikibible.png",
    description:
      "Une plateforme catholique ambitieuse autour de la Bible, conçue comme une base de connaissance claire, collaborative et accessible.",
    tags: ["Plateforme web", "Contenu biblique", "Architecture"]
  },
  {
    title: "Ultreia Event",
    type: "Communication catholique",
    href: "https://ultreiaevent.com/",
    image: "/images/portfolio/ultreiaevent.png",
    description:
      "Un site vitrine pour porter des projets catholiques, présenter les services et transformer l'intérêt en prise de contact.",
    tags: ["Site vitrine", "Événementiel", "Communication"]
  },
  {
    title: "SOS Chrétiens d'Occident",
    type: "Association catholique",
    href: "https://soschretiensdoccident.fr/",
    image: "/images/portfolio/soschretiendoccident.png",
    description:
      "Une présence web engagée pour clarifier une mission associative, présenter les actions et mobiliser les soutiens.",
    tags: ["Association", "Engagement", "Landing page"]
  },
  {
    title: "Heaven Radio",
    type: "Radio catholique",
    href: "https://heavenradio.fr/",
    image: "/images/portfolio/heavenradio.png",
    description:
      "Un univers digital pour une radio catholique 100 % louange et adoration, pensé pour l'écoute, le soutien et les usages mobiles.",
    tags: ["Radio", "Streaming", "Mobile"]
  },
  {
    title: "Le Baptême Catholique",
    type: "Parcours sacramentel",
    href: "https://lebaptemecatholique.fr/",
    image: "/images/portfolio/baptemecatholique.png",
    description:
      "Une interface d'accueil et de pédagogie pour aider les personnes à découvrir le baptême et entrer en contact avec une paroisse.",
    tags: ["Sacrement", "Contact", "Pédagogie"]
  }
];

export const processSteps = [
  "Audit du site actuel, des besoins pastoraux et des informations prioritaires.",
  "Architecture claire pour les fidèles, les familles, les visiteurs et le secrétariat.",
  "Design responsive, développement Next.js, SEO technique et contenus essentiels.",
  "Mise en ligne, vérification des formulaires, formation courte et suivi."
];

export const pillarFaq = [
  {
    question: "Combien coûte un site internet pour une paroisse ?",
    answer:
      "Le prix dépend du nombre de pages, des formulaires, de l'administration, des intégrations de dons, de l'agenda et du niveau d'accompagnement. Web Prophecy commence par un audit pour proposer une solution adaptée au budget et aux priorités de la paroisse."
  },
  {
    question: "Une petite paroisse a-t-elle besoin d'un site moderne ?",
    answer:
      "Oui, si les fidèles cherchent les horaires, les contacts, les sacrements ou les annonces sur internet. Un site simple, rapide et clair peut déjà rendre un grand service pastoral sans devenir lourd à administrer."
  },
  {
    question: "Peut-on intégrer les horaires de messe ?",
    answer:
      "Oui. Les horaires réguliers, les changements exceptionnels, les confessions, adorations et offices peuvent être présentés clairement. Selon le contexte, le site peut aussi orienter vers MessesInfo ou une source diocésaine."
  },
  {
    question: "Peut-on recevoir des demandes de baptême ou de mariage ?",
    answer:
      "Oui. Les formulaires peuvent centraliser les demandes de baptême, mariage, certificat, catéchisme ou rendez-vous avec un prêtre, avec consentement RGPD et notification au secrétariat."
  },
  {
    question: "Est-ce adapté aux bénévoles non techniques ?",
    answer:
      "C'est un critère central. Le site doit être lisible pour les visiteurs et simple pour les équipes : contenus organisés, parcours courts, textes explicites et administration réduite à l'essentiel."
  }
];

export const aboutMilestones = [
  {
    icon: Radio,
    title: "Avril 2024",
    text: "La rencontre avec Samuël ouvre un projet de radio catholique bien plus vaste qu'un simple site."
  },
  {
    icon: ShieldCheck,
    title: "Mise en place",
    text: "Site web, streaming, studio et ingénierie technique demandent plusieurs mois de travail concret."
  },
  {
    icon: HandHeart,
    title: "Une vocation de service",
    text: "De nouveaux projets catholiques naissent, dont Wikibible, et révèlent un besoin digital encore trop peu servi."
  }
];
