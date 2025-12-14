import React from "react";
import Header from "../../components/Header.jsx";
import ImageCarousel from "../../components/ImageCarousel.jsx";
import LocationMap from "../../components/LocationMap.jsx";
import useScrollToTop from "../../hooks/useScrollToTop.jsx";
import '../../styles/DetailPage.css';

const InmaculadaConcepcion = () => {
  useScrollToTop()
  const alt1 = "";
  const parrafo1 = "La Hacienda El Garabato fue fundada en el siglo XVII como Hacienda de San Isidro Labrador y se convirtió en un importante centro de producción agrícola y ganadera, alcanzando su auge en el siglo XIX como una de las principales ganaderías de toros de lidia en México. Su nombre proviene de una planta local, el garabatillo, y su arquitectura, que incluye una capilla neorrománica diseñada por Refugio Reyes Rivas, es una mezcla de estilos neoclásico, barroco y porfiriano. Tras perder la mayor parte de su extensión por la Ley Agraria, hoy funciona como un centro social y cultural.";
  const subtitulo1 = "Fundación";
  const parrafo2 = "Se estableció en el siglo XVII con el nombre de Hacienda de San Isidro Labrador.";
  const subtitulo2 = "Actividades económicas";
  const parrafo3 = "Inicialmente se dedicó a la agricultura y la ganadería.";
  const subtitulo3 = "Crianza de ganado bravo";
  const parrafo4 = "Llegó a ser una de las primeras y más importantes ganaderías de toros de lidia en México.";
  const titulo1 = "Arquitectura y elementos notables del casco de la Hacienda";
  const subtitulo4 = "Capilla";
  const parrafo5 = "La capilla principal es obra del arquitecto Refugio Reyes Rivas, construida en 1893 y con decoraciones terminadas en 1897.";
  const subtitulo5 = "Capilla Antigua";
  const parrafo6 = "Posee una capilla más antigua del siglo XVIII con una portada de influencia barroca.";
  const subtitulo6 = "Casa Grande";
  const parrafo7 = "De estilo neoclásico y con elementos decorativos porfirianos";
  const subtitulo7 = "Otros elementos";
  const parrafo8 = "La hacienda también cuenta con dependencias como caballerizas, trojes y una tienda de raya.";
  const subtitulo8 = "Impacto de la Ley Agraria";
  const parrafo9 = "En 1972, la hacienda fue despojada de casi todas sus hectáreas debido a la Ley Agraria, conservando solo una porción de terreno.";
  const subtitulo9 = "Transformación actual";
  const parrafo10 = "Hoy en día, la Hacienda El Garabato opera como un espacio para eventos sociales, culturales, taurinos y religiosos.";
  
  
  const galleryImages = [
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663395/543405284_1138213755116530_6069547733503308158_n_zcqysa.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663395/544611421_1138213628449876_8811328300161708372_n_i2a5kt.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663395/543982952_1138213691783203_7906158728003318307_n_bqa94q.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663394/543123101_1138213591783213_263384948504809581_n_olrfgo.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663393/543112219_1138212918449947_205529423587001701_n_bcjo29.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663392/543107110_1138213361783236_2162346330896433340_n_fjhpzn.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663392/542958390_1138213048449934_5566214525549262895_n_vdwogv.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663392/543036696_1138213318449907_3584509422416752322_n_djpzaw.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663391/541432315_1138213451783227_7910920281788782431_n_jep00s.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663391/541784951_1138213095116596_6236430287653967877_n_g3or8k.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663391/543050274_1138213535116552_5903476463062642966_n_kt4jfn.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663388/542574742_1138213655116540_8085922341017634991_n_taovew.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663388/541756698_1138212981783274_1390920492190569026_n_jwq5km.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663388/541788575_1138213148449924_5957099524009399781_n_hkfffi.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663386/544839067_1138213218449917_1394917874296256278_n_wjbvlz.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663386/528382151_1149313273894431_8306761019752639704_n_xxopwo.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663386/544636733_1138213275116578_6708783817568561013_n_iviilu.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663386/528416120_1149313223894436_7378857436938386579_n_zizqsy.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663385/Hacienda-Garabato-02-683x1024_xawh8z.jpg", alt: alt1 },
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663385/528293017_1149313307227761_1565854388146394883_n_ql7dkd.jpg", alt: alt1 },
    
    
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
          <h1 className="detail-main-title">Hacienda de Garabato</h1>
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
          <h1 className="detail-main-title">{titulo1}</h1>
          <h2 className="detail-section-title">{subtitulo4}</h2>
          <p className="detail-paragraph">{parrafo5}</p>
          <h2 className="detail-section-title">{subtitulo5}</h2>
          <p className="detail-paragraph">{parrafo6}</p>
          <h2 className="detail-section-title">{subtitulo6}</h2>
          <p className="detail-paragraph">{parrafo7}</p>
          <h2 className="detail-section-title">{subtitulo7}</h2>
          <p className="detail-paragraph">{parrafo8}</p>
          <h2 className="detail-section-title">{subtitulo8}</h2>
          <p className="detail-paragraph">{parrafo9}</p>
          <h2 className="detail-section-title">{subtitulo9}</h2>
          <p className="detail-paragraph">{parrafo10}</p>
          
        </div>

        <ImageCarousel images={galleryImages} title="Galería de imágenes" />

        <LocationMap
          latitude={22.08572940896536}
          longitude={-102.33852086955872}
          placeName="Hacienda de Garabato"
          address="Ejido de Garabato, Aguascalientes, México"
          description=""
          showDirections={true}
          mapHeight="350px"
        />
      </div>
    </div>
  );
};

export default InmaculadaConcepcion;

