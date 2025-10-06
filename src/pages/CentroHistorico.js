import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CentroHistorico.css';

const CentroHistorico = () => {
  const navigate = useNavigate();
  
  const navigationItems = [
    {
      id: 1,
      title: "Antigua estacion",
      image: "/assents/imagenes/CentroHistorico/AntiguaEstacion.png",
      path: "/quever/centrohistorico/antiguaestacion"
    }, 
    {
      id: 2,
      title: "Archivo historico",
      image: "/assents/imagenes/CentroHistorico/ArchivoHistorico.png",
      path: "/quever/centrohistorico/archivohistorico"
    },
    {
      id: 3,
      title: "Casa de madera",
      image: "/assents/imagenes/CentroHistorico/CasadeMadera.png",
      path: "/quever/centrohistorico/casademadera"
    },
    {
      id: 4,
      title: "Monumento a la vendimia",
      image: "/assents/imagenes/CentroHistorico/MonumentoalaVendimia.png",
      path: "/quever/centrohistorico/monumentoalavendimia"
    },
    {
        id: 5,
        title: "Mural de presidencia",
        image: "/assents/imagenes/CentroHistorico/MuraldePresidencia.png",
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
    <div className="centro-historico-page">
      {/* Header Section */}
      <div className="centro-historico-header">
        <h1 className="centro-historico-title">Centro Histórico</h1>
        <p className="centro-historico-subtitle">
          Descubre la rica historia y arquitectura colonial de Pabellón de Arteaga
        </p>
      </div>


      {/* Navigation Section */}
      <div className="centro-historico-navigation">
        <h3 className="centro-historico-section-title">Lugares para Visitar</h3>
        <div className="centro-historico-grid">
          {navigationItems.map((item, index) => (
            <div 
              key={item.id} 
              className="centro-historico-card"
              onClick={() => handleNavigation(item.path)}
            >
              {index < 3 && <div className="centro-historico-badge"></div>}
              <img 
                src={item.image} 
                alt={item.title}
                className="centro-historico-card-image"
              />
              <div className="centro-historico-card-content">
                <h4 className="centro-historico-card-title">{item.title}</h4>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CentroHistorico;