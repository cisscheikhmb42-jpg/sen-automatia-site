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
