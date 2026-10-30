export type Offre = {
  id: string;
  nom: string;
  /** Prix unique (site, formation…) ou frais d'installation. 0 = gratuit */
  prix?: number;
  /** Abonnement mensuel */
  mensuel?: number;
  /** Préfixe du prix, par ex. "Dès" */
  prefixe?: string;
  /** Mention sous le prix, par ex. "suivi optionnel 25 000 FCFA/mois" */
  note?: string;
  accroche: string;
  inclus: string[];
  populaire?: boolean;
};

export type GroupeOffres = {
  titre: string;
  description: string;
  offres: Offre[];
};
