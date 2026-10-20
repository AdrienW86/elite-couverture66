import Link from "next/link";
import { pageMetadata, site } from "@/lib/site";
export const metadata = pageMetadata(
  "Reconnaître les signes d’une infiltration de toiture",
  "Traces au plafond, humidité sous toiture et tuiles déplacées : quels indices relever et quelles informations transmettre à un couvreur ?",
  "/guides/reperer-infiltration",
);
export default function Guide() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Reconnaître les signes d’une infiltration de toiture",
    datePublished: "2026-10-20",
    dateModified: "2026-10-20",
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": `${site.url}/#entreprise` },
    mainEntityOfPage: `${site.url}/guides/reperer-infiltration`,
  };
  return (
    <main id="contenu" className="editorial-page">
      <nav className="breadcrumbs" aria-label="Fil d’Ariane">
        <Link href="/">Accueil</Link>
        <span>/</span>
        <Link href="/guides">Les carnets</Link>
        <span>/ Infiltrations</span>
      </nav>
      <span className="eyebrow mt-8">
        Carnet n° 01 / Observer · 20 octobre 2026
      </span>
      <h1>
        Quand l’eau
        <br />
        <em>laisse une trace.</em>
      </h1>
      <p className="lead">
        Une auréole au plafond ou une odeur d’humidité mérite d’être signalée.
        Le point où l’eau devient visible peut être éloigné du défaut de
        couverture : quelques observations aident à préparer la recherche.
      </p>
      <h2>Observer depuis un endroit sûr</h2>
      <p>
        Notez les pièces touchées, l’apparition des traces et leur évolution.
        L’eau peut circuler avant de devenir visible ; une tache ne permet donc
        pas de désigner à elle seule la tuile ou le raccord en cause.
      </p>
      <p>
        Restez au sol ou dans des espaces normalement accessibles. Ne montez pas
        sur la toiture et n’accédez pas à des combles dont le plancher ou la
        sécurité sont incertains.
      </p>
      <h2>Relever les changements visibles</h2>
      <p>
        Des traces nouvelles après la pluie, une zone humide ou des tuiles
        déplacées aperçues depuis le sol sont des informations utiles. Les
        raccords autour des cheminées, des murs et des ouvertures font partie
        des zones à examiner par un professionnel.
      </p>
      <h2>Préparer votre échange</h2>
      <ul>
        <li>
          Indiquez la date d’apparition et les conditions météo observées.
        </li>
        <li>
          Précisez l’âge approximatif du toit et les interventions récentes.
        </li>
        <li>Décrivez les traces et prenez des photos depuis un endroit sûr.</li>
        <li>
          Signalez les travaux ou équipements présents près de la zone
          concernée.
        </li>
      </ul>
      <h2>Distinguer observation et diagnostic</h2>
      <p>
        L’humidité peut avoir plusieurs origines. Le diagnostic de couverture
        sert à localiser le défaut et à choisir une réparation adaptée. Un
        nettoyage ou un traitement de surface ne suffit pas à corriger un
        élément cassé ou un raccord défectueux.
      </p>
      <h2>Pour approfondir</h2>
      <p>
        L’
        <a
          className="underline"
          href="https://qualiteconstruction.com/ressource/fiches-pathologie-batiment/infiltrations-couvertures-tuile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agence Qualité Construction
        </a>{" "}
        présente les désordres possibles des couvertures en tuiles et de leurs
        points singuliers. Pour les démarches après un dégât des eaux, consultez{" "}
        <a
          className="underline"
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1352"
          target="_blank"
          rel="noopener noreferrer"
        >
          Service Public
        </a>{" "}
        et les conditions de votre contrat d’assurance.
      </p>
      <div className="page-cta">
        <h2>Une trace à faire examiner ?</h2>
        <Link className="text-link" href="/contact">
          Nous décrire la situation ↗
        </Link>
      </div>
      <nav className="service-links" aria-label="À lire aussi">
        <Link href="/toiture">Réparation de toiture ↗</Link>
        <Link href="/zinguerie">Raccords et zinguerie ↗</Link>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
