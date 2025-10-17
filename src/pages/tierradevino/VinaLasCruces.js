import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const VinaLasCruces = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  
  const parrafo1 = "Viña Las Cruces es un viñedo en expansión dentro de la Ruta del Vino de Pabellón de Arteaga que ofrece una experiencia íntima entre parras y naturaleza. Aquí puedes recorrer sus viñedos, conocer los métodos de cultivo, participar en catas locales y disfrutar del ambiente rural vinícola de Aguascalientes. Durante la temporada de vendimia, se organizan actividades festivas que permiten al visitante sumergirse en el proceso vinícola local.";
  
  const tituloLista1 = "Actividades sugeridas";
  const elemento1Lista1 = "Recorridos guiados por los viñedos para conocer el cultivo y el entorno agrícola.";
  const elemento2Lista1 = "Catas de vino local con explicación de perfiles sensoriales.";
  const elemento3Lista1 = "Participación en vendimias (temporada) y actividades especiales del viñedo.";
  const elemento4Lista1 = "Sesiones fotográficas del paisaje vinícola.";
  const elemento5Lista1 = "Eventos culturales o talleres según temporada.";
  
  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinaLasCruces/Carrusel/VinaLasCucesC1.jpg",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinaLasCruces/Encabezado.png"}
          headerAlt="Viña Las Cruces"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Viña Las Cruces - Pabellón de Arteaga</h1>
                <p className="detail-paragraph">{parrafo1}</p>
                
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
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1149843}
              longitude={-102.2927957}
              placeName="Viña Las Cruces"
              address="Pabellon de Arteaga, Aguascalientes, México"
              description=""
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default VinaLasCruces;