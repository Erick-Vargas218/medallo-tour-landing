# Meta Pixel — Preview

Esta rama integra el Meta Pixel `2241124376727450` sin modificar producción.

## Evento incluido

- `PageView`: se envía al cargar cada página.

## Validación antes de llevar a producción

1. Abrir el Preview Deployment generado por Vercel para esta rama.
2. En Meta Events Manager, seleccionar el dataset/píxel `2241124376727450`.
3. Abrir **Test Events**, ingresar la URL de preview y visitar el sitio.
4. Confirmar que aparezca `PageView` y que el dominio corresponda al preview de Vercel.
5. Verificar con Meta Pixel Helper que exista un solo píxel y un solo `PageView` por carga.

La política CSP de `vercel.json` permite exclusivamente el script de
`connect.facebook.net` y las solicitudes del píxel a `www.facebook.com`.

Cuando la prueba sea satisfactoria, esta rama se puede fusionar a `main` para publicar
la integración en `www.medallotour.com`.
