import { site } from "@/config/site";
import { publicFileExists } from "@/lib/public-file";

type Props = {
  variante?: "entete" | "fondSombre" | "fondClair";
  className?: string;
};

/**
 * Affiche le logo depuis public/logo/. Si le fichier n'a pas encore été
 * copié, affiche le nom de la marque en texte (aucune image cassée).
 */
export function Logo({ variante = "entete", className = "h-10 w-auto" }: Props) {
  const src = site.logos[variante];

  if (publicFileExists(src)) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={site.nom} className={className} />;
  }

  const clair = variante === "fondSombre";
  return (
    <span
      className={`font-titre text-xl font-bold tracking-tight ${clair ? "text-white" : "text-encre"}`}
    >
      Sen <span className="texte-degrade">AutomatIA</span>
    </span>
  );
}
