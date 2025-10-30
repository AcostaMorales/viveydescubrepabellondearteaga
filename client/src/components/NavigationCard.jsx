import React from 'react';
import './NavigationCard.css';

// Resuelve rutas respetando el base path de Vite
const withBase = (p = '') => {
  // URLs absolutas (http/https) se dejan igual
  if (/^https?:\/\//i.test(p)) return p;

  const base = (import.meta.env && import.meta.env.BASE_URL) || '/';
  const baseTrim = base.endsWith('/') ? base.slice(0, -1) : base;
  const path = p.startsWith('/') ? p : `/${p}`;
  return `${baseTrim}${path}`;
};

const NavigationCard = ({
  image,
  title,
  onClick,
  externalUrl,
  openInNewTab = true,
  className = '',
}) => {
  const handleClick = () => {
    if (externalUrl) {
      if (openInNewTab) {
        window.open(externalUrl, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = externalUrl;
      }
    } else if (onClick) {
      onClick();
    }
  };

  const src = image ? withBase(image) : withBase('/assents/imagenes/placeholder.png');

  return (
    <div className={`navigation-card ${className}`} onClick={handleClick}>
      <div className="card-image-container">
        <img
          src={src}
          alt={title}
          className="card-image"
          onError={(e) => {
            e.currentTarget.src = withBase('/assents/imagenes/placeholder.png');
          }}
        />
      </div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default NavigationCard;
