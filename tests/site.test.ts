import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { services, publicPaths, site } from '../lib/site';
import { serviceContent, type ServicePath } from '../lib/service-content';
import { communes } from '../lib/communes';

test('chaque prestation possède un contenu et un chemin public uniques', () => {
  assert.equal(new Set(publicPaths).size, publicPaths.length);
  for (const service of services) {
    assert.ok(publicPaths.includes(service.href));
    assert.ok(serviceContent[service.href as ServicePath].intro.length > 100);
    assert.ok(serviceContent[service.href as ServicePath].sections.length >= 3);
  }
  assert.equal(site.email, 'contact@elicouverture66.fr');
});
test('annuaire officiel cohérent sans création automatique de pages locales', () => {
  assert.equal(new Set(communes.map(commune => commune.code)).size, communes.length);
  assert.ok(communes.length > 200);
  assert.ok(communes.every(commune => commune.code.startsWith('66')));
  assert.ok(communes.some(commune => commune.nom === 'Perpignan'));
  assert.ok(!publicPaths.some(path => path.startsWith('/villes/')));
});
test('tous les fichiers applicatifs sont TypeScript strict sans échappatoire', () => {
  const config = JSON.parse(readFileSync('tsconfig.json', 'utf8'));
  assert.equal(config.compilerOptions.strict, true);
  assert.equal(config.compilerOptions.allowJs, false);
  function inspect(directory: string) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) inspect(path);
      else {
        assert.ok(!/\.(js|jsx)$/.test(path), path);
        if (/\.tsx?$/.test(path)) assert.ok(!/\bany\b|@ts-ignore|@ts-nocheck|ignoreBuildErrors/.test(readFileSync(path, 'utf8')), path);
      }
    }
  }
  for (const directory of ['app', 'components', 'lib']) inspect(directory);
});
