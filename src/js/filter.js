//Filter products
//parameter passed from button (Parameter same as category):
const categoriesBtn = document.querySelectorAll(
  ".shop-page__categories button"
);

categoriesBtn.forEach((categoryBtn) => {
  categoryBtn.addEventListener("click", () => {
    const productType = categoryBtn.classList[0];
    const items = document.querySelectorAll(".shop-list-item");
    items.forEach((item) => {
      if (productType === "All" || item.classList.contains(productType)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

let count = 1;
categoriesBtn.forEach((categoryBtn) => {
  categoryBtn.addEventListener("click", () => {
    const productType = categoryBtn.classList[0];
    const items = document.querySelectorAll(".shop-list-item");

    let count = 1;

    items.forEach((item) => {
      if (productType === "All" || item.classList.contains(productType)) {
        item.classList.remove("hide");

        let countElement = item.querySelector(".shop-list-item__count span");
        const paddedCount = count.toString().padStart(2, "0");
        countElement.textContent = paddedCount;
        count++;
      } else {
        item.classList.add("hide");
      }
    });
  });
});
