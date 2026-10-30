import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  sombre?: boolean;
  blanc?: boolean;
  id?: string;
  className?: string;
};

export function Section({ children, sombre, blanc, id, className = "" }: Props) {
  const fond = sombre ? "bg-nuit text-white" : blanc ? "bg-white" : "bg-brume";
  return (
    <section id={id} className={`${fond} px-4 py-16 sm:px-6 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  surtitre,
  titre,
  texte,
  sombre,
  centre = true,
}: {
  surtitre?: string;
  titre: ReactNode;
  texte?: ReactNode;
  sombre?: boolean;
  centre?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-3xl sm:mb-14 ${centre ? "mx-auto text-center" : ""}`}>
      {surtitre && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-bleu">
          <span className={sombre ? "text-cyan" : ""}>{surtitre}</span>
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{titre}</h2>
      {texte && (
        <p className={`mt-4 text-lg leading-relaxed ${sombre ? "text-white/75" : "text-encre/70"}`}>
          {texte}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  surtitre,
  titre,
  texte,
  children,
}: {
  surtitre: string;
  titre: ReactNode;
  texte: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-nuit px-4 pb-16 pt-14 text-white sm:px-6 sm:pb-20 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-cyan/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">{surtitre}</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{titre}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{texte}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
