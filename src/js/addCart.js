(function () {
  const cartButtons = document.querySelectorAll(".cart-button");
  const addButton = document.querySelector(".add-to-cart");
  const productName =
    document.querySelector(".details-section")?.firstElementChild?.textContent;
  const productClass =
    document.getElementById("__layout").firstElementChild.className;
  const price = document.querySelector(".price-product")?.textContent;
  const image = document
    .querySelector(".active")
    .firstElementChild.getAttribute("src");

  //Set and Show the same cart count for every cart-button on pages:
  cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
  cartButtons.forEach((cartButton) => {
    cartButton.innerHTML = `CART (${cartCount})`;
  });

  //Add products to the cart:

  const product = {
    productName: productName,
    productClass: productClass,
    price: price,
    image: image,
    productQty: 1,
  };

  const addFunction = () => {
    cartCount++;
    localStorage.setItem("cartCount", JSON.stringify(cartCount));

    cartButtons.forEach((cartButton) => {
      cartButton.innerHTML = `CART (${cartCount})`;
    });
    addButton.innerHTML = "ADDED";
    addButton?.setAttribute("disabled", "disabled");
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    window.location.href = "../pages/cart.html";
  };
  addButton?.addEventListener("click", addFunction);
})();
