export function ServiceCard(service) {
  return `
    <article class="service-card card-hover">
      <div class="service-icon" aria-hidden="true">${service.icon}</div>
      <p class="card-kicker">${service.category}</p>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>
  `;
}
