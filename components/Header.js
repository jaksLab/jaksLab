import { createWhatsAppLink } from '../scripts/utils.js';

export function Header(content) {
  const { brand, navigation, hero } = content;
  const links = navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join('');

  return `
    <div class="container nav-shell">
      <a class="brand" href="#hero" aria-label="JAKS Engineering Lab home">
        <img src="${brand.logo}" alt="${brand.name} logo" width="56" height="56" />
        <span><strong>${brand.name}</strong><small>${brand.tagline}</small></span>
      </a>
      <nav class="site-nav" id="site-nav" aria-label="Main navigation">${links}<a class="mobile-whatsapp" href="${createWhatsAppLink(hero.whatsappMessage)}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></nav>
      <a class="btn btn-primary nav-whatsapp" href="${createWhatsAppLink(hero.whatsappMessage)}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
}
