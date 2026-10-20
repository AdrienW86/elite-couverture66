import Link from 'next/link';
import Form from '@/components/Form/Form';
import Map from '@/components/Map/Map';
import { pageMetadata, site } from '@/lib/site';

export const metadata = pageMetadata('Parlons de votre toiture', 'Contactez Élite Couverture 66 pour une réparation, une rénovation ou un entretien dans les Pyrénées-Orientales. Demande de devis en ligne ou par téléphone.', '/contact');
export default function Contact() {
  return <main id="contenu" className="editorial-page"><nav className="breadcrumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/ Contact</span></nav><span className="eyebrow mt-8">Votre projet commence ici</span><h1>Une maison.<br /><em>Un projet à étudier.</em></h1><p className="lead">Décrivez l’état de votre toiture, les travaux envisagés et la commune du chantier. Ces premiers éléments nous aideront à préparer notre échange.</p><div className="contact-page-grid"><div className="contact-details"><a href={`tel:${site.phone}`}>{site.phoneLabel} ↗</a><a href={`mailto:${site.email}`}>{site.email} ↗</a><p>Interventions à Perpignan et dans les Pyrénées-Orientales, selon la nature du projet et les disponibilités.</p><Map /></div><Form /></div></main>;
}
