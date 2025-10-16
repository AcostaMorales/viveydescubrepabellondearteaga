import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import NavigationCard from '../components/NavigationCard';
import '../styles/NavigationPage.css';

const QueVer = () => {
  const navigate = useNavigate();
  
  const navigationItems = [
    {
      id: 1,
      title: "Centro Histórico",
      image: "/assents/imagenes/PaginaQueVer/CentroHistorico.png",
      path: "/quever/centrohistorico"
    }, 
    {
      id: 2,
      title: "Tierra de Vinos",
      image: "/assents/imagenes/PaginaQueVer/TierraDeVinos.png",
      path: "/quever/tierradevinos"
    },
    {
      id: 3,
      title: "Ruta de la Garnacha",
      image: "/assents/imagenes/PaginaQueVer/RutaDeLaGarnacha.png",
      path: "/quever/rutadelagarnacha"
    },
    {
      id: 4,
      title: "Haciendas",
      image: "/assents/imagenes/PaginaQueVer/Haciendas.png",
      path: "/quever/haciendas"
    },
    {
        id: 5,
        title: "Ruta Religiosa",
        image: "/assents/imagenes/PaginaQueVer/RutaReligiosa.png",
        path: "/quever/rutareligiosa"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navigation-page green">
      {/* Header sin imagen para la página QueVer */}
      <Header 
        showHeaderImage={false}
        hasNotifications={true}
      />
      
      {/* Header Section */}
      <div className="navigation-header">
        <h1 className="navigation-title">¿Qué Ver?</h1>
      </div>
      
      {/* Navigation Section */}
      <div className="navigation-content">
        <h3 className="navigation-section-title">Qué ver en Pabellón de Arteaga</h3>
        <div className="navigation-grid">
          {navigationItems.map(item => (
            <NavigationCard
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => handleNavigation(item.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueVer;