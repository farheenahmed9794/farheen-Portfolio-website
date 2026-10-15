/* ==========================================================
   PERSONAL PORTFOLIO - JAVASCRIPT
   Handles:
   1. Mobile Menu Toggle
   2. Active Link Highlighting on Scroll
   3. Contact Form Submission Feedback
   4. Auto-Updating Year in Footer
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (navMenu.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
      } else {
        icon.classList.replace("fa-xmark", "fa-bars");
      }
    });
  }

  // Close mobile navigation drawer when any link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        const icon = mobileToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
      }
    });
  });

  // 2. ScrollSpy (Highlight active navbar tab based on screen position)
  const sections = document.querySelectorAll("section[id]");

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav-menu a[href*='${sectionId}']`)
          ?.classList.add("active");
      } else {
        document
          .querySelector(`.nav-menu a[href*='${sectionId}']`)
          ?.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavOnScroll);

  // 3. Contact Form Submission (Client-Side Interactivity)
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop full-page reload

      // Form validation / processing simulation
      formStatus.textContent = "Thank you! Your message has been sent successfully.";
      formStatus.style.color = "#16a34a"; // Standard Green

      // Reset fields after sending
      contactForm.reset();

      // Clear the notification after 5 seconds
      setTimeout(() => {
        formStatus.textContent = "";
      }, 5000);
    });
  }

  // 4. Set dynamic year in the footer
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});