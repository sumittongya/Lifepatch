/**
 * LIFE PATCH - Progressive Web App Service Worker
 * Network-First Strategy: Always serves fresh files when connected,
 * seamlessly falls back to offline cache when disconnected.
 */

const CACHE_NAME = 'lifepatch-v4-network-first';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './login.html',
  './favicon.ico',
  './manifest.json',
  './css/design-system.css',
  './css/components.css',
  './css/responsive.css',
  './css/accessibility.css',
  './css/landing.css',
  './js/vendor/lucide.js',
  './js/vendor/chart.js',
  './js/core/icons.js',
  './js/core/i18n.js',
  './js/core/theme.js',
  './js/core/auth.js',
  './js/core/layout.js',
  './js/core/page-help.js',
  './js/db/database.js',
  './js/db/seed-data.js',
  './js/db/api.js',
  './js/modules/ai-summary.js',
  './js/modules/voice.js',
  './js/modules/ocr.js',
  './patient/dashboard.html',
  './patient/voice.html',
  './patient/records.html',
  './patient/symptoms.html',
  './patient/appointments.html',
  './patient/consent.html',
  './patient/emergency.html',
  './patient/profile.html',
  './doctor/dashboard.html',
  './doctor/queue.html',
  './doctor/patient-record.html',
  './doctor/consultation.html',
  './doctor/prescriptions.html',
  './doctor/referrals.html',
  './doctor/patients.html',
  './doctor/followups.html',
  './worker/dashboard.html',
  './worker/vitals.html',
  './worker/assisted-access.html',
  './worker/field-visit.html',
  './worker/patients.html',
  './worker/sync.html',
  './worker/voice.html',
  './shared/accessibility.html',
  './shared/help.html',
  './shared/settings.html'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => console.warn('PWA Pre-cache skipped some assets:', err));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Purging legacy cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-First: Fetch from network first, update cache, fall back to cache only when offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Network failed -> Serve from offline cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
