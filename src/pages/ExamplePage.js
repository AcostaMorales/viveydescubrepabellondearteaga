import React from 'react';
import ImageHeader from '../components/ImageHeader';
import './ExamplePage.css';

const ExamplePage = () => {
  return (
    <div className="example-page">
      {/* Usar el ImageHeader con una imagen específica */}
      <ImageHeader 
        imageSrc="/assents/imagenes/AntiguaEstacion/Encabezado.png"
        imageAlt="Pabellón de Arteaga"
      />
      
      {/* Contenido de la página con margen superior para no quedar detrás del header */}
      <div className="example-content">
        <h1>Ejemplo de página con ImageHeader</h1>
        <p>Este es un ejemplo de cómo usar el nuevo componente ImageHeader.</p>
        <p>El header está fijo en la parte superior y ocupa una cuarta parte de la pantalla.</p>
      </div>
    </div>
  );
};

export default ExamplePage;