# 🚀 NavigationCard - Ejemplos de Uso

## ✅ **Nueva funcionalidad: URLs Externas**

El componente `NavigationCard` ahora soporta enlaces externos con indicador visual automático.

---

## 📋 **Propiedades disponibles:**

```javascript
<NavigationCard
  image="/ruta/imagen.png"          // Requerido: Ruta de la imagen
  title="Título de la tarjeta"      // Requerido: Texto a mostrar
  onClick={handleClick}             // Opcional: Función para navegación interna
  externalUrl="https://ejemplo.com" // Opcional: URL externa
  openInNewTab={true}               // Opcional: Abrir en nueva pestaña (default: true)
  className="clase-personalizada"   // Opcional: CSS personalizado
/>
```

---

## 🎯 **Ejemplos de uso:**

### 1. **Navegación Interna (uso actual)**
```javascript
<NavigationCard
  image="/assents/imagenes/CentroHistorico/PlazaPrincipal.png"
  title="Plaza Principal"
  onClick={() => navigate('/quever/centrohistorico/plazaprincipal')}
/>
```

### 2. **URL Externa - Nueva pestaña**
```javascript
<NavigationCard
  image="/assents/imagenes/Enlaces/SitioTuristico.png"
  title="Portal de Turismo Oficial"
  externalUrl="https://turismo.aguascalientes.gob.mx"
  openInNewTab={true}
/>
```

### 3. **URL Externa - Misma ventana**
```javascript
<NavigationCard
  image="/assents/imagenes/Enlaces/MapaInteractivo.png"
  title="Mapa Interactivo"
  externalUrl="https://maps.google.com/aguascalientes"
  openInNewTab={false}
/>
```

### 4. **Ejemplo completo en una página**
```javascript
const navigationItems = [
  // Navegación interna
  {
    id: 1,
    title: "Plaza Principal",
    image: "/assents/imagenes/CentroHistorico/PlazaPrincipal.png",
    path: "/quever/centrohistorico/plazaprincipal"
  },
  // Enlace externo
  {
    id: 2,
    title: "Portal Turismo",
    image: "/assents/imagenes/Enlaces/TurismoOficial.png",
    externalUrl: "https://turismo.aguascalientes.gob.mx",
    openInNewTab: true
  }
];

// En el JSX
{navigationItems.map(item => (
  <NavigationCard
    key={item.id}
    image={item.image}
    title={item.title}
    onClick={item.path ? () => navigate(item.path) : undefined}
    externalUrl={item.externalUrl}
    openInNewTab={item.openInNewTab}
  />
))}
```

---

## 🎨 **Características visuales:**

### ✅ **Indicador automático de enlace externo:**
- **Icono:** Aparece automáticamente en la esquina superior derecha
- **Estilo:** Círculo semi-transparente con icono de enlace externo
- **Animación:** Escala y cambia de color al hacer hover
- **Solo visible:** Cuando se usa `externalUrl`

### ✅ **Título superpuesto:**
- **Posición:** Parte inferior de la tarjeta
- **Fondo:** Gradiente semi-transparente
- **Texto:** Blanco con sombra para mejor legibilidad
- **Responsive:** Tamaño adaptable según pantalla

---

## 🔧 **Casos de uso recomendados:**

### 📱 **URLs Externas ideales:**
- Sitios web oficiales de turismo
- Mapas interactivos (Google Maps, etc.)
- Redes sociales oficiales
- Formularios de contacto externos
- Reservas en línea
- Sitios de terceros confiables

### 🏠 **Navegación Interna:**
- Páginas de detalles del app
- Secciones dentro del proyecto
- Componentes de la misma aplicación

---

## ⚡ **Características técnicas:**

### 🛡️ **Seguridad:**
- **`noopener`**: Previene acceso al objeto `window.opener`
- **`noreferrer`**: No envía información del referrer
- **Validación automática**: Prioriza `externalUrl` sobre `onClick`

### 🎯 **Accesibilidad:**
- **Cursor pointer**: Indica elemento clickeable
- **Alt text**: Descripción de imagen para lectores de pantalla
- **Indicador visual**: Diferencia enlaces externos de navegación interna

### 📱 **Responsive:**
- **Adaptable**: Funciona en todos los tamaños de pantalla
- **Touch-friendly**: Optimizado para dispositivos móviles
- **Consistente**: Mantiene estilo uniforme

¡El componente está listo para usar con URLs externas! 🎉