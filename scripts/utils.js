import { siteContent } from '../data/siteContent.js';

export function createWhatsAppLink(message = siteContent.contact.whatsappMessage) {
  const cleanNumber = siteContent.brand.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(product) {
  if (!product.available) return 'Quote only';
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.currency || 'USD',
    maximumFractionDigits: 0
  }).format(product.price);
  return product.priceFrom ? `From ${amount}` : amount;
}

export function getPrimaryImage(item) {
  if (Array.isArray(item.images) && item.images.length > 0) return item.images[0];
  return item.image;
}

export function renderTags(tags = []) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
}

export function setHTML(selector, html) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
}

export function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
