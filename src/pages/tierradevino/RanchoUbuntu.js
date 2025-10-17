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
  
  const parrafo1 = "Rancho Ubuntu es un proyecto de turismo rural y producción sustentable vinculado con la comunidad local. Se basa en el concepto “Ubuntu” — “Yo soy porque nosotros somos” — promoviendo experiencias educativas, gastronómicas y vivenciales. ";
  const parrafo2 = "Además de ser productor de cordero certificado bajo estándares Halal, esta iniciativa social busca transformar cadenas productivas y ofrecer un turismo consciente.";

  const tituloLista1 = "Actividades y atractivos";
  const elemento1Lista1 = "Recorridos guiados por el rancho para conocer el manejo ovino, el ciclo productivo y la visión sustentable.";
  const elemento2Lista1 = "Degustación y banquetes con cordero preparado en el rancho bajo certificación halal.";
  const elemento3Lista1 = "Participación en experiencias culinarias desde la cría hasta la mesa, con explicación de prácticas éticas de producción de carne.";
  const elemento4Lista1 = "Espacios para eventos y celebraciones en un entorno natural y rural.";

  const tituloLista2 = "Datos prácticos";
  const elemento1Lista2 = "Rancho Ubuntu está a unos 30 minutos de la ciudad de Aguascalientes.";
  const elemento2Lista2 = "Horario de visitas: 10:00 a 18:30 h.";
  const elemento3Lista2 = "Precio de entrada estimado: $350 MXN adultos, $280 MXN niños (6 a 10 años).";
  const elemento4Lista2 = "Primer rancho con certificación Halal en México, garantizando prácticas de crianza y sacrificio conforme a estándares internacionales.";
  


  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/HaciendaDeLetras/Carrusel/HaciendaDeLetrasC1.jpg",
      alt: alt1
    },
    {
      src: rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/HaciendaDeLetras/Carrusel/HaciendaDeLetrasC2.jpeg",
      alt: alt1
    }
  ];

  return (
    <div className="detail-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage={rutaImagenesBase + "ImagenesRepertorio/Contenido/TierraDeVinos/HaciendaDeLetras/Encabezado.png"}
          headerAlt="Hacienda de Letras"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página optimizado sin espacios en blanco */} 
        <div className="detail-content">
            <div className="detail-section">
                <h1 className="detail-main-title">Rancho Ubuntu - Pabellón de Arteaga</h1>
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
                    
                </ul>
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
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.101652}
              longitude={-102.340571}
              placeName="Hacienda de Letras"
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