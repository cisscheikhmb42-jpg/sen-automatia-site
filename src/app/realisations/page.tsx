import { PageHero, Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { CheckIcon } from "@/components/ui/icons";
import { realisations } from "@/data/realisations";
import { publicFileExists } from "@/lib/public-file";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Réalisations",
  "Découvrez les projets de Sen AutomatIA : réseaux sociaux, sites web, boutiques en ligne et solutions IA pour des entreprises au Sénégal.",
  "/realisations",
);

export default function Realisations() {
  return (
    <>
      <PageHero
        surtitre="Réalisations"
        titre={<>Des projets concrets, <span className="texte-degrade">des résultats mesurés</span></>}
        texte="Voici le type de projets que nous menons pour les PME et les boutiques en ligne au Sénégal."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realisations.map((r) => {
            const image = r.image && publicFileExists(r.image) ? r.image : null;
            return (
              <article key={r.titre} className="flex flex-col overflow-hidden rounded-3xl border border-encre/10 bg-white">
                <div className="relative aspect-[16/10] bg-nuit">
                  {image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={image} alt={r.titre} className="h-full w-full object-cover" />
                  ) : (
                    <div className="bg-degrade flex h-full w-full items-center justify-center opacity-90">
                      <span className="font-titre text-lg font-bold text-white/90">{r.categorie}</span>
                    </div>
                  )}
                  {r.exemple && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-encre">
                      Exemple de projet
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-bleu">{r.categorie}</p>
                  <h2 className="mt-2 text-xl font-bold">{r.titre}</h2>
                  <p className="mt-3 flex-1 text-encre/70">{r.resume}</p>
                  <ul className="mt-5 space-y-2">
                    {r.resultats.map((res) => (
                      <li key={res} className="flex gap-2 text-sm">
                        <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan" />
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-10 text-center text-encre/60">
          Vous souhaitez être notre prochaine réussite ? Profitez de l&apos;offre de lancement réservée
          aux 3 premiers clients.
        </p>
      </Section>

      <CtaBand titre="Et si votre projet était le prochain ?" />
    </>
  );
}
