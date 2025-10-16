import React from "react";
import Header from "../components/Header";
import LocationMap from "../components/LocationMap";
import useScrollToTop from "../hooks/useScrollToTop";
import "../styles/DetailPage.css";

const Reloj = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
    
    return (
        <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/Reloj/Encabezado.png"
          headerAlt="Monumento del Reloj"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Monumento del Reloj - Pabellon de Arteaga</h1>
                <p className="detail-paragraph">El Monumento del Reloj es uno de los íconos urbanos más reconocibles de Pabellón de Arteaga. Se encuentra en el corazón de la plaza principal y representa el centro simbólico y social de la ciudad. Su diseño combina líneas arquitectónicas clásicas con detalles modernos, ofreciendo un punto de referencia visual para visitantes y habitantes.</p>
                <p className="detail-paragraph">La torre del reloj es una estructura vertical de varios metros de altura, coronada por un reloj de carátula circular visible desde diferentes ángulos de la plaza. Su presencia marca el paso del tiempo en la vida cotidiana del municipio, siendo testigo de celebraciones, encuentros, ferias y festividades locales.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Significado cultural</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Más que un simple reloj, este monumento representa la unidad comunitaria y la identidad histórica de Pabellón de Arteaga.</li>
                    <li className="detail-list-item">-Es el punto de reunión por excelencia durante eventos cívicos, festivales y ferias regionales.</li>
                    <li className="detail-list-item">-Durante las festividades importantes —como la Feria Regional de la Revolución o los festejos patrios— el monumento se adorna con banderas, luces y ornamentos que realzan su presencia en la plaza.</li>
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Recomendaciones turísticas</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Ideal para fotografías panorámicas de la plaza.</li>
                    <li className="detail-list-item">-Visítalo al atardecer para capturar el juego de luces sobre la torre y su entorno.</li>
                    <li className="detail-list-item">-Es un excelente punto de partida para recorrer los atractivos cercanos: Casa de Madera, Antigua Estación, Archivo Histórico, museos y rutas turísticas.</li>
                    <li className="detail-list-item">-Por su ubicación central, es común encontrar actividades culturales o feriales en sus alrededores.</li>
                </ul>
            </div>

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.147713}
              longitude={-102.2766463}
              placeName="Monumento del Reloj"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Ícono urbano y punto de referencia en la plaza principal"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
}

export default Reloj;