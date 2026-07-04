/**
 * Menú de navegación móvil (hamburguesa).
 *
 * El botón `[data-menu-toggle]` abre/cierra el panel `[data-menu-panel]`.
 * Maneja `aria-expanded`, bloqueo de scroll del body (`.menu-open`), cierre
 * con Escape y cierre al pulsar cualquier enlace del panel. El icono de la
 * hamburguesa anima a "X" vía CSS según `aria-expanded`. Atrapa el foco
 * dentro del panel mientras está abierto (es un overlay a pantalla completa).
 */
export function initMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
  if (!toggle || !panel) return;

  const focusableSelector = 'a[href], button:not([disabled])';
  const getFocusable = () => Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector));

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
    const attr = open ? `data-label-close-${lang}` : `data-label-open-${lang}`;
    const label = toggle.getAttribute(attr);
    if (label) toggle.setAttribute('aria-label', label);
    if (open) getFocusable()[0]?.focus();
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Cierra al navegar a una sección.
  panel.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setOpen(false));
  });

  // Cierra con Escape; atrapa el Tab dentro del panel mientras está abierto.
  document.addEventListener('keydown', (e) => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;

    if (e.key === 'Escape') {
      setOpen(false);
      toggle.focus();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Si se vuelve a escritorio con el menú abierto, ciérralo para no dejar
  // estados inconsistentes (panel y scroll-lock).
  const desktop = window.matchMedia('(min-width: 901px)');
  desktop.addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}
