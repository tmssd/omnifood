// SET CURRENT YEAR:
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MAKE MOBILE NAVIGATION WORK:
// wrong way
/* const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navLinkEls = document.querySelectorAll(".main-nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navLinkEls.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
}); */

// right way - using event delegation
const headerEl = document.querySelector(".header");
headerEl.addEventListener("click", function (event) {
  if (event.target.classList.value.includes("icon-mobile-nav" || "main-nav-link")) {
    headerEl.classList.toggle("nav-open");
  }
});

// STICKY NAVIGATION:
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
