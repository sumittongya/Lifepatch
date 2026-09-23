#!/usr/bin/env node
/**
 * LIFE PATCH — i18n coverage checker
 * -----------------------------------
 * Scans every HTML file for data-i18n / data-i18n-html keys and verifies
 * each key has a non-empty row for every supported language in
 * js/core/labels.js.
 *
 * Usage:  npm run i18n:check        (exits 1 on any gap)
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const { LABELS } = await import(join(ROOT, 'js/core/labels.js'));
const { SUPPORTED_LANGS } = await import(join(ROOT, 'js/core/i18n.js')).catch(() => ({ SUPPORTED_LANGS: ['en', 'hi', 'te'] }));

// Keys resolved dynamically by applyLanguage() (time-of-day greeting etc.)
const DYNAMIC_KEYS = new Set(['timeGreeting', 'goodMorning']);

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) {
      if (!['node_modules', '.git', 'dist'].includes(f)) walk(p, out);
    } else if (f.endsWith('.html')) out.push(p);
  }
  return out;
}

const re = /data-i18n(?:-html)?="([^"]+)"/g;
const used = new Map();
for (const f of walk(ROOT)) {
  const src = readFileSync(f, 'utf8');
  let m;
  while ((m = re.exec(src))) {
    if (!used.has(m[1])) used.set(m[1], []);
    used.get(m[1]).push(f.replace(ROOT + '/', ''));
  }
}

let errors = 0;
for (const [key, files] of [...used.entries()].sort()) {
  if (DYNAMIC_KEYS.has(key)) continue;
  const row = LABELS[key];
  if (!row) {
    console.log(`MISSING ROW     ${key}  <- ${[...new Set(files)].join(', ')}`);
    errors++;
    continue;
  }
  for (const lang of SUPPORTED_LANGS) {
    if (!row[lang]) {
      console.log(`MISSING [${lang}]    ${key}  <- ${[...new Set(files)].join(', ')}`);
      errors++;
    }
  }
}

// Warn about orphan rows that no page references (dead weight, not an error)
const orphans = Object.keys(LABELS).filter(k => !used.has(k) && !DYNAMIC_KEYS.has(k));

console.log(`\n${used.size} keys referenced in HTML • ${Object.keys(LABELS).length} rows in labels.js`);
console.log(`Languages: ${SUPPORTED_LANGS.join(', ')}`);
if (orphans.length) console.log(`Info: ${orphans.length} rows not referenced by any data-i18n attr (JS-driven or unused): ${orphans.slice(0, 12).join(', ')}${orphans.length > 12 ? ' …' : ''}`);
if (errors) { console.log(`\n❌ ${errors} missing translation entries`); process.exit(1); }
console.log('\n✅ All referenced labels are translated in every supported language.');
