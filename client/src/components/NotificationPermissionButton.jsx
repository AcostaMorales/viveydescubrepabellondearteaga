import React, { useState, useEffect } from 'react';
import { enablePush } from '../lib/push.js';

export default function NotificationPermissionButton() {
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [permission, setPermission] = useState('default');

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
      checkSubscription();
    }
  }, []);

  const checkSubscription = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        setIsSubscribed(!!subscription);
      }
    } catch (error) {
      console.error('Error verificando suscripción:', error);
    }
  };

  const handleClick = async () => {
    if (loading || permission === 'denied') return;
    try {
      setLoading(true);
      await enablePush();
      setPermission('granted');
      setIsSubscribed(true);
      console.log('✅ Notificaciones habilitadas');
    } catch (error) {
      console.error('❌ Error habilitando notificaciones:', error);
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (loading) return '⏳ Habilitando...';
    if (permission === 'denied') return '🚫 Permisos Denegados';
    return '🔔 Activar Notificaciones';
  };

  const getButtonStyle = () => {
    const base = {
      position: 'fixed',
      bottom: 80, // para no chocar con Instalar
      right: 20,
      padding: '12px 20px',
      border: 'none',
      borderRadius: 25,
      color: 'white',
      fontWeight: 'bold',
      cursor: permission === 'denied' ? 'not-allowed' : 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: 1000,
      fontSize: 14,
      minWidth: 180,
      transition: 'all .3s ease',
      backgroundColor: '#007bff',
    };
    if (permission === 'denied') return { ...base, backgroundColor: '#dc3545', opacity: 0.7 };
    if (loading) return { ...base, backgroundColor: '#ffc107', color: '#000' };
    return base;
  };

  // ⛔️ Si ya estás suscrito, NO renderizamos el botón
  if (isSubscribed) return null;

  return (
    <button
      style={getButtonStyle()}
      onClick={handleClick}
      disabled={loading || permission === 'denied'}
    >
      {getButtonText()}
    </button>
  );
}
