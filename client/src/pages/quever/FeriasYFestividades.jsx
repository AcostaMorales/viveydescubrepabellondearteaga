import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header.jsx';
import NavigationCard from '../../components/NavigationCard.jsx';
import useScrollToTop from '../../hooks/useScrollToTop.jsx';

import '../../styles/NavigationPage.css';

const FeriasYFestividades = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();

  const navigate = useNavigate();
  const rutaImagenesBase = 'https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/';

  const navigationItems = [
    {
      id: 1,
      title: 'Feria Pabellón',
      image: rutaImagenesBase + 'ImagenesRepertorio/Paginas/FeriasYFestividades/FeriaPabellonNueva.png',
      path: '',
    },
    {
      id: 2,
      title: 'Desfile de calaveras',
      image: rutaImagenesBase + 'ImagenesRepertorio/Paginas/FeriasYFestividades/ElMuertoAlPozoYElVivoAlGozo.png',
      path: '/quever/feriasyfestividades/diademuertos',
    },
  ];

  const handleNavigation = (path) => navigate(path);

  return (
    <div className="navigation-page blue">
      <Header />
      <div className="navigation-content">
        <div className="">
          <img
            src="https://res.cloudinary.com/dbebikryr/image/upload/v1762054925/Encabezado_1_wvt13c.png"
            alt= "Que ver"
            className="header-image"
          />
        </div>
        <h3 className="navigation-section-title">Conoce nuestra feria y festividades</h3>
        <div className="navigation-grid">
          {navigationItems.map((item) => (
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

export default FeriasYFestividades;
