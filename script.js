const nav = document.getElementById("navbar");

window.onscroll = function () {
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "black";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};
