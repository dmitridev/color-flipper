self.addEventListener('install', (event) =>
    event.waitUntil(
        caches.open('v2').then((cache) =>
            cache.addAll([
                './images/',
                'app.css',
                'index.html',
                'app.js'
            ])
        )
    )
);