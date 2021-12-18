
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('note').then(function(cache) {
        return cache.addAll([
          '/notes-page/',
          '/notes-page/index.html',
          '/notes-page/index.html?homescreen=1',
          '/notes-page/?homescreen=1',
          '/notes-page/style.css',
          '/notes-page/main.js',
          'https://fonts.googleapis.com/css?family=DM+Sans'
        ]);
      })
    );
   });

   self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
        );
   });
  
