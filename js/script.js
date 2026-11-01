// Enable scroll-reveal styles only when JavaScript is available.
document.documentElement.classList.add("js-ready");

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navItems = navLinks.querySelectorAll("a");

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navLinks.classList.toggle("is-open", !isOpen);
});

navItems.forEach((item) => item.addEventListener("click", closeMenu));

// Reveal elements as they enter the viewport.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

// Keep the footer year current.
document.querySelector("#current-year").textContent = new Date().getFullYear();
