import { createWhatsAppLink } from '../scripts/utils.js';

export function HowItWorksSection({ howItWorks }) {
  const steps = howItWorks.steps.map((step, index) => `
    <li>
      <span>${index + 1}</span>
      <p>${step}</p>
    </li>
  `).join('');

  return `
    <div class="container section-inner split-section">
      <div class="section-head reveal align-left">
        <p class="eyebrow">${howItWorks.eyebrow}</p>
        <h2>${howItWorks.title}</h2>
        <p>${howItWorks.intro}</p>
        <a class="btn btn-primary" href="${createWhatsAppLink(howItWorks.whatsappMessage)}" target="_blank" rel="noopener noreferrer">${howItWorks.cta}</a>
      </div>
      <ol class="steps-list reveal">${steps}</ol>
    </div>
  `;
}
