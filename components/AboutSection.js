export function AboutSection({ about }) {
  const highlights = about.highlights.map((item) => `<li>${item}</li>`).join('');

  return `
    <div class="container section-inner about-grid">
      <div class="about-image reveal">
        <img src="${about.image}" alt="JAKS Engineering Lab workspace and custom builds" loading="lazy" />
      </div>
      <div class="about-copy reveal">
        <p class="eyebrow">${about.eyebrow}</p>
        <h2>${about.title}</h2>
        <p>${about.body}</p>
        <ul class="trust-grid">${highlights}</ul>
      </div>
    </div>
  `;
}
