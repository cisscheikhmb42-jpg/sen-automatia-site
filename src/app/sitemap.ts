import type { MetadataRoute } from "next";
import { navigation, site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...navigation.map((n) => n.href), "/mentions-legales"];
  return pages.map((chemin) => ({
    url: `${site.url}${chemin === "/" ? "" : chemin}`,
    lastModified: new Date(),
    changeFrequency: chemin === "/" || chemin === "/offres-et-tarifs" ? "weekly" : "monthly",
    priority: chemin === "/" ? 1 : chemin === "/mentions-legales" ? 0.3 : 0.8,
  }));
}
