import { createWhatsAppLink } from '../scripts/utils.js';

export function WhatsAppButton(message) {
  return `<a class="whatsapp-float" href="${createWhatsAppLink(message)}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>`;
}
