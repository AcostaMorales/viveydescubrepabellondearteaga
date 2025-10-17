import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const RanchoUbuntu = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  
  const parrafo1 = "Vinícola El Sarmiento es un proyecto vinícola moderno que ha apostado por instalaciones contemporáneas y una propuesta turística integral. Inaugurada recientemente, se ha convertido en un nuevo atractivo enoturístico de Pabellón de Arteaga.";
  const parrafo2 = "Su propuesta combina arquitectura moderna, tradición vitivinícola y experiencias sensoriales que conectan al visitante con el vino y el paisaje local.";
  
  const tituloLista1 = "Experiencias y actividades";
  const elemento1Lista1 = "Recorridos guiados por viñedos, bodegas y áreas vitivinícolas: para conocer la historia del proyecto, el cultivo de la vid y los procesos enológicos.";
  const elemento2Lista1 = "Catas guiadas con maridaje: degustación de vinos acompañada de explicaciones y armonizaciones con productos locales.";
  const elemento3Lista1 = "Experiencia gastronómica con cocina de autor: platillos preparados especialmente para acompañar las catas, dentro de un entorno vinícola.";
  const elemento4Lista1 = "Eventos y experiencias especiales: celebraciones, lanzamientos o actividades de vendimia en temporada.";
  const elemento5Lista1 = "Espacios modernos y arquitectura contemporánea: ideales para fotografía y turismo enológico.";

  const tituloLista2 = "Datos prácticos para visitantes";
  const elemento1Lista2 = "Dirección: Ex-Hacienda Garabato, Fracción 22, Emiliano Zapata, Pabellón de Arteaga.";
  const elemento2Lista2 = "Teléfono: 449 400 1710";
  const elemento3Lista2 = "Es recomendable hacer reservación anticipada para visitas, catas y experiencias especiales";
  const elemento4Lista2 = "Más información: https://vinicolasarmiento.com/";
  

  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaElSarmiento/Carrusel/VinicolaElSarmientoC1.png",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaElSarmiento/Carrusel/VinicolaElSarmientoC2.png",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaElSarmiento/EncabezadO.png"}
          headerAlt="Vinícola El Sarmiento"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Vinícola El Sarmiento - Pabellón de Arteaga</h1>
                <p className="detail-paragraph">{parrafo1}</p>
                <p className="detail-paragraph">{parrafo2}</p>
                
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">{tituloLista1}</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-{elemento1Lista1}</li>
                    <li className="detail-list-item">-{elemento2Lista1}</li>
                    <li className="detail-list-item">-{elemento3Lista1}</li>
                    <li className="detail-list-item">-{elemento4Lista1}</li>
                    <li className="detail-list-item">-{elemento5Lista1}</li>
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">{tituloLista2}</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-{elemento1Lista2}</li>
                    <li className="detail-list-item">-{elemento2Lista2}</li>
                    <li className="detail-list-item">-{elemento3Lista2}</li>
                    <li className="detail-list-item">-{elemento4Lista2}</li>
                    
                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.0799582}
              longitude={-102.3322117}
              placeName="Vinícola El Sarmiento"
              address="Pabellon de Arteaga, Aguascalientes, México"
              description=""
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default RanchoUbuntu;