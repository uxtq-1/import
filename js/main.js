document.addEventListener('DOMContentLoaded', () => {
  /* -----------------------------
     1) Language Toggle
  ----------------------------- */
  let currentLanguage = localStorage.getItem('language') || 'en';

  // Desktop & Mobile Toggle Buttons
  const langToggleDesktop = document.getElementById('language-toggle-desktop');
  const langToggleMobile = document.getElementById('language-toggle-mobile');

  // Function to update text
  function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
      el.textContent = (lang === 'en')
        ? el.getAttribute('data-en')
        : el.getAttribute('data-es');
    });
  }

  // Apply initial language
  document.body.setAttribute('lang', currentLanguage);
  updateLanguage(currentLanguage);
  if (langToggleDesktop) langToggleDesktop.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
  if (langToggleMobile) langToggleMobile.querySelector('span').textContent = currentLanguage === 'en' ? 'ES' : 'EN';

  // Toggle function
  function toggleLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';
    localStorage.setItem('language', currentLanguage);
    updateLanguage(currentLanguage);
    document.body.setAttribute('lang', currentLanguage);

    // Update button labels
    if (langToggleDesktop) langToggleDesktop.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    if (langToggleMobile) langToggleMobile.querySelector('span').textContent = currentLanguage === 'en' ? 'ES' : 'EN';
  }

  // Event Listeners for toggles
  if (langToggleDesktop) {
    langToggleDesktop.addEventListener('click', toggleLanguage);
  }
  if (langToggleMobile) {
    langToggleMobile.addEventListener('click', toggleLanguage);
  }

  /* -----------------------------
     2) Main Menu Slide-In/Out
  ----------------------------- */
  const menuOpenBtn = document.getElementById('menu-open');
  const menuCloseBtn = document.getElementById('menu-close');
  const rightSideMenu = document.getElementById('rightSideMenu');

  if (menuOpenBtn && menuCloseBtn && rightSideMenu) {
    menuOpenBtn.addEventListener('click', () => {
      rightSideMenu.classList.add('open');
    });
    menuCloseBtn.addEventListener('click', () => {
      rightSideMenu.classList.remove('open');
      // Also close services sub-menu if open
      servicesSubMenu.classList.remove('open');
    });
  }

  /* -----------------------------
     3) Services Sub-Menu Upward
  ----------------------------- */
  const servicesTrigger = document.querySelector('.services-trigger button');
  const servicesSubMenu = document.getElementById('servicesSubMenu');

  if (servicesTrigger && servicesSubMenu) {
    servicesTrigger.addEventListener('click', (e) => {
      // Toggle the sub-menu
      servicesSubMenu.classList.toggle('open');
      e.stopPropagation(); // prevent clicks from closing it immediately
    });
  }

  // Close sub-menu when user taps outside or selects an item
  document.addEventListener('click', (evt) => {
    const isClickInsideSubMenu = servicesSubMenu.contains(evt.target);
    const isClickOnTrigger = servicesTrigger.contains(evt.target);
    if (!isClickInsideSubMenu && !isClickOnTrigger) {
      servicesSubMenu.classList.remove('open');
    }
  });

  /* (Optional) If you have "Join Us" or "Contact Us" forms,
     you can add a simple "Thank You" alert on submit:
  */
  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! We have received your submission.');
      joinForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! We will be in touch soon.');
      contactForm.reset();
    });
  }
});
