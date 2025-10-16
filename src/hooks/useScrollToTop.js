import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hook personalizado para hacer scroll al inicio en cada cambio de página
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forzar scroll al inicio inmediatamente
    window.scrollTo(0, 0);
    
    // Backup: intentar de nuevo después de un pequeño delay para asegurar
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Cleanup del timer
    return () => clearTimeout(timer);
  }, [pathname]);
};

export default useScrollToTop;