import { GalleryCard } from './GalleryCard.js';

export function GallerySection(gallery) {
  return `
    <div class="container section-inner">
      <div class="section-head reveal">
        <p class="eyebrow">Gallery</p>
        <h2>Examples of work and ideas you can request.</h2>
        <p>Use these examples to start a conversation. Send a similar idea, a photo, or a problem you want solved.</p>
      </div>
      <div class="gallery-grid reveal">${gallery.map(GalleryCard).join('')}</div>
    </div>
  `;
}
