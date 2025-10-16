import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import NavigationCard from '../components/NavigationCard';
import useScrollToTop from '../hooks/useScrollToTop';
import '../styles/NavigationPage.css';

const TierraDeVinos = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  
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
    
    <div className="navigation-page wine">
      <Header 
          headerImage="/assents/imagenes/TierraDeVino/Encabezado.png"
          headerAlt="Tierra de Vinos"
          showHeaderImage={true}
        />
      {/* Header Section */}
      <div className="navigation-header">
        <h1 className="navigation-title">Tierra de Vinos</h1>
      </div>


      {/* Navigation Section */}
      <div className="navigation-content">
        <h3 className="navigation-section-title">Bodegas y Viñedos para Visitar</h3>
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

export default TierraDeVinos;