"use client";

import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { envoyerDemandeAudit, type AuditState } from "@/app/actions/audit";
import { trackLead } from "@/lib/track";
import { CheckIcon, WhatsAppIcon } from "@/components/ui/icons";

const etatInitial: AuditState = { statut: "idle" };

const OFFRES_IA = [
  "audit-ia",
  "vendeur-ia-essentiel",
  "vendeur-ia-pro",
  "assistant-ia-entreprise",
  "automatisation-sur-mesure",
  "pack-3-automatisations",
  "formation-equipe",
  "coaching-individuel",
];

/** Pré-sélectionne l'intérêt selon l'offre cliquée (lien /contact?offre=...) */
function interetDepuisOffre(offre?: string) {
  if (!offre) return undefined;
  if (offre === "sen-360") return "les_deux";
  return OFFRES_IA.includes(offre) ? "ia" : "marketing";
}

const champ =
  "mt-2 block w-full rounded-2xl border border-encre/15 bg-white px-4 py-3 text-base text-encre placeholder:text-encre/40 focus:border-bleu focus:outline-none focus:ring-4 focus:ring-bleu/15";

function Erreur({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-red-600">
      {message}
    </p>
  );
}

function Choix({
  name,
  value,
  label,
  coche,
}: {
  name: string;
  value: string;
  label: string;
  coche?: boolean;
}) {
  return (
    <label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border border-encre/15 bg-white px-4 py-3 has-[:checked]:border-bleu has-[:checked]:bg-bleu/5 has-[:checked]:ring-2 has-[:checked]:ring-bleu/20">
      <input type="radio" name={name} value={value} defaultChecked={coche} required className="h-4 w-4 accent-bleu" />
      <span className="font-medium">{label}</span>
    </label>
  );
}

export function AuditForm({ whatsappHref }: { whatsappHref: string }) {
  const [etat, action, enCours] = useActionState(envoyerDemandeAudit, etatInitial);
  const brut = useSearchParams().get("offre") ?? "";
  const offre = /^[a-z0-9-]{1,60}$/.test(brut) ? brut : undefined;
  const interetParDefaut = interetDepuisOffre(offre);

  useEffect(() => {
    if (etat.statut === "succes") trackLead({ content_name: "audit_gratuit" });
  }, [etat.statut]);

  if (etat.statut === "succes") {
    return (
      <div role="status" className="rounded-3xl border border-encre/10 bg-white p-8 text-center">
        <div className="bg-degrade mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Demande bien reçue !</h3>
        <p className="mt-3 text-encre/70">
          Merci. Nous vous contactons sur WhatsApp sous 24 h ouvrées pour planifier votre audit
          gratuit.
        </p>
      </div>
    );
  }

  const e = etat.erreurs ?? {};
  const v = etat.valeurs ?? {};
  const interet = v.interet ?? interetParDefaut;

  return (
    <form key={JSON.stringify(v)} action={action} noValidate className="space-y-5 rounded-3xl border border-encre/10 bg-white p-6 sm:p-8">
      {offre && <input type="hidden" name="offre" value={offre} />}

      {/* Champ piège anti-robots : invisible pour les visiteurs */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Ne pas remplir
          <input type="text" name="site_web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="font-semibold">Votre nom</label>
          <input id="nom" name="nom" defaultValue={v.nom} type="text" autoComplete="name" required maxLength={120} placeholder="Awa Diop" className={champ} aria-invalid={!!e.nom} aria-describedby={e.nom ? "err-nom" : undefined} />
          <Erreur id="err-nom" message={e.nom} />
        </div>
        <div>
          <label htmlFor="entreprise" className="font-semibold">Entreprise ou boutique</label>
          <input id="entreprise" name="entreprise" defaultValue={v.entreprise} type="text" autoComplete="organization" required maxLength={160} placeholder="Nom de votre activité" className={champ} aria-invalid={!!e.entreprise} aria-describedby={e.entreprise ? "err-entreprise" : undefined} />
          <Erreur id="err-entreprise" message={e.entreprise} />
        </div>
      </div>

      <div>
        <label htmlFor="whatsapp" className="font-semibold">Numéro WhatsApp</label>
        <input id="whatsapp" name="whatsapp" defaultValue={v.whatsapp} type="tel" inputMode="tel" autoComplete="tel" required maxLength={30} placeholder="77 123 45 67" className={champ} aria-invalid={!!e.whatsapp} aria-describedby={e.whatsapp ? "err-whatsapp" : undefined} />
        <Erreur id="err-whatsapp" message={e.whatsapp} />
      </div>

      <fieldset>
        <legend className="font-semibold">Vous êtes</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <Choix name="type_client" value="pme" label="Une PME" coche={v.type_client === "pme"} />
          <Choix name="type_client" value="boutique" label="Une boutique en ligne" coche={v.type_client === "boutique"} />
        </div>
        <Erreur id="err-type" message={e.type_client} />
      </fieldset>

      <fieldset>
        <legend className="font-semibold">Vous êtes intéressé(e) par</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          <Choix name="interet" value="marketing" label="Marketing digital" coche={interet === "marketing"} />
          <Choix name="interet" value="ia" label="Solutions IA" coche={interet === "ia"} />
          <Choix name="interet" value="les_deux" label="Les deux" coche={interet === "les_deux"} />
        </div>
        <Erreur id="err-interet" message={e.interet} />
      </fieldset>

      <div>
        <label htmlFor="besoin" className="font-semibold">Votre besoin</label>
        <textarea id="besoin" name="besoin" defaultValue={v.besoin} required rows={4} maxLength={2000} placeholder="Ex. : je vends des vêtements sur Instagram et je n'arrive pas à répondre à tous les messages…" className={champ} aria-invalid={!!e.besoin} aria-describedby={e.besoin ? "err-besoin" : undefined} />
        <Erreur id="err-besoin" message={e.besoin} />
      </div>

      {etat.statut === "erreur" && etat.message && (
        <div role="alert" className="rounded-2xl bg-red-50 p-4 text-sm text-red-800">
          <p>{etat.message}</p>
          {!etat.erreurs && (
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-green-700 underline">
              <WhatsAppIcon className="h-4 w-4" /> Écrire sur WhatsApp
            </a>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={enCours}
        className="bg-degrade inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet/25 transition hover:brightness-110 disabled:opacity-60"
      >
        {enCours ? "Envoi en cours…" : "Demander mon audit gratuit"}
      </button>
      <p className="text-center text-sm text-encre/55">
        Gratuit et sans engagement. Vos informations servent uniquement à vous recontacter.
      </p>
    </form>
  );
}
