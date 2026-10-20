import Link from "next/link";
import { communes, communeSource } from "@/lib/communes";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Notre secteur : les Pyrénées-Orientales",
  "Un projet de couverture à Perpignan ou dans les Pyrénées-Orientales ? Consultez notre secteur et indiquez votre commune pour étudier une intervention.",
  "/secteur-intervention",
);
export default function Secteur() {
  return (
    <main id="contenu" className="editorial-page">
      <span className="eyebrow">Le territoire / 66</span>
      <h1>
        Des maisons.
        <br />
        <em>Un territoire à respecter.</em>
      </h1>
      <p className="lead">
        Élite Couverture 66 étudie les demandes à Perpignan et dans les
        Pyrénées-Orientales. La possibilité d’intervention se confirme selon
        votre commune, l’accès au bâtiment, les travaux et les disponibilités.
      </p>
      <h2>Un projet qui dépend de son environnement</h2>
      <p>
        Pour une maison proche du littoral, signalez l’exposition et l’état des
        fixations ou des évacuations. Sur un bâtiment ancien, les raccords avec
        les murs et les éléments conservés méritent une attention particulière.
        En secteur de montagne ou sur une parcelle difficile d’accès, précisez
        les conditions d’approche du chantier.
      </p>
      <p>
        Ces indications préparent l’échange ; la solution technique se définit
        après examen du bâtiment. La présence d’une commune dans l’annuaire
        ci-dessous ne constitue pas un engagement de disponibilité.
      </p>
      <div className="page-cta">
        <h2>Votre commune, votre besoin.</h2>
        <Link className="text-link" href="/contact">
          Nous décrire le projet ↗
        </Link>
      </div>
      <h2>L’annuaire des communes du 66</h2>
      <p>
        Liste officielle de {communes.length} communes, extraite de l’
        <a
          className="underline"
          href={communeSource}
          target="_blank"
          rel="noopener noreferrer"
        >
          API Géo ↗
        </a>{" "}
        le 20 octobre 2026. Les codes affichés sont les codes INSEE.
      </p>
      <details>
        <summary>Consulter la liste des communes</summary>
        <ul className="columns-1 sm:columns-2 lg:columns-3 text-sm">
          {communes.map((commune) => (
            <li key={commune.code}>
              {commune.nom} <span className="opacity-60">({commune.code})</span>
            </li>
          ))}
        </ul>
      </details>
      <nav className="service-links" aria-label="Préparer vos travaux">
        <Link href="/prestations">Les prestations ↗</Link>
        <Link href="/guides">Les carnets de toiture ↗</Link>
      </nav>
    </main>
  );
}
