import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const ParqueInfantil = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();

  const alt1 = "";

  const galleryImages = [
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC1.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC2.png",
        alt: alt1

    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC3.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC4.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC5.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC6.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC7.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC8.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC9.png",
        alt: alt1
    },
    {
        src: "/assents/imagenes/ParqueInfantil/Carrusel/ParqueInfantilC10.png",
        alt: alt1
    }
    ];
    
    return (
        <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/ParqueInfantil/Encabezado.png"
          headerAlt="Parque Infantil"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Parque Infantil - Pabellon de Arteaga</h1>
                <p className="detail-paragraph">El Parque Infantil de Pabellón de Arteaga es un espacio recreativo emblemático en el corazón del municipio, diseñado para el disfrute familiar, la recreación infantil y el descanso de visitantes. Se encuentra estratégicamente ubicado cerca de los principales atractivos históricos y culturales de la ciudad, lo que lo convierte en una parada ideal dentro de cualquier recorrido turístico.</p>
                <p className="detail-paragraph">Cuenta con juegos tradicionales y modernos, amplias áreas verdes, albercas recreativas, senderos peatonales y zonas de convivencia con baños y mobiliario urbano funcional. Su diseño abierto y seguro permite disfrutar del clima, realizar actividades al aire libre y refrescarse en temporada de calor.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Elementos destacados</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Juegos infantiles: Resbaladillas, columpios, estructuras para trepar y áreas seguras para niñas y niños pequeños.</li>
                    <li className="detail-list-item">-Áreas verdes: Césped bien cuidado y árboles que brindan sombra, ideales para picnic, lectura o descanso.</li>
                    <li className="detail-list-item">-Senderos y mobiliario urbano: Caminos accesibles, bancas, luminarias y cestos de basura, que facilitan la circulación y el uso ordenado del parque.</li>
                    <li className="detail-list-item">-Albercas recreativas: El parque cuenta con albercas de uso público, especialmente populares durante los meses cálidos. Estas áreas acuáticas están diseñadas para ofrecer diversión segura a familias y visitantes.</li>
                    <li className="detail-list-item">-Baños públicos: Instalaciones limpias y funcionales, ubicadas estratégicamente para comodidad de los visitantes.</li>
                    <li className="detail-list-item">-Zona de reunión: Amplios espacios para grupos familiares, actividades recreativas o visitas escolares.</li>
                    <li className="detail-list-item">-Ubicación estratégica: A pocos pasos de la Antigua Estación, el Monumento del Reloj y otros puntos turísticos importantes.</li>
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Importancia turística y comunitaria</h2>
                <p className="detail-text-content">Este parque no solo es un punto de recreación local, sino un complemento perfecto a la oferta turística del centro histórico de Pabellón de Arteaga. Su cercanía con monumentos, museos y espacios culturales permite que las familias disfruten de un recorrido que mezcla historia, descanso y diversión acuática.</p>
                <p className="detail-text-content">Durante festividades locales y ferias, el parque se convierte en un punto neurálgico de convivencia, con actividades culturales, juegos tradicionales, zonas de comida y actividades recreativas para todas las edades.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Recomendaciones para visitantes</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Ideal para familias con niñas, niños y personas mayores que buscan un lugar fresco y accesible.</li>
                    <li className="detail-list-item">-Lleva traje de baño, toalla y protector solar si planeas usar las albercas.</li>
                    <li className="detail-list-item">-Usa los senderos para recorrer cómodamente las distintas zonas del parque.</li>
                    <li className="detail-list-item">-Aprovecha las áreas verdes y sombreadas para descansar entre visitas turísticas.</li>
                    <li className="detail-list-item">-Verifica horarios de apertura de las albercas y disponibilidad de baños públicos en temporada alta.</li>
                </ul>

            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1505333}
              longitude={-102.2761075}
              placeName="Parque Infantil"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Espacio público recreativo / parque familiar con albercas"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
}

export default ParqueInfantil;