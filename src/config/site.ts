/**
 * ★ COORDONNÉES ET IDENTITÉ DU SITE ★
 *
 * C'est le SEUL fichier à modifier pour changer le numéro WhatsApp,
 * l'e-mail, les réseaux sociaux ou les informations légales.
 * Tous les boutons et liens du site lisent leurs valeurs ici.
 */

export const site = {
  nom: "Sen AutomatIA",
  slogan: "Votre marketing, propulsé par l'IA",
  description:
    "Agence de marketing digital et de solutions IA au Sénégal. Nous aidons les PME et les boutiques en ligne à attirer plus de clients et à vendre plus.",

  // Adresse du site (définie par la variable NEXT_PUBLIC_SITE_URL sur Vercel)
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://senautomatia.com",

  whatsapp: {
    // Format international sans "+" ni espaces, pour les liens wa.me
    numero: "221784558401", // provisoire : à remplacer par le numéro commercial
    // Format affiché aux visiteurs
    affichage: "+221 78 455 84 01",
    // Message pré-rempli quand un visiteur clique sur un bouton WhatsApp
    messageParDefaut:
      "Bonjour Sen AutomatIA, je souhaite en savoir plus sur vos services.",
  },

  email: "cisscheikhmbacke41@gmail.com", // provisoire : à remplacer par l'adresse du domaine

  ville: "Dakar, Sénégal",
  horaires: "Lundi – samedi, 9h – 19h",

  fondateur: {
    nom: "Cheikh Mbacké Cissé",
    role: "Fondateur",
    // Fichier public/images/cheikh-mbacke-cisse (.jpg, .jpeg, .png ou .webp)
    photo: "/images/cheikh-mbacke-cisse",
  },

  // Laisser une chaîne vide pour masquer un réseau
  reseaux: {
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
  },

  // Informations pour la page Mentions légales (à compléter)
  legal: {
    raisonSociale: "Sen AutomatIA",
    formeJuridique: "À compléter",
    ninea: "À compléter",
    rccm: "À compléter",
    adresse: "Dakar, Sénégal",
    directeurPublication: "Cheikh Mbacké Cissé",
    hebergeur: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis – vercel.com",
  },

  // Fichiers dans public/logo/ (extension .svg, .png, .webp ou .jpg acceptée)
  logos: {
    entete: "/logo/logo-sen-automatia-transparent",
    fondSombre: "/logo/logo-sen-automatia-fond-sombre",
    fondClair: "/logo/logo-sen-automatia-fond-clair",
  },
  // Favicon (icône de l'onglet)
  favicon: "/logo/symbole-sen-automatia.png",
} as const;

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/marketing-digital", label: "Marketing digital" },
  { href: "/solutions-ia", label: "Solutions IA" },
  { href: "/offres-et-tarifs", label: "Offres et tarifs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/produits", label: "Produits" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;
