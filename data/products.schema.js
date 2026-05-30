// Product schema reference for maintainers and future migrations to JSON, Google Sheets, Notion, CMS or an admin panel.
// This file documents the expected fields only. The live catalog is exported from `products.js`.
export const productSchema = {
  id: 'Unique internal id. Example: prod-country-wall-decor',
  slug: 'URL-friendly product name for future product pages. Example: custom-country-wall-decor',
  sku: 'Internal SKU or product code.',
  name: 'Customer-facing product name.',
  category: 'Customer-facing category or future filter value.',
  tags: ['Search/filter tags shown or used later.'],
  priceFrom: 'Number for starting price, or true for older data that uses price as the starting price.',
  price: 'Exact price as a number, or null when the final price depends on customization.',
  currency: 'Currency code, normally USD.',
  priceNote: 'Short explanation below the price.',
  shortDescription: 'Short card description.',
  fullDescription: 'Longer product description for future product pages.',
  materials: ['Material 1', 'Material 2', 'Material 3'],
  productionTime: 'Estimated production time. Example: 2–5 days.',
  customizationOptions: ['Option 1', 'Option 2'],
  images: [
    {
      src: './assets/images/products/example/product-01.jpg',
      alt: 'Clear alt text for accessibility and SEO'
    }
  ],
  featured: 'Boolean. true marks the product for future featured areas.',
  available: 'Boolean. true makes the product available for quote requests.',
  stockStatus: 'Short visual label. Example: Made to order.',
  shippingAvailable: 'Boolean. true if shipping is available.',
  localPickupAvailable: 'Boolean. true if local pickup is available.',
  whatsappMessage: 'Message used by the Request this product button.'
};
