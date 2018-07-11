var CACHE_NAME = "gih-cache-v6";
var CACHED_URLS = [
  "index.html",
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
  "https://fonts.googleapis.com/css?family=Poppins:100,400",
  "https://fonts.gstatic.com/s/poppins/v5/pxiGyp8kv8JHgFVrLPTucXtAKPY.woff2",
  "https://fonts.googleapis.com/css?family=Dancing+Script",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
  "css/style.css",
  "css/mobile.css",
  "https://code.jquery.com/jquery-3.3.1.slim.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
  "http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js",
  "img/icon.png",
  "img/bowling.png",
  "img/logo.png",
  "img/up.png",
  "img/facebook.png",
  "js/index.js",
  "img/1.jpg",
  "img/2.jpg",
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else if (event.request.headers.get("accept").includes("text/html")) {
          return caches.match("index.html");
        }
      });
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME !== cacheName && cacheName.startsWith("gih-cache")) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
