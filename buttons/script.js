const navbarToggle = document.getElementById("js-navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  navbarToggle.classList.toggle("open");
});