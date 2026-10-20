import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Page introuvable', robots: { index: false, follow: true } };
export default function NotFound() {
  return <main id="contenu" className="editorial-page"><span className="eyebrow">Erreur 404</span><h1>Cette page<br /><em>n’est plus ici.</em></h1><p>Retrouvez les prestations de l’atelier ou contactez-nous pour votre projet.</p><nav className="service-links" aria-label="Retrouver une page"><Link href="/">Retour à l’accueil ↗</Link><Link href="/prestations">Nos prestations ↗</Link><Link href="/contact">Nous contacter ↗</Link></nav></main>;
}
