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
