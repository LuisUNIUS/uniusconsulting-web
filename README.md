# UNIUS Consulting — Sitio web (landing de una página)

Sitio estático de UNIUS Consulting: cumplimiento regulatorio, riesgos, gobierno
corporativo y transformación operativa para el sector financiero mexicano.
Diseño navy / dorado aprobado, con navegación por anclas, menú móvil y
totalmente responsive (desktop y mobile).

## Archivos
- `index.html` — estructura y contenido de todas las secciones
- `style.css` — estilos (paleta navy/dorado, tipografías, responsive)
- `fonts.css` + `fonts/` — Fraunces (titulares) e Inter (texto), autohospedadas
- `assets/`
  - `unius-logo.png` — logo (ícono + wordmark), fondo transparente
  - `unius-wave.png` — franja decorativa de partículas doradas
  - `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` — iconos del sitio
- `robots.txt` / `sitemap.xml` — SEO básico
- `_headers` — cabeceras de seguridad (formato Cloudflare Pages / Netlify)

## Navegación
El menú superior (Quiénes somos, Servicios, Metodología, Equipo, Contacto) usa
anclas normales (`#somos`, `#servicios`, `#metodologia`, `#equipo`, `#contacto`)
que ya existen como `id` en sus secciones correspondientes — el clic hace scroll
suave a la sección exacta, con un desfase para que el nav fijo no la tape.

En móvil (≤680px) el menú colapsa en un botón de hamburguesa; al elegir una
sección, el menú se cierra automáticamente.

## Editar contenido
Todo el texto (servicios, equipo, metodología, sectores, etc.) vive directamente
en `index.html` como HTML plano — se edita con cualquier editor de texto, sin
necesidad de build ni dependencias.

## Despliegue en Cloudflare Pages
1. Sube el contenido de esta carpeta (no la carpeta contenedora) a la raíz de
   un repositorio de GitHub.
2. En Cloudflare Pages, conecta el repositorio.
   - Framework preset: **None**
   - Build command: *(vacío)*
   - Build output directory: `/`
3. Conecta el dominio `uniusconsulting.com` una vez desplegado.

No requiere build, servidor, ni base de datos.
