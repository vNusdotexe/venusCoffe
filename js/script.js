// Toggle Class Active

const navbarNav = document.querySelector(".navbar-nav");

// ketika food menu di klik

document.querySelector("#food-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan menu

const food = document.querySelector("#food-menu");

document.addEventListener("click", function (e) {
  if (!food.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
