# 📍 Componente LocationMap - Documentación

## Descripción
Componente reutilizable para mostrar ubicaciones en mapa con geolocalización, direcciones y funcionalidades interactivas.

## Características
- ✅ Mapa embebido de Google Maps
- ✅ Información de ubicación personalizable
- ✅ Coordenadas copiables al portapapeles
- ✅ Botones para abrir en Google Maps, Apple Maps y Waze
- ✅ Diseño responsive y moderno
- ✅ Animaciones y efectos visuales
- ✅ Completamente reutilizable

## Props del Componente

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `latitude` | number | ✅ Sí | - | Latitud de la ubicación |
| `longitude` | number | ✅ Sí | - | Longitud de la ubicación |
| `placeName` | string | ❌ No | - | Nombre del lugar |
| `address` | string | ❌ No | - | Dirección completa |
| `description` | string | ❌ No | - | Descripción del lugar |
| `showDirections` | boolean | ❌ No | true | Mostrar botones de direcciones |
| `mapHeight` | string | ❌ No | "300px" | Altura del mapa |

## Ejemplos de Uso

### Uso Básico
```jsx
import LocationMap from "../components/LocationMap";

<LocationMap 
  latitude={21.9189}
  longitude={-102.2901}
/>
```

### Uso Completo
```jsx
<LocationMap 
  latitude={21.9189}
  longitude={-102.2901}
  placeName="Antigua Estación del Ferrocarril"
  address="Pabellón de Arteaga, Aguascalientes, México"
  description="Sitio histórico emblemático del desarrollo ferroviario en la región"
  showDirections={true}
  mapHeight="350px"
/>
```

### Solo Mapa (sin botones de direcciones)
```jsx
<LocationMap 
  latitude={21.9189}
  longitude={-102.2901}
  placeName="Mi Ubicación"
  showDirections={false}
  mapHeight="250px"
/>
```

## Coordenadas de Lugares Importantes en Aguascalientes

### Pabellón de Arteaga
```jsx
// Antigua Estación del Ferrocarril
latitude={21.9189}
longitude={-102.2901}

// Centro de Pabellón de Arteaga
latitude={21.9167}
longitude={-102.2833}

// Presa Calles
latitude={21.9100}
longitude={-102.2950}
```

### Aguascalientes Capital
```jsx
// Centro Histórico
latitude={21.8818}
longitude={-102.2916}

// Plaza Principal
latitude={21.8821}
longitude={-102.2930}

// Catedral de Aguascalientes
latitude={21.8822}
longitude={-102.2928}
```

## Cómo Obtener Coordenadas

1. **Google Maps**: 
   - Haz clic derecho en el lugar → "¿Qué hay aquí?"
   - Copia las coordenadas que aparecen

2. **Desde móvil**: 
   - Mantén presionado el lugar en Google Maps
   - Las coordenadas aparecerán en la parte inferior

3. **Herramientas online**: 
   - latlong.net
   - gps-coordinates.net

## Funcionalidades

### Copiar Coordenadas
- El botón "📋 Copiar" copia las coordenadas al portapapeles
- Formato: "latitud, longitud"

### Abrir en Mapas
- **Google Maps**: Abre en navegador o app
- **Apple Maps**: Abre en dispositivos iOS
- **Waze**: Abre con navegación activada

### Responsive
- Se adapta automáticamente a móviles y tablets
- Botones apilados en pantallas pequeñas
- Texto y espaciado optimizado

## Personalización

### Cambiar Altura del Mapa
```jsx
mapHeight="400px"  // Más alto
mapHeight="200px"  // Más bajo
```

### Sin Información de Lugar
```jsx
<LocationMap 
  latitude={21.9189}
  longitude={-102.2901}
  // Solo coordenadas, sin nombre ni descripción
/>
```

### Estilo Personalizado
El componente usa las clases CSS definidas en `LocationMap.css`. Puedes:
- Modificar colores en las variables CSS
- Cambiar animaciones
- Ajustar espaciado y tamaños

## Archivos del Componente
- `src/components/LocationMap.js` - Componente principal
- `src/components/LocationMap.css` - Estilos y animaciones

## Compatibilidad
- ✅ Todos los navegadores modernos
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Responsive design
- ✅ Accesibilidad incluida