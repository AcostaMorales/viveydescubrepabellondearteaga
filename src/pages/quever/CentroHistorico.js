import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import NavigationCard from '../../components/NavigationCard';
import useScrollToTop from '../../hooks/useScrollToTop';

import '../../styles/NavigationPage.css';

const CentroHistorico = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  
  const navigate = useNavigate();
  
  const navigationItems = [
    {
      id: 1,
      title: "Antigua estación",
      image: "/assents/imagenes/CentroHistorico/AntiguaEstacion.png",
      path: "/quever/centrohistorico/antiguaestacion"
    }, 
    {
      id: 2,
      title: "Archivo histórico",
      image: "/assents/imagenes/CentroHistorico/ArchivoHistorico.png",
      path: "/quever/centrohistorico/archivohistorico"
    },
    {
      id: 3,
      title: "Casa de madera",
      image: "/assents/imagenes/CentroHistorico/CasaDeMadera.png",
      path: "/quever/centrohistorico/casademadera"
    },
    {
      id: 4,
      title: "Monumento a la vendimia",
      image: "/assents/imagenes/CentroHistorico/MonumentoALaVendimia.png",
      path: "/quever/centrohistorico/monumentoalavendimia"
    },
    {
        id: 5,
        title: "Mural de presidencia",
        image: "/assents/imagenes/CentroHistorico/MuralDePresidencia.png",
        path: "/quever/centrohistorico/muraldepresidencia"
    },
    {
        id: 6,
        title: "Museo de casa",
        image: "/assents/imagenes/CentroHistorico/MuseoDeCasa.png",
        path: "/quever/centrohistorico/museodecasa"
    },
    {
        id: 7,
        title: "Parque infantil",
        image: "/assents/imagenes/CentroHistorico/ParqueInfantil.png",
        path: "/quever/centrohistorico/parqueinfantil"
    },
    {
        id: 8,
        title: "Plaza principal",
        image: "/assents/imagenes/CentroHistorico/PlazaPrincipal.png",
        path: "/quever/centrohistorico/plazaprincipal"
    },
    {
        id: 9,
        title: "Reloj",
        image: "/assents/imagenes/CentroHistorico/RelojBoton.png",
        path: "/quever/centrohistorico/reloj"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navigation-page blue">
      {/* Header sin imagen para la página Centro Histórico */}
      <Header 
        headerImage="/assents/imagenes/CentroHistorico/Encabezado.png"
        headerAlt="Centro Histórico"
        showHeaderImage={true}
      />
      {/* Navigation Section */}
      <div className="navigation-content">
        <h3 className="navigation-section-title">Lugares para Visitar</h3>
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

export default CentroHistorico;