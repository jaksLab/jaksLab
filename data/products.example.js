// Copy this example into `products.js` when creating a new product.
// Keep field names the same so the catalog can migrate later to JSON, Google Sheets, Notion or a CMS.
export const productExample = {
  id: 'prod-example-product',
  slug: 'example-product',
  sku: 'JAKS-EXAMPLE-001',
  name: 'Example Product',
  category: 'Custom Products',
  tags: ['Custom', 'Gift', '3D Printing'],
  priceFrom: 25,
  price: null,
  currency: 'USD',
  priceNote: 'Final price depends on size and customization.',
  shortDescription: 'Short customer-friendly description shown on the product card.',
  fullDescription: 'Longer description for future product detail pages.',
  materials: ['PLA', 'Painted Finish', 'Optional LED'],
  productionTime: '2–5 days',
  customizationOptions: ['Name', 'Colors', 'Size'],
  images: [
    {
      src: './assets/images/products/example/product-01.jpg',
      alt: 'Example product front view'
    },
    {
      src: './assets/images/products/example/product-02.jpg',
      alt: 'Example product detail view'
    }
  ],
  featured: false,
  available: true,
  stockStatus: 'Made to order',
  shippingAvailable: true,
  localPickupAvailable: true,
  whatsappMessage: 'Hi JAKS, I want to request the Example Product.'
};
