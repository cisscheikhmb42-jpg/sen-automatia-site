import { site } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Écrire sur WhatsApp au ${site.whatsapp.affichage}`}
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 transition hover:scale-105 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-25 [animation-duration:2.5s]" />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
