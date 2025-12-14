import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import NavigationCard from '../components/NavigationCard.jsx';
import '../styles/NavigationPage.css';

const QueVer = () => {
  const navigate = useNavigate();

  const navigationItems = [
    {
      id: 1,
      title: 'Centro Histórico',
      image: '/assents/imagenes/PaginaQueVer/CentroHistorico.png',
      path: '/quever/centrohistorico',
    },
    {
      id: 2,
      title: 'Tierra de Vinos',
      image: '/assents/imagenes/PaginaQueVer/TierraDeVinos.png',
      path: '/quever/tierradevinos',
    },
    {
      id: 3,
      title: 'Ruta de la Garnacha',
      image: '/assents/imagenes/PaginaQueVer/RutaDeLaGarnacha.png',
      path: '/quever/rutadelagarnacha',
    },
    {
      id: 4,
      title: 'Haciendas',
      image: '/assents/imagenes/PaginaQueVer/Haciendas.png',
      path: '/quever/haciendas',
    },
    {
      id: 5,
      title: 'Ruta Religiosa',
      image: '/assents/imagenes/PaginaQueVer/RutaReligiosa.png',
      path: '/quever/rutareligiosa',
    },
    {
      id: 6,
      title: 'Ferias y Festividades',
      image: '/assents/imagenes/PaginaQueVer/FeriasYFestividades.png',
      path: '/quever/feriasyfestividades',
    },
  ];

  const handleNavigation = (item) => {
    if (item.type === 'pdf') {
      // Abrir PDF en nueva ventana
      window.open(item.path, '_blank');
    } else {
      // Navegación normal
      navigate(item.path);
    }
  };

  return (
    <div className="navigation-page green">
      {/* Header con imagen */}
      <Header />
      

      {/* Sección principal de navegación */}
      <div className="navigation-content">
        <div className="">
          <img
            src="https://res.cloudinary.com/dbebikryr/image/upload/v1762054785/Encabezado_x15n8e.png"
            alt= "Que ver"
            className="header-image"
          />
        </div>
        <h3 className="navigation-section-title">Qué ver en Pabellón de Arteaga</h3>
        <div className="navigation-grid">
          {navigationItems.map((item) => (
            <NavigationCard
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => handleNavigation(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueVer;
