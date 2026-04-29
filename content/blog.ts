export type BlogSource = {
  label: string;
  url: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  intent: string;
  readingTime: string;
  publishedAt: string;
  sources: BlogSource[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

const googleHelpful = {
  label: "Google Search Central - contenu utile",
  url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
};

const googleLocal = {
  label: "Google Search Central - LocalBusiness structured data",
  url: "https://developers.google.com/search/docs/appearance/structured-data/local-business"
};

const googleStructured = {
  label: "Google Search Central - structured data",
  url: "https://developers.google.com/search/docs/appearance/structured-data/search-gallery"
};

const cnilCookies = {
  label: "CNIL - cookies et traceurs",
  url: "https://www.cnil.fr/cookies-et-traceurs-comment-mettre-mon-site-web-en-conformite"
};

const cnilAssociations = {
  label: "CNIL - guide RGPD pour les associations",
  url: "https://www.cnil.fr/sites/default/files/atoms/files/cnil-guide_association.pdf"
};

const messesInfo = {
  label: "Aide EgliseInfo - integration MessesInfo",
  url: "https://aide.egliseinfo.catholique.fr/nouvelle-gestion-messesinfo/responsable-dioceses/integration-des-horaires"
};

const cefSacrements = {
  label: "Eglise catholique en France - les sacrements",
  url: "https://eglise.catholique.fr/approfondir-sa-foi/la-celebration-de-la-foi/les-sacrements/"
};

const cefDenier = {
  label: "Eglise catholique en France - Denier de l'Eglise",
  url: "https://eglise.catholique.fr/archives/cooment-soutenir-leglise/415580-quest-ce-que-le-denier-de-leglise/"
};

const cefCatechisme = {
  label: "Eglise catholique en France - inscrire son enfant au catechisme",
  url: "https://eglise.catholique.fr/approfondir-sa-foi/vivre-sa-foi-a-tous-les-ages/transmettre-la-foi/catechisme/quand-et-comment-inscrire-mon-enfant-au-catechisme/"
};

const cefMariage = {
  label: "Eglise catholique en France - se preparer au mariage",
  url: "https://eglise.catholique.fr/approfondir-sa-foi/la-celebration-de-la-foi/les-sacrements/le-mariage/370718-comment-se-preparer-au-mariage/"
};

const cefCertificat = {
  label: "Eglise catholique en France - certificat de bapteme",
  url: "https://eglise.catholique.fr/approfondir-sa-foi/la-celebration-de-la-foi/les-sacrements/le-mariage/369690-comment-se-procurer-un-certificat-de-bapteme-en-vue-dun-mariage/"
};

const rgga = {
  label: "RGAA - referentiel accessibilite",
  url: "https://accessibilite.numerique.gouv.fr/doc/RGAA-v4.1.2.pdf"
};

function article(
  slug: string,
  title: string,
  description: string,
  category: string,
  intent: string,
  sources: BlogSource[],
  sections: BlogArticle["sections"]
): BlogArticle {
  return {
    slug,
    title,
    description,
    category,
    intent,
    readingTime: "7 min",
    publishedAt: "2026-04-29",
    sources,
    sections
  };
}

export const blogArticles: BlogArticle[] = [
  article(
    "comment-creer-site-internet-paroisse",
    "Comment creer un site internet pour une paroisse catholique ?",
    "La methode concrete pour concevoir un site paroissial utile, clair, reference et simple a administrer.",
    "Creation de site",
    "Recherche commerciale forte",
    [googleHelpful, googleStructured, messesInfo],
    [
      {
        heading: "La vraie question n'est pas seulement technique",
        paragraphs: [
          "Une paroisse ne cherche pas seulement un joli site. Elle a besoin d'un lieu fiable ou les fideles trouvent les horaires de messe, les contacts, les sacrements, les inscriptions, les actualites et les informations pratiques sans fouiller dans des PDF ou des publications sociales anciennes.",
          "La bonne approche consiste donc a partir des usages. Qui arrive sur le site ? Une famille qui cherche un bapteme, une personne agee qui veut les horaires, un couple qui prepare un mariage, un benevole qui cherche l'agenda, un visiteur de passage qui veut trouver l'eglise la plus proche."
        ]
      },
      {
        heading: "Les pages indispensables",
        paragraphs: [
          "Le socle minimum comprend une page d'accueil, une page horaires, une page sacrements, une page catechisme ou jeunesse, une page agenda, une page contact et une page dons. Chaque page doit repondre directement a une intention de recherche et proposer l'action suivante.",
          "Pour etre utile sur Google et dans les reponses d'IA, chaque page doit etre explicite : nom de la paroisse, ville, lieux de culte, horaires, responsables, moyens de contact, contexte pastoral et liens internes. Les contenus vagues du type 'bienvenue sur notre site' ne suffisent plus."
        ]
      },
      {
        heading: "Le bon ordre de travail",
        paragraphs: [
          "Commencez par l'inventaire des informations : horaires reguliers, horaires exceptionnels, lieux, contacts, groupes, formulaires, documents et plateformes de dons. Ensuite seulement viennent le design et la technique.",
          "Un site Next.js bien construit peut apporter performance, SEO technique et flexibilite. Mais la valeur vient surtout de la clarte editoriale : une information a jour, comprehensible, accessible sur mobile et facile a maintenir par une equipe paroissiale."
        ]
      },
      {
        heading: "Conversion pastorale",
        paragraphs: [
          "La conversion, pour une paroisse, ne signifie pas vendre a tout prix. Elle signifie aider une personne a franchir une etape : trouver une messe, demander un sacrement, donner, s'inscrire, rejoindre un groupe ou contacter le secretariat.",
          "Web Prophecy peut auditer votre site actuel et transformer cette architecture en parcours clair, rapide et compatible avec les usages des fideles."
        ]
      }
    ]
  ),
  article(
    "refaire-site-paroissial-obsolete",
    "Refaire un ancien site paroissial : par ou commencer ?",
    "Audit, priorites, contenus et migration : la feuille de route pour remplacer un site paroissial obsolete.",
    "Refonte",
    "Recherche de prestataire",
    [googleHelpful, rgga, cnilAssociations],
    [
      {
        heading: "Identifier ce qui bloque vraiment",
        paragraphs: [
          "Un ancien site paroissial pose rarement un seul probleme. Il peut etre lent, non responsive, difficile a mettre a jour, peu lisible, mal reference ou rempli d'informations perimees. La refonte doit commencer par un audit des usages et non par le choix d'un theme graphique.",
          "Le plus important est de regarder les pages qui rendent service : horaires, agenda, sacrements, contact, dons, catechisme. Si ces pages sont difficiles a trouver, la refonte a deja son premier objectif."
        ]
      },
      {
        heading: "Conserver, fusionner, supprimer",
        paragraphs: [
          "Avant de migrer, il faut classer les contenus. Certains doivent etre conserves, d'autres fusionnes, d'autres supprimes. Les archives anciennes peuvent avoir une valeur, mais elles ne doivent pas masquer les informations vitales du moment.",
          "Une bonne refonte transforme un empilement de pages en architecture lisible. Elle cree des categories pastorales simples : prier, celebrer, transmettre, servir, donner, contacter."
        ]
      },
      {
        heading: "Eviter la rupture SEO",
        paragraphs: [
          "Lorsqu'une page ancienne a du trafic, elle doit etre redirigee vers son equivalent. Les titres, descriptions, liens internes et URLs doivent etre planifies. La Search Console permettra ensuite de surveiller l'indexation.",
          "Il faut aussi corriger les bases : une seule balise H1 par page, des titres utiles, des textes lisibles, des images optimisees, des liens internes et un sitemap propre."
        ]
      },
      {
        heading: "Un lancement progressif",
        paragraphs: [
          "La refonte ideale peut etre livree par priorites : d'abord les pages qui servent le plus, puis les contenus secondaires, puis les modules plus avances. Cela evite de repousser la mise en ligne pendant des mois.",
          "Un audit Web Prophecy permet de transformer votre site actuel en liste d'actions classees par impact pastoral et SEO."
        ]
      }
    ]
  ),
  article(
    "horaires-de-messe-sur-site-paroisse",
    "Comment afficher clairement les horaires de messe sur un site paroissial ?",
    "Bonnes pratiques pour rendre les horaires de messe visibles, fiables et utiles sur mobile.",
    "Horaires",
    "Question pratique",
    [messesInfo, googleLocal],
    [
      {
        heading: "Les horaires sont souvent la premiere recherche",
        paragraphs: [
          "Pour beaucoup de visiteurs, la question est simple : a quelle heure est la messe, ou, et est-ce bien a jour ? Si la reponse demande trois clics, un PDF ou une publication Facebook, le site ne remplit pas son role.",
          "Les horaires doivent etre visibles depuis l'accueil, accessibles sur mobile et relies aux lieux de culte. Les messes dominicales, messes de semaine, confessions, adorations et offices doivent etre differencies."
        ]
      },
      {
        heading: "Regulier et exceptionnel",
        paragraphs: [
          "Un bon module distingue les horaires habituels des changements exceptionnels. Noel, Paques, Toussaint, fete patronale, vacances scolaires ou absence d'un pretre peuvent changer la lecture. L'utilisateur doit comprendre ce qui vaut aujourd'hui.",
          "Le site peut afficher un encart 'horaires modifies cette semaine' afin d'eviter les erreurs. Cette information courte est souvent plus utile qu'un long agenda."
        ]
      },
      {
        heading: "Lien avec MessesInfo",
        paragraphs: [
          "MessesInfo est une reference catholique importante pour les horaires. Selon l'organisation du diocese, on peut integrer, lier ou synchroniser certaines informations, tout en gardant une presentation claire sur le site paroissial.",
          "L'enjeu n'est pas de multiplier les sources mais de creer une source de verite lisible. Si les horaires sont saisis ailleurs, le site doit expliquer ou verifier que l'information reste coherente."
        ]
      },
      {
        heading: "Optimisation SEO locale",
        paragraphs: [
          "Chaque lieu de culte peut avoir une adresse, une ville, un acces, des horaires et un lien cartographique. Ces donnees aident les fideles et clarifient l'entite pour les moteurs de recherche.",
          "Web Prophecy peut concevoir une page horaires qui sert autant les paroissiens que Google, sans rendre l'administration lourde."
        ]
      }
    ]
  ),
  article(
    "integrer-messesinfo-site-paroissial",
    "Peut-on integrer MessesInfo sur un site paroissial ?",
    "Quand utiliser MessesInfo, comment l'integrer et comment garder une information coherente pour les fideles.",
    "Horaires",
    "Question integration",
    [messesInfo],
    [
      {
        heading: "MessesInfo comme reference externe",
        paragraphs: [
          "MessesInfo centralise des horaires de celebrants et lieux de culte dans l'Eglise catholique en France. Pour une paroisse, c'est un appui utile car beaucoup de fideles connaissent deja ce service.",
          "L'integration peut prendre plusieurs formes : lien direct, iframe, widget, reprise structuree ou simple bouton vers la page officielle. Le choix depend de ce que le diocese autorise et de la facilite de maintenance."
        ]
      },
      {
        heading: "Le risque des doubles saisies",
        paragraphs: [
          "Le danger principal est d'avoir deux informations contradictoires : une sur le site et une sur MessesInfo. Pour eviter cela, il faut definir qui met a jour quoi, a quelle frequence et comment les exceptions sont signalees.",
          "La meilleure organisation est souvent une source principale et une presentation claire sur le site. Le visiteur ne doit jamais se demander quelle information croire."
        ]
      },
      {
        heading: "Experience utilisateur",
        paragraphs: [
          "Un widget brut peut etre pratique mais pas toujours ideal sur mobile. Il faut tester la lisibilite, le contraste, la vitesse et le comportement sur smartphone. Les personnes agees doivent pouvoir lire l'information sans zoomer.",
          "Si l'integration externe est trop lourde, une page interne simple avec lien vers MessesInfo peut etre plus efficace."
        ]
      },
      {
        heading: "Decision pratique",
        paragraphs: [
          "Pour choisir, posez trois questions : qui saisit les horaires, quels horaires changent souvent, et quelle experience est la plus claire pour les fideles ?",
          "Web Prophecy peut auditer votre organisation actuelle et recommander l'integration la plus simple a maintenir."
        ]
      }
    ]
  ),
  article(
    "dons-en-ligne-paroisse",
    "Dons en ligne pour une paroisse : comment inspirer confiance ?",
    "Structurer une page de dons claire pour le denier, la quete, les offrandes et les projets paroissiaux.",
    "Dons",
    "Conversion don",
    [cefDenier, { label: "Donner catholique", url: "https://donner.catholique.fr/?cid=3&lang=fr_FR" }],
    [
      {
        heading: "La confiance avant le bouton",
        paragraphs: [
          "Une page de don ne doit pas seulement afficher un bouton. Elle doit expliquer pourquoi donner, a quoi sert le don, qui le recoit, quelles sont les options et comment le paiement est securise.",
          "Pour une paroisse, il faut distinguer le denier, la quete, les offrandes de messe, les offrandes de ceremonie et les projets particuliers. Cette distinction evite la confusion et aide le fidele a faire le geste adapte."
        ]
      },
      {
        heading: "Clarifier le denier",
        paragraphs: [
          "Le denier est une ressource majeure pour la vie de l'Eglise. La communication doit rester sobre, vraie et concrete : mission, vie pastorale, pretres, salaries, charges et service des fideles.",
          "Une page bien faite peut expliquer le sens du don, puis orienter vers la plateforme diocesaine si elle existe. Il ne faut pas contourner l'organisation du diocese."
        ]
      },
      {
        heading: "Reduire les frictions",
        paragraphs: [
          "Le visiteur doit comprendre en moins de quelques secondes ou cliquer. Les boutons doivent etre lisibles, les libelles precis, les informations fiscales ou diocesan es accessibles, et le parcours mobile fluide.",
          "Un encart FAQ peut repondre aux objections : montant libre, recu fiscal, affectation, securite, don ponctuel ou regulier."
        ]
      },
      {
        heading: "Mesurer sans agressivite",
        paragraphs: [
          "Il est possible de suivre les clics vers la plateforme de don sans installer une usine marketing. La mesure doit respecter le RGPD et rester proportionnee.",
          "Web Prophecy peut creer une page dons qui soutient la collecte sans adopter un ton commercial inapproprie."
        ]
      }
    ]
  ),
  article(
    "denier-quete-offrande-difference-site-paroisse",
    "Denier, quete, offrande : comment les expliquer sur le site d'une paroisse ?",
    "Un guide editorial pour presenter les differentes formes de dons sans confusion.",
    "Dons",
    "Question informationnelle",
    [cefDenier, { label: "CEF - a quoi servent les dons", url: "https://eglise.catholique.fr/conference-des-eveques-de-france/soutenir-leglise/denier-eglise/534261-a-quoi-servent-les-dons-des-fideles/" }],
    [
      {
        heading: "Nommer les choses simplement",
        paragraphs: [
          "Beaucoup de fideles ne connaissent pas la difference entre denier, quete, offrande de messe et offrande de ceremonie. Le site paroissial doit expliquer sans jargon et sans culpabiliser.",
          "La clarte aide la collecte. Une personne qui comprend l'usage de son don est plus disposee a poser un geste regulier ou ponctuel."
        ]
      },
      {
        heading: "Une page, plusieurs chemins",
        paragraphs: [
          "La page peut proposer des blocs separes : donner au denier, participer a la quete, demander une intention de messe, soutenir un projet, faire un legs ou contacter la paroisse.",
          "Chaque bloc doit avoir son propre bouton et sa propre explication. Un bouton unique 'donner' peut etre trop flou."
        ]
      },
      {
        heading: "Respecter l'organisation locale",
        paragraphs: [
          "Certaines paroisses renvoient vers une plateforme diocesaine. D'autres ont des pages de quete en ligne ou des solutions specifiques. Le site doit respecter ces circuits et ne pas creer de canal parallele inutile.",
          "La coherence entre paroisse, diocese et plateforme de paiement est un facteur de confiance."
        ]
      },
      {
        heading: "Texte oriente conversion",
        paragraphs: [
          "Une bonne page n'accumule pas les arguments. Elle explique le sens, donne des exemples concrets et propose une action claire.",
          "Web Prophecy peut rediger cette page avec un ton respectueux, pastoral et efficace."
        ]
      }
    ]
  ),
  article(
    "formulaire-demande-bapteme-paroisse",
    "Formulaire de demande de bapteme : quelles informations demander ?",
    "Les champs utiles pour centraliser une demande de bapteme sans transformer le formulaire en dossier administratif.",
    "Sacrements",
    "Formulaire conversion",
    [cefSacrements, cefCertificat, cnilAssociations],
    [
      {
        heading: "Un formulaire n'est pas le sacrement",
        paragraphs: [
          "Le formulaire de demande de bapteme sert a ouvrir le dialogue. Il ne remplace ni l'accueil pastoral, ni la preparation, ni la rencontre avec la paroisse. Son role est de recueillir les informations minimales pour recontacter correctement la famille ou la personne.",
          "Un formulaire trop long decourage. Un formulaire trop vague oblige le secretariat a multiplier les echanges. L'equilibre se trouve dans des champs utiles et bien expliques."
        ]
      },
      {
        heading: "Champs recommandes",
        paragraphs: [
          "Pour un enfant : nom des parents, email, telephone, ville, date de naissance de l'enfant, paroisse de rattachement, periode souhaitee, message libre. Pour un adulte : nom, contact, situation, disponibilites et message.",
          "Les documents sensibles ne doivent pas etre demandes sans necessite. Si un acte ou certificat est requis, mieux vaut expliquer qu'il sera demande dans un second temps."
        ]
      },
      {
        heading: "RGPD et confiance",
        paragraphs: [
          "La page doit indiquer pourquoi les donnees sont collectees, qui les recoit et comment exercer ses droits. Le consentement ne doit pas etre cache dans une phrase obscure.",
          "La confiance nait aussi du ton : accueillir, expliquer, rassurer, puis proposer le contact."
        ]
      },
      {
        heading: "Notification et suivi",
        paragraphs: [
          "Le secretariat doit recevoir une notification claire avec un objet explicite. Une copie automatique au demandeur peut confirmer que la demande est bien recue.",
          "Web Prophecy peut construire des formulaires pastoraux simples, securises et adaptes aux equipes paroissiales."
        ]
      }
    ]
  ),
  article(
    "formulaire-mariage-paroisse",
    "Demande de mariage en ligne : comment guider les fiances ?",
    "Un formulaire de mariage utile doit informer, rassurer et organiser le premier contact avec la paroisse.",
    "Sacrements",
    "Question mariage",
    [cefMariage, cefCertificat, cnilAssociations],
    [
      {
        heading: "Le premier contact compte",
        paragraphs: [
          "Les fiances arrivent souvent avec beaucoup de questions : delais, lieu, preparation, documents, certificat de bapteme, contact avec un pretre ou un diacre. Le site doit donner une premiere reponse claire avant le formulaire.",
          "Une page mariage efficace explique que la preparation demande du temps et qu'un contact anticipe facilite l'accompagnement."
        ]
      },
      {
        heading: "Informations utiles",
        paragraphs: [
          "Le formulaire peut demander les noms, emails, telephones, commune, date souhaitee, lieu envisage, situation sacramentelle, paroisse de rattachement et message libre.",
          "Il faut eviter de demander trop vite des documents sensibles. Le formulaire doit ouvrir le dossier, pas le finaliser."
        ]
      },
      {
        heading: "Certificat de bapteme",
        paragraphs: [
          "La demande de certificat de bapteme est une question frequente. Le site peut expliquer simplement qu'il faut connaitre le lieu et la date du bapteme et que la paroisse qui prepare le mariage accompagne souvent cette recherche.",
          "Cette information reduit les appels repetitifs et rassure les couples qui ne savent pas par ou commencer."
        ]
      },
      {
        heading: "Conversion douce",
        paragraphs: [
          "Le CTA peut etre 'Commencer ma demande de mariage' plutot que 'Envoyer un formulaire'. Les mots comptent : ils doivent accueillir une demarche spirituelle et humaine.",
          "Web Prophecy peut transformer cette page en parcours clair pour les couples et simple pour le secretariat."
        ]
      }
    ]
  ),
  article(
    "inscription-catechisme-en-ligne",
    "Inscription au catechisme en ligne : que doit contenir le formulaire ?",
    "Centraliser les inscriptions au catechisme sans perdre l'accueil humain.",
    "Catechisme",
    "Question formulaire",
    [cefCatechisme, cnilAssociations],
    [
      {
        heading: "Le formulaire doit aider les familles",
        paragraphs: [
          "L'inscription au catechisme est souvent cherchee par des parents qui veulent connaitre l'age, le niveau, les horaires, les lieux, les tarifs eventuels et les personnes a contacter.",
          "Le site doit donc presenter l'information avant le formulaire. Sinon, le formulaire devient un mur et non une porte d'entree."
        ]
      },
      {
        heading: "Champs utiles",
        paragraphs: [
          "Les champs habituels sont : parent responsable, email, telephone, adresse, enfant, date de naissance, classe, ecole, sacrements deja recus, disponibilites, autorisations et message.",
          "Les autorisations photo, deplacement ou informations medicales doivent etre traitees avec prudence et seulement si elles sont necessaires."
        ]
      },
      {
        heading: "Organisation cote paroisse",
        paragraphs: [
          "La demande doit arriver a la bonne personne avec une structure lisible. Un export CSV peut aider, mais il faut aussi prevoir la verification humaine et les relances.",
          "Un formulaire bien pense evite les tableurs incomplets, les emails disperses et les erreurs de saisie."
        ]
      },
      {
        heading: "Faire simple",
        paragraphs: [
          "Le bon formulaire est court, progressif et comprehensible. Il donne envie de continuer la demarche.",
          "Web Prophecy peut creer un parcours d'inscription adapte au catechisme, a l'aumonerie ou aux groupes jeunes."
        ]
      }
    ]
  ),
  article(
    "agenda-paroissial-en-ligne",
    "Agenda paroissial en ligne : comment le rendre vraiment utile ?",
    "Un agenda paroissial doit aider a comprendre la vie locale, pas seulement empiler des dates.",
    "Agenda",
    "Question pratique",
    [googleHelpful, googleStructured],
    [
      {
        heading: "Un agenda n'est pas une liste brute",
        paragraphs: [
          "Un agenda paroissial utile classe les evenements par type : messe, adoration, confession, catechisme, groupe de priere, formation, concert, retraite, pelerinage ou reunion.",
          "Chaque evenement doit dire quoi, quand, ou, pour qui et comment participer. Sans ces informations, le visiteur doit encore appeler le secretariat."
        ]
      },
      {
        heading: "Priorite au mobile",
        paragraphs: [
          "Beaucoup de personnes consultent l'agenda depuis un smartphone. Les dates doivent etre lisibles, les filtres simples et les informations essentielles visibles sans ouvrir dix pages.",
          "Un agenda trop complexe peut devenir impossible a maintenir. Il faut donc choisir une solution adaptee a la taille de la paroisse."
        ]
      },
      {
        heading: "SEO et donnees evenementielles",
        paragraphs: [
          "Quand un evenement est public et important, une page detaillee peut etre indexee. Elle doit avoir un titre clair, une description, un lieu et un lien d'inscription ou de contact.",
          "Les donnees structurees peuvent aider les moteurs a comprendre le contenu, mais elles ne remplacent pas une page lisible."
        ]
      },
      {
        heading: "Administration",
        paragraphs: [
          "Le secretariat ou les benevoles doivent pouvoir ajouter un evenement sans casser la mise en page. Les champs doivent guider la saisie.",
          "Web Prophecy peut concevoir un agenda simple, maintenable et connecte aux vrais besoins pastoraux."
        ]
      }
    ]
  ),
  article(
    "newsletter-paroisse",
    "Newsletter paroissiale : comment garder le lien sans surcharger ?",
    "Conseils pour une newsletter utile aux paroissiens, familles et benevoles.",
    "Communication",
    "Question retention",
    [cnilAssociations, googleHelpful],
    [
      {
        heading: "La newsletter comme service",
        paragraphs: [
          "Une newsletter paroissiale ne doit pas ressembler a une publicite. Elle sert a rappeler les horaires importants, les evenements, les inscriptions, les appels a benevoles et les informations pratiques.",
          "Le rythme doit etre soutenable. Une lettre hebdomadaire courte est souvent plus efficace qu'un long message irregulier."
        ]
      },
      {
        heading: "Contenu recommande",
        paragraphs: [
          "Commencez par les trois informations essentielles de la semaine, puis les evenements, puis les liens utiles : feuille paroissiale, horaires, catechisme, dons, contact.",
          "Chaque email doit avoir un objet clair. Les pieces jointes lourdes sont a eviter si une page web peut les remplacer."
        ]
      },
      {
        heading: "Consentement et donnees",
        paragraphs: [
          "L'inscription a une newsletter suppose une information claire sur l'usage de l'email. Le desabonnement doit etre simple.",
          "Les listes d'emails paroissiales doivent etre gerees avec soin, surtout lorsqu'elles viennent d'inscriptions catechisme ou sacrements."
        ]
      },
      {
        heading: "Lien avec le site",
        paragraphs: [
          "Le site doit devenir la source stable, et la newsletter le rappel. Cela evite de mettre toute l'information dans un email qui se perd.",
          "Web Prophecy peut structurer ce duo site-newsletter pour servir la communication sans epuiser les equipes."
        ]
      }
    ]
  ),
  article(
    "application-paroisse-ou-pwa",
    "Une paroisse a-t-elle besoin d'une application mobile ?",
    "Comparer site web, application native et PWA pour choisir l'outil adapte.",
    "Application",
    "Question comparative",
    [googleHelpful],
    [
      {
        heading: "La plupart des besoins commencent par le site",
        paragraphs: [
          "Une application mobile peut etre seduisante, mais elle n'est pas toujours prioritaire. Les personnes qui cherchent une messe, un contact ou un bapteme passent d'abord par Google ou un lien partage.",
          "Le site web reste donc la base de la visibilite. Il doit etre rapide, mobile, accessible et bien reference."
        ]
      },
      {
        heading: "La PWA comme compromis",
        paragraphs: [
          "Une PWA peut etre installee sur smartphone, proposer une experience proche d'une application et rester plus simple a maintenir qu'une application native.",
          "Pour une paroisse, elle peut servir aux annonces, horaires, agenda, feuille paroissiale, notifications ou liens rapides."
        ]
      },
      {
        heading: "Quand l'application se justifie",
        paragraphs: [
          "Une application plus avancee se justifie si la communaute a un usage regulier, des notifications fortes, des contenus internes ou une logique de compte utilisateur.",
          "Sans usage regulier, l'application risque d'etre telechargee puis oubliee."
        ]
      },
      {
        heading: "Recommendation",
        paragraphs: [
          "Dans la plupart des cas, commencez par un site excellent, puis ajoutez une PWA si le besoin est confirme.",
          "Web Prophecy peut evaluer ce choix sans pousser une solution plus lourde que necessaire."
        ]
      }
    ]
  ),
  article(
    "seo-local-paroisse-google",
    "SEO local pour paroisse : comment etre trouve sur Google ?",
    "Les bases du referencement local pour une paroisse, un sanctuaire ou une communaute.",
    "SEO local",
    "Recherche locale",
    [googleLocal, googleStructured],
    [
      {
        heading: "La paroisse est une entite locale",
        paragraphs: [
          "Une paroisse a des lieux, des horaires, une ville, des contacts et des services pastoraux. Google doit comprendre ces informations, et les visiteurs doivent les lire sans effort.",
          "Le SEO local commence donc par la coherence : nom, adresse, telephone, site, lieux de culte, horaires et liens cartographiques."
        ]
      },
      {
        heading: "Pages locales utiles",
        paragraphs: [
          "Une page par lieu de culte peut etre pertinente si chaque lieu a de vraies informations : adresse, acces, horaires, histoire courte, photos, contact et liens vers les sacrements.",
          "Les pages locales vides ou dupliquees sont a eviter. Google recommande des contenus utiles, pas des pages creees uniquement pour capter des mots-cles."
        ]
      },
      {
        heading: "Donnees structurees",
        paragraphs: [
          "Les donnees LocalBusiness ou Church peuvent clarifier l'entite. Elles doivent correspondre au contenu visible. Le balisage ne doit pas promettre ce que la page ne montre pas.",
          "Un fil d'Ariane et un sitemap aident aussi a comprendre l'organisation du site."
        ]
      },
      {
        heading: "Conversion locale",
        paragraphs: [
          "Le but n'est pas seulement d'apparaitre. Le visiteur doit pouvoir appeler, venir, s'inscrire, donner ou demander un sacrement.",
          "Web Prophecy peut construire une architecture locale sobre et solide pour les paroisses."
        ]
      }
    ]
  ),
  article(
    "google-business-profile-paroisse",
    "Google Business Profile pour une paroisse : que faut-il verifier ?",
    "Adresse, horaires, photos, site et coherence NAP : la checklist pour une fiche Google utile.",
    "SEO local",
    "Question Google Maps",
    [googleLocal],
    [
      {
        heading: "La fiche Google est souvent la premiere porte",
        paragraphs: [
          "Une personne qui cherche une eglise ou une messe tombe souvent sur Google Maps avant le site. Si la fiche est incomplete, ancienne ou incoherente, la confiance baisse.",
          "La fiche doit renvoyer vers le bon site et presenter les informations pratiques a jour."
        ]
      },
      {
        heading: "Les points a verifier",
        paragraphs: [
          "Verifiez le nom, l'adresse, le telephone, le site, les categories, les photos, les horaires, les jours particuliers, les liens et la coherence avec le site paroissial.",
          "Si plusieurs lieux de culte existent, il faut clarifier le role de chaque fiche et eviter les doublons confus."
        ]
      },
      {
        heading: "Lien avec le site",
        paragraphs: [
          "Le site doit confirmer les informations de la fiche. Google et les utilisateurs se fient a la coherence entre les sources.",
          "Une page contact ou lieux de culte bien structuree renforce cette coherence."
        ]
      },
      {
        heading: "Maintenance",
        paragraphs: [
          "La fiche n'est pas un projet ponctuel. Les horaires exceptionnels, photos et annonces doivent etre mis a jour selon les temps forts.",
          "Web Prophecy peut inclure l'audit Google Business Profile dans une refonte paroissiale."
        ]
      }
    ]
  ),
  article(
    "accessibilite-site-paroissial-personnes-agees",
    "Accessibilite d'un site paroissial : penser aussi aux personnes agees",
    "Contraste, lisibilite, mobile, formulaires et navigation clavier pour un site vraiment accueillant.",
    "Accessibilite",
    "Question qualite",
    [rgga, googleHelpful],
    [
      {
        heading: "L'accessibilite est pastorale",
        paragraphs: [
          "Une paroisse s'adresse a toutes les generations. Un site difficile a lire, aux boutons trop petits ou aux textes trop pales exclut une partie des fideles.",
          "L'accessibilite n'est pas un luxe technique. C'est une maniere concrete d'accueillir."
        ]
      },
      {
        heading: "Les bases visibles",
        paragraphs: [
          "Utilisez une taille de texte confortable, des contrastes forts, des boutons explicites, une navigation simple, des titres hierarchises et des informations importantes en haut de page.",
          "Les formulaires doivent avoir des labels, des messages d'erreur lisibles et un focus clavier visible."
        ]
      },
      {
        heading: "Mobile et lenteur",
        paragraphs: [
          "Un site paroissial est souvent consulte sur mobile. Il doit charger vite, eviter les animations inutiles et rendre les horaires accessibles en quelques secondes.",
          "Les PDF scannes ou images contenant du texte sont a limiter, car ils sont peu accessibles et difficiles a indexer."
        ]
      },
      {
        heading: "Audit utile",
        paragraphs: [
          "Un audit accessibilite peut commencer simplement : contraste, navigation clavier, structure H1/H2, labels, taille des zones cliquables.",
          "Web Prophecy integre ces points dans la conception des sites paroissiaux."
        ]
      }
    ]
  ),
  article(
    "rgpd-formulaire-contact-paroisse",
    "RGPD et formulaire de contact paroissial : les bonnes pratiques",
    "Collecter moins, informer mieux et securiser les demandes pastorales.",
    "RGPD",
    "Question conformite",
    [cnilAssociations, cnilCookies],
    [
      {
        heading: "Collecter le strict necessaire",
        paragraphs: [
          "Un formulaire paroissial doit demander uniquement les informations utiles a la demande. Nom, email, telephone, structure familiale ou message peuvent suffire selon le contexte.",
          "Les donnees sensibles ou documents ne doivent pas etre demandes trop tot si un simple premier contact suffit."
        ]
      },
      {
        heading: "Informer clairement",
        paragraphs: [
          "La personne doit comprendre pourquoi ses donnees sont collectees, qui les recoit, combien de temps elles sont conservees et comment exercer ses droits.",
          "Une phrase de consentement claire et un lien vers la politique de confidentialite renforcent la confiance."
        ]
      },
      {
        heading: "Securiser le traitement",
        paragraphs: [
          "Les notifications doivent arriver aux bonnes personnes. Les acces aux outils doivent etre limites. Les exports doivent etre manipules avec prudence.",
          "Le secretariat ne devrait pas gerer des donnees pastorales sensibles dans des boites mail partagees sans regles."
        ]
      },
      {
        heading: "Approche proportionnee",
        paragraphs: [
          "La conformite ne doit pas bloquer l'accueil. Elle doit aider a creer des parcours sobres, responsables et comprehensibles.",
          "Web Prophecy peut concevoir des formulaires avec consentement, minimisation et messages adaptes."
        ]
      }
    ]
  ),
  article(
    "cookies-analytics-site-paroisse",
    "Cookies et analytics sur un site paroissial : que faut-il savoir ?",
    "Mesurer sans surcollecter : consentement, traceurs et alternatives sobres.",
    "RGPD",
    "Question cookies",
    [cnilCookies, cnilAssociations],
    [
      {
        heading: "Tous les cookies ne se valent pas",
        paragraphs: [
          "Les cookies techniques necessaires au fonctionnement du site ne posent pas les memes questions que les traceurs publicitaires ou certains outils d'audience.",
          "La CNIL rappelle que les utilisateurs doivent etre informes et donner leur consentement pour les traceurs non exemptes."
        ]
      },
      {
        heading: "Une paroisse a besoin de sobriete",
        paragraphs: [
          "Il n'est pas necessaire d'installer plusieurs outils marketing pour comprendre si le site rend service. Les statistiques essentielles peuvent rester simples : pages consultees, clics contact, clics dons, formulaires envoyes.",
          "Plus l'outillage est lourd, plus la gestion du consentement devient complexe."
        ]
      },
      {
        heading: "Banniere ou pas banniere",
        paragraphs: [
          "Si le site n'utilise que des elements strictement necessaires, une banniere intrusive n'est pas toujours requise. Si des traceurs soumis au consentement sont ajoutes, il faut une interface claire et loyale.",
          "Les boutons de refus et d'acceptation doivent etre comprehensibles, sans manipulation visuelle."
        ]
      },
      {
        heading: "Mesurer pour ameliorer",
        paragraphs: [
          "La mesure doit servir a ameliorer l'accueil : horaires mieux visibles, formulaires plus simples, pages de sacrements plus claires.",
          "Web Prophecy peut proposer une configuration analytics proportionnee a un site paroissial."
        ]
      }
    ]
  ),
  article(
    "schema-org-site-paroisse",
    "Schema.org pour paroisse : quelles donnees structurees utiliser ?",
    "Organization, Church, LocalBusiness, Event, Breadcrumb et Article : quand les utiliser.",
    "SEO technique",
    "Question technique",
    [googleStructured, googleLocal, { label: "Google Search Central - breadcrumb", url: "https://developers.google.com/search/docs/appearance/structured-data/breadcrumb" }],
    [
      {
        heading: "Aider les moteurs a comprendre",
        paragraphs: [
          "Les donnees structurees ne remplacent pas un bon contenu. Elles aident les moteurs a classifier ce qui est deja visible : organisation, lieu, service, article, evenement ou fil d'Ariane.",
          "Pour une paroisse, le balisage peut clarifier les lieux, l'adresse, les horaires, les evenements et la structure du site."
        ]
      },
      {
        heading: "Types utiles",
        paragraphs: [
          "Organization ou Church peut presenter l'entite. LocalBusiness peut etre utile pour certaines informations locales. Event peut decrire un evenement public. Article s'applique aux contenus editoriaux. BreadcrumbList indique le chemin de navigation.",
          "FAQPage doit etre utilise avec prudence et seulement lorsque le contenu FAQ est visible et conforme aux regles de Google."
        ]
      },
      {
        heading: "Ne pas surpromettre",
        paragraphs: [
          "Le balisage doit correspondre a la page. Ajouter des informations invisibles, fausses ou trop commerciales peut nuire a la qualite.",
          "Chaque schema doit etre teste et surveille dans Search Console apres publication."
        ]
      },
      {
        heading: "Priorite",
        paragraphs: [
          "Commencez par Organization, Breadcrumb, Article pour le blog, puis lieux et evenements si les pages correspondantes existent.",
          "Web Prophecy integre ces donnees dans une architecture SEO propre."
        ]
      }
    ]
  ),
  article(
    "combien-coute-site-internet-paroisse",
    "Combien coute un site internet pour une paroisse ?",
    "Les facteurs qui influencent le prix d'un site paroissial moderne.",
    "Budget",
    "Recherche prix",
    [googleHelpful],
    [
      {
        heading: "Il n'y a pas un seul prix juste",
        paragraphs: [
          "Le cout depend du nombre de pages, du niveau de design, de la reprise des contenus, des formulaires, de l'agenda, des dons, de l'administration et de l'accompagnement.",
          "Une petite paroisse avec quelques pages n'a pas les memes besoins qu'un ensemble paroissial, un sanctuaire ou un diocese."
        ]
      },
      {
        heading: "Ce qui fait varier le budget",
        paragraphs: [
          "Les principaux facteurs sont la strategie SEO, la redaction, les integrations externes, les formulaires, la migration, la formation et la maintenance.",
          "Un site tres bon marche peut devenir couteux s'il est impossible a mettre a jour ou mal reference."
        ]
      },
      {
        heading: "Penser retour pastoral",
        paragraphs: [
          "Le retour n'est pas seulement financier. Un site clair reduit les appels repetitifs, facilite les inscriptions, rend les dons visibles et aide les fideles a trouver l'information.",
          "Le budget doit etre compare au service rendu chaque semaine."
        ]
      },
      {
        heading: "Audit avant devis",
        paragraphs: [
          "Un audit gratuit permet de classer les priorites et d'eviter de payer pour des fonctionnalites inutiles.",
          "Web Prophecy adapte la proposition au contexte pastoral et au budget disponible."
        ]
      }
    ]
  ),
  article(
    "wordpress-ou-nextjs-site-paroisse",
    "WordPress ou Next.js pour un site paroissial ?",
    "Comparer administration, performance, securite et evolution pour choisir sans dogmatisme.",
    "Technique",
    "Comparatif",
    [googleHelpful],
    [
      {
        heading: "WordPress est connu, Next.js est robuste",
        paragraphs: [
          "WordPress peut convenir si l'equipe veut publier souvent avec une interface familiere. Next.js convient tres bien pour un site rapide, controle, durable et optimise SEO.",
          "Le bon choix depend de l'equipe, des contenus, du budget et du besoin d'evolution."
        ]
      },
      {
        heading: "Administration",
        paragraphs: [
          "WordPress donne une administration immediate mais demande une maintenance reguliere. Next.js peut etre couple a un CMS headless ou rester statique avec des contenus plus controles.",
          "Pour une paroisse, la simplicite de mise a jour est decisive."
        ]
      },
      {
        heading: "Performance et securite",
        paragraphs: [
          "Un site statique ou semi-statique Next.js peut etre tres rapide et reduire la surface d'attaque. WordPress demande une vigilance sur plugins, themes, mises a jour et sauvegardes.",
          "Le choix technique doit toujours servir l'usage, pas l'inverse."
        ]
      },
      {
        heading: "Recommendation",
        paragraphs: [
          "Pour un site vitrine paroissial SEO-first, Next.js est souvent excellent. Pour une equipe qui publie beaucoup et veut une interface complete, un CMS peut etre ajoute.",
          "Web Prophecy peut proposer l'architecture la plus sobre selon votre contexte."
        ]
      }
    ]
  ),
  article(
    "page-accueil-paroisse-efficace",
    "Que mettre sur la page d'accueil d'une paroisse ?",
    "Les informations a placer en priorite pour accueillir, informer et orienter.",
    "UX",
    "Question accueil",
    [googleHelpful, rgga],
    [
      {
        heading: "L'accueil doit repondre vite",
        paragraphs: [
          "La page d'accueil doit dire ou l'on est, quels sont les horaires importants, comment contacter la paroisse et ou trouver les sacrements, l'agenda, le catechisme et les dons.",
          "Un long mot de bienvenue peut etre beau, mais il ne doit pas repousser les informations essentielles."
        ]
      },
      {
        heading: "Ordre recommande",
        paragraphs: [
          "Hero clair, horaires du jour ou de la semaine, boutons vers sacrements, catechisme, agenda, dons, actualites importantes et contact.",
          "Les contenus doivent etre scannables. Beaucoup de visiteurs ne lisent pas tout, ils cherchent une reponse."
        ]
      },
      {
        heading: "Design sobre",
        paragraphs: [
          "La sobriete aide la lisibilite. Des contrastes forts, des boutons simples et peu d'animations rendent la page plus accueillante.",
          "Les images doivent montrer la communaute, les lieux ou la vie paroissiale, pas seulement une ambiance abstraite."
        ]
      },
      {
        heading: "CTA pastoraux",
        paragraphs: [
          "Les appels a l'action doivent correspondre aux besoins : trouver une messe, demander un bapteme, inscrire mon enfant, faire un don, contacter la paroisse.",
          "Web Prophecy structure l'accueil comme une porte d'entree pratique et missionnaire."
        ]
      }
    ]
  ),
  article(
    "feuille-paroissiale-numerique",
    "Feuille paroissiale numerique : PDF ou page web ?",
    "Comment diffuser les annonces paroissiales sans perdre l'accessibilite et le SEO.",
    "Communication",
    "Question contenu",
    [rgga, googleHelpful],
    [
      {
        heading: "Le PDF seul limite la visibilite",
        paragraphs: [
          "La feuille paroissiale en PDF peut rester utile pour l'impression. Mais si toute l'information importante est enfermee dans un PDF, elle devient moins accessible, moins lisible sur mobile et moins exploitable par Google.",
          "Les annonces importantes devraient aussi exister sous forme de page web ou de blocs sur le site."
        ]
      },
      {
        heading: "Modele hybride",
        paragraphs: [
          "Gardez le PDF pour ceux qui veulent le telecharger, mais publiez les informations essentielles en HTML : horaires, evenements, inscriptions, appels, homelie ou liens utiles.",
          "Cette approche sert les personnes agees, les mobiles et le referencement."
        ]
      },
      {
        heading: "Archivage",
        paragraphs: [
          "Les feuilles anciennes peuvent etre archivees par mois ou par an, sans occuper l'accueil. Les informations perimees doivent etre clairement datees.",
          "Un site vivant doit distinguer l'actualite du patrimoine documentaire."
        ]
      },
      {
        heading: "Automatisation raisonnable",
        paragraphs: [
          "Il est possible de simplifier la publication pour ne pas ressaisir tout deux fois. Mais il faut d'abord definir quelle information merite d'etre visible sur le site.",
          "Web Prophecy peut transformer la feuille paroissiale en canal numerique lisible."
        ]
      }
    ]
  ),
  article(
    "communication-numerique-paroissiale",
    "Communication numerique paroissiale : comment sortir de la dispersion ?",
    "Site, email, reseaux sociaux, affiches et WhatsApp : remettre de l'ordre sans tout controler.",
    "Strategie",
    "Question organisation",
    [googleHelpful],
    [
      {
        heading: "Le probleme n'est pas le manque de canaux",
        paragraphs: [
          "Beaucoup de paroisses communiquent partout : affiches, PDF, Facebook, WhatsApp, emails, annonces orales. Le probleme est souvent l'absence de source centrale.",
          "Le site doit devenir la base fiable. Les autres canaux renvoient vers lui."
        ]
      },
      {
        heading: "Une source de verite",
        paragraphs: [
          "Horaires, inscriptions, sacrements, agenda et dons doivent avoir une URL stable. Cela facilite les partages et evite les messages contradictoires.",
          "Les reseaux sociaux servent a attirer l'attention, pas a stocker l'information durable."
        ]
      },
      {
        heading: "Rythme editorial",
        paragraphs: [
          "Un calendrier simple aide : mise a jour hebdomadaire des annonces, verification mensuelle des pages fixes, temps forts liturgiques prepares a l'avance.",
          "La regularite compte plus que la multiplication des publications."
        ]
      },
      {
        heading: "Accompagnement",
        paragraphs: [
          "Web Prophecy peut aider a structurer cette communication avec une architecture, des modeles de pages et une routine de publication simple."
        ]
      }
    ]
  ),
  article(
    "site-diocese-ou-site-paroisse",
    "Site diocesan ou site paroissial : qui doit porter quelle information ?",
    "Clarifier le role du diocese et de la paroisse pour eviter les doublons.",
    "Strategie",
    "Question organisation",
    [googleHelpful, messesInfo],
    [
      {
        heading: "Deux niveaux complementaires",
        paragraphs: [
          "Le diocese porte la vision, les services, les ressources communes et parfois les horaires centralises. La paroisse porte l'accueil local, les lieux, les contacts, les inscriptions et la vie concrete.",
          "Le visiteur ne se demande pas toujours quel niveau consulter. Les liens doivent donc etre clairs."
        ]
      },
      {
        heading: "Eviter la duplication",
        paragraphs: [
          "Si le diocese publie une information officielle, la paroisse peut la relayer avec un lien et une explication locale. Copier-coller partout cree des versions divergentes.",
          "Les horaires, en particulier, demandent une source bien definie."
        ]
      },
      {
        heading: "Architecture ideale",
        paragraphs: [
          "Le site paroissial doit garder les informations pratiques locales et renvoyer vers le diocese pour les ressources institutionnelles, formations ou documents officiels.",
          "Le diocese peut de son cote pointer vers les pages paroissiales a jour."
        ]
      },
      {
        heading: "Pour les ensembles paroissiaux",
        paragraphs: [
          "Plus il y a de clochers, plus l'architecture doit etre claire : lieux, horaires, responsables, groupes et documents.",
          "Web Prophecy peut aider a repartir les informations entre niveaux local et diocesan."
        ]
      }
    ]
  ),
  article(
    "visibilite-ia-paroisse",
    "Comment rendre une paroisse visible dans les reponses des IA ?",
    "Structurer les contenus pour les recherches conversationnelles et les moteurs IA.",
    "IA et SEO",
    "Recherche emergente",
    [googleHelpful, googleStructured, googleLocal],
    [
      {
        heading: "Les IA ont besoin d'informations explicites",
        paragraphs: [
          "Quand une personne demande a une IA ou trouver une messe, demander un bapteme ou contacter une paroisse, les systemes s'appuient sur des contenus clairs, structures et coherents.",
          "Un site vague, sans pages detaillees, sans schema et sans informations locales rend l'entite difficile a comprendre."
        ]
      },
      {
        heading: "Repondre aux vraies questions",
        paragraphs: [
          "Les articles de blog, les pages sacrements et les pages horaires doivent reprendre les formulations naturelles : comment demander un bapteme, ou trouver les horaires de messe, comment inscrire mon enfant au catechisme.",
          "Chaque page doit donner une reponse directe, puis developper, puis proposer l'action suivante."
        ]
      },
      {
        heading: "Entite claire",
        paragraphs: [
          "Nom, adresse, ville, telephone, email, lieux de culte, responsable, liens officiels et donnees structurees aident a etablir l'identite de la paroisse.",
          "La coherence entre site, Google Business Profile et annuaires locaux devient importante."
        ]
      },
      {
        heading: "Contenu utile avant volume",
        paragraphs: [
          "Publier beaucoup d'articles faibles n'aide pas. Il faut des contenus complets, sourcés, utiles et relies aux services pastoraux.",
          "Web Prophecy construit des contenus orientes Google, IA et conversion pastorale sans tomber dans le bourrage de mots-cles."
        ]
      }
    ]
  ),
  article(
    "audit-site-paroissial",
    "Audit de site paroissial : la checklist en 30 points",
    "Les points a verifier avant une refonte ou une amelioration SEO.",
    "Audit",
    "Conversion audit",
    [googleHelpful, googleLocal, rgga, cnilAssociations],
    [
      {
        heading: "Audit contenu",
        paragraphs: [
          "Verifiez si les horaires, sacrements, catechisme, agenda, dons et contact sont accessibles en moins de deux clics. Regardez aussi si les pages sont a jour et datees quand c'est necessaire.",
          "Chaque page importante doit avoir un objectif clair et une action suivante."
        ]
      },
      {
        heading: "Audit technique",
        paragraphs: [
          "Controlez la vitesse mobile, les titres, descriptions, H1, liens internes, sitemap, robots, images, indexation et erreurs 404.",
          "Un site lent ou mal structure peut rendre invisibles des informations pourtant utiles."
        ]
      },
      {
        heading: "Audit confiance",
        paragraphs: [
          "Verifiez les mentions legales, politique de confidentialite, consentement formulaire, coherences d'adresse et securite HTTPS.",
          "Pour les dons, la confiance est decisive."
        ]
      },
      {
        heading: "Audit experience",
        paragraphs: [
          "Testez le site avec une personne qui ne le connait pas. Demandez-lui de trouver une messe, un bapteme, un contact et une inscription catechisme.",
          "Web Prophecy propose un audit gratuit pour transformer ces constats en plan d'action."
        ]
      }
    ]
  ),
  article(
    "contenu-seo-paroisse-questions-google",
    "Quelles questions Google traiter sur un site de paroisse ?",
    "La liste des intentions a couvrir pour attirer des visiteurs utiles.",
    "SEO editorial",
    "Recherche questions",
    [googleHelpful],
    [
      {
        heading: "Partir des questions des fideles",
        paragraphs: [
          "Les meilleures pages repondent aux questions reelles : ou est la messe, comment demander un bapteme, comment inscrire mon enfant, comment faire un don, comment contacter la paroisse.",
          "Ces questions doivent etre traitees en pages de service et en articles de blog selon leur importance."
        ]
      },
      {
        heading: "Questions commerciales pour Web Prophecy",
        paragraphs: [
          "Pour une agence specialisee, les questions a couvrir sont aussi : combien coute un site paroissial, comment refaire un site, WordPress ou Next.js, application ou site, RGPD et formulaires.",
          "Ces articles attirent les equipes qui ont deja conscience d'un besoin."
        ]
      },
      {
        heading: "Format de reponse",
        paragraphs: [
          "Commencez par une reponse directe, puis expliquez les cas, puis donnez une checklist, puis proposez un audit ou un contact.",
          "Ce format sert les lecteurs, Google et les recherches conversationnelles."
        ]
      },
      {
        heading: "Maillage",
        paragraphs: [
          "Chaque article doit pointer vers une page service, une page contact ou un audit. Sans maillage, le blog informe mais ne convertit pas.",
          "Web Prophecy peut batir un calendrier editorial complet pour votre secteur catholique."
        ]
      }
    ]
  ),
  article(
    "site-sanctuaire-abbaye-communaute",
    "Site de sanctuaire, abbaye ou communaute : quelles differences avec une paroisse ?",
    "Adapter l'architecture aux visiteurs, pelerins, hotelleries et offices.",
    "Secteurs",
    "Recherche niche",
    [googleHelpful, googleLocal],
    [
      {
        heading: "Des publics differents",
        paragraphs: [
          "Un sanctuaire ou une abbaye accueille souvent des pelerins, touristes, retraitants, groupes et visiteurs de passage. Les besoins ne sont pas exactement ceux d'une paroisse de quartier.",
          "Le site doit mettre en avant les offices, l'accueil, les horaires, l'acces, l'hebergement, les retraites et les dons."
        ]
      },
      {
        heading: "Informations pratiques",
        paragraphs: [
          "Acces, parking, transports, horaires d'ouverture, restauration, boutique, hotellerie et contact groupe deviennent prioritaires.",
          "Une page claire peut reduire fortement les appels repetitifs."
        ]
      },
      {
        heading: "Dimension spirituelle",
        paragraphs: [
          "Le site doit garder une tonalite sobre et spirituelle, sans devenir un site touristique froid. Photos, textes et parcours doivent respecter le lieu.",
          "Le contenu doit aider a preparer une visite ou une retraite."
        ]
      },
      {
        heading: "SEO local et national",
        paragraphs: [
          "Un sanctuaire peut viser des recherches locales et nationales. Il faut donc combiner pages pratiques, contenus spirituels et donnees structurees.",
          "Web Prophecy adapte l'approche aux paroisses, sanctuaires, abbayes et communautes."
        ]
      }
    ]
  ),
  article(
    "formulaires-sacrements-rgpd",
    "Formulaires de sacrements et RGPD : comment rester prudent ?",
    "Bapteme, mariage, confirmation, obseques : organiser les demandes sans surcollecter.",
    "Sacrements",
    "Question conformite",
    [cefSacrements, cnilAssociations],
    [
      {
        heading: "Les demandes pastorales sont sensibles",
        paragraphs: [
          "Une demande de sacrement touche a la vie personnelle et spirituelle. Le site doit donc collecter avec sobriete et expliquer clairement le traitement.",
          "Le formulaire sert au premier contact. Les informations plus detaillees peuvent etre recueillies ensuite dans un cadre accompagne."
        ]
      },
      {
        heading: "Adapter par sacrement",
        paragraphs: [
          "Bapteme, mariage, confirmation, communion, obseques ou certificat n'ont pas les memes informations utiles. Chaque formulaire doit etre adapte.",
          "Un formulaire unique trop general risque de creer des messages incomplets."
        ]
      },
      {
        heading: "Limiter les destinataires",
        paragraphs: [
          "Les donnees doivent arriver aux personnes concernees seulement : secretariat, pretre, responsable catechese ou equipe dediee selon le cas.",
          "Les boites partagees doivent etre gerees avec prudence."
        ]
      },
      {
        heading: "Confiance",
        paragraphs: [
          "Un texte clair sur la confidentialite rassure et montre le serieux de la paroisse.",
          "Web Prophecy conçoit des formulaires pastoraux sobres et comprehensibles."
        ]
      }
    ]
  ),
  article(
    "performance-mobile-site-paroisse",
    "Performance mobile : pourquoi un site paroissial doit charger vite ?",
    "Vitesse, images, Core Web Vitals et experience mobile pour les visiteurs presses.",
    "Performance",
    "Question technique",
    [googleHelpful],
    [
      {
        heading: "Le mobile est souvent le contexte reel",
        paragraphs: [
          "Une personne cherche une messe dans la rue, une adresse en voiture, un contact depuis son telephone ou un horaire juste avant de partir. Si la page charge mal, l'information est perdue.",
          "La performance est donc un service rendu."
        ]
      },
      {
        heading: "Images et scripts",
        paragraphs: [
          "Les grandes images non optimisees, les videos en fond, les scripts inutiles et les widgets multiples ralentissent le site.",
          "Un site paroissial doit privilegier les contenus essentiels et charger le reste avec mesure."
        ]
      },
      {
        heading: "Next.js et statique",
        paragraphs: [
          "Une architecture Next.js statique ou serveur bien pensee peut fournir des pages rapides, un bon SEO technique et une experience stable.",
          "Le choix technique doit cependant rester invisible pour l'utilisateur : ce qui compte, c'est que la page reponde vite."
        ]
      },
      {
        heading: "Audit",
        paragraphs: [
          "Testez l'accueil, les horaires, contact et sacrements sur smartphone. Si une information essentielle demande trop de temps, c'est une priorite de refonte.",
          "Web Prophecy optimise les sites paroissiaux pour les usages mobiles."
        ]
      }
    ]
  )
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((articleItem) => articleItem.slug === slug);
}
