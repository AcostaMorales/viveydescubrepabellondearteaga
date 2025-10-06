import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <button 
        className="footer-button"
        onClick={() => navigate('/')}
      >
        <span className="footer-icon">🏠</span>
        <span className="footer-text">Inicio</span>
      </button>
      
      <button 
        className="footer-button"
        onClick={() => alert('Mapa próximamente')}
      >
        <span className="footer-icon">🗺️</span>
        <span className="footer-text">Mapa</span>
      </button>
    </footer>
  );
};

export default Footer;