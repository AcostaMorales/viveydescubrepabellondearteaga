import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import NavigationCard from '../components/NavigationCard';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  
  const navigationItems = [
    {
      id: 1,
      title: "¿Qué ver en Pabellón de Arteaga?",
      image: "/assents/imagenes/PaginaPrincipal/PabellonDeAreaga.png",
      path: "/quever"
    },
    {
      id: 2,
      title: "Directorio Comercial",
      image: "/assents/imagenes/PaginaPrincipal/DirectorioComercial.png",
      externalUrl: "https://directorio.vivemexico.online",
      openInNewTab: true
    },
    {
      id: 3,
      title: "Promociones y Descuentos",
      image: "/assents/imagenes/PaginaPrincipal/PromocionesYDescuentos.png",
      path: "/promociones"
    },
    {
      id: 4,
      title: "Noticias y Eventos",
      image: "/assents/imagenes/PaginaPrincipal/Noticias.png",
      path: "/noticias"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      {/* Header sin imagen para la página principal */}
      <Header 
        showHeaderImage={false}
        hasNotifications={true}
      />
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="main-title">Vive y Descubre</h1>
        <h2 className="subtitle">Pabellón de Arteaga</h2>
        
        {/* Video placeholder - aquí irá tu video */}
        <div className="video-container">
          <div className="video-placeholder">
            <video 
              src="/assents/videos/Video_Pabellon.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"

              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="navigation-section">
        <h2 className="section-title">Explora Pabellón de Arteaga</h2>
        <div className="navigation-grid">
          {navigationItems.map(item => (
            <NavigationCard
              key={item.id}
              image={item.image}
              
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

export default Home;