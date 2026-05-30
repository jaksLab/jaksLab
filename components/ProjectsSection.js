import { ProjectCard } from './ProjectCard.js';

export function ProjectsSection(projects) {
  return `
    <div class="container section-inner">
      <div class="section-head reveal">
        <p class="eyebrow">Projects</p>
        <h2>Built for real needs, not just concepts.</h2>
        <p>Project cards show how JAKS can think through a customer problem and turn it into a practical product or service.</p>
      </div>
      <div class="projects-grid reveal">${projects.map(ProjectCard).join('')}</div>
    </div>
  `;
}
