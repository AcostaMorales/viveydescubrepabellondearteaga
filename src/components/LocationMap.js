import React, { useState } from 'react';
import './LocationMap.css';

const LocationMap = ({ 
  latitude, 
  longitude, 
  placeName, 
  address, 
  description,
  showDirections = true,
  mapHeight = "300px"
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // URLs para diferentes servicios de mapas
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${latitude},${longitude}`;
  const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
  
  // URL para embeded map de Google Maps
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.123!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1ses!2smx!4v1635789012345!5m2!1ses!2smx`;

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const openInMaps = (url) => {
    window.open(url, '_blank');
  };

  const copyCoordinates = () => {
    const coordinates = `${latitude}, ${longitude}`;
    navigator.clipboard.writeText(coordinates).then(() => {
      alert('Coordenadas copiadas al portapapeles');
    }).catch(() => {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = coordinates;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Coordenadas copiadas al portapapeles');
    });
  };

  return (
    <div className="location-map-container">
      <div className="location-info">
        <h3 className="location-title">📍 Ubicación</h3>
        {placeName && <h4 className="place-name">{placeName}</h4>}
        {address && <p className="location-address">{address}</p>}
        {description && <p className="location-description">{description}</p>}
        
        <div className="coordinates-info">
          <p className="coordinates">
            <strong>Coordenadas:</strong> {latitude}, {longitude}
          </p>
          <button 
            className="copy-coordinates-btn"
            onClick={copyCoordinates}
            title="Copiar coordenadas"
          >
            📋 Copiar
          </button>
        </div>
      </div>

      <div className="map-container" style={{ height: mapHeight }}>
        {!mapLoaded && (
          <div className="map-loading">
            <div className="loading-spinner"></div>
            <p>Cargando mapa...</p>
          </div>
        )}
        
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${placeName || 'ubicación'}`}
          onLoad={handleMapLoad}
        />
      </div>

      {showDirections && (
        <div className="directions-buttons">
          <h4 className="directions-title">🗺️ Abrir en:</h4>
          <div className="buttons-grid">
            <button 
              className="direction-btn google-maps"
              onClick={() => openInMaps(googleMapsUrl)}
            >
              <span className="btn-icon">🗺️</span>
              Google Maps
            </button>
            
            <button 
              className="direction-btn apple-maps"
              onClick={() => openInMaps(appleMapsUrl)}
            >
              <span className="btn-icon">🍎</span>
              Apple Maps
            </button>
            
            <button 
              className="direction-btn waze"
              onClick={() => openInMaps(wazeUrl)}
            >
              <span className="btn-icon">🚗</span>
              Waze
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationMap;