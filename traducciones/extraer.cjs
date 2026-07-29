/**
 * Extrae a CSV todas las cadenas traducibles del sitio.
 *
 *   node traducciones/extraer.cjs
 *
 * Genera `traducciones/euskera-pendiente.csv` con una fila por cadena: el
 * castellano, el inglés como referencia y una columna vacía para el euskera.
 * Vuelve a ejecutarlo si el copy cambia antes de encargar la traducción.
 *
 * La columna `seccion` es la constante exportada donde vive la cadena, y sirve
 * para reimportar: al volver el CSV relleno, cada fila se identifica por
 * fichero + línea + castellano.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(__dirname, 'euskera-pendiente.csv');
const FILES = ['src/data/copy.ts', 'src/data/legal.ts'];

const csv = (v) => `"${String(v).replace(/"/g, '""')}"`;

/** Lee el literal (comilla simple, doble o plantilla) que empieza en `from`. */
const strAt = (src, from) => {
  const m = /^\s*(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/.exec(src.slice(from));
  return m ? { text: m[2], end: from + m[0].length } : null;
};

const rows = [];
let words = 0;

for (const file of FILES) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');

  // Línea de inicio de cada bloque exportado, para dar contexto al traductor.
  const sections = [];
  src.split('\n').forEach((l, i) => {
    const m = /^export (?:const|type) (\w+)/.exec(l);
    if (m) sections.push({ line: i + 1, name: m[1] });
  });
  const sectionOf = (line) => {
    let name = '(cabecera)';
    for (const s of sections) if (s.line <= line) name = s.name;
    return name;
  };

  const re = /\bes:/g;
  let m;
  while ((m = re.exec(src))) {
    const es = strAt(src, m.index + 3);
    if (!es) continue;

    // El `en:` que acompaña, si viene justo detrás del castellano.
    let en = '';
    const enMatch = /^\s*,\s*\n?\s*en:/.exec(src.slice(es.end, es.end + 400));
    if (enMatch) {
      const v = strAt(src, es.end + enMatch[0].length);
      if (v) en = v.text;
    }

    const text = es.text.replace(/\\n/g, ' ').trim();
    if (!text) continue;

    const line = src.slice(0, m.index).split('\n').length;
    words += text.split(/\s+/).filter(Boolean).length;
    rows.push([path.basename(file), sectionOf(line), line, text, en, '']);
  }
}

const header = ['fichero', 'seccion', 'linea', 'castellano', 'ingles_referencia', 'EUSKERA'];
// BOM inicial: sin él, Excel abre el CSV sin reconocer UTF-8 y rompe las tildes.
fs.writeFileSync(OUT, '﻿' + [header, ...rows].map((r) => r.map(csv).join(',')).join('\n') + '\n');

console.log(`${rows.length} cadenas · ${words} palabras → ${path.relative(ROOT, OUT)}`);
