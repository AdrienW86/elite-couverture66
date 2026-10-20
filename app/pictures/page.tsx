import Gallery from "@/components/Gallery/Gallery";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Regards sur la toiture — galerie",
  "Découvrez les gestes, matériaux et détails des travaux de couverture dans la galerie Élite Couverture 66.",
  "/pictures",
);
export default function Pictures() {
  return (
    <main id="contenu" className="editorial-page">
      <span className="eyebrow">Regards sur la toiture</span>
      <h1>
        Le geste.
        <br />
        <em>La matière. Le détail.</em>
      </h1>
      <p>
        Sélection des photographies déjà présentes sur le site. Elles illustrent
        la couverture et son entretien. Les références et lieux de ces chantiers
        ne sont pas documentés ; cette galerie ne leur attribue aucune
        localisation.
      </p>
      <Gallery />
      <div className="page-cta">
        <h2>Un projet à nous confier ?</h2>
        <Link className="text-link" href="/contact">
          Parlons de votre toiture ↗
        </Link>
      </div>
    </main>
  );
}
