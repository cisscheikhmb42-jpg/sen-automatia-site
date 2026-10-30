import { Suspense } from "react";
import { PageHero, Section } from "@/components/ui/Section";
import { AuditForm } from "@/components/forms/AuditForm";
import { ClockIcon, MailIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact et audit gratuit",
  "Demandez votre audit digital ou IA gratuit, ou écrivez-nous sur WhatsApp. Sen AutomatIA vous répond rapidement, à Dakar et partout au Sénégal.",
  "/contact",
);

export default function Contact() {
  return (
    <>
      <PageHero
        surtitre="Contact"
        titre={<>Demandez votre <span className="texte-degrade">audit gratuit</span></>}
        texte="Remplissez le formulaire : nous vous recontactons sur WhatsApp sous 24 h ouvrées pour planifier votre audit. Gratuit et sans engagement."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Suspense fallback={<div className="min-h-[40rem] rounded-3xl border border-encre/10 bg-white" />}>
            <AuditForm whatsappHref={whatsappLink()} />
          </Suspense>

          <aside className="space-y-5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl bg-whatsapp p-6 text-white transition hover:brightness-105"
            >
              <WhatsAppIcon className="h-10 w-10 flex-none" />
              <span>
                <span className="block text-sm font-medium text-white/85">Le plus rapide : WhatsApp</span>
                <span className="block font-titre text-xl font-bold">{site.whatsapp.affichage}</span>
              </span>
            </a>

            <div className="space-y-4 rounded-3xl border border-encre/10 bg-white p-6">
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-bleu">
                <MailIcon className="mt-0.5 h-5 w-5 flex-none text-bleu" />
                <span>
                  <span className="block text-sm text-encre/55">E-mail</span>
                  <span className="break-all font-medium">{site.email}</span>
                </span>
              </a>
              <p className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 flex-none text-bleu" />
                <span>
                  <span className="block text-sm text-encre/55">Localisation</span>
                  <span className="font-medium">{site.ville}</span>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 flex-none text-bleu" />
                <span>
                  <span className="block text-sm text-encre/55">Disponibilité</span>
                  <span className="font-medium">{site.horaires}</span>
                </span>
              </p>
            </div>

            <div className="rounded-3xl bg-nuit p-6 text-white">
              <h2 className="font-titre text-lg font-bold">Ce que comprend l&apos;audit</h2>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>• Analyse de votre présence en ligne</li>
                <li>• 3 tâches à automatiser avec l&apos;IA</li>
                <li>• Estimation du temps gagné</li>
                <li>• Recommandations et prix, sans engagement</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
