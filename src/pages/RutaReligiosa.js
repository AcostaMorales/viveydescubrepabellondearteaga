import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationCard from '../components/NavigationCard';
import './RutaReligiosa.css';

const RutaReligiosa = () => {
  const navigate = useNavigate();
  
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
    <div className="ruta-religiosa-page">
      <h1>Ruta Religiosa</h1>
      
      {/* Navigation Section */}
      <div className="atracciones-grid">
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
  );
};

export default RutaReligiosa;