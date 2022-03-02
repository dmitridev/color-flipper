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
                '/images/favicon-512x512.png',
                '/offline.html'
            ])
        )
    )
}
);

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(event.request))
    } else {
        event.respondWith(fetch(event.request))
    }
}
);

self.addEventListener('activate', event => {
    console.log('[SW] : activate');
})

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}

async function networkFirst(request) {
    const cache = await caches.open('v2');
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (e) {
        const cached = await cache.match(request)
        return cached ?? await caches.match('/offline.html')
    }
}