import Link from "next/link";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Les carnets de toiture",
  "Des repères utiles pour comprendre votre toiture, observer les signes d’infiltration et préparer un échange avec un couvreur.",
  "/guides",
);
export default function Guides() {
  return (
    <main id="contenu" className="editorial-page">
      <span className="eyebrow">Les carnets de l’atelier</span>
      <h1>
        Mieux comprendre.
        <br />
        <em>Mieux entretenir.</em>
      </h1>
      <p className="lead">
        Des repères pour observer votre maison, comprendre les travaux de
        couverture et préparer les bonnes questions.
      </p>
      <div className="guide-list mt-12">
        <Link href="/guides/reperer-infiltration">
          <span className="eyebrow">Carnet n° 01 / Observer</span>
          <h2>Reconnaître les signes d’une infiltration.</h2>
          <p>
            Les indices à relever depuis un endroit sûr et les informations
            utiles à transmettre au couvreur.
          </p>
          <span className="text-link">Lire le carnet ↗</span>
        </Link>
      </div>
    </main>
  );
}
