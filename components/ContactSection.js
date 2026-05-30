import { createWhatsAppLink } from '../scripts/utils.js';

export function ContactSection({ contact, brand }) {
  return `
    <div class="container section-inner contact-grid">
      <div class="contact-copy reveal">
        <p class="eyebrow">${contact.eyebrow}</p>
        <h2>${contact.title}</h2>
        <p>${contact.intro}</p>
        <div class="contact-details">
          <a href="${createWhatsAppLink(contact.whatsappMessage)}" target="_blank" rel="noopener noreferrer"><strong>WhatsApp:</strong> ${brand.phoneDisplay}</a>
          <span><strong>Service area:</strong> ${brand.serviceArea}</span>
          <span><strong>Languages:</strong> ${brand.languages}</span>
          <a href="${brand.instagram}" target="_blank" rel="noopener noreferrer"><strong>Instagram:</strong> ${brand.instagramLabel}</a>
        </div>
      </div>
      <form class="quote-form reveal" id="quote-form">
        <h3>${contact.formTitle}</h3>
        <label for="customer-name">Name</label>
        <input id="customer-name" name="name" type="text" autocomplete="name" />
        <label for="customer-need">What do you need?</label>
        <select id="customer-need" name="need">
          <option value="Custom product">Custom product</option>
          <option value="3D printing or design">3D printing or design</option>
          <option value="Smart device or automation">Smart device or automation</option>
          <option value="Repair or maintenance">Repair or maintenance</option>
          <option value="Business branding product">Business branding product</option>
          <option value="Other idea or problem">Other idea or problem</option>
        </select>
        <label for="customer-message">Message</label>
        <textarea id="customer-message" name="message" rows="5"></textarea>
        <button class="btn btn-primary btn-full" type="submit">${contact.formButton}</button>
      </form>
    </div>
  `;
}
