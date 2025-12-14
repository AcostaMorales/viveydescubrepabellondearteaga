import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import NavigationCard from '../../components/NavigationCard.jsx';
import '../../styles/NavigationPage.css';

const RutaReligiosa = () => {
  const navigate = useNavigate();
  

  const navigationItems = [
    { 
      id: 1, 
      title: 'Hacienda de Santiago', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765663447/HACIENDA_DE_SANTIAGO_tiutmb.png', 
      path: '/quever/haciendas/haciendadesantiago' 
    },
    { 
      id: 2, 
      title: 'Hacienda de el mezquite', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765663429/HACIENDA_DE_EL_MEZQUITE_dcew0q.png', 
      path: '/quever/haciendas/haciendadeelmezquite' 
    },
    { 
      id: 3, 
      title: 'Hacienda de Garabato', 
      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1765663385/HACIENDA_DE_GARABATO_dv4jhr.png', 
      path: '/quever/haciendas/haciendadegarabato' 
    },
  ];

  const handleNavigation = (path) => navigate(path);

  return (
    <div className="navigation-page orange">
      <Header />

      <div className="navigation-content">
        <div className="">
          <img
            src=""
            alt= ""
            className=""
          />
        </div>
        <h3 className="navigation-section-title">Haciendas</h3>
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

export default RutaReligiosa;
