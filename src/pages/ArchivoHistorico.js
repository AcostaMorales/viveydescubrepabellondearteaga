import React from "react";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import LocationMap from "../components/LocationMap";
import "../styles/DetailPage.css";

const ArchivoHistorico = () => {

  const alt1 = "Fachada y acceso principal al edificio de Archivo Histórico.";
  const alt2 = "Salas de consulta y exhibición.";
  const alt3 = "Ejemplares de documentos y fotografías antiguas.";

  const galleryImages = [
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC1.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC2.png",
        alt: alt1

    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC3.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC4.jpeg",
        alt: alt3
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC5.jpeg",
        alt: alt3
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC6.jpeg",
        alt: alt3
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC7.jpeg",
        alt: alt3
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC8.jpeg",
        alt: alt2
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC9.jpeg",
        alt: alt2
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC10.jpeg",
        alt: alt2
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC11.jpeg",
        alt: alt2
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC12.jpeg",
        alt: alt3
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC13.jpeg",
        alt: alt3
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC14.jpeg",
        alt: alt3
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC15.jpeg",
        alt: alt3
    },
    {
        src: "/assents/imagenes/ArchivoHistorico/Carrusel/ArchivoHistoricoC16.jpeg",
        alt: alt3
    }
    ];
    
    return (
        <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/ArchivoHistorico/Encabezado.png"
          headerAlt="Archivo Histórico Municipal"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Archivo Histórico Municipal - Pabellon de Arteaga</h1>
                <p className="detail-paragraph">El Archivo Histórico Municipal de Pabellón de Arteaga es un espacio dedicado a la preservación y difusión de la memoria colectiva del municipio. Resguarda documentos, fotografías, planos y registros que cuentan la historia de la comunidad desde sus orígenes como asentamiento de trabajadores ferrocarrileros hasta su consolidación como uno de los municipios más importantes de Aguascalientes.</p>
                <p className="detail-paragraph">Este recinto es de gran valor cultural e histórico, ya que permite a investigadores, estudiantes y turistas acceder a fuentes originales que narran la vida cotidiana, los acontecimientos relevantes y el desarrollo social y económico de Pabellón de Arteaga. Cada documento y cada imagen conservada aquí es un testimonio invaluable de las raíces e identidad de la región.</p>
                <p className="detail-paragraph">El Archivo Histórico también funge como un espacio cultural, en donde se llevan a cabo actividades académicas, exposiciones y visitas guiadas que enriquecen la experiencia de quienes desean conocer más sobre la historia local.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Valor turístico</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Espacio de gran relevancia para el turismo cultural y académico.</li>
                    <li className="detail-list-item">-Conserva y muestra la memoria escrita y gráfica del municipio.</li>
                    <li className="detail-list-item">-Punto de encuentro para investigadores y visitantes interesados en la historia de la región.</li>
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Experiencia para el visitante</h2>
                <p className="detail-text-content">La visita al Archivo Histórico permite adentrarse en los documentos y fotografías que dan vida a la historia de Pabellón de Arteaga. Es un lugar que invita a descubrir, reflexionar y valorar el patrimonio documental que ha forjado la identidad del municipio y sus habitantes.</p>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1458032}
              longitude={-102.2761449}
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