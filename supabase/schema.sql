-- Table des demandes d'audit gratuit envoyées depuis le site.
-- À exécuter une fois dans Supabase : SQL Editor > New query > Run.

create table if not exists public.demandes_audit (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  nom          text not null check (char_length(nom) between 2 and 120),
  entreprise   text not null check (char_length(entreprise) between 1 and 160),
  whatsapp     text not null check (char_length(whatsapp) between 8 and 20),
  type_client  text not null check (type_client in ('pme', 'boutique')),
  interet      text not null check (interet in ('marketing', 'ia', 'les_deux')),
  besoin       text not null check (char_length(besoin) between 5 and 2000),
  page_origine text,
  statut       text not null default 'nouveau'
               check (statut in ('nouveau', 'contacte', 'audit_fait', 'client', 'sans_suite'))
);

create index if not exists demandes_audit_created_at_idx
  on public.demandes_audit (created_at desc);

-- Sécurité : RLS activé et AUCUNE politique publique.
-- Les visiteurs ne peuvent ni lire ni écrire directement dans la table ;
-- seul le serveur du site (clé service_role, jamais envoyée au navigateur)
-- peut y insérer des lignes.
alter table public.demandes_audit enable row level security;
