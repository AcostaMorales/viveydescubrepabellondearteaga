import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const TemploDeNtraSenoraDelRefugio = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  const parrafo1 = "La Capilla de Nuestra Señora del Refugio data del siglo XIX, con su construcción iniciada el 23 de abril de 1869 y concluida el 5 de agosto de 1870, gracias a los recursos del propietario de la hacienda Don Salvador Arellano.";
  const parrafo2 = "Está catalogada como bien inmueble de propiedad federal bajo el nombre “Nuestra Señora del Refugio”.";
  const parrafo3 = "Su planta original es de una sola nave dividida en cinco tramos, con bóveda de arista, junto con anexos laterales: el presbiterio, una capilla lateral, la sacristía y el baptisterio con acceso al campanario.";
  const parrafo4 = "El acceso se hace por una explanada frente al casco de la antigua hacienda, a través de un camino vecinal que se conecta a la carretera que lleva a la cabecera municipal.";
  const parrafo5 = "La fachada fue remodelada durante intervenciones de reconstrucción del inmueble y su barda atrial.";

  const tituloLista1 = "Uso y relevancia comunitaria";
  const elemento1Lista1 = "Se mantiene como capilla de culto religioso, aunque algunos reportes la describen actualmente en estado de abandono o descuido.";
  const elemento2Lista1 = "Su cercanía al casco de la Hacienda El Mezquite la hace parte del patrimonio histórico religioso vinculado a la hacienda y su entorno agrícola.";
  const elemento3Lista1 = "Es un punto interesante para rutas culturales y patrimoniales, especialmente para quienes buscan iglesias y capillas históricas en la región.";

  const tituloLista2 = "Experiencia turística sugerida";
  const elemento1Lista2 = "Recorrido contemplativo alrededor de la capilla, observando su fachada, arquitectura y el entorno rural.";
  const elemento2Lista2 = "Fotografías del exterior e interior, si el acceso lo permite, destacando su bóveda, nave y elementos arquitectónicos.";
  const elemento3Lista2 = "Interpretación contextual: explicar su relación con la Hacienda El Mezquite y la historia local.";
  const elemento4Lista2 = "Integración en rutas culturales religiosas o patrimonio del municipio.";
  


  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/CapillaDeNtraSraDelRefugio/Carrusel/CapillaDeNtraSraDelRefugioC1.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/CapillaDeNtraSraDelRefugio/Carrusel/CapillaDeNtraSraDelRefugioC2.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/CapillaDeNtraSraDelRefugio/Carrusel/CapillaDeNtraSraDelRefugioC3.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/CapillaDeNtraSraDelRefugio/Carrusel/CapillaDeNtraSraDelRefugioC4.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/CapillaDeNtraSraDelRefugio/Carrusel/CapillaDeNtraSraDelRefugioC5.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/CapillaDeNtraSraDelRefugio/Carrusel/CapillaDeNtraSraDelRefugioC6.jpeg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/CapillaDeNtraSraDelRefugio/Carrusel/CapillaDeNtraSraDelRefugioC7.jpeg",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/CapillaDeNtraSraDelRefugio/Encabezado.png"}
          headerAlt="Capilla de Nuestra Señora del Refugio"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Capilla de Nuestra Señora del Refugio - Pabellón de Arteaga</h1>
                <p className="detail-paragraph">{parrafo1}</p>
                <p className="detail-paragraph">{parrafo2}</p>
                <p className="detail-paragraph">{parrafo3}</p>
                <p className="detail-paragraph">{parrafo4}</p>
                <p className="detail-paragraph">{parrafo5}</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">{tituloLista1}</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-{elemento1Lista1}</li>
                    <li className="detail-list-item">-{elemento2Lista1}</li>
                    <li className="detail-list-item">-{elemento3Lista1}</li>
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
              latitude={22.1471134}
              longitude={-102.2745228}
              placeName="Capilla de Nuestra Señora del Refugio"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Capilla histórica del siglo XIX vinculada a la Hacienda El Mezquite"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default TemploDeNtraSenoraDelRefugio;