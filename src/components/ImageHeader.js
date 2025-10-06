import React from 'react';
import './ImageHeader.css';

const ImageHeader = ({ imageSrc, imageAlt = "Header Image" }) => {
  return (
    <header className="image-header">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="image-header__image"
      />
    </header>
  );
};

export default ImageHeader;