import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const BodegasOrigen = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/BodegasElOrigen/Carrusel/BodegasElorigenC1.jpg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/BodegasElOrigen/Carrusel/BodegasElOrigenC2.jpeg",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/BodegasElOrigen/Encabezado.png"}
          headerAlt="Bodeas Origen"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Bodegas Origen - Pabellón de Arteaga</h1>
                <p className="detail-paragraph">Aquí no solo caminas entre parras…</p>
                <p className="detail-paragraph">En #BodegasOrigen recorres viñedos, barricas y aromas; conectas con la historia y el origen del vino en Aguascalientes, descubriendo la riqueza agrícola, cultural y sensorial de esta región vitivinícola.</p>
                <p className="detail-paragraph">Durante el recorrido, podrás caminar entre viñedos, conocer los procesos de fermentación y crianza en la sala de barricas, y dejarte envolver por la atmósfera única de este lugar. La experiencia culmina con una cata guiada, donde degustarás vinos locales que expresan los auténticos sabores de la tierra.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Elementos destacados</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Viñedos locales: Cultivados en suelos fértiles y clima semiárido, ideales para variedades de uva emblemáticas de la región.</li>
                    <li className="detail-list-item">-Sala de barricas: Un espacio íntimo donde el vino reposa rodeado de aromas a madera y fruta.</li>
                    <li className="detail-list-item">-Cata guiada: Degustación de vinos locales cuidadosamente elaborados, acompañada de explicación profesional.</li>
                    <li className="detail-list-item">-Tienda y souvenirs: Venta de vinos y productos gourmet de la región, perfectos para llevar un pedacito de la experiencia a casa.</li>
                    <li className="detail-list-item">-Entorno natural: Ideal para fotografía, paseos y actividades enoturísticas.</li>
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Relevancia turística y cultural</h2>
                <p className="detail-text-content">Bodegas Origen forma parte esencial de la Ruta del Vino y el Queso de Aguascalientes, consolidándose como un punto clave para quienes buscan experiencias enoturísticas auténticas. Esta vinícola rescata la tradición vitivinícola histórica de Pabellón de Arteaga y la transforma en una propuesta turística moderna, combinando paisaje, historia, sabor y hospitalidad.</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Recomendaciones para visitantes</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-Ideal para parejas, grupos de amigos, turistas culturales y amantes del vino.</li>
                    <li className="detail-list-item">-Lleva calzado cómodo y sombrero para caminar por los viñedos.</li>
                    <li className="detail-list-item">-Reserva con anticipación para participar en recorridos y catas guiadas.</li>
                    <li className="detail-list-item">-No olvides tu cámara: las vistas al atardecer entre las parras son espectaculares.</li>
                    <li className="detail-list-item">-Pregunta por actividades especiales en temporada de vendimia.</li>

                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.0520575}
              longitude={-102.2947483}
              placeName="Bodegas Origen"
              address="San Francisco de los Romos, Aguascalientes, México"
              description="Vinícola que ofrece recorridos, catas y experiencias enoturísticas"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default BodegasOrigen;