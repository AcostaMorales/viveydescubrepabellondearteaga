import React from "react";
import Header from "../../components/Header.jsx";
import ImageCarousel from "../../components/ImageCarousel.jsx";
import LocationMap from "../../components/LocationMap.jsx";
import useScrollToTop from "../../hooks/useScrollToTop.jsx";
import '../../styles/DetailPage.css';

const ParroquiaDeGuadalupe = () => {
  useScrollToTop();
  const rutaImagenesBase = "https://raw.githubusercontent.com/AcostaMorales/AlmacenDeImagenes/main/";
  const alt1 = "";
  const parrafo1 = "La Parroquia de Guadalupe, también conocida como Templo Parroquial de Guadalupe, es una de las construcciones religiosas más representativas del municipio. Construida alrededor de 1946, destaca por su arquitectura moderna con influencias contemporáneas que contrastan con estilos eclesiásticos tradicionales.";
  const parrafo2 = "En su interior se encuentra una pintura de la Virgen de Guadalupe realizada por el artista José de Alcívar, pieza de gran valor artístico y devocional.";
  const parrafo3 = "La parroquia es un punto simbólico para la comunidad y forma parte del paisaje urbano central de Pabellón de Arteaga, siendo visible desde varios puntos y fungiendo como referencia en la ciudad.";

  const tituloLista1 = "Funciones, uso y relevancia";
  const elemento1Lista1 = "Horario de misas: ofrece múltiples misas dominicales y diarias.";
  const elemento2Lista1 = "Fiesta patronal: celebración principal el 12 de diciembre en honor a la Virgen de Guadalupe.";
  const elemento3Lista1 = "Sede de sacramentos como bautizos, bodas y confirmaciones.";
  const elemento4Lista1 = "Punto de reunión espiritual, social y cultural de la comunidad..";

  const tituloLista2 = "Experiencia turística sugerida";
  const elemento1Lista2 = "Recorrido visual por la fachada moderna y su arquitectura.";
  const elemento2Lista2 = "Observación y fotografía de la pintura de la Virgen de Guadalupe en el interior.";
  const elemento3Lista2 = "Asistencia a misa para conocer la vida litúrgica local.";
  const elemento4Lista2 = "Visita durante la festividad del 12 de diciembre para vivir las celebraciones patronales.";
  const elemento5Lista2 = "Integración a la ruta del centro histórico por su cercanía con la plaza y otros monumentos locales.";

  const galleryImages = [
    { src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/ParroquiaDeGudalupe/Carrusel/ParroquiaGDLC1.png", alt: alt1 },
    { src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/ParroquiaDeGudalupe/Carrusel/ParroquiaGDLC2.png", alt: alt1 },
    { src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/ParroquiaDeGudalupe/Carrusel/ParroquiaGDLC3.png", alt: alt1 },
    { src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/ParroquiaDeGudalupe/Carrusel/ParroquiaGDLC4.jpeg", alt: alt1 },
    // ... (mantén el resto tal como lo tenías)
    { src: rutaImagenesBase + "ImagenesRepertorio/Contenido/RutaReligiosa/ParroquiaDeGudalupe/Carrusel/ParroquiaGDLC23.jpeg", alt: alt1 }
  ];

  const rutaencabezado = "https://res.cloudinary.com/dbebikryr/image/upload/v1762064283/Encabezado_ieeaki.png";

  return (
    <div className="detail-page">
      <Header />

      <div className="detail-content">
        <div className="">
          <img
            src= {rutaencabezado} 
            alt= "Parroquia de Guadalupe"
            className="header-image"
          />
        </div>
        <div className="detail-section">
          <h1 className="detail-main-title">Parroquia de Guadalupe - Pabellón de Arteaga</h1>
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

        <ImageCarousel images={galleryImages} title="Galería de imágenes" />

        <LocationMap
          latitude={22.1489964}
          longitude={-102.2769552}
          placeName="Parroquia de Guadalupe"
          address="Pabellón de Arteaga, Aguascalientes, México"
          description="Iglesia parroquial de gran importancia espiritual y arquitectónica para la comunidad de Pabellón de Arteaga"
          showDirections={true}
          mapHeight="350px"
        />
      </div>
    </div>
  );
};

export default ParroquiaDeGuadalupe;
