'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Élite Couverture 66 — accueil" onClick={() => setOpen(false)}><Image src="/logo.svg" alt="Élite Couverture 66" width={154} height={68} preload /><span>L’atelier des toitures<span>Pyrénées-Orientales</span></span></Link>
      <nav className="desktop-nav" aria-label="Navigation principale"><Link href="/prestations">Les savoir-faire</Link><Link href="/pictures">En images</Link><Link href="/secteur-intervention">Le territoire</Link></nav>
      <Link className="header-contact" href="/contact">Votre projet <span aria-hidden="true">↗</span></Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(value => !value)}>{open ? 'Fermer −' : 'Menu +'}</button>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navigation mobile" onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
        {[{ href: '/', shortTitle: 'Accueil' }, ...services, { href: '/savoir-faire', shortTitle: 'Notre approche' }, { href: '/pictures', shortTitle: 'En images' }, { href: '/secteur-intervention', shortTitle: 'Le territoire' }, { href: '/guides', shortTitle: 'Les carnets' }, { href: '/contact', shortTitle: 'Demander un devis' }].map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.shortTitle}<span aria-hidden="true">↗</span></Link>)}
      </nav>}
    </header>
  );
}
