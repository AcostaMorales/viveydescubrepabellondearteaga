import React from "react";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import LocationMap from "../components/LocationMap";
import "../styles/DetailPage.css";

const ArchivoHistorico = () => {

  const alt1 = "";
  

  const galleryImages = [
    {
        src: "/assents/imagenes/CasaDeMadera/Carrusel/CasaDeMaderaC1.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/CasaDeMadera/Carrusel/CasaDeMaderaC2.jpeg",
        alt: alt1

    },
    {
        src: "/assents/imagenes/CasaDeMadera/Carrusel/CasaDeMaderaC3.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/CasaDeMadera/Carrusel/CasaDeMaderaC4.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/CasaDeMadera/Carrusel/CasaDeMaderaC5.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/CasaDeMadera/Carrusel/CasaDeMaderaC6.jpeg",
        alt: alt1
    }
    ];
    
    return (
        <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/CasaDeMadera/Encabezado.png"
          headerAlt="Casa de Madera"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Casa de Madera - Pabellon de Arteaga</h1>
                <p className="detail-paragraph">La Casa de Madera es uno de los vestigios históricos más representativos del municipio de Pabellón de Arteaga. Este espacio resguarda la memoria de los primeros pobladores de la región, muchos de ellos ferrocarrileros que llegaron con la construcción de la ruta del tren, misma que fue fundamental para el desarrollo de la Presa Calles y del propio municipio.</p>
                <p className="detail-paragraph">Construida con materiales sencillos, principalmente madera, esta casa refleja el modo de vida humilde y trabajador de aquellos fundadores que dejaron sus raíces en la zona. Su arquitectura, de aspecto rústico, es un testimonio vivo de la época en la que Pabellón de Arteaga comenzó a consolidarse como una comunidad próspera ligada al ferrocarril y a las grandes obras hidráulicas del estado.</p>
                <p className="detail-paragraph">Hoy, la Casa de Madera se presenta como un símbolo cultural y turístico, que invita a visitantes y habitantes a reconectar con la historia de la región. Al recorrerla, se pueden apreciar los detalles constructivos y evocar la vida cotidiana de las familias que forjaron la identidad del municipio.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Valor turístico</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Representa un patrimonio histórico y cultural del municipio.</li>
                    <li className="detail-list-item">-Es un punto de interés ideal para quienes buscan turismo de raíces y conocer las tradiciones fundacionales.</li>
                    <li className="detail-list-item">-Conecta con la historia del ferrocarril y de la Presa Plutarco Elías Calles, obras que dieron vida a Pabellón de Arteaga.</li>
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Experiencia para el visitante</h2>
                <p className="detail-text-content">La visita a la Casa de Madera es un viaje en el tiempo: permite imaginar cómo era la vida de los primeros trabajadores y sus familias, y entender el papel que tuvieron en el desarrollo económico y social del estado de Aguascalientes.</p>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.148695}
              longitude={-102.2761482}
              placeName="Archivo Histórico Municipal"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Sitio histórico y cultural que preserva la memoria del municipio"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
}

export default ArchivoHistorico;