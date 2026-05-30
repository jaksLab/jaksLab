import { createWhatsAppLink } from '../scripts/utils.js';

export function HeroSection({ hero }) {
  return `
    <div class="container hero-grid">
      <div class="hero-copy reveal">
        <p class="eyebrow">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="hero-subtitle">${hero.subtitle}</p>
        <p class="trust-line">${hero.trustLine}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${createWhatsAppLink(hero.whatsappMessage)}" target="_blank" rel="noopener noreferrer">${hero.primaryCta}</a>
          <a class="btn btn-outline" href="#products">${hero.secondaryCta}</a>
          <a class="btn btn-ghost" href="${createWhatsAppLink(hero.whatsappMessage)}" target="_blank" rel="noopener noreferrer">${hero.whatsappCta}</a>
        </div>
      </div>
      <div class="hero-visual reveal">
        <img src="${hero.image}" alt="JAKS Engineering Lab custom product workspace" />
        <div class="hero-card">
          <strong>From idea to real product.</strong>
          <span>Custom work for homes, creators and small businesses.</span>
        </div>
      </div>
    </div>
  `;
}
