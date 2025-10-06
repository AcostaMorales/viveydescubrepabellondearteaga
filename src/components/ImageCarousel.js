import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, title = "Galería de imágenes" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <div className="image-carousel">
      <h2 className="carousel-title">{title}</h2>
      
      <div className="carousel-container">
        <div className="carousel-track">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="carousel-item"
              onClick={() => openModal(image, index)}
            >
              <img 
                src={image.src} 
                alt={image.alt || `Imagen ${index + 1}`}
                className="carousel-image"
              />
              <div className="carousel-overlay">
                <span className="carousel-zoom-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen completa */}
      {selectedImage && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeModal}
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            
            <button 
              className="modal-nav modal-prev"
              onClick={prevImage}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt || 'Imagen completa'}
              className="modal-image"
            />
            
            <button 
              className="modal-nav modal-next"
              onClick={nextImage}
              aria-label="Siguiente imagen"
            >
              ›
            </button>
            
            <div className="modal-info">
              <p className="modal-caption">
                {selectedImage.alt || `Imagen ${currentIndex + 1} de ${images.length}`}
              </p>
              <span className="modal-counter">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;