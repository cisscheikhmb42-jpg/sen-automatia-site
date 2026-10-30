# Sen AutomatIA – site web

Site de l'agence **Sen AutomatIA** (marketing digital et solutions IA au Sénégal).
Next.js 15 (App Router) + Tailwind CSS 4, déployable sur Vercel.

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Numéro WhatsApp, e-mail, ville, horaires, réseaux sociaux, infos légales | `src/config/site.ts` |
| Offres et prix du pôle Marketing digital | `src/data/marketing.ts` |
| Offres et prix du pôle Solutions IA | `src/data/ia.ts` |
| Offre combinée SEN 360 | `src/data/sen360.ts` |
| Conditions (offre de lancement, acompte, engagement…) | `src/data/regles.ts` |
| Réalisations | `src/data/realisations.ts` |
| Texte de présentation du fondateur | `src/app/a-propos/page.tsx` |
| Couleurs et polices | `src/app/globals.css` (bloc `@theme`) |

## Images

- **Logos** → `public/logo/` (format `.svg`, `.png`, `.webp` ou `.jpg`) :
  `logo-sen-automatia-transparent` (en-tête),
  `logo-sen-automatia-fond-sombre` (pied de page),
  `logo-sen-automatia-fond-clair`,
  `symbole-sen-automatia.png` (favicon).
  Tant qu'un logo manque, le nom « Sen AutomatIA » s'affiche en texte.
- **Photo du fondateur** → `public/images/cheikh-mbacke-cisse.jpg` (ou `.png`, `.webp`).
  Le nom du fichier doit être exactement `cheikh-mbacke-cisse`.
  Tant qu'elle manque, un cadre provisoire s'affiche sur la page À propos.

Les images sont détectées au moment de la construction du site : après en avoir
ajouté une, relancez `npm run build` (ou poussez sur GitHub pour redéployer sur Vercel).

## Installation locale

```bash
npm install
cp .env.example .env.local   # puis remplir les valeurs
npm run dev                  # http://localhost:3000
```

## Variables d'environnement

Aucune clé secrète n'est écrite dans le code. Renseignez-les dans `.env.local`
(en local) et dans **Vercel → Project → Settings → Environment Variables**.

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Adresse du site (ex. `https://senautomatia.com`), utilisée pour le sitemap |
| `SUPABASE_URL` | URL du projet Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé *service_role* Supabase : **secrète**, utilisée uniquement côté serveur |
| `NEXT_PUBLIC_META_PIXEL_ID` | Identifiant Meta Pixel (vide = désactivé) |
| `NEXT_PUBLIC_GA_ID` | Identifiant Google Analytics `G-XXXXXXX` (vide = désactivé) |

## Supabase (formulaire d'audit)

1. Créez un projet sur supabase.com.
2. Dans **SQL Editor**, collez le contenu de `supabase/schema.sql` et exécutez-le.
3. Dans **Project Settings → API**, copiez l'URL du projet et la clé `service_role`
   dans les variables `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY`.
4. Les demandes apparaissent dans **Table Editor → demandes_audit**.

La table est protégée (RLS activé, aucune politique publique) : les visiteurs ne
peuvent ni lire ni écrire directement, seul le serveur du site peut insérer.
Un champ invisible bloque les robots.

## Déploiement sur Vercel

1. Poussez ce dossier sur un dépôt GitHub.
2. Sur vercel.com : **Add New → Project**, importez le dépôt (framework détecté : Next.js).
3. Ajoutez les variables d'environnement ci-dessus, puis **Deploy**.
4. Ajoutez votre nom de domaine dans **Settings → Domains**.

## V2 : assistant IA de démonstration

L'emplacement est prévu dans `src/components/demo/AiDemoSlot.tsx` (affiché sur
l'Accueil et la page Solutions IA). En V2, remplacer l'aperçu statique par un chat
qui appelle une route API côté serveur, avec la clé du fournisseur IA en variable
d'environnement.
