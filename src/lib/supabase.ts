import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase côté serveur uniquement.
 * Les clés viennent des variables d'environnement (jamais du code).
 * Renvoie null si Supabase n'est pas encore configuré.
 */
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
