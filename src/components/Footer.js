import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer"
    style={{
      backgroundImage: 'url(/assents/imagenes/Fondopagina/FondoPiePagina.svg)', 
    }}
    >
      <button
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '5px',
          backgroundColor: '#1877F2',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '20px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          cursor: 'pointer',
        }}
        onClick={() => window.open('https://facebook.com', '_blank')}
      >
        <FaFacebookF />
        </button>
        
        <button
        style={{
          position: 'absolute',
          bottom: '160px',
          right: '5px',
          backgroundColor: '#E1306C',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '20px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          cursor: 'pointer',
        }}
        onClick={() => window.open('https://instagram.com', '_blank')}
      >
        <FaInstagram />
        </button>
        
        <button
        style={{
          position: 'absolute',
          bottom: '220px',
          right: '5px',
          backgroundColor: '#FF0000',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '20px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          cursor: 'pointer',
        }}
        onClick={() => window.open('https://youtube.com', '_blank')}
      >
        <FaYoutube />
        </button>
      
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
      </div>  
    </footer>
  );
};

export default Footer;