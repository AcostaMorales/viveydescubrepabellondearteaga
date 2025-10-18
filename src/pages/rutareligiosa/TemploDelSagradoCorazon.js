import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const TemploDelSagradoCorazon = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  const parrafo1 = "El Templo del Sagrado Corazón es una iglesia dedicada al Sagrado Corazón de Jesús, ubicada en Pabellón de Arteaga. Su imagen aparece en registros públicos y fotografías libres como “Templo del Sagrado Corazón en Pabellón de Arteaga”.";
  const parrafo2 = "Aunque no se cuenta con muchos datos históricos sobre su construcción, su presencia visual y religiosa lo posiciona como un inmueble importante para la devoción local. ";
  const parrafo3 = "El templo está consagrado al Sagrado Corazón de Jesús, por lo que su interior está orientado a esta advocación con altar principal, imágenes devocionales y elementos litúrgicos característicos.";

  const tituloLista1 = "Funciones y uso";
  const elemento1Lista1 = "Celebración de misas y actos litúrgicos dedicados al Sagrado Corazón de Jesús.";
  const elemento2Lista1 = "Fiestas religiosas en días litúrgicos vinculados a esta advocación.";
  const elemento3Lista1 = "Espacio para oración personal y contemplación espiritual.";
  const elemento4Lista1 = "Punto simbólico dentro del paisaje religioso de Pabellón de Arteaga.";

  const tituloLista2 = "Experiencia turística sugerida";
  const elemento1Lista2 = "Recorrido visual por la fachada y su volumetría religiosa.";
  const elemento2Lista2 = "Visita al interior para apreciar el altar y elementos litúrgicos (si es posible).";
  const elemento3Lista2 = "Participación en misas o ceremonias para conocer la devoción comunitaria.";
  const elemento4Lista2 = "Integración del templo en rutas culturales y religiosas del municipio.";
  const elemento5Lista2 = "Registro fotográfico como parte del patrimonio visual y espiritual de la región.";
  


  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC1.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC2.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC3.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC4.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC5.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC6.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC7.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC8.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC9.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC10.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Carrusel/TDelSagradoCorazonC11.jpeg",
      alt: alt1
    }
    
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/TDelSagradoCorazon/Encabezado.png"}
          headerAlt="Templo del Sagrado Corazón del Refugio"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Templo del Sagrado Corazón del Refugio - Pabellón de Arteaga</h1>
                <p className="detail-paragraph">{parrafo1}</p>
                <p className="detail-paragraph">{parrafo2}</p>
                <p className="detail-paragraph">{parrafo3}</p>
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
            <div className="detail-section">
                <h2 className="detail-section-title">{tituloLista2}</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-{elemento1Lista2}</li>
                    <li className="detail-list-item">-{elemento2Lista2}</li>
                    <li className="detail-list-item">-{elemento3Lista2}</li>
                    <li className="detail-list-item">-{elemento4Lista2}</li>
                    <li className="detail-list-item">-{elemento5Lista2}</li>
                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.146863}
              longitude={-102.2808162}
              placeName="Templo del Sagrado Corazón del Refugio"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Iglesia dedicada al Sagrado Corazón de Jesús, importante para la devoción local"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default TemploDelSagradoCorazon;