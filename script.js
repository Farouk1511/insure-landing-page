const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");
let panel = "hamburger";
burger.addEventListener("click", () => {
  if (panel === "hamburger") {
    burger.src = "./images/icon-close.svg";
    panel = "close";
  } else if (panel === "close") {
    burger.src = "./images/icon-hamburger.svg";
    panel = "hamburger";
  }

  mobileNav.classList.toggle("show");
});
