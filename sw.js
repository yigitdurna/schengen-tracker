const CACHE_NAME = 'visa-days-v5';
const ASSETS = [
    './',
    './index.html',
    './icon.png',
    './manifest.json',
    './vendor/flatpickr.min.js',
    './vendor/flatpickr.min.css',
    './vendor/fonts.css',
    './vendor/fonts/crimson-pro.woff2',
    './vendor/fonts/dm-sans.woff2'
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
