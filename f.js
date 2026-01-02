// year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu toggle
const btn = document.getElementById("menuBtn");
const links = document.getElementById("navLinks");

btn.addEventListener("click", () => {
  links.classList.toggle("open");
});

// close menu after click on mobile
links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => links.classList.remove("open"));
});
