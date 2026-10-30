import { WhatsAppButton } from "@/components/ui/Button";
import { SparkIcon } from "@/components/ui/icons";

/**
 * Emplacement réservé pour l'assistant IA de démonstration (V2).
 * En V2 : remplacer le bloc "aperçu" par le composant de chat réel
 * (appel à une route API côté serveur, clé IA en variable d'environnement).
 */
export function AiDemoSlot() {
  return (
    <div id="demo-ia" className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-cyan/15 px-3 py-1 text-sm font-semibold text-cyan">
          <SparkIcon className="h-4 w-4" /> Bientôt : démo en direct
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Testez bientôt notre <span className="texte-degrade">vendeur IA</span> ici même
        </h2>
        <p className="mt-4 text-lg text-white/75">
          Posez une question comme le ferait un client : prix, livraison, disponibilité… et voyez
          comment l&apos;IA répond, puis passe la main à un humain quand il le faut. En attendant,
          demandez-nous une démonstration sur WhatsApp.
        </p>
        <WhatsAppButton
          className="mt-7"
          message="Bonjour Sen AutomatIA, j'aimerais voir une démonstration du Vendeur IA WhatsApp."
        >
          Demander une démo
        </WhatsAppButton>
      </div>

      {/* Aperçu statique de la future démo */}
      <div aria-hidden="true" className="mx-auto w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
          <div className="bg-degrade flex h-10 w-10 items-center justify-center rounded-full">
            <SparkIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold">Vendeur IA</p>
            <p className="text-xs text-whatsapp">en ligne</p>
          </div>
        </div>
        <div className="space-y-3 py-4 text-sm">
          <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-whatsapp/90 px-4 py-2 text-white">
            Bonjour, la robe en wax rouge est dispo en taille M ?
          </p>
          <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-white/10 px-4 py-2">
            Bonjour ! Oui, elle est disponible en M à 15 000 FCFA. Livraison à Dakar en 24 h. Je vous
            envoie le lien de paiement Wave ?
          </p>
          <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-whatsapp/90 px-4 py-2 text-white">
            Oui merci 🙏
          </p>
        </div>
        <div className="rounded-full bg-white/10 px-4 py-2.5 text-sm text-white/40">Écrire un message…</div>
      </div>
    </div>
  );
}
