import { site } from "@/config/site";

/** Construit un lien wa.me vers le numéro défini dans src/config/site.ts */
export function whatsappLink(message: string = site.whatsapp.messageParDefaut) {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(message)}`;
}
