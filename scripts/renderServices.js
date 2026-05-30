import { services } from '../data/services.js';
import { ServicesSection } from '../components/ServicesSection.js';
import { setHTML } from './utils.js';

export function renderServices() {
  setHTML('#services', ServicesSection(services));
}
