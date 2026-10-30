import { offreLancement, regles } from "@/data/regles";

export function OfferRules() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
      <div className="bg-degrade flex flex-col justify-center rounded-3xl p-7 text-white sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/80">{offreLancement.titre}</p>
        <p className="mt-3 font-titre text-5xl font-extrabold">−20 %</p>
        <p className="mt-3 text-lg">{offreLancement.texte}</p>
        <p className="mt-4 text-sm text-white/80">Places limitées : demandez votre audit pour en profiter.</p>
      </div>
      <dl className="grid gap-4 sm:grid-cols-2">
        {regles.map((r) => (
          <div key={r.titre} className="rounded-3xl border border-encre/10 bg-white p-6">
            <dt className="font-titre text-lg font-bold">{r.titre}</dt>
            <dd className="mt-2 text-encre/70">{r.texte}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
