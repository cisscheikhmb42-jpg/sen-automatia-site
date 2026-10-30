import { Button, WhatsAppButton } from "@/components/ui/Button";

export function CtaBand({
  titre = "Prêt à attirer plus de clients ?",
  texte = "Commencez par un audit gratuit : en 30 minutes, nous identifions vos meilleures opportunités en marketing digital et en IA.",
}: {
  titre?: string;
  texte?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="bg-degrade relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.25),transparent_50%)]" />
        <div className="relative">
          <h2 className="text-3xl font-bold sm:text-4xl">{titre}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{texte}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variante="contour" className="!border-white !bg-white !text-encre hover:!text-violet">
              Demander mon audit gratuit
            </Button>
            <WhatsAppButton variante="contourClair" />
          </div>
        </div>
      </div>
    </section>
  );
}
