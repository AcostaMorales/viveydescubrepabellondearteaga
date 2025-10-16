import React from "react";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import LocationMap from "../components/LocationMap";
import useScrollToTop from "../hooks/useScrollToTop";
import "../styles/DetailPage.css";

const MuralDePresidencia = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();

  const alt1 = "";

  const galleryImages = [
    {
        src: "/assents/imagenes/MuralDePresidencia/Carrusel/MuralDePresidenciaC1.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MuralDePresidencia/Carrusel/MuralDePresidenciaC2.jpeg",
        alt: alt1

    },
    {
        src: "/assents/imagenes/MuralDePresidencia/Carrusel/MuralDePresidenciaC3.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MuralDePresidencia/Carrusel/MuralDePresidenciaC4.jpeg",
        alt: alt1
    }
    ];
    
    return (
        <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/MuralDePresidencia/Encabezado.png"
          headerAlt="Archivo Histórico Municipal"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Monumento a la Vendimia - Pabellon de Arteaga</h1>
                <p className="detail-paragraph">El Mural de la Presidencia Municipal es una de las obras plásticas más representativas de Pabellón de Arteaga, ya que narra visualmente la historia, identidad y transformación del municipio. Se encuentra en el interior del edificio de la Presidencia Municipal y está visible para visitantes, turistas y ciudadanos que acuden al recinto.</p>
                <p className="detail-paragraph">La obra, de gran formato, integra escenas históricas, elementos naturales, personajes locales y símbolos culturales, componiendo una narrativa visual que conecta el pasado, el presente y las aspiraciones futuras de la comunidad.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Elementos más destacados</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Escenas de la época ferroviaria, que muestran la importancia del tren en la fundación y desarrollo económico de la ciudad.</li>
                    <li className="detail-list-item">-La Presa Calles, representada como motor de vida y detonante del crecimiento agrícola de la región.</li>
                    <li className="detail-list-item">-Personajes fundadores y trabajadores, retratados en actividades cotidianas, agrícolas y comunitarias.</li>
                    <li className="detail-list-item">-Símbolos identitarios, como el Monumento a la Vendimia, la estación del ferrocarril, campos de cultivo y paisajes locales.</li>
                    <li className="detail-list-item">-Motivos contemporáneos, que reflejan la modernización, la cultura viva y el orgullo local.</li>
                </ul>
            </div>
            <div className ="detail-section">
                <h2 className="detail-section-title">Significado cultural</h2>
                <p className="detail-paragraph">Este mural no solo es una pieza decorativa: es una obra de memoria colectiva que invita al espectador a reflexionar sobre los orígenes y el devenir de Pabellón de Arteaga. Su ubicación dentro de la Presidencia Municipal simboliza que la historia y la cultura están al centro de la vida pública.</p>
                <p className="detail-paragraph">Además, se ha convertido en un punto de interés para visitantes que realizan recorridos culturales, escolares y turísticos por el centro de la ciudad, ya que permite comprender la historia local a través de un lenguaje visual accesible y vibrante.</p>
            </div>
           
            <div className ="detail-section">
                <h2 className="detail-section-title">Recomendaciones para visitantes</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Accede durante el horario de oficina para poder observarlo con tranquilidad.</li>
                    <li className="detail-list-item">-Recorre la obra de izquierda a derecha para seguir la narrativa histórica que propone el mural..</li>
                    <li className="detail-list-item">-Ideal para fotografías panorámicas y detalles de las secciones temáticas.</li>
                    <li className="detail-list-item">-Pregunta al personal local si existen materiales impresos o folletos explicativos para complementar la visita.</li>
                    <li className="detail-list-item">-Perfecto para incluir en recorridos guiados culturales y escolares.</li>
                </ul>
            </div>
            
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1494575}
              longitude={-102.2765541}
              placeName="Mural de Presidencia Municipal"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Obra plástica que narra la historia y cultura del municipio"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
}

export default MuralDePresidencia;