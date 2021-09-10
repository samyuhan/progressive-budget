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
  