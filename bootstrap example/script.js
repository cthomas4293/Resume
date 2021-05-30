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

// Intersection Observer API
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
