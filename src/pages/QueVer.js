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
    },
    {
      id: 6,
      title: "Ferias y Festividades",
      image: "/assents/imagenes/PaginaQueVer/FeriasYFestividades.png",
      path: "/quever/feriasyfestividades"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navigation-page green">
      {/* Header sin imagen para la página QueVer */}
      <Header 
        headerImage="/assents/imagenes/PaginaQueVer/Encabezado.png"
        headerAlt="Tierra de Vinos"
        showHeaderImage={true}
      />
      
      {/* Navigation Section */}
      <div className="navigation-content">
        <h3 className="navigation-section-title">Qué ver en Pabellón de Arteaga</h3>
        <div className="navigation-grid">
          {navigationItems.map(item => (
            <NavigationCard
              key={item.id}
              image={item.image}
              onClick={() => handleNavigation(item.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueVer;