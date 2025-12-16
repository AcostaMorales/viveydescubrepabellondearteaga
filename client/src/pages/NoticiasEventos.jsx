import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import './NoticiasEventos.css';

const NoticiasEventos = () => {
  const navigate = useNavigate();

  // Array de imágenes con sus respectivas etiquetas y rutas
  const imagenesNoticias = [
    
    {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765915742/9a03ffda-d504-450f-95a9-410e9d405cc7.png',
      alt: '🎉🎄 ¡Tenemos ganadores!',
      categoria: 'noticias',
      path: 'https://www.facebook.com/share/p/1L1t66XLvf/'
    },
     {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765915612/d1cfacef-dfb9-4bb3-93fd-10518b970260.png',
      alt: '🥊🔥 Orgullo que trasciende desde el CDC.',
      categoria: 'noticias',
      path: 'https://www.facebook.com/share/p/1CvA7bPMJz/'
    },
    {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765846881/daacfe20-b9da-4d26-83a4-f04da469813d.png',
      alt: '⚾🎉 ¡Gran Clausura e Inauguración en el Béisbol Municipal! 🎉⚾',
      categoria: 'noticias',
      path: 'https://www.facebook.com/share/p/1DEsBtNQi8/'
    },
    {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765847180/6687a479-ca25-4d24-888b-269351fe0428.png',
      alt: '🏃‍♀🏃‍♂ Correr con causa también es trascender.',
      categoria: 'eventos',
      path: 'https://www.facebook.com/share/p/1BYaSKvfS3/'
    },
    {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765847390/aca159b2-85b2-41ef-83fb-a2fa57b78da0.png',
      alt: 'Felicitamos al Director General del ICA, Héctor Alejandro Vázquez Zuñiga, deseándole un día especial y un año de éxitos.',
      categoria: 'noticias',
      path: 'https://www.facebook.com/share/p/1D5qLodR8w/'
    },
    {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765847549/b8d1d774-fadd-468e-b95a-20604da1f5d0.png',
      alt: '✨🤝 Impulsa y Trasciende 2025 | Tercera etapa',
      categoria: 'noticias',
      path: 'https://www.facebook.com/share/p/1D8vNfkAa3/'
    },
     {
      src: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765847713/31d1a3d6-cc8e-498a-bf60-c1c300bc6df0.png',
      alt: '🎓✨ En Pabellón de Arteaga seguimos apostando por la educación como el camino más seguro para construir oportunidades.',
      categoria: 'noticias',
      path: 'https://www.facebook.com/share/p/1Bx2ZKrpwi/'
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
    <div className="noticias-eventos-page">
      {/* Header sin imagen */}
      <Header showHeaderImage={false} hasNotifications={true} />

      {/* Contenido principal */}
      <div className="noticias-eventos-content">
        {/* Título principal */}
        <div className="title-section">
          <h1 className="page-title">Noticias y Eventos</h1>
          <p className="page-subtitle">Mantente al día con las últimas noticias y eventos de Pabellón de Arteaga</p>
        </div>

        {/* Carrusel de imágenes con etiquetas */}
        <div className="carousel-section">
          <div className="tagged-image-carousel">
            {imagenesNoticias.map((imagen, index) => (
              <div 
                key={index} 
                className="tagged-image-item"
                onClick={() => handleImageClick(imagen.path)}
              >
                <div className="image-tag">
                  <span className={`tag ${imagen.categoria}`}>
                    {imagen.categoria === 'noticias' ? 'NOTICIAS' : 
                     imagen.categoria === 'eventos' ? 'EVENTOS' : 
                     imagen.categoria === 'promociones' ? 'PROMOCIONES' : ''}
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
            <h2>¿Tienes algún evento o noticia?</h2>
            <p>Si deseas que tu evento o noticia aparezca en nuestra plataforma, contáctanos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasEventos;