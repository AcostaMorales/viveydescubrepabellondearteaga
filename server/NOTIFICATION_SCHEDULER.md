# 🔔 Sistema de Notificaciones Automáticas

## 📋 Descripción

El **Notification Scheduler** es un sistema automático que envía notificaciones push programadas a dispositivos suscritos. Conecta el sistema de notificaciones (base de datos) con el sistema de push notifications.

## 🔧 Cómo Funciona

### 1. **Flujo Completo**
```
📝 Admin crea notificación → 💾 Se guarda en BD con nextRunAt
                                      ↓
🕒 Scheduler (cada 2 min) → 🔍 Busca notificaciones con nextRunAt <= now
                                      ↓
📱 Envía push a dispositivos → 📊 Actualiza estadísticas
                                      ↓
⏰ Calcula próxima ejecución (si es repetitiva)
```

### 2. **Componentes**

#### **NotificationScheduler.js**
- **Función principal**: `processScheduledNotifications()`
- **Envío**: `sendScheduledNotification()`
- **Gestión**: `start()`, `stop()`, `getStatus()`

#### **Configuración Cron**
- `*/2 * * * *` = Cada 2 minutos
- `*/5 * * * *` = Cada 5 minutos
- `0 */1 * * *` = Cada hora
- `0 9 * * *` = Todos los días a las 9:00 AM

## 🚀 Instalación y Uso

### 1. **Dependencias**
```bash
npm install node-cron
```

### 2. **Integración en servidor**
```javascript
import notificationScheduler from './services/notificationScheduler.js';

// Al iniciar servidor
notificationScheduler.start('*/2 * * * *'); // Cada 2 minutos

// Al cerrar servidor
process.on('SIGINT', () => {
  notificationScheduler.stop();
  process.exit(0);
});
```

### 3. **Crear notificación programada**
```javascript
// POST /admin/notifications
{
  "title": "Recordatorio diario",
  "body": "No olvides visitar Pabellón de Arteaga",
  "icon": "/icon.png",
  "url": "/",
  "startAt": "2025-11-03T09:00:00.000Z",
  "expireAt": "2025-12-31T23:59:59.000Z",
  "repeatEveryHours": 24
}
```

## 📊 APIs Disponibles

### **Gestión de Scheduler**
```bash
# Ver estado del scheduler
GET /api/scheduler/status

# Ejecutar manualmente (testing)
POST /api/scheduler/run-now

# Iniciar scheduler
POST /api/scheduler/start
{
  "cronExpression": "*/5 * * * *"
}

# Detener scheduler
POST /api/scheduler/stop
```

### **Gestión de Notificaciones**
```bash
# Crear notificación programada
POST /api/admin/notifications
{
  "title": "Título",
  "body": "Mensaje",
  "startAt": "2025-11-03T10:00:00Z",
  "repeatEveryHours": 0
}

# Listar notificaciones (admin)
GET /api/admin/notifications

# Actualizar notificación
PUT /api/admin/notifications/:id

# Cancelar notificación
DELETE /api/admin/notifications/:id
```

## 🔄 Tipos de Notificaciones

### **1. Inmediata (Una vez)**
```javascript
{
  "title": "Bienvenido",
  "body": "Gracias por suscribirte",
  "startAt": "2025-11-02T15:30:00Z",
  "repeatEveryHours": 0  // No se repite
}
```

### **2. Repetitiva**
```javascript
{
  "title": "Recordatorio diario",
  "body": "Visita lugares nuevos",
  "startAt": "2025-11-03T09:00:00Z",
  "expireAt": "2025-12-31T23:59:59Z",
  "repeatEveryHours": 24  // Cada 24 horas
}
```

### **3. Programada para el futuro**
```javascript
{
  "title": "Evento especial",
  "body": "La feria inicia mañana",
  "startAt": "2025-11-10T08:00:00Z",
  "repeatEveryHours": 0
}
```

## 📈 Monitoreo y Logs

### **Logs del Sistema**
```
🚀 Notification Scheduler iniciado
⏰ Ejecutándose cada: 2 minutos
📨 Procesando 3 notificaciones programadas...
🚀 Enviando: "Recordatorio diario"
✅ "Recordatorio diario" enviado a 25/30 dispositivos
🗑️ Eliminadas 5 suscripciones expiradas
⏰ Próximo envío de "Recordatorio diario": 03/11/2025 09:00:00
🏁 Notificación completada: "Evento único"
```

### **Estado del Scheduler**
```bash
GET /api/scheduler/status
```
```json
{
  "isRunning": true,
  "activeTasks": 1,
  "taskNames": ["main"],
  "timestamp": "2025-11-02T16:30:00.000Z"
}
```

## 🛠️ Configuración Avanzada

### **Personalizar Frecuencia**
```javascript
// Cada 30 segundos (desarrollo/testing)
notificationScheduler.start('*/30 * * * * *');

// Cada 5 minutos (producción ligera)
notificationScheduler.start('*/5 * * * *');

// Cada hora (para notificaciones menos frecuentes)
notificationScheduler.start('0 * * * *');
```

### **Variables de Entorno**
```env
# .env
SCHEDULER_INTERVAL=*/2 * * * *
SCHEDULER_AUTO_START=true
NOTIFICATION_CLEANUP_EXPIRED=true
```

## 🧪 Testing

### **Ejecución Manual**
```bash
# Ejecutar scheduler inmediatamente
POST /api/scheduler/run-now
```

### **Crear Notificación de Prueba**
```bash
POST /api/admin/notifications
{
  "title": "Test inmediato",
  "body": "Esta notificación se envía ahora",
  "startAt": "2025-11-02T16:31:00Z"
}
```

## 🚨 Troubleshooting

### **Problema: Notificaciones no se envían**
1. Verificar que el scheduler esté corriendo: `GET /api/scheduler/status`
2. Verificar que hay suscripciones: `GET /api/push/subscribers` (si existe)
3. Revisar logs del servidor
4. Ejecutar manualmente: `POST /api/scheduler/run-now`

### **Problema: Demasiadas notificaciones**
1. Verificar `repeatEveryHours` de las notificaciones activas
2. Cancelar notificaciones problemáticas: `DELETE /api/admin/notifications/:id`
3. Ajustar frecuencia del scheduler

### **Problema: Dispositivos no reciben notificaciones**
1. Verificar configuración de web-push
2. Revisar claves VAPID
3. Comprobar que los dispositivos tengan permisos de notificación

## 📋 Para Otros Proyectos

### **Archivos necesarios:**
1. `services/notificationScheduler.js` (copiable tal cual)
2. `routes/schedulerRoutes.js` (opcional, para administración)
3. Modelos: `Notification.js` y `Subscription.js`
4. Configuración de `web-push`

### **Adaptaciones:**
1. Cambiar modelos según tu schema
2. Ajustar payload de notificaciones
3. Personalizar logs y métricas
4. Configurar autenticación para rutas admin

¡El sistema está listo para usar! 🎉