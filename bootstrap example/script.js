"use strict";

// Sticky Navigation
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);

//   if (window.scrollY === 101) {
//     document.querySelector(".navbar").classList.add("sticky");
//   }
// });

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY === 200) {
    document.querySelector("#navbar").setAttribute("style", "top: 0;");
  }
});
