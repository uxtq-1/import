document.addEventListener('DOMContentLoaded', () => {
  /* ----------------------------------------------------
     1) LANGUAGE TOGGLE, SIDE MENU, SERVICES SUB-MENU
        (Already Covered in Previous Code)
  ---------------------------------------------------- */

 /* language-toggle.js or main.js */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Set default to English if no preference is found
  let currentLanguage = localStorage.getItem("language") || "en";

  // 2. Desktop & Mobile toggle buttons (IDs can vary)
  const langToggleDesktop = document.getElementById("language-toggle-desktop");
  const langToggleMobile = document.getElementById("language-toggle-mobile");

  // 3. Function to set all text to EN or ES
  function updateLanguage(lang) {
    const translatableElements = document.querySelectorAll("[data-en]");
    translatableElements.forEach((el) => {
      el.textContent = lang === "en"
        ? el.getAttribute("data-en")
        : el.getAttribute("data-es");
    });
  }

  // 4. Initialize the page to the stored or default language
  updateLanguage(currentLanguage);
  document.body.setAttribute("lang", currentLanguage);

  // 5. Update the toggle button labels
  function setToggleButtonLabels() {
    if (langToggleDesktop) {
      langToggleDesktop.textContent = currentLanguage === "en" ? "ES" : "EN";
    }
    if (langToggleMobile) {
      // If you have a <span> inside your button, target that
      const mobileSpan = langToggleMobile.querySelector("span") || langToggleMobile;
      mobileSpan.textContent = currentLanguage === "en" ? "ES" : "EN";
    }
  }
  setToggleButtonLabels();

  // 6. Toggle function
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    localStorage.setItem("language", currentLanguage);
    updateLanguage(currentLanguage);
    document.body.setAttribute("lang", currentLanguage);
    setToggleButtonLabels();
  }

  // 7. Event listeners on the toggle buttons
  if (langToggleDesktop) {
    langToggleDesktop.addEventListener("click", toggleLanguage);
  }
  if (langToggleMobile) {
    langToggleMobile.addEventListener("click", toggleLanguage);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Set default to English if no preference is found
  let currentLanguage = localStorage.getItem("language") || "en";

  // 2. Desktop & Mobile toggle buttons (IDs can vary)
  const langToggleDesktop = document.getElementById("language-toggle-desktop");
  const langToggleMobile = document.getElementById("language-toggle-mobile");

  // 3. Function to set all text to EN or ES
  function updateLanguage(lang) {
    const translatableElements = document.querySelectorAll("[data-en]");
    translatableElements.forEach((el) => {
      el.textContent = lang === "en"
        ? el.getAttribute("data-en")
        : el.getAttribute("data-es");
    });
  }

  // 4. Initialize the page to the stored or default language
  updateLanguage(currentLanguage);
  document.body.setAttribute("lang", currentLanguage);

  // 5. Update the toggle button labels
  function setToggleButtonLabels() {
    if (langToggleDesktop) {
      langToggleDesktop.textContent = currentLanguage === "en" ? "ES" : "EN";
    }
    if (langToggleMobile) {
      // If you have a <span> inside your button, target that
      const mobileSpan = langToggleMobile.querySelector("span") || langToggleMobile;
      mobileSpan.textContent = currentLanguage === "en" ? "ES" : "EN";
    }
  }
  setToggleButtonLabels();

  // 6. Toggle function
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    localStorage.setItem("language", currentLanguage);
    updateLanguage(currentLanguage);
    document.body.setAttribute("lang", currentLanguage);
    setToggleButtonLabels();
  }

  // 7. Event listeners on the toggle buttons
  if (langToggleDesktop) {
    langToggleDesktop.addEventListener("click", toggleLanguage);
  }
  if (langToggleMobile) {
    langToggleMobile.addEventListener("click", toggleLanguage);
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
