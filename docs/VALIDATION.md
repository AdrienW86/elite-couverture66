# Validation finale — 20 octobre 2026

| Contrôle | Résultat |
| --- | --- |
| `npx tsc --noEmit` | Réussi, zéro erreur |
| `npm run lint` | Réussi, zéro erreur et zéro avertissement |
| `npm test` | 20 tests réussis |
| `npm run build` | Compilation de production réussie, App Router |
| `npm run test:e2e` | 18 tests réussis, ordinateur et mobile |
| `npm audit --omit=dev` | Zéro vulnérabilité signalée |

Les parcours navigateur couvrent toutes les pages publiques, les métadonnées canoniques, l’absence de débordement, la navigation mobile, les liens du groupe, la galerie au clavier, les formulaires et leurs erreurs, la confirmation simulée, les trois événements Analytics sans coordonnées, le consentement, Speed Insights, les images et les préférences de mouvement réduit.

Le SDK Resend est vérifié avec un transport HTTP simulé : destinataire officiel, coordonnées préservées dans le courrier, réponse fournisseur et clé d’idempotence. Aucun e-mail réel n’a été envoyé. Le test réel en l’absence de configuration renvoie bien 503 et conserve les champs du formulaire. L’utilisateur ajoutera `RESEND_API_KEY` et `RESEND_FROM` puis vérifiera la réception effective.

Deux comportements ont été corrigés grâce aux parcours navigateur : le contrôle d’origine avec l’hôte transmis par le proxy Next.js, et la protection de la première saisie avant que React Hook Form soit prêt.

Captures de contrôle : [ordinateur](home-desktop.png) et [mobile](home-mobile.png).

Limites documentées dans [MIGRATION.md](MIGRATION.md) : limitation des envois par instance à compléter par le WAF si nécessaire, activation des mesures réelles dans Vercel, dépréciation de React 18 pour Next 17 et alertes transitives de l’outillage de développement. Aucune régression n’a été détectée dans les parcours testés ; ces tests ne remplacent pas la vérification de délivrabilité après configuration Resend.
