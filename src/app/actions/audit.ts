"use server";

import { getSupabaseAdmin } from "@/lib/supabase";

export type AuditState = {
  statut: "idle" | "succes" | "erreur";
  message?: string;
  erreurs?: Partial<Record<Champ, string>>;
  /** Valeurs saisies, renvoyées pour ne pas vider le formulaire en cas d'erreur */
  valeurs?: Partial<Record<Champ, string>>;
};

type Champ = "nom" | "entreprise" | "whatsapp" | "type_client" | "interet" | "besoin";

const TYPES = ["pme", "boutique"] as const;
const INTERETS = ["marketing", "ia", "les_deux"] as const;

function texte(form: FormData, cle: string, max: number) {
  return String(form.get(cle) ?? "").trim().slice(0, max);
}

export async function envoyerDemandeAudit(_prev: AuditState, form: FormData): Promise<AuditState> {
  // Champ piège invisible : un humain le laisse vide, un robot le remplit.
  if (texte(form, "site_web", 200)) {
    return { statut: "succes" };
  }

  const nom = texte(form, "nom", 120);
  const entreprise = texte(form, "entreprise", 160);
  const whatsappBrut = texte(form, "whatsapp", 30);
  const type_client = texte(form, "type_client", 20);
  const interet = texte(form, "interet", 20);
  const besoin = texte(form, "besoin", 2000);
  const page_origine = texte(form, "offre", 60) || null;

  // Normalise le numéro : garde les chiffres et le "+" initial
  let whatsapp = whatsappBrut.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
  if (/^(7[05678])\d{7}$/.test(whatsapp)) whatsapp = `+221${whatsapp}`; // numéro sénégalais sans indicatif
  if (/^221\d{9}$/.test(whatsapp)) whatsapp = `+${whatsapp}`;
  if (/^00\d+$/.test(whatsapp)) whatsapp = `+${whatsapp.slice(2)}`;

  const valeurs = { nom, entreprise, whatsapp: whatsappBrut, type_client, interet, besoin };
  const erreurs: AuditState["erreurs"] = {};
  if (nom.length < 2) erreurs.nom = "Indiquez votre nom.";
  if (!entreprise) erreurs.entreprise = "Indiquez le nom de votre entreprise ou boutique.";
  if (!/^\+\d{8,15}$/.test(whatsapp))
    erreurs.whatsapp = "Numéro WhatsApp invalide (ex. 77 123 45 67 ou +221 77 123 45 67).";
  if (!(TYPES as readonly string[]).includes(type_client)) erreurs.type_client = "Choisissez une option.";
  if (!(INTERETS as readonly string[]).includes(interet)) erreurs.interet = "Choisissez une option.";
  if (besoin.length < 5) erreurs.besoin = "Décrivez votre besoin en quelques mots.";

  if (Object.keys(erreurs).length > 0) {
    return { statut: "erreur", message: "Merci de corriger les champs indiqués.", erreurs, valeurs };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("[audit] Supabase non configuré : SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY manquantes.");
    return {
      statut: "erreur",
      message:
        "Le formulaire est momentanément indisponible. Écrivez-nous directement sur WhatsApp, nous vous répondons rapidement.",
      valeurs,
    };
  }

  const { error } = await supabase.from("demandes_audit").insert({
    nom,
    entreprise,
    whatsapp,
    type_client,
    interet,
    besoin,
    page_origine,
  });

  if (error) {
    console.error("[audit] Erreur Supabase :", error.message);
    return {
      statut: "erreur",
      message:
        "Une erreur est survenue lors de l'envoi. Réessayez dans un instant ou écrivez-nous sur WhatsApp.",
      valeurs,
    };
  }

  return { statut: "succes" };
}
