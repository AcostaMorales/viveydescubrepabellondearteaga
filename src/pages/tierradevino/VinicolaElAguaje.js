import React from "react";
import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import LocationMap from "../../components/LocationMap";
import useScrollToTop from "../../hooks/useScrollToTop";
import '../../styles/DetailPage.css';

const RanchoUbuntu = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  
  const parrafo1 = "Vinícola El Aguaje fue fundada en 2012 con la misión de producir vinos de alta calidad mediante un proceso meticuloso. Su viñedo se localiza en El Garabato, municipio de Pabellón de Arteaga, a una altitud de 1,860 m s.n.m., lo que ofrece condiciones climáticas privilegiadas para la vid.";
  const parrafo2 = "Sus vinos reposan en barricas de roble francés blanco, lo que les otorga carácter y distinción. Han sido galardonados en concursos nacionales e internacionales como el Concurso de Bruselas y Global Wine 2021.";
  
  const tituloLista1 = "Experiencias y actividades";
  const elemento1Lista1 = "Recorridos guiados por viñedos, bodegas y cava, conectando con la naturaleza y con el proceso de elaboración del vino.";
  const elemento2Lista1 = "Cata de vinos con maridaje de charcutería, aprendiendo a apreciar color, aroma y sabor de sus etiquetas.";
  const elemento3Lista1 = "Restaurante a pie de viñedo, con cocina campirana hecha a las brasas y menú armonizado con vinos de la casa.";
  const elemento4Lista1 = "Eventos sociales o corporativos, con espacios ideales para bodas, convivios y reuniones.";
  const elemento5Lista1 = "Pet Friendly: puedes llevar a tus mascotas y disfrutar del entorno vinícola.";

  const tituloLista2 = "Datos prácticos para visitantes";
  const elemento1Lista2 = "Es necesaria la reservación anticipada para recorridos, catas o ingreso.";
  const elemento2Lista2 = "Tarifas aproximadas";
  const elemento3Lista2 = "Restaurante abierto viernes, sábado y domingo de 13:00 a 18:00 h.";
  const elemento4Lista2 = "Capacidad estimada: hasta 300 personas.";
  const elemento5Lista2 = "Contacto y reservaciones: WhatsApp 449 980 3785";
  const elemento6Lista2 = "Más información: https://vinicolaelaguaje.mx/";

  const elemento1Lista3 = "Recorrido: $100 MXN por persona (duración aprox. 30 minutos).";
  const elemento2Lista3 = "Cata: $800 MXN por persona aprox. (duración 1 hora, incluye 3 etiquetas).";
  


  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaElAguaje/Carrusel/VinicolaElAguajeC1.jpg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaElAguaje/Carrusel/VinicolaElAguajeC2.jpg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaElAguaje/Carrusel/VinicolaElAguajeC3.jpg",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/VinicolaElAguaje/Encabezado.png"}
          headerAlt="Vinícola El Aguaje"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Vinícola El Aguaje - Pabellón de Arteaga</h1>
                <p className="detail-paragraph">{parrafo1}</p>
                <p className="detail-paragraph">{parrafo2}</p>
                
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
                    <li className="detail-list-item">-{elemento3Lista2}</li>
                    <li className="detail-list-item">-{elemento4Lista2}</li>
                    <li className="detail-list-item">-{elemento5Lista2}</li>
                    <li className="detail-list-item">-{elemento6Lista2}</li>
                    
                </ul>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">{elemento2Lista2}</h2>
                <ul className="detail-list">
                    <li className="detail-list-item">-{elemento1Lista3}</li>
                    <li className="detail-list-item">-{elemento2Lista3}</li>
                </ul>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.0812702}
              longitude={-102.331163}
              placeName="Vinicola El Aguaje"
              address="Pabellon de Arteaga, Aguascalientes, México"
              description=""
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default RanchoUbuntu;