import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import NavigationCard from '../../components/NavigationCard.jsx';
import useScrollToTop from '../../hooks/useScrollToTop.jsx';
import '../../styles/NavigationPage.css';

const TierraDeVinos = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();

  const navigate = useNavigate();

  const navigationItems = [
    //Patrocinadores que pagaron
    { id: 1, 
      title: 'Vinicola el sarmiento', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1762813225/VinicolaSarmiento_pywyls.png', 
      path: '/quever/tierradevinos/vinicolaelsarmiento' 
    },
    { id: 2, 
      title: 'Vinicola el aguaje', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1762820680/VinicolaElAguaje_d68vmv.png', 
      path: '/quever/tierradevinos/vinicolaelaguaje' 
    },
    { id: 3, 
      title: 'Viñedo las cruces', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1762820854/VinicolaLasTresCruces_kwaxgg.png', 
      path: '/quever/tierradevinos/vinedolascruces' },
    { id: 4, 
      title: 'Hacienda de letras', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1762820931/VinicolaHaciendaDeLetras_iwn0ii.png', 
      path: '/quever/tierradevinos/haciendadeletras' },

    //Paatrocinadores que no pagaron
    { id: 5, 
      title: 'Bodegas origen', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1762810725/BodegasOrigen_purwum.png', 
      path: '/quever/tierradevinos/bodegasorigen' },
    { id: 6, title: 'Rancho ubuntu', image: '/assents/imagenes/TierraDeVino/RanchoUbuntu.png', path: '/quever/tierradevinos/ranchoubuntu' },
    { id: 7, title: 'Real de plata', image: '/assents/imagenes/TierraDeVino/RealDePlata.png', path: '/quever/tierradevinos/realdeplata' },
    { id: 8, title: 'Segunda parte', image: '/assents/imagenes/TierraDeVino/SegundaParte.png', path: '/quever/tierradevinos/segundaparte' },
    
    
    { id: 9, title: 'Vinicola Santa Elena', image: '/assents/imagenes/TierraDeVino/VinicolaSantaElena.png', path: '/quever/tierradevinos/vinicolasantaelena' },
  ];

  const handleNavigation = (path) => navigate(path);

  return (
    <div className="navigation-page wine">
      <Header />

      <div className="navigation-content">
        <div className="">
          <img
            src="https://res.cloudinary.com/dbebikryr/image/upload/v1762054809/Encabezado_swgb6f.png"
            alt= "Que ver"
            className="header-image"
          />
        </div>
        <h3 className="navigation-section-title">Bodegas y Viñedos para Visitar</h3>
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

export default TierraDeVinos;
