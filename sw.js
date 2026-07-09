// SAGE PWA — pass-through service worker (required for install prompt).
// Only intercepts same-origin requests so cross-origin (Google sign-in, CSP reports)
self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(event) {
  if (!event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(fetch(event.request));
});
