/**
 * LIFE PATCH - Multilingual Localization System
 * Complete enterprise translation coverage for English (en), Hindi (hi), and Telugu (te).
 */

import { getSetting, setSetting } from '../db/api.js';
import { renderIcons } from './icons.js';
import { LABELS } from './labels.js';

// Supported UI locales — add a new language by (1) adding a column per
// row in labels.js and (2) listing its code here + in the .lang-select
// dropdowns rendered by layout.js.
export const SUPPORTED_LANGS = ['en', 'hi', 'te'];
let currentLang = 'en';

export async function initI18n() {
  const savedLang = await getSetting('language', 'en');
  currentLang = SUPPORTED_LANGS.includes(savedLang) ? savedLang : 'en';
  applyLanguage(currentLang);
}

export function t(key) {
  const row = LABELS[key];
  if (!row) return key;
  return row[currentLang] || row.en || key;
}

export async function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  await setSetting('language', lang);
  applyLanguage(lang);
}

export function getLanguage() {
  return currentLang;
}

export function getTimeGreetingKey() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'goodMorning';
  if (hour >= 12 && hour < 17) return 'goodAfternoon';
  return 'goodEvening';
}

export function getTimeGreeting() {
  return t(getTimeGreetingKey());
}

export function applyLanguage(lang) {
  document.documentElement.lang = lang;

  // Apply Regional Typography enhancements
  if (lang === 'hi' || lang === 'te') {
    document.body.classList.add('lang-indic');
  } else {
    document.body.classList.remove('lang-indic');
  }

  // Translate all elements with data-i18n attribute (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    let key = el.getAttribute('data-i18n');
    if (key === 'timeGreeting' || key === 'goodMorning') {
      key = getTimeGreetingKey();
    }
    const translation = t(key);
    if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
      el.value = translation;
    } else if (el.placeholder !== undefined && el.getAttribute('data-i18n-attr') === 'placeholder') {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });

  // Translate elements with data-i18n-html (preserves inner tags or formatting)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // Update language switcher dropdowns across all elements
  document.querySelectorAll('.lang-select').forEach(sel => {
    sel.value = lang;
  });

  // Re-render any icons inside translated elements
  renderIcons();
}
