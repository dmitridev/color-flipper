self.addEventListener('install', (event) => {
    //если в кзше уже есть такие вещи то тогда не загружать
    event.waitUntil(
        caches.open('v2').then((cache) =>
            cache.addAll([
                'app.css',
                'index.html',
                'app.js',
                '/images/favicon.png',
                '/images/favicon-32x32.png',
                '/images/favicon-192x192.png',
                '/images/favicon-512x512.png'
            ])
        )
    )
}
);

self.addEventListener('fetch', event => {
    console.log('fetch: ', event.request.url);
    event.respondWith(cacheFirst(event.request))
}
);

self.addEventListener('activate', event => {
    console.log('[SW] : activate');
})

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}