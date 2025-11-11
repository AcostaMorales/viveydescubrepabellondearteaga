import { useState, useEffect, useCallback, useRef } from 'react';

export const useNotifications = () => {
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const lastCheckRef = useRef(0);
  const isCheckingRef = useRef(false);

  // Verificar nuevas notificaciones con throttling más agresivo
  const checkForNewNotifications = useCallback(async () => {
    const now = Date.now();
    
    // Throttling: no verificar más de una vez cada 30 segundos
    if (now - lastCheckRef.current < 30000 || isCheckingRef.current) {
      return;
    }
    
    isCheckingRef.current = true;
    lastCheckRef.current = now;
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/notifications/unread-count`);
      if (response.ok) {
        const data = await response.json();
        const count = data.count || 0;
        setNotificationCount(count);
        setHasNewNotifications(count > 0);
      } else {
        // En caso de error del servidor, mantener estado anterior
        // Solo resetear si es la primera verificación
        if (lastCheckRef.current === now) {
          setNotificationCount(0);
          setHasNewNotifications(false);
        }
      }
    } catch {
      // Eliminar todos los console.logs para evitar spam
      // Mantener estado anterior en caso de error temporal de red
    } finally {
      isCheckingRef.current = false;
    }
  }, []);

  // Marcar como leídas
  const markAsRead = useCallback(async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/notifications/mark-read`, {
        method: 'PATCH'
      });
      setHasNewNotifications(false);
      setNotificationCount(0);
      localStorage.setItem('lastNotificationCheck', new Date().toISOString());
    } catch (error) {
      // Solo loguear errores críticos de marcado como leído
      console.error('Error marking notifications as read:', error);
    }
  }, []);

  // Verificar periódicamente con menor frecuencia
  useEffect(() => {
    // Verificar inmediatamente solo si no se ha verificado recientemente
    if (Date.now() - lastCheckRef.current > 30000) {
      checkForNewNotifications();
    }

    // Verificar cada 5 minutos en lugar de 2 minutos
    const interval = setInterval(checkForNewNotifications, 300000);

    // Limpiar interval al desmontar
    return () => clearInterval(interval);
  }, [checkForNewNotifications]);

  // Escuchar cambios de visibilidad de la página con throttling más conservador
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Solo verificar si la página ha estado oculta por más de 2 minutos
        setTimeout(() => {
          if (Date.now() - lastCheckRef.current > 120000) {
            checkForNewNotifications();
          }
        }, 2000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [checkForNewNotifications]);

  return {
    hasNewNotifications,
    notificationCount,
    checkForNewNotifications,
    markAsRead
  };
};