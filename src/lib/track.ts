/** Envoie un événement de conversion à Meta Pixel et Google Analytics s'ils sont actifs. */
export function trackLead(details: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  };
  w.fbq?.("track", "Lead", details);
  w.gtag?.("event", "generate_lead", details);
}
