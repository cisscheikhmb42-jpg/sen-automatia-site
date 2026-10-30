/**
 * Réalisations affichées sur la page /realisations.
 * Les entrées marquées `exemple: true` sont des modèles à remplacer
 * par vos vrais projets (mettez `exemple: false` ou supprimez la ligne).
 * Pour une image : placez-la dans public/images/ et indiquez "/images/nom.jpg".
 */
export type Realisation = {
  titre: string;
  client: string;
  categorie: "Marketing digital" | "Site web" | "Boutique en ligne" | "Solution IA";
  resume: string;
  resultats: string[];
  image?: string;
  exemple?: boolean;
};

export const realisations: Realisation[] = [
  {
    titre: "Boutique de mode à Dakar",
    client: "Exemple de projet",
    categorie: "Boutique en ligne",
    resume:
      "Création d'une Boutique Express avec commande sur WhatsApp et paiement Wave / Orange Money.",
    resultats: ["Catalogue de 20 produits", "Commandes reçues directement sur WhatsApp"],
    exemple: true,
  },
  {
    titre: "Restaurant – réseaux sociaux",
    client: "Exemple de projet",
    categorie: "Marketing digital",
    resume:
      "Pack Croissance : calendrier de publications, vidéos courtes et campagnes Meta ciblées sur le quartier.",
    resultats: ["16 publications par mois", "Campagnes publicitaires locales"],
    exemple: true,
  },
  {
    titre: "Vendeur IA pour une boutique de cosmétiques",
    client: "Exemple de projet",
    categorie: "Solution IA",
    resume:
      "Assistant WhatsApp qui répond aux questions sur les produits et les prix, et transfère les commandes à l'équipe.",
    resultats: ["Réponses 24h/24", "Transfert vers un humain"],
    exemple: true,
  },
];
