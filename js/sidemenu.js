"use strict";

const brandBar = document.querySelector(".brand-bar");
const navigationMenu = document.querySelector(".navigation-menu");
const closeBtn = document.querySelector(".close-btn");

function sideMenu() {
  navigationMenu.classList.add("active");
  closeBtn.classList.remove("active");
}

brandBar.addEventListener("click", sideMenu);
