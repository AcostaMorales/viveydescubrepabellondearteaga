import React from "react";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import LocationMap from "../components/LocationMap";
import useScrollToTop from "../hooks/useScrollToTop";
import "./AntiguaEstacion.css";

const AntiguaEstacion = () => {
  // Hook para hacer scroll al inicio al cargar la página
  useScrollToTop();
  
  // Datos de las imágenes para el carrusel
  const galleryImages = [
    {
      src: "/assents/imagenes/AntiguaEstacion/Carrusel/AntiguaEstacionC1.png",
      alt: "Fachada principal de la estación."
    },
    {
      src: "/assents/imagenes/AntiguaEstacion/Carrusel/AntiguaEstacionC2.png",
      alt: "Fachada principal de la estación."
    },
    {
      src: "/assents/imagenes/AntiguaEstacion/Carrusel/AntiguaEstacionC3.png",
      alt: "Fachada principal de la estación."
    },
    {
      src: "/assents/imagenes/AntiguaEstacion/Carrusel/AntiguaEstacionC4.png",
      alt: "Vías del ferrocarril y entorno inmediato"
    },
    {
      src: "/assents/imagenes/AntiguaEstacion/Carrusel/AntiguaEstacionC5.png",
      alt: "Vías del ferrocarril y entorno inmediato"
    },
    {
      src: "/assents/imagenes/AntiguaEstacion/Carrusel/AntiguaEstacionC6.png",
      alt: "Vías del ferrocarril y entorno inmediato"
    },
    {
      src: "/assents/imagenes/AntiguaEstacion/Carrusel/AntiguaEstacionC7.png",
      alt: "Detalles arquitectónicos interiores y exteriores."
    }
  ];

  return (
    <div className="antigua-estacion-page">
        {/* Header con imagen de fondo integrada */}
        <Header 
          headerImage="/assents/imagenes/AntiguaEstacion/Encabezado.png"
          headerAlt="Antigua Estación del Ferrocarril"
          showHeaderImage={true}
        />
        
        {/* Contenido de la página con margen superior para no quedar detrás del header */} 
        <div className="antigua-estacion-content">
            <div className="antigua-estacion-history">
                <h1 className="antigua-estacion-title">Antigua estación del ferrocarril - Pabellon de Arteaga</h1>
                <p className="antigua-estacion-parrafo">La Antigua Estación del Ferrocarril es uno de los sitios más emblemáticos de Pabellón de Arteaga, Aguascalientes. Construida a principios del siglo XX, esta estación fue parte fundamental en la vida económica y social del municipio, ya que a través de sus vías se transportaban personas, mercancías y materiales que impulsaron el desarrollo de la región.</p>
                <p className="antigua-estacion-parrafo">La llegada del ferrocarril significó un punto de encuentro para los primeros pobladores, muchos de ellos trabajadores que participaron en la construcción de la Presa Calles y en el crecimiento urbano del municipio. La estación se convirtió en símbolo de progreso y modernidad, y hasta el día de hoy permanece como un vestigio histórico que conecta a las nuevas generaciones con sus raíces.</p>
                <p className="antigua-estacion-parrafo">Su arquitectura conserva el estilo tradicional de las estaciones de tren mexicanas de la época, con detalles que evocan la nostalgia del pasado. Actualmente, es un espacio que atrae tanto a locales como a turistas, interesados en descubrir la historia ferroviaria de Aguascalientes.</p>
            </div>
            <div className="antigua-estacion-valor">
                <h2 className="antigua-estacion-title">Valor turístico</h2>
                <ul>
                    <li>-Representa la memoria viva del desarrollo ferroviario en la región.</li>
                    <li>-Sitio ideal para quienes buscan conocer el patrimonio histórico de Pabellón de Arteaga</li>
                    <li>-Lugar perfecto para el turismo cultural y de raíces.</li>
                </ul>
            </div>
            <div className="antigua-estacion-experiencia-visitante">
                <h2>Experiencia para el visitante</h2>
                <p>Un recorrido por la Antigua Estación permite imaginar cómo era la dinámica de los viajes en tren en el siglo pasado, y entender su importancia en la consolidación de la identidad del municipio. Su atmósfera histórica invita a la reflexión y al disfrute de un espacio lleno de significado.</p>
            </div>
            
            {/* Carrusel de imágenes */}
            <ImageCarousel 
              images={galleryImages}
              title="Galería de imágenes"
            />

            {/* Mapa y geolocalización */}
            <LocationMap 
              latitude={22.1464336}
              longitude={-102.2749591}
              placeName="Antigua Estación de Ferrocarril"
              address="Pabellón de Arteaga, Aguascalientes, México"
              description="Sitio histórico emblemático del desarrollo ferroviario en la región"
              showDirections={true}
              mapHeight="350px"
            />
        </div>
    </div>
  );
};
export default AntiguaEstacion;