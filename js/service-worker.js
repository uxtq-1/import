/* ==================================================================
       Service Worker for Caching (Optional)
       ================================================================== */
const CACHE_NAME = 'ops-solutions-cache-v1';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/about.html',
  '/business-operations.html',
  '/contact-center.html',
  '/it-support.html',
  '/professionals.html',
  '/landing-page.html',
  '/css/global.css',
  '/css/small-screens.css',
  '/js/main.js',
  '/js/particles-config.js',
  '/manifest.json',
  '/assets/images/hero-image.jpg',
  '/assets/images/icon-192x192.png',
  '/assets/images/icon-512x512.png',
  '/assets/favicon.ico'
];

/* ==================================================================
       Install Event: Cache Defined URLs
       ================================================================== */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_URLS))
  );
});

/* ==================================================================
       Activate Event: Clean Up Old Caches
       ================================================================== */
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

/* ==================================================================
       Fetch Event: Serve Cached Content if Available
       ================================================================== */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
  );
});
