import { Button, WhatsAppButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-nuit px-4 py-20 text-center text-white">
      <div className="mx-auto max-w-xl">
        <p className="font-titre text-7xl font-extrabold texte-degrade">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page introuvable</h1>
        <p className="mt-3 text-white/70">
          Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil ou écrivez-nous.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Retour à l&apos;accueil</Button>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
