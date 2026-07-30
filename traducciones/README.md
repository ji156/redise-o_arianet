# Traducciones

Material para mantener la traducción del sitio a un idioma distinto del
castellano. El euskera está **publicado** (`/eu/…`), a la espera de que un
traductor nativo lo revise: se tradujo internamente, no por un profesional.

## Ficheros

- `euskera.json` — diccionario castellano → euskera. Es la fuente: se edita aquí.
- `importar.cjs` — vuelca `euskera.json` a los campos `eu:` de `src/data/copy.ts`
  y `src/data/legal.ts`. Idempotente: lo que ya tiene `eu:` no se toca.
- `extraer.cjs` — genera el CSV de revisión a partir del copy actual.
- `euskera-revision.csv` — lo que se manda al revisor.

## Encargar la revisión

```bash
node traducciones/extraer.cjs
```

Sale una fila por cadena, con el castellano, el inglés para desambiguar y el
euskera publicado. Al revisor conviene pedirle dos cosas: **euskara batua**, y
que respete las mayúsculas de los titulares — hay bastantes cadenas tipo
`DÓNDE TRABAJAMOS` que son parte del diseño, no un grito.

## Aplicar lo que vuelva

1. Corregir las cadenas en `euskera.json` (la clave es el castellano tal cual
   aparece en el fuente, con sus `${…}` incluidos).
2. Quitar de `copy.ts`/`legal.ts` los `eu:` que hayan cambiado — el importador
   respeta lo que ya está — y ejecutar:

```bash
node traducciones/importar.cjs
```

## Añadir otro idioma

1. Añadir el código a `Lang` y a `LANGS` en `src/data/i18n.ts`, con su entrada
   en `LANG_SHORT`, `LANG_NAME`, `OG_LOCALE`, `SEGMENT`, `SERVICE_SLUGS` y
   `LEGAL_SLUGS`. Una vez publicada una URL ya no conviene cambiarla, así que
   los slugs se deciden antes.
2. Crear las páginas de `src/pages/<código>/`, copiando las de `src/pages/eu/`
   (son cuatro ficheros de tres líneas).

`t()` cae al castellano en lo que falte, así que un idioma se puede publicar por
partes sin romper el build.
