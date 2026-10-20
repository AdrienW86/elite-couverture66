import Link from 'next/link';
import Image from 'next/image';
import { services, site } from '@/lib/site';
import { serviceContent, type ServicePath } from '@/lib/service-content';

export default function ServicePage({ path }: { path: ServicePath }) {
  const content = serviceContent[path];
  const service = services.find(item => item.href === path);
  if (!service) throw new Error('Prestation non configurée');
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: service.title, description: content.description, url: `${site.url}${path}`, provider: { '@id': `${site.url}/#entreprise` }, areaServed: { '@type': 'AdministrativeArea', name: 'Pyrénées-Orientales' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Prestations', item: `${site.url}/prestations` }, { '@type': 'ListItem', position: 3, name: service.title, item: `${site.url}${path}` }] },
  ] };
  return <main id="contenu" className="editorial-page"><nav className="breadcrumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><Link href="/prestations">Prestations</Link><span>/ {service.shortTitle}</span></nav><span className="eyebrow mt-8">{service.title} · Pyrénées-Orientales</span><h1>{content.title}</h1><p className="lead">{content.intro}</p><Image src={service.image} alt={service.title} width={1200} height={650} sizes="(max-width: 760px) 100vw, 85vw" preload style={{ width: '100%', height: 'clamp(220px, 40vw, 530px)', objectFit: 'cover', marginTop: 30 }} />{content.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{'points' in section && section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}<section className="faq"><h2>Vos questions, simplement.</h2>{content.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section><div className="page-cta"><span className="eyebrow">Étudions votre projet</span><h2>Votre toiture, à Perpignan et dans le 66.</h2><p>Précisez votre commune et les signes observés pour préparer notre échange.</p><Link className="text-link" href="/contact">Demander un devis ↗</Link></div><nav className="service-links" aria-label="Pour poursuivre">{services.filter(item => item.href !== path).map(item => <Link key={item.href} href={item.href}>{item.shortTitle} ↗</Link>)}<Link href="/guides/reperer-infiltration">Repérer une infiltration ↗</Link><Link href="/secteur-intervention">Secteur d’intervention ↗</Link></nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /></main>;
}
