# Medallo Tour — Landing Page

Landing page estática de **Medallo Tour**, publicada en Vercel desde GitHub.
No requiere instalación ni servidor: utiliza HTML, CSS y JavaScript puro.

## Flujo de publicación

- Repositorio: `Erick-Vargas218/medallo-tour-landing`
- Rama de producción: `main`
- Plataforma de hosting: Vercel
- Perfil o equipo de Vercel: `topsale-3582`
- Cada `push` a `main` debe generar un deployment de producción automático.

La configuración de seguridad del hosting está versionada en `vercel.json`.
Los pasos de configuración inicial, dominio y analítica están en
[`DEPLOYMENT_VERCEL.md`](DEPLOYMENT_VERCEL.md).

## Ver el sitio localmente

Abre `index.html` o levanta un servidor estático. Parámetros disponibles:

- `?lang=en`: abre en inglés.
- `?theme=dark`: abre en modo oscuro.
- `?lang=en&theme=dark`: combina ambos.

## Estructura

```text
medallo-tour-landing/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/img/
├── favicon.png
└── vercel.json
```

## Ediciones frecuentes

| Cambio | Archivo |
|---|---|
| Número y mensajes de WhatsApp | `js/main.js` (`WA_PHONE`, `WA_MESSAGES`, `WA_TOURS`) |
| Precios y textos principales | `index.html` |
| Traducciones al inglés | `js/main.js` (diccionario `T`) |
| Redes sociales | `index.html` |
| Fotos | `assets/img/` |

## SEO pendiente del dominio

Cuando se confirme el dominio definitivo, se debe agregar su URL absoluta como
`canonical`, `og:url` y en `og:image` dentro de `index.html`.
