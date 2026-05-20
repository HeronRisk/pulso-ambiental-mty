# Pulso Ambiental MTY

Pulso Ambiental MTY es un sitio web estático en español que concentra visualizaciones ambientales de los 9 municipios más poblados de Nuevo León: Monterrey, Apodaca, Guadalupe, General Escobedo, San Nicolás de los Garza, Juárez, Santa Catarina, García y San Pedro Garza García.

El proyecto muestra capas y visualizaciones sobre áreas verdes, contaminación por partículas, PM2.5, alertas recientes de calidad del aire, ruido, temperatura y lluvia. Cada sección indica fuente, año de referencia y limitaciones para evitar comparar datos que no vienen del mismo corte temporal o metodológico.

## Archivos principales

| Archivo | Uso |
|---|---|
| `index.html` | Estructura del sitio y contenido principal. |
| `styles.css` | Estilos responsivos del tablero. |
| `app.js` | Datos, lógica de interacción y renderizado de visualizaciones. |
| `metro9-data.js` | Geometría municipal real usada por el mapa SVG. |
| `metro9.geojson` | Geometría base de respaldo. |

## Publicación

El sitio no requiere proceso de compilación. Para publicarlo en GitHub Pages basta con subir estos archivos a un repositorio público y activar Pages desde la rama principal, usando la raíz del repositorio como fuente.

## Alcance

La plataforma es una entrega académica y social. No incluye sensores, app móvil, monitoreo en tiempo real ni medición propia en campo.
