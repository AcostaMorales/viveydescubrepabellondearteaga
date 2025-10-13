import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { SlArrowLeft } from "react-icons/sl";

const Header = ({ headerImage, headerAlt, showHeaderImage = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Verificar si estamos en la página principal
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goBack = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <>
      <header className="header">
        {/* Sección izquierda: Botón de regreso y Logo */}
        <div className="left-section">
          {/* Botón de regreso (solo en páginas que no sean la principal) */}
          {!isHomePage && (
            <button
              className="back-button"
              onClick={goBack}
              aria-label="Regresar"
            >
              <SlArrowLeft size={24} />
            </button>
          )}

          {/* Logo */}
          <div className="logo-container">
            <Link to="/" onClick={closeMenu}>
              <img
                src="/assents/imagenes/Logos/LogoPabellon.svg"
                alt="Pabellón de Arteaga"
                className="logo"
              />
            </Link>
          </div>
        </div>

        {/* Menú hamburguesa a la derecha */}
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </header>

      {/* Imagen de encabezado (opcional) */}
      {showHeaderImage && headerImage && (
        <div className="header-image-container">
          <img
            src={headerImage}
            alt={headerAlt || "Imagen de encabezado"}
            className="header-image"
          />
          <div className="header-image-overlay"></div>
        </div>
      )}

      {/* Menú lateral */}
      {menuOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          <nav className="side-menu" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <h3>Navegación</h3>
              <button className="close-button" onClick={closeMenu}>
                ×
              </button>
            </div>
            <ul className="menu-list">
              <li>
                <Link to="/" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/distritocomercial/hoteles" onClick={closeMenu}>
                  Hoteles
                </Link>
              </li>
              <li>
                <Link to="/distritocomercial/restaurantes" onClick={closeMenu}>
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link to="/distritocomercial/vinicolas" onClick={closeMenu}>
                  Vinicolas
                </Link>
              </li>
              <li>
                <Link to="/distritocomercial/haciendas" onClick={closeMenu}>
                  Haciendas
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;