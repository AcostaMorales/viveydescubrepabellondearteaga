import React from 'react';
import './NavigationCard.css';

const NavigationCard = ({ 
  image, 
  title, 
  onClick, 
  className = '' 
}) => {
  return (
    <div 
      className={`navigation-card ${className}`}
      onClick={onClick}
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
    </div>
  );
};

export default NavigationCard;