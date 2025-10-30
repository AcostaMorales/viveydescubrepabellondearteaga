import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollToTop
 * - targetSelector: (opcional) selector CSS si el scroll ocurre en un contenedor (no en window)
 * - options.smooth: (bool) activa el scroll suave
 * - options.restoreManual: (bool) fuerza history.scrollRestoration = 'manual'
 */
export default function useScrollToTop(
  targetSelector = null,
  { smooth = false, restoreManual = true } = {}
) {
  const { pathname, hash, key } = useLocation();

  // Desactiva la restauración automática de scroll del navegador
  useEffect(() => {
    if (!restoreManual || !('scrollRestoration' in window.history)) return;
    const prev = window.history.scrollRestoration;
    try {
      window.history.scrollRestoration = 'manual';
    } catch (error){}
    return () => {
      try { window.history.scrollRestoration = prev; } catch (error) {}
    };
  }, [restoreManual]);

  useEffect(() => {
    const container = targetSelector ? document.querySelector(targetSelector) : null;

    const doScroll = (y = 0) => {
      if (container) {
        container.scrollTo({ top: y, behavior: smooth ? 'smooth' : 'auto' });
      } else {
        const behavior = smooth ? 'smooth' : 'auto';
        window.scrollTo({ top: y, left: 0, behavior });
        // “belt & suspenders”: asegura en <html> y <body> por si el UA usa uno u otro
        document.documentElement.scrollTop = y;
        document.body.scrollTop = y;
      }
    };

    // Si hay hash #ancla, intentamos desplazarnos a ese elemento
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const target =
        document.getElementById(id) ||
        document.querySelector(`[name="${id}"]`) ||
        document.querySelector(hash); // por si es un selector válido
      if (target) {
        target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
        return;
      }
    }

    // Scroll inmediato
    doScroll(0);

    // Reintentos tras repintados para contrarrestar “layout shifts” (imágenes, fuentes, etc.)
    const raf1 = requestAnimationFrame(() => doScroll(0));
    const raf2 = requestAnimationFrame(() => {
      // otro frame por si aún no quedaron las alturas
      doScroll(0);
    });
    const t = setTimeout(() => doScroll(0), 120);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(t);
    };
  }, [pathname, key, hash, targetSelector, smooth]);
}
