const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

revealItems.forEach((item) => observer.observe(item));

const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !match);
    });
  });
});

const starterIdeas = [
  {
    name: "Auto Shop Demo",
    industry: "Auto shop",
    text: "A smart NFC tag for customers that opens service history, next oil change reminder, loyalty points, and WhatsApp booking.",
    budget: "$150–$500"
  },
  {
    name: "Restaurant Owner",
    industry: "Restaurant",
    text: "A QR/NFC table card that opens menu, specials, Google review link, and WhatsApp catering contact.",
    budget: "$50–$150"
  },
  {
    name: "Home Project",
    industry: "Home / apartment",
    text: "Smart lighting and temperature-based ventilation demo controlled from a phone.",
    budget: "$500–$1,500"
  }
];

const ideasList = document.getElementById("ideasList");
const ideaForm = document.getElementById("ideaForm");
const clearIdeas = document.getElementById("clearIdeas");
const whatsappIdea = document.getElementById("whatsappIdea");

function getIdeas() {
  const saved = localStorage.getItem("jaks_demo_ideas");
  if (!saved) return starterIdeas;
  try {
    return JSON.parse(saved);
  } catch {
    return starterIdeas;
  }
}

function saveIdeas(ideas) {
  localStorage.setItem("jaks_demo_ideas", JSON.stringify(ideas));
}

function renderIdeas() {
  if (!ideasList) return;
  const ideas = getIdeas();

  ideasList.innerHTML = ideas.map((idea) => `
    <article class="idea-card">
      <strong>${escapeHtml(idea.name)}</strong>
      <small>${escapeHtml(idea.industry)} • ${escapeHtml(idea.budget)}</small>
      <p>${escapeHtml(idea.text)}</p>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

ideaForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const idea = {
    name: document.getElementById("ideaName").value.trim(),
    industry: document.getElementById("ideaIndustry").value,
    text: document.getElementById("ideaText").value.trim(),
    budget: document.getElementById("ideaBudget").value
  };

  const ideas = [idea, ...getIdeas()];
  saveIdeas(ideas);
  renderIdeas();
  ideaForm.reset();
});

clearIdeas?.addEventListener("click", () => {
  localStorage.removeItem("jaks_demo_ideas");
  renderIdeas();
});

function updateWhatsAppIdea() {
  const name = document.getElementById("ideaName")?.value || "";
  const industry = document.getElementById("ideaIndustry")?.value || "";
  const text = document.getElementById("ideaText")?.value || "";
  const budget = document.getElementById("ideaBudget")?.value || "";

  const message = `Hi JAKS Engineering Lab, I have a project idea.%0A%0AName: ${encodeURIComponent(name)}%0AIndustry: ${encodeURIComponent(industry)}%0ABudget: ${encodeURIComponent(budget)}%0AIdea: ${encodeURIComponent(text)}`;
  whatsappIdea.href = `https://wa.me/18452704608?text=${message}`;
}

["ideaName", "ideaIndustry", "ideaText", "ideaBudget"].forEach((id) => {
  document.getElementById(id)?.addEventListener("input", updateWhatsAppIdea);
});

const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const type = document.getElementById("contactType").value;
  const message = document.getElementById("contactMessage").value.trim();

  const whatsappText = `Hi JAKS Engineering Lab, I want to request a project.%0A%0AName: ${encodeURIComponent(name)}%0AProject type: ${encodeURIComponent(type)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/18452704608?text=${whatsappText}`, "_blank", "noopener,noreferrer");
});

renderIdeas();
updateWhatsAppIdea();

document.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  document.querySelectorAll(".orb").forEach((orb, index) => {
    const speed = index === 0 ? 18 : -14;
    orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
