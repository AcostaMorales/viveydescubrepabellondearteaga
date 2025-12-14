import React from "react";
import Header from "../../components/Header.jsx";
import ImageCarousel from "../../components/ImageCarousel.jsx";
import LocationMap from "../../components/LocationMap.jsx";
import useScrollToTop from "../../hooks/useScrollToTop.jsx";
import '../../styles/DetailPage.css';

const InmaculadaConcepcion = () => {
  useScrollToTop()
  const alt1 = "";
  const parrafo1 = "La Hacienda del Mezquite, en Pabellón de Arteaga, se cree que fue fundada alrededor de 1851, con antecedentes que podrían remontarse al coronel Pablo Baranda. Su actividad principal fue la ganadería (incluyendo ganado de lidia) (El Coronel Baranda tenía su propia ganadería la cual era parte de las corridas de toros de la Feria de San Marcos y otras en el país) y la agricultura, y su arquitectura conserva elementos originales como torres y capilla. Fue utilizada como lugar de defensa durante conflictos (Guerra Cristera) y ha sido preservada por sus actuales propietarios para mantener la herencia histórica.";
  const subtitulo1 = "Fundacion";
  const parrafo2 = "Se cree que fue construida alrededor de 1851, aunque se mencionan antecedentes desde el Coronel Pablo Baranda. En la capilla hay una losa con la inscripción 1851.";
  const subtitulo2 = "Actividades económicas";
  const parrafo3 = "Fue un centro importante para la siembra y, sobre todo, la ganadería. Se dedicó a la cría de ganado lechero y, posteriormente, ganado de lidia.";
  const subtitulo3 = "Defensa";
  const parrafo4 = "Durante la época de la guerra (Revolución Mexicana), la hacienda funcionó como punto de defensa. Se conservan fortines para protegerse de invasiones, y se dice que fue un lugar de refugio, especialmente durante la época cristera.";
  const subtitulo4 = "Conservación";
  const parrafo5 = "Se ha mantenido con mucho esfuerzo a pesar de la antigüedad, preservando la estructura original y las torres que hoy se usan para almacenar materiales de mantenimiento.";
  const subtitulo5 = "Arquitectura";
  const elemento1Lista1 = "Torres: Tenían un uso original como bodegas para almacenar alimento, pero actualmente se utilizan para guardar materiales de construcción.";
  const elemento2Lista1 = "Capilla: El templo de Nuestra Señora del Refugio comenzó a construirse en 1869 en honor a los abuelos de la actual propietaria, y fue santificada por el Arzobispo de Guadalajara, quien viajó al Mezquite a celebrar una misa especial.";
  const elemento3Lista1 = "Símbolo: El alacrán es un símbolo de la hacienda, representando el carácter fuerte de uno de sus dueños.";
  const elemento4Lista1 = "La capilla es de estilo neoclásico sobrio con una torre campanario de una base, construida sobre una base para que su perspectiva fuera de mayor altura.";
  
  const galleryImages = [
    { src: "https://res.cloudinary.com/dbebikryr/image/upload/v1765663429/Capilla_de_Nuestra_Se%C3%B1ora_del_Refugio_en_Hacienda_El_Mezquite_khalpl.jpg", alt: alt1 },
    
  ];

  const rutaencabezado = "https://res.cloudinary.com/dbebikryr/image/upload/v1765663429/HACIENDA_DE_EL_MEZQUITE_dcew0q.png";

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
          <h1 className="detail-main-title">Hacienda de el Mezquite</h1>
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
        </div>
        <div className="detail-section">
          <h2 className="detail-section-title">{subtitulo5}</h2>
          <ul className="detail-list">
            <li className="detail-list-item">-{elemento1Lista1}</li>
            <li className="detail-list-item">-{elemento2Lista1}</li>
            <li className="detail-list-item">-{elemento3Lista1}</li>
            <li className="detail-list-item">-{elemento4Lista1}</li>
          </ul>
        </div>


        <ImageCarousel images={galleryImages} title="Galería de imágenes" />

        {/*<LocationMap
          latitude={}
          longitude={-102.33844361916185}
          placeName="Hacienda de Santiago"
          address="Santiago, Aguascalientes, México"
          description=""
          showDirections={true}
          mapHeight="350px"
        />*/}
      </div>
    </div>
  );
};

export default InmaculadaConcepcion;
