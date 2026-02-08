const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "black";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
