import React from "react";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import LocationMap from "../components/LocationMap";
import useScrollToTop from "../hooks/useScrollToTop";
import "../styles/DetailPage.css";

const MuseoDeCasa = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();

  const alt1 = "";

  const galleryImages = [
    {
        src: "/assents/imagenes/MuseoDeCasa/Carrusel/MuseoDeCasaC1.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MuseoDeCasa/Carrusel/MuseoDeCasaC2.png",
        alt: alt1

    },
    {
        src: "/assents/imagenes/MuseoDeCasa/Carrusel/MuseoDeCasaC3.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MuseoDeCasa/Carrusel/MuseoDeCasaC4.png",
        alt: alt1
    }
    ];
    
    return (
        <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/MuseoDeCasa/Encabezado.png"
          headerAlt=" Museo de la Casa en el Vagón del Tren"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Archivo Histórico Municipal - Pabellon de Arteaga</h1>
                <p className="detail-paragraph">El Museo de la Casa en el Vagón del Tren es un espacio único que combina el patrimonio ferroviario con la historia tecnológica y cultural de Pabellón de Arteaga. Está ubicado en un vagón de tren restaurado, situado a un costado de la Antigua Estación de Ferrocarril, y ofrece una experiencia inmersiva en la memoria colectiva del municipio.</p>
                <p className="detail-paragraph">En su interior se encuentra una de las piezas más valiosas del acervo cultural local:</p>
                <ul className="detail-list">
                    <li className="detail-list-item">-La primera cámara de video utilizada en Pabellón de Arteaga.</li>
                    <li className="detail-list-item">-El primer proyector cinematográfico que permitió proyectar películas en la ciudad, marcando el inicio de las funciones de cine locales.</li>
                </ul>
                <p className="detail-paragraph">Estos objetos representan un hito en la historia cultural del municipio, ya que fueron utilizados para documentar y proyectar eventos sociales, escolares y comunitarios, cuando el acceso a tecnologías audiovisuales era muy limitado en las zonas rurales.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Valor histórico y cultural</h2>
                <p className="detail-paragraph">Este pequeño museo dentro del vagón es un testimonio vivo de la transición tecnológica en la región. Además de las piezas audiovisuales, el vagón conserva su estructura original: pisos de madera, compartimentos y herrajes metálicos, evocando la época dorada del ferrocarril en México.</p>
                <ul className="detail-list">
                    <li className="detail-list-item">-Primer proyector: Permitió que la comunidad viviera las primeras proyecciones cinematográficas, muchas de ellas al aire libre y en espacios públicos.</li>
                    <li className="detail-list-item">-Primera cámara de video: Registró eventos importantes de la comunidad, convirtiéndose en una herramienta de memoria local.</li>
                    <li className="detail-list-item">-El vagón: Originalmente parte de un tren de carga, fue adaptado como espacio museográfico para conservar y mostrar estos objetos patrimoniales.</li>
                </ul>
                <p className="detail-text-content">Este museo forma parte del recorrido turístico histórico y cultural de Pabellón de Arteaga, junto con la Antigua Estación, el Monumento del Reloj, el Monumento a la Vendimia y la Casa de Madera.</p>
            </div>
             <div className ="detail-section">
                <h2 className="detail-section-title">Recomendaciones para visitantes</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Ideal para quienes disfrutan de la historia ferroviaria y la evolución tecnológica.</li>
                    <li className="detail-list-item">-No te pierdas los detalles interiores del vagón y las piezas audiovisuales originales.</li>
                    <li className="detail-list-item">-Es un excelente punto para tomar fotografías creativas y educativas.</li>
                    <li className="detail-list-item">-Pregunta por las visitas guiadas: los guías locales suelen narrar anécdotas sobre las primeras funciones de cine en la ciudad.</li>
                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.146389}
              longitude={-102.2774963}
              placeName="Museo de la Casa en el Vagón del Tren"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Museo ubicado en un vagón de tren restaurado que exhibe la primera cámara de video y proyector cinematográfico del municipio"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
}

export default MuseoDeCasa;