import type { Metadata } from "next";
import { site } from "@/config/site";

/** Métadonnées SEO d'une page (titre, description, partage réseaux sociaux) */
export function pageMetadata(titre: string, description: string, chemin: string): Metadata {
  return {
    title: titre,
    description,
    alternates: { canonical: chemin },
    openGraph: {
      title: `${titre} | ${site.nom}`,
      description,
      url: chemin,
      siteName: site.nom,
      locale: "fr_SN",
      type: "website",
    },
  };
}
