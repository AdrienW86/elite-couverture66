import type { Metadata } from "next";

export const site = {
  name: "Élite Couverture 66",
  url: "https://www.elitecouverture66.fr",
  email: "contact@elicouverture66.fr",
  phone: "+33759311239",
  phoneLabel: "07 59 31 12 39",
} as const;
export interface Service {
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
}
export const services: readonly Service[] = [
  {
    href: "/toiture",
    title: "Couverture & rénovation",
    shortTitle: "Travaux de toiture",
    description:
      "Réparer, remplacer ou repenser une couverture. Partir de l’existant pour définir la bonne intervention.",
    image: "/image2.avif",
  },
  {
    href: "/zinguerie",
    title: "Zinguerie & finitions",
    shortTitle: "Zinguerie",
    description:
      "Gouttières, raccords et évacuation des eaux : porter attention aux détails qui protègent l’ensemble.",
    image: "/image5.avif",
  },
  {
    href: "/nettoyage",
    title: "Entretien de toiture",
    shortTitle: "Nettoyage",
    description:
      "Observer l’état des tuiles et choisir un nettoyage adapté à la couverture et à sa fragilité.",
    image: "/image9.avif",
  },
  {
    href: "/anti-mousse",
    title: "Traitement & protection",
    shortTitle: "Traitement anti-mousse",
    description:
      "Traiter les mousses et les lichens après examen du support, sans masquer les défauts de la toiture.",
    image: "/image16.avif",
  },
  {
    href: "/isolation",
    title: "Isolation des combles",
    shortTitle: "Isolation",
    description:
      "Étudier l’espace sous toiture, sa ventilation et l’isolant pour améliorer le confort de la maison.",
    image: "/image7.avif",
  },
];
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "fr_FR",
      type: "website",
      siteName: site.name,
      images: [
        {
          url: "/castelnou.jpg",
          width: 2400,
          height: 1350,
          alt: "Castelnou — BlueBreezeWiki / Wikimedia Commons, CC BY-SA 3.0",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/castelnou.jpg"],
    },
  };
}
export const publicPaths = [
  "/",
  ...services.map((service) => service.href),
  "/prestations",
  "/savoir-faire",
  "/pictures",
  "/contact",
  "/secteur-intervention",
  "/guides",
  "/guides/reperer-infiltration",
  "/mentions-legales",
  "/confidentialite",
] as const;
