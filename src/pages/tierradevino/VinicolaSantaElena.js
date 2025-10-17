import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const VinicolaSantaElena = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  
  const parrafo1 = "Vinícola Santa Elena es uno de los proyectos enológicos más emblemáticos de Aguascalientes. Con más de 20 años de historia, ha logrado combinar tradición y modernidad para ofrecer experiencias enoturísticas únicas en la región.";
  const parrafo2 = "Aquí puedes conectarte con el vino desde su origen, recorriendo viñedos, bodegas y barricas, mientras conoces sus procesos de producción. Al final, disfrutarás de una cata guiada que revela la identidad y riqueza de esta tierra vitivinícola.";
  const parrafo3 = "Sus tres líneas de vino —Tradicional, Ámfora y Sophie— representan distintas formas de interpretar el terroir hidrocálido, desde métodos clásicos hasta técnicas innovadoras de vinificación.";
    
  const tituloLista1 = "Actividades que puedes realizar";
  const elemento1Lista1 = "Recorridos guiados por viñedos y bodegas: Aprende sobre el cultivo de la vid, el proceso de fermentación y crianza, acompañado por guías especializados.";
  const elemento2Lista1 = "Catas profesionales: Degusta vinos de distintas líneas, descubre aromas, sabores y maridajes en un entorno elegante.";
  const elemento3Lista1 = "Picnics entre viñedos: Vive una experiencia relajada al aire libre con canastas gourmet y vistas espectaculares de los campos.";
  const elemento4Lista1 = "Haz tu propio vino: Participa en talleres enológicos donde puedes embotellar, etiquetar y llevarte tu propia creación personalizada.";
  const elemento5Lista1 = "Eventos especiales y vendimias: Durante temporadas específicas, participa en celebraciones, pisado de uvas, música en vivo y cenas temáticas.";

  const tituloLista2 = "Información práctica para visitantes";
  const elemento1Lista2 = "Reservación previa indispensable.";
  const elemento2Lista2 = "Horario: Miércoles a domingo, 11:00 a 19:00 h.";
  const elemento3Lista2 = "Duración promedio de la visita: 60–90 minutos.";
  const elemento4Lista2 = "Teléfono: 449 198 9131";
  const elemento5Lista2 = "Más información en https://vinicolasantaelena.mx/";
  

  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaSantaElena/Carrusel/VinicolaSantaElenaC1.jpg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaSantaElena/Carrusel/VinicolaSantaElenaC2.jpg",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaSantaElena/Encabezado.png"}
          headerAlt="Vinícola Santa Elena"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Vinícola Santa Elena - Pabellón de Arteaga</h1>
                <p className="detail-paragraph">{parrafo1}</p>
                <p className="detail-paragraph">{parrafo2}</p>
                <p className="detail-paragraph">{parrafo3}</p>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">{tituloLista1}</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-{elemento1Lista1}</li>
                    <li className="detail-list-item">-{elemento2Lista1}</li>
                    <li className="detail-list-item">-{elemento3Lista1}</li>
                    <li className="detail-list-item">-{elemento4Lista1}</li>
                    <li className="detail-list-item">-{elemento5Lista1}</li>
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">{tituloLista2}</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-{elemento1Lista2}</li>
                    <li className="detail-list-item">-{elemento2Lista2}</li>
                    <li className="detail-list-item">-{elemento3Lista2}</li>
                    <li className="detail-list-item">-{elemento4Lista2}</li>
                    <li className="detail-list-item">-{elemento5Lista2}</li>
                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.0946313}
              longitude={-102.3025049}
              placeName="Vinícola Santa Elena"
              address="Pabellon de Arteaga, Aguascalientes, México"
              description=""
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default VinicolaSantaElena;