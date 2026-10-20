import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Telemetry from '@/components/Telemetry/Telemetry';
import { site } from '@/lib/site';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], display: 'swap', variable: '--font-editorial' });
const body = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Élite Couverture 66 — L’atelier des toitures', template: '%s | Élite Couverture 66' },
  description: 'Couverture, rénovation, zinguerie et entretien de toiture dans les Pyrénées-Orientales.',
  icons: { icon: '/favicon.png' }, robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#292b27' };

export default function RootLayout({ children }: { children: ReactNode }) {
  const business = { '@context': 'https://schema.org', '@type': 'RoofingContractor', '@id': `${site.url}/#entreprise`, name: site.name, url: site.url, telephone: site.phone, email: site.email, areaServed: { '@type': 'AdministrativeArea', name: 'Pyrénées-Orientales' }, image: `${site.url}/logo.svg` };
  return (
    <html lang="fr" className={`${editorial.variable} ${body.variable}`}>
      <body><a className="skip-link" href="#contenu">Aller au contenu</a><Header />{children}<Footer /><Telemetry /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, '\\u003c') }} /></body>
    </html>
  );
}
