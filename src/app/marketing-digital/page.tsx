import { PageHero, Section, SectionTitle } from "@/components/ui/Section";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { OfferGroups } from "@/components/sections/OfferGroups";
import { CtaBand } from "@/components/sections/CtaBand";
import { groupesMarketing, maintenanceSite } from "@/data/marketing";
import { fcfa } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Marketing digital au Sénégal : réseaux sociaux, sites et boutiques",
  "Gestion de réseaux sociaux, publicités Meta, sites vitrines et boutiques en ligne avec Wave et Orange Money. Offres claires en FCFA pour PME et boutiques au Sénégal.",
  "/marketing-digital",
);

const benefices = [
  { titre: "Être visible", texte: "Une présence régulière sur les réseaux où se trouvent vos clients." },
  { titre: "Inspirer confiance", texte: "Des visuels et un site professionnels qui rassurent avant l'achat." },
  { titre: "Vendre plus", texte: "Des publicités ciblées et des boutiques reliées à WhatsApp et au paiement mobile." },
];

export default function MarketingDigital() {
  return (
    <>
      <PageHero
        surtitre="Pôle 1 · Marketing digital"
        titre={<>Attirez plus de clients <span className="texte-degrade">en ligne</span></>}
        texte="Réseaux sociaux, publicité, sites et boutiques en ligne : tout ce qu'il faut pour être trouvé, inspirer confiance et vendre, au Sénégal."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact?offre=audit-digital">Demander mon audit digital gratuit</Button>
          <WhatsAppButton message="Bonjour Sen AutomatIA, je souhaite des informations sur vos offres de marketing digital." />
        </div>
      </PageHero>

      <Section blanc>
        <div className="grid gap-5 md:grid-cols-3">
          {benefices.map((b) => (
            <div key={b.titre} className="rounded-3xl bg-brume p-6">
              <h2 className="text-xl font-bold texte-degrade">{b.titre}</h2>
              <p className="mt-2 text-encre/75">{b.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          surtitre="Nos offres"
          titre="Marketing digital : nos formules"
          texte="Tarifs en FCFA. Le budget publicitaire (Meta, Google) reste à la charge du client, en plus de nos tarifs."
        />
        <OfferGroups groupes={groupesMarketing} />

        <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-dashed border-bleu/40 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="text-xl font-bold">
              {maintenanceSite.nom} <span className="text-sm font-medium text-encre/50">({maintenanceSite.note})</span>
            </h3>
            <p className="mt-1 text-encre/70">{maintenanceSite.accroche}</p>
          </div>
          <p className="font-titre text-2xl font-bold text-bleu">{fcfa(maintenanceSite.mensuel!)} / mois</p>
        </div>
      </Section>

      <CtaBand titre="Votre audit digital est offert" />
    </>
  );
}
