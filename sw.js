const CACHE_NAME = 'lifepatch-v2';
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
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => console.warn('PWA Cache install skipped some assets:', err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
