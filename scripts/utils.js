import { siteContent } from '../data/siteContent.js';

export function createWhatsAppLink(message = siteContent.contact.whatsappMessage) {
  const cleanNumber = siteContent.brand.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(product) {
  if (!product.available) return 'Quote only';

  const currency = product.currency || 'USD';
  const formatAmount = (amount) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount);

  if (typeof product.priceFrom === 'number') return `From ${formatAmount(product.priceFrom)}`;
  if (product.priceFrom === true && typeof product.price === 'number') return `From ${formatAmount(product.price)}`;
  if (typeof product.price === 'number') return formatAmount(product.price);
  return 'Custom quote';
}

export function normalizeMediaImages(item, fallbackAlt = 'JAKS Engineering Lab image') {
  const sourceImages = Array.isArray(item.images) && item.images.length > 0
    ? item.images
    : item.image
      ? [item.image]
      : [];

  return sourceImages
    .map((image, index) => {
      if (typeof image === 'string') {
        return {
          src: image,
          alt: `${fallbackAlt} ${index + 1}`
        };
      }

      return {
        src: image.src,
        alt: image.alt || `${fallbackAlt} ${index + 1}`
      };
    })
    .filter((image) => image.src);
}

export function getPrimaryImage(item) {
  const [primaryImage] = normalizeMediaImages(item);
  return primaryImage?.src || '';
}

export function renderMediaCarousel(item, fallbackAlt, className = '') {
  const images = normalizeMediaImages(item, fallbackAlt);
  const hasCarousel = images.length > 1;

  if (images.length === 0) return '';

  const imageMarkup = images.map((image, index) => `
    <img
      class="media-carousel__image${index === 0 ? ' media-carousel__image--active' : ''}"
      src="${image.src}"
      alt="${image.alt}"
      loading="lazy"
      data-carousel-image
    />
  `).join('');

  if (!hasCarousel) {
    return `
      <div class="media-carousel media-carousel--single ${className}" data-carousel>
        <div class="media-carousel__track" data-carousel-track>${imageMarkup}</div>
      </div>
    `;
  }

  const dots = images.map((image, index) => `
    <button
      class="media-carousel__dot${index === 0 ? ' media-carousel__dot--active' : ''}"
      type="button"
      aria-label="Show image ${index + 1} of ${images.length}"
      data-carousel-dot="${index}"
    ></button>
  `).join('');

  return `
    <div class="media-carousel ${className}" data-carousel data-carousel-index="0">
      <div class="media-carousel__track" data-carousel-track>${imageMarkup}</div>
      <button class="media-carousel__button media-carousel__button--prev" type="button" aria-label="Previous image" data-carousel-action="prev">‹</button>
      <button class="media-carousel__button media-carousel__button--next" type="button" aria-label="Next image" data-carousel-action="next">›</button>
      <div class="media-carousel__dots" aria-label="Image carousel controls">${dots}</div>
    </div>
  `;
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
