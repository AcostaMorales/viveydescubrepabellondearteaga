import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import '../../styles/DetailPage.css';

const MonumentoALaVendimia = () => {

  const alt1 = "";
  const galleryImages = [
    {
        src: "/assents/imagenes/MonumentoALaVendimia/Carrusel/MonumentoALaVendimiaC1.jpg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MonumentoALaVendimia/Carrusel/MonumentoALaVendimiaC2.jpg",
        alt: alt1

    },
    {
        src: "/assents/imagenes/MonumentoALaVendimia/Carrusel/MonumentoALaVendimiaC3.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MonumentoALaVendimia/Carrusel/MonumentoALaVendimiaC4.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MonumentoALaVendimia/Carrusel/MonumentoALaVendimiaC5.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MonumentoALaVendimia/Carrusel/MonumentoALaVendimiaC6.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MonumentoALaVendimia/Carrusel/MonumentoALaVendimiaC7.jpeg",
        alt: alt1
    },
    {
        src: "/assents/imagenes/MonumentoALaVendimia/Carrusel/MonumentoALaVendimiaC8.jpeg",
        alt: alt1
    }
    ];
    
    return (
        <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/MonumentoALaVendimia/Encabezado.png"
          headerAlt="Monumento a la Vendimia"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Monumento a la Vendimia</h1>
                <p className="detail-paragraph">La escultura representa a una mujer campesina —la “vendimiadora”— en plena faena de recolección de uvas. En su brazo izquierdo porta una canasta colmada de racimos, colgando desde su muñeca el cesto cargado hacia abajo. Con el brazo derecho, ligeramente elevado, sostiene un racimo de uvas al nivel de su rostro, como observándolo con orgullo y atención.</p>
                <p className="detail-paragraph">La postura corporal sugiere movimiento: el cuerpo inclinado levemente hacia la izquierda, la pierna izquierda adelantada firmemente apoyada y la pierna derecha atrás, con el talón ligeramente levantado, como si estuviese por dar un paso adelante.</p>
                <p className="detail-paragraph">El gesto facial, la posición de cejas y la dirección de la mirada transmiten una expresión de determinación, dignidad y orgullo hacia el fruto de su trabajo.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Contexto historicó y cultural</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-En los años cincuenta, Pabellón de Arteaga contó con producción vitivinícola importante gracias al sistema de riego del estado. La escultura busca homenajear el esfuerzo de quienes participaron en esos cultivos locales.</li>
                    <li className="detail-list-item">-La obra está instalada en un lugar simbólico, visible y de fácil acceso en el municipio, para que tanto visitantes como locales reconozcan la importancia de esa herencia agrícola.</li>
                    <li className="detail-list-item">-Forma parte de la Ruta del Vino y el Queso, uno de los productos turísticos del municipio que incluye visitas al monumento a la vendimia como punto básico en los recorridos.</li>
                    <li className="detail-list-item">-Los recorridos turísticos que incluyen este monumento operan viernes y sábados a partir de las 10:00 h, con un costo de aproximadamente 160 pesos por persona (que incluye transporte, degustación de queso y acceso a vinícolas).</li>
                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1477847}
              longitude={-102.2750041}
              placeName="Monumento a la Vendimia"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Monumento que rinde homenaje a la tradición vitivinícola del municipio"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};

export default MonumentoALaVendimia;