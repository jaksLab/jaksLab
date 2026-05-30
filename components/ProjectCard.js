import { createWhatsAppLink, renderTags } from '../scripts/utils.js';

export function ProjectCard(project) {
  return `
    <article class="project-card card-hover">
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="card-body">
        <p class="card-kicker">${project.category}</p>
        <h3>${project.title}</h3>
        <p><strong>Problem:</strong> ${project.problem}</p>
        <p><strong>Solution:</strong> ${project.solution}</p>
        <p><strong>Outcome:</strong> ${project.outcome}</p>
        <div class="tag-row">${renderTags(project.tags)}</div>
        <a class="btn btn-outline btn-full" href="${createWhatsAppLink(project.whatsappMessage)}" target="_blank" rel="noopener noreferrer">Ask for price</a>
      </div>
    </article>
  `;
}
