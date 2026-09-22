/**
 * LIFE PATCH - SVG Icon System (Powered by Lucide)
 * Provides crisp vector icons with zero external network calls.
 */

export function renderIcons(root = document) {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons({
      root: root,
      attrs: {
        'stroke-width': 2,
        class: 'lucide-icon'
      }
    });
  }
}

/**
 * Returns an inline SVG or data-lucide placeholder string for template literals.
 * @param {string} name - Lucide icon name (kebab-case, e.g. 'heart-pulse', 'shield-check', 'user')
 * @param {string} extraClass - Additional CSS classes
 * @param {number} size - Optional pixel size
 */
export function icon(name, extraClass = '', size = 18) {
  return `<i data-lucide="${name}" class="icon-inline ${extraClass}" style="width:${size}px; height:${size}px; display:inline-flex; align-items:center; justify-content:center; vertical-align:middle;"></i>`;
}
