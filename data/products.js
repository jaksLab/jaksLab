// HOW TO EDIT PRODUCTS:
// priceFrom: starting price shown on the card. Use a number like 25, or true with price for legacy products.
// price: exact price if available. Use null if the final price depends on customization.
// priceNote: extra text like "Final price depends on size and customization".
// productionTime: estimated production time shown to clients.
// materials: list of materials. The card shows the first three.
// available: true shows product as available; false shows it as quote/unavailable.
// stockStatus: short label shown over the image, such as "Made to order" or "Limited spots".
// featured: true marks the product for future featured sections or filters.
// images: add more than one image to automatically create a carousel. You can use strings or { src, alt } objects.
// To migrate later to Google Sheets, Notion, JSON or a CMS, keep these field names stable.
export const products = [
  {
    id: 'prod-nfc-business-keychain',
    slug: 'nfc-business-keychain',
    sku: 'JAKS-NFC-KEY-001',
    name: 'NFC Business Keychain',
    category: 'Business Branding Products',
    tags: ['NFC', 'Business', 'Branding', 'Networking'],
    priceFrom: 18,
    price: null,
    currency: 'USD',
    priceNote: 'Final price depends on quantity, color and link setup.',
    shortDescription: 'A custom keychain that opens your digital card, menu, profile or business link with one tap.',
    fullDescription: 'A practical NFC product for professionals, small businesses and creators who want to share contact details faster.',
    materials: ['PLA/PETG', 'NFC tag', 'Custom color'],
    productionTime: '2–5 business days',
    customizationOptions: ['Logo', 'Color', 'Link', 'Name'],
    images: [
      {
        src: './assets/nfc-keychain.jpg',
        alt: 'NFC business keychain with custom branding'
      }
    ],
    featured: true,
    available: true,
    stockStatus: 'Made to order',
    shippingAvailable: true,
    localPickupAvailable: true,
    whatsappMessage: 'Hi JAKS, I want to request an NFC Business Keychain. Please send me options and pricing.'
  },
  {
    id: 'prod-country-wall-decor',
    slug: 'custom-country-wall-decor',
    sku: 'JAKS-DECOR-COUNTRY-001',
    name: 'Custom Country Wall Decor',
    category: 'Personalized Gifts',
    tags: ['3D Printing', 'Country Decor', 'Personalized Gift'],
    priceFrom: 25,
    price: null,
    currency: 'USD',
    priceNote: 'Final price depends on size, colors and customization.',
    shortDescription: 'Personalized country-inspired wall decor made for gifts, rooms, events and small businesses.',
    fullDescription: 'A custom decorative piece inspired by your country, culture or special memory. It can be personalized with names, colors, sizes and optional LED details.',
    materials: ['PLA', 'Painted Finish', 'Optional LED'],
    productionTime: '2–5 days',
    customizationOptions: ['Country', 'Name', 'Colors', 'Size', 'LED Option'],
    images: [
      {
        src: './assets/images/products/country-decor/colombia-01.svg',
        alt: 'Colombia custom country wall decor'
      },
      {
        src: './assets/images/products/country-decor/venezuela-01.svg',
        alt: 'Venezuela custom country wall decor'
      },
      {
        src: './assets/images/products/country-decor/dominican-republic-01.svg',
        alt: 'Dominican Republic custom country wall decor'
      }
    ],
    featured: true,
    available: true,
    stockStatus: 'Made to order',
    shippingAvailable: false,
    localPickupAvailable: true,
    whatsappMessage: 'Hi JAKS, I want a custom country wall decor.'
  },
  {
    id: 'prod-led-logo-display',
    slug: 'custom-led-logo-display',
    sku: 'JAKS-LED-LOGO-001',
    name: 'Custom LED Logo Display',
    category: 'Business Branding Products',
    tags: ['LED', 'Logo', 'Display', 'Business'],
    priceFrom: 75,
    price: null,
    currency: 'USD',
    priceNote: 'Final price depends on logo complexity, size and lighting options.',
    shortDescription: 'A premium lighted logo display for desks, counters, events, creators and business spaces.',
    fullDescription: 'A clean branded display designed to make a logo, name or concept stand out in a professional way.',
    materials: ['PLA/PETG', 'LED lighting', 'Acrylic or diffuser elements'],
    productionTime: '5–10 business days',
    customizationOptions: ['Logo', 'Lighting color', 'Size', 'Base style'],
    images: [
      './assets/led-display.jpg',
      './assets/hydra-display.jpg'
    ],
    featured: true,
    available: true,
    stockStatus: 'Made to order',
    shippingAvailable: true,
    localPickupAvailable: true,
    whatsappMessage: 'Hi JAKS, I want a Custom LED Logo Display for my brand. What do you need from me?'
  },
  {
    id: 'prod-personalized-3d-gift',
    slug: 'personalized-3d-gift',
    sku: 'JAKS-GIFT-3D-001',
    name: 'Personalized 3D Gift',
    category: 'Personalized Gifts',
    tags: ['Gift', '3D Printed', 'Personalized'],
    priceFrom: 25,
    price: null,
    currency: 'USD',
    priceNote: 'Final price depends on size, finish and detail level.',
    shortDescription: 'A custom 3D printed gift made from a name, idea, character style, photo reference or theme.',
    fullDescription: 'A unique gift option for birthdays, creators, fans, families and special occasions.',
    materials: ['PLA/PETG', 'Custom finish', 'Optional paint details'],
    productionTime: '3–8 business days',
    customizationOptions: ['Name', 'Theme', 'Colors', 'Size'],
    images: [
      {
        src: './assets/itachi.png',
        alt: 'Personalized 3D printed display gift'
      }
    ],
    featured: false,
    available: true,
    stockStatus: 'Made to order',
    shippingAvailable: true,
    localPickupAvailable: true,
    whatsappMessage: 'Hi JAKS, I want a Personalized 3D Gift. I can send the idea and reference photos.'
  },
  {
    id: 'prod-smart-technical-device',
    slug: 'smart-technical-device',
    sku: 'JAKS-SMART-DEVICE-001',
    name: 'Smart Technical Device',
    category: 'Smart Devices & Automation',
    tags: ['Smart Device', 'Automation', 'Prototype'],
    priceFrom: 95,
    price: null,
    currency: 'USD',
    priceNote: 'Final price depends on electronics, sensors and build complexity.',
    shortDescription: 'A custom smart device, small automation build or practical prototype for a real-life problem.',
    fullDescription: 'For customers who need a device that senses, lights, moves, connects, organizes or simplifies a task.',
    materials: ['3D printed enclosure', 'Electronics', 'Wiring', 'Optional sensors'],
    productionTime: '7–15 business days',
    customizationOptions: ['Function', 'Size', 'Power type', 'Controls'],
    images: [
      './assets/lamp.png'
    ],
    featured: false,
    available: true,
    stockStatus: 'Quote required',
    shippingAvailable: false,
    localPickupAvailable: true,
    whatsappMessage: 'Hi JAKS, I have an idea for a Smart Technical Device. Can we review if it is possible?'
  },
  {
    id: 'prod-business-sample-box',
    slug: 'premium-business-sample-box',
    sku: 'JAKS-BRAND-BOX-001',
    name: 'Premium Business Sample Box',
    category: 'Business Branding Products',
    tags: ['Sample Box', 'Branding', 'Business', 'Presentation'],
    priceFrom: 120,
    price: null,
    currency: 'USD',
    priceNote: 'Final price depends on box layout, inserts and branding details.',
    shortDescription: 'A branded sample box or presentation kit made to help your business show products professionally.',
    fullDescription: 'A custom display box for sales, client meetings, product samples and premium brand presentation.',
    materials: ['3D printed inserts', 'Custom box details', 'Branding elements'],
    productionTime: '7–14 business days',
    customizationOptions: ['Logo', 'Layout', 'Product size', 'Colors'],
    images: [
      './assets/sample-box.jpg',
      './assets/sample-box-open.jpg'
    ],
    featured: true,
    available: true,
    stockStatus: 'Made to order',
    shippingAvailable: true,
    localPickupAvailable: true,
    whatsappMessage: 'Hi JAKS, I want a Premium Business Sample Box for my business. Please help me quote it.'
  }
];
