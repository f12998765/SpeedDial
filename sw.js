const cacheName = 'GO-PWA-20180731';
const CacheFile = [
    '/',
    '/manifest.json',
    '/favicon.ico',
    '/logo.png',
    '/js/run.js',
    '/js/url.js',
    '/css/style.css',
    '/img/so.svg',
    '/theme/light/css/style.css',
    '/theme/light/img/theme_w.svg',
    '/theme/light/img/github_w.svg',
    '/theme/night/css/style.css',
    '/theme/night/img/theme_b.svg',
    '/theme/night/img/github_b.svg',
    '/theme/nyan/css/style.css',
    '/theme/nyan/img/github_nyan.gif',
    '/theme/nyan/img/theme_nyan.png',
];


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(CacheFile);
    })
  );
});


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
    e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request).catch(error => {
          console.log('[ServiceWorker] Fetch' ,error);
        })
      })
    )});
