import { createWhatsAppLink, formatPrice, getPrimaryImage, renderTags } from '../scripts/utils.js';

export function ProductCard(product) {
  const materials = product.materials.slice(0, 3).join(' · ');
  const custom = product.customizationOptions.length > 0 ? 'Customizable' : 'Standard item';

  return `
    <article class="product-card card-hover" data-category="${product.category}">
      <div class="card-image-wrap">
        <img src="${getPrimaryImage(product)}" alt="${product.name}" loading="lazy" />
        <span class="availability">${product.available ? 'Available' : 'Quote only'}</span>
      </div>
      <div class="card-body">
        <p class="card-kicker">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="card-description">${product.shortDescription}</p>
        <div class="product-meta">
          <span>${formatPrice(product)}</span>
          <span>${product.productionTime}</span>
        </div>
        <p class="materials"><strong>Main materials:</strong> ${materials}</p>
        <div class="tag-row">
          <span class="tag tag-strong">${custom}</span>
          ${renderTags(product.tags.slice(0, 2))}
        </div>
        <a class="btn btn-primary btn-full" href="${createWhatsAppLink(product.whatsappMessage)}" target="_blank" rel="noopener noreferrer">Request this product</a>
      </div>
    </article>
  `;
}
