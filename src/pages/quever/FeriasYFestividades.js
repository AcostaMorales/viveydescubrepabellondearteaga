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
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const navigationItems = [
    {
      id: 1,
      title: "Antigua estación",
      image: rutaImagenesBase + "ImagenesRepertorio/Paginas/QueVer/FeriasYFestividades.png",
      path: "/quever/centrohistorico/antiguaestacion"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navigation-page blue">
      {/* Header sin imagen para la página Centro Histórico */}
      <Header 
        headerImage= {rutaImagenesBase +"ImagenesRepertorio/Paginas/FeriasYFestividades/Encabezado.png"}
        headerAlt="Ferias y Festividades"
        showHeaderImage={true}
      />
      {/* Navigation Section */}
      <div className="navigation-content">
        <h3 className="navigation-section-title">Conoce nuestra feria y festividades</h3>
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