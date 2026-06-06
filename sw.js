const CACHE_NAME = 'shitagram-arena-v21-1';
const ASSETS = ['./arena.html','./manifest.json','./icon-192.png','./icon-512.png','./livekit-config.js'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => null));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => null); return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./arena.html'))));
});
