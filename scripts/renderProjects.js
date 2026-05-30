import { projects } from '../data/projects.js';
import { ProjectsSection } from '../components/ProjectsSection.js';
import { setHTML } from './utils.js';

export function renderProjects() {
  setHTML('#projects', ProjectsSection(projects));
}
