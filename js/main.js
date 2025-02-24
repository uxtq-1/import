document.addEventListener('DOMContentLoaded', function() {

  /* ==================================================================
       1) Theme Toggle
       ================================================================== */
  const themeToggleButton = document.getElementById('theme-toggle');
  const bodyElement = document.body;
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Initialize theme
  bodyElement.setAttribute('data-theme', savedTheme);
  if (themeToggleButton) {
    themeToggleButton.textContent = savedTheme === 'light' ? 'Dark' : 'Light';

    themeToggleButton.addEventListener('click', function() {
      const currentTheme = bodyElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        bodyElement.setAttribute('data-theme', 'dark');
        themeToggleButton.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
      } else {
        bodyElement.setAttribute('data-theme', 'light');
        themeToggleButton.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  /* ==================================================================
       2) Language Toggle
       ================================================================== */
  const languageToggleMobile = document.getElementById('language-toggle-mobile');
  const languageToggleButton = document.getElementById('language-toggle');
  let currentLanguage = localStorage.getItem('language') || 'en'; // Default to English

  // Set the language attribute on the body
  document.body.setAttribute('lang', currentLanguage);

  // Function to update text based on current language
  function updateLanguage() {
    const translationElements = document.querySelectorAll('[data-en]');
    translationElements.forEach((element) => {
      element.textContent = (currentLanguage === 'en')
        ? element.getAttribute('data-en')
        : element.getAttribute('data-es');
    });
  }

  // Initialize language
  updateLanguage();

  // Set the language toggle button's text
  if (languageToggleButton) {
    languageToggleButton.textContent = (currentLanguage === 'en') ? 'ES' : 'EN';
  }
  if (languageToggleMobile) {
    languageToggleMobile.textContent = (currentLanguage === 'en') ? 'ES' : 'EN';
  }

  // Add event listener to language toggle button
  languageToggleButton && languageToggleButton.addEventListener('click', function() {
    currentLanguage = (currentLanguage === 'en') ? 'es' : 'en'; // Toggle between English and Spanish
    localStorage.setItem('language', currentLanguage); // Store language preference
    document.body.setAttribute('lang', currentLanguage); // Update language attribute
    updateLanguage(); // Update the text content
    if (languageToggleButton) {
      languageToggleButton.textContent = (currentLanguage === 'en') ? 'ES' : 'EN'; // Change button text
    }
    if (languageToggleMobile) {
      languageToggleMobile.textContent = (currentLanguage === 'en') ? 'ES' : 'EN'; // Change button text for mobile
    }
  });

});
  /* ==================================================================
       3) Modal Functionality
       ================================================================== */
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const closeModalButtons = document.querySelectorAll('[data-close]');
  const floatingIcons = document.querySelectorAll('.floating-icon');

  // Open modals
  floatingIcons.forEach((icon) => {
    icon.addEventListener('click', function() {
      const modalId = icon.getAttribute('data-modal');
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        modalElement.classList.add('active');
        modalElement.focus();
      }
    });
  });

  // Close modals
  closeModalButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
      const parentOverlay = btn.closest('.modal-overlay');
      if (parentOverlay) {
        parentOverlay.classList.remove('active');
      }
    });
  });

  // Close modal on clicking outside or pressing ESC
  modalOverlays.forEach((overlay) => {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
    overlay.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        overlay.classList.remove('active');
      }
    });
  });

  /* ==================================================================
       4) Mobile Services Toggle
       ================================================================== */
  const servicesToggle = document.getElementById('services-toggle');
  const mobileServicesMenu = document.getElementById('mobile-services-menu');

  if (servicesToggle && mobileServicesMenu) {
    servicesToggle.addEventListener('click', function() {
      mobileServicesMenu.classList.toggle('active');  // Toggle the visibility of the services menu
    });
  }

});
