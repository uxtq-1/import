/***************************************************
 * MAIN.JS
 * Manages:
 *  - Mobile Nav Slide
 *  - Services Submenu Toggle
 *  - Click Outside to Close
 *  - Floating Icon Overlays (Contact & Join)
 *  - Language Toggle
 *  - Chat Stub
 ****************************************************/

/* ========== MOBILE NAV ========== */
const mobileNav = document.getElementById('mobileNav');
const mobileNavTrigger = document.getElementById('mobileNavTrigger');
const closeNavBtn = document.getElementById('closeNavBtn');

// Open nav when clicking the trigger [<]
if (mobileNavTrigger) {
  mobileNavTrigger.addEventListener('click', () => {
    mobileNav.classList.add('open');
  });
}

// Close nav when clicking the X
if (closeNavBtn) {
  closeNavBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
}

// Close nav if clicking outside of it
document.addEventListener('click', (e) => {
  // If user clicks outside nav AND outside trigger
  if (!mobileNav.contains(e.target) && !mobileNavTrigger.contains(e.target)) {
    mobileNav.classList.remove('open');
  }
});

/* ========== SERVICES SUBMENU ========== */
const servicesToggle = document.getElementById('servicesToggle');
const servicesSubmenu = document.getElementById('servicesSubmenu');

if (servicesToggle && servicesSubmenu) {
  servicesToggle.addEventListener('click', (e) => {
    e.preventDefault();
    servicesSubmenu.classList.toggle('open');
  });
}

/* ========== LANGUAGE TOGGLE ========== */
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    if (langToggle.innerText === 'EN') {
      langToggle.innerText = 'ES';
      alert('Language switched to Spanish');
      // Insert your real multi-language logic here
    } else {
      langToggle.innerText = 'EN';
      alert('Language switched to English');
    }
  });
}

/* ========== CHAT BUTTON ========== */
const chatBtn = document.getElementById('chatBtn');
if (chatBtn) {
  chatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Chat triggered!');
    // Insert chat widget logic here
  });
}

/* ========== FLOATING ICONS: CONTACT/ JOIN FORMS ========== */
const contactUsBtn = document.getElementById('contactUsBtn');
const joinUsBtn = document.getElementById('joinUsBtn');
const contactFormOverlay = document.getElementById('contactFormOverlay');
const joinFormOverlay = document.getElementById('joinFormOverlay');
const closeContactForm = document.getElementById('closeContactForm');
const closeJoinForm = document.getElementById('closeJoinForm');

// Show Contact Us form
if (contactUsBtn && contactFormOverlay) {
  contactUsBtn.addEventListener('click', () => {
    contactFormOverlay.style.display = 'flex'; // Using flex for centering
  });
}

// Show Join Us form
if (joinUsBtn && joinFormOverlay) {
  joinUsBtn.addEventListener('click', () => {
    joinFormOverlay.style.display = 'flex';
  });
}

// Close Contact Us form
if (closeContactForm && contactFormOverlay) {
  closeContactForm.addEventListener('click', () => {
    contactFormOverlay.style.display = 'none';
  });
}

// Close Join Us form
if (closeJoinForm && joinFormOverlay) {
  closeJoinForm.addEventListener('click', () => {
    joinFormOverlay.style.display = 'none';
  });
}

// Also close overlays if user clicks outside the form
document.addEventListener('click', (e) => {
  if (contactFormOverlay && contactFormOverlay.style.display === 'flex') {
    const popup = contactFormOverlay.querySelector('.popup-form');
    if (!popup.contains(e.target) && e.target !== contactUsBtn) {
      contactFormOverlay.style.display = 'none';
    }
  }
  if (joinFormOverlay && joinFormOverlay.style.display === 'flex') {
    const popup2 = joinFormOverlay.querySelector('.popup-form');
    if (!popup2.contains(e.target) && e.target !== joinUsBtn) {
      joinFormOverlay.style.display = 'none';
    }
  }
});
