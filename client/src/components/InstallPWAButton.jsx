import React, { useState, useEffect, useCallback } from 'react';

const InstallPWAButton = ({ inline = false, className = '', onInstalled }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInPWA, setIsInPWA] = useState(false);

  const checkIfInstalled = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    document.referrer.includes('android-app://');

  const checkIfInPWA = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    window.location.search.includes('utm_source=pwa');

  useEffect(() => {
    setIsInstalled(checkIfInstalled());
    setIsInPWA(checkIfInPWA());

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      if (typeof onInstalled === 'function') onInstalled();
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const showManualInstructions = (isIOS) => {
    if (isIOS) {
      alert(
        '📱 Instalar en iOS:\n\n' +
          '1) Compartir (⬆️) → 2) “Agregar a pantalla principal” → 3) “Agregar”.'
      );
    } else {
      alert(
        '📱 Instalar manualmente:\n\n' +
          '• Menú (⋮) → “Instalar aplicación”\n' +
          '• O el ícono de instalación en la barra de direcciones.'
      );
    }
  };

  const attemptAutoInstall = useCallback(async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          setIsInstalled(true);
      if (typeof onInstalled === 'function') onInstalled();
        } else {
          showManualInstructions(isIOS);
        }
      } catch (err) {
        console.error('Error en instalación:', err);
        showManualInstructions(isIOS);
      } finally {
        setDeferredPrompt(null);
      }
    } else {
      showManualInstructions(isIOS);
    }
  }, [deferredPrompt]);

  // Soporta auto-install desde ?autoinstall=true (AutoInstaller dispara un CustomEvent)
  useEffect(() => {
    const handler = () => attemptAutoInstall();
    window.addEventListener('auto-install-request', handler);
    return () => window.removeEventListener('auto-install-request', handler);
  }, [attemptAutoInstall]);

  const handleInstallClick = async () => {
    // Si ya está instalada, es mejor no mostrar nada (este botón no reinstala aquí)
    if (isInstalled) return;
    await attemptAutoInstall();
  };

  // 🔒 Ocultar si está dentro de la PWA o ya instalada
  if (isInPWA || isInstalled) return null;

  
  // 🔒 Ocultar si está dentro de la PWA o ya instalada
  if (isInPWA || isInstalled) return null;

  const ButtonEl = (
    <button
      onClick={handleInstallClick}
      className={className || "install-pwa-button footer-tool-btn"}
      title="Instalar aplicación"
    >
      <span className="emoji" aria-hidden>📲</span> Instalar App
    </button>
  );

  if (inline) return ButtonEl;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      {ButtonEl}
    </div>
  );
};

export default InstallPWAButton;
