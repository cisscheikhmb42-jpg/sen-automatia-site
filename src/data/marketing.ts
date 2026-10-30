import type { GroupeOffres, Offre } from "./types";

export const auditDigital: Offre = {
  id: "audit-digital",
  nom: "Audit digital",
  prix: 0,
  accroche: "Un diagnostic clair de votre présence en ligne, sans engagement.",
  inclus: [
    "Analyse de vos réseaux sociaux et de votre site",
    "Points forts et points à corriger",
    "3 actions prioritaires pour gagner des clients",
  ],
};

export const groupesMarketing: GroupeOffres[] = [
  {
    titre: "Réseaux sociaux",
    description: "Une présence régulière et professionnelle, gérée pour vous chaque mois.",
    offres: [
      auditDigital,
      {
        id: "pack-presence",
        nom: "Pack Présence",
        mensuel: 100000,
        accroche: "Pour exister en ligne et inspirer confiance.",
        inclus: [
          "Gestion de 2 réseaux sociaux",
          "12 publications par mois",
          "Création des visuels",
          "Rapport mensuel",
        ],
      },
      {
        id: "pack-croissance",
        nom: "Pack Croissance",
        mensuel: 250000,
        populaire: true,
        accroche: "Pour attirer de nouveaux clients chaque semaine.",
        inclus: [
          "Gestion de 3 réseaux sociaux",
          "16 publications par mois, dont vidéos courtes",
          "Campagnes publicitaires Meta (Facebook, Instagram)",
          "Réponses aux messages",
          "Rapport détaillé",
        ],
      },
    ],
  },
  {
    titre: "Sites et boutiques en ligne",
    description: "Des sites rapides, pensés pour le mobile et reliés à WhatsApp.",
    offres: [
      {
        id: "site-vitrine",
        nom: "Site vitrine",
        prix: 150000,
        accroche: "L'essentiel pour être trouvé et contacté.",
        inclus: [
          "1 à 3 pages",
          "Adapté au mobile",
          "Bouton WhatsApp",
          "Formulaire de contact",
        ],
      },
      {
        id: "boutique-express",
        nom: "Boutique Express",
        prix: 250000,
        populaire: true,
        accroche: "Vendre en ligne rapidement, commandes sur WhatsApp.",
        inclus: [
          "Jusqu'à 20 produits",
          "Commande sur WhatsApp",
          "Liens de paiement Wave / Orange Money",
          "Adapté au mobile",
        ],
      },
      {
        id: "site-entreprise",
        nom: "Site entreprise",
        prix: 300000,
        accroche: "Un site complet pour asseoir votre crédibilité.",
        inclus: [
          "5 à 8 pages",
          "Page réalisations",
          "Blog",
          "Formulaire de contact",
          "SEO de base",
        ],
      },
      {
        id: "boutique-pro",
        nom: "Boutique Pro",
        prix: 450000,
        accroche: "Une vraie boutique en ligne, de la commande à la livraison.",
        inclus: [
          "Jusqu'à 100 produits",
          "Panier et paiement en ligne",
          "Suivi des commandes",
          "Gestion du stock",
          "Espace d'administration",
        ],
      },
    ],
  },
];

export const maintenanceSite: Offre = {
  id: "maintenance",
  nom: "Maintenance site",
  mensuel: 15000,
  note: "Optionnel",
  accroche: "Mises à jour, sauvegardes et petites modifications.",
  inclus: ["Mises à jour techniques", "Sauvegardes", "Petites modifications de contenu"],
};
