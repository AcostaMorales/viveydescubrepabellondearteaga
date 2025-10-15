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
  
  // URL para embeded map de Google Maps con marcador visible
  // Usando solo coordenadas exactas para mostrar la ubicación real precisa
  const embedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&z=16&output=embed`;

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