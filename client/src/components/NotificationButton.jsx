import React, { useState, useEffect } from 'react';
import { 
    subscribeToPushNotifications, 
    unsubscribeFromPushNotifications, 
    getSubscriptionStatus, 
} from '../services/notification';

const NotificationButton = ({ inline = true, className = '', autoHideOnToggle = true }) => {
    const [subscriptionStatus, setSubscriptionStatus] = useState({
        supported: false,
        subscribed: false,
        permission: 'default'
    });
    const [loading, setLoading] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        checkSubscriptionStatus();
    }, []);

    const checkSubscriptionStatus = async () => {
        const status = await getSubscriptionStatus();
        setSubscriptionStatus(status);
    };

    const handleSubscribe = async () => {
        setLoading(true);
        try {
            await subscribeToPushNotifications();
            if (autoHideOnToggle) setHidden(true);
            await checkSubscriptionStatus();
            alert('¡Notificaciones activadas! 🔔\nRecibirás actualizaciones de la feria.');
        } catch (error) {
            console.error('Error activando notificaciones:', error);
            alert('Error activando notificaciones: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleUnsubscribe = async () => {
        setLoading(true);
        try {
            await unsubscribeFromPushNotifications();
            if (autoHideOnToggle) setHidden(true);
            await checkSubscriptionStatus();
            alert('Notificaciones desactivadas 🔕');
        } catch (error) {
            console.error('Error desactivando notificaciones:', error);
            alert('Error desactivando notificaciones: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (hidden) return null;

    if (!subscriptionStatus.supported) {
        return null; // No mostrar si no hay soporte
    }

    return (
        <div className={inline ? "" : "notification-container"}>
            <button 
                onClick={subscriptionStatus.subscribed ? handleUnsubscribe : handleSubscribe}
                disabled={loading}
                className={className || `notification-button footer-tool-btn ${subscriptionStatus.subscribed ? 'subscribed' : 'unsubscribed'}` }
                title={subscriptionStatus.subscribed ? 'Desactivar notificaciones' : 'Activar notificaciones'}
            >
                <span className="notification-icon">
                    {loading ? '⏳' : subscriptionStatus.subscribed ? '🔔' : '🔕'}
                </span>
                {loading ? 'Procesando...' : subscriptionStatus.subscribed ? 'Notificaciones ON' : 'Activar Notificaciones'}
            </button>
        </div>
    );
};

export default NotificationButton;