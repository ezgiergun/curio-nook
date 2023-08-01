(function () {
  // Shrink logo with transform:scale
  let logo = document.getElementById("mysvg");
  let header = document.querySelector("header");
  let anchor = document.querySelector("a");
  let home = document.getElementById("homepage");
  let shopPage = document.querySelector(".shop-page");
  let headerDiv = document.getElementById("__frame");
  let homeDiv = document.querySelector(".home");
  let pageDiv = document.querySelector(".page");
  let footer = document.getElementById("footer");

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if (value === 0) logo.style.transform = "scale(1.0)";
    if (value > 0 && value < 114) logo.style.transform = "scale(0.85)";

    if (value > 114 && value < 228) {
      logo.style.transform = "scale(0.7)";
      header.classList.add("scrolled");
    }
    if (value < 114) header.classList.remove("scrolled");
    if (value > 228 && value < 342) logo.style.transform = "scale(0.4)";
    if (value > 342 && value < 442) logo.style.transform = "scale(0.3)";
    if (value > 442 && value < 858) logo.style.transform = "scale(0)";

    if (value > 856) {
      window.location.href = "src/pages/shop.html";
    }
  });
})();
