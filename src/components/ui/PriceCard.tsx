import Link from "next/link";
import type { Offre } from "@/data/types";
import { fcfa } from "@/lib/format";
import { CheckIcon } from "./icons";

function Prix({ offre }: { offre: Offre }) {
  if (offre.prix === 0) {
    return <p className="font-titre text-3xl font-bold texte-degrade">Gratuit</p>;
  }

  // Installation + abonnement
  if (offre.prix && offre.mensuel) {
    return (
      <div>
        <p className="font-titre text-3xl font-bold text-encre">{fcfa(offre.prix)}</p>
        <p className="text-sm text-encre/60">installation</p>
        <p className="mt-1 font-semibold text-bleu">+ {fcfa(offre.mensuel)} / mois</p>
      </div>
    );
  }

  if (offre.mensuel) {
    return (
      <p className="font-titre text-3xl font-bold text-encre">
        {fcfa(offre.mensuel)}
        <span className="text-base font-medium text-encre/60"> / mois</span>
      </p>
    );
  }

  return (
    <p className="font-titre text-3xl font-bold text-encre">
      {offre.prefixe && <span className="text-base font-medium text-encre/60">{offre.prefixe} </span>}
      {fcfa(offre.prix ?? 0)}
    </p>
  );
}

export function PriceCard({ offre }: { offre: Offre }) {
  const gratuit = offre.prix === 0;
  return (
    <article
      className={`relative flex flex-col rounded-3xl p-6 sm:p-7 ${
        offre.populaire ? "bordure-degrade shadow-xl shadow-violet/10" : "border border-encre/10 bg-white"
      }`}
    >
      {offre.populaire && (
        <span className="bg-degrade absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold text-white">
          Le plus choisi
        </span>
      )}
      {gratuit && (
        <span className="absolute -top-3 left-6 rounded-full bg-cyan px-3 py-1 text-xs font-semibold text-white">
          Sans engagement
        </span>
      )}
      <h3 className="text-xl font-bold">{offre.nom}</h3>
      <p className="mt-2 min-h-12 text-encre/70">{offre.accroche}</p>
      <div className="mt-5">
        <Prix offre={offre} />
        {offre.note && <p className="mt-1 text-sm text-encre/60">{offre.note}</p>}
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {offre.inclus.map((item) => (
          <li key={item} className="flex gap-3 text-encre/85">
            <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-cyan" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/contact?offre=${offre.id}`}
        className={`mt-7 inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 font-semibold transition ${
          offre.populaire || gratuit
            ? "bg-degrade text-white hover:brightness-110"
            : "border-2 border-encre/15 text-encre hover:border-bleu hover:text-bleu"
        }`}
      >
        {gratuit ? "Demander mon audit gratuit" : "Choisir cette offre"}
      </Link>
    </article>
  );
}
