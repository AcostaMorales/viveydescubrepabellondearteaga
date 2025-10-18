import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import NavigationCard from '../../components/NavigationCard';
import '../../styles/NavigationPage.css';

const RutaReligiosa = () => {
  const navigate = useNavigate();
   const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  
  const navigationItems = [
    {
      id: 1,
      title: "Capilla de la Inmaculada Concepción",
      image: "/assents/imagenes/RutaReligiosa/CapillaDeLaInmaculada.png",
      path: "/quever/rutareligiosa/capilladelainmaculadaconcepcion"
    }, 
    {
      id: 2,
      title: "Parroquia de Guadalupe",
      image: "/assents/imagenes/RutaReligiosa/ParroquiaDeGuadalupe.png",
      path: "/quever/rutareligiosa/parroquiadeguadalupe"
    },
    {
      id: 3,
      title: "Templo del Sagrado Corazón",
      image: "/assents/imagenes/RutaReligiosa/TDelSagradoCorazon.png",
      path: "/quever/rutareligiosa/templodelsagradocorazon"
    },
    {
      id: 4,
      title: "Templo de Nuestra Señora del Refugio",
      image: "/assents/imagenes/RutaReligiosa/TemploDeNtraSenora.png",
      path: "/quever/rutareligiosa/templodenuestrasenoradelrefugio"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navigation-page orange">
      {/* Header sin imagen para la página Ruta Religiosa */}
      <Header 
        headerImage={rutaImagenesBase + "ImagenesRepertorio/Paginas/RutaReligiosa/Encabezado.png"}
        headerAlt="Ruta Religiosa"
        showHeaderImage={true}
        hasNotifications={false}
      />
      
      
      {/* Navigation Section */}
      <div className="navigation-content">
        <h3 className="navigation-section-title">Templos y Capillas para Visitar</h3>
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

export default RutaReligiosa;