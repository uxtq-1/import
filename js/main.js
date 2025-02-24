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
 /* ----------------------------------------------------
     2) Modal Functionality (Join & Contact)
  ---------------------------------------------------- */
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const closeModalButtons = document.querySelectorAll('[data-close]');
  const floatingIcons = document.querySelectorAll('.floating-icon'); // opens modals

  // Open modals
  floatingIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const modalId = icon.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
      }
    });
  });

  // Close modals via close button
  closeModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('.modal-overlay');
      parentModal.classList.remove('active');
    });
  });

  // Close modals if user clicks outside the content area or presses ESC
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
    overlay.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        overlay.classList.remove('active');
      }
    });
  });

  /* ----------------------------------------------------
     3) Simple Form Submit => Alert
  ---------------------------------------------------- */
  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for joining! We have received your details.');
      joinForm.reset();
      // Optionally close the modal
      document.getElementById('join-modal').classList.remove('active');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting us! We will be in touch soon.');
      contactForm.reset();
      // Optionally close the modal
      document.getElementById('contact-modal').classList.remove('active');
    });
  }
});
