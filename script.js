const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const progress = document.querySelector('.scroll-progress');
const navLinks = [...document.querySelectorAll('.menu a')];
const langButtons = [...document.querySelectorAll('.lang-btn')];
const revealItems = document.querySelectorAll('.reveal');

const setMenuState = (isOpen) => {
  if (!menu || !menuToggle) return;
  menu.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menu.classList.contains('open');
  setMenuState(!isOpen);
});

document.addEventListener('click', (event) => {
  if (!menu || !menuToggle) return;
  if (!menu.classList.contains('open')) return;
  if (menu.contains(event.target) || menuToggle.contains(event.target)) return;
  setMenuState(false);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false);
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const highlightActiveSection = () => {
  const scrollPos = window.scrollY + 140;
  let activeSectionIndex = 0;

  sections.forEach((section, i) => {
    if (scrollPos >= section.offsetTop) {
      activeSectionIndex = i;
    }
  });

  navLinks.forEach((link, i) => {
    link.classList.toggle('active', i === activeSectionIndex);
  });
};

const updateProgress = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? Math.min((window.scrollY / height) * 100, 100) : 0;
  if (progress) progress.style.width = `${ratio}%`;
};

window.addEventListener('scroll', () => {
  highlightActiveSection();
  updateProgress();
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('show'));
}

const i18n = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'header.cta': 'Start your project',
    'hero.eyebrow': 'Engineering with intent',
    'hero.title': 'We build products that look premium and work brilliantly.',
    'hero.copy': 'JAKS Engineering Lab combines design, electronics, mechanics, and automation to help brands launch reliable, market-ready solutions.',
    'hero.primary': 'View projects',
    'hero.secondary': 'How we work',
    'hero.tag1': '3D Product Development',
    'hero.tag2': 'Smart NFC + IoT Systems',
    'hero.tag3': 'Mechanical Innovation',
    'cap.1.title': '3D Printing',
    'cap.1.body': 'Design to functional part',
    'cap.2.title': 'Electronics & IoT',
    'cap.2.body': 'Connected experiences',
    'cap.3.title': 'Mechanical Design',
    'cap.3.body': 'From concept to assembly',
    'cap.4.title': 'Innovation',
    'cap.4.body': 'Inventing what does not exist',
    'cap.5.title': 'Maintenance',
    'cap.5.body': 'Reliable long-term operation',
    'projects.title': 'Featured <span>projects</span>',
    'projects.tag2': 'Mechanical',
    'projects.tag3': 'Premium visual',
    'projects.p1': 'A smart branded product that opens WhatsApp, website, portfolio, or proposals in one tap.',
    'projects.p2': 'Durable daily-use accessory designed for maintenance teams, warehouses, and industrial workflows.',
    'projects.p3': 'High-impact display products for creators, stream setups, gifting, and branded environments.',
    'projects.p4': 'Branded packaging with product samples and NFC/QR touchpoints for sales-ready presentations.',
    'about.title': 'About <span>JAKS</span>',
    'about.copy': 'We are a mechatronics and innovation lab. We create professional solutions that merge utility, aesthetics, and performance.',
    'about.li1': 'Mechatronics engineering',
    'about.li2': '3D design and fabrication',
    'about.li3': 'Embedded electronics + IoT',
    'about.li4': 'Mechanical systems',
    'about.li5': 'Automation and maintenance',
    'stats.1': 'Core engineering disciplines integrated',
    'stats.2': 'From idea to production-ready prototype',
    'stats.3': 'Designed to look premium and sell better',
    'services.title': 'Our <span>services</span>',
    'services.s1': '3D Product Design',
    'services.s1b': 'Rapid prototyping and production-grade parts.',
    'services.s2': 'Electronics & IoT',
    'services.s2b': 'Smart hardware, sensors, and connected workflows.',
    'services.s3': 'Mechanical Engineering',
    'services.s3b': 'CAD, assemblies, and performance-focused mechanisms.',
    'services.s4': 'Automation',
    'services.s4b': 'Operational efficiency through intelligent systems.',
    'services.s5': 'Maintenance Solutions',
    'services.s5b': 'Preventive and corrective technical support.',
    'services.s6': 'Engineering Consulting',
    'services.s6b': 'Strategic guidance to scale inventions into products.',
    'idea.title': 'Have an idea?',
    'idea.subtitle': 'We can engineer it into reality.',
    'idea.copy': 'Tell us your challenge and we will design a complete technical path to launch.',
    'idea.primary': 'Send your idea',
    'idea.secondary': 'Chat on WhatsApp',
    'contact.title': 'Contact',
    'contact.copy': 'Need to build a custom product, prototype, or technical solution? Let\'s talk.',
    'contact.phone': 'Phone:',
    'contact.location': 'Location:',
    'form.name': 'Name',
    'form.type': 'Project type',
    'form.pick': 'Select one',
    'form.message': 'Message',
    'form.cta': 'Prepare WhatsApp message',
    'form.name.placeholder': 'Your name',
    'form.message.placeholder': 'Tell us what you need...',
    'form.option.nfc': 'NFC / Smart product',
    'form.option.3d': '3D design / Prototype',
    'form.option.automation': 'Automation / IoT',
    'form.option.led': 'LED display',
    'form.option.branding': 'Branding / Sample box',
    'form.option.other': 'Other',
    'footer.brand': 'Engineering and innovation in service of your ideas.',
    'footer.links': 'Links',
    'footer.follow': 'Follow',
    'footer.contact': 'Contact',
    'footer.copy': '© 2026 JAKS Engineering Lab. All rights reserved.'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre JAKS',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'header.cta': 'Inicia tu proyecto',
    'hero.eyebrow': 'Ingeniería con propósito',
    'hero.title': 'Creamos productos premium que se ven profesionales y funcionan de forma brillante.',
    'hero.copy': 'JAKS Engineering Lab integra diseño, electrónica, mecánica y automatización para ayudar a marcas a lanzar soluciones confiables y listas para mercado.',
    'hero.primary': 'Ver proyectos',
    'hero.secondary': 'Cómo trabajamos',
    'hero.tag1': 'Desarrollo de producto 3D',
    'hero.tag2': 'Sistemas NFC + IoT',
    'hero.tag3': 'Innovación mecánica',
    'cap.1.title': 'Impresión 3D',
    'cap.1.body': 'Del diseño a la pieza funcional',
    'cap.2.title': 'Electrónica e IoT',
    'cap.2.body': 'Experiencias conectadas',
    'cap.3.title': 'Diseño mecánico',
    'cap.3.body': 'Del concepto al ensamble',
    'cap.4.title': 'Innovación',
    'cap.4.body': 'Inventamos lo que no existe',
    'cap.5.title': 'Mantenimiento',
    'cap.5.body': 'Operación confiable a largo plazo',
    'projects.title': 'Proyectos <span>destacados</span>',
    'projects.tag2': 'Mecánica',
    'projects.tag3': 'Visual premium',
    'projects.p1': 'Producto inteligente de marca que abre WhatsApp, sitio web, portafolio o propuestas con un toque.',
    'projects.p2': 'Accesorio durable para uso diario en mantenimiento, almacenes y procesos industriales.',
    'projects.p3': 'Displays de alto impacto para creadores, setups, regalos y ambientes de marca.',
    'projects.p4': 'Packaging de marca con muestras y puntos NFC/QR para presentaciones comerciales.',
    'about.title': 'Sobre <span>JAKS</span>',
    'about.copy': 'Somos un laboratorio de mecatrónica e innovación. Creamos soluciones profesionales que combinan utilidad, estética y desempeño.',
    'about.li1': 'Ingeniería mecatrónica',
    'about.li2': 'Diseño y fabricación 3D',
    'about.li3': 'Electrónica embebida + IoT',
    'about.li4': 'Sistemas mecánicos',
    'about.li5': 'Automatización y mantenimiento',
    'stats.1': 'Disciplinas de ingeniería integradas',
    'stats.2': 'De idea a prototipo listo para producción',
    'stats.3': 'Diseñado para verse premium y vender mejor',
    'services.title': 'Nuestros <span>servicios</span>',
    'services.s1': 'Diseño de producto 3D',
    'services.s1b': 'Prototipado rápido y piezas de nivel productivo.',
    'services.s2': 'Electrónica e IoT',
    'services.s2b': 'Hardware inteligente, sensores y flujos conectados.',
    'services.s3': 'Ingeniería mecánica',
    'services.s3b': 'CAD, ensamblajes y mecanismos enfocados en rendimiento.',
    'services.s4': 'Automatización',
    'services.s4b': 'Eficiencia operacional con sistemas inteligentes.',
    'services.s5': 'Soluciones de mantenimiento',
    'services.s5b': 'Soporte técnico preventivo y correctivo.',
    'services.s6': 'Consultoría de ingeniería',
    'services.s6b': 'Guía estratégica para escalar inventos a productos.',
    'idea.title': '¿Tienes una idea?',
    'idea.subtitle': 'Podemos convertirla en realidad.',
    'idea.copy': 'Cuéntanos tu reto y diseñamos la ruta técnica completa para lanzarlo.',
    'idea.primary': 'Enviar idea',
    'idea.secondary': 'Chatear por WhatsApp',
    'contact.title': 'Contacto',
    'contact.copy': '¿Necesitas construir un producto, prototipo o solución técnica? Hablemos.',
    'contact.phone': 'Teléfono:',
    'contact.location': 'Ubicación:',
    'form.name': 'Nombre',
    'form.type': 'Tipo de proyecto',
    'form.pick': 'Selecciona una opción',
    'form.message': 'Mensaje',
    'form.cta': 'Preparar mensaje de WhatsApp',
    'form.name.placeholder': 'Tu nombre',
    'form.message.placeholder': 'Cuéntanos qué necesitas...',
    'form.option.nfc': 'NFC / Producto inteligente',
    'form.option.3d': 'Diseño 3D / Prototipo',
    'form.option.automation': 'Automatización / IoT',
    'form.option.led': 'Display LED',
    'form.option.branding': 'Branding / Caja de muestras',
    'form.option.other': 'Otro',
    'footer.brand': 'Ingeniería e innovación al servicio de tus ideas.',
    'footer.links': 'Enlaces',
    'footer.follow': 'Síguenos',
    'footer.contact': 'Contacto',
    'footer.copy': '© 2026 JAKS Engineering Lab. Todos los derechos reservados.'
  }
};

const translateTextNodes = (lang) => {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = i18n[lang][key];
    if (!value) return;
    if (value.includes('<span>')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
};

const translatePlaceholders = (lang) => {
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = i18n[lang][key];
    if (value) el.setAttribute('placeholder', value);
  });
};

const translateOptions = (lang) => {
  document.querySelectorAll('[data-i18n-option]').forEach((el) => {
    const key = el.dataset.i18nOption;
    const value = i18n[lang][key];
    if (value) el.textContent = value;
  });
};

const persistLanguage = (lang) => {
  try {
    localStorage.setItem('jaksLang', lang);
  } catch (error) {
    console.warn('Unable to persist language preference.', error);
  }
};

const getPersistedLanguage = () => {
  try {
    return localStorage.getItem('jaksLang');
  } catch (error) {
    return null;
  }
};

const applyLanguage = (lang) => {
  if (!i18n[lang]) return;
  document.documentElement.lang = lang;
  translateTextNodes(lang);
  translatePlaceholders(lang);
  translateOptions(lang);
  persistLanguage(lang);
  langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
};

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const preferredLang = getPersistedLanguage() || 'en';
applyLanguage(preferredLang);
highlightActiveSection();
updateProgress();

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const type = document.getElementById('contactType').value.trim();
  const msg = document.getElementById('contactMessage').value.trim();
  const lang = document.documentElement.lang;
  const message =
    lang === 'es'
      ? `Hola JAKS, tengo un proyecto.\n\nNombre: ${name}\nTipo: ${type}\nMensaje: ${msg}`
      : `Hi JAKS, I have a project.\n\nName: ${name}\nType: ${type}\nMessage: ${msg}`;

  window.open(`https://wa.me/18452704608?text=${encodeURIComponent(message)}`, '_blank');
});
