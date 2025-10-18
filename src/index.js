import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// PWA Service Worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registrar Service Worker para PWA
serviceWorkerRegistration.register({
  onSuccess: () => {
    console.log('PWA instalada y lista para funcionar offline');
  },
  onUpdate: () => {
    console.log('Nueva versión de la PWA disponible');
  }
});
