# How to update products without touching components or HTML

The live product catalog is in:

```text
data/products.js
```

You only edit product data there. Do **not** edit `components/ProductCard.js` when changing prices, images, materials or availability.

## Change a product price

1. Open `data/products.js`.
2. Find the product by `name`, `slug` or `sku`.
3. Change:

```js
priceFrom: 25,
price: null,
priceNote: 'Final price depends on size, colors and customization.'
```

Use `priceFrom` for the starting price shown on the card. Use `price: null` when every order needs a quote.

## Change production time

Edit this field:

```js
productionTime: '2–5 days'
```

## Change materials

Edit the list:

```js
materials: ['PLA', 'Painted Finish', 'Optional LED']
```

The card shows the first three materials.

## Add multiple product images

Use an `images` array. More than one image automatically creates a carousel:

```js
images: [
  {
    src: './assets/images/products/country-decor/colombia-01.jpg',
    alt: 'Colombia custom country wall decor'
  },
  {
    src: './assets/images/products/country-decor/venezuela-01.jpg',
    alt: 'Venezuela custom country wall decor'
  }
]
```

If the image is not uploaded yet, upload it to the folder first. For country decor products, use:

```text
assets/images/products/country-decor/
```

## Keep a single image without carousel

Use one item only:

```js
images: [
  {
    src: './assets/nfc-keychain.jpg',
    alt: 'NFC business keychain'
  }
]
```

With one image, the website hides arrows and dots automatically.

## Activate or deactivate a product

```js
available: true,
stockStatus: 'Made to order'
```

Set `available: false` if you do not want to show it as available. Update `stockStatus` with a short label such as `Made to order`, `Limited spots`, `Quote required` or `Unavailable`.

## Mark a product as featured

```js
featured: true
```

This field is ready for future filters, featured products or homepage highlights.

## Change WhatsApp message

```js
whatsappMessage: 'Hi JAKS, I want a custom country wall decor.'
```

This message is used by the “Request this product” button.

## Future no-code recommendation

For the next stage, use **Google Sheets first** because it is simple, familiar and easy to export as CSV/JSON. When the catalog grows and you need approvals, roles or richer product pages, move to a lightweight CMS. Notion is useful for planning, but Google Sheets is easier for clean product tables and price updates.

Recommended future path:

1. Keep `products.js` now.
2. Create a matching Google Sheets table with the same field names.
3. Export to JSON/CSV during updates.
4. Later connect a small CMS or admin panel when payments, inventory or product pages are added.
