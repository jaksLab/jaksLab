import { createWhatsAppLink } from '../scripts/utils.js';

export function Footer(content) {
  const { brand, navigation, footer, contact } = content;
  const links = navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join('');

  return `
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="#hero">
          <img src="${brand.logo}" alt="${brand.name} logo" width="48" height="48" />
          <span><strong>${brand.name}</strong><small>${footer.tagline}</small></span>
        </a>
        <p>${brand.serviceArea} · ${brand.languages}</p>
      </div>
      <div>
        <h3>Quick links</h3>
        <nav class="footer-links">${links}</nav>
      </div>
      <div>
        <h3>Contact</h3>
        <a href="${createWhatsAppLink(contact.whatsappMessage)}" target="_blank" rel="noopener noreferrer">WhatsApp ${brand.phoneDisplay}</a>
        <a href="${brand.instagram}" target="_blank" rel="noopener noreferrer">Instagram ${brand.instagramLabel}</a>
        <a href="${brand.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
    <div class="container footer-bottom">${footer.copyright}</div>
  `;
}
