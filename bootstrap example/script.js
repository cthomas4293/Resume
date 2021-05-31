"use strict";

const navbar = document.querySelector(".main-navbar");
const stickyNavbar = document.querySelector("#navbar");
const expContent = document.querySelector(".Wrapper--experience");

const sections = document.querySelectorAll(".exp");
sections.forEach((element) => element.classList.add("section--hidden"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sticky Nav
const obsCallback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting == false) {
      stickyNavbar.setAttribute("style", "top: 0;");
    } else {
      stickyNavbar.setAttribute("style", "top: -150;");
      stickyNavbar.setAttribute("style", "transition-duration: 0;");
    }
  });
};

const obsOptions = {
  root: null, // Viewport is threshold
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(navbar);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reveal Sections
const sectionReveal = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  // console.log(entry.target);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  console.log("observe");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.2,
});

sections.forEach((element) => sectionObserver.observe(element));
