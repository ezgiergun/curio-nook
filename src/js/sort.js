(function () {
  const navButtons = document.querySelectorAll(".shop-page__categories button");
  const menuMobileBtn = document.getElementById("menu-mobile");
  const divShop = document.getElementById("shop-div");
  const menuDiv = document.getElementById("menu-div");
  const mainHeader = document.querySelector(".main-header");
  const exitBtn = document.querySelector(".close");
  const cartButtons = document.querySelectorAll(".cart-button");

  //Set and Show the same cart count for every cart-button on pages:
  let cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;

  cartButtons.forEach((cartButton) => {
    cartButton.innerHTML = `CART (${cartCount})`;
  });
  //Sorting:
  const handleClick = (event) => {
    navButtons.forEach((navButton) => {
      navButton.classList.remove("active");
    });

    event.target.classList.add("active");
  };

  navButtons.forEach((navButton) => {
    navButton.addEventListener("click", handleClick);
  });

  ////Mobile menu:
  menuMobileBtn.addEventListener("click", () => {
    divShop.style.display = "none";
    menuDiv.style.display = "";
    mainHeader.remove();
  });

  exitBtn.addEventListener("click", () => {
    menuDiv.style.display = "none";

    divShop.style.display = "";

    divShop.prepend(mainHeader);
  });
})();
