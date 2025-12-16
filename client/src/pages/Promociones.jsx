import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import './Promociones.css';

const Promociones = () => {
  const navigate = useNavigate();

  // Array de imágenes con sus respectivas etiquetas y rutas
  const imagenesPromociones = [
    {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765927311/WhatsApp_Image_2025-11-13_at_17.20.20_3_vyvhjq.jpg',
      alt: 'Promoción especial en servicios médicos',
      categoria: 'promociones',
      path: 'https://puntomedico.directorio-comercial.com'
    },
    {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765927317/WhatsApp_Image_2025-11-13_at_17.20.20_6_znsegq.jpg',
      alt: 'Descuentos en atención médica',
      categoria: 'promociones',
      path: 'https://puntomedico.directorio-comercial.com'
    }
  ];

  const handleImageClick = (path) => {
    // Verificar si es una URL externa (comienza con http:// o https://)
    if (path.startsWith('http://') || path.startsWith('https://')) {
      // Abrir URL externa en nueva pestaña
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      // Navegar a ruta interna
      navigate(path);
    }
  };

  return (
    <div className="promociones-page">
      {/* Header sin imagen */}
      <Header showHeaderImage={false} hasNotifications={true} />

      {/* Contenido principal */}
      <div className="promociones-content">
        {/* Título principal */}
        <div className="title-section">
          <h1 className="page-title">Promociones</h1>
          <p className="page-subtitle">Descubre las mejores ofertas y promociones de Pabellón de Arteaga</p>
        </div>

        {/* Carrusel de imágenes con etiquetas */}
        <div className="carousel-section">
          <div className="tagged-image-carousel">
            {imagenesPromociones.map((imagen, index) => (
              <div 
                key={index} 
                className="tagged-image-item"
                onClick={() => handleImageClick(imagen.path)}
              >
                <div className="image-tag">
                  <span className={`tag ${imagen.categoria}`}>
                    PROMOCIONES
                  </span>
                </div>
                <div className="image-wrapper">
                  <img
                    src={imagen.src}
                    alt={imagen.alt}
                    className="carousel-image"
                  />
                  <div className="image-overlay">
                    <h3 className="image-title">{imagen.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="info-section">
          <div className="info-card">
            <h2>¿Tienes alguna promoción?</h2>
            <p>Si deseas que tu promoción u oferta aparezca en nuestra plataforma, contáctanos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promociones;