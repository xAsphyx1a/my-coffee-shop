// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// When Hamburger Menu onClick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click outside Sidebar to Remove it
const Hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
