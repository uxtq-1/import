document.addEventListener('DOMContentLoaded', () => {
  /* ----------------------------------------------------
     1) LANGUAGE TOGGLE, SIDE MENU, SERVICES SUB-MENU
        (Already Covered in Previous Code)
  ---------------------------------------------------- */

  // ... [Your existing code for language toggle, side menu, sub-menu, etc.]

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
