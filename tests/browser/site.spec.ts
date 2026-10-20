import { test, expect, type Page } from '@playwright/test';
import { publicPaths } from '../../lib/site';

async function fillForm(page: Page) {
  await page.getByLabel('Votre nom').fill('Validation technique');
  await page.getByLabel('Téléphone *', { exact: true }).fill('0612345678');
  await page.getByLabel('Commune *', { exact: true }).fill('Perpignan');
  await page.getByLabel('Votre besoin *').selectOption({ index: 1 });
  await page.getByLabel('Votre message *').fill('Test du parcours de formulaire, sans envoi réel.');
  await page.getByLabel('J’accepte que mes coordonnées').check();
  await page.waitForTimeout(2100);
}

test('les pages publiques sont accessibles, canoniques et sans débordement', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const path of publicPaths) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    await expect(page.locator('h1'), path).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]'), path).toHaveAttribute('href', `https://www.elitecouverture66.fr${path === '/' ? '' : path}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), path).toBe(true);
    await expect(page.locator('#contenu'), path).toBeAttached();
  }
  expect(errors).toEqual([]);
});
test('navigation mobile et liens du groupe', async ({ page, isMobile }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  if (isMobile) {
    await page.getByRole('button', { name: 'Menu +' }).click();
    await expect(page.getByRole('navigation', { name: 'Navigation mobile' })).toBeVisible();
    await page.getByRole('navigation', { name: 'Navigation mobile' }).getByRole('link', { name: 'Zinguerie' }).click();
  } else await page.getByRole('navigation', { name: 'Prestations', exact: true }).getByRole('link', { name: 'Zinguerie' }).click();
  await expect(page).toHaveURL('/zinguerie');
  await expect(page.getByRole('link', { name: 'Solution Habitation ↗' })).toHaveAttribute('rel', 'noopener noreferrer');
  await expect(page.getByRole('link', { name: 'CODE-V ↗' })).toHaveAttribute('href', 'https://code-v.fr');
});
test('la galerie se manipule au clavier et rend le focus', async ({ page }) => {
  await page.goto('/pictures');
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  const open = page.getByRole('button', { name: 'Agrandir : Pose de tuiles en terre cuite' });
  await open.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(open).toBeFocused();
});
test('le formulaire conserve les champs lors d’une erreur serveur réelle', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  await fillForm(page);
  const responsePromise = page.waitForResponse(response => response.url().endsWith('/api/contact'));
  await page.getByRole('button', { name: 'Envoyer ma demande' }).click();
  expect((await responsePromise).status()).toBe(503);
  await expect(page.getByRole('form', { name: 'Demande de devis' }).getByRole('alert')).toContainText('momentanément indisponible');
  await expect(page.getByLabel('Votre nom')).toHaveValue('Validation technique');
  await expect(page.getByText('Votre demande a été transmise.')).not.toBeVisible();
});
test('confirmation et protection des doubles clics après acceptation simulée', async ({ page }) => {
  // Test de l’interface uniquement : aucun courrier réel n’est envoyé.
  let requests = 0;
  await page.route('**/api/contact', async route => { requests++; await new Promise(resolve => setTimeout(resolve, 300)); await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) }); });
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  await fillForm(page);
  await page.getByRole('button', { name: 'Envoyer ma demande' }).click();
  await expect(page.getByRole('status')).toContainText('Votre demande a été transmise.');
  expect(requests).toBe(1);
  await page.getByRole('button', { name: 'Faire une nouvelle demande' }).click();
  await expect(page.getByLabel('Votre nom')).toHaveValue('');
});
test('les scripts tiers sont absents avant consentement', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.locator('script[src*="googletagmanager"]')).toHaveCount(0);
  await expect(page.locator('script[src*="insights"]')).toHaveCount(0);
  await expect(page.locator('iframe')).toHaveCount(0);
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  await expect(page.locator('script[src*="googletagmanager"]')).toHaveCount(0);
  await expect(page.locator('script[src*="insights"]')).toHaveCount(0);
});
test('404 et SEO technique', async ({ page, request }) => {
  expect((await page.goto('/page-absente-pour-verification'))?.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute('content', /noindex/);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain('https://www.elitecouverture66.fr/toiture');
  expect(await sitemap.text()).not.toContain('elitecouverture44');
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Disallow: /api/');
});
