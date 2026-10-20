import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Notre approche de la toiture",
  "Observer la couverture, comprendre le bâtiment et définir des travaux adaptés : découvrez l’approche Élite Couverture 66 dans les Pyrénées-Orientales.",
  "/savoir-faire",
);
export default function Approche() {
  return (
    <main id="contenu" className="editorial-page">
      <span className="eyebrow">L’atelier / Notre approche</span>
      <h1>
        Le soin de l’existant.
        <br />
        <em>Le sens du détail.</em>
      </h1>
      <p className="lead">
        Une toiture protège une maison, mais participe aussi à son architecture.
        Notre approche consiste à comprendre ce qui est en place avant de
        définir ce qui doit être réparé, entretenu ou remplacé.
      </p>
      <Image
        src="/image2.avif"
        alt="Pose attentive d’éléments de couverture"
        width={1200}
        height={650}
        preload
        sizes="(max-width: 760px) 100vw, 85vw"
        style={{
          width: "100%",
          height: "clamp(250px, 40vw, 550px)",
          objectFit: "cover",
          marginTop: 35,
        }}
      />
      <section>
        <h2>01 — Échanger sur votre maison</h2>
        <p>
          Votre demande, l’histoire récente des travaux et les signes observés
          sont le point de départ. Précisez le type de bâtiment, son accès, la
          commune et les désordres éventuels pour préparer un premier échange
          utile.
        </p>
      </section>
      <section>
        <h2>02 — Observer l’ensemble</h2>
        <p>
          Couverture, raccords, évacuations et espace sous toiture sont liés.
          L’examen permet de distinguer les problèmes d’entretien des
          réparations nécessaires et d’envisager un périmètre cohérent.
        </p>
      </section>
      <section>
        <h2>03 — Définir les travaux</h2>
        <p>
          Le devis décrit les interventions retenues, les matériaux et les
          conditions de réalisation. Une réparation ponctuelle, une réfection et
          un entretien ne répondent pas aux mêmes besoins.
        </p>
      </section>
      <section>
        <h2>04 — Porter attention aux finitions</h2>
        <p>
          Les rives, les raccords et les évacuations participent autant à la
          protection qu’à la lecture du bâtiment. Les choix se font avec le
          souci de l’architecture existante et des contraintes du chantier.
        </p>
      </section>
      <div className="page-cta">
        <h2>Commençons par votre projet.</h2>
        <Link className="text-link" href="/contact">
          Échanger avec l’atelier ↗
        </Link>
      </div>
    </main>
  );
}
