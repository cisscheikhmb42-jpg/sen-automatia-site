import type { GroupeOffres } from "@/data/types";
import { PriceCard } from "@/components/ui/PriceCard";

export function OfferGroups({ groupes }: { groupes: GroupeOffres[] }) {
  return (
    <div className="space-y-16">
      {groupes.map((g) => (
        <div key={g.titre}>
          <div className="mb-8 max-w-2xl">
            <h3 className="text-2xl font-bold sm:text-3xl">{g.titre}</h3>
            <p className="mt-2 text-encre/70">{g.description}</p>
          </div>
          <div
            className={`grid gap-6 sm:grid-cols-2 ${g.offres.length >= 4 ? "xl:grid-cols-4" : g.offres.length === 3 ? "lg:grid-cols-3" : ""}`}
          >
            {g.offres.map((o) => (
              <PriceCard key={o.id} offre={o} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
