import Link from "next/link";
import { ArrowIcon, CheckIcon, MegaphoneIcon, SparkIcon } from "@/components/ui/icons";

const poles = [
  {
    href: "/marketing-digital",
    icone: MegaphoneIcon,
    titre: "Marketing digital",
    texte: "Soyez visible, inspirez confiance et attirez de nouveaux clients chaque semaine.",
    points: [
      "Gestion de vos réseaux sociaux",
      "Publicités Facebook et Instagram",
      "Sites vitrines et boutiques en ligne",
    ],
    depuis: "Dès 100 000 FCFA/mois",
  },
  {
    href: "/solutions-ia",
    icone: SparkIcon,
    titre: "Solutions IA",
    texte: "Répondez à vos clients 24h/24 et gagnez des heures chaque semaine grâce à l'IA.",
    points: [
      "Vendeur IA sur WhatsApp",
      "Assistant IA formé sur votre entreprise",
      "Automatisations et formations",
    ],
    depuis: "Dès 50 000 FCFA",
  },
];

export function PolesSplit() {
  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-6">
      {poles.map(({ href, icone: Icone, titre, texte, points, depuis }) => (
        <Link
          key={href}
          href={href}
          className="group relative flex flex-col overflow-hidden rounded-3xl border border-encre/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-bleu/10 sm:p-8"
        >
          <div className="bg-degrade absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
          <div className="bg-degrade flex h-12 w-12 items-center justify-center rounded-2xl text-white">
            <Icone />
          </div>
          <h3 className="mt-5 text-2xl font-bold">{titre}</h3>
          <p className="mt-2 text-encre/70">{texte}</p>
          <ul className="mt-5 flex-1 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-cyan" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-encre/10 pt-5">
            <span className="text-sm font-semibold text-encre/60">{depuis}</span>
            <span className="inline-flex items-center gap-2 font-semibold text-bleu">
              Découvrir <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
