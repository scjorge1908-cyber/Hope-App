// =============================================
// Clínica Hope — Service Worker (PWA)
// Cache-first para assets, network-first para API
// =============================================

const CACHE_NAME = 'clinica-hope-v2';
const OFFLINE_URL = '/offline.html';

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/logo-header.png'
];

// Install — pre-cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching essential resources');
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Removing old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch — network-first for API, cache-first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Google Apps Script calls
  if (url.hostname.includes('script.google.com') || 
      url.hostname.includes('googleapis.com')) {
    return;
  }

  // For navigation requests — network first, fallback to cache/offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            return cached || caches.match(OFFLINE_URL);
          });
        })
    );
    return;
  }

  // For assets — cache first, then network
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      
      return fetch(request).then((response) => {
        // Only cache successful responses
        if (!response || response.status !== 200) return response;
        
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return response;
      }).catch(() => {
        // Return offline page for HTML requests
        if (request.headers.get('accept')?.includes('text/html')) {
          return caches.match(OFFLINE_URL);
        }
        return new Response('', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
