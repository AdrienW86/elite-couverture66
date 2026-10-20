import Image from 'next/image';
import Link from 'next/link';
import { services, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-intro"><span className="eyebrow">Chaque toiture mérite de l’attention.</span><Link href="/contact">Donnons une suite<br />à votre projet. <span aria-hidden="true">↗</span></Link></div>
      <div className="footer-columns">
        <div><Image src="/logo.svg" alt="Élite Couverture 66" width={170} height={90} /><p>Couverture, rénovation et entretien<br />dans les Pyrénées-Orientales.</p><a href={`tel:${site.phone}`}>{site.phoneLabel}</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
        <nav aria-label="Prestations"><span className="eyebrow">Les savoir-faire</span>{services.map(service => <Link key={service.href} href={service.href}>{service.shortTitle}</Link>)}</nav>
        <nav aria-label="Découvrir l’atelier"><span className="eyebrow">L’atelier</span><Link href="/savoir-faire">Notre approche</Link><Link href="/pictures">En images</Link><Link href="/secteur-intervention">Secteur d’intervention</Link><Link href="/guides">Les carnets de toiture</Link><Link href="/contact">Demander un devis</Link></nav>
      </div>
      <div className="footer-group"><p>Élite Couverture 66 fait partie du groupe <a href="https://solution-habitation.fr" target="_blank" rel="noopener noreferrer">Solution Habitation ↗</a></p><p>Site créé par <a href="https://code-v.fr" target="_blank" rel="noopener noreferrer">CODE-V ↗</a></p></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Élite Couverture 66</span><Link href="/mentions-legales">Mentions légales</Link><Link href="/confidentialite">Confidentialité & préférences</Link></div>
    </footer>
  );
}
