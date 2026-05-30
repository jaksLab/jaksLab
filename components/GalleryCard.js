import { createWhatsAppLink, renderMediaCarousel, renderTags } from '../scripts/utils.js';

export function GalleryCard(item) {
  return `
    <article class="gallery-card card-hover">
      ${renderMediaCarousel(item, item.title, 'gallery-media')}
      <div class="card-body">
        <p class="card-kicker">${item.category}</p>
        <h3>${item.title}</h3>
        <dl class="solution-list">
          <div><dt>Client need</dt><dd>${item.clientNeed}</dd></div>
          <div><dt>JAKS solution</dt><dd>${item.jaksSolution}</dd></div>
          <div><dt>Value</dt><dd>${item.valueGenerated}</dd></div>
        </dl>
        <div class="tag-row">${renderTags(item.tags)}</div>
        <a class="btn btn-outline btn-full" href="${createWhatsAppLink(item.whatsappMessage)}" target="_blank" rel="noopener noreferrer">I want something like this</a>
      </div>
    </article>
  `;
}
