import { PageHero, Section, SectionTitle } from "@/components/ui/Section";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { OfferGroups } from "@/components/sections/OfferGroups";
import { CtaBand } from "@/components/sections/CtaBand";
import { AiDemoSlot } from "@/components/demo/AiDemoSlot";
import { groupesIA } from "@/data/ia";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Solutions IA au Sénégal : vendeur IA WhatsApp, assistant, automatisations",
  "Vendeur IA sur WhatsApp, assistant IA formé sur vos documents, automatisations et formations. Installation + abonnement en FCFA pour PME et boutiques au Sénégal.",
  "/solutions-ia",
);

const usages = [
  { titre: "Répondre 24h/24", texte: "Vos clients obtiennent prix, disponibilités et infos de livraison, même à 23 h." },
  { titre: "Prendre les commandes", texte: "L'IA enregistre la commande et envoie le lien de paiement Wave ou Orange Money." },
  { titre: "Gagner du temps", texte: "Relances, rapports, saisies : les tâches répétitives se font toutes seules." },
  { titre: "Garder le contrôle", texte: "Dès qu'une demande est délicate, la conversation est transférée à un humain." },
];

export default function SolutionsIA() {
  return (
    <>
      <PageHero
        surtitre="Pôle 2 · Solutions IA"
        titre={<>L&apos;intelligence artificielle au service de <span className="texte-degrade">vos ventes</span></>}
        texte="Des assistants IA qui répondent, vendent et automatisent à votre place, sur WhatsApp et sur votre site. Installation unique, puis abonnement mensuel."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact?offre=audit-ia">Demander mon audit IA gratuit</Button>
          <WhatsAppButton message="Bonjour Sen AutomatIA, je souhaite des informations sur vos solutions IA." />
        </div>
      </PageHero>

      <Section blanc>
        <SectionTitle surtitre="Ce que l'IA fait pour vous" titre="Concrètement, au quotidien" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {usages.map((u) => (
            <div key={u.titre} className="rounded-3xl bg-brume p-6">
              <h3 className="text-lg font-bold">{u.titre}</h3>
              <p className="mt-2 text-encre/75">{u.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          surtitre="Nos offres"
          titre="Solutions IA : nos formules"
          texte="Tarifs en FCFA : frais d'installation + abonnement mensuel le cas échéant."
        />
        <OfferGroups groupes={groupesIA} />
      </Section>

      <Section sombre>
        <AiDemoSlot />
      </Section>

      <CtaBand titre="Votre audit IA est offert" texte="Nous identifions 3 tâches à automatiser dans votre entreprise et estimons le temps gagné. Gratuit et sans engagement." />
    </>
  );
}
