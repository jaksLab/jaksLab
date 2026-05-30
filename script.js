import { siteContent } from './data/siteContent.js';
import { Header } from './components/Header.js';
import { HeroSection } from './components/HeroSection.js';
import { HowItWorksSection } from './components/HowItWorksSection.js';
import { AboutSection } from './components/AboutSection.js';
import { ContactSection } from './components/ContactSection.js';
import { Footer } from './components/Footer.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';
import { renderServices } from './scripts/renderServices.js';
import { renderProducts } from './scripts/renderProducts.js';
import { renderGallery } from './scripts/renderGallery.js';
import { renderProjects } from './scripts/renderProjects.js';
import { createWhatsAppLink, setHTML } from './scripts/utils.js';

function renderStaticSections() {
  setHTML('#header', Header(siteContent));
  setHTML('#hero', HeroSection(siteContent));
  setHTML('#how-it-works', HowItWorksSection(siteContent));
  setHTML('#about', AboutSection(siteContent));
  setHTML('#contact', ContactSection(siteContent));
  setHTML('#footer', Footer(siteContent));
  setHTML('#whatsapp-button', WhatsAppButton(siteContent.contact.whatsappMessage));
}

function setupMobileMenu() {
  const toggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupQuoteForm() {
  const form = document.querySelector('#quote-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'Not provided';
    const need = formData.get('need') || 'Custom project';
    const message = formData.get('message') || 'I would like more information.';
    const whatsappMessage = `Hi JAKS Engineering Lab, my name is ${name}. I need help with: ${need}. Details: ${message}`;
    window.open(createWhatsAppLink(whatsappMessage), '_blank', 'noopener,noreferrer');
  });
}


function setupMediaCarousels() {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const images = [...carousel.querySelectorAll('[data-carousel-image]')];
    const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
    const buttons = [...carousel.querySelectorAll('[data-carousel-action]')];
    if (images.length <= 1) return;

    let activeIndex = Number(carousel.dataset.carouselIndex || 0);
    let touchStartX = 0;
    let touchEndX = 0;

    const updateCarousel = (nextIndex) => {
      activeIndex = (nextIndex + images.length) % images.length;
      carousel.dataset.carouselIndex = String(activeIndex);
      images.forEach((image, index) => {
        image.classList.toggle('media-carousel__image--active', index === activeIndex);
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle('media-carousel__dot--active', index === activeIndex);
        dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        updateCarousel(button.dataset.carouselAction === 'next' ? activeIndex + 1 : activeIndex - 1);
      });
    });

    dots.forEach((dot) => {
      dot.addEventListener('click', () => updateCarousel(Number(dot.dataset.carouselDot)));
    });

    carousel.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (event) => {
      touchEndX = event.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) < 40) return;
      updateCarousel(swipeDistance < 0 ? activeIndex + 1 : activeIndex - 1);
    }, { passive: true });

    updateCarousel(activeIndex);
  });
}

function setupRevealAnimation() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function verifyImagePaths() {
  document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('error', () => {
      console.warn(`Image failed to load: ${image.getAttribute('src')}`);
    }, { once: true });
  });
}

function init() {
  document.querySelector('#app-status')?.remove();
  renderStaticSections();
  renderServices();
  renderProducts();
  renderGallery();
  renderProjects();
  setupMobileMenu();
  setupMediaCarousels();
  setupQuoteForm();
  setupRevealAnimation();
  verifyImagePaths();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}

export { init };
