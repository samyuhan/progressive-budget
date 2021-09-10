// event listener for install
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('static').then( cache => {
        return cache.addAll([
          './',
          './index.html',
          './index.js',
          './manifest.webmanifest',
          './dbOffline.js',
          './styles.css'
        ]);
      })
    );
    self.skipWaiting();
  });
  
  // event listener for fetch to get from cache
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then( response => {
        return response || fetch(event.request);
      })
    );
  });