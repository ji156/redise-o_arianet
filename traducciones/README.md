# Traducciones

Material para encargar la traducción del sitio a un idioma nuevo. El euskera
está previsto en el código pero todavía sin traducir.

## Ficheros

- `extraer.cjs` — genera el CSV a partir de `src/data/copy.ts` y `src/data/legal.ts`.
- `euskera-pendiente.csv` — lo que se envía al traductor.

## Encargar la traducción

```bash
node traducciones/extraer.cjs
```

Regenera el CSV con el copy actual (vuelve a ejecutarlo si el texto ha cambiado
desde la última vez). Sale una fila por cadena:

| columna | qué es |
| --- | --- |
| `fichero`, `seccion`, `linea` | de dónde sale la cadena; sirve para reimportarla |
| `castellano` | el original, que es el texto a traducir |
| `ingles_referencia` | la versión inglesa, para desambiguar |
| `EUSKERA` | **la única columna que rellena el traductor** |

Al traductor conviene pedirle dos cosas: **euskara batua**, y que respete las
mayúsculas de los titulares — hay bastantes cadenas tipo `DÓNDE TRABAJAMOS` que
son parte del diseño, no un grito.

## Publicar el idioma cuando vuelva

1. Volcar la columna `EUSKERA` a los campos `eu` de `copy.ts` y `legal.ts`.
2. Confirmar los segmentos de ruta marcados `TODO(eu)` en `src/data/i18n.ts`
   (`zerbitzuak`, `hasi`) y los slugs de `SERVICE_SLUGS` / `LEGAL_SLUGS`. Una vez
   publicada una URL ya no conviene cambiarla, así que se decide antes.
3. Crear las páginas de `src/pages/eu/`, copiando las de `src/pages/en/` (son
   tres o cuatro ficheros de tres líneas).
4. Añadir `'eu'` a `LANGS` en `src/data/i18n.ts`. Eso activa el selector de
   idioma, los `hreflang` y el sitemap de golpe.

No hace falta esperar a tenerlo todo traducido: `t()` cae al castellano en lo
que falte, así que el idioma se puede publicar por partes.
