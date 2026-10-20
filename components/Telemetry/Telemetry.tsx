'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const storageKey = 'ec66-consent-v1';
type Consent = 'unknown' | 'refused' | 'audience' | 'all';
const subscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);
  window.addEventListener('ec66-consent', callback);
  return () => { window.removeEventListener('storage', callback); window.removeEventListener('ec66-consent', callback); };
};
function snapshot(): Consent {
  try { const value = localStorage.getItem(storageKey); return value === 'refused' || value === 'audience' || value === 'all' ? value : 'unknown'; } catch { return 'unknown'; }
}
function setConsent(value: Consent) {
  try { localStorage.setItem(storageKey, value); } catch { /* Le refus de stockage conserve les mesures désactivées. */ }
  window.dispatchEvent(new Event('ec66-consent'));
  if (value === 'refused') window.location.reload();
}
export function ConsentSettings() {
  return <div className="consent-settings"><p>Vous pouvez modifier votre choix à tout moment.</p><button onClick={() => setConsent('refused')}>Tout refuser</button><button onClick={() => setConsent('audience')}>Autoriser les mesures d’audience</button><button onClick={() => setConsent('all')}>Autoriser aussi Google Ads</button></div>;
}
export default function Telemetry() {
  const consent = useSyncExternalStore(subscribe, snapshot, () => 'unknown' as const);
  const enabled = consent === 'audience' || consent === 'all';
  useEffect(() => {
    if (!enabled) return;
    const click = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest('a') : null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      if (href.startsWith('tel:')) trackEvent('clic_telephone');
      else if (href === '/contact' || href === '#devis') trackEvent('clic_devis');
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, [enabled]);
  return <>
    {enabled && <><Analytics beforeSend={event => ({ ...event, url: event.url.split(/[?#]/)[0] })} /><SpeedInsights beforeSend={event => ({ ...event, url: event.url.split(/[?#]/)[0] })} /></>}
    {consent === 'all' && <><Script src="https://www.googletagmanager.com/gtag/js?id=AW-17288293802" strategy="afterInteractive" /><Script id="google-ads-config" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-17288293802');`}</Script></>}
    {consent === 'unknown' && <section className="consent-panel" aria-label="Préférences de confidentialité"><strong>Votre visite, votre choix.</strong><p>Avec votre accord, Vercel mesure l’audience et les performances. Google Ads reste désactivé sauf choix explicite dans les préférences.</p><div className="consent-actions"><button onClick={() => setConsent('audience')}>Accepter les mesures</button><button onClick={() => setConsent('refused')}>Refuser</button><Link href="/confidentialite">Préférences</Link></div></section>}
  </>;
}
