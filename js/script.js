// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navLinkEls = document.querySelectorAll(".main-nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// TOTO: refine this code using event delegation
navLinkEls.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, // observing in the viewport(null = viewport)
    threshold: 0, // means that we will have an event as soon as 0% of the hero section is inside of the viewport
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
