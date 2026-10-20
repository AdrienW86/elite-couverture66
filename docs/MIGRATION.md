# Migration TypeScript — audit et validation

## État initial

- Branche : `master`, dépôt propre au démarrage.
- Next.js déclaré `^16.1.6`, React et React DOM `^18.2.0`, npm et package-lock.
- 37 fichiers applicatifs JavaScript/JSX : 13 fichiers de pages/layout/404, une route contact, composants et données de prestations.
- App Router existant, feuilles CSS Modules, images locales AVIF et logos conservés.
- Formulaire react-hook-form, API Nodemailer/Zoho ; SendGrid inutilisé.
- Framer Motion et Intersection Observer pour le header et le bandeau ; galerie avec agrandissement.
- Pas de TypeScript, pas de configuration ESLint ; `next lint` supprimé dans Next.js 16.
- `next/head`, attributs historiques de next/image et chargements Google Fonts redondants à moderniser.
- Sitemap initial vers `www.elitecouverture44.fr` : domaine incorrect.

## Compatibilité

Next.js 16.4.2 reste dans la majeure existante. Ses peer dependencies acceptent React 18.3.1 : pas de passage à React 19. TypeScript 5.9.3 et types React 18 correspondent à cette pile. Les API synchrones de paramètres dynamiques ne sont pas utilisées dans l'existant. ESLint passe sur la CLI autonome.

React Hook Form passe de 7.55.0 à 7.90.0, compatible avec React 18. Son indicateur `formState.isReady` protège la saisie avant que l’initialisation du formulaire soit terminée, y compris après une navigation client. Le formulaire est également verrouillé pendant l’envoi.

Référence : https://nextjs.org/docs/app/guides/upgrading/version-16

## Périmètre préservé

URL : `/`, `/toiture`, `/zinguerie`, `/nettoyage`, `/anti-mousse`, `/isolation`, `/savoir-faire`, `/pictures`, `/contact`, `/mentions-legales`, `/confidentialite`, `/api/contact`.

Parcours sensibles : navigation mobile, galerie agrandie, formulaire et erreurs réseau, envoi email, métadonnées, images, mentions légales.

## Identité juridique et configuration

L’utilisateur a confirmé que l’exploitant est Grégory Roblès. Les mentions ont été mises à jour après vérification via l’API officielle Recherche d’entreprises : Grégory José Roblès, SIREN 834 799 751, SIRET 834 799 751 00013, 88 Cami de Las Carretas, 66380 Pia, APE 43.91B. Aucun assureur, numéro de décennale, label, ancienneté ou avis n’a été ajouté.

L’utilisateur configure lui-même Resend. Les deux variables serveur à compléter sont `RESEND_API_KEY` et `RESEND_FROM` (adresse seule, domaine vérifié). Le destinataire est fixé côté serveur à `contact@elicouverture66.fr`. Sans configuration, l’API répond 503 ; aucune fausse confirmation n’est affichée. Aucun courrier réel n’a été envoyé pendant les validations.

## Architecture livrée

- Application entièrement TypeScript, `strict: true`, `allowJs: false` ; aucun `any`, commentaire de désactivation TypeScript ou contournement du build.
- Les fichiers `.mjs` restants sont les configurations ESLint et PostCSS, exécutées directement par leurs outils.
- `lib/site.ts` : identité, catalogue de prestations et métadonnées réutilisables.
- `lib/service-content.ts` : contenus métier et FAQ typés, rendus par un composant serveur commun.
- `lib/contact/` : schéma de validation à partir de `unknown`, lecture bornée des requêtes, contrôle d’origine, limitation et réponses typées.
- `components/Form/` : formulaires accessibles, champs conservés en cas d’erreur, protection contre les doubles soumissions, clé d’idempotence réutilisée en cas de reprise.
- `components/Telemetry/` et `lib/analytics.ts` : Analytics, Speed Insights, événements `clic_telephone`, `clic_devis`, `devis_envoye`, sans coordonnées ni texte libre. Google Ads est conservé et conditionné à un choix distinct.
- Pages serveur pour les contenus ; seules les interactions nécessitent du JavaScript client. Framer Motion, Intersection Observer, SendGrid, Nodemailer et next-sitemap retirés.
- Polices Cormorant Garamond et Manrope auto-hébergées par `next/font`. Photos via `next/image` ; formats adaptés et dimensions réservées. Réduction des animations selon les préférences système.
- Sitemap et robots générés par les conventions TypeScript de l’App Router. Canonicals et Open Graph sur le domaine effectivement relié au projet Vercel : `www.elitecouverture66.fr`.

## Direction artistique et images

« L’atelier des toitures » : ivoire minéral, charbon, terre cuite, bronze et sauge ; typographie éditoriale, chapitres numérotés, compositions asymétriques et séparateurs fins. Logo officiel existant conservé.

La vue d’ouverture de Castelnou provient de BlueBreezeWiki / Wikimedia Commons, sous CC BY-SA 3.0. Crédit et licence sont accessibles sur la page ; les droits sont détaillés dans `public/PHOTO-LICENSE.md`. Elle est explicitement présentée comme photographie d’ambiance. Les images préexistantes sont conservées sans leur attribuer des chantiers ou lieux non documentés.

## Pages SEO

Les cinq prestations conservent leurs URL : `/toiture`, `/zinguerie`, `/nettoyage`, `/anti-mousse`, `/isolation`. Elles disposent de contenu propre, FAQ visible, liens contextuels et données structurées Service et BreadcrumbList. L’entreprise est décrite par RoofingContractor, sans note ni certification inventée. Le carnet utilise Article ; aucun balisage FAQPage n’est ajouté.

Nouvelles pages : `/prestations`, `/secteur-intervention`, `/guides`, `/guides/reperer-infiltration`. Les anciennes URL de navigation restent accessibles.

Les 226 communes sont importées dans `data/communes-66.json` depuis l’API Géo officielle le 20 octobre 2026. Aucune page ville ou prestation/ville n’est publiée : ces pages nécessitent un contenu éditorial spécifique avant d’entrer dans le sitemap. Le catalogue n’engage pas une disponibilité dans chaque commune.

## Vérification et limites

Les commandes reproductibles sont détaillées dans `README.md`. Les tests serveur couvrent la validation, les refus, les limites de taille, les origines, les fenêtres de limitation et le transport Resend simulé. Les tests navigateur couvrent les pages et canoniques, l’absence de débordement, la navigation mobile, le clavier et le retour de focus de la galerie, les erreurs réelles de configuration, la confirmation simulée, le consentement et les événements Analytics sans données personnelles.

La limitation en mémoire est bornée à cinq tentatives par dix minutes et par clé **dans chaque instance**. Pour une limite globale entre plusieurs instances Vercel, ajouter une règle WAF sur `POST /api/contact` : cette limitation distribuée n’est pas configurée par le code.

La réception réelle des courriers sera à vérifier après la configuration Resend par l’utilisateur. Les statistiques réelles de visite et de performance nécessitent l’activation des produits dans Vercel et du trafic ayant consenti ; aucune valeur de Core Web Vitals en production n’est revendiquée.

La validation finale comprend 20 tests serveur et transport, ainsi que 18 scénarios navigateur (neuf parcours déclinés sur ordinateur et mobile). Les captures réelles de la page d’accueil sont `docs/home-desktop.png` et `docs/home-mobile.png`. L’acceptation, le refus et le retrait du consentement sont vérifiés ; un changement de choix recharge la page pour retirer aussi les scripts publicitaires déjà chargés.

L’audit des dépendances de production ne signale aucune vulnérabilité. L’outillage ESLint/Next présente cinq alertes transitives de développement autour de `braces`, sans correctif compatible proposé par npm au moment de l’audit. Aucun `audit fix --force` ni rétrogradation majeure de Next n’a été appliqué. ESLint 9 reste nécessaire aux peer dependencies des plugins livrés avec eslint-config-next 16.4.2. React 18 est encore accepté par cette version de Next ; le build signale sa dépréciation pour Next 17. Son passage à React 19 relève d’une migration majeure distincte.
