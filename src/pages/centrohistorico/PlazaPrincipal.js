import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';


const PlazaPrincipal = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();

  const alt1 = "";

  const galleryImages = [
    {
        src: "/assents/imagenes/PlazaPrincipal/Carrusel/PlazaPrincipalC1.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/PlazaPrincipal/Carrusel/PlazaPrincipalC2.png",
        alt: alt1

    },
    {
        src: "/assents/imagenes/PlazaPrincipal/Carrusel/PlazaPrincipalC3.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/PlazaPrincipal/Carrusel/PlazaPrincipalC4.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/PlazaPrincipal/Carrusel/PlazaPrincipalC5.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/PlazaPrincipal/Carrusel/PlazaPrincipalC6.png",
        alt: alt1
    }
    ];
    
    return (
        <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/PlazaPrincipal/Encabezado.png"
          headerAlt="Plaza Principal"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Plaza Principal - Pabellon de Arteaga</h1>
                <p className="detail-paragraph">La Plaza Principal de Pabellón de Arteaga es el núcleo histórico, social y cultural del municipio. Rodeada por edificios emblemáticos como la Presidencia Municipal, el Monumento del Reloj, el Mural Histórico, y a pocos pasos de la Antigua Estación de Ferrocarril, esta plaza representa el corazón simbólico de la ciudad.</p>
                <p className="detail-paragraph">Con un diseño tradicional que combina jardines simétricos, andadores pavimentados, áreas sombreadas y bancas ornamentales, la plaza ofrece un ambiente acogedor ideal para el descanso, la convivencia y el turismo. Su trazado conserva el estilo clásico de las plazas mexicanas, donde la vida comunitaria gira en torno a este espacio central.</p>
            </div>
           <div className="detail-section">
                <h2 className="detail-section-title">Elementos destacados</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Jardines centrales: Con vegetación cuidada, árboles frondosos y áreas verdes que aportan frescura y belleza paisajística.</li>
                    <li className="detail-list-item">-Andadores y mobiliario urbano: Caminos de fácil acceso, bancas distribuidas estratégicamente y luminarias que iluminan el espacio por la noche.</li>
                    <li className="detail-list-item">-Edificios públicos y comercios: A su alrededor se encuentran restaurantes, tiendas locales y oficinas municipales, lo que mantiene viva la actividad económica y social.</li>
                    <li className="detail-list-item">-Espacio para eventos: La plaza es sede de actos cívicos, ferias locales, celebraciones religiosas y festividades populares durante todo el año.</li>
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Relevancia histórica y cultural</h2>
                <p className="detail-text-content">La Plaza Principal ha sido, desde la fundación del municipio, el punto de reunión y referencia geográfica para los habitantes. Aquí se han llevado a cabo celebraciones históricas, manifestaciones culturales, encuentros sociales y actividades cotidianas que dan identidad a Pabellón de Arteaga.</p>
                <p className="detail-text-content">Durante festividades importantes como la Feria Regional de la Revolución o las celebraciones patrias, la plaza se viste de adornos tradicionales, se ilumina por completo y se convierte en el centro de actividades culturales, gastronómicas y turísticas.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Recomendaciones para visitantes</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Recorre la plaza a pie para apreciar su diseño simétrico y su integración con los edificios históricos circundantes.</li>
                    <li className="detail-list-item">-Ideal para tomar fotografías panorámicas que capturen el Monumento del Reloj, los jardines y la actividad cotidiana.</li>
                    <li className="detail-list-item">-Visítala durante la tarde o noche para disfrutar su iluminación y ambiente familiar.</li>
                    <li className="detail-list-item">-Si visitas en temporada de festividades, aprovecha las actividades culturales, eventos musicales y venta de antojitos típicos.</li>
                    <li className="detail-list-item">-Desde aquí puedes desplazarte fácilmente a pie hacia la Antigua Estación, el Museo del Vagón y otros puntos turísticos.</li>
                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1475456}
              longitude={-102.2792205}
              placeName="Plaza Principal"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Espacio público central y punto de encuentro histórico"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
}

export default PlazaPrincipal;