"use strict";

const accordionItems = document.querySelectorAll(".navigation-menu .menu-list");

accordionItems.forEach((item) => {
  const accordionButton = item.querySelector(".accordion-btn");
  const accordionContent = item.querySelector(".accordion-menu");

  accordionButton.addEventListener("click", () => {
    const expanded = accordionButton.getAttribute("aria-expanded") === "true";

    accordionButton.setAttribute("aria-expanded", !expanded);

    if (expanded) {
      accordionContent.setAttribute("hidden", "true");
    } else {
      accordionContent.removeAttribute("hidden");
    }
  });
});
