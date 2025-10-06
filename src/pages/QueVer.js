import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationCard from '../components/NavigationCard';
import './QueVer.css';

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
    <div className="quever-page">
      {/* Navigation Section */}
      <div className="navigation-section">
        <h3 className="section-title">Que ver en Pabellón de Arteaga</h3>
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