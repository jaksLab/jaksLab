# JAKS Engineering Lab Website

This is a static GitHub Pages website built with HTML, CSS and vanilla JavaScript ES modules.

## Why it may look “not compatible” when double-clicking `index.html`

The site uses JavaScript modules with:

```html
<script type="module" src="./script.js"></script>
```

Modern browsers block ES module imports when the page is opened directly with `file://`. That can make the page look blank or show compatibility/security messages even though the files are correct for GitHub Pages.

## Correct way to run locally

Use a local static server from the repository folder:

```bash
npm start
```

Then open:

```text
http://localhost:4173/
```

No dependencies are installed. The local server is a small Node.js script in `scripts/dev-server.mjs` that serves `.js` files with the correct MIME type for ES modules.

Alternative if you prefer Python:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Editing content

- Main brand, hero, contact and WhatsApp number: `data/siteContent.js`
- Services: `data/services.js`
- Products: `data/products.js`
- Gallery examples: `data/gallery.js`
- Project cards: `data/projects.js`
- Shared categories: `data/categories.js`

## GitHub Pages

The site is ready for GitHub Pages because all paths are relative, for example:

```js
'./assets/nfc-keychain.jpg'
```

After publishing, verify the public URL in a browser and test the WhatsApp buttons.
