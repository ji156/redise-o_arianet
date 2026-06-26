/**
 * Menú de navegación móvil (hamburguesa).
 *
 * El botón `[data-menu-toggle]` abre/cierra el panel `[data-menu-panel]`.
 * Maneja `aria-expanded`, bloqueo de scroll del body (`.menu-open`), cierre
 * con Escape y cierre al pulsar cualquier enlace del panel. El icono de la
 * hamburguesa anima a "X" vía CSS según `aria-expanded`.
 */
export function initMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
  if (!toggle || !panel) return;

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Cierra al navegar a una sección.
  panel.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setOpen(false));
  });

  // Cierra con Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Si se vuelve a escritorio con el menú abierto, ciérralo para no dejar
  // estados inconsistentes (panel y scroll-lock).
  const desktop = window.matchMedia('(min-width: 901px)');
  desktop.addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}
