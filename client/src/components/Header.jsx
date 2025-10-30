import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { SlArrowLeft } from 'react-icons/sl';

const Header = ({ headerImage, headerAlt, showHeaderImage = false, hasNotifications = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const bodyElement = document.body;

    if (showHeaderImage && headerImage) {
      bodyElement.classList.remove('body-without-header-image');
      bodyElement.classList.add('body-with-header-image');
    } else {
      bodyElement.classList.remove('body-with-header-image');
      bodyElement.classList.add('body-without-header-image');
    }

    return () => {
      bodyElement.classList.remove('body-with-header-image', 'body-without-header-image');
    };
  }, [showHeaderImage, headerImage]);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);
  const goBack = () => navigate(-1);
  const goToNotifications = () => navigate('/notificaciones');

  return (
    <>
      <header className="header">
        <div className="left-section">
          {!isHomePage && (
            <button className="back-button" onClick={goBack} aria-label="Regresar">
              <SlArrowLeft size={24} />
            </button>
          )}

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

        <div className="right-section">
          <button className="notification-button" onClick={goToNotifications} aria-label="Ver notificaciones">
            <span className="notification-icon">
              <img
                src="/assents/imagenes/Iconos/campana.png"
                alt="Icono de notificaciones"
                className="campanita"
              />
            </span>
            {hasNotifications && <span className="notification-badge" />}
          </button>

          <button className="menu-button" onClick={toggleMenu} aria-label="Abrir menú">
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>
      </header>

      {showHeaderImage && headerImage && (
        <div className="header-image-container">
          <img
            src={headerImage}
            alt={headerAlt || 'Imagen de encabezado'}
            className="header-image"
          />
          <div className="header-image-overlay"></div>
        </div>
      )}

      {menuOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          <nav className="side-menu" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <h3>Navegación</h3>
              <button className="close-button" onClick={closeMenu}>×</button>
            </div>
            <ul className="menu-list">
              <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
              <li><Link to="/distritocomercial/hoteles" onClick={closeMenu}>Hoteles</Link></li>
              <li><Link to="/distritocomercial/restaurantes" onClick={closeMenu}>Restaurantes</Link></li>
              <li><Link to="/distritocomercial/vinicolas" onClick={closeMenu}>Vinicolas</Link></li>
              <li><Link to="/distritocomercial/haciendas" onClick={closeMenu}>Haciendas</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
