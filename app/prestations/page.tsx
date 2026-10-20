import Link from "next/link";
import { pageMetadata, services } from "@/lib/site";

export const metadata = pageMetadata(
  "Nos prestations de couverture dans le 66",
  "Couverture, zinguerie, nettoyage, traitement et isolation : découvrez les prestations Élite Couverture 66 à Perpignan et dans les Pyrénées-Orientales.",
  "/prestations",
);
export default function Prestations() {
  return (
    <main id="contenu" className="editorial-page">
      <span className="eyebrow">Les savoir-faire</span>
      <h1>
        Prendre soin
        <br />
        <em>de toute la toiture.</em>
      </h1>
      <p className="lead">
        Une couverture se compose d’éléments qui travaillent ensemble. Découvrez
        les interventions proposées, puis échangeons sur les besoins de votre
        maison.
      </p>
      <div className="service-list mt-12">
        {services.map((service, index) => (
          <Link key={service.href} href={service.href}>
            <span className="service-number">0{index + 1}</span>
            <h2 style={{ fontSize: "2rem", margin: 0 }}>{service.title}</h2>
            <p>{service.description}</p>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
