import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer"
    style={{
      backgroundImage: 'url(/assents/imagenes/Fondopagina/FondoPiePagina.svg)', 
    }}
    >
      
      <div className="footer-buttons-container">
        <button 
        className="footer-button"
        onClick={() => window.open('https://vivemexico.online/aguascalientes/', '_blank')}
      >
        <img
          src = "/assents/imagenes/Iconos/aguascalientes.png"
          alt = "Icono de aguascalientes"
          className="footer-icon-aguscalientes"
        />
        <span className="footer-text">Aguascalientes</span>
      </button>

      <button 
        className="footer-button"
        onClick={() => navigate('/')}
      >
        <img
          src = "/assents/imagenes/Iconos/home.png"
          alt = "Icono de inicio"
          className="footer-icon-home"
        />
        <span className="footer-text">Inicio</span>
      </button>
      
      
      <button 
        className="footer-button"
        onClick={() => alert('Mapa próximamente')}
      >
        <img
          src = "/assents/imagenes/Iconos/mapa.png"
          alt = "Icono de mapa"
          className="footer-icon-mapa"
        />
        <span className="footer-text">Mapa</span>
      </button>

      <button 
        className="footer-button"
        onClick={() => window.open('https://directorio.vivemexico.online', '_blank')}
      >
        <img
          src = "/assents/imagenes/Iconos/directoriocomercial.png"
          alt = "Icono de directorio comercial"
          className="footer-icon-directorio-comercial"
        />
        <span className="footer-text">D.Comercial</span>
      </button>

      <button 
        className="footer-button"
        onClick={() => alert('Promociones próximamente')}
      >
        <img
          src = "/assents/imagenes/Iconos/promociones.png"
          alt = "Icono de promociones"
          className="footer-icon-promociones"
        />
        <span className="footer-text">Promociones</span>
      </button>

      <button 
        className="footer-button"
        onClick={() => navigate('/notificaciones')}
      >
        <img
          src = "/assents/imagenes/Iconos/campana.png"
          alt = "Icono de notificaciones"
          className="footer-icon-notificaciones"
        />
        <span className="footer-text">Notificaciones</span>
      </button>

      </div>
      
      
    </footer>
  );
};

export default Footer;