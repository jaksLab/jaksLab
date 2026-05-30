import { gallery } from '../data/gallery.js';
import { GallerySection } from '../components/GallerySection.js';
import { setHTML } from './utils.js';

export function renderGallery() {
  setHTML('#gallery', GallerySection(gallery));
}
