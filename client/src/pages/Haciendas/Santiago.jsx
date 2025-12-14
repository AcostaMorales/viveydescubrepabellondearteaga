import React from "react";
import Header from "../../components/Header.jsx";
import ImageCarousel from "../../components/ImageCarousel.jsx";
import LocationMap from "../../components/LocationMap.jsx";
import useScrollToTop from "../../hooks/useScrollToTop.jsx";
import '../../styles/DetailPage.css';

const InmaculadaConcepcion = () => {
  useScrollToTop()
  const alt1 = "";
  const parrafo1 = "La Hacienda de Santiago, originalmente conocida como San Jerónimo, tiene una historia que se remonta aproximadamente a 1680. Se encuentra junto al río Santiago, cerca de la presa del Jocoque, y fue un importante centro agrícola y ganadero. En su época, la hacienda tenía una huerta con diversos frutales y nogales, y se dedicaba a la producción lechera, ganadera y agrícola. La propiedad cambió de manos a lo largo del tiempo, siendo las hermanas de la Vega sus últimas dueñas antes de venderla a diferentes personas, hasta que en 1951 pasó a la familia Loera, cuya descendencia la posee actualmente a través de la familia Rosales de Loera.";
  const subtitulo1 = "Origen y nombre";
  const parrafo2 = "Su construcción data de alrededor de 1680 y era conocida previamente como Hacienda de San Jerónimo.";
  const subtitulo2 = "Actividades económicas";
  const parrafo3 = "Era una hacienda con actividades de producción de leche, ganadería y agricultura.";
  const subtitulo3 = "Vegetación";
  const parrafo4 = "Contaba con una huerta con árboles frutales y nogales, producto de su cercanía con fuentes abundantes de agua.";
  const subtitulo4 = "Propiedad";
  const parrafo5 = "Fue adquirida por las hermanas de la Vega en 1936, quienes la vendieron a Pedro Salaver. Posteriormente, Salaver la vendió a José de Loera Gutiérrez en 1951, y desde entonces la propiedad ha permanecido en la familia de Loera, siendo actualmente propiedad de la familia Rosales de Loera.";
  const parrafo6 = "Las hermanas Vega, adquirieron una pintura virreinal de la Virgen de Guadalupe, obra del artista novohispano José de Alcívar, la cual la exhibieron en su casa de la hacienda, posteriormente la pintura fue vendida al Pbro. José Gertrudis Ramos Becerra quien la colocó como la imagen principal de la parroquia de Guadalupe.";
  
  const galleryImages = [
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663458/Capilla_Hacienda_de_Santiago__Pabell%C3%B3n_de_Arteaga__Ags._19_ystvhv.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663457/Capilla_Hacienda_de_Santiago__Pabell%C3%B3n_de_Arteaga__Ags._07_fomkdz.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663446/Capilla_de_Santiago_Pabell%C3%B3n_de_Arteaga_mouyav.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663446/486114102_969059968735329_3413552007093530312_n_tqfcwy.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663445/Capilla_Hacienda_de_Santiago_en_Pabell%C3%B3n_de_Arteaga_fcpoz3.jpg", alt: alt1 },
    
  ];

  const rutaencabezado = "https://res.cloudinary.com/dbebikryr/image/upload/v1765663447/HACIENDA_DE_SANTIAGO_tiutmb.png";

  return (
    <div className="detail-page">
      <Header />

      <div className="detail-content">
        <div className="">
          <img
            src= {rutaencabezado} 
            alt= "Templo de la Inmaculada Concepción"
            className="header-image"
          />
        </div>
        <div className="detail-section">
          <h1 className="detail-main-title">Hacienda de Santiago</h1>
          <p className="detail-paragraph">{parrafo1}</p>
        </div>

        <div className="detail-section">
          <h1 className="detail-main-title">{subtitulo1}</h1>
          <p className="detail-paragraph">{parrafo2}</p>
        </div>
        <div className="detail-section">
          <h1 className="detail-main-title">{subtitulo2}</h1>
          <p className="detail-paragraph">{parrafo3}</p>
        </div>
        <div className="detail-section">
          <h1 className="detail-main-title">{subtitulo3}</h1>
          <p className="detail-paragraph">{parrafo4}</p>
        </div>
        <div className="detail-section">
          <h1 className="detail-main-title">{subtitulo4}</h1>
          <p className="detail-paragraph">{parrafo5}</p>
          <p className="detail-paragraph">{parrafo6}</p>
        </div>

        <ImageCarousel images={galleryImages} title="Galería de imágenes" />

        <LocationMap
          latitude={22.12202737629381}
          longitude={-102.33844361916185}
          placeName="Hacienda de Santiago"
          address="Santiago, Aguascalientes, México"
          description=""
          showDirections={true}
          mapHeight="350px"
        />
      </div>
    </div>
  );
};

export default InmaculadaConcepcion;
