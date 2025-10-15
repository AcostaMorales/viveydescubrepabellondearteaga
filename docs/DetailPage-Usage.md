# 🎨 DetailPage.css - CSS Genérico Reutilizable

## Descripción
Este archivo CSS contiene estilos genéricos basados en el diseño de `AntiguaEstacion.css` pero con nombres de clases reutilizables para crear páginas de detalle consistentes.

## Estructura de Clases

### 📦 Contenedores Principales
```css
.detail-page          /* Contenedor principal de la página */
.detail-content       /* Contenido principal con margen para header */
.detail-section       /* Cada sección con glassmorphism */
```

### 📝 Elementos de Texto
```css
.detail-main-title      /* Título principal de la página */
.detail-section-title   /* Títulos de sección */
.detail-paragraph       /* Párrafos de contenido */
.detail-text-content    /* Contenido de texto largo */
```

### 📋 Listas
```css
.detail-list           /* Contenedor de lista sin bullets */
.detail-list-item      /* Elementos de la lista */
```

### 🎠 Elementos Especiales
```css
.detail-carousel-title  /* Títulos de carruseles/galerías */
```

## Cómo Usar en Nuevas Páginas

### 1. Estructura HTML Básica
```jsx
import './DetailPage.css';

const MiNuevaPagina = () => {
  return (
    <div className="detail-page">
      <Header 
        headerImage="/path/to/image.jpg"
        headerAlt="Mi lugar"
        showHeaderImage={true}
      />
      
      <div className="detail-content">
        {/* Sección de historia */}
        <div className="detail-section">
          <h1 className="detail-main-title">Nombre del Lugar</h1>
          <p className="detail-paragraph">Primer párrafo...</p>
          <p className="detail-paragraph">Segundo párrafo...</p>
        </div>

        {/* Sección de valor turístico */}
        <div className="detail-section">
          <h2 className="detail-section-title">Valor turístico</h2>
          <ul className="detail-list">
            <li className="detail-list-item">Primer punto importante</li>
            <li className="detail-list-item">Segundo punto importante</li>
            <li className="detail-list-item">Tercer punto importante</li>
          </ul>
        </div>

        {/* Sección de experiencia */}
        <div className="detail-section">
          <h2 className="detail-section-title">Experiencia para el visitante</h2>
          <p className="detail-text-content">Descripción de la experiencia...</p>
        </div>

        {/* Carrusel */}
        <ImageCarousel 
          images={galleryImages}
          title="Galería de imágenes"
        />

        {/* Mapa */}
        <LocationMap 
          latitude={21.9189}
          longitude={-102.2901}
          placeName="Nombre del lugar"
          address="Dirección completa"
          description="Descripción del lugar"
        />
      </div>
    </div>
  );
};
```

### 2. Variantes de Color
```jsx
{/* Página azul (por defecto) */}
<div className="detail-page">

{/* Página verde */}
<div className="detail-page green">

{/* Página naranja */}
<div className="detail-page orange">

{/* Página morada */}
<div className="detail-page purple">
```

### 3. Modificadores Opcionales
```jsx
{/* Título con fondo blanco */}
<h2 className="detail-section-title with-background">Título</h2>

{/* Título con icono */}
<h2 className="detail-section-title with-icon">🏛️ Título</h2>

{/* Sección sin animación */}
<div className="detail-section no-animation">

{/* Sección con espaciado extra */}
<div className="detail-section extra-spacing">

{/* Contenido centrado */}
<p className="detail-paragraph detail-center">Texto centrado</p>
```

## Páginas Recomendadas para Usar Este CSS

### 🏛️ Sitios Históricos
- Archivo Histórico
- Casa de Madera
- Museo de Casa
- Monumento a la Vendimia

### 🍷 Ruta de Vinos
- Viñedos específicos
- Bodegas
- Centros de degustación

### ⛪ Ruta Religiosa
- Iglesias
- Capillas
- Sitios religiosos

### 🏞️ Sitios Naturales
- Parques
- Miradores
- Áreas recreativas

## Ejemplo Completo: Casa de Madera

```jsx
import React from "react";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import LocationMap from "../components/LocationMap";
import "../styles/DetailPage.css";

const CasaDeMadera = () => {
  const galleryImages = [
    { src: "/images/casa1.jpg", alt: "Fachada principal" },
    { src: "/images/casa2.jpg", alt: "Interior histórico" }
  ];

  return (
    <div className="detail-page green"> {/* Variante verde */}
      <Header 
        headerImage="/images/casa-header.jpg"
        headerAlt="Casa de Madera"
        showHeaderImage={true}
      />
      
      <div className="detail-content">
        <div className="detail-section">
          <h1 className="detail-main-title">Casa de Madera</h1>
          <p className="detail-paragraph">
            La Casa de Madera es un ejemplo único de arquitectura...
          </p>
        </div>

        <div className="detail-section">
          <h2 className="detail-section-title">Valor turístico</h2>
          <ul className="detail-list">
            <li className="detail-list-item">Arquitectura única del siglo XIX</li>
            <li className="detail-list-item">Patrimonio cultural de la región</li>
            <li className="detail-list-item">Ejemplo de construcción tradicional</li>
          </ul>
        </div>

        <div className="detail-section">
          <h2 className="detail-section-title">Experiencia para el visitante</h2>
          <p className="detail-text-content">
            Los visitantes pueden explorar las diferentes habitaciones...
          </p>
        </div>

        <ImageCarousel 
          images={galleryImages}
          title="Galería de imágenes"
        />

        <LocationMap 
          latitude={21.9200}
          longitude={-102.2850}
          placeName="Casa de Madera"
          address="Centro Histórico, Pabellón de Arteaga"
          description="Ejemplo único de arquitectura en madera"
        />
      </div>
    </div>
  );
};

export default CasaDeMadera;
```

## Ventajas de Usar Este CSS

✅ **Consistencia**: Todas las páginas tendrán el mismo estilo
✅ **Reutilizable**: Fácil de aplicar a nuevas páginas
✅ **Mantenible**: Un solo archivo para modificar estilos
✅ **Flexible**: Variantes de color y modificadores
✅ **Responsive**: Se adapta automáticamente a dispositivos
✅ **Performante**: Animaciones optimizadas incluidas

## Archivos Relacionados
- `src/styles/DetailPage.css` - Estilos principales
- `src/components/LocationMap.js` - Componente de mapa
- `src/components/ImageCarousel.js` - Componente de carrusel
- `src/components/Header.js` - Header con imagen integrada