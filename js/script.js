const hamburger = document.querySelector(".hamburger");
const topNav = document.querySelector(".top-nav-right");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  topNav.classList.toggle("active");
  navBar.classList.toggle("active");
});
