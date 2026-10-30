import { PageHero, Section, SectionTitle } from "@/components/ui/Section";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { FounderPhoto } from "@/components/about/FounderPhoto";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "À propos",
  "Sen AutomatIA, agence sénégalaise de marketing digital et de solutions IA fondée par Cheikh Mbacké Cissé. Notre mission : rendre le digital et l'IA utiles et accessibles aux PME.",
  "/a-propos",
);

const valeurs = [
  { titre: "Résultats d'abord", texte: "Nous mesurons ce qui compte : clients gagnés, ventes, temps économisé." },
  { titre: "Transparence", texte: "Des prix affichés en FCFA, des rapports clairs, aucun frais caché." },
  { titre: "Proximité", texte: "Une équipe au Sénégal, joignable sur WhatsApp, qui connaît votre marché." },
  { titre: "Innovation utile", texte: "L'IA n'est pas un gadget : nous l'utilisons là où elle vous rapporte." },
];

export default function APropos() {
  return (
    <>
      <PageHero
        surtitre="À propos"
        titre={<>Le digital et l&apos;IA, <span className="texte-degrade">accessibles à tous</span></>}
        texte="Sen AutomatIA est née d'une conviction : les PME et les boutiques du Sénégal méritent les mêmes outils que les grandes entreprises, à un prix juste."
      />

      <Section blanc>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <FounderPhoto />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-bleu">Le fondateur</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{site.fondateur.nom}</h2>
            <p className="mt-1 font-medium text-encre/60">
              {site.fondateur.role} de {site.nom}
            </p>
            {/* Présentation du fondateur : texte à personnaliser */}
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-encre/80">
              <p>
                Passionné par le marketing digital et l&apos;intelligence artificielle, j&apos;ai fondé
                Sen AutomatIA pour aider les entrepreneurs sénégalais à tirer parti de ces outils,
                sans complexité ni jargon.
              </p>
              <p>
                Chaque jour, je vois des commerçants talentueux perdre des ventes faute de temps pour
                répondre aux messages ou publier régulièrement. Mon objectif : leur faire gagner ce
                temps et les aider à vendre plus, grâce à des solutions concrètes et abordables.
              </p>
              <p>
                Au-delà de l&apos;agence, Sen AutomatIA prépare des produits logiciels pensés pour les
                entreprises africaines.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Demander mon audit gratuit</Button>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle surtitre="Notre mission" titre="Aider les entreprises sénégalaises à vendre plus, grâce au digital et à l'IA" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valeurs.map((v) => (
            <div key={v.titre} className="rounded-3xl border border-encre/10 bg-white p-6">
              <h3 className="text-lg font-bold texte-degrade">{v.titre}</h3>
              <p className="mt-2 text-encre/75">{v.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
