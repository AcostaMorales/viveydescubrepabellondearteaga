import React from 'react';
import Header from '../components/Header';
import './Notificaciones.css';

const Notificaciones = () => {
  // Ejemplo de notificaciones - puedes reemplazar con datos reales
  const notificaciones = [
    {
      id: 1,
      titulo: "Nueva promoción disponible",
      mensaje: "Descuento especial en hoteles del centro histórico",
      fecha: "2025-10-15",
      leida: false
    },
    {
      id: 2,
      titulo: "Evento especial",
      mensaje: "Festival de la vendimia este fin de semana",
      fecha: "2025-10-14",
      leida: true
    },
    {
      id: 3,
      titulo: "Actualización de horarios",
      mensaje: "Nuevos horarios para el museo de casa",
      fecha: "2025-10-13",
      leida: true
    }
  ];

  return (
    <div className="notificaciones-page">
      <Header 
        showHeaderImage={false}
        hasNotifications={false}
      />
      
      <div className="notificaciones-content">
        <div className="notificaciones-header">
          <h1>Notificaciones</h1>
          <p>Mantente al día con las últimas noticias y promociones</p>
        </div>

        <div className="notificaciones-list">
          {notificaciones.length === 0 ? (
            <div className="no-notifications">
              <p>No tienes notificaciones nuevas</p>
            </div>
          ) : (
            notificaciones.map((notificacion) => (
              <div 
                key={notificacion.id} 
                className={`notification-item ${!notificacion.leida ? 'unread' : ''}`}
              >
                <div className="notification-header">
                  <h3>{notificacion.titulo}</h3>
                  <span className="notification-date">{notificacion.fecha}</span>
                </div>
                <p className="notification-message">{notificacion.mensaje}</p>
                {!notificacion.leida && <span className="unread-indicator"></span>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notificaciones;