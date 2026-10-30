import { PageHero, Section, SectionTitle } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/Button";
import { SparkIcon } from "@/components/ui/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Produits (bientôt disponibles)",
  "Sen AutomatIA prépare des logiciels SaaS simples et abordables pour les entreprises africaines. Soyez prévenu du lancement.",
  "/produits",
);

const produits = [
  {
    nom: "Vendeur IA en libre-service",
    texte: "Créez vous-même votre assistant de vente WhatsApp, en quelques minutes, sans compétence technique.",
  },
  {
    nom: "Studio de contenus IA",
    texte: "Générez publications, visuels et légendes adaptés à votre marque et à votre public sénégalais.",
  },
  {
    nom: "Tableau de bord des ventes",
    texte: "Suivez commandes, paiements Wave / Orange Money et messages clients au même endroit.",
  },
];

export default function Produits() {
  return (
    <>
      <PageHero
        surtitre="Produits"
        titre={<>Nos logiciels arrivent <span className="texte-degrade">bientôt</span></>}
        texte="Sen AutomatIA est aussi une marque de produits : des outils SaaS simples, abordables et pensés pour les entreprises du Sénégal et d'Afrique."
      />

      <Section>
        <SectionTitle
          surtitre="En préparation"
          titre="Ce que nous construisons"
          texte="Ces produits sont issus des besoins réels de nos clients. Les noms et fonctionnalités peuvent évoluer d'ici le lancement."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {produits.map((p) => (
            <article key={p.nom} className="relative rounded-3xl border border-encre/10 bg-white p-6 sm:p-7">
              <span className="absolute right-5 top-5 rounded-full bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan">
                Bientôt disponible
              </span>
              <div className="bg-degrade flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                <SparkIcon />
              </div>
              <h2 className="mt-5 text-xl font-bold">{p.nom}</h2>
              <p className="mt-2 text-encre/70">{p.texte}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-nuit p-8 text-center text-white sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Soyez prévenu du lancement</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Envoyez-nous un message : vous serez parmi les premiers à tester nos produits, avec un tarif
            de lancement.
          </p>
          <WhatsAppButton
            className="mt-7"
            message="Bonjour Sen AutomatIA, je souhaite être prévenu(e) du lancement de vos produits."
          >
            Être prévenu sur WhatsApp
          </WhatsAppButton>
        </div>
      </Section>
    </>
  );
}
