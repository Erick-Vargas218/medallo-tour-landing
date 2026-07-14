# Medallo Tour — Landing Page

Landing page estático de **Medallo Tour** (agencia de tours en Medellín).
No requiere instalación ni servidor especial: es HTML + CSS + JavaScript puro.

## Ver el sitio

Abre `index.html` con doble clic, o compártelo con parámetros:

- `index.html?lang=en` → abre en inglés
- `index.html?theme=dark` → abre en modo oscuro
- `index.html?lang=en&theme=dark` → ambos

El visitante puede cambiar idioma (ES/EN) y tema (claro/oscuro) con los botones
del encabezado; su elección queda guardada en el navegador.

## Estructura

```
medallo-tour-landing/
├── index.html          ← contenido de la página (textos en español)
├── css/styles.css      ← estilos (paleta y tipografías del tablero de marca)
├── js/main.js          ← idioma ES/EN, tema, enlaces de WhatsApp
├── assets/img/         ← fotos de los tours y logo
└── favicon.png         ← ícono de la pestaña
```

## Cómo editar lo más común

| Quiero cambiar… | Dónde |
|---|---|
| Número de WhatsApp | `js/main.js` → constante `WA_PHONE` |
| Mensajes prellenados de WhatsApp | `js/main.js` → `WA_MESSAGES` y `WA_TOURS` |
| Precios de los tours | `index.html` → busca el nombre del tour (ej. `$129.000`) |
| Textos en español | `index.html` (texto visible) y `js/main.js` (diccionario `T`, primera columna) |
| Textos en inglés | `js/main.js` → diccionario `T`, segunda columna |
| Redes sociales | `index.html` → busca `tiktok.com`, `instagram.com`, `facebook.com` |
| Fotos | reemplaza los archivos en `assets/img/` (mismo nombre) |

## Publicar (deployment)

Cualquiera de estas opciones gratuitas funciona; solo hay que subir la carpeta completa:

1. **Netlify** (más fácil): entra a [netlify.com/drop](https://app.netlify.com/drop) y arrastra la carpeta `medallo-tour-landing`.
2. **Vercel**: crea un proyecto y sube la carpeta como sitio estático.
3. **GitHub Pages**: sube la carpeta a un repositorio y activa Pages.
4. **Hosting propio (dominio como medallotour.co)**: sube el contenido por FTP a la carpeta pública (`public_html`).

> **SEO:** al publicar con dominio propio, agrega en `index.html` la etiqueta
> `<link rel="canonical" href="https://tudominio.co/">` y actualiza `og:image`
> con la URL completa del dominio.

## Marca

- Colores: Amarillo `#FCD116` · Azul `#003893` · Rojo `#CE1126` · Verde Paisa `#1E8C43` · Tinta `#131210`
- Tipografías: **Anton** (titulares) + **Barlow** (cuerpo) — pareja 01 del tablero de marca, cargadas desde Google Fonts.
