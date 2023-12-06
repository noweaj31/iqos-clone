"use strict";

// const accordionItems = document.querySelectorAll(".navigation-menu .menu-list");

// accordionItems.forEach((item) => {
//   const accordionButton = item.querySelector(".accordion-btn");
//   const accordionContent = item.querySelector(".accordion-menu");

//   accordionButton.addEventListener("click", () => {
//     const expanded = accordionButton.getAttribute("aria-expanded") === "true";

//     accordionButton.setAttribute("aria-expanded", !expanded);

//     if (expanded) {
//       accordionContent.setAttribute("hidden", "true");
//     } else {
//       accordionContent.removeAttribute("hidden");
//     }
//   });
// });

const accordionBtns = document.querySelectorAll(".accordion-btn");
const accordionMenu = document.querySelectorAll(".accordion-menu");

function accordionMenuToggle() {
  const accordionMenu = this.parentNode;
  accordionMenu.classList.toggle("is-active");
}

accordionBtns.forEach(function (button) {
  button.addEventListener("click", accordionMenuToggle);
});
