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
  "Horaires de messes difficiles a trouver sur mobile",
  "Ancien site obsolète, lent ou complique a mettre a jour",
  "Demandes de bapteme, mariage et certificats dispersees",
  "Inscriptions au catechisme gerees a la main",
  "Actualites partagees entre PDF, affiches, Facebook et WhatsApp",
  "Dons, denier et quetes en ligne peu visibles"
];

export const services = [
  {
    icon: Church,
    title: "Sites paroissiaux",
    text: "Des sites rapides, lisibles et administres simplement pour presenter la vie paroissiale, les horaires, l'agenda et les contacts."
  },
  {
    icon: Smartphone,
    title: "Applications et PWA",
    text: "Une experience installable sur smartphone pour garder le lien avec les fideles sans la complexite d'une application native."
  },
  {
    icon: ClipboardList,
    title: "Formulaires pastoraux",
    text: "Bapteme, mariage, catechisme, intentions de messe et rendez-vous centralises dans des parcours clairs."
  },
  {
    icon: Search,
    title: "SEO local",
    text: "Structure technique, contenus et donnees coherentes pour mieux apparaitre sur Google et aider les personnes a trouver la paroisse."
  }
];

export const featureCards = [
  { icon: CalendarDays, title: "Horaires et agenda", text: "Messes, confessions, adorations, offices, retraites et evenements visibles rapidement." },
  { icon: CreditCard, title: "Dons en ligne", text: "Pages rassurantes pour orienter vers le denier, la quete, une offrande ou une plateforme diocesaine." },
  { icon: Mail, title: "Newsletter", text: "Un lien regulier avec les paroissiens, les familles, les benevoles et les visiteurs." },
  { icon: ShieldCheck, title: "RGPD et securite", text: "Formulaires sobres, consentement explicite, donnees minimales et bonnes pratiques techniques." },
  { icon: MapPinned, title: "Presence locale", text: "Adresse, acces, Google Business Profile, Schema.org et informations pratiques coherentes." },
  { icon: UsersRound, title: "Administration simple", text: "Des contenus organises pour que les equipes non techniques puissent garder le site vivant." }
];

export const portfolioItems = [
  {
    title: "Wikibible",
    type: "Projet public",
    href: "https://wikibible.fr",
    image: "/images/portfolio/wikibible.png",
    description:
      "Un projet encyclopedique catholique ambitieux autour de la Bible, pense comme une base de connaissance claire et accessible.",
    tags: ["Plateforme web", "Contenu biblique", "Architecture"]
  },
  {
    title: "Ultreia Event",
    type: "Communication catholique",
    href: "https://ultreiaevent.com/",
    image: "/images/portfolio/ultreiaevent.png",
    description:
      "Une vitrine de communication catholique orientee evenementiel, services et prise de contact rapide.",
    tags: ["Site vitrine", "Evenementiel", "Communication"]
  },
  {
    title: "SOS Chretiens d'Occident",
    type: "Association catholique",
    href: "https://soschretiensdoccident.fr/",
    image: "/images/portfolio/soschretiendoccident.png",
    description:
      "Une presence web engagee pour presenter une mission associative, ses actions et ses appels a mobilisation.",
    tags: ["Association", "Engagement", "Landing page"]
  },
  {
    title: "Heaven Radio",
    type: "Radio catholique",
    href: "https://heavenradio.fr/",
    image: "/images/portfolio/heavenradio.png",
    description:
      "Un univers digital pour une radio catholique 100% louange et adoration, avec ecoute, soutien et presence mobile.",
    tags: ["Radio", "Streaming", "Mobile"]
  },
  {
    title: "Le Bapteme Catholique",
    type: "Parcours sacramentel",
    href: "https://lebaptemecatholique.fr/",
    image: "/images/portfolio/baptemecatholique.png",
    description:
      "Une interface orientee accueil et pedagogie pour aider les personnes a decouvrir le bapteme et prendre contact avec une paroisse.",
    tags: ["Sacrement", "Contact", "Pedagogie"]
  }
];

export const processSteps = [
  "Audit du site actuel, des besoins pastoraux et des informations prioritaires.",
  "Architecture claire pour les fideles, les familles, les visiteurs et le secretariat.",
  "Design responsive, developpement Next.js, SEO technique et contenus essentiels.",
  "Mise en ligne, verification des formulaires, formation courte et suivi."
];

export const pillarFaq = [
  {
    question: "Combien coute un site internet pour une paroisse ?",
    answer:
      "Le prix depend du nombre de pages, des formulaires, de l'administration, des integrations de dons, de l'agenda et du niveau d'accompagnement. Web Prophecy commence par un audit pour proposer une solution adaptee au budget et aux priorites de la paroisse."
  },
  {
    question: "Une petite paroisse a-t-elle besoin d'un site moderne ?",
    answer:
      "Oui, si les fideles cherchent les horaires, les contacts, les sacrements ou les annonces sur internet. Un site simple, rapide et clair peut deja rendre un grand service pastoral sans devenir lourd a administrer."
  },
  {
    question: "Peut-on integrer les horaires de messe ?",
    answer:
      "Oui. Les horaires reguliers, les changements exceptionnels, les confessions, adorations et offices peuvent etre presentes clairement. Selon le contexte, le site peut aussi orienter vers MessesInfo ou une source diocesaine."
  },
  {
    question: "Peut-on recevoir des demandes de bapteme ou de mariage ?",
    answer:
      "Oui. Les formulaires peuvent centraliser les demandes de bapteme, mariage, certificat, catechisme ou rendez-vous avec un pretre, avec consentement RGPD et notification au secretariat."
  },
  {
    question: "Est-ce adapte aux benevoles non techniques ?",
    answer:
      "C'est un critere central. Le site doit etre lisible pour les visiteurs et simple pour les equipes : contenus organises, parcours courts, textes explicites et administration reduite a l'essentiel."
  }
];

export const aboutMilestones = [
  {
    icon: Radio,
    title: "Avril 2024",
    text: "La rencontre avec Samuel ouvre un projet de radio catholique plus vaste qu'un simple site."
  },
  {
    icon: ShieldCheck,
    title: "Mise en place",
    text: "Site web, streaming, studio et ingenierie technique demandent plusieurs mois de travail concret."
  },
  {
    icon: HandHeart,
    title: "Une vocation de service",
    text: "De nouveaux projets catholiques naissent, dont Wikibible, et revelent un besoin digital encore peu servi."
  }
];
