/* Public QuestLog files only. Account data and Firebase traffic never enter this cache. */
'use strict';
const VERSION = '2026-10-06-pwa-1';
const APP_BASE = new URL('./', self.registration.scope);
const CACHE_PREFIX = 'questlog-public-' + encodeURIComponent(APP_BASE.pathname) + '-';
const CACHE_NAME = CACHE_PREFIX + VERSION;
const LOCAL_FILES = [
  'offline.html','manifest.webmanifest','icons/icon.svg',
  'icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'
].map(file => new URL(file, APP_BASE).href);
const STATIC_FILES = new Set(LOCAL_FILES);
const OFFLINE_PAGE = new URL('offline.html', APP_BASE).href;

self.addEventListener('install', event => {
  // Keep the previous worker active until the user explicitly accepts this update.
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(LOCAL_FILES)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if(event.data?.type === 'QUESTLOG_APPLY_UPDATE')self.skipWaiting();
});
self.addEventListener('fetch', event => {
  const request = event.request, url = new URL(request.url);
  if(request.method !== 'GET' || url.origin !== APP_BASE.origin)return;
  // The main document always comes from the network. It contains no offline account UI.
  const isMainDocument = request.mode === 'navigate' &&
    (url.pathname === APP_BASE.pathname || url.pathname === new URL('index.html', APP_BASE).pathname);
  if(isMainDocument) {
    event.respondWith(fetch(request).catch(async () =>
      (await (await caches.open(CACHE_NAME)).match(OFFLINE_PAGE)) ||
      new Response('QuestLog benötigt eine Internetverbindung. Bitte versuche es erneut.', {status:503, headers:{'Content-Type':'text/plain; charset=utf-8'}})
    ));
    return;
  }
  // Exact allowlist: neither API paths, arbitrary URLs nor query parameters are cached.
  if(STATIC_FILES.has(url.href))event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    return (await cache.match(request)) || fetch(request);
  })());
});
