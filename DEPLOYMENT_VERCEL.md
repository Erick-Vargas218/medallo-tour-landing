# Migración de Medallo Tour a Vercel

## Cuentas y propiedad

- Vercel: seleccionar el perfil o equipo `topsale-3582`.
- GitHub: repositorio `Erick-Vargas218/medallo-tour-landing`.
- Netlify: el sitio anterior aparece bajo la cuenta `Erick Vargas`.

El proyecto, el dominio y la analítica deben quedar dentro del perfil correcto
de Vercel para que el cliente tenga control y visibilidad desde su propia cuenta.

## 1. Confirmar el proyecto de Vercel

1. Iniciar sesión en Vercel y seleccionar `topsale-3582` en el selector de cuenta/equipo.
2. Abrir el proyecto de Medallo Tour.
3. Ir a **Settings > Git** y confirmar que el repositorio conectado sea
   `Erick-Vargas218/medallo-tour-landing`.
4. Confirmar que **Production Branch** sea `main`.
5. En **Settings > Build and Deployment**, dejar que Vercel detecte el sitio estático:
   no se necesita comando de instalación ni de build, y la raíz del proyecto es el
   directorio principal del repositorio.
6. Si el proyecto fue creado accidentalmente en otro perfil de Vercel, usar
   **Settings > General > Transfer Project** para moverlo a `topsale-3582` antes de
   conectar el dominio.

## 2. Validar el deployment antes de cambiar el dominio

1. Abrir el último deployment marcado como **Production**.
2. Probar la URL `*.vercel.app` en escritorio y móvil.
3. Verificar imágenes, menú, cambio ES/EN, tema y todos los enlaces de WhatsApp.
4. En **Deployments**, comprobar que el deployment corresponda al último commit de `main`.

## 3. Conectar el dominio sin interrumpir el sitio

1. Mantener Netlify activo durante todo este proceso.
2. En Vercel, abrir **Settings > Domains** y agregar el dominio principal y su variante
   `www` (por ejemplo, `dominio.com` y `www.dominio.com`).
3. Elegir uno como dominio canónico y configurar la redirección del otro desde Vercel.
4. Si Vercel solicita verificación de propiedad, copiar primero el registro TXT exacto
   que muestra el panel al proveedor DNS actual y esperar a que Vercel indique que el
   dominio está verificado y que puede emitir SSL.
5. En el proveedor DNS actual, reemplazar solamente los registros web que apuntan a
   Netlify:
   - Para el dominio raíz (`@`), usar el registro A exacto indicado por Vercel.
   - Para `www`, usar el CNAME exacto indicado por Vercel.
6. No borrar ni modificar registros de correo (`MX`), SPF, DKIM, DMARC u otros servicios.
7. Esperar a que **Settings > Domains** muestre **Valid Configuration** y abrir ambas
   variantes con HTTPS en una ventana privada.

La opción con menos riesgo es conservar inicialmente el proveedor DNS actual y cambiar
solo A/CNAME. Si más adelante se quieren mover los nameservers a Vercel, primero hay que
copiar y comprobar toda la zona DNS, especialmente los registros de correo.

## 4. Activar la analítica del cliente

1. Dentro del proyecto en `topsale-3582`, abrir **Analytics** y pulsar **Enable**.
2. Generar un nuevo deployment desde **Deployments > Redeploy** o haciendo un nuevo
   `push` a `main`.
3. Visitar el sitio publicado y comprobar en las herramientas de red del navegador que
   carguen las rutas de Vercel Insights sin errores.
4. Esperar visitas reales para que aparezcan datos de páginas, referentes, ubicación y
   dispositivos.

El sitio ya incluye el script de Web Analytics. La política CSP de `vercel.json` permite
que se comunique con las rutas del mismo dominio. Speed Insights no se utiliza en este
proyecto.

## 5. Retirar Netlify

Hacerlo solo después de comprobar el dominio en Vercel:

1. Confirmar desde distintas redes que el dominio responde desde Vercel.
2. Revisar que HTTPS sea válido y que la analítica reciba tráfico.
3. En el proyecto de Netlify, retirar el dominio personalizado para evitar confusión.
4. Conservar el proyecto de Netlify unos días como respaldo; luego puede desactivarse.

## Validación final

- El dominio principal abre el deployment de Vercel.
- `www` redirige correctamente al dominio canónico (o al contrario).
- El certificado HTTPS es válido.
- Un `push` a `main` dispara un deployment automático.
- Analytics pertenece y es visible en `topsale-3582`.
- Netlify ya no recibe el tráfico del dominio.
