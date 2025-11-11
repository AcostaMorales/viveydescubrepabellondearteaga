// Script para probar la eliminación de suscripciones
// Ejecutar en la consola del navegador

const testUnsubscribe = async (deviceId) => {
  const baseUrl = 'http://localhost:3001/api/push';
  
  try {
    // Primero, intentar obtener las suscripciones (requiere auth admin)
    console.log('🔍 Verificando suscripciones existentes...');
    
    // Probar la eliminación con DELETE
    console.log(`🗑️ Intentando eliminar suscripción: ${deviceId}`);
    
    const deleteResponse = await fetch(`${baseUrl}/unsubscribe/${deviceId}`, {
      method: 'DELETE'
    });
    
    if (deleteResponse.ok) {
      const result = await deleteResponse.json();
      console.log('✅ Suscripción eliminada exitosamente:', result);
    } else {
      const errorText = await deleteResponse.text();
      console.error(`❌ Error ${deleteResponse.status}:`, errorText);
    }
    
  } catch (error) {
    console.error('Error de red:', error);
  }
};

// Ejemplo de uso:
// testUnsubscribe('device_1762822002308_1x7no5o64');

console.log('🧪 Script de prueba cargado. Usar: testUnsubscribe("device_id_aqui")');