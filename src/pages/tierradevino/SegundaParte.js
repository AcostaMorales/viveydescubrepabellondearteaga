import React from "react";
import Header from "../../components/Header";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const SegundaParte = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  
  const parrafo1 = "Vinos Segunda Parte nace del deseo de rescatar una tradición vitivinícola familiar. Su fundadora, Maricela Acosta Herrera, decidió honrar el legado de su padre —productor de vid décadas atrás— creando un vino propio para su restaurante familiar.";
  const parrafo2 = "El nombre “Segunda Parte” representa la continuación de esa historia: un nuevo capítulo que busca conquistar paladares locales y proyectar el vino aguascalentense hacia nuevos horizontes.";
  
  const tituloLista1 = "Características y etiquetas";
  const parrafo3 = "Actualmente, Segunda Parte ofrece siete etiquetas, entre las que destacan";
  const elemento1Lista1 = "Blend Tinto — 80 % Tempranillo y 20 % Malbec; perfil equilibrado y elegante.";
  const elemento2Lista1 = "Rubí Rosado Cabernet semi-seco — rosado de dulzor moderado, refrescante.";
  const elemento3Lista1 = "Muscat (vino de postre) — dulce con notas licorosas, ideal para cerrar comidas.";
  const elemento4Lista1 = "Clericó embotellado — elaborado con jugos naturales, sin conservadores ni refrescos, perfecto para coctelería ligera.";
  const parrafo4 = "Estos vinos pueden degustarse actualmente en Restaurante Las Camelinas, con planes de abrir un punto de venta propio en Aguascalientes capital próximamente.";

  const tituloLista2 = "Experiencia turística sugerida";
  const elemento1Lista2 = "Degustaciones guiadas de las distintas etiquetas, con explicación de aromas, maridajes y procesos.";
  const elemento2Lista2 = "Experiencia gastronómica en Las Camelinas, donde estos vinos nacieron como parte del menú.";
  const elemento3Lista2 = "Compra de botellas y paquetes especiales para llevar como recuerdo local o regalo.";
  const elemento4Lista2 = "Participación en eventos vinícolas y ferias enológicas locales donde Segunda Parte tiene presencia.";
  
  

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinosSegundaParte/Encabezado.png"}
          headerAlt="Vinos Segunda Parte"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Vinos Segunda Parte - Pabellón de Arteaga</h1>
                <p className="detail-paragraph">{parrafo1}</p>
                <p className="detail-paragraph">{parrafo2}</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">{tituloLista1}</h2>
                <p className="detail-text-content">{parrafo3}</p>
                <ul className="detail-list">
                    <li className="detail-list-item">-{elemento1Lista1}</li>
                    <li className="detail-list-item">-{elemento2Lista1}</li>
                    <li className="detail-list-item">-{elemento3Lista1}</li>
                    <li className="detail-list-item">-{elemento4Lista1}</li>
                </ul>
                <p className="detail-text-content">{parrafo4}</p>
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
            

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1377232}
              longitude={-102.2976833}
              placeName="Vinos Segunda Parte"
              address="Pabellon de Arteaga, Aguascalientes, México"
              description=""
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default SegundaParte;