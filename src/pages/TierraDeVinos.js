import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TierraDeVinos.css';

const TierraDeVinos = () => {
  const navigate = useNavigate();
  
  const navigationItems = [
    {
      id: 1,
      title: "Bodegas origen",
      image: "/assents/imagenes/TierraDeVino/BodegasOrigen.png",
      path: "/quever/tierradevinos/bodegasorigen"
    }, 
    {
      id: 2,
      title: "Hacienda de letras",
      image: "/assents/imagenes/TierraDeVino/HaciendaDeLetras.png",
      path: "/quever/tierradevinos/haciendadeletras"
    },
    {
      id: 3,
      title: "Rancho ubuntu",
      image: "/assents/imagenes/TierraDeVino/RanchoUbuntu.png",
      path: "/quever/tierradevinos/ranchoubuntu"
    },
    {
      id: 4,
      title: "Real de plata",
      image: "/assents/imagenes/TierraDeVino/RealDePlata.png",
      path: "/quever/tierradevinos/realdeplata"
    },
    {
        id: 5,
        title: "Segunda parte",
        image: "/assents/imagenes/TierraDeVino/SegundaParte.png",
        path: "/quever/tierradevinos/segundaparte"
    },
    {
        id: 6,
        title: "Viñedo las cruces",
        image: "/assents/imagenes/TierraDeVino/VinedoLasCruces.png",
        path: "/quever/tierradevinos/vinedolascruces"
    },
    {
        id: 7,
        title: "Vinicola el aguaje",
        image: "/assents/imagenes/TierraDeVino/VinicolaElAguaje.png",
        path: "/quever/tierradevinos/vinicolaelaguaje"
    },
    {
        id: 8,
        title: "Vinicola el sarmiento",
        image: "/assents/imagenes/TierraDeVino/VinicolaElSarmiento.png",
        path: "/quever/tierradevinos/vinicolaelsarmiento"
    },
    {
        id: 9,
        title: "Vinicola Santa Elena",
        image: "/assents/imagenes/TierraDeVino/VinicolaSantaElena.png",
        path: "/quever/tierradevinos/vinicolasantaelena"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="tierra-de-vinos-page">
      {/* Header Section */}
      <div className="tierra-de-vinos-header">
        <h1 className="tierra-de-vinos-title">Tierra de Vinos</h1>
      </div>


      {/* Navigation Section */}
      <div className="tierra-de-vinos-navigation">
        <h3 className="tierra-de-vinos-section-title">Bodegas y Viñedos para Visitar</h3>
        <div className="tierra-de-vinos-grid">
          {navigationItems.map((item, index) => (
            <div 
              key={item.id} 
              className="tierra-de-vinos-card tierra-de-vinos-decoration"
              onClick={() => handleNavigation(item.path)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="tierra-de-vinos-card-image"
              />
              <div className="tierra-de-vinos-card-content">
                <h4 className="tierra-de-vinos-card-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TierraDeVinos;