import { track } from '@vercel/analytics';

export type AnalyticsEvent = 'clic_telephone' | 'clic_devis' | 'devis_envoye';
export function trackEvent(event: AnalyticsEvent): void {
  try {
    const consent = localStorage.getItem('ec66-consent-v1');
    if (consent === 'audience' || consent === 'all') track(event);
  } catch { /* Une mesure ne doit jamais interrompre une prise de contact. */ }
}
