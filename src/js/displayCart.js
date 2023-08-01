(function () {
  //Set and Show the same cart count for every cart-button on pages:
  let cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;

  const cartButtons = document.querySelectorAll(".cart-button");
  const cartSpan = document.querySelector(".cart-page__intro>span");
  cartButtons.forEach((cartButton) => {
    cartButton.innerHTML = `CART (${cartCount})`;
  });
  cartSpan.innerHTML = `CART (${cartCount})`;
  //Display:
  const parentDiv = document.querySelector(".cart-overlay__line-items");

  const generateCartItemHTML = (item) => {
    const { productName, price, image, productClass } = item;

    return `<div class="cart-line-item__content">
    <div class="cart-line-item__top">
      <div class="cart-line-item__title">
        <a href="/products/${productClass}">${productName}</a>
      </div>
      ${price}
    </div>
    <div class="cart-line-item__options">
      <div class="cart-line-item__options-info">
        <span>COLOR: Vermillion</span>
        <div class="cart-line-item__controls">
          QTY:
          <button type="button" class="cart-line-item__button">-</button>
          <span class="cart-line-item__quantity">1</span>
          <button type="button" class="cart-line-item__button">+</button>
        </div>
      </div>
      <a href="/products/${productClass}" class="cart-line-item__image">
        <img src="${image}" />
      </a>
    </div>
    <button type="button" class="cart-line-item__remove-button">(Remove)</button>
  </div>`;
  };

  const display = () => {
    const cardItems = JSON.parse(localStorage.getItem("cartItems"));

    cardItems.forEach((item) => {
      const newItem = document.createElement("div");

      newItem.className = "cart-line-item";
      newItem.innerHTML = generateCartItemHTML(item);

      parentDiv.prepend(newItem);
      const qty = newItem.querySelector(".cart-line-item__quantity");

      qty.textContent = item.productQty;
    });
  };
  display();

  //Local storage quantity fn:

  const qtyChangePlus = (item) => {
    const products = JSON.parse(localStorage.getItem("cartItems")) || [];
    const deItem = item.querySelector(".cart-line-item__title");
    const deItemName = deItem.querySelector("a").textContent;
    const deItemNameFind = products.find(
      (product) => product.productName === deItemName
    );
    if (deItemNameFind) {
      deItemNameFind.productQty++;

      localStorage.setItem("cartItems", JSON.stringify(products));
    }
  };
  const qtyChangeMinus = (item) => {
    const products = JSON.parse(localStorage.getItem("cartItems")) || [];
    const deItem = item.querySelector(".cart-line-item__title");
    const deItemName = deItem.querySelector("a").textContent;
    const deItemNameFind = products.find(
      (product) => product.productName === deItemName
    );
    if (deItemNameFind) {
      deItemNameFind.productQty--;
      if (deItemNameFind.productQty === 0) {
        const itemIndex = products.findIndex(
          (product) => product.productName === deItemNameFind.productName
        );
        if (itemIndex !== -1) {
          products.splice(itemIndex, 1);
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(products));
    }
  };

  // Quantity display:
  const allItems = document.querySelectorAll(".cart-line-item");
  const checkoutBtn = document.querySelector(".cart-page__checkout-button");
  const intro = document.querySelector(".cart-page__intro");
  const exitBtn = intro.querySelector("button");

  allItems.forEach((item) => {
    const qtyBtns = item.querySelectorAll(".cart-line-item__button");
    const decBtn = qtyBtns[0];
    const incBtn = qtyBtns[1];
    const removeBtn = item.querySelector(".cart-line-item__remove-button");
    const qty = item.querySelector(".cart-line-item__quantity");

    decBtn.addEventListener("click", () => {
      if (qty.textContent > 0) {
        qty.textContent--;
      }
      if (qty.textContent === "0") {
        item.remove();
      }
      cartCount--;
      localStorage.setItem("cartCount", JSON.stringify(cartCount));
      cartButtons.forEach((cartButton) => {
        cartButton.innerHTML = `CART (${cartCount})`;
      });
      cartSpan.innerHTML = cartButtons[0].innerHTML;
      qtyChangeMinus(item);
      calculateTotal();
    });
    incBtn.addEventListener("click", () => {
      qty.textContent++;
      cartCount++;
      localStorage.setItem("cartCount", cartCount);
      cartButtons.forEach((cartButton) => {
        cartButton.innerHTML = `CART (${cartCount})`;
      });
      cartSpan.innerHTML = cartButtons[0].innerHTML;
      qtyChangePlus(item);
      calculateTotal();
    });
    removeBtn.addEventListener("click", () => {
      item.remove();
      const deItem = item.querySelector(".cart-line-item__title");
      const deItemName = deItem.querySelector("a").textContent;
      const products = JSON.parse(localStorage.getItem("cartItems")) || [];
      const deItemNameIndex = products.findIndex(
        (product) => product.productName === deItemName
      );
      if (deItemNameIndex !== -1) {
        products.splice(deItemNameIndex, 1);
      }
      localStorage.setItem("cartItems", JSON.stringify(products));

      cartCount -= qty.textContent;
      cartSpan.innerHTML = `CART (${cartCount})`;
      localStorage.setItem("cartCount", cartCount);
      cartButtons.forEach((cartButton) => {
        cartButton.innerHTML = `CART (${cartCount})`;
      });
      calculateTotal();
    });
  });

  exitBtn.addEventListener("click", () => {
    window.history.go(-1);
  });

  //Subtotal calculating:
  const calculateTotal = () => {
    const sub = document.querySelector(".cart-page__subtotal");
    const subPrice = sub.querySelectorAll("span")[1];
    let prices = [];
    const cardItems = JSON.parse(localStorage.getItem("cartItems"));
    const slicedPrice = cardItems.map((item) => {
      return Number(item.price.slice(1)) * item.productQty;
    });
    const sum = slicedPrice.reduce((acc, curr) => acc + curr, 0);
    subPrice.textContent = `$${sum}`;
  };
  calculateTotal();
})();
