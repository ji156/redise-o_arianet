import { CONTACT, STRIPE_LINKS, plans, EMPEZAR } from '../data/copy.ts';

/**
 * Formulario "Empezar proyecto". Envía el pedido a la API de arianet-crm
 * (POST /api/submissions): el servidor guarda el pedido y envía los dos
 * emails automáticos (confirmación al cliente + aviso al estudio) — el
 * navegador no abre ningún cliente de correo. Si la petición falla se
 * muestra un aviso con un mailto: de respaldo, para no dejar al visitante
 * sin forma de contactar.
 */
export function initProjectForm(): void {
  const form = document.querySelector<HTMLFormElement>('#project-form');
  if (!form) return;

  const submitBtn = form.querySelector<HTMLButtonElement>('.pform__submit');
  const errorBox = document.querySelector<HTMLElement>('#pform-error');
  const errorFallback = document.querySelector<HTMLAnchorElement>('#pform-error-fallback');

  // Preselecciona el plan si se llega desde /empezar?plan=slug (ej. desde Tarifas).
  const preselect = new URLSearchParams(window.location.search).get('plan');
  if (preselect) {
    const input = form.querySelector<HTMLInputElement>(`input[name="plan"][value="${preselect}"]`);
    if (input) input.checked = true;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const planSlug = String(data.get('plan') ?? 'unsure');
    const planName = plans.find((p) => p.slug === planSlug)?.name.es ?? 'Sin decidir / aconsejadme';
    const styleSlug = String(data.get('style') ?? 'unsure');

    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      business: String(data.get('business') ?? ''),
      about: String(data.get('about') ?? ''),
      hasSite: data.get('hasSite') === 'si',
      currentUrl: String(data.get('currentUrl') ?? ''),
      plan: planSlug,
      style: styleSlug,
      notes: String(data.get('notes') ?? ''),
    };

    if (errorBox) errorBox.hidden = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = EMPEZAR.sending.es;
    }

    try {
      const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/api/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`API respondió ${res.status}`);

      form.hidden = true;

      if (planSlug !== 'unsure') {
        const donePlan = document.querySelector<HTMLElement>('#pform-done-plan');
        const stripeLink = document.querySelector<HTMLAnchorElement>('#pform-stripe-link');
        if (stripeLink) stripeLink.href = STRIPE_LINKS[planSlug] ?? '#';
        if (donePlan) donePlan.hidden = false;
      } else {
        const doneUnsure = document.querySelector<HTMLElement>('#pform-done-unsure');
        if (doneUnsure) doneUnsure.hidden = false;
      }
    } catch (err) {
      console.error('empezar-form: error enviando el pedido', err);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = EMPEZAR.submit.es;
      }
      if (errorFallback) {
        const subject = `Nuevo proyecto: ${payload.name} — ${planName}`;
        const lines = [
          `Nombre: ${payload.name}`,
          `Email: ${payload.email}`,
          `Teléfono: ${payload.phone || '(no indicado)'}`,
          '',
          `Negocio: ${payload.business}`,
          `A qué se dedica: ${payload.about}`,
          `¿Ya tiene web?: ${payload.hasSite ? 'Sí' : 'No'}`,
          `URL actual: ${payload.currentUrl || '(no indicado)'}`,
          '',
          `Plan de interés: ${planName}`,
          '',
          `Notas: ${payload.notes || '(ninguna)'}`,
        ];
        errorFallback.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          lines.join('\n'),
        )}`;
      }
      if (errorBox) errorBox.hidden = false;
    }
  });
}
