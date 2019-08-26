//I followed along the course from Udacity and the tutorial from https://www.youtube.com/watch?v=ksXwaWHCW6k&list=WL&index=2&t=742s

var cacheName = 'v1';
let urlsToCache = [
    '/',
    'index.html',
    'restaurant.html',
    'css/styles.css',
    'data/restaurants.json',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'js/controller.js',
    'js/dbhelper.js',
    'js/main.js',
];

self.addEventListener('install', function(event) {
    // body...
    console.log('Service Worker installed 2');
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});


self.addEventListener('activate', function(event) {
    console.log("Service Worker activated");
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(cache) {
                if (cache !== cacheName) {
                    console.log("Service worker cleared old cache ");
                    return caches.delete(cache);
                }

            }))
        })
    );

});


//retrieve code from https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith

self.addEventListener('fetch', function(event) {

    // Prevent the default, and handle the request ourselves.
    event.respondWith(async function() {
        // Try to get the response from a cache.
        const cachedResponse = await caches.match(event.request);
        // Return it if we found one.
        if (cachedResponse) return cachedResponse;
        // If we didn't find a match in the cache, use the network.
        return fetch(event.request).then(function(res) {
            // Make a copy of the response from the server
            var resClone = res.clone();
            // Open cache
            caches.open(cacheName)
                .then(function(cache) {
                    console.log('hi cache opened ' + event.request);
                    cache.put(event.request, resClone);

                });
            return res;
        });
    }());

});