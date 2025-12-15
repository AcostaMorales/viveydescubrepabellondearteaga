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
      title: 'Mapa de tierra de vinos', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1763143254/boton_mapa_vinicolas_du1zt6.png', 
      externalUrl: "https://view.genially.com/69169ef6f29001777d69cd40/interactive-content-mapa-vinicolas",
      openInNewTab: true,
    },
    { id: 2, 
      title: 'Vinicola el sarmiento', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765821654/VINICOLA_EL_SARMIENTO_wgkhgi.png', 
      externalUrl: "https://vinicolasarmiento.directorio-comercial.com",
      openInNewTab: true,
    },
    { id: 3, 
      title: 'Vinicola el aguaje', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765821650/VINICOLA_EL_AGUAJE_xrbgrc.png', 
      externalUrl: "https://vinicolaelaguaje.directorio-comercial.com",
      openInNewTab: true, 
    },
    { id: 4, 
      title: 'Viñedo las cruces', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765821649/VI%C3%91A_LAS_CRUCES_gkja9p.png', 
      externalUrl: "https://vinalascruces.directorio-comercial.com",
      openInNewTab: true,
     },
    { id: 5, 
      title: 'Hacienda de letras', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765821653/HACIENDAD_E_LETRAS_ycqso5.png', 
      externalUrl: "https://haciendadeletras.directorio-comercial.com",
      openInNewTab: true, 
    },
    { id: 6, 
      title: 'Segunda parte', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765821952/SEGUNDA_PARTE_edblnk.png', 
      externalUrl: "https://segundaparte.directorio-comercial.com",
      openInNewTab: true, 
    },

    //Paatrocinadores que no pagaron
    { id: 7, 
      title: 'Bodegas origen', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1762810725/BodegasOrigen_purwum.png', 
      path: '/quever/tierradevinos/bodegasorigen' },
    { id: 8, title: 'Rancho ubuntu', image: '/assents/imagenes/TierraDeVino/RanchoUbuntu.png', path: '/quever/tierradevinos/ranchoubuntu' },
    { id: 9, title: 'Real de plata', image: '/assents/imagenes/TierraDeVino/RealDePlata.png', path: '/quever/tierradevinos/realdeplata' },
    
    
    
    { id: 10, title: 'Vinicola Santa Elena', image: '/assents/imagenes/TierraDeVino/VinicolaSantaElena.png', path: '/quever/tierradevinos/vinicolasantaelena' },
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

export default TierraDeVinos;
