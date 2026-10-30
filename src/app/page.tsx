import Link from "next/link";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Section, SectionTitle } from "@/components/ui/Section";
import { ArrowIcon } from "@/components/ui/icons";
import { PolesSplit } from "@/components/sections/PolesSplit";
import { Sen360Highlight } from "@/components/sections/Sen360Highlight";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { AiDemoSlot } from "@/components/demo/AiDemoSlot";
import { PriceCard } from "@/components/ui/PriceCard";
import { groupesMarketing } from "@/data/marketing";
import { groupesIA } from "@/data/ia";
import { site } from "@/config/site";

const offresVedettes = [
  groupesMarketing[0].offres.find((o) => o.id === "pack-croissance")!,
  groupesMarketing[1].offres.find((o) => o.id === "boutique-express")!,
  groupesIA[0].offres.find((o) => o.id === "vendeur-ia-pro")!,
];

const atouts = [
  { chiffre: "24h/24", texte: "Vos clients reçoivent une réponse, même la nuit" },
  { chiffre: "Wave & OM", texte: "Paiements adaptés au Sénégal" },
  { chiffre: "Mobile", texte: "Sites pensés d'abord pour le téléphone" },
  { chiffre: "Gratuit", texte: "Audit digital et audit IA offerts" },
];

export default function Accueil() {
  return (
    <>
      {/* Bandeau d'accueil */}
      <section className="relative overflow-hidden bg-nuit px-4 pb-36 pt-14 text-white sm:px-6 sm:pb-44 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-violet/35 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80">
            <span className="h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
            {site.slogan}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Sen AutomatIA, votre agence de{" "}
            <span className="texte-degrade">marketing digital et IA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Nous aidons les PME et les boutiques en ligne au Sénégal à attirer plus de clients et à
            vendre plus, grâce au marketing digital et à l&apos;intelligence artificielle.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">Demander mon audit gratuit</Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Les deux pôles, juste sous le bandeau */}
      <section aria-labelledby="poles-titre" className="relative -mt-24 px-4 sm:-mt-32 sm:px-6">
        <h2 id="poles-titre" className="sr-only">Nos deux pôles</h2>
        <div className="mx-auto max-w-6xl">
          <PolesSplit />
        </div>
      </section>

      {/* Atouts */}
      <section className="px-4 pt-14 sm:px-6">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
          {atouts.map((a) => (
            <li key={a.chiffre} className="rounded-3xl border border-encre/10 bg-white p-5 text-center">
              <p className="font-titre text-2xl font-bold texte-degrade">{a.chiffre}</p>
              <p className="mt-1 text-sm text-encre/70">{a.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* SEN 360 */}
      <Section>
        <Sen360Highlight />
      </Section>

      {/* Méthode */}
      <Section blanc>
        <SectionTitle
          surtitre="Notre méthode"
          titre="Simple, transparent, orienté résultats"
          texte="Pas de jargon : vous savez ce que nous faisons, combien ça coûte et ce que ça vous rapporte."
        />
        <Process />
      </Section>

      {/* Offres vedettes */}
      <Section>
        <SectionTitle
          surtitre="Nos offres"
          titre="Des tarifs clairs, en FCFA"
          texte="Voici nos offres les plus demandées. Toutes nos formules sont détaillées sur la page Offres et tarifs."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {offresVedettes.map((o) => (
            <PriceCard key={o.id} offre={o} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/offres-et-tarifs" className="inline-flex items-center gap-2 font-semibold text-bleu hover:underline">
            Voir toutes les offres et les tarifs <ArrowIcon />
          </Link>
        </div>
      </Section>

      {/* Emplacement démo IA (V2) */}
      <Section sombre>
        <AiDemoSlot />
      </Section>

      <CtaBand />
    </>
  );
}
