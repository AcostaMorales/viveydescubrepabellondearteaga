# NavigationPage.css - Sistema de Navegación Reutilizable

Este CSS genérico está basado en `TierraDeVinos.css` y puede ser reutilizado en cualquier página de navegación.

## 📁 Estructura de Clases

### Contenedores Principales:
- `.navigation-page` - Contenedor principal de la página
- `.navigation-header` - Sección del encabezado con título
- `.navigation-content` - Contenido principal con las tarjetas

### Elementos de Contenido:
- `.navigation-title` - Título principal de la página
- `.navigation-section-title` - Título de la sección de navegación
- `.navigation-grid` - Grid de tarjetas de navegación

### Tarjetas (si no usas NavigationCard):
- `.navigation-card` - Tarjeta individual
- `.navigation-card-image` - Imagen de la tarjeta
- `.navigation-card-content` - Contenido de texto
- `.navigation-card-title` - Título de la tarjeta

### Elementos Adicionales:
- `.navigation-badge` - Badge destacado
- `.navigation-info` - Sección de información adicional
- `.navigation-highlight` - Efecto de brillo

## 🎨 Variantes de Color

Agrega una clase de variante al contenedor principal:

```jsx
<div className="navigation-page wine">    {/* Tema vino (por defecto) */}
<div className="navigation-page blue">    {/* Tema azul */}
<div className="navigation-page green">   {/* Tema verde */}
<div className="navigation-page orange">  {/* Tema naranja */}
```

## 📱 Características

✅ **Responsive**: Adaptado para móvil, tablet y desktop
✅ **Sistema dinámico**: Se adapta al header con/sin imagen
✅ **Animaciones**: Efectos de aparición progresiva
✅ **Glassmorphism**: Efectos de transparencia modernos
✅ **Hover effects**: Interacciones suaves
✅ **Grid adaptativo**: Se ajusta al contenido disponible

## 🚀 Cómo Usar

1. **Importar el CSS:**
```jsx
import '../styles/NavigationPage.css';
```

2. **Estructura básica:**
```jsx
return (
  <div className="navigation-page [variante]">
    <Header 
      showHeaderImage={false} // o true con imagen
      hasNotifications={true}
    />
    
    <div className="navigation-header">
      <h1 className="navigation-title">Título de la Página</h1>
    </div>
    
    <div className="navigation-content">
      <h3 className="navigation-section-title">Subtítulo de Sección</h3>
      <div className="navigation-grid">
        {/* NavigationCard components aquí */}
      </div>
    </div>
  </div>
);
```

## 📋 Páginas que usan este CSS:

- ✅ **TierraDeVinos** - `navigation-page wine`
- ✅ **CentroHistorico** - `navigation-page blue`
- ✅ **RutaReligiosa** - `navigation-page orange`
- ✅ **QueVer** - `navigation-page green`

## 💡 Beneficios:

1. **Consistencia visual** en todas las páginas de navegación
2. **Mantenimiento centralizado** - un solo archivo CSS
3. **Fácil personalización** con variantes de color
4. **Optimización automática** para diferentes dispositivos
5. **Sin espacios en blanco** - integración perfecta con el header dinámico

## 🔧 Personalización:

Para crear nuevas variantes de color, agregar al final del CSS:

```css
.navigation-page.nueva-variante .navigation-section-title::after {
  background: linear-gradient(90deg, #color1, #color2, #color3);
}

.navigation-page.nueva-variante .navigation-card:hover {
  border-color: #color1;
  box-shadow: 0 8px 25px rgba(r, g, b, 0.2);
}
```