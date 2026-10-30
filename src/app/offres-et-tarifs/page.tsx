import { PageHero, Section, SectionTitle } from "@/components/ui/Section";
import { OfferGroups } from "@/components/sections/OfferGroups";
import { Sen360Highlight } from "@/components/sections/Sen360Highlight";
import { OfferRules } from "@/components/sections/OfferRules";
import { CtaBand } from "@/components/sections/CtaBand";
import { groupesMarketing, maintenanceSite } from "@/data/marketing";
import { groupesIA } from "@/data/ia";
import { fcfa } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Offres et tarifs en FCFA",
  "Tous nos tarifs en FCFA : réseaux sociaux, sites, boutiques en ligne, vendeur IA WhatsApp, automatisations et formations. Offre combinée SEN 360 et offre de lancement −20 %.",
  "/offres-et-tarifs",
);

const onglets = [
  { href: "#sen-360", label: "SEN 360" },
  { href: "#marketing", label: "Marketing digital" },
  { href: "#ia", label: "Solutions IA" },
  { href: "#conditions", label: "Conditions" },
];

export default function OffresEtTarifs() {
  return (
    <>
      <PageHero
        surtitre="Offres et tarifs"
        titre={<>Des prix clairs, <span className="texte-degrade">en FCFA</span></>}
        texte="Choisissez la formule adaptée à votre activité. Vous hésitez ? L'audit gratuit vous oriente vers la meilleure option pour votre budget."
      />

      {/* Navigation rapide entre les rubriques */}
      <nav aria-label="Rubriques des tarifs" className="sticky top-16 z-30 border-b border-encre/5 bg-brume/95 backdrop-blur sm:top-18">
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:justify-center sm:px-6">
          {onglets.map((o) => (
            <li key={o.href} className="flex-none">
              <a href={o.href} className="inline-flex min-h-10 items-center rounded-full border border-encre/10 bg-white px-4 text-sm font-semibold text-encre/80 hover:border-bleu hover:text-bleu">
                {o.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="sen-360" className="scroll-mt-32">
        <Sen360Highlight />
      </Section>

      <Section id="marketing" blanc className="scroll-mt-32">
        <SectionTitle surtitre="Pôle 1" titre="Marketing digital" />
        <OfferGroups groupes={groupesMarketing} />
        <p className="mt-10 rounded-2xl bg-brume p-5 text-center text-encre/80">
          <strong>{maintenanceSite.nom}</strong> (optionnelle) : {fcfa(maintenanceSite.mensuel!)} / mois
          — mises à jour, sauvegardes et petites modifications.
        </p>
      </Section>

      <Section id="ia" className="scroll-mt-32">
        <SectionTitle surtitre="Pôle 2" titre="Solutions IA" texte="Frais d'installation + abonnement mensuel le cas échéant." />
        <OfferGroups groupes={groupesIA} />
      </Section>

      <Section id="conditions" blanc className="scroll-mt-32">
        <SectionTitle surtitre="Bon à savoir" titre="Conditions et modalités" />
        <OfferRules />
      </Section>

      <CtaBand />
    </>
  );
}
