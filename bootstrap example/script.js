"use strict";

// Sticky Navigation
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);

//   if (window.scrollY === 101) {
//     document.querySelector(".navbar").classList.add("sticky");
//   }
// });

const navbar = document.querySelector(".main-navbar");
const stickyNavbar = document.querySelector("#navbar");
const expContent = document.querySelector(".Wrapper--experience");

const sections = document.querySelectorAll(".exp");
sections.forEach((element) => element.classList.add("section--hidden"));

// const initialCoords = navbar.getBoundingClientRect();

// console.log(initialCoords);

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);

//   if (window.scrollY >= initialCoords.bottom) {
//     stickyNavbar.setAttribute("style", "top: 0;");
//   } else {
//     stickyNavbar.setAttribute("style", "top: -150;");
//     stickyNavbar.setAttribute("style", "transition-duration: 0;");
//   }
// });

// Sticky Nav
const obsCallback = function (entries, observer) {
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

// Reveal Sections

const sectionReveal = function (entries) {
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

sections.forEach((element) => sectionObserver.observe(element));
