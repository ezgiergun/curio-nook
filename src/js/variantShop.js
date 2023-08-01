(function () {
  // listen colored dot buttons:
  const colorButtons = document.querySelectorAll(
    ".shop-list-item__variant-dot"
  );
  const imageButtons = document.querySelectorAll(".shop-list-item__image a");
  const images = document.querySelectorAll(
    ".shop-list-item__variant-image > img"
  );

  imageButtons.forEach((imgbutton) => {
    imgbutton.addEventListener("click", () => {
      localStorage.setItem("clickedColor", imgbutton.id);
    });
  });

  // Hover changes images on shop page:

  colorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      localStorage.setItem("clickedColor", event.target.id);
    });

    button.addEventListener("mouseover", () => {
      const id = button.id;
      images.forEach((image) => {
        const imageId = image.parentElement.id;
        if (imageId == id) {
          image.parentElement.classList.add("active");
        } else {
          image.parentElement.classList.remove("active");
        }
      });
    });

    button.addEventListener("mouseout", () => {
      images.forEach((image) => {
        image.parentElement.classList.remove("active");
      });
    });
  });
})();
