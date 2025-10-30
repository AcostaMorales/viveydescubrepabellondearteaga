import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import NavigationCard from '../../components/NavigationCard.jsx';
import '../../styles/NavigationPage.css';

const RutaReligiosa = () => {
  const navigate = useNavigate();
  const rutaImagenesBase = 'https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/';

  const navigationItems = [
    { id: 1, 
        title: 'Carrera Atlética Día de Muertos', 
        image: rutaImagenesBase + 'ImagenesRepertorio/Paginas/FeriasYFestividades/CarreraAtleticaNeon.jpg', 
        externalUrl: "https://github.com/AcostaMorales/AlmacenDeImagenes/raw/main/ImagenesRepertorio/Paginas/FeriasYFestividades/CarreraAtletica/CarreraAtletica.pdf",
        openInNewTab: true,
    },
    { id: 2, 
        title: 'Carrera Atlética Día de Muertos', 
        image: rutaImagenesBase + 'ImagenesRepertorio/Paginas/FeriasYFestividades/DesfileDeCalaveras.jpgg', 
        externalUrl: "https://github.com/AcostaMorales/AlmacenDeImagenes/raw/main/ImagenesRepertorio/Paginas/FeriasYFestividades/Desfile/Desfile.pdf",
        openInNewTab: true,
    },
    
  ];

  const handleNavigation = (path) => navigate(path);

  return (
    <div className="navigation-page orange">
      <Header />

      <div className="navigation-content">
        <h3 className="navigation-section-title">Dia de muertos</h3>
        <div className="navigation-grid">
          {navigationItems.map((item) => (
            <NavigationCard
                          key={item.id}
                          image={item.image}
                          title={item.title}
                          onClick={item.path ? () => handleNavigation(item.path) : undefined}
                          externalUrl={item.externalUrl}
                          openInNewTab={item.openInNewTab}
                        />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RutaReligiosa;
