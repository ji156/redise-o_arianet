/**
 * Scroll-reveal mínimo vía IntersectionObserver.
 * Cada [data-reveal] entra una sola vez. Los estados (opacity/transform inicial,
 * transición y .is-visible) viven en global.css.
 *
 * Si el usuario prefiere movimiento reducido, no observamos nada: el CSS ya deja
 * los elementos visibles con `opacity:1` vía la media query.
 */
export function initReveal(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (els.length === 0) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
  );

  els.forEach((el) => io.observe(el));
}
