const CACHE_NAME = 'pabellon-arteaga-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  // Imágenes principales (estas sí existen)
  '/assents/imagenes/PaginaPrincipal/PabellonDeAreaga.png',
  '/assents/imagenes/PaginaPrincipal/DirectorioComercial.png',
  '/assents/imagenes/PaginaPrincipal/PromocionesYDescuentos.png',
  '/assents/imagenes/PaginaPrincipal/Noticias.png',
  // Iconos (cuando los agregues)
  // '/icons/icon-192x192.png',
  // '/icons/icon-512x512.png',
];

// Instalación del service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
          return null; // Retorno explícito para el caso else
        }).filter(Boolean) // Filtrar valores null
      );
    })
  );
});

// Intercepción de peticiones
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - devolver respuesta
        if (response) {
          return response;
        }

        return fetch(event.request).then((response) => {
          // Verificar si recibimos una respuesta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar la respuesta
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Si falla la red, mostrar página offline para navegación
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        });
      })
  );
});

// Manejo de notificaciones push (opcional)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nueva actualización disponible',
    icon: '/favicon.ico', // Usar favicon existente hasta tener iconos PWA
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore', 
        title: 'Ver ahora',
        icon: '/favicon.ico'
      },
      {
        action: 'close', 
        title: 'Cerrar',
        icon: '/favicon.ico'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Pabellón de Arteaga', options)
  );
});

// Manejo de clics en notificaciones
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Sincronización en segundo plano (opcional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Lógica para sincronizar datos offline
      console.log('Sincronización en segundo plano')
    );
  }
});