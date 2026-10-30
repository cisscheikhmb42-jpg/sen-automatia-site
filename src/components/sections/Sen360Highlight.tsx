import { sen360 } from "@/data/sen360";
import { fcfa } from "@/lib/format";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

export function Sen360Highlight() {
  const economieInstallation = sen360.installationSansPack - sen360.installation;

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-nuit p-6 text-white sm:p-10 lg:p-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-cyan/25 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-degrade rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Offre combinée
            </span>
            <span className="text-sm font-medium text-white/70">{sen360.cible}</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            <span className="texte-degrade">{sen360.nom}</span>
          </h2>
          <p className="mt-4 text-lg text-white/80">{sen360.accroche}</p>
          <p className="mt-3 text-sm text-white/60">{sen360.composition.join(" + ")}</p>
          <ul className="mt-6 space-y-3">
            {sen360.inclus.map((i) => (
              <li key={i} className="flex gap-3 text-white/90">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-cyan" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">Abonnement</p>
          <p className="mt-2 flex flex-wrap items-baseline gap-x-3">
            <span className="font-titre text-4xl font-bold">{fcfa(sen360.mensuel)}</span>
            <span className="text-white/60">/ mois</span>
          </p>
          <p className="mt-1 text-white/55">
            au lieu de <s>{fcfa(sen360.mensuelSansPack)}</s>
          </p>

          <div className="my-6 h-px bg-white/15" />

          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">Installation</p>
          <p className="mt-2 font-titre text-3xl font-bold">{fcfa(sen360.installation)}</p>
          <p className="mt-1 text-white/55">
            au lieu de <s>{fcfa(sen360.installationSansPack)}</s>
          </p>
          <p className="mt-4 inline-block rounded-full bg-cyan/15 px-3 py-1 text-sm font-semibold text-cyan">
            {fcfa(economieInstallation)} économisés à l&apos;installation
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <Button href="/contact?offre=sen-360">Je veux SEN 360</Button>
            <WhatsAppButton message="Bonjour Sen AutomatIA, je suis intéressé(e) par l'offre SEN 360 pour ma boutique en ligne." variante="contourClair">
              En parler sur WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
