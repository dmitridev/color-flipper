self.addEventListener('install', (event) =>
    event.waitUntil(
        caches.open('v2').then((cache) =>
            cache.addAll([
                './app.css',
                './index.html',
                './app.js'
            ])
        )
    )
);

self.addEventListener('fetch', () => console.log("fetch event"));