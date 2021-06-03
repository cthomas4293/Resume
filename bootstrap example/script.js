"use strict";

const navbar = document.querySelector("#navbar");
const stickyNavbar = document.querySelector("#secondary--navbar");
const mainNavbar = document.querySelector("#navbar");
const expContent = document.querySelector(".Wrapper--experience");

const expSections = document.querySelectorAll(".exp");
expSections.forEach((element) => element.classList.add("section--hidden"));

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
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.2,
});

expSections.forEach((element) => sectionObserver.observe(element));

// Smooth Scroll
const sections = document.querySelectorAll("section");

const mainLinks = mainNavbar.querySelectorAll(".nav-link");
const stickyLinks = stickyNavbar.querySelectorAll(".nav-link");

mainLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList[1].startsWith("skill")) {
      window.scrollTo({
        top: sections[0].getBoundingClientRect().top,
        behavior: "smooth",
      });
    } else if (e.target.classList[1].startsWith("edu")) {
      window.scrollTo({
        top: sections[1].getBoundingClientRect().top,
        behavior: "smooth",
      });
    } else if (e.target.classList[1].startsWith("exp")) {
      window.scrollTo({
        top: sections[2].getBoundingClientRect().top,
        behavior: "smooth",
      });
    } else if (e.target.classList[1].startsWith("con")) {
      window.scrollTo({
        top: sections[3].getBoundingClientRect().top,
        behavior: "smooth",
      });
    }
  })
);
