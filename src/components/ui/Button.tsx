import Link from "next/link";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";

type Variante = "degrade" | "contour" | "contourClair" | "whatsapp";

const styles: Record<Variante, string> = {
  degrade:
    "bg-degrade text-white shadow-lg shadow-violet/25 hover:shadow-xl hover:shadow-bleu/30 hover:brightness-110",
  contour: "border-2 border-encre/15 bg-white text-encre hover:border-bleu hover:text-bleu",
  contourClair: "border-2 border-white/25 text-white hover:border-white hover:bg-white/10",
  whatsapp: "bg-whatsapp text-white shadow-lg shadow-whatsapp/25 hover:brightness-105",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition";

type Props = {
  href: string;
  children: ReactNode;
  variante?: Variante;
  className?: string;
};

export function Button({ href, children, variante = "degrade", className = "" }: Props) {
  const externe = href.startsWith("http");
  return (
    <Link
      href={href}
      className={`${base} ${styles[variante]} ${className}`}
      {...(externe ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}

/** Bouton WhatsApp : utilise toujours le numéro de src/config/site.ts */
export function WhatsAppButton({
  message,
  children = "Écrire sur WhatsApp",
  variante = "whatsapp",
  className = "",
}: {
  message?: string;
  children?: ReactNode;
  variante?: Variante;
  className?: string;
}) {
  return (
    <Button href={whatsappLink(message)} variante={variante} className={className}>
      <WhatsAppIcon />
      {children}
    </Button>
  );
}
