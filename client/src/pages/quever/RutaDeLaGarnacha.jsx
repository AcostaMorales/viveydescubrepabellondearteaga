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
      title: 'Taqueria yatzil', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481665/Ruta_garnacha_logos_taqueria_yatzil_n9krkj.png', 
      externalUrl: "",
      openInNewTab: true,
    },
    { id: 2, 
      title: 'Lonchería Serna', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481664/Ruta_garnacha_logos_loncheria_serna_dxpxwd.png', 
      externalUrl: "",
      openInNewTab: true,
    },
    { id: 3, 
      title: 'Cenaduria Lili', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481663/Ruta_garnacha_logos_cenaduria_lili_rb2kdv.png', 
      externalUrl: "",
      openInNewTab: true, 
    },
    { id: 4, 
      title: 'Gorditas IME', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481663/Ruta_garnacha_logos_gorditas_IME_uri7ka.png', 
      externalUrl: "https://gorditasime.directorio-comercial.com",
      openInNewTab: true,
     },
    { id: 5, 
      title: 'Gorditas Tomy', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481663/Ruta_garnacha_logos_gorditas_tommy_daecxp.png', 
      externalUrl: "",
      openInNewTab: true, 
    },
    { id: 6, 
      title: 'Gorditas Meña', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481663/Ruta_garnacha_logos_gorditas_men%CC%83a_ejvc9l.png', 
      externalUrl: "",
      openInNewTab: true, 
    },

    //Paatrocinadores que no pagaron
    { 
      id: 7, 
      title: 'Mariscos Cache', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481666/Ruta_garnacha_logos-10_hosfjl.png', 
      path: '' },
    { 
      id: 8, 
      title: 'Cenaduria Hortencia', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481663/Ruta_garnacha_logos_cenaduria_hortencia_xrcabn.png', 
      path: '' 
    },
    { 
      id: 9, 
      title: 'Antojitos Cristy', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481663/Ruta_garnacha_logos_anotjitos_cristy_bl12xm.png', 
      path: '' 
    },
    { 
      id: 10, 
      title: 'Gorditas de Arturo', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765481665/Ruta_garnacha_logos-09_pxqql2.png', 
      path: '' 
    },
  ];

  const handleNavigation = (path) => navigate(path);

  return (
    <div className="navigation-page wine">
      <Header />

      <div className="navigation-content">
        <div className="">
          <img
            src=""
            alt= ""
            className="header-image"
          />
        </div>
        <h3 className="navigation-section-title">Te invitamos a conocer los 10 negocios de comida que conforman: </h3>
        <h3 className="navigation-section-title">La Ruta de la Garnacha</h3>
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
