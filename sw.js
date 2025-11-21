const CACHE_NAME = 'schengen-tracker-v3';
const ASSETS = [
    './',
    './index.html',
    './icon.png',
    './manifest.json'
    // ❌ Removed CDN URLs - they should be fetched dynamically, not precached
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
            .catch((error) => console.error('Cache installation failed:', error))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) return response;

                return fetch(event.request).catch((error) => {
                    // Only return index.html for navigation requests (HTML pages)
                    // Don't serve HTML for CSS, JS, images, etc. (wrong MIME type)
                    if (event.request.mode === 'navigate' ||
                        event.request.destination === 'document' ||
                        (event.request.method === 'GET' && event.request.headers.get('accept')?.includes('text/html'))) {
                        return caches.match('./index.html');
                    }
                    // For non-navigation requests, reject so browser handles it properly
                    return Promise.reject(error);
                });
            })
    );
});
