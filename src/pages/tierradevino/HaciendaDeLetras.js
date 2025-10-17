import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const HaciendaDeLetras = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  const parrafo1 = "Hacienda de Letras, fundada en 1854, es una vinícola con historia y corazón que se ha convertido en uno de los destinos más atractivos del enoturismo en Aguascalientes. Con más de 120 hectáreas plantadas y producción anual cercana a 500 toneladas de uva, ofrece una experiencia que mezcla historia arquitectónica, naturaleza y vino artesanal.";
  const parrafo2 = "Durante la visita, los turistas pueden recorrer sus viñedos, conocer la cava y las bodegas, aprender sobre las variedades de uva, los procesos de vinificación y disfrutar una degustación de vinos artesanales.";

  const tituloLista1 = "Actividades recomendadas";
  const elemento1Lista1 = "Recorridos guiados por viñedos, bodegas y cava, explicando el proceso del vino desde la vid hasta la copa.";
  const elemento2Lista1 = "Catas de vino artesanales, acompañadas de degustaciones locales.";
  const elemento3Lista1 = "Disfrutar de los jardines, áreas verdes y arquitectura histórica de la hacienda.";
  const elemento4Lista1 = "Eventos sociales como ceremonias, bodas y sesiones fotográficas en un entorno vinícola.";
  


  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/HaciendaDeLetras/Carrusel/HaciendaDeLetrasC1.jpg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/HaciendaDeLetras/Carrusel/HaciendaDeLetrasC2.jpeg",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/HaciendaDeLetras/Encabezado.png"}
          headerAlt="Hacienda de Letras"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Hacienda de Letras - Pabellón de Arteaga</h1>
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
                    
                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1373952}
              longitude={-102.295062}
              placeName="Hacienda de Letras"
              address="San Luis de Letras, Aguascalientes, México"
              description="Vinícola histórica que ofrece recorridos, catas y experiencias enoturísticas"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default HaciendaDeLetras;