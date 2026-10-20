# Élite Couverture 66 — L’atelier des toitures

Site Next.js App Router, TypeScript strict, React, Tailwind et CSS Modules. Branche de travail : `master`.

## Installation et développement

Node.js 22.13 ou ultérieur, npm et le lockfile versionné :

```sh
npm ci
npm run dev
```

## Configuration des formulaires

Copier `.env.example` vers `.env.local`, puis compléter uniquement côté serveur :

```dotenv
RESEND_API_KEY=
RESEND_FROM=
```

`RESEND_FROM` attend une adresse e-mail seule appartenant à un domaine vérifié dans Resend, sans nom d’affichage ni chevrons. Sur Vercel, ajouter ces deux variables à l’environnement souhaité puis redéployer. Ne jamais utiliser de préfixe `NEXT_PUBLIC_` pour ces valeurs.

Le destinataire est `contact@elicouverture66.fr`, fixé dans `lib/site.ts`. Le formulaire conserve nom, téléphone, e-mail facultatif, commune, prestation et message. Il ne confirme l’envoi qu’après acceptation par Resend. Sans configuration, l’API renvoie une erreur 503 et les champs sont conservés. La configuration et le test de réception réelle sont laissés à l’utilisateur à sa demande.

Protections : validation client et serveur, honeypot, contrôle d’origine compatible avec le proxy Next.js, corps borné à 24 Ko, longueurs limitées, contrôle des caractères d’en-tête, délai de remplissage, limitation par instance, verrou de soumission et clé d’idempotence Resend. Compléter la limitation par une règle WAF Vercel sur `POST /api/contact` pour un contrôle partagé entre instances.

## Validation

```sh
npx tsc --noEmit
npm run lint
npm test
npm run build
npm run test:e2e
npm audit --omit=dev
```

Les tests navigateur démarrent le serveur de production sur `127.0.0.1:3100` et utilisent Chromium en formats ordinateur et mobile. Le build doit exister. Si Chromium n’est pas installé : `npx playwright install chromium`. Le serveur de test démarre sans configuration Resend ; les tests de confirmation et de transport utilisent des réponses simulées explicites et n’envoient aucun courrier. Un serveur déjà présent sur ce port est réutilisé hors CI et doit utiliser cette même configuration de test.

## Organisation

- `app/` : pages serveur, layout, Metadata API, sitemap, robots, API contact.
- `components/` : composants partagés et interactions client isolées.
- `lib/site.ts` : identité, catalogue et configuration SEO.
- `lib/service-content.ts` : contenus des prestations avec types métier.
- `lib/contact/` : validation et traitement sécurisé des demandes.
- `data/communes-66.json` : annuaire officiel ; aucune page locale générée automatiquement.
- `tests/` : tests serveur, transport Resend simulé et parcours navigateur.

Analytics et Speed Insights sont conditionnés à l’accord de l’utilisateur. Les événements ne contiennent aucune coordonnée ni contenu de formulaire. Google Ads est conservé avec un accord publicitaire distinct. Les préférences se modifient sur `/confidentialite`. Les produits Analytics et Speed Insights doivent être activés dans le projet Vercel pour recevoir les mesures réelles.

L’audit initial, les choix de migration et les limites connues figurent dans [docs/MIGRATION.md](docs/MIGRATION.md). Les crédits de la photographie patrimoniale figurent dans [public/PHOTO-LICENSE.md](public/PHOTO-LICENSE.md).
