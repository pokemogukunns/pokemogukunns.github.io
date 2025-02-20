const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/file",
  "/go",
  "/.github",
  "/000image",
  "/category",
  "/contact",
  "/css",
  "/dmca",
  "image",
  "images",
  "img",
  "js",
  "pokemogukunn",
  "pokemogukunns",
  "privacy",
  "suika",
  "tp",
  "jump.html"
];

// インストール時にキャッシュする
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエストをキャッシュから返す
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 古いキャッシュを削除する
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
