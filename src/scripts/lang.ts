/**
 * Toggle de idioma ES/EN — fiel al prototipo.
 *
 * Cada nodo traducible lleva `data-en` con la cadena en inglés; su contenido
 * inicial (español) es el valor por defecto. Al activar EN se intercambia
 * `textContent` por `data-en`; al volver a ES se restaura el español guardado.
 *
 * El botón del nav (`[data-lang-toggle]`) muestra el OTRO idioma: 'EN' estando
 * en español, 'ES' estando en inglés. `<html lang>` se actualiza para a11y/SEO.
 */
type Lang = 'es' | 'en';

const ES_STORE = new WeakMap<Element, string>();

export function initLangToggle(): void {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-en]'));
  // Guarda el texto español original de cada nodo (una sola vez).
  nodes.forEach((n) => {
    if (!ES_STORE.has(n)) ES_STORE.set(n, n.textContent ?? '');
  });

  let lang: Lang = (document.documentElement.lang as Lang) || 'es';

  const apply = (next: Lang) => {
    lang = next;
    document.documentElement.lang = next;
    nodes.forEach((n) => {
      const txt = next === 'en' ? n.getAttribute('data-en') : ES_STORE.get(n);
      if (txt != null) n.textContent = txt;
    });
    document.querySelectorAll<HTMLElement>('[data-lang-toggle]').forEach((btn) => {
      // Muestra el idioma contrario. Si el botón tiene un sub-elemento
      // [data-lang-value] (toggle del menú móvil), actualiza sólo ése para no
      // borrar su etiqueta; si no, actualiza el botón entero (toggle de barra).
      const valueEl = btn.querySelector<HTMLElement>('[data-lang-value]') ?? btn;
      valueEl.textContent = next === 'es' ? 'EN' : 'ES';
      btn.setAttribute(
        'aria-label',
        next === 'es' ? 'Switch to English' : 'Cambiar a español',
      );
    });

    // Sincroniza el aria-label del botón de menú móvil con el idioma activo.
    document.querySelectorAll<HTMLButtonElement>('[data-menu-toggle]').forEach((btn) => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      const attr = isOpen ? `data-label-close-${next}` : `data-label-open-${next}`;
      const label = btn.getAttribute(attr);
      if (label) btn.setAttribute('aria-label', label);
    });
  };

  document.querySelectorAll<HTMLElement>('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => apply(lang === 'es' ? 'en' : 'es'));
  });
}
