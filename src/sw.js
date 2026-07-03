// Self-destroying service worker. The previous Gatsby site registered a
// service worker at /sw.js; browsers that still have it keep serving the old
// app shell, which breaks every page on the rebuilt site. This replacement
// takes over, wipes the old caches, unregisters itself, and reloads open
// tabs. Keep serving it indefinitely so long-absent visitors get cleaned up.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
