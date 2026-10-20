# Migration TypeScript — audit et validation

## État initial

- Branche : `master`, dépôt propre au démarrage.
- Next.js déclaré `^16.1.6`, React et React DOM `^18.2.0`, npm et package-lock.
- 37 fichiers applicatifs JavaScript/JSX : 12 pages/layout/404, une route contact, composants et données de prestations.
- App Router existant, feuilles CSS Modules, images locales AVIF et logos conservés.
- Formulaire react-hook-form, API Nodemailer/Zoho ; SendGrid inutilisé.
- Framer Motion et Intersection Observer pour le header et le bandeau ; galerie avec agrandissement.
- Pas de TypeScript, pas de configuration ESLint ; `next lint` supprimé dans Next.js 16.
- `next/head`, attributs historiques de next/image et chargements Google Fonts redondants à moderniser.
- Sitemap initial vers `www.elitecouverture44.fr` : domaine incorrect.

## Compatibilité

Next.js 16.4.2 reste dans la majeure existante. Ses peer dependencies acceptent React 18.3.1 : pas de passage à React 19. TypeScript 5.9.3 et types React 18 correspondent à cette pile. Les API synchrones de paramètres dynamiques ne sont pas utilisées dans l'existant. ESLint passe sur la CLI autonome.

Référence : https://nextjs.org/docs/app/guides/upgrading/version-16

## Périmètre préservé

URL : `/`, `/toiture`, `/zinguerie`, `/nettoyage`, `/anti-mousse`, `/isolation`, `/savoir-faire`, `/pictures`, `/contact`, `/mentions-legales`, `/confidentialite`, `/api/contact`.

Parcours sensibles : navigation mobile, galerie agrandie, formulaire et erreurs réseau, envoi email, métadonnées, images, mentions légales.

## Informations à confirmer avant publication

Les mentions légales existantes identifient Pierreuse Klenn (SIREN 798 282 695), tandis que le brief cite Grégory José Roblès (834 799 751). La migration conserve les mentions existantes ; aucun changement d'entité juridique n'est supposé.

Le projet Vercel existant contient les variables Zoho mais aucune variable Resend au démarrage. L'expéditeur Resend doit appartenir à un domaine vérifié. La réception effective et les métriques Analytics/Speed Insights nécessitent une vérification sur un déploiement configuré.
