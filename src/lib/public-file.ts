import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * Indique si un fichier existe dans /public (ex. "/images/photo.jpg").
 * Sert à afficher un cadre provisoire tant qu'une image n'a pas été ajoutée,
 * au lieu d'une image cassée.
 */
export function publicFileExists(publicPath: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}

/**
 * Cherche un fichier dans /public quelle que soit son extension.
 * Ex. findPublicFile("/images/photo", ["jpg", "png"]) → "/images/photo.png"
 * ou null si aucun fichier ne correspond. Les majuscules (.PNG) sont acceptées.
 */
export function findPublicFile(cheminSansExtension: string, extensions: readonly string[]) {
  for (const ext of extensions) {
    for (const variante of [ext.toLowerCase(), ext.toUpperCase()]) {
      const chemin = `${cheminSansExtension}.${variante}`;
      if (publicFileExists(chemin)) return chemin;
    }
  }
  return null;
}
