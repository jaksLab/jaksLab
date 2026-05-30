import { ProductCard } from './ProductCard.js';

export function ProductsSection(products) {
  return `
    <div class="container section-inner">
      <div class="section-head reveal">
        <p class="eyebrow">Products</p>
        <h2>Custom products made simple.</h2>
        <p>Initial catalog ready for quotes today and structured for filters, product pages, cart and payments later.</p>
      </div>
      <div class="products-grid reveal">${products.map(ProductCard).join('')}</div>
    </div>
  `;
}
