import Image from "next/image";
import { site } from "@/config/site";
import { publicFileExists } from "@/lib/public-file";

/**
 * Photo du fondateur (public/images/cheikh-mbacke-cisse.jpg).
 * Tant que le fichier n'existe pas, un cadre provisoire s'affiche à la place.
 */
export function FounderPhoto() {
  const { photo, nom } = site.fondateur;
  const initiales = nom
    .split(" ")
    .map((m) => m[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="bg-degrade relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] p-1.5 shadow-2xl shadow-violet/20">
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-nuit">
        {publicFileExists(photo) ? (
          <Image
            src={photo}
            alt={`${nom}, ${site.fondateur.role.toLowerCase()} de ${site.nom}`}
            fill
            sizes="(min-width: 1024px) 384px, 90vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white">
            <span className="font-titre text-6xl font-bold texte-degrade">{initiales}</span>
            <span className="text-sm text-white/50">Photo à venir</span>
          </div>
        )}
      </div>
    </div>
  );
}
