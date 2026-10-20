import assert from 'node:assert/strict';
import { test } from 'node:test';
import { randomUUID } from 'node:crypto';
import { validateContact } from '../lib/contact/schema';
import { createContactHandler } from '../lib/contact/handler';
import { createRateLimiter } from '../lib/contact/rate-limit';

const payload = () => ({ name: 'Test de validation', email: 'test@example.com', phone: '0612345678', city: 'Perpignan', subject: 'Couverture', message: 'Une demande de test suffisamment détaillée.', website: '', consent: true, startedAt: Date.now() - 5000, submissionId: randomUUID() });
const request = (value: unknown, headers: Record<string, string> = {}) => new Request('https://example.com/api/contact', { method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://example.com', ...headers }, body: JSON.stringify(value) });
const handler = (send = async () => true, configured = true) => createContactHandler({ send, configured: () => configured, allow: createRateLimiter() });

test('accepte les données valides et normalise les espaces', () => {
  const result = validateContact({ ...payload(), name: '  Nom de test  ' });
  assert.equal(result.valid, true);
  if (result.valid) assert.equal(result.data.name, 'Nom de test');
});
test('accepte un e-mail facultatif vide', () => assert.equal(validateContact({ ...payload(), email: '' }).valid, true));
test('rejette les types et structures JSON inattendus', () => {
  for (const value of [null, [], 'test', 42, { ...payload(), phone: {} }, { ...payload(), name: ['test'] }, { ...payload(), message: false }]) assert.equal(validateContact(value).valid, false);
});
test('rejette champs inconnus, injections d’en-tête, adresse invalide et message trop long', () => {
  for (const change of [{ extra: 'inconnu' }, { subject: 'Toiture\r\nBcc: victim@example.com' }, { name: 'Nom\nInjecté' }, { email: 'invalide' }, { phone: 'abcdefghijk' }, { city: '' }, { message: 'x'.repeat(5001) }]) assert.equal(validateContact({ ...payload(), ...change }).valid, false);
});
test('rejette spam, absence de consentement et délais anormaux', () => {
  for (const change of [{ website: 'https://spam.example' }, { consent: false }, { consent: 'true' }, { startedAt: Date.now() }, { startedAt: Date.now() - 8_000_000 }, { startedAt: '123' }, { submissionId: 'not-a-uuid' }]) assert.equal(validateContact({ ...payload(), ...change }).valid, false);
});
test('confirme uniquement après acceptation du fournisseur', async () => {
  let calls = 0;
  const post = handler(async () => { calls++; return true; });
  const response = await post(request(payload()));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(calls, 1);
});
test('ne contacte jamais le fournisseur pour des données invalides', async () => {
  let calls = 0;
  const response = await handler(async () => { calls++; return true; })(request({ ...payload(), email: 'non' }));
  assert.equal(response.status, 400);
  assert.equal(calls, 0);
});
test('retourne une erreur sans fausse confirmation si Resend refuse', async () => {
  const response = await handler(async () => false)(request(payload()));
  assert.equal(response.status, 502);
  assert.equal((await response.json()).success, false);
});
test('gère une exception sans exposer le détail du fournisseur', async () => {
  const response = await handler(async () => { throw new Error('secret-provider-detail'); })(request(payload()));
  assert.equal(response.status, 502);
  assert.ok(!(await response.text()).includes('secret-provider-detail'));
});
test('retourne 503 si Resend n’est pas configuré', async () => assert.equal((await handler(undefined, false)(request(payload()))).status, 503));
test('bloque les origines tierces', async () => assert.equal((await handler()(request(payload(), { origin: 'https://attacker.example' }))).status, 403));
test('accepte le même hôte transmis par le proxy Next.js', async () => {
  const response = await handler()(request(payload(), { host: '127.0.0.1:3100', origin: 'http://127.0.0.1:3100' }));
  assert.equal(response.status, 200);
});
test('bloque les formats et JSON invalides', async () => {
  assert.equal((await handler()(request(payload(), { 'content-type': 'text/plain' }))).status, 415);
  assert.equal((await handler()(new Request('https://example.com/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{invalid' }))).status, 400);
});
test('borne les corps même sans Content-Length', async () => {
  const response = await handler()(request({ ...payload(), message: 'é'.repeat(24_001) }));
  assert.equal(response.status, 413);
});
test('limite les tentatives et expose un délai de reprise', async () => {
  const post = handler();
  for (let index = 0; index < 5; index++) assert.equal((await post(request(payload()))).status, 200);
  const blocked = await post(request(payload()));
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get('retry-after'), '600');
});
test('les fenêtres de limitation expirent et les clés sont isolées', () => {
  const allow = createRateLimiter(1, 1000, 2);
  assert.equal(allow('a', 0), true);
  assert.equal(allow('a', 1), false);
  assert.equal(allow('b', 1), true);
  assert.equal(allow('c', 2), false);
  assert.equal(allow('a', 1001), true);
});
