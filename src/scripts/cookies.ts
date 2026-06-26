/**
 * Banner de consentimiento de cookies.
 *
 * Muestra el aviso `[data-cookie-banner]` si no hay decisión previa guardada
 * en localStorage. Al aceptar o rechazar, guarda la elección y oculta el aviso.
 *
 * El sitio sólo usa cookies técnicas propias (idioma, esta misma preferencia) y
 * NO carga recursos de terceros (las fuentes están auto-hospedadas), por lo que
 * no se transfiere ningún dato a servicios externos.
 */
const KEY = 'arianet:cookie-consent'; // 'accepted' | 'rejected'

export function initCookies(): void {
  const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
  if (!banner) return;

  const stored = localStorage.getItem(KEY);

  // Sin decisión previa → muestra el aviso.
  if (stored !== 'accepted' && stored !== 'rejected') {
    banner.hidden = false;
    // fuerza reflow antes de animar la entrada
    requestAnimationFrame(() => banner.classList.add('is-visible'));
  }

  const close = (decision: 'accepted' | 'rejected') => {
    localStorage.setItem(KEY, decision);
    banner.classList.remove('is-visible');
    const done = () => {
      banner.hidden = true;
      banner.removeEventListener('transitionend', done);
    };
    banner.addEventListener('transitionend', done);
  };

  banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => close('accepted'));
  banner.querySelector('[data-cookie-reject]')?.addEventListener('click', () => close('rejected'));
}
