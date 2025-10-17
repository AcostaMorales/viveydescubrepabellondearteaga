import React from 'react';
import './NavigationCard.css';

const NavigationCard = ({ 
  image, 
  title, 
  onClick, 
  externalUrl,
  openInNewTab = true,
  className = '' 
}) => {
  
  const handleClick = () => {
    if (externalUrl) {
      // Manejar URL externa
      if (openInNewTab) {
        window.open(externalUrl, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = externalUrl;
      }
    } else if (onClick) {
      // Manejar navegación interna o función personalizada
      onClick();
    }
  };

  return (
    <div 
      className={`navigation-card ${className}`}
      onClick={handleClick}
    >
      <div className="card-image-container">
        <img 
          src={`${process.env.PUBLIC_URL}${image}`}
          alt={title}
          className="card-image"
          onError={(e) => {
            e.target.src = `${process.env.PUBLIC_URL}/assents/imagenes/placeholder.png`;
          }}
        />
      </div>
      <div className="card-title">
        {title}
      </div>
    </div>
  );
};

export default NavigationCard;