import { ServiceCard } from './ServiceCard.js';

export function ServicesSection(services) {
  return `
    <div class="container section-inner">
      <div class="section-head reveal">
        <p class="eyebrow">Services</p>
        <h2>Practical services, explained simply.</h2>
        <p>Choose a product, send a reference photo, or describe the problem. JAKS helps you find the simplest path from idea to finished solution.</p>
      </div>
      <div class="services-grid reveal">${services.map(ServiceCard).join('')}</div>
    </div>
  `;
}
