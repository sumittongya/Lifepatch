/**
 * LIFE PATCH - Theme & Accessibility State Manager
 */

import { getSetting, setSetting } from '../db/api.js';
import { renderIcons } from './icons.js';

export async function initTheme() {
  const theme = await getSetting('theme', 'light');
  const textSize = await getSetting('textSize', 'normal');
  const contrast = await getSetting('contrast', 'normal');
  const reduceMotion = await getSetting('reduceMotion', false);

  applyTheme(theme);
  applyTextSize(textSize);
  applyContrast(contrast);
  applyReduceMotion(reduceMotion);
}

export async function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  await setSetting('theme', newTheme);
  applyTheme(newTheme);
  return newTheme;
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeButtons = document.querySelectorAll('.theme-toggle-btn');
  themeButtons.forEach(btn => {
    // Only SVG icon, no text at all
    if (theme === 'dark') {
      btn.innerHTML = '<i data-lucide="sun" style="width: 18px; height: 18px; color: #FBBF24;"></i>';
      btn.setAttribute('title', 'Switch to Light Mode');
      btn.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      btn.innerHTML = '<i data-lucide="moon" style="width: 18px; height: 18px; color: #475569;"></i>';
      btn.setAttribute('title', 'Switch to Dark Mode');
      btn.setAttribute('aria-label', 'Switch to Dark Mode');
    }
    renderIcons(btn);
  });
}

export function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

export async function setTheme(theme) {
  await setSetting('theme', theme);
  applyTheme(theme);
}

export async function setTextSize(size) {
  await setSetting('textSize', size);
  applyTextSize(size);
}

export function applyTextSize(size) {
  document.documentElement.setAttribute('data-text-size', size);
}

export async function setContrast(mode) {
  await setSetting('contrast', mode);
  applyContrast(mode);
}

export function applyContrast(mode) {
  document.documentElement.setAttribute('data-contrast', mode);
}

export async function setReduceMotion(enabled) {
  await setSetting('reduceMotion', enabled);
  applyReduceMotion(enabled);
}

export function applyReduceMotion(enabled) {
  document.documentElement.setAttribute('data-reduce-motion', enabled ? 'true' : 'false');
}
