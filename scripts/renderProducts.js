import { products } from '../data/products.js';
import { ProductsSection } from '../components/ProductsSection.js';
import { setHTML } from './utils.js';

export function renderProducts() {
  setHTML('#products', ProductsSection(products));
}
