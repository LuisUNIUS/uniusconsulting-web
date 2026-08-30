# UNIUS Consulting — Sitio web

Sitio de una sola página (landing) para UNIUS Consulting, generado a partir del
lienzo de diseño `UNIUS_Propuesta_Web_Lienzo_30ago26.pptx`. Es 100% estático
(HTML + CSS + JS, sin frameworks ni build step) y totalmente responsivo
(desktop, tablet y móvil).

## Estructura de archivos

```
├── index.html          # Estructura y contenido del sitio (todas las secciones)
├── css/
│   └── styles.css      # Estilos, paleta de marca y reglas responsivas (media queries)
├── js/
│   └── script.js       # Menú móvil, scroll suave a cada sección y estado activo del nav
└── assets/
    ├── logo-unius.png        # Logotipo completo, fondo transparente
    ├── equipo-reunion.jpg    # Fotografía de "Quiénes somos"
    ├── watermark-navy.png    # Marca de agua (isotipo) para fondos claros
    ├── watermark-white.png   # Marca de agua (isotipo) para fondos oscuros
    └── textura-hero.png      # Textura decorativa del encabezado (hero)
```

## Secciones

El menú superior (Quiénes somos / Servicios / Metodología / Contacto) hace
scroll suave a su sección correspondiente mediante anclas (`#id`), respetando
la altura del header fijo. También existen las secciones "Sectores de
especialidad" y "¿Por qué UNIUS?" entre Metodología y Contacto, tal como en
el lienzo original.

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en GitHub (por ejemplo `unius-website`).
2. Sube el contenido de esta carpeta a la raíz del repositorio (no lo dejes
   dentro de una subcarpeta), conservando la estructura de arriba.
3. Ve a **Settings → Pages**, en "Source" selecciona la rama `main` y la
   carpeta `/ (root)`, y guarda.
4. En un par de minutos el sitio quedará publicado en
   `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`.

No requiere ningún proceso de build, dependencias de npm ni configuración
adicional: es HTML/CSS/JS puro.

## Personalización rápida

- **Colores de marca**: están centralizados como variables CSS al inicio de
  `css/styles.css` (`:root { --navy-dark: ...; --gold: ...; }`).
- **Textos**: se editan directamente en `index.html`.
- **Botones del menú / anclas**: si agregas o renombras una sección, actualiza
  el `href="#..."` del botón en `<nav class="main-nav">` y el `id="..."` de la
  sección correspondiente.
