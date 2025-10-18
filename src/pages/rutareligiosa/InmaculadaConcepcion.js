import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const InmaculadaConcepcion = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  const parrafo1 = "El Templo de la Inmaculada Concepción es una iglesia parroquial de gran importancia espiritual y arquitectónica para la comunidad de Pabellón de Arteaga. Se distingue por su fachada imponente y su ubicación céntrica, que lo convierte en un punto de referencia religiosa y cultural.";
  const parrafo2 = "Este templo forma parte del patrimonio cultural religioso de México, catalogado como bien inmueble de propiedad federal. Alberga elementos históricos valiosos como pinturas, retablos, imágenes escultóricas, un confesionario, altar, órgano y campanas.";
  const parrafo3 = "Su construcción se asocia a periodos contemporáneos del desarrollo urbano de Pabellón, destacando como uno de los templos más representativos de la localidad.";

  const tituloLista1 = "Actividades y uso";
  const elemento1Lista1 = "Celebración de misas regulares y actos litúrgicos comunitarios.";
  const elemento2Lista1 = "Festividades marianas y conmemoraciones religiosas locales.";
  const elemento3Lista1 = "Espacio de recogimiento, oración personal y contemplación espiritual.";
  const elemento4Lista1 = "Punto emblemático dentro de la Ruta Religiosa y el patrimonio histórico local.";
  


  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC1.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC2.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC3.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC4.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC5.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC6.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC7.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC8.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC9.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC10.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Carrusel/CapillaDeLaInmaculadaConcepcionC11.jpeg",
      alt: alt1
    }
    
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/InmaculadaConcepcion/Encabezado.png"}
          headerAlt="Templo de la Inmaculada Concepción"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Templo de la Inmaculada Concepción - Pabellón de Arteaga</h1>
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
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1373952}
              longitude={-102.295062}
              placeName="Templo de la Inmaculada Concepción"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Iglesia parroquial de gran importancia espiritual y arquitectónica para la comunidad de Pabellón de Arteaga"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default InmaculadaConcepcion;