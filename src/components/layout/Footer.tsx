import Link from "next/link";
import { navigation, site } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { MailIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { whatsappLink } from "@/lib/whatsapp";

const reseauxLabels: Record<keyof typeof site.reseaux, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
};

export function Footer() {
  const reseaux = (Object.keys(site.reseaux) as (keyof typeof site.reseaux)[]).filter(
    (k) => site.reseaux[k],
  );

  return (
    <footer className="bg-nuit px-4 pb-28 pt-14 text-white sm:px-6 sm:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variante="fondSombre" className="h-11 w-auto" />
          <p className="mt-4 font-titre text-lg font-semibold texte-degrade">{site.slogan}</p>
          <p className="mt-3 max-w-sm text-white/65">
            Marketing digital et solutions d&apos;intelligence artificielle pour les PME et les
            boutiques en ligne au Sénégal.
          </p>
        </div>

        <nav aria-label="Pages du site">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50">Le site</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
            {navigation.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50">Contact</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white">
                <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
                {site.whatsapp.affichage}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-white">
                <MailIcon className="h-5 w-5 flex-none text-cyan" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PinIcon className="h-5 w-5 text-cyan" />
              {site.ville}
            </li>
          </ul>
          {reseaux.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-3">
              {reseaux.map((k) => (
                <li key={k}>
                  <a href={site.reseaux[k]} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10">
                    {reseauxLabels[k]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.nom}. Tous droits réservés.
        </p>
        <Link href="/mentions-legales" className="hover:text-white">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
