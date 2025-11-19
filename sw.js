const CACHE_NAME = 'schengen-tracker-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './logic.js',
    './icon.png',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css',
    'https://cdn.jsdelivr.net/npm/flatpickr'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
