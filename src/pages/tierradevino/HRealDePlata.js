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
  
  const parrafo1 = "La Hacienda Vinícola Real de Plata combina la herencia arquitectónica de una antigua hacienda con experiencias vinícolas modernas. Aquí no solo degustas vino, sino que te sumerges en un entorno rural que evoca historia, naturaleza y sabor";
  
  const tituloLista1 = "Actividades y atractivos";
  const elemento1Lista1 = "Recorridos guiados por el casco de la hacienda, jardines y viñedos, donde se explica la historia del lugar y el proceso de producción.";
  const elemento2Lista1 = "Catas y maridajes de vinos “Cinco Grandes”, con explicaciones guiadas y emparejamientos gastronómicos.";
  const elemento3Lista1 = "Eventos sociales y espacios para renta, como bodas, sesiones fotográficas, cenas temáticas y reuniones corporativas.";
  const elemento4Lista1 = "Hospedaje en cabañas dentro de la hacienda para prolongar la experiencia en el entorno vinícola.";
  const elemento5Lista1 = "Restaurante a pie de hacienda, con cocina regional que acompaña las catas y ofrece platillos locales en ambiente campestre.";

  const tituloLista2 = "Información práctica";
  const elemento1Lista2 = "Contacto / teléfono: 449 395 8757";
  const elemento2Lista2 = "Oferta vinícola destacada: marca “Cinco Grandes”.";
  const elemento3Lista2 = "Dirección postal: Teodoro Olivares s/n, San Luis de Letras, Aguascalientes.";
  const elemento4Lista2 = "Servicios en sitio: restaurante, hospedaje, estacionamiento y renta de espacios para eventos.";
  


  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/HaciendaVinicolaRealDePlata/Carrusel/HaciendaVinicolaRealDePlataC1.jpeg",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/HaciendaVinicolaRealDePlata/Encabezado.png"}
          headerAlt="Hacienda Vinícola Real de Plata"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Hacienda Vinícola Real de Plata - Pabellón de Arteaga</h1>
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
              latitude={22.1377566}
              longitude={-102.2951192}
              placeName="Hacienda Vinícola Real de Plata"
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