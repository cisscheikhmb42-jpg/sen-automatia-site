import type { GroupeOffres, Offre } from "./types";

export const auditIA: Offre = {
  id: "audit-ia",
  nom: "Audit IA",
  prix: 0,
  accroche: "Découvrez ce que l'IA peut faire pour votre entreprise.",
  inclus: [
    "3 tâches à automatiser identifiées",
    "Gain de temps estimé",
    "Recommandations concrètes, sans engagement",
  ],
};

export const groupesIA: GroupeOffres[] = [
  {
    titre: "Vendeurs et assistants IA",
    description:
      "Un assistant qui répond à vos clients 24h/24, sur WhatsApp ou sur votre site. Installation unique, puis abonnement mensuel.",
    offres: [
      auditIA,
      {
        id: "vendeur-ia-essentiel",
        nom: "Vendeur IA WhatsApp Essentiel",
        prix: 200000,
        mensuel: 35000,
        accroche: "Ne ratez plus aucun message client.",
        inclus: [
          "Réponses automatiques 24h/24",
          "Présentation du catalogue",
          "Communication des prix",
          "Transfert vers un humain si besoin",
        ],
      },
      {
        id: "vendeur-ia-pro",
        nom: "Vendeur IA WhatsApp Pro",
        prix: 350000,
        mensuel: 60000,
        populaire: true,
        accroche: "Un vendeur qui prend les commandes à votre place.",
        inclus: [
          "Tout l'Essentiel",
          "Prise de commandes",
          "Envoi du lien de paiement",
          "Relances automatiques",
          "Rapport d'activité",
        ],
      },
      {
        id: "assistant-ia-entreprise",
        nom: "Assistant IA entreprise",
        prix: 400000,
        mensuel: 60000,
        accroche: "Un assistant qui connaît votre entreprise par cœur.",
        inclus: [
          "Formé sur les documents de votre entreprise",
          "Disponible sur votre site ou sur WhatsApp",
          "Réponses fiables à vos clients ou à votre équipe",
        ],
      },
    ],
  },
  {
    titre: "Automatisations",
    description: "Supprimez les tâches répétitives : relances, saisies, rapports, notifications.",
    offres: [
      {
        id: "automatisation-sur-mesure",
        nom: "Automatisation sur mesure",
        prix: 150000,
        prefixe: "Dès",
        note: "Suivi optionnel : 25 000 FCFA/mois",
        accroche: "Une tâche répétitive automatisée de bout en bout.",
        inclus: ["Analyse de la tâche", "Mise en place de l'automatisation", "Tests et prise en main"],
      },
      {
        id: "pack-3-automatisations",
        nom: "Pack 3 automatisations",
        prix: 350000,
        populaire: true,
        note: "Suivi optionnel : 50 000 FCFA/mois",
        accroche: "Trois tâches automatisées pour un vrai gain de temps.",
        inclus: ["3 automatisations au choix", "Mise en place et tests", "Prise en main par votre équipe"],
      },
    ],
  },
  {
    titre: "Formation",
    description: "Rendez votre équipe autonome avec les outils d'IA utiles au quotidien.",
    offres: [
      {
        id: "formation-equipe",
        nom: "Formation IA équipe",
        prix: 150000,
        accroche: "Une demi-journée pour maîtriser l'IA au travail.",
        inclus: ["Demi-journée de formation", "Jusqu'à 10 personnes", "Cas pratiques adaptés à votre métier"],
      },
      {
        id: "coaching-individuel",
        nom: "Coaching IA individuel",
        prix: 50000,
        accroche: "Un accompagnement personnalisé.",
        inclus: ["2 heures en individuel", "Sur vos propres cas d'usage", "Outils et méthodes concrets"],
      },
    ],
  },
];
