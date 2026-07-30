/**
 * Vuelca las traducciones al euskera dentro del copy del sitio.
 *
 *   node traducciones/importar.cjs
 *
 * Lee `traducciones/euskera.json` (castellano → euskera) y añade el campo `eu:`
 * junto a cada par `es:`/`en:` de `src/data/copy.ts` y `src/data/legal.ts`. Es
 * idempotente: la cadena que ya tenga `eu:` se deja como está, así que puede
 * reejecutarse cuando vuelva una revisión del traductor.
 *
 * La clave del JSON es el CASTELLANO tal cual aparece en el fuente (con sus
 * `${…}` incluidos), no la línea: así el volcado sigue funcionando aunque el
 * copy se haya reordenado desde que se encargó la traducción.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FILES = ['src/data/copy.ts', 'src/data/legal.ts'];
const DICT = path.join(__dirname, 'euskera.json');

const strAt = (src, from) => {
  const m = /^\s*(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/.exec(src.slice(from));
  return m ? { quote: m[1], text: m[2], end: from + m[0].length } : null;
};

/**
 * Cómo se escribe la traducción en el fuente. Las cadenas con `${…}` tienen que
 * seguir siendo plantillas, o el placeholder se imprimiría literal.
 */
const literal = (text) =>
  text.includes('${')
    ? '`' + text.replace(/`/g, '\\`') + '`'
    : `'${text.replace(/\\(?!n)/g, '\\\\').replace(/'/g, "\\'")}'`;

/**
 * Despliega a varias líneas los `{ es, en, eu }` que, con la traducción dentro,
 * se han pasado del ancho al que está escrito el resto del fichero. Sólo toca
 * los objetos que ocupan la línea entera: los que van anidados dentro de otro
 * objeto en línea se quedan como están.
 */
const LIT = `('(?:\\\\.|[^'])*'|"(?:\\\\.|[^"])*"|\`(?:\\\\.|[^\`])*\`)`;
const TRIO = `\\{ es: ${LIT}, en: ${LIT}, eu: ${LIT} \\},`;
const desplegar = (src) =>
  src
    // `clave: { es, en, eu },`
    .replace(
      new RegExp(`^([ \\t]*)([\\w$]+|'[^']+'): ${TRIO}$`, 'gm'),
      (linea, sangria, clave, es, en, eu) =>
        linea.length <= 100
          ? linea
          : `${sangria}${clave}: {\n${sangria}  es: ${es},\n${sangria}  en: ${en},\n${sangria}  eu: ${eu},\n${sangria}},`,
    )
    // `{ es, en, eu },` suelto, como elemento de un array
    .replace(new RegExp(`^([ \\t]*)${TRIO}$`, 'gm'), (linea, sangria, es, en, eu) =>
      linea.length <= 100
        ? linea
        : `${sangria}{\n${sangria}  es: ${es},\n${sangria}  en: ${en},\n${sangria}  eu: ${eu},\n${sangria}},`,
    );

const dict = JSON.parse(fs.readFileSync(DICT, 'utf8'));
let añadidas = 0;
const faltan = [];

for (const file of FILES) {
  const full = path.join(ROOT, file);
  let src = fs.readFileSync(full, 'utf8');
  const inserciones = [];

  const re = /\bes:/g;
  let m;
  while ((m = re.exec(src))) {
    const es = strAt(src, m.index + 3);
    if (!es || !es.text.trim()) continue;

    // Fin del par: el `en:` que acompaña, si lo hay; si no, el propio `es:`.
    let fin = es.end;
    let sep = src.slice(es.end, es.end + 400);
    const enMatch = /^\s*,\s*\n?\s*en:/.exec(sep);
    if (enMatch) {
      const v = strAt(src, es.end + enMatch[0].length);
      if (v) {
        fin = v.end;
        sep = src.slice(fin, fin + 400);
      }
    }

    // Ya traducida en un volcado anterior.
    if (/^\s*,\s*\n?\s*eu:/.test(sep)) continue;

    const eu = dict[es.text];
    if (eu === undefined) {
      faltan.push(`${path.basename(file)}: ${es.text.slice(0, 70)}`);
      continue;
    }

    // Si el par vive en una sola línea, la traducción va detrás en esa misma
    // línea; si está desplegado, en una línea nueva con la sangría del bloque.
    const inicioLinea = src.lastIndexOf('\n', fin) + 1;
    const trozo = src.slice(inicioLinea, fin);
    const multilinea = /\n/.test(src.slice(m.index, fin));
    const sangria = multilinea ? /^\s*/.exec(trozo)[0] : '';
    inserciones.push({
      at: fin,
      text: multilinea ? `,\n${sangria}eu: ${literal(eu)}` : `, eu: ${literal(eu)}`,
    });
  }

  // De atrás hacia delante para no invalidar los desplazamientos.
  for (const ins of inserciones.reverse()) {
    src = src.slice(0, ins.at) + ins.text + src.slice(ins.at);
  }
  fs.writeFileSync(full, desplegar(src));
  añadidas += inserciones.length;
  console.log(`${file}: ${inserciones.length} traducciones volcadas`);
}

if (faltan.length) {
  console.error(`\nSin traducción (${faltan.length}):\n${faltan.join('\n')}`);
  process.exit(1);
}
console.log(`\n${añadidas} campos eu añadidos.`);
